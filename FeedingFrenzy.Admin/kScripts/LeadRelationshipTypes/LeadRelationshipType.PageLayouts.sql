exec dbo.InsertPageLayoutSp @Url='/lead-relationship-types', 
	@Handler='/k?Output=LeadRelationshipTypes.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Lead Relationship Types', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-relationship-type', 
	@Handler='/k?Output=LeadRelationshipType.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Lead Relationship Type', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-relationship-type-edit', 
	@Handler='/k?Output=LeadRelationshipType.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Lead Relationship Type', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-relationship-type-insert', 
	@Handler='/k?Output=LeadRelationshipType.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Lead Relationship Type', @SiteID=1

go











