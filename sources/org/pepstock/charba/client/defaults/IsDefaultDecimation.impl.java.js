goog.module('org.pepstock.charba.client.defaults.IsDefaultDecimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let DecimationAlgorithm = goog.forwardDeclare('org.pepstock.charba.client.enums.DecimationAlgorithm$impl');

/**
 * @interface
 */
class IsDefaultDecimation {
 /** @abstract @return {boolean} */
 m_isEnabled__() {}
 /** @abstract @return {DecimationAlgorithm} */
 m_getAlgorithm__() {}
 /** @abstract @return {number} */
 m_getSamples__() {}
 
 static $clinit() {
  IsDefaultDecimation.$clinit = () =>{};
  IsDefaultDecimation.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultDecimation = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultDecimation;
 }
 
 static $loadModules() {}
}
IsDefaultDecimation.$markImplementor(/**@type {Function}*/ (IsDefaultDecimation));
$Util.$setClassMetadataForInterface(IsDefaultDecimation, "org.pepstock.charba.client.defaults.IsDefaultDecimation");

exports = IsDefaultDecimation;

//# sourceMappingURL=IsDefaultDecimation.js.map
