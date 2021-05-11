goog.module('elemental2.dom.RTCDataChannel.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 
 static m_send__$devirt__elemental2_dom_RTCDataChannel__elemental2_core_ArrayBuffer(/** !RTCDataChannel */ $thisArg, /** ArrayBuffer */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 
 static m_send__$devirt__elemental2_dom_RTCDataChannel__elemental2_core_ArrayBufferView(/** !RTCDataChannel */ $thisArg, /** ArrayBufferView */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 
 static m_send__$devirt__elemental2_dom_RTCDataChannel__elemental2_dom_Blob(/** !RTCDataChannel */ $thisArg, /** Blob */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 
 static m_send__$devirt__elemental2_dom_RTCDataChannel__java_lang_String(/** !RTCDataChannel */ $thisArg, /** ?string */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
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

//# sourceMappingURL=RTCDataChannel$$Overlay.js.map
