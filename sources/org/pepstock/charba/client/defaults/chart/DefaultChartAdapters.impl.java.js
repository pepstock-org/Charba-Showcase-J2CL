goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartAdapters$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAdapters = goog.require('org.pepstock.charba.client.defaults.IsDefaultAdapters$impl');

let IsDefaultDateAdapterOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultDateAdapterOptions$impl');
let DefaultChartDateAdapterOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartDateAdapterOptions$impl');
let Adapters = goog.forwardDeclare('org.pepstock.charba.client.options.Adapters$impl');

/**
 * @implements {IsDefaultAdapters}
 */
class DefaultChartAdapters extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultChartDateAdapterOptions}*/
  this.f_dateAdapterOptions__org_pepstock_charba_client_defaults_chart_DefaultChartAdapters_;
 }
 /** @return {!DefaultChartAdapters} */
 static $create__org_pepstock_charba_client_options_Adapters(/** Adapters */ adapters) {
  DefaultChartAdapters.$clinit();
  let $instance = new DefaultChartAdapters();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartAdapters__org_pepstock_charba_client_options_Adapters(adapters);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartAdapters__org_pepstock_charba_client_options_Adapters(/** Adapters */ adapters) {
  this.$ctor__java_lang_Object__();
  this.f_dateAdapterOptions__org_pepstock_charba_client_defaults_chart_DefaultChartAdapters_ = DefaultChartDateAdapterOptions.$create__org_pepstock_charba_client_defaults_IsDefaultDateAdapterOptions(adapters.m_getDate__());
 }
 /** @override @return {IsDefaultDateAdapterOptions} */
 m_getDate__() {
  return this.f_dateAdapterOptions__org_pepstock_charba_client_defaults_chart_DefaultChartAdapters_;
 }
 
 static $clinit() {
  DefaultChartAdapters.$clinit = () =>{};
  DefaultChartAdapters.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartAdapters;
 }
 
 static $loadModules() {
  DefaultChartDateAdapterOptions = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartDateAdapterOptions$impl');
 }
}
IsDefaultAdapters.$markImplementor(DefaultChartAdapters);
$Util.$setClassMetadata(DefaultChartAdapters, "org.pepstock.charba.client.defaults.chart.DefaultChartAdapters");

exports = DefaultChartAdapters;

//# sourceMappingURL=DefaultChartAdapters.js.map
