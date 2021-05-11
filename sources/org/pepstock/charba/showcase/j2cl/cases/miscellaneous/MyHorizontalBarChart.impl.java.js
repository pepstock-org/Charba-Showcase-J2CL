goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyHorizontalBarChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HorizontalBarChart = goog.require('org.pepstock.charba.client.HorizontalBarChart$impl');

let MyHorizontalBarController = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyHorizontalBarController$impl');
let MyHorizontalBarDataset = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyHorizontalBarDataset$impl');

class MyHorizontalBarChart extends HorizontalBarChart {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!MyHorizontalBarChart} */
 static $create__() {
  MyHorizontalBarChart.$clinit();
  let $instance = new MyHorizontalBarChart();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarChart__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarChart__() {
  this.$ctor__org_pepstock_charba_client_HorizontalBarChart__org_pepstock_charba_client_Type(MyHorizontalBarController.f_TYPE__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController);
 }
 /** @override @return {MyHorizontalBarDataset} */
 m_newDataset__() {
  return MyHorizontalBarDataset.$create__();
 }
 /** @override @return {MyHorizontalBarDataset} */
 m_newDataset__boolean(/** boolean */ hidden) {
  return MyHorizontalBarDataset.$create__();
 }
 
 static $clinit() {
  MyHorizontalBarChart.$clinit = () =>{};
  MyHorizontalBarChart.$loadModules();
  HorizontalBarChart.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MyHorizontalBarChart;
 }
 
 static $loadModules() {
  MyHorizontalBarController = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyHorizontalBarController$impl');
  MyHorizontalBarDataset = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyHorizontalBarDataset$impl');
 }
}
$Util.$setClassMetadata(MyHorizontalBarChart, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyHorizontalBarChart");

exports = MyHorizontalBarChart;

//# sourceMappingURL=MyHorizontalBarChart.js.map
