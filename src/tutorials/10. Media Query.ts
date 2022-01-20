export const TURORIAL_10_MEDIA_QUERY = `
<!--
Media Query
https://developer.mozilla.org/ko/docs/Web/CSS/Media_Queries/Using_media_queries 

<div class="@w(360~):c(red)">@w(360~):c(red)</div>
<div class="@w(~720):c(red)">@w(~720):c(red)</div>
<div class="@w(360~720):c(red)">@w(360~720):c(red)</div>

@media only screen and (min-width:360px){html .\\@w\\(360\\~\\)\\:c\\(red\\){color:red;}}
@media only screen and (max-width:719.98px){html .\\@w\\(\\~720\\)\\:c\\(red\\){color:red;}}
@media only screen and (min-width:360px and max-width:719.98px){html .\\@w\\(360\\~720\\)\\:c\\(red\\){color:red;}}
-->

<div class="vbox vgap(20)">

  <div class="@w(360~):c(red)">@w(360~):c(red)</div>
  <div class="@w(~720):c(red)">@w(~720):c(red)</div>
  <div class="@w(360~720):c(red)">@w(360~720):c(red)</div>

</div>

`.trim()