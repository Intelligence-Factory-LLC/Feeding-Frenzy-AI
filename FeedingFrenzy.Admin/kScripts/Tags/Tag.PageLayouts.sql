exec dbo.InsertPageLayoutSp @Url='/tags', 
	@Handler='/k?Output=Tags.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Tags', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/tag', 
	@Handler='/k?Output=Tag.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Tag', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/tag-edit', 
	@Handler='/k?Output=Tag.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Tag', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/tag-insert', 
	@Handler='/k?Output=Tag.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Tag', @SiteID=1

go











