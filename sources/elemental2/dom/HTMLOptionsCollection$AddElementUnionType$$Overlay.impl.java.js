goog.module('elemental2.dom.HTMLOptionsCollection.AddElementUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLOptGroupElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptGroupElement.$Overlay$impl');
let HTMLOptionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptionElement.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {HTMLOptGroupElement} */
 static m_asHTMLOptGroupElement__$devirt__elemental2_dom_HTMLOptionsCollection_AddElementUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {HTMLOptGroupElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), HTMLOptGroupElement_$Overlay));
 }
 /** @return {HTMLOptionElement} */
 static m_asHTMLOptionElement__$devirt__elemental2_dom_HTMLOptionsCollection_AddElementUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {HTMLOptionElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), HTMLOptionElement_$Overlay));
 }
 /** @return {boolean} */
 static m_isHTMLOptGroupElement__$devirt__elemental2_dom_HTMLOptionsCollection_AddElementUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return HTMLOptGroupElement_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isHTMLOptionElement__$devirt__elemental2_dom_HTMLOptionsCollection_AddElementUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return HTMLOptionElement_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  HTMLOptGroupElement_$Overlay = goog.module.get('elemental2.dom.HTMLOptGroupElement.$Overlay$impl');
  HTMLOptionElement_$Overlay = goog.module.get('elemental2.dom.HTMLOptionElement.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=HTMLOptionsCollection$AddElementUnionType$$Overlay.js.map
