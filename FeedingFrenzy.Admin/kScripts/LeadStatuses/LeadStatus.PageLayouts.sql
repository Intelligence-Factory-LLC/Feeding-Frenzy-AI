exec dbo.InsertPageLayoutSp @Url='/lead-statuses', 
	@Handler='/k?Output=LeadStatuses.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Lead Statuses', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-status', 
	@Handler='/k?Output=LeadStatus.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Lead Status', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-status-edit', 
	@Handler='/k?Output=LeadStatus.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Lead Status', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-status-insert', 
	@Handler='/k?Output=LeadStatus.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Lead Status', @SiteID=1

go











