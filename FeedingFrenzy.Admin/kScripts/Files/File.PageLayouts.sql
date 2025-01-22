exec dbo.InsertPageLayoutSp @Url='/files', 
	@Handler='/k?Output=Files\Files.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Files', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/file', 
	@Handler='/k?Output=Files\File.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='File', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/file-edit', 
	@Handler='/k?Output=Files\File.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update File', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/file-insert', 
	@Handler='/k?Output=Files\File.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert File', @SiteID=1

go











