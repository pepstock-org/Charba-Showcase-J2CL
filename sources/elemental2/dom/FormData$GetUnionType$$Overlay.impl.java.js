goog.module('elemental2.dom.FormData.GetUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let File_$Overlay = goog.forwardDeclare('elemental2.dom.File.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {File} */
 static m_asFile__$devirt__elemental2_dom_FormData_GetUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {File}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), File_$Overlay));
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_dom_FormData_GetUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {boolean} */
 static m_isFile__$devirt__elemental2_dom_FormData_GetUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return File_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_dom_FormData_GetUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  File_$Overlay = goog.module.get('elemental2.dom.File.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=FormData$GetUnionType$$Overlay.js.map
