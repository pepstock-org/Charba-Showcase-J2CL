goog.module('org.pepstock.charba.client.defaults.IsDefaultDatasets$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultDatasets.$LambdaAdaptor$impl');
let IsDefaultTypedDataset = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTypedDataset$impl');

/**
 * @interface
 */
class IsDefaultDatasets {
 /** @abstract @return {IsDefaultTypedDataset} */
 m_get__org_pepstock_charba_client_Type(/** Type */ type) {}
 /** @return {IsDefaultDatasets} */
 static $adapt(/** ?function(Type):IsDefaultTypedDataset */ fn) {
  IsDefaultDatasets.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  IsDefaultDatasets.$clinit = () =>{};
  IsDefaultDatasets.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultDatasets = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultDatasets;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultDatasets.$LambdaAdaptor$impl');
 }
}
IsDefaultDatasets.$markImplementor(/**@type {Function}*/ (IsDefaultDatasets));
$Util.$setClassMetadataForInterface(IsDefaultDatasets, "org.pepstock.charba.client.defaults.IsDefaultDatasets");

exports = IsDefaultDatasets;

//# sourceMappingURL=IsDefaultDatasets.js.map
