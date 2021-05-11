goog.module('org.pepstock.charba.client.defaults.IsDefaultFontContainer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');

/**
 * @interface
 */
class IsDefaultFontContainer {
 /** @abstract @return {IsDefaultFont} */
 m_getFont__() {}
 /** @abstract @return {?string} */
 m_getColorAsString__() {}
 
 static $clinit() {
  IsDefaultFontContainer.$clinit = () =>{};
  IsDefaultFontContainer.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultFontContainer = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultFontContainer;
 }
 
 static $loadModules() {}
}
IsDefaultFontContainer.$markImplementor(/**@type {Function}*/ (IsDefaultFontContainer));
$Util.$setClassMetadataForInterface(IsDefaultFontContainer, "org.pepstock.charba.client.defaults.IsDefaultFontContainer");

exports = IsDefaultFontContainer;

//# sourceMappingURL=IsDefaultFontContainer.js.map
