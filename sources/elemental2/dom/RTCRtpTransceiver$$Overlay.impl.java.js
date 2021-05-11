goog.module('elemental2.dom.RTCRtpTransceiver.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @return {*} */
 static m_setCodecPreferences__$devirt__elemental2_dom_RTCRtpTransceiver__arrayOf_elemental2_dom_RTCRtpCodecCapability(/** !RTCRtpTransceiver */ $thisArg, /** Array<RTCRtpCodecCapability> */ codecs) {
  $Overlay.$clinit();
  return $thisArg.setCodecPreferences(/**@type {Array<RTCRtpCodecCapability>}*/ (Js.m_uncheckedCast__java_lang_Object(codecs)));
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

//# sourceMappingURL=RTCRtpTransceiver$$Overlay.js.map
