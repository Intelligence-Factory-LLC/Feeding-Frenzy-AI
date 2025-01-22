exec dbo.InsertPageLayoutSp @Url='/area-codes', 
	@Handler='/k?Output=AreaCodes.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Area Codes', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/area-code', 
	@Handler='/k?Output=AreaCode.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Area Code', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/area-code-edit', 
	@Handler='/k?Output=AreaCode.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Area Code', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/area-code-insert', 
	@Handler='/k?Output=AreaCode.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Area Code', @SiteID=1

go











