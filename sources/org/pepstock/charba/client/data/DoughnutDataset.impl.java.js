goog.module('org.pepstock.charba.client.data.DoughnutDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PieDataset = goog.require('org.pepstock.charba.client.data.PieDataset$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');

class DoughnutDataset extends PieDataset {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'DoughnutDataset()'.
 /** @return {!DoughnutDataset} */
 static $create__() {
  DoughnutDataset.$clinit();
  let $instance = new DoughnutDataset();
  $instance.$ctor__org_pepstock_charba_client_data_DoughnutDataset__();
  return $instance;
 }
 //Initialization from constructor 'DoughnutDataset()'.
 
 $ctor__org_pepstock_charba_client_data_DoughnutDataset__() {
  this.$ctor__org_pepstock_charba_client_data_DoughnutDataset__boolean(Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'DoughnutDataset(boolean)'.
 /** @return {!DoughnutDataset} */
 static $create__boolean(/** boolean */ hidden) {
  DoughnutDataset.$clinit();
  let $instance = new DoughnutDataset();
  $instance.$ctor__org_pepstock_charba_client_data_DoughnutDataset__boolean(hidden);
  return $instance;
 }
 //Initialization from constructor 'DoughnutDataset(boolean)'.
 
 $ctor__org_pepstock_charba_client_data_DoughnutDataset__boolean(/** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_DoughnutDataset__org_pepstock_charba_client_Type__boolean(ChartType.f_DOUGHNUT__org_pepstock_charba_client_ChartType, hidden);
 }
 //Factory method corresponding to constructor 'DoughnutDataset(IsDefaultOptions)'.
 /** @return {!DoughnutDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  DoughnutDataset.$clinit();
  let $instance = new DoughnutDataset();
  $instance.$ctor__org_pepstock_charba_client_data_DoughnutDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'DoughnutDataset(IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_data_DoughnutDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_data_DoughnutDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'DoughnutDataset(IsDefaultOptions, boolean)'.
 /** @return {!DoughnutDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  DoughnutDataset.$clinit();
  let $instance = new DoughnutDataset();
  $instance.$ctor__org_pepstock_charba_client_data_DoughnutDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'DoughnutDataset(IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_DoughnutDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_DoughnutDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(ChartType.f_DOUGHNUT__org_pepstock_charba_client_ChartType, defaultValues, hidden);
 }
 //Factory method corresponding to constructor 'DoughnutDataset(Type, boolean)'.
 /** @return {!DoughnutDataset} */
 static $create__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  DoughnutDataset.$clinit();
  let $instance = new DoughnutDataset();
  $instance.$ctor__org_pepstock_charba_client_data_DoughnutDataset__org_pepstock_charba_client_Type__boolean(type, hidden);
  return $instance;
 }
 //Initialization from constructor 'DoughnutDataset(Type, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_DoughnutDataset__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_DoughnutDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, null, hidden);
 }
 //Factory method corresponding to constructor 'DoughnutDataset(Type, IsDefaultOptions, boolean)'.
 /** @return {!DoughnutDataset} */
 static $create__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  DoughnutDataset.$clinit();
  let $instance = new DoughnutDataset();
  $instance.$ctor__org_pepstock_charba_client_data_DoughnutDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'DoughnutDataset(Type, IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_DoughnutDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_PieDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
 }
 
 static $clinit() {
  DoughnutDataset.$clinit = () =>{};
  DoughnutDataset.$loadModules();
  PieDataset.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DoughnutDataset;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
 }
}
$Util.$setClassMetadata(DoughnutDataset, "org.pepstock.charba.client.data.DoughnutDataset");

exports = DoughnutDataset;

//# sourceMappingURL=DoughnutDataset.js.map
