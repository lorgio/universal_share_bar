(function() {

  define(["jquery", "handlebars", "templates", "css!styles/widgets"], function(jQuery, Handlebars) {
    var UniversalShare;
    return UniversalShare = (function() {

      function UniversalShare() {}

      UniversalShare.prototype.open_graph_metatags = {
        url: window.location.origin + window.location.pathname,
        type: jQuery("meta[property='og:type']").attr("content"),
        site_name: jQuery("meta[property='og:site_name']").attr("content"),
        image: jQuery("meta[property='og:image']").attr("content"),
        title: jQuery("meta[property='og:title']").attr("content"),
        description: jQuery("meta[property='og:description']").attr("content"),
        twitter: {
          card: jQuery("meta[name='twitter:card']").attr("content"),
          title: jQuery("meta[name='twitter:title']").attr("content"),
          image: jQuery("meta[name='twitter:image']").attr("content"),
          site: jQuery("meta[name='twitter:site']").attr("content"),
          url: window.location.origin + window.location.pathname,
          description: jQuery("meta[name='twitter:description']").attr("content"),
          short_description: "&text=" + jQuery("meta[name='twitter:description']").attr("content")
        }
      };

      UniversalShare.prototype.render = function() {
        var template;
        if (jQuery(window).width() > '1240') {
          template = window.UniversalShareBar.Templates['scripts/templates/universal_share_bar.handlebars'];
        } else {
          template = window.UniversalShareBar.Templates['scripts/templates/universal_share_bar_horizontal.handlebars'];
        }
        jQuery('#share-bar').html(template(this.open_graph_metatags));
        return this.loadSocial();
      };

      UniversalShare.prototype.loadSocial = function() {
        this.load_facebook();
        this.load_twitter();
        this.load_googleplus();
        this.load_pinit();
        return this.load_kindle();
      };

      UniversalShare.prototype.load_facebook = function() {
        window.fbAsyncInit = function() {
          return FB.init({
            appId: window.facebookID,
            status: true,
            cookie: true,
            xfbml: true,
            channelUrl: location.origin + "/channel.html"
          });
        };
        return (function() {
          var e;
          e = document.createElement("script");
          e.async = true;
          e.src = document.location.protocol + "//connect.facebook.net/en_US/all.js";
          return document.getElementById("fb-root").appendChild(e);
        })();
      };

      UniversalShare.prototype.load_twitter = function() {
        var twitterWidgets;
        twitterWidgets = document.createElement("script");
        twitterWidgets.type = "text/javascript";
        twitterWidgets.async = true;
        twitterWidgets.src = "http://platform.twitter.com/widgets.js";
        return document.getElementsByTagName("head")[0].appendChild(twitterWidgets);
      };

      UniversalShare.prototype.load_googleplus = function() {
        var po, s;
        po = document.createElement("script");
        po.type = "text/javascript";
        po.async = true;
        po.src = "https://apis.google.com/js/plusone.js";
        s = document.getElementsByTagName("script")[0];
        return s.parentNode.insertBefore(po, s);
      };

      UniversalShare.prototype.load_pinit = function() {
        var async_load;
        window.PinIt = window.PinIt || {
          loaded: false
        };
        if (window.PinIt.loaded) {
          console.log("PintIt Loaded");
          return;
        }
        window.PinIt.loaded = true;
        async_load = function() {
          var s, x;
          console.log("hey i made it into async_load");
          s = void 0;
          x = void 0;
          s = document.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "http://assets.pinterest.com/js/pinit.js";
          x = document.getElementsByTagName("script")[0];
          return x.parentNode.insertBefore(s, x);
        };
        if (window.attachEvent) {
          return window.attachEvent("onload", async_load);
        } else {
          return window.addEventListener("load", async_load, false);
        }
      };

      UniversalShare.prototype.load_kindle = function() {
        var k, kindleWidget;
        kindleWidget = document.createElement("script");
        kindleWidget.type = "text/javascript";
        kindleWidget.async = false;
        kindleWidget.src = "https://d1xnn692s7u6t6.cloudfront.net/widget.js";
        document.getElementsByTagName("head")[0].appendChild(kindleWidget);
        return (k = function() {
          if (window.$SendToKindle && window.$SendToKindle.Widget) {
            return $SendToKindle.Widget.init({
              content: ".article-container",
              exclude: "#share-bar-horz, .allyBanner, .subscription, .controls, #add_88x31",
              pagination: "#wrapper .controls .next a",
              asin: "B00ASQ60IW"
            });
          } else {
            return setTimeout(k, 500);
          }
        })();
      };

      return UniversalShare;

    })();
  });

}).call(this);
