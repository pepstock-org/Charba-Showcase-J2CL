goog.module('org.pepstock.charba.client.configuration.Plugins$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationOptionsContainer = goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ConfigurationEnvelop = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let DefaultPluginId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultPluginId$impl');
let AbstractPluginOptions = goog.forwardDeclare('org.pepstock.charba.client.plugins.AbstractPluginOptions$impl');
let AbstractPluginOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

class Plugins extends ConfigurationOptionsContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Plugins} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  Plugins.$clinit();
  let $instance = new Plugins();
  $instance.$ctor__org_pepstock_charba_client_configuration_Plugins__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Plugins__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
 }
 /** @return {List<Key>} */
 m_getAllIds__() {
  return this.m_getConfiguration__().m_getPlugins__().m_getAllIds__();
 }
 
 m_setEnabled__java_lang_String__boolean(/** ?string */ pluginId, /** boolean */ enabled) {
  this.m_getConfiguration__().m_getPlugins__().m_setEnabled__java_lang_String__boolean(pluginId, enabled);
 }
 
 m_setEnabled__org_pepstock_charba_client_enums_DefaultPluginId__boolean(/** DefaultPluginId */ plugin, /** boolean */ enabled) {
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(plugin)) {
   let envelop = /**@type {!ConfigurationEnvelop<DefaultPluginId>}*/ (ConfigurationEnvelop.$create__java_lang_Object(plugin));
   this.m_getConfiguration__().m_getPlugins__().m_setEnabled__org_pepstock_charba_client_configuration_ConfigurationEnvelop__boolean(envelop, enabled);
  }
 }
 /** @return {boolean} */
 m_isEnabled__java_lang_String(/** ?string */ pluginId) {
  return this.m_getConfiguration__().m_getPlugins__().m_isEnabled__java_lang_String(pluginId);
 }
 /** @return {boolean} */
 m_isEnabled__org_pepstock_charba_client_enums_DefaultPluginId(/** DefaultPluginId */ pluginId) {
  return this.m_getConfiguration__().m_getPlugins__().m_isEnabled__org_pepstock_charba_client_enums_DefaultPluginId(pluginId);
 }
 /** @return {boolean} */
 m_hasEnabled__java_lang_String(/** ?string */ pluginId) {
  return this.m_getConfiguration__().m_getPlugins__().m_hasEnabled__java_lang_String(pluginId);
 }
 
 m_removeOptions__java_lang_String(/** ?string */ pluginId) {
  this.m_getConfiguration__().m_getPlugins__().m_removeOptions__java_lang_String(pluginId);
 }
 /** @template T */
 m_setOptions__org_pepstock_charba_client_plugins_AbstractPluginOptions(/** T */ options) {
  this.m_getConfiguration__().m_getPlugins__().m_setOptions__org_pepstock_charba_client_plugins_AbstractPluginOptions(options);
 }
 /** @template T */
 m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(/** ?string */ pluginId, /** T */ options) {
  this.m_getConfiguration__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(pluginId, options);
 }
 /** @return {boolean} */
 m_hasOptions__java_lang_String(/** ?string */ pluginId) {
  return this.m_getConfiguration__().m_getPlugins__().m_hasOptions__java_lang_String(pluginId);
 }
 /** @template T @return {T} */
 m_getOptions__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(/** AbstractPluginOptionsFactory<T> */ factory) {
  return this.m_getConfiguration__().m_getPlugins__().m_getOptions__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(factory);
 }
 /** @template T @return {T} */
 m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(/** ?string */ pluginId, /** AbstractPluginOptionsFactory<T> */ factory) {
  return this.m_getConfiguration__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(pluginId, factory);
 }
 
 static $clinit() {
  Plugins.$clinit = () =>{};
  Plugins.$loadModules();
  ConfigurationOptionsContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Plugins;
 }
 
 static $loadModules() {
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ConfigurationEnvelop = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
 }
}
$Util.$setClassMetadata(Plugins, "org.pepstock.charba.client.configuration.Plugins");

exports = Plugins;

//# sourceMappingURL=Plugins.js.map
