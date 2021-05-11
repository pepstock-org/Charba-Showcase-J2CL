goog.module('org.pepstock.charba.client.VerticalLineChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LineChart = goog.require('org.pepstock.charba.client.LineChart$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let VerticalLineOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.VerticalLineOptions$impl');
let VerticalLineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.VerticalLineDataset$impl');

class VerticalLineChart extends LineChart {
 /** @protected */
 constructor() {
  super();
  /**@type {VerticalLineOptions}*/
  this.f_options__org_pepstock_charba_client_VerticalLineChart_;
 }
 //Factory method corresponding to constructor 'VerticalLineChart()'.
 /** @return {!VerticalLineChart} */
 static $create__() {
  VerticalLineChart.$clinit();
  let $instance = new VerticalLineChart();
  $instance.$ctor__org_pepstock_charba_client_VerticalLineChart__();
  return $instance;
 }
 //Initialization from constructor 'VerticalLineChart()'.
 
 $ctor__org_pepstock_charba_client_VerticalLineChart__() {
  this.$ctor__org_pepstock_charba_client_VerticalLineChart__org_pepstock_charba_client_Type(ChartType.f_LINE__org_pepstock_charba_client_ChartType);
 }
 //Factory method corresponding to constructor 'VerticalLineChart(Type)'.
 /** @return {!VerticalLineChart} */
 static $create__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  VerticalLineChart.$clinit();
  let $instance = new VerticalLineChart();
  $instance.$ctor__org_pepstock_charba_client_VerticalLineChart__org_pepstock_charba_client_Type(extendedType);
  return $instance;
 }
 //Initialization from constructor 'VerticalLineChart(Type)'.
 
 $ctor__org_pepstock_charba_client_VerticalLineChart__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  this.$ctor__org_pepstock_charba_client_LineChart__org_pepstock_charba_client_Type(extendedType);
  this.f_options__org_pepstock_charba_client_VerticalLineChart_ = VerticalLineOptions.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(this, this.m_getDefaultChartOptions__());
 }
 /** @override @return {VerticalLineOptions} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_VerticalLineChart_;
 }
 /** @override @return {VerticalLineDataset} */
 m_newDataset__() {
  return this.m_newDataset__boolean(false);
 }
 /** @override @return {VerticalLineDataset} */
 m_newDataset__boolean(/** boolean */ hidden) {
  return VerticalLineDataset.$create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(this.m_getDefaultChartOptions__(), hidden);
 }
 
 static $clinit() {
  VerticalLineChart.$clinit = () =>{};
  VerticalLineChart.$loadModules();
  LineChart.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof VerticalLineChart;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  VerticalLineOptions = goog.module.get('org.pepstock.charba.client.configuration.VerticalLineOptions$impl');
  VerticalLineDataset = goog.module.get('org.pepstock.charba.client.data.VerticalLineDataset$impl');
 }
}
$Util.$setClassMetadata(VerticalLineChart, "org.pepstock.charba.client.VerticalLineChart");

exports = VerticalLineChart;

//# sourceMappingURL=VerticalLineChart.js.map
