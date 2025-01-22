exec dbo.InsertPageLayoutSp @Url='/sales-representative-types', 
	@Handler='/k?Output=SalesRepresentativeTypes.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Sales Representative Types', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/sales-representative-type', 
	@Handler='/k?Output=SalesRepresentativeType.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Sales Representative Type', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/sales-representative-type-edit', 
	@Handler='/k?Output=SalesRepresentativeType.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Sales Representative Type', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/sales-representative-type-insert', 
	@Handler='/k?Output=SalesRepresentativeType.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Sales Representative Type', @SiteID=1

go











