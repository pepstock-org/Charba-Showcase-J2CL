goog.module('elemental2.dom.RTCConfigurationRecord_.UrlsFieldType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class $Overlay {
 /** @return {?} */
 static m_create__() {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_of__()));
 }
 
 static m_setUrls__$devirt__elemental2_dom_RTCConfigurationRecord__UrlsFieldType__arrayOf_java_lang_String(/** ? */ $thisArg, /** Array<?string> */ urls) {
  $Overlay.$clinit();
  $thisArg.urls = /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(urls));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=RTCConfigurationRecord_$UrlsFieldType$$Overlay.js.map
