goog.module('elemental2.core.Uint8ClampedArray.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @template S @return {Uint8ClampedArray} */
 static m_from__jsinterop_base_JsArrayLike__elemental2_core_Uint8ClampedArray_FromMapFn__java_lang_Object(/** IArrayLike<?number> */ source, /** ?function(number):number */ mapFn, /** S */ this_) {
  $Overlay.$clinit();
  return Uint8ClampedArray.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(source)), mapFn, this_);
 }
 /** @return {Uint8ClampedArray} */
 static m_from__jsinterop_base_JsArrayLike__elemental2_core_Uint8ClampedArray_FromMapFn(/** IArrayLike<?number> */ source, /** ?function(number):number */ mapFn) {
  $Overlay.$clinit();
  return Uint8ClampedArray.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(source)), mapFn);
 }
 /** @return {Uint8ClampedArray} */
 static m_from__jsinterop_base_JsArrayLike(/** IArrayLike<?number> */ source) {
  $Overlay.$clinit();
  return Uint8ClampedArray.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(source)));
 }
 /** @template S @return {Uint8ClampedArray} */
 static m_from__elemental2_core_JsIterable__elemental2_core_Uint8ClampedArray_FromMapFn__java_lang_Object(/** Iterable<?number> */ source, /** ?function(number):number */ mapFn, /** S */ this_) {
  $Overlay.$clinit();
  return Uint8ClampedArray.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(source)), mapFn, this_);
 }
 /** @return {Uint8ClampedArray} */
 static m_from__elemental2_core_JsIterable__elemental2_core_Uint8ClampedArray_FromMapFn(/** Iterable<?number> */ source, /** ?function(number):number */ mapFn) {
  $Overlay.$clinit();
  return Uint8ClampedArray.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(source)), mapFn);
 }
 /** @return {Uint8ClampedArray} */
 static m_from__elemental2_core_JsIterable(/** Iterable<?number> */ source) {
  $Overlay.$clinit();
  return Uint8ClampedArray.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(source)));
 }
 /** @template S @return {Uint8ClampedArray} */
 static m_from__java_lang_String__elemental2_core_Uint8ClampedArray_FromMapFn__java_lang_Object(/** ?string */ source, /** ?function(number):number */ mapFn, /** S */ this_) {
  $Overlay.$clinit();
  return Uint8ClampedArray.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(source)), mapFn, this_);
 }
 /** @return {Uint8ClampedArray} */
 static m_from__java_lang_String__elemental2_core_Uint8ClampedArray_FromMapFn(/** ?string */ source, /** ?function(number):number */ mapFn) {
  $Overlay.$clinit();
  return Uint8ClampedArray.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(source)), mapFn);
 }
 /** @return {Uint8ClampedArray} */
 static m_from__java_lang_String(/** ?string */ source) {
  $Overlay.$clinit();
  return Uint8ClampedArray.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(source)));
 }
 /** @template S @return {Uint8ClampedArray} */
 static m_from__arrayOf_double__elemental2_core_Uint8ClampedArray_FromMapFn__java_lang_Object(/** Array<number> */ source, /** ?function(number):number */ mapFn, /** S */ this_) {
  $Overlay.$clinit();
  return $Overlay.m_from__jsinterop_base_JsArrayLike__elemental2_core_Uint8ClampedArray_FromMapFn__java_lang_Object(/**@type {IArrayLike<?number>}*/ (Js.m_uncheckedCast__java_lang_Object(source)), mapFn, this_);
 }
 /** @return {Uint8ClampedArray} */
 static m_from__arrayOf_double__elemental2_core_Uint8ClampedArray_FromMapFn(/** Array<number> */ source, /** ?function(number):number */ mapFn) {
  $Overlay.$clinit();
  return $Overlay.m_from__jsinterop_base_JsArrayLike__elemental2_core_Uint8ClampedArray_FromMapFn(/**@type {IArrayLike<?number>}*/ (Js.m_uncheckedCast__java_lang_Object(source)), mapFn);
 }
 /** @return {Uint8ClampedArray} */
 static m_from__arrayOf_double(/** Array<number> */ source) {
  $Overlay.$clinit();
  return $Overlay.m_from__jsinterop_base_JsArrayLike(/**@type {IArrayLike<?number>}*/ (Js.m_uncheckedCast__java_lang_Object(source)));
 }
 /** @return {number} */
 static get f_BYTES_PER_ELEMENT__elemental2_core_Uint8ClampedArray_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_BYTES_PER_ELEMENT__elemental2_core_Uint8ClampedArray_$Overlay);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_BYTES_PER_ELEMENT__elemental2_core_Uint8ClampedArray_$Overlay = Uint8ClampedArray.BYTES_PER_ELEMENT;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Uint8ClampedArray;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
/**@private {number}*/
$Overlay.$static_BYTES_PER_ELEMENT__elemental2_core_Uint8ClampedArray_$Overlay = 0;
$Util.$setClassMetadata($Overlay, "Uint8ClampedArray");

exports = $Overlay;

//# sourceMappingURL=Uint8ClampedArray$$Overlay.js.map
