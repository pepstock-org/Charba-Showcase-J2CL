goog.module('org.pepstock.charba.client.configuration.ChartContainer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');

/**
 * @abstract
 */
class ChartContainer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsChart}*/
  this.f_chart__org_pepstock_charba_client_configuration_ChartContainer_;
 }
 
 $ctor__org_pepstock_charba_client_configuration_ChartContainer__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__java_lang_Object__();
  IsChart.m_checkIfValid__org_pepstock_charba_client_IsChart(chart);
  this.f_chart__org_pepstock_charba_client_configuration_ChartContainer_ = chart;
 }
 /** @return {IsChart} */
 m_getChart__() {
  return this.f_chart__org_pepstock_charba_client_configuration_ChartContainer_;
 }
 
 static $clinit() {
  ChartContainer.$clinit = () =>{};
  ChartContainer.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartContainer;
 }
 
 static $loadModules() {
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
 }
}
$Util.$setClassMetadata(ChartContainer, "org.pepstock.charba.client.configuration.ChartContainer");

exports = ChartContainer;

//# sourceMappingURL=ChartContainer.js.map
