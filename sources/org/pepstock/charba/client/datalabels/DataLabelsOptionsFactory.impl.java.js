goog.module('org.pepstock.charba.client.datalabels.DataLabelsOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPluginOptionsFactory = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DataLabelsOptions = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
let DataLabelsPlugin = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
let DefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DefaultOptions$impl');
let IsDefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractPluginOptionsFactory<DataLabelsOptions>}
 */
class DataLabelsOptionsFactory extends AbstractPluginOptionsFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DataLabelsOptionsFactory} */
 static $create__() {
  DataLabelsOptionsFactory.$clinit();
  let $instance = new DataLabelsOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_datalabels_DataLabelsOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_datalabels_DataLabelsOptionsFactory__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory__java_lang_String(DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin);
 }
 /** @override @return {DataLabelsOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(/** ? */ nativeObject, /** IsDefaultPlugins */ defaultValues) {
  if (!$Equality.$same(defaultValues, null)) {
   let defaultOptions = /**@type {DataLabelsOptions}*/ ($Casts.$to(this.m_loadDefaultsPluginOptions__org_pepstock_charba_client_defaults_IsDefaultPlugins__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(defaultValues, DataLabelsPlugin.f_DEFAULTS_FACTORY__org_pepstock_charba_client_datalabels_DataLabelsPlugin), DataLabelsOptions));
   return DataLabelsOptions.$create__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  }
  return DataLabelsOptions.$create__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsOptions__org_pepstock_charba_client_commons_NativeObject(DefaultOptions.f_INSTANCE__org_pepstock_charba_client_datalabels_DefaultOptions, nativeObject);
 }
 
 static $clinit() {
  DataLabelsOptionsFactory.$clinit = () =>{};
  DataLabelsOptionsFactory.$loadModules();
  AbstractPluginOptionsFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataLabelsOptionsFactory;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DataLabelsOptions = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
  DataLabelsPlugin = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
  DefaultOptions = goog.module.get('org.pepstock.charba.client.datalabels.DefaultOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(DataLabelsOptionsFactory, "org.pepstock.charba.client.datalabels.DataLabelsOptionsFactory");

exports = DataLabelsOptionsFactory;

//# sourceMappingURL=DataLabelsOptionsFactory.js.map
