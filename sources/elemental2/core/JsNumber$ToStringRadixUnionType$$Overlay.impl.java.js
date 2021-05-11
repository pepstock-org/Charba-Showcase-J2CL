goog.module('elemental2.core.JsNumber.ToStringRadixUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsNumber_$Overlay = goog.forwardDeclare('elemental2.core.JsNumber.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {number} */
 static m_asInt__$devirt__elemental2_core_JsNumber_ToStringRadixUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asInt__java_lang_Object($thisArg);
 }
 /** @return {Number} */
 static m_asJsNumber__$devirt__elemental2_core_JsNumber_ToStringRadixUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Number}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), JsNumber_$Overlay));
 }
 /** @return {boolean} */
 static m_isInt__$devirt__elemental2_core_JsNumber_ToStringRadixUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Double.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isJsNumber__$devirt__elemental2_core_JsNumber_ToStringRadixUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return JsNumber_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  JsNumber_$Overlay = goog.module.get('elemental2.core.JsNumber.$Overlay$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=JsNumber$ToStringRadixUnionType$$Overlay.js.map
