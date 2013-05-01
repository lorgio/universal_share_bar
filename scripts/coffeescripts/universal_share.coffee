define ["jquery", "handlebars", "templates", "css!styles/widgets"], (jQuery, Handlebars) ->

  class UniversalShare

    open_graph_metatags:
      url:  window.location.origin + window.location.pathname
      type: jQuery("meta[property='og:type']").attr("content")
      site_name: jQuery("meta[property='og:site_name']").attr("content")
      image: jQuery("meta[property='og:image']").attr("content")
      title: jQuery("meta[property='og:title']").attr("content")
      description: jQuery("meta[property='og:description']").attr("content")
      twitter:
        card: jQuery("meta[name='twitter:card']").attr("content")
        title: jQuery("meta[name='twitter:title']").attr("content")
        image: jQuery("meta[name='twitter:image']").attr("content")
        site: jQuery("meta[name='twitter:site']").attr("content")
        url:  window.location.origin + window.location.pathname
        description: jQuery("meta[name='twitter:description']").attr("content")
        short_description:"&text=" + jQuery("meta[name='twitter:description']").attr("content")

    render: ->
      if jQuery(window).width() > '1240'
        template = window.UniversalShareBar.Templates['scripts/templates/universal_share_bar.handlebars']
      else
        template = window.UniversalShareBar.Templates['scripts/templates/universal_share_bar_horizontal.handlebars']

      jQuery('#share-bar').html(template(@open_graph_metatags))
      @loadSocial()


    loadSocial: ->
      @load_facebook()
      @load_twitter()
      @load_googleplus()
      @load_pinit()
      @load_kindle()

    load_facebook: ->
      window.fbAsyncInit = ->
        FB.init
          appId: window.facebookID
          status: true
          cookie: true
          xfbml: true
          channelUrl: location.origin + "/channel.html"
        #enable social track for facebook
        # _ga.trackFacebook()

      #async load fb
      (->
        e = document.createElement("script")
        e.async = true
        e.src = document.location.protocol + "//connect.facebook.net/en_US/all.js"
        document.getElementById("fb-root").appendChild e
      )()

    load_twitter: ->
      #async load twitter
      twitterWidgets = document.createElement("script")
      twitterWidgets.type = "text/javascript"
      twitterWidgets.async = true
      twitterWidgets.src = "http://platform.twitter.com/widgets.js"
      # Setup a callback to track once the script loads.
      # twitterWidgets.onload = _ga.trackTwitter
      document.getElementsByTagName("head")[0].appendChild twitterWidgets

    load_googleplus: ->
      po = document.createElement("script")
      po.type = "text/javascript"
      po.async = true
      po.src = "https://apis.google.com/js/plusone.js"
      s = document.getElementsByTagName("script")[0]
      s.parentNode.insertBefore po, s

    load_pinit: ->
      window.PinIt = window.PinIt || { loaded:false }
      if (window.PinIt.loaded)
        console.log "PintIt Loaded"
        return
      window.PinIt.loaded = true

      async_load = ->
        console.log "hey i made it into async_load"
        s = undefined
        x = undefined
        s = document.createElement("script")
        s.type = "text/javascript"
        s.async = true
        s.src = "http://assets.pinterest.com/js/pinit.js"
        x = document.getElementsByTagName("script")[0]
        x.parentNode.insertBefore s, x

        # document.getElementsByTagName('head')[0].appendChild(twitterWidgets)
      if window.attachEvent
        window.attachEvent "onload", async_load
      else
        window.addEventListener "load", async_load, false

    load_kindle: ->
      kindleWidget = document.createElement("script")
      kindleWidget.type = "text/javascript"
      kindleWidget.async = false # method 'k' depends on this loading
      kindleWidget.src = "https://d1xnn692s7u6t6.cloudfront.net/widget.js"
      document.getElementsByTagName("head")[0].appendChild kindleWidget
      (k = ->
        (if window.$SendToKindle and window.$SendToKindle.Widget then $SendToKindle.Widget.init(
          content: ".article-container"
          exclude: "#share-bar-horz, .allyBanner, .subscription, .controls, #add_88x31"
          pagination: "#wrapper .controls .next a"
          asin: "B00ASQ60IW"
        ) else setTimeout(k, 500))
      )()