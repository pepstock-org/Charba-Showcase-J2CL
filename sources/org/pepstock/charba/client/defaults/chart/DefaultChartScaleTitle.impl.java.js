goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartScaleTitle$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultScaleTitle = goog.require('org.pepstock.charba.client.defaults.IsDefaultScaleTitle$impl');

let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let DefaultChartPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartPadding$impl');
let ScaleTitleAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ScaleTitleAlign$impl');
let ScaleTitle = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleTitle$impl');

/**
 * @implements {IsDefaultScaleTitle}
 */
class DefaultChartScaleTitle extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ScaleTitle}*/
  this.f_title__org_pepstock_charba_client_defaults_chart_DefaultChartScaleTitle_;
  /**@type {DefaultChartPadding}*/
  this.f_padding__org_pepstock_charba_client_defaults_chart_DefaultChartScaleTitle_;
 }
 /** @return {!DefaultChartScaleTitle} */
 static $create__org_pepstock_charba_client_options_ScaleTitle(/** ScaleTitle */ title) {
  DefaultChartScaleTitle.$clinit();
  let $instance = new DefaultChartScaleTitle();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartScaleTitle__org_pepstock_charba_client_options_ScaleTitle(title);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartScaleTitle__org_pepstock_charba_client_options_ScaleTitle(/** ScaleTitle */ title) {
  this.$ctor__java_lang_Object__();
  this.f_title__org_pepstock_charba_client_defaults_chart_DefaultChartScaleTitle_ = title;
  this.f_padding__org_pepstock_charba_client_defaults_chart_DefaultChartScaleTitle_ = DefaultChartPadding.$create__org_pepstock_charba_client_defaults_IsDefaultPadding(title.m_getPadding__());
 }
 /** @override @return {IsDefaultFont} */
 m_getFont__() {
  return this.f_title__org_pepstock_charba_client_defaults_chart_DefaultChartScaleTitle_.m_getFont__();
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return this.f_title__org_pepstock_charba_client_defaults_chart_DefaultChartScaleTitle_.m_getColorAsString__();
 }
 /** @override @return {IsDefaultPadding} */
 m_getPadding__() {
  return this.f_padding__org_pepstock_charba_client_defaults_chart_DefaultChartScaleTitle_;
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return this.f_title__org_pepstock_charba_client_defaults_chart_DefaultChartScaleTitle_.m_isDisplay__();
 }
 /** @override @return {ScaleTitleAlign} */
 m_getAlign__() {
  return this.f_title__org_pepstock_charba_client_defaults_chart_DefaultChartScaleTitle_.m_getAlign__();
 }
 
 static $clinit() {
  DefaultChartScaleTitle.$clinit = () =>{};
  DefaultChartScaleTitle.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartScaleTitle;
 }
 
 static $loadModules() {
  DefaultChartPadding = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartPadding$impl');
 }
}
IsDefaultScaleTitle.$markImplementor(DefaultChartScaleTitle);
$Util.$setClassMetadata(DefaultChartScaleTitle, "org.pepstock.charba.client.defaults.chart.DefaultChartScaleTitle");

exports = DefaultChartScaleTitle;

//# sourceMappingURL=DefaultChartScaleTitle.js.map
