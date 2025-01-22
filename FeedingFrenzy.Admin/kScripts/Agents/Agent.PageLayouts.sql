exec dbo.InsertPageLayoutSp @Url='/agents', 
	@Handler='/k?Output=Agents\Agents.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Agents', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/agent', 
	@Handler='/k?Output=Agents\Agent.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Agent', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/agent-edit', 
	@Handler='/k?Output=Agents\Agent.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Agent', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/agent-insert', 
	@Handler='/k?Output=Agents\Agent.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Agent', @SiteID=1

go





exec dbo.InsertPageLayoutSp @Url='/agent-edit-internal', 
	@Handler='/k?Output=Agents\Agent.Edit.Internal.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Agent Internal', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/agent-insert-internal', 
	@Handler='/k?Output=Agents\Agent.Insert.Internal.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Agent Internal', @SiteID=1

go



exec dbo.InsertPageLayoutSp @Url='/voice-agent-edit', 
	@Handler='/k?Output=Agents\VoiceAgent.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Voice Agent', @SiteID=1

go



exec dbo.InsertPageLayoutSp @Url='/voice-agent', 
	@Handler='/k?Output=Agents\VoiceAgent.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Voice Agent', @SiteID=1

go

