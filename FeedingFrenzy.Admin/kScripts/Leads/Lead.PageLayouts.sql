exec dbo.InsertPageLayoutSp @Url='/leads', 
	@Handler='/k?Output=Leads\Leads.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Leads', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead', 
	@Handler='/k?Output=Leads\Lead.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Lead', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-edit', 
	@Handler='/k?Output=Leads\Lead.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Lead', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-insert', 
	@Handler='/k?Output=Leads\Lead.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Lead', @SiteID=1

go


exec dbo.InsertPageLayoutSp @Url='/my-leads', 
	@Handler='/k?Output=Leads\Leads.My.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='My Leads', @SiteID=1

go




exec dbo.InsertPageLayoutSp @Url='/sales-representative-leads', 
	@Handler='/k?Output=Leads.SalesRepresentative.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Sales Representative Leads', @SiteID=1

go





