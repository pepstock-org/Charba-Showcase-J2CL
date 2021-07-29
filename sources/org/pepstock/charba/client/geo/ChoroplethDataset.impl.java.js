goog.module('org.pepstock.charba.client.geo.ChoroplethDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BarDataset = goog.require('org.pepstock.charba.client.data.BarDataset$impl');
const IsGeoDataset = goog.require('org.pepstock.charba.client.geo.IsGeoDataset$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let ChoroplethChart = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethChart$impl');
let ChoroplethDataPoint = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethDataPoint$impl');
let ChoroplethDataPointFactory = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethDataset.ChoroplethDataPointFactory$impl');
let ChoroplethOptionsMapper = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethOptionsMapper$impl');
let Feature = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature$impl');
let GeoDatasetHandler = goog.forwardDeclare('org.pepstock.charba.client.geo.GeoDatasetHandler$impl');
let Graticule = goog.forwardDeclare('org.pepstock.charba.client.geo.Graticule$impl');
let HasCommonOptions = goog.forwardDeclare('org.pepstock.charba.client.geo.HasCommonOptions$impl');
let ClipMap = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.ClipMap$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {IsGeoDataset<ChoroplethDataPoint>}
 */
class ChoroplethDataset extends BarDataset {
 /** @protected */
 constructor() {
  super();
  /**@type {GeoDatasetHandler<ChoroplethDataPoint>}*/
  this.f_handler__org_pepstock_charba_client_geo_ChoroplethDataset_;
 }
 //Factory method corresponding to constructor 'ChoroplethDataset()'.
 /** @return {!ChoroplethDataset} */
 static $create__() {
  ChoroplethDataset.$clinit();
  let $instance = new ChoroplethDataset();
  $instance.$ctor__org_pepstock_charba_client_geo_ChoroplethDataset__();
  return $instance;
 }
 //Initialization from constructor 'ChoroplethDataset()'.
 
 $ctor__org_pepstock_charba_client_geo_ChoroplethDataset__() {
  this.$ctor__org_pepstock_charba_client_geo_ChoroplethDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(Defaults.m_get__().m_getGlobal__());
 }
 //Factory method corresponding to constructor 'ChoroplethDataset(IsDefaultOptions)'.
 /** @return {!ChoroplethDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  ChoroplethDataset.$clinit();
  let $instance = new ChoroplethDataset();
  $instance.$ctor__org_pepstock_charba_client_geo_ChoroplethDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'ChoroplethDataset(IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_geo_ChoroplethDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_geo_ChoroplethDataset__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_defaults_IsDefaultOptions(ChoroplethChart.f_CONTROLLER_TYPE__org_pepstock_charba_client_geo_ChoroplethChart, defaultValues);
 }
 //Factory method corresponding to constructor 'ChoroplethDataset(ControllerType, IsDefaultOptions)'.
 /** @return {!ChoroplethDataset} */
 static $create__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_defaults_IsDefaultOptions(/** ControllerType */ type, /** IsDefaultOptions */ defaultValues) {
  ChoroplethDataset.$clinit();
  let $instance = new ChoroplethDataset();
  $instance.$ctor__org_pepstock_charba_client_geo_ChoroplethDataset__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_defaults_IsDefaultOptions(type, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'ChoroplethDataset(ControllerType, IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_geo_ChoroplethDataset__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_defaults_IsDefaultOptions(/** ControllerType */ type, /** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
  this.f_handler__org_pepstock_charba_client_geo_ChoroplethDataset_ = /**@type {!GeoDatasetHandler<ChoroplethDataPoint>}*/ (GeoDatasetHandler.$create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_geo_enums_ClipMap__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this.m_getNativeObject__(), ChoroplethOptionsMapper.f_DEFAULT_CLIP_MAP__org_pepstock_charba_client_geo_ChoroplethOptionsMapper, ChoroplethDataset.f_FACTORY__org_pepstock_charba_client_geo_ChoroplethDataset_));
 }
 /** @override @return {GeoDatasetHandler<ChoroplethDataPoint>} */
 m_getHandler__() {
  return this.f_handler__org_pepstock_charba_client_geo_ChoroplethDataset_;
 }
 /** @override */
 m_setData__arrayOf_double(/** Array<number> */ values) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(GeoDatasetHandler.f_INVALID_SET_DATA_CALL__org_pepstock_charba_client_geo_GeoDatasetHandler));
 }
 /** @override */
 m_setData__java_util_List(/** List<?number> */ values) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(GeoDatasetHandler.f_INVALID_SET_DATA_CALL__org_pepstock_charba_client_geo_GeoDatasetHandler));
 }
 /** @override @return {List<?number>} */
 m_getData__boolean(/** boolean */ binding) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(GeoDatasetHandler.f_INVALID_GET_DATA_CALL__org_pepstock_charba_client_geo_GeoDatasetHandler));
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
 /** @override @return {List<ChoroplethDataPoint>} */
 m_getValues__() {
  return /**@type {List<ChoroplethDataPoint>}*/ (IsGeoDataset.m_getValues__$default__org_pepstock_charba_client_geo_IsGeoDataset(this));
 }
 //Default method forwarding stub.
 /** @override @return {List<ChoroplethDataPoint>} */
 m_getValues__boolean(/** boolean */ arg0) {
  return /**@type {List<ChoroplethDataPoint>}*/ (IsGeoDataset.m_getValues__$default__org_pepstock_charba_client_geo_IsGeoDataset__boolean(this, arg0));
 }
 //Bridge method.
 /** @override */
 m_setValues__arrayOf_org_pepstock_charba_client_geo_GeoDataPoint(/** Array<ChoroplethDataPoint> */ arg0) {
  this.m_setValues__arrayOf_org_pepstock_charba_client_geo_ChoroplethDataPoint(/**@type {Array<ChoroplethDataPoint>}*/ ($Arrays.$castTo(arg0, ChoroplethDataPoint, 1)));
 }
 //Default method forwarding stub.
 /** @override */
 m_setValues__java_util_List(/** List<ChoroplethDataPoint> */ arg0) {
  IsGeoDataset.m_setValues__$default__org_pepstock_charba_client_geo_IsGeoDataset__java_util_List(this, arg0);
 }
 //Default method forwarding stub.
 
 m_setValues__arrayOf_org_pepstock_charba_client_geo_ChoroplethDataPoint(/** Array<ChoroplethDataPoint> */ arg0) {
  IsGeoDataset.m_setValues__$default__org_pepstock_charba_client_geo_IsGeoDataset__arrayOf_org_pepstock_charba_client_geo_GeoDataPoint(this, arg0);
 }
 
 static $clinit() {
  ChoroplethDataset.$clinit = () =>{};
  ChoroplethDataset.$loadModules();
  BarDataset.$clinit();
  IsGeoDataset.$clinit();
  ChoroplethDataset.f_FACTORY__org_pepstock_charba_client_geo_ChoroplethDataset_ = ChoroplethDataPointFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChoroplethDataset;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  ChoroplethChart = goog.module.get('org.pepstock.charba.client.geo.ChoroplethChart$impl');
  ChoroplethDataPoint = goog.module.get('org.pepstock.charba.client.geo.ChoroplethDataPoint$impl');
  ChoroplethDataPointFactory = goog.module.get('org.pepstock.charba.client.geo.ChoroplethDataset.ChoroplethDataPointFactory$impl');
  ChoroplethOptionsMapper = goog.module.get('org.pepstock.charba.client.geo.ChoroplethOptionsMapper$impl');
  GeoDatasetHandler = goog.module.get('org.pepstock.charba.client.geo.GeoDatasetHandler$impl');
  HasCommonOptions = goog.module.get('org.pepstock.charba.client.geo.HasCommonOptions$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
/**@type {ChoroplethDataPointFactory}*/
ChoroplethDataset.f_FACTORY__org_pepstock_charba_client_geo_ChoroplethDataset_;
IsGeoDataset.$markImplementor(ChoroplethDataset);
$Util.$setClassMetadata(ChoroplethDataset, "org.pepstock.charba.client.geo.ChoroplethDataset");

exports = ChoroplethDataset;

//# sourceMappingURL=ChoroplethDataset.js.map
