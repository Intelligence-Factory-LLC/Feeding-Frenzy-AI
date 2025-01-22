exec dbo.InsertPageLayoutSp @Url='/lead-notes', 
	@Handler='/k?Output=LeadNotes.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Lead Notes', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-note', 
	@Handler='/k?Output=LeadNote.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Lead Note', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-note-edit', 
	@Handler='/k?Output=LeadNote.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Lead Note', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/lead-note-insert', 
	@Handler='/k?Output=LeadNote.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Lead Note', @SiteID=1

go











