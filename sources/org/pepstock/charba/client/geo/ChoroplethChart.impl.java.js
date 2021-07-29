goog.module('org.pepstock.charba.client.geo.ChoroplethChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseGeoChart = goog.require('org.pepstock.charba.client.geo.BaseGeoChart$impl');

let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let BaseGeoController = goog.forwardDeclare('org.pepstock.charba.client.geo.BaseGeoController$impl');
let ChoroplethDataset = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethDataset$impl');
let ChoroplethOptions = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethOptions$impl');

/**
 * @extends {BaseGeoChart<ChoroplethDataset>}
 */
class ChoroplethChart extends BaseGeoChart {
 /** @protected */
 constructor() {
  super();
  /**@type {ChoroplethOptions}*/
  this.f_options__org_pepstock_charba_client_geo_ChoroplethChart_;
 }
 /** @return {!ChoroplethChart} */
 static $create__() {
  ChoroplethChart.$clinit();
  let $instance = new ChoroplethChart();
  $instance.$ctor__org_pepstock_charba_client_geo_ChoroplethChart__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_ChoroplethChart__() {
  this.$ctor__org_pepstock_charba_client_geo_BaseGeoChart__org_pepstock_charba_client_Type(ChoroplethChart.$static_CONTROLLER_TYPE__org_pepstock_charba_client_geo_ChoroplethChart);
  this.f_options__org_pepstock_charba_client_geo_ChoroplethChart_ = ChoroplethOptions.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(this, this.m_getDefaultChartOptions__());
 }
 /** @override @return {ChoroplethOptions} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_geo_ChoroplethChart_;
 }
 /** @override @return {ChoroplethDataset} */
 m_newDataset__boolean(/** boolean */ hidden) {
  return ChoroplethDataset.$create__();
 }
 /** @override @return {ControllerType} */
 m_getControllerType___$pp_org_pepstock_charba_client_geo() {
  return ChoroplethChart.$static_CONTROLLER_TYPE__org_pepstock_charba_client_geo_ChoroplethChart;
 }
 /** @return {ControllerType} */
 static get f_CONTROLLER_TYPE__org_pepstock_charba_client_geo_ChoroplethChart() {
  return (ChoroplethChart.$clinit(), ChoroplethChart.$static_CONTROLLER_TYPE__org_pepstock_charba_client_geo_ChoroplethChart);
 }
 
 static $clinit() {
  ChoroplethChart.$clinit = () =>{};
  ChoroplethChart.$loadModules();
  BaseGeoChart.$clinit();
  ChoroplethChart.$static_CONTROLLER_TYPE__org_pepstock_charba_client_geo_ChoroplethChart = ControllerType.$create__java_lang_String__org_pepstock_charba_client_Type__org_pepstock_charba_client_controllers_ControllerProvider(ChoroplethChart.f_TYPE__org_pepstock_charba_client_geo_ChoroplethChart, BaseGeoChart.f_GEO_EXTENDED_CHART_TYPE__org_pepstock_charba_client_geo_BaseGeoChart, BaseGeoController.f_PROVIDER__org_pepstock_charba_client_geo_BaseGeoController);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChoroplethChart;
 }
 
 static $loadModules() {
  ControllerType = goog.module.get('org.pepstock.charba.client.controllers.ControllerType$impl');
  BaseGeoController = goog.module.get('org.pepstock.charba.client.geo.BaseGeoController$impl');
  ChoroplethDataset = goog.module.get('org.pepstock.charba.client.geo.ChoroplethDataset$impl');
  ChoroplethOptions = goog.module.get('org.pepstock.charba.client.geo.ChoroplethOptions$impl');
 }
}
/**@const {?string}*/
ChoroplethChart.f_TYPE__org_pepstock_charba_client_geo_ChoroplethChart = "choropleth";
/**@private {ControllerType}*/
ChoroplethChart.$static_CONTROLLER_TYPE__org_pepstock_charba_client_geo_ChoroplethChart;
$Util.$setClassMetadata(ChoroplethChart, "org.pepstock.charba.client.geo.ChoroplethChart");

exports = ChoroplethChart;

//# sourceMappingURL=ChoroplethChart.js.map
