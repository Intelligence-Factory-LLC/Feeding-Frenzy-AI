exec dbo.InsertPageLayoutSp @Url='/lead-relationships', 
	@Handler='/k?Output=LeadRelationships.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Lead Relationships', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-relationship', 
	@Handler='/k?Output=LeadRelationship.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Lead Relationship', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-relationship-edit', 
	@Handler='/k?Output=LeadRelationship.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Lead Relationship', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-relationship-insert', 
	@Handler='/k?Output=LeadRelationship.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Lead Relationship', @SiteID=1

go











