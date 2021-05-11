goog.module('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsChartBackgroundColorDefaultOptions = goog.require('org.pepstock.charba.client.impl.plugins.IsChartBackgroundColorDefaultOptions$impl');
const AbstractPluginOptions = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptions$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let GradientBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let PatternBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.PatternBuilder$impl');
let ColorType = goog.forwardDeclare('org.pepstock.charba.client.enums.ColorType$impl');
let ChartBackgroundColor = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartBackgroundColor$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptions.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {IsChartBackgroundColorDefaultOptions}
 */
class ChartBackgroundColorOptions extends AbstractPluginOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {IsChartBackgroundColorDefaultOptions}*/
  this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_;
 }
 //Factory method corresponding to constructor 'ChartBackgroundColorOptions()'.
 /** @return {!ChartBackgroundColorOptions} */
 static $create__() {
  ChartBackgroundColorOptions.$clinit();
  let $instance = new ChartBackgroundColorOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions__();
  return $instance;
 }
 //Initialization from constructor 'ChartBackgroundColorOptions()'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions__() {
  this.$ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions__org_pepstock_charba_client_commons_NativeObject(null, null);
 }
 //Factory method corresponding to constructor 'ChartBackgroundColorOptions(IsChart)'.
 /** @return {!ChartBackgroundColorOptions} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  ChartBackgroundColorOptions.$clinit();
  let $instance = new ChartBackgroundColorOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 //Initialization from constructor 'ChartBackgroundColorOptions(IsChart)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions(IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) ? /**@type {ChartBackgroundColorOptions}*/ ($Casts.$to(chart.m_getDefaultChartOptions__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ChartBackgroundColor.f_ID__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor, ChartBackgroundColor.f_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor), ChartBackgroundColorOptions)) : null);
 }
 //Factory method corresponding to constructor 'ChartBackgroundColorOptions(IsChartBackgroundColorDefaultOptions)'.
 /** @return {!ChartBackgroundColorOptions} */
 static $create__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions(/** IsChartBackgroundColorDefaultOptions */ defaultOptions) {
  ChartBackgroundColorOptions.$clinit();
  let $instance = new ChartBackgroundColorOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions(defaultOptions);
  return $instance;
 }
 //Initialization from constructor 'ChartBackgroundColorOptions(IsChartBackgroundColorDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions(/** IsChartBackgroundColorDefaultOptions */ defaultOptions) {
  this.$ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, null);
 }
 //Factory method corresponding to constructor 'ChartBackgroundColorOptions(IsChartBackgroundColorDefaultOptions, NativeObject)'.
 /** @return {!ChartBackgroundColorOptions} */
 static $create__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions__org_pepstock_charba_client_commons_NativeObject(/** IsChartBackgroundColorDefaultOptions */ defaultOptions, /** ? */ nativeObject) {
  ChartBackgroundColorOptions.$clinit();
  let $instance = new ChartBackgroundColorOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'ChartBackgroundColorOptions(IsChartBackgroundColorDefaultOptions, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions__org_pepstock_charba_client_commons_NativeObject(/** IsChartBackgroundColorDefaultOptions */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptions__java_lang_String__org_pepstock_charba_client_commons_NativeObject(ChartBackgroundColor.f_ID__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor, nativeObject);
  if ($Equality.$same(defaultOptions, null)) {
   this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_ = /**@type {ChartBackgroundColorOptions}*/ ($Casts.$to(this.m_loadGlobalsPluginOptions__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ChartBackgroundColor.f_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor), ChartBackgroundColorOptions));
  } else {
   this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_ = defaultOptions;
  }
 }
 /** @override @return {ColorType} */
 m_getColorType__() {
  return /**@type {ColorType}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_COLOR_TYPE__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_Property, ColorType.m_values__(), this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_.m_getColorType__()), ColorType));
 }
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ColorType.f_COLOR__org_pepstock_charba_client_enums_ColorType, this.m_getColorType__())) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_Property, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_.m_getBackgroundColorAsString__());
  }
  return this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_.m_getBackgroundColorAsString__();
 }
 /** @return {IsColor} */
 m_getBackgroundColor__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ColorType.f_COLOR__org_pepstock_charba_client_enums_ColorType, this.m_getColorType__())) {
   return ColorBuilder.m_parse__java_lang_String(this.m_getBackgroundColorAsString__());
  }
  return ColorBuilder.m_parse__java_lang_String(this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_.m_getBackgroundColorAsString__());
 }
 /** @override @return {Gradient} */
 m_getBackgroundColorAsGradient__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ColorType.f_GRADIENT__org_pepstock_charba_client_enums_ColorType, this.m_getColorType__())) {
   if (this.m_has__org_pepstock_charba_client_commons_Key(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_Property)) {
    return GradientBuilder.m_build__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_Property));
   } else {
    return this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_.m_getBackgroundColorAsGradient__();
   }
  }
  return null;
 }
 /** @override @return {Pattern} */
 m_getBackgroundColorAsPattern__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ColorType.f_PATTERN__org_pepstock_charba_client_enums_ColorType, this.m_getColorType__())) {
   if (this.m_has__org_pepstock_charba_client_commons_Key(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_Property)) {
    return PatternBuilder.m_build__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_Property));
   } else {
    return this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_.m_getBackgroundColorAsPattern__();
   }
  }
  return null;
 }
 
 m_setBackgroundColor__java_lang_String(/** ?string */ color) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_Property, color);
  if (!$Equality.$same(color, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_COLOR_TYPE__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_Property, ColorType.f_COLOR__org_pepstock_charba_client_enums_ColorType);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_COLOR_TYPE__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_Property);
  }
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setBackgroundColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_colors_Gradient(/** Gradient */ gradient) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_Property, gradient);
  if (!$Equality.$same(gradient, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_COLOR_TYPE__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_Property, ColorType.f_GRADIENT__org_pepstock_charba_client_enums_ColorType);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_COLOR_TYPE__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_Property);
  }
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_colors_Pattern(/** Pattern */ pattern) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_Property, pattern);
  if (!$Equality.$same(pattern, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_COLOR_TYPE__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_Property, ColorType.f_PATTERN__org_pepstock_charba_client_enums_ColorType);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_COLOR_TYPE__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptions_Property);
  }
 }
 
 static $clinit() {
  ChartBackgroundColorOptions.$clinit = () =>{};
  ChartBackgroundColorOptions.$loadModules();
  AbstractPluginOptions.$clinit();
  IsChartBackgroundColorDefaultOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartBackgroundColorOptions;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  GradientBuilder = goog.module.get('org.pepstock.charba.client.colors.GradientBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  PatternBuilder = goog.module.get('org.pepstock.charba.client.colors.PatternBuilder$impl');
  ColorType = goog.module.get('org.pepstock.charba.client.enums.ColorType$impl');
  ChartBackgroundColor = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartBackgroundColor$impl');
  Property = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptions.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
IsChartBackgroundColorDefaultOptions.$markImplementor(ChartBackgroundColorOptions);
$Util.$setClassMetadata(ChartBackgroundColorOptions, "org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptions");

exports = ChartBackgroundColorOptions;

//# sourceMappingURL=ChartBackgroundColorOptions.js.map
