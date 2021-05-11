goog.module('elemental2.dom.RTCRtpContributingSource.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 
 static m_setTimestamp__$devirt__elemental2_dom_RTCRtpContributingSource__elemental2_core_JsDate(/** !RTCRtpContributingSource */ $thisArg, /** Date */ timestamp) {
  $Overlay.$clinit();
  $thisArg.timestamp = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(timestamp));
 }
 
 static m_setTimestamp__$devirt__elemental2_dom_RTCRtpContributingSource__double(/** !RTCRtpContributingSource */ $thisArg, /** number */ timestamp) {
  $Overlay.$clinit();
  $thisArg.timestamp = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(timestamp));
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

//# sourceMappingURL=RTCRtpContributingSource$$Overlay.js.map
