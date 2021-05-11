goog.module('org.pepstock.charba.client.impl.plugins.HtmlLegendOptionsFactory.HtmlLegendBuilderDefaultsOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPluginOptionsFactory = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

let IsDefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');
let HtmlLegend = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegend$impl');
let HtmlLegendDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendDefaultOptions$impl');
let HtmlLegendOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions$impl');

/**
 * @extends {AbstractPluginOptionsFactory<HtmlLegendOptions>}
 */
class HtmlLegendBuilderDefaultsOptionsFactory extends AbstractPluginOptionsFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlLegendBuilderDefaultsOptionsFactory} */
 static $create__() {
  HtmlLegendBuilderDefaultsOptionsFactory.$clinit();
  let $instance = new HtmlLegendBuilderDefaultsOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendOptionsFactory_HtmlLegendBuilderDefaultsOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendOptionsFactory_HtmlLegendBuilderDefaultsOptionsFactory__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory__java_lang_String(HtmlLegend.f_ID__org_pepstock_charba_client_impl_plugins_HtmlLegend);
 }
 /** @override @return {HtmlLegendOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(/** ? */ nativeObject, /** IsDefaultPlugins */ defaultValues) {
  return HtmlLegendOptions.$create__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions__org_pepstock_charba_client_commons_NativeObject(HtmlLegendDefaultOptions.f_INSTANCE__org_pepstock_charba_client_impl_plugins_HtmlLegendDefaultOptions, nativeObject);
 }
 
 static $clinit() {
  HtmlLegendBuilderDefaultsOptionsFactory.$clinit = () =>{};
  HtmlLegendBuilderDefaultsOptionsFactory.$loadModules();
  AbstractPluginOptionsFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlLegendBuilderDefaultsOptionsFactory;
 }
 
 static $loadModules() {
  HtmlLegend = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegend$impl');
  HtmlLegendDefaultOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegendDefaultOptions$impl');
  HtmlLegendOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions$impl');
 }
}
$Util.$setClassMetadata(HtmlLegendBuilderDefaultsOptionsFactory, "org.pepstock.charba.client.impl.plugins.HtmlLegendOptionsFactory$HtmlLegendBuilderDefaultsOptionsFactory");

exports = HtmlLegendBuilderDefaultsOptionsFactory;

//# sourceMappingURL=HtmlLegendOptionsFactory$HtmlLegendBuilderDefaultsOptionsFactory.js.map
