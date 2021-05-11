goog.module('org.pepstock.charba.client.labels.LabelsOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPluginOptionsFactory = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsDefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');
let DefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.labels.DefaultOptions$impl');
let LabelsOptions = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsOptions$impl');
let LabelsPlugin = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsPlugin$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractPluginOptionsFactory<LabelsOptions>}
 */
class LabelsOptionsFactory extends AbstractPluginOptionsFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LabelsOptionsFactory} */
 static $create__() {
  LabelsOptionsFactory.$clinit();
  let $instance = new LabelsOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_labels_LabelsOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_labels_LabelsOptionsFactory__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory__java_lang_String(LabelsPlugin.f_ID__org_pepstock_charba_client_labels_LabelsPlugin);
 }
 /** @override @return {LabelsOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(/** ? */ nativeObject, /** IsDefaultPlugins */ defaultValues) {
  if (!$Equality.$same(defaultValues, null)) {
   let defaultOptions = /**@type {LabelsOptions}*/ ($Casts.$to(this.m_loadDefaultsPluginOptions__org_pepstock_charba_client_defaults_IsDefaultPlugins__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(defaultValues, LabelsPlugin.f_DEFAULTS_FACTORY__org_pepstock_charba_client_labels_LabelsPlugin), LabelsOptions));
   return LabelsOptions.$create__org_pepstock_charba_client_labels_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  }
  return LabelsOptions.$create__org_pepstock_charba_client_labels_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(DefaultOptions.f_INSTANCE__org_pepstock_charba_client_labels_DefaultOptions, nativeObject);
 }
 
 static $clinit() {
  LabelsOptionsFactory.$clinit = () =>{};
  LabelsOptionsFactory.$loadModules();
  AbstractPluginOptionsFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LabelsOptionsFactory;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DefaultOptions = goog.module.get('org.pepstock.charba.client.labels.DefaultOptions$impl');
  LabelsOptions = goog.module.get('org.pepstock.charba.client.labels.LabelsOptions$impl');
  LabelsPlugin = goog.module.get('org.pepstock.charba.client.labels.LabelsPlugin$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(LabelsOptionsFactory, "org.pepstock.charba.client.labels.LabelsOptionsFactory");

exports = LabelsOptionsFactory;

//# sourceMappingURL=LabelsOptionsFactory.js.map
