exec dbo.InsertPageLayoutSp @Url='/raw-emails', 
	@Handler='/k?Output=RawEmails\RawEmails.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Raw Emails', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/raw-email', 
	@Handler='/k?Output=RawEmails\RawEmail.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Raw Email', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/raw-email-edit', 
	@Handler='/k?Output=RawEmails\RawEmail.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Raw Email', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/raw-email-insert', 
	@Handler='/k?Output=RawEmails\RawEmail.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Raw Email', @SiteID=1

go











