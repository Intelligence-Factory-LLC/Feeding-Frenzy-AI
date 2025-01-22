exec dbo.InsertPageLayoutSp @Url='/sources', 
	@Handler='/k?Output=Sources.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Sources', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/source', 
	@Handler='/k?Output=Source.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Source', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/source-edit', 
	@Handler='/k?Output=Source.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Source', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/source-insert', 
	@Handler='/k?Output=Source.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Source', @SiteID=1

go











