define ["universal_share"], (UniversalShare) =>

  describe "Universal Share Bar", ->
    share_bar = ""

    beforeEach ->
      share_bar = new UniversalShare()
      window.share = new UniversalShare()

    describe "Rendering", ->
      it "has a render method", ->
        expect(share_bar.render).toBeDefined()

      it "render the share_bar if there is a div for it", ->
        share_bar.render()
        expect(jQuery('#share-bar #fb-like')).not.toEqual([])

    describe "MetaTags", ->
      it "has open graph metatags", ->
        expect(share_bar.open_graph_metatags).toBeDefined()
        expect(share_bar.open_graph_metatags.url).not.toBeNull()

      it "has parsed open graph metatags", ->
        expect(share_bar.open_graph_metatags.url).toBeTruthy()
        expect(share_bar.open_graph_metatags.site_name).toEqual("Travel + Leisure")
        expect(share_bar.open_graph_metatags.type).toEqual("article")
        expect(share_bar.open_graph_metatags.image).toEqual("http://www.travelandleisure.com/images/amexpub/0034/5903/201212-a-girlfriend-getaways.jpg?2416042013")
        expect(share_bar.open_graph_metatags.title).toEqual("America's Best Girlfriend Getaways")
        expect(share_bar.open_graph_metatags.description).toEqual("If you resolve to spend more time with the girls in 2013, these are the best places to go wine ta...")
      it "has twitter card metatags", ->
        expect(share_bar.open_graph_metatags.twitter).not.toBeNull()
        expect(share_bar.open_graph_metatags.twitter.card).toEqual("summary")
        expect(share_bar.open_graph_metatags.twitter.title).toEqual("America's Best Girlfriend Getaways")
        expect(share_bar.open_graph_metatags.twitter.site).toEqual("@TravlandLeisure")
        expect(share_bar.open_graph_metatags.twitter.image).toEqual("http://www.travelandleisure.com/images/amexpub/0034/5903/201212-a-girlfriend-getaways.jpg?2416042013")
        expect(share_bar.open_graph_metatags.twitter.description).toEqual("If you resolve to spend more time with the girls in 2013, these are the best places to go wine ta...")
        expect(share_bar.open_graph_metatags.twitter.url).toBeTruthy()



