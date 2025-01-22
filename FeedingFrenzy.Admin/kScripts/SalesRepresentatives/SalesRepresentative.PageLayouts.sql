exec dbo.InsertPageLayoutSp @Url='/sales-representatives', 
	@Handler='/k?Output=SalesRepresentatives.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Sales Representatives', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/sales-representative', 
	@Handler='/k?Output=SalesRepresentative.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Sales Representative', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/sales-representative-edit', 
	@Handler='/k?Output=SalesRepresentative.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Sales Representative', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/sales-representative-insert', 
	@Handler='/k?Output=SalesRepresentative.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Sales Representative', @SiteID=1

go











