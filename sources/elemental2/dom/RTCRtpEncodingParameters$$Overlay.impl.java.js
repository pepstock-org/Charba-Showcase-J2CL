goog.module('elemental2.dom.RTCRtpEncodingParameters.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class $Overlay {
 /** @return {RTCRtpEncodingParameters} */
 static m_create__() {
  $Overlay.$clinit();
  return /**@type {RTCRtpEncodingParameters}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_of__()));
 }
 
 static m_setRid__$devirt__elemental2_dom_RTCRtpEncodingParameters__java_lang_String(/** !RTCRtpEncodingParameters */ $thisArg, /** ?string */ rid) {
  $Overlay.$clinit();
  $thisArg.rid = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(rid));
 }
 
 static m_setRid__$devirt__elemental2_dom_RTCRtpEncodingParameters__double(/** !RTCRtpEncodingParameters */ $thisArg, /** number */ rid) {
  $Overlay.$clinit();
  $thisArg.rid = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(rid));
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

//# sourceMappingURL=RTCRtpEncodingParameters$$Overlay.js.map
