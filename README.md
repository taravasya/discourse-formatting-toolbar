## discourse-formatting-toolbar

Add text formatting options on your post

<br>

![](https://github.com/iunctis/discourse-formatting-toolbar/blob/master/formatting-toolbar.png?raw=true)
<br>Here is the toolbar in the composer and the result in your post when you use the plugin



<br>

## Tips

- [**How to install a plugin**](https://meta.discourse.org/t/install-a-plugin/19157) : a guide by @techAPJ<br><br>

- The `[floatr][/floatr]` bbcode has been created but I didn't add a button, it doesn't feel necessary.<br><br> If you want to change the margin in the float left, you can go to the Customize section in your admin panels, create a new css page and add this and change the value in the margin part : 

`.floatl {
float:left;
margin-right:15px;
}`


`.floatr {
float:right;
margin-left:15px;
}`

- For the color bbcode, you can add a color code in the bbcode : [color=#FF3300]Text[/color] to have a red text. You can find color codes in multiple websites like this one : http://html-color-codes.info/


<br>

## Thanks

 - [ZogStrip](https://github.com/discourse/vbulletin-bbcode) : for his vbulletin BBcode, which was very helpful.
 - [eviltrout](https://github.com/eviltrout) : for the upgrading of the vbulletin BBcode
 - [cpradio](https://github.com/cpradio) : for the help on the toolbar.
