goog.module('org.pepstock.charba.client.IsDatasetCreator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.IsDatasetCreator.$LambdaAdaptor$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');

/**
 * @interface
 * @template D
 */
class IsDatasetCreator {
 /** @abstract @return {D} */
 m_newDataset__() {}
 /** @abstract @return {D} */
 m_newDataset__boolean(/** boolean */ hidden) {}
 /** @template D @return {IsDatasetCreator<D>} */
 static $adapt(/** ?function(boolean):D */ fn) {
  IsDatasetCreator.$clinit();
  return /**@type {!$LambdaAdaptor<D>}*/ (new $LambdaAdaptor(fn));
 }
 /** @template D @return {D} */
 static m_newDataset__$default__org_pepstock_charba_client_IsDatasetCreator(/** !IsDatasetCreator<D> */ $thisArg) {
  IsDatasetCreator.$clinit();
  return $thisArg.m_newDataset__boolean(false);
 }
 
 static $clinit() {
  IsDatasetCreator.$clinit = () =>{};
  IsDatasetCreator.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_IsDatasetCreator = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_IsDatasetCreator;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.IsDatasetCreator.$LambdaAdaptor$impl');
 }
}
IsDatasetCreator.$markImplementor(/**@type {Function}*/ (IsDatasetCreator));
$Util.$setClassMetadataForInterface(IsDatasetCreator, "org.pepstock.charba.client.IsDatasetCreator");

exports = IsDatasetCreator;

//# sourceMappingURL=IsDatasetCreator.js.map
