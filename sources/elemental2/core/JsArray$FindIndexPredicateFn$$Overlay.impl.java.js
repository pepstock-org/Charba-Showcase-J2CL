goog.module('elemental2.core.JsArray.FindIndexPredicateFn.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @template T @return {boolean} */
 static m_onInvoke__$devirt__elemental2_core_JsArray_FindIndexPredicateFn__java_lang_Object__int__arrayOf_java_lang_Object(/** function(T, number, Array<T>):boolean */ $thisArg, /** T */ p0, /** number */ p1, /** Array<T> */ p2) {
  $Overlay.$clinit();
  return $thisArg(p0, p1, /**@type {Array<T>}*/ (Js.m_uncheckedCast__java_lang_Object(p2)));
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

//# sourceMappingURL=JsArray$FindIndexPredicateFn$$Overlay.js.map