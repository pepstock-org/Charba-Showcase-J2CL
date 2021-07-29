goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartScale$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultScale = goog.require('org.pepstock.charba.client.defaults.IsDefaultScale$impl');

let IsDefaultAdapters = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAdapters$impl');
let IsDefaultAngleLines = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAngleLines$impl');
let IsDefaultGrid = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultGrid$impl');
let IsDefaultPointLabels = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPointLabels$impl');
let IsDefaultScaleTitle = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaleTitle$impl');
let IsDefaultTicks = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTicks$impl');
let IsDefaultTime = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTime$impl');
let DefaultChartAdapters = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartAdapters$impl');
let DefaultChartAngleLines = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartAngleLines$impl');
let DefaultChartGrid = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartGrid$impl');
let DefaultChartPointLabels = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartPointLabels$impl');
let DefaultChartScaleTitle = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartScaleTitle$impl');
let DefaultChartTicks = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartTicks$impl');
let DefaultChartTime = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartTime$impl');
let AxisPosition = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisPosition$impl');
let Bounds = goog.forwardDeclare('org.pepstock.charba.client.enums.Bounds$impl');
let Display = goog.forwardDeclare('org.pepstock.charba.client.enums.Display$impl');
let Scale = goog.forwardDeclare('org.pepstock.charba.client.options.Scale$impl');

/**
 * @implements {IsDefaultScale}
 */
class DefaultChartScale extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Scale}*/
  this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_;
  /**@type {DefaultChartScaleTitle}*/
  this.f_title__org_pepstock_charba_client_defaults_chart_DefaultChartScale_;
  /**@type {DefaultChartTicks}*/
  this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartScale_;
  /**@type {DefaultChartGrid}*/
  this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartScale_;
  /**@type {DefaultChartAngleLines}*/
  this.f_angleLines__org_pepstock_charba_client_defaults_chart_DefaultChartScale_;
  /**@type {DefaultChartPointLabels}*/
  this.f_pointLabels__org_pepstock_charba_client_defaults_chart_DefaultChartScale_;
  /**@type {DefaultChartTime}*/
  this.f_time__org_pepstock_charba_client_defaults_chart_DefaultChartScale_;
  /**@type {DefaultChartAdapters}*/
  this.f_adapters__org_pepstock_charba_client_defaults_chart_DefaultChartScale_;
 }
 /** @return {!DefaultChartScale} */
 static $create__org_pepstock_charba_client_options_Scale(/** Scale */ scale) {
  DefaultChartScale.$clinit();
  let $instance = new DefaultChartScale();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartScale__org_pepstock_charba_client_options_Scale(scale);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartScale__org_pepstock_charba_client_options_Scale(/** Scale */ scale) {
  this.$ctor__java_lang_Object__();
  this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_ = scale;
  this.f_title__org_pepstock_charba_client_defaults_chart_DefaultChartScale_ = DefaultChartScaleTitle.$create__org_pepstock_charba_client_options_ScaleTitle(scale.m_getTitle__());
  this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartScale_ = DefaultChartTicks.$create__org_pepstock_charba_client_options_Ticks(scale.m_getTicks__());
  this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartScale_ = DefaultChartGrid.$create__org_pepstock_charba_client_options_Grid(scale.m_getGrid__());
  this.f_angleLines__org_pepstock_charba_client_defaults_chart_DefaultChartScale_ = DefaultChartAngleLines.$create__org_pepstock_charba_client_options_AngleLines(scale.m_getAngleLines__());
  this.f_pointLabels__org_pepstock_charba_client_defaults_chart_DefaultChartScale_ = DefaultChartPointLabels.$create__org_pepstock_charba_client_options_PointLabels(scale.m_getPointLabels__());
  this.f_time__org_pepstock_charba_client_defaults_chart_DefaultChartScale_ = DefaultChartTime.$create__org_pepstock_charba_client_options_Time(scale.m_getTime__());
  this.f_adapters__org_pepstock_charba_client_defaults_chart_DefaultChartScale_ = DefaultChartAdapters.$create__org_pepstock_charba_client_options_Adapters(scale.m_getAdapters__());
 }
 /** @override @return {IsDefaultScaleTitle} */
 m_getTitle__() {
  return this.f_title__org_pepstock_charba_client_defaults_chart_DefaultChartScale_;
 }
 /** @override @return {IsDefaultTicks} */
 m_getTicks__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartScale_;
 }
 /** @override @return {IsDefaultGrid} */
 m_getGrid__() {
  return this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartScale_;
 }
 /** @override @return {IsDefaultAngleLines} */
 m_getAngleLines__() {
  return this.f_angleLines__org_pepstock_charba_client_defaults_chart_DefaultChartScale_;
 }
 /** @override @return {IsDefaultPointLabels} */
 m_getPointLabels__() {
  return this.f_pointLabels__org_pepstock_charba_client_defaults_chart_DefaultChartScale_;
 }
 /** @override @return {IsDefaultTime} */
 m_getTime__() {
  return this.f_time__org_pepstock_charba_client_defaults_chart_DefaultChartScale_;
 }
 /** @override @return {IsDefaultAdapters} */
 m_getAdapters__() {
  return this.f_adapters__org_pepstock_charba_client_defaults_chart_DefaultChartScale_;
 }
 /** @override @return {boolean} */
 m_isStacked__() {
  return this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_.m_isStacked__();
 }
 /** @override @return {boolean} */
 m_isSingleStacked__() {
  return this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_.m_isSingleStacked__();
 }
 /** @override @return {number} */
 m_getWeight__() {
  return this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_.m_getWeight__();
 }
 /** @override @return {Display} */
 m_getDisplay__() {
  return this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_.m_getDisplay__();
 }
 /** @override @return {boolean} */
 m_isOffset__() {
  return this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_.m_isOffset__();
 }
 /** @override @return {AxisPosition} */
 m_getPosition__() {
  return this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_.m_getPosition__();
 }
 /** @override @return {Bounds} */
 m_getBounds__() {
  return this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_.m_getBounds__();
 }
 /** @override @return {boolean} */
 m_isBeginAtZero__() {
  return this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_.m_isBeginAtZero__();
 }
 /** @override @return {number} */
 m_getGrace__() {
  return this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_.m_getGrace__();
 }
 /** @override @return {?string} */
 m_getGraceAsPercentage__() {
  return this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_.m_getGraceAsPercentage__();
 }
 /** @override @return {number} */
 m_getMin__() {
  return this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_.m_getMin__();
 }
 /** @override @return {number} */
 m_getMax__() {
  return this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_.m_getMax__();
 }
 /** @override @return {number} */
 m_getSuggestedMax__() {
  return this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_.m_getSuggestedMax__();
 }
 /** @override @return {number} */
 m_getSuggestedMin__() {
  return this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_.m_getSuggestedMin__();
 }
 /** @override @return {boolean} */
 m_isAlignToPixels__() {
  return this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_.m_isAlignToPixels__();
 }
 /** @override @return {boolean} */
 m_isReverse__() {
  return this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_.m_isReverse__();
 }
 /** @override @return {boolean} */
 m_isAnimate__() {
  return this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_.m_isAnimate__();
 }
 /** @override @return {number} */
 m_getStartAngle__() {
  return this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_.m_getStartAngle__();
 }
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_.m_getBackgroundColorAsString__();
 }
 /** @override @return {?string} */
 m_getStack__() {
  return this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_.m_getStack__();
 }
 /** @override @return {number} */
 m_getStackWeight__() {
  return this.f_scale__org_pepstock_charba_client_defaults_chart_DefaultChartScale_.m_getStackWeight__();
 }
 
 static $clinit() {
  DefaultChartScale.$clinit = () =>{};
  DefaultChartScale.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartScale;
 }
 
 static $loadModules() {
  DefaultChartAdapters = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartAdapters$impl');
  DefaultChartAngleLines = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartAngleLines$impl');
  DefaultChartGrid = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartGrid$impl');
  DefaultChartPointLabels = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartPointLabels$impl');
  DefaultChartScaleTitle = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartScaleTitle$impl');
  DefaultChartTicks = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartTicks$impl');
  DefaultChartTime = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartTime$impl');
 }
}
IsDefaultScale.$markImplementor(DefaultChartScale);
$Util.$setClassMetadata(DefaultChartScale, "org.pepstock.charba.client.defaults.chart.DefaultChartScale");

exports = DefaultChartScale;

//# sourceMappingURL=DefaultChartScale.js.map
