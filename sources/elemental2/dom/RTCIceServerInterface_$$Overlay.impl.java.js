goog.module('elemental2.dom.RTCIceServerInterface_.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 
 static m_setUrls__$devirt__elemental2_dom_RTCIceServerInterface___elemental2_core_JsArray(/** !RTCIceServerInterface_ */ $thisArg, /** Array<?string> */ urls) {
  $Overlay.$clinit();
  $thisArg.urls = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(urls));
 }
 
 static m_setUrls__$devirt__elemental2_dom_RTCIceServerInterface___java_lang_String(/** !RTCIceServerInterface_ */ $thisArg, /** ?string */ urls) {
  $Overlay.$clinit();
  $thisArg.urls = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(urls));
 }
 
 static m_setUrls__$devirt__elemental2_dom_RTCIceServerInterface___arrayOf_java_lang_String(/** !RTCIceServerInterface_ */ $thisArg, /** Array<?string> */ urls) {
  $Overlay.$clinit();
  $Overlay.m_setUrls__$devirt__elemental2_dom_RTCIceServerInterface___elemental2_core_JsArray($thisArg, /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(urls)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=RTCIceServerInterface_$$Overlay.js.map
