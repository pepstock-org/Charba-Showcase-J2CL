goog.module('org.pepstock.charba.client.data.HasDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.data.HasDataset.$LambdaAdaptor$impl');

/**
 * @interface
 */
class HasDataset {
 /** @abstract @return {Dataset} */
 m_getDataset__() {}
 /** @return {HasDataset} */
 static $adapt(/** ?function():Dataset */ fn) {
  HasDataset.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  HasDataset.$clinit = () =>{};
  HasDataset.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_data_HasDataset = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_data_HasDataset;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.data.HasDataset.$LambdaAdaptor$impl');
 }
}
HasDataset.$markImplementor(/**@type {Function}*/ (HasDataset));
$Util.$setClassMetadataForInterface(HasDataset, "org.pepstock.charba.client.data.HasDataset");

exports = HasDataset;

//# sourceMappingURL=HasDataset.js.map
