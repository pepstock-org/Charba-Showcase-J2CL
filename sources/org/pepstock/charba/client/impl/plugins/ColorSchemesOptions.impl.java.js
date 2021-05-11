goog.module('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsColorSchemesDefaultOptions = goog.require('org.pepstock.charba.client.impl.plugins.IsColorSchemesDefaultOptions$impl');
const AbstractPluginOptions = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptions$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ColorUtil = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorUtil$impl');
let ColorScheme = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorScheme$impl');
let ColorSchemes = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemes$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions.Property$impl');
let ColorSchemesUtil = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemesUtil$impl');
let BrewerScheme = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.BrewerScheme$impl');
let SchemeScope = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.SchemeScope$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsColorSchemesDefaultOptions}
 */
class ColorSchemesOptions extends AbstractPluginOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {IsColorSchemesDefaultOptions}*/
  this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_;
 }
 //Factory method corresponding to constructor 'ColorSchemesOptions()'.
 /** @return {!ColorSchemesOptions} */
 static $create__() {
  ColorSchemesOptions.$clinit();
  let $instance = new ColorSchemesOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions__();
  return $instance;
 }
 //Initialization from constructor 'ColorSchemesOptions()'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions__() {
  this.$ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions__org_pepstock_charba_client_commons_NativeObject(null, null);
 }
 //Factory method corresponding to constructor 'ColorSchemesOptions(IsChart)'.
 /** @return {!ColorSchemesOptions} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  ColorSchemesOptions.$clinit();
  let $instance = new ColorSchemesOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 //Initialization from constructor 'ColorSchemesOptions(IsChart)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions(IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) ? /**@type {ColorSchemesOptions}*/ ($Casts.$to(chart.m_getDefaultChartOptions__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ColorSchemes.f_ID__org_pepstock_charba_client_impl_plugins_ColorSchemes, ColorSchemes.f_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_ColorSchemes), ColorSchemesOptions)) : null);
 }
 //Factory method corresponding to constructor 'ColorSchemesOptions(IsColorSchemesDefaultOptions)'.
 /** @return {!ColorSchemesOptions} */
 static $create__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions(/** IsColorSchemesDefaultOptions */ defaultOptions) {
  ColorSchemesOptions.$clinit();
  let $instance = new ColorSchemesOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions(defaultOptions);
  return $instance;
 }
 //Initialization from constructor 'ColorSchemesOptions(IsColorSchemesDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions(/** IsColorSchemesDefaultOptions */ defaultOptions) {
  this.$ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, null);
 }
 //Factory method corresponding to constructor 'ColorSchemesOptions(IsColorSchemesDefaultOptions, NativeObject)'.
 /** @return {!ColorSchemesOptions} */
 static $create__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions__org_pepstock_charba_client_commons_NativeObject(/** IsColorSchemesDefaultOptions */ defaultOptions, /** ? */ nativeObject) {
  ColorSchemesOptions.$clinit();
  let $instance = new ColorSchemesOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'ColorSchemesOptions(IsColorSchemesDefaultOptions, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions__org_pepstock_charba_client_commons_NativeObject(/** IsColorSchemesDefaultOptions */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptions__java_lang_String__org_pepstock_charba_client_commons_NativeObject(ColorSchemes.f_ID__org_pepstock_charba_client_impl_plugins_ColorSchemes, nativeObject);
  if ($Equality.$same(defaultOptions, null)) {
   this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_ = /**@type {ColorSchemesOptions}*/ ($Casts.$to(this.m_loadGlobalsPluginOptions__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ColorSchemes.f_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_ColorSchemes), ColorSchemesOptions));
  } else {
   this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_ = defaultOptions;
  }
 }
 
 m_setSchemeScope__org_pepstock_charba_client_impl_plugins_enums_SchemeScope(/** SchemeScope */ schemeScope) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_SCHEME_SCOPE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property, schemeScope);
 }
 /** @override @return {SchemeScope} */
 m_getSchemeScope__() {
  return /**@type {SchemeScope}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_SCHEME_SCOPE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property, SchemeScope.m_values__(), this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_.m_getSchemeScope__()), SchemeScope));
 }
 
 m_setScheme__org_pepstock_charba_client_impl_plugins_ColorScheme(/** ColorScheme */ scheme) {
  if (ColorScheme.m_isValid__org_pepstock_charba_client_impl_plugins_ColorScheme(scheme)) {
   if (!ColorSchemesUtil.m_get__().m_hasColorScheme__java_lang_String__java_lang_String_$pp_org_pepstock_charba_client_impl_plugins(scheme.m_category__(), scheme.m_value__())) {
    ColorSchemesUtil.m_get__().m_putColorScheme__org_pepstock_charba_client_impl_plugins_ColorScheme_$pp_org_pepstock_charba_client_impl_plugins(scheme);
   }
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_SCHEME_NAME__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property, scheme);
   this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_SCHEME_CATEGORY__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property, scheme.m_category__());
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_SCHEME_NAME__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property);
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_SCHEME_CATEGORY__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property);
  }
 }
 /** @return {ColorScheme} */
 m_getScheme__() {
  let category = this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_SCHEME_CATEGORY__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_.m_getSchemeCategory__());
  let name = this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_SCHEME_NAME__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_.m_getSchemeName__());
  return ColorSchemesUtil.m_get__().m_getColorScheme__java_lang_String__java_lang_String_$pp_org_pepstock_charba_client_impl_plugins(category, name);
 }
 
 m_setBackgroundColorAlpha__double(/** number */ backgroundColorAlpha) {
  ColorUtil.m_checkAlphaWithinBounds__double(backgroundColorAlpha);
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_BACKGROUND_COLOR_ALPHA__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property, backgroundColorAlpha);
 }
 /** @override @return {number} */
 m_getBackgroundColorAlpha__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_BACKGROUND_COLOR_ALPHA__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_.m_getBackgroundColorAlpha__());
 }
 
 m_setReverse__boolean(/** boolean */ reverse) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_REVERSE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property, reverse);
 }
 /** @override @return {boolean} */
 m_isReverse__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_REVERSE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_.m_isReverse__());
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getSchemeCategory__() {
  return IsColorSchemesDefaultOptions.m_getSchemeCategory__$default__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getSchemeName__() {
  return IsColorSchemesDefaultOptions.m_getSchemeName__$default__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions(this);
 }
 /** @return {ColorScheme} */
 static get f_DEFAULT_SCHEME__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions() {
  return (ColorSchemesOptions.$clinit(), ColorSchemesOptions.$static_DEFAULT_SCHEME__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions);
 }
 /** @return {SchemeScope} */
 static get f_DEFAULT_SCHEME_SCOPE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions() {
  return (ColorSchemesOptions.$clinit(), ColorSchemesOptions.$static_DEFAULT_SCHEME_SCOPE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions);
 }
 
 static $clinit() {
  ColorSchemesOptions.$clinit = () =>{};
  ColorSchemesOptions.$loadModules();
  AbstractPluginOptions.$clinit();
  IsColorSchemesDefaultOptions.$clinit();
  ColorSchemesOptions.$static_DEFAULT_SCHEME__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions = BrewerScheme.f_PAIRED12__org_pepstock_charba_client_impl_plugins_enums_BrewerScheme;
  ColorSchemesOptions.$static_DEFAULT_SCHEME_SCOPE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions = SchemeScope.f_DATASET__org_pepstock_charba_client_impl_plugins_enums_SchemeScope;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ColorSchemesOptions;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  ColorUtil = goog.module.get('org.pepstock.charba.client.colors.ColorUtil$impl');
  ColorScheme = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorScheme$impl');
  ColorSchemes = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemes$impl');
  Property = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions.Property$impl');
  ColorSchemesUtil = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemesUtil$impl');
  BrewerScheme = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.BrewerScheme$impl');
  SchemeScope = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.SchemeScope$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {ColorScheme}*/
ColorSchemesOptions.$static_DEFAULT_SCHEME__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions;
/**@private {SchemeScope}*/
ColorSchemesOptions.$static_DEFAULT_SCHEME_SCOPE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions;
/**@const {number}*/
ColorSchemesOptions.f_DEFAULT_BACKGROUND_ALPHA__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions = 0.5;
/**@const {boolean}*/
ColorSchemesOptions.f_DEFAULT_REVERSE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions = false;
/**@const {?string}*/
ColorSchemesOptions.f_DEFAULT_SCHEME_CATEGORY__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions = "custom";
IsColorSchemesDefaultOptions.$markImplementor(ColorSchemesOptions);
$Util.$setClassMetadata(ColorSchemesOptions, "org.pepstock.charba.client.impl.plugins.ColorSchemesOptions");

exports = ColorSchemesOptions;

//# sourceMappingURL=ColorSchemesOptions.js.map
