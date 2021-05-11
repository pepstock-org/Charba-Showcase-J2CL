goog.module('org.pepstock.charba.client.plugins.GlobalPlugins$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Configuration = goog.forwardDeclare('org.pepstock.charba.client.Configuration$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Plugin = goog.forwardDeclare('org.pepstock.charba.client.Plugin$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let DefaultPluginId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultPluginId$impl');
let InternalPlugins = goog.forwardDeclare('org.pepstock.charba.client.plugins.GlobalPlugins.InternalPlugins$impl');
let JsPluginHelper = goog.forwardDeclare('org.pepstock.charba.client.plugins.JsPluginHelper$impl');
let PluginIdChecker = goog.forwardDeclare('org.pepstock.charba.client.plugins.PluginIdChecker$impl');
let PluginReference = goog.forwardDeclare('org.pepstock.charba.client.plugins.PluginReference$impl');
let WrapperPlugin = goog.forwardDeclare('org.pepstock.charba.client.plugins.WrapperPlugin$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class GlobalPlugins extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<?string, WrapperPlugin>}*/
  this.f_pluginIds__org_pepstock_charba_client_plugins_GlobalPlugins_;
  /**@type {InternalPlugins}*/
  this.f_plugins__org_pepstock_charba_client_plugins_GlobalPlugins_;
  /**@type {Set<?string>}*/
  this.f_pluginsToBeDisabled__org_pepstock_charba_client_plugins_GlobalPlugins_;
 }
 /** @return {!GlobalPlugins} */
 static $create__() {
  GlobalPlugins.$clinit();
  let $instance = new GlobalPlugins();
  $instance.$ctor__org_pepstock_charba_client_plugins_GlobalPlugins__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_plugins_GlobalPlugins__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_plugins_GlobalPlugins();
  this.f_plugins__org_pepstock_charba_client_plugins_GlobalPlugins_ = InternalPlugins.$create__org_pepstock_charba_client_commons_NativeObject(JsPluginHelper.m_get__().m_getAll___$pp_org_pepstock_charba_client_plugins());
 }
 /** @return {boolean} */
 m_register__org_pepstock_charba_client_Plugin(/** Plugin */ plugin) {
  if (!$Equality.$same(plugin, null) && !DefaultPluginId.m_is__java_lang_String(plugin.m_getId__())) {
   PluginIdChecker.m_check__java_lang_String(plugin.m_getId__());
   if (this.m_getIds__().contains(plugin.m_getId__())) {
    return false;
   }
   let wPlugin = WrapperPlugin.$create__org_pepstock_charba_client_Plugin(plugin);
   JsPluginHelper.m_get__().m_register__org_pepstock_charba_client_plugins_WrapperPlugin_$pp_org_pepstock_charba_client_plugins(wPlugin);
   this.f_pluginIds__org_pepstock_charba_client_plugins_GlobalPlugins_.put(plugin.m_getId__(), wPlugin);
   return true;
  }
  return false;
 }
 /** @return {boolean} */
 m_unregister__java_lang_String(/** ?string */ pluginId) {
  PluginIdChecker.m_check__java_lang_String(pluginId);
  if (!this.f_pluginIds__org_pepstock_charba_client_plugins_GlobalPlugins_.containsKey(pluginId) || DefaultPluginId.m_is__java_lang_String(pluginId)) {
   return false;
  }
  for (let $iterator = this.f_plugins__org_pepstock_charba_client_plugins_GlobalPlugins_.m_ids___$pp_org_pepstock_charba_client_plugins().m_iterator__(); $iterator.m_hasNext__(); ) {
   let key = /**@type {Key}*/ ($Casts.$to($iterator.m_next__(), Key));
   {
    let reference = PluginReference.$create__org_pepstock_charba_client_commons_NativeObject(this.f_plugins__org_pepstock_charba_client_plugins_GlobalPlugins_.m_plugin__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_plugins(key));
    if (!$Equality.$same(reference.m_getId___$pp_org_pepstock_charba_client_plugins(), null) && j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(reference.m_getId___$pp_org_pepstock_charba_client_plugins(), pluginId)) {
     JsPluginHelper.m_get__().m_unregister__org_pepstock_charba_client_plugins_PluginReference_$pp_org_pepstock_charba_client_plugins(reference);
     this.f_pluginIds__org_pepstock_charba_client_plugins_GlobalPlugins_.remove(pluginId);
     return true;
    }
   }
  }
  return false;
 }
 /** @return {Set<?string>} */
 m_getIds__() {
  let pluginsIds = /**@type {!HashSet<?string>}*/ (HashSet.$create__());
  for (let $iterator = this.f_plugins__org_pepstock_charba_client_plugins_GlobalPlugins_.m_ids___$pp_org_pepstock_charba_client_plugins().m_iterator__(); $iterator.m_hasNext__(); ) {
   let key = /**@type {Key}*/ ($Casts.$to($iterator.m_next__(), Key));
   {
    pluginsIds.add(key.m_value__());
   }
  }
  return pluginsIds;
 }
 
 m_setEnabledAllCharts__java_lang_String__boolean(/** ?string */ pluginId, /** boolean */ enable) {
  PluginIdChecker.m_check__java_lang_String(pluginId);
  if (!DefaultPluginId.m_is__java_lang_String(pluginId)) {
   let currentIds = this.m_getIds__();
   for (let $iterator = currentIds.m_iterator__(); $iterator.m_hasNext__(); ) {
    let id = /**@type {?string}*/ ($Casts.$to($iterator.m_next__(), j_l_String));
    {
     if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(id, pluginId)) {
      if (enable) {
       this.f_pluginsToBeDisabled__org_pepstock_charba_client_plugins_GlobalPlugins_.remove(pluginId);
      } else {
       this.f_pluginsToBeDisabled__org_pepstock_charba_client_plugins_GlobalPlugins_.add(pluginId);
      }
      return;
     }
    }
   }
  }
 }
 /** @return {boolean} */
 m_isEnabledAllCharts__java_lang_String(/** ?string */ pluginId) {
  PluginIdChecker.m_check__java_lang_String(pluginId);
  return !this.f_pluginsToBeDisabled__org_pepstock_charba_client_plugins_GlobalPlugins_.contains(pluginId);
 }
 
 m_onChartConfigure__org_pepstock_charba_client_Configuration__org_pepstock_charba_client_IsChart(/** Configuration */ config, /** IsChart */ chart) {
  if ($Equality.$same(config, null) || !IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   return;
  }
  for (let $iterator = this.f_pluginsToBeDisabled__org_pepstock_charba_client_plugins_GlobalPlugins_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let id = /**@type {?string}*/ ($Casts.$to($iterator.m_next__(), j_l_String));
   {
    if (!chart.m_getOptions__().m_getPlugins__().m_hasEnabled__java_lang_String(id)) {
     chart.m_getOptions__().m_getPlugins__().m_setEnabled__java_lang_String__boolean(id, false);
    }
   }
  }
  for (let $iterator_1 = this.f_pluginIds__org_pepstock_charba_client_plugins_GlobalPlugins_.m_entrySet__().m_iterator__(); $iterator_1.m_hasNext__(); ) {
   let entry = /**@type {Entry<?string, WrapperPlugin>}*/ ($Casts.$to($iterator_1.m_next__(), Entry));
   {
    if (chart.m_getOptions__().m_getPlugins__().m_isEnabled__java_lang_String(/**@type {?string}*/ ($Casts.$to(entry.m_getKey__(), j_l_String)))) {
     /**@type {WrapperPlugin}*/ ($Casts.$to(entry.m_getValue__(), WrapperPlugin)).m_onConfigure__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_plugins(chart);
    }
   }
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_plugins_GlobalPlugins() {
  this.f_pluginIds__org_pepstock_charba_client_plugins_GlobalPlugins_ = /**@type {!HashMap<?string, WrapperPlugin>}*/ (HashMap.$create__());
  this.f_pluginsToBeDisabled__org_pepstock_charba_client_plugins_GlobalPlugins_ = /**@type {!HashSet<?string>}*/ (HashSet.$create__());
 }
 
 static $clinit() {
  GlobalPlugins.$clinit = () =>{};
  GlobalPlugins.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GlobalPlugins;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  DefaultPluginId = goog.module.get('org.pepstock.charba.client.enums.DefaultPluginId$impl');
  InternalPlugins = goog.module.get('org.pepstock.charba.client.plugins.GlobalPlugins.InternalPlugins$impl');
  JsPluginHelper = goog.module.get('org.pepstock.charba.client.plugins.JsPluginHelper$impl');
  PluginIdChecker = goog.module.get('org.pepstock.charba.client.plugins.PluginIdChecker$impl');
  PluginReference = goog.module.get('org.pepstock.charba.client.plugins.PluginReference$impl');
  WrapperPlugin = goog.module.get('org.pepstock.charba.client.plugins.WrapperPlugin$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(GlobalPlugins, "org.pepstock.charba.client.plugins.GlobalPlugins");

exports = GlobalPlugins;

//# sourceMappingURL=GlobalPlugins.js.map
