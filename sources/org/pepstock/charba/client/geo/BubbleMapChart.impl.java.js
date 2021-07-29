goog.module('org.pepstock.charba.client.geo.BubbleMapChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseGeoChart = goog.require('org.pepstock.charba.client.geo.BaseGeoChart$impl');

let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let BaseGeoController = goog.forwardDeclare('org.pepstock.charba.client.geo.BaseGeoController$impl');
let BubbleMapDataset = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapDataset$impl');
let BubbleMapOptions = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapOptions$impl');

/**
 * @extends {BaseGeoChart<BubbleMapDataset>}
 */
class BubbleMapChart extends BaseGeoChart {
 /** @protected */
 constructor() {
  super();
  /**@type {BubbleMapOptions}*/
  this.f_options__org_pepstock_charba_client_geo_BubbleMapChart_;
 }
 /** @return {!BubbleMapChart} */
 static $create__() {
  BubbleMapChart.$clinit();
  let $instance = new BubbleMapChart();
  $instance.$ctor__org_pepstock_charba_client_geo_BubbleMapChart__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_BubbleMapChart__() {
  this.$ctor__org_pepstock_charba_client_geo_BaseGeoChart__org_pepstock_charba_client_Type(BubbleMapChart.$static_CONTROLLER_TYPE__org_pepstock_charba_client_geo_BubbleMapChart);
  this.f_options__org_pepstock_charba_client_geo_BubbleMapChart_ = BubbleMapOptions.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(this, this.m_getDefaultChartOptions__());
 }
 /** @override @return {BubbleMapOptions} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_geo_BubbleMapChart_;
 }
 /** @override @return {BubbleMapDataset} */
 m_newDataset__boolean(/** boolean */ hidden) {
  return BubbleMapDataset.$create__();
 }
 /** @override @return {ControllerType} */
 m_getControllerType___$pp_org_pepstock_charba_client_geo() {
  return BubbleMapChart.$static_CONTROLLER_TYPE__org_pepstock_charba_client_geo_BubbleMapChart;
 }
 /** @return {ControllerType} */
 static get f_CONTROLLER_TYPE__org_pepstock_charba_client_geo_BubbleMapChart() {
  return (BubbleMapChart.$clinit(), BubbleMapChart.$static_CONTROLLER_TYPE__org_pepstock_charba_client_geo_BubbleMapChart);
 }
 
 static $clinit() {
  BubbleMapChart.$clinit = () =>{};
  BubbleMapChart.$loadModules();
  BaseGeoChart.$clinit();
  BubbleMapChart.$static_CONTROLLER_TYPE__org_pepstock_charba_client_geo_BubbleMapChart = ControllerType.$create__java_lang_String__org_pepstock_charba_client_Type__org_pepstock_charba_client_controllers_ControllerProvider(BubbleMapChart.f_TYPE__org_pepstock_charba_client_geo_BubbleMapChart, BaseGeoChart.f_GEO_EXTENDED_CHART_TYPE__org_pepstock_charba_client_geo_BaseGeoChart, BaseGeoController.f_PROVIDER__org_pepstock_charba_client_geo_BaseGeoController);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BubbleMapChart;
 }
 
 static $loadModules() {
  ControllerType = goog.module.get('org.pepstock.charba.client.controllers.ControllerType$impl');
  BaseGeoController = goog.module.get('org.pepstock.charba.client.geo.BaseGeoController$impl');
  BubbleMapDataset = goog.module.get('org.pepstock.charba.client.geo.BubbleMapDataset$impl');
  BubbleMapOptions = goog.module.get('org.pepstock.charba.client.geo.BubbleMapOptions$impl');
 }
}
/**@const {?string}*/
BubbleMapChart.f_TYPE__org_pepstock_charba_client_geo_BubbleMapChart = "bubbleMap";
/**@private {ControllerType}*/
BubbleMapChart.$static_CONTROLLER_TYPE__org_pepstock_charba_client_geo_BubbleMapChart;
$Util.$setClassMetadata(BubbleMapChart, "org.pepstock.charba.client.geo.BubbleMapChart");

exports = BubbleMapChart;

//# sourceMappingURL=BubbleMapChart.js.map
