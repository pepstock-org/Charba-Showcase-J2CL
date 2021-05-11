goog.module('elemental2.dom.URL.ConstructorBaseUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let URL_$Overlay = goog.forwardDeclare('elemental2.dom.URL.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_dom_URL_ConstructorBaseUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {URL} */
 static m_asURL__$devirt__elemental2_dom_URL_ConstructorBaseUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {URL}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), URL_$Overlay));
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_dom_URL_ConstructorBaseUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isURL__$devirt__elemental2_dom_URL_ConstructorBaseUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return URL_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  URL_$Overlay = goog.module.get('elemental2.dom.URL.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=URL$ConstructorBaseUnionType$$Overlay.js.map
