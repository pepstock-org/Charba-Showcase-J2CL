goog.module('elemental2.core.JsWeakSet.ConstructorIterableUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @template VALUE @return {Array<VALUE>} */
 static m_asJsArray__$devirt__elemental2_core_JsWeakSet_ConstructorIterableUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Array<VALUE>}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), JsArray_$Overlay));
 }
 /** @template VALUE @return {Iterable<VALUE>} */
 static m_asJsIterable__$devirt__elemental2_core_JsWeakSet_ConstructorIterableUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Iterable<VALUE>}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @template VALUE @return {boolean} */
 static m_isJsArray__$devirt__elemental2_core_JsWeakSet_ConstructorIterableUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return JsArray_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  JsArray_$Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=JsWeakSet$ConstructorIterableUnionType$$Overlay.js.map
