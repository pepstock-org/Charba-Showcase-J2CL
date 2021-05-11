goog.module('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsDefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');
let AbstractPluginOptions = goog.forwardDeclare('org.pepstock.charba.client.plugins.AbstractPluginOptions$impl');
let PluginIdChecker = goog.forwardDeclare('org.pepstock.charba.client.plugins.PluginIdChecker$impl');

/**
 * @abstract
 * @template T
 */
class AbstractPluginOptionsFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_pluginId__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory_;
 }
 
 $ctor__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory__java_lang_String(/** ?string */ pluginId) {
  this.$ctor__java_lang_Object__();
  PluginIdChecker.m_check__java_lang_String(pluginId);
  this.f_pluginId__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory_ = pluginId;
 }
 /** @return {?string} */
 m_getPluginId__() {
  return this.f_pluginId__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory_;
 }
 /** @abstract @return {T} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(/** ? */ nativeObject, /** IsDefaultPlugins */ defaultValues) {}
 /** @template G @return {G} */
 m_loadDefaultsPluginOptions__org_pepstock_charba_client_defaults_IsDefaultPlugins__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(/** IsDefaultPlugins */ defaultsPlugins, /** AbstractPluginOptionsFactory<G> */ factory) {
  if (!$Equality.$same(factory, null) && !$Equality.$same(defaultsPlugins, null)) {
   if (defaultsPlugins.m_hasOptions__java_lang_String(this.f_pluginId__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory_)) {
    return defaultsPlugins.m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(this.f_pluginId__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory_, factory);
   } else {
    return factory.m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(null, defaultsPlugins);
   }
  }
  return null;
 }
 
 static $clinit() {
  AbstractPluginOptionsFactory.$clinit = () =>{};
  AbstractPluginOptionsFactory.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractPluginOptionsFactory;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  PluginIdChecker = goog.module.get('org.pepstock.charba.client.plugins.PluginIdChecker$impl');
 }
}
$Util.$setClassMetadata(AbstractPluginOptionsFactory, "org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory");

exports = AbstractPluginOptionsFactory;

//# sourceMappingURL=AbstractPluginOptionsFactory.js.map
