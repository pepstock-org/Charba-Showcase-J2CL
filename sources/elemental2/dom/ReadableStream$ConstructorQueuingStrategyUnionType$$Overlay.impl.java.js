goog.module('elemental2.dom.ReadableStream.ConstructorQueuingStrategyUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ByteLengthQueuingStrategy_$Overlay = goog.forwardDeclare('elemental2.dom.ByteLengthQueuingStrategy.$Overlay$impl');
let CountQueuingStrategy_$Overlay = goog.forwardDeclare('elemental2.dom.CountQueuingStrategy.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {ByteLengthQueuingStrategy} */
 static m_asByteLengthQueuingStrategy__$devirt__elemental2_dom_ReadableStream_ConstructorQueuingStrategyUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ByteLengthQueuingStrategy}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), ByteLengthQueuingStrategy_$Overlay));
 }
 /** @return {CountQueuingStrategy} */
 static m_asCountQueuingStrategy__$devirt__elemental2_dom_ReadableStream_ConstructorQueuingStrategyUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {CountQueuingStrategy}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), CountQueuingStrategy_$Overlay));
 }
 /** @return {?} */
 static m_asTransformStreamWritableStrategyType__$devirt__elemental2_dom_ReadableStream_ConstructorQueuingStrategyUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @return {boolean} */
 static m_isByteLengthQueuingStrategy__$devirt__elemental2_dom_ReadableStream_ConstructorQueuingStrategyUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return ByteLengthQueuingStrategy_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isCountQueuingStrategy__$devirt__elemental2_dom_ReadableStream_ConstructorQueuingStrategyUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return CountQueuingStrategy_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  ByteLengthQueuingStrategy_$Overlay = goog.module.get('elemental2.dom.ByteLengthQueuingStrategy.$Overlay$impl');
  CountQueuingStrategy_$Overlay = goog.module.get('elemental2.dom.CountQueuingStrategy.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=ReadableStream$ConstructorQueuingStrategyUnionType$$Overlay.js.map
