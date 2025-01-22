exec dbo.InsertPageLayoutSp @Url='/authorizations', 
	@Handler='/k?Output=Authorizations.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Authorizations', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/authorization', 
	@Handler='/k?Output=Authorization.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Authorization', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/authorization-edit', 
	@Handler='/k?Output=Authorization.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Authorization', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/authorization-insert', 
	@Handler='/k?Output=Authorization.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Authorization', @SiteID=1

go











