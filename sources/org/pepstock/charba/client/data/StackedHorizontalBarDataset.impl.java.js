goog.module('org.pepstock.charba.client.data.StackedHorizontalBarDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasBarStackGroup = goog.require('org.pepstock.charba.client.data.HasBarStackGroup$impl');
const HorizontalBarDataset = goog.require('org.pepstock.charba.client.data.HorizontalBarDataset$impl');

let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let BarStackHandler = goog.forwardDeclare('org.pepstock.charba.client.data.BarStackHandler$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');

/**
 * @implements {HasBarStackGroup}
 */
class StackedHorizontalBarDataset extends HorizontalBarDataset {
 /** @protected */
 constructor() {
  super();
  /**@type {BarStackHandler}*/
  this.f_barStackHandler__org_pepstock_charba_client_data_StackedHorizontalBarDataset_;
 }
 //Factory method corresponding to constructor 'StackedHorizontalBarDataset()'.
 /** @return {!StackedHorizontalBarDataset} */
 static $create__() {
  StackedHorizontalBarDataset.$clinit();
  let $instance = new StackedHorizontalBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_StackedHorizontalBarDataset__();
  return $instance;
 }
 //Initialization from constructor 'StackedHorizontalBarDataset()'.
 
 $ctor__org_pepstock_charba_client_data_StackedHorizontalBarDataset__() {
  this.$ctor__org_pepstock_charba_client_data_StackedHorizontalBarDataset__boolean(Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'StackedHorizontalBarDataset(boolean)'.
 /** @return {!StackedHorizontalBarDataset} */
 static $create__boolean(/** boolean */ hidden) {
  StackedHorizontalBarDataset.$clinit();
  let $instance = new StackedHorizontalBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_StackedHorizontalBarDataset__boolean(hidden);
  return $instance;
 }
 //Initialization from constructor 'StackedHorizontalBarDataset(boolean)'.
 
 $ctor__org_pepstock_charba_client_data_StackedHorizontalBarDataset__boolean(/** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_StackedHorizontalBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/**@type {IsDefaultOptions}*/ (null), hidden);
 }
 //Factory method corresponding to constructor 'StackedHorizontalBarDataset(IsDefaultOptions)'.
 /** @return {!StackedHorizontalBarDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  StackedHorizontalBarDataset.$clinit();
  let $instance = new StackedHorizontalBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_StackedHorizontalBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'StackedHorizontalBarDataset(IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_data_StackedHorizontalBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_data_StackedHorizontalBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'StackedHorizontalBarDataset(IsDefaultOptions, boolean)'.
 /** @return {!StackedHorizontalBarDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  StackedHorizontalBarDataset.$clinit();
  let $instance = new StackedHorizontalBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_StackedHorizontalBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'StackedHorizontalBarDataset(IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_StackedHorizontalBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_HorizontalBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
  this.f_barStackHandler__org_pepstock_charba_client_data_StackedHorizontalBarDataset_ = BarStackHandler.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getNativeObject__());
 }
 //Factory method corresponding to constructor 'StackedHorizontalBarDataset(Type, boolean)'.
 /** @return {!StackedHorizontalBarDataset} */
 static $create__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  StackedHorizontalBarDataset.$clinit();
  let $instance = new StackedHorizontalBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_StackedHorizontalBarDataset__org_pepstock_charba_client_Type__boolean(type, hidden);
  return $instance;
 }
 //Initialization from constructor 'StackedHorizontalBarDataset(Type, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_StackedHorizontalBarDataset__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_StackedHorizontalBarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, null, hidden);
 }
 //Factory method corresponding to constructor 'StackedHorizontalBarDataset(Type, IsDefaultOptions, boolean)'.
 /** @return {!StackedHorizontalBarDataset} */
 static $create__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  StackedHorizontalBarDataset.$clinit();
  let $instance = new StackedHorizontalBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_StackedHorizontalBarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'StackedHorizontalBarDataset(Type, IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_StackedHorizontalBarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_HorizontalBarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  this.f_barStackHandler__org_pepstock_charba_client_data_StackedHorizontalBarDataset_ = BarStackHandler.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getNativeObject__());
 }
 /** @override @return {BarStackHandler} */
 m_getBarStackHandler__() {
  return this.f_barStackHandler__org_pepstock_charba_client_data_StackedHorizontalBarDataset_;
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
  StackedHorizontalBarDataset.$clinit = () =>{};
  StackedHorizontalBarDataset.$loadModules();
  HorizontalBarDataset.$clinit();
  HasBarStackGroup.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StackedHorizontalBarDataset;
 }
 
 static $loadModules() {
  BarStackHandler = goog.module.get('org.pepstock.charba.client.data.BarStackHandler$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
 }
}
HasBarStackGroup.$markImplementor(StackedHorizontalBarDataset);
$Util.$setClassMetadata(StackedHorizontalBarDataset, "org.pepstock.charba.client.data.StackedHorizontalBarDataset");

exports = StackedHorizontalBarDataset;

//# sourceMappingURL=StackedHorizontalBarDataset.js.map
