goog.module('org.pepstock.charba.client.impl.plugins.ColorSchemes$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPlugin = goog.require('org.pepstock.charba.client.plugins.AbstractPlugin$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Color = goog.forwardDeclare('org.pepstock.charba.client.colors.Color$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let BarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let HasDataPoints = goog.forwardDeclare('org.pepstock.charba.client.data.HasDataPoints$impl');
let HovingDataset = goog.forwardDeclare('org.pepstock.charba.client.data.HovingDataset$impl');
let HovingFlexDataset = goog.forwardDeclare('org.pepstock.charba.client.data.HovingFlexDataset$impl');
let LiningDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LiningDataset$impl');
let DataType = goog.forwardDeclare('org.pepstock.charba.client.enums.DataType$impl');
let GaugeChart = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.GaugeChart$impl');
let MeterChart = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.MeterChart$impl');
let ColorSchemeLegendLabelsCallback = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemeLegendLabelsCallback$impl');
let ColorSchemesDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemesDefaultOptions$impl');
let ColorSchemesOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions$impl');
let ColorSchemesOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemesOptionsFactory$impl');
let ColorSchemesDefaultsOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemesOptionsFactory.ColorSchemesDefaultsOptionsFactory$impl');
let ColorSchemesUtil = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemesUtil$impl');
let SchemeScope = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.SchemeScope$impl');
let PluginUpdateArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginUpdateArgument$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class ColorSchemes extends AbstractPlugin {
 /** @protected */
 constructor() {
  super();
  /**@type {ColorSchemeLegendLabelsCallback}*/
  this.f_pluginLegendLabelsCallback__org_pepstock_charba_client_impl_plugins_ColorSchemes_;
 }
 /** @return {!ColorSchemes} */
 static $create__() {
  let $instance = new ColorSchemes();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ColorSchemes__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_ColorSchemes__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPlugin__java_lang_String(ColorSchemes.f_ID__org_pepstock_charba_client_impl_plugins_ColorSchemes);
  this.$init___$p_org_pepstock_charba_client_impl_plugins_ColorSchemes();
 }
 /** @return {ColorSchemes} */
 static m_get__() {
  ColorSchemes.$clinit();
  return ColorSchemes.f_INSTANCE__org_pepstock_charba_client_impl_plugins_ColorSchemes_;
 }
 /** @override */
 m_onConfigure__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) && this.m_mustBeActivated__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(chart)) {
   chart.m_getData__().m_setCanvasObjectHandling__boolean(false);
   let legendLabelsCallback = chart.m_getOptions__().m_getLegend__().m_getLabels__().m_getLabelsCallback__();
   if (!ColorSchemeLegendLabelsCallback.$isInstance(legendLabelsCallback) && !$Equality.$same(legendLabelsCallback, null)) {
    this.f_pluginLegendLabelsCallback__org_pepstock_charba_client_impl_plugins_ColorSchemes_.m_setDelegatedCallback__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_callbacks_LegendLabelsCallback_$pp_org_pepstock_charba_client_impl_plugins(chart, legendLabelsCallback);
   }
   chart.m_getOptions__().m_getLegend__().m_getLabels__().m_setLabelsCallback__org_pepstock_charba_client_callbacks_LegendLabelsCallback(this.f_pluginLegendLabelsCallback__org_pepstock_charba_client_impl_plugins_ColorSchemes_);
  }
 }
 /** @override @return {boolean} */
 m_onBeforeUpdate__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginUpdateArgument(/** IsChart */ chart, /** PluginUpdateArgument */ argument) {
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) && this.m_mustBeActivated__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(chart)) {
   let options = this.m_getOptions__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(chart);
   let scheme = options.m_getScheme__();
   if (!$Equality.$same(scheme, null)) {
    let colors = scheme.m_getColors__();
    if (!$Equality.$same(colors, null) && !colors.isEmpty()) {
     this.m_scanDatasets__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions__java_util_List_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(chart, options, colors);
    }
   }
  }
  return true;
 }
 /** @override */
 m_onDestroy__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart) && this.m_mustBeActivated__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(chart)) {
   this.f_pluginLegendLabelsCallback__org_pepstock_charba_client_impl_plugins_ColorSchemes_.m_removeDelegatedCallback__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_impl_plugins(chart);
  }
 }
 /** @return {boolean} */
 m_mustBeActivated__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(/** IsChart */ chart) {
  let type = chart.m_getType__();
  if (ControllerType.$isInstance(type) && !$Equality.$same(type.m_value__(), null)) {
   let controllerType = /**@type {ControllerType}*/ ($Casts.$to(type, ControllerType));
   return !j_l_String.m_equals__java_lang_String__java_lang_Object(controllerType.m_value__(), GaugeChart.f_TYPE__org_pepstock_charba_client_impl_charts_GaugeChart) && !j_l_String.m_equals__java_lang_String__java_lang_Object(controllerType.m_value__(), MeterChart.f_TYPE__org_pepstock_charba_client_impl_charts_MeterChart);
  }
  return true;
 }
 
 m_scanDatasets__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions__java_util_List_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(/** IsChart */ chart, /** ColorSchemesOptions */ options, /** List<IsColor> */ colors) {
  let amountOfColors = colors.size();
  let datasets = chart.m_getData__().m_getDatasets__();
  if (!datasets.isEmpty()) {
   let datasetIndex = 0;
   for (let $iterator = datasets.m_iterator__(); $iterator.m_hasNext__(); ) {
    let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
    {
     let colorIndex = $Primitives.$coerceDivision(datasetIndex % amountOfColors);
     let color = /**@type {IsColor}*/ ($Casts.$to(colors.getAtIndex(options.m_isReverse__() ? amountOfColors - colorIndex - 1 | 0 : colorIndex), IsColor));
     if (HovingDataset.$isInstance(dataset)) {
      let hovingDataset = /**@type {HovingDataset}*/ ($Casts.$to(dataset, HovingDataset));
      this.m_manageHovingDataset__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions__org_pepstock_charba_client_data_HovingDataset__org_pepstock_charba_client_colors_IsColor__java_util_List_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(chart, options, hovingDataset, color, colors);
     } else if (HovingFlexDataset.$isInstance(dataset)) {
      let hovingDataset_1 = /**@type {HovingFlexDataset}*/ ($Casts.$to(dataset, HovingFlexDataset));
      this.m_manageHovingFlexDataset__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions__org_pepstock_charba_client_data_HovingFlexDataset__org_pepstock_charba_client_colors_IsColor__java_util_List_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(options, hovingDataset_1, color, colors);
     } else if (LiningDataset.$isInstance(dataset)) {
      let liningDataset = /**@type {LiningDataset}*/ ($Casts.$to(dataset, LiningDataset));
      this.m_manageLiningDataset__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions__org_pepstock_charba_client_data_LiningDataset__org_pepstock_charba_client_colors_IsColor_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(options, liningDataset, color);
     }
     datasetIndex = datasetIndex + 1 | 0;
    }
   }
  }
 }
 
 m_manageHovingDataset__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions__org_pepstock_charba_client_data_HovingDataset__org_pepstock_charba_client_colors_IsColor__java_util_List_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(/** IsChart */ chart, /** ColorSchemesOptions */ options, /** HovingDataset */ hovingDataset, /** IsColor */ color, /** List<IsColor> */ colors) {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ChartType.f_BUBBLE__org_pepstock_charba_client_ChartType, chart.m_getBaseType__()) && $Objects.m_equals__java_lang_Object__java_lang_Object(SchemeScope.f_DATASET__org_pepstock_charba_client_impl_plugins_enums_SchemeScope, options.m_getSchemeScope__())) {
   hovingDataset.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(this.m_getColorsFromData__org_pepstock_charba_client_data_Dataset__java_util_List__boolean__double_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(hovingDataset, /**@type {List<IsColor>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<IsColor>}*/ ($Arrays.$init([color], IsColor)))), options.m_isReverse__(), options.m_getBackgroundColorAlpha__()));
   if (!hovingDataset.m_getBorderWidth__().isEmpty()) {
    hovingDataset.m_setBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(this.m_getColorsFromData__org_pepstock_charba_client_data_Dataset__java_util_List__boolean__double_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(hovingDataset, /**@type {List<IsColor>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<IsColor>}*/ ($Arrays.$init([color], IsColor)))), options.m_isReverse__(), Color.f_DEFAULT_ALPHA__org_pepstock_charba_client_colors_Color));
   }
   if (!hovingDataset.m_getBorderWidth__().isEmpty()) {
    hovingDataset.m_setBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(this.m_getColorsFromData__org_pepstock_charba_client_data_Dataset__java_util_List__boolean__double_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(hovingDataset, /**@type {List<IsColor>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<IsColor>}*/ ($Arrays.$init([color], IsColor)))), options.m_isReverse__(), Color.f_DEFAULT_ALPHA__org_pepstock_charba_client_colors_Color));
   }
  } else {
   hovingDataset.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(this.m_getColorsFromData__org_pepstock_charba_client_data_Dataset__java_util_List__boolean__double_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(hovingDataset, colors, options.m_isReverse__(), options.m_getBackgroundColorAlpha__()));
   if (!hovingDataset.m_getBorderWidth__().isEmpty()) {
    hovingDataset.m_setBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(this.m_getColorsFromData__org_pepstock_charba_client_data_Dataset__java_util_List__boolean__double_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(hovingDataset, colors, options.m_isReverse__(), Color.f_DEFAULT_ALPHA__org_pepstock_charba_client_colors_Color));
   }
  }
 }
 
 m_manageHovingFlexDataset__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions__org_pepstock_charba_client_data_HovingFlexDataset__org_pepstock_charba_client_colors_IsColor__java_util_List_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(/** ColorSchemesOptions */ options, /** HovingFlexDataset */ hovingDataset, /** IsColor */ color, /** List<IsColor> */ colors) {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(SchemeScope.f_DATA__org_pepstock_charba_client_impl_plugins_enums_SchemeScope, options.m_getSchemeScope__())) {
   hovingDataset.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(this.m_getColorsFromData__org_pepstock_charba_client_data_Dataset__java_util_List__boolean__double_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(hovingDataset, colors, options.m_isReverse__(), options.m_getBackgroundColorAlpha__()));
   if (ColorSchemesUtil.m_get__().m_getMaxBorderWidth__org_pepstock_charba_client_data_HovingFlexDataset_$pp_org_pepstock_charba_client_impl_plugins(hovingDataset) > 0) {
    hovingDataset.m_setBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(this.m_getColorsFromData__org_pepstock_charba_client_data_Dataset__java_util_List__boolean__double_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(hovingDataset, colors, options.m_isReverse__(), Color.f_DEFAULT_ALPHA__org_pepstock_charba_client_colors_Color));
   }
  } else {
   let colorsList = /**@type {List<IsColor>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<IsColor>}*/ ($Arrays.$init([color.m_alpha__double(options.m_getBackgroundColorAlpha__())], IsColor))));
   hovingDataset.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(this.m_getColorsFromData__org_pepstock_charba_client_data_Dataset__java_util_List__boolean__double_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(hovingDataset, colorsList, options.m_isReverse__(), options.m_getBackgroundColorAlpha__()));
   if (ColorSchemesUtil.m_get__().m_getMaxBorderWidth__org_pepstock_charba_client_data_HovingFlexDataset_$pp_org_pepstock_charba_client_impl_plugins(hovingDataset) > 0) {
    hovingDataset.m_setBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(this.m_getColorsFromData__org_pepstock_charba_client_data_Dataset__java_util_List__boolean__double_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(hovingDataset, colorsList, options.m_isReverse__(), Color.f_DEFAULT_ALPHA__org_pepstock_charba_client_colors_Color));
   }
  }
 }
 
 m_manageLiningDataset__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions__org_pepstock_charba_client_data_LiningDataset__org_pepstock_charba_client_colors_IsColor_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(/** ColorSchemesOptions */ options, /** LiningDataset */ liningDataset, /** IsColor */ color) {
  let backgroundColor = color.m_alpha__double(options.m_getBackgroundColorAlpha__());
  liningDataset.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(color);
  liningDataset.m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(backgroundColor);
  liningDataset.m_setPointHoverBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([color], IsColor)));
  liningDataset.m_setPointHoverBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([backgroundColor], IsColor)));
 }
 /** @return {Array<IsColor>} */
 m_getColorsFromData__org_pepstock_charba_client_data_Dataset__java_util_List__boolean__double_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(/** Dataset */ dataset, /** List<IsColor> */ colors, /** boolean */ isReverse, /** number */ alpha) {
  let amountOfColors = colors.size();
  let amountOfData = 0;
  let type = dataset.m_getDataType__();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_NUMBERS__org_pepstock_charba_client_enums_DataType, type)) {
   amountOfData = dataset.m_getData__().size();
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_POINTS__org_pepstock_charba_client_enums_DataType, type) && HasDataPoints.$isInstance(dataset)) {
   let dataPointsDataset = /**@type {HasDataPoints}*/ ($Casts.$to(dataset, HasDataPoints));
   amountOfData = dataPointsDataset.m_getDataPoints__().size();
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_ARRAYS__org_pepstock_charba_client_enums_DataType, type) && BarDataset.$isInstance(dataset)) {
   let barDataset = /**@type {BarDataset}*/ ($Casts.$to(dataset, BarDataset));
   amountOfData = barDataset.m_getFloatingData__().size();
  }
  let colorsToSet = /**@type {!Array<IsColor>}*/ ($Arrays.$create([amountOfData], IsColor));
  for (let dataIndex = 0; dataIndex < amountOfData; dataIndex = dataIndex + 1 | 0) {
   let dataColorIndex = $Primitives.$coerceDivision(dataIndex % amountOfColors);
   $Arrays.$set(colorsToSet, dataIndex, /**@type {IsColor}*/ ($Casts.$to(colors.getAtIndex(isReverse ? amountOfColors - dataColorIndex - 1 | 0 : dataColorIndex), IsColor)).m_alpha__double(alpha));
  }
  return colorsToSet;
 }
 /** @return {ColorSchemesOptions} */
 m_getOptions__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_ColorSchemes(/** IsChart */ chart) {
  let pOptions = null;
  let options = chart.m_getWholeOptions__();
  if (options.m_getPlugins__().m_hasOptions__java_lang_String(ColorSchemes.f_ID__org_pepstock_charba_client_impl_plugins_ColorSchemes)) {
   pOptions = /**@type {ColorSchemesOptions}*/ ($Casts.$to(options.m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ColorSchemes.f_ID__org_pepstock_charba_client_impl_plugins_ColorSchemes, ColorSchemes.$static_FACTORY__org_pepstock_charba_client_impl_plugins_ColorSchemes), ColorSchemesOptions));
  } else {
   pOptions = ColorSchemesOptions.$create__org_pepstock_charba_client_impl_plugins_IsColorSchemesDefaultOptions(ColorSchemesDefaultOptions.f_INSTANCE__org_pepstock_charba_client_impl_plugins_ColorSchemesDefaultOptions);
  }
  return pOptions;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_impl_plugins_ColorSchemes() {
  this.f_pluginLegendLabelsCallback__org_pepstock_charba_client_impl_plugins_ColorSchemes_ = ColorSchemeLegendLabelsCallback.$create__();
 }
 /** @return {ColorSchemesOptionsFactory} */
 static get f_FACTORY__org_pepstock_charba_client_impl_plugins_ColorSchemes() {
  return (ColorSchemes.$clinit(), ColorSchemes.$static_FACTORY__org_pepstock_charba_client_impl_plugins_ColorSchemes);
 }
 /** @return {ColorSchemesDefaultsOptionsFactory} */
 static get f_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_ColorSchemes() {
  return (ColorSchemes.$clinit(), ColorSchemes.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_ColorSchemes);
 }
 
 static $clinit() {
  ColorSchemes.$clinit = () =>{};
  ColorSchemes.$loadModules();
  AbstractPlugin.$clinit();
  ColorSchemes.$static_FACTORY__org_pepstock_charba_client_impl_plugins_ColorSchemes = ColorSchemesOptionsFactory.$create__();
  ColorSchemes.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_ColorSchemes = ColorSchemesDefaultsOptionsFactory.$create__();
  ColorSchemes.f_INSTANCE__org_pepstock_charba_client_impl_plugins_ColorSchemes_ = ColorSchemes.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ColorSchemes;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  Color = goog.module.get('org.pepstock.charba.client.colors.Color$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  ControllerType = goog.module.get('org.pepstock.charba.client.controllers.ControllerType$impl');
  BarDataset = goog.module.get('org.pepstock.charba.client.data.BarDataset$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  HasDataPoints = goog.module.get('org.pepstock.charba.client.data.HasDataPoints$impl');
  HovingDataset = goog.module.get('org.pepstock.charba.client.data.HovingDataset$impl');
  HovingFlexDataset = goog.module.get('org.pepstock.charba.client.data.HovingFlexDataset$impl');
  LiningDataset = goog.module.get('org.pepstock.charba.client.data.LiningDataset$impl');
  DataType = goog.module.get('org.pepstock.charba.client.enums.DataType$impl');
  GaugeChart = goog.module.get('org.pepstock.charba.client.impl.charts.GaugeChart$impl');
  MeterChart = goog.module.get('org.pepstock.charba.client.impl.charts.MeterChart$impl');
  ColorSchemeLegendLabelsCallback = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemeLegendLabelsCallback$impl');
  ColorSchemesDefaultOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemesDefaultOptions$impl');
  ColorSchemesOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions$impl');
  ColorSchemesOptionsFactory = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemesOptionsFactory$impl');
  ColorSchemesDefaultsOptionsFactory = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemesOptionsFactory.ColorSchemesDefaultsOptionsFactory$impl');
  ColorSchemesUtil = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemesUtil$impl');
  SchemeScope = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.SchemeScope$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {?string}*/
ColorSchemes.f_ID__org_pepstock_charba_client_impl_plugins_ColorSchemes = "charbacolorschemes";
/**@private {ColorSchemesOptionsFactory}*/
ColorSchemes.$static_FACTORY__org_pepstock_charba_client_impl_plugins_ColorSchemes;
/**@private {ColorSchemesDefaultsOptionsFactory}*/
ColorSchemes.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_ColorSchemes;
/**@type {ColorSchemes}*/
ColorSchemes.f_INSTANCE__org_pepstock_charba_client_impl_plugins_ColorSchemes_;
$Util.$setClassMetadata(ColorSchemes, "org.pepstock.charba.client.impl.plugins.ColorSchemes");

exports = ColorSchemes;

//# sourceMappingURL=ColorSchemes.js.map
