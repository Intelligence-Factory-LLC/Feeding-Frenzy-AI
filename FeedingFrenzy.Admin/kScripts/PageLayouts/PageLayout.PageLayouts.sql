exec dbo.InsertPageLayoutSp @Url='/page-layouts', 
	@Handler='/k?Output=PageLayouts.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Page Layouts', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/page-layout', 
	@Handler='/k?Output=PageLayout.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Page Layout', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/page-layout-edit', 
	@Handler='/k?Output=PageLayout.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Page Layout', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/page-layout-insert', 
	@Handler='/k?Output=PageLayout.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Page Layout', @SiteID=1

go











