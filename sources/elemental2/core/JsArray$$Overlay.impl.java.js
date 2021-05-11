goog.module('elemental2.core.JsArray.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayStamper = goog.forwardDeclare('javaemul.internal.ArrayStamper$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @template T @return {Array<T>} */
 static m_asJsArray__arrayOf_java_lang_Object(/** Array<T> */ array) {
  $Overlay.$clinit();
  return /**@type {Array<T>}*/ (Js.m_uncheckedCast__java_lang_Object(array));
 }
 /** @template T, S, R @return {Array<R>} */
 static m_from__jsinterop_base_JsArrayLike__elemental2_core_JsArray_FromMapFn__java_lang_Object(/** IArrayLike<T> */ arrayLike, /** ?function(?, number):? */ mapFn, /** S */ this_) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ (Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(arrayLike)), mapFn, this_));
 }
 /** @template T, R @return {Array<R>} */
 static m_from__jsinterop_base_JsArrayLike__elemental2_core_JsArray_FromMapFn(/** IArrayLike<T> */ arrayLike, /** ?function(?, number):? */ mapFn) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ (Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(arrayLike)), mapFn));
 }
 /** @template T, R @return {Array<R>} */
 static m_from__jsinterop_base_JsArrayLike(/** IArrayLike<T> */ arrayLike) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ (Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(arrayLike))));
 }
 /** @template T, S, R @return {Array<R>} */
 static m_from__elemental2_core_JsIterable__elemental2_core_JsArray_FromMapFn__java_lang_Object(/** Iterable<T> */ arrayLike, /** ?function(?, number):? */ mapFn, /** S */ this_) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ (Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(arrayLike)), mapFn, this_));
 }
 /** @template T, R @return {Array<R>} */
 static m_from__elemental2_core_JsIterable__elemental2_core_JsArray_FromMapFn(/** Iterable<T> */ arrayLike, /** ?function(?, number):? */ mapFn) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ (Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(arrayLike)), mapFn));
 }
 /** @template T, R @return {Array<R>} */
 static m_from__elemental2_core_JsIterable(/** Iterable<T> */ arrayLike) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ (Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(arrayLike))));
 }
 /** @template T, S, R @return {Array<R>} */
 static m_from__java_lang_String__elemental2_core_JsArray_FromMapFn__java_lang_Object(/** ?string */ arrayLike, /** ?function(?, number):? */ mapFn, /** S */ this_) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ (Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(arrayLike)), mapFn, this_));
 }
 /** @template T, R @return {Array<R>} */
 static m_from__java_lang_String__elemental2_core_JsArray_FromMapFn(/** ?string */ arrayLike, /** ?function(?, number):? */ mapFn) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ (Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(arrayLike)), mapFn));
 }
 /** @template T, R @return {Array<R>} */
 static m_from__java_lang_String(/** ?string */ arrayLike) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ (Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(arrayLike))));
 }
 /** @template T, S, R @return {Array<R>} */
 static m_from__arrayOf_java_lang_Object__elemental2_core_JsArray_FromMapFn__java_lang_Object(/** Array<T> */ arrayLike, /** ?function(?, number):? */ mapFn, /** S */ this_) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ ($Overlay.m_from__jsinterop_base_JsArrayLike__elemental2_core_JsArray_FromMapFn__java_lang_Object(/**@type {IArrayLike<T>}*/ (Js.m_uncheckedCast__java_lang_Object(arrayLike)), mapFn, this_));
 }
 /** @template T, R @return {Array<R>} */
 static m_from__arrayOf_java_lang_Object__elemental2_core_JsArray_FromMapFn(/** Array<T> */ arrayLike, /** ?function(?, number):? */ mapFn) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ ($Overlay.m_from__jsinterop_base_JsArrayLike__elemental2_core_JsArray_FromMapFn(/**@type {IArrayLike<T>}*/ (Js.m_uncheckedCast__java_lang_Object(arrayLike)), mapFn));
 }
 /** @template T, R @return {Array<R>} */
 static m_from__arrayOf_java_lang_Object(/** Array<T> */ arrayLike) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ ($Overlay.m_from__jsinterop_base_JsArrayLike(/**@type {IArrayLike<T>}*/ (Js.m_uncheckedCast__java_lang_Object(arrayLike))));
 }
 /** @template T @return {Array<T>} */
 static m_asArray__$devirt__elemental2_core_JsArray__arrayOf_java_lang_Object(/** !Array<T> */ $thisArg, /** Array<T> */ reference) {
  $Overlay.$clinit();
  return ArrayStamper.m_stampJavaTypeInfo__java_lang_Object__arrayOf_java_lang_Object($thisArg, reference);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Array;
 }
 
 static $loadModules() {
  ArrayStamper = goog.module.get('javaemul.internal.ArrayStamper$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, "Array");

exports = $Overlay;

//# sourceMappingURL=JsArray$$Overlay.js.map
