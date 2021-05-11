goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartLegend$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultLegend = goog.require('org.pepstock.charba.client.defaults.IsDefaultLegend$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let IsDefaultLegendLabels = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultLegendLabels$impl');
let IsDefaultLegendTitle = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultLegendTitle$impl');
let DefaultChartLegendLabels = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartLegendLabels$impl');
let DefaultChartLegendTitle = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartLegendTitle$impl');
let ElementAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ElementAlign$impl');
let Event = goog.forwardDeclare('org.pepstock.charba.client.enums.Event$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let TextDirection = goog.forwardDeclare('org.pepstock.charba.client.enums.TextDirection$impl');

/**
 * @implements {IsDefaultLegend}
 */
class DefaultChartLegend extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultLegend}*/
  this.f_legend__org_pepstock_charba_client_defaults_chart_DefaultChartLegend_;
  /**@type {DefaultChartLegendLabels}*/
  this.f_labels__org_pepstock_charba_client_defaults_chart_DefaultChartLegend_;
  /**@type {DefaultChartLegendTitle}*/
  this.f_title__org_pepstock_charba_client_defaults_chart_DefaultChartLegend_;
 }
 /** @return {!DefaultChartLegend} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultLegend(/** IsDefaultLegend */ legend) {
  DefaultChartLegend.$clinit();
  let $instance = new DefaultChartLegend();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartLegend__org_pepstock_charba_client_defaults_IsDefaultLegend(legend);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartLegend__org_pepstock_charba_client_defaults_IsDefaultLegend(/** IsDefaultLegend */ legend) {
  this.$ctor__java_lang_Object__();
  this.f_legend__org_pepstock_charba_client_defaults_chart_DefaultChartLegend_ = legend;
  this.f_labels__org_pepstock_charba_client_defaults_chart_DefaultChartLegend_ = DefaultChartLegendLabels.$create__org_pepstock_charba_client_defaults_IsDefaultLegendLabels(legend.m_getLabels__());
  this.f_title__org_pepstock_charba_client_defaults_chart_DefaultChartLegend_ = DefaultChartLegendTitle.$create__org_pepstock_charba_client_defaults_IsDefaultLegendTitle(legend.m_getTitle__());
 }
 /** @override @return {IsDefaultLegendLabels} */
 m_getLabels__() {
  return this.f_labels__org_pepstock_charba_client_defaults_chart_DefaultChartLegend_;
 }
 /** @override @return {IsDefaultLegendTitle} */
 m_getTitle__() {
  return this.f_title__org_pepstock_charba_client_defaults_chart_DefaultChartLegend_;
 }
 /** @override @return {List<Event>} */
 m_getEvents__() {
  return this.f_legend__org_pepstock_charba_client_defaults_chart_DefaultChartLegend_.m_getEvents__();
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return this.f_legend__org_pepstock_charba_client_defaults_chart_DefaultChartLegend_.m_isDisplay__();
 }
 /** @override @return {boolean} */
 m_isFullSize__() {
  return this.f_legend__org_pepstock_charba_client_defaults_chart_DefaultChartLegend_.m_isFullSize__();
 }
 /** @override @return {boolean} */
 m_isReverse__() {
  return this.f_legend__org_pepstock_charba_client_defaults_chart_DefaultChartLegend_.m_isReverse__();
 }
 /** @override @return {Position} */
 m_getPosition__() {
  return this.f_legend__org_pepstock_charba_client_defaults_chart_DefaultChartLegend_.m_getPosition__();
 }
 /** @override @return {ElementAlign} */
 m_getAlign__() {
  return this.f_legend__org_pepstock_charba_client_defaults_chart_DefaultChartLegend_.m_getAlign__();
 }
 /** @override @return {boolean} */
 m_isRtl__() {
  return this.f_legend__org_pepstock_charba_client_defaults_chart_DefaultChartLegend_.m_isRtl__();
 }
 /** @override @return {TextDirection} */
 m_getTextDirection__() {
  return this.f_legend__org_pepstock_charba_client_defaults_chart_DefaultChartLegend_.m_getTextDirection__();
 }
 /** @override @return {number} */
 m_getMaxWidth__() {
  return this.f_legend__org_pepstock_charba_client_defaults_chart_DefaultChartLegend_.m_getMaxWidth__();
 }
 /** @override @return {number} */
 m_getMaxHeight__() {
  return this.f_legend__org_pepstock_charba_client_defaults_chart_DefaultChartLegend_.m_getMaxHeight__();
 }
 
 static $clinit() {
  DefaultChartLegend.$clinit = () =>{};
  DefaultChartLegend.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartLegend;
 }
 
 static $loadModules() {
  DefaultChartLegendLabels = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartLegendLabels$impl');
  DefaultChartLegendTitle = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartLegendTitle$impl');
 }
}
IsDefaultLegend.$markImplementor(DefaultChartLegend);
$Util.$setClassMetadata(DefaultChartLegend, "org.pepstock.charba.client.defaults.chart.DefaultChartLegend");

exports = DefaultChartLegend;

//# sourceMappingURL=DefaultChartLegend.js.map
