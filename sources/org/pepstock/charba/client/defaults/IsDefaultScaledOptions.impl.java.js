goog.module('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultOptions = goog.require('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');

let IsDefaultScales = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScales$impl');

/**
 * @interface
 * @extends {IsDefaultOptions}
 */
class IsDefaultScaledOptions {
 /** @abstract @return {IsDefaultScales} */
 m_getScales__() {}
 
 static $clinit() {
  IsDefaultScaledOptions.$clinit = () =>{};
  IsDefaultScaledOptions.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultOptions.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultScaledOptions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultScaledOptions;
 }
 
 static $loadModules() {}
}
IsDefaultScaledOptions.$markImplementor(/**@type {Function}*/ (IsDefaultScaledOptions));
$Util.$setClassMetadataForInterface(IsDefaultScaledOptions, "org.pepstock.charba.client.defaults.IsDefaultScaledOptions");

exports = IsDefaultScaledOptions;

//# sourceMappingURL=IsDefaultScaledOptions.js.map
