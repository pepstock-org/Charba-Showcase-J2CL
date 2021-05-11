goog.module('org.pepstock.charba.client.labels.LabelsOptionsFactory.LabelsDefaultsOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPluginOptionsFactory = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

let IsDefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');
let DefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.labels.DefaultOptions$impl');
let LabelsOptions = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsOptions$impl');
let LabelsPlugin = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsPlugin$impl');

/**
 * @extends {AbstractPluginOptionsFactory<LabelsOptions>}
 */
class LabelsDefaultsOptionsFactory extends AbstractPluginOptionsFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LabelsDefaultsOptionsFactory} */
 static $create__() {
  LabelsDefaultsOptionsFactory.$clinit();
  let $instance = new LabelsDefaultsOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_labels_LabelsOptionsFactory_LabelsDefaultsOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_labels_LabelsOptionsFactory_LabelsDefaultsOptionsFactory__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory__java_lang_String(LabelsPlugin.f_ID__org_pepstock_charba_client_labels_LabelsPlugin);
 }
 /** @override @return {LabelsOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(/** ? */ nativeObject, /** IsDefaultPlugins */ defaultValues) {
  return LabelsOptions.$create__org_pepstock_charba_client_labels_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(DefaultOptions.f_INSTANCE__org_pepstock_charba_client_labels_DefaultOptions, nativeObject);
 }
 
 static $clinit() {
  LabelsDefaultsOptionsFactory.$clinit = () =>{};
  LabelsDefaultsOptionsFactory.$loadModules();
  AbstractPluginOptionsFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LabelsDefaultsOptionsFactory;
 }
 
 static $loadModules() {
  DefaultOptions = goog.module.get('org.pepstock.charba.client.labels.DefaultOptions$impl');
  LabelsOptions = goog.module.get('org.pepstock.charba.client.labels.LabelsOptions$impl');
  LabelsPlugin = goog.module.get('org.pepstock.charba.client.labels.LabelsPlugin$impl');
 }
}
$Util.$setClassMetadata(LabelsDefaultsOptionsFactory, "org.pepstock.charba.client.labels.LabelsOptionsFactory$LabelsDefaultsOptionsFactory");

exports = LabelsDefaultsOptionsFactory;

//# sourceMappingURL=LabelsOptionsFactory$LabelsDefaultsOptionsFactory.js.map
