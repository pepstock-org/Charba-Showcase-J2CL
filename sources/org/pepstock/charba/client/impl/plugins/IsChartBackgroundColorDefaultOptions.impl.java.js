goog.module('org.pepstock.charba.client.impl.plugins.IsChartBackgroundColorDefaultOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let GlobalCompositeOperation = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.GlobalCompositeOperation$impl');
let ColorType = goog.forwardDeclare('org.pepstock.charba.client.enums.ColorType$impl');
let ChartBackgroundColor = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartBackgroundColor$impl');

/**
 * @interface
 */
class IsChartBackgroundColorDefaultOptions {
 /** @abstract @return {ColorType} */
 m_getColorType__() {}
 /** @abstract @return {?string} */
 m_getBackgroundColorAsString__() {}
 /** @abstract @return {Gradient} */
 m_getBackgroundColorAsGradient__() {}
 /** @abstract @return {Pattern} */
 m_getBackgroundColorAsPattern__() {}
 /** @abstract @return {GlobalCompositeOperation} */
 m_getGlobalCompositeOperation__() {}
 /** @return {ColorType} */
 static m_getColorType__$default__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions(/** !IsChartBackgroundColorDefaultOptions */ $thisArg) {
  IsChartBackgroundColorDefaultOptions.$clinit();
  return ColorType.f_COLOR__org_pepstock_charba_client_enums_ColorType;
 }
 /** @return {?string} */
 static m_getBackgroundColorAsString__$default__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions(/** !IsChartBackgroundColorDefaultOptions */ $thisArg) {
  IsChartBackgroundColorDefaultOptions.$clinit();
  return ChartBackgroundColor.f_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor;
 }
 /** @return {Gradient} */
 static m_getBackgroundColorAsGradient__$default__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions(/** !IsChartBackgroundColorDefaultOptions */ $thisArg) {
  IsChartBackgroundColorDefaultOptions.$clinit();
  return null;
 }
 /** @return {Pattern} */
 static m_getBackgroundColorAsPattern__$default__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions(/** !IsChartBackgroundColorDefaultOptions */ $thisArg) {
  IsChartBackgroundColorDefaultOptions.$clinit();
  return null;
 }
 /** @return {GlobalCompositeOperation} */
 static m_getGlobalCompositeOperation__$default__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions(/** !IsChartBackgroundColorDefaultOptions */ $thisArg) {
  IsChartBackgroundColorDefaultOptions.$clinit();
  return GlobalCompositeOperation.f_SOURCE_OVER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
 }
 
 static $clinit() {
  IsChartBackgroundColorDefaultOptions.$clinit = () =>{};
  IsChartBackgroundColorDefaultOptions.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions;
 }
 
 static $loadModules() {
  GlobalCompositeOperation = goog.module.get('org.pepstock.charba.client.dom.enums.GlobalCompositeOperation$impl');
  ColorType = goog.module.get('org.pepstock.charba.client.enums.ColorType$impl');
  ChartBackgroundColor = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartBackgroundColor$impl');
 }
}
IsChartBackgroundColorDefaultOptions.$markImplementor(/**@type {Function}*/ (IsChartBackgroundColorDefaultOptions));
$Util.$setClassMetadataForInterface(IsChartBackgroundColorDefaultOptions, "org.pepstock.charba.client.impl.plugins.IsChartBackgroundColorDefaultOptions");

exports = IsChartBackgroundColorDefaultOptions;

//# sourceMappingURL=IsChartBackgroundColorDefaultOptions.js.map
