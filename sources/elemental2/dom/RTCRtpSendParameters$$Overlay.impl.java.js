goog.module('elemental2.dom.RTCRtpSendParameters.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class $Overlay {
 /** @return {RTCRtpSendParameters} */
 static m_create__() {
  $Overlay.$clinit();
  return /**@type {RTCRtpSendParameters}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_of__()));
 }
 
 static m_setEncodings__$devirt__elemental2_dom_RTCRtpSendParameters__arrayOf_elemental2_dom_RTCRtpEncodingParameters(/** !RTCRtpSendParameters */ $thisArg, /** Array<RTCRtpEncodingParameters> */ encodings) {
  $Overlay.$clinit();
  $thisArg.encodings = /**@type {Array<RTCRtpEncodingParameters>}*/ (Js.m_uncheckedCast__java_lang_Object(encodings));
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

//# sourceMappingURL=RTCRtpSendParameters$$Overlay.js.map
