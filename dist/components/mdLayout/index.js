/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,l){"object"==typeof exports&&"object"==typeof module?module.exports=l():"function"==typeof define&&define.amd?define([],l):"object"==typeof exports?exports.VueMaterial=l():e.VueMaterial=l()})(this,(function(){return (function(e){function l(t){if(m[t])return m[t].exports;var d=m[t]={i:t,l:!1,exports:{}};return e[t].call(d.exports,d,d.exports,l),d.l=!0,d.exports}var m={};return l.m=e,l.c=m,l.i=function(e){return e},l.d=function(e,m,t){l.o(e,m)||Object.defineProperty(e,m,{configurable:!1,enumerable:!0,get:t})},l.n=function(e){var m=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(m,"a",m),m},l.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},l.p="/",l(l.s=411)})({0:function(e,l){e.exports=function(e,l,m,t){var d,o=e=e||{},n=typeof e.default;"object"!==n&&"function"!==n||(d=e,o=e.default);var a="function"==typeof o?o.options:o;if(l&&(a.render=l.render,a.staticRenderFns=l.staticRenderFns),m&&(a._scopeId=m),t){var r=a.computed||(a.computed={});Object.keys(t).forEach((function(e){var l=t[e];r[e]=function(){return l}}))}return{esModule:d,exports:o,options:a}}},137:function(e,l,m){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default={props:{mdTag:{type:String,default:"div"},mdRow:Boolean,mdRowXsmall:Boolean,mdRowSmall:Boolean,mdRowMedium:Boolean,mdRowLarge:Boolean,mdRowXlarge:Boolean,mdColumn:Boolean,mdColumnXsmall:Boolean,mdColumnSmall:Boolean,mdColumnMedium:Boolean,mdColumnLarge:Boolean,mdColumnXlarge:Boolean,mdHideXsmall:Boolean,mdHideSmall:Boolean,mdHideMedium:Boolean,mdHideLarge:Boolean,mdHideXlarge:Boolean,mdHideXsmallAndUp:Boolean,mdHideSmallAndUp:Boolean,mdHideMediumAndUp:Boolean,mdHideLargeAndUp:Boolean,mdHideXlargeAndUp:Boolean,mdGutter:[String,Number,Boolean],mdAlign:String,mdAlignXsmall:String,mdAlignSmall:String,mdAlignMedium:String,mdAlignLarge:String,mdAlignXlarge:String,mdFlex:[String,Number,Boolean],mdFlexXsmall:[String,Number,Boolean],mdFlexSmall:[String,Number,Boolean],mdFlexMedium:[String,Number,Boolean],mdFlexLarge:[String,Number,Boolean],mdFlexXlarge:[String,Number,Boolean],mdFlexOffset:[String,Number,Boolean],mdFlexOffsetXsmall:[String,Number,Boolean],mdFlexOffsetSmall:[String,Number,Boolean],mdFlexOffsetMedium:[String,Number,Boolean],mdFlexOffsetLarge:[String,Number,Boolean],mdFlexOffsetXlarge:[String,Number,Boolean]},computed:{classes:function(){var e={"md-row":this.mdRow,"md-row-xsmall":this.mdRowXsmall,"md-row-small":this.mdRowSmall,"md-row-medium":this.mdRowMedium,"md-row-large":this.mdRowLarge,"md-row-xlarge":this.mdRowXlarge,"md-column":this.mdColumn,"md-column-xsmall":this.mdColumnXsmall,"md-column-small":this.mdColumnSmall,"md-column-medium":this.mdColumnMedium,"md-column-large":this.mdColumnLarge,"md-column-xlarge":this.mdColumnXlarge,"md-hide-xsmall":this.mdHideXsmall,"md-hide-small":this.mdHideSmall,"md-hide-medium":this.mdHideMedium,"md-hide-large":this.mdHideLarge,"md-hide-xlarge":this.mdHideXlarge,"md-hide-xsmall-and-up":this.mdHideXsmallAndUp,"md-hide-small-and-up":this.mdHideSmallAndUp,"md-hide-medium-and-up":this.mdHideMediumAndUp,"md-hide-large-and-up":this.mdHideLargeAndUp,"md-hide-xlarge-and-up":this.mdHideXlargeAndUp};return this.mdGutter&&("boolean"==typeof this.mdGutter?e["md-gutter"]=!0:this.mdGutter&&(e["md-gutter-"+this.mdGutter]=!0)),this.generatePropClasses("md-flex","","mdFlex",e),this.generatePropClasses("md-flex","xsmall","mdFlexXsmall",e),this.generatePropClasses("md-flex","small","mdFlexSmall",e),this.generatePropClasses("md-flex","medium","mdFlexMedium",e),this.generatePropClasses("md-flex","large","mdFlexLarge",e),this.generatePropClasses("md-flex","xlarge","mdFlexXlarge",e),this.generatePropClasses("md-flex-offset","","mdFlexOffset",e),this.generatePropClasses("md-flex-offset","xsmall","mdFlexOffsetXsmall",e),this.generatePropClasses("md-flex-offset","small","mdFlexOffsetSmall",e),this.generatePropClasses("md-flex-offset","medium","mdFlexOffsetMedium",e),this.generatePropClasses("md-flex-offset","large","mdFlexOffsetLarge",e),this.generatePropClasses("md-flex-offset","xlarge","mdFlexOffsetXlarge",e),this.generatePropClasses("md-align","","mdAlign",e),this.generatePropClasses("md-align","xsmall","mdAlignXsmall",e),this.generatePropClasses("md-align","small","mdAlignSmall",e),this.generatePropClasses("md-align","medium","mdAlignMedium",e),this.generatePropClasses("md-align","large","mdAlignLarge",e),this.generatePropClasses("md-align","xlarge","mdAlignXlarge",e),e}},methods:{generatePropClasses:function(e,l,m,t){l&&(l="-"+l),this[m]&&("boolean"==typeof this[m]?this[m]?t[e+l]=!0:t[e+l+"-none"]=!0:t[e+l+"-"+this[m]]=!0)}},render:function(e){return e(this.mdTag,{staticClass:"md-layout",class:this.classes},this.$slots.default)}},e.exports=l.default},227:function(e,l){},293:function(e,l,m){m(227);var t=m(0)(m(137),null,null,null);e.exports=t.exports},411:function(e,l,m){e.exports=m(85)},85:function(e,l,m){"use strict";function t(e){e.component("md-layout",o.default)}Object.defineProperty(l,"__esModule",{value:!0}),l.default=t;var d=m(293),o=(function(e){return e&&e.__esModule?e:{default:e}})(d);e.exports=l.default}})}));