(function() {
  var _this = this;

  define(["universal_share"], function(UniversalShare) {
    return describe("Universal Share Bar", function() {
      var share_bar;
      share_bar = "";
      beforeEach(function() {
        share_bar = new UniversalShare();
        return window.share = new UniversalShare();
      });
      describe("Rendering", function() {
        it("has a render method", function() {
          return expect(share_bar.render).toBeDefined();
        });
        return it("render the share_bar if there is a div for it", function() {
          share_bar.render();
          return expect(jQuery('#share-bar #fb-like')).not.toEqual([]);
        });
      });
      return describe("MetaTags", function() {
        it("has open graph metatags", function() {
          expect(share_bar.open_graph_metatags).toBeDefined();
          return expect(share_bar.open_graph_metatags.url).not.toBeNull();
        });
        it("has parsed open graph metatags", function() {
          expect(share_bar.open_graph_metatags.url).toBeTruthy();
          expect(share_bar.open_graph_metatags.site_name).toEqual("Travel + Leisure");
          expect(share_bar.open_graph_metatags.type).toEqual("article");
          expect(share_bar.open_graph_metatags.image).toEqual("http://www.travelandleisure.com/images/amexpub/0034/5903/201212-a-girlfriend-getaways.jpg?2416042013");
          expect(share_bar.open_graph_metatags.title).toEqual("America's Best Girlfriend Getaways");
          return expect(share_bar.open_graph_metatags.description).toEqual("If you resolve to spend more time with the girls in 2013, these are the best places to go wine ta...");
        });
        return it("has twitter card metatags", function() {
          expect(share_bar.open_graph_metatags.twitter).not.toBeNull();
          expect(share_bar.open_graph_metatags.twitter.card).toEqual("summary");
          expect(share_bar.open_graph_metatags.twitter.title).toEqual("America's Best Girlfriend Getaways");
          expect(share_bar.open_graph_metatags.twitter.site).toEqual("@TravlandLeisure");
          expect(share_bar.open_graph_metatags.twitter.image).toEqual("http://www.travelandleisure.com/images/amexpub/0034/5903/201212-a-girlfriend-getaways.jpg?2416042013");
          expect(share_bar.open_graph_metatags.twitter.description).toEqual("If you resolve to spend more time with the girls in 2013, these are the best places to go wine ta...");
          return expect(share_bar.open_graph_metatags.twitter.url).toBeTruthy();
        });
      });
    });
  });

}).call(this);
