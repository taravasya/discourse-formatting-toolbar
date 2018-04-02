# name: discourse-formatting-toolbar
# about: Add formatting options on your post (Discourse)
# version: 3.1
# authors: Steven, iunctis.fr - Thanks to ZogStrip, eviltrout, cpradio and Sam Saffron
# url: https://github.com/iunctis/discourse-formatting-toolbar.git

enabled_site_setting :formattingtlb_ui
enabled_site_setting :formattingtlb_underline
enabled_site_setting :formattingtlb_addimg
enabled_site_setting :formattingtlb_floatl
enabled_site_setting :formattingtlb_left
enabled_site_setting :formattingtlb_center
enabled_site_setting :formattingtlb_right
enabled_site_setting :formattingtlb_justify
enabled_site_setting :formattingtlb_color
enabled_site_setting :formattingtlb_size

register_asset 'stylesheets/formatting.scss'