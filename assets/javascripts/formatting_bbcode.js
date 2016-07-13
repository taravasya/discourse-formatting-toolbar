(function() {
  if (Discourse.dialect_deprecated) { return; }

// [LEFT]...[/LEFT]
// [CENTER]...[/CENTER]
// [RIGHT]...[/RIGHT]
// [JUSTIFY]...[/JUSTIFY]
["left", "center", "right", "justify"].forEach(function(direction){
  Discourse.BBCode.replaceBBCode(direction, function(contents) { return ['div', {'style': "text-align:" + direction}].concat(contents); });
  });
Discourse.Markdown.whiteListTag('div', 'style', /^text-align:.+$/);


// FLOAT LEFT AND RIGHT
Discourse.BBCode.replaceBBCode("floatl", function(contents) { return ['div', {'class': 'floatl'}].concat(contents); });
Discourse.Markdown.whiteListTag('div', 'class', 'floatl');

Discourse.BBCode.replaceBBCode("floatr", function(contents) { return ['div', {'class': 'floatr'}].concat(contents); });
Discourse.Markdown.whiteListTag('div', 'class', 'floatr');

})();
