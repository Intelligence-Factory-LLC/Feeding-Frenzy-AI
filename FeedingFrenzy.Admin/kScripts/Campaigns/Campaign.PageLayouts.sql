exec dbo.InsertPageLayoutSp @Url='/campaigns', 
	@Handler='/k?Output=Campaigns.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Campaigns', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/campaign', 
	@Handler='/k?Output=Campaign.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Campaign', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/campaign-edit', 
	@Handler='/k?Output=Campaign.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Campaign', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/campaign-insert', 
	@Handler='/k?Output=Campaign.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Campaign', @SiteID=1

go











