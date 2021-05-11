goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyHorizontalBarDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HorizontalBarDataset = goog.require('org.pepstock.charba.client.data.HorizontalBarDataset$impl');

let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let MyHorizontalBarController = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyHorizontalBarController$impl');

class MyHorizontalBarDataset extends HorizontalBarDataset {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!MyHorizontalBarDataset} */
 static $create__() {
  MyHorizontalBarDataset.$clinit();
  let $instance = new MyHorizontalBarDataset();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarDataset__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarDataset__() {
  this.$ctor__org_pepstock_charba_client_data_HorizontalBarDataset__org_pepstock_charba_client_Type__boolean(MyHorizontalBarController.f_TYPE__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyHorizontalBarController, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 
 static $clinit() {
  MyHorizontalBarDataset.$clinit = () =>{};
  MyHorizontalBarDataset.$loadModules();
  HorizontalBarDataset.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MyHorizontalBarDataset;
 }
 
 static $loadModules() {
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  MyHorizontalBarController = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyHorizontalBarController$impl');
 }
}
$Util.$setClassMetadata(MyHorizontalBarDataset, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyHorizontalBarDataset");

exports = MyHorizontalBarDataset;

//# sourceMappingURL=MyHorizontalBarDataset.js.map
