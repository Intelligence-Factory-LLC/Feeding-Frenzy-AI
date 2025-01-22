exec dbo.InsertPageLayoutSp @Url='/lead-contacts', 
	@Handler='/k?Output=LeadContacts.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Lead Contacts', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-contact', 
	@Handler='/k?Output=LeadContact.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Lead Contact', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-contact-edit', 
	@Handler='/k?Output=LeadContact.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Lead Contact', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-contact-insert', 
	@Handler='/k?Output=LeadContact.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Lead Contact', @SiteID=1

go











