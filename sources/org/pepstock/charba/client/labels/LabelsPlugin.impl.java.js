goog.module('org.pepstock.charba.client.labels.LabelsPlugin$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Injector = goog.forwardDeclare('org.pepstock.charba.client.Injector$impl');
let LabelsOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsOptionsFactory$impl');
let LabelsDefaultsOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsOptionsFactory.LabelsDefaultsOptionsFactory$impl');
let LabelsPluginResource = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsPluginResource$impl');
let ResourceName = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourceName$impl');
let ResourcesType = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourcesType$impl');

class LabelsPlugin extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LabelsPlugin} */
 static $create__() {
  let $instance = new LabelsPlugin();
  $instance.$ctor__org_pepstock_charba_client_labels_LabelsPlugin__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_labels_LabelsPlugin__() {
  this.$ctor__java_lang_Object__();
 }
 
 static m_enable__() {
  LabelsPlugin.$clinit();
  LabelsPlugin.m_enable__boolean(false);
 }
 
 static m_enable__boolean(/** boolean */ enableToAllCharts) {
  LabelsPlugin.$clinit();
  ResourcesType.m_getResources__().m_inject__();
  Injector.m_ensureInjected__org_pepstock_charba_client_resources_AbstractInjectableResource(LabelsPlugin.f_RESOURCE__org_pepstock_charba_client_labels_LabelsPlugin_);
  Defaults.m_get__().m_getPlugins__().m_setEnabledAllCharts__java_lang_String__boolean(LabelsPlugin.$static_ID__org_pepstock_charba_client_labels_LabelsPlugin, enableToAllCharts);
 }
 /** @return {?string} */
 static get f_ID__org_pepstock_charba_client_labels_LabelsPlugin() {
  return (LabelsPlugin.$clinit(), LabelsPlugin.$static_ID__org_pepstock_charba_client_labels_LabelsPlugin);
 }
 /** @return {LabelsOptionsFactory} */
 static get f_FACTORY__org_pepstock_charba_client_labels_LabelsPlugin() {
  return (LabelsPlugin.$clinit(), LabelsPlugin.$static_FACTORY__org_pepstock_charba_client_labels_LabelsPlugin);
 }
 /** @return {LabelsDefaultsOptionsFactory} */
 static get f_DEFAULTS_FACTORY__org_pepstock_charba_client_labels_LabelsPlugin() {
  return (LabelsPlugin.$clinit(), LabelsPlugin.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_labels_LabelsPlugin);
 }
 
 static $clinit() {
  LabelsPlugin.$clinit = () =>{};
  LabelsPlugin.$loadModules();
  j_l_Object.$clinit();
  LabelsPlugin.$static_ID__org_pepstock_charba_client_labels_LabelsPlugin = ResourceName.f_LABELS_PLUGIN__org_pepstock_charba_client_resources_ResourceName.m_value__();
  LabelsPlugin.$static_FACTORY__org_pepstock_charba_client_labels_LabelsPlugin = LabelsOptionsFactory.$create__();
  LabelsPlugin.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_labels_LabelsPlugin = LabelsDefaultsOptionsFactory.$create__();
  LabelsPlugin.f_RESOURCE__org_pepstock_charba_client_labels_LabelsPlugin_ = LabelsPluginResource.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LabelsPlugin;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Injector = goog.module.get('org.pepstock.charba.client.Injector$impl');
  LabelsOptionsFactory = goog.module.get('org.pepstock.charba.client.labels.LabelsOptionsFactory$impl');
  LabelsDefaultsOptionsFactory = goog.module.get('org.pepstock.charba.client.labels.LabelsOptionsFactory.LabelsDefaultsOptionsFactory$impl');
  LabelsPluginResource = goog.module.get('org.pepstock.charba.client.labels.LabelsPluginResource$impl');
  ResourceName = goog.module.get('org.pepstock.charba.client.resources.ResourceName$impl');
  ResourcesType = goog.module.get('org.pepstock.charba.client.resources.ResourcesType$impl');
 }
}
/**@private {?string}*/
LabelsPlugin.$static_ID__org_pepstock_charba_client_labels_LabelsPlugin;
/**@private {LabelsOptionsFactory}*/
LabelsPlugin.$static_FACTORY__org_pepstock_charba_client_labels_LabelsPlugin;
/**@private {LabelsDefaultsOptionsFactory}*/
LabelsPlugin.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_labels_LabelsPlugin;
/**@type {LabelsPluginResource}*/
LabelsPlugin.f_RESOURCE__org_pepstock_charba_client_labels_LabelsPlugin_;
$Util.$setClassMetadata(LabelsPlugin, "org.pepstock.charba.client.labels.LabelsPlugin");

exports = LabelsPlugin;

//# sourceMappingURL=LabelsPlugin.js.map
