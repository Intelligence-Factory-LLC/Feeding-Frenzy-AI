exec dbo.InsertPageLayoutSp @Url='/lead-sub-statuses', 
	@Handler='/k?Output=LeadSubStatuses.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Lead Sub Statuses', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-sub-status', 
	@Handler='/k?Output=LeadSubStatus.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Lead Sub Status', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-sub-status-edit', 
	@Handler='/k?Output=LeadSubStatus.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Lead Sub Status', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-sub-status-insert', 
	@Handler='/k?Output=LeadSubStatus.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Lead Sub Status', @SiteID=1

go











