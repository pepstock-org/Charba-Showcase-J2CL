goog.module('elemental2.dom.Element.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 
 static m_after__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node(/** !Element */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.after(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_after__$devirt__elemental2_dom_Element__arrayOf_java_lang_String(/** !Element */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.after(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_append__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node(/** !Element */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.append(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_append__$devirt__elemental2_dom_Element__arrayOf_java_lang_String(/** !Element */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.append(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_before__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node(/** !Element */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.before(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_before__$devirt__elemental2_dom_Element__arrayOf_java_lang_String(/** !Element */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.before(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 /** @return {boolean} */
 static m_matchesSelector__$devirt__elemental2_dom_Element__java_lang_String__elemental2_dom_Node(/** !Element */ $thisArg, /** ?string */ selectors, /** Node */ refNodes) {
  $Overlay.$clinit();
  return $thisArg.matchesSelector(selectors, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(refNodes)));
 }
 /** @return {boolean} */
 static m_matchesSelector__$devirt__elemental2_dom_Element__java_lang_String__elemental2_dom_NodeList(/** !Element */ $thisArg, /** ?string */ selectors, /** NodeList<*> */ refNodes) {
  $Overlay.$clinit();
  return $thisArg.matchesSelector(selectors, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(refNodes)));
 }
 
 static m_prepend__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node(/** !Element */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.prepend(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_prepend__$devirt__elemental2_dom_Element__arrayOf_java_lang_String(/** !Element */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.prepend(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_replaceWith__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node(/** !Element */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.replaceWith(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_replaceWith__$devirt__elemental2_dom_Element__arrayOf_java_lang_String(/** !Element */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.replaceWith(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_scrollIntoView__$devirt__elemental2_dom_Element__elemental2_dom_ScrollIntoViewOptions(/** !Element */ $thisArg, /** ScrollIntoViewOptions */ top) {
  $Overlay.$clinit();
  $thisArg.scrollIntoView(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(top)));
 }
 
 static m_scrollIntoView__$devirt__elemental2_dom_Element__boolean(/** !Element */ $thisArg, /** boolean */ top) {
  $Overlay.$clinit();
  $thisArg.scrollIntoView(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(top)));
 }
 
 static m_scrollTo__$devirt__elemental2_dom_Element__elemental2_dom_ScrollToOptions__double(/** !Element */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX, /** number */ y) {
  $Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 
 static m_scrollTo__$devirt__elemental2_dom_Element__elemental2_dom_ScrollToOptions(/** !Element */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX) {
  $Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 
 static m_scrollTo__$devirt__elemental2_dom_Element__double__double(/** !Element */ $thisArg, /** number */ scrollToOptionsOrX, /** number */ y) {
  $Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 
 static m_scrollTo__$devirt__elemental2_dom_Element__double(/** !Element */ $thisArg, /** number */ scrollToOptionsOrX) {
  $Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 
 static m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String(/** !Element */ $thisArg, /** ?string */ name, /** ?string */ value) {
  $Overlay.$clinit();
  $thisArg.setAttribute(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__elemental2_dom_TrustedHTML(/** !Element */ $thisArg, /** ?string */ name, /** TrustedHTML */ value) {
  $Overlay.$clinit();
  $thisArg.setAttribute(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__elemental2_dom_TrustedScriptURL(/** !Element */ $thisArg, /** ?string */ name, /** TrustedScriptURL */ value) {
  $Overlay.$clinit();
  $thisArg.setAttribute(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean(/** !Element */ $thisArg, /** ?string */ name, /** boolean */ value) {
  $Overlay.$clinit();
  $thisArg.setAttribute(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__double(/** !Element */ $thisArg, /** ?string */ name, /** number */ value) {
  $Overlay.$clinit();
  $thisArg.setAttribute(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_setAttributeNS__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__java_lang_String(/** !Element */ $thisArg, /** ?string */ namespaceURI, /** ?string */ qualifiedName, /** ?string */ value) {
  $Overlay.$clinit();
  $thisArg.setAttributeNS(namespaceURI, qualifiedName, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_setAttributeNS__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__boolean(/** !Element */ $thisArg, /** ?string */ namespaceURI, /** ?string */ qualifiedName, /** boolean */ value) {
  $Overlay.$clinit();
  $thisArg.setAttributeNS(namespaceURI, qualifiedName, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_setAttributeNS__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__double(/** !Element */ $thisArg, /** ?string */ namespaceURI, /** ?string */ qualifiedName, /** number */ value) {
  $Overlay.$clinit();
  $thisArg.setAttributeNS(namespaceURI, qualifiedName, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 /** @return {number} */
 static get f_ALLOW_KEYBOARD_INPUT__elemental2_dom_Element_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_ALLOW_KEYBOARD_INPUT__elemental2_dom_Element_$Overlay);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_ALLOW_KEYBOARD_INPUT__elemental2_dom_Element_$Overlay = Element.ALLOW_KEYBOARD_INPUT;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Element;
 }
 
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
/**@private {number}*/
$Overlay.$static_ALLOW_KEYBOARD_INPUT__elemental2_dom_Element_$Overlay = 0;
$Util.$setClassMetadata($Overlay, "Element");

exports = $Overlay;

//# sourceMappingURL=Element$$Overlay.js.map
