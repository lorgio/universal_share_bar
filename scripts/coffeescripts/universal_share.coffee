define ["jquery","handlebars", "templates"], (jQuery, Handlebars) ->

  class UniversalShare

    has_facebook_metatags: ->
      true

    facebook_metatags:
      url:  window.location.href
      type: jQuery("meta[property='og:type']").attr("content")
      site_name: jQuery("meta[property='og:site_name']").attr("content")
      image: jQuery("meta[property='og:image']").attr("content")
      title: jQuery("meta[property='og:title']").attr("content")
      description: jQuery("meta[property='og:description']").attr("content")

    render: ->
      if jQuery(window).width() > '1240'
        template =  HandleBars.compile window.UniversalShareBar.Templates['scripts/templates/universal_share_bar.handlebars']
      else
        template =  HandleBars.compile window.UniversalShareBar.Templates['scripts/templates/universal_share_bar_horizontal.handlebars']

       jQuery('#share-bar #fb-like').html(template({production_uri_no_encode: "test.html"}))


    load_facebook: ->
      #facebook
      window.fbAsyncInit = ->
        FB.init
          appId: window.facebookID
          status: true
          cookie: true
          xfbml: true
          channelUrl: location.origin + "/channel.html"

      #enable social track for facebook
      _ga.trackFacebook()

      #async load fb
      (->
        e = document.createElement("script")
        e.async = true
        e.src = document.location.protocol + "//connect.facebook.net/en_US/all.js"
        document.getElementById("fb-root").appendChild e
      )()