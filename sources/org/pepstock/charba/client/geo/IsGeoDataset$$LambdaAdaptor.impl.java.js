goog.module('org.pepstock.charba.client.geo.IsGeoDataset.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsGeoDataset = goog.require('org.pepstock.charba.client.geo.IsGeoDataset$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Feature = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature$impl');
let GeoDataPoint = goog.forwardDeclare('org.pepstock.charba.client.geo.GeoDataPoint$impl');
let GeoDatasetHandler = goog.forwardDeclare('org.pepstock.charba.client.geo.GeoDatasetHandler$impl');
let Graticule = goog.forwardDeclare('org.pepstock.charba.client.geo.Graticule$impl');
let HasCommonOptions = goog.forwardDeclare('org.pepstock.charba.client.geo.HasCommonOptions$impl');
let ClipMap = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.ClipMap$impl');

/**
 * @template T
 * @implements {IsGeoDataset<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():GeoDatasetHandler<T> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():GeoDatasetHandler<T>}*/
  this.f_fn__org_pepstock_charba_client_geo_IsGeoDataset_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_geo_IsGeoDataset_$LambdaAdaptor__org_pepstock_charba_client_geo_IsGeoDataset_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_geo_IsGeoDataset_$LambdaAdaptor__org_pepstock_charba_client_geo_IsGeoDataset_$JsFunction(/** ?function():GeoDatasetHandler<T> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_geo_IsGeoDataset_$LambdaAdaptor = fn;
 }
 /** @override @return {GeoDatasetHandler<T>} */
 m_getHandler__() {
  let /** ?function():GeoDatasetHandler<T> */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_geo_IsGeoDataset_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {ClipMap} */
 m_getClipMap__() {
  return HasCommonOptions.m_getClipMap__$default__org_pepstock_charba_client_geo_HasCommonOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {List<Feature>} */
 m_getOutline__() {
  return HasCommonOptions.m_getOutline__$default__org_pepstock_charba_client_geo_HasCommonOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {Graticule} */
 m_getShowGraticule__() {
  return HasCommonOptions.m_getShowGraticule__$default__org_pepstock_charba_client_geo_HasCommonOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isClipMap__() {
  return HasCommonOptions.m_isClipMap__$default__org_pepstock_charba_client_geo_HasCommonOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isShowGraticule__() {
  return HasCommonOptions.m_isShowGraticule__$default__org_pepstock_charba_client_geo_HasCommonOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isShowOutline__() {
  return HasCommonOptions.m_isShowOutline__$default__org_pepstock_charba_client_geo_HasCommonOptions(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setClipMap__org_pepstock_charba_client_geo_enums_ClipMap(/** ClipMap */ arg0) {
  HasCommonOptions.m_setClipMap__$default__org_pepstock_charba_client_geo_HasCommonOptions__org_pepstock_charba_client_geo_enums_ClipMap(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setClipMap__boolean(/** boolean */ arg0) {
  HasCommonOptions.m_setClipMap__$default__org_pepstock_charba_client_geo_HasCommonOptions__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setOutline__arrayOf_org_pepstock_charba_client_geo_Feature(/** Array<Feature> */ arg0) {
  HasCommonOptions.m_setOutline__$default__org_pepstock_charba_client_geo_HasCommonOptions__arrayOf_org_pepstock_charba_client_geo_Feature(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setOutline__java_util_List(/** List<Feature> */ arg0) {
  HasCommonOptions.m_setOutline__$default__org_pepstock_charba_client_geo_HasCommonOptions__java_util_List(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setShowGraticule__boolean(/** boolean */ arg0) {
  HasCommonOptions.m_setShowGraticule__$default__org_pepstock_charba_client_geo_HasCommonOptions__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setShowGraticule__org_pepstock_charba_client_geo_Graticule(/** Graticule */ arg0) {
  HasCommonOptions.m_setShowGraticule__$default__org_pepstock_charba_client_geo_HasCommonOptions__org_pepstock_charba_client_geo_Graticule(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setShowOutline__boolean(/** boolean */ arg0) {
  HasCommonOptions.m_setShowOutline__$default__org_pepstock_charba_client_geo_HasCommonOptions__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {List<T>} */
 m_getValues__() {
  return /**@type {List<T>}*/ (IsGeoDataset.m_getValues__$default__org_pepstock_charba_client_geo_IsGeoDataset(this));
 }
 //Default method forwarding stub.
 /** @override @return {List<T>} */
 m_getValues__boolean(/** boolean */ arg0) {
  return /**@type {List<T>}*/ (IsGeoDataset.m_getValues__$default__org_pepstock_charba_client_geo_IsGeoDataset__boolean(this, arg0));
 }
 //Default method forwarding stub.
 /** @override */
 m_setValues__arrayOf_org_pepstock_charba_client_geo_GeoDataPoint(/** Array<T> */ arg0) {
  IsGeoDataset.m_setValues__$default__org_pepstock_charba_client_geo_IsGeoDataset__arrayOf_org_pepstock_charba_client_geo_GeoDataPoint(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setValues__java_util_List(/** List<T> */ arg0) {
  IsGeoDataset.m_setValues__$default__org_pepstock_charba_client_geo_IsGeoDataset__java_util_List(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  IsGeoDataset.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {
  HasCommonOptions = goog.module.get('org.pepstock.charba.client.geo.HasCommonOptions$impl');
 }
}
IsGeoDataset.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.geo.IsGeoDataset$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=IsGeoDataset$$LambdaAdaptor.js.map
