goog.module('org.pepstock.charba.client.impl.plugins.ColorScheme$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ColorSchemesOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions$impl');

/**
 * @interface
 * @extends {Key}
 */
class ColorScheme {
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_impl_plugins_ColorScheme(/** ColorScheme */ scheme) {
  ColorScheme.$clinit();
  return Key.m_isValid__org_pepstock_charba_client_commons_Key(scheme) && !$Equality.$same(scheme.m_category__(), null) && j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(scheme.m_category__())) > 0 && !$Equality.$same(scheme.m_getColors__(), null) && !scheme.m_getColors__().isEmpty();
 }
 /** @abstract @return {?string} */
 m_category__() {}
 /** @abstract @return {List<IsColor>} */
 m_getColors__() {}
 /** @return {?string} */
 static m_category__$default__org_pepstock_charba_client_impl_plugins_ColorScheme(/** !ColorScheme */ $thisArg) {
  ColorScheme.$clinit();
  return ColorSchemesOptions.f_DEFAULT_SCHEME_CATEGORY__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions;
 }
 
 static $clinit() {
  ColorScheme.$clinit = () =>{};
  ColorScheme.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Key.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_impl_plugins_ColorScheme = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_impl_plugins_ColorScheme;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ColorSchemesOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions$impl');
 }
}
ColorScheme.$markImplementor(/**@type {Function}*/ (ColorScheme));
$Util.$setClassMetadataForInterface(ColorScheme, "org.pepstock.charba.client.impl.plugins.ColorScheme");

exports = ColorScheme;

//# sourceMappingURL=ColorScheme.js.map
