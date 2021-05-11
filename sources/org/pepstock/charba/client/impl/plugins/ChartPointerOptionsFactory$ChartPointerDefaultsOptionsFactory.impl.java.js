goog.module('org.pepstock.charba.client.impl.plugins.ChartPointerOptionsFactory.ChartPointerDefaultsOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPluginOptionsFactory = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

let IsDefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');
let ChartPointer = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointer$impl');
let ChartPointerDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointerDefaultOptions$impl');
let ChartPointerOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointerOptions$impl');

/**
 * @extends {AbstractPluginOptionsFactory<ChartPointerOptions>}
 */
class ChartPointerDefaultsOptionsFactory extends AbstractPluginOptionsFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ChartPointerDefaultsOptionsFactory} */
 static $create__() {
  ChartPointerDefaultsOptionsFactory.$clinit();
  let $instance = new ChartPointerDefaultsOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartPointerOptionsFactory_ChartPointerDefaultsOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartPointerOptionsFactory_ChartPointerDefaultsOptionsFactory__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory__java_lang_String(ChartPointer.f_ID__org_pepstock_charba_client_impl_plugins_ChartPointer);
 }
 /** @override @return {ChartPointerOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(/** ? */ nativeObject, /** IsDefaultPlugins */ defaultValues) {
  return ChartPointerOptions.$create__org_pepstock_charba_client_impl_plugins_IsChartPointerDefaultOptions__org_pepstock_charba_client_commons_NativeObject(ChartPointerDefaultOptions.f_INSTANCE__org_pepstock_charba_client_impl_plugins_ChartPointerDefaultOptions, nativeObject);
 }
 
 static $clinit() {
  ChartPointerDefaultsOptionsFactory.$clinit = () =>{};
  ChartPointerDefaultsOptionsFactory.$loadModules();
  AbstractPluginOptionsFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartPointerDefaultsOptionsFactory;
 }
 
 static $loadModules() {
  ChartPointer = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointer$impl');
  ChartPointerDefaultOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointerDefaultOptions$impl');
  ChartPointerOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointerOptions$impl');
 }
}
$Util.$setClassMetadata(ChartPointerDefaultsOptionsFactory, "org.pepstock.charba.client.impl.plugins.ChartPointerOptionsFactory$ChartPointerDefaultsOptionsFactory");

exports = ChartPointerDefaultsOptionsFactory;

//# sourceMappingURL=ChartPointerOptionsFactory$ChartPointerDefaultsOptionsFactory.js.map
