goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartLegendLabels$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultLegendLabels = goog.require('org.pepstock.charba.client.defaults.IsDefaultLegendLabels$impl');

let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultPointStyleHandler = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');

/**
 * @implements {IsDefaultLegendLabels}
 */
class DefaultChartLegendLabels extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultLegendLabels}*/
  this.f_labels__org_pepstock_charba_client_defaults_chart_DefaultChartLegendLabels_;
 }
 /** @return {!DefaultChartLegendLabels} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultLegendLabels(/** IsDefaultLegendLabels */ labels) {
  DefaultChartLegendLabels.$clinit();
  let $instance = new DefaultChartLegendLabels();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartLegendLabels__org_pepstock_charba_client_defaults_IsDefaultLegendLabels(labels);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartLegendLabels__org_pepstock_charba_client_defaults_IsDefaultLegendLabels(/** IsDefaultLegendLabels */ labels) {
  this.$ctor__java_lang_Object__();
  this.f_labels__org_pepstock_charba_client_defaults_chart_DefaultChartLegendLabels_ = labels;
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return this.f_labels__org_pepstock_charba_client_defaults_chart_DefaultChartLegendLabels_.m_getColorAsString__();
 }
 /** @override @return {IsDefaultFont} */
 m_getFont__() {
  return this.f_labels__org_pepstock_charba_client_defaults_chart_DefaultChartLegendLabels_.m_getFont__();
 }
 /** @override @return {boolean} */
 m_isUsePointStyle__() {
  return this.f_labels__org_pepstock_charba_client_defaults_chart_DefaultChartLegendLabels_.m_isUsePointStyle__();
 }
 /** @override @return {PointStyle} */
 m_getPointStyle__() {
  return this.f_labels__org_pepstock_charba_client_defaults_chart_DefaultChartLegendLabels_.m_getPointStyle__();
 }
 /** @override @return {number} */
 m_getBoxWidth__() {
  return this.f_labels__org_pepstock_charba_client_defaults_chart_DefaultChartLegendLabels_.m_getBoxWidth__();
 }
 /** @override @return {number} */
 m_getBoxHeight__() {
  return this.f_labels__org_pepstock_charba_client_defaults_chart_DefaultChartLegendLabels_.m_getBoxHeight__();
 }
 /** @override @return {number} */
 m_getPadding__() {
  return this.f_labels__org_pepstock_charba_client_defaults_chart_DefaultChartLegendLabels_.m_getPadding__();
 }
 /** @override @return {boolean} */
 m_isPointStyleAsImage__() {
  return this.f_labels__org_pepstock_charba_client_defaults_chart_DefaultChartLegendLabels_.m_isPointStyleAsImage__();
 }
 /** @override @return {HTMLImageElement} */
 m_getPointStyleAsImage__() {
  return this.f_labels__org_pepstock_charba_client_defaults_chart_DefaultChartLegendLabels_.m_getPointStyleAsImage__();
 }
 /** @override @return {TextAlign} */
 m_getTextAlign__() {
  return this.f_labels__org_pepstock_charba_client_defaults_chart_DefaultChartLegendLabels_.m_getTextAlign__();
 }
 
 static $clinit() {
  DefaultChartLegendLabels.$clinit = () =>{};
  DefaultChartLegendLabels.$loadModules();
  j_l_Object.$clinit();
  IsDefaultPointStyleHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartLegendLabels;
 }
 
 static $loadModules() {
  IsDefaultPointStyleHandler = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
 }
}
IsDefaultLegendLabels.$markImplementor(DefaultChartLegendLabels);
$Util.$setClassMetadata(DefaultChartLegendLabels, "org.pepstock.charba.client.defaults.chart.DefaultChartLegendLabels");

exports = DefaultChartLegendLabels;

//# sourceMappingURL=DefaultChartLegendLabels.js.map
