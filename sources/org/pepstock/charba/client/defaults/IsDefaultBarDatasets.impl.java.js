goog.module('org.pepstock.charba.client.defaults.IsDefaultBarDatasets$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class IsDefaultBarDatasets {
 /** @abstract @return {number} */
 m_getBarPercentage__() {}
 /** @abstract @return {number} */
 m_getCategoryPercentage__() {}
 /** @abstract @return {number} */
 m_getBarThickness__() {}
 /** @abstract @return {number} */
 m_getMaxBarThickness__() {}
 /** @abstract @return {number} */
 m_getMinBarLength__() {}
 /** @abstract @return {boolean} */
 m_isGrouped__() {}
 
 static $clinit() {
  IsDefaultBarDatasets.$clinit = () =>{};
  IsDefaultBarDatasets.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultBarDatasets = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultBarDatasets;
 }
 
 static $loadModules() {}
}
IsDefaultBarDatasets.$markImplementor(/**@type {Function}*/ (IsDefaultBarDatasets));
$Util.$setClassMetadataForInterface(IsDefaultBarDatasets, "org.pepstock.charba.client.defaults.IsDefaultBarDatasets");

exports = IsDefaultBarDatasets;

//# sourceMappingURL=IsDefaultBarDatasets.js.map
