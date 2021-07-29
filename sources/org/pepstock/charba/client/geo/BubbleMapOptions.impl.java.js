goog.module('org.pepstock.charba.client.geo.BubbleMapOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseGeoOptions = goog.require('org.pepstock.charba.client.geo.BaseGeoOptions$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
let BubbleMapElements = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapElements$impl');
let BubbleMapRemappedOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapOptions.BubbleMapRemappedOptionsFactory$impl');
let BubbleMapOptionsMapper = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapOptionsMapper$impl');
let BubbleMapScales = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapScales$impl');
let CommonOptionsHandler = goog.forwardDeclare('org.pepstock.charba.client.geo.CommonOptionsHandler$impl');
let ProjectionAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.ProjectionAxis$impl');
let SizeAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.SizeAxis$impl');
let ExtendedOptions = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class BubbleMapOptions extends BaseGeoOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {BubbleMapRemappedOptionsFactory}*/
  this.f_factory__org_pepstock_charba_client_geo_BubbleMapOptions_;
  /**@type {BubbleMapElements}*/
  this.f_elements__org_pepstock_charba_client_geo_BubbleMapOptions_;
  /**@type {BubbleMapScales}*/
  this.f_scales__org_pepstock_charba_client_geo_BubbleMapOptions_;
  /**@type {CommonOptionsHandler}*/
  this.f_optionsHandler__org_pepstock_charba_client_geo_BubbleMapOptions_;
  /**@type {BubbleMapOptionsMapper}*/
  this.f_mapper__org_pepstock_charba_client_geo_BubbleMapOptions_;
 }
 /** @return {!BubbleMapOptions} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  BubbleMapOptions.$clinit();
  let $instance = new BubbleMapOptions();
  $instance.$ctor__org_pepstock_charba_client_geo_BubbleMapOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_BubbleMapOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_geo_BaseGeoOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  this.f_factory__org_pepstock_charba_client_geo_BubbleMapOptions_ = BubbleMapRemappedOptionsFactory.$create__org_pepstock_charba_client_geo_BubbleMapOptions(this);
  this.m_afterConfigurationUpdate__();
  this.f_scales__org_pepstock_charba_client_geo_BubbleMapOptions_ = BubbleMapScales.$create__org_pepstock_charba_client_geo_BaseGeoOptions(this);
  this.f_elements__org_pepstock_charba_client_geo_BubbleMapOptions_ = BubbleMapElements.$create__org_pepstock_charba_client_geo_BubbleMapOptions(this);
 }
 /** @override */
 m_afterConfigurationUpdate__() {
  this.f_mapper__org_pepstock_charba_client_geo_BubbleMapOptions_ = /**@type {BubbleMapOptionsMapper}*/ ($Casts.$to(/**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getRemappedOptions__org_pepstock_charba_client_controllers_ControllerMapperFactory(this.f_factory__org_pepstock_charba_client_geo_BubbleMapOptions_), BubbleMapOptionsMapper));
  this.f_optionsHandler__org_pepstock_charba_client_geo_BubbleMapOptions_ = CommonOptionsHandler.$create__org_pepstock_charba_client_geo_BaseGeoOptionsMapper(this.f_mapper__org_pepstock_charba_client_geo_BubbleMapOptions_);
 }
 /** @override */
 m_afterAxisConfigurationUpdate__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  if (ProjectionAxis.$isInstance(axis)) {
   let pAxis = /**@type {ProjectionAxis}*/ ($Casts.$to(axis, ProjectionAxis));
   pAxis.m_afterAxisConfigurationUpdate___$pp_org_pepstock_charba_client_geo();
  } else if (SizeAxis.$isInstance(axis)) {
   let sAxis = /**@type {SizeAxis}*/ ($Casts.$to(axis, SizeAxis));
   sAxis.m_afterAxisConfigurationUpdate___$pp_org_pepstock_charba_client_geo();
  }
 }
 /** @override @return {CommonOptionsHandler} */
 m_getHandler__() {
  return this.f_optionsHandler__org_pepstock_charba_client_geo_BubbleMapOptions_;
 }
 /** @override @return {BubbleMapOptionsMapper} */
 m_getMapper___$pp_org_pepstock_charba_client_geo() {
  return this.f_mapper__org_pepstock_charba_client_geo_BubbleMapOptions_;
 }
 /** @override @return {BubbleMapElements} */
 m_getElements__() {
  return this.f_elements__org_pepstock_charba_client_geo_BubbleMapOptions_;
 }
 /** @override @return {BubbleMapScales} */
 m_getScales__() {
  return this.f_scales__org_pepstock_charba_client_geo_BubbleMapOptions_;
 }
 
 static $clinit() {
  BubbleMapOptions.$clinit = () =>{};
  BubbleMapOptions.$loadModules();
  BaseGeoOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BubbleMapOptions;
 }
 
 static $loadModules() {
  BubbleMapElements = goog.module.get('org.pepstock.charba.client.geo.BubbleMapElements$impl');
  BubbleMapRemappedOptionsFactory = goog.module.get('org.pepstock.charba.client.geo.BubbleMapOptions.BubbleMapRemappedOptionsFactory$impl');
  BubbleMapOptionsMapper = goog.module.get('org.pepstock.charba.client.geo.BubbleMapOptionsMapper$impl');
  BubbleMapScales = goog.module.get('org.pepstock.charba.client.geo.BubbleMapScales$impl');
  CommonOptionsHandler = goog.module.get('org.pepstock.charba.client.geo.CommonOptionsHandler$impl');
  ProjectionAxis = goog.module.get('org.pepstock.charba.client.geo.ProjectionAxis$impl');
  SizeAxis = goog.module.get('org.pepstock.charba.client.geo.SizeAxis$impl');
  ExtendedOptions = goog.module.get('org.pepstock.charba.client.options.ExtendedOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(BubbleMapOptions, "org.pepstock.charba.client.geo.BubbleMapOptions");

exports = BubbleMapOptions;

//# sourceMappingURL=BubbleMapOptions.js.map
