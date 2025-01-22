exec dbo.InsertPageLayoutSp @Url='/lead-tags', 
	@Handler='/k?Output=LeadTags.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Lead Tags', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-tag', 
	@Handler='/k?Output=LeadTag.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Lead Tag', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-tag-edit', 
	@Handler='/k?Output=LeadTag.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Lead Tag', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-tag-insert', 
	@Handler='/k?Output=LeadTag.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Lead Tag', @SiteID=1

go











