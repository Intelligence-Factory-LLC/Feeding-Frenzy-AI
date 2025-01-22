exec dbo.InsertPageLayoutSp @LayoutID=null, @Url='/user-roles', 
	@Handler='/k.aspx?Output=UserRoles.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @KeywordsMetaTag=null, @DescriptionMetaTag=null, @PageTitle='User Roles',
	@Priority=null, @RoleID=null, @SiteID=1

go

exec dbo.InsertPageLayoutSp @LayoutID=null, @Url='/user-role', 
	@Handler='/k.aspx?Output=UserRole.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @KeywordsMetaTag=null, @DescriptionMetaTag=null, @PageTitle='User Role',
	@Priority=null, @RoleID=null, @SiteID=1

go

exec dbo.InsertPageLayoutSp @LayoutID=null, @Url='/user-role-edit', 
	@Handler='/k.aspx?Output=UserRole.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @KeywordsMetaTag=null, @DescriptionMetaTag=null, @PageTitle='Insert User Role',
	@Priority=null, @RoleID=null, @SiteID=1

go

exec dbo.InsertPageLayoutSp @LayoutID=null, @Url='/user-role-insert', 
	@Handler='/k.aspx?Output=UserRole.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @KeywordsMetaTag=null, @DescriptionMetaTag=null, @PageTitle='Update User Role',
	@Priority=null, @RoleID=null, @SiteID=1

go











