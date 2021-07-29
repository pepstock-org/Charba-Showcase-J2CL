goog.module('org.pepstock.charba.client.impl.plugins.ChartBackgroundColor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPlugin = goog.require('org.pepstock.charba.client.plugins.AbstractPlugin$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let Context2dItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
let ColorType = goog.forwardDeclare('org.pepstock.charba.client.enums.ColorType$impl');
let ChartBackgroundColorDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorDefaultOptions$impl');
let ChartBackgroundColorOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptions$impl');
let ChartBackgroundColorOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptionsFactory$impl');
let ChartBackgroundColorDefaultsOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptionsFactory.ChartBackgroundColorDefaultsOptionsFactory$impl');
let ChartBackgroundGradientFactory = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartBackgroundGradientFactory$impl');
let PluginResizeArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginResizeArgument$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class ChartBackgroundColor extends AbstractPlugin {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_color__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_;
  /**@type {Gradient}*/
  this.f_gradient__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_;
  /**@type {Pattern}*/
  this.f_pattern__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_;
 }
 //Factory method corresponding to constructor 'ChartBackgroundColor()'.
 /** @return {!ChartBackgroundColor} */
 static $create__() {
  ChartBackgroundColor.$clinit();
  let $instance = new ChartBackgroundColor();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor__();
  return $instance;
 }
 //Initialization from constructor 'ChartBackgroundColor()'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor__() {
  this.$ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor__java_lang_String(ChartBackgroundColor.$static_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor);
 }
 //Factory method corresponding to constructor 'ChartBackgroundColor(IsColor)'.
 /** @return {!ChartBackgroundColor} */
 static $create__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  ChartBackgroundColor.$clinit();
  let $instance = new ChartBackgroundColor();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor__org_pepstock_charba_client_colors_IsColor(color);
  return $instance;
 }
 //Initialization from constructor 'ChartBackgroundColor(IsColor)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.$ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor__java_lang_String(IsColor.m_isConsistent__org_pepstock_charba_client_colors_IsColor(color) ? color.m_toRGBA__() : ChartBackgroundColor.$static_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor);
 }
 //Factory method corresponding to constructor 'ChartBackgroundColor(String)'.
 /** @return {!ChartBackgroundColor} */
 static $create__java_lang_String(/** ?string */ color) {
  ChartBackgroundColor.$clinit();
  let $instance = new ChartBackgroundColor();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor__java_lang_String(color);
  return $instance;
 }
 //Initialization from constructor 'ChartBackgroundColor(String)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor__java_lang_String(/** ?string */ color) {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPlugin__java_lang_String(ChartBackgroundColor.f_ID__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor);
  this.f_color__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_ = !$Equality.$same(color, null) ? color : ChartBackgroundColor.$static_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor;
  this.f_pattern__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_ = null;
  this.f_gradient__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_ = null;
 }
 //Factory method corresponding to constructor 'ChartBackgroundColor(Gradient)'.
 /** @return {!ChartBackgroundColor} */
 static $create__org_pepstock_charba_client_colors_Gradient(/** Gradient */ gradient) {
  ChartBackgroundColor.$clinit();
  let $instance = new ChartBackgroundColor();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor__org_pepstock_charba_client_colors_Gradient(gradient);
  return $instance;
 }
 //Initialization from constructor 'ChartBackgroundColor(Gradient)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor__org_pepstock_charba_client_colors_Gradient(/** Gradient */ gradient) {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPlugin__java_lang_String(ChartBackgroundColor.f_ID__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor);
  this.f_gradient__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_ = /**@type {Gradient}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(gradient, "Gradient argument"), Gradient));
  this.f_color__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_ = null;
  this.f_pattern__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_ = null;
 }
 //Factory method corresponding to constructor 'ChartBackgroundColor(Pattern)'.
 /** @return {!ChartBackgroundColor} */
 static $create__org_pepstock_charba_client_colors_Pattern(/** Pattern */ pattern) {
  ChartBackgroundColor.$clinit();
  let $instance = new ChartBackgroundColor();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor__org_pepstock_charba_client_colors_Pattern(pattern);
  return $instance;
 }
 //Initialization from constructor 'ChartBackgroundColor(Pattern)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor__org_pepstock_charba_client_colors_Pattern(/** Pattern */ pattern) {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPlugin__java_lang_String(ChartBackgroundColor.f_ID__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor);
  this.f_pattern__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_ = /**@type {Pattern}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(pattern, "Pattern argument"), Pattern));
  this.f_color__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_ = null;
  this.f_gradient__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_ = null;
 }
 /** @return {?string} */
 m_getColorAsString__() {
  return this.f_color__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_;
 }
 /** @return {IsColor} */
 m_getColor__() {
  if (!$Equality.$same(this.m_getColorAsString__(), null)) {
   return ColorBuilder.m_parse__java_lang_String(this.m_getColorAsString__());
  }
  return null;
 }
 /** @return {Gradient} */
 m_getGradient__() {
  return this.f_gradient__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_;
 }
 /** @return {Pattern} */
 m_getPattern__() {
  return this.f_pattern__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_;
 }
 /** @override @return {boolean} */
 m_onBeforeDraw__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart)) {
   let bgOptions = this.m_getOptions__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_ChartBackgroundColor(chart);
   let ctx = $Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(chart.m_getCanvas__());
   ctx.save();
   Context2dItem_$Overlay.m_setGlobalCompositeOperation__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation(ctx, bgOptions.m_getGlobalCompositeOperation__());
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(ColorType.f_COLOR__org_pepstock_charba_client_enums_ColorType, bgOptions.m_getColorType__())) {
    Context2dItem_$Overlay.m_setFillColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(ctx, bgOptions.m_getBackgroundColorAsString__());
    this.m_applyBackgroundColorToChartElement__org_pepstock_charba_client_IsChart__java_lang_String_$p_org_pepstock_charba_client_impl_plugins_ChartBackgroundColor(chart, bgOptions.m_getBackgroundColorAsString__());
   } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ColorType.f_PATTERN__org_pepstock_charba_client_enums_ColorType, bgOptions.m_getColorType__())) {
    let canvasPattern = ChartBackgroundGradientFactory.m_get__().m_createPattern__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Pattern(chart, bgOptions.m_getBackgroundColorAsPattern__());
    Context2dItem_$Overlay.m_setFillPattern__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_CanvasPatternItem(ctx, canvasPattern);
    this.m_applyBackgroundToChartElement__org_pepstock_charba_client_IsChart__java_lang_String_$p_org_pepstock_charba_client_impl_plugins_ChartBackgroundColor(chart, Utilities.m_toCSSBackgroundProperty__org_pepstock_charba_client_colors_Pattern(bgOptions.m_getBackgroundColorAsPattern__()));
   } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ColorType.f_GRADIENT__org_pepstock_charba_client_enums_ColorType, bgOptions.m_getColorType__())) {
    let canvasGradient = ChartBackgroundGradientFactory.m_get__().m_createGradient__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient__int__int(chart, bgOptions.m_getBackgroundColorAsGradient__(), Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
    Context2dItem_$Overlay.m_setFillGradient__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_CanvasGradientItem(ctx, canvasGradient);
    this.m_applyBackgroundImageToChartElement__org_pepstock_charba_client_IsChart__java_lang_String_$p_org_pepstock_charba_client_impl_plugins_ChartBackgroundColor(chart, Utilities.m_toCSSBackgroundProperty__org_pepstock_charba_client_colors_Gradient(bgOptions.m_getBackgroundColorAsGradient__()));
   }
   ctx.fillRect(0, 0, chart.m_getCanvas__().offsetWidth, chart.m_getCanvas__().offsetHeight);
   ctx.restore();
  }
  return true;
 }
 /** @override */
 m_onEndDrawing__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   ChartBackgroundColor.f_OPTIONS__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_.remove(chart.m_getId__());
  }
 }
 /** @override */
 m_onResize__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginResizeArgument(/** IsChart */ chart, /** PluginResizeArgument */ argument) {
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart)) {
   let bgOptions = this.m_getOptions__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_ChartBackgroundColor(chart);
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(ColorType.f_GRADIENT__org_pepstock_charba_client_enums_ColorType, bgOptions.m_getColorType__())) {
    ChartBackgroundGradientFactory.m_get__().m_resetGradients__org_pepstock_charba_client_IsChart(chart);
   }
  }
 }
 /** @override */
 m_onDestroy__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   ChartBackgroundColor.f_OPTIONS__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_.remove(chart.m_getId__());
   ChartBackgroundGradientFactory.m_get__().m_clear__org_pepstock_charba_client_IsChart(chart);
  }
 }
 /** @return {ChartBackgroundColorOptions} */
 m_getOptions__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_ChartBackgroundColor(/** IsChart */ chart) {
  if (ChartBackgroundColor.f_OPTIONS__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_.containsKey(chart.m_getId__())) {
   return /**@type {ChartBackgroundColorOptions}*/ ($Casts.$to(ChartBackgroundColor.f_OPTIONS__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_.get(chart.m_getId__()), ChartBackgroundColorOptions));
  }
  let bgOptions = null;
  let options = chart.m_getWholeOptions__();
  if (options.m_getPlugins__().m_hasOptions__java_lang_String(ChartBackgroundColor.f_ID__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor)) {
   bgOptions = /**@type {ChartBackgroundColorOptions}*/ ($Casts.$to(options.m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ChartBackgroundColor.f_ID__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor, ChartBackgroundColor.$static_FACTORY__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor), ChartBackgroundColorOptions));
  } else {
   bgOptions = ChartBackgroundColorOptions.$create__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions(ChartBackgroundColorDefaultOptions.f_INSTANCE__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorDefaultOptions);
   if (!$Equality.$same(this.f_color__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_, null)) {
    bgOptions.m_setBackgroundColor__java_lang_String(this.f_color__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_);
   } else if (!$Equality.$same(this.f_pattern__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_, null)) {
    bgOptions.m_setBackgroundColor__org_pepstock_charba_client_colors_Pattern(this.f_pattern__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_);
   } else if (!$Equality.$same(this.f_gradient__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_, null)) {
    bgOptions.m_setBackgroundColor__org_pepstock_charba_client_colors_Gradient(this.f_gradient__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_);
   }
  }
  ChartBackgroundColor.f_OPTIONS__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_.put(chart.m_getId__(), bgOptions);
  return bgOptions;
 }
 
 m_applyBackgroundToChartElement__org_pepstock_charba_client_IsChart__java_lang_String_$p_org_pepstock_charba_client_impl_plugins_ChartBackgroundColor(/** IsChart */ chart, /** ?string */ value) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart) && !$Equality.$same(value, null)) {
   chart.m_getChartElement__().style.background = value;
  }
 }
 
 m_applyBackgroundColorToChartElement__org_pepstock_charba_client_IsChart__java_lang_String_$p_org_pepstock_charba_client_impl_plugins_ChartBackgroundColor(/** IsChart */ chart, /** ?string */ value) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart) && !$Equality.$same(value, null)) {
   chart.m_getChartElement__().style.backgroundColor = value;
  }
 }
 
 m_applyBackgroundImageToChartElement__org_pepstock_charba_client_IsChart__java_lang_String_$p_org_pepstock_charba_client_impl_plugins_ChartBackgroundColor(/** IsChart */ chart, /** ?string */ value) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart) && !$Equality.$same(value, null)) {
   chart.m_getChartElement__().style.backgroundImage = value;
  }
 }
 /** @return {ChartBackgroundColorOptionsFactory} */
 static get f_FACTORY__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor() {
  return (ChartBackgroundColor.$clinit(), ChartBackgroundColor.$static_FACTORY__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor);
 }
 /** @return {?string} */
 static get f_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor() {
  return (ChartBackgroundColor.$clinit(), ChartBackgroundColor.$static_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor);
 }
 /** @return {ChartBackgroundColorDefaultsOptionsFactory} */
 static get f_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor() {
  return (ChartBackgroundColor.$clinit(), ChartBackgroundColor.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor);
 }
 
 static $clinit() {
  ChartBackgroundColor.$clinit = () =>{};
  ChartBackgroundColor.$loadModules();
  AbstractPlugin.$clinit();
  ChartBackgroundColor.$static_FACTORY__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor = ChartBackgroundColorOptionsFactory.$create__();
  ChartBackgroundColor.$static_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor = HtmlColor.f_WHITE__org_pepstock_charba_client_colors_HtmlColor.m_toRGBA__();
  ChartBackgroundColor.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor = ChartBackgroundColorDefaultsOptionsFactory.$create__();
  ChartBackgroundColor.f_OPTIONS__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_ = /**@type {!HashMap<?string, ChartBackgroundColorOptions>}*/ (HashMap.$create__());
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartBackgroundColor;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  Gradient = goog.module.get('org.pepstock.charba.client.colors.Gradient$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Pattern = goog.module.get('org.pepstock.charba.client.colors.Pattern$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  Context2dItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
  ColorType = goog.module.get('org.pepstock.charba.client.enums.ColorType$impl');
  ChartBackgroundColorDefaultOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorDefaultOptions$impl');
  ChartBackgroundColorOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptions$impl');
  ChartBackgroundColorOptionsFactory = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptionsFactory$impl');
  ChartBackgroundColorDefaultsOptionsFactory = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptionsFactory.ChartBackgroundColorDefaultsOptionsFactory$impl');
  ChartBackgroundGradientFactory = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartBackgroundGradientFactory$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@const {?string}*/
ChartBackgroundColor.f_ID__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor = "charbabackgroundcolor";
/**@private {ChartBackgroundColorOptionsFactory}*/
ChartBackgroundColor.$static_FACTORY__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor;
/**@private {?string}*/
ChartBackgroundColor.$static_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor;
/**@private {ChartBackgroundColorDefaultsOptionsFactory}*/
ChartBackgroundColor.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor;
/**@type {Map<?string, ChartBackgroundColorOptions>}*/
ChartBackgroundColor.f_OPTIONS__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor_;
$Util.$setClassMetadata(ChartBackgroundColor, "org.pepstock.charba.client.impl.plugins.ChartBackgroundColor");

exports = ChartBackgroundColor;

//# sourceMappingURL=ChartBackgroundColor.js.map
