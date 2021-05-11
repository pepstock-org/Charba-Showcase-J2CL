goog.module('org.pepstock.charba.client.impl.plugins.ColorSchemesOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPluginOptionsFactory = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsDefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');
let ColorSchemes = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemes$impl');
let ColorSchemesDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemesDefaultOptions$impl');
let ColorSchemesOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractPluginOptionsFactory<ColorSchemesOptions>}
 */
class ColorSchemesOptionsFactory extends AbstractPluginOptionsFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ColorSchemesOptionsFactory} */
 static $create__() {
  ColorSchemesOptionsFactory.$clinit();
  let $instance = new ColorSchemesOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesOptionsFactory__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory__java_lang_String(ColorSchemes.f_ID__org_pepstock_charba_client_impl_plugins_ColorSchemes);
 }
 /** @override @return {ColorSchemesOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(/** ? */ nativeObject, /** IsDefaultPlugins */ defaultValues) {
  if (!$Equality.$same(defaultValues, null)) {
   let defaultOptions = /**@type {ColorSchemesOptions}*/ ($Casts.$to(this.m_loadDefaultsPluginOptions__org_pepstock_charba_client_defaults_IsDefaultPlugins__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(defaultValues, ColorSchemes.f_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_ColorSchemes), ColorSchemesOptions));
   return ColorSchemesOptions.$create__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  }
  return ColorSchemesOptions.$create__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions__org_pepstock_charba_client_commons_NativeObject(ColorSchemesDefaultOptions.f_INSTANCE__org_pepstock_charba_client_impl_plugins_ColorSchemesDefaultOptions, nativeObject);
 }
 
 static $clinit() {
  ColorSchemesOptionsFactory.$clinit = () =>{};
  ColorSchemesOptionsFactory.$loadModules();
  AbstractPluginOptionsFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ColorSchemesOptionsFactory;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ColorSchemes = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemes$impl');
  ColorSchemesDefaultOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemesDefaultOptions$impl');
  ColorSchemesOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ColorSchemesOptionsFactory, "org.pepstock.charba.client.impl.plugins.ColorSchemesOptionsFactory");

exports = ColorSchemesOptionsFactory;

//# sourceMappingURL=ColorSchemesOptionsFactory.js.map
