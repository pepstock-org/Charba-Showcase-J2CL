goog.module('elemental2.core.JSONType.StringifyReplacerUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptFunction = goog.forwardDeclare('vmbootstrap.JavaScriptFunction$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {Array<?string>} */
 static m_asJsArray__$devirt__elemental2_core_JSONType_StringifyReplacerUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Array<?string>}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), JsArray_$Overlay));
 }
 /** @return {?function(?string, *):*} */
 static m_asStringifyReplacerFn__$devirt__elemental2_core_JSONType_StringifyReplacerUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {?function(?string, *):*}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $JavaScriptFunction));
 }
 /** @return {boolean} */
 static m_isJsArray__$devirt__elemental2_core_JSONType_StringifyReplacerUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return JsArray_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isStringifyReplacerFn__$devirt__elemental2_core_JSONType_StringifyReplacerUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return $JavaScriptFunction.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  JsArray_$Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptFunction = goog.module.get('vmbootstrap.JavaScriptFunction$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=JSONType$StringifyReplacerUnionType$$Overlay.js.map
