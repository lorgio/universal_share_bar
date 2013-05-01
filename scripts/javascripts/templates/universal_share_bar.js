this["UniversalShareBar"] = this["UniversalShareBar"] || {};
this["UniversalShareBar"]["Templates"] = this["UniversalShareBar"]["Templates"] || {};

this["UniversalShareBar"]["Templates"]["scripts/templates/universal_share_bar.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"fb-root\" />\n<div id=\"share-bar\" style=\"\">\n  <div class=\"share-button facebook\" id=\"fb-like\">\n    <fb:like \"data-href\"=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" \"data-send\"=\"true\" \"data-layout\"=\"box_count\"\"data-width\"=\"55\" \"data-show-faces\"=\"false\" \"data-font\"=\"arial\" \"ref\"=\"tl-vert\">\n    </fb:like>\n  </div>\n  <div class=\"share-button twitter\">\n  <a href=\"http://twitter.com/share?url="
    + escapeExpression(((stack1 = ((stack1 = depth0.twitter),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + escapeExpression(((stack1 = ((stack1 = depth0.twitter),stack1 == null || stack1 === false ? stack1 : stack1.short_description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" \"class\"=\"twitter-share-button\" \"data-count\"=\"vertical\" \"data-url\" =\"";
  if (stack2 = helpers.url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.url; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" \"data-via\"=\"TravlandLeisure\">\n  Tweet\n  </a>\n  </div>\n  <div class=\"share-button gplus\">\n    <g:plusone \"annotation\"=\"none\" \"size\"=\"tall\" \"href\"=\"";
  if (stack2 = helpers.url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.url; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" />\n  </div>\n  <div class=\"share-button pinit\">\n    <a href=\"http://pinterest.com/pin/create/button/?url=";
  if (stack2 = helpers.url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.url; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "&media=";
  if (stack2 = helpers.likeable_image_url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.likeable_image_url; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"\n    \"class\"=\"pin-it-button\" \"count-layout\"=\"none\">\n     Pin It\n     </a>\n  </div>\n  <div class=\"share-button\">\n      <div class=\"kindleWidget\">\n        <img src=\"https://d1xnn692s7u6t6.cloudfront.net/white-15.png\"/>\n      </div>\n  </div>\n  <div class=\"share-button email mini\">\n  <a href=\"mailto:?subject=;body=\" id=\"email-button\">\n  <img src=\"http://www.travelandleisure.com/images/mail_icon.jpg\" alt=\"\">\n  </a>\n  </div>\n  <div class=\"share-button mini print\">\n  <a alt=\"\" href=\"javascript:window.print()\" id=\"print\">\n  <img src=\"http://www.travelandleisure.com/images/print_icon.jpg\">\n  </a>\n  </div>\n</div>";
  return buffer;
  });

this["UniversalShareBar"]["Templates"]["scripts/templates/universal_share_bar_horizontal.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n    <li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n    ";
  return buffer;
  }

  buffer += "<div id=\"ad-view\">\n  <header>\n    <h4>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n  </header>\n  <div class=\"main\">\n    ";
  if (stack1 = helpers.content) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.content; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  </div>\n  <ul id=\"days\">\n    ";
  stack1 = helpers.each.call(depth0, depth0.days, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n</div>";
  return buffer;
  });