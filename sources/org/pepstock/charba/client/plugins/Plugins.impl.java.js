goog.module('org.pepstock.charba.client.plugins.Plugins$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationElement = goog.require('org.pepstock.charba.client.ConfigurationElement$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Configuration = goog.forwardDeclare('org.pepstock.charba.client.Configuration$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Plugin = goog.forwardDeclare('org.pepstock.charba.client.Plugin$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
let DefaultPluginId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultPluginId$impl');
let PluginIdChecker = goog.forwardDeclare('org.pepstock.charba.client.plugins.PluginIdChecker$impl');
let WrapperPlugin = goog.forwardDeclare('org.pepstock.charba.client.plugins.WrapperPlugin$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ConfigurationElement}
 */
class Plugins extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {List<WrapperPlugin>}*/
  this.f_pluginsInstances__org_pepstock_charba_client_plugins_Plugins_;
 }
 /** @return {!Plugins} */
 static $create__() {
  Plugins.$clinit();
  let $instance = new Plugins();
  $instance.$ctor__org_pepstock_charba_client_plugins_Plugins__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_plugins_Plugins__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_plugins_Plugins();
 }
 
 m_add__org_pepstock_charba_client_Plugin(/** Plugin */ plugin) {
  if (!$Equality.$same(plugin, null) && !DefaultPluginId.m_is__java_lang_String(plugin.m_getId__())) {
   PluginIdChecker.m_check__java_lang_String(plugin.m_getId__());
   if (this.m_has__java_lang_String(plugin.m_getId__())) {
    this.m_remove__java_lang_String(plugin.m_getId__());
   }
   let wPlugin = WrapperPlugin.$create__org_pepstock_charba_client_Plugin(plugin);
   this.f_pluginsInstances__org_pepstock_charba_client_plugins_Plugins_.add(wPlugin);
  }
 }
 /** @return {boolean} */
 m_has__java_lang_String(/** ?string */ id) {
  let iter = this.f_pluginsInstances__org_pepstock_charba_client_plugins_Plugins_.m_iterator__();
  while (iter.m_hasNext__()) {
   let plugin = /**@type {WrapperPlugin}*/ ($Casts.$to(iter.m_next__(), WrapperPlugin));
   if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(plugin.m_getId___$pp_org_pepstock_charba_client_plugins(), id)) {
    return true;
   }
  }
  return false;
 }
 
 m_remove__java_lang_String(/** ?string */ pluginId) {
  if (!$Equality.$same(pluginId, null) && !DefaultPluginId.m_is__java_lang_String(pluginId)) {
   let iter = this.f_pluginsInstances__org_pepstock_charba_client_plugins_Plugins_.m_iterator__();
   while (iter.m_hasNext__()) {
    let plugin = /**@type {WrapperPlugin}*/ ($Casts.$to(iter.m_next__(), WrapperPlugin));
    if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(plugin.m_getId___$pp_org_pepstock_charba_client_plugins(), pluginId)) {
     iter.m_remove__();
    }
   }
  }
 }
 
 m_onChartConfigure__org_pepstock_charba_client_Configuration__org_pepstock_charba_client_IsChart(/** Configuration */ config, /** IsChart */ chart) {
  if ($Equality.$same(config, null) || !IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   return;
  }
  for (let $iterator = this.f_pluginsInstances__org_pepstock_charba_client_plugins_Plugins_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let entry = /**@type {WrapperPlugin}*/ ($Casts.$to($iterator.m_next__(), WrapperPlugin));
   {
    entry.m_onConfigure__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(chart);
   }
  }
 }
 /** @override */
 m_load__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_Configuration(/** IsChart */ chart, /** Configuration */ configuration) {
  if ($Equality.$same(configuration, null) || !IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   return;
  }
  if (!this.f_pluginsInstances__org_pepstock_charba_client_plugins_Plugins_.isEmpty()) {
   let globalPluginIds = Defaults.m_get__().m_getPlugins__().m_getIds__();
   let pluginsListToSet = /**@type {!LinkedList<WrapperPlugin>}*/ (LinkedList.$create__());
   let iter = this.f_pluginsInstances__org_pepstock_charba_client_plugins_Plugins_.m_iterator__();
   while (iter.m_hasNext__()) {
    let plugin = /**@type {WrapperPlugin}*/ ($Casts.$to(iter.m_next__(), WrapperPlugin));
    if (!globalPluginIds.contains(plugin.m_getId___$pp_org_pepstock_charba_client_plugins())) {
     pluginsListToSet.add(plugin);
    } else {
     iter.m_remove__();
    }
   }
   if (!pluginsListToSet.isEmpty()) {
    configuration.m_setPlugins__org_pepstock_charba_client_commons_ArrayObject($Overlay.m_fromOrEmpty__java_util_List(pluginsListToSet));
   }
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_plugins_Plugins() {
  this.f_pluginsInstances__org_pepstock_charba_client_plugins_Plugins_ = /**@type {!LinkedList<WrapperPlugin>}*/ (LinkedList.$create__());
 }
 
 static $clinit() {
  Plugins.$clinit = () =>{};
  Plugins.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Plugins;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
  DefaultPluginId = goog.module.get('org.pepstock.charba.client.enums.DefaultPluginId$impl');
  PluginIdChecker = goog.module.get('org.pepstock.charba.client.plugins.PluginIdChecker$impl');
  WrapperPlugin = goog.module.get('org.pepstock.charba.client.plugins.WrapperPlugin$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ConfigurationElement.$markImplementor(Plugins);
$Util.$setClassMetadata(Plugins, "org.pepstock.charba.client.plugins.Plugins");

exports = Plugins;

//# sourceMappingURL=Plugins.js.map
