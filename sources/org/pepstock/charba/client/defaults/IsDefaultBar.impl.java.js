goog.module('org.pepstock.charba.client.defaults.IsDefaultBar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultOptionsElement = goog.require('org.pepstock.charba.client.defaults.IsDefaultOptionsElement$impl');
const IsDefaultPointStyleHandler = goog.require('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');

let BorderSkipped = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderSkipped$impl');

/**
 * @interface
 * @extends {IsDefaultOptionsElement}
 * @extends {IsDefaultPointStyleHandler}
 */
class IsDefaultBar {
 /** @abstract @return {BorderSkipped} */
 m_getBorderSkipped__() {}
 /** @abstract @return {number} */
 m_getBorderRadius__() {}
 /** @abstract @return {number} */
 m_getHoverBorderRadius__() {}
 /** @abstract @return {boolean} */
 m_isEnableBorderRadius__() {}
 
 static $clinit() {
  IsDefaultBar.$clinit = () =>{};
  IsDefaultBar.$loadModules();
  IsDefaultPointStyleHandler.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultOptionsElement.$markImplementor(ctor);
  IsDefaultPointStyleHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultBar = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultBar;
 }
 
 static $loadModules() {}
}
IsDefaultBar.$markImplementor(/**@type {Function}*/ (IsDefaultBar));
$Util.$setClassMetadataForInterface(IsDefaultBar, "org.pepstock.charba.client.defaults.IsDefaultBar");

exports = IsDefaultBar;

//# sourceMappingURL=IsDefaultBar.js.map
