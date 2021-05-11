goog.module('org.pepstock.charba.client.LineChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractChart = goog.require('org.pepstock.charba.client.AbstractChart$impl');
const IsDatasetCreator = goog.require('org.pepstock.charba.client.IsDatasetCreator$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let LineOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.LineOptions$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDatasetCreator<LineDataset>}
 */
class LineChart extends AbstractChart {
 /** @protected */
 constructor() {
  super();
  /**@type {LineOptions}*/
  this.f_options__org_pepstock_charba_client_LineChart_;
 }
 //Factory method corresponding to constructor 'LineChart()'.
 /** @return {!LineChart} */
 static $create__() {
  LineChart.$clinit();
  let $instance = new LineChart();
  $instance.$ctor__org_pepstock_charba_client_LineChart__();
  return $instance;
 }
 //Initialization from constructor 'LineChart()'.
 
 $ctor__org_pepstock_charba_client_LineChart__() {
  this.$ctor__org_pepstock_charba_client_LineChart__org_pepstock_charba_client_Type(ChartType.f_LINE__org_pepstock_charba_client_ChartType);
 }
 //Factory method corresponding to constructor 'LineChart(Type)'.
 /** @return {!LineChart} */
 static $create__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  LineChart.$clinit();
  let $instance = new LineChart();
  $instance.$ctor__org_pepstock_charba_client_LineChart__org_pepstock_charba_client_Type(extendedType);
  return $instance;
 }
 //Initialization from constructor 'LineChart(Type)'.
 
 $ctor__org_pepstock_charba_client_LineChart__org_pepstock_charba_client_Type(/** Type */ extendedType) {
  this.$ctor__org_pepstock_charba_client_AbstractChart__org_pepstock_charba_client_Type(extendedType);
  this.f_options__org_pepstock_charba_client_LineChart_ = LineOptions.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(this, this.m_getDefaultChartOptions__());
 }
 /** @override @return {LineOptions} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_LineChart_;
 }
 /** @override @return {LineDataset} */
 m_newDataset__boolean(/** boolean */ hidden) {
  return LineDataset.$create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(this.m_getDefaultChartOptions__(), hidden);
 }
 //Default method forwarding stub.
 /** @override @return {LineDataset} */
 m_newDataset__() {
  return /**@type {LineDataset}*/ ($Casts.$to(IsDatasetCreator.m_newDataset__$default__org_pepstock_charba_client_IsDatasetCreator(this), LineDataset));
 }
 
 static $clinit() {
  LineChart.$clinit = () =>{};
  LineChart.$loadModules();
  AbstractChart.$clinit();
  IsDatasetCreator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LineChart;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  LineOptions = goog.module.get('org.pepstock.charba.client.configuration.LineOptions$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDatasetCreator.$markImplementor(LineChart);
$Util.$setClassMetadata(LineChart, "org.pepstock.charba.client.LineChart");

exports = LineChart;

//# sourceMappingURL=LineChart.js.map
