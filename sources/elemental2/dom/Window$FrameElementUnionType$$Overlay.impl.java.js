goog.module('elemental2.dom.Window.FrameElementUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLIFrameElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLIFrameElement.$Overlay$impl');
let HTMLObjectElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLObjectElement.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {HTMLIFrameElement} */
 static m_asHTMLIFrameElement__$devirt__elemental2_dom_Window_FrameElementUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {HTMLIFrameElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), HTMLIFrameElement_$Overlay));
 }
 /** @return {HTMLObjectElement} */
 static m_asHTMLObjectElement__$devirt__elemental2_dom_Window_FrameElementUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {HTMLObjectElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), HTMLObjectElement_$Overlay));
 }
 /** @return {boolean} */
 static m_isHTMLIFrameElement__$devirt__elemental2_dom_Window_FrameElementUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return HTMLIFrameElement_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isHTMLObjectElement__$devirt__elemental2_dom_Window_FrameElementUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return HTMLObjectElement_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  HTMLIFrameElement_$Overlay = goog.module.get('elemental2.dom.HTMLIFrameElement.$Overlay$impl');
  HTMLObjectElement_$Overlay = goog.module.get('elemental2.dom.HTMLObjectElement.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=Window$FrameElementUnionType$$Overlay.js.map
