goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartDatasets$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultDatasets = goog.require('org.pepstock.charba.client.defaults.IsDefaultDatasets$impl');

let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let IsDefaultTypedDataset = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTypedDataset$impl');

/**
 * @implements {IsDefaultDatasets}
 */
class DefaultChartDatasets extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultDatasets}*/
  this.f_datasets__org_pepstock_charba_client_defaults_chart_DefaultChartDatasets_;
 }
 /** @return {!DefaultChartDatasets} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultDatasets(/** IsDefaultDatasets */ datasets) {
  DefaultChartDatasets.$clinit();
  let $instance = new DefaultChartDatasets();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartDatasets__org_pepstock_charba_client_defaults_IsDefaultDatasets(datasets);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartDatasets__org_pepstock_charba_client_defaults_IsDefaultDatasets(/** IsDefaultDatasets */ datasets) {
  this.$ctor__java_lang_Object__();
  this.f_datasets__org_pepstock_charba_client_defaults_chart_DefaultChartDatasets_ = datasets;
 }
 /** @override @return {IsDefaultTypedDataset} */
 m_get__org_pepstock_charba_client_Type(/** Type */ type) {
  return this.f_datasets__org_pepstock_charba_client_defaults_chart_DefaultChartDatasets_.m_get__org_pepstock_charba_client_Type(type);
 }
 
 static $clinit() {
  DefaultChartDatasets.$clinit = () =>{};
  DefaultChartDatasets.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartDatasets;
 }
 
 static $loadModules() {}
}
IsDefaultDatasets.$markImplementor(DefaultChartDatasets);
$Util.$setClassMetadata(DefaultChartDatasets, "org.pepstock.charba.client.defaults.chart.DefaultChartDatasets");

exports = DefaultChartDatasets;

//# sourceMappingURL=DefaultChartDatasets.js.map
