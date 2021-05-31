goog.module('org.pepstock.charba.client.annotation.StandardAnnotationId$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AnnotationId = goog.require('org.pepstock.charba.client.annotation.AnnotationId$impl');

/**
 * @implements {AnnotationId}
 */
class StandardAnnotationId extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_annotation_StandardAnnotationId_;
 }
 /** @return {!StandardAnnotationId} */
 static $create__java_lang_String(/** ?string */ value) {
  StandardAnnotationId.$clinit();
  let $instance = new StandardAnnotationId();
  $instance.$ctor__org_pepstock_charba_client_annotation_StandardAnnotationId__java_lang_String(value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_annotation_StandardAnnotationId__java_lang_String(/** ?string */ value) {
  this.$ctor__java_lang_Object__();
  this.f_value__org_pepstock_charba_client_annotation_StandardAnnotationId_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_annotation_StandardAnnotationId_;
 }
 
 static $clinit() {
  StandardAnnotationId.$clinit = () =>{};
  StandardAnnotationId.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StandardAnnotationId;
 }
 
 static $loadModules() {}
}
AnnotationId.$markImplementor(StandardAnnotationId);
$Util.$setClassMetadata(StandardAnnotationId, "org.pepstock.charba.client.annotation.StandardAnnotationId");

exports = StandardAnnotationId;

//# sourceMappingURL=StandardAnnotationId.js.map
