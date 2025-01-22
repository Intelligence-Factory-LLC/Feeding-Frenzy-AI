exec dbo.InsertPageLayoutSp @Url='/phone-numbers', 
	@Handler='/k?Output=PhoneNumbers\PhoneNumbers.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Phone Numbers', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/phone-number', 
	@Handler='/k?Output=PhoneNumbers\PhoneNumber.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Phone Number', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/phone-number-edit', 
	@Handler='/k?Output=PhoneNumbers\PhoneNumber.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Phone Number', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/phone-number-insert', 
	@Handler='/k?Output=PhoneNumbers\PhoneNumber.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Phone Number', @SiteID=1

go











