goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartLegendTitle$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultLegendTitle = goog.require('org.pepstock.charba.client.defaults.IsDefaultLegendTitle$impl');

let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');

/**
 * @implements {IsDefaultLegendTitle}
 */
class DefaultChartLegendTitle extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultLegendTitle}*/
  this.f_legendTitle__org_pepstock_charba_client_defaults_chart_DefaultChartLegendTitle_;
 }
 /** @return {!DefaultChartLegendTitle} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultLegendTitle(/** IsDefaultLegendTitle */ title) {
  DefaultChartLegendTitle.$clinit();
  let $instance = new DefaultChartLegendTitle();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartLegendTitle__org_pepstock_charba_client_defaults_IsDefaultLegendTitle(title);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartLegendTitle__org_pepstock_charba_client_defaults_IsDefaultLegendTitle(/** IsDefaultLegendTitle */ title) {
  this.$ctor__java_lang_Object__();
  this.f_legendTitle__org_pepstock_charba_client_defaults_chart_DefaultChartLegendTitle_ = title;
 }
 /** @override @return {IsDefaultFont} */
 m_getFont__() {
  return this.f_legendTitle__org_pepstock_charba_client_defaults_chart_DefaultChartLegendTitle_.m_getFont__();
 }
 /** @override @return {IsDefaultPadding} */
 m_getPadding__() {
  return this.f_legendTitle__org_pepstock_charba_client_defaults_chart_DefaultChartLegendTitle_.m_getPadding__();
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return this.f_legendTitle__org_pepstock_charba_client_defaults_chart_DefaultChartLegendTitle_.m_getColorAsString__();
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return this.f_legendTitle__org_pepstock_charba_client_defaults_chart_DefaultChartLegendTitle_.m_isDisplay__();
 }
 
 static $clinit() {
  DefaultChartLegendTitle.$clinit = () =>{};
  DefaultChartLegendTitle.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartLegendTitle;
 }
 
 static $loadModules() {}
}
IsDefaultLegendTitle.$markImplementor(DefaultChartLegendTitle);
$Util.$setClassMetadata(DefaultChartLegendTitle, "org.pepstock.charba.client.defaults.chart.DefaultChartLegendTitle");

exports = DefaultChartLegendTitle;

//# sourceMappingURL=DefaultChartLegendTitle.js.map
