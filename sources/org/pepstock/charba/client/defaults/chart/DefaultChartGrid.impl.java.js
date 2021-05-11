goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartGrid$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultGrid = goog.require('org.pepstock.charba.client.defaults.IsDefaultGrid$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Grid = goog.forwardDeclare('org.pepstock.charba.client.options.Grid$impl');

/**
 * @implements {IsDefaultGrid}
 */
class DefaultChartGrid extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Grid}*/
  this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartGrid_;
 }
 /** @return {!DefaultChartGrid} */
 static $create__org_pepstock_charba_client_options_Grid(/** Grid */ grid) {
  DefaultChartGrid.$clinit();
  let $instance = new DefaultChartGrid();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartGrid__org_pepstock_charba_client_options_Grid(grid);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartGrid__org_pepstock_charba_client_options_Grid(/** Grid */ grid) {
  this.$ctor__java_lang_Object__();
  this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartGrid_ = grid;
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartGrid_.m_isDisplay__();
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartGrid_.m_getColorAsString__();
 }
 /** @override @return {number} */
 m_getBorderDashOffset__() {
  return this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartGrid_.m_getBorderDashOffset__();
 }
 /** @override @return {number} */
 m_getBorderWidth__() {
  return this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartGrid_.m_getBorderWidth__();
 }
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartGrid_.m_getBorderColorAsString__();
 }
 /** @override @return {number} */
 m_getLineWidth__() {
  return this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartGrid_.m_getLineWidth__();
 }
 /** @override @return {boolean} */
 m_isDrawBorder__() {
  return this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartGrid_.m_isDrawBorder__();
 }
 /** @override @return {boolean} */
 m_isDrawOnChartArea__() {
  return this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartGrid_.m_isDrawOnChartArea__();
 }
 /** @override @return {boolean} */
 m_isDrawTicks__() {
  return this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartGrid_.m_isDrawTicks__();
 }
 /** @override @return {number} */
 m_getTickLength__() {
  return this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartGrid_.m_getTickLength__();
 }
 /** @override @return {boolean} */
 m_isOffset__() {
  return this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartGrid_.m_isOffset__();
 }
 /** @override @return {boolean} */
 m_isCircular__() {
  return this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartGrid_.m_isCircular__();
 }
 /** @override @return {number} */
 m_getZ__() {
  return this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartGrid_.m_getZ__();
 }
 /** @override @return {number} */
 m_getTickBorderDashOffset__() {
  return this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartGrid_.m_getBorderDashOffset__();
 }
 /** @override @return {?string} */
 m_getTickColorAsString__() {
  return this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartGrid_.m_getTickColorAsString__();
 }
 /** @override @return {number} */
 m_getTickWidth__() {
  return this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartGrid_.m_getTickWidth__();
 }
 /** @override @return {List<Integer>} */
 m_getBorderDash__() {
  return this.f_grid__org_pepstock_charba_client_defaults_chart_DefaultChartGrid_.m_getBorderDash__();
 }
 
 static $clinit() {
  DefaultChartGrid.$clinit = () =>{};
  DefaultChartGrid.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartGrid;
 }
 
 static $loadModules() {}
}
IsDefaultGrid.$markImplementor(DefaultChartGrid);
$Util.$setClassMetadata(DefaultChartGrid, "org.pepstock.charba.client.defaults.chart.DefaultChartGrid");

exports = DefaultChartGrid;

//# sourceMappingURL=DefaultChartGrid.js.map
