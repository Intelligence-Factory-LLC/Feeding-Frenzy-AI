exec dbo.InsertPageLayoutSp @Url='/email-templates', 
	@Handler='/k?Output=EmailTemplates.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Email Templates', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/email-template', 
	@Handler='/k?Output=EmailTemplate.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Email Template', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/email-template-edit', 
	@Handler='/k?Output=EmailTemplate.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Email Template', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/email-template-insert', 
	@Handler='/k?Output=EmailTemplate.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Email Template', @SiteID=1

go











