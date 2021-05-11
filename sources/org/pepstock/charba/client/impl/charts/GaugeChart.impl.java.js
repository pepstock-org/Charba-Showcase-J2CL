goog.module('org.pepstock.charba.client.impl.charts.GaugeChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseMeterChart = goog.require('org.pepstock.charba.client.impl.charts.BaseMeterChart$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let BaseMeterController = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.BaseMeterController$impl');
let GaugeDataset = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.GaugeDataset$impl');
let GaugeOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.GaugeOptions$impl');
let MeterDataset = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.MeterDataset$impl');

/**
 * @extends {BaseMeterChart<GaugeDataset>}
 */
class GaugeChart extends BaseMeterChart {
 /** @protected */
 constructor() {
  super();
  /**@type {GaugeOptions}*/
  this.f_options__org_pepstock_charba_client_impl_charts_GaugeChart_;
 }
 /** @return {!GaugeChart} */
 static $create__() {
  GaugeChart.$clinit();
  let $instance = new GaugeChart();
  $instance.$ctor__org_pepstock_charba_client_impl_charts_GaugeChart__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_charts_GaugeChart__() {
  this.$ctor__org_pepstock_charba_client_impl_charts_BaseMeterChart__org_pepstock_charba_client_Type(GaugeChart.$static_CONTROLLER_TYPE__org_pepstock_charba_client_impl_charts_GaugeChart);
  this.f_options__org_pepstock_charba_client_impl_charts_GaugeChart_ = GaugeOptions.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(this, this.m_getDefaultChartOptions__());
 }
 /** @override @return {GaugeOptions} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_impl_charts_GaugeChart_;
 }
 /** @override @return {GaugeDataset} */
 m_newDataset__boolean(/** boolean */ hidden) {
  return this.m_newDataset__double(MeterDataset.f_DEFAULT_MAXIMUM_VALUE__org_pepstock_charba_client_impl_charts_MeterDataset);
 }
 /** @override @return {GaugeDataset} */
 m_newDataset__double(/** number */ max) {
  return GaugeDataset.$create__double(max);
 }
 /** @override @return {ControllerType} */
 m_getControllerType___$pp_org_pepstock_charba_client_impl_charts() {
  return GaugeChart.$static_CONTROLLER_TYPE__org_pepstock_charba_client_impl_charts_GaugeChart;
 }
 /** @return {ControllerType} */
 static get f_CONTROLLER_TYPE__org_pepstock_charba_client_impl_charts_GaugeChart() {
  return (GaugeChart.$clinit(), GaugeChart.$static_CONTROLLER_TYPE__org_pepstock_charba_client_impl_charts_GaugeChart);
 }
 
 static $clinit() {
  GaugeChart.$clinit = () =>{};
  GaugeChart.$loadModules();
  BaseMeterChart.$clinit();
  GaugeChart.$static_CONTROLLER_TYPE__org_pepstock_charba_client_impl_charts_GaugeChart = ControllerType.$create__java_lang_String__org_pepstock_charba_client_Type__org_pepstock_charba_client_controllers_ControllerProvider(GaugeChart.f_TYPE__org_pepstock_charba_client_impl_charts_GaugeChart, ChartType.f_DOUGHNUT__org_pepstock_charba_client_ChartType, BaseMeterController.f_PROVIDER__org_pepstock_charba_client_impl_charts_BaseMeterController);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GaugeChart;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  ControllerType = goog.module.get('org.pepstock.charba.client.controllers.ControllerType$impl');
  BaseMeterController = goog.module.get('org.pepstock.charba.client.impl.charts.BaseMeterController$impl');
  GaugeDataset = goog.module.get('org.pepstock.charba.client.impl.charts.GaugeDataset$impl');
  GaugeOptions = goog.module.get('org.pepstock.charba.client.impl.charts.GaugeOptions$impl');
  MeterDataset = goog.module.get('org.pepstock.charba.client.impl.charts.MeterDataset$impl');
 }
}
/**@const {?string}*/
GaugeChart.f_TYPE__org_pepstock_charba_client_impl_charts_GaugeChart = "charbagauge";
/**@private {ControllerType}*/
GaugeChart.$static_CONTROLLER_TYPE__org_pepstock_charba_client_impl_charts_GaugeChart;
$Util.$setClassMetadata(GaugeChart, "org.pepstock.charba.client.impl.charts.GaugeChart");

exports = GaugeChart;

//# sourceMappingURL=GaugeChart.js.map
