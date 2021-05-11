goog.module('org.pepstock.charba.client.defaults.globals.DefaultPlugins$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultPlugins = goog.require('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let AbstractPluginOptions = goog.forwardDeclare('org.pepstock.charba.client.plugins.AbstractPluginOptions$impl');
let AbstractPluginOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

/**
 * @implements {IsDefaultPlugins}
 */
class DefaultPlugins extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultPlugins} */
 static $create__() {
  DefaultPlugins.$clinit();
  let $instance = new DefaultPlugins();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultPlugins__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultPlugins__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {boolean} */
 m_isEnabled__java_lang_String(/** ?string */ pluginId) {
  return Defaults.m_get__().m_getPlugins__().m_isEnabledAllCharts__java_lang_String(pluginId);
 }
 /** @override @return {boolean} */
 m_hasOptions__java_lang_String(/** ?string */ pluginId) {
  return DefaultPlugins.f_DEFAULT_HAS_OPTIONS__org_pepstock_charba_client_defaults_globals_DefaultPlugins_;
 }
 /** @override @template T @return {T} */
 m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(/** ?string */ pluginId, /** AbstractPluginOptionsFactory<T> */ factory) {
  if (!$Equality.$same(factory, null)) {
   return factory.m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(null, null);
  }
  return null;
 }
 
 static $clinit() {
  DefaultPlugins.$clinit = () =>{};
  DefaultPlugins.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultPlugins;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
 }
}
/**@const {boolean}*/
DefaultPlugins.f_DEFAULT_HAS_OPTIONS__org_pepstock_charba_client_defaults_globals_DefaultPlugins_ = false;
IsDefaultPlugins.$markImplementor(DefaultPlugins);
$Util.$setClassMetadata(DefaultPlugins, "org.pepstock.charba.client.defaults.globals.DefaultPlugins");

exports = DefaultPlugins;

//# sourceMappingURL=DefaultPlugins.js.map
