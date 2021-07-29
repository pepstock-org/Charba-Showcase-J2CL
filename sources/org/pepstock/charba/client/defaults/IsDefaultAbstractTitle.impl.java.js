goog.module('org.pepstock.charba.client.defaults.IsDefaultAbstractTitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultFontContainer = goog.require('org.pepstock.charba.client.defaults.IsDefaultFontContainer$impl');
const IsDefaultPluginElement = goog.require('org.pepstock.charba.client.defaults.IsDefaultPluginElement$impl');

let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');

/**
 * @interface
 * @extends {IsDefaultPluginElement}
 * @extends {IsDefaultFontContainer}
 */
class IsDefaultAbstractTitle {
 /** @abstract @return {IsDefaultPadding} */
 m_getPadding__() {}
 /** @abstract @return {boolean} */
 m_isFullSize__() {}
 
 static $clinit() {
  IsDefaultAbstractTitle.$clinit = () =>{};
  IsDefaultAbstractTitle.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultPluginElement.$markImplementor(ctor);
  IsDefaultFontContainer.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultAbstractTitle = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultAbstractTitle;
 }
 
 static $loadModules() {}
}
IsDefaultAbstractTitle.$markImplementor(/**@type {Function}*/ (IsDefaultAbstractTitle));
$Util.$setClassMetadataForInterface(IsDefaultAbstractTitle, "org.pepstock.charba.client.defaults.IsDefaultAbstractTitle");

exports = IsDefaultAbstractTitle;

//# sourceMappingURL=IsDefaultAbstractTitle.js.map
