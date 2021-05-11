goog.module('org.pepstock.charba.client.data.HasDataPoints$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasDataset = goog.require('org.pepstock.charba.client.data.HasDataset$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.data.HasDataPoints.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {HasDataset}
 */
class HasDataPoints {
 /** @abstract */
 m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(/** Array<DataPoint> */ datapoints) {}
 /** @abstract */
 m_setDataPoints__java_util_List(/** List<DataPoint> */ datapoints) {}
 /** @abstract @return {List<DataPoint>} */
 m_getDataPoints__() {}
 /** @abstract @return {List<DataPoint>} */
 m_getDataPoints__boolean(/** boolean */ binding) {}
 /** @return {HasDataPoints} */
 static $adapt(/** ?function():Dataset */ fn) {
  HasDataPoints.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_setDataPoints__$default__org_pepstock_charba_client_data_HasDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(/** !HasDataPoints */ $thisArg, /** Array<DataPoint> */ datapoints) {
  HasDataPoints.$clinit();
  if (!$Equality.$same($thisArg.m_getDataset__(), null)) {
   $thisArg.m_getDataset__().m_setInternalDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint_$pp_org_pepstock_charba_client_data(datapoints);
  }
 }
 
 static m_setDataPoints__$default__org_pepstock_charba_client_data_HasDataPoints__java_util_List(/** !HasDataPoints */ $thisArg, /** List<DataPoint> */ datapoints) {
  HasDataPoints.$clinit();
  if (!$Equality.$same($thisArg.m_getDataset__(), null)) {
   $thisArg.m_getDataset__().m_setInternalDataPoints__java_util_List_$pp_org_pepstock_charba_client_data(datapoints);
  }
 }
 /** @return {List<DataPoint>} */
 static m_getDataPoints__$default__org_pepstock_charba_client_data_HasDataPoints(/** !HasDataPoints */ $thisArg) {
  HasDataPoints.$clinit();
  return $thisArg.m_getDataPoints__boolean(false);
 }
 /** @return {List<DataPoint>} */
 static m_getDataPoints__$default__org_pepstock_charba_client_data_HasDataPoints__boolean(/** !HasDataPoints */ $thisArg, /** boolean */ binding) {
  HasDataPoints.$clinit();
  if (!$Equality.$same($thisArg.m_getDataset__(), null)) {
   return $thisArg.m_getDataset__().m_getDataPoints__org_pepstock_charba_client_data_Dataset_DataPointFactory__boolean_$pp_org_pepstock_charba_client_data(Dataset.f_DATAPOINTS_FACTORY__org_pepstock_charba_client_data_Dataset, binding);
  }
  return /**@type {List<DataPoint>}*/ (Collections.m_emptyList__());
 }
 
 static $clinit() {
  HasDataPoints.$clinit = () =>{};
  HasDataPoints.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  HasDataset.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_data_HasDataPoints = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_data_HasDataPoints;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.data.HasDataPoints.$LambdaAdaptor$impl');
 }
}
HasDataPoints.$markImplementor(/**@type {Function}*/ (HasDataPoints));
$Util.$setClassMetadataForInterface(HasDataPoints, "org.pepstock.charba.client.data.HasDataPoints");

exports = HasDataPoints;

//# sourceMappingURL=HasDataPoints.js.map
