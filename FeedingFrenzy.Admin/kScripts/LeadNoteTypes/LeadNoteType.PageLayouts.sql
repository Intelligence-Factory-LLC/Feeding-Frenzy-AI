exec dbo.InsertPageLayoutSp @Url='/lead-note-types', 
	@Handler='/k?Output=LeadNoteTypes.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Lead Note Types', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-note-type', 
	@Handler='/k?Output=LeadNoteType.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Lead Note Type', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-note-type-edit', 
	@Handler='/k?Output=LeadNoteType.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Lead Note Type', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-note-type-insert', 
	@Handler='/k?Output=LeadNoteType.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Lead Note Type', @SiteID=1

go











