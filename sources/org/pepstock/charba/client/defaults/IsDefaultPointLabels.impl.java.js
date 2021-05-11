goog.module('org.pepstock.charba.client.defaults.IsDefaultPointLabels$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultFontContainer = goog.require('org.pepstock.charba.client.defaults.IsDefaultFontContainer$impl');

let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');

/**
 * @interface
 * @extends {IsDefaultFontContainer}
 */
class IsDefaultPointLabels {
 /** @abstract @return {IsDefaultPadding} */
 m_getBackdropPadding__() {}
 /** @abstract @return {boolean} */
 m_isDisplay__() {}
 /** @abstract @return {number} */
 m_getPadding__() {}
 /** @abstract @return {?string} */
 m_getBackdropColorAsString__() {}
 
 static $clinit() {
  IsDefaultPointLabels.$clinit = () =>{};
  IsDefaultPointLabels.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultFontContainer.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultPointLabels = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultPointLabels;
 }
 
 static $loadModules() {}
}
IsDefaultPointLabels.$markImplementor(/**@type {Function}*/ (IsDefaultPointLabels));
$Util.$setClassMetadataForInterface(IsDefaultPointLabels, "org.pepstock.charba.client.defaults.IsDefaultPointLabels");

exports = IsDefaultPointLabels;

//# sourceMappingURL=IsDefaultPointLabels.js.map
