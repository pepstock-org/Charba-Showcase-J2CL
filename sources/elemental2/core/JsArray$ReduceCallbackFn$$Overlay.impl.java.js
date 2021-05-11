goog.module('elemental2.core.JsArray.ReduceCallbackFn.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @template R, T @return {R} */
 static m_onInvoke__$devirt__elemental2_core_JsArray_ReduceCallbackFn__java_lang_Object__java_lang_Object__int__arrayOf_java_lang_Object(/** function(*, T, number, Array<T>):R */ $thisArg, /** * */ p0, /** T */ p1, /** number */ p2, /** Array<T> */ p3) {
  $Overlay.$clinit();
  return $thisArg(p0, p1, p2, /**@type {Array<T>}*/ (Js.m_uncheckedCast__java_lang_Object(p3)));
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

//# sourceMappingURL=JsArray$ReduceCallbackFn$$Overlay.js.map
