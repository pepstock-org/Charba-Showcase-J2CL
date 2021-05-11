goog.module('elemental2.dom.URLSearchParams.ConstructorInitUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {Array<Array<?string>>} */
 static m_asJsArray__$devirt__elemental2_dom_URLSearchParams_ConstructorInitUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Array<Array<?string>>}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), JsArray_$Overlay));
 }
 /** @return {Object<string, ?string>} */
 static m_asJsPropertyMap__$devirt__elemental2_dom_URLSearchParams_ConstructorInitUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Object<string, ?string>}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_dom_URLSearchParams_ConstructorInitUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {boolean} */
 static m_isJsArray__$devirt__elemental2_dom_URLSearchParams_ConstructorInitUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return JsArray_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_dom_URLSearchParams_ConstructorInitUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  JsArray_$Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=URLSearchParams$ConstructorInitUnionType$$Overlay.js.map
