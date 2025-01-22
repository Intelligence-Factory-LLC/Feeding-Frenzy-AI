using NAudio.Wave;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FeedingFrenzy.Admin.Business.VoiceAgents
{

	public class AudioProcessor
	{
		private WaveFileWriter waveWriter;
		private bool isInitialized = false;

		// Constructor: Pass the file path where the WAV file will be saved
		public AudioProcessor(string outputPath)
		{
			InitializeWaveFile(outputPath);
		}

		// Initialize the WaveFileWriter to write PCM data in WAV format
		private void InitializeWaveFile(string outputPath)
		{
			var waveFormat = WaveFormat.CreateMuLawFormat(8000, 1); // 8000 Hz, Mono, Mu-law format
			waveWriter = new WaveFileWriter(outputPath, waveFormat);
			isInitialized = true;
		}

		// Process and detect speech while writing the PCM data to the WAV file incrementally
		public void WriteToWav(byte[] audioBytes)
		{
			if (!isInitialized)
			{
				throw new InvalidOperationException("Wave file not initialized.");
			}

			waveWriter.Write(audioBytes, 0, audioBytes.Length);
		}

		// Close the WAV file after writing
		public void Close()
		{
			if (waveWriter != null)
			{
				waveWriter.Dispose();
				isInitialized = false;
			}
		}
	}

	public class AudioProcessorPCM
	{
		public WaveFileWriter waveWriter;
		private bool isInitialized = false;
		public string File;

		// Constructor: Pass the file path where the WAV file will be saved
		public AudioProcessorPCM(string outputPath)
		{
			File = outputPath;
			InitializeWaveFile(outputPath);
		}

		// Initialize the WaveFileWriter to write PCM data in WAV format
		private void InitializeWaveFile(string outputPath)
		{
			// Initialize the WaveFileWriter with a PCM format (16-bit PCM, 8000 Hz, Mono)
			var waveFormat = WaveFormat.CreateCustomFormat(WaveFormatEncoding.Pcm, 8000, 1, 8000 * 2, 2, 16);
			waveWriter = new WaveFileWriter(outputPath, waveFormat);
			isInitialized = true;
		}

		public void WriteToWav(byte[] audioBytes)
		{
			if (!isInitialized)
			{
				throw new InvalidOperationException("Wave file not initialized.");
			}

			// Decode G.711 uLaw to PCM using the existing AudioUtils
			byte[] pcmData = AudioUtils.DecodeMuLawToPcm(audioBytes);

			waveWriter.Write(pcmData, 0, pcmData.Length);
		}

		// Close the WAV file after writing
		public void Close()
		{
			if (waveWriter != null)
			{
				waveWriter.Dispose();
				isInitialized = false;
			}
		}
	}



	public static class AudioUtils
	{
		// Set up the wave format for G.711 µ-law (8 kHz sample rate, 1 channel, 8 bits per sample)
		private static WaveFormat GetMuLawWaveFormat()
		{
			return WaveFormat.CreateMuLawFormat(8000, 1); // 8000 Hz, Mono, µ-law encoded
		}

		// Decode µ-law to PCM using NAudio's wave stream capabilities
		public static byte[] DecodeMuLawToPcm(byte[] muLawData)
		{
			// Create a memory stream for the input µ-law data
			using (var muLawStream = new RawSourceWaveStream(new MemoryStream(muLawData), GetMuLawWaveFormat()))
			{
				// Create the destination PCM stream
				using (var pcmStream = WaveFormatConversionStream.CreatePcmStream(muLawStream))
				{
					using (var memoryStream = new MemoryStream())
					{
						pcmStream.CopyTo(memoryStream); // Convert µ-law to PCM
						return memoryStream.ToArray(); // Return PCM data as a byte array
					}
				}
			}
		}

		public static void CombineWavFiles(string leftFilePath, string rightFilePath, string outputFilePath)
		{
			try
			{
				using (var leftReader = new AudioFileReader(leftFilePath))
				using (var rightReader = new AudioFileReader(rightFilePath))
				{
					if (leftReader.WaveFormat.SampleRate != rightReader.WaveFormat.SampleRate)
					{
						throw new ArgumentException("Error: Input files have different sample rates.");
					}

					var outputFormat = new WaveFormat(leftReader.WaveFormat.SampleRate, 16, 2); // 16-bit, stereo

					using (var writer = new WaveFileWriter(outputFilePath, outputFormat))
					{
						float[] leftBuffer = new float[leftReader.WaveFormat.SampleRate];
						float[] rightBuffer = new float[rightReader.WaveFormat.SampleRate];

						int bytesRead;
						while ((bytesRead = leftReader.Read(leftBuffer, 0, leftBuffer.Length)) > 0)
						{
							rightReader.Read(rightBuffer, 0, rightBuffer.Length);

							// Interleave samples
							float[] combinedBuffer = new float[bytesRead * 2];
							for (int i = 0, j = 0; i < bytesRead; i++)
							{
								combinedBuffer[j++] = leftBuffer[i];
								combinedBuffer[j++] = rightBuffer[i];
							}

							writer.WriteSamples(combinedBuffer, 0, combinedBuffer.Length);
						}
					}
				}
			}
			catch (Exception ex)
			{
				throw new InvalidOperationException($"Error combining WAV files: {ex.Message}", ex);
			}
		}
	}


	public static class VoiceActivityDetector
	{
		// Define a threshold for silence. Adjust this value based on your testing.
		private const double SilenceThreshold = 500.0;

		public static Tuple<bool, double> IsSpeechDetected(byte[] pcmData)
		{
			double sumSquares = 0.0;
			foreach (var sample in pcmData)
			{
				sumSquares += sample * sample;
			}

			double rms = Math.Sqrt(sumSquares / pcmData.Length);
			return new Tuple<bool, double>(rms > SilenceThreshold, rms);
		}
	}
}
