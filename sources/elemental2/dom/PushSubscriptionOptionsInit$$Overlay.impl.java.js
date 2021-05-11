goog.module('elemental2.dom.PushSubscriptionOptionsInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class $Overlay {
 /** @return {PushSubscriptionOptionsInit} */
 static m_create__() {
  $Overlay.$clinit();
  return /**@type {PushSubscriptionOptionsInit}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_of__()));
 }
 
 static m_setApplicationServerKey__$devirt__elemental2_dom_PushSubscriptionOptionsInit__elemental2_core_ArrayBuffer(/** !PushSubscriptionOptionsInit */ $thisArg, /** ArrayBuffer */ applicationServerKey) {
  $Overlay.$clinit();
  $thisArg.applicationServerKey = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(applicationServerKey));
 }
 
 static m_setApplicationServerKey__$devirt__elemental2_dom_PushSubscriptionOptionsInit__elemental2_core_ArrayBufferView(/** !PushSubscriptionOptionsInit */ $thisArg, /** ArrayBufferView */ applicationServerKey) {
  $Overlay.$clinit();
  $thisArg.applicationServerKey = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(applicationServerKey));
 }
 
 static m_setApplicationServerKey__$devirt__elemental2_dom_PushSubscriptionOptionsInit__java_lang_String(/** !PushSubscriptionOptionsInit */ $thisArg, /** ?string */ applicationServerKey) {
  $Overlay.$clinit();
  $thisArg.applicationServerKey = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(applicationServerKey));
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

//# sourceMappingURL=PushSubscriptionOptionsInit$$Overlay.js.map
