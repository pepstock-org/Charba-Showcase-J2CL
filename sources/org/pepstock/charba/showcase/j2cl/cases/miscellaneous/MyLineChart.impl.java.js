goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LineChart = goog.require('org.pepstock.charba.client.LineChart$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineChart.$1$impl');
let MyLineDataset = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineDataset$impl');

class MyLineChart extends LineChart {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!MyLineChart} */
 static $create__() {
  MyLineChart.$clinit();
  let $instance = new MyLineChart();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineChart__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineChart__() {
  this.$ctor__org_pepstock_charba_client_LineChart__org_pepstock_charba_client_Type(MyLineChart.$static_TYPE__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineChart);
 }
 /** @override @return {MyLineDataset} */
 m_newDataset__() {
  return this.m_newDataset__boolean(false);
 }
 /** @override @return {MyLineDataset} */
 m_newDataset__boolean(/** boolean */ hidden) {
  return MyLineDataset.$create__();
 }
 /** @return {ControllerType} */
 static get f_TYPE__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineChart() {
  return (MyLineChart.$clinit(), MyLineChart.$static_TYPE__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineChart);
 }
 
 static $clinit() {
  MyLineChart.$clinit = () =>{};
  MyLineChart.$loadModules();
  LineChart.$clinit();
  MyLineChart.$static_TYPE__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineChart = ControllerType.$create__java_lang_String__org_pepstock_charba_client_Type__org_pepstock_charba_client_controllers_ControllerProvider("stock", ChartType.f_LINE__org_pepstock_charba_client_ChartType, $1.$create__());
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MyLineChart;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  ControllerType = goog.module.get('org.pepstock.charba.client.controllers.ControllerType$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineChart.$1$impl');
  MyLineDataset = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineDataset$impl');
 }
}
/**@private {ControllerType}*/
MyLineChart.$static_TYPE__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineChart;
$Util.$setClassMetadata(MyLineChart, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineChart");

exports = MyLineChart;

//# sourceMappingURL=MyLineChart.js.map
