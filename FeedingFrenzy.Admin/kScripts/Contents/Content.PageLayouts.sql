exec dbo.InsertPageLayoutSp @Url='/contents', 
	@Handler='/k?Output=Contents.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Contents', @SiteID=1

go


exec dbo.InsertPageLayoutSp @Url='/content', 
	@Handler='/k?Output=Content.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Content', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/content-edit', 
	@Handler='/k?Output=Content.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Content', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/content-insert', 
	@Handler='/k?Output=Content.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Content', @SiteID=1

go



exec dbo.InsertPageLayoutSp @Url='/call-scripts', 
	@Handler='/k?Output=Contents\CallScripts.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Call Scripts', @SiteID=1

go



exec dbo.InsertPageLayoutSp @Url='/call-script', 
	@Handler='/k?Output=CallScript.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Call Script', @SiteID=1

go


exec dbo.InsertPageLayoutSp @Url='/call-script-edit', 
	@Handler='/k?Output=CallScript.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Edit Call Script', @SiteID=1

go


exec dbo.InsertPageLayoutSp @Url='/call-script-insert', 
	@Handler='/k?Output=CallScript.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Add CallScript', @SiteID=1

go









