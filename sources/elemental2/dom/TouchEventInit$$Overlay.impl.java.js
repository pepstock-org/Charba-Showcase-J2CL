goog.module('elemental2.dom.TouchEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class $Overlay {
 /** @return {TouchEventInit} */
 static m_create__() {
  $Overlay.$clinit();
  return /**@type {TouchEventInit}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_of__()));
 }
 
 static m_setChangedTouches__$devirt__elemental2_dom_TouchEventInit__arrayOf_elemental2_dom_Touch(/** !TouchEventInit */ $thisArg, /** Array<Touch> */ changedTouches) {
  $Overlay.$clinit();
  $thisArg.changedTouches = /**@type {Array<Touch>}*/ (Js.m_uncheckedCast__java_lang_Object(changedTouches));
 }
 
 static m_setTargetTouches__$devirt__elemental2_dom_TouchEventInit__arrayOf_elemental2_dom_Touch(/** !TouchEventInit */ $thisArg, /** Array<Touch> */ targetTouches) {
  $Overlay.$clinit();
  $thisArg.targetTouches = /**@type {Array<Touch>}*/ (Js.m_uncheckedCast__java_lang_Object(targetTouches));
 }
 
 static m_setTouches__$devirt__elemental2_dom_TouchEventInit__arrayOf_elemental2_dom_Touch(/** !TouchEventInit */ $thisArg, /** Array<Touch> */ touches) {
  $Overlay.$clinit();
  $thisArg.touches = /**@type {Array<Touch>}*/ (Js.m_uncheckedCast__java_lang_Object(touches));
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

//# sourceMappingURL=TouchEventInit$$Overlay.js.map
