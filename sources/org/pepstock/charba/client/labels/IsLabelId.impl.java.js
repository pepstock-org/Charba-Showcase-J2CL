goog.module('org.pepstock.charba.client.labels.IsLabelId$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PropertyKey = goog.require('org.pepstock.charba.client.commons.PropertyKey$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.labels.IsLabelId.$LambdaAdaptor$impl');
let StandardLabelId = goog.forwardDeclare('org.pepstock.charba.client.labels.StandardLabelId$impl');

/**
 * @interface
 * @extends {PropertyKey}
 */
class IsLabelId {
 /** @return {IsLabelId} */
 static m_create__java_lang_String(/** ?string */ id) {
  IsLabelId.$clinit();
  PropertyKey.m_checkIfValid__java_lang_String(id);
  return StandardLabelId.$create__java_lang_String(id);
 }
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_labels_IsLabelId(/** IsLabelId */ id) {
  IsLabelId.$clinit();
  return PropertyKey.m_isValid__org_pepstock_charba_client_commons_PropertyKey(id);
 }
 
 static m_checkIfValid__org_pepstock_charba_client_labels_IsLabelId(/** IsLabelId */ id) {
  IsLabelId.$clinit();
  PropertyKey.m_checkIfValid__org_pepstock_charba_client_commons_PropertyKey(id);
 }
 /** @return {IsLabelId} */
 static $adapt(/** ?function():?string */ fn) {
  IsLabelId.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  IsLabelId.$clinit = () =>{};
  IsLabelId.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  PropertyKey.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_labels_IsLabelId = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_labels_IsLabelId;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.labels.IsLabelId.$LambdaAdaptor$impl');
  StandardLabelId = goog.module.get('org.pepstock.charba.client.labels.StandardLabelId$impl');
 }
}
IsLabelId.$markImplementor(/**@type {Function}*/ (IsLabelId));
$Util.$setClassMetadataForInterface(IsLabelId, "org.pepstock.charba.client.labels.IsLabelId");

exports = IsLabelId;

//# sourceMappingURL=IsLabelId.js.map
