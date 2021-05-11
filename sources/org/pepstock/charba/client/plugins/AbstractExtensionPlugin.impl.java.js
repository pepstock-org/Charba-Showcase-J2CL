goog.module('org.pepstock.charba.client.plugins.AbstractExtensionPlugin$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Helpers = goog.forwardDeclare('org.pepstock.charba.client.Helpers$impl');
let AbstractPluginOptions = goog.forwardDeclare('org.pepstock.charba.client.plugins.AbstractPluginOptions$impl');
let AbstractPluginOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

/**
 * @abstract
 * @template T
 */
class AbstractExtensionPlugin extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {T}*/
  this.f_defaults__org_pepstock_charba_client_plugins_AbstractExtensionPlugin_;
  /**@type {boolean}*/
  this.f_registered__org_pepstock_charba_client_plugins_AbstractExtensionPlugin_ = false;
 }
 
 $ctor__org_pepstock_charba_client_plugins_AbstractExtensionPlugin__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_plugins_AbstractExtensionPlugin();
 }
 /** @return {boolean} */
 m_isRegistered__() {
  return this.f_registered__org_pepstock_charba_client_plugins_AbstractExtensionPlugin_;
 }
 /** @return {T} */
 m_getDefaults__() {
  return this.f_defaults__org_pepstock_charba_client_plugins_AbstractExtensionPlugin_;
 }
 
 m_applyingDefaults__org_pepstock_charba_client_plugins_AbstractPluginOptions(/** T */ options) {
  if (!$Equality.$same(options, null) && !$Equality.$same(this.f_defaults__org_pepstock_charba_client_plugins_AbstractExtensionPlugin_, null) && j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(/**@type {AbstractPluginOptions}*/ (options).m_getPluginId__(), /**@type {AbstractPluginOptions}*/ (this.f_defaults__org_pepstock_charba_client_plugins_AbstractExtensionPlugin_).m_getPluginId__())) {
   Helpers.m_get__().m_mergeIf__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject(/**@type {AbstractPluginOptions}*/ (options).m_nativeObject___$pp_org_pepstock_charba_client_plugins(), /**@type {AbstractPluginOptions}*/ (this.f_defaults__org_pepstock_charba_client_plugins_AbstractExtensionPlugin_).m_nativeObject___$pp_org_pepstock_charba_client_plugins());
  }
 }
 
 m_loadDefaults__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(/** AbstractPluginOptionsFactory<T> */ factory) {
  if (!this.m_isRegistered__() && !$Equality.$same(factory, null)) {
   this.f_registered__org_pepstock_charba_client_plugins_AbstractExtensionPlugin_ = true;
   let /** T */ globalDefaults;
   if (Defaults.m_get__().m_getGlobal__().m_getPlugins__().m_hasOptions__java_lang_String(factory.m_getPluginId__())) {
    let originalDefaults = Defaults.m_get__().m_getGlobal__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(factory.m_getPluginId__(), factory);
    let objectDefaults = Helpers.m_get__().m_clone__org_pepstock_charba_client_commons_NativeObject(/**@type {AbstractPluginOptions}*/ (originalDefaults).m_nativeObject___$pp_org_pepstock_charba_client_plugins());
    globalDefaults = factory.m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(objectDefaults, null);
   } else {
    globalDefaults = factory.m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(null, null);
   }
   this.f_defaults__org_pepstock_charba_client_plugins_AbstractExtensionPlugin_ = globalDefaults;
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_plugins_AbstractExtensionPlugin() {
  this.f_defaults__org_pepstock_charba_client_plugins_AbstractExtensionPlugin_ = null;
  this.f_registered__org_pepstock_charba_client_plugins_AbstractExtensionPlugin_ = false;
 }
 
 static $clinit() {
  AbstractExtensionPlugin.$clinit = () =>{};
  AbstractExtensionPlugin.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractExtensionPlugin;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Helpers = goog.module.get('org.pepstock.charba.client.Helpers$impl');
 }
}
$Util.$setClassMetadata(AbstractExtensionPlugin, "org.pepstock.charba.client.plugins.AbstractExtensionPlugin");

exports = AbstractExtensionPlugin;

//# sourceMappingURL=AbstractExtensionPlugin.js.map
