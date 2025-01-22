exec dbo.InsertPageLayoutSp @Url='/agent-types', 
	@Handler='/k?Output=AgentTypes\AgentTypes.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Agent Types', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/agent-type', 
	@Handler='/k?Output=AgentTypes\AgentType.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Agent Type', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/agent-type-edit', 
	@Handler='/k?Output=AgentTypes\AgentType.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Agent Type', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/agent-type-insert', 
	@Handler='/k?Output=AgentTypes\AgentType.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Agent Type', @SiteID=1

go











