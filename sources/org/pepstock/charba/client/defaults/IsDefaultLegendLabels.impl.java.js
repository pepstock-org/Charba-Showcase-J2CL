goog.module('org.pepstock.charba.client.defaults.IsDefaultLegendLabels$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultBoxHandler = goog.require('org.pepstock.charba.client.defaults.IsDefaultBoxHandler$impl');
const IsDefaultFontContainer = goog.require('org.pepstock.charba.client.defaults.IsDefaultFontContainer$impl');
const IsDefaultPointStyleHandler = goog.require('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');

let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');

/**
 * @interface
 * @extends {IsDefaultBoxHandler}
 * @extends {IsDefaultPointStyleHandler}
 * @extends {IsDefaultFontContainer}
 */
class IsDefaultLegendLabels {
 /** @abstract @return {boolean} */
 m_isUsePointStyle__() {}
 /** @abstract @return {number} */
 m_getPadding__() {}
 /** @abstract @return {TextAlign} */
 m_getTextAlign__() {}
 
 static $clinit() {
  IsDefaultLegendLabels.$clinit = () =>{};
  IsDefaultLegendLabels.$loadModules();
  IsDefaultPointStyleHandler.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultBoxHandler.$markImplementor(ctor);
  IsDefaultPointStyleHandler.$markImplementor(ctor);
  IsDefaultFontContainer.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultLegendLabels = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultLegendLabels;
 }
 
 static $loadModules() {}
}
IsDefaultLegendLabels.$markImplementor(/**@type {Function}*/ (IsDefaultLegendLabels));
$Util.$setClassMetadataForInterface(IsDefaultLegendLabels, "org.pepstock.charba.client.defaults.IsDefaultLegendLabels");

exports = IsDefaultLegendLabels;

//# sourceMappingURL=IsDefaultLegendLabels.js.map
