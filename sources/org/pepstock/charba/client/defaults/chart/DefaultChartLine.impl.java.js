goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartLine$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultLine = goog.require('org.pepstock.charba.client.defaults.IsDefaultLine$impl');

let CapStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.CapStyle$impl');
let CubicInterpolationMode = goog.forwardDeclare('org.pepstock.charba.client.enums.CubicInterpolationMode$impl');
let IsFill = goog.forwardDeclare('org.pepstock.charba.client.enums.IsFill$impl');
let JoinStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.JoinStyle$impl');

/**
 * @implements {IsDefaultLine}
 */
class DefaultChartLine extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultLine}*/
  this.f_line__org_pepstock_charba_client_defaults_chart_DefaultChartLine_;
 }
 /** @return {!DefaultChartLine} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultLine(/** IsDefaultLine */ line) {
  DefaultChartLine.$clinit();
  let $instance = new DefaultChartLine();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartLine__org_pepstock_charba_client_defaults_IsDefaultLine(line);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartLine__org_pepstock_charba_client_defaults_IsDefaultLine(/** IsDefaultLine */ line) {
  this.$ctor__java_lang_Object__();
  this.f_line__org_pepstock_charba_client_defaults_chart_DefaultChartLine_ = line;
 }
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return this.f_line__org_pepstock_charba_client_defaults_chart_DefaultChartLine_.m_getBackgroundColorAsString__();
 }
 /** @override @return {number} */
 m_getBorderWidth__() {
  return this.f_line__org_pepstock_charba_client_defaults_chart_DefaultChartLine_.m_getBorderWidth__();
 }
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return this.f_line__org_pepstock_charba_client_defaults_chart_DefaultChartLine_.m_getBorderColorAsString__();
 }
 /** @override @return {number} */
 m_getTension__() {
  return this.f_line__org_pepstock_charba_client_defaults_chart_DefaultChartLine_.m_getTension__();
 }
 /** @override @return {CapStyle} */
 m_getBorderCapStyle__() {
  return this.f_line__org_pepstock_charba_client_defaults_chart_DefaultChartLine_.m_getBorderCapStyle__();
 }
 /** @override @return {number} */
 m_getBorderDashOffset__() {
  return this.f_line__org_pepstock_charba_client_defaults_chart_DefaultChartLine_.m_getBorderDashOffset__();
 }
 /** @override @return {JoinStyle} */
 m_getBorderJoinStyle__() {
  return this.f_line__org_pepstock_charba_client_defaults_chart_DefaultChartLine_.m_getBorderJoinStyle__();
 }
 /** @override @return {boolean} */
 m_isCapBezierPoints__() {
  return this.f_line__org_pepstock_charba_client_defaults_chart_DefaultChartLine_.m_isCapBezierPoints__();
 }
 /** @override @return {CubicInterpolationMode} */
 m_getCubicInterpolationMode__() {
  return this.f_line__org_pepstock_charba_client_defaults_chart_DefaultChartLine_.m_getCubicInterpolationMode__();
 }
 /** @override @return {IsFill} */
 m_getFill__() {
  return this.f_line__org_pepstock_charba_client_defaults_chart_DefaultChartLine_.m_getFill__();
 }
 /** @override @return {boolean} */
 m_isStepped__() {
  return this.f_line__org_pepstock_charba_client_defaults_chart_DefaultChartLine_.m_isStepped__();
 }
 /** @override @return {?string} */
 m_getHoverBackgroundColorAsString__() {
  return this.f_line__org_pepstock_charba_client_defaults_chart_DefaultChartLine_.m_getHoverBackgroundColorAsString__();
 }
 /** @override @return {number} */
 m_getHoverBorderWidth__() {
  return this.f_line__org_pepstock_charba_client_defaults_chart_DefaultChartLine_.m_getHoverBorderWidth__();
 }
 /** @override @return {?string} */
 m_getHoverBorderColorAsString__() {
  return this.f_line__org_pepstock_charba_client_defaults_chart_DefaultChartLine_.m_getHoverBorderColorAsString__();
 }
 
 static $clinit() {
  DefaultChartLine.$clinit = () =>{};
  DefaultChartLine.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartLine;
 }
 
 static $loadModules() {}
}
IsDefaultLine.$markImplementor(DefaultChartLine);
$Util.$setClassMetadata(DefaultChartLine, "org.pepstock.charba.client.defaults.chart.DefaultChartLine");

exports = DefaultChartLine;

//# sourceMappingURL=DefaultChartLine.js.map
