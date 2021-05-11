goog.module('org.pepstock.charba.client.impl.charts.MeterChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseMeterChart = goog.require('org.pepstock.charba.client.impl.charts.BaseMeterChart$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let BaseMeterController = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.BaseMeterController$impl');
let MeterDataset = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.MeterDataset$impl');
let MeterOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.MeterOptions$impl');

/**
 * @extends {BaseMeterChart<MeterDataset>}
 */
class MeterChart extends BaseMeterChart {
 /** @protected */
 constructor() {
  super();
  /**@type {MeterOptions}*/
  this.f_options__org_pepstock_charba_client_impl_charts_MeterChart_;
 }
 /** @return {!MeterChart} */
 static $create__() {
  MeterChart.$clinit();
  let $instance = new MeterChart();
  $instance.$ctor__org_pepstock_charba_client_impl_charts_MeterChart__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_charts_MeterChart__() {
  this.$ctor__org_pepstock_charba_client_impl_charts_BaseMeterChart__org_pepstock_charba_client_Type(MeterChart.$static_CONTROLLER_TYPE__org_pepstock_charba_client_impl_charts_MeterChart);
  this.f_options__org_pepstock_charba_client_impl_charts_MeterChart_ = MeterOptions.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(this, this.m_getDefaultChartOptions__());
 }
 /** @override @return {MeterOptions} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_impl_charts_MeterChart_;
 }
 /** @override @return {MeterDataset} */
 m_newDataset__boolean(/** boolean */ hidden) {
  return this.m_newDataset__double(BaseMeterChart.f_DEFAULT_MAX__org_pepstock_charba_client_impl_charts_BaseMeterChart);
 }
 /** @override @return {MeterDataset} */
 m_newDataset__double(/** number */ max) {
  return MeterDataset.$create__double(max);
 }
 /** @override @return {ControllerType} */
 m_getControllerType___$pp_org_pepstock_charba_client_impl_charts() {
  return MeterChart.$static_CONTROLLER_TYPE__org_pepstock_charba_client_impl_charts_MeterChart;
 }
 /** @return {ControllerType} */
 static get f_CONTROLLER_TYPE__org_pepstock_charba_client_impl_charts_MeterChart() {
  return (MeterChart.$clinit(), MeterChart.$static_CONTROLLER_TYPE__org_pepstock_charba_client_impl_charts_MeterChart);
 }
 
 static $clinit() {
  MeterChart.$clinit = () =>{};
  MeterChart.$loadModules();
  BaseMeterChart.$clinit();
  MeterChart.$static_CONTROLLER_TYPE__org_pepstock_charba_client_impl_charts_MeterChart = ControllerType.$create__java_lang_String__org_pepstock_charba_client_Type__org_pepstock_charba_client_controllers_ControllerProvider(MeterChart.f_TYPE__org_pepstock_charba_client_impl_charts_MeterChart, ChartType.f_DOUGHNUT__org_pepstock_charba_client_ChartType, BaseMeterController.f_PROVIDER__org_pepstock_charba_client_impl_charts_BaseMeterController);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MeterChart;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  ControllerType = goog.module.get('org.pepstock.charba.client.controllers.ControllerType$impl');
  BaseMeterController = goog.module.get('org.pepstock.charba.client.impl.charts.BaseMeterController$impl');
  MeterDataset = goog.module.get('org.pepstock.charba.client.impl.charts.MeterDataset$impl');
  MeterOptions = goog.module.get('org.pepstock.charba.client.impl.charts.MeterOptions$impl');
 }
}
/**@const {?string}*/
MeterChart.f_TYPE__org_pepstock_charba_client_impl_charts_MeterChart = "charbameter";
/**@private {ControllerType}*/
MeterChart.$static_CONTROLLER_TYPE__org_pepstock_charba_client_impl_charts_MeterChart;
$Util.$setClassMetadata(MeterChart, "org.pepstock.charba.client.impl.charts.MeterChart");

exports = MeterChart;

//# sourceMappingURL=MeterChart.js.map
