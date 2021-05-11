goog.module('elemental2.core.TypedArray.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 
 static m_set__$devirt__elemental2_core_TypedArray__elemental2_core_ArrayBufferView__int(/** !TypedArray */ $thisArg, /** ArrayBufferView */ array, /** number */ offset) {
  $Overlay.$clinit();
  $thisArg.set(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(array)), offset);
 }
 
 static m_set__$devirt__elemental2_core_TypedArray__elemental2_core_ArrayBufferView(/** !TypedArray */ $thisArg, /** ArrayBufferView */ array) {
  $Overlay.$clinit();
  $thisArg.set(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(array)));
 }
 
 static m_set__$devirt__elemental2_core_TypedArray__elemental2_core_JsArray__int(/** !TypedArray */ $thisArg, /** Array<?number> */ array, /** number */ offset) {
  $Overlay.$clinit();
  $thisArg.set(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(array)), offset);
 }
 
 static m_set__$devirt__elemental2_core_TypedArray__elemental2_core_JsArray(/** !TypedArray */ $thisArg, /** Array<?number> */ array) {
  $Overlay.$clinit();
  $thisArg.set(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(array)));
 }
 
 static m_set__$devirt__elemental2_core_TypedArray__arrayOf_double__int(/** !TypedArray */ $thisArg, /** Array<number> */ array, /** number */ offset) {
  $Overlay.$clinit();
  $Overlay.m_set__$devirt__elemental2_core_TypedArray__elemental2_core_JsArray__int($thisArg, /**@type {Array<?number>}*/ (Js.m_uncheckedCast__java_lang_Object(array)), offset);
 }
 
 static m_set__$devirt__elemental2_core_TypedArray__arrayOf_double(/** !TypedArray */ $thisArg, /** Array<number> */ array) {
  $Overlay.$clinit();
  $Overlay.m_set__$devirt__elemental2_core_TypedArray__elemental2_core_JsArray($thisArg, /**@type {Array<?number>}*/ (Js.m_uncheckedCast__java_lang_Object(array)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TypedArray;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, "TypedArray");

exports = $Overlay;

//# sourceMappingURL=TypedArray$$Overlay.js.map
