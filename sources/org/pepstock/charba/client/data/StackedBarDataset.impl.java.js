goog.module('org.pepstock.charba.client.data.StackedBarDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BarDataset = goog.require('org.pepstock.charba.client.data.BarDataset$impl');
const HasBarStackGroup = goog.require('org.pepstock.charba.client.data.HasBarStackGroup$impl');

let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let BarStackHandler = goog.forwardDeclare('org.pepstock.charba.client.data.BarStackHandler$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');

/**
 * @implements {HasBarStackGroup}
 */
class StackedBarDataset extends BarDataset {
 /** @protected */
 constructor() {
  super();
  /**@type {BarStackHandler}*/
  this.f_barStackHandler__org_pepstock_charba_client_data_StackedBarDataset_;
 }
 //Factory method corresponding to constructor 'StackedBarDataset()'.
 /** @return {!StackedBarDataset} */
 static $create__() {
  StackedBarDataset.$clinit();
  let $instance = new StackedBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_StackedBarDataset__();
  return $instance;
 }
 //Initialization from constructor 'StackedBarDataset()'.
 
 $ctor__org_pepstock_charba_client_data_StackedBarDataset__() {
  this.$ctor__org_pepstock_charba_client_data_StackedBarDataset__boolean(Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'StackedBarDataset(boolean)'.
 /** @return {!StackedBarDataset} */
 static $create__boolean(/** boolean */ hidden) {
  StackedBarDataset.$clinit();
  let $instance = new StackedBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_StackedBarDataset__boolean(hidden);
  return $instance;
 }
 //Initialization from constructor 'StackedBarDataset(boolean)'.
 
 $ctor__org_pepstock_charba_client_data_StackedBarDataset__boolean(/** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_StackedBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/**@type {IsDefaultOptions}*/ (null), hidden);
 }
 //Factory method corresponding to constructor 'StackedBarDataset(IsDefaultOptions)'.
 /** @return {!StackedBarDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  StackedBarDataset.$clinit();
  let $instance = new StackedBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_StackedBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'StackedBarDataset(IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_data_StackedBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_data_StackedBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'StackedBarDataset(IsDefaultOptions, boolean)'.
 /** @return {!StackedBarDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  StackedBarDataset.$clinit();
  let $instance = new StackedBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_StackedBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'StackedBarDataset(IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_StackedBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
  this.f_barStackHandler__org_pepstock_charba_client_data_StackedBarDataset_ = BarStackHandler.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getNativeObject__());
 }
 //Factory method corresponding to constructor 'StackedBarDataset(Type, boolean)'.
 /** @return {!StackedBarDataset} */
 static $create__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  StackedBarDataset.$clinit();
  let $instance = new StackedBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_StackedBarDataset__org_pepstock_charba_client_Type__boolean(type, hidden);
  return $instance;
 }
 //Initialization from constructor 'StackedBarDataset(Type, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_StackedBarDataset__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_StackedBarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, null, hidden);
 }
 //Factory method corresponding to constructor 'StackedBarDataset(Type, IsDefaultOptions, boolean)'.
 /** @return {!StackedBarDataset} */
 static $create__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  StackedBarDataset.$clinit();
  let $instance = new StackedBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_StackedBarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'StackedBarDataset(Type, IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_StackedBarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  this.f_barStackHandler__org_pepstock_charba_client_data_StackedBarDataset_ = BarStackHandler.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getNativeObject__());
 }
 /** @override @return {BarStackHandler} */
 m_getBarStackHandler__() {
  return this.f_barStackHandler__org_pepstock_charba_client_data_StackedBarDataset_;
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getStackGroup__() {
  return HasBarStackGroup.m_getStackGroup__$default__org_pepstock_charba_client_data_HasBarStackGroup(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setStackGroup__java_lang_String(/** ?string */ arg0) {
  HasBarStackGroup.m_setStackGroup__$default__org_pepstock_charba_client_data_HasBarStackGroup__java_lang_String(this, arg0);
 }
 
 static $clinit() {
  StackedBarDataset.$clinit = () =>{};
  StackedBarDataset.$loadModules();
  BarDataset.$clinit();
  HasBarStackGroup.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StackedBarDataset;
 }
 
 static $loadModules() {
  BarStackHandler = goog.module.get('org.pepstock.charba.client.data.BarStackHandler$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
 }
}
HasBarStackGroup.$markImplementor(StackedBarDataset);
$Util.$setClassMetadata(StackedBarDataset, "org.pepstock.charba.client.data.StackedBarDataset");

exports = StackedBarDataset;

//# sourceMappingURL=StackedBarDataset.js.map
