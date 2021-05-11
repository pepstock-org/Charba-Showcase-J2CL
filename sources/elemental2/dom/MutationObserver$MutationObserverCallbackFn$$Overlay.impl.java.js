goog.module('elemental2.dom.MutationObserver.MutationObserverCallbackFn.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @return {*} */
 static m_onInvoke__$devirt__elemental2_dom_MutationObserver_MutationObserverCallbackFn__arrayOf_elemental2_dom_MutationRecord__elemental2_dom_MutationObserver(/** function(Array<MutationRecord>, MutationObserver):* */ $thisArg, /** Array<MutationRecord> */ p0, /** MutationObserver */ p1) {
  $Overlay.$clinit();
  return $thisArg(/**@type {Array<MutationRecord>}*/ (Js.m_uncheckedCast__java_lang_Object(p0)), p1);
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

//# sourceMappingURL=MutationObserver$MutationObserverCallbackFn$$Overlay.js.map
