goog.module('org.pepstock.charba.client.data.RadarDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LiningDataset = goog.require('org.pepstock.charba.client.data.LiningDataset$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');

class RadarDataset extends LiningDataset {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'RadarDataset()'.
 /** @return {!RadarDataset} */
 static $create__() {
  RadarDataset.$clinit();
  let $instance = new RadarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_RadarDataset__();
  return $instance;
 }
 //Initialization from constructor 'RadarDataset()'.
 
 $ctor__org_pepstock_charba_client_data_RadarDataset__() {
  this.$ctor__org_pepstock_charba_client_data_RadarDataset__boolean(Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'RadarDataset(boolean)'.
 /** @return {!RadarDataset} */
 static $create__boolean(/** boolean */ hidden) {
  RadarDataset.$clinit();
  let $instance = new RadarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_RadarDataset__boolean(hidden);
  return $instance;
 }
 //Initialization from constructor 'RadarDataset(boolean)'.
 
 $ctor__org_pepstock_charba_client_data_RadarDataset__boolean(/** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_RadarDataset__org_pepstock_charba_client_Type__boolean(ChartType.f_RADAR__org_pepstock_charba_client_ChartType, hidden);
 }
 //Factory method corresponding to constructor 'RadarDataset(IsDefaultOptions)'.
 /** @return {!RadarDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  RadarDataset.$clinit();
  let $instance = new RadarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_RadarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'RadarDataset(IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_data_RadarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_data_RadarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'RadarDataset(IsDefaultOptions, boolean)'.
 /** @return {!RadarDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  RadarDataset.$clinit();
  let $instance = new RadarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_RadarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'RadarDataset(IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_RadarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_RadarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(ChartType.f_RADAR__org_pepstock_charba_client_ChartType, defaultValues, hidden);
 }
 //Factory method corresponding to constructor 'RadarDataset(Type, boolean)'.
 /** @return {!RadarDataset} */
 static $create__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  RadarDataset.$clinit();
  let $instance = new RadarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_RadarDataset__org_pepstock_charba_client_Type__boolean(type, hidden);
  return $instance;
 }
 //Initialization from constructor 'RadarDataset(Type, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_RadarDataset__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_RadarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, null, hidden);
 }
 //Factory method corresponding to constructor 'RadarDataset(Type, IsDefaultOptions, boolean)'.
 /** @return {!RadarDataset} */
 static $create__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  RadarDataset.$clinit();
  let $instance = new RadarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_RadarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'RadarDataset(Type, IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_RadarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_LiningDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
 }
 
 static $clinit() {
  RadarDataset.$clinit = () =>{};
  RadarDataset.$loadModules();
  LiningDataset.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RadarDataset;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
 }
}
$Util.$setClassMetadata(RadarDataset, "org.pepstock.charba.client.data.RadarDataset");

exports = RadarDataset;

//# sourceMappingURL=RadarDataset.js.map
