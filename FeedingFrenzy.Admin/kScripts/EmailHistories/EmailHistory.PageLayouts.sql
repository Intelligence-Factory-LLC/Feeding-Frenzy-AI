exec dbo.InsertPageLayoutSp @Url='/email-histories', 
	@Handler='/k?Output=EmailHistories.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Email Histories', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/email-history', 
	@Handler='/k?Output=EmailHistory.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Email History', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/email-history-edit', 
	@Handler='/k?Output=EmailHistory.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Email History', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/email-history-insert', 
	@Handler='/k?Output=EmailHistory.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Email History', @SiteID=1

go











