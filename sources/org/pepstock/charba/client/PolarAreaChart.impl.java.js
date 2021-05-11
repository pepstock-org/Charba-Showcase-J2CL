goog.module('org.pepstock.charba.client.PolarAreaChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractChart = goog.require('org.pepstock.charba.client.AbstractChart$impl');
const IsDatasetCreator = goog.require('org.pepstock.charba.client.IsDatasetCreator$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let PolarAreaOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.PolarAreaOptions$impl');
let PolarAreaDataset = goog.forwardDeclare('org.pepstock.charba.client.data.PolarAreaDataset$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDatasetCreator<PolarAreaDataset>}
 */
class PolarAreaChart extends AbstractChart {
 /** @protected */
 constructor() {
  super();
  /**@type {PolarAreaOptions}*/
  this.f_options__org_pepstock_charba_client_PolarAreaChart_;
 }
 //Factory method corresponding to constructor 'PolarAreaChart()'.
 /** @return {!PolarAreaChart} */
 static $create__() {
  PolarAreaChart.$clinit();
  let $instance = new PolarAreaChart();
  $instance.$ctor__org_pepstock_charba_client_PolarAreaChart__();
  return $instance;
 }
 //Initialization from constructor 'PolarAreaChart()'.
 
 $ctor__org_pepstock_charba_client_PolarAreaChart__() {
  this.$ctor__org_pepstock_charba_client_PolarAreaChart__org_pepstock_charba_client_Type(ChartType.f_POLAR_AREA__org_pepstock_charba_client_ChartType);
 }
 //Factory method corresponding to constructor 'PolarAreaChart(Type)'.
 /** @return {!PolarAreaChart} */
 static $create__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  PolarAreaChart.$clinit();
  let $instance = new PolarAreaChart();
  $instance.$ctor__org_pepstock_charba_client_PolarAreaChart__org_pepstock_charba_client_Type(extendedType);
  return $instance;
 }
 //Initialization from constructor 'PolarAreaChart(Type)'.
 
 $ctor__org_pepstock_charba_client_PolarAreaChart__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  this.$ctor__org_pepstock_charba_client_AbstractChart__org_pepstock_charba_client_Type(extendedType);
  this.f_options__org_pepstock_charba_client_PolarAreaChart_ = PolarAreaOptions.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(this, this.m_getDefaultChartOptions__());
 }
 /** @override @return {PolarAreaOptions} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_PolarAreaChart_;
 }
 /** @override @return {PolarAreaDataset} */
 m_newDataset__boolean(/** boolean */ hidden) {
  return PolarAreaDataset.$create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(this.m_getDefaultChartOptions__(), hidden);
 }
 //Default method forwarding stub.
 /** @override @return {PolarAreaDataset} */
 m_newDataset__() {
  return /**@type {PolarAreaDataset}*/ ($Casts.$to(IsDatasetCreator.m_newDataset__$default__org_pepstock_charba_client_IsDatasetCreator(this), PolarAreaDataset));
 }
 
 static $clinit() {
  PolarAreaChart.$clinit = () =>{};
  PolarAreaChart.$loadModules();
  AbstractChart.$clinit();
  IsDatasetCreator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PolarAreaChart;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  PolarAreaOptions = goog.module.get('org.pepstock.charba.client.configuration.PolarAreaOptions$impl');
  PolarAreaDataset = goog.module.get('org.pepstock.charba.client.data.PolarAreaDataset$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDatasetCreator.$markImplementor(PolarAreaChart);
$Util.$setClassMetadata(PolarAreaChart, "org.pepstock.charba.client.PolarAreaChart");

exports = PolarAreaChart;

//# sourceMappingURL=PolarAreaChart.js.map
