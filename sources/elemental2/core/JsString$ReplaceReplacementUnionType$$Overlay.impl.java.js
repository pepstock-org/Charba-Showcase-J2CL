goog.module('elemental2.core.JsString.ReplaceReplacementUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptFunction = goog.forwardDeclare('vmbootstrap.JavaScriptFunction$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {?function(?string, ...*):*} */
 static m_asReplaceReplacementFn__$devirt__elemental2_core_JsString_ReplaceReplacementUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {?function(?string, ...*):*}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $JavaScriptFunction));
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_core_JsString_ReplaceReplacementUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {boolean} */
 static m_isReplaceReplacementFn__$devirt__elemental2_core_JsString_ReplaceReplacementUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return $JavaScriptFunction.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_core_JsString_ReplaceReplacementUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptFunction = goog.module.get('vmbootstrap.JavaScriptFunction$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=JsString$ReplaceReplacementUnionType$$Overlay.js.map
