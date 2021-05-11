goog.module('elemental2.dom.RTCRtpTransceiverInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class $Overlay {
 /** @return {RTCRtpTransceiverInit} */
 static m_create__() {
  $Overlay.$clinit();
  return /**@type {RTCRtpTransceiverInit}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_of__()));
 }
 
 static m_setSendEncodings__$devirt__elemental2_dom_RTCRtpTransceiverInit__arrayOf_elemental2_dom_RTCRtpEncodingParameters(/** !RTCRtpTransceiverInit */ $thisArg, /** Array<RTCRtpEncodingParameters> */ sendEncodings) {
  $Overlay.$clinit();
  $thisArg.sendEncodings = /**@type {Array<RTCRtpEncodingParameters>}*/ (Js.m_uncheckedCast__java_lang_Object(sendEncodings));
 }
 
 static m_setStreams__$devirt__elemental2_dom_RTCRtpTransceiverInit__arrayOf_elemental2_dom_MediaStream(/** !RTCRtpTransceiverInit */ $thisArg, /** Array<MediaStream> */ streams) {
  $Overlay.$clinit();
  $thisArg.streams = /**@type {Array<MediaStream>}*/ (Js.m_uncheckedCast__java_lang_Object(streams));
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

//# sourceMappingURL=RTCRtpTransceiverInit$$Overlay.js.map
