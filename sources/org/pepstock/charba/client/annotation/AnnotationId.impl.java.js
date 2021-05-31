goog.module('org.pepstock.charba.client.annotation.AnnotationId$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PropertyKey = goog.require('org.pepstock.charba.client.commons.PropertyKey$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationId.$LambdaAdaptor$impl');
let StandardAnnotationId = goog.forwardDeclare('org.pepstock.charba.client.annotation.StandardAnnotationId$impl');

/**
 * @interface
 * @extends {PropertyKey}
 */
class AnnotationId {
 /** @return {AnnotationId} */
 static m_create__java_lang_String(/** ?string */ id) {
  AnnotationId.$clinit();
  PropertyKey.m_checkIfValid__java_lang_String(id);
  return StandardAnnotationId.$create__java_lang_String(id);
 }
 /** @return {boolean} */
 static m_isValid__java_lang_String(/** ?string */ id) {
  AnnotationId.$clinit();
  return PropertyKey.m_isValid__java_lang_String(id);
 }
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_annotation_AnnotationId(/** AnnotationId */ id) {
  AnnotationId.$clinit();
  return PropertyKey.m_isValid__org_pepstock_charba_client_commons_PropertyKey(id);
 }
 
 static m_checkIfValid__org_pepstock_charba_client_annotation_AnnotationId(/** AnnotationId */ id) {
  AnnotationId.$clinit();
  PropertyKey.m_checkIfValid__org_pepstock_charba_client_commons_PropertyKey(id);
 }
 
 static m_checkIfValid__java_lang_String(/** ?string */ id) {
  AnnotationId.$clinit();
  PropertyKey.m_checkIfValid__java_lang_String(id);
 }
 /** @return {AnnotationId} */
 static m_checkAndGetAnnotationID__java_lang_String__org_pepstock_charba_client_annotation_AnnotationId(/** ?string */ id, /** AnnotationId */ defaultValue) {
  AnnotationId.$clinit();
  if (AnnotationId.m_isValid__java_lang_String(id)) {
   return AnnotationId.m_create__java_lang_String(id);
  }
  return defaultValue;
 }
 /** @return {AnnotationId} */
 static $adapt(/** ?function():?string */ fn) {
  AnnotationId.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  AnnotationId.$clinit = () =>{};
  AnnotationId.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  PropertyKey.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_AnnotationId = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_AnnotationId;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.annotation.AnnotationId.$LambdaAdaptor$impl');
  StandardAnnotationId = goog.module.get('org.pepstock.charba.client.annotation.StandardAnnotationId$impl');
 }
}
AnnotationId.$markImplementor(/**@type {Function}*/ (AnnotationId));
$Util.$setClassMetadataForInterface(AnnotationId, "org.pepstock.charba.client.annotation.AnnotationId");

exports = AnnotationId;

//# sourceMappingURL=AnnotationId.js.map
