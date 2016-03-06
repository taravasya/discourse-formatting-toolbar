## discourse-formatting-toolbar

Add formatting options on your post : 

![](https://github.com/iunctis/discourse-formatting-toolbar/blob/master/formatting.png)

![](hhttps://github.com/iunctis/discourse-formatting-toolbar/blob/master/toolbar.png)


<br>

## Tips

[**How to install a plugin**](https://meta.discourse.org/t/install-a-plugin/19157) : a guide by @techAPJ<br><br>

The `[floatr][/floatr]` bbcode has been created but I didn't add a button, it doesn't feel necessary.<br><br>

If you want to change the margin in the float left, you can go to the Customize section in your admin panels, create a new css page and add this and change the value in the margin part : 

`.floatl {
float:left;
margin-right:15px;
}`


`.floatr {
float:right;
margin-left:15px;
}`


<br>

## Thanks

Basically, I didn't create much, I just adapted some functions from the plugins of these two person :

 - [ZogStrip](https://github.com/discourse/vbulletin-bbcode) : for his vbulletin BBcode, which was very helpful.
 - [cpradio](https://github.com/cpradio) : for the help on the toolbar.
