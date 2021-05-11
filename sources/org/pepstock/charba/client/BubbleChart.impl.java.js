goog.module('org.pepstock.charba.client.BubbleChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractChart = goog.require('org.pepstock.charba.client.AbstractChart$impl');
const IsDatasetCreator = goog.require('org.pepstock.charba.client.IsDatasetCreator$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let BubbleOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.BubbleOptions$impl');
let BubbleDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BubbleDataset$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDatasetCreator<BubbleDataset>}
 */
class BubbleChart extends AbstractChart {
 /** @protected */
 constructor() {
  super();
  /**@type {BubbleOptions}*/
  this.f_options__org_pepstock_charba_client_BubbleChart_;
 }
 //Factory method corresponding to constructor 'BubbleChart()'.
 /** @return {!BubbleChart} */
 static $create__() {
  BubbleChart.$clinit();
  let $instance = new BubbleChart();
  $instance.$ctor__org_pepstock_charba_client_BubbleChart__();
  return $instance;
 }
 //Initialization from constructor 'BubbleChart()'.
 
 $ctor__org_pepstock_charba_client_BubbleChart__() {
  this.$ctor__org_pepstock_charba_client_BubbleChart__org_pepstock_charba_client_Type(ChartType.f_BUBBLE__org_pepstock_charba_client_ChartType);
 }
 //Factory method corresponding to constructor 'BubbleChart(Type)'.
 /** @return {!BubbleChart} */
 static $create__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  BubbleChart.$clinit();
  let $instance = new BubbleChart();
  $instance.$ctor__org_pepstock_charba_client_BubbleChart__org_pepstock_charba_client_Type(extendedType);
  return $instance;
 }
 //Initialization from constructor 'BubbleChart(Type)'.
 
 $ctor__org_pepstock_charba_client_BubbleChart__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  this.$ctor__org_pepstock_charba_client_AbstractChart__org_pepstock_charba_client_Type(extendedType);
  this.f_options__org_pepstock_charba_client_BubbleChart_ = BubbleOptions.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(this, this.m_getDefaultChartOptions__());
 }
 /** @override @return {BubbleOptions} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_BubbleChart_;
 }
 /** @override @return {BubbleDataset} */
 m_newDataset__boolean(/** boolean */ hidden) {
  return BubbleDataset.$create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(this.m_getDefaultChartOptions__(), hidden);
 }
 //Default method forwarding stub.
 /** @override @return {BubbleDataset} */
 m_newDataset__() {
  return /**@type {BubbleDataset}*/ ($Casts.$to(IsDatasetCreator.m_newDataset__$default__org_pepstock_charba_client_IsDatasetCreator(this), BubbleDataset));
 }
 
 static $clinit() {
  BubbleChart.$clinit = () =>{};
  BubbleChart.$loadModules();
  AbstractChart.$clinit();
  IsDatasetCreator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BubbleChart;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  BubbleOptions = goog.module.get('org.pepstock.charba.client.configuration.BubbleOptions$impl');
  BubbleDataset = goog.module.get('org.pepstock.charba.client.data.BubbleDataset$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDatasetCreator.$markImplementor(BubbleChart);
$Util.$setClassMetadata(BubbleChart, "org.pepstock.charba.client.BubbleChart");

exports = BubbleChart;

//# sourceMappingURL=BubbleChart.js.map
