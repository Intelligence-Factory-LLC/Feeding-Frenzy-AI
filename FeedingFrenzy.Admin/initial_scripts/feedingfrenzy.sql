USE [master]
GO
ALTER DATABASE [feedingfrenzy] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [feedingfrenzy].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [feedingfrenzy] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [feedingfrenzy] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [feedingfrenzy] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [feedingfrenzy] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [feedingfrenzy] SET ARITHABORT OFF 
GO
ALTER DATABASE [feedingfrenzy] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [feedingfrenzy] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [feedingfrenzy] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [feedingfrenzy] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [feedingfrenzy] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [feedingfrenzy] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [feedingfrenzy] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [feedingfrenzy] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [feedingfrenzy] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [feedingfrenzy] SET  DISABLE_BROKER 
GO
ALTER DATABASE [feedingfrenzy] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [feedingfrenzy] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [feedingfrenzy] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [feedingfrenzy] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [feedingfrenzy] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [feedingfrenzy] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [feedingfrenzy] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [feedingfrenzy] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [feedingfrenzy] SET  MULTI_USER 
GO
ALTER DATABASE [feedingfrenzy] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [feedingfrenzy] SET DB_CHAINING OFF 
GO
ALTER DATABASE [feedingfrenzy] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [feedingfrenzy] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [feedingfrenzy] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [feedingfrenzy] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [feedingfrenzy] SET QUERY_STORE = OFF
GO
USE [feedingfrenzy]
GO
/****** Object:  UserDefinedFunction [dbo].[LeftOfFirstFn]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE FUNCTION [dbo].[LeftOfFirstFn](@input NVARCHAR(max), @search NVARCHAR(max)) 
RETURNS NVARCHAR(max)
AS 
BEGIN

	DECLARE @position INT
	DECLARE @res NVARCHAR(max)
	SET @position = CHARINDEX(@search, @input)
	
	IF (@position <> 0)
	BEGIN
		SET @res = LEFT(@input, @position - 1)
	END
	ELSE
	BEGIN
		SET @res = @input
	END
	
	RETURN @res
END

GO
/****** Object:  UserDefinedFunction [dbo].[RightOfFirstFn]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE FUNCTION [dbo].[RightOfFirstFn](@input NVARCHAR(max), @search NVARCHAR(max)) 
RETURNS NVARCHAR(max)
AS 
BEGIN

	DECLARE @position INT
	DECLARE @res NVARCHAR(max)
	SET @position = CHARINDEX(@search, @input)
	
	IF (@position <> 0)
	BEGIN
		SET @res = RIGHT(@input, LEN(@input) - @position - LEN(@search))
	END
	ELSE
	BEGIN
		SET @res = @input
	END
	
	RETURN @res
END

GO
/****** Object:  Table [dbo].[Agents]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Agents](
	[AgentID] [int] IDENTITY(1,1) NOT NULL,
	[AgentName] [nvarchar](255) NOT NULL,
	[ContextSettings] [nvarchar](max) NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
	[Description] [nvarchar](max) NULL,
	[AgentTypeID] [int] NULL,
 CONSTRAINT [PK_Agents] PRIMARY KEY CLUSTERED 
(
	[AgentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AgentTypes]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AgentTypes](
	[AgentTypeID] [int] IDENTITY(1,1) NOT NULL,
	[AgentTypeName] [nvarchar](255) NOT NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
 CONSTRAINT [PK_AgentTypes] PRIMARY KEY CLUSTERED 
(
	[AgentTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AreaCodes]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AreaCodes](
	[AreaCodeID] [int] IDENTITY(1,1) NOT NULL,
	[AreaCode] [nvarchar](255) NOT NULL,
	[TimeZone] [nvarchar](255) NULL,
	[Region] [nvarchar](255) NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
 CONSTRAINT [PK_AreaCodes] PRIMARY KEY CLUSTERED 
(
	[AreaCodeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Authorizations]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Authorizations](
	[AuthorizationID] [int] IDENTITY(1,1) NOT NULL,
	[AuthorizationToken] [nvarchar](255) NOT NULL,
	[RefreshToken] [nvarchar](255) NOT NULL,
	[Expiration] [datetime] NULL,
	[UserID] [int] NOT NULL,
	[LastRefreshedDate] [datetime] NULL,
	[LastActivityDate] [datetime] NULL,
	[IsExpired] [bit] NOT NULL,
	[IsRevoked] [bit] NOT NULL,
	[IsEncrypted] [bit] NOT NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
 CONSTRAINT [PK_Authorizations] PRIMARY KEY CLUSTERED 
(
	[AuthorizationID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BlockedEmails]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BlockedEmails](
	[BlockedEmailID] [int] IDENTITY(1,1) NOT NULL,
	[Email] [nvarchar](255) NOT NULL,
	[Notes] [nvarchar](max) NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
 CONSTRAINT [PK_BlockedEmails] PRIMARY KEY CLUSTERED 
(
	[BlockedEmailID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Calls]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Calls](
	[CallID] [int] IDENTITY(1,1) NOT NULL,
	[CallingPhone] [nvarchar](255) NOT NULL,
	[CalledPhone] [nvarchar](255) NOT NULL,
	[Duration] [float] NOT NULL,
	[IsRecorded] [bit] NOT NULL,
	[RecordingURL] [nvarchar](512) NULL,
	[IsConference] [bit] NOT NULL,
	[IsStreamed] [bit] NOT NULL,
	[IsIncoming] [bit] NOT NULL,
	[CallStatus] [nvarchar](255) NULL,
	[LastCallStatusUpdate] [datetime] NULL,
	[IsTranscribed] [bit] NOT NULL,
	[IsEmptyTranscription] [bit] NOT NULL,
	[TranscriptionSummary] [nvarchar](max) NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
	[Transcription] [nvarchar](max) NULL,
	[CallKey] [nvarchar](255) NOT NULL,
 CONSTRAINT [PK_Calls] PRIMARY KEY CLUSTERED 
(
	[CallID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Campaigns]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Campaigns](
	[CampaignID] [int] IDENTITY(1,1) NOT NULL,
	[SourceID] [int] NOT NULL,
	[CampaignName] [nvarchar](255) NOT NULL,
	[CampaignKey] [nvarchar](255) NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
 CONSTRAINT [PK_Campaigns] PRIMARY KEY CLUSTERED 
(
	[CampaignID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Contents]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Contents](
	[ContentID] [int] IDENTITY(1,1) NOT NULL,
	[ContentName] [nvarchar](255) NOT NULL,
	[Content] [nvarchar](max) NULL,
	[LastUpdated] [datetime] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[Data] [nvarchar](max) NULL,
	[ContentTypeID] [int] NULL,
 CONSTRAINT [PK_Contents] PRIMARY KEY CLUSTERED 
(
	[ContentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ContentTypes]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContentTypes](
	[ContentTypeID] [int] IDENTITY(1,1) NOT NULL,
	[ContentTypeName] [nvarchar](255) NOT NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
 CONSTRAINT [PK_ContentTypes] PRIMARY KEY CLUSTERED 
(
	[ContentTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Domains]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Domains](
	[DomainID] [int] IDENTITY(1,1) NOT NULL,
	[DomainName] [nvarchar](255) NOT NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
 CONSTRAINT [PK_Domains] PRIMARY KEY CLUSTERED 
(
	[DomainID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmailAddresses]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmailAddresses](
	[EmailAddressID] [int] IDENTITY(1,1) NOT NULL,
	[Email] [nvarchar](255) NOT NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
	[IsBlocked] [bit] NOT NULL,
	[IsInternal] [bit] NOT NULL,
	[DomainID] [int] NOT NULL,
 CONSTRAINT [PK_EmailAddresses] PRIMARY KEY CLUSTERED 
(
	[EmailAddressID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmailHistories]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmailHistories](
	[EmailHistoryID] [int] IDENTITY(1,1) NOT NULL,
	[To] [nvarchar](255) NOT NULL,
	[From] [nvarchar](255) NOT NULL,
	[EmailTemplateID] [int] NOT NULL,
	[Subject] [nvarchar](255) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[IsPending] [bit] NOT NULL,
	[IsSent] [bit] NOT NULL,
	[Data] [nvarchar](max) NULL,
	[LastUpdated] [datetime] NOT NULL,
 CONSTRAINT [PK_EmailHistories] PRIMARY KEY CLUSTERED 
(
	[EmailHistoryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmailTemplates]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmailTemplates](
	[EmailTemplateID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[EmailSubject] [nvarchar](255) NULL,
	[EmailText] [nvarchar](max) NULL,
	[EmailParams] [nvarchar](255) NULL,
	[FromAddress] [nvarchar](255) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
	[Data] [nvarchar](max) NULL,
 CONSTRAINT [PK_EmailTemplates] PRIMARY KEY CLUSTERED 
(
	[EmailTemplateID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Features]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Features](
	[FeatureID] [int] IDENTITY(1,1) NOT NULL,
	[FeatureName] [nvarchar](255) NOT NULL,
	[Version] [nvarchar](255) NULL,
	[IsEnabled] [bit] NOT NULL,
	[SettingsAssembly] [nvarchar](255) NULL,
	[SettingsClass] [nvarchar](255) NOT NULL,
	[Settings] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
	[Data] [nvarchar](max) NULL,
 CONSTRAINT [PK_Features] PRIMARY KEY CLUSTERED 
(
	[FeatureID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Files]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Files](
	[FileID] [int] IDENTITY(1,1) NOT NULL,
	[FileTypeID] [int] NOT NULL,
	[PhysicalPath] [nvarchar](255) NULL,
	[FileName] [nvarchar](255) NULL,
	[FileDescription] [nvarchar](255) NULL,
	[Label] [nvarchar](255) NULL,
	[Data] [nvarchar](max) NULL,
	[IsDeleted] [bit] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
 CONSTRAINT [PK_Files] PRIMARY KEY CLUSTERED 
(
	[FileID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FileTypes]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FileTypes](
	[FileTypeID] [int] IDENTITY(1,1) NOT NULL,
	[FileType] [nvarchar](255) NOT NULL,
	[AllowedExtensions] [nvarchar](255) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
 CONSTRAINT [PK_FileTypes] PRIMARY KEY CLUSTERED 
(
	[FileTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LeadAddresses]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LeadAddresses](
	[LastUpdated] [datetime] NOT NULL,
	[Data] [nvarchar](max) NULL,
	[AddressType] [nvarchar](255) NULL,
	[Phone] [nvarchar](255) NULL,
	[Fax] [nvarchar](255) NULL,
	[LeadAddressID] [int] IDENTITY(1,1) NOT NULL,
	[LeadID] [int] NOT NULL,
	[Name] [nvarchar](255) NULL,
	[Line1] [nvarchar](255) NULL,
	[Line2] [nvarchar](255) NULL,
	[City] [nvarchar](255) NULL,
	[State] [nvarchar](255) NULL,
	[Zip] [nvarchar](20) NULL,
	[Country] [nvarchar](255) NULL,
	[DateCreated] [datetime] NOT NULL,
 CONSTRAINT [PK_LeadAddresses] PRIMARY KEY CLUSTERED 
(
	[LeadAddressID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LeadContacts]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LeadContacts](
	[LeadContactID] [int] IDENTITY(1,1) NOT NULL,
	[LeadID] [int] NOT NULL,
	[Name] [nvarchar](255) NULL,
	[Title] [nvarchar](255) NULL,
	[Phone] [nvarchar](255) NULL,
	[Email] [nvarchar](255) NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
 CONSTRAINT [PK_LeadContacts] PRIMARY KEY CLUSTERED 
(
	[LeadContactID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LeadNotes]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LeadNotes](
	[LeadNoteTypeID] [int] NULL,
	[LeadNoteID] [int] IDENTITY(1,1) NOT NULL,
	[LeadID] [int] NOT NULL,
	[SalesRepresentativeID] [int] NOT NULL,
	[Notes] [nvarchar](max) NOT NULL,
	[FollowUpDate] [datetime] NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
 CONSTRAINT [PK_LeadNotes] PRIMARY KEY CLUSTERED 
(
	[LeadNoteID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LeadNoteTypes]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LeadNoteTypes](
	[LeadNoteTypeID] [int] IDENTITY(1,1) NOT NULL,
	[LeadNoteTypeName] [nvarchar](255) NOT NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
 CONSTRAINT [PK_LeadNoteTypes] PRIMARY KEY CLUSTERED 
(
	[LeadNoteTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LeadRelationships]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LeadRelationships](
	[LeadRelationshipID] [int] IDENTITY(1,1) NOT NULL,
	[LeadRelationshipTypeID] [int] NOT NULL,
	[LeadID] [int] NOT NULL,
	[RelatedLeadID] [int] NOT NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
 CONSTRAINT [PK_LeadRelationships] PRIMARY KEY CLUSTERED 
(
	[LeadRelationshipID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LeadRelationshipTypes]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LeadRelationshipTypes](
	[LeadRelationshipTypeID] [int] IDENTITY(1,1) NOT NULL,
	[LeadRelationshipTypeName] [nvarchar](255) NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
 CONSTRAINT [PK_LeadRelationshipTypes] PRIMARY KEY CLUSTERED 
(
	[LeadRelationshipTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Leads]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Leads](
	[LeadSubStatusID] [int] NULL,
	[FollowUpDate] [datetime] NULL,
	[LeadID] [int] IDENTITY(1,1) NOT NULL,
	[Company] [nvarchar](255) NULL,
	[FirstName] [nvarchar](255) NULL,
	[LastName] [nvarchar](255) NULL,
	[Phone] [nvarchar](255) NULL,
	[Email] [nvarchar](255) NULL,
	[Address] [nvarchar](255) NULL,
	[Address2] [nvarchar](255) NULL,
	[City] [nvarchar](255) NULL,
	[State] [nvarchar](255) NULL,
	[ZipCode] [nvarchar](20) NULL,
	[SourceID] [int] NOT NULL,
	[LastContactedDate] [datetime] NULL,
	[Priority] [int] NOT NULL,
	[LeadStatusID] [int] NOT NULL,
	[OpportunitySize] [int] NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
	[SalesRepresentativeID] [int] NULL,
	[ImportKey] [nvarchar](255) NULL,
	[GeneratedDate] [datetime] NULL,
	[CampaignID] [int] NULL,
	[AccountID] [int] NULL,
 CONSTRAINT [PK_Leads] PRIMARY KEY CLUSTERED 
(
	[LeadID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LeadStatuses]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LeadStatuses](
	[LeadStatusID] [int] IDENTITY(1,1) NOT NULL,
	[StatusName] [nvarchar](255) NOT NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
 CONSTRAINT [PK_LeadStatuses] PRIMARY KEY CLUSTERED 
(
	[LeadStatusID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LeadSubStatuses]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LeadSubStatuses](
	[LeadStatusID] [int] NOT NULL,
	[SubStatusName] [nvarchar](255) NOT NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
	[LeadSubStatusID] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_LeadSubStatuses] PRIMARY KEY CLUSTERED 
(
	[LeadSubStatusID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LeadTags]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LeadTags](
	[LeadTagID] [int] IDENTITY(1,1) NOT NULL,
	[LeadID] [int] NOT NULL,
	[TagID] [int] NOT NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
 CONSTRAINT [PK_LeadTags] PRIMARY KEY CLUSTERED 
(
	[LeadTagID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Messages]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Messages](
	[MessageID] [int] IDENTITY(1,1) NOT NULL,
	[MessageText] [nvarchar](max) NOT NULL,
	[SentByPhone] [nvarchar](255) NOT NULL,
	[ReceivedByPhone] [nvarchar](255) NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
	[Data] [nvarchar](max) NULL,
	[IsDelivered] [bit] NOT NULL,
	[IsReceived] [bit] NOT NULL,
	[IsDismissed] [bit] NOT NULL,
 CONSTRAINT [PK_Messages] PRIMARY KEY CLUSTERED 
(
	[MessageID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PageLayouts]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PageLayouts](
	[PageLayoutID] [int] IDENTITY(1,1) NOT NULL,
	[Url] [nvarchar](512) NOT NULL,
	[Handler] [nvarchar](512) NOT NULL,
	[IsEnabled] [bit] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
	[PageTitle] [nvarchar](255) NULL,
	[SiteID] [int] NULL,
 CONSTRAINT [PK_PageLayouts] PRIMARY KEY CLUSTERED 
(
	[PageLayoutID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PhoneNumbers]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PhoneNumbers](
	[PhoneNumberID] [int] IDENTITY(1,1) NOT NULL,
	[PhoneNumber] [nvarchar](255) NOT NULL,
	[PhoneType] [nvarchar](255) NULL,
	[IsInternal] [bit] NOT NULL,
	[CallerName] [nvarchar](255) NULL,
	[Country] [nvarchar](255) NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
	[IsBlocked] [bit] NOT NULL,
	[IsSpam] [bit] NOT NULL,
 CONSTRAINT [PK_PhoneNumbers] PRIMARY KEY CLUSTERED 
(
	[PhoneNumberID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RawEmailAddresses]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RawEmailAddresses](
	[RawEmailAddressID] [int] IDENTITY(1,1) NOT NULL,
	[RawEmailID] [int] NOT NULL,
	[IsFrom] [bit] NOT NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
	[EmailAddressID] [int] NULL,
	[DomainID] [int] NULL,
 CONSTRAINT [PK_RawEmailAddresses] PRIMARY KEY CLUSTERED 
(
	[RawEmailAddressID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RawEmails]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RawEmails](
	[RawEmailID] [int] IDENTITY(1,1) NOT NULL,
	[To] [nvarchar](255) NULL,
	[From] [nvarchar](255) NULL,
	[Subject] [nvarchar](max) NULL,
	[BodyText] [nvarchar](max) NULL,
	[BodyHtml] [nvarchar](max) NULL,
	[IsProcessed] [bit] NOT NULL,
	[Label] [nvarchar](255) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
	[Data] [nvarchar](max) NULL,
	[UserID] [int] NULL,
	[ImportKey] [nvarchar](255) NOT NULL,
	[EmailDate] [datetime] NOT NULL,
	[ThreadID] [nvarchar](255) NOT NULL,
 CONSTRAINT [PK_RawEmails] PRIMARY KEY CLUSTERED 
(
	[RawEmailID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[RoleID] [int] IDENTITY(1,1) NOT NULL,
	[RoleName] [nvarchar](255) NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
	[Data] [nvarchar](max) NULL,
 CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
(
	[RoleID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SalesRepresentatives]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SalesRepresentatives](
	[SalesRepresentativeID] [int] IDENTITY(1,1) NOT NULL,
	[Notes] [nvarchar](max) NULL,
	[LastUpdated] [datetime] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[Data] [nvarchar](max) NULL,
	[SalesRepresentativeTypeID] [int] NULL,
	[UserID] [int] NOT NULL,
 CONSTRAINT [PK_SalesRepresentatives] PRIMARY KEY CLUSTERED 
(
	[SalesRepresentativeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SalesRepresentativeTypes]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SalesRepresentativeTypes](
	[SalesRepresentativeTypeID] [int] IDENTITY(1,1) NOT NULL,
	[SalesRepresentativeTypeName] [nvarchar](255) NOT NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
 CONSTRAINT [PK_SalesRepresentativeTypes] PRIMARY KEY CLUSTERED 
(
	[SalesRepresentativeTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sources]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sources](
	[SourceID] [int] IDENTITY(1,1) NOT NULL,
	[SourceName] [nvarchar](255) NOT NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
 CONSTRAINT [PK_Sources] PRIMARY KEY CLUSTERED 
(
	[SourceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tags]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tags](
	[TagID] [int] IDENTITY(1,1) NOT NULL,
	[TagName] [nvarchar](255) NOT NULL,
	[Data] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
	[SalesRepresentativeID] [int] NULL,
 CONSTRAINT [PK_Tags] PRIMARY KEY CLUSTERED 
(
	[TagID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserRoles]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRoles](
	[UserRoleID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [int] NOT NULL,
	[RoleID] [int] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
	[Data] [nvarchar](max) NULL,
 CONSTRAINT [PK_UserRoles] PRIMARY KEY CLUSTERED 
(
	[UserRoleID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 1/21/2025 4:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserID] [int] IDENTITY(1,1) NOT NULL,
	[IsEnabled] [bit] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[LastUpdated] [datetime] NOT NULL,
	[Data] [nvarchar](max) NULL,
	[Email] [nvarchar](255) NOT NULL,
	[Phone] [nvarchar](255) NULL,
	[Password] [nvarchar](max) NULL,
	[HasLoggedIn] [bit] NOT NULL,
	[LastLoginDate] [datetime] NULL,
	[IsLockedOut] [bit] NOT NULL,
	[InvitationCode] [nvarchar](255) NULL,
	[InvitationExpiration] [datetime] NULL,
	[IsInvited] [bit] NOT NULL,
	[InvitedDate] [datetime] NULL,
	[FirstName] [nvarchar](255) NULL,
	[LastName] [nvarchar](255) NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Agents_AgentName]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_Agents_AgentName] ON [dbo].[Agents]
(
	[AgentName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AgentTypes_AgentTypeName]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_AgentTypes_AgentTypeName] ON [dbo].[AgentTypes]
(
	[AgentTypeName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AreaCodes_AreaCode]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_AreaCodes_AreaCode] ON [dbo].[AreaCodes]
(
	[AreaCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Authorizations_AuthorizationToken]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_Authorizations_AuthorizationToken] ON [dbo].[Authorizations]
(
	[AuthorizationToken] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Authorizations_RefreshToken]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_Authorizations_RefreshToken] ON [dbo].[Authorizations]
(
	[RefreshToken] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_BlockedEmails_Email]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_BlockedEmails_Email] ON [dbo].[BlockedEmails]
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Campaigns_CampaignKey]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_Campaigns_CampaignKey] ON [dbo].[Campaigns]
(
	[CampaignKey] ASC
)
WHERE ([CampaignKey] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Campaigns_CampaignName]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_Campaigns_CampaignName] ON [dbo].[Campaigns]
(
	[CampaignName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Contents_ContentName]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_Contents_ContentName] ON [dbo].[Contents]
(
	[ContentName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_ContentTypes_ContentTypeName]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_ContentTypes_ContentTypeName] ON [dbo].[ContentTypes]
(
	[ContentTypeName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Domains_DomainName]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_Domains_DomainName] ON [dbo].[Domains]
(
	[DomainName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_EmailAddresses_Email]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_EmailAddresses_Email] ON [dbo].[EmailAddresses]
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_EmailTemplates_Name]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_EmailTemplates_Name] ON [dbo].[EmailTemplates]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Features_FeatureName]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_Features_FeatureName] ON [dbo].[Features]
(
	[FeatureName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_FileTypes_FileType]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_FileTypes_FileType] ON [dbo].[FileTypes]
(
	[FileType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_LeadNoteTypes_LeadNoteTypeName]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_LeadNoteTypes_LeadNoteTypeName] ON [dbo].[LeadNoteTypes]
(
	[LeadNoteTypeName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_LeadRelationshipTypes_LeadRelationshipTypeName]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_LeadRelationshipTypes_LeadRelationshipTypeName] ON [dbo].[LeadRelationshipTypes]
(
	[LeadRelationshipTypeName] ASC
)
WHERE ([LeadRelationshipTypeName] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_LeadStatuses_StatusName]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_LeadStatuses_StatusName] ON [dbo].[LeadStatuses]
(
	[StatusName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_LeadSubStatuses_SubStatusName]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_LeadSubStatuses_SubStatusName] ON [dbo].[LeadSubStatuses]
(
	[SubStatusName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_LeadTags_LeadID_TagID]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_LeadTags_LeadID_TagID] ON [dbo].[LeadTags]
(
	[LeadID] ASC,
	[TagID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_PageLayouts_Url]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_PageLayouts_Url] ON [dbo].[PageLayouts]
(
	[Url] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_PhoneNumbers_PhoneNumber]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_PhoneNumbers_PhoneNumber] ON [dbo].[PhoneNumbers]
(
	[PhoneNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_RawEmailAddresses_RawEmailID_EmailAddressID_DomainID]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_RawEmailAddresses_RawEmailID_EmailAddressID_DomainID] ON [dbo].[RawEmailAddresses]
(
	[RawEmailID] ASC,
	[EmailAddressID] ASC,
	[DomainID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_RawEmails_ImportKey]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_RawEmails_ImportKey] ON [dbo].[RawEmails]
(
	[ImportKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Roles_RoleName]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_Roles_RoleName] ON [dbo].[Roles]
(
	[RoleName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_SalesRepresentatives_UserID]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_SalesRepresentatives_UserID] ON [dbo].[SalesRepresentatives]
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_SalesRepresentativeTypes_SalesRepresentativeTypeName]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_SalesRepresentativeTypes_SalesRepresentativeTypeName] ON [dbo].[SalesRepresentativeTypes]
(
	[SalesRepresentativeTypeName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Sources_SourceName]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_Sources_SourceName] ON [dbo].[Sources]
(
	[SourceName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Tags_TagName]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_Tags_TagName] ON [dbo].[Tags]
(
	[TagName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_UserRoles_UserID_RoleID]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_UserRoles_UserID_RoleID] ON [dbo].[UserRoles]
(
	[UserID] ASC,
	[RoleID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Users_Email]    Script Date: 1/21/2025 4:07:35 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_Users_Email] ON [dbo].[Users]
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Agents] ADD  CONSTRAINT [DF_Agents_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[Agents] ADD  CONSTRAINT [DF_Agents_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[AgentTypes] ADD  CONSTRAINT [DF_AgentTypes_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[AgentTypes] ADD  CONSTRAINT [DF_AgentTypes_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[AreaCodes] ADD  CONSTRAINT [DF_AreaCodes_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[AreaCodes] ADD  CONSTRAINT [DF_AreaCodes_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[Authorizations] ADD  CONSTRAINT [DF_Authorizations_IsExpired]  DEFAULT ((0)) FOR [IsExpired]
GO
ALTER TABLE [dbo].[Authorizations] ADD  CONSTRAINT [DF_Authorizations_IsRevoked]  DEFAULT ((0)) FOR [IsRevoked]
GO
ALTER TABLE [dbo].[Authorizations] ADD  CONSTRAINT [DF_Authorizations_IsEncrypted]  DEFAULT ((0)) FOR [IsEncrypted]
GO
ALTER TABLE [dbo].[Authorizations] ADD  CONSTRAINT [DF_Authorizations_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[Authorizations] ADD  CONSTRAINT [DF_Authorizations_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[BlockedEmails] ADD  CONSTRAINT [DF_BlockedEmails_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[BlockedEmails] ADD  CONSTRAINT [DF_BlockedEmails_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[Calls] ADD  CONSTRAINT [DF_Calls_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[Calls] ADD  CONSTRAINT [DF_Calls_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[Campaigns] ADD  CONSTRAINT [DF_Campaigns_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[Campaigns] ADD  CONSTRAINT [DF_Campaigns_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[Contents] ADD  CONSTRAINT [DF_Contents_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[Contents] ADD  CONSTRAINT [DF_Contents_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[ContentTypes] ADD  CONSTRAINT [DF_ContentTypes_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[ContentTypes] ADD  CONSTRAINT [DF_ContentTypes_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[Domains] ADD  CONSTRAINT [DF_Domains_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[Domains] ADD  CONSTRAINT [DF_Domains_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[EmailAddresses] ADD  CONSTRAINT [DF_EmailAddresses_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[EmailAddresses] ADD  CONSTRAINT [DF_EmailAddresses_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[EmailAddresses] ADD  CONSTRAINT [DF_EmailAddresses_IsBlocked]  DEFAULT ((0)) FOR [IsBlocked]
GO
ALTER TABLE [dbo].[EmailAddresses] ADD  CONSTRAINT [DF_EmailAddresses_IsInternal]  DEFAULT ((0)) FOR [IsInternal]
GO
ALTER TABLE [dbo].[EmailHistories] ADD  CONSTRAINT [DF_EmailHistories_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[EmailTemplates] ADD  CONSTRAINT [DF_EmailTemplates_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[EmailTemplates] ADD  CONSTRAINT [DF_EmailTemplates_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[Features] ADD  CONSTRAINT [DF_Features_IsEnabled]  DEFAULT ((1)) FOR [IsEnabled]
GO
ALTER TABLE [dbo].[Files] ADD  CONSTRAINT [DF_Files_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
ALTER TABLE [dbo].[Files] ADD  CONSTRAINT [DF_Files_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[Files] ADD  CONSTRAINT [DF_Files_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[FileTypes] ADD  CONSTRAINT [DF_FileTypes_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[FileTypes] ADD  CONSTRAINT [DF_FileTypes_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[LeadAddresses] ADD  CONSTRAINT [DF_LeadAddresses_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[LeadAddresses] ADD  CONSTRAINT [DF_LeadAddresses_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[LeadContacts] ADD  CONSTRAINT [DF_LeadContacts_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[LeadContacts] ADD  CONSTRAINT [DF_LeadContacts_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[LeadNotes] ADD  CONSTRAINT [DF_LeadNotes_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[LeadNotes] ADD  CONSTRAINT [DF_LeadNotes_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[LeadNoteTypes] ADD  CONSTRAINT [DF_LeadNoteTypes_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[LeadNoteTypes] ADD  CONSTRAINT [DF_LeadNoteTypes_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[LeadRelationships] ADD  CONSTRAINT [DF_LeadRelationships_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[LeadRelationships] ADD  CONSTRAINT [DF_LeadRelationships_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[LeadRelationshipTypes] ADD  CONSTRAINT [DF_LeadRelationshipTypes_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[LeadRelationshipTypes] ADD  CONSTRAINT [DF_LeadRelationshipTypes_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[Leads] ADD  CONSTRAINT [DF_Leads_Priority]  DEFAULT ((4)) FOR [Priority]
GO
ALTER TABLE [dbo].[Leads] ADD  CONSTRAINT [DF_Leads_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[Leads] ADD  CONSTRAINT [DF_Leads_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[LeadStatuses] ADD  CONSTRAINT [DF_LeadStatuses_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[LeadStatuses] ADD  CONSTRAINT [DF_LeadStatuses_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[LeadSubStatuses] ADD  CONSTRAINT [DF_LeadSubStatuses_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[LeadSubStatuses] ADD  CONSTRAINT [DF_LeadSubStatuses_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[LeadTags] ADD  CONSTRAINT [DF_LeadTags_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[LeadTags] ADD  CONSTRAINT [DF_LeadTags_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[Messages] ADD  CONSTRAINT [DF_Messages_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[Messages] ADD  CONSTRAINT [DF_Messages_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[Messages] ADD  CONSTRAINT [DF_Messages_IsDelivered]  DEFAULT ((0)) FOR [IsDelivered]
GO
ALTER TABLE [dbo].[PhoneNumbers] ADD  CONSTRAINT [DF_PhoneNumbers_IsInternal]  DEFAULT ((0)) FOR [IsInternal]
GO
ALTER TABLE [dbo].[PhoneNumbers] ADD  CONSTRAINT [DF_PhoneNumbers_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[PhoneNumbers] ADD  CONSTRAINT [DF_PhoneNumbers_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[PhoneNumbers] ADD  CONSTRAINT [DF_PhoneNumbers_IsBlocked]  DEFAULT ((0)) FOR [IsBlocked]
GO
ALTER TABLE [dbo].[PhoneNumbers] ADD  CONSTRAINT [DF_PhoneNumbers_IsSpam]  DEFAULT ((0)) FOR [IsSpam]
GO
ALTER TABLE [dbo].[RawEmailAddresses] ADD  CONSTRAINT [DF_RawEmailAddresses_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[RawEmailAddresses] ADD  CONSTRAINT [DF_RawEmailAddresses_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[RawEmails] ADD  CONSTRAINT [DF_RawEmails_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[RawEmails] ADD  CONSTRAINT [DF_RawEmails_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[Roles] ADD  CONSTRAINT [DF_Roles_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[Roles] ADD  CONSTRAINT [DF_Roles_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[SalesRepresentatives] ADD  CONSTRAINT [DF_SalesRepresentatives_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[SalesRepresentatives] ADD  CONSTRAINT [DF_SalesRepresentatives_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[SalesRepresentativeTypes] ADD  CONSTRAINT [DF_SalesRepresentativeTypes_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[SalesRepresentativeTypes] ADD  CONSTRAINT [DF_SalesRepresentativeTypes_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[Sources] ADD  CONSTRAINT [DF_Sources_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[Sources] ADD  CONSTRAINT [DF_Sources_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[Tags] ADD  CONSTRAINT [DF_Tags_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[Tags] ADD  CONSTRAINT [DF_Tags_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[UserRoles] ADD  CONSTRAINT [DF_UserRoles_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
ALTER TABLE [dbo].[UserRoles] ADD  CONSTRAINT [DF_UserRoles_LastUpdated]  DEFAULT (getdate()) FOR [LastUpdated]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_IsEnabled]  DEFAULT ((1)) FOR [IsEnabled]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_HasLoggedIn]  DEFAULT ((0)) FOR [HasLoggedIn]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_IsLockedOut]  DEFAULT ((0)) FOR [IsLockedOut]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_IsInvited]  DEFAULT ((0)) FOR [IsInvited]
GO
ALTER TABLE [dbo].[Agents]  WITH CHECK ADD  CONSTRAINT [FK_Agents_AgentTypeID_AgentTypes] FOREIGN KEY([AgentTypeID])
REFERENCES [dbo].[AgentTypes] ([AgentTypeID])
GO
ALTER TABLE [dbo].[Agents] CHECK CONSTRAINT [FK_Agents_AgentTypeID_AgentTypes]
GO
ALTER TABLE [dbo].[Authorizations]  WITH CHECK ADD  CONSTRAINT [FK_Authorizations_UserID_Users] FOREIGN KEY([UserID])
REFERENCES [dbo].[Users] ([UserID])
GO
ALTER TABLE [dbo].[Authorizations] CHECK CONSTRAINT [FK_Authorizations_UserID_Users]
GO
ALTER TABLE [dbo].[Campaigns]  WITH CHECK ADD  CONSTRAINT [FK_Campaigns_SourceID_Sources] FOREIGN KEY([SourceID])
REFERENCES [dbo].[Sources] ([SourceID])
GO
ALTER TABLE [dbo].[Campaigns] CHECK CONSTRAINT [FK_Campaigns_SourceID_Sources]
GO
ALTER TABLE [dbo].[Contents]  WITH CHECK ADD  CONSTRAINT [FK_Contents_ContentTypeID_ContentTypes] FOREIGN KEY([ContentTypeID])
REFERENCES [dbo].[ContentTypes] ([ContentTypeID])
GO
ALTER TABLE [dbo].[Contents] CHECK CONSTRAINT [FK_Contents_ContentTypeID_ContentTypes]
GO
ALTER TABLE [dbo].[EmailAddresses]  WITH CHECK ADD  CONSTRAINT [FK_EmailAddresses_DomainID_Domains] FOREIGN KEY([DomainID])
REFERENCES [dbo].[Domains] ([DomainID])
GO
ALTER TABLE [dbo].[EmailAddresses] CHECK CONSTRAINT [FK_EmailAddresses_DomainID_Domains]
GO
ALTER TABLE [dbo].[EmailHistories]  WITH CHECK ADD  CONSTRAINT [FK_EmailHistories_EmailTemplateID_EmailTemplates] FOREIGN KEY([EmailTemplateID])
REFERENCES [dbo].[EmailTemplates] ([EmailTemplateID])
GO
ALTER TABLE [dbo].[EmailHistories] CHECK CONSTRAINT [FK_EmailHistories_EmailTemplateID_EmailTemplates]
GO
ALTER TABLE [dbo].[Files]  WITH CHECK ADD  CONSTRAINT [FK_Files_FileTypeID_FileTypes] FOREIGN KEY([FileTypeID])
REFERENCES [dbo].[FileTypes] ([FileTypeID])
GO
ALTER TABLE [dbo].[Files] CHECK CONSTRAINT [FK_Files_FileTypeID_FileTypes]
GO
ALTER TABLE [dbo].[LeadAddresses]  WITH CHECK ADD  CONSTRAINT [FK_LeadAddresses_LeadID_Leads] FOREIGN KEY([LeadID])
REFERENCES [dbo].[Leads] ([LeadID])
GO
ALTER TABLE [dbo].[LeadAddresses] CHECK CONSTRAINT [FK_LeadAddresses_LeadID_Leads]
GO
ALTER TABLE [dbo].[LeadContacts]  WITH CHECK ADD  CONSTRAINT [FK_LeadContacts_LeadID_Leads] FOREIGN KEY([LeadID])
REFERENCES [dbo].[Leads] ([LeadID])
GO
ALTER TABLE [dbo].[LeadContacts] CHECK CONSTRAINT [FK_LeadContacts_LeadID_Leads]
GO
ALTER TABLE [dbo].[LeadNotes]  WITH CHECK ADD  CONSTRAINT [FK_LeadNotes_LeadID_Leads] FOREIGN KEY([LeadID])
REFERENCES [dbo].[Leads] ([LeadID])
GO
ALTER TABLE [dbo].[LeadNotes] CHECK CONSTRAINT [FK_LeadNotes_LeadID_Leads]
GO
ALTER TABLE [dbo].[LeadNotes]  WITH CHECK ADD  CONSTRAINT [FK_LeadNotes_LeadNoteTypeID_LeadNoteTypes] FOREIGN KEY([LeadNoteTypeID])
REFERENCES [dbo].[LeadNoteTypes] ([LeadNoteTypeID])
GO
ALTER TABLE [dbo].[LeadNotes] CHECK CONSTRAINT [FK_LeadNotes_LeadNoteTypeID_LeadNoteTypes]
GO
ALTER TABLE [dbo].[LeadNotes]  WITH CHECK ADD  CONSTRAINT [FK_LeadNotes_SalesRepresentativeID_SalesRepresentatives] FOREIGN KEY([SalesRepresentativeID])
REFERENCES [dbo].[SalesRepresentatives] ([SalesRepresentativeID])
GO
ALTER TABLE [dbo].[LeadNotes] CHECK CONSTRAINT [FK_LeadNotes_SalesRepresentativeID_SalesRepresentatives]
GO
ALTER TABLE [dbo].[LeadRelationships]  WITH CHECK ADD  CONSTRAINT [FK_LeadRelationships_LeadID_Leads] FOREIGN KEY([LeadID])
REFERENCES [dbo].[Leads] ([LeadID])
GO
ALTER TABLE [dbo].[LeadRelationships] CHECK CONSTRAINT [FK_LeadRelationships_LeadID_Leads]
GO
ALTER TABLE [dbo].[LeadRelationships]  WITH CHECK ADD  CONSTRAINT [FK_LeadRelationships_LeadRelationshipTypeID_LeadRelationshipTypes] FOREIGN KEY([LeadRelationshipTypeID])
REFERENCES [dbo].[LeadRelationshipTypes] ([LeadRelationshipTypeID])
GO
ALTER TABLE [dbo].[LeadRelationships] CHECK CONSTRAINT [FK_LeadRelationships_LeadRelationshipTypeID_LeadRelationshipTypes]
GO
ALTER TABLE [dbo].[LeadRelationships]  WITH CHECK ADD  CONSTRAINT [FK_LeadRelationships_RelatedLeadID_Leads] FOREIGN KEY([RelatedLeadID])
REFERENCES [dbo].[Leads] ([LeadID])
GO
ALTER TABLE [dbo].[LeadRelationships] CHECK CONSTRAINT [FK_LeadRelationships_RelatedLeadID_Leads]
GO
ALTER TABLE [dbo].[Leads]  WITH CHECK ADD  CONSTRAINT [FK_Leads_CampaignID_Campaigns] FOREIGN KEY([CampaignID])
REFERENCES [dbo].[Campaigns] ([CampaignID])
GO
ALTER TABLE [dbo].[Leads] CHECK CONSTRAINT [FK_Leads_CampaignID_Campaigns]
GO
ALTER TABLE [dbo].[Leads]  WITH CHECK ADD  CONSTRAINT [FK_Leads_LeadStatusID_LeadStatuses] FOREIGN KEY([LeadStatusID])
REFERENCES [dbo].[LeadStatuses] ([LeadStatusID])
GO
ALTER TABLE [dbo].[Leads] CHECK CONSTRAINT [FK_Leads_LeadStatusID_LeadStatuses]
GO
ALTER TABLE [dbo].[Leads]  WITH CHECK ADD  CONSTRAINT [FK_Leads_LeadSubStatusID_LeadSubStatuses] FOREIGN KEY([LeadSubStatusID])
REFERENCES [dbo].[LeadSubStatuses] ([LeadSubStatusID])
GO
ALTER TABLE [dbo].[Leads] CHECK CONSTRAINT [FK_Leads_LeadSubStatusID_LeadSubStatuses]
GO
ALTER TABLE [dbo].[Leads]  WITH CHECK ADD  CONSTRAINT [FK_Leads_SalesRepresentativeID_SalesRepresentatives] FOREIGN KEY([SalesRepresentativeID])
REFERENCES [dbo].[SalesRepresentatives] ([SalesRepresentativeID])
GO
ALTER TABLE [dbo].[Leads] CHECK CONSTRAINT [FK_Leads_SalesRepresentativeID_SalesRepresentatives]
GO
ALTER TABLE [dbo].[Leads]  WITH CHECK ADD  CONSTRAINT [FK_Leads_SourceID_Sources] FOREIGN KEY([SourceID])
REFERENCES [dbo].[Sources] ([SourceID])
GO
ALTER TABLE [dbo].[Leads] CHECK CONSTRAINT [FK_Leads_SourceID_Sources]
GO
ALTER TABLE [dbo].[LeadSubStatuses]  WITH CHECK ADD  CONSTRAINT [FK_LeadSubStatuses_LeadStatusID_LeadStatuses] FOREIGN KEY([LeadStatusID])
REFERENCES [dbo].[LeadStatuses] ([LeadStatusID])
GO
ALTER TABLE [dbo].[LeadSubStatuses] CHECK CONSTRAINT [FK_LeadSubStatuses_LeadStatusID_LeadStatuses]
GO
ALTER TABLE [dbo].[LeadTags]  WITH CHECK ADD  CONSTRAINT [FK_LeadTags_LeadID_Leads] FOREIGN KEY([LeadID])
REFERENCES [dbo].[Leads] ([LeadID])
GO
ALTER TABLE [dbo].[LeadTags] CHECK CONSTRAINT [FK_LeadTags_LeadID_Leads]
GO
ALTER TABLE [dbo].[LeadTags]  WITH CHECK ADD  CONSTRAINT [FK_LeadTags_TagID_Tags] FOREIGN KEY([TagID])
REFERENCES [dbo].[Tags] ([TagID])
GO
ALTER TABLE [dbo].[LeadTags] CHECK CONSTRAINT [FK_LeadTags_TagID_Tags]
GO
ALTER TABLE [dbo].[RawEmailAddresses]  WITH CHECK ADD  CONSTRAINT [FK_RawEmailAddresses_DomainID_Domains] FOREIGN KEY([DomainID])
REFERENCES [dbo].[Domains] ([DomainID])
GO
ALTER TABLE [dbo].[RawEmailAddresses] CHECK CONSTRAINT [FK_RawEmailAddresses_DomainID_Domains]
GO
ALTER TABLE [dbo].[RawEmailAddresses]  WITH CHECK ADD  CONSTRAINT [FK_RawEmailAddresses_EmailAddressID_EmailAddresses] FOREIGN KEY([EmailAddressID])
REFERENCES [dbo].[EmailAddresses] ([EmailAddressID])
GO
ALTER TABLE [dbo].[RawEmailAddresses] CHECK CONSTRAINT [FK_RawEmailAddresses_EmailAddressID_EmailAddresses]
GO
ALTER TABLE [dbo].[RawEmailAddresses]  WITH CHECK ADD  CONSTRAINT [FK_RawEmailAddresses_RawEmailID_RawEmails] FOREIGN KEY([RawEmailID])
REFERENCES [dbo].[RawEmails] ([RawEmailID])
GO
ALTER TABLE [dbo].[RawEmailAddresses] CHECK CONSTRAINT [FK_RawEmailAddresses_RawEmailID_RawEmails]
GO
ALTER TABLE [dbo].[RawEmails]  WITH CHECK ADD  CONSTRAINT [FK_RawEmails_UserID_Users] FOREIGN KEY([UserID])
REFERENCES [dbo].[Users] ([UserID])
GO
ALTER TABLE [dbo].[RawEmails] CHECK CONSTRAINT [FK_RawEmails_UserID_Users]
GO
ALTER TABLE [dbo].[SalesRepresentatives]  WITH CHECK ADD  CONSTRAINT [FK_SalesRepresentatives_SalesRepresentativeTypeID_SalesRepresentativeTypes] FOREIGN KEY([SalesRepresentativeTypeID])
REFERENCES [dbo].[SalesRepresentativeTypes] ([SalesRepresentativeTypeID])
GO
ALTER TABLE [dbo].[SalesRepresentatives] CHECK CONSTRAINT [FK_SalesRepresentatives_SalesRepresentativeTypeID_SalesRepresentativeTypes]
GO
ALTER TABLE [dbo].[SalesRepresentatives]  WITH CHECK ADD  CONSTRAINT [FK_SalesRepresentatives_UserID_Users] FOREIGN KEY([UserID])
REFERENCES [dbo].[Users] ([UserID])
GO
ALTER TABLE [dbo].[SalesRepresentatives] CHECK CONSTRAINT [FK_SalesRepresentatives_UserID_Users]
GO
ALTER TABLE [dbo].[Tags]  WITH CHECK ADD  CONSTRAINT [FK_Tags_SalesRepresentativeID_SalesRepresentatives] FOREIGN KEY([SalesRepresentativeID])
REFERENCES [dbo].[SalesRepresentatives] ([SalesRepresentativeID])
GO
ALTER TABLE [dbo].[Tags] CHECK CONSTRAINT [FK_Tags_SalesRepresentativeID_SalesRepresentatives]
GO
ALTER TABLE [dbo].[UserRoles]  WITH CHECK ADD  CONSTRAINT [FK_UserRoles_RoleID_Roles] FOREIGN KEY([RoleID])
REFERENCES [dbo].[Roles] ([RoleID])
GO
ALTER TABLE [dbo].[UserRoles] CHECK CONSTRAINT [FK_UserRoles_RoleID_Roles]
GO
ALTER TABLE [dbo].[UserRoles]  WITH CHECK ADD  CONSTRAINT [FK_UserRoles_UserID_Users] FOREIGN KEY([UserID])
REFERENCES [dbo].[Users] ([UserID])
GO
ALTER TABLE [dbo].[UserRoles] CHECK CONSTRAINT [FK_UserRoles_UserID_Users]
GO
/****** Object:  StoredProcedure [dbo].[Authorization_Get_Sp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO


create PROCEDURE [dbo].[Authorization_Get_Sp]
	@AuthorizationToken [nvarchar](255)
AS

    declare @AuthorizationID int 

	
    SELECT @AuthorizationID = AuthorizationID
    FROM Authorizations WITH (NOLOCK) 
    WHERE [AuthorizationToken] = @AuthorizationToken


	update Authorizations 
	set LastActivityDate = getdate(),
		IsExpired = iif(Expiration < getdate(), 1, 0)
	where AuthorizationID = @AuthorizationID

	SELECT *
    FROM Authorizations WITH (NOLOCK) 
    WHERE AuthorizationID = @AuthorizationID


GO
/****** Object:  StoredProcedure [dbo].[Campaigns_GetAll_Sp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[Campaigns_GetAll_Sp]
AS

    
    SELECT c.CampaignID, 
            c.SourceID, 
            c.CampaignName, 
            c.CampaignKey, 
            c.DateCreated, 
            c.LastUpdated, 
            s.SourceName
    FROM Campaigns c WITH (NOLOCK) 
    LEFT OUTER JOIN Sources s WITH (NOLOCK) 
    ON c.SourceID = s.SourceID
GO
/****** Object:  StoredProcedure [dbo].[Campaigns_GetAll_Sp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[Campaigns_GetAll_Sp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				SELECT c.CampaignID, 
            c.SourceID, 
            c.CampaignName, 
            c.CampaignKey, 
            c.DateCreated, 
            c.LastUpdated, 
            s.SourceName
    FROM Campaigns c WITH (NOLOCK) 
    LEFT OUTER JOIN Sources s WITH (NOLOCK) 
    ON c.SourceID = s.SourceID

				) sub
	where		
					[CampaignID] like '%' + @Search + '%' or
					[CampaignName] like '%' + @Search + '%' or
					[CampaignKey] like '%' + @Search + '%' or
					[SourceName] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[Campaigns_GetAll_Sp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[Campaigns_GetAll_Sp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'CampaignID' and @SortAscending = 1 then 
							[CampaignID]
						end ASC,
						case when @SortColumn = 'CampaignID' and @SortAscending = 0 then 
							[CampaignID]
						end DESC,
			
						case when @SortColumn = 'SourceID' and @SortAscending = 1 then 
							[SourceID]
						end ASC,
						case when @SortColumn = 'SourceID' and @SortAscending = 0 then 
							[SourceID]
						end DESC,
			
						case when @SortColumn = 'CampaignName' and @SortAscending = 1 then 
							[CampaignName]
						end ASC,
						case when @SortColumn = 'CampaignName' and @SortAscending = 0 then 
							[CampaignName]
						end DESC,
			
						case when @SortColumn = 'CampaignKey' and @SortAscending = 1 then 
							[CampaignKey]
						end ASC,
						case when @SortColumn = 'CampaignKey' and @SortAscending = 0 then 
							[CampaignKey]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'SourceName' and @SortAscending = 1 then 
							[SourceName]
						end ASC,
						case when @SortColumn = 'SourceName' and @SortAscending = 0 then 
							[SourceName]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					SELECT c.CampaignID, 
            c.SourceID, 
            c.CampaignName, 
            c.CampaignKey, 
            c.DateCreated, 
            c.LastUpdated, 
            s.SourceName
    FROM Campaigns c WITH (NOLOCK) 
    LEFT OUTER JOIN Sources s WITH (NOLOCK) 
    ON c.SourceID = s.SourceID

					) sub
		where		
					[CampaignID] like '%' + @Search + '%' or
					[CampaignName] like '%' + @Search + '%' or
					[CampaignKey] like '%' + @Search + '%' or
					[SourceName] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[ContactProgressReport_GetContactPoints_Sp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create procedure [dbo].[ContactProgressReport_GetContactPoints_Sp] 
	@StartDate datetime, 
	@SalesRepresentativeID int,
	@ThresholdLeads int,
	@ThresholdCalls int
as 

		declare @Emails int 
		declare @Calls int
		declare @LeadsCalled int

		select		@Emails = isnull(count(*), 0) 
		from 		LeadNotes ln with (nolock)
		join		LeadNoteTypes lnt on ln.LeadNoteTypeID = lnt.LeadNoteTypeID
		where		cast(ln.DateCreated as date) = @StartDate
		and			lnt.LeadNoteTypeName = 'Email' and ln.SalesRepresentativeID = @SalesRepresentativeID

		select		@LeadsCalled = isnull(count(distinct(LeadID)), 0),
					@Calls = count(*)
		from 		LeadNotes ln
		join		LeadNoteTypes lnt on ln.LeadNoteTypeID = lnt.LeadNoteTypeID
		where		cast(ln.DateCreated as date) = cast(@StartDate as Date)
		and			lnt.LeadNoteTypeName = 'Call' and ln.SalesRepresentativeID = @SalesRepresentativeID


		select	@Emails as Emails,
				@Calls as Calls,
				@LeadsCalled as LeadsCalled,

				case
				when  @LeadsCalled >= @ThresholdLeads then 'Over'
					else 'Under' end as ThresholdLeads,
				case
				when @Calls >= @ThresholdCalls then 'Over'
				else 'Under' end as ThresholdCalls



GO
/****** Object:  StoredProcedure [dbo].[ContactProgressReport_GetMetricsByRange_Sp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create procedure [dbo].[ContactProgressReport_GetMetricsByRange_Sp]
	@StartDate datetime, 
	@StopDate datetime,
	@SalesRepresentativeID int
as 

	if (@StopDate = @StartDate) set @StopDate = dateadd(d, 1, @StartDate) 

	select		isnull(sum(case when lnt.LeadNoteTypeName = 'Appointment Set' then 1 else 0 end), 0) as AppointmentsSet,
	isnull(sum(case when lnt.LeadNoteTypeName = 'Presented' then 1 else 0 end), 0) as AppointmentsGiven,
	isnull(sum(case when lnt.LeadNoteTypeName = 'Email' then 1 else 0 end), 0) as Emails
	from 			LeadNotes ln with (nolock)
	join			LeadNoteTypes lnt on ln.LeadNoteTypeID = lnt.LeadNoteTypeID
	where			ln.DateCreated between @StartDate and @StopDate
	and ln.SalesRepresentativeID = @SalesRepresentativeID


GO
/****** Object:  StoredProcedure [dbo].[CopyAgentSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CopyAgentSp]
	@AgentID [int]
AS

    -- Automatically generated on 10/9/2024 4:50:41 PM.
    
    INSERT INTO Agents
    (
            [AgentName], 
            [ContextSettings], 
            [Data], 
            [DateCreated], 
            [LastUpdated], 
            [Description], 
            [AgentTypeID]
    )
    SELECT
            [AgentName] + ' - Copy', 
            [ContextSettings], 
            [Data], 
            getdate(), 
            getdate(), 
            [Description], 
            [AgentTypeID]
    FROM [Agents]
    WHERE AgentID = @AgentID
    SELECT scope_identity() as AgentID


GO
/****** Object:  StoredProcedure [dbo].[CopyAgentTypeSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CopyAgentTypeSp]
	@AgentTypeID [int]
AS

    -- Automatically generated on 10/9/2024 4:50:41 PM.
    
    INSERT INTO AgentTypes
    (
            [AgentTypeName], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    SELECT
            [AgentTypeName] + ' - Copy', 
            [Data], 
            getdate(), 
            getdate()
    FROM [AgentTypes]
    WHERE AgentTypeID = @AgentTypeID
    SELECT scope_identity() as AgentTypeID


GO
/****** Object:  StoredProcedure [dbo].[CopyAreaCodeSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CopyAreaCodeSp]
	@AreaCodeID [int]
AS

    -- Automatically generated on 8/26/2023 8:04:05 AM.
    
    INSERT INTO AreaCodes
    (
            [AreaCode], 
            [TimeZone], 
            [Region], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    SELECT
            [AreaCode] + ' - Copy', 
            [TimeZone], 
            [Region], 
            [Data], 
            getdate(), 
            getdate()
    FROM [AreaCodes]
    WHERE AreaCodeID = @AreaCodeID
    SELECT scope_identity() as AreaCodeID
GO
/****** Object:  StoredProcedure [dbo].[CopyAuthorizationSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CopyAuthorizationSp]
	@AuthorizationID [int]
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    INSERT INTO Authorizations
    (
            [AuthorizationToken], 
            [RefreshToken], 
            [Expiration], 
            [UserID], 
            [LastRefreshedDate], 
            [LastActivityDate], 
            [IsExpired], 
            [IsRevoked], 
            [IsEncrypted], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    SELECT
            [AuthorizationToken] + ' - Copy', 
            [RefreshToken] + ' - Copy', 
            [Expiration], 
            [UserID], 
            [LastRefreshedDate], 
            [LastActivityDate], 
            [IsExpired], 
            [IsRevoked], 
            [IsEncrypted], 
            [Data], 
            getdate(), 
            getdate()
    FROM [Authorizations]
    WHERE AuthorizationID = @AuthorizationID
    SELECT scope_identity() as AuthorizationID
GO
/****** Object:  StoredProcedure [dbo].[CopyBlockedEmailSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CopyBlockedEmailSp]
	@BlockedEmailID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    INSERT INTO BlockedEmails
    (
            [Email], 
            [Notes], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    SELECT
            [Email] + ' - Copy', 
            [Notes], 
            [Data], 
            getdate(), 
            getdate()
    FROM [BlockedEmails]
    WHERE BlockedEmailID = @BlockedEmailID
    SELECT scope_identity() as BlockedEmailID
GO
/****** Object:  StoredProcedure [dbo].[CopyCallSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CopyCallSp]
	@CallID [int]
AS

    -- Automatically generated on 7/1/2024 7:51:00 AM.
    
    INSERT INTO Calls
    (
            [CallingPhone], 
            [CalledPhone], 
            [Duration], 
            [IsRecorded], 
            [RecordingURL], 
            [IsConference], 
            [IsStreamed], 
            [IsIncoming], 
            [CallStatus], 
            [LastCallStatusUpdate], 
            [IsTranscribed], 
            [IsEmptyTranscription], 
            [TranscriptionSummary], 
            [Data], 
            [DateCreated], 
            [LastUpdated], 
            [Transcription], 
            [CallKey]
    )
    SELECT
            [CallingPhone], 
            [CalledPhone], 
            [Duration], 
            [IsRecorded], 
            [RecordingURL], 
            [IsConference], 
            [IsStreamed], 
            [IsIncoming], 
            [CallStatus], 
            [LastCallStatusUpdate], 
            [IsTranscribed], 
            [IsEmptyTranscription], 
            [TranscriptionSummary], 
            [Data], 
            getdate(), 
            getdate(), 
            [Transcription], 
            [CallKey] + ' - Copy'
    FROM [Calls]
    WHERE CallID = @CallID
    SELECT scope_identity() as CallID


GO
/****** Object:  StoredProcedure [dbo].[CopyCampaignSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CopyCampaignSp]
	@CampaignID [int]
AS

    -- Automatically generated on 3/15/2023 4:58:59 PM.
    
    INSERT INTO Campaigns
    (
            [SourceID], 
            [CampaignName], 
            [CampaignKey], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    SELECT
            [SourceID], 
            [CampaignName] + ' - Copy', 
            [CampaignKey] + ' - Copy', 
            [Data], 
            getdate(), 
            getdate()
    FROM [Campaigns]
    WHERE CampaignID = @CampaignID
    SELECT scope_identity() as CampaignID
GO
/****** Object:  StoredProcedure [dbo].[CopyContentSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CopyContentSp]
	@ContentID [int]
AS

    -- Automatically generated on 8/1/2024 3:23:28 PM.
    
    INSERT INTO Contents
    (
            [ContentName], 
            [Content], 
            [LastUpdated], 
            [DateCreated], 
            [Data], 
            [ContentTypeID]
    )
    SELECT
            [ContentName] + ' - Copy', 
            [Content], 
            getdate(), 
            getdate(), 
            [Data], 
            [ContentTypeID]
    FROM [Contents]
    WHERE ContentID = @ContentID
    SELECT scope_identity() as ContentID


GO
/****** Object:  StoredProcedure [dbo].[CopyContentTypeSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CopyContentTypeSp]
	@ContentTypeID [int]
AS

    -- Automatically generated on 8/1/2024 3:23:28 PM.
    
    INSERT INTO ContentTypes
    (
            [ContentTypeName], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    SELECT
            [ContentTypeName] + ' - Copy', 
            [Data], 
            getdate(), 
            getdate()
    FROM [ContentTypes]
    WHERE ContentTypeID = @ContentTypeID
    SELECT scope_identity() as ContentTypeID


GO
/****** Object:  StoredProcedure [dbo].[CopyDomainSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CopyDomainSp]
	@DomainID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    INSERT INTO Domains
    (
            [DomainName], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    SELECT
            [DomainName] + ' - Copy', 
            [Data], 
            getdate(), 
            getdate()
    FROM [Domains]
    WHERE DomainID = @DomainID
    SELECT scope_identity() as DomainID


GO
/****** Object:  StoredProcedure [dbo].[CopyEmailAddressSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CopyEmailAddressSp]
	@EmailAddressID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    INSERT INTO EmailAddresses
    (
            [Email], 
            [Data], 
            [DateCreated], 
            [LastUpdated], 
            [IsBlocked], 
            [IsInternal], 
            [DomainID]
    )
    SELECT
            [Email] + ' - Copy', 
            [Data], 
            getdate(), 
            getdate(), 
            [IsBlocked], 
            [IsInternal], 
            [DomainID]
    FROM [EmailAddresses]
    WHERE EmailAddressID = @EmailAddressID
    SELECT scope_identity() as EmailAddressID


GO
/****** Object:  StoredProcedure [dbo].[CopyEmailHistorySp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CopyEmailHistorySp]
	@EmailHistoryID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    INSERT INTO EmailHistories
    (
            [To], 
            [From], 
            [EmailTemplateID], 
            [Subject], 
            [Email], 
            [DateCreated], 
            [IsPending], 
            [IsSent], 
            [Data], 
            [LastUpdated]
    )
    SELECT
            [To], 
            [From], 
            [EmailTemplateID], 
            [Subject], 
            [Email], 
            getdate(), 
            [IsPending], 
            [IsSent], 
            [Data], 
            getdate()
    FROM [EmailHistories]
    WHERE EmailHistoryID = @EmailHistoryID
    SELECT scope_identity() as EmailHistoryID
GO
/****** Object:  StoredProcedure [dbo].[CopyEmailTemplateSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CopyEmailTemplateSp]
	@EmailTemplateID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    INSERT INTO EmailTemplates
    (
            [Name], 
            [EmailSubject], 
            [EmailText], 
            [EmailParams], 
            [FromAddress], 
            [DateCreated], 
            [LastUpdated], 
            [Data]
    )
    SELECT
            [Name] + ' - Copy', 
            [EmailSubject], 
            [EmailText], 
            [EmailParams], 
            [FromAddress], 
            getdate(), 
            getdate(), 
            [Data]
    FROM [EmailTemplates]
    WHERE EmailTemplateID = @EmailTemplateID
    SELECT scope_identity() as EmailTemplateID
GO
/****** Object:  StoredProcedure [dbo].[CopyFeatureSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CopyFeatureSp]
	@FeatureID [int]
AS

    -- Automatically generated on 6/29/2024 7:45:32 AM.
    
    INSERT INTO Features
    (
            [FeatureName], 
            [Version], 
            [IsEnabled], 
            [SettingsAssembly], 
            [SettingsClass], 
            [Settings], 
            [DateCreated], 
            [LastUpdated], 
            [Data]
    )
    SELECT
            [FeatureName] + ' - Copy', 
            [Version], 
            [IsEnabled], 
            [SettingsAssembly], 
            [SettingsClass], 
            [Settings], 
            getdate(), 
            getdate(), 
            [Data]
    FROM [Features]
    WHERE FeatureID = @FeatureID
    SELECT scope_identity() as FeatureID


GO
/****** Object:  StoredProcedure [dbo].[CopyFileSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CopyFileSp]
	@FileID [int]
AS

    -- Automatically generated on 7/18/2024 5:57:46 PM.
    
    INSERT INTO Files
    (
            [FileTypeID], 
            [PhysicalPath], 
            [FileName], 
            [FileDescription], 
            [Label], 
            [Data], 
            [IsDeleted], 
            [DateCreated], 
            [LastUpdated]
    )
    SELECT
            [FileTypeID], 
            [PhysicalPath], 
            [FileName], 
            [FileDescription], 
            [Label], 
            [Data], 
            [IsDeleted], 
            getdate(), 
            getdate()
    FROM [Files]
    WHERE FileID = @FileID
    SELECT scope_identity() as FileID


GO
/****** Object:  StoredProcedure [dbo].[CopyFileTypeSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CopyFileTypeSp]
	@FileTypeID [int]
AS

    -- Automatically generated on 7/17/2024 10:51:48 AM.
    
    INSERT INTO FileTypes
    (
            [FileType], 
            [AllowedExtensions], 
            [DateCreated], 
            [LastUpdated]
    )
    SELECT
            [FileType] + ' - Copy', 
            [AllowedExtensions], 
            getdate(), 
            getdate()
    FROM [FileTypes]
    WHERE FileTypeID = @FileTypeID
    SELECT scope_identity() as FileTypeID


GO
/****** Object:  StoredProcedure [dbo].[CopyLeadAddressSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CopyLeadAddressSp]
	@LeadAddressID [int]
AS

    -- Automatically generated on 7/25/2024 2:20:08 PM.
    
    INSERT INTO LeadAddresses
    (
            [LastUpdated], 
            [Data], 
            [AddressType], 
            [Phone], 
            [Fax], 
            [LeadID], 
            [Name], 
            [Line1], 
            [Line2], 
            [City], 
            [State], 
            [Zip], 
            [Country], 
            [DateCreated]
    )
    SELECT
            getdate(), 
            [Data], 
            [AddressType], 
            [Phone], 
            [Fax], 
            [LeadID], 
            [Name], 
            [Line1], 
            [Line2], 
            [City], 
            [State], 
            [Zip], 
            [Country], 
            getdate()
    FROM [LeadAddresses]
    WHERE LeadAddressID = @LeadAddressID
    SELECT scope_identity() as LeadAddressID


GO
/****** Object:  StoredProcedure [dbo].[CopyLeadContactSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CopyLeadContactSp]
	@LeadContactID [int]
AS

    -- Automatically generated on 8/26/2023 8:04:05 AM.
    
    INSERT INTO LeadContacts
    (
            [LeadID], 
            [Name], 
            [Title], 
            [Phone], 
            [Email], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    SELECT
            [LeadID], 
            [Name], 
            [Title], 
            [Phone], 
            [Email], 
            [Data], 
            getdate(), 
            getdate()
    FROM [LeadContacts]
    WHERE LeadContactID = @LeadContactID
    SELECT scope_identity() as LeadContactID
GO
/****** Object:  StoredProcedure [dbo].[CopyLeadNoteSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CopyLeadNoteSp]
	@LeadNoteID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    INSERT INTO LeadNotes
    (
            [LeadNoteTypeID], 
            [LeadID], 
            [SalesRepresentativeID], 
            [Notes], 
            [FollowUpDate], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    SELECT
            [LeadNoteTypeID], 
            [LeadID], 
            [SalesRepresentativeID], 
            [Notes], 
            [FollowUpDate], 
            [Data], 
            getdate(), 
            getdate()
    FROM [LeadNotes]
    WHERE LeadNoteID = @LeadNoteID
    SELECT scope_identity() as LeadNoteID
GO
/****** Object:  StoredProcedure [dbo].[CopyLeadNoteTypeSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CopyLeadNoteTypeSp]
	@LeadNoteTypeID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    INSERT INTO LeadNoteTypes
    (
            [LeadNoteTypeName], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    SELECT
            [LeadNoteTypeName] + ' - Copy', 
            [Data], 
            getdate(), 
            getdate()
    FROM [LeadNoteTypes]
    WHERE LeadNoteTypeID = @LeadNoteTypeID
    SELECT scope_identity() as LeadNoteTypeID
GO
/****** Object:  StoredProcedure [dbo].[CopyLeadRelationshipSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CopyLeadRelationshipSp]
	@LeadRelationshipID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    INSERT INTO LeadRelationships
    (
            [LeadRelationshipTypeID], 
            [LeadID], 
            [RelatedLeadID], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    SELECT
            [LeadRelationshipTypeID], 
            [LeadID], 
            [RelatedLeadID], 
            [Data], 
            getdate(), 
            getdate()
    FROM [LeadRelationships]
    WHERE LeadRelationshipID = @LeadRelationshipID
    SELECT scope_identity() as LeadRelationshipID
GO
/****** Object:  StoredProcedure [dbo].[CopyLeadRelationshipTypeSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CopyLeadRelationshipTypeSp]
	@LeadRelationshipTypeID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    INSERT INTO LeadRelationshipTypes
    (
            [LeadRelationshipTypeName], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    SELECT
            [LeadRelationshipTypeName] + ' - Copy', 
            [Data], 
            getdate(), 
            getdate()
    FROM [LeadRelationshipTypes]
    WHERE LeadRelationshipTypeID = @LeadRelationshipTypeID
    SELECT scope_identity() as LeadRelationshipTypeID
GO
/****** Object:  StoredProcedure [dbo].[CopyLeadSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CopyLeadSp]
	@LeadID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    INSERT INTO Leads
    (
            [AccountID], 
            [LeadSubStatusID], 
            [FollowUpDate], 
            [Company], 
            [FirstName], 
            [LastName], 
            [Phone], 
            [Email], 
            [Address], 
            [Address2], 
            [City], 
            [State], 
            [ZipCode], 
            [SourceID], 
            [LastContactedDate], 
            [Priority], 
            [LeadStatusID], 
            [OpportunitySize], 
            [Data], 
            [DateCreated], 
            [LastUpdated], 
            [SalesRepresentativeID], 
            [ImportKey], 
            [GeneratedDate], 
            [CampaignID]
    )
    SELECT
            [AccountID], 
            [LeadSubStatusID], 
            [FollowUpDate], 
            [Company], 
            [FirstName], 
            [LastName], 
            [Phone], 
            [Email], 
            [Address], 
            [Address2], 
            [City], 
            [State], 
            [ZipCode], 
            [SourceID], 
            [LastContactedDate], 
            [Priority], 
            [LeadStatusID], 
            [OpportunitySize], 
            [Data], 
            getdate(), 
            getdate(), 
            [SalesRepresentativeID], 
            [ImportKey], 
            [GeneratedDate], 
            [CampaignID]
    FROM [Leads]
    WHERE LeadID = @LeadID
    SELECT scope_identity() as LeadID
GO
/****** Object:  StoredProcedure [dbo].[CopyLeadStatusSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CopyLeadStatusSp]
	@LeadStatusID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    INSERT INTO LeadStatuses
    (
            [StatusName], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    SELECT
            [StatusName] + ' - Copy', 
            [Data], 
            getdate(), 
            getdate()
    FROM [LeadStatuses]
    WHERE LeadStatusID = @LeadStatusID
    SELECT scope_identity() as LeadStatusID
GO
/****** Object:  StoredProcedure [dbo].[CopyLeadSubStatusSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CopyLeadSubStatusSp]
	@LeadSubStatusID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    INSERT INTO LeadSubStatuses
    (
            [LeadStatusID], 
            [SubStatusName], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    SELECT
            [LeadStatusID], 
            [SubStatusName] + ' - Copy', 
            [Data], 
            getdate(), 
            getdate()
    FROM [LeadSubStatuses]
    WHERE LeadSubStatusID = @LeadSubStatusID
    SELECT scope_identity() as LeadSubStatusID
GO
/****** Object:  StoredProcedure [dbo].[CopyLeadTagSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CopyLeadTagSp]
	@LeadTagID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    INSERT INTO LeadTags
    (
            [LeadID], 
            [TagID], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    SELECT
            [LeadID], 
            [TagID], 
            [Data], 
            getdate(), 
            getdate()
    FROM [LeadTags]
    WHERE LeadTagID = @LeadTagID
    SELECT scope_identity() as LeadTagID
GO
/****** Object:  StoredProcedure [dbo].[CopyMessageSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CopyMessageSp]
	@MessageID [int]
AS

    -- Automatically generated on 6/29/2024 2:56:36 PM.
    
    INSERT INTO Messages
    (
            [MessageText], 
            [SentByPhone], 
            [ReceivedByPhone], 
            [DateCreated], 
            [LastUpdated], 
            [Data], 
            [IsDelivered], 
            [IsReceived], 
            [IsDismissed]
    )
    SELECT
            [MessageText], 
            [SentByPhone], 
            [ReceivedByPhone], 
            getdate(), 
            getdate(), 
            [Data], 
            [IsDelivered], 
            [IsReceived], 
            [IsDismissed]
    FROM [Messages]
    WHERE MessageID = @MessageID
    SELECT scope_identity() as MessageID


GO
/****** Object:  StoredProcedure [dbo].[CopyPageLayoutSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CopyPageLayoutSp]
	@PageLayoutID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    INSERT INTO PageLayouts
    (
            [Url], 
            [Handler], 
            [IsEnabled], 
            [DateCreated], 
            [LastUpdated], 
            [PageTitle], 
            [SiteID]
    )
    SELECT
            [Url] + ' - Copy', 
            [Handler], 
            [IsEnabled], 
            getdate(), 
            getdate(), 
            [PageTitle], 
            [SiteID]
    FROM [PageLayouts]
    WHERE PageLayoutID = @PageLayoutID
    SELECT scope_identity() as PageLayoutID
GO
/****** Object:  StoredProcedure [dbo].[CopyPhoneNumberSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CopyPhoneNumberSp]
	@PhoneNumberID [int]
AS

    -- Automatically generated on 9/9/2024 10:10:00 AM.
    
    INSERT INTO PhoneNumbers
    (
            [PhoneNumber], 
            [PhoneType], 
            [IsInternal], 
            [CallerName], 
            [Country], 
            [Data], 
            [DateCreated], 
            [LastUpdated], 
            [IsBlocked], 
            [IsSpam]
    )
    SELECT
            [PhoneNumber] + ' - Copy', 
            [PhoneType], 
            [IsInternal], 
            [CallerName], 
            [Country], 
            [Data], 
            getdate(), 
            getdate(), 
            [IsBlocked], 
            [IsSpam]
    FROM [PhoneNumbers]
    WHERE PhoneNumberID = @PhoneNumberID
    SELECT scope_identity() as PhoneNumberID


GO
/****** Object:  StoredProcedure [dbo].[CopyRawEmailAddressSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CopyRawEmailAddressSp]
	@RawEmailAddressID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    INSERT INTO RawEmailAddresses
    (
            [RawEmailID], 
            [IsFrom], 
            [Data], 
            [DateCreated], 
            [LastUpdated], 
            [EmailAddressID], 
            [DomainID]
    )
    SELECT
            [RawEmailID], 
            [IsFrom], 
            [Data], 
            getdate(), 
            getdate(), 
            [EmailAddressID], 
            [DomainID]
    FROM [RawEmailAddresses]
    WHERE RawEmailAddressID = @RawEmailAddressID
    SELECT scope_identity() as RawEmailAddressID


GO
/****** Object:  StoredProcedure [dbo].[CopyRawEmailSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CopyRawEmailSp]
	@RawEmailID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    INSERT INTO RawEmails
    (
            [To], 
            [From], 
            [Subject], 
            [BodyText], 
            [BodyHtml], 
            [IsProcessed], 
            [Label], 
            [DateCreated], 
            [LastUpdated], 
            [Data], 
            [UserID], 
            [ImportKey], 
            [EmailDate], 
            [ThreadID]
    )
    SELECT
            [To], 
            [From], 
            [Subject], 
            [BodyText], 
            [BodyHtml], 
            [IsProcessed], 
            [Label], 
            getdate(), 
            getdate(), 
            [Data], 
            [UserID], 
            [ImportKey] + ' - Copy', 
            [EmailDate], 
            [ThreadID]
    FROM [RawEmails]
    WHERE RawEmailID = @RawEmailID
    SELECT scope_identity() as RawEmailID


GO
/****** Object:  StoredProcedure [dbo].[CopyRoleSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CopyRoleSp]
	@RoleID [int]
AS

    -- Automatically generated on 1/18/2023 6:29:15 AM.
    
    INSERT INTO Roles
    (
            [RoleName], 
            [DateCreated], 
            [LastUpdated], 
            [Data]
    )
    SELECT
            [RoleName] + ' - Copy', 
            getdate(), 
            getdate(), 
            [Data]
    FROM [Roles]
    WHERE RoleID = @RoleID
    SELECT scope_identity() as RoleID
GO
/****** Object:  StoredProcedure [dbo].[CopySalesRepresentativeSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CopySalesRepresentativeSp]
	@SalesRepresentativeID [int]
AS

    -- Automatically generated on 8/23/2024 9:58:34 AM.
    
    INSERT INTO SalesRepresentatives
    (
            [Notes], 
            [LastUpdated], 
            [DateCreated], 
            [Data], 
            [SalesRepresentativeTypeID], 
            [UserID]
    )
    SELECT
            [Notes], 
            getdate(), 
            getdate(), 
            [Data], 
            [SalesRepresentativeTypeID], 
            [UserID] + ' - Copy'
    FROM [SalesRepresentatives]
    WHERE SalesRepresentativeID = @SalesRepresentativeID
    SELECT scope_identity() as SalesRepresentativeID


GO
/****** Object:  StoredProcedure [dbo].[CopySalesRepresentativeTypeSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CopySalesRepresentativeTypeSp]
	@SalesRepresentativeTypeID [int]
AS

    -- Automatically generated on 3/20/2023 2:59:18 PM.
    
    INSERT INTO SalesRepresentativeTypes
    (
            [SalesRepresentativeTypeName], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    SELECT
            [SalesRepresentativeTypeName] + ' - Copy', 
            [Data], 
            getdate(), 
            getdate()
    FROM [SalesRepresentativeTypes]
    WHERE SalesRepresentativeTypeID = @SalesRepresentativeTypeID
    SELECT scope_identity() as SalesRepresentativeTypeID
GO
/****** Object:  StoredProcedure [dbo].[CopySourceSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CopySourceSp]
	@SourceID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    INSERT INTO Sources
    (
            [SourceName], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    SELECT
            [SourceName] + ' - Copy', 
            [Data], 
            getdate(), 
            getdate()
    FROM [Sources]
    WHERE SourceID = @SourceID
    SELECT scope_identity() as SourceID
GO
/****** Object:  StoredProcedure [dbo].[CopyTagSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CopyTagSp]
	@TagID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    INSERT INTO Tags
    (
            [SalesRepresentativeID], 
            [TagName], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    SELECT
            [SalesRepresentativeID], 
            [TagName] + ' - Copy', 
            [Data], 
            getdate(), 
            getdate()
    FROM [Tags]
    WHERE TagID = @TagID
    SELECT scope_identity() as TagID
GO
/****** Object:  StoredProcedure [dbo].[CopyUserRoleSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CopyUserRoleSp]
	@UserRoleID [int]
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    INSERT INTO UserRoles
    (
            [UserID], 
            [RoleID], 
            [DateCreated], 
            [LastUpdated], 
            [Data]
    )
    SELECT
            [UserID], 
            [RoleID], 
            getdate(), 
            getdate(), 
            [Data]
    FROM [UserRoles]
    WHERE UserRoleID = @UserRoleID
    SELECT scope_identity() as UserRoleID
GO
/****** Object:  StoredProcedure [dbo].[CopyUserSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CopyUserSp]
	@UserID [int]
AS

    -- Automatically generated on 8/23/2024 9:58:34 AM.
    
    INSERT INTO Users
    (
            [IsEnabled], 
            [DateCreated], 
            [LastUpdated], 
            [Data], 
            [Email], 
            [Phone], 
            [Password], 
            [HasLoggedIn], 
            [LastLoginDate], 
            [IsLockedOut], 
            [InvitationCode], 
            [InvitationExpiration], 
            [IsInvited], 
            [InvitedDate], 
            [FirstName], 
            [LastName]
    )
    SELECT
            [IsEnabled], 
            getdate(), 
            getdate(), 
            [Data], 
            [Email] + ' - Copy', 
            [Phone], 
            [Password], 
            [HasLoggedIn], 
            [LastLoginDate], 
            [IsLockedOut], 
            [InvitationCode], 
            [InvitationExpiration], 
            [IsInvited], 
            [InvitedDate], 
            [FirstName], 
            [LastName]
    FROM [Users]
    WHERE UserID = @UserID
    SELECT scope_identity() as UserID


GO
/****** Object:  StoredProcedure [dbo].[GetAgentByAgentNameSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetAgentByAgentNameSp]
	@AgentName [nvarchar](255)
AS

    -- Automatically generated on 8/14/2024 10:50:19 AM.
    
    SELECT *
    FROM Agents WITH (NOLOCK) 
    WHERE [AgentName] = @AgentName

GO
/****** Object:  StoredProcedure [dbo].[GetAgentsByAgentTypeIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetAgentsByAgentTypeIDSp]
	@AgentTypeID [int]
AS

    -- Automatically generated on 10/9/2024 4:50:41 PM.
    
    SELECT *
    FROM Agents WITH (NOLOCK) 
    WHERE [AgentTypeID] = @AgentTypeID

GO
/****** Object:  StoredProcedure [dbo].[GetAgentsByAgentTypeIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetAgentsByAgentTypeIDSp_CountSp]
	@AgentTypeID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 10/9/2024 4:50:41 PM.
    
    SELECT *
    FROM Agents WITH (NOLOCK) 
    WHERE [AgentTypeID] = @AgentTypeID
				) sub
	where		
					[AgentID] like '%' + @Search + '%' or
					[AgentName] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetAgentsByAgentTypeIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetAgentsByAgentTypeIDSp_PagingSp]
	@AgentTypeID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'AgentID' and @SortAscending = 1 then 
							[AgentID]
						end ASC,
						case when @SortColumn = 'AgentID' and @SortAscending = 0 then 
							[AgentID]
						end DESC,
			
						case when @SortColumn = 'AgentName' and @SortAscending = 1 then 
							[AgentName]
						end ASC,
						case when @SortColumn = 'AgentName' and @SortAscending = 0 then 
							[AgentName]
						end DESC,
			
						case when @SortColumn = 'ContextSettings' and @SortAscending = 1 then 
							[ContextSettings]
						end ASC,
						case when @SortColumn = 'ContextSettings' and @SortAscending = 0 then 
							[ContextSettings]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'AgentTypeID' and @SortAscending = 1 then 
							[AgentTypeID]
						end ASC,
						case when @SortColumn = 'AgentTypeID' and @SortAscending = 0 then 
							[AgentTypeID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 10/9/2024 4:50:41 PM.
    
    SELECT *
    FROM Agents WITH (NOLOCK) 
    WHERE [AgentTypeID] = @AgentTypeID
					) sub
		where		
					[AgentID] like '%' + @Search + '%' or
					[AgentName] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetAgentSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetAgentSp]
	@AgentID [int]
AS

    -- Automatically generated on 8/14/2024 10:50:19 AM.
    
    SELECT *
    FROM Agents WITH (NOLOCK) 
     WHERE AgentID = @AgentID


GO
/****** Object:  StoredProcedure [dbo].[GetAgentsSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetAgentsSp]
AS

    -- Automatically generated on 8/14/2024 10:50:19 AM.
    
    SELECT *
    FROM Agents WITH (NOLOCK) 

GO
/****** Object:  StoredProcedure [dbo].[GetAgentsSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetAgentsSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 8/14/2024 10:50:19 AM.
    
    SELECT *
    FROM Agents WITH (NOLOCK) 
				) sub
	where		
					[AgentID] like '%' + @Search + '%' or
					[AgentName] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetAgentsSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetAgentsSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'AgentID' and @SortAscending = 1 then 
							[AgentID]
						end ASC,
						case when @SortColumn = 'AgentID' and @SortAscending = 0 then 
							[AgentID]
						end DESC,
			
						case when @SortColumn = 'AgentName' and @SortAscending = 1 then 
							[AgentName]
						end ASC,
						case when @SortColumn = 'AgentName' and @SortAscending = 0 then 
							[AgentName]
						end DESC,
			
						case when @SortColumn = 'ContextSettings' and @SortAscending = 1 then 
							[ContextSettings]
						end ASC,
						case when @SortColumn = 'ContextSettings' and @SortAscending = 0 then 
							[ContextSettings]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 8/14/2024 10:50:19 AM.
    
    SELECT *
    FROM Agents WITH (NOLOCK) 
					) sub
		where		
					[AgentID] like '%' + @Search + '%' or
					[AgentName] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetAgentTypeByAgentTypeNameSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetAgentTypeByAgentTypeNameSp]
	@AgentTypeName [nvarchar](255)
AS

    -- Automatically generated on 10/9/2024 4:50:41 PM.
    
    SELECT *
    FROM AgentTypes WITH (NOLOCK) 
    WHERE [AgentTypeName] = @AgentTypeName

GO
/****** Object:  StoredProcedure [dbo].[GetAgentTypeSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetAgentTypeSp]
	@AgentTypeID [int]
AS

    -- Automatically generated on 10/9/2024 4:50:41 PM.
    
    SELECT *
    FROM AgentTypes WITH (NOLOCK) 
     WHERE AgentTypeID = @AgentTypeID


GO
/****** Object:  StoredProcedure [dbo].[GetAgentTypesSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetAgentTypesSp]
AS

    -- Automatically generated on 10/9/2024 4:50:41 PM.
    
    SELECT *
    FROM AgentTypes WITH (NOLOCK) 

GO
/****** Object:  StoredProcedure [dbo].[GetAgentTypesSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetAgentTypesSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 10/9/2024 4:50:41 PM.
    
    SELECT *
    FROM AgentTypes WITH (NOLOCK) 
				) sub
	where		
					[AgentTypeID] like '%' + @Search + '%' or
					[AgentTypeName] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetAgentTypesSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetAgentTypesSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'AgentTypeID' and @SortAscending = 1 then 
							[AgentTypeID]
						end ASC,
						case when @SortColumn = 'AgentTypeID' and @SortAscending = 0 then 
							[AgentTypeID]
						end DESC,
			
						case when @SortColumn = 'AgentTypeName' and @SortAscending = 1 then 
							[AgentTypeName]
						end ASC,
						case when @SortColumn = 'AgentTypeName' and @SortAscending = 0 then 
							[AgentTypeName]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 10/9/2024 4:50:41 PM.
    
    SELECT *
    FROM AgentTypes WITH (NOLOCK) 
					) sub
		where		
					[AgentTypeID] like '%' + @Search + '%' or
					[AgentTypeName] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetAreaCodeByAreaCodeSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetAreaCodeByAreaCodeSp]
	@AreaCode [nvarchar](255)
AS

    -- Automatically generated on 8/26/2023 8:04:05 AM.
    
    SELECT *
    FROM AreaCodes WITH (NOLOCK) 
    WHERE [AreaCode] = @AreaCode
GO
/****** Object:  StoredProcedure [dbo].[GetAreaCodeSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetAreaCodeSp]
	@AreaCodeID [int]
AS

    -- Automatically generated on 8/26/2023 8:04:05 AM.
    
    SELECT *
    FROM AreaCodes WITH (NOLOCK) 
     WHERE AreaCodeID = @AreaCodeID
GO
/****** Object:  StoredProcedure [dbo].[GetAreaCodesSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetAreaCodesSp]
AS

    -- Automatically generated on 8/26/2023 8:04:05 AM.
    
    SELECT *
    FROM AreaCodes WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetAreaCodesSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetAreaCodesSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 8/26/2023 8:04:05 AM.
    
    SELECT *
    FROM AreaCodes WITH (NOLOCK) 
				) sub
	where		
					[AreaCodeID] like '%' + @Search + '%' or
					[AreaCode] like '%' + @Search + '%' or
					[TimeZone] like '%' + @Search + '%' or
					[Region] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetAreaCodesSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetAreaCodesSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'AreaCodeID' and @SortAscending = 1 then 
							[AreaCodeID]
						end ASC,
						case when @SortColumn = 'AreaCodeID' and @SortAscending = 0 then 
							[AreaCodeID]
						end DESC,
			
						case when @SortColumn = 'AreaCode' and @SortAscending = 1 then 
							[AreaCode]
						end ASC,
						case when @SortColumn = 'AreaCode' and @SortAscending = 0 then 
							[AreaCode]
						end DESC,
			
						case when @SortColumn = 'TimeZone' and @SortAscending = 1 then 
							[TimeZone]
						end ASC,
						case when @SortColumn = 'TimeZone' and @SortAscending = 0 then 
							[TimeZone]
						end DESC,
			
						case when @SortColumn = 'Region' and @SortAscending = 1 then 
							[Region]
						end ASC,
						case when @SortColumn = 'Region' and @SortAscending = 0 then 
							[Region]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 8/26/2023 8:04:05 AM.
    
    SELECT *
    FROM AreaCodes WITH (NOLOCK) 
					) sub
		where		
					[AreaCodeID] like '%' + @Search + '%' or
					[AreaCode] like '%' + @Search + '%' or
					[TimeZone] like '%' + @Search + '%' or
					[Region] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetAuthorizationByAuthorizationTokenSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetAuthorizationByAuthorizationTokenSp]
	@AuthorizationToken [nvarchar](255)
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT *
    FROM Authorizations WITH (NOLOCK) 
    WHERE [AuthorizationToken] = @AuthorizationToken
GO
/****** Object:  StoredProcedure [dbo].[GetAuthorizationsByRefreshTokenSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetAuthorizationsByRefreshTokenSp]
	@RefreshToken [nvarchar](255)
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT *
    FROM Authorizations WITH (NOLOCK) 
    WHERE [RefreshToken] = @RefreshToken
GO
/****** Object:  StoredProcedure [dbo].[GetAuthorizationsByUserIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetAuthorizationsByUserIDSp]
	@UserID [int]
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT *
    FROM Authorizations WITH (NOLOCK) 
    WHERE [UserID] = @UserID
GO
/****** Object:  StoredProcedure [dbo].[GetAuthorizationsByUserIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetAuthorizationsByUserIDSp_CountSp]
	@UserID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT *
    FROM Authorizations WITH (NOLOCK) 
    WHERE [UserID] = @UserID
				) sub
	where		
					[AuthorizationID] like '%' + @Search + '%' or
					[AuthorizationToken] like '%' + @Search + '%' or
					[RefreshToken] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetAuthorizationsByUserIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetAuthorizationsByUserIDSp_PagingSp]
	@UserID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'AuthorizationID' and @SortAscending = 1 then 
							[AuthorizationID]
						end ASC,
						case when @SortColumn = 'AuthorizationID' and @SortAscending = 0 then 
							[AuthorizationID]
						end DESC,
			
						case when @SortColumn = 'AuthorizationToken' and @SortAscending = 1 then 
							[AuthorizationToken]
						end ASC,
						case when @SortColumn = 'AuthorizationToken' and @SortAscending = 0 then 
							[AuthorizationToken]
						end DESC,
			
						case when @SortColumn = 'RefreshToken' and @SortAscending = 1 then 
							[RefreshToken]
						end ASC,
						case when @SortColumn = 'RefreshToken' and @SortAscending = 0 then 
							[RefreshToken]
						end DESC,
			
						case when @SortColumn = 'Expiration' and @SortAscending = 1 then 
							[Expiration]
						end ASC,
						case when @SortColumn = 'Expiration' and @SortAscending = 0 then 
							[Expiration]
						end DESC,
			
						case when @SortColumn = 'UserID' and @SortAscending = 1 then 
							[UserID]
						end ASC,
						case when @SortColumn = 'UserID' and @SortAscending = 0 then 
							[UserID]
						end DESC,
			
						case when @SortColumn = 'LastRefreshedDate' and @SortAscending = 1 then 
							[LastRefreshedDate]
						end ASC,
						case when @SortColumn = 'LastRefreshedDate' and @SortAscending = 0 then 
							[LastRefreshedDate]
						end DESC,
			
						case when @SortColumn = 'LastActivityDate' and @SortAscending = 1 then 
							[LastActivityDate]
						end ASC,
						case when @SortColumn = 'LastActivityDate' and @SortAscending = 0 then 
							[LastActivityDate]
						end DESC,
			
						case when @SortColumn = 'IsExpired' and @SortAscending = 1 then 
							[IsExpired]
						end ASC,
						case when @SortColumn = 'IsExpired' and @SortAscending = 0 then 
							[IsExpired]
						end DESC,
			
						case when @SortColumn = 'IsRevoked' and @SortAscending = 1 then 
							[IsRevoked]
						end ASC,
						case when @SortColumn = 'IsRevoked' and @SortAscending = 0 then 
							[IsRevoked]
						end DESC,
			
						case when @SortColumn = 'IsEncrypted' and @SortAscending = 1 then 
							[IsEncrypted]
						end ASC,
						case when @SortColumn = 'IsEncrypted' and @SortAscending = 0 then 
							[IsEncrypted]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT *
    FROM Authorizations WITH (NOLOCK) 
    WHERE [UserID] = @UserID
					) sub
		where		
					[AuthorizationID] like '%' + @Search + '%' or
					[AuthorizationToken] like '%' + @Search + '%' or
					[RefreshToken] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetAuthorizationSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetAuthorizationSp]
	@AuthorizationID [int]
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT *
    FROM Authorizations WITH (NOLOCK) 
     WHERE AuthorizationID = @AuthorizationID
GO
/****** Object:  StoredProcedure [dbo].[GetAuthorizationsSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetAuthorizationsSp]
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT *
    FROM Authorizations WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetAuthorizationsSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetAuthorizationsSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT *
    FROM Authorizations WITH (NOLOCK) 
				) sub
	where		
					[AuthorizationID] like '%' + @Search + '%' or
					[AuthorizationToken] like '%' + @Search + '%' or
					[RefreshToken] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetAuthorizationsSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetAuthorizationsSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'AuthorizationID' and @SortAscending = 1 then 
							[AuthorizationID]
						end ASC,
						case when @SortColumn = 'AuthorizationID' and @SortAscending = 0 then 
							[AuthorizationID]
						end DESC,
			
						case when @SortColumn = 'AuthorizationToken' and @SortAscending = 1 then 
							[AuthorizationToken]
						end ASC,
						case when @SortColumn = 'AuthorizationToken' and @SortAscending = 0 then 
							[AuthorizationToken]
						end DESC,
			
						case when @SortColumn = 'RefreshToken' and @SortAscending = 1 then 
							[RefreshToken]
						end ASC,
						case when @SortColumn = 'RefreshToken' and @SortAscending = 0 then 
							[RefreshToken]
						end DESC,
			
						case when @SortColumn = 'Expiration' and @SortAscending = 1 then 
							[Expiration]
						end ASC,
						case when @SortColumn = 'Expiration' and @SortAscending = 0 then 
							[Expiration]
						end DESC,
			
						case when @SortColumn = 'UserID' and @SortAscending = 1 then 
							[UserID]
						end ASC,
						case when @SortColumn = 'UserID' and @SortAscending = 0 then 
							[UserID]
						end DESC,
			
						case when @SortColumn = 'LastRefreshedDate' and @SortAscending = 1 then 
							[LastRefreshedDate]
						end ASC,
						case when @SortColumn = 'LastRefreshedDate' and @SortAscending = 0 then 
							[LastRefreshedDate]
						end DESC,
			
						case when @SortColumn = 'LastActivityDate' and @SortAscending = 1 then 
							[LastActivityDate]
						end ASC,
						case when @SortColumn = 'LastActivityDate' and @SortAscending = 0 then 
							[LastActivityDate]
						end DESC,
			
						case when @SortColumn = 'IsExpired' and @SortAscending = 1 then 
							[IsExpired]
						end ASC,
						case when @SortColumn = 'IsExpired' and @SortAscending = 0 then 
							[IsExpired]
						end DESC,
			
						case when @SortColumn = 'IsRevoked' and @SortAscending = 1 then 
							[IsRevoked]
						end ASC,
						case when @SortColumn = 'IsRevoked' and @SortAscending = 0 then 
							[IsRevoked]
						end DESC,
			
						case when @SortColumn = 'IsEncrypted' and @SortAscending = 1 then 
							[IsEncrypted]
						end ASC,
						case when @SortColumn = 'IsEncrypted' and @SortAscending = 0 then 
							[IsEncrypted]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT *
    FROM Authorizations WITH (NOLOCK) 
					) sub
		where		
					[AuthorizationID] like '%' + @Search + '%' or
					[AuthorizationToken] like '%' + @Search + '%' or
					[RefreshToken] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetBlockedEmailByEmailSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetBlockedEmailByEmailSp]
	@Email [nvarchar](255)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM BlockedEmails WITH (NOLOCK) 
    WHERE [Email] = @Email
GO
/****** Object:  StoredProcedure [dbo].[GetBlockedEmailSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetBlockedEmailSp]
	@BlockedEmailID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM BlockedEmails WITH (NOLOCK) 
     WHERE BlockedEmailID = @BlockedEmailID
GO
/****** Object:  StoredProcedure [dbo].[GetBlockedEmailsSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetBlockedEmailsSp]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM BlockedEmails WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetBlockedEmailsSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetBlockedEmailsSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM BlockedEmails WITH (NOLOCK) 
				) sub
	where		
					[BlockedEmailID] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetBlockedEmailsSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetBlockedEmailsSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'BlockedEmailID' and @SortAscending = 1 then 
							[BlockedEmailID]
						end ASC,
						case when @SortColumn = 'BlockedEmailID' and @SortAscending = 0 then 
							[BlockedEmailID]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM BlockedEmails WITH (NOLOCK) 
					) sub
		where		
					[BlockedEmailID] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetCallByCallKeySp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetCallByCallKeySp]
	@CallKey [nvarchar](255)
AS

    -- Automatically generated on 7/1/2024 7:51:00 AM.
    
    SELECT *
    FROM Calls WITH (NOLOCK) 
    WHERE [CallKey] = @CallKey

GO
/****** Object:  StoredProcedure [dbo].[GetCallSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetCallSp]
	@CallID [int]
AS

    -- Automatically generated on 7/1/2024 7:51:00 AM.
    
    SELECT *
    FROM Calls WITH (NOLOCK) 
     WHERE CallID = @CallID


GO
/****** Object:  StoredProcedure [dbo].[GetCallsSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetCallsSp]
AS

    -- Automatically generated on 7/1/2024 7:51:00 AM.
    
    SELECT *
    FROM Calls WITH (NOLOCK) 

GO
/****** Object:  StoredProcedure [dbo].[GetCallsSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetCallsSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 7/1/2024 7:51:00 AM.
    
    SELECT *
    FROM Calls WITH (NOLOCK) 
				) sub
	where		
					[CallID] like '%' + @Search + '%' or
					[CallingPhone] like '%' + @Search + '%' or
					[CalledPhone] like '%' + @Search + '%' or
					[RecordingURL] like '%' + @Search + '%' or
					[CallStatus] like '%' + @Search + '%' or
					[CallKey] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetCallsSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetCallsSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'CallID' and @SortAscending = 1 then 
							[CallID]
						end ASC,
						case when @SortColumn = 'CallID' and @SortAscending = 0 then 
							[CallID]
						end DESC,
			
						case when @SortColumn = 'CallingPhone' and @SortAscending = 1 then 
							[CallingPhone]
						end ASC,
						case when @SortColumn = 'CallingPhone' and @SortAscending = 0 then 
							[CallingPhone]
						end DESC,
			
						case when @SortColumn = 'CalledPhone' and @SortAscending = 1 then 
							[CalledPhone]
						end ASC,
						case when @SortColumn = 'CalledPhone' and @SortAscending = 0 then 
							[CalledPhone]
						end DESC,
			
						case when @SortColumn = 'Duration' and @SortAscending = 1 then 
							[Duration]
						end ASC,
						case when @SortColumn = 'Duration' and @SortAscending = 0 then 
							[Duration]
						end DESC,
			
						case when @SortColumn = 'IsRecorded' and @SortAscending = 1 then 
							[IsRecorded]
						end ASC,
						case when @SortColumn = 'IsRecorded' and @SortAscending = 0 then 
							[IsRecorded]
						end DESC,
			
						case when @SortColumn = 'RecordingURL' and @SortAscending = 1 then 
							[RecordingURL]
						end ASC,
						case when @SortColumn = 'RecordingURL' and @SortAscending = 0 then 
							[RecordingURL]
						end DESC,
			
						case when @SortColumn = 'IsConference' and @SortAscending = 1 then 
							[IsConference]
						end ASC,
						case when @SortColumn = 'IsConference' and @SortAscending = 0 then 
							[IsConference]
						end DESC,
			
						case when @SortColumn = 'IsStreamed' and @SortAscending = 1 then 
							[IsStreamed]
						end ASC,
						case when @SortColumn = 'IsStreamed' and @SortAscending = 0 then 
							[IsStreamed]
						end DESC,
			
						case when @SortColumn = 'IsIncoming' and @SortAscending = 1 then 
							[IsIncoming]
						end ASC,
						case when @SortColumn = 'IsIncoming' and @SortAscending = 0 then 
							[IsIncoming]
						end DESC,
			
						case when @SortColumn = 'CallStatus' and @SortAscending = 1 then 
							[CallStatus]
						end ASC,
						case when @SortColumn = 'CallStatus' and @SortAscending = 0 then 
							[CallStatus]
						end DESC,
			
						case when @SortColumn = 'LastCallStatusUpdate' and @SortAscending = 1 then 
							[LastCallStatusUpdate]
						end ASC,
						case when @SortColumn = 'LastCallStatusUpdate' and @SortAscending = 0 then 
							[LastCallStatusUpdate]
						end DESC,
			
						case when @SortColumn = 'IsTranscribed' and @SortAscending = 1 then 
							[IsTranscribed]
						end ASC,
						case when @SortColumn = 'IsTranscribed' and @SortAscending = 0 then 
							[IsTranscribed]
						end DESC,
			
						case when @SortColumn = 'IsEmptyTranscription' and @SortAscending = 1 then 
							[IsEmptyTranscription]
						end ASC,
						case when @SortColumn = 'IsEmptyTranscription' and @SortAscending = 0 then 
							[IsEmptyTranscription]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'CallKey' and @SortAscending = 1 then 
							[CallKey]
						end ASC,
						case when @SortColumn = 'CallKey' and @SortAscending = 0 then 
							[CallKey]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 7/1/2024 7:51:00 AM.
    
    SELECT *
    FROM Calls WITH (NOLOCK) 
					) sub
		where		
					[CallID] like '%' + @Search + '%' or
					[CallingPhone] like '%' + @Search + '%' or
					[CalledPhone] like '%' + @Search + '%' or
					[RecordingURL] like '%' + @Search + '%' or
					[CallStatus] like '%' + @Search + '%' or
					[CallKey] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetCampaignByCampaignNameSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetCampaignByCampaignNameSp]
	@CampaignName [nvarchar](255)
AS

    -- Automatically generated on 3/15/2023 4:58:59 PM.
    
    SELECT *
    FROM Campaigns WITH (NOLOCK) 
    WHERE [CampaignName] = @CampaignName
GO
/****** Object:  StoredProcedure [dbo].[GetCampaignsByCampaignKeySp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetCampaignsByCampaignKeySp]
	@CampaignKey [nvarchar](255)
AS

    -- Automatically generated on 3/15/2023 4:58:59 PM.
    
    SELECT *
    FROM Campaigns WITH (NOLOCK) 
    WHERE [CampaignKey] = @CampaignKey
GO
/****** Object:  StoredProcedure [dbo].[GetCampaignsBySourceIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetCampaignsBySourceIDSp]
	@SourceID [int]
AS

    -- Automatically generated on 3/15/2023 4:58:59 PM.
    
    SELECT *
    FROM Campaigns WITH (NOLOCK) 
    WHERE [SourceID] = @SourceID
GO
/****** Object:  StoredProcedure [dbo].[GetCampaignsBySourceIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetCampaignsBySourceIDSp_CountSp]
	@SourceID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/15/2023 11:29:13 AM.
    
    SELECT *
    FROM Campaigns WITH (NOLOCK) 
    WHERE [SourceID] = @SourceID
				) sub
	where		
					[CampaignID] like '%' + @Search + '%' or
					[CampaignName] like '%' + @Search + '%' or
					[CampaignKey] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetCampaignsBySourceIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetCampaignsBySourceIDSp_PagingSp]
	@SourceID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'CampaignID' and @SortAscending = 1 then 
							[CampaignID]
						end ASC,
						case when @SortColumn = 'CampaignID' and @SortAscending = 0 then 
							[CampaignID]
						end DESC,
			
						case when @SortColumn = 'SourceID' and @SortAscending = 1 then 
							[SourceID]
						end ASC,
						case when @SortColumn = 'SourceID' and @SortAscending = 0 then 
							[SourceID]
						end DESC,
			
						case when @SortColumn = 'CampaignName' and @SortAscending = 1 then 
							[CampaignName]
						end ASC,
						case when @SortColumn = 'CampaignName' and @SortAscending = 0 then 
							[CampaignName]
						end DESC,
			
						case when @SortColumn = 'CampaignKey' and @SortAscending = 1 then 
							[CampaignKey]
						end ASC,
						case when @SortColumn = 'CampaignKey' and @SortAscending = 0 then 
							[CampaignKey]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/15/2023 11:29:13 AM.
    
    SELECT *
    FROM Campaigns WITH (NOLOCK) 
    WHERE [SourceID] = @SourceID
					) sub
		where		
					[CampaignID] like '%' + @Search + '%' or
					[CampaignName] like '%' + @Search + '%' or
					[CampaignKey] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetCampaignSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetCampaignSp]
	@CampaignID [int]
AS

    -- Automatically generated on 3/15/2023 4:58:59 PM.
    
    SELECT *
    FROM Campaigns WITH (NOLOCK) 
     WHERE CampaignID = @CampaignID
GO
/****** Object:  StoredProcedure [dbo].[GetCampaignsSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetCampaignsSp]
AS

    -- Automatically generated on 3/15/2023 4:58:59 PM.
    
    SELECT *
    FROM Campaigns WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetCampaignsSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetCampaignsSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM Campaigns WITH (NOLOCK) 
				) sub
	where		
					[CampaignID] like '%' + @Search + '%' or
					[CampaignName] like '%' + @Search + '%' or
					[CampaignKey] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetCampaignsSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetCampaignsSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'CampaignID' and @SortAscending = 1 then 
							[CampaignID]
						end ASC,
						case when @SortColumn = 'CampaignID' and @SortAscending = 0 then 
							[CampaignID]
						end DESC,
			
						case when @SortColumn = 'SourceID' and @SortAscending = 1 then 
							[SourceID]
						end ASC,
						case when @SortColumn = 'SourceID' and @SortAscending = 0 then 
							[SourceID]
						end DESC,
			
						case when @SortColumn = 'CampaignName' and @SortAscending = 1 then 
							[CampaignName]
						end ASC,
						case when @SortColumn = 'CampaignName' and @SortAscending = 0 then 
							[CampaignName]
						end DESC,
			
						case when @SortColumn = 'CampaignKey' and @SortAscending = 1 then 
							[CampaignKey]
						end ASC,
						case when @SortColumn = 'CampaignKey' and @SortAscending = 0 then 
							[CampaignKey]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM Campaigns WITH (NOLOCK) 
					) sub
		where		
					[CampaignID] like '%' + @Search + '%' or
					[CampaignName] like '%' + @Search + '%' or
					[CampaignKey] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetContentByContentNameSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetContentByContentNameSp]
	@ContentName [nvarchar](255)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM Contents WITH (NOLOCK) 
    WHERE [ContentName] = @ContentName
GO
/****** Object:  StoredProcedure [dbo].[GetContentsByContentTypeIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetContentsByContentTypeIDSp]
	@ContentTypeID [int]
AS

    -- Automatically generated on 8/1/2024 3:23:28 PM.
    
    SELECT *
    FROM Contents WITH (NOLOCK) 
    WHERE [ContentTypeID] = @ContentTypeID

GO
/****** Object:  StoredProcedure [dbo].[GetContentsByContentTypeIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetContentsByContentTypeIDSp_CountSp]
	@ContentTypeID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 8/1/2024 3:23:28 PM.
    
    SELECT *
    FROM Contents WITH (NOLOCK) 
    WHERE [ContentTypeID] = @ContentTypeID
				) sub
	where		
					[ContentID] like '%' + @Search + '%' or
					[ContentName] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetContentsByContentTypeIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetContentsByContentTypeIDSp_PagingSp]
	@ContentTypeID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'ContentID' and @SortAscending = 1 then 
							[ContentID]
						end ASC,
						case when @SortColumn = 'ContentID' and @SortAscending = 0 then 
							[ContentID]
						end DESC,
			
						case when @SortColumn = 'ContentName' and @SortAscending = 1 then 
							[ContentName]
						end ASC,
						case when @SortColumn = 'ContentName' and @SortAscending = 0 then 
							[ContentName]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'ContentTypeID' and @SortAscending = 1 then 
							[ContentTypeID]
						end ASC,
						case when @SortColumn = 'ContentTypeID' and @SortAscending = 0 then 
							[ContentTypeID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 8/1/2024 3:23:28 PM.
    
    SELECT *
    FROM Contents WITH (NOLOCK) 
    WHERE [ContentTypeID] = @ContentTypeID
					) sub
		where		
					[ContentID] like '%' + @Search + '%' or
					[ContentName] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetContentSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetContentSp]
	@ContentID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM Contents WITH (NOLOCK) 
     WHERE ContentID = @ContentID
GO
/****** Object:  StoredProcedure [dbo].[GetContentsSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetContentsSp]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM Contents WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetContentsSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetContentsSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM Contents WITH (NOLOCK) 
				) sub
	where		
					[ContentID] like '%' + @Search + '%' or
					[ContentName] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetContentsSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetContentsSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'ContentID' and @SortAscending = 1 then 
							[ContentID]
						end ASC,
						case when @SortColumn = 'ContentID' and @SortAscending = 0 then 
							[ContentID]
						end DESC,
			
						case when @SortColumn = 'ContentName' and @SortAscending = 1 then 
							[ContentName]
						end ASC,
						case when @SortColumn = 'ContentName' and @SortAscending = 0 then 
							[ContentName]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'ContentTypeID' and @SortAscending = 1 then 
							[ContentTypeID]
						end ASC,
						case when @SortColumn = 'ContentTypeID' and @SortAscending = 0 then 
							[ContentTypeID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 8/1/2024 3:23:28 PM.
    
    SELECT *
    FROM Contents WITH (NOLOCK) 
					) sub
		where		
					[ContentID] like '%' + @Search + '%' or
					[ContentName] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetContentTypeByContentTypeNameSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetContentTypeByContentTypeNameSp]
	@ContentTypeName [nvarchar](255)
AS

    -- Automatically generated on 8/1/2024 3:23:28 PM.
    
    SELECT *
    FROM ContentTypes WITH (NOLOCK) 
    WHERE [ContentTypeName] = @ContentTypeName

GO
/****** Object:  StoredProcedure [dbo].[GetContentTypeSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetContentTypeSp]
	@ContentTypeID [int]
AS

    -- Automatically generated on 8/1/2024 3:23:28 PM.
    
    SELECT *
    FROM ContentTypes WITH (NOLOCK) 
     WHERE ContentTypeID = @ContentTypeID


GO
/****** Object:  StoredProcedure [dbo].[GetContentTypesSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetContentTypesSp]
AS

    -- Automatically generated on 8/1/2024 3:23:28 PM.
    
    SELECT *
    FROM ContentTypes WITH (NOLOCK) 

GO
/****** Object:  StoredProcedure [dbo].[GetContentTypesSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetContentTypesSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 8/1/2024 3:23:28 PM.
    
    SELECT *
    FROM ContentTypes WITH (NOLOCK) 
				) sub
	where		
					[ContentTypeID] like '%' + @Search + '%' or
					[ContentTypeName] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetContentTypesSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetContentTypesSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'ContentTypeID' and @SortAscending = 1 then 
							[ContentTypeID]
						end ASC,
						case when @SortColumn = 'ContentTypeID' and @SortAscending = 0 then 
							[ContentTypeID]
						end DESC,
			
						case when @SortColumn = 'ContentTypeName' and @SortAscending = 1 then 
							[ContentTypeName]
						end ASC,
						case when @SortColumn = 'ContentTypeName' and @SortAscending = 0 then 
							[ContentTypeName]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 8/1/2024 3:23:28 PM.
    
    SELECT *
    FROM ContentTypes WITH (NOLOCK) 
					) sub
		where		
					[ContentTypeID] like '%' + @Search + '%' or
					[ContentTypeName] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetDomainByDomainNameSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetDomainByDomainNameSp]
	@DomainName [nvarchar](255)
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM Domains WITH (NOLOCK) 
    WHERE [DomainName] = @DomainName

GO
/****** Object:  StoredProcedure [dbo].[GetDomainsByRawEmailAddressEmailAddressIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetDomainsByRawEmailAddressEmailAddressIDSp]
	@EmailAddressID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT t2.*
    FROM RawEmailAddresses t1 WITH (NOLOCK) 
    JOIN Domains t2 WITH (NOLOCK) 
    ON t1.DomainID = t2.DomainID
    WHERE t1.[EmailAddressID] = @EmailAddressID

GO
/****** Object:  StoredProcedure [dbo].[GetDomainSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetDomainSp]
	@DomainID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM Domains WITH (NOLOCK) 
     WHERE DomainID = @DomainID


GO
/****** Object:  StoredProcedure [dbo].[GetDomainsSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetDomainsSp]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM Domains WITH (NOLOCK) 

GO
/****** Object:  StoredProcedure [dbo].[GetDomainsSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetDomainsSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM Domains WITH (NOLOCK) 
				) sub
	where		
					[DomainID] like '%' + @Search + '%' or
					[DomainName] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetDomainsSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetDomainsSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'DomainID' and @SortAscending = 1 then 
							[DomainID]
						end ASC,
						case when @SortColumn = 'DomainID' and @SortAscending = 0 then 
							[DomainID]
						end DESC,
			
						case when @SortColumn = 'DomainName' and @SortAscending = 1 then 
							[DomainName]
						end ASC,
						case when @SortColumn = 'DomainName' and @SortAscending = 0 then 
							[DomainName]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM Domains WITH (NOLOCK) 
					) sub
		where		
					[DomainID] like '%' + @Search + '%' or
					[DomainName] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetEmailAddressByEmailSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetEmailAddressByEmailSp]
	@Email [nvarchar](255)
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM EmailAddresses WITH (NOLOCK) 
    WHERE [Email] = @Email

GO
/****** Object:  StoredProcedure [dbo].[GetEmailAddressesByDomainIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetEmailAddressesByDomainIDSp]
	@DomainID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM EmailAddresses WITH (NOLOCK) 
    WHERE [DomainID] = @DomainID

GO
/****** Object:  StoredProcedure [dbo].[GetEmailAddressesByDomainIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetEmailAddressesByDomainIDSp_CountSp]
	@DomainID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM EmailAddresses WITH (NOLOCK) 
    WHERE [DomainID] = @DomainID
				) sub
	where		
					[EmailAddressID] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetEmailAddressesByDomainIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetEmailAddressesByDomainIDSp_PagingSp]
	@DomainID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'EmailAddressID' and @SortAscending = 1 then 
							[EmailAddressID]
						end ASC,
						case when @SortColumn = 'EmailAddressID' and @SortAscending = 0 then 
							[EmailAddressID]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'IsBlocked' and @SortAscending = 1 then 
							[IsBlocked]
						end ASC,
						case when @SortColumn = 'IsBlocked' and @SortAscending = 0 then 
							[IsBlocked]
						end DESC,
			
						case when @SortColumn = 'IsInternal' and @SortAscending = 1 then 
							[IsInternal]
						end ASC,
						case when @SortColumn = 'IsInternal' and @SortAscending = 0 then 
							[IsInternal]
						end DESC,
			
						case when @SortColumn = 'DomainID' and @SortAscending = 1 then 
							[DomainID]
						end ASC,
						case when @SortColumn = 'DomainID' and @SortAscending = 0 then 
							[DomainID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM EmailAddresses WITH (NOLOCK) 
    WHERE [DomainID] = @DomainID
					) sub
		where		
					[EmailAddressID] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetEmailAddressesByRawEmailAddressDomainIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetEmailAddressesByRawEmailAddressDomainIDSp]
	@DomainID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT t2.*
    FROM RawEmailAddresses t1 WITH (NOLOCK) 
    JOIN EmailAddresses t2 WITH (NOLOCK) 
    ON t1.EmailAddressID = t2.EmailAddressID
    WHERE t1.[DomainID] = @DomainID

GO
/****** Object:  StoredProcedure [dbo].[GetEmailAddressesSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetEmailAddressesSp]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM EmailAddresses WITH (NOLOCK) 

GO
/****** Object:  StoredProcedure [dbo].[GetEmailAddressesSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetEmailAddressesSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM EmailAddresses WITH (NOLOCK) 
				) sub
	where		
					[EmailAddressID] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetEmailAddressesSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetEmailAddressesSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'EmailAddressID' and @SortAscending = 1 then 
							[EmailAddressID]
						end ASC,
						case when @SortColumn = 'EmailAddressID' and @SortAscending = 0 then 
							[EmailAddressID]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'IsBlocked' and @SortAscending = 1 then 
							[IsBlocked]
						end ASC,
						case when @SortColumn = 'IsBlocked' and @SortAscending = 0 then 
							[IsBlocked]
						end DESC,
			
						case when @SortColumn = 'IsInternal' and @SortAscending = 1 then 
							[IsInternal]
						end ASC,
						case when @SortColumn = 'IsInternal' and @SortAscending = 0 then 
							[IsInternal]
						end DESC,
			
						case when @SortColumn = 'DomainID' and @SortAscending = 1 then 
							[DomainID]
						end ASC,
						case when @SortColumn = 'DomainID' and @SortAscending = 0 then 
							[DomainID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM EmailAddresses WITH (NOLOCK) 
					) sub
		where		
					[EmailAddressID] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetEmailAddressSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetEmailAddressSp]
	@EmailAddressID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM EmailAddresses WITH (NOLOCK) 
     WHERE EmailAddressID = @EmailAddressID


GO
/****** Object:  StoredProcedure [dbo].[GetEmailHistoriesByEmailTemplateIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetEmailHistoriesByEmailTemplateIDSp]
	@EmailTemplateID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM EmailHistories WITH (NOLOCK) 
    WHERE [EmailTemplateID] = @EmailTemplateID
GO
/****** Object:  StoredProcedure [dbo].[GetEmailHistoriesByEmailTemplateIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetEmailHistoriesByEmailTemplateIDSp_CountSp]
	@EmailTemplateID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM EmailHistories WITH (NOLOCK) 
    WHERE [EmailTemplateID] = @EmailTemplateID
				) sub
	where		
					[EmailHistoryID] like '%' + @Search + '%' or
					[To] like '%' + @Search + '%' or
					[From] like '%' + @Search + '%' or
					[Subject] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetEmailHistoriesByEmailTemplateIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetEmailHistoriesByEmailTemplateIDSp_PagingSp]
	@EmailTemplateID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'EmailHistoryID' and @SortAscending = 1 then 
							[EmailHistoryID]
						end ASC,
						case when @SortColumn = 'EmailHistoryID' and @SortAscending = 0 then 
							[EmailHistoryID]
						end DESC,
			
						case when @SortColumn = 'To' and @SortAscending = 1 then 
							[To]
						end ASC,
						case when @SortColumn = 'To' and @SortAscending = 0 then 
							[To]
						end DESC,
			
						case when @SortColumn = 'From' and @SortAscending = 1 then 
							[From]
						end ASC,
						case when @SortColumn = 'From' and @SortAscending = 0 then 
							[From]
						end DESC,
			
						case when @SortColumn = 'EmailTemplateID' and @SortAscending = 1 then 
							[EmailTemplateID]
						end ASC,
						case when @SortColumn = 'EmailTemplateID' and @SortAscending = 0 then 
							[EmailTemplateID]
						end DESC,
			
						case when @SortColumn = 'Subject' and @SortAscending = 1 then 
							[Subject]
						end ASC,
						case when @SortColumn = 'Subject' and @SortAscending = 0 then 
							[Subject]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'IsPending' and @SortAscending = 1 then 
							[IsPending]
						end ASC,
						case when @SortColumn = 'IsPending' and @SortAscending = 0 then 
							[IsPending]
						end DESC,
			
						case when @SortColumn = 'IsSent' and @SortAscending = 1 then 
							[IsSent]
						end ASC,
						case when @SortColumn = 'IsSent' and @SortAscending = 0 then 
							[IsSent]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM EmailHistories WITH (NOLOCK) 
    WHERE [EmailTemplateID] = @EmailTemplateID
					) sub
		where		
					[EmailHistoryID] like '%' + @Search + '%' or
					[To] like '%' + @Search + '%' or
					[From] like '%' + @Search + '%' or
					[Subject] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetEmailHistoriesSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetEmailHistoriesSp]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM EmailHistories WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetEmailHistoriesSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetEmailHistoriesSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM EmailHistories WITH (NOLOCK) 
				) sub
	where		
					[EmailHistoryID] like '%' + @Search + '%' or
					[To] like '%' + @Search + '%' or
					[From] like '%' + @Search + '%' or
					[Subject] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetEmailHistoriesSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetEmailHistoriesSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'EmailHistoryID' and @SortAscending = 1 then 
							[EmailHistoryID]
						end ASC,
						case when @SortColumn = 'EmailHistoryID' and @SortAscending = 0 then 
							[EmailHistoryID]
						end DESC,
			
						case when @SortColumn = 'To' and @SortAscending = 1 then 
							[To]
						end ASC,
						case when @SortColumn = 'To' and @SortAscending = 0 then 
							[To]
						end DESC,
			
						case when @SortColumn = 'From' and @SortAscending = 1 then 
							[From]
						end ASC,
						case when @SortColumn = 'From' and @SortAscending = 0 then 
							[From]
						end DESC,
			
						case when @SortColumn = 'EmailTemplateID' and @SortAscending = 1 then 
							[EmailTemplateID]
						end ASC,
						case when @SortColumn = 'EmailTemplateID' and @SortAscending = 0 then 
							[EmailTemplateID]
						end DESC,
			
						case when @SortColumn = 'Subject' and @SortAscending = 1 then 
							[Subject]
						end ASC,
						case when @SortColumn = 'Subject' and @SortAscending = 0 then 
							[Subject]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'IsPending' and @SortAscending = 1 then 
							[IsPending]
						end ASC,
						case when @SortColumn = 'IsPending' and @SortAscending = 0 then 
							[IsPending]
						end DESC,
			
						case when @SortColumn = 'IsSent' and @SortAscending = 1 then 
							[IsSent]
						end ASC,
						case when @SortColumn = 'IsSent' and @SortAscending = 0 then 
							[IsSent]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM EmailHistories WITH (NOLOCK) 
					) sub
		where		
					[EmailHistoryID] like '%' + @Search + '%' or
					[To] like '%' + @Search + '%' or
					[From] like '%' + @Search + '%' or
					[Subject] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetEmailHistorySp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetEmailHistorySp]
	@EmailHistoryID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM EmailHistories WITH (NOLOCK) 
     WHERE EmailHistoryID = @EmailHistoryID
GO
/****** Object:  StoredProcedure [dbo].[GetEmailTemplateByNameSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetEmailTemplateByNameSp]
	@Name [nvarchar](255)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM EmailTemplates WITH (NOLOCK) 
    WHERE [Name] = @Name
GO
/****** Object:  StoredProcedure [dbo].[GetEmailTemplateSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetEmailTemplateSp]
	@EmailTemplateID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM EmailTemplates WITH (NOLOCK) 
     WHERE EmailTemplateID = @EmailTemplateID
GO
/****** Object:  StoredProcedure [dbo].[GetEmailTemplatesSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetEmailTemplatesSp]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM EmailTemplates WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetEmailTemplatesSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetEmailTemplatesSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM EmailTemplates WITH (NOLOCK) 
				) sub
	where		
					[EmailTemplateID] like '%' + @Search + '%' or
					[Name] like '%' + @Search + '%' or
					[EmailSubject] like '%' + @Search + '%' or
					[EmailParams] like '%' + @Search + '%' or
					[FromAddress] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetEmailTemplatesSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetEmailTemplatesSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'EmailTemplateID' and @SortAscending = 1 then 
							[EmailTemplateID]
						end ASC,
						case when @SortColumn = 'EmailTemplateID' and @SortAscending = 0 then 
							[EmailTemplateID]
						end DESC,
			
						case when @SortColumn = 'Name' and @SortAscending = 1 then 
							[Name]
						end ASC,
						case when @SortColumn = 'Name' and @SortAscending = 0 then 
							[Name]
						end DESC,
			
						case when @SortColumn = 'EmailSubject' and @SortAscending = 1 then 
							[EmailSubject]
						end ASC,
						case when @SortColumn = 'EmailSubject' and @SortAscending = 0 then 
							[EmailSubject]
						end DESC,
			
						case when @SortColumn = 'EmailParams' and @SortAscending = 1 then 
							[EmailParams]
						end ASC,
						case when @SortColumn = 'EmailParams' and @SortAscending = 0 then 
							[EmailParams]
						end DESC,
			
						case when @SortColumn = 'FromAddress' and @SortAscending = 1 then 
							[FromAddress]
						end ASC,
						case when @SortColumn = 'FromAddress' and @SortAscending = 0 then 
							[FromAddress]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM EmailTemplates WITH (NOLOCK) 
					) sub
		where		
					[EmailTemplateID] like '%' + @Search + '%' or
					[Name] like '%' + @Search + '%' or
					[EmailSubject] like '%' + @Search + '%' or
					[EmailParams] like '%' + @Search + '%' or
					[FromAddress] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetFeatureByFeatureNameSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetFeatureByFeatureNameSp]
	@FeatureName [nvarchar](255)
AS

    -- Automatically generated on 6/29/2024 7:45:32 AM.
    
    SELECT *
    FROM Features WITH (NOLOCK) 
    WHERE [FeatureName] = @FeatureName

GO
/****** Object:  StoredProcedure [dbo].[GetFeatureSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetFeatureSp]
	@FeatureID [int]
AS

    -- Automatically generated on 6/29/2024 7:45:32 AM.
    
    SELECT *
    FROM Features WITH (NOLOCK) 
     WHERE FeatureID = @FeatureID


GO
/****** Object:  StoredProcedure [dbo].[GetFeaturesSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetFeaturesSp]
AS

    -- Automatically generated on 6/29/2024 7:45:32 AM.
    
    SELECT *
    FROM Features WITH (NOLOCK) 

GO
/****** Object:  StoredProcedure [dbo].[GetFeaturesSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetFeaturesSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 6/29/2024 7:45:32 AM.
    
    SELECT *
    FROM Features WITH (NOLOCK) 
				) sub
	where		
					[FeatureID] like '%' + @Search + '%' or
					[FeatureName] like '%' + @Search + '%' or
					[Version] like '%' + @Search + '%' or
					[SettingsAssembly] like '%' + @Search + '%' or
					[SettingsClass] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetFeaturesSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetFeaturesSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'FeatureID' and @SortAscending = 1 then 
							[FeatureID]
						end ASC,
						case when @SortColumn = 'FeatureID' and @SortAscending = 0 then 
							[FeatureID]
						end DESC,
			
						case when @SortColumn = 'FeatureName' and @SortAscending = 1 then 
							[FeatureName]
						end ASC,
						case when @SortColumn = 'FeatureName' and @SortAscending = 0 then 
							[FeatureName]
						end DESC,
			
						case when @SortColumn = 'Version' and @SortAscending = 1 then 
							[Version]
						end ASC,
						case when @SortColumn = 'Version' and @SortAscending = 0 then 
							[Version]
						end DESC,
			
						case when @SortColumn = 'IsEnabled' and @SortAscending = 1 then 
							[IsEnabled]
						end ASC,
						case when @SortColumn = 'IsEnabled' and @SortAscending = 0 then 
							[IsEnabled]
						end DESC,
			
						case when @SortColumn = 'SettingsAssembly' and @SortAscending = 1 then 
							[SettingsAssembly]
						end ASC,
						case when @SortColumn = 'SettingsAssembly' and @SortAscending = 0 then 
							[SettingsAssembly]
						end DESC,
			
						case when @SortColumn = 'SettingsClass' and @SortAscending = 1 then 
							[SettingsClass]
						end ASC,
						case when @SortColumn = 'SettingsClass' and @SortAscending = 0 then 
							[SettingsClass]
						end DESC,
			
						case when @SortColumn = 'Settings' and @SortAscending = 1 then 
							[Settings]
						end ASC,
						case when @SortColumn = 'Settings' and @SortAscending = 0 then 
							[Settings]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 6/29/2024 7:45:32 AM.
    
    SELECT *
    FROM Features WITH (NOLOCK) 
					) sub
		where		
					[FeatureID] like '%' + @Search + '%' or
					[FeatureName] like '%' + @Search + '%' or
					[Version] like '%' + @Search + '%' or
					[SettingsAssembly] like '%' + @Search + '%' or
					[SettingsClass] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetFilesByFileNameSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetFilesByFileNameSp]
	@FileName [nvarchar](255)
AS

    -- Automatically generated on 7/18/2024 5:57:46 PM.
    
    SELECT *
    FROM Files WITH (NOLOCK) 
    WHERE [FileName] = @FileName

GO
/****** Object:  StoredProcedure [dbo].[GetFilesByFileTypeIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetFilesByFileTypeIDSp]
	@FileTypeID [int]
AS

    -- Automatically generated on 7/18/2024 5:57:46 PM.
    
    SELECT *
    FROM Files WITH (NOLOCK) 
    WHERE [FileTypeID] = @FileTypeID

GO
/****** Object:  StoredProcedure [dbo].[GetFilesByFileTypeIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetFilesByFileTypeIDSp_CountSp]
	@FileTypeID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 7/17/2024 10:51:48 AM.
    
    SELECT *
    FROM Files WITH (NOLOCK) 
    WHERE [FileTypeID] = @FileTypeID
				) sub
	where		
					[FileID] like '%' + @Search + '%' or
					[PhysicalPath] like '%' + @Search + '%' or
					[FileName] like '%' + @Search + '%' or
					[FileDescription] like '%' + @Search + '%' or
					[Label] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetFilesByFileTypeIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetFilesByFileTypeIDSp_PagingSp]
	@FileTypeID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'FileID' and @SortAscending = 1 then 
							[FileID]
						end ASC,
						case when @SortColumn = 'FileID' and @SortAscending = 0 then 
							[FileID]
						end DESC,
			
						case when @SortColumn = 'FileTypeID' and @SortAscending = 1 then 
							[FileTypeID]
						end ASC,
						case when @SortColumn = 'FileTypeID' and @SortAscending = 0 then 
							[FileTypeID]
						end DESC,
			
						case when @SortColumn = 'PhysicalPath' and @SortAscending = 1 then 
							[PhysicalPath]
						end ASC,
						case when @SortColumn = 'PhysicalPath' and @SortAscending = 0 then 
							[PhysicalPath]
						end DESC,
			
						case when @SortColumn = 'FileName' and @SortAscending = 1 then 
							[FileName]
						end ASC,
						case when @SortColumn = 'FileName' and @SortAscending = 0 then 
							[FileName]
						end DESC,
			
						case when @SortColumn = 'FileDescription' and @SortAscending = 1 then 
							[FileDescription]
						end ASC,
						case when @SortColumn = 'FileDescription' and @SortAscending = 0 then 
							[FileDescription]
						end DESC,
			
						case when @SortColumn = 'Label' and @SortAscending = 1 then 
							[Label]
						end ASC,
						case when @SortColumn = 'Label' and @SortAscending = 0 then 
							[Label]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'IsDeleted' and @SortAscending = 1 then 
							[IsDeleted]
						end ASC,
						case when @SortColumn = 'IsDeleted' and @SortAscending = 0 then 
							[IsDeleted]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 7/17/2024 10:51:48 AM.
    
    SELECT *
    FROM Files WITH (NOLOCK) 
    WHERE [FileTypeID] = @FileTypeID
					) sub
		where		
					[FileID] like '%' + @Search + '%' or
					[PhysicalPath] like '%' + @Search + '%' or
					[FileName] like '%' + @Search + '%' or
					[FileDescription] like '%' + @Search + '%' or
					[Label] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetFileSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetFileSp]
	@FileID [int]
AS

    -- Automatically generated on 7/18/2024 5:57:46 PM.
    
    SELECT *
    FROM Files WITH (NOLOCK) 
     WHERE FileID = @FileID


GO
/****** Object:  StoredProcedure [dbo].[GetFilesSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetFilesSp]
AS

    -- Automatically generated on 7/18/2024 5:57:46 PM.
    
    SELECT *
    FROM Files WITH (NOLOCK) 

GO
/****** Object:  StoredProcedure [dbo].[GetFilesSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetFilesSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 7/17/2024 10:51:48 AM.
    
    SELECT *
    FROM Files WITH (NOLOCK) 
				) sub
	where		
					[FileID] like '%' + @Search + '%' or
					[PhysicalPath] like '%' + @Search + '%' or
					[FileName] like '%' + @Search + '%' or
					[FileDescription] like '%' + @Search + '%' or
					[Label] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetFilesSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetFilesSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'FileID' and @SortAscending = 1 then 
							[FileID]
						end ASC,
						case when @SortColumn = 'FileID' and @SortAscending = 0 then 
							[FileID]
						end DESC,
			
						case when @SortColumn = 'FileTypeID' and @SortAscending = 1 then 
							[FileTypeID]
						end ASC,
						case when @SortColumn = 'FileTypeID' and @SortAscending = 0 then 
							[FileTypeID]
						end DESC,
			
						case when @SortColumn = 'PhysicalPath' and @SortAscending = 1 then 
							[PhysicalPath]
						end ASC,
						case when @SortColumn = 'PhysicalPath' and @SortAscending = 0 then 
							[PhysicalPath]
						end DESC,
			
						case when @SortColumn = 'FileName' and @SortAscending = 1 then 
							[FileName]
						end ASC,
						case when @SortColumn = 'FileName' and @SortAscending = 0 then 
							[FileName]
						end DESC,
			
						case when @SortColumn = 'FileDescription' and @SortAscending = 1 then 
							[FileDescription]
						end ASC,
						case when @SortColumn = 'FileDescription' and @SortAscending = 0 then 
							[FileDescription]
						end DESC,
			
						case when @SortColumn = 'Label' and @SortAscending = 1 then 
							[Label]
						end ASC,
						case when @SortColumn = 'Label' and @SortAscending = 0 then 
							[Label]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'IsDeleted' and @SortAscending = 1 then 
							[IsDeleted]
						end ASC,
						case when @SortColumn = 'IsDeleted' and @SortAscending = 0 then 
							[IsDeleted]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 7/17/2024 10:51:48 AM.
    
    SELECT *
    FROM Files WITH (NOLOCK) 
					) sub
		where		
					[FileID] like '%' + @Search + '%' or
					[PhysicalPath] like '%' + @Search + '%' or
					[FileName] like '%' + @Search + '%' or
					[FileDescription] like '%' + @Search + '%' or
					[Label] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetFileTypeByFileTypeSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetFileTypeByFileTypeSp]
	@FileType [nvarchar](255)
AS

    -- Automatically generated on 7/17/2024 10:51:48 AM.
    
    SELECT *
    FROM FileTypes WITH (NOLOCK) 
    WHERE [FileType] = @FileType

GO
/****** Object:  StoredProcedure [dbo].[GetFileTypeSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetFileTypeSp]
	@FileTypeID [int]
AS

    -- Automatically generated on 7/17/2024 10:51:48 AM.
    
    SELECT *
    FROM FileTypes WITH (NOLOCK) 
     WHERE FileTypeID = @FileTypeID


GO
/****** Object:  StoredProcedure [dbo].[GetFileTypesSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetFileTypesSp]
AS

    -- Automatically generated on 7/17/2024 10:51:48 AM.
    
    SELECT *
    FROM FileTypes WITH (NOLOCK) 

GO
/****** Object:  StoredProcedure [dbo].[GetFileTypesSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetFileTypesSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 7/17/2024 10:51:48 AM.
    
    SELECT *
    FROM FileTypes WITH (NOLOCK) 
				) sub
	where		
					[FileTypeID] like '%' + @Search + '%' or
					[FileType] like '%' + @Search + '%' or
					[AllowedExtensions] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetFileTypesSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetFileTypesSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'FileTypeID' and @SortAscending = 1 then 
							[FileTypeID]
						end ASC,
						case when @SortColumn = 'FileTypeID' and @SortAscending = 0 then 
							[FileTypeID]
						end DESC,
			
						case when @SortColumn = 'FileType' and @SortAscending = 1 then 
							[FileType]
						end ASC,
						case when @SortColumn = 'FileType' and @SortAscending = 0 then 
							[FileType]
						end DESC,
			
						case when @SortColumn = 'AllowedExtensions' and @SortAscending = 1 then 
							[AllowedExtensions]
						end ASC,
						case when @SortColumn = 'AllowedExtensions' and @SortAscending = 0 then 
							[AllowedExtensions]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 7/17/2024 10:51:48 AM.
    
    SELECT *
    FROM FileTypes WITH (NOLOCK) 
					) sub
		where		
					[FileTypeID] like '%' + @Search + '%' or
					[FileType] like '%' + @Search + '%' or
					[AllowedExtensions] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadAddressesByLeadIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadAddressesByLeadIDSp]
	@LeadID [int]
AS

    -- Automatically generated on 7/25/2024 2:20:08 PM.
    
    SELECT *
    FROM LeadAddresses WITH (NOLOCK) 
    WHERE [LeadID] = @LeadID

GO
/****** Object:  StoredProcedure [dbo].[GetLeadAddressesByLeadIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadAddressesByLeadIDSp_CountSp]
	@LeadID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 7/25/2024 2:20:08 PM.
    
    SELECT *
    FROM LeadAddresses WITH (NOLOCK) 
    WHERE [LeadID] = @LeadID
				) sub
	where		
					[AddressType] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Fax] like '%' + @Search + '%' or
					[LeadAddressID] like '%' + @Search + '%' or
					[Name] like '%' + @Search + '%' or
					[Line1] like '%' + @Search + '%' or
					[Line2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[Zip] like '%' + @Search + '%' or
					[Country] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadAddressesByLeadIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadAddressesByLeadIDSp_PagingSp]
	@LeadID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'AddressType' and @SortAscending = 1 then 
							[AddressType]
						end ASC,
						case when @SortColumn = 'AddressType' and @SortAscending = 0 then 
							[AddressType]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'Fax' and @SortAscending = 1 then 
							[Fax]
						end ASC,
						case when @SortColumn = 'Fax' and @SortAscending = 0 then 
							[Fax]
						end DESC,
			
						case when @SortColumn = 'LeadAddressID' and @SortAscending = 1 then 
							[LeadAddressID]
						end ASC,
						case when @SortColumn = 'LeadAddressID' and @SortAscending = 0 then 
							[LeadAddressID]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'Name' and @SortAscending = 1 then 
							[Name]
						end ASC,
						case when @SortColumn = 'Name' and @SortAscending = 0 then 
							[Name]
						end DESC,
			
						case when @SortColumn = 'Line1' and @SortAscending = 1 then 
							[Line1]
						end ASC,
						case when @SortColumn = 'Line1' and @SortAscending = 0 then 
							[Line1]
						end DESC,
			
						case when @SortColumn = 'Line2' and @SortAscending = 1 then 
							[Line2]
						end ASC,
						case when @SortColumn = 'Line2' and @SortAscending = 0 then 
							[Line2]
						end DESC,
			
						case when @SortColumn = 'City' and @SortAscending = 1 then 
							[City]
						end ASC,
						case when @SortColumn = 'City' and @SortAscending = 0 then 
							[City]
						end DESC,
			
						case when @SortColumn = 'State' and @SortAscending = 1 then 
							[State]
						end ASC,
						case when @SortColumn = 'State' and @SortAscending = 0 then 
							[State]
						end DESC,
			
						case when @SortColumn = 'Zip' and @SortAscending = 1 then 
							[Zip]
						end ASC,
						case when @SortColumn = 'Zip' and @SortAscending = 0 then 
							[Zip]
						end DESC,
			
						case when @SortColumn = 'Country' and @SortAscending = 1 then 
							[Country]
						end ASC,
						case when @SortColumn = 'Country' and @SortAscending = 0 then 
							[Country]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 7/25/2024 2:20:08 PM.
    
    SELECT *
    FROM LeadAddresses WITH (NOLOCK) 
    WHERE [LeadID] = @LeadID
					) sub
		where		
					[AddressType] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Fax] like '%' + @Search + '%' or
					[LeadAddressID] like '%' + @Search + '%' or
					[Name] like '%' + @Search + '%' or
					[Line1] like '%' + @Search + '%' or
					[Line2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[Zip] like '%' + @Search + '%' or
					[Country] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadAddressesSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadAddressesSp]
AS

    -- Automatically generated on 7/25/2024 2:20:08 PM.
    
    SELECT *
    FROM LeadAddresses WITH (NOLOCK) 

GO
/****** Object:  StoredProcedure [dbo].[GetLeadAddressSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadAddressSp]
	@LeadAddressID [int]
AS

    -- Automatically generated on 7/25/2024 2:20:08 PM.
    
    SELECT *
    FROM LeadAddresses WITH (NOLOCK) 
     WHERE LeadAddressID = @LeadAddressID


GO
/****** Object:  StoredProcedure [dbo].[GetLeadContactsByLeadIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadContactsByLeadIDSp]
	@LeadID [int]
AS

    -- Automatically generated on 8/26/2023 8:04:05 AM.
    
    SELECT *
    FROM LeadContacts WITH (NOLOCK) 
    WHERE [LeadID] = @LeadID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadContactsByLeadIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadContactsByLeadIDSp_CountSp]
	@LeadID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 8/26/2023 8:04:05 AM.
    
    SELECT *
    FROM LeadContacts WITH (NOLOCK) 
    WHERE [LeadID] = @LeadID
				) sub
	where		
					[LeadContactID] like '%' + @Search + '%' or
					[Name] like '%' + @Search + '%' or
					[Title] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadContactsByLeadIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadContactsByLeadIDSp_PagingSp]
	@LeadID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadContactID' and @SortAscending = 1 then 
							[LeadContactID]
						end ASC,
						case when @SortColumn = 'LeadContactID' and @SortAscending = 0 then 
							[LeadContactID]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'Name' and @SortAscending = 1 then 
							[Name]
						end ASC,
						case when @SortColumn = 'Name' and @SortAscending = 0 then 
							[Name]
						end DESC,
			
						case when @SortColumn = 'Title' and @SortAscending = 1 then 
							[Title]
						end ASC,
						case when @SortColumn = 'Title' and @SortAscending = 0 then 
							[Title]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 8/26/2023 8:04:05 AM.
    
    SELECT *
    FROM LeadContacts WITH (NOLOCK) 
    WHERE [LeadID] = @LeadID
					) sub
		where		
					[LeadContactID] like '%' + @Search + '%' or
					[Name] like '%' + @Search + '%' or
					[Title] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadContactsByPhoneSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadContactsByPhoneSp]
	@Phone [nvarchar](255)
AS

    -- Automatically generated on 9/9/2024 10:10:00 AM.
    
    SELECT *
    FROM LeadContacts WITH (NOLOCK) 
    WHERE [Phone] = @Phone

GO
/****** Object:  StoredProcedure [dbo].[GetLeadContactSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadContactSp]
	@LeadContactID [int]
AS

    -- Automatically generated on 8/26/2023 8:04:05 AM.
    
    SELECT *
    FROM LeadContacts WITH (NOLOCK) 
     WHERE LeadContactID = @LeadContactID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadContactsSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadContactsSp]
AS

    -- Automatically generated on 8/26/2023 8:04:05 AM.
    
    SELECT *
    FROM LeadContacts WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetLeadContactsSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadContactsSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 8/26/2023 8:04:05 AM.
    
    SELECT *
    FROM LeadContacts WITH (NOLOCK) 
				) sub
	where		
					[LeadContactID] like '%' + @Search + '%' or
					[Name] like '%' + @Search + '%' or
					[Title] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadContactsSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadContactsSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadContactID' and @SortAscending = 1 then 
							[LeadContactID]
						end ASC,
						case when @SortColumn = 'LeadContactID' and @SortAscending = 0 then 
							[LeadContactID]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'Name' and @SortAscending = 1 then 
							[Name]
						end ASC,
						case when @SortColumn = 'Name' and @SortAscending = 0 then 
							[Name]
						end DESC,
			
						case when @SortColumn = 'Title' and @SortAscending = 1 then 
							[Title]
						end ASC,
						case when @SortColumn = 'Title' and @SortAscending = 0 then 
							[Title]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 8/26/2023 8:04:05 AM.
    
    SELECT *
    FROM LeadContacts WITH (NOLOCK) 
					) sub
		where		
					[LeadContactID] like '%' + @Search + '%' or
					[Name] like '%' + @Search + '%' or
					[Title] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadNotesByLeadIDLeadNoteTypeIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadNotesByLeadIDLeadNoteTypeIDSp]
	@LeadID [int],
	@LeadNoteTypeID [int]
AS

    -- Automatically generated on 12/16/2024 7:21:58 PM.
    
    SELECT *
    FROM LeadNotes WITH (NOLOCK) 
    WHERE [LeadID] = @LeadID AND [LeadNoteTypeID] = @LeadNoteTypeID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadNotesByLeadIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadNotesByLeadIDSp]
	@LeadID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadNotes WITH (NOLOCK) 
    WHERE [LeadID] = @LeadID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadNotesByLeadIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadNotesByLeadIDSp_CountSp]
	@LeadID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadNotes WITH (NOLOCK) 
    WHERE [LeadID] = @LeadID
				) sub
	where		
					[LeadNoteID] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadNotesByLeadIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadNotesByLeadIDSp_PagingSp]
	@LeadID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadNoteTypeID' and @SortAscending = 1 then 
							[LeadNoteTypeID]
						end ASC,
						case when @SortColumn = 'LeadNoteTypeID' and @SortAscending = 0 then 
							[LeadNoteTypeID]
						end DESC,
			
						case when @SortColumn = 'LeadNoteID' and @SortAscending = 1 then 
							[LeadNoteID]
						end ASC,
						case when @SortColumn = 'LeadNoteID' and @SortAscending = 0 then 
							[LeadNoteID]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 1 then 
							[SalesRepresentativeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 0 then 
							[SalesRepresentativeID]
						end DESC,
			
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 1 then 
							[FollowUpDate]
						end ASC,
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 0 then 
							[FollowUpDate]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadNotes WITH (NOLOCK) 
    WHERE [LeadID] = @LeadID
					) sub
		where		
					[LeadNoteID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadNotesByLeadNoteTypeIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadNotesByLeadNoteTypeIDSp]
	@LeadNoteTypeID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadNotes WITH (NOLOCK) 
    WHERE [LeadNoteTypeID] = @LeadNoteTypeID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadNotesByLeadNoteTypeIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadNotesByLeadNoteTypeIDSp_CountSp]
	@LeadNoteTypeID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadNotes WITH (NOLOCK) 
    WHERE [LeadNoteTypeID] = @LeadNoteTypeID
				) sub
	where		
					[LeadNoteID] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadNotesByLeadNoteTypeIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadNotesByLeadNoteTypeIDSp_PagingSp]
	@LeadNoteTypeID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadNoteTypeID' and @SortAscending = 1 then 
							[LeadNoteTypeID]
						end ASC,
						case when @SortColumn = 'LeadNoteTypeID' and @SortAscending = 0 then 
							[LeadNoteTypeID]
						end DESC,
			
						case when @SortColumn = 'LeadNoteID' and @SortAscending = 1 then 
							[LeadNoteID]
						end ASC,
						case when @SortColumn = 'LeadNoteID' and @SortAscending = 0 then 
							[LeadNoteID]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 1 then 
							[SalesRepresentativeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 0 then 
							[SalesRepresentativeID]
						end DESC,
			
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 1 then 
							[FollowUpDate]
						end ASC,
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 0 then 
							[FollowUpDate]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadNotes WITH (NOLOCK) 
    WHERE [LeadNoteTypeID] = @LeadNoteTypeID
					) sub
		where		
					[LeadNoteID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadNotesBySalesRepresentativeIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadNotesBySalesRepresentativeIDSp]
	@SalesRepresentativeID [int]
AS

    -- Automatically generated on 8/16/2024 12:52:45 PM.
    
    SELECT *
    FROM LeadNotes WITH (NOLOCK) 
    WHERE [SalesRepresentativeID] = @SalesRepresentativeID

GO
/****** Object:  StoredProcedure [dbo].[GetLeadNotesBySalesRepresentativeIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadNotesBySalesRepresentativeIDSp_CountSp]
	@SalesRepresentativeID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 8/16/2024 12:52:45 PM.
    
    SELECT *
    FROM LeadNotes WITH (NOLOCK) 
    WHERE [SalesRepresentativeID] = @SalesRepresentativeID
				) sub
	where		
					[LeadNoteID] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadNotesBySalesRepresentativeIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadNotesBySalesRepresentativeIDSp_PagingSp]
	@SalesRepresentativeID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadNoteTypeID' and @SortAscending = 1 then 
							[LeadNoteTypeID]
						end ASC,
						case when @SortColumn = 'LeadNoteTypeID' and @SortAscending = 0 then 
							[LeadNoteTypeID]
						end DESC,
			
						case when @SortColumn = 'LeadNoteID' and @SortAscending = 1 then 
							[LeadNoteID]
						end ASC,
						case when @SortColumn = 'LeadNoteID' and @SortAscending = 0 then 
							[LeadNoteID]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 1 then 
							[SalesRepresentativeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 0 then 
							[SalesRepresentativeID]
						end DESC,
			
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 1 then 
							[FollowUpDate]
						end ASC,
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 0 then 
							[FollowUpDate]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 8/16/2024 12:52:45 PM.
    
    SELECT *
    FROM LeadNotes WITH (NOLOCK) 
    WHERE [SalesRepresentativeID] = @SalesRepresentativeID
					) sub
		where		
					[LeadNoteID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadNoteSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadNoteSp]
	@LeadNoteID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadNotes WITH (NOLOCK) 
     WHERE LeadNoteID = @LeadNoteID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadNotesSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadNotesSp]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadNotes WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetLeadNotesSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadNotesSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadNotes WITH (NOLOCK) 
				) sub
	where		
					[LeadNoteID] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadNotesSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadNotesSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadNoteTypeID' and @SortAscending = 1 then 
							[LeadNoteTypeID]
						end ASC,
						case when @SortColumn = 'LeadNoteTypeID' and @SortAscending = 0 then 
							[LeadNoteTypeID]
						end DESC,
			
						case when @SortColumn = 'LeadNoteID' and @SortAscending = 1 then 
							[LeadNoteID]
						end ASC,
						case when @SortColumn = 'LeadNoteID' and @SortAscending = 0 then 
							[LeadNoteID]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 1 then 
							[SalesRepresentativeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 0 then 
							[SalesRepresentativeID]
						end DESC,
			
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 1 then 
							[FollowUpDate]
						end ASC,
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 0 then 
							[FollowUpDate]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadNotes WITH (NOLOCK) 
					) sub
		where		
					[LeadNoteID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadNoteTypeByLeadNoteTypeNameSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadNoteTypeByLeadNoteTypeNameSp]
	@LeadNoteTypeName [nvarchar](255)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadNoteTypes WITH (NOLOCK) 
    WHERE [LeadNoteTypeName] = @LeadNoteTypeName
GO
/****** Object:  StoredProcedure [dbo].[GetLeadNoteTypeSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadNoteTypeSp]
	@LeadNoteTypeID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadNoteTypes WITH (NOLOCK) 
     WHERE LeadNoteTypeID = @LeadNoteTypeID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadNoteTypesSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadNoteTypesSp]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadNoteTypes WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetLeadNoteTypesSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadNoteTypesSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadNoteTypes WITH (NOLOCK) 
				) sub
	where		
					[LeadNoteTypeID] like '%' + @Search + '%' or
					[LeadNoteTypeName] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadNoteTypesSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadNoteTypesSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadNoteTypeID' and @SortAscending = 1 then 
							[LeadNoteTypeID]
						end ASC,
						case when @SortColumn = 'LeadNoteTypeID' and @SortAscending = 0 then 
							[LeadNoteTypeID]
						end DESC,
			
						case when @SortColumn = 'LeadNoteTypeName' and @SortAscending = 1 then 
							[LeadNoteTypeName]
						end ASC,
						case when @SortColumn = 'LeadNoteTypeName' and @SortAscending = 0 then 
							[LeadNoteTypeName]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadNoteTypes WITH (NOLOCK) 
					) sub
		where		
					[LeadNoteTypeID] like '%' + @Search + '%' or
					[LeadNoteTypeName] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadRelationshipsByLeadIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadRelationshipsByLeadIDSp]
	@LeadID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM LeadRelationships WITH (NOLOCK) 
    WHERE [LeadID] = @LeadID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadRelationshipsByLeadIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadRelationshipsByLeadIDSp_CountSp]
	@LeadID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM LeadRelationships WITH (NOLOCK) 
    WHERE [LeadID] = @LeadID
				) sub
	where		
					[LeadRelationshipID] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadRelationshipsByLeadIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadRelationshipsByLeadIDSp_PagingSp]
	@LeadID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadRelationshipID' and @SortAscending = 1 then 
							[LeadRelationshipID]
						end ASC,
						case when @SortColumn = 'LeadRelationshipID' and @SortAscending = 0 then 
							[LeadRelationshipID]
						end DESC,
			
						case when @SortColumn = 'LeadRelationshipTypeID' and @SortAscending = 1 then 
							[LeadRelationshipTypeID]
						end ASC,
						case when @SortColumn = 'LeadRelationshipTypeID' and @SortAscending = 0 then 
							[LeadRelationshipTypeID]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'RelatedLeadID' and @SortAscending = 1 then 
							[RelatedLeadID]
						end ASC,
						case when @SortColumn = 'RelatedLeadID' and @SortAscending = 0 then 
							[RelatedLeadID]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM LeadRelationships WITH (NOLOCK) 
    WHERE [LeadID] = @LeadID
					) sub
		where		
					[LeadRelationshipID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadRelationshipsByLeadRelationshipTypeIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadRelationshipsByLeadRelationshipTypeIDSp]
	@LeadRelationshipTypeID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM LeadRelationships WITH (NOLOCK) 
    WHERE [LeadRelationshipTypeID] = @LeadRelationshipTypeID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadRelationshipsByLeadRelationshipTypeIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadRelationshipsByLeadRelationshipTypeIDSp_CountSp]
	@LeadRelationshipTypeID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM LeadRelationships WITH (NOLOCK) 
    WHERE [LeadRelationshipTypeID] = @LeadRelationshipTypeID
				) sub
	where		
					[LeadRelationshipID] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadRelationshipsByLeadRelationshipTypeIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadRelationshipsByLeadRelationshipTypeIDSp_PagingSp]
	@LeadRelationshipTypeID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadRelationshipID' and @SortAscending = 1 then 
							[LeadRelationshipID]
						end ASC,
						case when @SortColumn = 'LeadRelationshipID' and @SortAscending = 0 then 
							[LeadRelationshipID]
						end DESC,
			
						case when @SortColumn = 'LeadRelationshipTypeID' and @SortAscending = 1 then 
							[LeadRelationshipTypeID]
						end ASC,
						case when @SortColumn = 'LeadRelationshipTypeID' and @SortAscending = 0 then 
							[LeadRelationshipTypeID]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'RelatedLeadID' and @SortAscending = 1 then 
							[RelatedLeadID]
						end ASC,
						case when @SortColumn = 'RelatedLeadID' and @SortAscending = 0 then 
							[RelatedLeadID]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM LeadRelationships WITH (NOLOCK) 
    WHERE [LeadRelationshipTypeID] = @LeadRelationshipTypeID
					) sub
		where		
					[LeadRelationshipID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadRelationshipsByRelatedLeadIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadRelationshipsByRelatedLeadIDSp]
	@RelatedLeadID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM LeadRelationships WITH (NOLOCK) 
    WHERE [RelatedLeadID] = @RelatedLeadID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadRelationshipsByRelatedLeadIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadRelationshipsByRelatedLeadIDSp_CountSp]
	@RelatedLeadID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM LeadRelationships WITH (NOLOCK) 
    WHERE [RelatedLeadID] = @RelatedLeadID
				) sub
	where		
					[LeadRelationshipID] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadRelationshipsByRelatedLeadIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadRelationshipsByRelatedLeadIDSp_PagingSp]
	@RelatedLeadID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadRelationshipID' and @SortAscending = 1 then 
							[LeadRelationshipID]
						end ASC,
						case when @SortColumn = 'LeadRelationshipID' and @SortAscending = 0 then 
							[LeadRelationshipID]
						end DESC,
			
						case when @SortColumn = 'LeadRelationshipTypeID' and @SortAscending = 1 then 
							[LeadRelationshipTypeID]
						end ASC,
						case when @SortColumn = 'LeadRelationshipTypeID' and @SortAscending = 0 then 
							[LeadRelationshipTypeID]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'RelatedLeadID' and @SortAscending = 1 then 
							[RelatedLeadID]
						end ASC,
						case when @SortColumn = 'RelatedLeadID' and @SortAscending = 0 then 
							[RelatedLeadID]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM LeadRelationships WITH (NOLOCK) 
    WHERE [RelatedLeadID] = @RelatedLeadID
					) sub
		where		
					[LeadRelationshipID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadRelationshipSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadRelationshipSp]
	@LeadRelationshipID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM LeadRelationships WITH (NOLOCK) 
     WHERE LeadRelationshipID = @LeadRelationshipID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadRelationshipsSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadRelationshipsSp]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM LeadRelationships WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetLeadRelationshipsSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadRelationshipsSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM LeadRelationships WITH (NOLOCK) 
				) sub
	where		
					[LeadRelationshipID] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadRelationshipsSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadRelationshipsSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadRelationshipID' and @SortAscending = 1 then 
							[LeadRelationshipID]
						end ASC,
						case when @SortColumn = 'LeadRelationshipID' and @SortAscending = 0 then 
							[LeadRelationshipID]
						end DESC,
			
						case when @SortColumn = 'LeadRelationshipTypeID' and @SortAscending = 1 then 
							[LeadRelationshipTypeID]
						end ASC,
						case when @SortColumn = 'LeadRelationshipTypeID' and @SortAscending = 0 then 
							[LeadRelationshipTypeID]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'RelatedLeadID' and @SortAscending = 1 then 
							[RelatedLeadID]
						end ASC,
						case when @SortColumn = 'RelatedLeadID' and @SortAscending = 0 then 
							[RelatedLeadID]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM LeadRelationships WITH (NOLOCK) 
					) sub
		where		
					[LeadRelationshipID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadRelationshipTypeByLeadRelationshipTypeNameSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadRelationshipTypeByLeadRelationshipTypeNameSp]
	@LeadRelationshipTypeName [nvarchar](255)
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM LeadRelationshipTypes WITH (NOLOCK) 
    WHERE [LeadRelationshipTypeName] = @LeadRelationshipTypeName
GO
/****** Object:  StoredProcedure [dbo].[GetLeadRelationshipTypeSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadRelationshipTypeSp]
	@LeadRelationshipTypeID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM LeadRelationshipTypes WITH (NOLOCK) 
     WHERE LeadRelationshipTypeID = @LeadRelationshipTypeID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadRelationshipTypesSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadRelationshipTypesSp]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM LeadRelationshipTypes WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetLeadRelationshipTypesSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadRelationshipTypesSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM LeadRelationshipTypes WITH (NOLOCK) 
				) sub
	where		
					[LeadRelationshipTypeID] like '%' + @Search + '%' or
					[LeadRelationshipTypeName] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadRelationshipTypesSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadRelationshipTypesSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadRelationshipTypeID' and @SortAscending = 1 then 
							[LeadRelationshipTypeID]
						end ASC,
						case when @SortColumn = 'LeadRelationshipTypeID' and @SortAscending = 0 then 
							[LeadRelationshipTypeID]
						end DESC,
			
						case when @SortColumn = 'LeadRelationshipTypeName' and @SortAscending = 1 then 
							[LeadRelationshipTypeName]
						end ASC,
						case when @SortColumn = 'LeadRelationshipTypeName' and @SortAscending = 0 then 
							[LeadRelationshipTypeName]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM LeadRelationshipTypes WITH (NOLOCK) 
					) sub
		where		
					[LeadRelationshipTypeID] like '%' + @Search + '%' or
					[LeadRelationshipTypeName] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByCampaignIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadsByCampaignIDSp]
	@CampaignID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE [CampaignID] = @CampaignID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByCampaignIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadsByCampaignIDSp_CountSp]
	@CampaignID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/15/2023 11:29:13 AM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE [CampaignID] = @CampaignID
				) sub
	where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByCampaignIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadsByCampaignIDSp_PagingSp]
	@CampaignID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 1 then 
							[LeadSubStatusID]
						end ASC,
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 0 then 
							[LeadSubStatusID]
						end DESC,
			
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 1 then 
							[FollowUpDate]
						end ASC,
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 0 then 
							[FollowUpDate]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'Company' and @SortAscending = 1 then 
							[Company]
						end ASC,
						case when @SortColumn = 'Company' and @SortAscending = 0 then 
							[Company]
						end DESC,
			
						case when @SortColumn = 'FirstName' and @SortAscending = 1 then 
							[FirstName]
						end ASC,
						case when @SortColumn = 'FirstName' and @SortAscending = 0 then 
							[FirstName]
						end DESC,
			
						case when @SortColumn = 'LastName' and @SortAscending = 1 then 
							[LastName]
						end ASC,
						case when @SortColumn = 'LastName' and @SortAscending = 0 then 
							[LastName]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Address' and @SortAscending = 1 then 
							[Address]
						end ASC,
						case when @SortColumn = 'Address' and @SortAscending = 0 then 
							[Address]
						end DESC,
			
						case when @SortColumn = 'Address2' and @SortAscending = 1 then 
							[Address2]
						end ASC,
						case when @SortColumn = 'Address2' and @SortAscending = 0 then 
							[Address2]
						end DESC,
			
						case when @SortColumn = 'City' and @SortAscending = 1 then 
							[City]
						end ASC,
						case when @SortColumn = 'City' and @SortAscending = 0 then 
							[City]
						end DESC,
			
						case when @SortColumn = 'State' and @SortAscending = 1 then 
							[State]
						end ASC,
						case when @SortColumn = 'State' and @SortAscending = 0 then 
							[State]
						end DESC,
			
						case when @SortColumn = 'ZipCode' and @SortAscending = 1 then 
							[ZipCode]
						end ASC,
						case when @SortColumn = 'ZipCode' and @SortAscending = 0 then 
							[ZipCode]
						end DESC,
			
						case when @SortColumn = 'SourceID' and @SortAscending = 1 then 
							[SourceID]
						end ASC,
						case when @SortColumn = 'SourceID' and @SortAscending = 0 then 
							[SourceID]
						end DESC,
			
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 1 then 
							[LastContactedDate]
						end ASC,
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 0 then 
							[LastContactedDate]
						end DESC,
			
						case when @SortColumn = 'Priority' and @SortAscending = 1 then 
							[Priority]
						end ASC,
						case when @SortColumn = 'Priority' and @SortAscending = 0 then 
							[Priority]
						end DESC,
			
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 1 then 
							[LeadStatusID]
						end ASC,
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 0 then 
							[LeadStatusID]
						end DESC,
			
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 1 then 
							[OpportunitySize]
						end ASC,
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 0 then 
							[OpportunitySize]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 1 then 
							[SalesRepresentativeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 0 then 
							[SalesRepresentativeID]
						end DESC,
			
						case when @SortColumn = 'ImportKey' and @SortAscending = 1 then 
							[ImportKey]
						end ASC,
						case when @SortColumn = 'ImportKey' and @SortAscending = 0 then 
							[ImportKey]
						end DESC,
			
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 1 then 
							[GeneratedDate]
						end ASC,
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 0 then 
							[GeneratedDate]
						end DESC,
			
						case when @SortColumn = 'CampaignID' and @SortAscending = 1 then 
							[CampaignID]
						end ASC,
						case when @SortColumn = 'CampaignID' and @SortAscending = 0 then 
							[CampaignID]
						end DESC,
			
						case when @SortColumn = 'AccountID' and @SortAscending = 1 then 
							[AccountID]
						end ASC,
						case when @SortColumn = 'AccountID' and @SortAscending = 0 then 
							[AccountID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/15/2023 11:29:13 AM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE [CampaignID] = @CampaignID
					) sub
		where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByEmailSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadsByEmailSp]
	@Email [nvarchar](255)
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE [Email] = @Email
GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByImportKeySp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadsByImportKeySp]
	@ImportKey [nvarchar](255)
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE [ImportKey] = @ImportKey
GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByLeadStatusIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadsByLeadStatusIDSp]
	@LeadStatusID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE [LeadStatusID] = @LeadStatusID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByLeadStatusIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsByLeadStatusIDSp_CountSp]
	@LeadStatusID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE [LeadStatusID] = @LeadStatusID
				) sub
	where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByLeadStatusIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsByLeadStatusIDSp_PagingSp]
	@LeadStatusID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 1 then 
							[LeadSubStatusID]
						end ASC,
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 0 then 
							[LeadSubStatusID]
						end DESC,
			
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 1 then 
							[FollowUpDate]
						end ASC,
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 0 then 
							[FollowUpDate]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'Company' and @SortAscending = 1 then 
							[Company]
						end ASC,
						case when @SortColumn = 'Company' and @SortAscending = 0 then 
							[Company]
						end DESC,
			
						case when @SortColumn = 'FirstName' and @SortAscending = 1 then 
							[FirstName]
						end ASC,
						case when @SortColumn = 'FirstName' and @SortAscending = 0 then 
							[FirstName]
						end DESC,
			
						case when @SortColumn = 'LastName' and @SortAscending = 1 then 
							[LastName]
						end ASC,
						case when @SortColumn = 'LastName' and @SortAscending = 0 then 
							[LastName]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Address' and @SortAscending = 1 then 
							[Address]
						end ASC,
						case when @SortColumn = 'Address' and @SortAscending = 0 then 
							[Address]
						end DESC,
			
						case when @SortColumn = 'Address2' and @SortAscending = 1 then 
							[Address2]
						end ASC,
						case when @SortColumn = 'Address2' and @SortAscending = 0 then 
							[Address2]
						end DESC,
			
						case when @SortColumn = 'City' and @SortAscending = 1 then 
							[City]
						end ASC,
						case when @SortColumn = 'City' and @SortAscending = 0 then 
							[City]
						end DESC,
			
						case when @SortColumn = 'State' and @SortAscending = 1 then 
							[State]
						end ASC,
						case when @SortColumn = 'State' and @SortAscending = 0 then 
							[State]
						end DESC,
			
						case when @SortColumn = 'ZipCode' and @SortAscending = 1 then 
							[ZipCode]
						end ASC,
						case when @SortColumn = 'ZipCode' and @SortAscending = 0 then 
							[ZipCode]
						end DESC,
			
						case when @SortColumn = 'SourceID' and @SortAscending = 1 then 
							[SourceID]
						end ASC,
						case when @SortColumn = 'SourceID' and @SortAscending = 0 then 
							[SourceID]
						end DESC,
			
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 1 then 
							[LastContactedDate]
						end ASC,
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 0 then 
							[LastContactedDate]
						end DESC,
			
						case when @SortColumn = 'Priority' and @SortAscending = 1 then 
							[Priority]
						end ASC,
						case when @SortColumn = 'Priority' and @SortAscending = 0 then 
							[Priority]
						end DESC,
			
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 1 then 
							[LeadStatusID]
						end ASC,
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 0 then 
							[LeadStatusID]
						end DESC,
			
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 1 then 
							[OpportunitySize]
						end ASC,
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 0 then 
							[OpportunitySize]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 1 then 
							[SalesRepresentativeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 0 then 
							[SalesRepresentativeID]
						end DESC,
			
						case when @SortColumn = 'ImportKey' and @SortAscending = 1 then 
							[ImportKey]
						end ASC,
						case when @SortColumn = 'ImportKey' and @SortAscending = 0 then 
							[ImportKey]
						end DESC,
			
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 1 then 
							[GeneratedDate]
						end ASC,
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 0 then 
							[GeneratedDate]
						end DESC,
			
						case when @SortColumn = 'CampaignID' and @SortAscending = 1 then 
							[CampaignID]
						end ASC,
						case when @SortColumn = 'CampaignID' and @SortAscending = 0 then 
							[CampaignID]
						end DESC,
			
						case when @SortColumn = 'AccountID' and @SortAscending = 1 then 
							[AccountID]
						end ASC,
						case when @SortColumn = 'AccountID' and @SortAscending = 0 then 
							[AccountID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE [LeadStatusID] = @LeadStatusID
					) sub
		where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByLeadSubStatusIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadsByLeadSubStatusIDSp]
	@LeadSubStatusID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE [LeadSubStatusID] = @LeadSubStatusID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByLeadSubStatusIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsByLeadSubStatusIDSp_CountSp]
	@LeadSubStatusID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE [LeadSubStatusID] = @LeadSubStatusID
				) sub
	where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByLeadSubStatusIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsByLeadSubStatusIDSp_PagingSp]
	@LeadSubStatusID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 1 then 
							[LeadSubStatusID]
						end ASC,
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 0 then 
							[LeadSubStatusID]
						end DESC,
			
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 1 then 
							[FollowUpDate]
						end ASC,
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 0 then 
							[FollowUpDate]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'Company' and @SortAscending = 1 then 
							[Company]
						end ASC,
						case when @SortColumn = 'Company' and @SortAscending = 0 then 
							[Company]
						end DESC,
			
						case when @SortColumn = 'FirstName' and @SortAscending = 1 then 
							[FirstName]
						end ASC,
						case when @SortColumn = 'FirstName' and @SortAscending = 0 then 
							[FirstName]
						end DESC,
			
						case when @SortColumn = 'LastName' and @SortAscending = 1 then 
							[LastName]
						end ASC,
						case when @SortColumn = 'LastName' and @SortAscending = 0 then 
							[LastName]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Address' and @SortAscending = 1 then 
							[Address]
						end ASC,
						case when @SortColumn = 'Address' and @SortAscending = 0 then 
							[Address]
						end DESC,
			
						case when @SortColumn = 'Address2' and @SortAscending = 1 then 
							[Address2]
						end ASC,
						case when @SortColumn = 'Address2' and @SortAscending = 0 then 
							[Address2]
						end DESC,
			
						case when @SortColumn = 'City' and @SortAscending = 1 then 
							[City]
						end ASC,
						case when @SortColumn = 'City' and @SortAscending = 0 then 
							[City]
						end DESC,
			
						case when @SortColumn = 'State' and @SortAscending = 1 then 
							[State]
						end ASC,
						case when @SortColumn = 'State' and @SortAscending = 0 then 
							[State]
						end DESC,
			
						case when @SortColumn = 'ZipCode' and @SortAscending = 1 then 
							[ZipCode]
						end ASC,
						case when @SortColumn = 'ZipCode' and @SortAscending = 0 then 
							[ZipCode]
						end DESC,
			
						case when @SortColumn = 'SourceID' and @SortAscending = 1 then 
							[SourceID]
						end ASC,
						case when @SortColumn = 'SourceID' and @SortAscending = 0 then 
							[SourceID]
						end DESC,
			
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 1 then 
							[LastContactedDate]
						end ASC,
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 0 then 
							[LastContactedDate]
						end DESC,
			
						case when @SortColumn = 'Priority' and @SortAscending = 1 then 
							[Priority]
						end ASC,
						case when @SortColumn = 'Priority' and @SortAscending = 0 then 
							[Priority]
						end DESC,
			
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 1 then 
							[LeadStatusID]
						end ASC,
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 0 then 
							[LeadStatusID]
						end DESC,
			
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 1 then 
							[OpportunitySize]
						end ASC,
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 0 then 
							[OpportunitySize]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 1 then 
							[SalesRepresentativeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 0 then 
							[SalesRepresentativeID]
						end DESC,
			
						case when @SortColumn = 'ImportKey' and @SortAscending = 1 then 
							[ImportKey]
						end ASC,
						case when @SortColumn = 'ImportKey' and @SortAscending = 0 then 
							[ImportKey]
						end DESC,
			
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 1 then 
							[GeneratedDate]
						end ASC,
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 0 then 
							[GeneratedDate]
						end DESC,
			
						case when @SortColumn = 'CampaignID' and @SortAscending = 1 then 
							[CampaignID]
						end ASC,
						case when @SortColumn = 'CampaignID' and @SortAscending = 0 then 
							[CampaignID]
						end DESC,
			
						case when @SortColumn = 'AccountID' and @SortAscending = 1 then 
							[AccountID]
						end ASC,
						case when @SortColumn = 'AccountID' and @SortAscending = 0 then 
							[AccountID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE [LeadSubStatusID] = @LeadSubStatusID
					) sub
		where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByLeadTagTagIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadsByLeadTagTagIDSp]
	@TagID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT t2.*
    FROM LeadTags t1 WITH (NOLOCK) 
    JOIN Leads t2 WITH (NOLOCK) 
    ON t1.LeadID = t2.LeadID
    WHERE t1.[TagID] = @TagID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByPhoneSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadsByPhoneSp]
	@Phone [nvarchar](255)
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE [Phone] = @Phone
GO
/****** Object:  StoredProcedure [dbo].[GetLeadsBySalesRepresentativeIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadsBySalesRepresentativeIDSp]
	@SalesRepresentativeID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE [SalesRepresentativeID] = @SalesRepresentativeID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadsBySalesRepresentativeIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsBySalesRepresentativeIDSp_CountSp]
	@SalesRepresentativeID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE [SalesRepresentativeID] = @SalesRepresentativeID
				) sub
	where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadsBySalesRepresentativeIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsBySalesRepresentativeIDSp_PagingSp]
	@SalesRepresentativeID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 1 then 
							[LeadSubStatusID]
						end ASC,
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 0 then 
							[LeadSubStatusID]
						end DESC,
			
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 1 then 
							[FollowUpDate]
						end ASC,
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 0 then 
							[FollowUpDate]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'Company' and @SortAscending = 1 then 
							[Company]
						end ASC,
						case when @SortColumn = 'Company' and @SortAscending = 0 then 
							[Company]
						end DESC,
			
						case when @SortColumn = 'FirstName' and @SortAscending = 1 then 
							[FirstName]
						end ASC,
						case when @SortColumn = 'FirstName' and @SortAscending = 0 then 
							[FirstName]
						end DESC,
			
						case when @SortColumn = 'LastName' and @SortAscending = 1 then 
							[LastName]
						end ASC,
						case when @SortColumn = 'LastName' and @SortAscending = 0 then 
							[LastName]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Address' and @SortAscending = 1 then 
							[Address]
						end ASC,
						case when @SortColumn = 'Address' and @SortAscending = 0 then 
							[Address]
						end DESC,
			
						case when @SortColumn = 'Address2' and @SortAscending = 1 then 
							[Address2]
						end ASC,
						case when @SortColumn = 'Address2' and @SortAscending = 0 then 
							[Address2]
						end DESC,
			
						case when @SortColumn = 'City' and @SortAscending = 1 then 
							[City]
						end ASC,
						case when @SortColumn = 'City' and @SortAscending = 0 then 
							[City]
						end DESC,
			
						case when @SortColumn = 'State' and @SortAscending = 1 then 
							[State]
						end ASC,
						case when @SortColumn = 'State' and @SortAscending = 0 then 
							[State]
						end DESC,
			
						case when @SortColumn = 'ZipCode' and @SortAscending = 1 then 
							[ZipCode]
						end ASC,
						case when @SortColumn = 'ZipCode' and @SortAscending = 0 then 
							[ZipCode]
						end DESC,
			
						case when @SortColumn = 'SourceID' and @SortAscending = 1 then 
							[SourceID]
						end ASC,
						case when @SortColumn = 'SourceID' and @SortAscending = 0 then 
							[SourceID]
						end DESC,
			
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 1 then 
							[LastContactedDate]
						end ASC,
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 0 then 
							[LastContactedDate]
						end DESC,
			
						case when @SortColumn = 'Priority' and @SortAscending = 1 then 
							[Priority]
						end ASC,
						case when @SortColumn = 'Priority' and @SortAscending = 0 then 
							[Priority]
						end DESC,
			
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 1 then 
							[LeadStatusID]
						end ASC,
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 0 then 
							[LeadStatusID]
						end DESC,
			
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 1 then 
							[OpportunitySize]
						end ASC,
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 0 then 
							[OpportunitySize]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 1 then 
							[SalesRepresentativeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 0 then 
							[SalesRepresentativeID]
						end DESC,
			
						case when @SortColumn = 'ImportKey' and @SortAscending = 1 then 
							[ImportKey]
						end ASC,
						case when @SortColumn = 'ImportKey' and @SortAscending = 0 then 
							[ImportKey]
						end DESC,
			
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 1 then 
							[GeneratedDate]
						end ASC,
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 0 then 
							[GeneratedDate]
						end DESC,
			
						case when @SortColumn = 'CampaignID' and @SortAscending = 1 then 
							[CampaignID]
						end ASC,
						case when @SortColumn = 'CampaignID' and @SortAscending = 0 then 
							[CampaignID]
						end DESC,
			
						case when @SortColumn = 'AccountID' and @SortAscending = 1 then 
							[AccountID]
						end ASC,
						case when @SortColumn = 'AccountID' and @SortAscending = 0 then 
							[AccountID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE [SalesRepresentativeID] = @SalesRepresentativeID
					) sub
		where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadsBySourceIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadsBySourceIDSp]
	@SourceID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE [SourceID] = @SourceID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadsBySourceIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadsBySourceIDSp_CountSp]
	@SourceID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/15/2023 11:29:13 AM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE [SourceID] = @SourceID
				) sub
	where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadsBySourceIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadsBySourceIDSp_PagingSp]
	@SourceID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 1 then 
							[LeadSubStatusID]
						end ASC,
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 0 then 
							[LeadSubStatusID]
						end DESC,
			
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 1 then 
							[FollowUpDate]
						end ASC,
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 0 then 
							[FollowUpDate]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'Company' and @SortAscending = 1 then 
							[Company]
						end ASC,
						case when @SortColumn = 'Company' and @SortAscending = 0 then 
							[Company]
						end DESC,
			
						case when @SortColumn = 'FirstName' and @SortAscending = 1 then 
							[FirstName]
						end ASC,
						case when @SortColumn = 'FirstName' and @SortAscending = 0 then 
							[FirstName]
						end DESC,
			
						case when @SortColumn = 'LastName' and @SortAscending = 1 then 
							[LastName]
						end ASC,
						case when @SortColumn = 'LastName' and @SortAscending = 0 then 
							[LastName]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Address' and @SortAscending = 1 then 
							[Address]
						end ASC,
						case when @SortColumn = 'Address' and @SortAscending = 0 then 
							[Address]
						end DESC,
			
						case when @SortColumn = 'Address2' and @SortAscending = 1 then 
							[Address2]
						end ASC,
						case when @SortColumn = 'Address2' and @SortAscending = 0 then 
							[Address2]
						end DESC,
			
						case when @SortColumn = 'City' and @SortAscending = 1 then 
							[City]
						end ASC,
						case when @SortColumn = 'City' and @SortAscending = 0 then 
							[City]
						end DESC,
			
						case when @SortColumn = 'State' and @SortAscending = 1 then 
							[State]
						end ASC,
						case when @SortColumn = 'State' and @SortAscending = 0 then 
							[State]
						end DESC,
			
						case when @SortColumn = 'ZipCode' and @SortAscending = 1 then 
							[ZipCode]
						end ASC,
						case when @SortColumn = 'ZipCode' and @SortAscending = 0 then 
							[ZipCode]
						end DESC,
			
						case when @SortColumn = 'SourceID' and @SortAscending = 1 then 
							[SourceID]
						end ASC,
						case when @SortColumn = 'SourceID' and @SortAscending = 0 then 
							[SourceID]
						end DESC,
			
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 1 then 
							[LastContactedDate]
						end ASC,
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 0 then 
							[LastContactedDate]
						end DESC,
			
						case when @SortColumn = 'Priority' and @SortAscending = 1 then 
							[Priority]
						end ASC,
						case when @SortColumn = 'Priority' and @SortAscending = 0 then 
							[Priority]
						end DESC,
			
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 1 then 
							[LeadStatusID]
						end ASC,
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 0 then 
							[LeadStatusID]
						end DESC,
			
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 1 then 
							[OpportunitySize]
						end ASC,
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 0 then 
							[OpportunitySize]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 1 then 
							[SalesRepresentativeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 0 then 
							[SalesRepresentativeID]
						end DESC,
			
						case when @SortColumn = 'ImportKey' and @SortAscending = 1 then 
							[ImportKey]
						end ASC,
						case when @SortColumn = 'ImportKey' and @SortAscending = 0 then 
							[ImportKey]
						end DESC,
			
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 1 then 
							[GeneratedDate]
						end ASC,
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 0 then 
							[GeneratedDate]
						end DESC,
			
						case when @SortColumn = 'CampaignID' and @SortAscending = 1 then 
							[CampaignID]
						end ASC,
						case when @SortColumn = 'CampaignID' and @SortAscending = 0 then 
							[CampaignID]
						end DESC,
			
						case when @SortColumn = 'AccountID' and @SortAscending = 1 then 
							[AccountID]
						end ASC,
						case when @SortColumn = 'AccountID' and @SortAscending = 0 then 
							[AccountID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/15/2023 11:29:13 AM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE [SourceID] = @SourceID
					) sub
		where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByStatusIDSalesRepresentativeIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO


create PROCEDURE [dbo].[GetLeadsByStatusIDSalesRepresentativeIDSp]
	@LeadStatusID [int],
	@SalesRepresentativeID [int]
AS

    -- Automatically generated on 7/16/2020 4:40:15 PM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE [LeadStatusID] = @LeadStatusID and SalesRepresentativeID = @SalesRepresentativeID


GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByStatusIDSalesRepresentativeIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsByStatusIDSalesRepresentativeIDSp_CountSp]
	@LeadStatusID [int],
	@SalesRepresentativeID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 7/16/2020 4:40:15 PM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE [LeadStatusID] = @LeadStatusID and SalesRepresentativeID = @SalesRepresentativeID

				) sub
	where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByStatusIDSalesRepresentativeIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsByStatusIDSalesRepresentativeIDSp_PagingSp]
	@LeadStatusID [int],
	@SalesRepresentativeID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 1 then 
							[LeadSubStatusID]
						end ASC,
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 0 then 
							[LeadSubStatusID]
						end DESC,
			
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 1 then 
							[FollowUpDate]
						end ASC,
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 0 then 
							[FollowUpDate]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'Company' and @SortAscending = 1 then 
							[Company]
						end ASC,
						case when @SortColumn = 'Company' and @SortAscending = 0 then 
							[Company]
						end DESC,
			
						case when @SortColumn = 'FirstName' and @SortAscending = 1 then 
							[FirstName]
						end ASC,
						case when @SortColumn = 'FirstName' and @SortAscending = 0 then 
							[FirstName]
						end DESC,
			
						case when @SortColumn = 'LastName' and @SortAscending = 1 then 
							[LastName]
						end ASC,
						case when @SortColumn = 'LastName' and @SortAscending = 0 then 
							[LastName]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Address' and @SortAscending = 1 then 
							[Address]
						end ASC,
						case when @SortColumn = 'Address' and @SortAscending = 0 then 
							[Address]
						end DESC,
			
						case when @SortColumn = 'Address2' and @SortAscending = 1 then 
							[Address2]
						end ASC,
						case when @SortColumn = 'Address2' and @SortAscending = 0 then 
							[Address2]
						end DESC,
			
						case when @SortColumn = 'City' and @SortAscending = 1 then 
							[City]
						end ASC,
						case when @SortColumn = 'City' and @SortAscending = 0 then 
							[City]
						end DESC,
			
						case when @SortColumn = 'State' and @SortAscending = 1 then 
							[State]
						end ASC,
						case when @SortColumn = 'State' and @SortAscending = 0 then 
							[State]
						end DESC,
			
						case when @SortColumn = 'ZipCode' and @SortAscending = 1 then 
							[ZipCode]
						end ASC,
						case when @SortColumn = 'ZipCode' and @SortAscending = 0 then 
							[ZipCode]
						end DESC,
			
						case when @SortColumn = 'SourceID' and @SortAscending = 1 then 
							[SourceID]
						end ASC,
						case when @SortColumn = 'SourceID' and @SortAscending = 0 then 
							[SourceID]
						end DESC,
			
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 1 then 
							[LastContactedDate]
						end ASC,
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 0 then 
							[LastContactedDate]
						end DESC,
			
						case when @SortColumn = 'Priority' and @SortAscending = 1 then 
							[Priority]
						end ASC,
						case when @SortColumn = 'Priority' and @SortAscending = 0 then 
							[Priority]
						end DESC,
			
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 1 then 
							[LeadStatusID]
						end ASC,
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 0 then 
							[LeadStatusID]
						end DESC,
			
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 1 then 
							[OpportunitySize]
						end ASC,
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 0 then 
							[OpportunitySize]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 1 then 
							[SalesRepresentativeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 0 then 
							[SalesRepresentativeID]
						end DESC,
			
						case when @SortColumn = 'ImportKey' and @SortAscending = 1 then 
							[ImportKey]
						end ASC,
						case when @SortColumn = 'ImportKey' and @SortAscending = 0 then 
							[ImportKey]
						end DESC,
			
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 1 then 
							[GeneratedDate]
						end ASC,
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 0 then 
							[GeneratedDate]
						end DESC,
			
						case when @SortColumn = 'CampaignID' and @SortAscending = 1 then 
							[CampaignID]
						end ASC,
						case when @SortColumn = 'CampaignID' and @SortAscending = 0 then 
							[CampaignID]
						end DESC,
			
						case when @SortColumn = 'AccountID' and @SortAscending = 1 then 
							[AccountID]
						end ASC,
						case when @SortColumn = 'AccountID' and @SortAscending = 0 then 
							[AccountID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 7/16/2020 4:40:15 PM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE [LeadStatusID] = @LeadStatusID and SalesRepresentativeID = @SalesRepresentativeID

					) sub
		where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadsBySubStatusIDSalesRepresentativeIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO



create PROCEDURE [dbo].[GetLeadsBySubStatusIDSalesRepresentativeIDSp]
	@LeadSubStatusID [int],
	@SalesRepresentativeID [int]
AS
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE LeadSubStatusID = @LeadSubStatusID and SalesRepresentativeID = @SalesRepresentativeID



GO
/****** Object:  StoredProcedure [dbo].[GetLeadsBySubStatusIDSalesRepresentativeIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsBySubStatusIDSalesRepresentativeIDSp_CountSp]
	@LeadSubStatusID [int],
	@SalesRepresentativeID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE LeadSubStatusID = @LeadSubStatusID and SalesRepresentativeID = @SalesRepresentativeID


				) sub
	where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadsBySubStatusIDSalesRepresentativeIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsBySubStatusIDSalesRepresentativeIDSp_PagingSp]
	@LeadSubStatusID [int],
	@SalesRepresentativeID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 1 then 
							[LeadSubStatusID]
						end ASC,
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 0 then 
							[LeadSubStatusID]
						end DESC,
			
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 1 then 
							[FollowUpDate]
						end ASC,
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 0 then 
							[FollowUpDate]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'Company' and @SortAscending = 1 then 
							[Company]
						end ASC,
						case when @SortColumn = 'Company' and @SortAscending = 0 then 
							[Company]
						end DESC,
			
						case when @SortColumn = 'FirstName' and @SortAscending = 1 then 
							[FirstName]
						end ASC,
						case when @SortColumn = 'FirstName' and @SortAscending = 0 then 
							[FirstName]
						end DESC,
			
						case when @SortColumn = 'LastName' and @SortAscending = 1 then 
							[LastName]
						end ASC,
						case when @SortColumn = 'LastName' and @SortAscending = 0 then 
							[LastName]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Address' and @SortAscending = 1 then 
							[Address]
						end ASC,
						case when @SortColumn = 'Address' and @SortAscending = 0 then 
							[Address]
						end DESC,
			
						case when @SortColumn = 'Address2' and @SortAscending = 1 then 
							[Address2]
						end ASC,
						case when @SortColumn = 'Address2' and @SortAscending = 0 then 
							[Address2]
						end DESC,
			
						case when @SortColumn = 'City' and @SortAscending = 1 then 
							[City]
						end ASC,
						case when @SortColumn = 'City' and @SortAscending = 0 then 
							[City]
						end DESC,
			
						case when @SortColumn = 'State' and @SortAscending = 1 then 
							[State]
						end ASC,
						case when @SortColumn = 'State' and @SortAscending = 0 then 
							[State]
						end DESC,
			
						case when @SortColumn = 'ZipCode' and @SortAscending = 1 then 
							[ZipCode]
						end ASC,
						case when @SortColumn = 'ZipCode' and @SortAscending = 0 then 
							[ZipCode]
						end DESC,
			
						case when @SortColumn = 'SourceID' and @SortAscending = 1 then 
							[SourceID]
						end ASC,
						case when @SortColumn = 'SourceID' and @SortAscending = 0 then 
							[SourceID]
						end DESC,
			
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 1 then 
							[LastContactedDate]
						end ASC,
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 0 then 
							[LastContactedDate]
						end DESC,
			
						case when @SortColumn = 'Priority' and @SortAscending = 1 then 
							[Priority]
						end ASC,
						case when @SortColumn = 'Priority' and @SortAscending = 0 then 
							[Priority]
						end DESC,
			
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 1 then 
							[LeadStatusID]
						end ASC,
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 0 then 
							[LeadStatusID]
						end DESC,
			
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 1 then 
							[OpportunitySize]
						end ASC,
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 0 then 
							[OpportunitySize]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 1 then 
							[SalesRepresentativeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 0 then 
							[SalesRepresentativeID]
						end DESC,
			
						case when @SortColumn = 'ImportKey' and @SortAscending = 1 then 
							[ImportKey]
						end ASC,
						case when @SortColumn = 'ImportKey' and @SortAscending = 0 then 
							[ImportKey]
						end DESC,
			
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 1 then 
							[GeneratedDate]
						end ASC,
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 0 then 
							[GeneratedDate]
						end DESC,
			
						case when @SortColumn = 'CampaignID' and @SortAscending = 1 then 
							[CampaignID]
						end ASC,
						case when @SortColumn = 'CampaignID' and @SortAscending = 0 then 
							[CampaignID]
						end DESC,
			
						case when @SortColumn = 'AccountID' and @SortAscending = 1 then 
							[AccountID]
						end ASC,
						case when @SortColumn = 'AccountID' and @SortAscending = 0 then 
							[AccountID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					SELECT *
    FROM Leads WITH (NOLOCK) 
    WHERE LeadSubStatusID = @LeadSubStatusID and SalesRepresentativeID = @SalesRepresentativeID


					) sub
		where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByTagIDSalesRepresentativeIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
create PROCEDURE [dbo].[GetLeadsByTagIDSalesRepresentativeIDSp]
	@TagID [int],
	@SalesRepresentativeID [int]
AS

    
    SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID and SalesRepresentativeID = @SalesRepresentativeID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByTagIDSalesRepresentativeIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsByTagIDSalesRepresentativeIDSp_CountSp]
	@TagID [int],
	@SalesRepresentativeID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID and SalesRepresentativeID = @SalesRepresentativeID
				) sub
	where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByTagIDSalesRepresentativeIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsByTagIDSalesRepresentativeIDSp_PagingSp]
	@TagID [int],
	@SalesRepresentativeID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 1 then 
							[LeadSubStatusID]
						end ASC,
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 0 then 
							[LeadSubStatusID]
						end DESC,
			
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 1 then 
							[FollowUpDate]
						end ASC,
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 0 then 
							[FollowUpDate]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'Company' and @SortAscending = 1 then 
							[Company]
						end ASC,
						case when @SortColumn = 'Company' and @SortAscending = 0 then 
							[Company]
						end DESC,
			
						case when @SortColumn = 'FirstName' and @SortAscending = 1 then 
							[FirstName]
						end ASC,
						case when @SortColumn = 'FirstName' and @SortAscending = 0 then 
							[FirstName]
						end DESC,
			
						case when @SortColumn = 'LastName' and @SortAscending = 1 then 
							[LastName]
						end ASC,
						case when @SortColumn = 'LastName' and @SortAscending = 0 then 
							[LastName]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Address' and @SortAscending = 1 then 
							[Address]
						end ASC,
						case when @SortColumn = 'Address' and @SortAscending = 0 then 
							[Address]
						end DESC,
			
						case when @SortColumn = 'Address2' and @SortAscending = 1 then 
							[Address2]
						end ASC,
						case when @SortColumn = 'Address2' and @SortAscending = 0 then 
							[Address2]
						end DESC,
			
						case when @SortColumn = 'City' and @SortAscending = 1 then 
							[City]
						end ASC,
						case when @SortColumn = 'City' and @SortAscending = 0 then 
							[City]
						end DESC,
			
						case when @SortColumn = 'State' and @SortAscending = 1 then 
							[State]
						end ASC,
						case when @SortColumn = 'State' and @SortAscending = 0 then 
							[State]
						end DESC,
			
						case when @SortColumn = 'ZipCode' and @SortAscending = 1 then 
							[ZipCode]
						end ASC,
						case when @SortColumn = 'ZipCode' and @SortAscending = 0 then 
							[ZipCode]
						end DESC,
			
						case when @SortColumn = 'SourceID' and @SortAscending = 1 then 
							[SourceID]
						end ASC,
						case when @SortColumn = 'SourceID' and @SortAscending = 0 then 
							[SourceID]
						end DESC,
			
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 1 then 
							[LastContactedDate]
						end ASC,
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 0 then 
							[LastContactedDate]
						end DESC,
			
						case when @SortColumn = 'Priority' and @SortAscending = 1 then 
							[Priority]
						end ASC,
						case when @SortColumn = 'Priority' and @SortAscending = 0 then 
							[Priority]
						end DESC,
			
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 1 then 
							[LeadStatusID]
						end ASC,
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 0 then 
							[LeadStatusID]
						end DESC,
			
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 1 then 
							[OpportunitySize]
						end ASC,
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 0 then 
							[OpportunitySize]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 1 then 
							[SalesRepresentativeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 0 then 
							[SalesRepresentativeID]
						end DESC,
			
						case when @SortColumn = 'ImportKey' and @SortAscending = 1 then 
							[ImportKey]
						end ASC,
						case when @SortColumn = 'ImportKey' and @SortAscending = 0 then 
							[ImportKey]
						end DESC,
			
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 1 then 
							[GeneratedDate]
						end ASC,
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 0 then 
							[GeneratedDate]
						end DESC,
			
						case when @SortColumn = 'CampaignID' and @SortAscending = 1 then 
							[CampaignID]
						end ASC,
						case when @SortColumn = 'CampaignID' and @SortAscending = 0 then 
							[CampaignID]
						end DESC,
			
						case when @SortColumn = 'AccountID' and @SortAscending = 1 then 
							[AccountID]
						end ASC,
						case when @SortColumn = 'AccountID' and @SortAscending = 0 then 
							[AccountID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID and SalesRepresentativeID = @SalesRepresentativeID
					) sub
		where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByTagIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO



create PROCEDURE [dbo].[GetLeadsByTagIDSp]
	@TagID [int]
AS

    
    SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID 



GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByTagIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsByTagIDSp_CountSp]
	@TagID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID 


				) sub
	where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByTagIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsByTagIDSp_PagingSp]
	@TagID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 1 then 
							[LeadSubStatusID]
						end ASC,
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 0 then 
							[LeadSubStatusID]
						end DESC,
			
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 1 then 
							[FollowUpDate]
						end ASC,
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 0 then 
							[FollowUpDate]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'Company' and @SortAscending = 1 then 
							[Company]
						end ASC,
						case when @SortColumn = 'Company' and @SortAscending = 0 then 
							[Company]
						end DESC,
			
						case when @SortColumn = 'FirstName' and @SortAscending = 1 then 
							[FirstName]
						end ASC,
						case when @SortColumn = 'FirstName' and @SortAscending = 0 then 
							[FirstName]
						end DESC,
			
						case when @SortColumn = 'LastName' and @SortAscending = 1 then 
							[LastName]
						end ASC,
						case when @SortColumn = 'LastName' and @SortAscending = 0 then 
							[LastName]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Address' and @SortAscending = 1 then 
							[Address]
						end ASC,
						case when @SortColumn = 'Address' and @SortAscending = 0 then 
							[Address]
						end DESC,
			
						case when @SortColumn = 'Address2' and @SortAscending = 1 then 
							[Address2]
						end ASC,
						case when @SortColumn = 'Address2' and @SortAscending = 0 then 
							[Address2]
						end DESC,
			
						case when @SortColumn = 'City' and @SortAscending = 1 then 
							[City]
						end ASC,
						case when @SortColumn = 'City' and @SortAscending = 0 then 
							[City]
						end DESC,
			
						case when @SortColumn = 'State' and @SortAscending = 1 then 
							[State]
						end ASC,
						case when @SortColumn = 'State' and @SortAscending = 0 then 
							[State]
						end DESC,
			
						case when @SortColumn = 'ZipCode' and @SortAscending = 1 then 
							[ZipCode]
						end ASC,
						case when @SortColumn = 'ZipCode' and @SortAscending = 0 then 
							[ZipCode]
						end DESC,
			
						case when @SortColumn = 'SourceID' and @SortAscending = 1 then 
							[SourceID]
						end ASC,
						case when @SortColumn = 'SourceID' and @SortAscending = 0 then 
							[SourceID]
						end DESC,
			
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 1 then 
							[LastContactedDate]
						end ASC,
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 0 then 
							[LastContactedDate]
						end DESC,
			
						case when @SortColumn = 'Priority' and @SortAscending = 1 then 
							[Priority]
						end ASC,
						case when @SortColumn = 'Priority' and @SortAscending = 0 then 
							[Priority]
						end DESC,
			
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 1 then 
							[LeadStatusID]
						end ASC,
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 0 then 
							[LeadStatusID]
						end DESC,
			
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 1 then 
							[OpportunitySize]
						end ASC,
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 0 then 
							[OpportunitySize]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 1 then 
							[SalesRepresentativeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 0 then 
							[SalesRepresentativeID]
						end DESC,
			
						case when @SortColumn = 'ImportKey' and @SortAscending = 1 then 
							[ImportKey]
						end ASC,
						case when @SortColumn = 'ImportKey' and @SortAscending = 0 then 
							[ImportKey]
						end DESC,
			
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 1 then 
							[GeneratedDate]
						end ASC,
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 0 then 
							[GeneratedDate]
						end DESC,
			
						case when @SortColumn = 'CampaignID' and @SortAscending = 1 then 
							[CampaignID]
						end ASC,
						case when @SortColumn = 'CampaignID' and @SortAscending = 0 then 
							[CampaignID]
						end DESC,
			
						case when @SortColumn = 'AccountID' and @SortAscending = 1 then 
							[AccountID]
						end ASC,
						case when @SortColumn = 'AccountID' and @SortAscending = 0 then 
							[AccountID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID 


					) sub
		where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByTagIDStatusIDSalesRepresentativeIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO



create PROCEDURE [dbo].[GetLeadsByTagIDStatusIDSalesRepresentativeIDSp]
	@TagID [int],
	@LeadStatusID [int],
	@SalesRepresentativeID [int]
AS

    
    SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID and SalesRepresentativeID = @SalesRepresentativeID and l.LeadStatusID = @LeadStatusID



GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByTagIDStatusIDSalesRepresentativeIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsByTagIDStatusIDSalesRepresentativeIDSp_CountSp]
	@TagID [int],
	@LeadStatusID [int],
	@SalesRepresentativeID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID and SalesRepresentativeID = @SalesRepresentativeID and l.LeadStatusID = @LeadStatusID


				) sub
	where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByTagIDStatusIDSalesRepresentativeIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsByTagIDStatusIDSalesRepresentativeIDSp_PagingSp]
	@TagID [int],
	@LeadStatusID [int],
	@SalesRepresentativeID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 1 then 
							[LeadSubStatusID]
						end ASC,
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 0 then 
							[LeadSubStatusID]
						end DESC,
			
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 1 then 
							[FollowUpDate]
						end ASC,
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 0 then 
							[FollowUpDate]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'Company' and @SortAscending = 1 then 
							[Company]
						end ASC,
						case when @SortColumn = 'Company' and @SortAscending = 0 then 
							[Company]
						end DESC,
			
						case when @SortColumn = 'FirstName' and @SortAscending = 1 then 
							[FirstName]
						end ASC,
						case when @SortColumn = 'FirstName' and @SortAscending = 0 then 
							[FirstName]
						end DESC,
			
						case when @SortColumn = 'LastName' and @SortAscending = 1 then 
							[LastName]
						end ASC,
						case when @SortColumn = 'LastName' and @SortAscending = 0 then 
							[LastName]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Address' and @SortAscending = 1 then 
							[Address]
						end ASC,
						case when @SortColumn = 'Address' and @SortAscending = 0 then 
							[Address]
						end DESC,
			
						case when @SortColumn = 'Address2' and @SortAscending = 1 then 
							[Address2]
						end ASC,
						case when @SortColumn = 'Address2' and @SortAscending = 0 then 
							[Address2]
						end DESC,
			
						case when @SortColumn = 'City' and @SortAscending = 1 then 
							[City]
						end ASC,
						case when @SortColumn = 'City' and @SortAscending = 0 then 
							[City]
						end DESC,
			
						case when @SortColumn = 'State' and @SortAscending = 1 then 
							[State]
						end ASC,
						case when @SortColumn = 'State' and @SortAscending = 0 then 
							[State]
						end DESC,
			
						case when @SortColumn = 'ZipCode' and @SortAscending = 1 then 
							[ZipCode]
						end ASC,
						case when @SortColumn = 'ZipCode' and @SortAscending = 0 then 
							[ZipCode]
						end DESC,
			
						case when @SortColumn = 'SourceID' and @SortAscending = 1 then 
							[SourceID]
						end ASC,
						case when @SortColumn = 'SourceID' and @SortAscending = 0 then 
							[SourceID]
						end DESC,
			
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 1 then 
							[LastContactedDate]
						end ASC,
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 0 then 
							[LastContactedDate]
						end DESC,
			
						case when @SortColumn = 'Priority' and @SortAscending = 1 then 
							[Priority]
						end ASC,
						case when @SortColumn = 'Priority' and @SortAscending = 0 then 
							[Priority]
						end DESC,
			
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 1 then 
							[LeadStatusID]
						end ASC,
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 0 then 
							[LeadStatusID]
						end DESC,
			
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 1 then 
							[OpportunitySize]
						end ASC,
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 0 then 
							[OpportunitySize]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 1 then 
							[SalesRepresentativeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 0 then 
							[SalesRepresentativeID]
						end DESC,
			
						case when @SortColumn = 'ImportKey' and @SortAscending = 1 then 
							[ImportKey]
						end ASC,
						case when @SortColumn = 'ImportKey' and @SortAscending = 0 then 
							[ImportKey]
						end DESC,
			
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 1 then 
							[GeneratedDate]
						end ASC,
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 0 then 
							[GeneratedDate]
						end DESC,
			
						case when @SortColumn = 'CampaignID' and @SortAscending = 1 then 
							[CampaignID]
						end ASC,
						case when @SortColumn = 'CampaignID' and @SortAscending = 0 then 
							[CampaignID]
						end DESC,
			
						case when @SortColumn = 'AccountID' and @SortAscending = 1 then 
							[AccountID]
						end ASC,
						case when @SortColumn = 'AccountID' and @SortAscending = 0 then 
							[AccountID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID and SalesRepresentativeID = @SalesRepresentativeID and l.LeadStatusID = @LeadStatusID


					) sub
		where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByTagIDStatusIDSalesRepresentativeIDSp_PagingSp2]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO



CREATE PROCEDURE [dbo].[GetLeadsByTagIDStatusIDSalesRepresentativeIDSp_PagingSp2]
	@TagID [int],
	@StatusID [int],
	@SalesRepresentativeID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'Company' and @SortAscending = 1 then 
							[Company]
						end ASC,
						case when @SortColumn = 'Company' and @SortAscending = 0 then 
							[Company]
						end DESC,
			
						case when @SortColumn = 'FirstName' and @SortAscending = 1 then 
							[FirstName]
						end ASC,
						case when @SortColumn = 'FirstName' and @SortAscending = 0 then 
							[FirstName]
						end DESC,
			
						case when @SortColumn = 'LastName' and @SortAscending = 1 then 
							[LastName]
						end ASC,
						case when @SortColumn = 'LastName' and @SortAscending = 0 then 
							[LastName]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Address' and @SortAscending = 1 then 
							[Address]
						end ASC,
						case when @SortColumn = 'Address' and @SortAscending = 0 then 
							[Address]
						end DESC,
			
						case when @SortColumn = 'Address2' and @SortAscending = 1 then 
							[Address2]
						end ASC,
						case when @SortColumn = 'Address2' and @SortAscending = 0 then 
							[Address2]
						end DESC,
			
						case when @SortColumn = 'City' and @SortAscending = 1 then 
							[City]
						end ASC,
						case when @SortColumn = 'City' and @SortAscending = 0 then 
							[City]
						end DESC,
			
						case when @SortColumn = 'State' and @SortAscending = 1 then 
							[State]
						end ASC,
						case when @SortColumn = 'State' and @SortAscending = 0 then 
							[State]
						end DESC,
			
						case when @SortColumn = 'ZipCode' and @SortAscending = 1 then 
							[ZipCode]
						end ASC,
						case when @SortColumn = 'ZipCode' and @SortAscending = 0 then 
							[ZipCode]
						end DESC,
			
			
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 1 then 
							[LastContactedDate]
						end ASC,
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 0 then 
							[LastContactedDate]
						end DESC,
			
						case when @SortColumn = 'Priority' and @SortAscending = 1 then 
							[Priority]
						end ASC,
						case when @SortColumn = 'Priority' and @SortAscending = 0 then 
							[Priority]
						end DESC,
			
			
			
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 1 then 
							[OpportunitySize]
						end ASC,
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 0 then 
							[OpportunitySize]
						end DESC,
	
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,

												case when @SortColumn = 'FollowUpDate' and @SortAscending = 1 then 
							FollowUpDate
						end ASC,
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 0 then 
							FollowUpDate
						end DESC
			
									
					) AS RowNumber,
					*
		FROM		(
					SELECT l.LeadID, l.Company, l.FirstName, l.LastName, 
					l.Phone, l.Email, l.Address, l.Address2, l.City, l.State, l.ZipCode, 
					l.LastContactedDate, l.Priority, l.OpportunitySize, l.DateCreated, 
					s.StatusName, ss.SubStatusName, '' as FollowUpDate
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
	LEFT OUTER JOIN LeadStatuses s with (nolock)
	ON s.LeadStatusID = l.LeadStatusID
	LEFT OUTER JOIN LeadSubStatuses ss with (nolock)
	ON ss.LeadSubStatusID = l.LeadSubStatusID
    WHERE lt.TagID = @TagID 
	and SalesRepresentativeID = @SalesRepresentativeID 
	and l.LeadStatusID = @StatusID
					) sub
		where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%'
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByTagIDStatusIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO


CREATE PROCEDURE [dbo].[GetLeadsByTagIDStatusIDSp]
	@TagID [int],
	@LeadStatusID [int]
AS

    
    SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID and l.LeadStatusID = @LeadStatusID


GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByTagIDStatusIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsByTagIDStatusIDSp_CountSp]
	@TagID [int],
	@LeadStatusID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID and l.LeadStatusID = @LeadStatusID

				) sub
	where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByTagIDStatusIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsByTagIDStatusIDSp_PagingSp]
	@TagID [int],
	@LeadStatusID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 1 then 
							[LeadSubStatusID]
						end ASC,
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 0 then 
							[LeadSubStatusID]
						end DESC,
			
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 1 then 
							[FollowUpDate]
						end ASC,
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 0 then 
							[FollowUpDate]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'Company' and @SortAscending = 1 then 
							[Company]
						end ASC,
						case when @SortColumn = 'Company' and @SortAscending = 0 then 
							[Company]
						end DESC,
			
						case when @SortColumn = 'FirstName' and @SortAscending = 1 then 
							[FirstName]
						end ASC,
						case when @SortColumn = 'FirstName' and @SortAscending = 0 then 
							[FirstName]
						end DESC,
			
						case when @SortColumn = 'LastName' and @SortAscending = 1 then 
							[LastName]
						end ASC,
						case when @SortColumn = 'LastName' and @SortAscending = 0 then 
							[LastName]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Address' and @SortAscending = 1 then 
							[Address]
						end ASC,
						case when @SortColumn = 'Address' and @SortAscending = 0 then 
							[Address]
						end DESC,
			
						case when @SortColumn = 'Address2' and @SortAscending = 1 then 
							[Address2]
						end ASC,
						case when @SortColumn = 'Address2' and @SortAscending = 0 then 
							[Address2]
						end DESC,
			
						case when @SortColumn = 'City' and @SortAscending = 1 then 
							[City]
						end ASC,
						case when @SortColumn = 'City' and @SortAscending = 0 then 
							[City]
						end DESC,
			
						case when @SortColumn = 'State' and @SortAscending = 1 then 
							[State]
						end ASC,
						case when @SortColumn = 'State' and @SortAscending = 0 then 
							[State]
						end DESC,
			
						case when @SortColumn = 'ZipCode' and @SortAscending = 1 then 
							[ZipCode]
						end ASC,
						case when @SortColumn = 'ZipCode' and @SortAscending = 0 then 
							[ZipCode]
						end DESC,
			
						case when @SortColumn = 'SourceID' and @SortAscending = 1 then 
							[SourceID]
						end ASC,
						case when @SortColumn = 'SourceID' and @SortAscending = 0 then 
							[SourceID]
						end DESC,
			
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 1 then 
							[LastContactedDate]
						end ASC,
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 0 then 
							[LastContactedDate]
						end DESC,
			
						case when @SortColumn = 'Priority' and @SortAscending = 1 then 
							[Priority]
						end ASC,
						case when @SortColumn = 'Priority' and @SortAscending = 0 then 
							[Priority]
						end DESC,
			
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 1 then 
							[LeadStatusID]
						end ASC,
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 0 then 
							[LeadStatusID]
						end DESC,
			
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 1 then 
							[OpportunitySize]
						end ASC,
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 0 then 
							[OpportunitySize]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 1 then 
							[SalesRepresentativeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 0 then 
							[SalesRepresentativeID]
						end DESC,
			
						case when @SortColumn = 'ImportKey' and @SortAscending = 1 then 
							[ImportKey]
						end ASC,
						case when @SortColumn = 'ImportKey' and @SortAscending = 0 then 
							[ImportKey]
						end DESC,
			
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 1 then 
							[GeneratedDate]
						end ASC,
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 0 then 
							[GeneratedDate]
						end DESC,
			
						case when @SortColumn = 'CampaignID' and @SortAscending = 1 then 
							[CampaignID]
						end ASC,
						case when @SortColumn = 'CampaignID' and @SortAscending = 0 then 
							[CampaignID]
						end DESC,
			
						case when @SortColumn = 'AccountID' and @SortAscending = 1 then 
							[AccountID]
						end ASC,
						case when @SortColumn = 'AccountID' and @SortAscending = 0 then 
							[AccountID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID and l.LeadStatusID = @LeadStatusID

					) sub
		where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByTagIDSubStatusIDSalesRepresentativeIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO



create PROCEDURE [dbo].[GetLeadsByTagIDSubStatusIDSalesRepresentativeIDSp]
	@TagID [int],
	@LeadSubStatusID [int],
	@SalesRepresentativeID [int]
AS

    
    SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID and SalesRepresentativeID = @SalesRepresentativeID and l.LeadSubStatusID = @LeadSubStatusID



GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByTagIDSubStatusIDSalesRepresentativeIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsByTagIDSubStatusIDSalesRepresentativeIDSp_CountSp]
	@TagID [int],
	@LeadSubStatusID [int],
	@SalesRepresentativeID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID and SalesRepresentativeID = @SalesRepresentativeID and l.LeadSubStatusID = @LeadSubStatusID


				) sub
	where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByTagIDSubStatusIDSalesRepresentativeIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsByTagIDSubStatusIDSalesRepresentativeIDSp_PagingSp]
	@TagID [int],
	@LeadSubStatusID [int],
	@SalesRepresentativeID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 1 then 
							[LeadSubStatusID]
						end ASC,
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 0 then 
							[LeadSubStatusID]
						end DESC,
			
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 1 then 
							[FollowUpDate]
						end ASC,
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 0 then 
							[FollowUpDate]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'Company' and @SortAscending = 1 then 
							[Company]
						end ASC,
						case when @SortColumn = 'Company' and @SortAscending = 0 then 
							[Company]
						end DESC,
			
						case when @SortColumn = 'FirstName' and @SortAscending = 1 then 
							[FirstName]
						end ASC,
						case when @SortColumn = 'FirstName' and @SortAscending = 0 then 
							[FirstName]
						end DESC,
			
						case when @SortColumn = 'LastName' and @SortAscending = 1 then 
							[LastName]
						end ASC,
						case when @SortColumn = 'LastName' and @SortAscending = 0 then 
							[LastName]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Address' and @SortAscending = 1 then 
							[Address]
						end ASC,
						case when @SortColumn = 'Address' and @SortAscending = 0 then 
							[Address]
						end DESC,
			
						case when @SortColumn = 'Address2' and @SortAscending = 1 then 
							[Address2]
						end ASC,
						case when @SortColumn = 'Address2' and @SortAscending = 0 then 
							[Address2]
						end DESC,
			
						case when @SortColumn = 'City' and @SortAscending = 1 then 
							[City]
						end ASC,
						case when @SortColumn = 'City' and @SortAscending = 0 then 
							[City]
						end DESC,
			
						case when @SortColumn = 'State' and @SortAscending = 1 then 
							[State]
						end ASC,
						case when @SortColumn = 'State' and @SortAscending = 0 then 
							[State]
						end DESC,
			
						case when @SortColumn = 'ZipCode' and @SortAscending = 1 then 
							[ZipCode]
						end ASC,
						case when @SortColumn = 'ZipCode' and @SortAscending = 0 then 
							[ZipCode]
						end DESC,
			
						case when @SortColumn = 'SourceID' and @SortAscending = 1 then 
							[SourceID]
						end ASC,
						case when @SortColumn = 'SourceID' and @SortAscending = 0 then 
							[SourceID]
						end DESC,
			
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 1 then 
							[LastContactedDate]
						end ASC,
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 0 then 
							[LastContactedDate]
						end DESC,
			
						case when @SortColumn = 'Priority' and @SortAscending = 1 then 
							[Priority]
						end ASC,
						case when @SortColumn = 'Priority' and @SortAscending = 0 then 
							[Priority]
						end DESC,
			
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 1 then 
							[LeadStatusID]
						end ASC,
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 0 then 
							[LeadStatusID]
						end DESC,
			
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 1 then 
							[OpportunitySize]
						end ASC,
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 0 then 
							[OpportunitySize]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 1 then 
							[SalesRepresentativeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 0 then 
							[SalesRepresentativeID]
						end DESC,
			
						case when @SortColumn = 'ImportKey' and @SortAscending = 1 then 
							[ImportKey]
						end ASC,
						case when @SortColumn = 'ImportKey' and @SortAscending = 0 then 
							[ImportKey]
						end DESC,
			
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 1 then 
							[GeneratedDate]
						end ASC,
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 0 then 
							[GeneratedDate]
						end DESC,
			
						case when @SortColumn = 'CampaignID' and @SortAscending = 1 then 
							[CampaignID]
						end ASC,
						case when @SortColumn = 'CampaignID' and @SortAscending = 0 then 
							[CampaignID]
						end DESC,
			
						case when @SortColumn = 'AccountID' and @SortAscending = 1 then 
							[AccountID]
						end ASC,
						case when @SortColumn = 'AccountID' and @SortAscending = 0 then 
							[AccountID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID and SalesRepresentativeID = @SalesRepresentativeID and l.LeadSubStatusID = @LeadSubStatusID


					) sub
		where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByTagIDSubStatusIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO



create PROCEDURE [dbo].[GetLeadsByTagIDSubStatusIDSp]
	@TagID [int],
	@LeadSubStatusID [int]
AS

    
    SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID and l.LeadSubStatusID = @LeadSubStatusID



GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByTagIDSubStatusIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsByTagIDSubStatusIDSp_CountSp]
	@TagID [int],
	@LeadSubStatusID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID and l.LeadSubStatusID = @LeadSubStatusID


				) sub
	where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadsByTagIDSubStatusIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetLeadsByTagIDSubStatusIDSp_PagingSp]
	@TagID [int],
	@LeadSubStatusID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 1 then 
							[LeadSubStatusID]
						end ASC,
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 0 then 
							[LeadSubStatusID]
						end DESC,
			
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 1 then 
							[FollowUpDate]
						end ASC,
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 0 then 
							[FollowUpDate]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'Company' and @SortAscending = 1 then 
							[Company]
						end ASC,
						case when @SortColumn = 'Company' and @SortAscending = 0 then 
							[Company]
						end DESC,
			
						case when @SortColumn = 'FirstName' and @SortAscending = 1 then 
							[FirstName]
						end ASC,
						case when @SortColumn = 'FirstName' and @SortAscending = 0 then 
							[FirstName]
						end DESC,
			
						case when @SortColumn = 'LastName' and @SortAscending = 1 then 
							[LastName]
						end ASC,
						case when @SortColumn = 'LastName' and @SortAscending = 0 then 
							[LastName]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Address' and @SortAscending = 1 then 
							[Address]
						end ASC,
						case when @SortColumn = 'Address' and @SortAscending = 0 then 
							[Address]
						end DESC,
			
						case when @SortColumn = 'Address2' and @SortAscending = 1 then 
							[Address2]
						end ASC,
						case when @SortColumn = 'Address2' and @SortAscending = 0 then 
							[Address2]
						end DESC,
			
						case when @SortColumn = 'City' and @SortAscending = 1 then 
							[City]
						end ASC,
						case when @SortColumn = 'City' and @SortAscending = 0 then 
							[City]
						end DESC,
			
						case when @SortColumn = 'State' and @SortAscending = 1 then 
							[State]
						end ASC,
						case when @SortColumn = 'State' and @SortAscending = 0 then 
							[State]
						end DESC,
			
						case when @SortColumn = 'ZipCode' and @SortAscending = 1 then 
							[ZipCode]
						end ASC,
						case when @SortColumn = 'ZipCode' and @SortAscending = 0 then 
							[ZipCode]
						end DESC,
			
						case when @SortColumn = 'SourceID' and @SortAscending = 1 then 
							[SourceID]
						end ASC,
						case when @SortColumn = 'SourceID' and @SortAscending = 0 then 
							[SourceID]
						end DESC,
			
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 1 then 
							[LastContactedDate]
						end ASC,
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 0 then 
							[LastContactedDate]
						end DESC,
			
						case when @SortColumn = 'Priority' and @SortAscending = 1 then 
							[Priority]
						end ASC,
						case when @SortColumn = 'Priority' and @SortAscending = 0 then 
							[Priority]
						end DESC,
			
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 1 then 
							[LeadStatusID]
						end ASC,
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 0 then 
							[LeadStatusID]
						end DESC,
			
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 1 then 
							[OpportunitySize]
						end ASC,
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 0 then 
							[OpportunitySize]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 1 then 
							[SalesRepresentativeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 0 then 
							[SalesRepresentativeID]
						end DESC,
			
						case when @SortColumn = 'ImportKey' and @SortAscending = 1 then 
							[ImportKey]
						end ASC,
						case when @SortColumn = 'ImportKey' and @SortAscending = 0 then 
							[ImportKey]
						end DESC,
			
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 1 then 
							[GeneratedDate]
						end ASC,
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 0 then 
							[GeneratedDate]
						end DESC,
			
						case when @SortColumn = 'CampaignID' and @SortAscending = 1 then 
							[CampaignID]
						end ASC,
						case when @SortColumn = 'CampaignID' and @SortAscending = 0 then 
							[CampaignID]
						end DESC,
			
						case when @SortColumn = 'AccountID' and @SortAscending = 1 then 
							[AccountID]
						end ASC,
						case when @SortColumn = 'AccountID' and @SortAscending = 0 then 
							[AccountID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID and l.LeadSubStatusID = @LeadSubStatusID


					) sub
		where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetLeadSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadSp]
	@LeadID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
     WHERE LeadID = @LeadID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadsSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadsSp]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetLeadsSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadsSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/15/2023 11:29:13 AM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
				) sub
	where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadsSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadsSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 1 then 
							[LeadSubStatusID]
						end ASC,
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 0 then 
							[LeadSubStatusID]
						end DESC,
			
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 1 then 
							[FollowUpDate]
						end ASC,
						case when @SortColumn = 'FollowUpDate' and @SortAscending = 0 then 
							[FollowUpDate]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'Company' and @SortAscending = 1 then 
							[Company]
						end ASC,
						case when @SortColumn = 'Company' and @SortAscending = 0 then 
							[Company]
						end DESC,
			
						case when @SortColumn = 'FirstName' and @SortAscending = 1 then 
							[FirstName]
						end ASC,
						case when @SortColumn = 'FirstName' and @SortAscending = 0 then 
							[FirstName]
						end DESC,
			
						case when @SortColumn = 'LastName' and @SortAscending = 1 then 
							[LastName]
						end ASC,
						case when @SortColumn = 'LastName' and @SortAscending = 0 then 
							[LastName]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Address' and @SortAscending = 1 then 
							[Address]
						end ASC,
						case when @SortColumn = 'Address' and @SortAscending = 0 then 
							[Address]
						end DESC,
			
						case when @SortColumn = 'Address2' and @SortAscending = 1 then 
							[Address2]
						end ASC,
						case when @SortColumn = 'Address2' and @SortAscending = 0 then 
							[Address2]
						end DESC,
			
						case when @SortColumn = 'City' and @SortAscending = 1 then 
							[City]
						end ASC,
						case when @SortColumn = 'City' and @SortAscending = 0 then 
							[City]
						end DESC,
			
						case when @SortColumn = 'State' and @SortAscending = 1 then 
							[State]
						end ASC,
						case when @SortColumn = 'State' and @SortAscending = 0 then 
							[State]
						end DESC,
			
						case when @SortColumn = 'ZipCode' and @SortAscending = 1 then 
							[ZipCode]
						end ASC,
						case when @SortColumn = 'ZipCode' and @SortAscending = 0 then 
							[ZipCode]
						end DESC,
			
						case when @SortColumn = 'SourceID' and @SortAscending = 1 then 
							[SourceID]
						end ASC,
						case when @SortColumn = 'SourceID' and @SortAscending = 0 then 
							[SourceID]
						end DESC,
			
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 1 then 
							[LastContactedDate]
						end ASC,
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 0 then 
							[LastContactedDate]
						end DESC,
			
						case when @SortColumn = 'Priority' and @SortAscending = 1 then 
							[Priority]
						end ASC,
						case when @SortColumn = 'Priority' and @SortAscending = 0 then 
							[Priority]
						end DESC,
			
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 1 then 
							[LeadStatusID]
						end ASC,
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 0 then 
							[LeadStatusID]
						end DESC,
			
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 1 then 
							[OpportunitySize]
						end ASC,
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 0 then 
							[OpportunitySize]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 1 then 
							[SalesRepresentativeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 0 then 
							[SalesRepresentativeID]
						end DESC,
			
						case when @SortColumn = 'ImportKey' and @SortAscending = 1 then 
							[ImportKey]
						end ASC,
						case when @SortColumn = 'ImportKey' and @SortAscending = 0 then 
							[ImportKey]
						end DESC,
			
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 1 then 
							[GeneratedDate]
						end ASC,
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 0 then 
							[GeneratedDate]
						end DESC,
			
						case when @SortColumn = 'CampaignID' and @SortAscending = 1 then 
							[CampaignID]
						end ASC,
						case when @SortColumn = 'CampaignID' and @SortAscending = 0 then 
							[CampaignID]
						end DESC,
			
						case when @SortColumn = 'AccountID' and @SortAscending = 1 then 
							[AccountID]
						end ASC,
						case when @SortColumn = 'AccountID' and @SortAscending = 0 then 
							[AccountID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/15/2023 11:29:13 AM.
    
    SELECT *
    FROM Leads WITH (NOLOCK) 
					) sub
		where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Address] like '%' + @Search + '%' or
					[Address2] like '%' + @Search + '%' or
					[City] like '%' + @Search + '%' or
					[State] like '%' + @Search + '%' or
					[ZipCode] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadStatusByStatusNameSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadStatusByStatusNameSp]
	@StatusName [nvarchar](255)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadStatuses WITH (NOLOCK) 
    WHERE [StatusName] = @StatusName
GO
/****** Object:  StoredProcedure [dbo].[GetLeadStatusesSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadStatusesSp]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadStatuses WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetLeadStatusesSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadStatusesSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadStatuses WITH (NOLOCK) 
				) sub
	where		
					[LeadStatusID] like '%' + @Search + '%' or
					[StatusName] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadStatusesSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadStatusesSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 1 then 
							[LeadStatusID]
						end ASC,
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 0 then 
							[LeadStatusID]
						end DESC,
			
						case when @SortColumn = 'StatusName' and @SortAscending = 1 then 
							[StatusName]
						end ASC,
						case when @SortColumn = 'StatusName' and @SortAscending = 0 then 
							[StatusName]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadStatuses WITH (NOLOCK) 
					) sub
		where		
					[LeadStatusID] like '%' + @Search + '%' or
					[StatusName] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadStatusSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadStatusSp]
	@LeadStatusID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadStatuses WITH (NOLOCK) 
     WHERE LeadStatusID = @LeadStatusID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadSubStatusBySubStatusNameSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadSubStatusBySubStatusNameSp]
	@SubStatusName [nvarchar](255)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadSubStatuses WITH (NOLOCK) 
    WHERE [SubStatusName] = @SubStatusName
GO
/****** Object:  StoredProcedure [dbo].[GetLeadSubStatusesByLeadStatusIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadSubStatusesByLeadStatusIDSp]
	@LeadStatusID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadSubStatuses WITH (NOLOCK) 
    WHERE [LeadStatusID] = @LeadStatusID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadSubStatusesByLeadStatusIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadSubStatusesByLeadStatusIDSp_CountSp]
	@LeadStatusID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadSubStatuses WITH (NOLOCK) 
    WHERE [LeadStatusID] = @LeadStatusID
				) sub
	where		
					[SubStatusName] like '%' + @Search + '%' or
					[LeadSubStatusID] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadSubStatusesByLeadStatusIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadSubStatusesByLeadStatusIDSp_PagingSp]
	@LeadStatusID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 1 then 
							[LeadStatusID]
						end ASC,
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 0 then 
							[LeadStatusID]
						end DESC,
			
						case when @SortColumn = 'SubStatusName' and @SortAscending = 1 then 
							[SubStatusName]
						end ASC,
						case when @SortColumn = 'SubStatusName' and @SortAscending = 0 then 
							[SubStatusName]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 1 then 
							[LeadSubStatusID]
						end ASC,
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 0 then 
							[LeadSubStatusID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadSubStatuses WITH (NOLOCK) 
    WHERE [LeadStatusID] = @LeadStatusID
					) sub
		where		
					[SubStatusName] like '%' + @Search + '%' or
					[LeadSubStatusID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadSubStatusesSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadSubStatusesSp]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadSubStatuses WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetLeadSubStatusesSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadSubStatusesSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadSubStatuses WITH (NOLOCK) 
				) sub
	where		
					[SubStatusName] like '%' + @Search + '%' or
					[LeadSubStatusID] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadSubStatusesSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadSubStatusesSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 1 then 
							[LeadStatusID]
						end ASC,
						case when @SortColumn = 'LeadStatusID' and @SortAscending = 0 then 
							[LeadStatusID]
						end DESC,
			
						case when @SortColumn = 'SubStatusName' and @SortAscending = 1 then 
							[SubStatusName]
						end ASC,
						case when @SortColumn = 'SubStatusName' and @SortAscending = 0 then 
							[SubStatusName]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 1 then 
							[LeadSubStatusID]
						end ASC,
						case when @SortColumn = 'LeadSubStatusID' and @SortAscending = 0 then 
							[LeadSubStatusID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadSubStatuses WITH (NOLOCK) 
					) sub
		where		
					[SubStatusName] like '%' + @Search + '%' or
					[LeadSubStatusID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadSubStatusSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadSubStatusSp]
	@LeadSubStatusID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadSubStatuses WITH (NOLOCK) 
     WHERE LeadSubStatusID = @LeadSubStatusID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadTagsByLeadIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadTagsByLeadIDSp]
	@LeadID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadTags WITH (NOLOCK) 
    WHERE [LeadID] = @LeadID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadTagsByLeadIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadTagsByLeadIDSp_CountSp]
	@LeadID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadTags WITH (NOLOCK) 
    WHERE [LeadID] = @LeadID
				) sub
	where		
					[LeadTagID] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadTagsByLeadIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadTagsByLeadIDSp_PagingSp]
	@LeadID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadTagID' and @SortAscending = 1 then 
							[LeadTagID]
						end ASC,
						case when @SortColumn = 'LeadTagID' and @SortAscending = 0 then 
							[LeadTagID]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'TagID' and @SortAscending = 1 then 
							[TagID]
						end ASC,
						case when @SortColumn = 'TagID' and @SortAscending = 0 then 
							[TagID]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadTags WITH (NOLOCK) 
    WHERE [LeadID] = @LeadID
					) sub
		where		
					[LeadTagID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadTagsByLeadIDTagIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadTagsByLeadIDTagIDSp]
	@LeadID [int],
	@TagID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadTags WITH (NOLOCK) 
    WHERE [LeadID] = @LeadID AND [TagID] = @TagID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadTagsByTagIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadTagsByTagIDSp]
	@TagID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadTags WITH (NOLOCK) 
    WHERE [TagID] = @TagID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadTagsByTagIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadTagsByTagIDSp_CountSp]
	@TagID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadTags WITH (NOLOCK) 
    WHERE [TagID] = @TagID
				) sub
	where		
					[LeadTagID] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadTagsByTagIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadTagsByTagIDSp_PagingSp]
	@TagID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadTagID' and @SortAscending = 1 then 
							[LeadTagID]
						end ASC,
						case when @SortColumn = 'LeadTagID' and @SortAscending = 0 then 
							[LeadTagID]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'TagID' and @SortAscending = 1 then 
							[TagID]
						end ASC,
						case when @SortColumn = 'TagID' and @SortAscending = 0 then 
							[TagID]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadTags WITH (NOLOCK) 
    WHERE [TagID] = @TagID
					) sub
		where		
					[LeadTagID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadTagSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadTagSp]
	@LeadTagID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadTags WITH (NOLOCK) 
     WHERE LeadTagID = @LeadTagID
GO
/****** Object:  StoredProcedure [dbo].[GetLeadTagsSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadTagsSp]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadTags WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetLeadTagsSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadTagsSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadTags WITH (NOLOCK) 
				) sub
	where		
					[LeadTagID] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetLeadTagsSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetLeadTagsSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadTagID' and @SortAscending = 1 then 
							[LeadTagID]
						end ASC,
						case when @SortColumn = 'LeadTagID' and @SortAscending = 0 then 
							[LeadTagID]
						end DESC,
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'TagID' and @SortAscending = 1 then 
							[TagID]
						end ASC,
						case when @SortColumn = 'TagID' and @SortAscending = 0 then 
							[TagID]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM LeadTags WITH (NOLOCK) 
					) sub
		where		
					[LeadTagID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetMessageSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetMessageSp]
	@MessageID [int]
AS

    -- Automatically generated on 6/29/2024 2:56:36 PM.
    
    SELECT *
    FROM Messages WITH (NOLOCK) 
     WHERE MessageID = @MessageID


GO
/****** Object:  StoredProcedure [dbo].[GetMessagesSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetMessagesSp]
AS

    -- Automatically generated on 6/29/2024 2:56:36 PM.
    
    SELECT *
    FROM Messages WITH (NOLOCK) 

GO
/****** Object:  StoredProcedure [dbo].[GetMessagesSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetMessagesSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 6/29/2024 2:56:36 PM.
    
    SELECT *
    FROM Messages WITH (NOLOCK) 
				) sub
	where		
					[MessageID] like '%' + @Search + '%' or
					[SentByPhone] like '%' + @Search + '%' or
					[ReceivedByPhone] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetMessagesSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetMessagesSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'MessageID' and @SortAscending = 1 then 
							[MessageID]
						end ASC,
						case when @SortColumn = 'MessageID' and @SortAscending = 0 then 
							[MessageID]
						end DESC,
			
						case when @SortColumn = 'SentByPhone' and @SortAscending = 1 then 
							[SentByPhone]
						end ASC,
						case when @SortColumn = 'SentByPhone' and @SortAscending = 0 then 
							[SentByPhone]
						end DESC,
			
						case when @SortColumn = 'ReceivedByPhone' and @SortAscending = 1 then 
							[ReceivedByPhone]
						end ASC,
						case when @SortColumn = 'ReceivedByPhone' and @SortAscending = 0 then 
							[ReceivedByPhone]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'IsDelivered' and @SortAscending = 1 then 
							[IsDelivered]
						end ASC,
						case when @SortColumn = 'IsDelivered' and @SortAscending = 0 then 
							[IsDelivered]
						end DESC,
			
						case when @SortColumn = 'IsReceived' and @SortAscending = 1 then 
							[IsReceived]
						end ASC,
						case when @SortColumn = 'IsReceived' and @SortAscending = 0 then 
							[IsReceived]
						end DESC,
			
						case when @SortColumn = 'IsDismissed' and @SortAscending = 1 then 
							[IsDismissed]
						end ASC,
						case when @SortColumn = 'IsDismissed' and @SortAscending = 0 then 
							[IsDismissed]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 6/29/2024 2:56:36 PM.
    
    SELECT *
    FROM Messages WITH (NOLOCK) 
					) sub
		where		
					[MessageID] like '%' + @Search + '%' or
					[SentByPhone] like '%' + @Search + '%' or
					[ReceivedByPhone] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetPageLayoutByUrlSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetPageLayoutByUrlSp]
	@Url [nvarchar](512)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM PageLayouts WITH (NOLOCK) 
    WHERE [Url] = @Url
GO
/****** Object:  StoredProcedure [dbo].[GetPageLayoutSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetPageLayoutSp]
	@PageLayoutID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM PageLayouts WITH (NOLOCK) 
     WHERE PageLayoutID = @PageLayoutID
GO
/****** Object:  StoredProcedure [dbo].[GetPageLayoutsSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetPageLayoutsSp]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM PageLayouts WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetPageLayoutsSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetPageLayoutsSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM PageLayouts WITH (NOLOCK) 
				) sub
	where		
					[PageLayoutID] like '%' + @Search + '%' or
					[Url] like '%' + @Search + '%' or
					[Handler] like '%' + @Search + '%' or
					[PageTitle] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetPageLayoutsSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetPageLayoutsSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'PageLayoutID' and @SortAscending = 1 then 
							[PageLayoutID]
						end ASC,
						case when @SortColumn = 'PageLayoutID' and @SortAscending = 0 then 
							[PageLayoutID]
						end DESC,
			
						case when @SortColumn = 'Url' and @SortAscending = 1 then 
							[Url]
						end ASC,
						case when @SortColumn = 'Url' and @SortAscending = 0 then 
							[Url]
						end DESC,
			
						case when @SortColumn = 'Handler' and @SortAscending = 1 then 
							[Handler]
						end ASC,
						case when @SortColumn = 'Handler' and @SortAscending = 0 then 
							[Handler]
						end DESC,
			
						case when @SortColumn = 'IsEnabled' and @SortAscending = 1 then 
							[IsEnabled]
						end ASC,
						case when @SortColumn = 'IsEnabled' and @SortAscending = 0 then 
							[IsEnabled]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'PageTitle' and @SortAscending = 1 then 
							[PageTitle]
						end ASC,
						case when @SortColumn = 'PageTitle' and @SortAscending = 0 then 
							[PageTitle]
						end DESC,
			
						case when @SortColumn = 'SiteID' and @SortAscending = 1 then 
							[SiteID]
						end ASC,
						case when @SortColumn = 'SiteID' and @SortAscending = 0 then 
							[SiteID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM PageLayouts WITH (NOLOCK) 
					) sub
		where		
					[PageLayoutID] like '%' + @Search + '%' or
					[Url] like '%' + @Search + '%' or
					[Handler] like '%' + @Search + '%' or
					[PageTitle] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetPhoneNumberByPhoneNumberSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetPhoneNumberByPhoneNumberSp]
	@PhoneNumber [nvarchar](255)
AS

    -- Automatically generated on 9/9/2024 10:10:00 AM.
    
    SELECT *
    FROM PhoneNumbers WITH (NOLOCK) 
    WHERE [PhoneNumber] = @PhoneNumber

GO
/****** Object:  StoredProcedure [dbo].[GetPhoneNumberSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetPhoneNumberSp]
	@PhoneNumberID [int]
AS

    -- Automatically generated on 9/9/2024 10:10:00 AM.
    
    SELECT *
    FROM PhoneNumbers WITH (NOLOCK) 
     WHERE PhoneNumberID = @PhoneNumberID


GO
/****** Object:  StoredProcedure [dbo].[GetPhoneNumbersSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetPhoneNumbersSp]
AS

    -- Automatically generated on 9/9/2024 10:10:00 AM.
    
    SELECT *
    FROM PhoneNumbers WITH (NOLOCK) 

GO
/****** Object:  StoredProcedure [dbo].[GetPhoneNumbersSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetPhoneNumbersSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 9/9/2024 10:10:00 AM.
    
    SELECT *
    FROM PhoneNumbers WITH (NOLOCK) 
				) sub
	where		
					[PhoneNumberID] like '%' + @Search + '%' or
					[PhoneNumber] like '%' + @Search + '%' or
					[PhoneType] like '%' + @Search + '%' or
					[CallerName] like '%' + @Search + '%' or
					[Country] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetPhoneNumbersSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetPhoneNumbersSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'PhoneNumberID' and @SortAscending = 1 then 
							[PhoneNumberID]
						end ASC,
						case when @SortColumn = 'PhoneNumberID' and @SortAscending = 0 then 
							[PhoneNumberID]
						end DESC,
			
						case when @SortColumn = 'PhoneNumber' and @SortAscending = 1 then 
							[PhoneNumber]
						end ASC,
						case when @SortColumn = 'PhoneNumber' and @SortAscending = 0 then 
							[PhoneNumber]
						end DESC,
			
						case when @SortColumn = 'PhoneType' and @SortAscending = 1 then 
							[PhoneType]
						end ASC,
						case when @SortColumn = 'PhoneType' and @SortAscending = 0 then 
							[PhoneType]
						end DESC,
			
						case when @SortColumn = 'IsInternal' and @SortAscending = 1 then 
							[IsInternal]
						end ASC,
						case when @SortColumn = 'IsInternal' and @SortAscending = 0 then 
							[IsInternal]
						end DESC,
			
						case when @SortColumn = 'CallerName' and @SortAscending = 1 then 
							[CallerName]
						end ASC,
						case when @SortColumn = 'CallerName' and @SortAscending = 0 then 
							[CallerName]
						end DESC,
			
						case when @SortColumn = 'Country' and @SortAscending = 1 then 
							[Country]
						end ASC,
						case when @SortColumn = 'Country' and @SortAscending = 0 then 
							[Country]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'IsBlocked' and @SortAscending = 1 then 
							[IsBlocked]
						end ASC,
						case when @SortColumn = 'IsBlocked' and @SortAscending = 0 then 
							[IsBlocked]
						end DESC,
			
						case when @SortColumn = 'IsSpam' and @SortAscending = 1 then 
							[IsSpam]
						end ASC,
						case when @SortColumn = 'IsSpam' and @SortAscending = 0 then 
							[IsSpam]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 9/9/2024 10:10:00 AM.
    
    SELECT *
    FROM PhoneNumbers WITH (NOLOCK) 
					) sub
		where		
					[PhoneNumberID] like '%' + @Search + '%' or
					[PhoneNumber] like '%' + @Search + '%' or
					[PhoneType] like '%' + @Search + '%' or
					[CallerName] like '%' + @Search + '%' or
					[Country] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailAddressesByDomainIDEmailAddressIDRawEmailIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailAddressesByDomainIDEmailAddressIDRawEmailIDSp]
	@DomainID [int],
	@EmailAddressID [int],
	@RawEmailID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmailAddresses WITH (NOLOCK) 
    WHERE [DomainID] = @DomainID AND [EmailAddressID] = @EmailAddressID AND [RawEmailID] = @RawEmailID

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailAddressesByDomainIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailAddressesByDomainIDSp]
	@DomainID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmailAddresses WITH (NOLOCK) 
    WHERE [DomainID] = @DomainID

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailAddressesByDomainIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailAddressesByDomainIDSp_CountSp]
	@DomainID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmailAddresses WITH (NOLOCK) 
    WHERE [DomainID] = @DomainID
				) sub
	where		
					[RawEmailAddressID] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailAddressesByDomainIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailAddressesByDomainIDSp_PagingSp]
	@DomainID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'RawEmailAddressID' and @SortAscending = 1 then 
							[RawEmailAddressID]
						end ASC,
						case when @SortColumn = 'RawEmailAddressID' and @SortAscending = 0 then 
							[RawEmailAddressID]
						end DESC,
			
						case when @SortColumn = 'RawEmailID' and @SortAscending = 1 then 
							[RawEmailID]
						end ASC,
						case when @SortColumn = 'RawEmailID' and @SortAscending = 0 then 
							[RawEmailID]
						end DESC,
			
						case when @SortColumn = 'IsFrom' and @SortAscending = 1 then 
							[IsFrom]
						end ASC,
						case when @SortColumn = 'IsFrom' and @SortAscending = 0 then 
							[IsFrom]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'EmailAddressID' and @SortAscending = 1 then 
							[EmailAddressID]
						end ASC,
						case when @SortColumn = 'EmailAddressID' and @SortAscending = 0 then 
							[EmailAddressID]
						end DESC,
			
						case when @SortColumn = 'DomainID' and @SortAscending = 1 then 
							[DomainID]
						end ASC,
						case when @SortColumn = 'DomainID' and @SortAscending = 0 then 
							[DomainID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmailAddresses WITH (NOLOCK) 
    WHERE [DomainID] = @DomainID
					) sub
		where		
					[RawEmailAddressID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailAddressesByEmailAddressIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailAddressesByEmailAddressIDSp]
	@EmailAddressID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmailAddresses WITH (NOLOCK) 
    WHERE [EmailAddressID] = @EmailAddressID

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailAddressesByEmailAddressIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailAddressesByEmailAddressIDSp_CountSp]
	@EmailAddressID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmailAddresses WITH (NOLOCK) 
    WHERE [EmailAddressID] = @EmailAddressID
				) sub
	where		
					[RawEmailAddressID] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailAddressesByEmailAddressIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailAddressesByEmailAddressIDSp_PagingSp]
	@EmailAddressID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'RawEmailAddressID' and @SortAscending = 1 then 
							[RawEmailAddressID]
						end ASC,
						case when @SortColumn = 'RawEmailAddressID' and @SortAscending = 0 then 
							[RawEmailAddressID]
						end DESC,
			
						case when @SortColumn = 'RawEmailID' and @SortAscending = 1 then 
							[RawEmailID]
						end ASC,
						case when @SortColumn = 'RawEmailID' and @SortAscending = 0 then 
							[RawEmailID]
						end DESC,
			
						case when @SortColumn = 'IsFrom' and @SortAscending = 1 then 
							[IsFrom]
						end ASC,
						case when @SortColumn = 'IsFrom' and @SortAscending = 0 then 
							[IsFrom]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'EmailAddressID' and @SortAscending = 1 then 
							[EmailAddressID]
						end ASC,
						case when @SortColumn = 'EmailAddressID' and @SortAscending = 0 then 
							[EmailAddressID]
						end DESC,
			
						case when @SortColumn = 'DomainID' and @SortAscending = 1 then 
							[DomainID]
						end ASC,
						case when @SortColumn = 'DomainID' and @SortAscending = 0 then 
							[DomainID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmailAddresses WITH (NOLOCK) 
    WHERE [EmailAddressID] = @EmailAddressID
					) sub
		where		
					[RawEmailAddressID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailAddressesByRawEmailIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailAddressesByRawEmailIDSp]
	@RawEmailID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmailAddresses WITH (NOLOCK) 
    WHERE [RawEmailID] = @RawEmailID

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailAddressesByRawEmailIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailAddressesByRawEmailIDSp_CountSp]
	@RawEmailID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmailAddresses WITH (NOLOCK) 
    WHERE [RawEmailID] = @RawEmailID
				) sub
	where		
					[RawEmailAddressID] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailAddressesByRawEmailIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailAddressesByRawEmailIDSp_PagingSp]
	@RawEmailID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'RawEmailAddressID' and @SortAscending = 1 then 
							[RawEmailAddressID]
						end ASC,
						case when @SortColumn = 'RawEmailAddressID' and @SortAscending = 0 then 
							[RawEmailAddressID]
						end DESC,
			
						case when @SortColumn = 'RawEmailID' and @SortAscending = 1 then 
							[RawEmailID]
						end ASC,
						case when @SortColumn = 'RawEmailID' and @SortAscending = 0 then 
							[RawEmailID]
						end DESC,
			
						case when @SortColumn = 'IsFrom' and @SortAscending = 1 then 
							[IsFrom]
						end ASC,
						case when @SortColumn = 'IsFrom' and @SortAscending = 0 then 
							[IsFrom]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'EmailAddressID' and @SortAscending = 1 then 
							[EmailAddressID]
						end ASC,
						case when @SortColumn = 'EmailAddressID' and @SortAscending = 0 then 
							[EmailAddressID]
						end DESC,
			
						case when @SortColumn = 'DomainID' and @SortAscending = 1 then 
							[DomainID]
						end ASC,
						case when @SortColumn = 'DomainID' and @SortAscending = 0 then 
							[DomainID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmailAddresses WITH (NOLOCK) 
    WHERE [RawEmailID] = @RawEmailID
					) sub
		where		
					[RawEmailAddressID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailAddressesSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailAddressesSp]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmailAddresses WITH (NOLOCK) 

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailAddressesSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailAddressesSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmailAddresses WITH (NOLOCK) 
				) sub
	where		
					[RawEmailAddressID] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailAddressesSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailAddressesSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'RawEmailAddressID' and @SortAscending = 1 then 
							[RawEmailAddressID]
						end ASC,
						case when @SortColumn = 'RawEmailAddressID' and @SortAscending = 0 then 
							[RawEmailAddressID]
						end DESC,
			
						case when @SortColumn = 'RawEmailID' and @SortAscending = 1 then 
							[RawEmailID]
						end ASC,
						case when @SortColumn = 'RawEmailID' and @SortAscending = 0 then 
							[RawEmailID]
						end DESC,
			
						case when @SortColumn = 'IsFrom' and @SortAscending = 1 then 
							[IsFrom]
						end ASC,
						case when @SortColumn = 'IsFrom' and @SortAscending = 0 then 
							[IsFrom]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'EmailAddressID' and @SortAscending = 1 then 
							[EmailAddressID]
						end ASC,
						case when @SortColumn = 'EmailAddressID' and @SortAscending = 0 then 
							[EmailAddressID]
						end DESC,
			
						case when @SortColumn = 'DomainID' and @SortAscending = 1 then 
							[DomainID]
						end ASC,
						case when @SortColumn = 'DomainID' and @SortAscending = 0 then 
							[DomainID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmailAddresses WITH (NOLOCK) 
					) sub
		where		
					[RawEmailAddressID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailAddressSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailAddressSp]
	@RawEmailAddressID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmailAddresses WITH (NOLOCK) 
     WHERE RawEmailAddressID = @RawEmailAddressID


GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailByImportKeySp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailByImportKeySp]
	@ImportKey [nvarchar](255)
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmails WITH (NOLOCK) 
    WHERE [ImportKey] = @ImportKey

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailsByRawEmailAddressDomainIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailsByRawEmailAddressDomainIDSp]
	@DomainID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT t2.*
    FROM RawEmailAddresses t1 WITH (NOLOCK) 
    JOIN RawEmails t2 WITH (NOLOCK) 
    ON t1.RawEmailID = t2.RawEmailID
    WHERE t1.[DomainID] = @DomainID

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailsByThreadIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailsByThreadIDSp]
	@ThreadID [nvarchar](255)
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmails WITH (NOLOCK) 
    WHERE [ThreadID] = @ThreadID

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailsByUserIDSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailsByUserIDSp]
	@UserID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmails WITH (NOLOCK) 
    WHERE [UserID] = @UserID

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailsByUserIDSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailsByUserIDSp_CountSp]
	@UserID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmails WITH (NOLOCK) 
    WHERE [UserID] = @UserID
				) sub
	where		
					[RawEmailID] like '%' + @Search + '%' or
					[To] like '%' + @Search + '%' or
					[From] like '%' + @Search + '%' or
					[Label] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' or
					[ThreadID] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailsByUserIDSp_PagingSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailsByUserIDSp_PagingSp]
	@UserID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'RawEmailID' and @SortAscending = 1 then 
							[RawEmailID]
						end ASC,
						case when @SortColumn = 'RawEmailID' and @SortAscending = 0 then 
							[RawEmailID]
						end DESC,
			
						case when @SortColumn = 'To' and @SortAscending = 1 then 
							[To]
						end ASC,
						case when @SortColumn = 'To' and @SortAscending = 0 then 
							[To]
						end DESC,
			
						case when @SortColumn = 'From' and @SortAscending = 1 then 
							[From]
						end ASC,
						case when @SortColumn = 'From' and @SortAscending = 0 then 
							[From]
						end DESC,
			
						case when @SortColumn = 'IsProcessed' and @SortAscending = 1 then 
							[IsProcessed]
						end ASC,
						case when @SortColumn = 'IsProcessed' and @SortAscending = 0 then 
							[IsProcessed]
						end DESC,
			
						case when @SortColumn = 'Label' and @SortAscending = 1 then 
							[Label]
						end ASC,
						case when @SortColumn = 'Label' and @SortAscending = 0 then 
							[Label]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'UserID' and @SortAscending = 1 then 
							[UserID]
						end ASC,
						case when @SortColumn = 'UserID' and @SortAscending = 0 then 
							[UserID]
						end DESC,
			
						case when @SortColumn = 'ImportKey' and @SortAscending = 1 then 
							[ImportKey]
						end ASC,
						case when @SortColumn = 'ImportKey' and @SortAscending = 0 then 
							[ImportKey]
						end DESC,
			
						case when @SortColumn = 'EmailDate' and @SortAscending = 1 then 
							[EmailDate]
						end ASC,
						case when @SortColumn = 'EmailDate' and @SortAscending = 0 then 
							[EmailDate]
						end DESC,
			
						case when @SortColumn = 'ThreadID' and @SortAscending = 1 then 
							[ThreadID]
						end ASC,
						case when @SortColumn = 'ThreadID' and @SortAscending = 0 then 
							[ThreadID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmails WITH (NOLOCK) 
    WHERE [UserID] = @UserID
					) sub
		where		
					[RawEmailID] like '%' + @Search + '%' or
					[To] like '%' + @Search + '%' or
					[From] like '%' + @Search + '%' or
					[Label] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' or
					[ThreadID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailSp]
	@RawEmailID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmails WITH (NOLOCK) 
     WHERE RawEmailID = @RawEmailID


GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailsSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailsSp]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmails WITH (NOLOCK) 

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailsSp_CountSp]    Script Date: 1/21/2025 4:07:35 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailsSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmails WITH (NOLOCK) 
				) sub
	where		
					[RawEmailID] like '%' + @Search + '%' or
					[To] like '%' + @Search + '%' or
					[From] like '%' + @Search + '%' or
					[Label] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' or
					[ThreadID] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetRawEmailsSp_PagingSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetRawEmailsSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'RawEmailID' and @SortAscending = 1 then 
							[RawEmailID]
						end ASC,
						case when @SortColumn = 'RawEmailID' and @SortAscending = 0 then 
							[RawEmailID]
						end DESC,
			
						case when @SortColumn = 'To' and @SortAscending = 1 then 
							[To]
						end ASC,
						case when @SortColumn = 'To' and @SortAscending = 0 then 
							[To]
						end DESC,
			
						case when @SortColumn = 'From' and @SortAscending = 1 then 
							[From]
						end ASC,
						case when @SortColumn = 'From' and @SortAscending = 0 then 
							[From]
						end DESC,
			
						case when @SortColumn = 'IsProcessed' and @SortAscending = 1 then 
							[IsProcessed]
						end ASC,
						case when @SortColumn = 'IsProcessed' and @SortAscending = 0 then 
							[IsProcessed]
						end DESC,
			
						case when @SortColumn = 'Label' and @SortAscending = 1 then 
							[Label]
						end ASC,
						case when @SortColumn = 'Label' and @SortAscending = 0 then 
							[Label]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'UserID' and @SortAscending = 1 then 
							[UserID]
						end ASC,
						case when @SortColumn = 'UserID' and @SortAscending = 0 then 
							[UserID]
						end DESC,
			
						case when @SortColumn = 'ImportKey' and @SortAscending = 1 then 
							[ImportKey]
						end ASC,
						case when @SortColumn = 'ImportKey' and @SortAscending = 0 then 
							[ImportKey]
						end DESC,
			
						case when @SortColumn = 'EmailDate' and @SortAscending = 1 then 
							[EmailDate]
						end ASC,
						case when @SortColumn = 'EmailDate' and @SortAscending = 0 then 
							[EmailDate]
						end DESC,
			
						case when @SortColumn = 'ThreadID' and @SortAscending = 1 then 
							[ThreadID]
						end ASC,
						case when @SortColumn = 'ThreadID' and @SortAscending = 0 then 
							[ThreadID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 12/15/2024 9:48:39 AM.
    
    SELECT *
    FROM RawEmails WITH (NOLOCK) 
					) sub
		where		
					[RawEmailID] like '%' + @Search + '%' or
					[To] like '%' + @Search + '%' or
					[From] like '%' + @Search + '%' or
					[Label] like '%' + @Search + '%' or
					[ImportKey] like '%' + @Search + '%' or
					[ThreadID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetRoleByRoleNameSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetRoleByRoleNameSp]
	@RoleName [nvarchar](255)
AS

    -- Automatically generated on 1/18/2023 6:29:15 AM.
    
    SELECT *
    FROM Roles WITH (NOLOCK) 
    WHERE [RoleName] = @RoleName
GO
/****** Object:  StoredProcedure [dbo].[GetRolesByUserRoleUserIDSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetRolesByUserRoleUserIDSp]
	@UserID [int]
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT t2.*
    FROM UserRoles t1 WITH (NOLOCK) 
    JOIN Roles t2 WITH (NOLOCK) 
    ON t1.RoleID = t2.RoleID
    WHERE t1.[UserID] = @UserID
GO
/****** Object:  StoredProcedure [dbo].[GetRolesByUserRoleUserIDSp_CountSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetRolesByUserRoleUserIDSp_CountSp]
	@UserID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT t2.*
    FROM UserRoles t1 WITH (NOLOCK) 
    JOIN Roles t2 WITH (NOLOCK) 
    ON t1.RoleID = t2.RoleID
    WHERE t1.[UserID] = @UserID
				) sub
	where		
					[RoleID] like '%' + @Search + '%' or
					[RoleName] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetRolesByUserRoleUserIDSp_PagingSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetRolesByUserRoleUserIDSp_PagingSp]
	@UserID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'RoleID' and @SortAscending = 1 then 
							[RoleID]
						end ASC,
						case when @SortColumn = 'RoleID' and @SortAscending = 0 then 
							[RoleID]
						end DESC,
			
						case when @SortColumn = 'RoleName' and @SortAscending = 1 then 
							[RoleName]
						end ASC,
						case when @SortColumn = 'RoleName' and @SortAscending = 0 then 
							[RoleName]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT t2.*
    FROM UserRoles t1 WITH (NOLOCK) 
    JOIN Roles t2 WITH (NOLOCK) 
    ON t1.RoleID = t2.RoleID
    WHERE t1.[UserID] = @UserID
					) sub
		where		
					[RoleID] like '%' + @Search + '%' or
					[RoleName] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetRoleSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetRoleSp]
	@RoleID [int]
AS

    -- Automatically generated on 1/18/2023 6:29:15 AM.
    
    SELECT *
    FROM Roles WITH (NOLOCK) 
     WHERE RoleID = @RoleID
GO
/****** Object:  StoredProcedure [dbo].[GetRolesSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetRolesSp]
AS

    -- Automatically generated on 1/18/2023 6:29:15 AM.
    
    SELECT *
    FROM Roles WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetRolesSp_CountSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetRolesSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 1/18/2023 6:29:15 AM.
    
    SELECT *
    FROM Roles WITH (NOLOCK) 
				) sub
	where		
					[RoleID] like '%' + @Search + '%' or
					[RoleName] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetRolesSp_PagingSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetRolesSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'RoleID' and @SortAscending = 1 then 
							[RoleID]
						end ASC,
						case when @SortColumn = 'RoleID' and @SortAscending = 0 then 
							[RoleID]
						end DESC,
			
						case when @SortColumn = 'RoleName' and @SortAscending = 1 then 
							[RoleName]
						end ASC,
						case when @SortColumn = 'RoleName' and @SortAscending = 0 then 
							[RoleName]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 1/18/2023 6:29:15 AM.
    
    SELECT *
    FROM Roles WITH (NOLOCK) 
					) sub
		where		
					[RoleID] like '%' + @Search + '%' or
					[RoleName] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetSalesRepresentativeByEmailSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetSalesRepresentativeByEmailSp]
	@Email [nvarchar](255)
AS

    
    SELECT s.*
    FROM SalesRepresentatives s WITH (NOLOCK) 
	JOIN Users u on s.UserID = u.UserID
    WHERE u.[Email] = @Email

GO
/****** Object:  StoredProcedure [dbo].[GetSalesRepresentativesBySalesRepresentativeTypeIDSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetSalesRepresentativesBySalesRepresentativeTypeIDSp]
	@SalesRepresentativeTypeID [int]
AS

    -- Automatically generated on 8/23/2024 9:58:34 AM.
    
    SELECT s.*, u.FirstName + ' ' + u.LastName as Name, u.Email, u.Phone, u.IsEnabled
    FROM SalesRepresentatives s WITH (NOLOCK) 
	JOIN Users u on s.UserID = u.UserID
    WHERE [SalesRepresentativeTypeID] = @SalesRepresentativeTypeID

GO
/****** Object:  StoredProcedure [dbo].[GetSalesRepresentativesBySalesRepresentativeTypeIDSp_CountSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetSalesRepresentativesBySalesRepresentativeTypeIDSp_CountSp]
	@SalesRepresentativeTypeID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 8/23/2024 9:58:34 AM.
    
    SELECT s.*, u.FirstName + ' ' + u.LastName as Name, u.Email, u.Phone, u.IsEnabled
    FROM SalesRepresentatives s WITH (NOLOCK) 
	JOIN Users u on s.UserID = u.UserID
    WHERE [SalesRepresentativeTypeID] = @SalesRepresentativeTypeID
				) sub
	where		
					[SalesRepresentativeID] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetSalesRepresentativesBySalesRepresentativeTypeIDSp_PagingSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetSalesRepresentativesBySalesRepresentativeTypeIDSp_PagingSp]
	@SalesRepresentativeTypeID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 1 then 
							[SalesRepresentativeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 0 then 
							[SalesRepresentativeID]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeTypeID' and @SortAscending = 1 then 
							[SalesRepresentativeTypeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeTypeID' and @SortAscending = 0 then 
							[SalesRepresentativeTypeID]
						end DESC,
			
						case when @SortColumn = 'UserID' and @SortAscending = 1 then 
							[UserID]
						end ASC,
						case when @SortColumn = 'UserID' and @SortAscending = 0 then 
							[UserID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 8/23/2024 9:58:34 AM.
    
    SELECT s.*, u.FirstName + ' ' + u.LastName as Name, u.Email, u.Phone, u.IsEnabled
    FROM SalesRepresentatives s WITH (NOLOCK) 
	JOIN Users u on s.UserID = u.UserID
    WHERE [SalesRepresentativeTypeID] = @SalesRepresentativeTypeID
					) sub
		where		
					[SalesRepresentativeID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetSalesRepresentativesByUserIDSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetSalesRepresentativesByUserIDSp]
	@UserID [int]
AS

    -- Automatically generated on 8/23/2024 9:58:34 AM.
    
    SELECT *
    FROM SalesRepresentatives WITH (NOLOCK) 
    WHERE [UserID] = @UserID

GO
/****** Object:  StoredProcedure [dbo].[GetSalesRepresentativeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetSalesRepresentativeSp]
	@SalesRepresentativeID [int]
AS

    -- Automatically generated on 3/20/2023 2:59:18 PM.
    
    SELECT *
    FROM SalesRepresentatives WITH (NOLOCK) 
     WHERE SalesRepresentativeID = @SalesRepresentativeID
GO
/****** Object:  StoredProcedure [dbo].[GetSalesRepresentativesSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetSalesRepresentativesSp]
AS

    -- Automatically generated on 8/23/2024 9:58:34 AM.
    
    SELECT s.*, u.FirstName + ' ' + u.LastName as Name, u.Email, u.Phone, u.IsEnabled
    FROM SalesRepresentatives s WITH (NOLOCK) 
	JOIN Users u on s.UserID = u.UserID

GO
/****** Object:  StoredProcedure [dbo].[GetSalesRepresentativesSp_CountSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetSalesRepresentativesSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 3/20/2023 2:59:18 PM.
    SELECT s.*, u.FirstName + ' ' + u.LastName as Name, u.Email, u.Phone, u.IsEnabled
    FROM SalesRepresentatives s WITH (NOLOCK) 
	JOIN Users u on s.UserID = u.UserID
				) sub
	where		
					[SalesRepresentativeID] like '%' + @Search + '%' or
					[Name] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetSalesRepresentativesSp_PagingSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetSalesRepresentativesSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 1 then 
							[SalesRepresentativeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 0 then 
							[SalesRepresentativeID]
						end DESC,
			
						case when @SortColumn = 'IsEnabled' and @SortAscending = 1 then 
							[IsEnabled]
						end ASC,
						case when @SortColumn = 'IsEnabled' and @SortAscending = 0 then 
							[IsEnabled]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'Name' and @SortAscending = 1 then 
							[Name]
						end ASC,
						case when @SortColumn = 'Name' and @SortAscending = 0 then 
							[Name]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeTypeID' and @SortAscending = 1 then 
							[SalesRepresentativeTypeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeTypeID' and @SortAscending = 0 then 
							[SalesRepresentativeTypeID]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 3/20/2023 2:59:18 PM.
    
    SELECT s.*, u.FirstName + ' ' + u.LastName as Name, u.Email, u.Phone, u.IsEnabled
    FROM SalesRepresentatives s WITH (NOLOCK) 
	JOIN Users u on s.UserID = u.UserID
					) sub
		where		
					[SalesRepresentativeID] like '%' + @Search + '%' or
					[Name] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetSalesRepresentativeTypeBySalesRepresentativeTypeNameSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetSalesRepresentativeTypeBySalesRepresentativeTypeNameSp]
	@SalesRepresentativeTypeName [nvarchar](255)
AS

    -- Automatically generated on 3/20/2023 2:59:18 PM.
    
    SELECT *
    FROM SalesRepresentativeTypes WITH (NOLOCK) 
    WHERE [SalesRepresentativeTypeName] = @SalesRepresentativeTypeName
GO
/****** Object:  StoredProcedure [dbo].[GetSalesRepresentativeTypeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetSalesRepresentativeTypeSp]
	@SalesRepresentativeTypeID [int]
AS

    -- Automatically generated on 3/20/2023 2:59:18 PM.
    
    SELECT *
    FROM SalesRepresentativeTypes WITH (NOLOCK) 
     WHERE SalesRepresentativeTypeID = @SalesRepresentativeTypeID
GO
/****** Object:  StoredProcedure [dbo].[GetSalesRepresentativeTypesSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetSalesRepresentativeTypesSp]
AS

    -- Automatically generated on 3/20/2023 2:59:18 PM.
    
    SELECT *
    FROM SalesRepresentativeTypes WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetSalesRepresentativeTypesSp_CountSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetSalesRepresentativeTypesSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 3/20/2023 2:59:18 PM.
    
    SELECT *
    FROM SalesRepresentativeTypes WITH (NOLOCK) 
				) sub
	where		
					[SalesRepresentativeTypeID] like '%' + @Search + '%' or
					[SalesRepresentativeTypeName] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetSalesRepresentativeTypesSp_PagingSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetSalesRepresentativeTypesSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'SalesRepresentativeTypeID' and @SortAscending = 1 then 
							[SalesRepresentativeTypeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeTypeID' and @SortAscending = 0 then 
							[SalesRepresentativeTypeID]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeTypeName' and @SortAscending = 1 then 
							[SalesRepresentativeTypeName]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeTypeName' and @SortAscending = 0 then 
							[SalesRepresentativeTypeName]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 3/20/2023 2:59:18 PM.
    
    SELECT *
    FROM SalesRepresentativeTypes WITH (NOLOCK) 
					) sub
		where		
					[SalesRepresentativeTypeID] like '%' + @Search + '%' or
					[SalesRepresentativeTypeName] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetSourceBySourceNameSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetSourceBySourceNameSp]
	@SourceName [nvarchar](255)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM Sources WITH (NOLOCK) 
    WHERE [SourceName] = @SourceName
GO
/****** Object:  StoredProcedure [dbo].[GetSourceSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetSourceSp]
	@SourceID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM Sources WITH (NOLOCK) 
     WHERE SourceID = @SourceID
GO
/****** Object:  StoredProcedure [dbo].[GetSourcesSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetSourcesSp]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM Sources WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetSourcesSp_CountSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetSourcesSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM Sources WITH (NOLOCK) 
				) sub
	where		
					[SourceID] like '%' + @Search + '%' or
					[SourceName] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetSourcesSp_PagingSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetSourcesSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'SourceID' and @SortAscending = 1 then 
							[SourceID]
						end ASC,
						case when @SortColumn = 'SourceID' and @SortAscending = 0 then 
							[SourceID]
						end DESC,
			
						case when @SortColumn = 'SourceName' and @SortAscending = 1 then 
							[SourceName]
						end ASC,
						case when @SortColumn = 'SourceName' and @SortAscending = 0 then 
							[SourceName]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM Sources WITH (NOLOCK) 
					) sub
		where		
					[SourceID] like '%' + @Search + '%' or
					[SourceName] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetTagByTagNameSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetTagByTagNameSp]
	@TagName [nvarchar](255)
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM Tags WITH (NOLOCK) 
    WHERE [TagName] = @TagName
GO
/****** Object:  StoredProcedure [dbo].[GetTagsByLeadTagLeadIDSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetTagsByLeadTagLeadIDSp]
	@LeadID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT t2.*
    FROM LeadTags t1 WITH (NOLOCK) 
    JOIN Tags t2 WITH (NOLOCK) 
    ON t1.TagID = t2.TagID
    WHERE t1.[LeadID] = @LeadID
GO
/****** Object:  StoredProcedure [dbo].[GetTagsBySalesRepresentativeIDSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetTagsBySalesRepresentativeIDSp]
	@SalesRepresentativeID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM Tags WITH (NOLOCK) 
    WHERE [SalesRepresentativeID] = @SalesRepresentativeID
GO
/****** Object:  StoredProcedure [dbo].[GetTagSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetTagSp]
	@TagID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM Tags WITH (NOLOCK) 
     WHERE TagID = @TagID
GO
/****** Object:  StoredProcedure [dbo].[GetTagsSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetTagsSp]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    SELECT *
    FROM Tags WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetTagsSp_CountSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetTagsSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM Tags WITH (NOLOCK) 
				) sub
	where		
					[TagID] like '%' + @Search + '%' or
					[TagName] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetTagsSp_PagingSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetTagsSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'TagID' and @SortAscending = 1 then 
							[TagID]
						end ASC,
						case when @SortColumn = 'TagID' and @SortAscending = 0 then 
							[TagID]
						end DESC,
			
						case when @SortColumn = 'TagName' and @SortAscending = 1 then 
							[TagName]
						end ASC,
						case when @SortColumn = 'TagName' and @SortAscending = 0 then 
							[TagName]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 2/6/2023 2:57:00 PM.
    
    SELECT *
    FROM Tags WITH (NOLOCK) 
					) sub
		where		
					[TagID] like '%' + @Search + '%' or
					[TagName] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetUserByEmailSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetUserByEmailSp]
	@Email [nvarchar](255)
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT *
    FROM Users WITH (NOLOCK) 
    WHERE [Email] = @Email
GO
/****** Object:  StoredProcedure [dbo].[GetUserRolesByRoleIDSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetUserRolesByRoleIDSp]
	@RoleID [int]
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT *
    FROM UserRoles WITH (NOLOCK) 
    WHERE [RoleID] = @RoleID
GO
/****** Object:  StoredProcedure [dbo].[GetUserRolesByRoleIDSp_CountSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetUserRolesByRoleIDSp_CountSp]
	@RoleID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 1/18/2023 6:29:15 AM.
    
    SELECT *
    FROM UserRoles WITH (NOLOCK) 
    WHERE [RoleID] = @RoleID
				) sub
	where		
					[UserRoleID] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetUserRolesByRoleIDSp_PagingSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetUserRolesByRoleIDSp_PagingSp]
	@RoleID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'UserRoleID' and @SortAscending = 1 then 
							[UserRoleID]
						end ASC,
						case when @SortColumn = 'UserRoleID' and @SortAscending = 0 then 
							[UserRoleID]
						end DESC,
			
						case when @SortColumn = 'UserID' and @SortAscending = 1 then 
							[UserID]
						end ASC,
						case when @SortColumn = 'UserID' and @SortAscending = 0 then 
							[UserID]
						end DESC,
			
						case when @SortColumn = 'RoleID' and @SortAscending = 1 then 
							[RoleID]
						end ASC,
						case when @SortColumn = 'RoleID' and @SortAscending = 0 then 
							[RoleID]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 1/18/2023 6:29:15 AM.
    
    SELECT *
    FROM UserRoles WITH (NOLOCK) 
    WHERE [RoleID] = @RoleID
					) sub
		where		
					[UserRoleID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetUserRolesByRoleIDUserIDSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetUserRolesByRoleIDUserIDSp]
	@RoleID [int],
	@UserID [int]
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT *
    FROM UserRoles WITH (NOLOCK) 
    WHERE [RoleID] = @RoleID AND [UserID] = @UserID
GO
/****** Object:  StoredProcedure [dbo].[GetUserRolesByUserIDSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetUserRolesByUserIDSp]
	@UserID [int]
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT *
    FROM UserRoles WITH (NOLOCK) 
    WHERE [UserID] = @UserID
GO
/****** Object:  StoredProcedure [dbo].[GetUserRolesByUserIDSp_CountSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetUserRolesByUserIDSp_CountSp]
	@UserID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 1/18/2023 6:29:15 AM.
    
    SELECT *
    FROM UserRoles WITH (NOLOCK) 
    WHERE [UserID] = @UserID
				) sub
	where		
					[UserRoleID] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetUserRolesByUserIDSp_PagingSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetUserRolesByUserIDSp_PagingSp]
	@UserID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'UserRoleID' and @SortAscending = 1 then 
							[UserRoleID]
						end ASC,
						case when @SortColumn = 'UserRoleID' and @SortAscending = 0 then 
							[UserRoleID]
						end DESC,
			
						case when @SortColumn = 'UserID' and @SortAscending = 1 then 
							[UserID]
						end ASC,
						case when @SortColumn = 'UserID' and @SortAscending = 0 then 
							[UserID]
						end DESC,
			
						case when @SortColumn = 'RoleID' and @SortAscending = 1 then 
							[RoleID]
						end ASC,
						case when @SortColumn = 'RoleID' and @SortAscending = 0 then 
							[RoleID]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 1/18/2023 6:29:15 AM.
    
    SELECT *
    FROM UserRoles WITH (NOLOCK) 
    WHERE [UserID] = @UserID
					) sub
		where		
					[UserRoleID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetUserRoleSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetUserRoleSp]
	@UserRoleID [int]
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT *
    FROM UserRoles WITH (NOLOCK) 
     WHERE UserRoleID = @UserRoleID
GO
/****** Object:  StoredProcedure [dbo].[GetUserRolesSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetUserRolesSp]
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT *
    FROM UserRoles WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetUserRolesSp_CountSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetUserRolesSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 1/18/2023 6:29:15 AM.
    
    SELECT *
    FROM UserRoles WITH (NOLOCK) 
				) sub
	where		
					[UserRoleID] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetUserRolesSp_PagingSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetUserRolesSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'UserRoleID' and @SortAscending = 1 then 
							[UserRoleID]
						end ASC,
						case when @SortColumn = 'UserRoleID' and @SortAscending = 0 then 
							[UserRoleID]
						end DESC,
			
						case when @SortColumn = 'UserID' and @SortAscending = 1 then 
							[UserID]
						end ASC,
						case when @SortColumn = 'UserID' and @SortAscending = 0 then 
							[UserID]
						end DESC,
			
						case when @SortColumn = 'RoleID' and @SortAscending = 1 then 
							[RoleID]
						end ASC,
						case when @SortColumn = 'RoleID' and @SortAscending = 0 then 
							[RoleID]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 1/18/2023 6:29:15 AM.
    
    SELECT *
    FROM UserRoles WITH (NOLOCK) 
					) sub
		where		
					[UserRoleID] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetUsersByUserIDSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetUsersByUserIDSp]
	@UserID [int]
AS

    -- Automatically generated on 8/23/2024 9:58:34 AM.
    
    SELECT *
    FROM Users WITH (NOLOCK) 
    WHERE [UserID] = @UserID

GO
/****** Object:  StoredProcedure [dbo].[GetUsersByUserIDSp_CountSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetUsersByUserIDSp_CountSp]
	@UserID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 8/23/2024 9:58:34 AM.
    
    SELECT *
    FROM Users WITH (NOLOCK) 
    WHERE [UserID] = @UserID
				) sub
	where		
					[UserID] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[InvitationCode] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' 
		

GO
/****** Object:  StoredProcedure [dbo].[GetUsersByUserIDSp_PagingSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[GetUsersByUserIDSp_PagingSp]
	@UserID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'UserID' and @SortAscending = 1 then 
							[UserID]
						end ASC,
						case when @SortColumn = 'UserID' and @SortAscending = 0 then 
							[UserID]
						end DESC,
			
						case when @SortColumn = 'IsEnabled' and @SortAscending = 1 then 
							[IsEnabled]
						end ASC,
						case when @SortColumn = 'IsEnabled' and @SortAscending = 0 then 
							[IsEnabled]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'HasLoggedIn' and @SortAscending = 1 then 
							[HasLoggedIn]
						end ASC,
						case when @SortColumn = 'HasLoggedIn' and @SortAscending = 0 then 
							[HasLoggedIn]
						end DESC,
			
						case when @SortColumn = 'LastLoginDate' and @SortAscending = 1 then 
							[LastLoginDate]
						end ASC,
						case when @SortColumn = 'LastLoginDate' and @SortAscending = 0 then 
							[LastLoginDate]
						end DESC,
			
						case when @SortColumn = 'IsLockedOut' and @SortAscending = 1 then 
							[IsLockedOut]
						end ASC,
						case when @SortColumn = 'IsLockedOut' and @SortAscending = 0 then 
							[IsLockedOut]
						end DESC,
			
						case when @SortColumn = 'InvitationCode' and @SortAscending = 1 then 
							[InvitationCode]
						end ASC,
						case when @SortColumn = 'InvitationCode' and @SortAscending = 0 then 
							[InvitationCode]
						end DESC,
			
						case when @SortColumn = 'InvitationExpiration' and @SortAscending = 1 then 
							[InvitationExpiration]
						end ASC,
						case when @SortColumn = 'InvitationExpiration' and @SortAscending = 0 then 
							[InvitationExpiration]
						end DESC,
			
						case when @SortColumn = 'IsInvited' and @SortAscending = 1 then 
							[IsInvited]
						end ASC,
						case when @SortColumn = 'IsInvited' and @SortAscending = 0 then 
							[IsInvited]
						end DESC,
			
						case when @SortColumn = 'InvitedDate' and @SortAscending = 1 then 
							[InvitedDate]
						end ASC,
						case when @SortColumn = 'InvitedDate' and @SortAscending = 0 then 
							[InvitedDate]
						end DESC,
			
						case when @SortColumn = 'FirstName' and @SortAscending = 1 then 
							[FirstName]
						end ASC,
						case when @SortColumn = 'FirstName' and @SortAscending = 0 then 
							[FirstName]
						end DESC,
			
						case when @SortColumn = 'LastName' and @SortAscending = 1 then 
							[LastName]
						end ASC,
						case when @SortColumn = 'LastName' and @SortAscending = 0 then 
							[LastName]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 8/23/2024 9:58:34 AM.
    
    SELECT *
    FROM Users WITH (NOLOCK) 
    WHERE [UserID] = @UserID
					) sub
		where		
					[UserID] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[InvitationCode] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		

GO
/****** Object:  StoredProcedure [dbo].[GetUsersByUserRoleRoleIDSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetUsersByUserRoleRoleIDSp]
	@RoleID [int]
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT t2.*
    FROM UserRoles t1 WITH (NOLOCK) 
    JOIN Users t2 WITH (NOLOCK) 
    ON t1.UserID = t2.UserID
    WHERE t1.[RoleID] = @RoleID
GO
/****** Object:  StoredProcedure [dbo].[GetUsersByUserRoleRoleIDSp_CountSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetUsersByUserRoleRoleIDSp_CountSp]
	@RoleID [int],
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT t2.*
    FROM UserRoles t1 WITH (NOLOCK) 
    JOIN Users t2 WITH (NOLOCK) 
    ON t1.UserID = t2.UserID
    WHERE t1.[RoleID] = @RoleID
				) sub
	where		
					[UserID] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[InvitationCode] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetUsersByUserRoleRoleIDSp_PagingSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetUsersByUserRoleRoleIDSp_PagingSp]
	@RoleID [int],
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'UserID' and @SortAscending = 1 then 
							[UserID]
						end ASC,
						case when @SortColumn = 'UserID' and @SortAscending = 0 then 
							[UserID]
						end DESC,
			
						case when @SortColumn = 'IsEnabled' and @SortAscending = 1 then 
							[IsEnabled]
						end ASC,
						case when @SortColumn = 'IsEnabled' and @SortAscending = 0 then 
							[IsEnabled]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'HasLoggedIn' and @SortAscending = 1 then 
							[HasLoggedIn]
						end ASC,
						case when @SortColumn = 'HasLoggedIn' and @SortAscending = 0 then 
							[HasLoggedIn]
						end DESC,
			
						case when @SortColumn = 'LastLoginDate' and @SortAscending = 1 then 
							[LastLoginDate]
						end ASC,
						case when @SortColumn = 'LastLoginDate' and @SortAscending = 0 then 
							[LastLoginDate]
						end DESC,
			
						case when @SortColumn = 'IsLockedOut' and @SortAscending = 1 then 
							[IsLockedOut]
						end ASC,
						case when @SortColumn = 'IsLockedOut' and @SortAscending = 0 then 
							[IsLockedOut]
						end DESC,
			
						case when @SortColumn = 'InvitationCode' and @SortAscending = 1 then 
							[InvitationCode]
						end ASC,
						case when @SortColumn = 'InvitationCode' and @SortAscending = 0 then 
							[InvitationCode]
						end DESC,
			
						case when @SortColumn = 'InvitationExpiration' and @SortAscending = 1 then 
							[InvitationExpiration]
						end ASC,
						case when @SortColumn = 'InvitationExpiration' and @SortAscending = 0 then 
							[InvitationExpiration]
						end DESC,
			
						case when @SortColumn = 'IsInvited' and @SortAscending = 1 then 
							[IsInvited]
						end ASC,
						case when @SortColumn = 'IsInvited' and @SortAscending = 0 then 
							[IsInvited]
						end DESC,
			
						case when @SortColumn = 'InvitedDate' and @SortAscending = 1 then 
							[InvitedDate]
						end ASC,
						case when @SortColumn = 'InvitedDate' and @SortAscending = 0 then 
							[InvitedDate]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT t2.*
    FROM UserRoles t1 WITH (NOLOCK) 
    JOIN Users t2 WITH (NOLOCK) 
    ON t1.UserID = t2.UserID
    WHERE t1.[RoleID] = @RoleID
					) sub
		where		
					[UserID] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[InvitationCode] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[GetUserSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetUserSp]
	@UserID [int]
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT *
    FROM Users WITH (NOLOCK) 
     WHERE UserID = @UserID
GO
/****** Object:  StoredProcedure [dbo].[GetUsersSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetUsersSp]
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT *
    FROM Users WITH (NOLOCK) 
GO
/****** Object:  StoredProcedure [dbo].[GetUsersSp_CountSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetUsersSp_CountSp]
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				-- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT *
    FROM Users WITH (NOLOCK) 
				) sub
	where		
					[UserID] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[InvitationCode] like '%' + @Search + '%' 
		
GO
/****** Object:  StoredProcedure [dbo].[GetUsersSp_PagingSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[GetUsersSp_PagingSp]
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'UserID' and @SortAscending = 1 then 
							[UserID]
						end ASC,
						case when @SortColumn = 'UserID' and @SortAscending = 0 then 
							[UserID]
						end DESC,
			
						case when @SortColumn = 'IsEnabled' and @SortAscending = 1 then 
							[IsEnabled]
						end ASC,
						case when @SortColumn = 'IsEnabled' and @SortAscending = 0 then 
							[IsEnabled]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'HasLoggedIn' and @SortAscending = 1 then 
							[HasLoggedIn]
						end ASC,
						case when @SortColumn = 'HasLoggedIn' and @SortAscending = 0 then 
							[HasLoggedIn]
						end DESC,
			
						case when @SortColumn = 'LastLoginDate' and @SortAscending = 1 then 
							[LastLoginDate]
						end ASC,
						case when @SortColumn = 'LastLoginDate' and @SortAscending = 0 then 
							[LastLoginDate]
						end DESC,
			
						case when @SortColumn = 'IsLockedOut' and @SortAscending = 1 then 
							[IsLockedOut]
						end ASC,
						case when @SortColumn = 'IsLockedOut' and @SortAscending = 0 then 
							[IsLockedOut]
						end DESC,
			
						case when @SortColumn = 'InvitationCode' and @SortAscending = 1 then 
							[InvitationCode]
						end ASC,
						case when @SortColumn = 'InvitationCode' and @SortAscending = 0 then 
							[InvitationCode]
						end DESC,
			
						case when @SortColumn = 'InvitationExpiration' and @SortAscending = 1 then 
							[InvitationExpiration]
						end ASC,
						case when @SortColumn = 'InvitationExpiration' and @SortAscending = 0 then 
							[InvitationExpiration]
						end DESC,
			
						case when @SortColumn = 'IsInvited' and @SortAscending = 1 then 
							[IsInvited]
						end ASC,
						case when @SortColumn = 'IsInvited' and @SortAscending = 0 then 
							[IsInvited]
						end DESC,
			
						case when @SortColumn = 'InvitedDate' and @SortAscending = 1 then 
							[InvitedDate]
						end ASC,
						case when @SortColumn = 'InvitedDate' and @SortAscending = 0 then 
							[InvitedDate]
						end DESC									
					) AS RowNumber,
					*
		FROM		(
					-- Automatically generated on 1/24/2023 7:44:21 AM.
    
    SELECT *
    FROM Users WITH (NOLOCK) 
					) sub
		where		
					[UserID] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[InvitationCode] like '%' + @Search + '%' 
	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
	
	
		
GO
/****** Object:  StoredProcedure [dbo].[InsertAgentSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertAgentSp]
	@AgentName [nvarchar](255),
	@ContextSettings [nvarchar](max),
	@Data [nvarchar](max),
	@Description [nvarchar](max),
	@AgentTypeID [int]
AS

    -- Automatically generated on 10/9/2024 4:50:41 PM.
    
    INSERT INTO Agents
    (
            [AgentName], 
            [ContextSettings], 
            [Data], 
            [DateCreated], 
            [LastUpdated], 
            [Description], 
            [AgentTypeID]
    )
    VALUES
    (
            @AgentName, 
            @ContextSettings, 
            @Data, 
            getdate(), 
            getdate(), 
            @Description, 
            @AgentTypeID
    )
    SELECT scope_identity() as AgentID


GO
/****** Object:  StoredProcedure [dbo].[InsertAgentTypeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertAgentTypeSp]
	@AgentTypeName [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 10/9/2024 4:50:41 PM.
    
    INSERT INTO AgentTypes
    (
            [AgentTypeName], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    VALUES
    (
            @AgentTypeName, 
            @Data, 
            getdate(), 
            getdate()
    )
    SELECT scope_identity() as AgentTypeID


GO
/****** Object:  StoredProcedure [dbo].[InsertAreaCodeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertAreaCodeSp]
	@AreaCode [nvarchar](255),
	@TimeZone [nvarchar](255),
	@Region [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 8/26/2023 8:04:05 AM.
    
    INSERT INTO AreaCodes
    (
            [AreaCode], 
            [TimeZone], 
            [Region], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    VALUES
    (
            @AreaCode, 
            @TimeZone, 
            @Region, 
            @Data, 
            getdate(), 
            getdate()
    )
    SELECT scope_identity() as AreaCodeID
GO
/****** Object:  StoredProcedure [dbo].[InsertAuthorizationSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertAuthorizationSp]
	@AuthorizationToken [nvarchar](255),
	@RefreshToken [nvarchar](255),
	@Expiration [datetime],
	@UserID [int],
	@LastRefreshedDate [datetime],
	@LastActivityDate [datetime],
	@IsExpired [bit],
	@IsRevoked [bit],
	@IsEncrypted [bit],
	@Data [nvarchar](max)
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    INSERT INTO Authorizations
    (
            [AuthorizationToken], 
            [RefreshToken], 
            [Expiration], 
            [UserID], 
            [LastRefreshedDate], 
            [LastActivityDate], 
            [IsExpired], 
            [IsRevoked], 
            [IsEncrypted], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    VALUES
    (
            @AuthorizationToken, 
            @RefreshToken, 
            @Expiration, 
            @UserID, 
            @LastRefreshedDate, 
            @LastActivityDate, 
            @IsExpired, 
            @IsRevoked, 
            @IsEncrypted, 
            @Data, 
            getdate(), 
            getdate()
    )
    SELECT scope_identity() as AuthorizationID
GO
/****** Object:  StoredProcedure [dbo].[InsertBlockedEmailSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertBlockedEmailSp]
	@Email [nvarchar](255),
	@Notes [nvarchar](max),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    INSERT INTO BlockedEmails
    (
            [Email], 
            [Notes], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    VALUES
    (
            @Email, 
            @Notes, 
            @Data, 
            getdate(), 
            getdate()
    )
    SELECT scope_identity() as BlockedEmailID
GO
/****** Object:  StoredProcedure [dbo].[InsertCallSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertCallSp]
	@CallingPhone [nvarchar](255),
	@CalledPhone [nvarchar](255),
	@Duration [float](53),
	@IsRecorded [bit],
	@RecordingURL [nvarchar](512),
	@IsConference [bit],
	@IsStreamed [bit],
	@IsIncoming [bit],
	@CallStatus [nvarchar](255),
	@LastCallStatusUpdate [datetime],
	@IsTranscribed [bit],
	@IsEmptyTranscription [bit],
	@TranscriptionSummary [nvarchar](max),
	@Data [nvarchar](max),
	@Transcription [nvarchar](max),
	@CallKey [nvarchar](255)
AS

    -- Automatically generated on 7/1/2024 7:51:00 AM.
    
    INSERT INTO Calls
    (
            [CallingPhone], 
            [CalledPhone], 
            [Duration], 
            [IsRecorded], 
            [RecordingURL], 
            [IsConference], 
            [IsStreamed], 
            [IsIncoming], 
            [CallStatus], 
            [LastCallStatusUpdate], 
            [IsTranscribed], 
            [IsEmptyTranscription], 
            [TranscriptionSummary], 
            [Data], 
            [DateCreated], 
            [LastUpdated], 
            [Transcription], 
            [CallKey]
    )
    VALUES
    (
            @CallingPhone, 
            @CalledPhone, 
            @Duration, 
            @IsRecorded, 
            @RecordingURL, 
            @IsConference, 
            @IsStreamed, 
            @IsIncoming, 
            @CallStatus, 
            @LastCallStatusUpdate, 
            @IsTranscribed, 
            @IsEmptyTranscription, 
            @TranscriptionSummary, 
            @Data, 
            getdate(), 
            getdate(), 
            @Transcription, 
            @CallKey
    )
    SELECT scope_identity() as CallID


GO
/****** Object:  StoredProcedure [dbo].[InsertCampaignSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertCampaignSp]
	@SourceID [int],
	@CampaignName [nvarchar](255),
	@CampaignKey [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 3/15/2023 4:58:59 PM.
    
    INSERT INTO Campaigns
    (
            [SourceID], 
            [CampaignName], 
            [CampaignKey], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    VALUES
    (
            @SourceID, 
            @CampaignName, 
            @CampaignKey, 
            @Data, 
            getdate(), 
            getdate()
    )
    SELECT scope_identity() as CampaignID
GO
/****** Object:  StoredProcedure [dbo].[InsertContentSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertContentSp]
	@ContentName [nvarchar](255),
	@Content [nvarchar](max),
	@Data [nvarchar](max),
	@ContentTypeID [int]
AS

    -- Automatically generated on 8/1/2024 3:23:28 PM.
    
    INSERT INTO Contents
    (
            [ContentName], 
            [Content], 
            [LastUpdated], 
            [DateCreated], 
            [Data], 
            [ContentTypeID]
    )
    VALUES
    (
            @ContentName, 
            @Content, 
            getdate(), 
            getdate(), 
            @Data, 
            @ContentTypeID
    )
    SELECT scope_identity() as ContentID


GO
/****** Object:  StoredProcedure [dbo].[InsertContentTypeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertContentTypeSp]
	@ContentTypeName [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 8/1/2024 3:23:28 PM.
    
    INSERT INTO ContentTypes
    (
            [ContentTypeName], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    VALUES
    (
            @ContentTypeName, 
            @Data, 
            getdate(), 
            getdate()
    )
    SELECT scope_identity() as ContentTypeID


GO
/****** Object:  StoredProcedure [dbo].[InsertDomainSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertDomainSp]
	@DomainName [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    INSERT INTO Domains
    (
            [DomainName], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    VALUES
    (
            @DomainName, 
            @Data, 
            getdate(), 
            getdate()
    )
    SELECT scope_identity() as DomainID


GO
/****** Object:  StoredProcedure [dbo].[InsertEmailAddressSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertEmailAddressSp]
	@Email [nvarchar](255),
	@Data [nvarchar](max),
	@IsBlocked [bit],
	@IsInternal [bit],
	@DomainID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    INSERT INTO EmailAddresses
    (
            [Email], 
            [Data], 
            [DateCreated], 
            [LastUpdated], 
            [IsBlocked], 
            [IsInternal], 
            [DomainID]
    )
    VALUES
    (
            @Email, 
            @Data, 
            getdate(), 
            getdate(), 
            @IsBlocked, 
            @IsInternal, 
            @DomainID
    )
    SELECT scope_identity() as EmailAddressID


GO
/****** Object:  StoredProcedure [dbo].[InsertEmailHistorySp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertEmailHistorySp]
	@To [nvarchar](255),
	@From [nvarchar](255),
	@EmailTemplateID [int],
	@Subject [nvarchar](255),
	@Email [nvarchar](max),
	@IsPending [bit],
	@IsSent [bit],
	@Data [nvarchar](max)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    INSERT INTO EmailHistories
    (
            [To], 
            [From], 
            [EmailTemplateID], 
            [Subject], 
            [Email], 
            [DateCreated], 
            [IsPending], 
            [IsSent], 
            [Data], 
            [LastUpdated]
    )
    VALUES
    (
            @To, 
            @From, 
            @EmailTemplateID, 
            @Subject, 
            @Email, 
            getdate(), 
            @IsPending, 
            @IsSent, 
            @Data, 
            getdate()
    )
    SELECT scope_identity() as EmailHistoryID
GO
/****** Object:  StoredProcedure [dbo].[InsertEmailTemplateSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertEmailTemplateSp]
	@Name [nvarchar](255),
	@EmailSubject [nvarchar](255),
	@EmailText [nvarchar](max),
	@EmailParams [nvarchar](255),
	@FromAddress [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    INSERT INTO EmailTemplates
    (
            [Name], 
            [EmailSubject], 
            [EmailText], 
            [EmailParams], 
            [FromAddress], 
            [DateCreated], 
            [LastUpdated], 
            [Data]
    )
    VALUES
    (
            @Name, 
            @EmailSubject, 
            @EmailText, 
            @EmailParams, 
            @FromAddress, 
            getdate(), 
            getdate(), 
            @Data
    )
    SELECT scope_identity() as EmailTemplateID
GO
/****** Object:  StoredProcedure [dbo].[InsertFeatureSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertFeatureSp]
	@FeatureName [nvarchar](255),
	@Version [nvarchar](255),
	@IsEnabled [bit],
	@SettingsAssembly [nvarchar](255),
	@SettingsClass [nvarchar](255),
	@Settings [nvarchar](max),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 6/29/2024 7:45:32 AM.
    
    INSERT INTO Features
    (
            [FeatureName], 
            [Version], 
            [IsEnabled], 
            [SettingsAssembly], 
            [SettingsClass], 
            [Settings], 
            [DateCreated], 
            [LastUpdated], 
            [Data]
    )
    VALUES
    (
            @FeatureName, 
            @Version, 
            @IsEnabled, 
            @SettingsAssembly, 
            @SettingsClass, 
            @Settings, 
            getdate(), 
            getdate(), 
            @Data
    )
    SELECT scope_identity() as FeatureID


GO
/****** Object:  StoredProcedure [dbo].[InsertFileSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertFileSp]
	@FileTypeID [int],
	@PhysicalPath [nvarchar](255),
	@FileName [nvarchar](255),
	@FileDescription [nvarchar](255),
	@Label [nvarchar](255),
	@Data [nvarchar](max),
	@IsDeleted [bit]
AS

    -- Automatically generated on 7/18/2024 5:57:46 PM.
    
    INSERT INTO Files
    (
            [FileTypeID], 
            [PhysicalPath], 
            [FileName], 
            [FileDescription], 
            [Label], 
            [Data], 
            [IsDeleted], 
            [DateCreated], 
            [LastUpdated]
    )
    VALUES
    (
            @FileTypeID, 
            @PhysicalPath, 
            @FileName, 
            @FileDescription, 
            @Label, 
            @Data, 
            @IsDeleted, 
            getdate(), 
            getdate()
    )
    SELECT scope_identity() as FileID


GO
/****** Object:  StoredProcedure [dbo].[InsertFileTypeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertFileTypeSp]
	@FileType [nvarchar](255),
	@AllowedExtensions [nvarchar](255)
AS

    -- Automatically generated on 7/17/2024 10:51:48 AM.
    
    INSERT INTO FileTypes
    (
            [FileType], 
            [AllowedExtensions], 
            [DateCreated], 
            [LastUpdated]
    )
    VALUES
    (
            @FileType, 
            @AllowedExtensions, 
            getdate(), 
            getdate()
    )
    SELECT scope_identity() as FileTypeID


GO
/****** Object:  StoredProcedure [dbo].[InsertLeadAddressSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertLeadAddressSp]
	@Data [nvarchar](max),
	@AddressType [nvarchar](255),
	@Phone [nvarchar](255),
	@Fax [nvarchar](255),
	@LeadID [int],
	@Name [nvarchar](255),
	@Line1 [nvarchar](255),
	@Line2 [nvarchar](255),
	@City [nvarchar](255),
	@State [nvarchar](255),
	@Zip [nvarchar](20),
	@Country [nvarchar](255)
AS

    -- Automatically generated on 7/25/2024 2:20:08 PM.
    
    INSERT INTO LeadAddresses
    (
            [LastUpdated], 
            [Data], 
            [AddressType], 
            [Phone], 
            [Fax], 
            [LeadID], 
            [Name], 
            [Line1], 
            [Line2], 
            [City], 
            [State], 
            [Zip], 
            [Country], 
            [DateCreated]
    )
    VALUES
    (
            getdate(), 
            @Data, 
            @AddressType, 
            @Phone, 
            @Fax, 
            @LeadID, 
            @Name, 
            @Line1, 
            @Line2, 
            @City, 
            @State, 
            @Zip, 
            @Country, 
            getdate()
    )
    SELECT scope_identity() as LeadAddressID


GO
/****** Object:  StoredProcedure [dbo].[InsertLeadContactSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertLeadContactSp]
	@LeadID [int],
	@Name [nvarchar](255),
	@Title [nvarchar](255),
	@Phone [nvarchar](255),
	@Email [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 8/26/2023 8:04:05 AM.
    
    INSERT INTO LeadContacts
    (
            [LeadID], 
            [Name], 
            [Title], 
            [Phone], 
            [Email], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    VALUES
    (
            @LeadID, 
            @Name, 
            @Title, 
            @Phone, 
            @Email, 
            @Data, 
            getdate(), 
            getdate()
    )
    SELECT scope_identity() as LeadContactID
GO
/****** Object:  StoredProcedure [dbo].[InsertLeadNoteSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertLeadNoteSp]
	@LeadNoteTypeID [int],
	@LeadID [int],
	@SalesRepresentativeID [int],
	@Notes [nvarchar](max),
	@FollowUpDate [datetime],
	@Data [nvarchar](max)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    INSERT INTO LeadNotes
    (
            [LeadNoteTypeID], 
            [LeadID], 
            [SalesRepresentativeID], 
            [Notes], 
            [FollowUpDate], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    VALUES
    (
            @LeadNoteTypeID, 
            @LeadID, 
            @SalesRepresentativeID, 
            @Notes, 
            @FollowUpDate, 
            @Data, 
            getdate(), 
            getdate()
    )
    SELECT scope_identity() as LeadNoteID
GO
/****** Object:  StoredProcedure [dbo].[InsertLeadNoteTypeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertLeadNoteTypeSp]
	@LeadNoteTypeName [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    INSERT INTO LeadNoteTypes
    (
            [LeadNoteTypeName], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    VALUES
    (
            @LeadNoteTypeName, 
            @Data, 
            getdate(), 
            getdate()
    )
    SELECT scope_identity() as LeadNoteTypeID
GO
/****** Object:  StoredProcedure [dbo].[InsertLeadRelationshipSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertLeadRelationshipSp]
	@LeadRelationshipTypeID [int],
	@LeadID [int],
	@RelatedLeadID [int],
	@Data [nvarchar](max)
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    INSERT INTO LeadRelationships
    (
            [LeadRelationshipTypeID], 
            [LeadID], 
            [RelatedLeadID], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    VALUES
    (
            @LeadRelationshipTypeID, 
            @LeadID, 
            @RelatedLeadID, 
            @Data, 
            getdate(), 
            getdate()
    )
    SELECT scope_identity() as LeadRelationshipID
GO
/****** Object:  StoredProcedure [dbo].[InsertLeadRelationshipTypeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertLeadRelationshipTypeSp]
	@LeadRelationshipTypeName [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    INSERT INTO LeadRelationshipTypes
    (
            [LeadRelationshipTypeName], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    VALUES
    (
            @LeadRelationshipTypeName, 
            @Data, 
            getdate(), 
            getdate()
    )
    SELECT scope_identity() as LeadRelationshipTypeID
GO
/****** Object:  StoredProcedure [dbo].[InsertLeadSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertLeadSp]
	@AccountID [int],
	@LeadSubStatusID [int],
	@FollowUpDate [datetime],
	@Company [nvarchar](255),
	@FirstName [nvarchar](255),
	@LastName [nvarchar](255),
	@Phone [nvarchar](255),
	@Email [nvarchar](255),
	@Address [nvarchar](255),
	@Address2 [nvarchar](255),
	@City [nvarchar](255),
	@State [nvarchar](255),
	@ZipCode [nvarchar](20),
	@SourceID [int],
	@LastContactedDate [datetime],
	@Priority [int],
	@LeadStatusID [int],
	@OpportunitySize [int],
	@Data [nvarchar](max),
	@SalesRepresentativeID [int],
	@ImportKey [nvarchar](255),
	@GeneratedDate [datetime],
	@CampaignID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    INSERT INTO Leads
    (
            [AccountID], 
            [LeadSubStatusID], 
            [FollowUpDate], 
            [Company], 
            [FirstName], 
            [LastName], 
            [Phone], 
            [Email], 
            [Address], 
            [Address2], 
            [City], 
            [State], 
            [ZipCode], 
            [SourceID], 
            [LastContactedDate], 
            [Priority], 
            [LeadStatusID], 
            [OpportunitySize], 
            [Data], 
            [DateCreated], 
            [LastUpdated], 
            [SalesRepresentativeID], 
            [ImportKey], 
            [GeneratedDate], 
            [CampaignID]
    )
    VALUES
    (
            @AccountID, 
            @LeadSubStatusID, 
            @FollowUpDate, 
            @Company, 
            @FirstName, 
            @LastName, 
            @Phone, 
            @Email, 
            @Address, 
            @Address2, 
            @City, 
            @State, 
            @ZipCode, 
            @SourceID, 
            @LastContactedDate, 
            @Priority, 
            @LeadStatusID, 
            @OpportunitySize, 
            @Data, 
            getdate(), 
            getdate(), 
            @SalesRepresentativeID, 
            @ImportKey, 
            @GeneratedDate, 
            @CampaignID
    )
    SELECT scope_identity() as LeadID
GO
/****** Object:  StoredProcedure [dbo].[InsertLeadStatusSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertLeadStatusSp]
	@StatusName [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    INSERT INTO LeadStatuses
    (
            [StatusName], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    VALUES
    (
            @StatusName, 
            @Data, 
            getdate(), 
            getdate()
    )
    SELECT scope_identity() as LeadStatusID
GO
/****** Object:  StoredProcedure [dbo].[InsertLeadSubStatusSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertLeadSubStatusSp]
	@LeadStatusID [int],
	@SubStatusName [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    INSERT INTO LeadSubStatuses
    (
            [LeadStatusID], 
            [SubStatusName], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    VALUES
    (
            @LeadStatusID, 
            @SubStatusName, 
            @Data, 
            getdate(), 
            getdate()
    )
    SELECT scope_identity() as LeadSubStatusID
GO
/****** Object:  StoredProcedure [dbo].[InsertLeadTagSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertLeadTagSp]
	@LeadID [int],
	@TagID [int],
	@Data [nvarchar](max)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    INSERT INTO LeadTags
    (
            [LeadID], 
            [TagID], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    VALUES
    (
            @LeadID, 
            @TagID, 
            @Data, 
            getdate(), 
            getdate()
    )
    SELECT scope_identity() as LeadTagID
GO
/****** Object:  StoredProcedure [dbo].[InsertMessageSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertMessageSp]
	@MessageText [nvarchar](max),
	@SentByPhone [nvarchar](255),
	@ReceivedByPhone [nvarchar](255),
	@Data [nvarchar](max),
	@IsDelivered [bit],
	@IsReceived [bit],
	@IsDismissed [bit]
AS

    -- Automatically generated on 6/29/2024 2:56:36 PM.
    
    INSERT INTO Messages
    (
            [MessageText], 
            [SentByPhone], 
            [ReceivedByPhone], 
            [DateCreated], 
            [LastUpdated], 
            [Data], 
            [IsDelivered], 
            [IsReceived], 
            [IsDismissed]
    )
    VALUES
    (
            @MessageText, 
            @SentByPhone, 
            @ReceivedByPhone, 
            getdate(), 
            getdate(), 
            @Data, 
            @IsDelivered, 
            @IsReceived, 
            @IsDismissed
    )
    SELECT scope_identity() as MessageID


GO
/****** Object:  StoredProcedure [dbo].[InsertPageLayoutSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertPageLayoutSp]
	@Url [nvarchar](512),
	@Handler [nvarchar](512),
	@IsEnabled [bit],
	@PageTitle [nvarchar](255),
	@SiteID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    INSERT INTO PageLayouts
    (
            [Url], 
            [Handler], 
            [IsEnabled], 
            [DateCreated], 
            [LastUpdated], 
            [PageTitle], 
            [SiteID]
    )
    VALUES
    (
            @Url, 
            @Handler, 
            @IsEnabled, 
            getdate(), 
            getdate(), 
            @PageTitle, 
            @SiteID
    )
    SELECT scope_identity() as PageLayoutID
GO
/****** Object:  StoredProcedure [dbo].[InsertPhoneNumberSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertPhoneNumberSp]
	@PhoneNumber [nvarchar](255),
	@PhoneType [nvarchar](255),
	@IsInternal [bit],
	@CallerName [nvarchar](255),
	@Country [nvarchar](255),
	@Data [nvarchar](max),
	@IsBlocked [bit],
	@IsSpam [bit]
AS

    -- Automatically generated on 9/9/2024 10:10:00 AM.
    
    INSERT INTO PhoneNumbers
    (
            [PhoneNumber], 
            [PhoneType], 
            [IsInternal], 
            [CallerName], 
            [Country], 
            [Data], 
            [DateCreated], 
            [LastUpdated], 
            [IsBlocked], 
            [IsSpam]
    )
    VALUES
    (
            @PhoneNumber, 
            @PhoneType, 
            @IsInternal, 
            @CallerName, 
            @Country, 
            @Data, 
            getdate(), 
            getdate(), 
            @IsBlocked, 
            @IsSpam
    )
    SELECT scope_identity() as PhoneNumberID


GO
/****** Object:  StoredProcedure [dbo].[InsertRawEmailAddressSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertRawEmailAddressSp]
	@RawEmailID [int],
	@IsFrom [bit],
	@Data [nvarchar](max),
	@EmailAddressID [int],
	@DomainID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    INSERT INTO RawEmailAddresses
    (
            [RawEmailID], 
            [IsFrom], 
            [Data], 
            [DateCreated], 
            [LastUpdated], 
            [EmailAddressID], 
            [DomainID]
    )
    VALUES
    (
            @RawEmailID, 
            @IsFrom, 
            @Data, 
            getdate(), 
            getdate(), 
            @EmailAddressID, 
            @DomainID
    )
    SELECT scope_identity() as RawEmailAddressID


GO
/****** Object:  StoredProcedure [dbo].[InsertRawEmailSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertRawEmailSp]
	@To [nvarchar](255),
	@From [nvarchar](255),
	@Subject [nvarchar](max),
	@BodyText [nvarchar](max),
	@BodyHtml [nvarchar](max),
	@IsProcessed [bit],
	@Label [nvarchar](255),
	@Data [nvarchar](max),
	@UserID [int],
	@ImportKey [nvarchar](255),
	@EmailDate [datetime],
	@ThreadID [nvarchar](255)
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    INSERT INTO RawEmails
    (
            [To], 
            [From], 
            [Subject], 
            [BodyText], 
            [BodyHtml], 
            [IsProcessed], 
            [Label], 
            [DateCreated], 
            [LastUpdated], 
            [Data], 
            [UserID], 
            [ImportKey], 
            [EmailDate], 
            [ThreadID]
    )
    VALUES
    (
            @To, 
            @From, 
            @Subject, 
            @BodyText, 
            @BodyHtml, 
            @IsProcessed, 
            @Label, 
            getdate(), 
            getdate(), 
            @Data, 
            @UserID, 
            @ImportKey, 
            @EmailDate, 
            @ThreadID
    )
    SELECT scope_identity() as RawEmailID


GO
/****** Object:  StoredProcedure [dbo].[InsertRoleSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertRoleSp]
	@RoleName [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 1/18/2023 6:29:15 AM.
    
    INSERT INTO Roles
    (
            [RoleName], 
            [DateCreated], 
            [LastUpdated], 
            [Data]
    )
    VALUES
    (
            @RoleName, 
            getdate(), 
            getdate(), 
            @Data
    )
    SELECT scope_identity() as RoleID
GO
/****** Object:  StoredProcedure [dbo].[InsertSalesRepresentativeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertSalesRepresentativeSp]
	@Notes [nvarchar](max),
	@Data [nvarchar](max),
	@SalesRepresentativeTypeID [int],
	@UserID [int]
AS

    -- Automatically generated on 8/23/2024 9:58:34 AM.
    
    INSERT INTO SalesRepresentatives
    (
            [Notes], 
            [LastUpdated], 
            [DateCreated], 
            [Data], 
            [SalesRepresentativeTypeID], 
            [UserID]
    )
    VALUES
    (
            @Notes, 
            getdate(), 
            getdate(), 
            @Data, 
            @SalesRepresentativeTypeID, 
            @UserID
    )
    SELECT scope_identity() as SalesRepresentativeID


GO
/****** Object:  StoredProcedure [dbo].[InsertSalesRepresentativeTypeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertSalesRepresentativeTypeSp]
	@SalesRepresentativeTypeName [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 3/20/2023 2:59:18 PM.
    
    INSERT INTO SalesRepresentativeTypes
    (
            [SalesRepresentativeTypeName], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    VALUES
    (
            @SalesRepresentativeTypeName, 
            @Data, 
            getdate(), 
            getdate()
    )
    SELECT scope_identity() as SalesRepresentativeTypeID
GO
/****** Object:  StoredProcedure [dbo].[InsertSourceSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertSourceSp]
	@SourceName [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    INSERT INTO Sources
    (
            [SourceName], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    VALUES
    (
            @SourceName, 
            @Data, 
            getdate(), 
            getdate()
    )
    SELECT scope_identity() as SourceID
GO
/****** Object:  StoredProcedure [dbo].[InsertTagSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertTagSp]
	@SalesRepresentativeID [int],
	@TagName [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    INSERT INTO Tags
    (
            [SalesRepresentativeID], 
            [TagName], 
            [Data], 
            [DateCreated], 
            [LastUpdated]
    )
    VALUES
    (
            @SalesRepresentativeID, 
            @TagName, 
            @Data, 
            getdate(), 
            getdate()
    )
    SELECT scope_identity() as TagID
GO
/****** Object:  StoredProcedure [dbo].[InsertUserRoleSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertUserRoleSp]
	@UserID [int],
	@RoleID [int],
	@Data [nvarchar](max)
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    INSERT INTO UserRoles
    (
            [UserID], 
            [RoleID], 
            [DateCreated], 
            [LastUpdated], 
            [Data]
    )
    VALUES
    (
            @UserID, 
            @RoleID, 
            getdate(), 
            getdate(), 
            @Data
    )
    SELECT scope_identity() as UserRoleID
GO
/****** Object:  StoredProcedure [dbo].[InsertUserSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertUserSp]
	@IsEnabled [bit],
	@Data [nvarchar](max),
	@Email [nvarchar](255),
	@Phone [nvarchar](255),
	@Password [nvarchar](max),
	@HasLoggedIn [bit],
	@LastLoginDate [datetime],
	@IsLockedOut [bit],
	@InvitationCode [nvarchar](255),
	@InvitationExpiration [datetime],
	@IsInvited [bit],
	@InvitedDate [datetime],
	@FirstName [nvarchar](255),
	@LastName [nvarchar](255)
AS

    -- Automatically generated on 8/23/2024 9:58:34 AM.
    
    INSERT INTO Users
    (
            [IsEnabled], 
            [DateCreated], 
            [LastUpdated], 
            [Data], 
            [Email], 
            [Phone], 
            [Password], 
            [HasLoggedIn], 
            [LastLoginDate], 
            [IsLockedOut], 
            [InvitationCode], 
            [InvitationExpiration], 
            [IsInvited], 
            [InvitedDate], 
            [FirstName], 
            [LastName]
    )
    VALUES
    (
            @IsEnabled, 
            getdate(), 
            getdate(), 
            @Data, 
            @Email, 
            @Phone, 
            @Password, 
            @HasLoggedIn, 
            @LastLoginDate, 
            @IsLockedOut, 
            @InvitationCode, 
            @InvitationExpiration, 
            @IsInvited, 
            @InvitedDate, 
            @FirstName, 
            @LastName
    )
    SELECT scope_identity() as UserID


GO
/****** Object:  StoredProcedure [dbo].[Lead_AssignLead_Sp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[Lead_AssignLead_Sp]
	@LeadID int,
	@SalesRepresentativeID int
AS


	update Leads set SalesRepresentativeID = @SalesRepresentativeID where LeadID = @LeadID


GO
/****** Object:  StoredProcedure [dbo].[Lead_GetDuplicate_Sp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[Lead_GetDuplicate_Sp]
	@Company [nvarchar](255),
	@FirstName [nvarchar](255),
	@LastName [nvarchar](255),
	@Phone [nvarchar](255),
	@Email [nvarchar](255),
	@Address [nvarchar](255)
AS



	select		* 
	from		Leads l with (nolock)
	where		(len(@Company) > 0 and l.Company = @Company) 
	or			(len(@Email) > 0 and l.Email = @Email)
	or			(len(@Phone) > 0 and l.Phone = @Phone)
	or			(len(@Address) > 0 and l.Address = @Address)
	or			(len(@FirstName) > 0 and len(@LastName) > 0 and l.FirstName = @FirstName and l.LastName = @LastName)


GO
/****** Object:  StoredProcedure [dbo].[Lead_UpdateFollowUpDate_Sp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[Lead_UpdateFollowUpDate_Sp]
	@LeadID int,
	@FollowUpDate datetime
AS


	update Leads set FollowUpDate = @FollowUpDate where LeadID = @LeadID


GO
/****** Object:  StoredProcedure [dbo].[LeadNotes_GetFollowUpsBySalesRepresentativeID_Sp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO



create PROCEDURE [dbo].[LeadNotes_GetFollowUpsBySalesRepresentativeID_Sp]
	@SalesRepresentativeID [int],
	@StartDate datetime,
	@StopDate datetime
AS

	exec dbo.LeadNotes_UpdateFollowUpsSalesRepresentativeID_Sp @SalesRepresentativeID
    
	select top 500 * from LeadNotes ln with (nolock)
	join Leads l with (nolock) on ln.LeadID = l.LeadID and ln.FollowUpDate = l.FollowUpDate
	join LeadTags lt with (nolock) on lt.LeadID = l.LeadID
	join Tags t on t.TagID = lt.TagID
	join LeadStatuses s on l.LeadStatusID= s.LeadStatusID
	where l.SalesRepresentativeID = @SalesRepresentativeID and t.TagName = 'Follow Up' and s.StatusName not in ('Lost', 'Defunct')
	order by ln.FollowUpDate




GO
/****** Object:  StoredProcedure [dbo].[LeadNotes_GetFollowUpsBySalesRepresentativeIDTagID_Sp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO




create PROCEDURE [dbo].[LeadNotes_GetFollowUpsBySalesRepresentativeIDTagID_Sp] 
	@SalesRepresentativeID [int],
	@TagID [int],
	@StartDate datetime,
	@StopDate datetime
AS
	exec dbo.LeadNotes_UpdateFollowUpsSalesRepresentativeID_Sp @SalesRepresentativeID
    
	select * from LeadNotes ln with (nolock)
	join Leads l with (nolock) on ln.LeadID = l.LeadID and ln.FollowUpDate = l.FollowUpDate
	join LeadTags lt with (nolock) on lt.LeadID = l.LeadID
	join Tags t on t.TagID = lt.TagID
	join LeadTags lt2 with (nolock) on lt2.LeadID = l.LeadID
	join LeadStatuses s on l.LeadSTatusID = s.LeadStatusID
	where l.SalesRepresentativeID = @SalesRepresentativeID and t.TagName = 'Follow Up'  and lt2.TagID = @TagID  and s.StatusName not in ('Lost', 'Defunct')
	order by ln.FollowUpDate

  


GO
/****** Object:  StoredProcedure [dbo].[LeadNotes_GetUpcomingAppointmentsByLeadID_Sp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[LeadNotes_GetUpcomingAppointmentsByLeadID_Sp] 
	@LeadID int

AS
		select ln.*, l.FirstName, l.LastName
		from LeadNotes ln with (nolock) 
		join LeadNoteTypes lnt with (nolock) 
		on lnt.LeadNoteTypeID = ln.LeadNoteTypeID 
		join Leads l with (nolock) 
		on l.LeadID = ln.LeadID
		where lnt.LeadNoteTypeName = 'Appointment Set'	
		and ln.FollowUpDate >= cast(getdate() as date) and ln.LeadID = @LeadID
	


GO
/****** Object:  StoredProcedure [dbo].[LeadNotes_UpdateFollowUpsSalesRepresentativeID_Sp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

create PROCEDURE [dbo].[LeadNotes_UpdateFollowUpsSalesRepresentativeID_Sp]
	@SalesRepresentativeID [int]
AS

 
	declare @TagID int
	select @TagID = TagID from Tags where TagName = 'Follow Up'

	insert into LeadTags (LeadID, TagID)
	--leads that should have Follow Up 
	select LeadID, @TagID from Leads l with (nolock)
	join LeadStatuses s with (nolock) on l.LeadStatusID = s.LeadStatusID
	where l.SalesRepresentativeID = @SalesRepresentativeID 
	and l.FollowUpDate <= getdate() 
	and s.StatusName in ('Contacted', 'In the Pipeline')
	and l.LeadID not in (
		select LeadID from LeadTags lt with (nolock) where lt.TagID = @TagID
	)

	delete from LeadTags where TagID = @TagID and LeadID in (
	--leads that should not have Follow Up 
	select LeadID from Leads l with (nolock)
	join LeadStatuses s with (nolock) on 
	l.LeadStatusID = s.LeadStatusID
	where l.SalesRepresentativeID = @SalesRepresentativeID and 
		(l.FollowUpDate > getdate() or 
		s.StatusName not in ('Contacted', 'In the Pipeline'))
	and  l.LeadID  in (
	select LeadID from LeadTags lt with (nolock) where  lt.TagID = @TagID)
	)


GO
/****** Object:  StoredProcedure [dbo].[Leads_GetByTagID_Sp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
create PROCEDURE [dbo].[Leads_GetByTagID_Sp]
	@TagID [int]
AS

    
    SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID 
GO
/****** Object:  StoredProcedure [dbo].[Leads_GetByTagIDLeadStatusID_Sp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
create PROCEDURE [dbo].[Leads_GetByTagIDLeadStatusID_Sp]
	@TagID [int],
	@LeadStatusID [int]
AS

    
    SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID and l.LeadStatusID = @LeadStatusID
GO
/****** Object:  StoredProcedure [dbo].[Leads_GetByTagIDLeadStatusIDSalesRepresentativeID_Sp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
create PROCEDURE [dbo].[Leads_GetByTagIDLeadStatusIDSalesRepresentativeID_Sp]
	@TagID [int],
	@LeadStatusID [int],
	@SalesRepresentativeID [int]
AS

    
    SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID and SalesRepresentativeID = @SalesRepresentativeID and l.LeadStatusID = @LeadStatusID
GO
/****** Object:  StoredProcedure [dbo].[Leads_GetByTagIDSalesRepresentativeID_Sp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
create  PROCEDURE [dbo].[Leads_GetByTagIDSalesRepresentativeID_Sp]
	@TagID [int],
	@SalesRepresentativeID [int]
AS

    
    SELECT l.*
    FROM Leads l WITH (NOLOCK) 
	JOIN LeadTags lt WITH (NOLOCK) 
	ON  l.LeadID = lt.LeadID
    WHERE lt.TagID = @TagID and SalesRepresentativeID = @SalesRepresentativeID
GO
/****** Object:  StoredProcedure [dbo].[Leads_GetUnassigned2_Sp_CountSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

CREATE PROCEDURE [dbo].[Leads_GetUnassigned2_Sp_CountSp]
	@Weight int,
	@Search [nvarchar](255)
AS


	SET NOCOUNT ON

	
	SELECT		COUNT(*) as Total
	FROM		(
				SELECT * 
    FROM Leads WITH (NOLOCK) 
    WHERE [SalesRepresentativeID] is null  and DateCreated < dateadd(second, -10 * @Weight, getdate()) and Priority <= 2
				) sub
	where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%' 

		
GO
/****** Object:  StoredProcedure [dbo].[Leads_GetUnassigned2_Sp_PagingSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE PROCEDURE [dbo].[Leads_GetUnassigned2_Sp_PagingSp]
	@Weight int,
	@Search [nvarchar](255),
	@SortColumn [nvarchar](255),
	@SortAscending [bit],
	@SkipRows [int],
	@NumRows [int]
AS


	SET NOCOUNT ON

	DECLARE	@FirstRow INT,
	@LastRow INT

	set @FirstRow = @SkipRows + 1;
	set @LastRow = @SkipRows + @NumRows;
	
	with SearchTable as
	(
	
		SELECT		ROW_NUMBER() OVER (
					ORDER BY
					
			
						case when @SortColumn = 'LeadID' and @SortAscending = 1 then 
							[LeadID]
						end ASC,
						case when @SortColumn = 'LeadID' and @SortAscending = 0 then 
							[LeadID]
						end DESC,
			
						case when @SortColumn = 'Company' and @SortAscending = 1 then 
							[Company]
						end ASC,
						case when @SortColumn = 'Company' and @SortAscending = 0 then 
							[Company]
						end DESC,
			
						case when @SortColumn = 'FirstName' and @SortAscending = 1 then 
							[FirstName]
						end ASC,
						case when @SortColumn = 'FirstName' and @SortAscending = 0 then 
							[FirstName]
						end DESC,
			
						case when @SortColumn = 'LastName' and @SortAscending = 1 then 
							[LastName]
						end ASC,
						case when @SortColumn = 'LastName' and @SortAscending = 0 then 
							[LastName]
						end DESC,
								
						case when @SortColumn = 'Phone' and @SortAscending = 1 then 
							[Phone]
						end ASC,
						case when @SortColumn = 'Phone' and @SortAscending = 0 then 
							[Phone]
						end DESC,
			
						case when @SortColumn = 'Email' and @SortAscending = 1 then 
							[Email]
						end ASC,
						case when @SortColumn = 'Email' and @SortAscending = 0 then 
							[Email]
						end DESC,
			
						case when @SortColumn = 'Address' and @SortAscending = 1 then 
							[Address]
						end ASC,
						case when @SortColumn = 'Address' and @SortAscending = 0 then 
							[Address]
						end DESC,
			
						case when @SortColumn = 'Address2' and @SortAscending = 1 then 
							[Address2]
						end ASC,
						case when @SortColumn = 'Address2' and @SortAscending = 0 then 
							[Address2]
						end DESC,
			
						case when @SortColumn = 'City' and @SortAscending = 1 then 
							[City]
						end ASC,
						case when @SortColumn = 'City' and @SortAscending = 0 then 
							[City]
						end DESC,
			
						case when @SortColumn = 'State' and @SortAscending = 1 then 
							[State]
						end ASC,
						case when @SortColumn = 'State' and @SortAscending = 0 then 
							[State]
						end DESC,
			
						case when @SortColumn = 'ZipCode' and @SortAscending = 1 then 
							[ZipCode]
						end ASC,
						case when @SortColumn = 'ZipCode' and @SortAscending = 0 then 
							[ZipCode]
						end DESC,
			
						case when @SortColumn = 'SourceID' and @SortAscending = 1 then 
							[SourceID]
						end ASC,
						case when @SortColumn = 'SourceID' and @SortAscending = 0 then 
							[SourceID]
						end DESC,
						
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 1 then 
							[LastContactedDate]
						end ASC,
						case when @SortColumn = 'LastContactedDate' and @SortAscending = 0 then 
							[LastContactedDate]
						end DESC,
			
						case when @SortColumn = 'Priority' and @SortAscending = 1 then 
							[Priority]
						end ASC,
						case when @SortColumn = 'Priority' and @SortAscending = 0 then 
							[Priority]
						end DESC,
						
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 1 then 
							[OpportunitySize]
						end ASC,
						case when @SortColumn = 'OpportunitySize' and @SortAscending = 0 then 
							[OpportunitySize]
						end DESC,
			
						case when @SortColumn = 'Data' and @SortAscending = 1 then 
							[Data]
						end ASC,
						case when @SortColumn = 'Data' and @SortAscending = 0 then 
							[Data]
						end DESC,
			
						case when @SortColumn = 'DateCreated' and @SortAscending = 1 then 
							[DateCreated]
						end ASC,
						case when @SortColumn = 'DateCreated' and @SortAscending = 0 then 
							[DateCreated]
						end DESC,
			
						case when @SortColumn = 'LastUpdated' and @SortAscending = 1 then 
							[LastUpdated]
						end ASC,
						case when @SortColumn = 'LastUpdated' and @SortAscending = 0 then 
							[LastUpdated]
						end DESC,
			
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 1 then 
							[SalesRepresentativeID]
						end ASC,
						case when @SortColumn = 'SalesRepresentativeID' and @SortAscending = 0 then 
							[SalesRepresentativeID]
						end DESC,
			
						case when @SortColumn = 'ImportKey' and @SortAscending = 1 then 
							[ImportKey]
						end ASC,
						case when @SortColumn = 'ImportKey' and @SortAscending = 0 then 
							[ImportKey]
						end DESC,
			
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 1 then 
							[GeneratedDate]
						end ASC,
						case when @SortColumn = 'GeneratedDate' and @SortAscending = 0 then 
							[GeneratedDate]
						end DESC,
			
						case when @SortColumn = 'CampaignID' and @SortAscending = 1 then 
							[CampaignID]
						end ASC,
						case when @SortColumn = 'CampaignID' and @SortAscending = 0 then 
							[CampaignID]
						end DESC
			
					) AS RowNumber,
					*
		FROM		(
	
	SELECT  *
    FROM Leads WITH (NOLOCK) 
    WHERE [SalesRepresentativeID] is null and DateCreated < dateadd(second, -10 * @Weight, getdate()) and Priority <= 2

					) sub
		where		
					[LeadID] like '%' + @Search + '%' or
					[Company] like '%' + @Search + '%' or
					[FirstName] like '%' + @Search + '%' or
					[LastName] like '%' + @Search + '%' or
					[Phone] like '%' + @Search + '%' or
					[Email] like '%' + @Search + '%'

	)
			
	SELECT	*
	FROM	SearchTable
	WHERE	RowNumber BETWEEN @FirstRow AND @LastRow
	ORDER BY RowNumber ASC
	OPTION (recompile);
GO
/****** Object:  StoredProcedure [dbo].[MarkAuthorizationAsEncryptedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[MarkAuthorizationAsEncryptedSp] (
	@AuthorizationID int
)
AS

    UPDATE Authorizations SET IsEncrypted = 1 ,
    LastUpdated = getdate()
    WHERE AuthorizationID = @AuthorizationID	

GO
/****** Object:  StoredProcedure [dbo].[MarkAuthorizationAsExpiredSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[MarkAuthorizationAsExpiredSp] (
	@AuthorizationID int
)
AS

    UPDATE Authorizations SET IsExpired = 1 ,
    LastUpdated = getdate()
    WHERE AuthorizationID = @AuthorizationID	

GO
/****** Object:  StoredProcedure [dbo].[MarkAuthorizationAsNotEncryptedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[MarkAuthorizationAsNotEncryptedSp] (
	@AuthorizationID int
)
AS

    UPDATE Authorizations SET IsEncrypted = 0 ,
    LastUpdated = getdate()
    WHERE AuthorizationID = @AuthorizationID	

GO
/****** Object:  StoredProcedure [dbo].[MarkAuthorizationAsNotExpiredSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[MarkAuthorizationAsNotExpiredSp] (
	@AuthorizationID int
)
AS

    UPDATE Authorizations SET IsExpired = 0 ,
    LastUpdated = getdate()
    WHERE AuthorizationID = @AuthorizationID	

GO
/****** Object:  StoredProcedure [dbo].[MarkAuthorizationAsNotRevokedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[MarkAuthorizationAsNotRevokedSp] (
	@AuthorizationID int
)
AS

    UPDATE Authorizations SET IsRevoked = 0 ,
    LastUpdated = getdate()
    WHERE AuthorizationID = @AuthorizationID	

GO
/****** Object:  StoredProcedure [dbo].[MarkAuthorizationAsRevokedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[MarkAuthorizationAsRevokedSp] (
	@AuthorizationID int
)
AS

    UPDATE Authorizations SET IsRevoked = 1 ,
    LastUpdated = getdate()
    WHERE AuthorizationID = @AuthorizationID	

GO
/****** Object:  StoredProcedure [dbo].[MarkCallAsConferenceSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkCallAsConferenceSp] (
	@CallID int
)
AS

    UPDATE Calls SET IsConference = 1 ,
    LastUpdated = getdate()
    WHERE CallID = @CallID	



GO
/****** Object:  StoredProcedure [dbo].[MarkCallAsEmptyTranscriptionSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkCallAsEmptyTranscriptionSp] (
	@CallID int
)
AS

    UPDATE Calls SET IsEmptyTranscription = 1 ,
    LastUpdated = getdate()
    WHERE CallID = @CallID	



GO
/****** Object:  StoredProcedure [dbo].[MarkCallAsIncomingSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkCallAsIncomingSp] (
	@CallID int
)
AS

    UPDATE Calls SET IsIncoming = 1 ,
    LastUpdated = getdate()
    WHERE CallID = @CallID	



GO
/****** Object:  StoredProcedure [dbo].[MarkCallAsNotConferenceSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkCallAsNotConferenceSp] (
	@CallID int
)
AS

    UPDATE Calls SET IsConference = 0 ,
    LastUpdated = getdate()
    WHERE CallID = @CallID	



GO
/****** Object:  StoredProcedure [dbo].[MarkCallAsNotEmptyTranscriptionSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkCallAsNotEmptyTranscriptionSp] (
	@CallID int
)
AS

    UPDATE Calls SET IsEmptyTranscription = 0 ,
    LastUpdated = getdate()
    WHERE CallID = @CallID	



GO
/****** Object:  StoredProcedure [dbo].[MarkCallAsNotIncomingSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkCallAsNotIncomingSp] (
	@CallID int
)
AS

    UPDATE Calls SET IsIncoming = 0 ,
    LastUpdated = getdate()
    WHERE CallID = @CallID	



GO
/****** Object:  StoredProcedure [dbo].[MarkCallAsNotRecordedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkCallAsNotRecordedSp] (
	@CallID int
)
AS

    UPDATE Calls SET IsRecorded = 0 ,
    LastUpdated = getdate()
    WHERE CallID = @CallID	



GO
/****** Object:  StoredProcedure [dbo].[MarkCallAsNotStreamedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkCallAsNotStreamedSp] (
	@CallID int
)
AS

    UPDATE Calls SET IsStreamed = 0 ,
    LastUpdated = getdate()
    WHERE CallID = @CallID	



GO
/****** Object:  StoredProcedure [dbo].[MarkCallAsNotTranscribedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkCallAsNotTranscribedSp] (
	@CallID int
)
AS

    UPDATE Calls SET IsTranscribed = 0 ,
    LastUpdated = getdate()
    WHERE CallID = @CallID	



GO
/****** Object:  StoredProcedure [dbo].[MarkCallAsRecordedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkCallAsRecordedSp] (
	@CallID int
)
AS

    UPDATE Calls SET IsRecorded = 1 ,
    LastUpdated = getdate()
    WHERE CallID = @CallID	



GO
/****** Object:  StoredProcedure [dbo].[MarkCallAsStreamedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkCallAsStreamedSp] (
	@CallID int
)
AS

    UPDATE Calls SET IsStreamed = 1 ,
    LastUpdated = getdate()
    WHERE CallID = @CallID	



GO
/****** Object:  StoredProcedure [dbo].[MarkCallAsTranscribedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkCallAsTranscribedSp] (
	@CallID int
)
AS

    UPDATE Calls SET IsTranscribed = 1 ,
    LastUpdated = getdate()
    WHERE CallID = @CallID	



GO
/****** Object:  StoredProcedure [dbo].[MarkEmailAddressAsBlockedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkEmailAddressAsBlockedSp] (
	@EmailAddressID int
)
AS

    UPDATE EmailAddresses SET IsBlocked = 1 ,
    LastUpdated = getdate()
    WHERE EmailAddressID = @EmailAddressID	



GO
/****** Object:  StoredProcedure [dbo].[MarkEmailAddressAsInternalSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkEmailAddressAsInternalSp] (
	@EmailAddressID int
)
AS

    UPDATE EmailAddresses SET IsInternal = 1 ,
    LastUpdated = getdate()
    WHERE EmailAddressID = @EmailAddressID	



GO
/****** Object:  StoredProcedure [dbo].[MarkEmailAddressAsNotBlockedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkEmailAddressAsNotBlockedSp] (
	@EmailAddressID int
)
AS

    UPDATE EmailAddresses SET IsBlocked = 0 ,
    LastUpdated = getdate()
    WHERE EmailAddressID = @EmailAddressID	



GO
/****** Object:  StoredProcedure [dbo].[MarkEmailAddressAsNotInternalSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkEmailAddressAsNotInternalSp] (
	@EmailAddressID int
)
AS

    UPDATE EmailAddresses SET IsInternal = 0 ,
    LastUpdated = getdate()
    WHERE EmailAddressID = @EmailAddressID	



GO
/****** Object:  StoredProcedure [dbo].[MarkEmailHistoryAsNotPendingSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[MarkEmailHistoryAsNotPendingSp] (
	@EmailHistoryID int
)
AS

    UPDATE EmailHistories SET IsPending = 0 ,
    LastUpdated = getdate()
    WHERE EmailHistoryID = @EmailHistoryID	

GO
/****** Object:  StoredProcedure [dbo].[MarkEmailHistoryAsNotSentSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[MarkEmailHistoryAsNotSentSp] (
	@EmailHistoryID int
)
AS

    UPDATE EmailHistories SET IsSent = 0 ,
    LastUpdated = getdate()
    WHERE EmailHistoryID = @EmailHistoryID	

GO
/****** Object:  StoredProcedure [dbo].[MarkEmailHistoryAsPendingSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[MarkEmailHistoryAsPendingSp] (
	@EmailHistoryID int
)
AS

    UPDATE EmailHistories SET IsPending = 1 ,
    LastUpdated = getdate()
    WHERE EmailHistoryID = @EmailHistoryID	

GO
/****** Object:  StoredProcedure [dbo].[MarkEmailHistoryAsSentSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[MarkEmailHistoryAsSentSp] (
	@EmailHistoryID int
)
AS

    UPDATE EmailHistories SET IsSent = 1 ,
    LastUpdated = getdate()
    WHERE EmailHistoryID = @EmailHistoryID	

GO
/****** Object:  StoredProcedure [dbo].[MarkFeatureAsEnabledSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkFeatureAsEnabledSp] (
	@FeatureID int
)
AS

    UPDATE Features SET IsEnabled = 1 ,
    LastUpdated = getdate()
    WHERE FeatureID = @FeatureID	



GO
/****** Object:  StoredProcedure [dbo].[MarkFeatureAsNotEnabledSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkFeatureAsNotEnabledSp] (
	@FeatureID int
)
AS

    UPDATE Features SET IsEnabled = 0 ,
    LastUpdated = getdate()
    WHERE FeatureID = @FeatureID	



GO
/****** Object:  StoredProcedure [dbo].[MarkFileAsDeletedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkFileAsDeletedSp] (
	@FileID int
)
AS

    UPDATE Files SET IsDeleted = 1 ,
    LastUpdated = getdate()
    WHERE FileID = @FileID	



GO
/****** Object:  StoredProcedure [dbo].[MarkFileAsNotDeletedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkFileAsNotDeletedSp] (
	@FileID int
)
AS

    UPDATE Files SET IsDeleted = 0 ,
    LastUpdated = getdate()
    WHERE FileID = @FileID	



GO
/****** Object:  StoredProcedure [dbo].[MarkMessageAsDeliveredSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkMessageAsDeliveredSp] (
	@MessageID int
)
AS

    UPDATE Messages SET IsDelivered = 1 ,
    LastUpdated = getdate()
    WHERE MessageID = @MessageID	



GO
/****** Object:  StoredProcedure [dbo].[MarkMessageAsNotDeliveredSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkMessageAsNotDeliveredSp] (
	@MessageID int
)
AS

    UPDATE Messages SET IsDelivered = 0 ,
    LastUpdated = getdate()
    WHERE MessageID = @MessageID	



GO
/****** Object:  StoredProcedure [dbo].[MarkMessageAsNotReceivedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkMessageAsNotReceivedSp] (
	@MessageID int
)
AS

    UPDATE Messages SET IsReceived = 0 ,
    LastUpdated = getdate()
    WHERE MessageID = @MessageID	



GO
/****** Object:  StoredProcedure [dbo].[MarkMessageAsNotsedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkMessageAsNotsedSp] (
	@MessageID int
)
AS

    UPDATE Messages SET IsDismissed = 0 ,
    LastUpdated = getdate()
    WHERE MessageID = @MessageID	



GO
/****** Object:  StoredProcedure [dbo].[MarkMessageAsReceivedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkMessageAsReceivedSp] (
	@MessageID int
)
AS

    UPDATE Messages SET IsReceived = 1 ,
    LastUpdated = getdate()
    WHERE MessageID = @MessageID	



GO
/****** Object:  StoredProcedure [dbo].[MarkMessageAssedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkMessageAssedSp] (
	@MessageID int
)
AS

    UPDATE Messages SET IsDismissed = 1 ,
    LastUpdated = getdate()
    WHERE MessageID = @MessageID	



GO
/****** Object:  StoredProcedure [dbo].[MarkPageLayoutAsEnabledSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[MarkPageLayoutAsEnabledSp] (
	@PageLayoutID int
)
AS

    UPDATE PageLayouts SET IsEnabled = 1 ,
    LastUpdated = getdate()
    WHERE PageLayoutID = @PageLayoutID	

GO
/****** Object:  StoredProcedure [dbo].[MarkPageLayoutAsNotEnabledSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[MarkPageLayoutAsNotEnabledSp] (
	@PageLayoutID int
)
AS

    UPDATE PageLayouts SET IsEnabled = 0 ,
    LastUpdated = getdate()
    WHERE PageLayoutID = @PageLayoutID	

GO
/****** Object:  StoredProcedure [dbo].[MarkPhoneNumberAsBlockedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkPhoneNumberAsBlockedSp] (
	@PhoneNumberID int
)
AS

    UPDATE PhoneNumbers SET IsBlocked = 1 ,
    LastUpdated = getdate()
    WHERE PhoneNumberID = @PhoneNumberID	



GO
/****** Object:  StoredProcedure [dbo].[MarkPhoneNumberAsInternalSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkPhoneNumberAsInternalSp] (
	@PhoneNumberID int
)
AS

    UPDATE PhoneNumbers SET IsInternal = 1 ,
    LastUpdated = getdate()
    WHERE PhoneNumberID = @PhoneNumberID	



GO
/****** Object:  StoredProcedure [dbo].[MarkPhoneNumberAsNotBlockedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkPhoneNumberAsNotBlockedSp] (
	@PhoneNumberID int
)
AS

    UPDATE PhoneNumbers SET IsBlocked = 0 ,
    LastUpdated = getdate()
    WHERE PhoneNumberID = @PhoneNumberID	



GO
/****** Object:  StoredProcedure [dbo].[MarkPhoneNumberAsNotInternalSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkPhoneNumberAsNotInternalSp] (
	@PhoneNumberID int
)
AS

    UPDATE PhoneNumbers SET IsInternal = 0 ,
    LastUpdated = getdate()
    WHERE PhoneNumberID = @PhoneNumberID	



GO
/****** Object:  StoredProcedure [dbo].[MarkPhoneNumberAsNotSpamSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkPhoneNumberAsNotSpamSp] (
	@PhoneNumberID int
)
AS

    UPDATE PhoneNumbers SET IsSpam = 0 ,
    LastUpdated = getdate()
    WHERE PhoneNumberID = @PhoneNumberID	



GO
/****** Object:  StoredProcedure [dbo].[MarkPhoneNumberAsSpamSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkPhoneNumberAsSpamSp] (
	@PhoneNumberID int
)
AS

    UPDATE PhoneNumbers SET IsSpam = 1 ,
    LastUpdated = getdate()
    WHERE PhoneNumberID = @PhoneNumberID	



GO
/****** Object:  StoredProcedure [dbo].[MarkRawEmailAddressAsFromSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkRawEmailAddressAsFromSp] (
	@RawEmailAddressID int
)
AS

    UPDATE RawEmailAddresses SET IsFrom = 1 ,
    LastUpdated = getdate()
    WHERE RawEmailAddressID = @RawEmailAddressID	



GO
/****** Object:  StoredProcedure [dbo].[MarkRawEmailAddressAsNotFromSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkRawEmailAddressAsNotFromSp] (
	@RawEmailAddressID int
)
AS

    UPDATE RawEmailAddresses SET IsFrom = 0 ,
    LastUpdated = getdate()
    WHERE RawEmailAddressID = @RawEmailAddressID	



GO
/****** Object:  StoredProcedure [dbo].[MarkRawEmailAsNotProcessedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkRawEmailAsNotProcessedSp] (
	@RawEmailID int
)
AS

    UPDATE RawEmails SET IsProcessed = 0 ,
    LastUpdated = getdate()
    WHERE RawEmailID = @RawEmailID	



GO
/****** Object:  StoredProcedure [dbo].[MarkRawEmailAsProcessedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[MarkRawEmailAsProcessedSp] (
	@RawEmailID int
)
AS

    UPDATE RawEmails SET IsProcessed = 1 ,
    LastUpdated = getdate()
    WHERE RawEmailID = @RawEmailID	



GO
/****** Object:  StoredProcedure [dbo].[MarkUserAsEnabledSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[MarkUserAsEnabledSp] (
	@UserID int
)
AS

    UPDATE Users SET IsEnabled = 1 ,
    LastUpdated = getdate()
    WHERE UserID = @UserID	

GO
/****** Object:  StoredProcedure [dbo].[MarkUserAsHasLoggedInSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[MarkUserAsHasLoggedInSp] (
	@UserID int
)
AS

    UPDATE Users SET HasLoggedIn = 1 ,
    LastUpdated = getdate()
    WHERE UserID = @UserID	

GO
/****** Object:  StoredProcedure [dbo].[MarkUserAsInvitedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[MarkUserAsInvitedSp] (
	@UserID int
)
AS

    UPDATE Users SET IsInvited = 1 ,
    LastUpdated = getdate()
    WHERE UserID = @UserID	

GO
/****** Object:  StoredProcedure [dbo].[MarkUserAsLockedOutSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[MarkUserAsLockedOutSp] (
	@UserID int
)
AS

    UPDATE Users SET IsLockedOut = 1 ,
    LastUpdated = getdate()
    WHERE UserID = @UserID	

GO
/****** Object:  StoredProcedure [dbo].[MarkUserAsNotEnabledSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[MarkUserAsNotEnabledSp] (
	@UserID int
)
AS

    UPDATE Users SET IsEnabled = 0 ,
    LastUpdated = getdate()
    WHERE UserID = @UserID	

GO
/****** Object:  StoredProcedure [dbo].[MarkUserAsNotHasLoggedInSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[MarkUserAsNotHasLoggedInSp] (
	@UserID int
)
AS

    UPDATE Users SET HasLoggedIn = 0 ,
    LastUpdated = getdate()
    WHERE UserID = @UserID	

GO
/****** Object:  StoredProcedure [dbo].[MarkUserAsNotInvitedSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[MarkUserAsNotInvitedSp] (
	@UserID int
)
AS

    UPDATE Users SET IsInvited = 0 ,
    LastUpdated = getdate()
    WHERE UserID = @UserID	

GO
/****** Object:  StoredProcedure [dbo].[MarkUserAsNotLockedOutSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[MarkUserAsNotLockedOutSp] (
	@UserID int
)
AS

    UPDATE Users SET IsLockedOut = 0 ,
    LastUpdated = getdate()
    WHERE UserID = @UserID	

GO
/****** Object:  StoredProcedure [dbo].[Messages_GetByPhone_Sp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO

create PROCEDURE [dbo].[Messages_GetByPhone_Sp]
	@Phone nvarchar(255)
AS


	select		top 50 * 
	from		Messages m with (nolock)
	where		m.SentByPhone = @Phone or m.ReceivedByPhone = @Phone 
	order by	m.MessageID desc 


GO
/****** Object:  StoredProcedure [dbo].[RemoveAgentSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[RemoveAgentSp]
	@AgentID [int]
AS

    -- Automatically generated on 8/14/2024 10:50:19 AM.
    
    DELETE FROM Agents WHERE AgentID = @AgentID


GO
/****** Object:  StoredProcedure [dbo].[RemoveAgentTypeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[RemoveAgentTypeSp]
	@AgentTypeID [int]
AS

    -- Automatically generated on 10/9/2024 4:50:41 PM.
    
    DELETE FROM AgentTypes WHERE AgentTypeID = @AgentTypeID


GO
/****** Object:  StoredProcedure [dbo].[RemoveAreaCodeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveAreaCodeSp]
	@AreaCodeID [int]
AS

    -- Automatically generated on 8/26/2023 8:04:05 AM.
    
    DELETE FROM AreaCodes WHERE AreaCodeID = @AreaCodeID
GO
/****** Object:  StoredProcedure [dbo].[RemoveAuthorizationSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveAuthorizationSp]
	@AuthorizationID [int]
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    DELETE FROM Authorizations WHERE AuthorizationID = @AuthorizationID
GO
/****** Object:  StoredProcedure [dbo].[RemoveBlockedEmailSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveBlockedEmailSp]
	@BlockedEmailID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    DELETE FROM BlockedEmails WHERE BlockedEmailID = @BlockedEmailID
GO
/****** Object:  StoredProcedure [dbo].[RemoveCallSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[RemoveCallSp]
	@CallID [int]
AS

    -- Automatically generated on 7/1/2024 7:51:00 AM.
    
    DELETE FROM Calls WHERE CallID = @CallID


GO
/****** Object:  StoredProcedure [dbo].[RemoveCampaignSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveCampaignSp]
	@CampaignID [int]
AS

    -- Automatically generated on 3/15/2023 4:58:59 PM.
    
    DELETE FROM Campaigns WHERE CampaignID = @CampaignID
GO
/****** Object:  StoredProcedure [dbo].[RemoveContentSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveContentSp]
	@ContentID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    DELETE FROM Contents WHERE ContentID = @ContentID
GO
/****** Object:  StoredProcedure [dbo].[RemoveContentTypeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[RemoveContentTypeSp]
	@ContentTypeID [int]
AS

    -- Automatically generated on 8/1/2024 3:23:28 PM.
    
    DELETE FROM ContentTypes WHERE ContentTypeID = @ContentTypeID


GO
/****** Object:  StoredProcedure [dbo].[RemoveDomainSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[RemoveDomainSp]
	@DomainID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    DELETE FROM Domains WHERE DomainID = @DomainID


GO
/****** Object:  StoredProcedure [dbo].[RemoveEmailAddressSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[RemoveEmailAddressSp]
	@EmailAddressID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    DELETE FROM EmailAddresses WHERE EmailAddressID = @EmailAddressID


GO
/****** Object:  StoredProcedure [dbo].[RemoveEmailHistorySp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveEmailHistorySp]
	@EmailHistoryID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    DELETE FROM EmailHistories WHERE EmailHistoryID = @EmailHistoryID
GO
/****** Object:  StoredProcedure [dbo].[RemoveEmailTemplateSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveEmailTemplateSp]
	@EmailTemplateID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    DELETE FROM EmailTemplates WHERE EmailTemplateID = @EmailTemplateID
GO
/****** Object:  StoredProcedure [dbo].[RemoveFeatureSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[RemoveFeatureSp]
	@FeatureID [int]
AS

    -- Automatically generated on 6/29/2024 7:45:32 AM.
    
    DELETE FROM Features WHERE FeatureID = @FeatureID


GO
/****** Object:  StoredProcedure [dbo].[RemoveFileSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[RemoveFileSp]
	@FileID [int]
AS

    -- Automatically generated on 7/18/2024 5:57:46 PM.
    
    DELETE FROM Files WHERE FileID = @FileID


GO
/****** Object:  StoredProcedure [dbo].[RemoveFileTypeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[RemoveFileTypeSp]
	@FileTypeID [int]
AS

    -- Automatically generated on 7/17/2024 10:51:48 AM.
    
    DELETE FROM FileTypes WHERE FileTypeID = @FileTypeID


GO
/****** Object:  StoredProcedure [dbo].[RemoveLeadAddressSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[RemoveLeadAddressSp]
	@LeadAddressID [int]
AS

    -- Automatically generated on 7/25/2024 2:20:08 PM.
    
    DELETE FROM LeadAddresses WHERE LeadAddressID = @LeadAddressID


GO
/****** Object:  StoredProcedure [dbo].[RemoveLeadContactSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveLeadContactSp]
	@LeadContactID [int]
AS

    -- Automatically generated on 8/26/2023 8:04:05 AM.
    
    DELETE FROM LeadContacts WHERE LeadContactID = @LeadContactID
GO
/****** Object:  StoredProcedure [dbo].[RemoveLeadNoteSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveLeadNoteSp]
	@LeadNoteID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    DELETE FROM LeadNotes WHERE LeadNoteID = @LeadNoteID
GO
/****** Object:  StoredProcedure [dbo].[RemoveLeadNoteTypeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveLeadNoteTypeSp]
	@LeadNoteTypeID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    DELETE FROM LeadNoteTypes WHERE LeadNoteTypeID = @LeadNoteTypeID
GO
/****** Object:  StoredProcedure [dbo].[RemoveLeadRelationshipSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveLeadRelationshipSp]
	@LeadRelationshipID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    DELETE FROM LeadRelationships WHERE LeadRelationshipID = @LeadRelationshipID
GO
/****** Object:  StoredProcedure [dbo].[RemoveLeadRelationshipTypeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveLeadRelationshipTypeSp]
	@LeadRelationshipTypeID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    DELETE FROM LeadRelationshipTypes WHERE LeadRelationshipTypeID = @LeadRelationshipTypeID
GO
/****** Object:  StoredProcedure [dbo].[RemoveLeadSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveLeadSp]
	@LeadID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    DELETE FROM Leads WHERE LeadID = @LeadID
GO
/****** Object:  StoredProcedure [dbo].[RemoveLeadStatusSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveLeadStatusSp]
	@LeadStatusID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    DELETE FROM LeadStatuses WHERE LeadStatusID = @LeadStatusID
GO
/****** Object:  StoredProcedure [dbo].[RemoveLeadSubStatusSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveLeadSubStatusSp]
	@LeadSubStatusID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    DELETE FROM LeadSubStatuses WHERE LeadSubStatusID = @LeadSubStatusID
GO
/****** Object:  StoredProcedure [dbo].[RemoveLeadTagSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveLeadTagSp]
	@LeadTagID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    DELETE FROM LeadTags WHERE LeadTagID = @LeadTagID
GO
/****** Object:  StoredProcedure [dbo].[RemoveMessageSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[RemoveMessageSp]
	@MessageID [int]
AS

    -- Automatically generated on 6/29/2024 2:56:36 PM.
    
    DELETE FROM Messages WHERE MessageID = @MessageID


GO
/****** Object:  StoredProcedure [dbo].[RemovePageLayoutSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemovePageLayoutSp]
	@PageLayoutID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    DELETE FROM PageLayouts WHERE PageLayoutID = @PageLayoutID
GO
/****** Object:  StoredProcedure [dbo].[RemovePhoneNumberSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[RemovePhoneNumberSp]
	@PhoneNumberID [int]
AS

    -- Automatically generated on 9/9/2024 10:10:00 AM.
    
    DELETE FROM PhoneNumbers WHERE PhoneNumberID = @PhoneNumberID


GO
/****** Object:  StoredProcedure [dbo].[RemoveRawEmailAddressSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[RemoveRawEmailAddressSp]
	@RawEmailAddressID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    DELETE FROM RawEmailAddresses WHERE RawEmailAddressID = @RawEmailAddressID


GO
/****** Object:  StoredProcedure [dbo].[RemoveRawEmailSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[RemoveRawEmailSp]
	@RawEmailID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    DELETE FROM RawEmails WHERE RawEmailID = @RawEmailID


GO
/****** Object:  StoredProcedure [dbo].[RemoveRoleSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveRoleSp]
	@RoleID [int]
AS

    -- Automatically generated on 1/18/2023 6:29:15 AM.
    
    DELETE FROM Roles WHERE RoleID = @RoleID
GO
/****** Object:  StoredProcedure [dbo].[RemoveSalesRepresentativeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveSalesRepresentativeSp]
	@SalesRepresentativeID [int]
AS

    -- Automatically generated on 3/20/2023 2:59:18 PM.
    
    DELETE FROM SalesRepresentatives WHERE SalesRepresentativeID = @SalesRepresentativeID
GO
/****** Object:  StoredProcedure [dbo].[RemoveSalesRepresentativeTypeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveSalesRepresentativeTypeSp]
	@SalesRepresentativeTypeID [int]
AS

    -- Automatically generated on 3/20/2023 2:59:18 PM.
    
    DELETE FROM SalesRepresentativeTypes WHERE SalesRepresentativeTypeID = @SalesRepresentativeTypeID
GO
/****** Object:  StoredProcedure [dbo].[RemoveSourceSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveSourceSp]
	@SourceID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    DELETE FROM Sources WHERE SourceID = @SourceID
GO
/****** Object:  StoredProcedure [dbo].[RemoveTagSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveTagSp]
	@TagID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    DELETE FROM Tags WHERE TagID = @TagID
GO
/****** Object:  StoredProcedure [dbo].[RemoveUserRoleSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveUserRoleSp]
	@UserRoleID [int]
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    DELETE FROM UserRoles WHERE UserRoleID = @UserRoleID
GO
/****** Object:  StoredProcedure [dbo].[RemoveUserSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[RemoveUserSp]
	@UserID [int]
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    DELETE FROM Users WHERE UserID = @UserID
GO
/****** Object:  StoredProcedure [dbo].[UpdateAgentContextSettingsSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[UpdateAgentContextSettingsSp] (
	@AgentID int,
	@ContextSettings nvarchar(max)
)
AS

    UPDATE Agents SET ContextSettings = @ContextSettings ,
    LastUpdated = getdate()
    WHERE AgentID = @AgentID	



GO
/****** Object:  StoredProcedure [dbo].[UpdateAgentDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[UpdateAgentDataSp] (
	@AgentID int,
	@Data nvarchar(max)
)
AS

    UPDATE Agents SET Data = @Data ,
    LastUpdated = getdate()
    WHERE AgentID = @AgentID	



GO
/****** Object:  StoredProcedure [dbo].[UpdateAgentSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateAgentSp]
	@AgentID [int],
	@AgentName [nvarchar](255),
	@ContextSettings [nvarchar](max),
	@Data [nvarchar](max),
	@Description [nvarchar](max),
	@AgentTypeID [int]
AS

    -- Automatically generated on 10/9/2024 4:50:41 PM.
    
    UPDATE Agents SET 
            [AgentName] = @AgentName, 
            [ContextSettings] = @ContextSettings, 
            [Data] = @Data, 
            [LastUpdated] = getdate(), 
            [Description] = @Description, 
            [AgentTypeID] = @AgentTypeID
    WHERE AgentID = @AgentID


GO
/****** Object:  StoredProcedure [dbo].[UpdateAgentTypeDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[UpdateAgentTypeDataSp] (
	@AgentTypeID int,
	@Data nvarchar(max)
)
AS

    UPDATE AgentTypes SET Data = @Data ,
    LastUpdated = getdate()
    WHERE AgentTypeID = @AgentTypeID	



GO
/****** Object:  StoredProcedure [dbo].[UpdateAgentTypeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateAgentTypeSp]
	@AgentTypeID [int],
	@AgentTypeName [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 10/9/2024 4:50:41 PM.
    
    UPDATE AgentTypes SET 
            [AgentTypeName] = @AgentTypeName, 
            [Data] = @Data, 
            [LastUpdated] = getdate()
    WHERE AgentTypeID = @AgentTypeID


GO
/****** Object:  StoredProcedure [dbo].[UpdateAreaCodeDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateAreaCodeDataSp] (
	@AreaCodeID int,
	@Data nvarchar(max)
)
AS

    UPDATE AreaCodes SET Data = @Data ,
    LastUpdated = getdate()
    WHERE AreaCodeID = @AreaCodeID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateAreaCodeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateAreaCodeSp]
	@AreaCodeID [int],
	@AreaCode [nvarchar](255),
	@TimeZone [nvarchar](255),
	@Region [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 8/26/2023 8:04:05 AM.
    
    UPDATE AreaCodes SET 
            [AreaCode] = @AreaCode, 
            [TimeZone] = @TimeZone, 
            [Region] = @Region, 
            [Data] = @Data, 
            [LastUpdated] = getdate()
    WHERE AreaCodeID = @AreaCodeID
GO
/****** Object:  StoredProcedure [dbo].[UpdateAuthorizationDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateAuthorizationDataSp] (
	@AuthorizationID int,
	@Data nvarchar(max)
)
AS

    UPDATE Authorizations SET Data = @Data ,
    LastUpdated = getdate()
    WHERE AuthorizationID = @AuthorizationID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateAuthorizationSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateAuthorizationSp]
	@AuthorizationID [int],
	@AuthorizationToken [nvarchar](255),
	@RefreshToken [nvarchar](255),
	@Expiration [datetime],
	@UserID [int],
	@LastRefreshedDate [datetime],
	@LastActivityDate [datetime],
	@IsExpired [bit],
	@IsRevoked [bit],
	@IsEncrypted [bit],
	@Data [nvarchar](max)
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    UPDATE Authorizations SET 
            [AuthorizationToken] = @AuthorizationToken, 
            [RefreshToken] = @RefreshToken, 
            [Expiration] = @Expiration, 
            [UserID] = @UserID, 
            [LastRefreshedDate] = @LastRefreshedDate, 
            [LastActivityDate] = @LastActivityDate, 
            [IsExpired] = @IsExpired, 
            [IsRevoked] = @IsRevoked, 
            [IsEncrypted] = @IsEncrypted, 
            [Data] = @Data, 
            [LastUpdated] = getdate()
    WHERE AuthorizationID = @AuthorizationID
GO
/****** Object:  StoredProcedure [dbo].[UpdateBlockedEmailDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateBlockedEmailDataSp] (
	@BlockedEmailID int,
	@Data nvarchar(max)
)
AS

    UPDATE BlockedEmails SET Data = @Data ,
    LastUpdated = getdate()
    WHERE BlockedEmailID = @BlockedEmailID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateBlockedEmailSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateBlockedEmailSp]
	@BlockedEmailID [int],
	@Email [nvarchar](255),
	@Notes [nvarchar](max),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    UPDATE BlockedEmails SET 
            [Email] = @Email, 
            [Notes] = @Notes, 
            [Data] = @Data, 
            [LastUpdated] = getdate()
    WHERE BlockedEmailID = @BlockedEmailID
GO
/****** Object:  StoredProcedure [dbo].[UpdateCallDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[UpdateCallDataSp] (
	@CallID int,
	@Data nvarchar(max)
)
AS

    UPDATE Calls SET Data = @Data ,
    LastUpdated = getdate()
    WHERE CallID = @CallID	



GO
/****** Object:  StoredProcedure [dbo].[UpdateCallSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateCallSp]
	@CallID [int],
	@CallingPhone [nvarchar](255),
	@CalledPhone [nvarchar](255),
	@Duration [float](53),
	@IsRecorded [bit],
	@RecordingURL [nvarchar](512),
	@IsConference [bit],
	@IsStreamed [bit],
	@IsIncoming [bit],
	@CallStatus [nvarchar](255),
	@LastCallStatusUpdate [datetime],
	@IsTranscribed [bit],
	@IsEmptyTranscription [bit],
	@TranscriptionSummary [nvarchar](max),
	@Data [nvarchar](max),
	@Transcription [nvarchar](max),
	@CallKey [nvarchar](255)
AS

    -- Automatically generated on 7/1/2024 7:51:00 AM.
    
    UPDATE Calls SET 
            [CallingPhone] = @CallingPhone, 
            [CalledPhone] = @CalledPhone, 
            [Duration] = @Duration, 
            [IsRecorded] = @IsRecorded, 
            [RecordingURL] = @RecordingURL, 
            [IsConference] = @IsConference, 
            [IsStreamed] = @IsStreamed, 
            [IsIncoming] = @IsIncoming, 
            [CallStatus] = @CallStatus, 
            [LastCallStatusUpdate] = @LastCallStatusUpdate, 
            [IsTranscribed] = @IsTranscribed, 
            [IsEmptyTranscription] = @IsEmptyTranscription, 
            [TranscriptionSummary] = @TranscriptionSummary, 
            [Data] = @Data, 
            [LastUpdated] = getdate(), 
            [Transcription] = @Transcription, 
            [CallKey] = @CallKey
    WHERE CallID = @CallID


GO
/****** Object:  StoredProcedure [dbo].[UpdateCampaignDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateCampaignDataSp] (
	@CampaignID int,
	@Data nvarchar(max)
)
AS

    UPDATE Campaigns SET Data = @Data ,
    LastUpdated = getdate()
    WHERE CampaignID = @CampaignID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateCampaignSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateCampaignSp]
	@CampaignID [int],
	@SourceID [int],
	@CampaignName [nvarchar](255),
	@CampaignKey [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 3/15/2023 4:58:59 PM.
    
    UPDATE Campaigns SET 
            [SourceID] = @SourceID, 
            [CampaignName] = @CampaignName, 
            [CampaignKey] = @CampaignKey, 
            [Data] = @Data, 
            [LastUpdated] = getdate()
    WHERE CampaignID = @CampaignID
GO
/****** Object:  StoredProcedure [dbo].[UpdateContentDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateContentDataSp] (
	@ContentID int,
	@Data nvarchar(max)
)
AS

    UPDATE Contents SET Data = @Data ,
    LastUpdated = getdate()
    WHERE ContentID = @ContentID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateContentSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateContentSp]
	@ContentID [int],
	@ContentName [nvarchar](255),
	@Content [nvarchar](max),
	@Data [nvarchar](max),
	@ContentTypeID [int]
AS

    -- Automatically generated on 8/1/2024 3:23:28 PM.
    
    UPDATE Contents SET 
            [ContentName] = @ContentName, 
            [Content] = @Content, 
            [LastUpdated] = getdate(), 
            [Data] = @Data, 
            [ContentTypeID] = @ContentTypeID
    WHERE ContentID = @ContentID


GO
/****** Object:  StoredProcedure [dbo].[UpdateContentTypeDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[UpdateContentTypeDataSp] (
	@ContentTypeID int,
	@Data nvarchar(max)
)
AS

    UPDATE ContentTypes SET Data = @Data ,
    LastUpdated = getdate()
    WHERE ContentTypeID = @ContentTypeID	



GO
/****** Object:  StoredProcedure [dbo].[UpdateContentTypeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateContentTypeSp]
	@ContentTypeID [int],
	@ContentTypeName [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 8/1/2024 3:23:28 PM.
    
    UPDATE ContentTypes SET 
            [ContentTypeName] = @ContentTypeName, 
            [Data] = @Data, 
            [LastUpdated] = getdate()
    WHERE ContentTypeID = @ContentTypeID


GO
/****** Object:  StoredProcedure [dbo].[UpdateDomainDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[UpdateDomainDataSp] (
	@DomainID int,
	@Data nvarchar(max)
)
AS

    UPDATE Domains SET Data = @Data ,
    LastUpdated = getdate()
    WHERE DomainID = @DomainID	



GO
/****** Object:  StoredProcedure [dbo].[UpdateDomainSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateDomainSp]
	@DomainID [int],
	@DomainName [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    UPDATE Domains SET 
            [DomainName] = @DomainName, 
            [Data] = @Data, 
            [LastUpdated] = getdate()
    WHERE DomainID = @DomainID


GO
/****** Object:  StoredProcedure [dbo].[UpdateEmailAddressDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[UpdateEmailAddressDataSp] (
	@EmailAddressID int,
	@Data nvarchar(max)
)
AS

    UPDATE EmailAddresses SET Data = @Data ,
    LastUpdated = getdate()
    WHERE EmailAddressID = @EmailAddressID	



GO
/****** Object:  StoredProcedure [dbo].[UpdateEmailAddressSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateEmailAddressSp]
	@EmailAddressID [int],
	@Email [nvarchar](255),
	@Data [nvarchar](max),
	@IsBlocked [bit],
	@IsInternal [bit],
	@DomainID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    UPDATE EmailAddresses SET 
            [Email] = @Email, 
            [Data] = @Data, 
            [LastUpdated] = getdate(), 
            [IsBlocked] = @IsBlocked, 
            [IsInternal] = @IsInternal, 
            [DomainID] = @DomainID
    WHERE EmailAddressID = @EmailAddressID


GO
/****** Object:  StoredProcedure [dbo].[UpdateEmailHistoryDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateEmailHistoryDataSp] (
	@EmailHistoryID int,
	@Data nvarchar(max)
)
AS

    UPDATE EmailHistories SET Data = @Data ,
    LastUpdated = getdate()
    WHERE EmailHistoryID = @EmailHistoryID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateEmailHistorySp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateEmailHistorySp]
	@EmailHistoryID [int],
	@To [nvarchar](255),
	@From [nvarchar](255),
	@EmailTemplateID [int],
	@Subject [nvarchar](255),
	@Email [nvarchar](max),
	@IsPending [bit],
	@IsSent [bit],
	@Data [nvarchar](max)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    UPDATE EmailHistories SET 
            [To] = @To, 
            [From] = @From, 
            [EmailTemplateID] = @EmailTemplateID, 
            [Subject] = @Subject, 
            [Email] = @Email, 
            [IsPending] = @IsPending, 
            [IsSent] = @IsSent, 
            [Data] = @Data, 
            [LastUpdated] = getdate()
    WHERE EmailHistoryID = @EmailHistoryID
GO
/****** Object:  StoredProcedure [dbo].[UpdateEmailTemplateDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateEmailTemplateDataSp] (
	@EmailTemplateID int,
	@Data nvarchar(max)
)
AS

    UPDATE EmailTemplates SET Data = @Data ,
    LastUpdated = getdate()
    WHERE EmailTemplateID = @EmailTemplateID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateEmailTemplateSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateEmailTemplateSp]
	@EmailTemplateID [int],
	@Name [nvarchar](255),
	@EmailSubject [nvarchar](255),
	@EmailText [nvarchar](max),
	@EmailParams [nvarchar](255),
	@FromAddress [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    UPDATE EmailTemplates SET 
            [Name] = @Name, 
            [EmailSubject] = @EmailSubject, 
            [EmailText] = @EmailText, 
            [EmailParams] = @EmailParams, 
            [FromAddress] = @FromAddress, 
            [LastUpdated] = getdate(), 
            [Data] = @Data
    WHERE EmailTemplateID = @EmailTemplateID
GO
/****** Object:  StoredProcedure [dbo].[UpdateFeatureDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[UpdateFeatureDataSp] (
	@FeatureID int,
	@Data nvarchar(max)
)
AS

    UPDATE Features SET Data = @Data ,
    LastUpdated = getdate()
    WHERE FeatureID = @FeatureID	



GO
/****** Object:  StoredProcedure [dbo].[UpdateFeatureSettingsSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[UpdateFeatureSettingsSp] (
	@FeatureID int,
	@Settings nvarchar(max)
)
AS

    UPDATE Features SET Settings = @Settings ,
    LastUpdated = getdate()
    WHERE FeatureID = @FeatureID	



GO
/****** Object:  StoredProcedure [dbo].[UpdateFeatureSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateFeatureSp]
	@FeatureID [int],
	@FeatureName [nvarchar](255),
	@Version [nvarchar](255),
	@IsEnabled [bit],
	@SettingsAssembly [nvarchar](255),
	@SettingsClass [nvarchar](255),
	@Settings [nvarchar](max),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 6/29/2024 7:45:32 AM.
    
    UPDATE Features SET 
            [FeatureName] = @FeatureName, 
            [Version] = @Version, 
            [IsEnabled] = @IsEnabled, 
            [SettingsAssembly] = @SettingsAssembly, 
            [SettingsClass] = @SettingsClass, 
            [Settings] = @Settings, 
            [LastUpdated] = getdate(), 
            [Data] = @Data
    WHERE FeatureID = @FeatureID


GO
/****** Object:  StoredProcedure [dbo].[UpdateFileDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[UpdateFileDataSp] (
	@FileID int,
	@Data nvarchar(max)
)
AS

    UPDATE Files SET Data = @Data ,
    LastUpdated = getdate()
    WHERE FileID = @FileID	



GO
/****** Object:  StoredProcedure [dbo].[UpdateFileSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateFileSp]
	@FileID [int],
	@FileTypeID [int],
	@PhysicalPath [nvarchar](255),
	@FileName [nvarchar](255),
	@FileDescription [nvarchar](255),
	@Label [nvarchar](255),
	@Data [nvarchar](max),
	@IsDeleted [bit]
AS

    -- Automatically generated on 7/18/2024 5:57:46 PM.
    
    UPDATE Files SET 
            [FileTypeID] = @FileTypeID, 
            [PhysicalPath] = @PhysicalPath, 
            [FileName] = @FileName, 
            [FileDescription] = @FileDescription, 
            [Label] = @Label, 
            [Data] = @Data, 
            [IsDeleted] = @IsDeleted, 
            [LastUpdated] = getdate()
    WHERE FileID = @FileID


GO
/****** Object:  StoredProcedure [dbo].[UpdateFileTypeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateFileTypeSp]
	@FileTypeID [int],
	@FileType [nvarchar](255),
	@AllowedExtensions [nvarchar](255)
AS

    -- Automatically generated on 7/17/2024 10:51:48 AM.
    
    UPDATE FileTypes SET 
            [FileType] = @FileType, 
            [AllowedExtensions] = @AllowedExtensions, 
            [LastUpdated] = getdate()
    WHERE FileTypeID = @FileTypeID


GO
/****** Object:  StoredProcedure [dbo].[UpdateLeadAddressDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[UpdateLeadAddressDataSp] (
	@LeadAddressID int,
	@Data nvarchar(max)
)
AS

    UPDATE LeadAddresses SET Data = @Data ,
    LastUpdated = getdate()
    WHERE LeadAddressID = @LeadAddressID	



GO
/****** Object:  StoredProcedure [dbo].[UpdateLeadAddressSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateLeadAddressSp]
	@Data [nvarchar](max),
	@AddressType [nvarchar](255),
	@Phone [nvarchar](255),
	@Fax [nvarchar](255),
	@LeadAddressID [int],
	@LeadID [int],
	@Name [nvarchar](255),
	@Line1 [nvarchar](255),
	@Line2 [nvarchar](255),
	@City [nvarchar](255),
	@State [nvarchar](255),
	@Zip [nvarchar](20),
	@Country [nvarchar](255)
AS

    -- Automatically generated on 7/25/2024 2:20:08 PM.
    
    UPDATE LeadAddresses SET 
            [LastUpdated] = getdate(), 
            [Data] = @Data, 
            [AddressType] = @AddressType, 
            [Phone] = @Phone, 
            [Fax] = @Fax, 
            [LeadID] = @LeadID, 
            [Name] = @Name, 
            [Line1] = @Line1, 
            [Line2] = @Line2, 
            [City] = @City, 
            [State] = @State, 
            [Zip] = @Zip, 
            [Country] = @Country
    WHERE LeadAddressID = @LeadAddressID


GO
/****** Object:  StoredProcedure [dbo].[UpdateLeadContactDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateLeadContactDataSp] (
	@LeadContactID int,
	@Data nvarchar(max)
)
AS

    UPDATE LeadContacts SET Data = @Data ,
    LastUpdated = getdate()
    WHERE LeadContactID = @LeadContactID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateLeadContactSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateLeadContactSp]
	@LeadContactID [int],
	@LeadID [int],
	@Name [nvarchar](255),
	@Title [nvarchar](255),
	@Phone [nvarchar](255),
	@Email [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 8/26/2023 8:04:05 AM.
    
    UPDATE LeadContacts SET 
            [LeadID] = @LeadID, 
            [Name] = @Name, 
            [Title] = @Title, 
            [Phone] = @Phone, 
            [Email] = @Email, 
            [Data] = @Data, 
            [LastUpdated] = getdate()
    WHERE LeadContactID = @LeadContactID
GO
/****** Object:  StoredProcedure [dbo].[UpdateLeadDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateLeadDataSp] (
	@LeadID int,
	@Data nvarchar(max)
)
AS

    UPDATE Leads SET Data = @Data ,
    LastUpdated = getdate()
    WHERE LeadID = @LeadID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateLeadNoteDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateLeadNoteDataSp] (
	@LeadNoteID int,
	@Data nvarchar(max)
)
AS

    UPDATE LeadNotes SET Data = @Data ,
    LastUpdated = getdate()
    WHERE LeadNoteID = @LeadNoteID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateLeadNoteSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateLeadNoteSp]
	@LeadNoteTypeID [int],
	@LeadNoteID [int],
	@LeadID [int],
	@SalesRepresentativeID [int],
	@Notes [nvarchar](max),
	@FollowUpDate [datetime],
	@Data [nvarchar](max)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    UPDATE LeadNotes SET 
            [LeadNoteTypeID] = @LeadNoteTypeID, 
            [LeadID] = @LeadID, 
            [SalesRepresentativeID] = @SalesRepresentativeID, 
            [Notes] = @Notes, 
            [FollowUpDate] = @FollowUpDate, 
            [Data] = @Data, 
            [LastUpdated] = getdate()
    WHERE LeadNoteID = @LeadNoteID
GO
/****** Object:  StoredProcedure [dbo].[UpdateLeadNoteTypeDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateLeadNoteTypeDataSp] (
	@LeadNoteTypeID int,
	@Data nvarchar(max)
)
AS

    UPDATE LeadNoteTypes SET Data = @Data ,
    LastUpdated = getdate()
    WHERE LeadNoteTypeID = @LeadNoteTypeID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateLeadNoteTypeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateLeadNoteTypeSp]
	@LeadNoteTypeID [int],
	@LeadNoteTypeName [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    UPDATE LeadNoteTypes SET 
            [LeadNoteTypeName] = @LeadNoteTypeName, 
            [Data] = @Data, 
            [LastUpdated] = getdate()
    WHERE LeadNoteTypeID = @LeadNoteTypeID
GO
/****** Object:  StoredProcedure [dbo].[UpdateLeadRelationshipDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateLeadRelationshipDataSp] (
	@LeadRelationshipID int,
	@Data nvarchar(max)
)
AS

    UPDATE LeadRelationships SET Data = @Data ,
    LastUpdated = getdate()
    WHERE LeadRelationshipID = @LeadRelationshipID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateLeadRelationshipSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateLeadRelationshipSp]
	@LeadRelationshipID [int],
	@LeadRelationshipTypeID [int],
	@LeadID [int],
	@RelatedLeadID [int],
	@Data [nvarchar](max)
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    UPDATE LeadRelationships SET 
            [LeadRelationshipTypeID] = @LeadRelationshipTypeID, 
            [LeadID] = @LeadID, 
            [RelatedLeadID] = @RelatedLeadID, 
            [Data] = @Data, 
            [LastUpdated] = getdate()
    WHERE LeadRelationshipID = @LeadRelationshipID
GO
/****** Object:  StoredProcedure [dbo].[UpdateLeadRelationshipTypeDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateLeadRelationshipTypeDataSp] (
	@LeadRelationshipTypeID int,
	@Data nvarchar(max)
)
AS

    UPDATE LeadRelationshipTypes SET Data = @Data ,
    LastUpdated = getdate()
    WHERE LeadRelationshipTypeID = @LeadRelationshipTypeID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateLeadRelationshipTypeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateLeadRelationshipTypeSp]
	@LeadRelationshipTypeID [int],
	@LeadRelationshipTypeName [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    UPDATE LeadRelationshipTypes SET 
            [LeadRelationshipTypeName] = @LeadRelationshipTypeName, 
            [Data] = @Data, 
            [LastUpdated] = getdate()
    WHERE LeadRelationshipTypeID = @LeadRelationshipTypeID
GO
/****** Object:  StoredProcedure [dbo].[UpdateLeadSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateLeadSp]
	@AccountID [int],
	@LeadSubStatusID [int],
	@FollowUpDate [datetime],
	@LeadID [int],
	@Company [nvarchar](255),
	@FirstName [nvarchar](255),
	@LastName [nvarchar](255),
	@Phone [nvarchar](255),
	@Email [nvarchar](255),
	@Address [nvarchar](255),
	@Address2 [nvarchar](255),
	@City [nvarchar](255),
	@State [nvarchar](255),
	@ZipCode [nvarchar](20),
	@SourceID [int],
	@LastContactedDate [datetime],
	@Priority [int],
	@LeadStatusID [int],
	@OpportunitySize [int],
	@Data [nvarchar](max),
	@SalesRepresentativeID [int],
	@ImportKey [nvarchar](255),
	@GeneratedDate [datetime],
	@CampaignID [int]
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    UPDATE Leads SET 
            [AccountID] = @AccountID, 
            [LeadSubStatusID] = @LeadSubStatusID, 
            [FollowUpDate] = @FollowUpDate, 
            [Company] = @Company, 
            [FirstName] = @FirstName, 
            [LastName] = @LastName, 
            [Phone] = @Phone, 
            [Email] = @Email, 
            [Address] = @Address, 
            [Address2] = @Address2, 
            [City] = @City, 
            [State] = @State, 
            [ZipCode] = @ZipCode, 
            [SourceID] = @SourceID, 
            [LastContactedDate] = @LastContactedDate, 
            [Priority] = @Priority, 
            [LeadStatusID] = @LeadStatusID, 
            [OpportunitySize] = @OpportunitySize, 
            [Data] = @Data, 
            [LastUpdated] = getdate(), 
            [SalesRepresentativeID] = @SalesRepresentativeID, 
            [ImportKey] = @ImportKey, 
            [GeneratedDate] = @GeneratedDate, 
            [CampaignID] = @CampaignID
    WHERE LeadID = @LeadID
GO
/****** Object:  StoredProcedure [dbo].[UpdateLeadStatusDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateLeadStatusDataSp] (
	@LeadStatusID int,
	@Data nvarchar(max)
)
AS

    UPDATE LeadStatuses SET Data = @Data ,
    LastUpdated = getdate()
    WHERE LeadStatusID = @LeadStatusID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateLeadStatusSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateLeadStatusSp]
	@LeadStatusID [int],
	@StatusName [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    UPDATE LeadStatuses SET 
            [StatusName] = @StatusName, 
            [Data] = @Data, 
            [LastUpdated] = getdate()
    WHERE LeadStatusID = @LeadStatusID
GO
/****** Object:  StoredProcedure [dbo].[UpdateLeadSubStatusDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateLeadSubStatusDataSp] (
	@LeadSubStatusID int,
	@Data nvarchar(max)
)
AS

    UPDATE LeadSubStatuses SET Data = @Data ,
    LastUpdated = getdate()
    WHERE LeadSubStatusID = @LeadSubStatusID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateLeadSubStatusSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateLeadSubStatusSp]
	@LeadStatusID [int],
	@SubStatusName [nvarchar](255),
	@Data [nvarchar](max),
	@LeadSubStatusID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    UPDATE LeadSubStatuses SET 
            [LeadStatusID] = @LeadStatusID, 
            [SubStatusName] = @SubStatusName, 
            [Data] = @Data, 
            [LastUpdated] = getdate()
    WHERE LeadSubStatusID = @LeadSubStatusID
GO
/****** Object:  StoredProcedure [dbo].[UpdateLeadTagDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateLeadTagDataSp] (
	@LeadTagID int,
	@Data nvarchar(max)
)
AS

    UPDATE LeadTags SET Data = @Data ,
    LastUpdated = getdate()
    WHERE LeadTagID = @LeadTagID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateLeadTagSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateLeadTagSp]
	@LeadTagID [int],
	@LeadID [int],
	@TagID [int],
	@Data [nvarchar](max)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    UPDATE LeadTags SET 
            [LeadID] = @LeadID, 
            [TagID] = @TagID, 
            [Data] = @Data, 
            [LastUpdated] = getdate()
    WHERE LeadTagID = @LeadTagID
GO
/****** Object:  StoredProcedure [dbo].[UpdateMessageDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[UpdateMessageDataSp] (
	@MessageID int,
	@Data nvarchar(max)
)
AS

    UPDATE Messages SET Data = @Data ,
    LastUpdated = getdate()
    WHERE MessageID = @MessageID	



GO
/****** Object:  StoredProcedure [dbo].[UpdateMessageSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateMessageSp]
	@MessageID [int],
	@MessageText [nvarchar](max),
	@SentByPhone [nvarchar](255),
	@ReceivedByPhone [nvarchar](255),
	@Data [nvarchar](max),
	@IsDelivered [bit],
	@IsReceived [bit],
	@IsDismissed [bit]
AS

    -- Automatically generated on 6/29/2024 2:56:36 PM.
    
    UPDATE Messages SET 
            [MessageText] = @MessageText, 
            [SentByPhone] = @SentByPhone, 
            [ReceivedByPhone] = @ReceivedByPhone, 
            [LastUpdated] = getdate(), 
            [Data] = @Data, 
            [IsDelivered] = @IsDelivered, 
            [IsReceived] = @IsReceived, 
            [IsDismissed] = @IsDismissed
    WHERE MessageID = @MessageID


GO
/****** Object:  StoredProcedure [dbo].[UpdatePageLayoutSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdatePageLayoutSp]
	@PageLayoutID [int],
	@Url [nvarchar](512),
	@Handler [nvarchar](512),
	@IsEnabled [bit],
	@PageTitle [nvarchar](255),
	@SiteID [int]
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    UPDATE PageLayouts SET 
            [Url] = @Url, 
            [Handler] = @Handler, 
            [IsEnabled] = @IsEnabled, 
            [LastUpdated] = getdate(), 
            [PageTitle] = @PageTitle, 
            [SiteID] = @SiteID
    WHERE PageLayoutID = @PageLayoutID
GO
/****** Object:  StoredProcedure [dbo].[UpdatePhoneNumberDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[UpdatePhoneNumberDataSp] (
	@PhoneNumberID int,
	@Data nvarchar(max)
)
AS

    UPDATE PhoneNumbers SET Data = @Data ,
    LastUpdated = getdate()
    WHERE PhoneNumberID = @PhoneNumberID	



GO
/****** Object:  StoredProcedure [dbo].[UpdatePhoneNumberSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdatePhoneNumberSp]
	@PhoneNumberID [int],
	@PhoneNumber [nvarchar](255),
	@PhoneType [nvarchar](255),
	@IsInternal [bit],
	@CallerName [nvarchar](255),
	@Country [nvarchar](255),
	@Data [nvarchar](max),
	@IsBlocked [bit],
	@IsSpam [bit]
AS

    -- Automatically generated on 9/9/2024 10:10:00 AM.
    
    UPDATE PhoneNumbers SET 
            [PhoneNumber] = @PhoneNumber, 
            [PhoneType] = @PhoneType, 
            [IsInternal] = @IsInternal, 
            [CallerName] = @CallerName, 
            [Country] = @Country, 
            [Data] = @Data, 
            [LastUpdated] = getdate(), 
            [IsBlocked] = @IsBlocked, 
            [IsSpam] = @IsSpam
    WHERE PhoneNumberID = @PhoneNumberID


GO
/****** Object:  StoredProcedure [dbo].[UpdateRawEmailAddressDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[UpdateRawEmailAddressDataSp] (
	@RawEmailAddressID int,
	@Data nvarchar(max)
)
AS

    UPDATE RawEmailAddresses SET Data = @Data ,
    LastUpdated = getdate()
    WHERE RawEmailAddressID = @RawEmailAddressID	



GO
/****** Object:  StoredProcedure [dbo].[UpdateRawEmailAddressSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateRawEmailAddressSp]
	@RawEmailAddressID [int],
	@RawEmailID [int],
	@IsFrom [bit],
	@Data [nvarchar](max),
	@EmailAddressID [int],
	@DomainID [int]
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    UPDATE RawEmailAddresses SET 
            [RawEmailID] = @RawEmailID, 
            [IsFrom] = @IsFrom, 
            [Data] = @Data, 
            [LastUpdated] = getdate(), 
            [EmailAddressID] = @EmailAddressID, 
            [DomainID] = @DomainID
    WHERE RawEmailAddressID = @RawEmailAddressID


GO
/****** Object:  StoredProcedure [dbo].[UpdateRawEmailDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[UpdateRawEmailDataSp] (
	@RawEmailID int,
	@Data nvarchar(max)
)
AS

    UPDATE RawEmails SET Data = @Data ,
    LastUpdated = getdate()
    WHERE RawEmailID = @RawEmailID	



GO
/****** Object:  StoredProcedure [dbo].[UpdateRawEmailSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateRawEmailSp]
	@RawEmailID [int],
	@To [nvarchar](255),
	@From [nvarchar](255),
	@Subject [nvarchar](max),
	@BodyText [nvarchar](max),
	@BodyHtml [nvarchar](max),
	@IsProcessed [bit],
	@Label [nvarchar](255),
	@Data [nvarchar](max),
	@UserID [int],
	@ImportKey [nvarchar](255),
	@EmailDate [datetime],
	@ThreadID [nvarchar](255)
AS

    -- Automatically generated on 12/15/2024 9:48:39 AM.
    
    UPDATE RawEmails SET 
            [To] = @To, 
            [From] = @From, 
            [Subject] = @Subject, 
            [BodyText] = @BodyText, 
            [BodyHtml] = @BodyHtml, 
            [IsProcessed] = @IsProcessed, 
            [Label] = @Label, 
            [LastUpdated] = getdate(), 
            [Data] = @Data, 
            [UserID] = @UserID, 
            [ImportKey] = @ImportKey, 
            [EmailDate] = @EmailDate, 
            [ThreadID] = @ThreadID
    WHERE RawEmailID = @RawEmailID


GO
/****** Object:  StoredProcedure [dbo].[UpdateRoleDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateRoleDataSp] (
	@RoleID int,
	@Data nvarchar(max)
)
AS

    UPDATE Roles SET Data = @Data ,
    LastUpdated = getdate()
    WHERE RoleID = @RoleID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateRoleSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateRoleSp]
	@RoleID [int],
	@RoleName [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 1/18/2023 6:29:15 AM.
    
    UPDATE Roles SET 
            [RoleName] = @RoleName, 
            [LastUpdated] = getdate(), 
            [Data] = @Data
    WHERE RoleID = @RoleID
GO
/****** Object:  StoredProcedure [dbo].[UpdateSalesRepresentativeDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateSalesRepresentativeDataSp] (
	@SalesRepresentativeID int,
	@Data nvarchar(max)
)
AS

    UPDATE SalesRepresentatives SET Data = @Data ,
    LastUpdated = getdate()
    WHERE SalesRepresentativeID = @SalesRepresentativeID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateSalesRepresentativeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateSalesRepresentativeSp]
	@SalesRepresentativeID [int],
	@Notes [nvarchar](max),
	@Data [nvarchar](max),
	@SalesRepresentativeTypeID [int],
	@UserID [int]
AS

    -- Automatically generated on 8/23/2024 9:58:34 AM.
    
    UPDATE SalesRepresentatives SET 
            [Notes] = @Notes, 
            [LastUpdated] = getdate(), 
            [Data] = @Data, 
            [SalesRepresentativeTypeID] = @SalesRepresentativeTypeID, 
            [UserID] = @UserID
    WHERE SalesRepresentativeID = @SalesRepresentativeID


GO
/****** Object:  StoredProcedure [dbo].[UpdateSalesRepresentativeTypeDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateSalesRepresentativeTypeDataSp] (
	@SalesRepresentativeTypeID int,
	@Data nvarchar(max)
)
AS

    UPDATE SalesRepresentativeTypes SET Data = @Data ,
    LastUpdated = getdate()
    WHERE SalesRepresentativeTypeID = @SalesRepresentativeTypeID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateSalesRepresentativeTypeSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateSalesRepresentativeTypeSp]
	@SalesRepresentativeTypeID [int],
	@SalesRepresentativeTypeName [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 3/20/2023 2:59:18 PM.
    
    UPDATE SalesRepresentativeTypes SET 
            [SalesRepresentativeTypeName] = @SalesRepresentativeTypeName, 
            [Data] = @Data, 
            [LastUpdated] = getdate()
    WHERE SalesRepresentativeTypeID = @SalesRepresentativeTypeID
GO
/****** Object:  StoredProcedure [dbo].[UpdateSourceDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateSourceDataSp] (
	@SourceID int,
	@Data nvarchar(max)
)
AS

    UPDATE Sources SET Data = @Data ,
    LastUpdated = getdate()
    WHERE SourceID = @SourceID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateSourceSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateSourceSp]
	@SourceID [int],
	@SourceName [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 2/6/2023 2:57:00 PM.
    
    UPDATE Sources SET 
            [SourceName] = @SourceName, 
            [Data] = @Data, 
            [LastUpdated] = getdate()
    WHERE SourceID = @SourceID
GO
/****** Object:  StoredProcedure [dbo].[UpdateTagDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateTagDataSp] (
	@TagID int,
	@Data nvarchar(max)
)
AS

    UPDATE Tags SET Data = @Data ,
    LastUpdated = getdate()
    WHERE TagID = @TagID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateTagSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateTagSp]
	@SalesRepresentativeID [int],
	@TagID [int],
	@TagName [nvarchar](255),
	@Data [nvarchar](max)
AS

    -- Automatically generated on 8/26/2023 12:04:55 PM.
    
    UPDATE Tags SET 
            [SalesRepresentativeID] = @SalesRepresentativeID, 
            [TagName] = @TagName, 
            [Data] = @Data, 
            [LastUpdated] = getdate()
    WHERE TagID = @TagID
GO
/****** Object:  StoredProcedure [dbo].[UpdateUserDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateUserDataSp] (
	@UserID int,
	@Data nvarchar(max)
)
AS

    UPDATE Users SET Data = @Data ,
    LastUpdated = getdate()
    WHERE UserID = @UserID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateUserRoleDataSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateUserRoleDataSp] (
	@UserRoleID int,
	@Data nvarchar(max)
)
AS

    UPDATE UserRoles SET Data = @Data ,
    LastUpdated = getdate()
    WHERE UserRoleID = @UserRoleID	

GO
/****** Object:  StoredProcedure [dbo].[UpdateUserRoleSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateUserRoleSp]
	@UserRoleID [int],
	@UserID [int],
	@RoleID [int],
	@Data [nvarchar](max)
AS

    -- Automatically generated on 1/24/2023 7:44:21 AM.
    
    UPDATE UserRoles SET 
            [UserID] = @UserID, 
            [RoleID] = @RoleID, 
            [LastUpdated] = getdate(), 
            [Data] = @Data
    WHERE UserRoleID = @UserRoleID
GO
/****** Object:  StoredProcedure [dbo].[UpdateUserSp]    Script Date: 1/21/2025 4:07:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UpdateUserSp]
	@UserID [int],
	@IsEnabled [bit],
	@Data [nvarchar](max),
	@Email [nvarchar](255),
	@Phone [nvarchar](255),
	@Password [nvarchar](max),
	@HasLoggedIn [bit],
	@LastLoginDate [datetime],
	@IsLockedOut [bit],
	@InvitationCode [nvarchar](255),
	@InvitationExpiration [datetime],
	@IsInvited [bit],
	@InvitedDate [datetime],
	@FirstName [nvarchar](255),
	@LastName [nvarchar](255)
AS

    -- Automatically generated on 8/23/2024 9:58:34 AM.
    
    UPDATE Users SET 
            [IsEnabled] = @IsEnabled, 
            [LastUpdated] = getdate(), 
            [Data] = @Data, 
            [Email] = @Email, 
            [Phone] = @Phone, 
            [Password] = @Password, 
            [HasLoggedIn] = @HasLoggedIn, 
            [LastLoginDate] = @LastLoginDate, 
            [IsLockedOut] = @IsLockedOut, 
            [InvitationCode] = @InvitationCode, 
            [InvitationExpiration] = @InvitationExpiration, 
            [IsInvited] = @IsInvited, 
            [InvitedDate] = @InvitedDate, 
            [FirstName] = @FirstName, 
            [LastName] = @LastName
    WHERE UserID = @UserID
GO

SET IDENTITY_INSERT [dbo].[Roles] ON 
INSERT [dbo].[Roles] ([RoleID], [RoleName], [DateCreated], [LastUpdated], [Data]) VALUES (1, N'Administrator', getdate(), getdate(), N'{}')
INSERT [dbo].[Roles] ([RoleID], [RoleName], [DateCreated], [LastUpdated], [Data]) VALUES (2, N'Sales Representative', getdate(), getdate(), N'')
SET IDENTITY_INSERT [dbo].[Roles] OFF
GO

SET IDENTITY_INSERT [dbo].[EmailTemplates] ON 

INSERT [dbo].[EmailTemplates] ([EmailTemplateID], [Name], [EmailSubject], [EmailText], [EmailParams], [FromAddress], [DateCreated], [LastUpdated], [Data]) VALUES (1, N'Account Invite Backup', N'Your new account for Feeding Frenzy', N'<table style="width: 600px; max-width: 100%; margin: 20px auto; font-family: Helvetica, Arial, sans-serif; font-size: 18px; text-align: center;">
<tbody>
<tr style="padding: 0 0 20px 0; display: inline-block;">
<td style="line-height: 22px; padding: 40px 0 20px;">
<div style="font-size: 26px; padding-bottom: 30px;">Welcome to Feeding Frenzy!</div>
<div style="padding-bottom: 30px;">Your organization has invited you to join them on FeedingFrenzy.AI.&nbsp;</div>
<div style="padding-bottom: 30px;">To finish setting your password, click on the following link:.</div>
<a style="display: inline-block; background: #4A90E2; border-radius: 5px; color: #fff; text-decoration: none; padding: 10px 70px; font-size: 14px;" href="&lt;%Params.Domain%&gt;/createpw?Code=&lt;%Params.InviteCode%&gt;&amp;Email=&lt;%Params.Email%&gt;">Set Password</a></td>
</tr>
</tbody>
</table>', N'["Email","InviteCode","Domain"]', N'support@intelligencefactory.ai', CAST(N'2023-02-15T11:28:06.843' AS DateTime), CAST(N'2024-10-30T17:48:13.487' AS DateTime), N'{}')
INSERT [dbo].[EmailTemplates] ([EmailTemplateID], [Name], [EmailSubject], [EmailText], [EmailParams], [FromAddress], [DateCreated], [LastUpdated], [Data]) VALUES (2, N'Password Reset Backup', N'Your password reset link for Feeding Frenzy', N'<html>  
<head>  

<meta charset="UTF-8">
<title>Feeding Frenzy</title>

</head>
<body>
  <table style="width: 600px; max-width: 100%; margin: 20px auto; font-family: Helvetica, Arial, sans-serif; font-size:18px; text-align: center;">
    <tbody>
      <tr style="padding: 0 0 20px 0; display: inline-block;">
        <td style="line-height: 22px; padding: 40px 0 20px;">
          <div style="font-size: 26px; padding-bottom: 30px;">Password reset request</div>
          <div style="padding-bottom: 30px">You are receiving this email because someone requested a password reset from Feeding Frenzy. If you did not request the reset, please ignore this message.</div>

          <div style="padding-bottom: 30px">To finish setting your password, click on the following link:.</div>
          <a href="<%Params.Domain%>/createpw?Code=<%Params.InviteCode%>&Email=<%Params.Email%>" style="display: inline-block; background: #4A90E2; border-radius: 5px; color: #fff; text-decoration:none; padding: 10px 70px; font-size: 14px;">Set Password</a>
        </td>
      </tr>
    </tbody>
  </table>

</body>
</html>', N'["Email","InviteCode","Domain"]', N'support@intelligencefactory.ai', CAST(N'2024-07-17T13:35:30.197' AS DateTime), CAST(N'2024-10-30T17:48:07.160' AS DateTime), N'{}')
INSERT [dbo].[EmailTemplates] ([EmailTemplateID], [Name], [EmailSubject], [EmailText], [EmailParams], [FromAddress], [DateCreated], [LastUpdated], [Data]) VALUES (5, N'Account Invite', N'Your new account for Feeding Frenzy!', N'<table style="width: 600px; max-width: 100%; margin: 20px auto; font-family: Helvetica, Arial, sans-serif; font-size: 18px; text-align: center;">
<tbody>
<tr style="padding: 0 0 20px 0; display: inline-block;">
<td style="line-height: 22px; padding: 40px 0px 20px; width: 503px;">
<div style="padding: 30px;"><img src="https://cdn.prod.website-files.com/66425af53f665d3f446fda38/66425e1668f56a9c05250780_feeding-frenzy-logo-p-500.png" width="500" height="72" /></div>
</td>
</tr>
<tr>
<td style="line-height: 22px; padding: 20px 0px 20px; width: 503px;">
<div style="padding: 30px;">
<div style="font-size: 26px; padding-bottom: 30px; font-weight: bold;">Your Account Is Ready</div>
<div style="padding-bottom: 30px;">Welcome to Feeding Frenzy! You''ve been invited to create an account so that you can start using our application!</div>
<div style="padding-bottom: 30px;">These will be the credentials you will use for Feeding Frenzy. Feeding Frenzy allows you to manage your leads, add lead tags, statuses and sub statuses. Additionally, you can manage marketing sources and campaigns, as well as manage content and users. All from one place.</div>
<div style="padding-bottom: 30px;">To finish setting your password, click on the following link:</div>
<a style="display: inline-block; background: #f7931e; border-radius: 5px; color: #000; text-decoration: none; padding: 10px 70px; font-size: 14px;" href="&lt;%Params.Domain%&gt;/createpw?Code=&lt;%Params.InviteCode%&gt;&amp;Email=&lt;%Params.Email%&gt;">Set Password</a></div>
</td>
</tr>
</tbody>
</table>', N'["Email","InviteCode","Domain"]', N'support@intelligencefactory.ai', CAST(N'2024-08-23T13:48:33.370' AS DateTime), CAST(N'2024-10-30T17:23:30.670' AS DateTime), N'{}')
INSERT [dbo].[EmailTemplates] ([EmailTemplateID], [Name], [EmailSubject], [EmailText], [EmailParams], [FromAddress], [DateCreated], [LastUpdated], [Data]) VALUES (8, N'Password Reset', N'Your password reset link for Feeding Frenzy', N'<table style="width: 600px; max-width: 100%; margin: 20px auto; font-family: Helvetica, Arial, sans-serif; font-size: 18px; text-align: center;">
<tbody>
<tr>
<td style="line-height: 22px; padding: 40px 0px 20px;">
<div style="font-size: 26px; padding-bottom: 30px;"><img src="https://cdn.prod.website-files.com/66425af53f665d3f446fda38/66425e1668f56a9c05250780_feeding-frenzy-logo-p-500.png" width="500" height="72" /></div>
</td>
</tr>
<tr style="padding: 0 0 20px 0; display: inline-block;">
<td style="line-height: 22px; padding: 40px 0 20px;">
<div style="font-size: 26px; padding-bottom: 30px;"><strong>Password reset request</strong></div>
<div style="padding-bottom: 30px;">You are receiving this email because someone requested a password reset from Feeding Frenzy. If you did not request the reset, please ignore this message.</div>
<div style="padding-bottom: 30px;">To finish setting your password, click on the following link:.</div>
<a style="display: inline-block; background: #f7931e; border-radius: 5px; color: #000; text-decoration: none; padding: 10px 70px; font-size: 14px;" href="&lt;%Params.Domain%&gt;/createpw?Code=&lt;%Params.InviteCode%&gt;&amp;Email=&lt;%Params.Email%&gt;">Set Password</a></td>
</tr>
</tbody>
</table>', N'["Email","InviteCode","Domain"]', N'support@intelligencefactory.ai', CAST(N'2024-08-23T14:54:25.333' AS DateTime), CAST(N'2024-10-30T17:23:09.220' AS DateTime), N'{}')
INSERT [dbo].[EmailTemplates] ([EmailTemplateID], [Name], [EmailSubject], [EmailText], [EmailParams], [FromAddress], [DateCreated], [LastUpdated], [Data]) VALUES (9, N'Voice Agent Confirm Invite', N'Your new Voice Agent for Feeding Frenzy!', N'<table style="width: 600px; max-width: 100%; margin: 20px auto; font-family: Helvetica, Arial, sans-serif; font-size: 18px; text-align: center;">
  <tbody>
    <tr style="padding: 0 0 20px 0; display: inline-block;">
      <td style="line-height: 22px; padding: 40px 0px 20px; width: 503px;">
        <div style="padding: 30px;">
          <img src="https://cdn.prod.website-files.com/66425af53f665d3f446fda38/66425e1668f56a9c05250780_feeding-frenzy-logo-p-500.png" width="500" height="72" />
        </div>
      </td>
    </tr>
    <tr>
      <td style="line-height: 22px; padding: 20px 0px 20px; width: 503px;">
        <div style="padding: 30px;">
          <div style="font-size: 26px; padding-bottom: 30px; font-weight: bold;">Voice Agent Confirmation</div>
          <div style="padding-bottom: 30px;">We are excited to inform you that we are ready to begin provisioning your Voice Agent!</div>
          <div style="padding-bottom: 30px;">To confirm and start the provisioning process, please click on the button below:</div>
          <a style="display: inline-block; background: #f7931e; border-radius: 5px; color: #000; text-decoration: none; padding: 10px 70px; font-size: 14px;" href="&lt;%Params.Domain%&gt;/onboarding/confirm-va?Code=&lt;%Params.InviteCode%&gt;&amp;Email=&lt;%Params.Email%&gt;">Confirm</a>
        </div>
      </td>
    </tr>
  </tbody>
</table>', N'["Email","InviteCode","Domain"]', N'support@intelligencefactory.ai', CAST(N'2024-10-11T17:27:56.273' AS DateTime), CAST(N'2024-10-30T17:47:54.747' AS DateTime), N'{}')
INSERT [dbo].[EmailTemplates] ([EmailTemplateID], [Name], [EmailSubject], [EmailText], [EmailParams], [FromAddress], [DateCreated], [LastUpdated], [Data]) VALUES (10, N'Test', N'Test', N'<p>&nbsp;</p>
<table class="email-container" role="presentation" cellspacing="0" cellpadding="0">
<tbody>
<tr class="email-header">
<td><img src="https://i.imgur.com/Uu67Xxr.png" /></td>
</tr>
<tr class="spacer">
<td>&nbsp;</td>
</tr>
<tr>
<td class="email-content">
<p>Hi [Client Name],</p>
<p>I&rsquo;d like to introduce our AI-powered Feeding Frenzy Calling Solutions and Voice Agents to boost your sales and customer interactions.</p>
<p>With Feeding Frenzy, you can:</p>
<ul>
<li>Automate lead follow-up and management</li>
<li>Use AI Voice Agents to handle calls, answer questions, and schedule appointments</li>
<li>Increase productivity and close more deals</li>
</ul>
<p>Are you open to a quick 15-minute call to discuss how we can drive measurable results for your business?</p>
<p>Best regards,</p>
</td>
</tr>
</tbody>
</table>', N'["email","domain"]', N'flavio@intelligencefactory.ai', CAST(N'2024-10-30T17:35:25.947' AS DateTime), CAST(N'2024-10-30T17:35:47.803' AS DateTime), N'{}')
SET IDENTITY_INSERT [dbo].[EmailTemplates] OFF
GO

SET IDENTITY_INSERT [dbo].[PageLayouts] ON 

INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1, N'/roles', N'/k?Output=Roles\Roles.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-01T14:54:52.893' AS DateTime), CAST(N'2024-07-12T18:16:58.533' AS DateTime), N'Roles', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (2, N'/role', N'/k?Output=Roles\Role.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-01T14:54:52.893' AS DateTime), CAST(N'2024-07-12T18:17:44.347' AS DateTime), N'Role', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (3, N'/role-edit', N'/k?Output=Roles\Role.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-01T14:54:52.893' AS DateTime), CAST(N'2024-07-12T18:17:44.350' AS DateTime), N'Insert Role', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (4, N'/role-insert', N'/k?Output=Roles\Role.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-01T14:54:52.897' AS DateTime), CAST(N'2024-07-12T18:17:44.350' AS DateTime), N'Update Role', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (6, N'/authorizations', N'/k?Output=Authorizations\Authorizations.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-06T14:56:37.007' AS DateTime), CAST(N'2024-07-12T18:17:44.353' AS DateTime), N'Authorizations', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (7, N'/authorization', N'/k?Output=Authorizations\Authorization.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-06T14:56:37.023' AS DateTime), CAST(N'2024-07-12T18:17:44.353' AS DateTime), N'Authorization', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (8, N'/authorization-edit', N'/k?Output=Authorizations\Authorization.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-06T14:56:37.047' AS DateTime), CAST(N'2024-07-12T18:17:44.357' AS DateTime), N'Insert Authorization', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (9, N'/authorization-insert', N'/k?Output=Authorizations\Authorization.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-06T14:56:37.070' AS DateTime), CAST(N'2024-07-12T18:17:44.357' AS DateTime), N'Update Authorization', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (10, N'/leads', N'/k?Output=Leads\Leads.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:24.793' AS DateTime), CAST(N'2024-07-12T11:24:05.783' AS DateTime), N'Leads', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (11, N'/lead', N'/k?Output=Leads\Lead.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:24.797' AS DateTime), CAST(N'2024-07-12T11:24:49.233' AS DateTime), N'Lead', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (12, N'/lead-edit', N'/k?Output=Leads\Lead.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:24.797' AS DateTime), CAST(N'2024-07-12T11:24:39.480' AS DateTime), N'Insert Lead', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (13, N'/lead-insert', N'/k?Output=Leads\Lead.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:24.797' AS DateTime), CAST(N'2024-07-12T11:24:30.070' AS DateTime), N'Update Lead', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (14, N'/lead-tags', N'/k?Output=LeadTags\LeadTags.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:26.570' AS DateTime), CAST(N'2024-07-12T18:17:44.360' AS DateTime), N'Lead Tags', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (15, N'/lead-tag', N'/k?Output=LeadTags\LeadTag.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:26.570' AS DateTime), CAST(N'2024-07-12T18:17:44.360' AS DateTime), N'Lead Tag', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (16, N'/lead-tag-edit', N'/k?Output=LeadTags\LeadTag.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:26.570' AS DateTime), CAST(N'2024-07-12T18:17:44.360' AS DateTime), N'Insert Lead Tag', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (17, N'/lead-tag-insert', N'/k?Output=LeadTags\LeadTag.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:26.570' AS DateTime), CAST(N'2024-07-12T18:17:44.363' AS DateTime), N'Update Lead Tag', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (18, N'/tags', N'/k?Output=Tags\Tags.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:27.653' AS DateTime), CAST(N'2024-07-12T18:17:44.367' AS DateTime), N'Tags', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (19, N'/tag', N'/k?Output=Tags\Tag.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:27.653' AS DateTime), CAST(N'2024-07-12T18:17:44.367' AS DateTime), N'Tag', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (20, N'/tag-edit', N'/k?Output=Tags\Tag.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:27.653' AS DateTime), CAST(N'2024-07-12T18:17:44.367' AS DateTime), N'Insert Tag', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (21, N'/tag-insert', N'/k?Output=Tags\Tag.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:27.653' AS DateTime), CAST(N'2024-07-12T18:17:44.370' AS DateTime), N'Update Tag', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (22, N'/lead-notes', N'/k?Output=LeadNotes\LeadNotes.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:28.087' AS DateTime), CAST(N'2024-07-12T18:17:44.370' AS DateTime), N'Lead Notes', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (23, N'/lead-note', N'/k?Output=LeadNotes\LeadNote.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:28.090' AS DateTime), CAST(N'2024-07-12T18:17:44.373' AS DateTime), N'Lead Note', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (24, N'/lead-note-edit', N'/k?Output=LeadNotes\LeadNote.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:28.090' AS DateTime), CAST(N'2024-07-12T18:17:44.373' AS DateTime), N'Insert Lead Note', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (25, N'/lead-note-insert', N'/k?Output=LeadNotes\LeadNote.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:28.090' AS DateTime), CAST(N'2024-07-12T18:17:44.377' AS DateTime), N'Update Lead Note', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (26, N'/lead-note-types', N'/k?Output=LeadNoteTypes\LeadNoteTypes.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:29.300' AS DateTime), CAST(N'2024-07-12T18:17:44.377' AS DateTime), N'Lead Note Types', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (27, N'/lead-note-type', N'/k?Output=LeadNoteTypes\LeadNoteType.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:29.300' AS DateTime), CAST(N'2024-07-12T18:17:44.377' AS DateTime), N'Lead Note Type', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (28, N'/lead-note-type-edit', N'/k?Output=LeadNoteTypes\LeadNoteType.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:29.300' AS DateTime), CAST(N'2024-07-12T18:17:44.380' AS DateTime), N'Insert Lead Note Type', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (29, N'/lead-note-type-insert', N'/k?Output=LeadNoteTypes\LeadNoteType.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:29.300' AS DateTime), CAST(N'2024-07-12T18:17:44.380' AS DateTime), N'Update Lead Note Type', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (30, N'/lead-statuses', N'/k?Output=LeadStatuses\LeadStatuses.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:29.760' AS DateTime), CAST(N'2024-07-12T18:17:44.383' AS DateTime), N'Lead Statuses', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (31, N'/lead-status', N'/k?Output=LeadStatuses\LeadStatus.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:29.760' AS DateTime), CAST(N'2024-07-13T19:13:05.720' AS DateTime), N'Lead Status', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (32, N'/lead-status-edit', N'/k?Output=LeadStatuses\LeadStatus.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:29.760' AS DateTime), CAST(N'2024-07-13T19:12:55.853' AS DateTime), N'Insert Lead Status', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (33, N'/lead-status-insert', N'/k?Output=LeadStatuses\LeadStatus.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:29.763' AS DateTime), CAST(N'2024-07-13T19:12:30.800' AS DateTime), N'Update Lead Status', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (34, N'/lead-sub-statuses', N'/k?Output=LeadSubStatuses\LeadSubStatuses.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:30.150' AS DateTime), CAST(N'2024-07-12T18:17:44.390' AS DateTime), N'Lead Sub Statuses', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (35, N'/lead-sub-status', N'/k?Output=LeadSubStatuses\LeadSubStatus.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:30.150' AS DateTime), CAST(N'2024-07-13T19:12:22.513' AS DateTime), N'Lead Sub Status', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (36, N'/lead-sub-status-edit', N'/k?Output=LeadSubStatuses\LeadSubStatus.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:30.150' AS DateTime), CAST(N'2024-07-13T19:12:16.900' AS DateTime), N'Insert Lead Sub Status', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (37, N'/lead-sub-status-insert', N'/k?Output=LeadSubStatuses\LeadSubStatus.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:30.150' AS DateTime), CAST(N'2024-07-13T19:12:10.250' AS DateTime), N'Update Lead Sub Status', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (38, N'/sources', N'/k?Output=Sources\Sources.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:30.953' AS DateTime), CAST(N'2024-07-12T18:17:44.397' AS DateTime), N'Sources', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (39, N'/source', N'/k?Output=Sources\Source.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:30.953' AS DateTime), CAST(N'2024-07-12T18:17:44.397' AS DateTime), N'Source', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (40, N'/source-edit', N'/k?Output=Sources\Source.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:30.953' AS DateTime), CAST(N'2024-07-12T18:17:44.400' AS DateTime), N'Insert Source', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (41, N'/source-insert', N'/k?Output=Sources\Source.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:30.957' AS DateTime), CAST(N'2024-07-12T18:17:44.400' AS DateTime), N'Update Source', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (42, N'/campaigns', N'/k?Output=Campaigns\Campaigns.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:31.367' AS DateTime), CAST(N'2024-07-12T18:17:44.400' AS DateTime), N'Campaigns', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (43, N'/campaign', N'/k?Output=Campaigns\Campaign.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:31.367' AS DateTime), CAST(N'2024-07-12T18:17:44.403' AS DateTime), N'Campaign', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (44, N'/campaign-edit', N'/k?Output=Campaigns\Campaign.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:31.370' AS DateTime), CAST(N'2024-07-12T18:17:44.403' AS DateTime), N'Insert Campaign', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (45, N'/campaign-insert', N'/k?Output=Campaigns\Campaign.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:31.370' AS DateTime), CAST(N'2024-07-12T18:17:44.407' AS DateTime), N'Update Campaign', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (46, N'/page-layouts', N'/k?Output=PageLayouts\PageLayouts.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:31.437' AS DateTime), CAST(N'2024-07-12T18:17:44.410' AS DateTime), N'Page Layouts', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (47, N'/page-layout', N'/k?Output=PageLayouts\PageLayout.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:31.440' AS DateTime), CAST(N'2024-07-12T18:17:44.410' AS DateTime), N'Page Layout', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (48, N'/page-layout-edit', N'/k?Output=PageLayouts\PageLayout.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:31.440' AS DateTime), CAST(N'2024-07-12T18:17:44.410' AS DateTime), N'Insert Page Layout', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (49, N'/page-layout-insert', N'/k?Output=PageLayouts\PageLayout.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:31.440' AS DateTime), CAST(N'2024-07-12T18:17:44.413' AS DateTime), N'Update Page Layout', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (50, N'/email-templates', N'/k?Output=EmailTemplates\EmailTemplates.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:31.913' AS DateTime), CAST(N'2024-07-12T18:17:44.413' AS DateTime), N'Email Templates', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (51, N'/email-template', N'/k?Output=EmailTemplates\EmailTemplate.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:31.913' AS DateTime), CAST(N'2024-07-12T18:17:44.417' AS DateTime), N'Email Template', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (52, N'/email-template-edit', N'/k?Output=EmailTemplates\EmailTemplate.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:31.913' AS DateTime), CAST(N'2024-07-12T18:17:44.417' AS DateTime), N'Insert Email Template', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (53, N'/email-template-insert', N'/k?Output=EmailTemplates\EmailTemplate.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:31.913' AS DateTime), CAST(N'2024-07-12T18:17:44.417' AS DateTime), N'Update Email Template', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (54, N'/email-histories', N'/k?Output=EmailHistories\EmailHistories.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:32.400' AS DateTime), CAST(N'2024-07-12T18:17:44.420' AS DateTime), N'Email Histories', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (55, N'/email-history', N'/k?Output=EmailHistories\EmailHistory.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:32.400' AS DateTime), CAST(N'2024-07-12T18:17:44.420' AS DateTime), N'Email History', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (56, N'/email-history-edit', N'/k?Output=EmailHistories\EmailHistory.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:32.400' AS DateTime), CAST(N'2024-07-12T18:17:44.423' AS DateTime), N'Insert Email History', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (57, N'/email-history-insert', N'/k?Output=EmailHistories\EmailHistory.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:32.400' AS DateTime), CAST(N'2024-07-12T18:17:44.423' AS DateTime), N'Update Email History', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (58, N'/blocked-emails', N'/k?Output=BlockedEmails\BlockedEmails.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:33.370' AS DateTime), CAST(N'2024-07-12T18:17:44.427' AS DateTime), N'Blocked Emails', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (59, N'/blocked-email', N'/k?Output=BlockedEmails\BlockedEmail.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:33.370' AS DateTime), CAST(N'2024-07-12T18:17:44.430' AS DateTime), N'Blocked Email', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (60, N'/blocked-email-edit', N'/k?Output=BlockedEmails\BlockedEmail.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:33.370' AS DateTime), CAST(N'2024-07-12T18:17:44.430' AS DateTime), N'Insert Blocked Email', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (61, N'/blocked-email-insert', N'/k?Output=BlockedEmails\BlockedEmail.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:33.370' AS DateTime), CAST(N'2024-07-12T18:17:44.430' AS DateTime), N'Update Blocked Email', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (62, N'/contents', N'/k?Output=Contents\Contents.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:33.747' AS DateTime), CAST(N'2024-07-12T18:17:44.433' AS DateTime), N'Contents', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (63, N'/content', N'/k?Output=Contents\Content.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:33.747' AS DateTime), CAST(N'2024-07-12T18:17:44.433' AS DateTime), N'Content', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (64, N'/content-edit', N'/k?Output=Contents\Content.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:33.747' AS DateTime), CAST(N'2024-07-12T18:17:44.437' AS DateTime), N'Insert Content', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (65, N'/content-insert', N'/k?Output=Contents\Content.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:33.747' AS DateTime), CAST(N'2024-07-12T18:17:44.437' AS DateTime), N'Update Content', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (66, N'/sales-representative-types', N'/k?Output=SalesRepresentativeTypes\SalesRepresentativeTypes.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-20T10:29:16.590' AS DateTime), CAST(N'2024-07-12T18:17:44.440' AS DateTime), N'Sales Representative Types', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (67, N'/sales-representative-type', N'/k?Output=SalesRepresentativeTypes\SalesRepresentativeType.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-20T10:29:16.590' AS DateTime), CAST(N'2024-07-12T18:17:44.440' AS DateTime), N'Sales Representative Type', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (68, N'/sales-representative-type-edit', N'/k?Output=SalesRepresentativeTypes\SalesRepresentativeType.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-20T10:29:16.590' AS DateTime), CAST(N'2024-07-12T18:17:44.440' AS DateTime), N'Insert Sales Representative Type', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (69, N'/sales-representative-type-insert', N'/k?Output=SalesRepresentativeTypes\SalesRepresentativeType.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-20T10:29:16.590' AS DateTime), CAST(N'2024-07-12T18:17:44.443' AS DateTime), N'Update Sales Representative Type', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (70, N'/sales-representatives', N'/k?Output=SalesRepresentatives\SalesRepresentatives.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-22T14:57:34.360' AS DateTime), CAST(N'2024-07-12T18:17:44.443' AS DateTime), N'Sales Representatives', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (71, N'/sales-representative', N'/k?Output=SalesRepresentatives\SalesRepresentative.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-22T14:57:34.360' AS DateTime), CAST(N'2024-07-12T18:17:44.447' AS DateTime), N'Sales Representative', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (72, N'/sales-representative-edit', N'/k?Output=SalesRepresentatives\SalesRepresentative.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-22T14:57:34.360' AS DateTime), CAST(N'2024-07-12T18:17:44.447' AS DateTime), N'Insert Sales Representative', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (73, N'/sales-representative-insert', N'/k?Output=SalesRepresentatives\SalesRepresentative.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-22T14:57:34.360' AS DateTime), CAST(N'2024-07-12T18:17:44.447' AS DateTime), N'Update Sales Representative', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (74, N'/area-codes', N'/k?Output=AreaCodes\AreaCodes.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T08:09:05.773' AS DateTime), CAST(N'2024-07-12T18:17:44.450' AS DateTime), N'Area Codes', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (75, N'/area-code', N'/k?Output=AreaCodes\AreaCode.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T08:09:05.773' AS DateTime), CAST(N'2024-07-12T18:17:44.450' AS DateTime), N'Area Code', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (76, N'/area-code-edit', N'/k?Output=AreaCodes\AreaCode.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T08:09:05.773' AS DateTime), CAST(N'2024-07-12T18:17:44.450' AS DateTime), N'Insert Area Code', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (77, N'/area-code-insert', N'/k?Output=AreaCodes\AreaCode.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T08:09:05.773' AS DateTime), CAST(N'2024-07-12T18:17:44.453' AS DateTime), N'Update Area Code', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (78, N'/lead-contacts', N'/k?Output=LeadContacts\LeadContacts.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T08:12:55.820' AS DateTime), CAST(N'2024-07-12T18:17:44.453' AS DateTime), N'Lead Contacts', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (79, N'/lead-contact', N'/k?Output=LeadContacts\LeadContact.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T08:12:55.820' AS DateTime), CAST(N'2024-07-12T18:17:44.457' AS DateTime), N'Lead Contact', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (80, N'/lead-contact-edit', N'/k?Output=LeadContacts\LeadContact.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T08:12:55.820' AS DateTime), CAST(N'2024-07-12T18:17:44.457' AS DateTime), N'Insert Lead Contact', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (81, N'/lead-contact-insert', N'/k?Output=LeadContacts\LeadContact.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T08:12:55.823' AS DateTime), CAST(N'2024-07-12T18:17:44.460' AS DateTime), N'Update Lead Contact', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (82, N'/lead-relationship-types', N'/k?Output=LeadRelationshipTypes\LeadRelationshipTypes.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T12:20:22.583' AS DateTime), CAST(N'2024-07-12T18:17:44.460' AS DateTime), N'Lead Relationship Types', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (83, N'/lead-relationship-type', N'/k?Output=LeadRelationshipTypes\LeadRelationshipType.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T12:20:22.583' AS DateTime), CAST(N'2024-07-12T18:17:44.460' AS DateTime), N'Lead Relationship Type', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (84, N'/lead-relationship-type-edit', N'/k?Output=LeadRelationshipTypes\LeadRelationshipType.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T12:20:22.583' AS DateTime), CAST(N'2024-07-12T18:17:44.463' AS DateTime), N'Insert Lead Relationship Type', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (85, N'/lead-relationship-type-insert', N'/k?Output=LeadRelationshipTypes\LeadRelationshipType.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T12:20:22.583' AS DateTime), CAST(N'2024-07-12T18:17:44.463' AS DateTime), N'Update Lead Relationship Type', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (86, N'/lead-relationships', N'/k?Output=LeadRelationships\LeadRelationships.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T12:21:16.603' AS DateTime), CAST(N'2024-07-12T18:17:44.467' AS DateTime), N'Lead Relationships', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (87, N'/lead-relationship', N'/k?Output=LeadRelationships\LeadRelationship.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T12:21:16.603' AS DateTime), CAST(N'2024-07-12T18:17:44.467' AS DateTime), N'Lead Relationship', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (88, N'/lead-relationship-edit', N'/k?Output=LeadRelationships\LeadRelationship.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T12:21:16.603' AS DateTime), CAST(N'2024-07-12T18:17:44.470' AS DateTime), N'Insert Lead Relationship', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (89, N'/lead-relationship-insert', N'/k?Output=LeadRelationships\LeadRelationship.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T12:21:16.603' AS DateTime), CAST(N'2024-07-12T18:17:44.470' AS DateTime), N'Update Lead Relationship', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (90, N'/users', N'/k?Output=Users\Users.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-29T14:26:11.470' AS DateTime), CAST(N'2024-07-12T11:00:43.527' AS DateTime), N'Users', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (91, N'/user', N'/k?Output=Users\User.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-29T14:26:11.607' AS DateTime), CAST(N'2024-07-12T11:00:35.420' AS DateTime), N'User', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (92, N'/user-edit', N'/k?Output=Users\User.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-29T14:26:11.637' AS DateTime), CAST(N'2024-07-12T11:00:27.113' AS DateTime), N'Insert User', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (93, N'/user-insert', N'/k?Output=Users\User.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-29T14:26:11.657' AS DateTime), CAST(N'2024-07-12T11:00:19.297' AS DateTime), N'Update User', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (94, N'/features', N'/k?Output=Features\Features.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-29T14:32:46.850' AS DateTime), CAST(N'2024-07-12T18:17:44.470' AS DateTime), N'Features', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (95, N'/feature', N'/k?Output=Features\Feature.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-29T14:32:46.850' AS DateTime), CAST(N'2024-07-12T18:17:44.473' AS DateTime), N'Feature', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (96, N'/feature-edit', N'/k?Output=Features\Feature.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-29T14:32:46.850' AS DateTime), CAST(N'2024-07-12T18:17:44.473' AS DateTime), N'Insert Feature', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (97, N'/feature-insert', N'/k?Output=Features\Feature.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-29T14:32:46.850' AS DateTime), CAST(N'2024-07-12T18:17:44.477' AS DateTime), N'Update Feature', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (98, N'/messages', N'/k?Output=Messages\Messages.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-30T07:05:35.393' AS DateTime), CAST(N'2024-07-12T18:17:44.477' AS DateTime), N'Messages', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (99, N'/message', N'/k?Output=Messages\Message.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-30T07:05:35.397' AS DateTime), CAST(N'2024-07-12T18:17:44.480' AS DateTime), N'Message', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (100, N'/message-edit', N'/k?Output=Messages\Message.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-30T07:05:35.397' AS DateTime), CAST(N'2024-07-12T18:17:44.480' AS DateTime), N'Insert Message', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (101, N'/message-insert', N'/k?Output=Messages\Message.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-30T07:05:35.397' AS DateTime), CAST(N'2024-07-12T18:17:44.480' AS DateTime), N'Update Message', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (102, N'/calls', N'/k?Output=Calls\Calls.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-30T07:18:35.747' AS DateTime), CAST(N'2024-07-12T18:17:44.483' AS DateTime), N'Calls', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (103, N'/call', N'/k?Output=Calls\Call.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-30T07:18:35.747' AS DateTime), CAST(N'2024-07-12T18:17:44.487' AS DateTime), N'Call', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (104, N'/call-edit', N'/k?Output=Calls\Call.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-30T07:18:35.747' AS DateTime), CAST(N'2024-07-12T18:17:44.487' AS DateTime), N'Insert Call', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (105, N'/call-insert', N'/k?Output=Calls\Call.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-30T07:18:35.747' AS DateTime), CAST(N'2024-07-12T18:17:44.490' AS DateTime), N'Update Call', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1102, N'/twilio-feature', N'/k?Output=Twilio.Feature.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-07-02T07:20:46.840' AS DateTime), CAST(N'2024-07-12T18:17:44.490' AS DateTime), N'Twilio Feature', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1103, N'/files', N'/k?Output=Files\Files.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-07-26T18:43:45.857' AS DateTime), CAST(N'2024-07-26T18:43:45.857' AS DateTime), N'Files', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1104, N'/file', N'/k?Output=Files\File.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-07-26T18:43:45.930' AS DateTime), CAST(N'2024-07-26T18:43:45.930' AS DateTime), N'File', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1105, N'/file-edit', N'/k?Output=Files\File.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-07-26T18:43:45.963' AS DateTime), CAST(N'2024-07-26T18:43:45.963' AS DateTime), N'Update File', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1106, N'/file-insert', N'/k?Output=Files\File.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-07-26T18:43:45.997' AS DateTime), CAST(N'2024-07-26T18:43:45.997' AS DateTime), N'Insert File', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1107, N'/file-types', N'/k?Output=FileTypes\FileTypes.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-07-26T18:43:46.040' AS DateTime), CAST(N'2024-07-26T18:43:46.040' AS DateTime), N'File Types', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1108, N'/file-type', N'/k?Output=FileTypes\FileType.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-07-26T18:43:46.080' AS DateTime), CAST(N'2024-07-26T18:43:46.080' AS DateTime), N'File Type', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1109, N'/file-type-edit', N'/k?Output=FileTypes\FileType.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-07-26T18:43:46.120' AS DateTime), CAST(N'2024-07-26T18:43:46.120' AS DateTime), N'Update File Type', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1110, N'/file-type-insert', N'/k?Output=FileTypes\FileType.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-07-26T18:43:46.167' AS DateTime), CAST(N'2024-07-26T18:43:46.167' AS DateTime), N'Insert File Type', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1111, N'/bulk-upload-workbench', N'/k?Output=BulkUpload\BulkUploadWorkbench.ks.html&Class=SimplePage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-07-26T18:44:41.273' AS DateTime), CAST(N'2024-07-26T18:44:41.273' AS DateTime), N'Bulk Upload Workbench', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1112, N'/call-script', N'/k?Output=CallScript.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-08-01T18:52:32.637' AS DateTime), CAST(N'2024-08-01T18:52:32.637' AS DateTime), N'Call Script', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1113, N'/call-script-edit', N'/k?Output=CallScript.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-08-01T18:52:32.640' AS DateTime), CAST(N'2024-08-01T18:52:32.640' AS DateTime), N'Edit Call Script', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1114, N'/call-script-insert', N'/k?Output=CallScript.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-08-01T18:52:32.640' AS DateTime), CAST(N'2024-08-01T18:52:32.640' AS DateTime), N'Add CallScript', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1115, N'/call-scripts', N'/k?Output=Contents\CallScripts.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-08-01T18:52:32.643' AS DateTime), CAST(N'2024-08-01T18:52:32.643' AS DateTime), N'Call Scripts', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1116, N'/content-type', N'/k?Output=ContentTypes\ContentType.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-08-01T18:52:32.643' AS DateTime), CAST(N'2024-08-01T18:52:32.643' AS DateTime), N'Content Type', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1117, N'/content-type-edit', N'/k?Output=ContentTypes\ContentType.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-08-01T18:52:32.643' AS DateTime), CAST(N'2024-08-01T18:52:32.643' AS DateTime), N'Update Content Type', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1118, N'/content-type-insert', N'/k?Output=ContentTypes\ContentType.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-08-01T18:52:32.647' AS DateTime), CAST(N'2024-08-01T18:52:32.647' AS DateTime), N'Insert Content Type', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1119, N'/content-types', N'/k?Output=ContentTypes\ContentTypes.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-08-01T18:52:32.647' AS DateTime), CAST(N'2024-08-01T18:52:32.647' AS DateTime), N'Content Types', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1120, N'/agent', N'/k?Output=Agents\Agent.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-08-14T19:45:48.370' AS DateTime), CAST(N'2024-08-14T19:45:48.370' AS DateTime), N'Agent', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1121, N'/agent-edit', N'/k?Output=Agents\Agent.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-08-14T19:45:48.373' AS DateTime), CAST(N'2024-08-14T19:45:48.373' AS DateTime), N'Update Agent', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1122, N'/agent-insert', N'/k?Output=Agents\Agent.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-08-14T19:45:48.373' AS DateTime), CAST(N'2024-08-14T19:45:48.373' AS DateTime), N'Insert Agent', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1123, N'/agents', N'/k?Output=Agents\Agents.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-08-14T19:45:48.377' AS DateTime), CAST(N'2024-08-14T19:45:48.377' AS DateTime), N'Agents', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1125, N'/my-leads', N'/k?Output=Leads\Leads.My.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-08-19T18:16:12.667' AS DateTime), CAST(N'2024-08-19T18:16:12.667' AS DateTime), N'My Leads', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1127, N'/sales-representative-leads', N'/k?Output=Leads.SalesRepresentative.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-08-22T14:21:11.160' AS DateTime), CAST(N'2024-08-22T14:21:11.160' AS DateTime), N'Sales Representative Leads', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1133, N'/lead-reports', N'/k?Output=SalesRepresentatives\Lead.Reports.ks.html&Class=SimplePage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-09-06T13:35:09.100' AS DateTime), CAST(N'2024-09-06T13:35:09.100' AS DateTime), N'Lead Reports', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1134, N'/api-keys', N'/k?Output=ApiKeys\ApiKeys.Objects.ks.html&Class=SimpleObjectsPage&Handler=Buffaly.UI', 1, CAST(N'2024-09-12T14:36:24.783' AS DateTime), CAST(N'2024-09-12T14:36:24.783' AS DateTime), N'Api Keys', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1135, N'/call-initiate', N'/k?Output=Calls\Call.Initiate.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-09-12T14:36:24.787' AS DateTime), CAST(N'2024-09-12T14:36:24.787' AS DateTime), N'Make Call', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1136, N'/phone-number', N'/k?Output=PhoneNumbers\PhoneNumber.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-09-12T14:36:24.787' AS DateTime), CAST(N'2024-09-12T14:36:24.787' AS DateTime), N'Phone Number', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1137, N'/phone-number-edit', N'/k?Output=PhoneNumbers\PhoneNumber.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-09-12T14:36:24.787' AS DateTime), CAST(N'2024-09-12T14:36:24.787' AS DateTime), N'Update Phone Number', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1138, N'/phone-number-insert', N'/k?Output=PhoneNumbers\PhoneNumber.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-09-12T14:36:24.790' AS DateTime), CAST(N'2024-09-12T14:36:24.790' AS DateTime), N'Insert Phone Number', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1139, N'/phone-numbers', N'/k?Output=PhoneNumbers\PhoneNumbers.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-09-12T14:36:24.790' AS DateTime), CAST(N'2024-09-12T14:36:24.790' AS DateTime), N'Phone Numbers', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1140, N'/agent-edit-internal', N'/k?Output=Agents\Agent.Edit.Internal.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-10-05T10:37:57.440' AS DateTime), CAST(N'2024-10-05T10:37:57.440' AS DateTime), N'Update Agent Internal', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1141, N'/agent-insert-internal', N'/k?Output=Agents\Agent.Insert.Internal.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-10-05T10:37:57.480' AS DateTime), CAST(N'2024-10-05T10:37:57.480' AS DateTime), N'Insert Agent Internal', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1142, N'/agent-type', N'/k?Output=AgentTypes\AgentType.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-10-09T17:41:21.257' AS DateTime), CAST(N'2024-10-09T17:41:21.257' AS DateTime), N'Agent Type', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1143, N'/agent-type-edit', N'/k?Output=AgentTypes\AgentType.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-10-09T17:41:21.257' AS DateTime), CAST(N'2024-10-09T17:41:21.257' AS DateTime), N'Update Agent Type', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1144, N'/agent-type-insert', N'/k?Output=AgentTypes\AgentType.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-10-09T17:41:21.260' AS DateTime), CAST(N'2024-10-09T17:41:21.260' AS DateTime), N'Insert Agent Type', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1145, N'/agent-types', N'/k?Output=AgentTypes\AgentTypes.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-10-09T17:41:21.260' AS DateTime), CAST(N'2024-10-09T17:41:21.260' AS DateTime), N'Agent Types', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1146, N'/voice-agent', N'/k?Output=Agents\VoiceAgent.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-10-09T17:41:21.260' AS DateTime), CAST(N'2024-10-09T17:41:21.260' AS DateTime), N'Voice Agent', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1147, N'/voice-agent-edit', N'/k?Output=Agents\VoiceAgent.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-10-09T17:41:21.263' AS DateTime), CAST(N'2024-10-09T17:41:21.263' AS DateTime), N'Update Voice', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1162, N'/agent-builder', N'/k?Output=AgentBuilder\AgentsBuilder.ks.html&Class=SimplePage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-11-07T22:05:04.687' AS DateTime), CAST(N'2024-11-07T22:05:04.687' AS DateTime), N'Quick Agent Builder', 1)
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1163, N'/unassigned-leads', N'/k?Output=Leads\Leads.Unassigned.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-11-17T08:02:34.457' AS DateTime), CAST(N'2024-11-17T08:02:34.457' AS DateTime), N'Unassigned Leads', 1)
SET IDENTITY_INSERT [dbo].[PageLayouts] OFF
GO

USE [master]
GO
ALTER DATABASE [feedingfrenzy] SET  READ_WRITE 
GO