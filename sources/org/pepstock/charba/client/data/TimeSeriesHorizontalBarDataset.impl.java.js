goog.module('org.pepstock.charba.client.data.TimeSeriesHorizontalBarDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasBarStackGroup = goog.require('org.pepstock.charba.client.data.HasBarStackGroup$impl');
const HasTimeSeriesItems = goog.require('org.pepstock.charba.client.data.HasTimeSeriesItems$impl');
const HorizontalBarDataset = goog.require('org.pepstock.charba.client.data.HorizontalBarDataset$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let BarStackHandler = goog.forwardDeclare('org.pepstock.charba.client.data.BarStackHandler$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let TimeSeriesBarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.TimeSeriesBarDataset$impl');
let TimeSeriesItem = goog.forwardDeclare('org.pepstock.charba.client.data.TimeSeriesItem$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {HasTimeSeriesItems}
 * @implements {HasBarStackGroup}
 */
class TimeSeriesHorizontalBarDataset extends HorizontalBarDataset {
 /** @protected */
 constructor() {
  super();
  /**@type {BarStackHandler}*/
  this.f_barStackHandler__org_pepstock_charba_client_data_TimeSeriesHorizontalBarDataset_;
 }
 //Factory method corresponding to constructor 'TimeSeriesHorizontalBarDataset()'.
 /** @return {!TimeSeriesHorizontalBarDataset} */
 static $create__() {
  TimeSeriesHorizontalBarDataset.$clinit();
  let $instance = new TimeSeriesHorizontalBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_TimeSeriesHorizontalBarDataset__();
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesHorizontalBarDataset()'.
 
 $ctor__org_pepstock_charba_client_data_TimeSeriesHorizontalBarDataset__() {
  this.$ctor__org_pepstock_charba_client_data_TimeSeriesHorizontalBarDataset__boolean(Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'TimeSeriesHorizontalBarDataset(boolean)'.
 /** @return {!TimeSeriesHorizontalBarDataset} */
 static $create__boolean(/** boolean */ hidden) {
  TimeSeriesHorizontalBarDataset.$clinit();
  let $instance = new TimeSeriesHorizontalBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_TimeSeriesHorizontalBarDataset__boolean(hidden);
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesHorizontalBarDataset(boolean)'.
 
 $ctor__org_pepstock_charba_client_data_TimeSeriesHorizontalBarDataset__boolean(/** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_TimeSeriesHorizontalBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/**@type {IsDefaultOptions}*/ (null), hidden);
 }
 //Factory method corresponding to constructor 'TimeSeriesHorizontalBarDataset(IsDefaultOptions)'.
 /** @return {!TimeSeriesHorizontalBarDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  TimeSeriesHorizontalBarDataset.$clinit();
  let $instance = new TimeSeriesHorizontalBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_TimeSeriesHorizontalBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesHorizontalBarDataset(IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_data_TimeSeriesHorizontalBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_data_TimeSeriesHorizontalBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'TimeSeriesHorizontalBarDataset(IsDefaultOptions, boolean)'.
 /** @return {!TimeSeriesHorizontalBarDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  TimeSeriesHorizontalBarDataset.$clinit();
  let $instance = new TimeSeriesHorizontalBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_TimeSeriesHorizontalBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesHorizontalBarDataset(IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_TimeSeriesHorizontalBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_HorizontalBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
  this.f_barStackHandler__org_pepstock_charba_client_data_TimeSeriesHorizontalBarDataset_ = BarStackHandler.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getNativeObject__());
 }
 //Factory method corresponding to constructor 'TimeSeriesHorizontalBarDataset(Type, boolean)'.
 /** @return {!TimeSeriesHorizontalBarDataset} */
 static $create__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  TimeSeriesHorizontalBarDataset.$clinit();
  let $instance = new TimeSeriesHorizontalBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_TimeSeriesHorizontalBarDataset__org_pepstock_charba_client_Type__boolean(type, hidden);
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesHorizontalBarDataset(Type, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_TimeSeriesHorizontalBarDataset__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_TimeSeriesHorizontalBarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, null, hidden);
 }
 //Factory method corresponding to constructor 'TimeSeriesHorizontalBarDataset(Type, IsDefaultOptions, boolean)'.
 /** @return {!TimeSeriesHorizontalBarDataset} */
 static $create__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  TimeSeriesHorizontalBarDataset.$clinit();
  let $instance = new TimeSeriesHorizontalBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_TimeSeriesHorizontalBarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesHorizontalBarDataset(Type, IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_TimeSeriesHorizontalBarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_HorizontalBarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  this.f_barStackHandler__org_pepstock_charba_client_data_TimeSeriesHorizontalBarDataset_ = BarStackHandler.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getNativeObject__());
 }
 /** @override @return {BarStackHandler} */
 m_getBarStackHandler__() {
  return this.f_barStackHandler__org_pepstock_charba_client_data_TimeSeriesHorizontalBarDataset_;
 }
 /** @override */
 m_setData__arrayOf_double(/** Array<number> */ values) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TimeSeriesBarDataset.f_INVALID_DATA_CALL__org_pepstock_charba_client_data_TimeSeriesBarDataset));
 }
 /** @override */
 m_setData__java_util_List(/** List<?number> */ values) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TimeSeriesBarDataset.f_INVALID_DATA_CALL__org_pepstock_charba_client_data_TimeSeriesBarDataset));
 }
 /** @override @return {List<?number>} */
 m_getData__() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TimeSeriesBarDataset.f_INVALID_DATA_CALL__org_pepstock_charba_client_data_TimeSeriesBarDataset));
 }
 /** @override @return {List<?number>} */
 m_getData__boolean(/** boolean */ binding) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TimeSeriesBarDataset.f_INVALID_DATA_CALL__org_pepstock_charba_client_data_TimeSeriesBarDataset));
 }
 //Default method forwarding stub.
 /** @override */
 m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(/** Array<DataPoint> */ arg0) {
  HasTimeSeriesItems.m_setDataPoints__$default__org_pepstock_charba_client_data_HasTimeSeriesItems__arrayOf_org_pepstock_charba_client_data_DataPoint(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setDataPoints__java_util_List(/** List<DataPoint> */ arg0) {
  HasTimeSeriesItems.m_setDataPoints__$default__org_pepstock_charba_client_data_HasTimeSeriesItems__java_util_List(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {List<TimeSeriesItem>} */
 m_getTimeSeriesData__() {
  return HasTimeSeriesItems.m_getTimeSeriesData__$default__org_pepstock_charba_client_data_HasTimeSeriesItems(this);
 }
 //Default method forwarding stub.
 /** @override @return {List<TimeSeriesItem>} */
 m_getTimeSeriesData__boolean(/** boolean */ arg0) {
  return HasTimeSeriesItems.m_getTimeSeriesData__$default__org_pepstock_charba_client_data_HasTimeSeriesItems__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setTimeSeriesData__arrayOf_org_pepstock_charba_client_data_TimeSeriesItem(/** Array<TimeSeriesItem> */ arg0) {
  HasTimeSeriesItems.m_setTimeSeriesData__$default__org_pepstock_charba_client_data_HasTimeSeriesItems__arrayOf_org_pepstock_charba_client_data_TimeSeriesItem(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setTimeSeriesData__java_util_List(/** List<TimeSeriesItem> */ arg0) {
  HasTimeSeriesItems.m_setTimeSeriesData__$default__org_pepstock_charba_client_data_HasTimeSeriesItems__java_util_List(this, arg0);
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
  TimeSeriesHorizontalBarDataset.$clinit = () =>{};
  TimeSeriesHorizontalBarDataset.$loadModules();
  HorizontalBarDataset.$clinit();
  HasTimeSeriesItems.$clinit();
  HasBarStackGroup.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TimeSeriesHorizontalBarDataset;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  BarStackHandler = goog.module.get('org.pepstock.charba.client.data.BarStackHandler$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  TimeSeriesBarDataset = goog.module.get('org.pepstock.charba.client.data.TimeSeriesBarDataset$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
HasTimeSeriesItems.$markImplementor(TimeSeriesHorizontalBarDataset);
HasBarStackGroup.$markImplementor(TimeSeriesHorizontalBarDataset);
$Util.$setClassMetadata(TimeSeriesHorizontalBarDataset, "org.pepstock.charba.client.data.TimeSeriesHorizontalBarDataset");

exports = TimeSeriesHorizontalBarDataset;

//# sourceMappingURL=TimeSeriesHorizontalBarDataset.js.map
