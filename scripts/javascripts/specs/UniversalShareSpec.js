(function() {
  var _this = this;

  define(["universal_share"], function(UniversalShare) {
    return describe("UniversalShare", function() {
      var share_bar;
      share_bar = "";
      beforeEach(function() {
        share_bar = new UniversalShare();
        return window.share = new UniversalShare();
      });
      it("will check for facebook metatags", function() {
        return expect(share_bar.has_facebook_metatags).toBeTruthy();
      });
      it("has facebook metatags", function() {
        expect(share_bar.facebook_metatags).toBeDefined();
        return expect(share_bar.facebook_metatags.url).not.toBeNull();
      });
      it("has parsed facebook metatags", function() {
        expect(share_bar.facebook_metatags.url).toBeTruthy();
        expect(share_bar.facebook_metatags.site_name).toEqual("Travel + Leisure");
        expect(share_bar.facebook_metatags.type).toEqual("article");
        expect(share_bar.facebook_metatags.image).toEqual("http://www.travelandleisure.com/images/amexpub/0034/5903/201212-a-girlfriend-getaways.jpg?2416042013");
        expect(share_bar.facebook_metatags.title).toEqual("America's Best Girlfriend Getaways");
        return expect(share_bar.facebook_metatags.description).toEqual("If you resolve to spend more time with the girls in 2013, these are the best places to go wine ta...");
      });
      return describe("Rendering", function() {
        it("has a render method", function() {
          return expect(share_bar.render).toBeDefined();
        });
        return it("render the share_bar if there is a div for it", function() {
          share_bar.render();
          return expect(jQuery('#share-bar #fb-like')).not.toEqual([]);
        });
      });
    });
  });

}).call(this);
