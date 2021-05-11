goog.module('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractExtensionPlugin = goog.require('org.pepstock.charba.client.plugins.AbstractExtensionPlugin$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Injector = goog.forwardDeclare('org.pepstock.charba.client.Injector$impl');
let DataLabelsOptions = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
let DataLabelsOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsOptionsFactory$impl');
let DataLabelsDefaultsOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsOptionsFactory.DataLabelsDefaultsOptionsFactory$impl');
let DataLabelsPluginResource = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsPluginResource$impl');
let JsDataLabelsHelper = goog.forwardDeclare('org.pepstock.charba.client.datalabels.JsDataLabelsHelper$impl');
let ResourceName = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourceName$impl');
let ResourcesType = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourcesType$impl');

/**
 * @extends {AbstractExtensionPlugin<DataLabelsOptions>}
 */
class DataLabelsPlugin extends AbstractExtensionPlugin {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DataLabelsPlugin} */
 static $create__() {
  let $instance = new DataLabelsPlugin();
  $instance.$ctor__org_pepstock_charba_client_datalabels_DataLabelsPlugin__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_datalabels_DataLabelsPlugin__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractExtensionPlugin__();
 }
 /** @return {DataLabelsPlugin} */
 static m_get__() {
  DataLabelsPlugin.$clinit();
  return DataLabelsPlugin.f_INSTANCE__org_pepstock_charba_client_datalabels_DataLabelsPlugin_;
 }
 
 m_mergeDefaults__org_pepstock_charba_client_datalabels_DataLabelsOptions_$pp_org_pepstock_charba_client_datalabels(/** DataLabelsOptions */ options) {
  super.m_applyingDefaults__org_pepstock_charba_client_plugins_AbstractPluginOptions(options);
 }
 
 static m_enable__() {
  DataLabelsPlugin.$clinit();
  DataLabelsPlugin.m_enable__boolean(false);
 }
 
 static m_enable__boolean(/** boolean */ enableToAllCharts) {
  DataLabelsPlugin.$clinit();
  ResourcesType.m_getResources__().m_inject__();
  Injector.m_ensureInjected__org_pepstock_charba_client_resources_AbstractInjectableResource(DataLabelsPlugin.f_RESOURCE__org_pepstock_charba_client_datalabels_DataLabelsPlugin_);
  let isRegistered = DataLabelsPlugin.m_get__().m_isRegistered__();
  DataLabelsPlugin.m_get__().m_loadDefaults__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(DataLabelsPlugin.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_datalabels_DataLabelsPlugin);
  if (!isRegistered) {
   JsDataLabelsHelper.m_get__().m_register___$pp_org_pepstock_charba_client_datalabels();
  }
  Defaults.m_get__().m_getPlugins__().m_setEnabledAllCharts__java_lang_String__boolean(DataLabelsPlugin.$static_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, enableToAllCharts);
 }
 /** @return {?string} */
 static get f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin() {
  return (DataLabelsPlugin.$clinit(), DataLabelsPlugin.$static_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin);
 }
 /** @return {DataLabelsOptionsFactory} */
 static get f_FACTORY__org_pepstock_charba_client_datalabels_DataLabelsPlugin() {
  return (DataLabelsPlugin.$clinit(), DataLabelsPlugin.$static_FACTORY__org_pepstock_charba_client_datalabels_DataLabelsPlugin);
 }
 /** @return {DataLabelsDefaultsOptionsFactory} */
 static get f_DEFAULTS_FACTORY__org_pepstock_charba_client_datalabels_DataLabelsPlugin() {
  return (DataLabelsPlugin.$clinit(), DataLabelsPlugin.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_datalabels_DataLabelsPlugin);
 }
 
 static $clinit() {
  DataLabelsPlugin.$clinit = () =>{};
  DataLabelsPlugin.$loadModules();
  AbstractExtensionPlugin.$clinit();
  DataLabelsPlugin.$static_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin = ResourceName.f_DATALABELS_PLUGIN__org_pepstock_charba_client_resources_ResourceName.m_value__();
  DataLabelsPlugin.$static_FACTORY__org_pepstock_charba_client_datalabels_DataLabelsPlugin = DataLabelsOptionsFactory.$create__();
  DataLabelsPlugin.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_datalabels_DataLabelsPlugin = DataLabelsDefaultsOptionsFactory.$create__();
  DataLabelsPlugin.f_RESOURCE__org_pepstock_charba_client_datalabels_DataLabelsPlugin_ = DataLabelsPluginResource.$create__();
  DataLabelsPlugin.f_INSTANCE__org_pepstock_charba_client_datalabels_DataLabelsPlugin_ = DataLabelsPlugin.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataLabelsPlugin;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Injector = goog.module.get('org.pepstock.charba.client.Injector$impl');
  DataLabelsOptionsFactory = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsOptionsFactory$impl');
  DataLabelsDefaultsOptionsFactory = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsOptionsFactory.DataLabelsDefaultsOptionsFactory$impl');
  DataLabelsPluginResource = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsPluginResource$impl');
  JsDataLabelsHelper = goog.module.get('org.pepstock.charba.client.datalabels.JsDataLabelsHelper$impl');
  ResourceName = goog.module.get('org.pepstock.charba.client.resources.ResourceName$impl');
  ResourcesType = goog.module.get('org.pepstock.charba.client.resources.ResourcesType$impl');
 }
}
/**@private {?string}*/
DataLabelsPlugin.$static_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin;
/**@private {DataLabelsOptionsFactory}*/
DataLabelsPlugin.$static_FACTORY__org_pepstock_charba_client_datalabels_DataLabelsPlugin;
/**@private {DataLabelsDefaultsOptionsFactory}*/
DataLabelsPlugin.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_datalabels_DataLabelsPlugin;
/**@type {DataLabelsPluginResource}*/
DataLabelsPlugin.f_RESOURCE__org_pepstock_charba_client_datalabels_DataLabelsPlugin_;
/**@type {DataLabelsPlugin}*/
DataLabelsPlugin.f_INSTANCE__org_pepstock_charba_client_datalabels_DataLabelsPlugin_;
$Util.$setClassMetadata(DataLabelsPlugin, "org.pepstock.charba.client.datalabels.DataLabelsPlugin");

exports = DataLabelsPlugin;

//# sourceMappingURL=DataLabelsPlugin.js.map
