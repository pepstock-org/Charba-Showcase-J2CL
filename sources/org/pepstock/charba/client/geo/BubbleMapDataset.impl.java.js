goog.module('org.pepstock.charba.client.geo.BubbleMapDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BubbleDataset = goog.require('org.pepstock.charba.client.data.BubbleDataset$impl');
const IsGeoDataset = goog.require('org.pepstock.charba.client.geo.IsGeoDataset$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let BubbleMapChart = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapChart$impl');
let BubbleMapDataPoint = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapDataPoint$impl');
let BubbleMapDataPointFactory = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapDataset.BubbleMapDataPointFactory$impl');
let BubbleMapOptionsMapper = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapOptionsMapper$impl');
let Feature = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature$impl');
let GeoDatasetHandler = goog.forwardDeclare('org.pepstock.charba.client.geo.GeoDatasetHandler$impl');
let Graticule = goog.forwardDeclare('org.pepstock.charba.client.geo.Graticule$impl');
let HasCommonOptions = goog.forwardDeclare('org.pepstock.charba.client.geo.HasCommonOptions$impl');
let ClipMap = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.ClipMap$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {IsGeoDataset<BubbleMapDataPoint>}
 */
class BubbleMapDataset extends BubbleDataset {
 /** @protected */
 constructor() {
  super();
  /**@type {GeoDatasetHandler<BubbleMapDataPoint>}*/
  this.f_handler__org_pepstock_charba_client_geo_BubbleMapDataset_;
 }
 //Factory method corresponding to constructor 'BubbleMapDataset()'.
 /** @return {!BubbleMapDataset} */
 static $create__() {
  BubbleMapDataset.$clinit();
  let $instance = new BubbleMapDataset();
  $instance.$ctor__org_pepstock_charba_client_geo_BubbleMapDataset__();
  return $instance;
 }
 //Initialization from constructor 'BubbleMapDataset()'.
 
 $ctor__org_pepstock_charba_client_geo_BubbleMapDataset__() {
  this.$ctor__org_pepstock_charba_client_geo_BubbleMapDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(Defaults.m_get__().m_getGlobal__());
 }
 //Factory method corresponding to constructor 'BubbleMapDataset(IsDefaultOptions)'.
 /** @return {!BubbleMapDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  BubbleMapDataset.$clinit();
  let $instance = new BubbleMapDataset();
  $instance.$ctor__org_pepstock_charba_client_geo_BubbleMapDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'BubbleMapDataset(IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_geo_BubbleMapDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_geo_BubbleMapDataset__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_defaults_IsDefaultOptions(BubbleMapChart.f_CONTROLLER_TYPE__org_pepstock_charba_client_geo_BubbleMapChart, defaultValues);
 }
 //Factory method corresponding to constructor 'BubbleMapDataset(ControllerType, IsDefaultOptions)'.
 /** @return {!BubbleMapDataset} */
 static $create__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_defaults_IsDefaultOptions(/** ControllerType */ type, /** IsDefaultOptions */ defaultValues) {
  BubbleMapDataset.$clinit();
  let $instance = new BubbleMapDataset();
  $instance.$ctor__org_pepstock_charba_client_geo_BubbleMapDataset__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_defaults_IsDefaultOptions(type, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'BubbleMapDataset(ControllerType, IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_geo_BubbleMapDataset__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_defaults_IsDefaultOptions(/** ControllerType */ type, /** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_data_BubbleDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
  this.f_handler__org_pepstock_charba_client_geo_BubbleMapDataset_ = /**@type {!GeoDatasetHandler<BubbleMapDataPoint>}*/ (GeoDatasetHandler.$create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_geo_enums_ClipMap__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this.m_getNativeObject__(), BubbleMapOptionsMapper.f_DEFAULT_CLIP_MAP__org_pepstock_charba_client_geo_BubbleMapOptionsMapper, BubbleMapDataset.f_FACTORY__org_pepstock_charba_client_geo_BubbleMapDataset_));
 }
 /** @override @return {GeoDatasetHandler<BubbleMapDataPoint>} */
 m_getHandler__() {
  return this.f_handler__org_pepstock_charba_client_geo_BubbleMapDataset_;
 }
 /** @override */
 m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(/** Array<DataPoint> */ datapoints) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(BubbleMapDataset.f_INVALID_SET_DATA_POINTS_CALL__org_pepstock_charba_client_geo_BubbleMapDataset_));
 }
 /** @override */
 m_setDataPoints__java_util_List(/** List<DataPoint> */ datapoints) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(BubbleMapDataset.f_INVALID_SET_DATA_POINTS_CALL__org_pepstock_charba_client_geo_BubbleMapDataset_));
 }
 /** @override @return {List<DataPoint>} */
 m_getDataPoints__boolean(/** boolean */ binding) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(BubbleMapDataset.f_INVALID_GET_DATA_POINTS_CALL__org_pepstock_charba_client_geo_BubbleMapDataset_));
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
 /** @override @return {List<BubbleMapDataPoint>} */
 m_getValues__() {
  return /**@type {List<BubbleMapDataPoint>}*/ (IsGeoDataset.m_getValues__$default__org_pepstock_charba_client_geo_IsGeoDataset(this));
 }
 //Default method forwarding stub.
 /** @override @return {List<BubbleMapDataPoint>} */
 m_getValues__boolean(/** boolean */ arg0) {
  return /**@type {List<BubbleMapDataPoint>}*/ (IsGeoDataset.m_getValues__$default__org_pepstock_charba_client_geo_IsGeoDataset__boolean(this, arg0));
 }
 //Bridge method.
 /** @override */
 m_setValues__arrayOf_org_pepstock_charba_client_geo_GeoDataPoint(/** Array<BubbleMapDataPoint> */ arg0) {
  this.m_setValues__arrayOf_org_pepstock_charba_client_geo_BubbleMapDataPoint(/**@type {Array<BubbleMapDataPoint>}*/ ($Arrays.$castTo(arg0, BubbleMapDataPoint, 1)));
 }
 //Default method forwarding stub.
 /** @override */
 m_setValues__java_util_List(/** List<BubbleMapDataPoint> */ arg0) {
  IsGeoDataset.m_setValues__$default__org_pepstock_charba_client_geo_IsGeoDataset__java_util_List(this, arg0);
 }
 //Default method forwarding stub.
 
 m_setValues__arrayOf_org_pepstock_charba_client_geo_BubbleMapDataPoint(/** Array<BubbleMapDataPoint> */ arg0) {
  IsGeoDataset.m_setValues__$default__org_pepstock_charba_client_geo_IsGeoDataset__arrayOf_org_pepstock_charba_client_geo_GeoDataPoint(this, arg0);
 }
 
 static $clinit() {
  BubbleMapDataset.$clinit = () =>{};
  BubbleMapDataset.$loadModules();
  BubbleDataset.$clinit();
  IsGeoDataset.$clinit();
  BubbleMapDataset.f_FACTORY__org_pepstock_charba_client_geo_BubbleMapDataset_ = BubbleMapDataPointFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BubbleMapDataset;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  BubbleMapChart = goog.module.get('org.pepstock.charba.client.geo.BubbleMapChart$impl');
  BubbleMapDataPoint = goog.module.get('org.pepstock.charba.client.geo.BubbleMapDataPoint$impl');
  BubbleMapDataPointFactory = goog.module.get('org.pepstock.charba.client.geo.BubbleMapDataset.BubbleMapDataPointFactory$impl');
  BubbleMapOptionsMapper = goog.module.get('org.pepstock.charba.client.geo.BubbleMapOptionsMapper$impl');
  GeoDatasetHandler = goog.module.get('org.pepstock.charba.client.geo.GeoDatasetHandler$impl');
  HasCommonOptions = goog.module.get('org.pepstock.charba.client.geo.HasCommonOptions$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
/**@const {?string}*/
BubbleMapDataset.f_INVALID_SET_DATA_POINTS_CALL__org_pepstock_charba_client_geo_BubbleMapDataset_ = "'setDataPoints' method is not invokable by a bubble map chart. Use 'setValues' method";
/**@const {?string}*/
BubbleMapDataset.f_INVALID_GET_DATA_POINTS_CALL__org_pepstock_charba_client_geo_BubbleMapDataset_ = "'getDataPoints' method is not invokable by a bubble map chart. Use 'getValues' method";
/**@type {BubbleMapDataPointFactory}*/
BubbleMapDataset.f_FACTORY__org_pepstock_charba_client_geo_BubbleMapDataset_;
IsGeoDataset.$markImplementor(BubbleMapDataset);
$Util.$setClassMetadata(BubbleMapDataset, "org.pepstock.charba.client.geo.BubbleMapDataset");

exports = BubbleMapDataset;

//# sourceMappingURL=BubbleMapDataset.js.map
