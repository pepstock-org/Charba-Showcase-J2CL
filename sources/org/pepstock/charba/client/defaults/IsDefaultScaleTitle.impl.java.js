goog.module('org.pepstock.charba.client.defaults.IsDefaultScaleTitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultFontContainer = goog.require('org.pepstock.charba.client.defaults.IsDefaultFontContainer$impl');

let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let ScaleTitleAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ScaleTitleAlign$impl');

/**
 * @interface
 * @extends {IsDefaultFontContainer}
 */
class IsDefaultScaleTitle {
 /** @abstract @return {IsDefaultPadding} */
 m_getPadding__() {}
 /** @abstract @return {boolean} */
 m_isDisplay__() {}
 /** @abstract @return {ScaleTitleAlign} */
 m_getAlign__() {}
 
 static $clinit() {
  IsDefaultScaleTitle.$clinit = () =>{};
  IsDefaultScaleTitle.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultFontContainer.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultScaleTitle = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultScaleTitle;
 }
 
 static $loadModules() {}
}
IsDefaultScaleTitle.$markImplementor(/**@type {Function}*/ (IsDefaultScaleTitle));
$Util.$setClassMetadataForInterface(IsDefaultScaleTitle, "org.pepstock.charba.client.defaults.IsDefaultScaleTitle");

exports = IsDefaultScaleTitle;

//# sourceMappingURL=IsDefaultScaleTitle.js.map
