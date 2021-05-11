goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartDecimation$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultDecimation = goog.require('org.pepstock.charba.client.defaults.IsDefaultDecimation$impl');

let DecimationAlgorithm = goog.forwardDeclare('org.pepstock.charba.client.enums.DecimationAlgorithm$impl');

/**
 * @implements {IsDefaultDecimation}
 */
class DefaultChartDecimation extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultDecimation}*/
  this.f_decimation__org_pepstock_charba_client_defaults_chart_DefaultChartDecimation_;
 }
 /** @return {!DefaultChartDecimation} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultDecimation(/** IsDefaultDecimation */ decimation) {
  DefaultChartDecimation.$clinit();
  let $instance = new DefaultChartDecimation();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartDecimation__org_pepstock_charba_client_defaults_IsDefaultDecimation(decimation);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartDecimation__org_pepstock_charba_client_defaults_IsDefaultDecimation(/** IsDefaultDecimation */ decimation) {
  this.$ctor__java_lang_Object__();
  this.f_decimation__org_pepstock_charba_client_defaults_chart_DefaultChartDecimation_ = decimation;
 }
 /** @override @return {boolean} */
 m_isEnabled__() {
  return this.f_decimation__org_pepstock_charba_client_defaults_chart_DefaultChartDecimation_.m_isEnabled__();
 }
 /** @override @return {DecimationAlgorithm} */
 m_getAlgorithm__() {
  return this.f_decimation__org_pepstock_charba_client_defaults_chart_DefaultChartDecimation_.m_getAlgorithm__();
 }
 /** @override @return {number} */
 m_getSamples__() {
  return this.f_decimation__org_pepstock_charba_client_defaults_chart_DefaultChartDecimation_.m_getSamples__();
 }
 
 static $clinit() {
  DefaultChartDecimation.$clinit = () =>{};
  DefaultChartDecimation.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartDecimation;
 }
 
 static $loadModules() {}
}
IsDefaultDecimation.$markImplementor(DefaultChartDecimation);
$Util.$setClassMetadata(DefaultChartDecimation, "org.pepstock.charba.client.defaults.chart.DefaultChartDecimation");

exports = DefaultChartDecimation;

//# sourceMappingURL=DefaultChartDecimation.js.map
