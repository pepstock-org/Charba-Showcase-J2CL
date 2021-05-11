goog.module('elemental2.dom.MutationObserverInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class $Overlay {
 /** @return {MutationObserverInit} */
 static m_create__() {
  $Overlay.$clinit();
  return /**@type {MutationObserverInit}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_of__()));
 }
 
 static m_setAttributeFilter__$devirt__elemental2_dom_MutationObserverInit__arrayOf_java_lang_String(/** !MutationObserverInit */ $thisArg, /** Array<?string> */ attributeFilter) {
  $Overlay.$clinit();
  $thisArg.attributeFilter = /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(attributeFilter));
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

//# sourceMappingURL=MutationObserverInit$$Overlay.js.map
