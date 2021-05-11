goog.module('elemental2.dom.HTMLOptionsCollection.AddBeforeUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {number} */
 static m_asDouble__$devirt__elemental2_dom_HTMLOptionsCollection_AddBeforeUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asDouble__java_lang_Object($thisArg);
 }
 /** @return {HTMLElement} */
 static m_asHTMLElement__$devirt__elemental2_dom_HTMLOptionsCollection_AddBeforeUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), HTMLElement_$Overlay));
 }
 /** @return {boolean} */
 static m_isDouble__$devirt__elemental2_dom_HTMLOptionsCollection_AddBeforeUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Double.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isHTMLElement__$devirt__elemental2_dom_HTMLOptionsCollection_AddBeforeUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return HTMLElement_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=HTMLOptionsCollection$AddBeforeUnionType$$Overlay.js.map
