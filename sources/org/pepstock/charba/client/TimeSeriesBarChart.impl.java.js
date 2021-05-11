goog.module('org.pepstock.charba.client.TimeSeriesBarChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractChart = goog.require('org.pepstock.charba.client.AbstractChart$impl');
const IsDatasetCreator = goog.require('org.pepstock.charba.client.IsDatasetCreator$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let TimeSeriesBarOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.TimeSeriesBarOptions$impl');
let TimeSeriesBarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.TimeSeriesBarDataset$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDatasetCreator<TimeSeriesBarDataset>}
 */
class TimeSeriesBarChart extends AbstractChart {
 /** @protected */
 constructor() {
  super();
  /**@type {TimeSeriesBarOptions}*/
  this.f_options__org_pepstock_charba_client_TimeSeriesBarChart_;
 }
 //Factory method corresponding to constructor 'TimeSeriesBarChart()'.
 /** @return {!TimeSeriesBarChart} */
 static $create__() {
  TimeSeriesBarChart.$clinit();
  let $instance = new TimeSeriesBarChart();
  $instance.$ctor__org_pepstock_charba_client_TimeSeriesBarChart__();
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesBarChart()'.
 
 $ctor__org_pepstock_charba_client_TimeSeriesBarChart__() {
  this.$ctor__org_pepstock_charba_client_TimeSeriesBarChart__org_pepstock_charba_client_Type(ChartType.f_BAR__org_pepstock_charba_client_ChartType);
 }
 //Factory method corresponding to constructor 'TimeSeriesBarChart(Type)'.
 /** @return {!TimeSeriesBarChart} */
 static $create__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  TimeSeriesBarChart.$clinit();
  let $instance = new TimeSeriesBarChart();
  $instance.$ctor__org_pepstock_charba_client_TimeSeriesBarChart__org_pepstock_charba_client_Type(extendedType);
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesBarChart(Type)'.
 
 $ctor__org_pepstock_charba_client_TimeSeriesBarChart__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  this.$ctor__org_pepstock_charba_client_AbstractChart__org_pepstock_charba_client_Type(extendedType);
  this.f_options__org_pepstock_charba_client_TimeSeriesBarChart_ = TimeSeriesBarOptions.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(this, this.m_getDefaultChartOptions__());
 }
 /** @override @return {TimeSeriesBarOptions} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_TimeSeriesBarChart_;
 }
 /** @override @return {TimeSeriesBarDataset} */
 m_newDataset__boolean(/** boolean */ hidden) {
  return TimeSeriesBarDataset.$create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(this.m_getDefaultChartOptions__(), hidden);
 }
 //Default method forwarding stub.
 /** @override @return {TimeSeriesBarDataset} */
 m_newDataset__() {
  return /**@type {TimeSeriesBarDataset}*/ ($Casts.$to(IsDatasetCreator.m_newDataset__$default__org_pepstock_charba_client_IsDatasetCreator(this), TimeSeriesBarDataset));
 }
 
 static $clinit() {
  TimeSeriesBarChart.$clinit = () =>{};
  TimeSeriesBarChart.$loadModules();
  AbstractChart.$clinit();
  IsDatasetCreator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TimeSeriesBarChart;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  TimeSeriesBarOptions = goog.module.get('org.pepstock.charba.client.configuration.TimeSeriesBarOptions$impl');
  TimeSeriesBarDataset = goog.module.get('org.pepstock.charba.client.data.TimeSeriesBarDataset$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDatasetCreator.$markImplementor(TimeSeriesBarChart);
$Util.$setClassMetadata(TimeSeriesBarChart, "org.pepstock.charba.client.TimeSeriesBarChart");

exports = TimeSeriesBarChart;

//# sourceMappingURL=TimeSeriesBarChart.js.map
