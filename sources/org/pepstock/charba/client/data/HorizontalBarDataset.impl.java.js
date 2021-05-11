goog.module('org.pepstock.charba.client.data.HorizontalBarDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BarDataset = goog.require('org.pepstock.charba.client.data.BarDataset$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let IndexAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.IndexAxis$impl');

class HorizontalBarDataset extends BarDataset {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'HorizontalBarDataset()'.
 /** @return {!HorizontalBarDataset} */
 static $create__() {
  HorizontalBarDataset.$clinit();
  let $instance = new HorizontalBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_HorizontalBarDataset__();
  return $instance;
 }
 //Initialization from constructor 'HorizontalBarDataset()'.
 
 $ctor__org_pepstock_charba_client_data_HorizontalBarDataset__() {
  this.$ctor__org_pepstock_charba_client_data_HorizontalBarDataset__boolean(Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'HorizontalBarDataset(boolean)'.
 /** @return {!HorizontalBarDataset} */
 static $create__boolean(/** boolean */ hidden) {
  HorizontalBarDataset.$clinit();
  let $instance = new HorizontalBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_HorizontalBarDataset__boolean(hidden);
  return $instance;
 }
 //Initialization from constructor 'HorizontalBarDataset(boolean)'.
 
 $ctor__org_pepstock_charba_client_data_HorizontalBarDataset__boolean(/** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_HorizontalBarDataset__org_pepstock_charba_client_Type__boolean(ChartType.f_BAR__org_pepstock_charba_client_ChartType, hidden);
 }
 //Factory method corresponding to constructor 'HorizontalBarDataset(IsDefaultOptions)'.
 /** @return {!HorizontalBarDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  HorizontalBarDataset.$clinit();
  let $instance = new HorizontalBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_HorizontalBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'HorizontalBarDataset(IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_data_HorizontalBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_data_HorizontalBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'HorizontalBarDataset(IsDefaultOptions, boolean)'.
 /** @return {!HorizontalBarDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  HorizontalBarDataset.$clinit();
  let $instance = new HorizontalBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_HorizontalBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'HorizontalBarDataset(IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_HorizontalBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_HorizontalBarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(ChartType.f_BAR__org_pepstock_charba_client_ChartType, defaultValues, hidden);
 }
 //Factory method corresponding to constructor 'HorizontalBarDataset(Type, boolean)'.
 /** @return {!HorizontalBarDataset} */
 static $create__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  HorizontalBarDataset.$clinit();
  let $instance = new HorizontalBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_HorizontalBarDataset__org_pepstock_charba_client_Type__boolean(type, hidden);
  return $instance;
 }
 //Initialization from constructor 'HorizontalBarDataset(Type, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_HorizontalBarDataset__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_HorizontalBarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, null, hidden);
 }
 //Factory method corresponding to constructor 'HorizontalBarDataset(Type, IsDefaultOptions, boolean)'.
 /** @return {!HorizontalBarDataset} */
 static $create__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  HorizontalBarDataset.$clinit();
  let $instance = new HorizontalBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_HorizontalBarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'HorizontalBarDataset(Type, IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_HorizontalBarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  super.m_setIndexAxis__org_pepstock_charba_client_enums_IndexAxis(IndexAxis.f_Y__org_pepstock_charba_client_enums_IndexAxis);
 }
 /** @override */
 m_setIndexAxis__org_pepstock_charba_client_enums_IndexAxis(/** IndexAxis */ indexAxis) {
  super.m_setIndexAxis__org_pepstock_charba_client_enums_IndexAxis(IndexAxis.f_Y__org_pepstock_charba_client_enums_IndexAxis);
 }
 
 static $clinit() {
  HorizontalBarDataset.$clinit = () =>{};
  HorizontalBarDataset.$loadModules();
  BarDataset.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HorizontalBarDataset;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  IndexAxis = goog.module.get('org.pepstock.charba.client.enums.IndexAxis$impl');
 }
}
$Util.$setClassMetadata(HorizontalBarDataset, "org.pepstock.charba.client.data.HorizontalBarDataset");

exports = HorizontalBarDataset;

//# sourceMappingURL=HorizontalBarDataset.js.map
