goog.module('org.pepstock.charba.client.data.TimeSeriesBarDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BarDataset = goog.require('org.pepstock.charba.client.data.BarDataset$impl');
const HasBarStackGroup = goog.require('org.pepstock.charba.client.data.HasBarStackGroup$impl');
const HasTimeSeriesItems = goog.require('org.pepstock.charba.client.data.HasTimeSeriesItems$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let BarStackHandler = goog.forwardDeclare('org.pepstock.charba.client.data.BarStackHandler$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let TimeSeriesItem = goog.forwardDeclare('org.pepstock.charba.client.data.TimeSeriesItem$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {HasTimeSeriesItems}
 * @implements {HasBarStackGroup}
 */
class TimeSeriesBarDataset extends BarDataset {
 /** @protected */
 constructor() {
  super();
  /**@type {BarStackHandler}*/
  this.f_barStackHandler__org_pepstock_charba_client_data_TimeSeriesBarDataset_;
 }
 //Factory method corresponding to constructor 'TimeSeriesBarDataset()'.
 /** @return {!TimeSeriesBarDataset} */
 static $create__() {
  TimeSeriesBarDataset.$clinit();
  let $instance = new TimeSeriesBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_TimeSeriesBarDataset__();
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesBarDataset()'.
 
 $ctor__org_pepstock_charba_client_data_TimeSeriesBarDataset__() {
  this.$ctor__org_pepstock_charba_client_data_TimeSeriesBarDataset__boolean(Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'TimeSeriesBarDataset(boolean)'.
 /** @return {!TimeSeriesBarDataset} */
 static $create__boolean(/** boolean */ hidden) {
  TimeSeriesBarDataset.$clinit();
  let $instance = new TimeSeriesBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_TimeSeriesBarDataset__boolean(hidden);
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesBarDataset(boolean)'.
 
 $ctor__org_pepstock_charba_client_data_TimeSeriesBarDataset__boolean(/** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_TimeSeriesBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/**@type {IsDefaultOptions}*/ (null), hidden);
 }
 //Factory method corresponding to constructor 'TimeSeriesBarDataset(IsDefaultOptions)'.
 /** @return {!TimeSeriesBarDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  TimeSeriesBarDataset.$clinit();
  let $instance = new TimeSeriesBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_TimeSeriesBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesBarDataset(IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_data_TimeSeriesBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_data_TimeSeriesBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'TimeSeriesBarDataset(IsDefaultOptions, boolean)'.
 /** @return {!TimeSeriesBarDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  TimeSeriesBarDataset.$clinit();
  let $instance = new TimeSeriesBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_TimeSeriesBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesBarDataset(IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_TimeSeriesBarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
  this.f_barStackHandler__org_pepstock_charba_client_data_TimeSeriesBarDataset_ = BarStackHandler.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getNativeObject__());
 }
 //Factory method corresponding to constructor 'TimeSeriesBarDataset(Type, boolean)'.
 /** @return {!TimeSeriesBarDataset} */
 static $create__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  TimeSeriesBarDataset.$clinit();
  let $instance = new TimeSeriesBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_TimeSeriesBarDataset__org_pepstock_charba_client_Type__boolean(type, hidden);
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesBarDataset(Type, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_TimeSeriesBarDataset__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_TimeSeriesBarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, null, hidden);
 }
 //Factory method corresponding to constructor 'TimeSeriesBarDataset(Type, IsDefaultOptions, boolean)'.
 /** @return {!TimeSeriesBarDataset} */
 static $create__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  TimeSeriesBarDataset.$clinit();
  let $instance = new TimeSeriesBarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_TimeSeriesBarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesBarDataset(Type, IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_TimeSeriesBarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  this.f_barStackHandler__org_pepstock_charba_client_data_TimeSeriesBarDataset_ = BarStackHandler.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getNativeObject__());
 }
 /** @override @return {BarStackHandler} */
 m_getBarStackHandler__() {
  return this.f_barStackHandler__org_pepstock_charba_client_data_TimeSeriesBarDataset_;
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
  TimeSeriesBarDataset.$clinit = () =>{};
  TimeSeriesBarDataset.$loadModules();
  BarDataset.$clinit();
  HasTimeSeriesItems.$clinit();
  HasBarStackGroup.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TimeSeriesBarDataset;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  BarStackHandler = goog.module.get('org.pepstock.charba.client.data.BarStackHandler$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
/**@const {?string}*/
TimeSeriesBarDataset.f_INVALID_DATA_CALL__org_pepstock_charba_client_data_TimeSeriesBarDataset = "setData and getData methods are not invokable by a time series chart";
HasTimeSeriesItems.$markImplementor(TimeSeriesBarDataset);
HasBarStackGroup.$markImplementor(TimeSeriesBarDataset);
$Util.$setClassMetadata(TimeSeriesBarDataset, "org.pepstock.charba.client.data.TimeSeriesBarDataset");

exports = TimeSeriesBarDataset;

//# sourceMappingURL=TimeSeriesBarDataset.js.map
