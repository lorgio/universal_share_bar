(function() {

  define(["jquery", "handlebars", "templates"], function(jQuery, Handlebars) {
    var UniversalShare;
    UniversalShare = (function() {

      function UniversalShare() {}

      UniversalShare.prototype.has_facebook_metatags = function() {
        return true;
      };

      UniversalShare.prototype.facebook_metatags = {
        url: window.location.href,
        type: jQuery("meta[property='og:type']").attr("content"),
        site_name: jQuery("meta[property='og:site_name']").attr("content"),
        image: jQuery("meta[property='og:image']").attr("content"),
        title: jQuery("meta[property='og:title']").attr("content"),
        description: jQuery("meta[property='og:description']").attr("content")
      };

      UniversalShare.prototype.render = function() {
        var template;
        if (jQuery(window).width() > '1240') {
          template = HandleBars.compile(window.UniversalShareBar.Templates['scripts/templates/universal_share_bar.handlebars']);
        } else {
          template = HandleBars.compile(window.UniversalShareBar.Templates['scripts/templates/universal_share_bar_horizontal.handlebars']);
        }
        return jQuery('#share-bar #fb-like').html(template({
          production_uri_no_encode: "test.html"
        }));
      };

      return UniversalShare;

    })();
    return {
      load_facebook: function() {
        window.fbAsyncInit = function() {
          return FB.init({
            appId: window.facebookID,
            status: true,
            cookie: true,
            xfbml: true,
            channelUrl: location.origin + "/channel.html"
          });
        };
        _ga.trackFacebook();
        return (function() {
          var e;
          e = document.createElement("script");
          e.async = true;
          e.src = document.location.protocol + "//connect.facebook.net/en_US/all.js";
          return document.getElementById("fb-root").appendChild(e);
        })();
      }
    };
  });

}).call(this);
