goog.module('org.pepstock.charba.client.impl.plugins.HtmlLegendOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPluginOptionsFactory = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsDefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');
let HtmlLegend = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegend$impl');
let HtmlLegendDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendDefaultOptions$impl');
let HtmlLegendOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractPluginOptionsFactory<HtmlLegendOptions>}
 */
class HtmlLegendOptionsFactory extends AbstractPluginOptionsFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlLegendOptionsFactory} */
 static $create__() {
  HtmlLegendOptionsFactory.$clinit();
  let $instance = new HtmlLegendOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendOptionsFactory__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory__java_lang_String(HtmlLegend.f_ID__org_pepstock_charba_client_impl_plugins_HtmlLegend);
 }
 /** @override @return {HtmlLegendOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(/** ? */ nativeObject, /** IsDefaultPlugins */ defaultValues) {
  if (!$Equality.$same(defaultValues, null)) {
   let defaultOptions = /**@type {HtmlLegendOptions}*/ ($Casts.$to(this.m_loadDefaultsPluginOptions__org_pepstock_charba_client_defaults_IsDefaultPlugins__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(defaultValues, HtmlLegend.f_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_HtmlLegend), HtmlLegendOptions));
   return HtmlLegendOptions.$create__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  }
  return HtmlLegendOptions.$create__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions__org_pepstock_charba_client_commons_NativeObject(HtmlLegendDefaultOptions.f_INSTANCE__org_pepstock_charba_client_impl_plugins_HtmlLegendDefaultOptions, nativeObject);
 }
 
 static $clinit() {
  HtmlLegendOptionsFactory.$clinit = () =>{};
  HtmlLegendOptionsFactory.$loadModules();
  AbstractPluginOptionsFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlLegendOptionsFactory;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  HtmlLegend = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegend$impl');
  HtmlLegendDefaultOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegendDefaultOptions$impl');
  HtmlLegendOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(HtmlLegendOptionsFactory, "org.pepstock.charba.client.impl.plugins.HtmlLegendOptionsFactory");

exports = HtmlLegendOptionsFactory;

//# sourceMappingURL=HtmlLegendOptionsFactory.js.map
