goog.module('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractExtensionPlugin = goog.require('org.pepstock.charba.client.plugins.AbstractExtensionPlugin$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Injector = goog.forwardDeclare('org.pepstock.charba.client.Injector$impl');
let AnnotationOptions = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
let AnnotationOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationOptionsFactory$impl');
let AnnotationDefaultsOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationOptionsFactory.AnnotationDefaultsOptionsFactory$impl');
let AnnotationPluginResource = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationPluginResource$impl');
let ResourceName = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourceName$impl');
let ResourcesType = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourcesType$impl');

/**
 * @extends {AbstractExtensionPlugin<AnnotationOptions>}
 */
class AnnotationPlugin extends AbstractExtensionPlugin {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!AnnotationPlugin} */
 static $create__() {
  let $instance = new AnnotationPlugin();
  $instance.$ctor__org_pepstock_charba_client_annotation_AnnotationPlugin__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_annotation_AnnotationPlugin__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractExtensionPlugin__();
 }
 /** @return {AnnotationPlugin} */
 static m_get__() {
  AnnotationPlugin.$clinit();
  return AnnotationPlugin.f_INSTANCE__org_pepstock_charba_client_annotation_AnnotationPlugin_;
 }
 
 m_mergeDefaults__org_pepstock_charba_client_annotation_AnnotationOptions_$pp_org_pepstock_charba_client_annotation(/** AnnotationOptions */ options) {
  super.m_applyingDefaults__org_pepstock_charba_client_plugins_AbstractPluginOptions(options);
 }
 
 static m_enable__() {
  AnnotationPlugin.$clinit();
  AnnotationPlugin.m_enable__boolean(false);
 }
 
 static m_enable__boolean(/** boolean */ enableToAllCharts) {
  AnnotationPlugin.$clinit();
  ResourcesType.m_getResources__().m_inject__();
  Injector.m_ensureInjected__org_pepstock_charba_client_resources_AbstractInjectableResource(AnnotationPlugin.f_RESOURCE__org_pepstock_charba_client_annotation_AnnotationPlugin_);
  Defaults.m_get__().m_getPlugins__().m_setEnabledAllCharts__java_lang_String__boolean(AnnotationPlugin.$static_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, enableToAllCharts);
  AnnotationPlugin.m_get__().m_loadDefaults__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(AnnotationPlugin.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_annotation_AnnotationPlugin);
 }
 /** @return {?string} */
 static get f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin() {
  return (AnnotationPlugin.$clinit(), AnnotationPlugin.$static_ID__org_pepstock_charba_client_annotation_AnnotationPlugin);
 }
 /** @return {AnnotationOptionsFactory} */
 static get f_FACTORY__org_pepstock_charba_client_annotation_AnnotationPlugin() {
  return (AnnotationPlugin.$clinit(), AnnotationPlugin.$static_FACTORY__org_pepstock_charba_client_annotation_AnnotationPlugin);
 }
 /** @return {AnnotationDefaultsOptionsFactory} */
 static get f_DEFAULTS_FACTORY__org_pepstock_charba_client_annotation_AnnotationPlugin() {
  return (AnnotationPlugin.$clinit(), AnnotationPlugin.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_annotation_AnnotationPlugin);
 }
 
 static $clinit() {
  AnnotationPlugin.$clinit = () =>{};
  AnnotationPlugin.$loadModules();
  AbstractExtensionPlugin.$clinit();
  AnnotationPlugin.$static_ID__org_pepstock_charba_client_annotation_AnnotationPlugin = ResourceName.f_ANNOTATION_PLUGIN__org_pepstock_charba_client_resources_ResourceName.m_value__();
  AnnotationPlugin.$static_FACTORY__org_pepstock_charba_client_annotation_AnnotationPlugin = AnnotationOptionsFactory.$create__();
  AnnotationPlugin.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_annotation_AnnotationPlugin = AnnotationDefaultsOptionsFactory.$create__();
  AnnotationPlugin.f_RESOURCE__org_pepstock_charba_client_annotation_AnnotationPlugin_ = AnnotationPluginResource.$create__();
  AnnotationPlugin.f_INSTANCE__org_pepstock_charba_client_annotation_AnnotationPlugin_ = AnnotationPlugin.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnnotationPlugin;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Injector = goog.module.get('org.pepstock.charba.client.Injector$impl');
  AnnotationOptionsFactory = goog.module.get('org.pepstock.charba.client.annotation.AnnotationOptionsFactory$impl');
  AnnotationDefaultsOptionsFactory = goog.module.get('org.pepstock.charba.client.annotation.AnnotationOptionsFactory.AnnotationDefaultsOptionsFactory$impl');
  AnnotationPluginResource = goog.module.get('org.pepstock.charba.client.annotation.AnnotationPluginResource$impl');
  ResourceName = goog.module.get('org.pepstock.charba.client.resources.ResourceName$impl');
  ResourcesType = goog.module.get('org.pepstock.charba.client.resources.ResourcesType$impl');
 }
}
/**@private {?string}*/
AnnotationPlugin.$static_ID__org_pepstock_charba_client_annotation_AnnotationPlugin;
/**@private {AnnotationOptionsFactory}*/
AnnotationPlugin.$static_FACTORY__org_pepstock_charba_client_annotation_AnnotationPlugin;
/**@private {AnnotationDefaultsOptionsFactory}*/
AnnotationPlugin.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_annotation_AnnotationPlugin;
/**@type {AnnotationPluginResource}*/
AnnotationPlugin.f_RESOURCE__org_pepstock_charba_client_annotation_AnnotationPlugin_;
/**@type {AnnotationPlugin}*/
AnnotationPlugin.f_INSTANCE__org_pepstock_charba_client_annotation_AnnotationPlugin_;
$Util.$setClassMetadata(AnnotationPlugin, "org.pepstock.charba.client.annotation.AnnotationPlugin");

exports = AnnotationPlugin;

//# sourceMappingURL=AnnotationPlugin.js.map
