goog.module('org.pepstock.charba.client.geo.IsGeoDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasCommonOptions = goog.require('org.pepstock.charba.client.geo.HasCommonOptions$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let GeoDataPoint = goog.forwardDeclare('org.pepstock.charba.client.geo.GeoDataPoint$impl');
let GeoDatasetHandler = goog.forwardDeclare('org.pepstock.charba.client.geo.GeoDatasetHandler$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.geo.IsGeoDataset.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 * @extends {HasCommonOptions}
 */
class IsGeoDataset {
 /** @abstract @override @return {GeoDatasetHandler<T>} */
 m_getHandler__() {}
 /** @abstract */
 m_setValues__arrayOf_org_pepstock_charba_client_geo_GeoDataPoint(/** Array<T> */ values) {}
 /** @abstract */
 m_setValues__java_util_List(/** List<T> */ values) {}
 /** @abstract @return {List<T>} */
 m_getValues__() {}
 /** @abstract @return {List<T>} */
 m_getValues__boolean(/** boolean */ binding) {}
 /** @template T @return {IsGeoDataset<T>} */
 static $adapt(/** ?function():GeoDatasetHandler<T> */ fn) {
  IsGeoDataset.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @template T */
 static m_setValues__$default__org_pepstock_charba_client_geo_IsGeoDataset__arrayOf_org_pepstock_charba_client_geo_GeoDataPoint(/** !IsGeoDataset<T> */ $thisArg, /** Array<T> */ values) {
  IsGeoDataset.$clinit();
  if (!$Equality.$same($thisArg.m_getHandler__(), null)) {
   $thisArg.m_getHandler__().m_setValues__arrayOf_org_pepstock_charba_client_geo_GeoDataPoint_$pp_org_pepstock_charba_client_geo(values);
  }
 }
 /** @template T */
 static m_setValues__$default__org_pepstock_charba_client_geo_IsGeoDataset__java_util_List(/** !IsGeoDataset<T> */ $thisArg, /** List<T> */ values) {
  IsGeoDataset.$clinit();
  if (!$Equality.$same($thisArg.m_getHandler__(), null)) {
   $thisArg.m_getHandler__().m_setValues__java_util_List_$pp_org_pepstock_charba_client_geo(values);
  }
 }
 /** @template T @return {List<T>} */
 static m_getValues__$default__org_pepstock_charba_client_geo_IsGeoDataset(/** !IsGeoDataset<T> */ $thisArg) {
  IsGeoDataset.$clinit();
  return $thisArg.m_getValues__boolean(false);
 }
 /** @template T @return {List<T>} */
 static m_getValues__$default__org_pepstock_charba_client_geo_IsGeoDataset__boolean(/** !IsGeoDataset<T> */ $thisArg, /** boolean */ binding) {
  IsGeoDataset.$clinit();
  if (!$Equality.$same($thisArg.m_getHandler__(), null)) {
   return $thisArg.m_getHandler__().m_getValues__boolean_$pp_org_pepstock_charba_client_geo(binding);
  }
  return /**@type {List<T>}*/ (Collections.m_emptyList__());
 }
 
 static $clinit() {
  IsGeoDataset.$clinit = () =>{};
  IsGeoDataset.$loadModules();
  HasCommonOptions.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  HasCommonOptions.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_geo_IsGeoDataset = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_geo_IsGeoDataset;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.geo.IsGeoDataset.$LambdaAdaptor$impl');
 }
}
IsGeoDataset.$markImplementor(/**@type {Function}*/ (IsGeoDataset));
$Util.$setClassMetadataForInterface(IsGeoDataset, "org.pepstock.charba.client.geo.IsGeoDataset");

exports = IsGeoDataset;

//# sourceMappingURL=IsGeoDataset.js.map
