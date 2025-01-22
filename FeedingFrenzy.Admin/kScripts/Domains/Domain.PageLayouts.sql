exec dbo.InsertPageLayoutSp @Url='/domains', 
	@Handler='/k?Output=Domains\Domains.Objects.ks.html&Class=SimpleObjectsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Domains', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/domain', 
	@Handler='/k?Output=Domains\Domain.Details.ks.html&Class=SimpleObjectDetailsPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Domain', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/domain-edit', 
	@Handler='/k?Output=Domains\Domain.Edit.ks.html&Class=SimpleObjectEditPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Update Domain', @SiteID=1

go

exec dbo.InsertPageLayoutSp @Url='/domain-insert', 
	@Handler='/k?Output=Domains\Domain.Insert.ks.html&Class=SimpleObjectInsertPage&Handler=FeedingFrenzy.Admin.UI', 
	@IsEnabled=1, @PageTitle='Insert Domain', @SiteID=1

go











