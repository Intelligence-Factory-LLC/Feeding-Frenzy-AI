exec dbo.InsertPageLayoutSp @Url='/file-types', 
	@Handler='/k?Output=FileTypes\FileTypes.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='File Types', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/file-type', 
	@Handler='/k?Output=FileTypes\FileType.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='File Type', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/file-type-edit', 
	@Handler='/k?Output=FileTypes\FileType.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update File Type', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/file-type-insert', 
	@Handler='/k?Output=FileTypes\FileType.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert File Type', @SiteID=1

go











