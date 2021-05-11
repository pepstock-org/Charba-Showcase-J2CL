goog.module('org.pepstock.charba.client.GlobalOptions.GlobalPlugins$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Plugins = goog.require('org.pepstock.charba.client.options.Plugins$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let DefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultOptions$impl');
let AbstractPluginOptions = goog.forwardDeclare('org.pepstock.charba.client.plugins.AbstractPluginOptions$impl');

class GlobalPlugins extends Plugins {
 /** @protected */
 constructor() {
  super();
  /**@type {ChartEnvelop<?string>}*/
  this.f_envelop__org_pepstock_charba_client_GlobalOptions_GlobalPlugins_;
 }
 /** @return {!GlobalPlugins} */
 static $create__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<Plugins> */ envelop) {
  GlobalPlugins.$clinit();
  let $instance = new GlobalPlugins();
  $instance.$ctor__org_pepstock_charba_client_GlobalOptions_GlobalPlugins__org_pepstock_charba_client_ChartEnvelop(envelop);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_GlobalOptions_GlobalPlugins__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<Plugins> */ envelop) {
  this.$ctor__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_ChartEnvelop(envelop);
  this.$init___$p_org_pepstock_charba_client_GlobalOptions_GlobalPlugins();
 }
 /** @override @template T */
 m_setOptions__org_pepstock_charba_client_plugins_AbstractPluginOptions(/** T */ options) {
  if (!$Equality.$same(options, null)) {
   /**@type {AbstractPluginOptions}*/ (options).m_applyingDefaults__org_pepstock_charba_client_ChartEnvelop(this.f_envelop__org_pepstock_charba_client_GlobalOptions_GlobalPlugins_);
   super.m_setOptions__org_pepstock_charba_client_plugins_AbstractPluginOptions(options);
  }
 }
 /** @override @template T */
 m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(/** ?string */ pluginId, /** T */ options) {
  if (!$Equality.$same(options, null)) {
   /**@type {AbstractPluginOptions}*/ (options).m_applyingDefaults__org_pepstock_charba_client_ChartEnvelop(this.f_envelop__org_pepstock_charba_client_GlobalOptions_GlobalPlugins_);
   super.m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(pluginId, options);
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_GlobalOptions_GlobalPlugins() {
  this.f_envelop__org_pepstock_charba_client_GlobalOptions_GlobalPlugins_ = /**@type {!ChartEnvelop<?string>}*/ (ChartEnvelop.$create__java_lang_Object(DefaultOptions.f_SCOPE__org_pepstock_charba_client_defaults_globals_DefaultOptions));
 }
 
 static $clinit() {
  GlobalPlugins.$clinit = () =>{};
  GlobalPlugins.$loadModules();
  Plugins.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GlobalPlugins;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  DefaultOptions = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultOptions$impl');
 }
}
$Util.$setClassMetadata(GlobalPlugins, "org.pepstock.charba.client.GlobalOptions$GlobalPlugins");

exports = GlobalPlugins;

//# sourceMappingURL=GlobalOptions$GlobalPlugins.js.map
