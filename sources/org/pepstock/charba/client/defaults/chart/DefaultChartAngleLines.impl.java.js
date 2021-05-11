goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartAngleLines$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAngleLines = goog.require('org.pepstock.charba.client.defaults.IsDefaultAngleLines$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let AngleLines = goog.forwardDeclare('org.pepstock.charba.client.options.AngleLines$impl');

/**
 * @implements {IsDefaultAngleLines}
 */
class DefaultChartAngleLines extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {AngleLines}*/
  this.f_angleLines__org_pepstock_charba_client_defaults_chart_DefaultChartAngleLines_;
 }
 /** @return {!DefaultChartAngleLines} */
 static $create__org_pepstock_charba_client_options_AngleLines(/** AngleLines */ angleLines) {
  DefaultChartAngleLines.$clinit();
  let $instance = new DefaultChartAngleLines();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartAngleLines__org_pepstock_charba_client_options_AngleLines(angleLines);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartAngleLines__org_pepstock_charba_client_options_AngleLines(/** AngleLines */ angleLines) {
  this.$ctor__java_lang_Object__();
  this.f_angleLines__org_pepstock_charba_client_defaults_chart_DefaultChartAngleLines_ = angleLines;
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return this.f_angleLines__org_pepstock_charba_client_defaults_chart_DefaultChartAngleLines_.m_isDisplay__();
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return this.f_angleLines__org_pepstock_charba_client_defaults_chart_DefaultChartAngleLines_.m_getColorAsString__();
 }
 /** @override @return {number} */
 m_getLineWidth__() {
  return this.f_angleLines__org_pepstock_charba_client_defaults_chart_DefaultChartAngleLines_.m_getLineWidth__();
 }
 /** @override @return {number} */
 m_getBorderDashOffset__() {
  return this.f_angleLines__org_pepstock_charba_client_defaults_chart_DefaultChartAngleLines_.m_getBorderDashOffset__();
 }
 /** @override @return {List<Integer>} */
 m_getBorderDash__() {
  return this.f_angleLines__org_pepstock_charba_client_defaults_chart_DefaultChartAngleLines_.m_getBorderDash__();
 }
 
 static $clinit() {
  DefaultChartAngleLines.$clinit = () =>{};
  DefaultChartAngleLines.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartAngleLines;
 }
 
 static $loadModules() {}
}
IsDefaultAngleLines.$markImplementor(DefaultChartAngleLines);
$Util.$setClassMetadata(DefaultChartAngleLines, "org.pepstock.charba.client.defaults.chart.DefaultChartAngleLines");

exports = DefaultChartAngleLines;

//# sourceMappingURL=DefaultChartAngleLines.js.map
