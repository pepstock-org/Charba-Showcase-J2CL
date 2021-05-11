goog.module('org.pepstock.charba.client.data.VerticalLineDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LineDataset = goog.require('org.pepstock.charba.client.data.LineDataset$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let IndexAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.IndexAxis$impl');

class VerticalLineDataset extends LineDataset {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'VerticalLineDataset()'.
 /** @return {!VerticalLineDataset} */
 static $create__() {
  VerticalLineDataset.$clinit();
  let $instance = new VerticalLineDataset();
  $instance.$ctor__org_pepstock_charba_client_data_VerticalLineDataset__();
  return $instance;
 }
 //Initialization from constructor 'VerticalLineDataset()'.
 
 $ctor__org_pepstock_charba_client_data_VerticalLineDataset__() {
  this.$ctor__org_pepstock_charba_client_data_VerticalLineDataset__boolean(Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'VerticalLineDataset(boolean)'.
 /** @return {!VerticalLineDataset} */
 static $create__boolean(/** boolean */ hidden) {
  VerticalLineDataset.$clinit();
  let $instance = new VerticalLineDataset();
  $instance.$ctor__org_pepstock_charba_client_data_VerticalLineDataset__boolean(hidden);
  return $instance;
 }
 //Initialization from constructor 'VerticalLineDataset(boolean)'.
 
 $ctor__org_pepstock_charba_client_data_VerticalLineDataset__boolean(/** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_VerticalLineDataset__org_pepstock_charba_client_Type__boolean(ChartType.f_LINE__org_pepstock_charba_client_ChartType, hidden);
 }
 //Factory method corresponding to constructor 'VerticalLineDataset(IsDefaultOptions)'.
 /** @return {!VerticalLineDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  VerticalLineDataset.$clinit();
  let $instance = new VerticalLineDataset();
  $instance.$ctor__org_pepstock_charba_client_data_VerticalLineDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'VerticalLineDataset(IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_data_VerticalLineDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_data_VerticalLineDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'VerticalLineDataset(IsDefaultOptions, boolean)'.
 /** @return {!VerticalLineDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  VerticalLineDataset.$clinit();
  let $instance = new VerticalLineDataset();
  $instance.$ctor__org_pepstock_charba_client_data_VerticalLineDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'VerticalLineDataset(IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_VerticalLineDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_VerticalLineDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(ChartType.f_LINE__org_pepstock_charba_client_ChartType, defaultValues, hidden);
 }
 //Factory method corresponding to constructor 'VerticalLineDataset(Type, boolean)'.
 /** @return {!VerticalLineDataset} */
 static $create__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  VerticalLineDataset.$clinit();
  let $instance = new VerticalLineDataset();
  $instance.$ctor__org_pepstock_charba_client_data_VerticalLineDataset__org_pepstock_charba_client_Type__boolean(type, hidden);
  return $instance;
 }
 //Initialization from constructor 'VerticalLineDataset(Type, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_VerticalLineDataset__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_VerticalLineDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, null, hidden);
 }
 //Factory method corresponding to constructor 'VerticalLineDataset(Type, IsDefaultOptions, boolean)'.
 /** @return {!VerticalLineDataset} */
 static $create__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  VerticalLineDataset.$clinit();
  let $instance = new VerticalLineDataset();
  $instance.$ctor__org_pepstock_charba_client_data_VerticalLineDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'VerticalLineDataset(Type, IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_VerticalLineDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  super.m_setIndexAxis__org_pepstock_charba_client_enums_IndexAxis(IndexAxis.f_Y__org_pepstock_charba_client_enums_IndexAxis);
 }
 /** @override */
 m_setIndexAxis__org_pepstock_charba_client_enums_IndexAxis(/** IndexAxis */ indexAxis) {
  super.m_setIndexAxis__org_pepstock_charba_client_enums_IndexAxis(IndexAxis.f_Y__org_pepstock_charba_client_enums_IndexAxis);
 }
 
 static $clinit() {
  VerticalLineDataset.$clinit = () =>{};
  VerticalLineDataset.$loadModules();
  LineDataset.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof VerticalLineDataset;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  IndexAxis = goog.module.get('org.pepstock.charba.client.enums.IndexAxis$impl');
 }
}
$Util.$setClassMetadata(VerticalLineDataset, "org.pepstock.charba.client.data.VerticalLineDataset");

exports = VerticalLineDataset;

//# sourceMappingURL=VerticalLineDataset.js.map
