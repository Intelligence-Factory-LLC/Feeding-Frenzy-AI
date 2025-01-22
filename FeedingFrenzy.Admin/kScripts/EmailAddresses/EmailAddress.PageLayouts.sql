exec dbo.InsertPageLayoutSp @Url='/email-addresses', 
	@Handler='/k?Output=EmailAddresses\EmailAddresses.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Email Addresses', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/email-address', 
	@Handler='/k?Output=EmailAddresses\EmailAddress.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Email Address', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/email-address-edit', 
	@Handler='/k?Output=EmailAddresses\EmailAddress.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Email Address', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/email-address-insert', 
	@Handler='/k?Output=EmailAddresses\EmailAddress.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Email Address', @SiteID=1

go











