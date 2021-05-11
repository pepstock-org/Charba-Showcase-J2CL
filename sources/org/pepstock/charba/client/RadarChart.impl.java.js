goog.module('org.pepstock.charba.client.RadarChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractChart = goog.require('org.pepstock.charba.client.AbstractChart$impl');
const IsDatasetCreator = goog.require('org.pepstock.charba.client.IsDatasetCreator$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let RadarOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.RadarOptions$impl');
let RadarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.RadarDataset$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDatasetCreator<RadarDataset>}
 */
class RadarChart extends AbstractChart {
 /** @protected */
 constructor() {
  super();
  /**@type {RadarOptions}*/
  this.f_options__org_pepstock_charba_client_RadarChart_;
 }
 //Factory method corresponding to constructor 'RadarChart()'.
 /** @return {!RadarChart} */
 static $create__() {
  RadarChart.$clinit();
  let $instance = new RadarChart();
  $instance.$ctor__org_pepstock_charba_client_RadarChart__();
  return $instance;
 }
 //Initialization from constructor 'RadarChart()'.
 
 $ctor__org_pepstock_charba_client_RadarChart__() {
  this.$ctor__org_pepstock_charba_client_RadarChart__org_pepstock_charba_client_Type(ChartType.f_RADAR__org_pepstock_charba_client_ChartType);
 }
 //Factory method corresponding to constructor 'RadarChart(Type)'.
 /** @return {!RadarChart} */
 static $create__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  RadarChart.$clinit();
  let $instance = new RadarChart();
  $instance.$ctor__org_pepstock_charba_client_RadarChart__org_pepstock_charba_client_Type(extendedType);
  return $instance;
 }
 //Initialization from constructor 'RadarChart(Type)'.
 
 $ctor__org_pepstock_charba_client_RadarChart__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  this.$ctor__org_pepstock_charba_client_AbstractChart__org_pepstock_charba_client_Type(extendedType);
  this.f_options__org_pepstock_charba_client_RadarChart_ = RadarOptions.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(this, this.m_getDefaultChartOptions__());
 }
 /** @override @return {RadarOptions} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_RadarChart_;
 }
 /** @override @return {RadarDataset} */
 m_newDataset__boolean(/** boolean */ hidden) {
  return RadarDataset.$create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(this.m_getDefaultChartOptions__(), hidden);
 }
 //Default method forwarding stub.
 /** @override @return {RadarDataset} */
 m_newDataset__() {
  return /**@type {RadarDataset}*/ ($Casts.$to(IsDatasetCreator.m_newDataset__$default__org_pepstock_charba_client_IsDatasetCreator(this), RadarDataset));
 }
 
 static $clinit() {
  RadarChart.$clinit = () =>{};
  RadarChart.$loadModules();
  AbstractChart.$clinit();
  IsDatasetCreator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RadarChart;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  RadarOptions = goog.module.get('org.pepstock.charba.client.configuration.RadarOptions$impl');
  RadarDataset = goog.module.get('org.pepstock.charba.client.data.RadarDataset$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDatasetCreator.$markImplementor(RadarChart);
$Util.$setClassMetadata(RadarChart, "org.pepstock.charba.client.RadarChart");

exports = RadarChart;

//# sourceMappingURL=RadarChart.js.map
