goog.module('elemental2.core.JsArray.FlatMapCallbackFn.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @template S, T @return {Array<S>} */
 static m_onInvoke__$devirt__elemental2_core_JsArray_FlatMapCallbackFn__java_lang_Object__double__arrayOf_java_lang_Object(/** function(T, number, IArrayLike<T>):Array<S> */ $thisArg, /** T */ p0, /** number */ p1, /** Array<T> */ p2) {
  $Overlay.$clinit();
  return $thisArg(p0, p1, /**@type {IArrayLike<T>}*/ (Js.m_uncheckedCast__java_lang_Object(p2)));
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

//# sourceMappingURL=JsArray$FlatMapCallbackFn$$Overlay.js.map
