goog.module('org.pepstock.charba.client.data.HasTimeSeriesItems$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasDataPoints = goog.require('org.pepstock.charba.client.data.HasDataPoints$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.data.HasTimeSeriesItems.$LambdaAdaptor$impl');
let TimeSeriesItem = goog.forwardDeclare('org.pepstock.charba.client.data.TimeSeriesItem$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @interface
 * @extends {HasDataPoints}
 */
class HasTimeSeriesItems {
 /** @return {boolean} */
 static m_isTimeSeriesItem__org_pepstock_charba_client_data_DataPoint(/** DataPoint */ datapoint) {
  HasTimeSeriesItems.$clinit();
  return !$Equality.$same(datapoint, null) && !$Equality.$same(datapoint.m_getXAsDate__(), null) && Undefined.m_is__double(datapoint.m_getR__());
 }
 
 static m_checkTimeSeriesItems__java_util_List(/** List<DataPoint> */ datapoints) {
  HasTimeSeriesItems.$clinit();
  for (let $iterator = datapoints.m_iterator__(); $iterator.m_hasNext__(); ) {
   let dp = /**@type {DataPoint}*/ ($Casts.$to($iterator.m_next__(), DataPoint));
   {
    Checker.m_assertCheck__boolean__java_lang_String(HasTimeSeriesItems.m_isTimeSeriesItem__org_pepstock_charba_client_data_DataPoint(dp), "Datapoint is not a time series item");
   }
  }
 }
 /** @abstract */
 m_setData__arrayOf_double(/** Array<number> */ values) {}
 /** @abstract */
 m_setData__java_util_List(/** List<?number> */ values) {}
 /** @abstract @return {List<?number>} */
 m_getData__() {}
 /** @abstract @return {List<?number>} */
 m_getData__boolean(/** boolean */ binding) {}
 /** @abstract @override */
 m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(/** Array<DataPoint> */ datapoints) {}
 /** @abstract @override */
 m_setDataPoints__java_util_List(/** List<DataPoint> */ datapoints) {}
 /** @abstract */
 m_setTimeSeriesData__arrayOf_org_pepstock_charba_client_data_TimeSeriesItem(/** Array<TimeSeriesItem> */ items) {}
 /** @abstract */
 m_setTimeSeriesData__java_util_List(/** List<TimeSeriesItem> */ items) {}
 /** @abstract @return {List<TimeSeriesItem>} */
 m_getTimeSeriesData__() {}
 /** @abstract @return {List<TimeSeriesItem>} */
 m_getTimeSeriesData__boolean(/** boolean */ binding) {}
 /** @return {HasTimeSeriesItems} */
 static $adapt(/** ?function():Dataset */ fn) {
  HasTimeSeriesItems.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_setData__$default__org_pepstock_charba_client_data_HasTimeSeriesItems__arrayOf_double(/** !HasTimeSeriesItems */ $thisArg, /** Array<number> */ values) {
  HasTimeSeriesItems.$clinit();
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(Dataset.f_TIME_SERIES_DATA_USAGE_MESSAGE__org_pepstock_charba_client_data_Dataset));
 }
 
 static m_setData__$default__org_pepstock_charba_client_data_HasTimeSeriesItems__java_util_List(/** !HasTimeSeriesItems */ $thisArg, /** List<?number> */ values) {
  HasTimeSeriesItems.$clinit();
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(Dataset.f_TIME_SERIES_DATA_USAGE_MESSAGE__org_pepstock_charba_client_data_Dataset));
 }
 /** @return {List<?number>} */
 static m_getData__$default__org_pepstock_charba_client_data_HasTimeSeriesItems(/** !HasTimeSeriesItems */ $thisArg) {
  HasTimeSeriesItems.$clinit();
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(Dataset.f_TIME_SERIES_DATA_USAGE_MESSAGE__org_pepstock_charba_client_data_Dataset));
 }
 /** @return {List<?number>} */
 static m_getData__$default__org_pepstock_charba_client_data_HasTimeSeriesItems__boolean(/** !HasTimeSeriesItems */ $thisArg, /** boolean */ binding) {
  HasTimeSeriesItems.$clinit();
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(Dataset.f_TIME_SERIES_DATA_USAGE_MESSAGE__org_pepstock_charba_client_data_Dataset));
 }
 
 static m_setDataPoints__$default__org_pepstock_charba_client_data_HasTimeSeriesItems__arrayOf_org_pepstock_charba_client_data_DataPoint(/** !HasTimeSeriesItems */ $thisArg, /** Array<DataPoint> */ datapoints) {
  HasTimeSeriesItems.$clinit();
  if (!$Equality.$same($thisArg.m_getDataset__(), null)) {
   HasTimeSeriesItems.m_checkTimeSeriesItems__java_util_List(/**@type {List<DataPoint>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(datapoints)));
   $thisArg.m_getDataset__().m_setInternalDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint_$pp_org_pepstock_charba_client_data(datapoints);
  }
 }
 
 static m_setDataPoints__$default__org_pepstock_charba_client_data_HasTimeSeriesItems__java_util_List(/** !HasTimeSeriesItems */ $thisArg, /** List<DataPoint> */ datapoints) {
  HasTimeSeriesItems.$clinit();
  if (!$Equality.$same($thisArg.m_getDataset__(), null)) {
   HasTimeSeriesItems.m_checkTimeSeriesItems__java_util_List(datapoints);
   $thisArg.m_getDataset__().m_setInternalDataPoints__java_util_List_$pp_org_pepstock_charba_client_data(datapoints);
  }
 }
 
 static m_setTimeSeriesData__$default__org_pepstock_charba_client_data_HasTimeSeriesItems__arrayOf_org_pepstock_charba_client_data_TimeSeriesItem(/** !HasTimeSeriesItems */ $thisArg, /** Array<TimeSeriesItem> */ items) {
  HasTimeSeriesItems.$clinit();
  if (!$Equality.$same($thisArg.m_getDataset__(), null)) {
   $thisArg.m_getDataset__().m_setInternalTimeSeriesItems__arrayOf_org_pepstock_charba_client_data_TimeSeriesItem_$pp_org_pepstock_charba_client_data(items);
  }
 }
 
 static m_setTimeSeriesData__$default__org_pepstock_charba_client_data_HasTimeSeriesItems__java_util_List(/** !HasTimeSeriesItems */ $thisArg, /** List<TimeSeriesItem> */ items) {
  HasTimeSeriesItems.$clinit();
  if (!$Equality.$same($thisArg.m_getDataset__(), null)) {
   $thisArg.m_getDataset__().m_setInternalTimeSeriesItems__java_util_List_$pp_org_pepstock_charba_client_data(items);
  }
 }
 /** @return {List<TimeSeriesItem>} */
 static m_getTimeSeriesData__$default__org_pepstock_charba_client_data_HasTimeSeriesItems(/** !HasTimeSeriesItems */ $thisArg) {
  HasTimeSeriesItems.$clinit();
  return $thisArg.m_getTimeSeriesData__boolean(false);
 }
 /** @return {List<TimeSeriesItem>} */
 static m_getTimeSeriesData__$default__org_pepstock_charba_client_data_HasTimeSeriesItems__boolean(/** !HasTimeSeriesItems */ $thisArg, /** boolean */ binding) {
  HasTimeSeriesItems.$clinit();
  if (!$Equality.$same($thisArg.m_getDataset__(), null)) {
   return $thisArg.m_getDataset__().m_getTimeSeriesItems__org_pepstock_charba_client_data_Dataset_TimeSeriesItemFactory__boolean_$pp_org_pepstock_charba_client_data(Dataset.f_TIMESERIES_ITEMS_FACTORY__org_pepstock_charba_client_data_Dataset, binding);
  }
  return /**@type {List<TimeSeriesItem>}*/ (Collections.m_emptyList__());
 }
 
 static $clinit() {
  HasTimeSeriesItems.$clinit = () =>{};
  HasTimeSeriesItems.$loadModules();
  HasDataPoints.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  HasDataPoints.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_data_HasTimeSeriesItems = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_data_HasTimeSeriesItems;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.data.HasTimeSeriesItems.$LambdaAdaptor$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
HasTimeSeriesItems.$markImplementor(/**@type {Function}*/ (HasTimeSeriesItems));
$Util.$setClassMetadataForInterface(HasTimeSeriesItems, "org.pepstock.charba.client.data.HasTimeSeriesItems");

exports = HasTimeSeriesItems;

//# sourceMappingURL=HasTimeSeriesItems.js.map
