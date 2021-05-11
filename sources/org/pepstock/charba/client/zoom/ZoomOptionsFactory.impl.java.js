goog.module('org.pepstock.charba.client.zoom.ZoomOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPluginOptionsFactory = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsDefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');
let DefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.zoom.DefaultOptions$impl');
let ZoomOptions = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomOptions$impl');
let ZoomPlugin = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractPluginOptionsFactory<ZoomOptions>}
 */
class ZoomOptionsFactory extends AbstractPluginOptionsFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ZoomOptionsFactory} */
 static $create__() {
  ZoomOptionsFactory.$clinit();
  let $instance = new ZoomOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_zoom_ZoomOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_ZoomOptionsFactory__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory__java_lang_String(ZoomPlugin.f_ID__org_pepstock_charba_client_zoom_ZoomPlugin);
 }
 /** @override @return {ZoomOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(/** ? */ nativeObject, /** IsDefaultPlugins */ defaultValues) {
  if (!$Equality.$same(defaultValues, null)) {
   let defaultOptions = /**@type {ZoomOptions}*/ ($Casts.$to(this.m_loadDefaultsPluginOptions__org_pepstock_charba_client_defaults_IsDefaultPlugins__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(defaultValues, ZoomPlugin.f_DEFAULTS_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin), ZoomOptions));
   return ZoomOptions.$create__org_pepstock_charba_client_zoom_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  }
  return ZoomOptions.$create__org_pepstock_charba_client_zoom_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(DefaultOptions.f_INSTANCE__org_pepstock_charba_client_zoom_DefaultOptions, nativeObject);
 }
 
 static $clinit() {
  ZoomOptionsFactory.$clinit = () =>{};
  ZoomOptionsFactory.$loadModules();
  AbstractPluginOptionsFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ZoomOptionsFactory;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DefaultOptions = goog.module.get('org.pepstock.charba.client.zoom.DefaultOptions$impl');
  ZoomOptions = goog.module.get('org.pepstock.charba.client.zoom.ZoomOptions$impl');
  ZoomPlugin = goog.module.get('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ZoomOptionsFactory, "org.pepstock.charba.client.zoom.ZoomOptionsFactory");

exports = ZoomOptionsFactory;

//# sourceMappingURL=ZoomOptionsFactory.js.map
