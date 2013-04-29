this["UniversalShareBar"] = this["UniversalShareBar"] || {};
this["UniversalShareBar"]["Templates"] = this["UniversalShareBar"]["Templates"] || {};

this["UniversalShareBar"]["Templates"]["scripts/templates/universal_share_bar.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"share-bar\" style=\"\">\n  <div class=\"share-button facebook\" id=\"fb-like\">\n    <fb:like \"data-href\"=";
  if (stack1 = helpers.production_uri_no_encode) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.production_uri_no_encode; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " \"data-send\"=\"true\" \"data-layout\"=\"box_count\"\"data-width\"=\"55\" \"data-show-faces\"=\"false\" \"data-font\"=\"arial\" \"ref\"=\"tl-vert\">\n    </fb:like>\n  </div>\n  <div class=\"share-button twitter\">\n  </div>\n  <div class=\"share-button gplus\">\n  </div>\n  <div class=\"share-button pinit\">\n  </div>\n  <div class=\"share-button email mini\">\n  <a href=\"mailto:?subject=;body=\" id=\"email-button\">\n  <img src=\"/images/mail_icon.jpg\" alt=\"\">\n  </a>\n  </div>\n  <div class=\"share-button mini print\">\n  <a alt=\"\" href=\"javascript:window.print()\" id=\"print\">\n  <img src=\"/images/print_icon.jpg\">\n  </a>\n  </div>\n</div>";
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