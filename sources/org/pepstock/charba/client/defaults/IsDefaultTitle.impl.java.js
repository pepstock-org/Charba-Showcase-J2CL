goog.module('org.pepstock.charba.client.defaults.IsDefaultTitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultFontContainer = goog.require('org.pepstock.charba.client.defaults.IsDefaultFontContainer$impl');
const IsDefaultPluginElement = goog.require('org.pepstock.charba.client.defaults.IsDefaultPluginElement$impl');

let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');

/**
 * @interface
 * @extends {IsDefaultPluginElement}
 * @extends {IsDefaultFontContainer}
 */
class IsDefaultTitle {
 /** @abstract @return {IsDefaultPadding} */
 m_getPadding__() {}
 /** @abstract @return {boolean} */
 m_isFullSize__() {}
 
 static $clinit() {
  IsDefaultTitle.$clinit = () =>{};
  IsDefaultTitle.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultPluginElement.$markImplementor(ctor);
  IsDefaultFontContainer.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultTitle = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultTitle;
 }
 
 static $loadModules() {}
}
IsDefaultTitle.$markImplementor(/**@type {Function}*/ (IsDefaultTitle));
$Util.$setClassMetadataForInterface(IsDefaultTitle, "org.pepstock.charba.client.defaults.IsDefaultTitle");

exports = IsDefaultTitle;

//# sourceMappingURL=IsDefaultTitle.js.map
