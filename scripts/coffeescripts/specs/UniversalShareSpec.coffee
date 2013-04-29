define ["universal_share"], (UniversalShare) =>

  describe "UniversalShare", ->
    share_bar = ""

    beforeEach ->
      share_bar = new UniversalShare()
      window.share = new UniversalShare()

    it "will check for facebook metatags", ->
      expect(share_bar.has_facebook_metatags).toBeTruthy()

    it "has facebook metatags", ->
      expect(share_bar.facebook_metatags).toBeDefined()
      expect(share_bar.facebook_metatags.url).not.toBeNull()

    it "has parsed facebook metatags", ->
      expect(share_bar.facebook_metatags.url).toBeTruthy()
      expect(share_bar.facebook_metatags.site_name).toEqual("Travel + Leisure")
      expect(share_bar.facebook_metatags.type).toEqual("article")
      expect(share_bar.facebook_metatags.image).toEqual("http://www.travelandleisure.com/images/amexpub/0034/5903/201212-a-girlfriend-getaways.jpg?2416042013")
      expect(share_bar.facebook_metatags.title).toEqual("America's Best Girlfriend Getaways")
      expect(share_bar.facebook_metatags.description).toEqual("If you resolve to spend more time with the girls in 2013, these are the best places to go wine ta...")

    describe "Rendering", ->
      it "has a render method", ->
        expect(share_bar.render).toBeDefined()

      it "render the share_bar if there is a div for it", ->
        share_bar.render()
        expect(jQuery('#share-bar #fb-like')).not.toEqual([])