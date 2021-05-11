goog.module('elemental2.dom.CharacterData.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 
 static m_after__$devirt__elemental2_dom_CharacterData__arrayOf_elemental2_dom_Node(/** !CharacterData */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.after(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_after__$devirt__elemental2_dom_CharacterData__arrayOf_java_lang_String(/** !CharacterData */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.after(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_before__$devirt__elemental2_dom_CharacterData__arrayOf_elemental2_dom_Node(/** !CharacterData */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.before(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_before__$devirt__elemental2_dom_CharacterData__arrayOf_java_lang_String(/** !CharacterData */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.before(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_replaceWith__$devirt__elemental2_dom_CharacterData__arrayOf_elemental2_dom_Node(/** !CharacterData */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.replaceWith(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_replaceWith__$devirt__elemental2_dom_CharacterData__arrayOf_java_lang_String(/** !CharacterData */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.replaceWith(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CharacterData;
 }
 
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, "CharacterData");

exports = $Overlay;

//# sourceMappingURL=CharacterData$$Overlay.js.map
