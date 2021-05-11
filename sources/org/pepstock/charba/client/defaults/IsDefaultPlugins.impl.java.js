goog.module('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let AbstractPluginOptions = goog.forwardDeclare('org.pepstock.charba.client.plugins.AbstractPluginOptions$impl');
let AbstractPluginOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

/**
 * @interface
 */
class IsDefaultPlugins {
 /** @abstract @return {boolean} */
 m_isEnabled__java_lang_String(/** ?string */ pluginId) {}
 /** @abstract @return {boolean} */
 m_hasOptions__java_lang_String(/** ?string */ pluginId) {}
 /** @abstract @template T @return {T} */
 m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(/** ?string */ pluginId, /** AbstractPluginOptionsFactory<T> */ factory) {}
 
 static $clinit() {
  IsDefaultPlugins.$clinit = () =>{};
  IsDefaultPlugins.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultPlugins = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultPlugins;
 }
 
 static $loadModules() {}
}
IsDefaultPlugins.$markImplementor(/**@type {Function}*/ (IsDefaultPlugins));
$Util.$setClassMetadataForInterface(IsDefaultPlugins, "org.pepstock.charba.client.defaults.IsDefaultPlugins");

exports = IsDefaultPlugins;

//# sourceMappingURL=IsDefaultPlugins.js.map
