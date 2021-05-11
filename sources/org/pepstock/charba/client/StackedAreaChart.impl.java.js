goog.module('org.pepstock.charba.client.StackedAreaChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractChart = goog.require('org.pepstock.charba.client.AbstractChart$impl');
const IsDatasetCreator = goog.require('org.pepstock.charba.client.IsDatasetCreator$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let StackedOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.StackedOptions$impl');
let StackedAreaDataset = goog.forwardDeclare('org.pepstock.charba.client.data.StackedAreaDataset$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDatasetCreator<StackedAreaDataset>}
 */
class StackedAreaChart extends AbstractChart {
 /** @protected */
 constructor() {
  super();
  /**@type {StackedOptions}*/
  this.f_options__org_pepstock_charba_client_StackedAreaChart_;
 }
 //Factory method corresponding to constructor 'StackedAreaChart()'.
 /** @return {!StackedAreaChart} */
 static $create__() {
  StackedAreaChart.$clinit();
  let $instance = new StackedAreaChart();
  $instance.$ctor__org_pepstock_charba_client_StackedAreaChart__();
  return $instance;
 }
 //Initialization from constructor 'StackedAreaChart()'.
 
 $ctor__org_pepstock_charba_client_StackedAreaChart__() {
  this.$ctor__org_pepstock_charba_client_StackedAreaChart__org_pepstock_charba_client_Type(ChartType.f_LINE__org_pepstock_charba_client_ChartType);
 }
 //Factory method corresponding to constructor 'StackedAreaChart(Type)'.
 /** @return {!StackedAreaChart} */
 static $create__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  StackedAreaChart.$clinit();
  let $instance = new StackedAreaChart();
  $instance.$ctor__org_pepstock_charba_client_StackedAreaChart__org_pepstock_charba_client_Type(extendedType);
  return $instance;
 }
 //Initialization from constructor 'StackedAreaChart(Type)'.
 
 $ctor__org_pepstock_charba_client_StackedAreaChart__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  this.$ctor__org_pepstock_charba_client_AbstractChart__org_pepstock_charba_client_Type(extendedType);
  this.f_options__org_pepstock_charba_client_StackedAreaChart_ = StackedOptions.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__boolean(this, this.m_getDefaultChartOptions__(), true);
 }
 /** @override @return {StackedOptions} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_StackedAreaChart_;
 }
 /** @override @return {StackedAreaDataset} */
 m_newDataset__boolean(/** boolean */ hidden) {
  return StackedAreaDataset.$create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(this.m_getDefaultChartOptions__(), hidden);
 }
 //Default method forwarding stub.
 /** @override @return {StackedAreaDataset} */
 m_newDataset__() {
  return /**@type {StackedAreaDataset}*/ ($Casts.$to(IsDatasetCreator.m_newDataset__$default__org_pepstock_charba_client_IsDatasetCreator(this), StackedAreaDataset));
 }
 
 static $clinit() {
  StackedAreaChart.$clinit = () =>{};
  StackedAreaChart.$loadModules();
  AbstractChart.$clinit();
  IsDatasetCreator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StackedAreaChart;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  StackedOptions = goog.module.get('org.pepstock.charba.client.configuration.StackedOptions$impl');
  StackedAreaDataset = goog.module.get('org.pepstock.charba.client.data.StackedAreaDataset$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDatasetCreator.$markImplementor(StackedAreaChart);
$Util.$setClassMetadata(StackedAreaChart, "org.pepstock.charba.client.StackedAreaChart");

exports = StackedAreaChart;

//# sourceMappingURL=StackedAreaChart.js.map
