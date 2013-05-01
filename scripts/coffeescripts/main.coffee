require.config
  baseUrl: ""
  paths:
    jquery: "https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min"
    handlebars: "scripts/lib/handlebars"
    templates: "scripts/javascripts/templates/universal_share_bar"
    universal_share: "scripts/javascripts/universal_share"
    css: "scripts/require-css/css"
    normalize: "scripts/require-css/normalize"
  shim:
    jquery:
      exports: "jQuery"
    handlebars:
      exports: 'Handlebars'
    templates:
      deps: ["handlebars"]
    map:
      "*":
        "css": "scripts/require-css" # or whatever the path to require-css is
require ["jquery","universal_share","handlebars", "css"], (jQuery,UniversalShare, Handlebars, css) ->
  jQuery ->
    share_bar = new UniversalShare
    share_bar.render()
