goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LineDataset = goog.require('org.pepstock.charba.client.data.LineDataset$impl');

let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let MyLineChart = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineChart$impl');

class MyLineDataset extends LineDataset {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!MyLineDataset} */
 static $create__() {
  MyLineDataset.$clinit();
  let $instance = new MyLineDataset();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineDataset__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineDataset__() {
  this.$ctor__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_Type__boolean(MyLineChart.f_TYPE__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineChart, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 
 static $clinit() {
  MyLineDataset.$clinit = () =>{};
  MyLineDataset.$loadModules();
  LineDataset.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MyLineDataset;
 }
 
 static $loadModules() {
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  MyLineChart = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineChart$impl');
 }
}
$Util.$setClassMetadata(MyLineDataset, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineDataset");

exports = MyLineDataset;

//# sourceMappingURL=MyLineDataset.js.map
