goog.module('org.pepstock.charba.client.defaults.IsDefaultAngleLines$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultScaleLines = goog.require('org.pepstock.charba.client.defaults.IsDefaultScaleLines$impl');

/**
 * @interface
 * @extends {IsDefaultScaleLines}
 */
class IsDefaultAngleLines {
 /** @abstract @return {boolean} */
 m_isDisplay__() {}
 
 static $clinit() {
  IsDefaultAngleLines.$clinit = () =>{};
  IsDefaultAngleLines.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultScaleLines.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultAngleLines = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultAngleLines;
 }
 
 static $loadModules() {}
}
IsDefaultAngleLines.$markImplementor(/**@type {Function}*/ (IsDefaultAngleLines));
$Util.$setClassMetadataForInterface(IsDefaultAngleLines, "org.pepstock.charba.client.defaults.IsDefaultAngleLines");

exports = IsDefaultAngleLines;

//# sourceMappingURL=IsDefaultAngleLines.js.map
