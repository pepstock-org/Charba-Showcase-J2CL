goog.module('elemental2.dom.HTMLDialogElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 
 static m_show__$devirt__elemental2_dom_HTMLDialogElement__elemental2_dom_Element(/** !HTMLDialogElement */ $thisArg, /** Element */ anchor) {
  $Overlay.$clinit();
  $thisArg.show(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(anchor)));
 }
 
 static m_show__$devirt__elemental2_dom_HTMLDialogElement__elemental2_dom_MouseEvent(/** !HTMLDialogElement */ $thisArg, /** MouseEvent */ anchor) {
  $Overlay.$clinit();
  $thisArg.show(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(anchor)));
 }
 
 static m_showModal__$devirt__elemental2_dom_HTMLDialogElement__elemental2_dom_Element(/** !HTMLDialogElement */ $thisArg, /** Element */ anchor) {
  $Overlay.$clinit();
  $thisArg.showModal(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(anchor)));
 }
 
 static m_showModal__$devirt__elemental2_dom_HTMLDialogElement__elemental2_dom_MouseEvent(/** !HTMLDialogElement */ $thisArg, /** MouseEvent */ anchor) {
  $Overlay.$clinit();
  $thisArg.showModal(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(anchor)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLDialogElement;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, "HTMLDialogElement");

exports = $Overlay;

//# sourceMappingURL=HTMLDialogElement$$Overlay.js.map
