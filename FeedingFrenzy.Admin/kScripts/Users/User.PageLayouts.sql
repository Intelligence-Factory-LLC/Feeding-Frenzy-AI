use FeedingFrenzy

exec dbo.InsertPageLayoutSp  @Url='/users', 
	@Handler='/k?Output=Users\Users.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Users', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/user', 
	@Handler='/k?Output=Users\User.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1,@PageTitle='User', @SiteID=1

go

exec dbo.InsertPageLayoutSp  @Url='/user-edit', 
	@Handler='/k?Output=Users\User.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert User', @SiteID=1

go

exec dbo.InsertPageLayoutSp  @Url='/user-insert', 
	@Handler='/k?Output=Users\User.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update User', @SiteID=1

go










