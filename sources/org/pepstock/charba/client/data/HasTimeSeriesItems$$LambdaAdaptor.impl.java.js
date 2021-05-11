goog.module('org.pepstock.charba.client.data.HasTimeSeriesItems.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasTimeSeriesItems = goog.require('org.pepstock.charba.client.data.HasTimeSeriesItems$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let HasDataPoints = goog.forwardDeclare('org.pepstock.charba.client.data.HasDataPoints$impl');
let TimeSeriesItem = goog.forwardDeclare('org.pepstock.charba.client.data.TimeSeriesItem$impl');

/**
 * @implements {HasTimeSeriesItems}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Dataset */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Dataset}*/
  this.f_fn__org_pepstock_charba_client_data_HasTimeSeriesItems_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_data_HasTimeSeriesItems_$LambdaAdaptor__org_pepstock_charba_client_data_HasTimeSeriesItems_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_data_HasTimeSeriesItems_$LambdaAdaptor__org_pepstock_charba_client_data_HasTimeSeriesItems_$JsFunction(/** ?function():Dataset */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_data_HasTimeSeriesItems_$LambdaAdaptor = fn;
 }
 /** @override @return {Dataset} */
 m_getDataset__() {
  let /** ?function():Dataset */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_data_HasTimeSeriesItems_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {List<DataPoint>} */
 m_getDataPoints__() {
  return HasDataPoints.m_getDataPoints__$default__org_pepstock_charba_client_data_HasDataPoints(this);
 }
 //Default method forwarding stub.
 /** @override @return {List<DataPoint>} */
 m_getDataPoints__boolean(/** boolean */ arg0) {
  return HasDataPoints.m_getDataPoints__$default__org_pepstock_charba_client_data_HasDataPoints__boolean(this, arg0);
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
 /** @override @return {List<?number>} */
 m_getData__() {
  return HasTimeSeriesItems.m_getData__$default__org_pepstock_charba_client_data_HasTimeSeriesItems(this);
 }
 //Default method forwarding stub.
 /** @override @return {List<?number>} */
 m_getData__boolean(/** boolean */ arg0) {
  return HasTimeSeriesItems.m_getData__$default__org_pepstock_charba_client_data_HasTimeSeriesItems__boolean(this, arg0);
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
 m_setData__arrayOf_double(/** Array<number> */ arg0) {
  HasTimeSeriesItems.m_setData__$default__org_pepstock_charba_client_data_HasTimeSeriesItems__arrayOf_double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setData__java_util_List(/** List<?number> */ arg0) {
  HasTimeSeriesItems.m_setData__$default__org_pepstock_charba_client_data_HasTimeSeriesItems__java_util_List(this, arg0);
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
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HasTimeSeriesItems.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {
  HasDataPoints = goog.module.get('org.pepstock.charba.client.data.HasDataPoints$impl');
 }
}
HasTimeSeriesItems.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.data.HasTimeSeriesItems$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasTimeSeriesItems$$LambdaAdaptor.js.map
