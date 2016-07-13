import { registerOption } from 'pretty-text/pretty-text';
import { builders } from 'pretty-text/engines/discourse-markdown/bbcode';

registerOption((siteSettings, opts) => opts.features["formatting_bbcode"] = true);

export function setup(helper) {

  helper.whiteList([
    'div.floatl',
    'div.floatr',
  ]);

  helper.whiteList({
    custom(tag, name, value) {
      if (tag === 'div' && name === 'style') {
        return /^text-align:(center|left|right|justify)$/.exec(value);
      }
    }
  });

  const { register, replaceBBCode, rawBBCode, replaceBBCodeParamsRaw } = builders(helper);

  replaceBBCode("floatl", contents => ['div', {'class': 'floatl'}].concat(contents));
  replaceBBCode("floatr", contents => ['div', {'class': 'floatr'}].concat(contents));

  ["left", "center", "right", "justify"].forEach(direction => {
    replaceBBCode(direction, contents => ['div', {'style': "text-align:" + direction}].concat(contents));
  });
}
