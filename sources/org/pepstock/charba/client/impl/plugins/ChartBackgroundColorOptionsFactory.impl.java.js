goog.module('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPluginOptionsFactory = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsDefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');
let ChartBackgroundColor = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartBackgroundColor$impl');
let ChartBackgroundColorDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorDefaultOptions$impl');
let ChartBackgroundColorOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractPluginOptionsFactory<ChartBackgroundColorOptions>}
 */
class ChartBackgroundColorOptionsFactory extends AbstractPluginOptionsFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ChartBackgroundColorOptionsFactory} */
 static $create__() {
  ChartBackgroundColorOptionsFactory.$clinit();
  let $instance = new ChartBackgroundColorOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptionsFactory__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory__java_lang_String(ChartBackgroundColor.f_ID__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor);
 }
 /** @override @return {ChartBackgroundColorOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(/** ? */ nativeObject, /** IsDefaultPlugins */ defaultValues) {
  if (!$Equality.$same(defaultValues, null)) {
   let defaultOptions = /**@type {ChartBackgroundColorOptions}*/ ($Casts.$to(this.m_loadDefaultsPluginOptions__org_pepstock_charba_client_defaults_IsDefaultPlugins__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(defaultValues, ChartBackgroundColor.f_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor), ChartBackgroundColorOptions));
   return ChartBackgroundColorOptions.$create__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  }
  return ChartBackgroundColorOptions.$create__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions__org_pepstock_charba_client_commons_NativeObject(ChartBackgroundColorDefaultOptions.f_INSTANCE__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorDefaultOptions, nativeObject);
 }
 
 static $clinit() {
  ChartBackgroundColorOptionsFactory.$clinit = () =>{};
  ChartBackgroundColorOptionsFactory.$loadModules();
  AbstractPluginOptionsFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartBackgroundColorOptionsFactory;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartBackgroundColor = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartBackgroundColor$impl');
  ChartBackgroundColorDefaultOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorDefaultOptions$impl');
  ChartBackgroundColorOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ChartBackgroundColorOptionsFactory, "org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptionsFactory");

exports = ChartBackgroundColorOptionsFactory;

//# sourceMappingURL=ChartBackgroundColorOptionsFactory.js.map
