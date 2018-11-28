import { withPluginApi } from 'discourse/lib/plugin-api';
import { onToolbarCreate } from 'discourse/components/d-editor';

function initializePlugin(api)
{
  const siteSettings = api.container.lookup('site-settings:main');

  if (siteSettings.formattingtlb) {
    if (siteSettings.formattingtlb_underline) {
      api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "underline_button",
          group: "fontStyles",
          icon: "underline",
          perform: e => e.applySurround('[u]', '[/u]', 'underline_default_text')
        });
      });
    }

    if (siteSettings.formattingtlb_addimg) {
      api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "addimg_button",
          group: "extras",
          icon: "picture-o",
          perform: e => e.applySurround('[img]', '[/img]', 'addimg_default_text')
        });
      });
    }

    if (siteSettings.formattingtlb_floatl) {
      api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "floatl_button",
          group: "extras",
          icon: "indent",
          perform: e => e.applySurround('[floatl]', '[/floatl]', 'floatl_default_text')
        });
      });
    }

    if (siteSettings.formattingtlb_left) {
      api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "left_button",
          group: "extras",
          icon: "align-left",
          perform: e => e.applySurround('[left]', '[/left]', 'left_default_text')
        });
      });
    }

    if (siteSettings.formattingtlb_center) {
      api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "center_button",
          group: "extras",
          icon: "align-center",
          perform: e => e.applySurround('[center]', '[/center]', 'center_default_text')
        });
      });
    }

    if (siteSettings.formattingtlb_right) {
      api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "right_button",
          group: "extras",
          icon: "align-right",
          perform: e => e.applySurround('[right]', '[/right]', 'right_default_text')
        });
      });
    }

    if (siteSettings.formattingtlb_justify) {
      api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "justify_button",
          group: "extras",
          icon: "align-justify",
          perform: e => e.applySurround('[justify]', '[/justify]', 'justify_default_text')
        });
      });
    }

    if (siteSettings.formattingtlb_color) {
    api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "color_button",
          group: "extras",
          icon: "palette",
          perform: e => e.applySurround('[color=#]', '[/color]', 'color_default_text')
        });
      });
    }

    if (siteSettings.formattingtlb_size) {
      api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "size_button",
          group: "extras",
          icon: "font",
          perform: e => e.applySurround('[size=4]', '[/size]', 'size_default_text')
        });
      });
    }
  }
}

export default
{
  name: 'formattingtlb-ui',
  initialize(container)
  {
    withPluginApi('0.1', api => initializePlugin(api), { noApi: () => priorToApi(container) });
  }
};
