exec dbo.InsertPageLayoutSp @LayoutID=null, @Url='/api-keys', 
	@Handler='/k?Output=ApiKeys\ApiKeys.Objects.ks.html&Class=SimpleObjectsPage&Handler=Buffaly.UI', 
	@IsEnabled=1, @PageTitle='Api Keys', @SiteID=1

go

exec dbo.InsertPageLayoutSp @LayoutID=null, @Url='/api-key', 
	@Handler='/k?Output=ApiKeys\ApiKey.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=Buffaly.UI', 
	@IsEnabled=1, @KeywordsMetaTag=null, @DescriptionMetaTag=null, @PageTitle='Api Key',
	@Priority=null, @RoleID=null, @SiteID=2

go

exec dbo.InsertPageLayoutSp @LayoutID=null, @Url='/api-key-edit', 
	@Handler='/k?Output=ApiKeys\ApiKey.Edit.ks.html&Class=SimpleObjectEditPage&Handler=Buffaly.UI', 
	@IsEnabled=1, @KeywordsMetaTag=null, @DescriptionMetaTag=null, @PageTitle='Insert Api Key',
	@Priority=null, @RoleID=null, @SiteID=2

go

exec dbo.InsertPageLayoutSp @LayoutID=null, @Url='/api-key-insert', 
	@Handler='/k?Output=ApiKeys\ApiKey.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=Buffaly.UI', 
	@IsEnabled=1, @KeywordsMetaTag=null, @DescriptionMetaTag=null, @PageTitle='Update Api Key',
	@Priority=null, @RoleID=null, @SiteID=2

go
