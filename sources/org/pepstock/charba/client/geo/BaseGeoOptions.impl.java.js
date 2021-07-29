goog.module('org.pepstock.charba.client.geo.BaseGeoOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ScalesOptions = goog.require('org.pepstock.charba.client.configuration.ScalesOptions$impl');
const HasCommonOptions = goog.require('org.pepstock.charba.client.geo.HasCommonOptions$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
let BaseGeoOptionsMapper = goog.forwardDeclare('org.pepstock.charba.client.geo.BaseGeoOptionsMapper$impl');
let Feature = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature$impl');
let Graticule = goog.forwardDeclare('org.pepstock.charba.client.geo.Graticule$impl');
let ClipMap = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.ClipMap$impl');

/**
 * @abstract
 * @implements {HasCommonOptions}
 */
class BaseGeoOptions extends ScalesOptions {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_geo_BaseGeoOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_configuration_ScalesOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__boolean(chart, defaultValues, false);
 }
 /** @abstract @return {BaseGeoOptionsMapper} */
 m_getMapper___$pp_org_pepstock_charba_client_geo() {}
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
 
 static $clinit() {
  BaseGeoOptions.$clinit = () =>{};
  BaseGeoOptions.$loadModules();
  ScalesOptions.$clinit();
  HasCommonOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseGeoOptions;
 }
 
 static $loadModules() {}
}
HasCommonOptions.$markImplementor(BaseGeoOptions);
$Util.$setClassMetadata(BaseGeoOptions, "org.pepstock.charba.client.geo.BaseGeoOptions");

exports = BaseGeoOptions;

//# sourceMappingURL=BaseGeoOptions.js.map
