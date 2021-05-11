goog.module('org.pepstock.charba.client.zoom.ZoomOptionsFactory.ZoomDefaultsOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPluginOptionsFactory = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

let IsDefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');
let DefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.zoom.DefaultOptions$impl');
let ZoomOptions = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomOptions$impl');
let ZoomPlugin = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomPlugin$impl');

/**
 * @extends {AbstractPluginOptionsFactory<ZoomOptions>}
 */
class ZoomDefaultsOptionsFactory extends AbstractPluginOptionsFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ZoomDefaultsOptionsFactory} */
 static $create__() {
  ZoomDefaultsOptionsFactory.$clinit();
  let $instance = new ZoomDefaultsOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_zoom_ZoomOptionsFactory_ZoomDefaultsOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_ZoomOptionsFactory_ZoomDefaultsOptionsFactory__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory__java_lang_String(ZoomPlugin.f_ID__org_pepstock_charba_client_zoom_ZoomPlugin);
 }
 /** @override @return {ZoomOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(/** ? */ nativeObject, /** IsDefaultPlugins */ defaultValues) {
  return ZoomOptions.$create__org_pepstock_charba_client_zoom_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(DefaultOptions.f_INSTANCE__org_pepstock_charba_client_zoom_DefaultOptions, nativeObject);
 }
 
 static $clinit() {
  ZoomDefaultsOptionsFactory.$clinit = () =>{};
  ZoomDefaultsOptionsFactory.$loadModules();
  AbstractPluginOptionsFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ZoomDefaultsOptionsFactory;
 }
 
 static $loadModules() {
  DefaultOptions = goog.module.get('org.pepstock.charba.client.zoom.DefaultOptions$impl');
  ZoomOptions = goog.module.get('org.pepstock.charba.client.zoom.ZoomOptions$impl');
  ZoomPlugin = goog.module.get('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
 }
}
$Util.$setClassMetadata(ZoomDefaultsOptionsFactory, "org.pepstock.charba.client.zoom.ZoomOptionsFactory$ZoomDefaultsOptionsFactory");

exports = ZoomDefaultsOptionsFactory;

//# sourceMappingURL=ZoomOptionsFactory$ZoomDefaultsOptionsFactory.js.map
