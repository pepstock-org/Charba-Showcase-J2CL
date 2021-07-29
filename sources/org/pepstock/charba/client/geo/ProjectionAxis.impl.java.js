goog.module('org.pepstock.charba.client.geo.ProjectionAxis$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Axis = goog.require('org.pepstock.charba.client.configuration.Axis$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let AxisType = goog.forwardDeclare('org.pepstock.charba.client.configuration.AxisType$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let ScaleDataType = goog.forwardDeclare('org.pepstock.charba.client.enums.ScaleDataType$impl');
let BaseGeoChart = goog.forwardDeclare('org.pepstock.charba.client.geo.BaseGeoChart$impl');
let BubbleMapChart = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapChart$impl');
let ChoroplethChart = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethChart$impl');
let ProjectionAxisRemappedOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.geo.ProjectionAxis.ProjectionAxisRemappedOptionsFactory$impl');
let ProjectionAxisMapper = goog.forwardDeclare('org.pepstock.charba.client.geo.ProjectionAxisMapper$impl');
let Projection = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.Projection$impl');
let ExtendedScale = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedScale$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class ProjectionAxis extends Axis {
 /** @protected */
 constructor() {
  super();
  /**@type {ProjectionAxisRemappedOptionsFactory}*/
  this.f_factory__org_pepstock_charba_client_geo_ProjectionAxis_;
  /**@type {ProjectionAxisMapper}*/
  this.f_mapper__org_pepstock_charba_client_geo_ProjectionAxis_;
 }
 /** @return {!ProjectionAxis} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  ProjectionAxis.$clinit();
  let $instance = new ProjectionAxis();
  $instance.$ctor__org_pepstock_charba_client_geo_ProjectionAxis__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_ProjectionAxis__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_enums_AxisKind(chart, ProjectionAxis.$static_ID__org_pepstock_charba_client_geo_ProjectionAxis, ProjectionAxis.$static_TYPE__org_pepstock_charba_client_geo_ProjectionAxis, AxisKind.f_X__org_pepstock_charba_client_enums_AxisKind);
  let chartType = this.m_checkAndGetControllerType__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_geo_ProjectionAxis(chart);
  this.f_factory__org_pepstock_charba_client_geo_ProjectionAxis_ = ProjectionAxisRemappedOptionsFactory.$create__org_pepstock_charba_client_controllers_ControllerType(chartType);
  this.m_afterAxisConfigurationUpdate___$pp_org_pepstock_charba_client_geo();
 }
 
 m_afterAxisConfigurationUpdate___$pp_org_pepstock_charba_client_geo() {
  this.f_mapper__org_pepstock_charba_client_geo_ProjectionAxis_ = /**@type {ProjectionAxisMapper}*/ ($Casts.$to(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)).m_getRemappedOptions__org_pepstock_charba_client_controllers_ControllerMapperFactory(this.f_factory__org_pepstock_charba_client_geo_ProjectionAxis_), ProjectionAxisMapper));
 }
 
 m_setProjection__org_pepstock_charba_client_geo_enums_Projection(/** Projection */ projection) {
  this.f_mapper__org_pepstock_charba_client_geo_ProjectionAxis_.m_setProjection__org_pepstock_charba_client_geo_enums_Projection_$pp_org_pepstock_charba_client_geo(projection);
 }
 /** @return {Projection} */
 m_getProjection__() {
  return this.f_mapper__org_pepstock_charba_client_geo_ProjectionAxis_.m_getProjection___$pp_org_pepstock_charba_client_geo();
 }
 
 m_setProjectionScale__double(/** number */ projectionScale) {
  this.f_mapper__org_pepstock_charba_client_geo_ProjectionAxis_.m_setProjectionScale__double_$pp_org_pepstock_charba_client_geo(projectionScale);
 }
 /** @return {number} */
 m_getProjectionScale__() {
  return this.f_mapper__org_pepstock_charba_client_geo_ProjectionAxis_.m_getProjectionScale___$pp_org_pepstock_charba_client_geo();
 }
 
 m_setProjectionOffset__double__double(/** number */ x, /** number */ y) {
  this.f_mapper__org_pepstock_charba_client_geo_ProjectionAxis_.m_setProjectionOffset__double__double_$pp_org_pepstock_charba_client_geo(x, y);
 }
 /** @return {List<?number>} */
 m_getProjectionOffset__() {
  return this.f_mapper__org_pepstock_charba_client_geo_ProjectionAxis_.m_getProjectionOffset___$pp_org_pepstock_charba_client_geo();
 }
 /** @return {ControllerType} */
 m_checkAndGetControllerType__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_geo_ProjectionAxis(/** IsChart */ chart) {
  if (ControllerType.$isInstance(chart.m_getType__())) {
   let chartType = /**@type {ControllerType}*/ ($Casts.$to(chart.m_getType__(), ControllerType));
   if (BubbleMapChart.f_CONTROLLER_TYPE__org_pepstock_charba_client_geo_BubbleMapChart.equals(chart.m_getType__()) || ChoroplethChart.f_CONTROLLER_TYPE__org_pepstock_charba_client_geo_ChoroplethChart.equals(chartType)) {
    return chartType;
   } else {
    throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Chart argument is not an instance of " + j_l_String.m_valueOf__java_lang_Object(Class.$get(BaseGeoChart).m_getName__()) + " but " + j_l_String.m_valueOf__java_lang_Object($Objects.m_getClass__java_lang_Object(chart).m_getName__())));
   }
  } else {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Chart argument is not a controller."));
  }
 }
 /** @return {ScaleId} */
 static get f_ID__org_pepstock_charba_client_geo_ProjectionAxis() {
  return (ProjectionAxis.$clinit(), ProjectionAxis.$static_ID__org_pepstock_charba_client_geo_ProjectionAxis);
 }
 /** @return {AxisType} */
 static get f_TYPE__org_pepstock_charba_client_geo_ProjectionAxis() {
  return (ProjectionAxis.$clinit(), ProjectionAxis.$static_TYPE__org_pepstock_charba_client_geo_ProjectionAxis);
 }
 
 static $clinit() {
  ProjectionAxis.$clinit = () =>{};
  ProjectionAxis.$loadModules();
  Axis.$clinit();
  ProjectionAxis.$static_ID__org_pepstock_charba_client_geo_ProjectionAxis = ScaleId.m_create__java_lang_String("xy");
  ProjectionAxis.$static_TYPE__org_pepstock_charba_client_geo_ProjectionAxis = AxisType.m_create__java_lang_String__org_pepstock_charba_client_enums_ChartAxisType__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_ScaleDataType("projection", null, ProjectionAxis.$static_ID__org_pepstock_charba_client_geo_ProjectionAxis, ScaleDataType.f_NUMBER__org_pepstock_charba_client_enums_ScaleDataType);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ProjectionAxis;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  AxisType = goog.module.get('org.pepstock.charba.client.configuration.AxisType$impl');
  ControllerType = goog.module.get('org.pepstock.charba.client.controllers.ControllerType$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  ScaleDataType = goog.module.get('org.pepstock.charba.client.enums.ScaleDataType$impl');
  BaseGeoChart = goog.module.get('org.pepstock.charba.client.geo.BaseGeoChart$impl');
  BubbleMapChart = goog.module.get('org.pepstock.charba.client.geo.BubbleMapChart$impl');
  ChoroplethChart = goog.module.get('org.pepstock.charba.client.geo.ChoroplethChart$impl');
  ProjectionAxisRemappedOptionsFactory = goog.module.get('org.pepstock.charba.client.geo.ProjectionAxis.ProjectionAxisRemappedOptionsFactory$impl');
  ProjectionAxisMapper = goog.module.get('org.pepstock.charba.client.geo.ProjectionAxisMapper$impl');
  ExtendedScale = goog.module.get('org.pepstock.charba.client.options.ExtendedScale$impl');
  ScaleId = goog.module.get('org.pepstock.charba.client.options.ScaleId$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@private {ScaleId}*/
ProjectionAxis.$static_ID__org_pepstock_charba_client_geo_ProjectionAxis;
/**@private {AxisType}*/
ProjectionAxis.$static_TYPE__org_pepstock_charba_client_geo_ProjectionAxis;
$Util.$setClassMetadata(ProjectionAxis, "org.pepstock.charba.client.geo.ProjectionAxis");

exports = ProjectionAxis;

//# sourceMappingURL=ProjectionAxis.js.map
