goog.module('org.pepstock.charba.client.PieChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractChart = goog.require('org.pepstock.charba.client.AbstractChart$impl');
const IsDatasetCreator = goog.require('org.pepstock.charba.client.IsDatasetCreator$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let PieOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.PieOptions$impl');
let PieDataset = goog.forwardDeclare('org.pepstock.charba.client.data.PieDataset$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDatasetCreator<PieDataset>}
 */
class PieChart extends AbstractChart {
 /** @protected */
 constructor() {
  super();
  /**@type {PieOptions}*/
  this.f_options__org_pepstock_charba_client_PieChart_;
 }
 //Factory method corresponding to constructor 'PieChart()'.
 /** @return {!PieChart} */
 static $create__() {
  PieChart.$clinit();
  let $instance = new PieChart();
  $instance.$ctor__org_pepstock_charba_client_PieChart__();
  return $instance;
 }
 //Initialization from constructor 'PieChart()'.
 
 $ctor__org_pepstock_charba_client_PieChart__() {
  this.$ctor__org_pepstock_charba_client_PieChart__org_pepstock_charba_client_Type(ChartType.f_PIE__org_pepstock_charba_client_ChartType);
 }
 //Factory method corresponding to constructor 'PieChart(Type)'.
 /** @return {!PieChart} */
 static $create__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  PieChart.$clinit();
  let $instance = new PieChart();
  $instance.$ctor__org_pepstock_charba_client_PieChart__org_pepstock_charba_client_Type(extendedType);
  return $instance;
 }
 //Initialization from constructor 'PieChart(Type)'.
 
 $ctor__org_pepstock_charba_client_PieChart__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  this.$ctor__org_pepstock_charba_client_AbstractChart__org_pepstock_charba_client_Type(extendedType);
  this.f_options__org_pepstock_charba_client_PieChart_ = PieOptions.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(this, this.m_getDefaultChartOptions__());
 }
 /** @override @return {PieOptions} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_PieChart_;
 }
 /** @override @return {PieDataset} */
 m_newDataset__boolean(/** boolean */ hidden) {
  return PieDataset.$create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(this.m_getDefaultChartOptions__(), hidden);
 }
 //Default method forwarding stub.
 /** @override @return {PieDataset} */
 m_newDataset__() {
  return /**@type {PieDataset}*/ ($Casts.$to(IsDatasetCreator.m_newDataset__$default__org_pepstock_charba_client_IsDatasetCreator(this), PieDataset));
 }
 
 static $clinit() {
  PieChart.$clinit = () =>{};
  PieChart.$loadModules();
  AbstractChart.$clinit();
  IsDatasetCreator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PieChart;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  PieOptions = goog.module.get('org.pepstock.charba.client.configuration.PieOptions$impl');
  PieDataset = goog.module.get('org.pepstock.charba.client.data.PieDataset$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDatasetCreator.$markImplementor(PieChart);
$Util.$setClassMetadata(PieChart, "org.pepstock.charba.client.PieChart");

exports = PieChart;

//# sourceMappingURL=PieChart.js.map
