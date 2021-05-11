goog.module('elemental2.dom.HTMLDialogElement.ShowModalAnchorUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {Element} */
 static m_asElement__$devirt__elemental2_dom_HTMLDialogElement_ShowModalAnchorUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Element}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), Element_$Overlay));
 }
 /** @return {MouseEvent} */
 static m_asMouseEvent__$devirt__elemental2_dom_HTMLDialogElement_ShowModalAnchorUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {MouseEvent}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), MouseEvent_$Overlay));
 }
 /** @return {boolean} */
 static m_isElement__$devirt__elemental2_dom_HTMLDialogElement_ShowModalAnchorUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Element_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isMouseEvent__$devirt__elemental2_dom_HTMLDialogElement_ShowModalAnchorUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return MouseEvent_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=HTMLDialogElement$ShowModalAnchorUnionType$$Overlay.js.map
