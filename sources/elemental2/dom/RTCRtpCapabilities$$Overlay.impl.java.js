goog.module('elemental2.dom.RTCRtpCapabilities.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class $Overlay {
 /** @return {RTCRtpCapabilities} */
 static m_create__() {
  $Overlay.$clinit();
  return /**@type {RTCRtpCapabilities}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_of__()));
 }
 
 static m_setCodecs__$devirt__elemental2_dom_RTCRtpCapabilities__arrayOf_elemental2_dom_RTCRtpCodecCapability(/** !RTCRtpCapabilities */ $thisArg, /** Array<RTCRtpCodecCapability> */ codecs) {
  $Overlay.$clinit();
  $thisArg.codecs = /**@type {Array<RTCRtpCodecCapability>}*/ (Js.m_uncheckedCast__java_lang_Object(codecs));
 }
 
 static m_setHeaderExtensions__$devirt__elemental2_dom_RTCRtpCapabilities__arrayOf_elemental2_dom_RTCRtpHeaderExtensionCapability(/** !RTCRtpCapabilities */ $thisArg, /** Array<RTCRtpHeaderExtensionCapability> */ headerExtensions) {
  $Overlay.$clinit();
  $thisArg.headerExtensions = /**@type {Array<RTCRtpHeaderExtensionCapability>}*/ (Js.m_uncheckedCast__java_lang_Object(headerExtensions));
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

//# sourceMappingURL=RTCRtpCapabilities$$Overlay.js.map
