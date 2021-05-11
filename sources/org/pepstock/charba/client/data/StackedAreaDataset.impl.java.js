goog.module('org.pepstock.charba.client.data.StackedAreaDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LineDataset = goog.require('org.pepstock.charba.client.data.LineDataset$impl');

let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');

class StackedAreaDataset extends LineDataset {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'StackedAreaDataset()'.
 /** @return {!StackedAreaDataset} */
 static $create__() {
  StackedAreaDataset.$clinit();
  let $instance = new StackedAreaDataset();
  $instance.$ctor__org_pepstock_charba_client_data_StackedAreaDataset__();
  return $instance;
 }
 //Initialization from constructor 'StackedAreaDataset()'.
 
 $ctor__org_pepstock_charba_client_data_StackedAreaDataset__() {
  this.$ctor__org_pepstock_charba_client_data_StackedAreaDataset__boolean(Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'StackedAreaDataset(boolean)'.
 /** @return {!StackedAreaDataset} */
 static $create__boolean(/** boolean */ hidden) {
  StackedAreaDataset.$clinit();
  let $instance = new StackedAreaDataset();
  $instance.$ctor__org_pepstock_charba_client_data_StackedAreaDataset__boolean(hidden);
  return $instance;
 }
 //Initialization from constructor 'StackedAreaDataset(boolean)'.
 
 $ctor__org_pepstock_charba_client_data_StackedAreaDataset__boolean(/** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_StackedAreaDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/**@type {IsDefaultOptions}*/ (null), hidden);
 }
 //Factory method corresponding to constructor 'StackedAreaDataset(IsDefaultOptions)'.
 /** @return {!StackedAreaDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  StackedAreaDataset.$clinit();
  let $instance = new StackedAreaDataset();
  $instance.$ctor__org_pepstock_charba_client_data_StackedAreaDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'StackedAreaDataset(IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_data_StackedAreaDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_data_StackedAreaDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'StackedAreaDataset(IsDefaultOptions, boolean)'.
 /** @return {!StackedAreaDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  StackedAreaDataset.$clinit();
  let $instance = new StackedAreaDataset();
  $instance.$ctor__org_pepstock_charba_client_data_StackedAreaDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'StackedAreaDataset(IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_StackedAreaDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
 }
 //Factory method corresponding to constructor 'StackedAreaDataset(Type, boolean)'.
 /** @return {!StackedAreaDataset} */
 static $create__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  StackedAreaDataset.$clinit();
  let $instance = new StackedAreaDataset();
  $instance.$ctor__org_pepstock_charba_client_data_StackedAreaDataset__org_pepstock_charba_client_Type__boolean(type, hidden);
  return $instance;
 }
 //Initialization from constructor 'StackedAreaDataset(Type, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_StackedAreaDataset__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_StackedAreaDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, null, hidden);
 }
 //Factory method corresponding to constructor 'StackedAreaDataset(Type, IsDefaultOptions, boolean)'.
 /** @return {!StackedAreaDataset} */
 static $create__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  StackedAreaDataset.$clinit();
  let $instance = new StackedAreaDataset();
  $instance.$ctor__org_pepstock_charba_client_data_StackedAreaDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'StackedAreaDataset(Type, IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_StackedAreaDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
 }
 
 static $clinit() {
  StackedAreaDataset.$clinit = () =>{};
  StackedAreaDataset.$loadModules();
  LineDataset.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StackedAreaDataset;
 }
 
 static $loadModules() {
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
 }
}
$Util.$setClassMetadata(StackedAreaDataset, "org.pepstock.charba.client.data.StackedAreaDataset");

exports = StackedAreaDataset;

//# sourceMappingURL=StackedAreaDataset.js.map
