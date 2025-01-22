USE [feedingfrenzy]
GO
SET IDENTITY_INSERT [dbo].[PageLayouts] ON 
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1, N'/roles', N'/k?Output=Roles\Roles.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-01T14:54:52.893' AS DateTime), CAST(N'2024-07-12T18:16:58.533' AS DateTime), N'Roles', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (2, N'/role', N'/k?Output=Roles\Role.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-01T14:54:52.893' AS DateTime), CAST(N'2024-07-12T18:17:44.347' AS DateTime), N'Role', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (3, N'/role-edit', N'/k?Output=Roles\Role.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-01T14:54:52.893' AS DateTime), CAST(N'2024-07-12T18:17:44.350' AS DateTime), N'Insert Role', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (4, N'/role-insert', N'/k?Output=Roles\Role.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-01T14:54:52.897' AS DateTime), CAST(N'2024-07-12T18:17:44.350' AS DateTime), N'Update Role', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (6, N'/authorizations', N'/k?Output=Authorizations\Authorizations.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-06T14:56:37.007' AS DateTime), CAST(N'2024-07-12T18:17:44.353' AS DateTime), N'Authorizations', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (7, N'/authorization', N'/k?Output=Authorizations\Authorization.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-06T14:56:37.023' AS DateTime), CAST(N'2024-07-12T18:17:44.353' AS DateTime), N'Authorization', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (8, N'/authorization-edit', N'/k?Output=Authorizations\Authorization.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-06T14:56:37.047' AS DateTime), CAST(N'2024-07-12T18:17:44.357' AS DateTime), N'Insert Authorization', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (9, N'/authorization-insert', N'/k?Output=Authorizations\Authorization.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-06T14:56:37.070' AS DateTime), CAST(N'2024-07-12T18:17:44.357' AS DateTime), N'Update Authorization', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (10, N'/leads', N'/k?Output=Leads\Leads.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:24.793' AS DateTime), CAST(N'2024-07-12T11:24:05.783' AS DateTime), N'Leads', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (11, N'/lead', N'/k?Output=Leads\Lead.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:24.797' AS DateTime), CAST(N'2024-07-12T11:24:49.233' AS DateTime), N'Lead', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (12, N'/lead-edit', N'/k?Output=Leads\Lead.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:24.797' AS DateTime), CAST(N'2024-07-12T11:24:39.480' AS DateTime), N'Insert Lead', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (13, N'/lead-insert', N'/k?Output=Leads\Lead.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:24.797' AS DateTime), CAST(N'2024-07-12T11:24:30.070' AS DateTime), N'Update Lead', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (14, N'/lead-tags', N'/k?Output=LeadTags\LeadTags.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:26.570' AS DateTime), CAST(N'2024-07-12T18:17:44.360' AS DateTime), N'Lead Tags', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (15, N'/lead-tag', N'/k?Output=LeadTags\LeadTag.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:26.570' AS DateTime), CAST(N'2024-07-12T18:17:44.360' AS DateTime), N'Lead Tag', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (16, N'/lead-tag-edit', N'/k?Output=LeadTags\LeadTag.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:26.570' AS DateTime), CAST(N'2024-07-12T18:17:44.360' AS DateTime), N'Insert Lead Tag', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (17, N'/lead-tag-insert', N'/k?Output=LeadTags\LeadTag.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:26.570' AS DateTime), CAST(N'2024-07-12T18:17:44.363' AS DateTime), N'Update Lead Tag', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (18, N'/tags', N'/k?Output=Tags\Tags.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:27.653' AS DateTime), CAST(N'2024-07-12T18:17:44.367' AS DateTime), N'Tags', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (19, N'/tag', N'/k?Output=Tags\Tag.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:27.653' AS DateTime), CAST(N'2024-07-12T18:17:44.367' AS DateTime), N'Tag', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (20, N'/tag-edit', N'/k?Output=Tags\Tag.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:27.653' AS DateTime), CAST(N'2024-07-12T18:17:44.367' AS DateTime), N'Insert Tag', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (21, N'/tag-insert', N'/k?Output=Tags\Tag.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:27.653' AS DateTime), CAST(N'2024-07-12T18:17:44.370' AS DateTime), N'Update Tag', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (22, N'/lead-notes', N'/k?Output=LeadNotes\LeadNotes.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:28.087' AS DateTime), CAST(N'2024-07-12T18:17:44.370' AS DateTime), N'Lead Notes', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (23, N'/lead-note', N'/k?Output=LeadNotes\LeadNote.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:28.090' AS DateTime), CAST(N'2024-07-12T18:17:44.373' AS DateTime), N'Lead Note', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (24, N'/lead-note-edit', N'/k?Output=LeadNotes\LeadNote.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:28.090' AS DateTime), CAST(N'2024-07-12T18:17:44.373' AS DateTime), N'Insert Lead Note', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (25, N'/lead-note-insert', N'/k?Output=LeadNotes\LeadNote.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:28.090' AS DateTime), CAST(N'2024-07-12T18:17:44.377' AS DateTime), N'Update Lead Note', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (26, N'/lead-note-types', N'/k?Output=LeadNoteTypes\LeadNoteTypes.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:29.300' AS DateTime), CAST(N'2024-07-12T18:17:44.377' AS DateTime), N'Lead Note Types', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (27, N'/lead-note-type', N'/k?Output=LeadNoteTypes\LeadNoteType.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:29.300' AS DateTime), CAST(N'2024-07-12T18:17:44.377' AS DateTime), N'Lead Note Type', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (28, N'/lead-note-type-edit', N'/k?Output=LeadNoteTypes\LeadNoteType.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:29.300' AS DateTime), CAST(N'2024-07-12T18:17:44.380' AS DateTime), N'Insert Lead Note Type', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (29, N'/lead-note-type-insert', N'/k?Output=LeadNoteTypes\LeadNoteType.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:29.300' AS DateTime), CAST(N'2024-07-12T18:17:44.380' AS DateTime), N'Update Lead Note Type', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (30, N'/lead-statuses', N'/k?Output=LeadStatuses\LeadStatuses.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:29.760' AS DateTime), CAST(N'2024-07-12T18:17:44.383' AS DateTime), N'Lead Statuses', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (31, N'/lead-status', N'/k?Output=LeadStatuses\LeadStatus.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:29.760' AS DateTime), CAST(N'2024-07-13T19:13:05.720' AS DateTime), N'Lead Status', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (32, N'/lead-status-edit', N'/k?Output=LeadStatuses\LeadStatus.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:29.760' AS DateTime), CAST(N'2024-07-13T19:12:55.853' AS DateTime), N'Insert Lead Status', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (33, N'/lead-status-insert', N'/k?Output=LeadStatuses\LeadStatus.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:29.763' AS DateTime), CAST(N'2024-07-13T19:12:30.800' AS DateTime), N'Update Lead Status', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (34, N'/lead-sub-statuses', N'/k?Output=LeadSubStatuses\LeadSubStatuses.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:30.150' AS DateTime), CAST(N'2024-07-12T18:17:44.390' AS DateTime), N'Lead Sub Statuses', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (35, N'/lead-sub-status', N'/k?Output=LeadSubStatuses\LeadSubStatus.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:30.150' AS DateTime), CAST(N'2024-07-13T19:12:22.513' AS DateTime), N'Lead Sub Status', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (36, N'/lead-sub-status-edit', N'/k?Output=LeadSubStatuses\LeadSubStatus.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:30.150' AS DateTime), CAST(N'2024-07-13T19:12:16.900' AS DateTime), N'Insert Lead Sub Status', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (37, N'/lead-sub-status-insert', N'/k?Output=LeadSubStatuses\LeadSubStatus.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:30.150' AS DateTime), CAST(N'2024-07-13T19:12:10.250' AS DateTime), N'Update Lead Sub Status', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (38, N'/sources', N'/k?Output=Sources\Sources.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:30.953' AS DateTime), CAST(N'2024-07-12T18:17:44.397' AS DateTime), N'Sources', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (39, N'/source', N'/k?Output=Sources\Source.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:30.953' AS DateTime), CAST(N'2024-07-12T18:17:44.397' AS DateTime), N'Source', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (40, N'/source-edit', N'/k?Output=Sources\Source.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:30.953' AS DateTime), CAST(N'2024-07-12T18:17:44.400' AS DateTime), N'Insert Source', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (41, N'/source-insert', N'/k?Output=Sources\Source.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:30.957' AS DateTime), CAST(N'2024-07-12T18:17:44.400' AS DateTime), N'Update Source', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (42, N'/campaigns', N'/k?Output=Campaigns\Campaigns.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:31.367' AS DateTime), CAST(N'2024-07-12T18:17:44.400' AS DateTime), N'Campaigns', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (43, N'/campaign', N'/k?Output=Campaigns\Campaign.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:31.367' AS DateTime), CAST(N'2024-07-12T18:17:44.403' AS DateTime), N'Campaign', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (44, N'/campaign-edit', N'/k?Output=Campaigns\Campaign.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:31.370' AS DateTime), CAST(N'2024-07-12T18:17:44.403' AS DateTime), N'Insert Campaign', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (45, N'/campaign-insert', N'/k?Output=Campaigns\Campaign.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:00:31.370' AS DateTime), CAST(N'2024-07-12T18:17:44.407' AS DateTime), N'Update Campaign', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (46, N'/page-layouts', N'/k?Output=PageLayouts\PageLayouts.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:31.437' AS DateTime), CAST(N'2024-07-12T18:17:44.410' AS DateTime), N'Page Layouts', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (47, N'/page-layout', N'/k?Output=PageLayouts\PageLayout.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:31.440' AS DateTime), CAST(N'2024-07-12T18:17:44.410' AS DateTime), N'Page Layout', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (48, N'/page-layout-edit', N'/k?Output=PageLayouts\PageLayout.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:31.440' AS DateTime), CAST(N'2024-07-12T18:17:44.410' AS DateTime), N'Insert Page Layout', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (49, N'/page-layout-insert', N'/k?Output=PageLayouts\PageLayout.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:31.440' AS DateTime), CAST(N'2024-07-12T18:17:44.413' AS DateTime), N'Update Page Layout', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (50, N'/email-templates', N'/k?Output=EmailTemplates\EmailTemplates.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:31.913' AS DateTime), CAST(N'2024-07-12T18:17:44.413' AS DateTime), N'Email Templates', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (51, N'/email-template', N'/k?Output=EmailTemplates\EmailTemplate.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:31.913' AS DateTime), CAST(N'2024-07-12T18:17:44.417' AS DateTime), N'Email Template', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (52, N'/email-template-edit', N'/k?Output=EmailTemplates\EmailTemplate.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:31.913' AS DateTime), CAST(N'2024-07-12T18:17:44.417' AS DateTime), N'Insert Email Template', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (53, N'/email-template-insert', N'/k?Output=EmailTemplates\EmailTemplate.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:31.913' AS DateTime), CAST(N'2024-07-12T18:17:44.417' AS DateTime), N'Update Email Template', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (54, N'/email-histories', N'/k?Output=EmailHistories\EmailHistories.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:32.400' AS DateTime), CAST(N'2024-07-12T18:17:44.420' AS DateTime), N'Email Histories', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (55, N'/email-history', N'/k?Output=EmailHistories\EmailHistory.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:32.400' AS DateTime), CAST(N'2024-07-12T18:17:44.420' AS DateTime), N'Email History', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (56, N'/email-history-edit', N'/k?Output=EmailHistories\EmailHistory.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:32.400' AS DateTime), CAST(N'2024-07-12T18:17:44.423' AS DateTime), N'Insert Email History', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (57, N'/email-history-insert', N'/k?Output=EmailHistories\EmailHistory.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:32.400' AS DateTime), CAST(N'2024-07-12T18:17:44.423' AS DateTime), N'Update Email History', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (58, N'/blocked-emails', N'/k?Output=BlockedEmails\BlockedEmails.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:33.370' AS DateTime), CAST(N'2024-07-12T18:17:44.427' AS DateTime), N'Blocked Emails', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (59, N'/blocked-email', N'/k?Output=BlockedEmails\BlockedEmail.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:33.370' AS DateTime), CAST(N'2024-07-12T18:17:44.430' AS DateTime), N'Blocked Email', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (60, N'/blocked-email-edit', N'/k?Output=BlockedEmails\BlockedEmail.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:33.370' AS DateTime), CAST(N'2024-07-12T18:17:44.430' AS DateTime), N'Insert Blocked Email', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (61, N'/blocked-email-insert', N'/k?Output=BlockedEmails\BlockedEmail.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:33.370' AS DateTime), CAST(N'2024-07-12T18:17:44.430' AS DateTime), N'Update Blocked Email', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (62, N'/contents', N'/k?Output=Contents\Contents.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:33.747' AS DateTime), CAST(N'2024-07-12T18:17:44.433' AS DateTime), N'Contents', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (63, N'/content', N'/k?Output=Contents\Content.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:33.747' AS DateTime), CAST(N'2024-07-12T18:17:44.433' AS DateTime), N'Content', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (64, N'/content-edit', N'/k?Output=Contents\Content.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:33.747' AS DateTime), CAST(N'2024-07-12T18:17:44.437' AS DateTime), N'Insert Content', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (65, N'/content-insert', N'/k?Output=Contents\Content.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-02-07T15:10:33.747' AS DateTime), CAST(N'2024-07-12T18:17:44.437' AS DateTime), N'Update Content', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (66, N'/sales-representative-types', N'/k?Output=SalesRepresentativeTypes\SalesRepresentativeTypes.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-20T10:29:16.590' AS DateTime), CAST(N'2024-07-12T18:17:44.440' AS DateTime), N'Sales Representative Types', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (67, N'/sales-representative-type', N'/k?Output=SalesRepresentativeTypes\SalesRepresentativeType.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-20T10:29:16.590' AS DateTime), CAST(N'2024-07-12T18:17:44.440' AS DateTime), N'Sales Representative Type', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (68, N'/sales-representative-type-edit', N'/k?Output=SalesRepresentativeTypes\SalesRepresentativeType.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-20T10:29:16.590' AS DateTime), CAST(N'2024-07-12T18:17:44.440' AS DateTime), N'Insert Sales Representative Type', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (69, N'/sales-representative-type-insert', N'/k?Output=SalesRepresentativeTypes\SalesRepresentativeType.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-20T10:29:16.590' AS DateTime), CAST(N'2024-07-12T18:17:44.443' AS DateTime), N'Update Sales Representative Type', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (70, N'/sales-representatives', N'/k?Output=SalesRepresentatives\SalesRepresentatives.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-22T14:57:34.360' AS DateTime), CAST(N'2024-07-12T18:17:44.443' AS DateTime), N'Sales Representatives', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (71, N'/sales-representative', N'/k?Output=SalesRepresentatives\SalesRepresentative.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-22T14:57:34.360' AS DateTime), CAST(N'2024-07-12T18:17:44.447' AS DateTime), N'Sales Representative', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (72, N'/sales-representative-edit', N'/k?Output=SalesRepresentatives\SalesRepresentative.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-22T14:57:34.360' AS DateTime), CAST(N'2024-07-12T18:17:44.447' AS DateTime), N'Insert Sales Representative', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (73, N'/sales-representative-insert', N'/k?Output=SalesRepresentatives\SalesRepresentative.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-22T14:57:34.360' AS DateTime), CAST(N'2024-07-12T18:17:44.447' AS DateTime), N'Update Sales Representative', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (74, N'/area-codes', N'/k?Output=AreaCodes\AreaCodes.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T08:09:05.773' AS DateTime), CAST(N'2024-07-12T18:17:44.450' AS DateTime), N'Area Codes', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (75, N'/area-code', N'/k?Output=AreaCodes\AreaCode.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T08:09:05.773' AS DateTime), CAST(N'2024-07-12T18:17:44.450' AS DateTime), N'Area Code', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (76, N'/area-code-edit', N'/k?Output=AreaCodes\AreaCode.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T08:09:05.773' AS DateTime), CAST(N'2024-07-12T18:17:44.450' AS DateTime), N'Insert Area Code', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (77, N'/area-code-insert', N'/k?Output=AreaCodes\AreaCode.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T08:09:05.773' AS DateTime), CAST(N'2024-07-12T18:17:44.453' AS DateTime), N'Update Area Code', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (78, N'/lead-contacts', N'/k?Output=LeadContacts\LeadContacts.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T08:12:55.820' AS DateTime), CAST(N'2024-07-12T18:17:44.453' AS DateTime), N'Lead Contacts', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (79, N'/lead-contact', N'/k?Output=LeadContacts\LeadContact.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T08:12:55.820' AS DateTime), CAST(N'2024-07-12T18:17:44.457' AS DateTime), N'Lead Contact', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (80, N'/lead-contact-edit', N'/k?Output=LeadContacts\LeadContact.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T08:12:55.820' AS DateTime), CAST(N'2024-07-12T18:17:44.457' AS DateTime), N'Insert Lead Contact', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (81, N'/lead-contact-insert', N'/k?Output=LeadContacts\LeadContact.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T08:12:55.823' AS DateTime), CAST(N'2024-07-12T18:17:44.460' AS DateTime), N'Update Lead Contact', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (82, N'/lead-relationship-types', N'/k?Output=LeadRelationshipTypes\LeadRelationshipTypes.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T12:20:22.583' AS DateTime), CAST(N'2024-07-12T18:17:44.460' AS DateTime), N'Lead Relationship Types', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (83, N'/lead-relationship-type', N'/k?Output=LeadRelationshipTypes\LeadRelationshipType.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T12:20:22.583' AS DateTime), CAST(N'2024-07-12T18:17:44.460' AS DateTime), N'Lead Relationship Type', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (84, N'/lead-relationship-type-edit', N'/k?Output=LeadRelationshipTypes\LeadRelationshipType.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T12:20:22.583' AS DateTime), CAST(N'2024-07-12T18:17:44.463' AS DateTime), N'Insert Lead Relationship Type', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (85, N'/lead-relationship-type-insert', N'/k?Output=LeadRelationshipTypes\LeadRelationshipType.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T12:20:22.583' AS DateTime), CAST(N'2024-07-12T18:17:44.463' AS DateTime), N'Update Lead Relationship Type', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (86, N'/lead-relationships', N'/k?Output=LeadRelationships\LeadRelationships.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T12:21:16.603' AS DateTime), CAST(N'2024-07-12T18:17:44.467' AS DateTime), N'Lead Relationships', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (87, N'/lead-relationship', N'/k?Output=LeadRelationships\LeadRelationship.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T12:21:16.603' AS DateTime), CAST(N'2024-07-12T18:17:44.467' AS DateTime), N'Lead Relationship', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (88, N'/lead-relationship-edit', N'/k?Output=LeadRelationships\LeadRelationship.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T12:21:16.603' AS DateTime), CAST(N'2024-07-12T18:17:44.470' AS DateTime), N'Insert Lead Relationship', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (89, N'/lead-relationship-insert', N'/k?Output=LeadRelationships\LeadRelationship.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-26T12:21:16.603' AS DateTime), CAST(N'2024-07-12T18:17:44.470' AS DateTime), N'Update Lead Relationship', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (90, N'/users', N'/k?Output=Users\Users.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-29T14:26:11.470' AS DateTime), CAST(N'2024-07-12T11:00:43.527' AS DateTime), N'Users', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (91, N'/user', N'/k?Output=Users\User.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-29T14:26:11.607' AS DateTime), CAST(N'2024-07-12T11:00:35.420' AS DateTime), N'User', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (92, N'/user-edit', N'/k?Output=Users\User.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-29T14:26:11.637' AS DateTime), CAST(N'2024-07-12T11:00:27.113' AS DateTime), N'Insert User', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (93, N'/user-insert', N'/k?Output=Users\User.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2023-08-29T14:26:11.657' AS DateTime), CAST(N'2024-07-12T11:00:19.297' AS DateTime), N'Update User', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (94, N'/features', N'/k?Output=Features\Features.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-29T14:32:46.850' AS DateTime), CAST(N'2024-07-12T18:17:44.470' AS DateTime), N'Features', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (95, N'/feature', N'/k?Output=Features\Feature.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-29T14:32:46.850' AS DateTime), CAST(N'2024-07-12T18:17:44.473' AS DateTime), N'Feature', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (96, N'/feature-edit', N'/k?Output=Features\Feature.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-29T14:32:46.850' AS DateTime), CAST(N'2024-07-12T18:17:44.473' AS DateTime), N'Insert Feature', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (97, N'/feature-insert', N'/k?Output=Features\Feature.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-29T14:32:46.850' AS DateTime), CAST(N'2024-07-12T18:17:44.477' AS DateTime), N'Update Feature', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (98, N'/messages', N'/k?Output=Messages\Messages.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-30T07:05:35.393' AS DateTime), CAST(N'2024-07-12T18:17:44.477' AS DateTime), N'Messages', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (99, N'/message', N'/k?Output=Messages\Message.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-30T07:05:35.397' AS DateTime), CAST(N'2024-07-12T18:17:44.480' AS DateTime), N'Message', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (100, N'/message-edit', N'/k?Output=Messages\Message.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-30T07:05:35.397' AS DateTime), CAST(N'2024-07-12T18:17:44.480' AS DateTime), N'Insert Message', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (101, N'/message-insert', N'/k?Output=Messages\Message.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-30T07:05:35.397' AS DateTime), CAST(N'2024-07-12T18:17:44.480' AS DateTime), N'Update Message', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (102, N'/calls', N'/k?Output=Calls\Calls.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-30T07:18:35.747' AS DateTime), CAST(N'2024-07-12T18:17:44.483' AS DateTime), N'Calls', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (103, N'/call', N'/k?Output=Calls\Call.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-30T07:18:35.747' AS DateTime), CAST(N'2024-07-12T18:17:44.487' AS DateTime), N'Call', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (104, N'/call-edit', N'/k?Output=Calls\Call.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-30T07:18:35.747' AS DateTime), CAST(N'2024-07-12T18:17:44.487' AS DateTime), N'Insert Call', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (105, N'/call-insert', N'/k?Output=Calls\Call.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-06-30T07:18:35.747' AS DateTime), CAST(N'2024-07-12T18:17:44.490' AS DateTime), N'Update Call', 1)
GO
INSERT [dbo].[PageLayouts] ([PageLayoutID], [Url], [Handler], [IsEnabled], [DateCreated], [LastUpdated], [PageTitle], [SiteID]) VALUES (1102, N'/twilio-feature', N'/k?Output=Twilios\Twilio.Feature.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 1, CAST(N'2024-07-02T07:20:46.840' AS DateTime), CAST(N'2024-07-12T18:17:44.490' AS DateTime), N'Twilio Feature', 1)
GO
SET IDENTITY_INSERT [dbo].[PageLayouts] OFF
GO
