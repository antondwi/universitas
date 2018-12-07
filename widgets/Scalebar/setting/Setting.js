// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"widgets/Scalebar/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Scalebar/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:100%;"\x3e\r\n  \x3ctable class\x3d"settings-section"\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd\x3e${nls.unit}\x3c/td\x3e\r\n        \x3ctd class\x3d"second"\x3e\r\n          \x3cfieldset id\x3d"unit-type" class\x3d"setting-group"\x3e\r\n            \x3cdiv class\x3d"unit-item" data-dojo-attach-point\x3d"englishNode"\x3e\r\n              \x3cinput data-dojo-type\x3d"dijit/form/RadioButton" name\x3d"unit-item" id\x3d"english" data-dojo-attach-point\x3d"english"/\x3e\r\n              \x3clabel for\x3d"english" class\x3d"jimu-leading-margin025"\x3e${nls.english}\x3c/label\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"unit-item" data-dojo-attach-point\x3d"metricNode"\x3e\r\n              \x3cinput data-dojo-type\x3d"dijit/form/RadioButton" name\x3d"unit-item" id\x3d"metric" data-dojo-attach-point\x3d"metric"/\x3e\r\n              \x3clabel for\x3d"metric" class\x3d"jimu-leading-margin025"\x3e${nls.metric}\x3c/label\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"unit-item" data-dojo-attach-point\x3d"dualNode"\x3e\r\n              \x3cinput data-dojo-type\x3d"dijit/form/RadioButton" name\x3d"unit-item" id\x3d"dual" data-dojo-attach-point\x3d"dual"/\x3e\r\n              \x3clabel for\x3d"dual" class\x3d"jimu-leading-margin025"\x3e${nls.dual}\x3c/label\x3e\r\n            \x3c/div\x3e\r\n            \x3cfieldset\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd\x3e${nls.style}\x3c/td\x3e\r\n        \x3ctd class\x3d"second"\x3e\r\n          \x3cfieldset id\x3d"line-type" class\x3d"setting-group"\x3e\r\n            \x3cdiv class\x3d"style-item" data-dojo-attach-point\x3d"lineNode"\x3e\r\n              \x3cinput class\x3d"jimu-float-leading" data-dojo-type\x3d"dijit/form/RadioButton" name\x3d"line-item" data-dojo-attach-point\x3d"line"/\x3e\r\n              \x3cdiv class\x3d"style-preview jimu-float-trailing"\x3e\r\n                \x3cdiv class\x3d"line-icon"\x3e\x3c/div\x3e\r\n                \x3clabel\x3e${nls.line}\x3c/label\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"style-item" data-dojo-attach-point\x3d"rulerNode"\x3e\r\n              \x3cinput class\x3d"jimu-float-leading" data-dojo-type\x3d"dijit/form/RadioButton" name\x3d"line-item" data-dojo-attach-point\x3d"ruler"/\x3e\r\n              \x3cdiv class\x3d"style-preview jimu-float-trailing"\x3e\r\n                \x3cdiv class\x3d"ruler-icon"\x3e\x3c/div\x3e\r\n                \x3clabel\x3e${nls.ruler}\x3c/label\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/fieldset\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e',
"url:widgets/Scalebar/setting/css/style.css":".jimu-widget-scalebar-setting{margin:0; padding:0; font-size: 14px; color: #596679;}.jimu-widget-scalebar-setting .setting-group{margin: 10px 20px;}.jimu-widget-scalebar-setting .zoom-scale-table{margin-top:12px;}.jimu-widget-scalebar-setting .setting-table \x3e thead \x3e tr \x3e th,.jimu-widget-scalebar-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; line-height:40px; vertical-align:middle;}.jimu-widget-scalebar-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto; text-align: right; padding-right:15px;}.jimu-widget-scalebar-setting .unit-item{display: inline-block; margin-right: 30px; vertical-align: middle;}.jimu-widget-scalebar-setting .style-item{display: inline-block; margin-right: 30px; vertical-align: middle; width: 160px; padding-top: 5px; height: 32px}.jimu-widget-scalebar-setting .jimu-radio {margin: 4px auto; vertical-align: middle; width: 14px; height: 14px;}.jimu-widget-scalebar-setting .jimu-radio-inner {width: 8px; height: 8px;}.jimu-widget-scalebar-setting .style-item .style-preview{width: 138px; padding-top: 7px; text-align: center;}.jimu-widget-scalebar-setting .style-preview .line-icon,.jimu-widget-scalebar-setting .style-preview .ruler-icon {width: 100%; height: 10px; margin-bottom: 4px;}.jimu-widget-scalebar-setting .style-preview .line-icon{background: url(images/Line.png) center no-repeat;}.jimu-widget-scalebar-setting .style-preview .ruler-icon{background: url(images/Ruler.png) center no-repeat;}.jimu-widget-scalebar-setting .settings-section \x3e tbody \x3e tr \x3e .second{}",
"*now":function(d){d(['dojo/i18n!*preload*widgets/Scalebar/setting/nls/Setting*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/html dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/portalUtils dojo/_base/lang dojo/on dojo/Deferred jimu/dijit/RadioBtn".split(" "),function(d,e,g,h,k,b,c,l){return d([h,g],{baseClass:"jimu-widget-scalebar-setting",selectUnit:"",selectStyle:"",startup:function(){this.inherited(arguments);this.config.scalebar||(this.config.scalebar={});this.set("selectUnit","");this.set("selectStyle","");this.own(c(this.englishNode,"click",b.hitch(this,function(){this.set("selectUnit",
"english");this._selectItem("english")})));this.own(c(this.metricNode,"click",b.hitch(this,function(){this.set("selectUnit","metric");this._selectItem("metric")})));this.own(c(this.dualNode,"click",b.hitch(this,function(){this.set("selectUnit","dual");this._selectItem("dual");this.set("selectStyle","line");this._selectItem("line")})));this.own(c(this.lineNode,"click",b.hitch(this,function(){this.set("selectStyle","line");this._selectItem("line")})));this.own(c(this.rulerNode,"click",b.hitch(this,
function(){this.set("selectStyle","ruler");this._selectItem("ruler")})));this.watch("selectUnit",this._updateUnit);this.watch("selectStyle",this._updateStyle);this.setConfig(this.config)},_updateUnit:function(){var a=null,a=this.get("selectUnit");"metric"===a?(a=this.metricNode,e.setStyle(this.rulerNode,"display","inline-block")):"dual"===a?(a=this.dualNode,e.setStyle(this.rulerNode,"display","none")):(a=this.englishNode,e.setStyle(this.rulerNode,"display","inline-block"));a&&a.setChecked&&a.setChecked(!0)},
_updateStyle:function(){var a=null;(a="ruler"===this.get("selectStyle")?this.rulerNode:this.lineNode)&&a.setChecked&&a.setChecked(!0)},_processConfig:function(a){var f=new l;a.scalebarUnit&&a.scalebarStyle?f.resolve(a):k.getUnits(this.appConfig.portalUrl).then(b.hitch(this,function(b){a.scalebarUnit="english"===b?"english":"metric";f.resolve(a)}));return f.promise},setConfig:function(a){this.config=a;this._processConfig(a.scalebar).then(b.hitch(this,function(a){this.set("selectUnit",a.scalebarUnit);
this._selectItem(a.scalebarUnit);a=a.scalebarStyle||"line";this.set("selectStyle",a);this._selectItem(a)}))},getConfig:function(){this.config.scalebar.scalebarUnit=this.get("selectUnit");this.config.scalebar.scalebarStyle=this.get("selectStyle");return this.config},_selectItem:function(a){this[a]&&this[a].setChecked&&this[a].setChecked(!0)}})});