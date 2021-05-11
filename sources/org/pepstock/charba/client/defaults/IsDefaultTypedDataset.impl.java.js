goog.module('org.pepstock.charba.client.defaults.IsDefaultTypedDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAnimationContainer = goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimationContainer$impl');
const IsDefaultBarDatasets = goog.require('org.pepstock.charba.client.defaults.IsDefaultBarDatasets$impl');

/**
 * @interface
 * @extends {IsDefaultBarDatasets}
 * @extends {IsDefaultAnimationContainer}
 */
class IsDefaultTypedDataset {
 /** @abstract @return {boolean} */
 m_isShowLine__() {}
 
 static $clinit() {
  IsDefaultTypedDataset.$clinit = () =>{};
  IsDefaultTypedDataset.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultBarDatasets.$markImplementor(ctor);
  IsDefaultAnimationContainer.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultTypedDataset = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultTypedDataset;
 }
 
 static $loadModules() {}
}
IsDefaultTypedDataset.$markImplementor(/**@type {Function}*/ (IsDefaultTypedDataset));
$Util.$setClassMetadataForInterface(IsDefaultTypedDataset, "org.pepstock.charba.client.defaults.IsDefaultTypedDataset");

exports = IsDefaultTypedDataset;

//# sourceMappingURL=IsDefaultTypedDataset.js.map
