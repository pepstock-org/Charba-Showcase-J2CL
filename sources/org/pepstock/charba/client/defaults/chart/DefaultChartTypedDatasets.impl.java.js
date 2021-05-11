goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartTypedDatasets$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultTypedDataset = goog.require('org.pepstock.charba.client.defaults.IsDefaultTypedDataset$impl');

let IsDefaultAnimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimation$impl');
let IsDefaultAnimations = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimations$impl');
let IsDefaultTransitions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTransitions$impl');

/**
 * @implements {IsDefaultTypedDataset}
 */
class DefaultChartTypedDatasets extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultTypedDataset}*/
  this.f_dataset__org_pepstock_charba_client_defaults_chart_DefaultChartTypedDatasets_;
 }
 /** @return {!DefaultChartTypedDatasets} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultTypedDataset(/** IsDefaultTypedDataset */ dataset) {
  DefaultChartTypedDatasets.$clinit();
  let $instance = new DefaultChartTypedDatasets();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartTypedDatasets__org_pepstock_charba_client_defaults_IsDefaultTypedDataset(dataset);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartTypedDatasets__org_pepstock_charba_client_defaults_IsDefaultTypedDataset(/** IsDefaultTypedDataset */ dataset) {
  this.$ctor__java_lang_Object__();
  this.f_dataset__org_pepstock_charba_client_defaults_chart_DefaultChartTypedDatasets_ = dataset;
 }
 /** @override @return {IsDefaultAnimation} */
 m_getAnimation__() {
  return this.f_dataset__org_pepstock_charba_client_defaults_chart_DefaultChartTypedDatasets_.m_getAnimation__();
 }
 /** @override @return {IsDefaultTransitions} */
 m_getTransitions__() {
  return this.f_dataset__org_pepstock_charba_client_defaults_chart_DefaultChartTypedDatasets_.m_getTransitions__();
 }
 /** @override @return {IsDefaultAnimations} */
 m_getAnimations__() {
  return this.f_dataset__org_pepstock_charba_client_defaults_chart_DefaultChartTypedDatasets_.m_getAnimations__();
 }
 /** @override @return {number} */
 m_getBarPercentage__() {
  return this.f_dataset__org_pepstock_charba_client_defaults_chart_DefaultChartTypedDatasets_.m_getBarPercentage__();
 }
 /** @override @return {number} */
 m_getCategoryPercentage__() {
  return this.f_dataset__org_pepstock_charba_client_defaults_chart_DefaultChartTypedDatasets_.m_getCategoryPercentage__();
 }
 /** @override @return {number} */
 m_getBarThickness__() {
  return this.f_dataset__org_pepstock_charba_client_defaults_chart_DefaultChartTypedDatasets_.m_getBarThickness__();
 }
 /** @override @return {number} */
 m_getMaxBarThickness__() {
  return this.f_dataset__org_pepstock_charba_client_defaults_chart_DefaultChartTypedDatasets_.m_getMaxBarThickness__();
 }
 /** @override @return {number} */
 m_getMinBarLength__() {
  return this.f_dataset__org_pepstock_charba_client_defaults_chart_DefaultChartTypedDatasets_.m_getMinBarLength__();
 }
 /** @override @return {boolean} */
 m_isGrouped__() {
  return this.f_dataset__org_pepstock_charba_client_defaults_chart_DefaultChartTypedDatasets_.m_isGrouped__();
 }
 /** @override @return {boolean} */
 m_isShowLine__() {
  return this.f_dataset__org_pepstock_charba_client_defaults_chart_DefaultChartTypedDatasets_.m_isShowLine__();
 }
 
 static $clinit() {
  DefaultChartTypedDatasets.$clinit = () =>{};
  DefaultChartTypedDatasets.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartTypedDatasets;
 }
 
 static $loadModules() {}
}
IsDefaultTypedDataset.$markImplementor(DefaultChartTypedDatasets);
$Util.$setClassMetadata(DefaultChartTypedDatasets, "org.pepstock.charba.client.defaults.chart.DefaultChartTypedDatasets");

exports = DefaultChartTypedDatasets;

//# sourceMappingURL=DefaultChartTypedDatasets.js.map
