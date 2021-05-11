goog.module('elemental2.dom.ConstrainDOMStringParameters.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class $Overlay {
 /** @return {ConstrainDOMStringParameters} */
 static m_create__() {
  $Overlay.$clinit();
  return /**@type {ConstrainDOMStringParameters}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_of__()));
 }
 
 static m_setExact__$devirt__elemental2_dom_ConstrainDOMStringParameters__elemental2_core_JsArray(/** !ConstrainDOMStringParameters */ $thisArg, /** Array<?string> */ exact) {
  $Overlay.$clinit();
  $thisArg.exact = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(exact));
 }
 
 static m_setExact__$devirt__elemental2_dom_ConstrainDOMStringParameters__java_lang_String(/** !ConstrainDOMStringParameters */ $thisArg, /** ?string */ exact) {
  $Overlay.$clinit();
  $thisArg.exact = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(exact));
 }
 
 static m_setExact__$devirt__elemental2_dom_ConstrainDOMStringParameters__arrayOf_java_lang_String(/** !ConstrainDOMStringParameters */ $thisArg, /** Array<?string> */ exact) {
  $Overlay.$clinit();
  $Overlay.m_setExact__$devirt__elemental2_dom_ConstrainDOMStringParameters__elemental2_core_JsArray($thisArg, /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(exact)));
 }
 
 static m_setIdeal__$devirt__elemental2_dom_ConstrainDOMStringParameters__elemental2_core_JsArray(/** !ConstrainDOMStringParameters */ $thisArg, /** Array<?string> */ ideal) {
  $Overlay.$clinit();
  $thisArg.ideal = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(ideal));
 }
 
 static m_setIdeal__$devirt__elemental2_dom_ConstrainDOMStringParameters__java_lang_String(/** !ConstrainDOMStringParameters */ $thisArg, /** ?string */ ideal) {
  $Overlay.$clinit();
  $thisArg.ideal = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(ideal));
 }
 
 static m_setIdeal__$devirt__elemental2_dom_ConstrainDOMStringParameters__arrayOf_java_lang_String(/** !ConstrainDOMStringParameters */ $thisArg, /** Array<?string> */ ideal) {
  $Overlay.$clinit();
  $Overlay.m_setIdeal__$devirt__elemental2_dom_ConstrainDOMStringParameters__elemental2_core_JsArray($thisArg, /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(ideal)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=ConstrainDOMStringParameters$$Overlay.js.map
