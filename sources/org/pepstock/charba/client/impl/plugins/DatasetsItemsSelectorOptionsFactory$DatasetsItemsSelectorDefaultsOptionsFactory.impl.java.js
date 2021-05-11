goog.module('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptionsFactory.DatasetsItemsSelectorDefaultsOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPluginOptionsFactory = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

let IsDefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');
let DatasetsItemsSelector = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector$impl');
let DatasetsItemsSelectorDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorDefaultOptions$impl');
let DatasetsItemsSelectorOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');

/**
 * @extends {AbstractPluginOptionsFactory<DatasetsItemsSelectorOptions>}
 */
class DatasetsItemsSelectorDefaultsOptionsFactory extends AbstractPluginOptionsFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DatasetsItemsSelectorDefaultsOptionsFactory} */
 static $create__() {
  DatasetsItemsSelectorDefaultsOptionsFactory.$clinit();
  let $instance = new DatasetsItemsSelectorDefaultsOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsFactory_DatasetsItemsSelectorDefaultsOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsFactory_DatasetsItemsSelectorDefaultsOptionsFactory__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory__java_lang_String(DatasetsItemsSelector.f_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector);
 }
 /** @override @return {DatasetsItemsSelectorOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(/** ? */ nativeObject, /** IsDefaultPlugins */ defaultValues) {
  return DatasetsItemsSelectorOptions.$create__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions__org_pepstock_charba_client_commons_NativeObject(DatasetsItemsSelectorDefaultOptions.f_INSTANCE__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorDefaultOptions, nativeObject);
 }
 
 static $clinit() {
  DatasetsItemsSelectorDefaultsOptionsFactory.$clinit = () =>{};
  DatasetsItemsSelectorDefaultsOptionsFactory.$loadModules();
  AbstractPluginOptionsFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetsItemsSelectorDefaultsOptionsFactory;
 }
 
 static $loadModules() {
  DatasetsItemsSelector = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector$impl');
  DatasetsItemsSelectorDefaultOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorDefaultOptions$impl');
  DatasetsItemsSelectorOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');
 }
}
$Util.$setClassMetadata(DatasetsItemsSelectorDefaultsOptionsFactory, "org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptionsFactory$DatasetsItemsSelectorDefaultsOptionsFactory");

exports = DatasetsItemsSelectorDefaultsOptionsFactory;

//# sourceMappingURL=DatasetsItemsSelectorOptionsFactory$DatasetsItemsSelectorDefaultsOptionsFactory.js.map
