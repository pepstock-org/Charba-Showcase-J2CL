goog.module('org.pepstock.charba.client.datalabels.DataLabelsOptionsFactory.DataLabelsDefaultsOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPluginOptionsFactory = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

let DataLabelsOptions = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
let DataLabelsPlugin = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
let DefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DefaultOptions$impl');
let IsDefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');

/**
 * @extends {AbstractPluginOptionsFactory<DataLabelsOptions>}
 */
class DataLabelsDefaultsOptionsFactory extends AbstractPluginOptionsFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DataLabelsDefaultsOptionsFactory} */
 static $create__() {
  DataLabelsDefaultsOptionsFactory.$clinit();
  let $instance = new DataLabelsDefaultsOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_datalabels_DataLabelsOptionsFactory_DataLabelsDefaultsOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_datalabels_DataLabelsOptionsFactory_DataLabelsDefaultsOptionsFactory__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory__java_lang_String(DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin);
 }
 /** @override @return {DataLabelsOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(/** ? */ nativeObject, /** IsDefaultPlugins */ defaultValues) {
  return DataLabelsOptions.$create__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsOptions__org_pepstock_charba_client_commons_NativeObject(DefaultOptions.f_INSTANCE__org_pepstock_charba_client_datalabels_DefaultOptions, nativeObject);
 }
 
 static $clinit() {
  DataLabelsDefaultsOptionsFactory.$clinit = () =>{};
  DataLabelsDefaultsOptionsFactory.$loadModules();
  AbstractPluginOptionsFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataLabelsDefaultsOptionsFactory;
 }
 
 static $loadModules() {
  DataLabelsOptions = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
  DataLabelsPlugin = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
  DefaultOptions = goog.module.get('org.pepstock.charba.client.datalabels.DefaultOptions$impl');
 }
}
$Util.$setClassMetadata(DataLabelsDefaultsOptionsFactory, "org.pepstock.charba.client.datalabels.DataLabelsOptionsFactory$DataLabelsDefaultsOptionsFactory");

exports = DataLabelsDefaultsOptionsFactory;

//# sourceMappingURL=DataLabelsOptionsFactory$DataLabelsDefaultsOptionsFactory.js.map
