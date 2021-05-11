goog.module('org.pepstock.charba.client.StackedBarChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractChart = goog.require('org.pepstock.charba.client.AbstractChart$impl');
const IsDatasetCreator = goog.require('org.pepstock.charba.client.IsDatasetCreator$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let StackedOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.StackedOptions$impl');
let StackedBarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.StackedBarDataset$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDatasetCreator<StackedBarDataset>}
 */
class StackedBarChart extends AbstractChart {
 /** @protected */
 constructor() {
  super();
  /**@type {StackedOptions}*/
  this.f_options__org_pepstock_charba_client_StackedBarChart_;
 }
 //Factory method corresponding to constructor 'StackedBarChart()'.
 /** @return {!StackedBarChart} */
 static $create__() {
  StackedBarChart.$clinit();
  let $instance = new StackedBarChart();
  $instance.$ctor__org_pepstock_charba_client_StackedBarChart__();
  return $instance;
 }
 //Initialization from constructor 'StackedBarChart()'.
 
 $ctor__org_pepstock_charba_client_StackedBarChart__() {
  this.$ctor__org_pepstock_charba_client_StackedBarChart__org_pepstock_charba_client_Type(ChartType.f_BAR__org_pepstock_charba_client_ChartType);
 }
 //Factory method corresponding to constructor 'StackedBarChart(Type)'.
 /** @return {!StackedBarChart} */
 static $create__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  StackedBarChart.$clinit();
  let $instance = new StackedBarChart();
  $instance.$ctor__org_pepstock_charba_client_StackedBarChart__org_pepstock_charba_client_Type(extendedType);
  return $instance;
 }
 //Initialization from constructor 'StackedBarChart(Type)'.
 
 $ctor__org_pepstock_charba_client_StackedBarChart__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  this.$ctor__org_pepstock_charba_client_AbstractChart__org_pepstock_charba_client_Type(extendedType);
  this.f_options__org_pepstock_charba_client_StackedBarChart_ = StackedOptions.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(this, this.m_getDefaultChartOptions__());
 }
 /** @override @return {StackedOptions} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_StackedBarChart_;
 }
 /** @override @return {StackedBarDataset} */
 m_newDataset__boolean(/** boolean */ hidden) {
  return StackedBarDataset.$create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(this.m_getDefaultChartOptions__(), hidden);
 }
 //Default method forwarding stub.
 /** @override @return {StackedBarDataset} */
 m_newDataset__() {
  return /**@type {StackedBarDataset}*/ ($Casts.$to(IsDatasetCreator.m_newDataset__$default__org_pepstock_charba_client_IsDatasetCreator(this), StackedBarDataset));
 }
 
 static $clinit() {
  StackedBarChart.$clinit = () =>{};
  StackedBarChart.$loadModules();
  AbstractChart.$clinit();
  IsDatasetCreator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StackedBarChart;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  StackedOptions = goog.module.get('org.pepstock.charba.client.configuration.StackedOptions$impl');
  StackedBarDataset = goog.module.get('org.pepstock.charba.client.data.StackedBarDataset$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDatasetCreator.$markImplementor(StackedBarChart);
$Util.$setClassMetadata(StackedBarChart, "org.pepstock.charba.client.StackedBarChart");

exports = StackedBarChart;

//# sourceMappingURL=StackedBarChart.js.map
