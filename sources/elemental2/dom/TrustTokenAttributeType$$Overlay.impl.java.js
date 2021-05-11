goog.module('elemental2.dom.TrustTokenAttributeType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class $Overlay {
 /** @return {TrustTokenAttributeType} */
 static m_create__() {
  $Overlay.$clinit();
  return /**@type {TrustTokenAttributeType}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_of__()));
 }
 
 static m_setAdditionalSignedHeaders__$devirt__elemental2_dom_TrustTokenAttributeType__arrayOf_java_lang_String(/** !TrustTokenAttributeType */ $thisArg, /** Array<?string> */ additionalSignedHeaders) {
  $Overlay.$clinit();
  $thisArg.additionalSignedHeaders = /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(additionalSignedHeaders));
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

//# sourceMappingURL=TrustTokenAttributeType$$Overlay.js.map
