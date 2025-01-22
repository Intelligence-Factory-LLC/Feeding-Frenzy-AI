exec dbo.InsertPageLayoutSp @Url='/raw-email-addresses', 
	@Handler='/k?Output=RawEmailAddresses\RawEmailAddresses.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Raw Email Addresses', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/raw-email-address', 
	@Handler='/k?Output=RawEmailAddresses\RawEmailAddress.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Raw Email Address', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/raw-email-address-edit', 
	@Handler='/k?Output=RawEmailAddresses\RawEmailAddress.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Raw Email Address', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/raw-email-address-insert', 
	@Handler='/k?Output=RawEmailAddresses\RawEmailAddress.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Raw Email Address', @SiteID=1

go











