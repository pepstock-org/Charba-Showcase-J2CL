goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartTicks$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultTicks = goog.require('org.pepstock.charba.client.defaults.IsDefaultTicks$impl');

let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultMajor = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultMajor$impl');
let IsDefaultNumberFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let CrossAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.CrossAlign$impl');
let ElementAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ElementAlign$impl');
let TickSource = goog.forwardDeclare('org.pepstock.charba.client.enums.TickSource$impl');
let Ticks = goog.forwardDeclare('org.pepstock.charba.client.options.Ticks$impl');

/**
 * @implements {IsDefaultTicks}
 */
class DefaultChartTicks extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Ticks}*/
  this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_;
 }
 /** @return {!DefaultChartTicks} */
 static $create__org_pepstock_charba_client_options_Ticks(/** Ticks */ ticks) {
  DefaultChartTicks.$clinit();
  let $instance = new DefaultChartTicks();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartTicks__org_pepstock_charba_client_options_Ticks(ticks);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartTicks__org_pepstock_charba_client_options_Ticks(/** Ticks */ ticks) {
  this.$ctor__java_lang_Object__();
  this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_ = ticks;
 }
 /** @override @return {IsDefaultFont} */
 m_getFont__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getFont__();
 }
 /** @override @return {IsDefaultPadding} */
 m_getBackdropPadding__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getBackdropPadding__();
 }
 /** @override @return {IsDefaultMajor} */
 m_getMajor__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getMajor__();
 }
 /** @override @return {IsDefaultNumberFormatOptions} */
 m_getNumberFormat__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getNumberFormat__();
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getColorAsString__();
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_isDisplay__();
 }
 /** @override @return {boolean} */
 m_isAutoSkip__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_isAutoSkip__();
 }
 /** @override @return {number} */
 m_getAutoSkipPadding__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getAutoSkipPadding__();
 }
 /** @override @return {number} */
 m_getLabelOffset__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getLabelOffset__();
 }
 /** @override @return {number} */
 m_getCount__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getCount__();
 }
 /** @override @return {number} */
 m_getMaxRotation__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getMaxRotation__();
 }
 /** @override @return {number} */
 m_getMinRotation__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getMinRotation__();
 }
 /** @override @return {boolean} */
 m_isMirror__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_isMirror__();
 }
 /** @override @return {number} */
 m_getPadding__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getPadding__();
 }
 /** @override @return {number} */
 m_getMaxTicksLimit__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getMaxTicksLimit__();
 }
 /** @override @return {number} */
 m_getStepSize__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getStepSize__();
 }
 /** @override @return {?string} */
 m_getBackdropColorAsString__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getBackdropColorAsString__();
 }
 /** @override @return {boolean} */
 m_isShowLabelBackdrop__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_isShowLabelBackdrop__();
 }
 /** @override @return {TickSource} */
 m_getSource__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getSource__();
 }
 /** @override @return {number} */
 m_getPrecision__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getPrecision__();
 }
 /** @override @return {number} */
 m_getZ__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getZ__();
 }
 /** @override @return {number} */
 m_getSampleSize__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getSampleSize__();
 }
 /** @override @return {ElementAlign} */
 m_getAlign__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getAlign__();
 }
 /** @override @return {CrossAlign} */
 m_getCrossAlign__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getCrossAlign__();
 }
 /** @override @return {?string} */
 m_getTextStrokeColorAsString__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getTextStrokeColorAsString__();
 }
 /** @override @return {number} */
 m_getTextStrokeWidth__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_chart_DefaultChartTicks_.m_getTextStrokeWidth__();
 }
 
 static $clinit() {
  DefaultChartTicks.$clinit = () =>{};
  DefaultChartTicks.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartTicks;
 }
 
 static $loadModules() {}
}
IsDefaultTicks.$markImplementor(DefaultChartTicks);
$Util.$setClassMetadata(DefaultChartTicks, "org.pepstock.charba.client.defaults.chart.DefaultChartTicks");

exports = DefaultChartTicks;

//# sourceMappingURL=DefaultChartTicks.js.map
