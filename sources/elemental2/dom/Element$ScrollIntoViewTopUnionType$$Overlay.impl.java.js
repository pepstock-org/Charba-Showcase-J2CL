goog.module('elemental2.dom.Element.ScrollIntoViewTopUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {boolean} */
 static m_asBoolean__$devirt__elemental2_dom_Element_ScrollIntoViewTopUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asBoolean__java_lang_Object($thisArg);
 }
 /** @return {ScrollIntoViewOptions} */
 static m_asScrollIntoViewOptions__$devirt__elemental2_dom_Element_ScrollIntoViewTopUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ScrollIntoViewOptions}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @return {boolean} */
 static m_isBoolean__$devirt__elemental2_dom_Element_ScrollIntoViewTopUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Boolean.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=Element$ScrollIntoViewTopUnionType$$Overlay.js.map
