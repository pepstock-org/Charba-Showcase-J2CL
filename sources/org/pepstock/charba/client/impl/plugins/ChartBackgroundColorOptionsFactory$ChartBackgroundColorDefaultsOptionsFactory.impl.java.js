goog.module('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptionsFactory.ChartBackgroundColorDefaultsOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPluginOptionsFactory = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

let IsDefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');
let ChartBackgroundColor = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartBackgroundColor$impl');
let ChartBackgroundColorDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorDefaultOptions$impl');
let ChartBackgroundColorOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptions$impl');

/**
 * @extends {AbstractPluginOptionsFactory<ChartBackgroundColorOptions>}
 */
class ChartBackgroundColorDefaultsOptionsFactory extends AbstractPluginOptionsFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ChartBackgroundColorDefaultsOptionsFactory} */
 static $create__() {
  ChartBackgroundColorDefaultsOptionsFactory.$clinit();
  let $instance = new ChartBackgroundColorDefaultsOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptionsFactory_ChartBackgroundColorDefaultsOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptionsFactory_ChartBackgroundColorDefaultsOptionsFactory__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory__java_lang_String(ChartBackgroundColor.f_ID__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor);
 }
 /** @override @return {ChartBackgroundColorOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(/** ? */ nativeObject, /** IsDefaultPlugins */ defaultValues) {
  return ChartBackgroundColorOptions.$create__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions__org_pepstock_charba_client_commons_NativeObject(ChartBackgroundColorDefaultOptions.f_INSTANCE__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorDefaultOptions, nativeObject);
 }
 
 static $clinit() {
  ChartBackgroundColorDefaultsOptionsFactory.$clinit = () =>{};
  ChartBackgroundColorDefaultsOptionsFactory.$loadModules();
  AbstractPluginOptionsFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartBackgroundColorDefaultsOptionsFactory;
 }
 
 static $loadModules() {
  ChartBackgroundColor = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartBackgroundColor$impl');
  ChartBackgroundColorDefaultOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorDefaultOptions$impl');
  ChartBackgroundColorOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptions$impl');
 }
}
$Util.$setClassMetadata(ChartBackgroundColorDefaultsOptionsFactory, "org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptionsFactory$ChartBackgroundColorDefaultsOptionsFactory");

exports = ChartBackgroundColorDefaultsOptionsFactory;

//# sourceMappingURL=ChartBackgroundColorOptionsFactory$ChartBackgroundColorDefaultsOptionsFactory.js.map
