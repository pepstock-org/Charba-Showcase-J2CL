goog.module('org.pepstock.charba.client.impl.plugins.ColorSchemesDefaultOptions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsColorSchemesDefaultOptions = goog.require('org.pepstock.charba.client.impl.plugins.IsColorSchemesDefaultOptions$impl');

let SchemeScope = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.SchemeScope$impl');

/**
 * @implements {IsColorSchemesDefaultOptions}
 */
class ColorSchemesDefaultOptions extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ColorSchemesDefaultOptions} */
 static $create__() {
  let $instance = new ColorSchemesDefaultOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesDefaultOptions__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesDefaultOptions__() {
  this.$ctor__java_lang_Object__();
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBackgroundColorAlpha__() {
  return IsColorSchemesDefaultOptions.m_getBackgroundColorAlpha__$default__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getSchemeCategory__() {
  return IsColorSchemesDefaultOptions.m_getSchemeCategory__$default__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getSchemeName__() {
  return IsColorSchemesDefaultOptions.m_getSchemeName__$default__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {SchemeScope} */
 m_getSchemeScope__() {
  return IsColorSchemesDefaultOptions.m_getSchemeScope__$default__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isReverse__() {
  return IsColorSchemesDefaultOptions.m_isReverse__$default__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions(this);
 }
 /** @return {ColorSchemesDefaultOptions} */
 static get f_INSTANCE__org_pepstock_charba_client_impl_plugins_ColorSchemesDefaultOptions() {
  return (ColorSchemesDefaultOptions.$clinit(), ColorSchemesDefaultOptions.$static_INSTANCE__org_pepstock_charba_client_impl_plugins_ColorSchemesDefaultOptions);
 }
 
 static $clinit() {
  ColorSchemesDefaultOptions.$clinit = () =>{};
  ColorSchemesDefaultOptions.$loadModules();
  j_l_Object.$clinit();
  IsColorSchemesDefaultOptions.$clinit();
  ColorSchemesDefaultOptions.$static_INSTANCE__org_pepstock_charba_client_impl_plugins_ColorSchemesDefaultOptions = ColorSchemesDefaultOptions.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ColorSchemesDefaultOptions;
 }
 
 static $loadModules() {}
}
/**@private {ColorSchemesDefaultOptions}*/
ColorSchemesDefaultOptions.$static_INSTANCE__org_pepstock_charba_client_impl_plugins_ColorSchemesDefaultOptions;
IsColorSchemesDefaultOptions.$markImplementor(ColorSchemesDefaultOptions);
$Util.$setClassMetadata(ColorSchemesDefaultOptions, "org.pepstock.charba.client.impl.plugins.ColorSchemesDefaultOptions");

exports = ColorSchemesDefaultOptions;

//# sourceMappingURL=ColorSchemesDefaultOptions.js.map
