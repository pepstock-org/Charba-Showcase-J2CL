goog.module('org.pepstock.charba.client.TimeSeriesLineChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractChart = goog.require('org.pepstock.charba.client.AbstractChart$impl');
const IsDatasetCreator = goog.require('org.pepstock.charba.client.IsDatasetCreator$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let TimeSeriesLineOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.TimeSeriesLineOptions$impl');
let TimeSeriesLineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.TimeSeriesLineDataset$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDatasetCreator<TimeSeriesLineDataset>}
 */
class TimeSeriesLineChart extends AbstractChart {
 /** @protected */
 constructor() {
  super();
  /**@type {TimeSeriesLineOptions}*/
  this.f_options__org_pepstock_charba_client_TimeSeriesLineChart_;
 }
 //Factory method corresponding to constructor 'TimeSeriesLineChart()'.
 /** @return {!TimeSeriesLineChart} */
 static $create__() {
  TimeSeriesLineChart.$clinit();
  let $instance = new TimeSeriesLineChart();
  $instance.$ctor__org_pepstock_charba_client_TimeSeriesLineChart__();
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesLineChart()'.
 
 $ctor__org_pepstock_charba_client_TimeSeriesLineChart__() {
  this.$ctor__org_pepstock_charba_client_TimeSeriesLineChart__org_pepstock_charba_client_Type(ChartType.f_LINE__org_pepstock_charba_client_ChartType);
 }
 //Factory method corresponding to constructor 'TimeSeriesLineChart(Type)'.
 /** @return {!TimeSeriesLineChart} */
 static $create__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  TimeSeriesLineChart.$clinit();
  let $instance = new TimeSeriesLineChart();
  $instance.$ctor__org_pepstock_charba_client_TimeSeriesLineChart__org_pepstock_charba_client_Type(extendedType);
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesLineChart(Type)'.
 
 $ctor__org_pepstock_charba_client_TimeSeriesLineChart__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  this.$ctor__org_pepstock_charba_client_AbstractChart__org_pepstock_charba_client_Type(extendedType);
  this.f_options__org_pepstock_charba_client_TimeSeriesLineChart_ = TimeSeriesLineOptions.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(this, this.m_getDefaultChartOptions__());
 }
 /** @override @return {TimeSeriesLineOptions} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_TimeSeriesLineChart_;
 }
 /** @override @return {TimeSeriesLineDataset} */
 m_newDataset__boolean(/** boolean */ hidden) {
  return TimeSeriesLineDataset.$create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(this.m_getDefaultChartOptions__(), hidden);
 }
 //Default method forwarding stub.
 /** @override @return {TimeSeriesLineDataset} */
 m_newDataset__() {
  return /**@type {TimeSeriesLineDataset}*/ ($Casts.$to(IsDatasetCreator.m_newDataset__$default__org_pepstock_charba_client_IsDatasetCreator(this), TimeSeriesLineDataset));
 }
 
 static $clinit() {
  TimeSeriesLineChart.$clinit = () =>{};
  TimeSeriesLineChart.$loadModules();
  AbstractChart.$clinit();
  IsDatasetCreator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TimeSeriesLineChart;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  TimeSeriesLineOptions = goog.module.get('org.pepstock.charba.client.configuration.TimeSeriesLineOptions$impl');
  TimeSeriesLineDataset = goog.module.get('org.pepstock.charba.client.data.TimeSeriesLineDataset$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDatasetCreator.$markImplementor(TimeSeriesLineChart);
$Util.$setClassMetadata(TimeSeriesLineChart, "org.pepstock.charba.client.TimeSeriesLineChart");

exports = TimeSeriesLineChart;

//# sourceMappingURL=TimeSeriesLineChart.js.map
