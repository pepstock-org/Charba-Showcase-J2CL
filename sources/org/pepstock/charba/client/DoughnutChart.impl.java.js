goog.module('org.pepstock.charba.client.DoughnutChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractChart = goog.require('org.pepstock.charba.client.AbstractChart$impl');
const IsDatasetCreator = goog.require('org.pepstock.charba.client.IsDatasetCreator$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let DoughnutOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.DoughnutOptions$impl');
let DoughnutDataset = goog.forwardDeclare('org.pepstock.charba.client.data.DoughnutDataset$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDatasetCreator<DoughnutDataset>}
 */
class DoughnutChart extends AbstractChart {
 /** @protected */
 constructor() {
  super();
  /**@type {DoughnutOptions}*/
  this.f_options__org_pepstock_charba_client_DoughnutChart_;
 }
 //Factory method corresponding to constructor 'DoughnutChart()'.
 /** @return {!DoughnutChart} */
 static $create__() {
  DoughnutChart.$clinit();
  let $instance = new DoughnutChart();
  $instance.$ctor__org_pepstock_charba_client_DoughnutChart__();
  return $instance;
 }
 //Initialization from constructor 'DoughnutChart()'.
 
 $ctor__org_pepstock_charba_client_DoughnutChart__() {
  this.$ctor__org_pepstock_charba_client_DoughnutChart__org_pepstock_charba_client_Type(ChartType.f_DOUGHNUT__org_pepstock_charba_client_ChartType);
 }
 //Factory method corresponding to constructor 'DoughnutChart(Type)'.
 /** @return {!DoughnutChart} */
 static $create__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  DoughnutChart.$clinit();
  let $instance = new DoughnutChart();
  $instance.$ctor__org_pepstock_charba_client_DoughnutChart__org_pepstock_charba_client_Type(extendedType);
  return $instance;
 }
 //Initialization from constructor 'DoughnutChart(Type)'.
 
 $ctor__org_pepstock_charba_client_DoughnutChart__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  this.$ctor__org_pepstock_charba_client_AbstractChart__org_pepstock_charba_client_Type(extendedType);
  this.f_options__org_pepstock_charba_client_DoughnutChart_ = DoughnutOptions.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(this, this.m_getDefaultChartOptions__());
 }
 /** @override @return {DoughnutOptions} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_DoughnutChart_;
 }
 /** @override @return {DoughnutDataset} */
 m_newDataset__boolean(/** boolean */ hidden) {
  return DoughnutDataset.$create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(this.m_getDefaultChartOptions__(), hidden);
 }
 //Default method forwarding stub.
 /** @override @return {DoughnutDataset} */
 m_newDataset__() {
  return /**@type {DoughnutDataset}*/ ($Casts.$to(IsDatasetCreator.m_newDataset__$default__org_pepstock_charba_client_IsDatasetCreator(this), DoughnutDataset));
 }
 
 static $clinit() {
  DoughnutChart.$clinit = () =>{};
  DoughnutChart.$loadModules();
  AbstractChart.$clinit();
  IsDatasetCreator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DoughnutChart;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  DoughnutOptions = goog.module.get('org.pepstock.charba.client.configuration.DoughnutOptions$impl');
  DoughnutDataset = goog.module.get('org.pepstock.charba.client.data.DoughnutDataset$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDatasetCreator.$markImplementor(DoughnutChart);
$Util.$setClassMetadata(DoughnutChart, "org.pepstock.charba.client.DoughnutChart");

exports = DoughnutChart;

//# sourceMappingURL=DoughnutChart.js.map
