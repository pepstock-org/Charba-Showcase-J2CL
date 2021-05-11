goog.module('elemental2.core.Uint8Array.ConstructorLengthUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayBuffer_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBuffer.$Overlay$impl');
let ArrayBufferView_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBufferView.$Overlay$impl');
let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let SharedArrayBuffer_$Overlay = goog.forwardDeclare('elemental2.core.SharedArrayBuffer.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {ArrayBuffer} */
 static m_asArrayBuffer__$devirt__elemental2_core_Uint8Array_ConstructorLengthUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ArrayBuffer}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), ArrayBuffer_$Overlay));
 }
 /** @return {ArrayBufferView} */
 static m_asArrayBufferView__$devirt__elemental2_core_Uint8Array_ConstructorLengthUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ArrayBufferView}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), ArrayBufferView_$Overlay));
 }
 /** @return {number} */
 static m_asInt__$devirt__elemental2_core_Uint8Array_ConstructorLengthUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asInt__java_lang_Object($thisArg);
 }
 /** @return {Array<?number>} */
 static m_asJsArray__$devirt__elemental2_core_Uint8Array_ConstructorLengthUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Array<?number>}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), JsArray_$Overlay));
 }
 /** @return {SharedArrayBuffer} */
 static m_asSharedArrayBuffer__$devirt__elemental2_core_Uint8Array_ConstructorLengthUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {SharedArrayBuffer}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), SharedArrayBuffer_$Overlay));
 }
 /** @return {boolean} */
 static m_isArrayBuffer__$devirt__elemental2_core_Uint8Array_ConstructorLengthUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return ArrayBuffer_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isArrayBufferView__$devirt__elemental2_core_Uint8Array_ConstructorLengthUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return ArrayBufferView_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isInt__$devirt__elemental2_core_Uint8Array_ConstructorLengthUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Double.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isJsArray__$devirt__elemental2_core_Uint8Array_ConstructorLengthUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return JsArray_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isSharedArrayBuffer__$devirt__elemental2_core_Uint8Array_ConstructorLengthUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return SharedArrayBuffer_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  ArrayBuffer_$Overlay = goog.module.get('elemental2.core.ArrayBuffer.$Overlay$impl');
  ArrayBufferView_$Overlay = goog.module.get('elemental2.core.ArrayBufferView.$Overlay$impl');
  JsArray_$Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  SharedArrayBuffer_$Overlay = goog.module.get('elemental2.core.SharedArrayBuffer.$Overlay$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=Uint8Array$ConstructorLengthUnionType$$Overlay.js.map
