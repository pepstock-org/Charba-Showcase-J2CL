goog.module('org.pepstock.charba.client.data.PolarAreaDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasBorderAlign = goog.require('org.pepstock.charba.client.data.HasBorderAlign$impl');
const HovingDataset = goog.require('org.pepstock.charba.client.data.HovingDataset$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let BorderAlignCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderAlignCallback$impl');
let BorderAlignHandler = goog.forwardDeclare('org.pepstock.charba.client.data.BorderAlignHandler$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let BorderAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderAlign$impl');

/**
 * @implements {HasBorderAlign}
 */
class PolarAreaDataset extends HovingDataset {
 /** @protected */
 constructor() {
  super();
  /**@type {BorderAlignHandler}*/
  this.f_borderAlignHandler__org_pepstock_charba_client_data_PolarAreaDataset_;
 }
 //Factory method corresponding to constructor 'PolarAreaDataset()'.
 /** @return {!PolarAreaDataset} */
 static $create__() {
  PolarAreaDataset.$clinit();
  let $instance = new PolarAreaDataset();
  $instance.$ctor__org_pepstock_charba_client_data_PolarAreaDataset__();
  return $instance;
 }
 //Initialization from constructor 'PolarAreaDataset()'.
 
 $ctor__org_pepstock_charba_client_data_PolarAreaDataset__() {
  this.$ctor__org_pepstock_charba_client_data_PolarAreaDataset__boolean(Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'PolarAreaDataset(boolean)'.
 /** @return {!PolarAreaDataset} */
 static $create__boolean(/** boolean */ hidden) {
  PolarAreaDataset.$clinit();
  let $instance = new PolarAreaDataset();
  $instance.$ctor__org_pepstock_charba_client_data_PolarAreaDataset__boolean(hidden);
  return $instance;
 }
 //Initialization from constructor 'PolarAreaDataset(boolean)'.
 
 $ctor__org_pepstock_charba_client_data_PolarAreaDataset__boolean(/** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_PolarAreaDataset__org_pepstock_charba_client_Type__boolean(ChartType.f_POLAR_AREA__org_pepstock_charba_client_ChartType, hidden);
 }
 //Factory method corresponding to constructor 'PolarAreaDataset(IsDefaultOptions)'.
 /** @return {!PolarAreaDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  PolarAreaDataset.$clinit();
  let $instance = new PolarAreaDataset();
  $instance.$ctor__org_pepstock_charba_client_data_PolarAreaDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'PolarAreaDataset(IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_data_PolarAreaDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_data_PolarAreaDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'PolarAreaDataset(IsDefaultOptions, boolean)'.
 /** @return {!PolarAreaDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  PolarAreaDataset.$clinit();
  let $instance = new PolarAreaDataset();
  $instance.$ctor__org_pepstock_charba_client_data_PolarAreaDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'PolarAreaDataset(IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_PolarAreaDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_PolarAreaDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(ChartType.f_POLAR_AREA__org_pepstock_charba_client_ChartType, defaultValues, hidden);
 }
 //Factory method corresponding to constructor 'PolarAreaDataset(Type, boolean)'.
 /** @return {!PolarAreaDataset} */
 static $create__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  PolarAreaDataset.$clinit();
  let $instance = new PolarAreaDataset();
  $instance.$ctor__org_pepstock_charba_client_data_PolarAreaDataset__org_pepstock_charba_client_Type__boolean(type, hidden);
  return $instance;
 }
 //Initialization from constructor 'PolarAreaDataset(Type, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_PolarAreaDataset__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_PolarAreaDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, null, hidden);
 }
 //Factory method corresponding to constructor 'PolarAreaDataset(Type, IsDefaultOptions, boolean)'.
 /** @return {!PolarAreaDataset} */
 static $create__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  PolarAreaDataset.$clinit();
  let $instance = new PolarAreaDataset();
  $instance.$ctor__org_pepstock_charba_client_data_PolarAreaDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'PolarAreaDataset(Type, IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_PolarAreaDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_HovingDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  this.f_borderAlignHandler__org_pepstock_charba_client_data_PolarAreaDataset_ = BorderAlignHandler.$create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultOptions(this.m_getNativeObject__(), this.m_getDefaultValues__());
 }
 /** @override @return {BorderAlignHandler} */
 m_getBorderAlignHandler__() {
  return this.f_borderAlignHandler__org_pepstock_charba_client_data_PolarAreaDataset_;
 }
 //Default method forwarding stub.
 /** @override @return {List<BorderAlign>} */
 m_getBorderAlign__() {
  return HasBorderAlign.m_getBorderAlign__$default__org_pepstock_charba_client_data_HasBorderAlign(this);
 }
 //Default method forwarding stub.
 /** @override @return {BorderAlignCallback} */
 m_getBorderAlignCallback__() {
  return HasBorderAlign.m_getBorderAlignCallback__$default__org_pepstock_charba_client_data_HasBorderAlign(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBorderAlign__arrayOf_org_pepstock_charba_client_enums_BorderAlign(/** Array<BorderAlign> */ arg0) {
  HasBorderAlign.m_setBorderAlign__$default__org_pepstock_charba_client_data_HasBorderAlign__arrayOf_org_pepstock_charba_client_enums_BorderAlign(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBorderAlign__java_util_List(/** List<BorderAlign> */ arg0) {
  HasBorderAlign.m_setBorderAlign__$default__org_pepstock_charba_client_data_HasBorderAlign__java_util_List(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBorderAlign__org_pepstock_charba_client_callbacks_BorderAlignCallback(/** BorderAlignCallback */ arg0) {
  HasBorderAlign.m_setBorderAlign__$default__org_pepstock_charba_client_data_HasBorderAlign__org_pepstock_charba_client_callbacks_BorderAlignCallback(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBorderAlign__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ arg0) {
  HasBorderAlign.m_setBorderAlign__$default__org_pepstock_charba_client_data_HasBorderAlign__org_pepstock_charba_client_callbacks_NativeCallback(this, arg0);
 }
 
 static $clinit() {
  PolarAreaDataset.$clinit = () =>{};
  PolarAreaDataset.$loadModules();
  HovingDataset.$clinit();
  HasBorderAlign.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PolarAreaDataset;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  BorderAlignHandler = goog.module.get('org.pepstock.charba.client.data.BorderAlignHandler$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
 }
}
HasBorderAlign.$markImplementor(PolarAreaDataset);
$Util.$setClassMetadata(PolarAreaDataset, "org.pepstock.charba.client.data.PolarAreaDataset");

exports = PolarAreaDataset;

//# sourceMappingURL=PolarAreaDataset.js.map
