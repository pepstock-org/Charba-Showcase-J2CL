goog.module('org.pepstock.charba.client.BarChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractChart = goog.require('org.pepstock.charba.client.AbstractChart$impl');
const IsDatasetCreator = goog.require('org.pepstock.charba.client.IsDatasetCreator$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let BarOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.BarOptions$impl');
let BarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDatasetCreator<BarDataset>}
 */
class BarChart extends AbstractChart {
 /** @protected */
 constructor() {
  super();
  /**@type {BarOptions}*/
  this.f_options__org_pepstock_charba_client_BarChart_;
 }
 //Factory method corresponding to constructor 'BarChart()'.
 /** @return {!BarChart} */
 static $create__() {
  BarChart.$clinit();
  let $instance = new BarChart();
  $instance.$ctor__org_pepstock_charba_client_BarChart__();
  return $instance;
 }
 //Initialization from constructor 'BarChart()'.
 
 $ctor__org_pepstock_charba_client_BarChart__() {
  this.$ctor__org_pepstock_charba_client_BarChart__org_pepstock_charba_client_Type(ChartType.f_BAR__org_pepstock_charba_client_ChartType);
 }
 //Factory method corresponding to constructor 'BarChart(Type)'.
 /** @return {!BarChart} */
 static $create__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  BarChart.$clinit();
  let $instance = new BarChart();
  $instance.$ctor__org_pepstock_charba_client_BarChart__org_pepstock_charba_client_Type(extendedType);
  return $instance;
 }
 //Initialization from constructor 'BarChart(Type)'.
 
 $ctor__org_pepstock_charba_client_BarChart__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  this.$ctor__org_pepstock_charba_client_BarChart__org_pepstock_charba_client_Type__boolean(extendedType, false);
 }
 //Factory method corresponding to constructor 'BarChart(Type, boolean)'.
 /** @return {!BarChart} */
 static $create__org_pepstock_charba_client_Type__boolean(/** Type */ extendedType, /** boolean */ doNotCreateOptions) {
  BarChart.$clinit();
  let $instance = new BarChart();
  $instance.$ctor__org_pepstock_charba_client_BarChart__org_pepstock_charba_client_Type__boolean(extendedType, doNotCreateOptions);
  return $instance;
 }
 //Initialization from constructor 'BarChart(Type, boolean)'.
 
 $ctor__org_pepstock_charba_client_BarChart__org_pepstock_charba_client_Type__boolean(/** Type */ extendedType, /** boolean */ doNotCreateOptions) {
  this.$ctor__org_pepstock_charba_client_AbstractChart__org_pepstock_charba_client_Type(extendedType);
  this.f_options__org_pepstock_charba_client_BarChart_ = doNotCreateOptions ? null : BarOptions.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(this, this.m_getDefaultChartOptions__());
 }
 /** @override @return {BarOptions} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_BarChart_;
 }
 /** @override @return {BarDataset} */
 m_newDataset__boolean(/** boolean */ hidden) {
  return BarDataset.$create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(this.m_getDefaultChartOptions__(), hidden);
 }
 //Default method forwarding stub.
 /** @override @return {BarDataset} */
 m_newDataset__() {
  return /**@type {BarDataset}*/ ($Casts.$to(IsDatasetCreator.m_newDataset__$default__org_pepstock_charba_client_IsDatasetCreator(this), BarDataset));
 }
 
 static $clinit() {
  BarChart.$clinit = () =>{};
  BarChart.$loadModules();
  AbstractChart.$clinit();
  IsDatasetCreator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BarChart;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  BarOptions = goog.module.get('org.pepstock.charba.client.configuration.BarOptions$impl');
  BarDataset = goog.module.get('org.pepstock.charba.client.data.BarDataset$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDatasetCreator.$markImplementor(BarChart);
$Util.$setClassMetadata(BarChart, "org.pepstock.charba.client.BarChart");

exports = BarChart;

//# sourceMappingURL=BarChart.js.map
