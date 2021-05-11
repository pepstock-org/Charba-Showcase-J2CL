goog.module('org.pepstock.charba.client.annotation.IsAnnotationId$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PropertyKey = goog.require('org.pepstock.charba.client.commons.PropertyKey$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsAnnotationId.$LambdaAdaptor$impl');
let StandardAnnotationId = goog.forwardDeclare('org.pepstock.charba.client.annotation.StandardAnnotationId$impl');

/**
 * @interface
 * @extends {PropertyKey}
 */
class IsAnnotationId {
 /** @return {IsAnnotationId} */
 static m_create__java_lang_String(/** ?string */ id) {
  IsAnnotationId.$clinit();
  PropertyKey.m_checkIfValid__java_lang_String(id);
  return StandardAnnotationId.$create__java_lang_String(id);
 }
 /** @return {boolean} */
 static m_isValid__java_lang_String(/** ?string */ id) {
  IsAnnotationId.$clinit();
  return PropertyKey.m_isValid__java_lang_String(id);
 }
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_annotation_IsAnnotationId(/** IsAnnotationId */ id) {
  IsAnnotationId.$clinit();
  return PropertyKey.m_isValid__org_pepstock_charba_client_commons_PropertyKey(id);
 }
 
 static m_checkIfValid__org_pepstock_charba_client_annotation_IsAnnotationId(/** IsAnnotationId */ id) {
  IsAnnotationId.$clinit();
  PropertyKey.m_checkIfValid__org_pepstock_charba_client_commons_PropertyKey(id);
 }
 
 static m_checkIfValid__java_lang_String(/** ?string */ id) {
  IsAnnotationId.$clinit();
  PropertyKey.m_checkIfValid__java_lang_String(id);
 }
 /** @return {IsAnnotationId} */
 static m_checkAndGetAnnotationID__java_lang_String__org_pepstock_charba_client_annotation_IsAnnotationId(/** ?string */ id, /** IsAnnotationId */ defaultValue) {
  IsAnnotationId.$clinit();
  if (IsAnnotationId.m_isValid__java_lang_String(id)) {
   return IsAnnotationId.m_create__java_lang_String(id);
  }
  return defaultValue;
 }
 /** @return {IsAnnotationId} */
 static $adapt(/** ?function():?string */ fn) {
  IsAnnotationId.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  IsAnnotationId.$clinit = () =>{};
  IsAnnotationId.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  PropertyKey.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_IsAnnotationId = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_IsAnnotationId;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.annotation.IsAnnotationId.$LambdaAdaptor$impl');
  StandardAnnotationId = goog.module.get('org.pepstock.charba.client.annotation.StandardAnnotationId$impl');
 }
}
IsAnnotationId.$markImplementor(/**@type {Function}*/ (IsAnnotationId));
$Util.$setClassMetadataForInterface(IsAnnotationId, "org.pepstock.charba.client.annotation.IsAnnotationId");

exports = IsAnnotationId;

//# sourceMappingURL=IsAnnotationId.js.map
