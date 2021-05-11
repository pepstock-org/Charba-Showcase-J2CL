goog.module('elemental2.dom.DomGlobal.RequestIdleCallbackOptionsUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {IdleCallbackOptions} */
 static m_asIdleCallbackOptions__$devirt__elemental2_dom_DomGlobal_RequestIdleCallbackOptionsUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {IdleCallbackOptions}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @return {number} */
 static m_asInt__$devirt__elemental2_dom_DomGlobal_RequestIdleCallbackOptionsUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asInt__java_lang_Object($thisArg);
 }
 /** @return {boolean} */
 static m_isInt__$devirt__elemental2_dom_DomGlobal_RequestIdleCallbackOptionsUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Double.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=DomGlobal$RequestIdleCallbackOptionsUnionType$$Overlay.js.map
