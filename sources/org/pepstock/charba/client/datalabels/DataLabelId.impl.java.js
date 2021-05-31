goog.module('org.pepstock.charba.client.datalabels.DataLabelId$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PropertyKey = goog.require('org.pepstock.charba.client.commons.PropertyKey$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelId.$LambdaAdaptor$impl');
let StandardDataLabelId = goog.forwardDeclare('org.pepstock.charba.client.datalabels.StandardDataLabelId$impl');

/**
 * @interface
 * @extends {PropertyKey}
 */
class DataLabelId {
 /** @return {DataLabelId} */
 static m_create__java_lang_String(/** ?string */ id) {
  DataLabelId.$clinit();
  PropertyKey.m_checkIfValid__java_lang_String(id);
  return StandardDataLabelId.$create__java_lang_String(id);
 }
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_datalabels_DataLabelId(/** DataLabelId */ id) {
  DataLabelId.$clinit();
  return PropertyKey.m_isValid__org_pepstock_charba_client_commons_PropertyKey(id);
 }
 
 static m_checkIfValid__org_pepstock_charba_client_datalabels_DataLabelId(/** DataLabelId */ id) {
  DataLabelId.$clinit();
  PropertyKey.m_checkIfValid__org_pepstock_charba_client_commons_PropertyKey(id);
 }
 /** @return {DataLabelId} */
 static $adapt(/** ?function():?string */ fn) {
  DataLabelId.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DataLabelId.$clinit = () =>{};
  DataLabelId.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  PropertyKey.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_datalabels_DataLabelId = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_datalabels_DataLabelId;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelId.$LambdaAdaptor$impl');
  StandardDataLabelId = goog.module.get('org.pepstock.charba.client.datalabels.StandardDataLabelId$impl');
 }
}
DataLabelId.$markImplementor(/**@type {Function}*/ (DataLabelId));
$Util.$setClassMetadataForInterface(DataLabelId, "org.pepstock.charba.client.datalabels.DataLabelId");

exports = DataLabelId;

//# sourceMappingURL=DataLabelId.js.map
