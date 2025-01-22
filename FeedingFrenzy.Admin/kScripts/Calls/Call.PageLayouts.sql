exec dbo.InsertPageLayoutSp @Url='/calls', 
	@Handler='/k?Output=Calls.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Calls', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/call', 
	@Handler='/k?Output=Call.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Call', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/call-edit', 
	@Handler='/k?Output=Call.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Call', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/call-insert', 
	@Handler='/k?Output=Call.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Call', @SiteID=1

go



exec dbo.InsertPageLayoutSp @Url='/call-initiate', 
	@Handler='/k?Output=Calls\Call.Initiate.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Make Call', @SiteID=1

go








