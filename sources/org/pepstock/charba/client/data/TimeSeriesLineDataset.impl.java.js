goog.module('org.pepstock.charba.client.data.TimeSeriesLineDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasTimeSeriesItems = goog.require('org.pepstock.charba.client.data.HasTimeSeriesItems$impl');
const LineDataset = goog.require('org.pepstock.charba.client.data.LineDataset$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let TimeSeriesItem = goog.forwardDeclare('org.pepstock.charba.client.data.TimeSeriesItem$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {HasTimeSeriesItems}
 */
class TimeSeriesLineDataset extends LineDataset {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'TimeSeriesLineDataset()'.
 /** @return {!TimeSeriesLineDataset} */
 static $create__() {
  TimeSeriesLineDataset.$clinit();
  let $instance = new TimeSeriesLineDataset();
  $instance.$ctor__org_pepstock_charba_client_data_TimeSeriesLineDataset__();
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesLineDataset()'.
 
 $ctor__org_pepstock_charba_client_data_TimeSeriesLineDataset__() {
  this.$ctor__org_pepstock_charba_client_data_TimeSeriesLineDataset__boolean(Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'TimeSeriesLineDataset(boolean)'.
 /** @return {!TimeSeriesLineDataset} */
 static $create__boolean(/** boolean */ hidden) {
  TimeSeriesLineDataset.$clinit();
  let $instance = new TimeSeriesLineDataset();
  $instance.$ctor__org_pepstock_charba_client_data_TimeSeriesLineDataset__boolean(hidden);
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesLineDataset(boolean)'.
 
 $ctor__org_pepstock_charba_client_data_TimeSeriesLineDataset__boolean(/** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_TimeSeriesLineDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/**@type {IsDefaultOptions}*/ (null), hidden);
 }
 //Factory method corresponding to constructor 'TimeSeriesLineDataset(IsDefaultOptions)'.
 /** @return {!TimeSeriesLineDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  TimeSeriesLineDataset.$clinit();
  let $instance = new TimeSeriesLineDataset();
  $instance.$ctor__org_pepstock_charba_client_data_TimeSeriesLineDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesLineDataset(IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_data_TimeSeriesLineDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_data_TimeSeriesLineDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'TimeSeriesLineDataset(IsDefaultOptions, boolean)'.
 /** @return {!TimeSeriesLineDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  TimeSeriesLineDataset.$clinit();
  let $instance = new TimeSeriesLineDataset();
  $instance.$ctor__org_pepstock_charba_client_data_TimeSeriesLineDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesLineDataset(IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_TimeSeriesLineDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
 }
 //Factory method corresponding to constructor 'TimeSeriesLineDataset(Type, boolean)'.
 /** @return {!TimeSeriesLineDataset} */
 static $create__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  TimeSeriesLineDataset.$clinit();
  let $instance = new TimeSeriesLineDataset();
  $instance.$ctor__org_pepstock_charba_client_data_TimeSeriesLineDataset__org_pepstock_charba_client_Type__boolean(type, hidden);
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesLineDataset(Type, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_TimeSeriesLineDataset__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_TimeSeriesLineDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, null, hidden);
 }
 //Factory method corresponding to constructor 'TimeSeriesLineDataset(Type, IsDefaultOptions, boolean)'.
 /** @return {!TimeSeriesLineDataset} */
 static $create__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  TimeSeriesLineDataset.$clinit();
  let $instance = new TimeSeriesLineDataset();
  $instance.$ctor__org_pepstock_charba_client_data_TimeSeriesLineDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'TimeSeriesLineDataset(Type, IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_TimeSeriesLineDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
 }
 /** @override */
 m_setDataString__arrayOf_java_lang_String(/** Array<?string> */ data) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TimeSeriesLineDataset.f_INVALID_DATA_STRING_CALL__org_pepstock_charba_client_data_TimeSeriesLineDataset_));
 }
 /** @override */
 m_setDataString__java_util_List(/** List<?string> */ data) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TimeSeriesLineDataset.f_INVALID_DATA_STRING_CALL__org_pepstock_charba_client_data_TimeSeriesLineDataset_));
 }
 /** @override @return {List<?string>} */
 m_getDataString__() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TimeSeriesLineDataset.f_INVALID_DATA_STRING_CALL__org_pepstock_charba_client_data_TimeSeriesLineDataset_));
 }
 /** @override @return {List<?string>} */
 m_getDataString__boolean(/** boolean */ binding) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TimeSeriesLineDataset.f_INVALID_DATA_STRING_CALL__org_pepstock_charba_client_data_TimeSeriesLineDataset_));
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
 
 static $clinit() {
  TimeSeriesLineDataset.$clinit = () =>{};
  TimeSeriesLineDataset.$loadModules();
  LineDataset.$clinit();
  HasTimeSeriesItems.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TimeSeriesLineDataset;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
/**@const {?string}*/
TimeSeriesLineDataset.f_INVALID_DATA_STRING_CALL__org_pepstock_charba_client_data_TimeSeriesLineDataset_ = "setDataString and getDataString methods are not invokable by a time series chart";
HasTimeSeriesItems.$markImplementor(TimeSeriesLineDataset);
$Util.$setClassMetadata(TimeSeriesLineDataset, "org.pepstock.charba.client.data.TimeSeriesLineDataset");

exports = TimeSeriesLineDataset;

//# sourceMappingURL=TimeSeriesLineDataset.js.map
