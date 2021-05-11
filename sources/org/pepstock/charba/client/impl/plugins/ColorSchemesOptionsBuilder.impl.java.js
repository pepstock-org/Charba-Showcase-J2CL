goog.module('org.pepstock.charba.client.impl.plugins.ColorSchemesOptionsBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ColorScheme = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorScheme$impl');
let ColorSchemesOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions$impl');
let SchemeScope = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.SchemeScope$impl');

class ColorSchemesOptionsBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ColorSchemesOptions}*/
  this.f_options__org_pepstock_charba_client_impl_plugins_ColorSchemesOptionsBuilder_;
 }
 /** @return {!ColorSchemesOptionsBuilder} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  let $instance = new ColorSchemesOptionsBuilder();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesOptionsBuilder__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesOptionsBuilder__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__java_lang_Object__();
  this.f_options__org_pepstock_charba_client_impl_plugins_ColorSchemesOptionsBuilder_ = ColorSchemesOptions.$create__org_pepstock_charba_client_IsChart(chart);
 }
 /** @return {ColorSchemesOptionsBuilder} */
 static m_create__() {
  ColorSchemesOptionsBuilder.$clinit();
  return ColorSchemesOptionsBuilder.m_create__org_pepstock_charba_client_IsChart(null);
 }
 /** @return {ColorSchemesOptionsBuilder} */
 static m_create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  ColorSchemesOptionsBuilder.$clinit();
  return ColorSchemesOptionsBuilder.$create__org_pepstock_charba_client_IsChart(chart);
 }
 /** @return {ColorSchemesOptions} */
 m_build__() {
  return this.f_options__org_pepstock_charba_client_impl_plugins_ColorSchemesOptionsBuilder_;
 }
 /** @return {ColorSchemesOptionsBuilder} */
 m_setSchemeScope__org_pepstock_charba_client_impl_plugins_enums_SchemeScope(/** SchemeScope */ schemeScope) {
  this.f_options__org_pepstock_charba_client_impl_plugins_ColorSchemesOptionsBuilder_.m_setSchemeScope__org_pepstock_charba_client_impl_plugins_enums_SchemeScope(schemeScope);
  return this;
 }
 /** @return {ColorSchemesOptionsBuilder} */
 m_setScheme__org_pepstock_charba_client_impl_plugins_ColorScheme(/** ColorScheme */ scheme) {
  this.f_options__org_pepstock_charba_client_impl_plugins_ColorSchemesOptionsBuilder_.m_setScheme__org_pepstock_charba_client_impl_plugins_ColorScheme(scheme);
  return this;
 }
 /** @return {ColorSchemesOptionsBuilder} */
 m_setBackgroundColorAlpha__double(/** number */ backgroundColorAlpha) {
  this.f_options__org_pepstock_charba_client_impl_plugins_ColorSchemesOptionsBuilder_.m_setBackgroundColorAlpha__double(backgroundColorAlpha);
  return this;
 }
 /** @return {ColorSchemesOptionsBuilder} */
 m_setReverse__boolean(/** boolean */ reverse) {
  this.f_options__org_pepstock_charba_client_impl_plugins_ColorSchemesOptionsBuilder_.m_setReverse__boolean(reverse);
  return this;
 }
 
 static $clinit() {
  ColorSchemesOptionsBuilder.$clinit = () =>{};
  ColorSchemesOptionsBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ColorSchemesOptionsBuilder;
 }
 
 static $loadModules() {
  ColorSchemesOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions$impl');
 }
}
$Util.$setClassMetadata(ColorSchemesOptionsBuilder, "org.pepstock.charba.client.impl.plugins.ColorSchemesOptionsBuilder");

exports = ColorSchemesOptionsBuilder;

//# sourceMappingURL=ColorSchemesOptionsBuilder.js.map
