goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartTitle$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultTitle = goog.require('org.pepstock.charba.client.defaults.IsDefaultTitle$impl');

let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let ElementAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ElementAlign$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');

/**
 * @implements {IsDefaultTitle}
 */
class DefaultChartTitle extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultTitle}*/
  this.f_title__org_pepstock_charba_client_defaults_chart_DefaultChartTitle_;
 }
 /** @return {!DefaultChartTitle} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultTitle(/** IsDefaultTitle */ title) {
  DefaultChartTitle.$clinit();
  let $instance = new DefaultChartTitle();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartTitle__org_pepstock_charba_client_defaults_IsDefaultTitle(title);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartTitle__org_pepstock_charba_client_defaults_IsDefaultTitle(/** IsDefaultTitle */ title) {
  this.$ctor__java_lang_Object__();
  this.f_title__org_pepstock_charba_client_defaults_chart_DefaultChartTitle_ = title;
 }
 /** @override @return {IsDefaultFont} */
 m_getFont__() {
  return this.f_title__org_pepstock_charba_client_defaults_chart_DefaultChartTitle_.m_getFont__();
 }
 /** @override @return {IsDefaultPadding} */
 m_getPadding__() {
  return this.f_title__org_pepstock_charba_client_defaults_chart_DefaultChartTitle_.m_getPadding__();
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return this.f_title__org_pepstock_charba_client_defaults_chart_DefaultChartTitle_.m_getColorAsString__();
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return this.f_title__org_pepstock_charba_client_defaults_chart_DefaultChartTitle_.m_isDisplay__();
 }
 /** @override @return {Position} */
 m_getPosition__() {
  return this.f_title__org_pepstock_charba_client_defaults_chart_DefaultChartTitle_.m_getPosition__();
 }
 /** @override @return {boolean} */
 m_isFullSize__() {
  return this.f_title__org_pepstock_charba_client_defaults_chart_DefaultChartTitle_.m_isFullSize__();
 }
 /** @override @return {ElementAlign} */
 m_getAlign__() {
  return this.f_title__org_pepstock_charba_client_defaults_chart_DefaultChartTitle_.m_getAlign__();
 }
 
 static $clinit() {
  DefaultChartTitle.$clinit = () =>{};
  DefaultChartTitle.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartTitle;
 }
 
 static $loadModules() {}
}
IsDefaultTitle.$markImplementor(DefaultChartTitle);
$Util.$setClassMetadata(DefaultChartTitle, "org.pepstock.charba.client.defaults.chart.DefaultChartTitle");

exports = DefaultChartTitle;

//# sourceMappingURL=DefaultChartTitle.js.map
