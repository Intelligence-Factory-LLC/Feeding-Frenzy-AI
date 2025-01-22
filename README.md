# FeedingFrenzy

![Logo or Banner](https://cdn.prod.website-files.com/66425af53f665d3f446fda38/66425e1668f56a9c05250780_feeding-frenzy-logo-p-500.png)

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/user/repo/actions) 
[![Version](https://img.shields.io/badge/version-1.0-blue)](https://github.com/user/repo/releases)
[![License](https://img.shields.io/badge/license-Apache%202.0-Green?style=flat-square)](LICENSE)

## About
Feeding Frenzy is an AI-powered sales optimization platform developed by **Intelligence Factory**. It enhances sales strategies by leveraging artificial intelligence to:

- Distribute leads intelligently  
- Schedule timely follow-ups  
- Recommend effective communication methods  

With a proven track record of increasing conversion rates from **12%** to **25%**, Feeding Frenzy ensures that your sales team operates at peak efficiency.

## Table of Contents 📚

1. [Try the CRM (7-Day Free Trial) 🆓](#-try-the-crm-7-day-free-trial)  
2. [Quickstart 🚀](#-quickstart)
    1. [Prerequisites](#prerequisites)
    2. [Setup Instructions](#setup-instructions)
4. [Configure Integrations](#configure-integrations)
5. [Mappings 👥🖥️](#️-mappings)
6. [Features 🌟](#-features)  
7. [Contributing 💡](#-contributing)  
8. [License ⚖️](#️-license)  

---

## 🆓 Try the CRM (7-Day Free Trial) 

If you’re not interested in cloning or self-hosting this project but would like to see how our **Feeding Frenzy Hosted Solution** can benefit your business, we offer a **7-day free trial**. This trial version lets you explore all the core features without any upfront commitment.  

- **No Technical Setup Required** – Sign up, log in, and start managing your leads and calls right away.  
- **Full Feature Access** – Experience the Voice Agents, Trainable Intelligent Managers, call scripts, and more.  
- **Cancel Anytime** – No strings attached. If you decide it’s not the right fit, you can cancel before the trial ends.  

**[Sign up here to start your 7-day free trial!](https://www.feedingfrenzy.ai/#plans)**  

---

## 🚀 Quickstart 

###  Prerequisites
Before setting up the solution, ensure your system meets the following requirements:

#### **1. .NET 8**
Download and install the .NET 8 SDK from the official .NET website.
Verify the installation by running the following command in your terminal or command prompt:
```bash
dotnet --version
```
This should return 8.x.x.
#### **2. SQL Server Express 2022**
Download and install SQL Server Express 2022 from the official Microsoft SQL Server Downloads page.
During installation, configure:
Authentication Mode: Mixed Mode (SQL Server and Windows Authentication).
Default Instance Name: SQLEXPRESS.
Ensure that the SQL Server Management Studio (SSMS) is installed for database management (Download SSMS).
#### **3. Internet Information Services (IIS) 7**
Enable IIS 7 on your machine:
Go to Control Panel > Programs > Turn Windows Features On or Off.
Select and enable the following:
Internet Information Services.
Application Development Features (e.g., ASP.NET, .NET Extensibility, and ISAPI Extensions).
Click OK to install the necessary components.
Verify IIS is running:
Open a browser and navigate to http://localhost:XXXX.
You should see the default IIS welcome page.

###  Setup Instructions

#### 1. Clone the Repository

```bash
# Clone the repo
git clone https://github.com/Intelligence-Factory-LLC/FeedingFrenzy

```

### 2. Run Initial Configuration

```bash
# Open the project FeedingFrenzy/FeedingFrenzy.Admin/ directory
cd <your_local_project_directory>/FeedingFrenzy/FeedingFrenzy.Admin/

# Execute initial configuration script with your MSSQL Server Instance Name,  your User name and Password.
# Optionally you could skip User and password by using Windows Authentication(Integrated Security):
dotnet run --init-config <your_sql_server_instance> <username(optional)> <password(optional)>


```

### 3. Setup Your Administrator User
```bash
# Open the project FeedingFrenzy/FeedingFrenzy.Admin/ directory and execute Add Administrator command
dotnet run add-administrator <user_email>

# You will get a path to generate a password, you must paste it after your hostname when running your instance in the next step:
Set password by copying and paste the following path and parameters right after current running host: http://localhost:xxxx/createpw?Code=xxxx-xxxx-xxxxx-xxxxx-xxx&Email=<user_email>

```

### 4. Run Feeding Frenzy

```bash
# Open the project FeedingFrenzy/FeedingFrenzy.Admin/ directory and execute
dotnet run

# On a web browser run the solution, the port might be different depending on your own settings
https://localhost:7181/

# Generate a password using path in the previous step (port might be different depending on your own settings)
https://localhost:7181/createpw?Code=xxxx-xxxx-xxxxx-xxxxx-xxx&Email=xxxx@xxxx.com

```

## Configure Integrations

<details>
<summary>Get your Google Gmail and Google Docs Credentials</summary>
<p>

   ### How to Obtain Google API Credentials for .NET Applications

   This guide will walk you through creating and retrieving the credentials (API Key, Client ID, and Client Secret) you need to authenticate your .NET application with Google APIs (e.g., Drive, Gmail, OAuth2).

   #### Prerequisites

   1. **Google Account**: You must have a valid Google Account.
   2. **Google Cloud Project**: You need to have a project set up in the [Google Cloud Console](https://console.cloud.google.com/).


   #### 1. Create or Select a Google Cloud Project

   1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
   2. In the top-left corner (the **Project** selector), choose an existing project or click **New Project** to create a new one.
   3. Give your project a name, e.g., `MyFFApp`, and click **Create**.

   > **Tip**: Remember the **Project ID** or **Project Name**—you’ll need it later.

   ---

   #### 2. Enable the Required APIs

   1. In the left sidebar, click **APIs & Services** \> **Library**.
   2. Search for the APIs you want to use (e.g., **Google Drive API**, **Gmail API**, etc.).
   3. Click on each API you need, then click **Enable**.

   ---

   #### 3. Create Credentials

   1. Go to **APIs & Services** \> **Credentials**.
   2. Click **+ CREATE CREDENTIALS**.
   3. Choose one of the following based on your needs:

   #### 3.1 OAuth Client ID (Recommended for User-Driven Apps)

   - Select **OAuth client ID** from the dropdown.
   - If prompted, configure the **OAuth consent screen** (enter an application name and other details).
   - Under **Application type**, select one of:
   - **Web application** (for web-based apps)
   - **Desktop app**
   - **Other** (depending on your scenario)
   - Set up the **Authorized redirect URIs** (for web apps) or leave it empty if not applicable.
   - Click **Create**.

   > **Result**: You’ll get a **Client ID** and **Client Secret**.
   
   > Add it to **appsettings.json** > AppSettings > GmailHelper section.
</p>
</details>

---

## 👥🖥️ Mappings

### 👥 Roles

- **Administrator**  
  Responsible for managing users, overseeing leads, and configuring system-wide settings.

- **Sales Representative**  
  Focuses on engaging with leads, making calls, and tracking activities to close deals.

### 🖥️ UI Elements

1. **Left Bar Menu Navigation**  
   The primary navigation area, allowing quick access to modules such as Dashboard, Customer Management, and User Management.

2. **Top Bar**  
   Displays the current user’s profile and role (Administrator or Sales Representative). It also contains quick-access buttons and settings.

3. **Full Screen Button**  
   Toggles the CRM’s interface to a full-screen mode for an immersive view of the dashboard or other screens.

4. **Language Switcher**  
   Switches the interface language on-the-fly for multilingual support.

---

## 🌟 Features

### 1. AI-Powered Call Center

Feeding Frenzy’s **AI-Powered Call Center** is designed to handle both inbound and outbound calls with precision and scalability:

| <img src="https://cdn.prod.website-files.com/66425af53f665d3f446fda38/6696bb44e645a9f4676cc8c4_Dialing%20Pad%20%23%203%20-%20v2-p-800.png" alt="Unified Communications Illustration" width="400" /> | <img src="https://cdn.prod.website-files.com/66425af53f665d3f446fda38/667c1159136c41d1e5740644_image1-p-800.png" alt="Real Time Feedback Loop Illustration" width="400" /> |
|---|---|


- **Unified Communications**: Manage calls, texts, and emails in one place.  
- **Smart Routing & Queuing**: Automatically route incoming calls to the right agent or department based on AI-driven logic.  
- **Real-Time Dashboards**: Monitor live call queues, agent availability, and performance metrics to make data-driven decisions.  
- **Advanced Analytics**: Track call outcomes, measure agent effectiveness, and use predictive insights to optimize lead conversion.  
- **Scalable Team Management**: Easily onboard new agents and maintain consistent quality through standardized scripts and workflows.

### 2. Voice Agents

<img 
  src="https://cdn.prod.website-files.com/66425af53f665d3f446fda38/66fff111f86dfdf3dfb19c0a_FFV%20Image.png" 
  alt="Voice Agents Screenshot Illustration" 
  width="200" 
/>

Leverage **Feeding Frenzy’s Voice Agents** to revolutionize how you handle customer interactions:

- **Conversational AI**: Natural language processing (NLP) and speech recognition for seamless human-like conversations.  
- **24/7 Availability**: Automate routine inbound and outbound calls, freeing up your sales reps for high-value interactions.  
- **Multilingual Support**: Engage leads and customers in different languages, expanding your global reach.  
- **Personality & Brand Alignment**: Train voice agents with a custom tone and style that reflects your brand identity.  
- **Seamless Escalation**: Handoff to human agents or specialized teams when more complex assistance is needed.

### 3. Dashboard

<img 
  src="https://cdn.prod.website-files.com/66425af53f665d3f446fda38/675a063aa122765571b7ed8c_Calendar%20Feature%20Image-p-800.jpg" 
  alt="Dashboard Calendar Illustration" 
  width="400" 
/>

- **Overview**: Displays upcoming scheduled calls, current agent activities, and key performance indicators.  
- **Key Functions**:  
  - View call schedule and tasks.  
  - Monitor weekly activities and agent performance.  
  - Jump to specific leads or call actions instantly.

### 4. Customer Management

<img 
  src="https://cdn.prod.website-files.com/66425af53f665d3f446fda38/667b2b0bf722ca5b550ceff4_image3-p-800.png" 
  alt="CRM Illustration" 
  width="400" 
/>

#### 4.1 Leads

- **My Leads (Sales Representatives)**  
  - Personalized list of leads assigned to each Sales Rep.  
  - Add new leads, export leads, and filter by Tag or Status for targeted follow-ups.

#### 4.2 Calls
- **Create Call Script**  
  - Standardize messaging and ensure high-quality interactions by designing reusable scripts.

- **Make a Call**  
  - Initiate calls directly to leads.  
  - Select a virtual number, audio device, and open the relevant call script.

- **Call History**  
  - View and analyze past calls, durations, and outcomes for continuous improvement.

### 5. User Management

<img 
  src="https://cdn.prod.website-files.com/66425af53f665d3f446fda38/67101523a84fb8012eb810a5_Computer%20Mockup%20-%20TIM%20v2.png" 
  alt="TIM Illustration" 
  width="400" 
/>

#### 5.1 Trainable Intelligent Managers (TIM)
- **Description**: AI-driven managers for call handling (Inbound, Outbound, or Both).  
- **Setup Options**:  
  - Configure “Caller” and “Responder” personas with unique personalities.  
  - Enhance data extraction and lead qualification for precise follow-ups.

<img 
  src="https://cdn.prod.website-files.com/66425af53f665d3f446fda38/670d1bf509a338ea60aed3ce_voice.png" 
  alt="Voice Agents Illustration" 
  width="100" 
/>

#### 5.2 Voice Agents – Quick Agent Builder
- **Description**: Build and configure AI Voice Agents to handle routine inquiries or FAQs.  
- **Key Features**:  
  - Train agents on your business website or custom content.  
  - Handle inbound queries automatically, with escalation to humans when needed.  
  - Provide consistent, on-brand interactions across all calls.

### 6. Content Management

#### 6.1 Emails – Email Templates
- **Description**: Prebuilt templates for automated or manual follow-ups.  
- **Key Advantages**:  
  - Consistent branding and tone.  
  - Personalization tokens for each lead.  
  - Quicker outreach and better email organization.

---

## 🎬 Demo: How some of the features work

### Voice Agent Overview

[![Voice Agents Overview](https://img.youtube.com/vi/s1yyFEe3nMM/0.jpg)](https://www.youtube.com/watch?v=s1yyFEe3nMM "Voice Agents Overview")

---

## 💡 Contributing
Contributions are welcome! If you’d like to propose changes or enhancements:

1. **Fork** the repository.  
2. **Create a new branch** for your feature or fix.  
3. **Submit a Pull Request** with a detailed description of your changes.

---

## ⚖️ License

FeedingFrenzy is licensed under the [Apache License 2.0](LICENSE) for open-source use.

For commercial or enterprise use—including official support, advanced features, or if you are a direct competitor—please see [COMMERCIAL_LICENSE.md](COMMERCIAL_LICENSE.md) or contact licensing@feedingfrenzy.ai