exec dbo.InsertPageLayoutSp @Url='/content-types', 
	@Handler='/k?Output=ContentTypes\ContentTypes.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Content Types', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/content-type', 
	@Handler='/k?Output=ContentTypes\ContentType.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Content Type', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/content-type-edit', 
	@Handler='/k?Output=ContentTypes\ContentType.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Content Type', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/content-type-insert', 
	@Handler='/k?Output=ContentTypes\ContentType.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Content Type', @SiteID=1

go











