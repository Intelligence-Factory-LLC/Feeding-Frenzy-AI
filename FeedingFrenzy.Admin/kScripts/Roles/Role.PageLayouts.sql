exec dbo.InsertPageLayoutSp @Url='/roles', 
	@Handler='/k?Output=Roles.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Roles', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/role', 
	@Handler='/k?Output=Role.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Role', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/role-edit', 
	@Handler='/k?Output=Role.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Role', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/role-insert', 
	@Handler='/k?Output=Role.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Role', @SiteID=1

go











