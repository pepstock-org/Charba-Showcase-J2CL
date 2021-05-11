goog.module('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPluginOptionsFactory = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsDefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');
let DatasetsItemsSelector = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector$impl');
let DatasetsItemsSelectorDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorDefaultOptions$impl');
let DatasetsItemsSelectorOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractPluginOptionsFactory<DatasetsItemsSelectorOptions>}
 */
class DatasetsItemsSelectorOptionsFactory extends AbstractPluginOptionsFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DatasetsItemsSelectorOptionsFactory} */
 static $create__() {
  DatasetsItemsSelectorOptionsFactory.$clinit();
  let $instance = new DatasetsItemsSelectorOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsFactory__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory__java_lang_String(DatasetsItemsSelector.f_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector);
 }
 /** @override @return {DatasetsItemsSelectorOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(/** ? */ nativeObject, /** IsDefaultPlugins */ defaultValues) {
  if (!$Equality.$same(defaultValues, null)) {
   let defaultOptions = /**@type {DatasetsItemsSelectorOptions}*/ ($Casts.$to(this.m_loadDefaultsPluginOptions__org_pepstock_charba_client_defaults_IsDefaultPlugins__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(defaultValues, DatasetsItemsSelector.f_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector), DatasetsItemsSelectorOptions));
   return DatasetsItemsSelectorOptions.$create__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  }
  return DatasetsItemsSelectorOptions.$create__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions__org_pepstock_charba_client_commons_NativeObject(DatasetsItemsSelectorDefaultOptions.f_INSTANCE__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorDefaultOptions, nativeObject);
 }
 
 static $clinit() {
  DatasetsItemsSelectorOptionsFactory.$clinit = () =>{};
  DatasetsItemsSelectorOptionsFactory.$loadModules();
  AbstractPluginOptionsFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetsItemsSelectorOptionsFactory;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DatasetsItemsSelector = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector$impl');
  DatasetsItemsSelectorDefaultOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorDefaultOptions$impl');
  DatasetsItemsSelectorOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(DatasetsItemsSelectorOptionsFactory, "org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptionsFactory");

exports = DatasetsItemsSelectorOptionsFactory;

//# sourceMappingURL=DatasetsItemsSelectorOptionsFactory.js.map
