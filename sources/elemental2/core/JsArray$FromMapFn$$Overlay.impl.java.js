goog.module('elemental2.core.JsArray.FromMapFn.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @template T, R @return {R} */
 static m_onInvoke__$devirt__elemental2_core_JsArray_FromMapFn__java_lang_String__int(/** function(?, number):R */ $thisArg, /** ?string */ p0, /** number */ p1) {
  $Overlay.$clinit();
  return $thisArg(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(p0)), p1);
 }
 /** @template T, R @return {R} */
 static m_onInvoke__$devirt__elemental2_core_JsArray_FromMapFn__java_lang_Object__int(/** function(?, number):R */ $thisArg, /** T */ p0, /** number */ p1) {
  $Overlay.$clinit();
  return $thisArg(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(p0)), p1);
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

//# sourceMappingURL=JsArray$FromMapFn$$Overlay.js.map
