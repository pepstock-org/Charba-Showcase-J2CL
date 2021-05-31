goog.module('org.pepstock.charba.client.labels.LabelId$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PropertyKey = goog.require('org.pepstock.charba.client.commons.PropertyKey$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelId.$LambdaAdaptor$impl');
let StandardLabelId = goog.forwardDeclare('org.pepstock.charba.client.labels.StandardLabelId$impl');

/**
 * @interface
 * @extends {PropertyKey}
 */
class LabelId {
 /** @return {LabelId} */
 static m_create__java_lang_String(/** ?string */ id) {
  LabelId.$clinit();
  PropertyKey.m_checkIfValid__java_lang_String(id);
  return StandardLabelId.$create__java_lang_String(id);
 }
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_labels_LabelId(/** LabelId */ id) {
  LabelId.$clinit();
  return PropertyKey.m_isValid__org_pepstock_charba_client_commons_PropertyKey(id);
 }
 
 static m_checkIfValid__org_pepstock_charba_client_labels_LabelId(/** LabelId */ id) {
  LabelId.$clinit();
  PropertyKey.m_checkIfValid__org_pepstock_charba_client_commons_PropertyKey(id);
 }
 /** @return {LabelId} */
 static $adapt(/** ?function():?string */ fn) {
  LabelId.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  LabelId.$clinit = () =>{};
  LabelId.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  PropertyKey.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_labels_LabelId = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_labels_LabelId;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.labels.LabelId.$LambdaAdaptor$impl');
  StandardLabelId = goog.module.get('org.pepstock.charba.client.labels.StandardLabelId$impl');
 }
}
LabelId.$markImplementor(/**@type {Function}*/ (LabelId));
$Util.$setClassMetadataForInterface(LabelId, "org.pepstock.charba.client.labels.LabelId");

exports = LabelId;

//# sourceMappingURL=LabelId.js.map
