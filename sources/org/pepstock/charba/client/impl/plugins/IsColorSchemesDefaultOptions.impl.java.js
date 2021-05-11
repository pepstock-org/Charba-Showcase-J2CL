goog.module('org.pepstock.charba.client.impl.plugins.IsColorSchemesDefaultOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ColorSchemesOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions$impl');
let SchemeScope = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.SchemeScope$impl');

/**
 * @interface
 */
class IsColorSchemesDefaultOptions {
 /** @abstract @return {?string} */
 m_getSchemeCategory__() {}
 /** @abstract @return {?string} */
 m_getSchemeName__() {}
 /** @abstract @return {SchemeScope} */
 m_getSchemeScope__() {}
 /** @abstract @return {number} */
 m_getBackgroundColorAlpha__() {}
 /** @abstract @return {boolean} */
 m_isReverse__() {}
 /** @return {?string} */
 static m_getSchemeCategory__$default__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions(/** !IsColorSchemesDefaultOptions */ $thisArg) {
  IsColorSchemesDefaultOptions.$clinit();
  return ColorSchemesOptions.f_DEFAULT_SCHEME__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions.m_category__();
 }
 /** @return {?string} */
 static m_getSchemeName__$default__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions(/** !IsColorSchemesDefaultOptions */ $thisArg) {
  IsColorSchemesDefaultOptions.$clinit();
  return ColorSchemesOptions.f_DEFAULT_SCHEME__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions.m_value__();
 }
 /** @return {SchemeScope} */
 static m_getSchemeScope__$default__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions(/** !IsColorSchemesDefaultOptions */ $thisArg) {
  IsColorSchemesDefaultOptions.$clinit();
  return ColorSchemesOptions.f_DEFAULT_SCHEME_SCOPE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions;
 }
 /** @return {number} */
 static m_getBackgroundColorAlpha__$default__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions(/** !IsColorSchemesDefaultOptions */ $thisArg) {
  IsColorSchemesDefaultOptions.$clinit();
  return ColorSchemesOptions.f_DEFAULT_BACKGROUND_ALPHA__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions;
 }
 /** @return {boolean} */
 static m_isReverse__$default__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions(/** !IsColorSchemesDefaultOptions */ $thisArg) {
  IsColorSchemesDefaultOptions.$clinit();
  return ColorSchemesOptions.f_DEFAULT_REVERSE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions;
 }
 
 static $clinit() {
  IsColorSchemesDefaultOptions.$clinit = () =>{};
  IsColorSchemesDefaultOptions.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions;
 }
 
 static $loadModules() {
  ColorSchemesOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions$impl');
 }
}
IsColorSchemesDefaultOptions.$markImplementor(/**@type {Function}*/ (IsColorSchemesDefaultOptions));
$Util.$setClassMetadataForInterface(IsColorSchemesDefaultOptions, "org.pepstock.charba.client.impl.plugins.IsColorSchemesDefaultOptions");

exports = IsColorSchemesDefaultOptions;

//# sourceMappingURL=IsColorSchemesDefaultOptions.js.map
