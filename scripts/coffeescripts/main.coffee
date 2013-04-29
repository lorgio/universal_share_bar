require.config
  baseUrl: ""
  paths:
    jquery: "https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min"
    handlebars: "https://raw.github.com/wycats/handlebars.js/1.0.0-rc.3/dist/handlebars"
    templates: "scripts/javascripts/templates/universal_share_bar"
    universal_share: "scripts/javascripts/universal_share"
    shim:
      jquery:
        exports: "jQuery"
      handlebars:
        exports: 'Handlebars'
      templates:
        deps: ["handlebars"]

require ["jquery","handlebars", "universal_share"], (jQuery, Handlebars,UniversalShare) ->
  $ ->
  console.log("handlebars is",Handlebars)
  share_bar = new UniversalShare()
  share_bar.render()
