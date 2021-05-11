goog.module('elemental2.core.DataView.ConstructorBufferUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayBuffer_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBuffer.$Overlay$impl');
let SharedArrayBuffer_$Overlay = goog.forwardDeclare('elemental2.core.SharedArrayBuffer.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {ArrayBuffer} */
 static m_asArrayBuffer__$devirt__elemental2_core_DataView_ConstructorBufferUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ArrayBuffer}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), ArrayBuffer_$Overlay));
 }
 /** @return {SharedArrayBuffer} */
 static m_asSharedArrayBuffer__$devirt__elemental2_core_DataView_ConstructorBufferUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {SharedArrayBuffer}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), SharedArrayBuffer_$Overlay));
 }
 /** @return {boolean} */
 static m_isArrayBuffer__$devirt__elemental2_core_DataView_ConstructorBufferUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return ArrayBuffer_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isSharedArrayBuffer__$devirt__elemental2_core_DataView_ConstructorBufferUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return SharedArrayBuffer_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  ArrayBuffer_$Overlay = goog.module.get('elemental2.core.ArrayBuffer.$Overlay$impl');
  SharedArrayBuffer_$Overlay = goog.module.get('elemental2.core.SharedArrayBuffer.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=DataView$ConstructorBufferUnionType$$Overlay.js.map
