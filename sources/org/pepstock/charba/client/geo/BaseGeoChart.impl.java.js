goog.module('org.pepstock.charba.client.geo.BaseGeoChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractChart = goog.require('org.pepstock.charba.client.AbstractChart$impl');
const IsDatasetCreator = goog.require('org.pepstock.charba.client.IsDatasetCreator$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let BaseGeoController = goog.forwardDeclare('org.pepstock.charba.client.geo.BaseGeoController$impl');
let BaseGeoOptions = goog.forwardDeclare('org.pepstock.charba.client.geo.BaseGeoOptions$impl');
let BubbleMapChart = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapChart$impl');
let BubbleMapDataset = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapDataset$impl');
let ChoroplethDataset = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethDataset$impl');
let GeoExtendedChartType = goog.forwardDeclare('org.pepstock.charba.client.geo.GeoExtendedChartType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @abstract
 * @template D
 * @implements {IsDatasetCreator<D>}
 */
class BaseGeoChart extends AbstractChart {
 /** @protected */
 constructor() {
  super();
  /**@type {BaseGeoController}*/
  this.f_geoController__org_pepstock_charba_client_geo_BaseGeoChart_;
 }
 
 $ctor__org_pepstock_charba_client_geo_BaseGeoChart__org_pepstock_charba_client_Type(/** Type */ type) {
  this.$ctor__org_pepstock_charba_client_AbstractChart__org_pepstock_charba_client_Type(type);
  this.$init___$p_org_pepstock_charba_client_geo_BaseGeoChart();
 }
 /** @abstract @return {ControllerType} */
 m_getControllerType___$pp_org_pepstock_charba_client_geo() {}
 /** @return {BaseGeoController} */
 m_getController___$pp_org_pepstock_charba_client_geo() {
  return this.f_geoController__org_pepstock_charba_client_geo_BaseGeoChart_;
 }
 /** @override */
 m_applyConfiguration__() {
  let type = this.m_getControllerType___$pp_org_pepstock_charba_client_geo();
  if (type.m_register__() && $Equality.$same(this.f_geoController__org_pepstock_charba_client_geo_BaseGeoChart_, null)) {
   let controllerInstance = Defaults.m_get__().m_getControllers__().m_getController__org_pepstock_charba_client_controllers_ControllerType(type);
   Checker.m_assertCheck__boolean__java_lang_String(BaseGeoController.$isInstance(controllerInstance), "Controller stored for " + j_l_String.m_valueOf__java_lang_Object(this.m_getControllerType___$pp_org_pepstock_charba_client_geo().m_value__()) + " is not a " + j_l_String.m_valueOf__java_lang_Object(Class.$get(BaseGeoController).m_getName__()));
   this.f_geoController__org_pepstock_charba_client_geo_BaseGeoChart_ = /**@type {BaseGeoController}*/ ($Casts.$to(controllerInstance, BaseGeoController));
  }
  let /** BaseGeoOptions */ options;
  Checker.m_assertCheck__boolean__java_lang_String(BaseGeoOptions.$isInstance(this.m_getOptions__()), "Chart options are " + j_l_String.m_valueOf__java_lang_Object($Objects.m_getClass__java_lang_Object(this.m_getOptions__()).m_getName__()) + " and not a " + j_l_String.m_valueOf__java_lang_Object(Class.$get(BaseGeoOptions).m_getName__()));
  options = /**@type {BaseGeoOptions}*/ ($Casts.$to(this.m_getOptions__(), BaseGeoOptions));
  options.m_getLegend__().m_setDisplay__boolean(false);
  if (!this.m_getData__().m_getDatasets__().isEmpty()) {
   Checker.m_checkIfEqualTo__int__int__java_lang_String(this.m_getData__().m_getDatasets__().size(), 1, "Datasets size");
   let dataset = /**@type {Dataset}*/ ($Casts.$to(this.m_getData__().m_getDatasets__().getAtIndex(0), Dataset));
   if (BubbleMapChart.f_CONTROLLER_TYPE__org_pepstock_charba_client_geo_BubbleMapChart.equals(this.m_getType__())) {
    Checker.m_assertCheck__boolean__java_lang_String(BubbleMapDataset.$isInstance(dataset), "Dataset is not a " + j_l_String.m_valueOf__java_lang_Object(Class.$get(BubbleMapDataset).m_getName__()) + " but " + j_l_String.m_valueOf__java_lang_Object($Objects.m_getClass__java_lang_Object(dataset).m_getName__()));
   } else {
    Checker.m_assertCheck__boolean__java_lang_String(ChoroplethDataset.$isInstance(dataset), "Dataset is not a " + j_l_String.m_valueOf__java_lang_Object(Class.$get(ChoroplethDataset).m_getName__()) + " but " + j_l_String.m_valueOf__java_lang_Object($Objects.m_getClass__java_lang_Object(dataset).m_getName__()));
   }
  }
 }
 //Default method forwarding stub.
 /** @override @return {D} */
 m_newDataset__() {
  return IsDatasetCreator.m_newDataset__$default__org_pepstock_charba_client_IsDatasetCreator(this);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_geo_BaseGeoChart() {
  this.f_geoController__org_pepstock_charba_client_geo_BaseGeoChart_ = null;
 }
 /** @return {GeoExtendedChartType} */
 static get f_GEO_EXTENDED_CHART_TYPE__org_pepstock_charba_client_geo_BaseGeoChart() {
  return (BaseGeoChart.$clinit(), BaseGeoChart.$static_GEO_EXTENDED_CHART_TYPE__org_pepstock_charba_client_geo_BaseGeoChart);
 }
 
 static $clinit() {
  BaseGeoChart.$clinit = () =>{};
  BaseGeoChart.$loadModules();
  AbstractChart.$clinit();
  IsDatasetCreator.$clinit();
  BaseGeoChart.$static_GEO_EXTENDED_CHART_TYPE__org_pepstock_charba_client_geo_BaseGeoChart = GeoExtendedChartType.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseGeoChart;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  BaseGeoController = goog.module.get('org.pepstock.charba.client.geo.BaseGeoController$impl');
  BaseGeoOptions = goog.module.get('org.pepstock.charba.client.geo.BaseGeoOptions$impl');
  BubbleMapChart = goog.module.get('org.pepstock.charba.client.geo.BubbleMapChart$impl');
  BubbleMapDataset = goog.module.get('org.pepstock.charba.client.geo.BubbleMapDataset$impl');
  ChoroplethDataset = goog.module.get('org.pepstock.charba.client.geo.ChoroplethDataset$impl');
  GeoExtendedChartType = goog.module.get('org.pepstock.charba.client.geo.GeoExtendedChartType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@private {GeoExtendedChartType}*/
BaseGeoChart.$static_GEO_EXTENDED_CHART_TYPE__org_pepstock_charba_client_geo_BaseGeoChart;
IsDatasetCreator.$markImplementor(BaseGeoChart);
$Util.$setClassMetadata(BaseGeoChart, "org.pepstock.charba.client.geo.BaseGeoChart");

exports = BaseGeoChart;

//# sourceMappingURL=BaseGeoChart.js.map
