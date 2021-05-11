goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartPointLabels$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultPointLabels = goog.require('org.pepstock.charba.client.defaults.IsDefaultPointLabels$impl');

let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let PointLabels = goog.forwardDeclare('org.pepstock.charba.client.options.PointLabels$impl');

/**
 * @implements {IsDefaultPointLabels}
 */
class DefaultChartPointLabels extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {PointLabels}*/
  this.f_pointLabels__org_pepstock_charba_client_defaults_chart_DefaultChartPointLabels_;
 }
 /** @return {!DefaultChartPointLabels} */
 static $create__org_pepstock_charba_client_options_PointLabels(/** PointLabels */ pointLabels) {
  DefaultChartPointLabels.$clinit();
  let $instance = new DefaultChartPointLabels();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartPointLabels__org_pepstock_charba_client_options_PointLabels(pointLabels);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartPointLabels__org_pepstock_charba_client_options_PointLabels(/** PointLabels */ pointLabels) {
  this.$ctor__java_lang_Object__();
  this.f_pointLabels__org_pepstock_charba_client_defaults_chart_DefaultChartPointLabels_ = pointLabels;
 }
 /** @override @return {IsDefaultFont} */
 m_getFont__() {
  return this.f_pointLabels__org_pepstock_charba_client_defaults_chart_DefaultChartPointLabels_.m_getFont__();
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return this.f_pointLabels__org_pepstock_charba_client_defaults_chart_DefaultChartPointLabels_.m_getColorAsString__();
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return this.f_pointLabels__org_pepstock_charba_client_defaults_chart_DefaultChartPointLabels_.m_isDisplay__();
 }
 /** @override @return {IsDefaultPadding} */
 m_getBackdropPadding__() {
  return this.f_pointLabels__org_pepstock_charba_client_defaults_chart_DefaultChartPointLabels_.m_getBackdropPadding__();
 }
 /** @override @return {number} */
 m_getPadding__() {
  return this.f_pointLabels__org_pepstock_charba_client_defaults_chart_DefaultChartPointLabels_.m_getPadding__();
 }
 /** @override @return {?string} */
 m_getBackdropColorAsString__() {
  return this.f_pointLabels__org_pepstock_charba_client_defaults_chart_DefaultChartPointLabels_.m_getBackdropColorAsString__();
 }
 
 static $clinit() {
  DefaultChartPointLabels.$clinit = () =>{};
  DefaultChartPointLabels.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartPointLabels;
 }
 
 static $loadModules() {}
}
IsDefaultPointLabels.$markImplementor(DefaultChartPointLabels);
$Util.$setClassMetadata(DefaultChartPointLabels, "org.pepstock.charba.client.defaults.chart.DefaultChartPointLabels");

exports = DefaultChartPointLabels;

//# sourceMappingURL=DefaultChartPointLabels.js.map
