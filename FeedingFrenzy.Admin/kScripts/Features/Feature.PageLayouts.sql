exec dbo.InsertPageLayoutSp @Url='/features', 
	@Handler='/k?Output=Features.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Features', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/feature', 
	@Handler='/k?Output=Feature.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Feature', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/feature-edit', 
	@Handler='/k?Output=Feature.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Feature', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/twilio-feature', 
	@Handler='/k?Output=Twilio.Feature.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Twilio Feature', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/feature-insert', 
	@Handler='/k?Output=Feature.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Feature', @SiteID=1

go













