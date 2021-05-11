goog.module('elemental2.dom.DomGlobal.SetIntervalCallbackUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let TrustedScript_$Overlay = goog.forwardDeclare('elemental2.dom.TrustedScript.$Overlay$impl');
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
 /** @return {?function(...*):void} */
 static m_asSetIntervalCallbackFn__$devirt__elemental2_dom_DomGlobal_SetIntervalCallbackUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {?function(...*):void}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $JavaScriptFunction));
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_dom_DomGlobal_SetIntervalCallbackUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {TrustedScript} */
 static m_asTrustedScript__$devirt__elemental2_dom_DomGlobal_SetIntervalCallbackUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {TrustedScript}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), TrustedScript_$Overlay));
 }
 /** @return {boolean} */
 static m_isSetIntervalCallbackFn__$devirt__elemental2_dom_DomGlobal_SetIntervalCallbackUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return $JavaScriptFunction.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_dom_DomGlobal_SetIntervalCallbackUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isTrustedScript__$devirt__elemental2_dom_DomGlobal_SetIntervalCallbackUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return TrustedScript_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  TrustedScript_$Overlay = goog.module.get('elemental2.dom.TrustedScript.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptFunction = goog.module.get('vmbootstrap.JavaScriptFunction$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=DomGlobal$SetIntervalCallbackUnionType$$Overlay.js.map
