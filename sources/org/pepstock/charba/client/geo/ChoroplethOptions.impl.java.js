goog.module('org.pepstock.charba.client.geo.ChoroplethOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseGeoOptions = goog.require('org.pepstock.charba.client.geo.BaseGeoOptions$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
let ChoroplethElements = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethElements$impl');
let ChoroplethRemappedOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethOptions.ChoroplethRemappedOptionsFactory$impl');
let ChoroplethOptionsMapper = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethOptionsMapper$impl');
let ChoroplethScales = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethScales$impl');
let ColorAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.ColorAxis$impl');
let CommonOptionsHandler = goog.forwardDeclare('org.pepstock.charba.client.geo.CommonOptionsHandler$impl');
let ProjectionAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.ProjectionAxis$impl');
let ExtendedOptions = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ChoroplethOptions extends BaseGeoOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {ChoroplethRemappedOptionsFactory}*/
  this.f_factory__org_pepstock_charba_client_geo_ChoroplethOptions_;
  /**@type {ChoroplethScales}*/
  this.f_scales__org_pepstock_charba_client_geo_ChoroplethOptions_;
  /**@type {ChoroplethElements}*/
  this.f_elements__org_pepstock_charba_client_geo_ChoroplethOptions_;
  /**@type {CommonOptionsHandler}*/
  this.f_optionsHandler__org_pepstock_charba_client_geo_ChoroplethOptions_;
  /**@type {ChoroplethOptionsMapper}*/
  this.f_mapper__org_pepstock_charba_client_geo_ChoroplethOptions_;
 }
 /** @return {!ChoroplethOptions} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  ChoroplethOptions.$clinit();
  let $instance = new ChoroplethOptions();
  $instance.$ctor__org_pepstock_charba_client_geo_ChoroplethOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_ChoroplethOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_geo_BaseGeoOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  this.f_factory__org_pepstock_charba_client_geo_ChoroplethOptions_ = ChoroplethRemappedOptionsFactory.$create__org_pepstock_charba_client_geo_ChoroplethOptions(this);
  this.m_afterConfigurationUpdate__();
  this.f_scales__org_pepstock_charba_client_geo_ChoroplethOptions_ = ChoroplethScales.$create__org_pepstock_charba_client_geo_BaseGeoOptions(this);
  this.f_elements__org_pepstock_charba_client_geo_ChoroplethOptions_ = ChoroplethElements.$create__org_pepstock_charba_client_geo_ChoroplethOptions(this);
 }
 /** @override */
 m_afterConfigurationUpdate__() {
  this.f_mapper__org_pepstock_charba_client_geo_ChoroplethOptions_ = /**@type {ChoroplethOptionsMapper}*/ ($Casts.$to(/**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getRemappedOptions__org_pepstock_charba_client_controllers_ControllerMapperFactory(this.f_factory__org_pepstock_charba_client_geo_ChoroplethOptions_), ChoroplethOptionsMapper));
  this.f_optionsHandler__org_pepstock_charba_client_geo_ChoroplethOptions_ = CommonOptionsHandler.$create__org_pepstock_charba_client_geo_BaseGeoOptionsMapper(this.f_mapper__org_pepstock_charba_client_geo_ChoroplethOptions_);
 }
 /** @override */
 m_afterAxisConfigurationUpdate__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  if (ProjectionAxis.$isInstance(axis)) {
   let pAxis = /**@type {ProjectionAxis}*/ ($Casts.$to(axis, ProjectionAxis));
   pAxis.m_afterAxisConfigurationUpdate___$pp_org_pepstock_charba_client_geo();
  } else if (ColorAxis.$isInstance(axis)) {
   let cAxis = /**@type {ColorAxis}*/ ($Casts.$to(axis, ColorAxis));
   cAxis.m_afterAxisConfigurationUpdate___$pp_org_pepstock_charba_client_geo();
  }
 }
 /** @override @return {CommonOptionsHandler} */
 m_getHandler__() {
  return this.f_optionsHandler__org_pepstock_charba_client_geo_ChoroplethOptions_;
 }
 /** @override @return {ChoroplethOptionsMapper} */
 m_getMapper___$pp_org_pepstock_charba_client_geo() {
  return this.f_mapper__org_pepstock_charba_client_geo_ChoroplethOptions_;
 }
 /** @override @return {ChoroplethElements} */
 m_getElements__() {
  return this.f_elements__org_pepstock_charba_client_geo_ChoroplethOptions_;
 }
 /** @override @return {ChoroplethScales} */
 m_getScales__() {
  return this.f_scales__org_pepstock_charba_client_geo_ChoroplethOptions_;
 }
 
 static $clinit() {
  ChoroplethOptions.$clinit = () =>{};
  ChoroplethOptions.$loadModules();
  BaseGeoOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChoroplethOptions;
 }
 
 static $loadModules() {
  ChoroplethElements = goog.module.get('org.pepstock.charba.client.geo.ChoroplethElements$impl');
  ChoroplethRemappedOptionsFactory = goog.module.get('org.pepstock.charba.client.geo.ChoroplethOptions.ChoroplethRemappedOptionsFactory$impl');
  ChoroplethOptionsMapper = goog.module.get('org.pepstock.charba.client.geo.ChoroplethOptionsMapper$impl');
  ChoroplethScales = goog.module.get('org.pepstock.charba.client.geo.ChoroplethScales$impl');
  ColorAxis = goog.module.get('org.pepstock.charba.client.geo.ColorAxis$impl');
  CommonOptionsHandler = goog.module.get('org.pepstock.charba.client.geo.CommonOptionsHandler$impl');
  ProjectionAxis = goog.module.get('org.pepstock.charba.client.geo.ProjectionAxis$impl');
  ExtendedOptions = goog.module.get('org.pepstock.charba.client.options.ExtendedOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ChoroplethOptions, "org.pepstock.charba.client.geo.ChoroplethOptions");

exports = ChoroplethOptions;

//# sourceMappingURL=ChoroplethOptions.js.map
