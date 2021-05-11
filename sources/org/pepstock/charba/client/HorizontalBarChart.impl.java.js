goog.module('org.pepstock.charba.client.HorizontalBarChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BarChart = goog.require('org.pepstock.charba.client.BarChart$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let HorizontalBarOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.HorizontalBarOptions$impl');
let HorizontalBarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.HorizontalBarDataset$impl');

class HorizontalBarChart extends BarChart {
 /** @protected */
 constructor() {
  super();
  /**@type {HorizontalBarOptions}*/
  this.f_options__org_pepstock_charba_client_HorizontalBarChart_;
 }
 //Factory method corresponding to constructor 'HorizontalBarChart()'.
 /** @return {!HorizontalBarChart} */
 static $create__() {
  HorizontalBarChart.$clinit();
  let $instance = new HorizontalBarChart();
  $instance.$ctor__org_pepstock_charba_client_HorizontalBarChart__();
  return $instance;
 }
 //Initialization from constructor 'HorizontalBarChart()'.
 
 $ctor__org_pepstock_charba_client_HorizontalBarChart__() {
  this.$ctor__org_pepstock_charba_client_HorizontalBarChart__org_pepstock_charba_client_Type(ChartType.f_BAR__org_pepstock_charba_client_ChartType);
 }
 //Factory method corresponding to constructor 'HorizontalBarChart(Type)'.
 /** @return {!HorizontalBarChart} */
 static $create__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  HorizontalBarChart.$clinit();
  let $instance = new HorizontalBarChart();
  $instance.$ctor__org_pepstock_charba_client_HorizontalBarChart__org_pepstock_charba_client_Type(extendedType);
  return $instance;
 }
 //Initialization from constructor 'HorizontalBarChart(Type)'.
 
 $ctor__org_pepstock_charba_client_HorizontalBarChart__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  this.$ctor__org_pepstock_charba_client_BarChart__org_pepstock_charba_client_Type__boolean(extendedType, true);
  this.f_options__org_pepstock_charba_client_HorizontalBarChart_ = HorizontalBarOptions.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(this, this.m_getDefaultChartOptions__());
 }
 /** @override @return {HorizontalBarOptions} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_HorizontalBarChart_;
 }
 /** @override @return {HorizontalBarDataset} */
 m_newDataset__() {
  return this.m_newDataset__boolean(false);
 }
 /** @override @return {HorizontalBarDataset} */
 m_newDataset__boolean(/** boolean */ hidden) {
  return HorizontalBarDataset.$create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(this.m_getDefaultChartOptions__(), hidden);
 }
 
 static $clinit() {
  HorizontalBarChart.$clinit = () =>{};
  HorizontalBarChart.$loadModules();
  BarChart.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HorizontalBarChart;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  HorizontalBarOptions = goog.module.get('org.pepstock.charba.client.configuration.HorizontalBarOptions$impl');
  HorizontalBarDataset = goog.module.get('org.pepstock.charba.client.data.HorizontalBarDataset$impl');
 }
}
$Util.$setClassMetadata(HorizontalBarChart, "org.pepstock.charba.client.HorizontalBarChart");

exports = HorizontalBarChart;

//# sourceMappingURL=HorizontalBarChart.js.map
