goog.module('elemental2.dom.Worker.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 
 static m_postMessage__$devirt__elemental2_dom_Worker__java_lang_Object__arrayOf_elemental2_core_Transferable(/** !Worker */ $thisArg, /** * */ message, /** Array<Transferable> */ transfer) {
  $Overlay.$clinit();
  $thisArg.postMessage(message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object(transfer)));
 }
 
 static m_webkitPostMessage__$devirt__elemental2_dom_Worker__java_lang_Object__arrayOf_elemental2_core_Transferable(/** !Worker */ $thisArg, /** * */ message, /** Array<Transferable> */ transfer) {
  $Overlay.$clinit();
  $thisArg.webkitPostMessage(message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object(transfer)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Worker;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, "Worker");

exports = $Overlay;

//# sourceMappingURL=Worker$$Overlay.js.map
