goog.module('elemental2.dom.XMLHttpRequest.ResponseUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsObject_$Overlay = goog.forwardDeclare('elemental2.core.JsObject.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {Object} */
 static m_asJsObject__$devirt__elemental2_dom_XMLHttpRequest_ResponseUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), JsObject_$Overlay));
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_dom_XMLHttpRequest_ResponseUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {boolean} */
 static m_isJsObject__$devirt__elemental2_dom_XMLHttpRequest_ResponseUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return JsObject_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_dom_XMLHttpRequest_ResponseUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  JsObject_$Overlay = goog.module.get('elemental2.core.JsObject.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=XMLHttpRequest$ResponseUnionType$$Overlay.js.map
