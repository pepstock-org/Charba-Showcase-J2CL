goog.module('org.pepstock.charba.client.ScatterChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractChart = goog.require('org.pepstock.charba.client.AbstractChart$impl');
const IsDatasetCreator = goog.require('org.pepstock.charba.client.IsDatasetCreator$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let ScatterOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ScatterOptions$impl');
let ScatterDataset = goog.forwardDeclare('org.pepstock.charba.client.data.ScatterDataset$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDatasetCreator<ScatterDataset>}
 */
class ScatterChart extends AbstractChart {
 /** @protected */
 constructor() {
  super();
  /**@type {ScatterOptions}*/
  this.f_options__org_pepstock_charba_client_ScatterChart_;
 }
 //Factory method corresponding to constructor 'ScatterChart()'.
 /** @return {!ScatterChart} */
 static $create__() {
  ScatterChart.$clinit();
  let $instance = new ScatterChart();
  $instance.$ctor__org_pepstock_charba_client_ScatterChart__();
  return $instance;
 }
 //Initialization from constructor 'ScatterChart()'.
 
 $ctor__org_pepstock_charba_client_ScatterChart__() {
  this.$ctor__org_pepstock_charba_client_ScatterChart__org_pepstock_charba_client_Type(ChartType.f_SCATTER__org_pepstock_charba_client_ChartType);
 }
 //Factory method corresponding to constructor 'ScatterChart(Type)'.
 /** @return {!ScatterChart} */
 static $create__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  ScatterChart.$clinit();
  let $instance = new ScatterChart();
  $instance.$ctor__org_pepstock_charba_client_ScatterChart__org_pepstock_charba_client_Type(extendedType);
  return $instance;
 }
 //Initialization from constructor 'ScatterChart(Type)'.
 
 $ctor__org_pepstock_charba_client_ScatterChart__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  this.$ctor__org_pepstock_charba_client_AbstractChart__org_pepstock_charba_client_Type(extendedType);
  this.f_options__org_pepstock_charba_client_ScatterChart_ = ScatterOptions.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(this, this.m_getDefaultChartOptions__());
 }
 /** @override @return {ScatterOptions} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_ScatterChart_;
 }
 /** @override @return {ScatterDataset} */
 m_newDataset__boolean(/** boolean */ hidden) {
  return ScatterDataset.$create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(this.m_getDefaultChartOptions__(), hidden);
 }
 //Default method forwarding stub.
 /** @override @return {ScatterDataset} */
 m_newDataset__() {
  return /**@type {ScatterDataset}*/ ($Casts.$to(IsDatasetCreator.m_newDataset__$default__org_pepstock_charba_client_IsDatasetCreator(this), ScatterDataset));
 }
 
 static $clinit() {
  ScatterChart.$clinit = () =>{};
  ScatterChart.$loadModules();
  AbstractChart.$clinit();
  IsDatasetCreator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScatterChart;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  ScatterOptions = goog.module.get('org.pepstock.charba.client.configuration.ScatterOptions$impl');
  ScatterDataset = goog.module.get('org.pepstock.charba.client.data.ScatterDataset$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDatasetCreator.$markImplementor(ScatterChart);
$Util.$setClassMetadata(ScatterChart, "org.pepstock.charba.client.ScatterChart");

exports = ScatterChart;

//# sourceMappingURL=ScatterChart.js.map
