goog.module('elemental2.dom.HTMLDocument.LinksHTMLCollectionTypeParameterUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLAnchorElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let HTMLAreaElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAreaElement.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {HTMLAnchorElement} */
 static m_asHTMLAnchorElement__$devirt__elemental2_dom_HTMLDocument_LinksHTMLCollectionTypeParameterUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {HTMLAnchorElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), HTMLAnchorElement_$Overlay));
 }
 /** @return {HTMLAreaElement} */
 static m_asHTMLAreaElement__$devirt__elemental2_dom_HTMLDocument_LinksHTMLCollectionTypeParameterUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {HTMLAreaElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), HTMLAreaElement_$Overlay));
 }
 /** @return {boolean} */
 static m_isHTMLAnchorElement__$devirt__elemental2_dom_HTMLDocument_LinksHTMLCollectionTypeParameterUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return HTMLAnchorElement_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isHTMLAreaElement__$devirt__elemental2_dom_HTMLDocument_LinksHTMLCollectionTypeParameterUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return HTMLAreaElement_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  HTMLAnchorElement_$Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  HTMLAreaElement_$Overlay = goog.module.get('elemental2.dom.HTMLAreaElement.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=HTMLDocument$LinksHTMLCollectionTypeParameterUnionType$$Overlay.js.map
