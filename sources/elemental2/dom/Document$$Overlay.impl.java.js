goog.module('elemental2.dom.Document.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 
 static m_append__$devirt__elemental2_dom_Document__arrayOf_elemental2_dom_Node(/** !Document */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.append(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_append__$devirt__elemental2_dom_Document__arrayOf_java_lang_String(/** !Document */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.append(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 /** @return {Element} */
 static m_createElement__$devirt__elemental2_dom_Document__java_lang_String__elemental2_dom_Document_CreateElementTypeExtensionType(/** !Document */ $thisArg, /** ?string */ tagName, /** ? */ typeExtension) {
  $Overlay.$clinit();
  return $thisArg.createElement(tagName, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(typeExtension)));
 }
 /** @return {Element} */
 static m_createElement__$devirt__elemental2_dom_Document__java_lang_String__java_lang_String(/** !Document */ $thisArg, /** ?string */ tagName, /** ?string */ typeExtension) {
  $Overlay.$clinit();
  return $thisArg.createElement(tagName, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(typeExtension)));
 }
 /** @return {Text} */
 static m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(/** !Document */ $thisArg, /** ?string */ data) {
  $Overlay.$clinit();
  return $thisArg.createTextNode(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /** @return {Text} */
 static m_createTextNode__$devirt__elemental2_dom_Document__double(/** !Document */ $thisArg, /** number */ data) {
  $Overlay.$clinit();
  return $thisArg.createTextNode(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /** @return {TouchList} */
 static m_createTouchList__$devirt__elemental2_dom_Document__arrayOf_elemental2_dom_Touch(/** !Document */ $thisArg, /** Array<Touch> */ touches) {
  $Overlay.$clinit();
  return $thisArg.createTouchList(/**@type {Array<Touch>}*/ (Js.m_uncheckedCast__java_lang_Object(touches)));
 }
 
 static m_prepend__$devirt__elemental2_dom_Document__arrayOf_elemental2_dom_Node(/** !Document */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.prepend(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_prepend__$devirt__elemental2_dom_Document__arrayOf_java_lang_String(/** !Document */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.prepend(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_write__$devirt__elemental2_dom_Document__java_lang_String(/** !Document */ $thisArg, /** ?string */ text) {
  $Overlay.$clinit();
  $thisArg.write(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(text)));
 }
 
 static m_write__$devirt__elemental2_dom_Document__elemental2_dom_TrustedHTML(/** !Document */ $thisArg, /** TrustedHTML */ text) {
  $Overlay.$clinit();
  $thisArg.write(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(text)));
 }
 
 static m_writeln__$devirt__elemental2_dom_Document__java_lang_String(/** !Document */ $thisArg, /** ?string */ text) {
  $Overlay.$clinit();
  $thisArg.writeln(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(text)));
 }
 
 static m_writeln__$devirt__elemental2_dom_Document__elemental2_dom_TrustedHTML(/** !Document */ $thisArg, /** TrustedHTML */ text) {
  $Overlay.$clinit();
  $thisArg.writeln(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(text)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Document;
 }
 
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, "Document");

exports = $Overlay;

//# sourceMappingURL=Document$$Overlay.js.map
