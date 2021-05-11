goog.module('elemental2.dom.WorkerGlobalScope.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_WorkerGlobalScope__elemental2_dom_Request__elemental2_dom_RequestInit(/** !WorkerGlobalScope */ $thisArg, /** Request */ input, /** RequestInit */ init) {
  $Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(input)), init);
 }
 /** @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_WorkerGlobalScope__elemental2_dom_Request(/** !WorkerGlobalScope */ $thisArg, /** Request */ input) {
  $Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(input)));
 }
 /** @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_WorkerGlobalScope__java_lang_String__elemental2_dom_RequestInit(/** !WorkerGlobalScope */ $thisArg, /** ?string */ input, /** RequestInit */ init) {
  $Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(input)), init);
 }
 /** @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_WorkerGlobalScope__java_lang_String(/** !WorkerGlobalScope */ $thisArg, /** ?string */ input) {
  $Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(input)));
 }
 
 static m_postMessage__$devirt__elemental2_dom_WorkerGlobalScope__java_lang_Object__arrayOf_elemental2_core_Transferable(/** !WorkerGlobalScope */ $thisArg, /** * */ message, /** Array<Transferable> */ transfer) {
  $Overlay.$clinit();
  $thisArg.postMessage(message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object(transfer)));
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

//# sourceMappingURL=WorkerGlobalScope$$Overlay.js.map
