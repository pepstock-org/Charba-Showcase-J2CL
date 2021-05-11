goog.module('org.pepstock.charba.client.impl.plugins.ChartPointerOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPluginOptionsFactory = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsDefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');
let ChartPointer = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointer$impl');
let ChartPointerDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointerDefaultOptions$impl');
let ChartPointerOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointerOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractPluginOptionsFactory<ChartPointerOptions>}
 */
class ChartPointerOptionsFactory extends AbstractPluginOptionsFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ChartPointerOptionsFactory} */
 static $create__() {
  ChartPointerOptionsFactory.$clinit();
  let $instance = new ChartPointerOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartPointerOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartPointerOptionsFactory__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory__java_lang_String(ChartPointer.f_ID__org_pepstock_charba_client_impl_plugins_ChartPointer);
 }
 /** @override @return {ChartPointerOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(/** ? */ nativeObject, /** IsDefaultPlugins */ defaultValues) {
  if (!$Equality.$same(defaultValues, null)) {
   let defaultOptions = /**@type {ChartPointerOptions}*/ ($Casts.$to(this.m_loadDefaultsPluginOptions__org_pepstock_charba_client_defaults_IsDefaultPlugins__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(defaultValues, ChartPointer.f_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_ChartPointer), ChartPointerOptions));
   return ChartPointerOptions.$create__org_pepstock_charba_client_impl_plugins_IsChartPointerDefaultOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  }
  return ChartPointerOptions.$create__org_pepstock_charba_client_impl_plugins_IsChartPointerDefaultOptions__org_pepstock_charba_client_commons_NativeObject(ChartPointerDefaultOptions.f_INSTANCE__org_pepstock_charba_client_impl_plugins_ChartPointerDefaultOptions, nativeObject);
 }
 
 static $clinit() {
  ChartPointerOptionsFactory.$clinit = () =>{};
  ChartPointerOptionsFactory.$loadModules();
  AbstractPluginOptionsFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartPointerOptionsFactory;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartPointer = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointer$impl');
  ChartPointerDefaultOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointerDefaultOptions$impl');
  ChartPointerOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointerOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ChartPointerOptionsFactory, "org.pepstock.charba.client.impl.plugins.ChartPointerOptionsFactory");

exports = ChartPointerOptionsFactory;

//# sourceMappingURL=ChartPointerOptionsFactory.js.map
