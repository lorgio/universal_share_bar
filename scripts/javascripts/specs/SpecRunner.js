(function() {

  require.config({
    paths: {
      jquery: "https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min",
      handlebars: "https://github.com/downloads/wycats/handlebars.js/handlebars-1.0.rc.1",
      templates: "../templates/universal_share_bar",
      universal_share: "../universal_share",
      jasmine: "../../lib/jasmine",
      'jasmine-html': '../../lib/jasmine-html'
    },
    shim: {
      jquery: {
        exports: "$"
      },
      jasmine: {
        exports: "jasmine"
      },
      'jasmine-html': {
        deps: ["jasmine"],
        exports: "jasmine"
      },
      handlebars: {
        exports: "Handlebars"
      },
      templates: ["handlebars"]
    }
  });

  require(["jquery", "jasmine-html"], function($, jasmine) {
    var htmlReporter, jasmineEnv, specs;
    jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;
    htmlReporter = new jasmine.HtmlReporter;
    jasmineEnv.addReporter(htmlReporter);
    jasmineEnv.specFilter = function(spec) {
      return htmlReporter.specFilter(spec);
    };
    specs = [];
    specs.push('UniversalShareSpec');
    return $(function() {
      return require(specs, function() {
        return jasmineEnv.execute();
      });
    });
  });

}).call(this);
