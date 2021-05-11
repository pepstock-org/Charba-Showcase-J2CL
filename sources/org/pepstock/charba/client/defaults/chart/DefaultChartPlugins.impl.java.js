goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartPlugins$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultPlugins = goog.require('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');

let AbstractPluginOptions = goog.forwardDeclare('org.pepstock.charba.client.plugins.AbstractPluginOptions$impl');
let AbstractPluginOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

/**
 * @implements {IsDefaultPlugins}
 */
class DefaultChartPlugins extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultPlugins}*/
  this.f_plugins__org_pepstock_charba_client_defaults_chart_DefaultChartPlugins_;
 }
 /** @return {!DefaultChartPlugins} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultPlugins(/** IsDefaultPlugins */ plugins) {
  DefaultChartPlugins.$clinit();
  let $instance = new DefaultChartPlugins();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartPlugins__org_pepstock_charba_client_defaults_IsDefaultPlugins(plugins);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartPlugins__org_pepstock_charba_client_defaults_IsDefaultPlugins(/** IsDefaultPlugins */ plugins) {
  this.$ctor__java_lang_Object__();
  this.f_plugins__org_pepstock_charba_client_defaults_chart_DefaultChartPlugins_ = plugins;
 }
 /** @override @return {boolean} */
 m_isEnabled__java_lang_String(/** ?string */ pluginId) {
  return this.f_plugins__org_pepstock_charba_client_defaults_chart_DefaultChartPlugins_.m_isEnabled__java_lang_String(pluginId);
 }
 /** @override @return {boolean} */
 m_hasOptions__java_lang_String(/** ?string */ pluginId) {
  return this.f_plugins__org_pepstock_charba_client_defaults_chart_DefaultChartPlugins_.m_hasOptions__java_lang_String(pluginId);
 }
 /** @override @template T @return {T} */
 m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(/** ?string */ pluginId, /** AbstractPluginOptionsFactory<T> */ factory) {
  return this.f_plugins__org_pepstock_charba_client_defaults_chart_DefaultChartPlugins_.m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(pluginId, factory);
 }
 
 static $clinit() {
  DefaultChartPlugins.$clinit = () =>{};
  DefaultChartPlugins.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartPlugins;
 }
 
 static $loadModules() {}
}
IsDefaultPlugins.$markImplementor(DefaultChartPlugins);
$Util.$setClassMetadata(DefaultChartPlugins, "org.pepstock.charba.client.defaults.chart.DefaultChartPlugins");

exports = DefaultChartPlugins;

//# sourceMappingURL=DefaultChartPlugins.js.map
