exec dbo.InsertPageLayoutSp @Url='/messages', 
	@Handler='/k?Output=Messages.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Messages', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/message', 
	@Handler='/k?Output=Message.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Message', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/message-edit', 
	@Handler='/k?Output=Message.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Message', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/message-insert', 
	@Handler='/k?Output=Message.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Message', @SiteID=1

go











