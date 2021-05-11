goog.module('elemental2.dom.DedicatedWorkerGlobalScope.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 
 static m_webkitPostMessage__$devirt__elemental2_dom_DedicatedWorkerGlobalScope__java_lang_Object__arrayOf_elemental2_core_Transferable(/** !DedicatedWorkerGlobalScope */ $thisArg, /** * */ message, /** Array<Transferable> */ transfer) {
  $Overlay.$clinit();
  $thisArg.webkitPostMessage(message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object(transfer)));
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

//# sourceMappingURL=DedicatedWorkerGlobalScope$$Overlay.js.map
