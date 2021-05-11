goog.module('org.pepstock.charba.client.data.HasDataPoints.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasDataPoints = goog.require('org.pepstock.charba.client.data.HasDataPoints$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');

/**
 * @implements {HasDataPoints}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Dataset */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Dataset}*/
  this.f_fn__org_pepstock_charba_client_data_HasDataPoints_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_data_HasDataPoints_$LambdaAdaptor__org_pepstock_charba_client_data_HasDataPoints_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_data_HasDataPoints_$LambdaAdaptor__org_pepstock_charba_client_data_HasDataPoints_$JsFunction(/** ?function():Dataset */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_data_HasDataPoints_$LambdaAdaptor = fn;
 }
 /** @override @return {Dataset} */
 m_getDataset__() {
  let /** ?function():Dataset */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_data_HasDataPoints_$LambdaAdaptor, $function());
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
  HasDataPoints.m_setDataPoints__$default__org_pepstock_charba_client_data_HasDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setDataPoints__java_util_List(/** List<DataPoint> */ arg0) {
  HasDataPoints.m_setDataPoints__$default__org_pepstock_charba_client_data_HasDataPoints__java_util_List(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HasDataPoints.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
HasDataPoints.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.data.HasDataPoints$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasDataPoints$$LambdaAdaptor.js.map
