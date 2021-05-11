goog.module('org.pepstock.charba.client.defaults.IsDefaultLegendTitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultFontContainer = goog.require('org.pepstock.charba.client.defaults.IsDefaultFontContainer$impl');

let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');

/**
 * @interface
 * @extends {IsDefaultFontContainer}
 */
class IsDefaultLegendTitle {
 /** @abstract @return {boolean} */
 m_isDisplay__() {}
 /** @abstract @return {IsDefaultPadding} */
 m_getPadding__() {}
 
 static $clinit() {
  IsDefaultLegendTitle.$clinit = () =>{};
  IsDefaultLegendTitle.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultFontContainer.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultLegendTitle = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultLegendTitle;
 }
 
 static $loadModules() {}
}
IsDefaultLegendTitle.$markImplementor(/**@type {Function}*/ (IsDefaultLegendTitle));
$Util.$setClassMetadataForInterface(IsDefaultLegendTitle, "org.pepstock.charba.client.defaults.IsDefaultLegendTitle");

exports = IsDefaultLegendTitle;

//# sourceMappingURL=IsDefaultLegendTitle.js.map
