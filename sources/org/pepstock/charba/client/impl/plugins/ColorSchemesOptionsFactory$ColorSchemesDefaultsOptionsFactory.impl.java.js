goog.module('org.pepstock.charba.client.impl.plugins.ColorSchemesOptionsFactory.ColorSchemesDefaultsOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPluginOptionsFactory = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

let IsDefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');
let ColorSchemes = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemes$impl');
let ColorSchemesDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemesDefaultOptions$impl');
let ColorSchemesOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions$impl');

/**
 * @extends {AbstractPluginOptionsFactory<ColorSchemesOptions>}
 */
class ColorSchemesDefaultsOptionsFactory extends AbstractPluginOptionsFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ColorSchemesDefaultsOptionsFactory} */
 static $create__() {
  ColorSchemesDefaultsOptionsFactory.$clinit();
  let $instance = new ColorSchemesDefaultsOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesOptionsFactory_ColorSchemesDefaultsOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesOptionsFactory_ColorSchemesDefaultsOptionsFactory__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory__java_lang_String(ColorSchemes.f_ID__org_pepstock_charba_client_impl_plugins_ColorSchemes);
 }
 /** @override @return {ColorSchemesOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(/** ? */ nativeObject, /** IsDefaultPlugins */ defaultValues) {
  return ColorSchemesOptions.$create__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions__org_pepstock_charba_client_commons_NativeObject(ColorSchemesDefaultOptions.f_INSTANCE__org_pepstock_charba_client_impl_plugins_ColorSchemesDefaultOptions, nativeObject);
 }
 
 static $clinit() {
  ColorSchemesDefaultsOptionsFactory.$clinit = () =>{};
  ColorSchemesDefaultsOptionsFactory.$loadModules();
  AbstractPluginOptionsFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ColorSchemesDefaultsOptionsFactory;
 }
 
 static $loadModules() {
  ColorSchemes = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemes$impl');
  ColorSchemesDefaultOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemesDefaultOptions$impl');
  ColorSchemesOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions$impl');
 }
}
$Util.$setClassMetadata(ColorSchemesDefaultsOptionsFactory, "org.pepstock.charba.client.impl.plugins.ColorSchemesOptionsFactory$ColorSchemesDefaultsOptionsFactory");

exports = ColorSchemesDefaultsOptionsFactory;

//# sourceMappingURL=ColorSchemesOptionsFactory$ColorSchemesDefaultsOptionsFactory.js.map
