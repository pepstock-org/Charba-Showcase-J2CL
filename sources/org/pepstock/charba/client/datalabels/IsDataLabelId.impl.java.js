goog.module('org.pepstock.charba.client.datalabels.IsDataLabelId$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PropertyKey = goog.require('org.pepstock.charba.client.commons.PropertyKey$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.IsDataLabelId.$LambdaAdaptor$impl');
let StandardDataLabelId = goog.forwardDeclare('org.pepstock.charba.client.datalabels.StandardDataLabelId$impl');

/**
 * @interface
 * @extends {PropertyKey}
 */
class IsDataLabelId {
 /** @return {IsDataLabelId} */
 static m_create__java_lang_String(/** ?string */ id) {
  IsDataLabelId.$clinit();
  PropertyKey.m_checkIfValid__java_lang_String(id);
  return StandardDataLabelId.$create__java_lang_String(id);
 }
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_datalabels_IsDataLabelId(/** IsDataLabelId */ id) {
  IsDataLabelId.$clinit();
  return PropertyKey.m_isValid__org_pepstock_charba_client_commons_PropertyKey(id);
 }
 
 static m_checkIfValid__org_pepstock_charba_client_datalabels_IsDataLabelId(/** IsDataLabelId */ id) {
  IsDataLabelId.$clinit();
  PropertyKey.m_checkIfValid__org_pepstock_charba_client_commons_PropertyKey(id);
 }
 /** @return {IsDataLabelId} */
 static $adapt(/** ?function():?string */ fn) {
  IsDataLabelId.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  IsDataLabelId.$clinit = () =>{};
  IsDataLabelId.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  PropertyKey.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_datalabels_IsDataLabelId = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_datalabels_IsDataLabelId;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.datalabels.IsDataLabelId.$LambdaAdaptor$impl');
  StandardDataLabelId = goog.module.get('org.pepstock.charba.client.datalabels.StandardDataLabelId$impl');
 }
}
IsDataLabelId.$markImplementor(/**@type {Function}*/ (IsDataLabelId));
$Util.$setClassMetadataForInterface(IsDataLabelId, "org.pepstock.charba.client.datalabels.IsDataLabelId");

exports = IsDataLabelId;

//# sourceMappingURL=IsDataLabelId.js.map
