exec dbo.InsertPageLayoutSp @Url='/blocked-emails', 
	@Handler='/k?Output=BlockedEmails.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Blocked Emails', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/blocked-email', 
	@Handler='/k?Output=BlockedEmail.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Blocked Email', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/blocked-email-edit', 
	@Handler='/k?Output=BlockedEmail.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Blocked Email', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/blocked-email-insert', 
	@Handler='/k?Output=BlockedEmail.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Blocked Email', @SiteID=1

go











