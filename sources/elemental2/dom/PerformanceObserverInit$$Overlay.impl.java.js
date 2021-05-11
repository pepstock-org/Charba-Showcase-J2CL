goog.module('elemental2.dom.PerformanceObserverInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class $Overlay {
 /** @return {PerformanceObserverInit} */
 static m_create__() {
  $Overlay.$clinit();
  return /**@type {PerformanceObserverInit}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_of__()));
 }
 
 static m_setEntryTypes__$devirt__elemental2_dom_PerformanceObserverInit__arrayOf_java_lang_String(/** !PerformanceObserverInit */ $thisArg, /** Array<?string> */ entryTypes) {
  $Overlay.$clinit();
  $thisArg.entryTypes = /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(entryTypes));
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

//# sourceMappingURL=PerformanceObserverInit$$Overlay.js.map
