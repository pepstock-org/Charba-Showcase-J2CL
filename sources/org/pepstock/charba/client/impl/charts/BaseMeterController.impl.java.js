goog.module('org.pepstock.charba.client.impl.charts.BaseMeterController$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractController = goog.require('org.pepstock.charba.client.controllers.AbstractController$impl');

let j_l_Math = goog.forwardDeclare('java.lang.Math$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartNode = goog.forwardDeclare('org.pepstock.charba.client.ChartNode$impl');
let Controller = goog.forwardDeclare('org.pepstock.charba.client.Controller$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerContext.$Overlay$impl');
let ControllerProvider = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerProvider$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let Canvas_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let Context2dItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
let TextBaseline = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.TextBaseline$impl');
let Render = goog.forwardDeclare('org.pepstock.charba.client.enums.Render$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');
let BaseMeterControllerProvier = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.BaseMeterController.BaseMeterControllerProvier$impl');
let GaugeChart = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.GaugeChart$impl');
let MeterChart = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.MeterChart$impl');
let MeterContext = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.MeterContext$impl');
let MeterDataset = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.MeterDataset$impl');
let MeterOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.MeterOptions$impl');
let DatasetElement = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetElement$impl');
let FontItem = goog.forwardDeclare('org.pepstock.charba.client.items.FontItem$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class BaseMeterController extends AbstractController {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BaseMeterController} */
 static $create__org_pepstock_charba_client_controllers_ControllerType(/** ControllerType */ type) {
  BaseMeterController.$clinit();
  let $instance = new BaseMeterController();
  $instance.$ctor__org_pepstock_charba_client_impl_charts_BaseMeterController__org_pepstock_charba_client_controllers_ControllerType(type);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_charts_BaseMeterController__org_pepstock_charba_client_controllers_ControllerType(/** ControllerType */ type) {
  this.$ctor__org_pepstock_charba_client_controllers_AbstractController__org_pepstock_charba_client_controllers_ControllerType(type);
 }
 /** @override */
 m_onBeforeInitialize__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ context, /** IsChart */ chart) {
  Checker.m_assertCheck__boolean__java_lang_String(Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this, context, chart), "Initialize method arguments are not consistent");
  let dataset = /**@type {Dataset}*/ ($Casts.$to(chart.m_getData__().m_getDatasets__().getAtIndex($Overlay.m_getIndex__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context)), Dataset));
  Checker.m_assertCheck__boolean__java_lang_String(MeterDataset.$isInstance(dataset), "Dataset at index " + $Overlay.m_getIndex__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context) + " is not a MeterDataset");
  let meterDataset = /**@type {MeterDataset}*/ ($Casts.$to(dataset, MeterDataset));
  if ($Overlay.m_getIndex__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context) > 0) {
   meterDataset.m_hide___$pp_org_pepstock_charba_client_impl_charts();
  }
 }
 /** @override */
 m_onBeforeDraw__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ context, /** IsChart */ chart) {
  Checker.m_assertCheck__boolean__java_lang_String(Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this, context, chart) && $Overlay.m_getIndex__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context) == 0, "Draw method arguments are not consistent");
 }
 /** @override */
 m_onAfterDraw__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ context, /** IsChart */ chart) {
  let node = $Overlay.m_getNode__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context);
  this.m_drawLabels__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_ChartNode_$pp_org_pepstock_charba_client_impl_charts(chart, node);
 }
 
 m_drawLabels__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_ChartNode_$pp_org_pepstock_charba_client_impl_charts(/** IsChart */ chart, /** ChartNode */ node) {
  let datasets = chart.m_getData__().m_getDatasets__();
  if (!datasets.isEmpty()) {
   let dataset = /**@type {MeterDataset}*/ ($Casts.$to(datasets.getAtIndex(0), MeterDataset));
   if (MeterChart.$isInstance(chart)) {
    let meterChart = /**@type {MeterChart}*/ ($Casts.$to(chart, MeterChart));
    let options = meterChart.m_getOptions__();
    this.m_execute__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_ChartNode__org_pepstock_charba_client_impl_charts_MeterDataset__org_pepstock_charba_client_impl_charts_MeterOptions__double_$p_org_pepstock_charba_client_impl_charts_BaseMeterController(chart, node, dataset, options, this.m_calculateEase__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_impl_charts_MeterOptions__org_pepstock_charba_client_impl_charts_MeterDataset_$p_org_pepstock_charba_client_impl_charts_BaseMeterController(meterChart, options, dataset));
   } else if (GaugeChart.$isInstance(chart)) {
    let gaugeChart = /**@type {GaugeChart}*/ ($Casts.$to(chart, GaugeChart));
    let options_1 = gaugeChart.m_getOptions__();
    this.m_execute__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_ChartNode__org_pepstock_charba_client_impl_charts_MeterDataset__org_pepstock_charba_client_impl_charts_MeterOptions__double_$p_org_pepstock_charba_client_impl_charts_BaseMeterController(chart, node, dataset, options_1, this.m_calculateEase__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_impl_charts_MeterOptions__org_pepstock_charba_client_impl_charts_MeterDataset_$p_org_pepstock_charba_client_impl_charts_BaseMeterController(gaugeChart, options_1, dataset));
   }
  }
 }
 /** @return {number} */
 m_calculateEase__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_impl_charts_MeterOptions__org_pepstock_charba_client_impl_charts_MeterDataset_$p_org_pepstock_charba_client_impl_charts_BaseMeterController(/** IsChart */ chart, /** MeterOptions */ options, /** MeterDataset */ dataset) {
  if (options.m_isAnimated__()) {
   let maxCircumference = dataset.m_getValueMaximumRatio___$pp_org_pepstock_charba_client_impl_charts() * 360;
   let item = chart.m_getDatasetItem__int(0);
   let elemCircumference = /**@type {DatasetElement}*/ ($Casts.$to(item.m_getElements__().getAtIndex(0), DatasetElement)).m_getCircumference__() * 180 / j_l_Math.f_PI__java_lang_Math;
   let dividend = Math.min(maxCircumference, elemCircumference);
   let divider = Math.max(maxCircumference, elemCircumference);
   return Math.min(dividend / divider, 1);
  }
  return 1;
 }
 
 m_execute__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_ChartNode__org_pepstock_charba_client_impl_charts_MeterDataset__org_pepstock_charba_client_impl_charts_MeterOptions__double_$p_org_pepstock_charba_client_impl_charts_BaseMeterController(/** IsChart */ chart, /** ChartNode */ item, /** MeterDataset */ dataset, /** MeterOptions */ options, /** number */ ease) {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(Render.f_NONE__org_pepstock_charba_client_enums_Render, options.m_getRender__())) {
   return;
  }
  let datasetMetaItem = chart.m_getDatasetItem__int(0);
  let sideOfSquare = $Primitives.$narrowDoubleToInt(datasetMetaItem.m_getController__().m_getInnerRadius__() * 2 / BaseMeterController.f_SQRT_2__org_pepstock_charba_client_impl_charts_BaseMeterController_);
  let ctx = Canvas_$Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(chart.m_getCanvas__());
  let area = item.m_getChartArea__();
  let centerX = (area.m_getRight__() - area.m_getLeft__()) / 2 + area.m_getLeft__();
  let centerY = (area.m_getBottom__() - area.m_getTop__()) / 2 + area.m_getTop__();
  let x = centerX - sideOfSquare / 2;
  let y = centerY - sideOfSquare / 2;
  let maxValue = $Objects.m_equals__java_lang_Object__java_lang_Object(Render.f_PERCENTAGE__org_pepstock_charba_client_enums_Render, options.m_getRender__()) || $Objects.m_equals__java_lang_Object__java_lang_Object(Render.f_PERCENTAGE_AND_LABEL__org_pepstock_charba_client_enums_Render, options.m_getRender__()) ? BaseMeterController.f_MAX_PERCENTAGE__org_pepstock_charba_client_impl_charts_BaseMeterController_ : dataset.m_getMax__();
  let valueToCalculate = $Objects.m_equals__java_lang_Object__java_lang_Object(Render.f_PERCENTAGE__org_pepstock_charba_client_enums_Render, options.m_getRender__()) || $Objects.m_equals__java_lang_Object__java_lang_Object(Render.f_PERCENTAGE_AND_LABEL__org_pepstock_charba_client_enums_Render, options.m_getRender__()) ? dataset.m_getValue__() / dataset.m_getMax__() : dataset.m_getValue__();
  let value = options.m_isAnimated__() ? valueToCalculate * ease : valueToCalculate;
  let context = options.m_getContext___$pp_org_pepstock_charba_client_impl_charts();
  context.m_setEasing__double_$pp_org_pepstock_charba_client_impl_charts(1);
  context.m_setValue__double_$pp_org_pepstock_charba_client_impl_charts(maxValue);
  let maxValueToShow = this.m_getFormattedValue__org_pepstock_charba_client_impl_charts_MeterOptions__org_pepstock_charba_client_impl_charts_MeterContext_$p_org_pepstock_charba_client_impl_charts_BaseMeterController(options, context);
  context.m_setEasing__double_$pp_org_pepstock_charba_client_impl_charts(ease);
  context.m_setValue__double_$pp_org_pepstock_charba_client_impl_charts(value);
  let valueToShow = this.m_getFormattedValue__org_pepstock_charba_client_impl_charts_MeterOptions__org_pepstock_charba_client_impl_charts_MeterContext_$p_org_pepstock_charba_client_impl_charts_BaseMeterController(options, context);
  let font = options.m_getFontItem___$pp_org_pepstock_charba_client_impl_charts();
  let fontColor = this.m_getFontColor__org_pepstock_charba_client_impl_charts_MeterOptions__org_pepstock_charba_client_impl_charts_MeterContext_$p_org_pepstock_charba_client_impl_charts_BaseMeterController(options, context);
  let label = dataset.m_getLabel__();
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, sideOfSquare, sideOfSquare);
  ctx.clip();
  ctx.clearRect(x, y, sideOfSquare, sideOfSquare);
  if (options.m_isAutoFontSize__()) {
   this.m_calculateFontSize__org_pepstock_charba_client_dom_elements_Context2dItem__int__java_lang_String__org_pepstock_charba_client_items_FontItem_$p_org_pepstock_charba_client_impl_charts_BaseMeterController(ctx, sideOfSquare, maxValueToShow, font);
  }
  Context2dItem_$Overlay.m_setFillColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(ctx, fontColor);
  Context2dItem_$Overlay.m_setTextAlign__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_enums_TextAlign(ctx, TextAlign.f_CENTER__org_pepstock_charba_client_enums_TextAlign);
  if (($Objects.m_equals__java_lang_Object__java_lang_Object(Render.f_VALUE_AND_LABEL__org_pepstock_charba_client_enums_Render, options.m_getRender__()) || $Objects.m_equals__java_lang_Object__java_lang_Object(Render.f_PERCENTAGE_AND_LABEL__org_pepstock_charba_client_enums_Render, options.m_getRender__())) && !$Equality.$same(label, null)) {
   ctx.font = Utilities.m_toCSSFontProperty__org_pepstock_charba_client_defaults_IsDefaultFont(font);
   Context2dItem_$Overlay.m_setTextBaseline__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_enums_TextBaseline(ctx, TextBaseline.f_BOTTOM__org_pepstock_charba_client_dom_enums_TextBaseline);
   ctx.fillText(valueToShow, centerX, centerY - BaseMeterController.f_PADDING__org_pepstock_charba_client_impl_charts_BaseMeterController_);
   if (options.m_isAutoFontSize__()) {
    this.m_calculateFontSize__org_pepstock_charba_client_dom_elements_Context2dItem__int__java_lang_String__org_pepstock_charba_client_items_FontItem_$p_org_pepstock_charba_client_impl_charts_BaseMeterController(ctx, sideOfSquare, label, font);
   }
   ctx.font = Utilities.m_toCSSFontProperty__org_pepstock_charba_client_defaults_IsDefaultFont(font);
   Context2dItem_$Overlay.m_setTextBaseline__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_enums_TextBaseline(ctx, TextBaseline.f_TOP__org_pepstock_charba_client_dom_enums_TextBaseline);
   ctx.fillText(dataset.m_getLabel__(), centerX, centerY + BaseMeterController.f_PADDING__org_pepstock_charba_client_impl_charts_BaseMeterController_);
  } else {
   ctx.font = Utilities.m_toCSSFontProperty__org_pepstock_charba_client_defaults_IsDefaultFont(font);
   Context2dItem_$Overlay.m_setTextBaseline__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_enums_TextBaseline(ctx, TextBaseline.f_MIDDLE__org_pepstock_charba_client_dom_enums_TextBaseline);
   ctx.fillText(valueToShow, centerX, centerY);
  }
  ctx.restore();
 }
 
 m_calculateFontSize__org_pepstock_charba_client_dom_elements_Context2dItem__int__java_lang_String__org_pepstock_charba_client_items_FontItem_$p_org_pepstock_charba_client_impl_charts_BaseMeterController(/** CanvasRenderingContext2D */ ctx, /** number */ sideOfSquare, /** ?string */ value, /** FontItem */ font) {
  let fontSize = $Primitives.$coerceDivision(sideOfSquare / 2);
  let check = true;
  while (check) {
   font.m_setSize__int(fontSize);
   ctx.font = Utilities.m_toCSSFontProperty__org_pepstock_charba_client_defaults_IsDefaultFont(font);
   let metrics = ctx.measureText(value);
   if (metrics.width + BaseMeterController.f_PADDING__org_pepstock_charba_client_impl_charts_BaseMeterController_ * 2 < sideOfSquare || fontSize <= BaseMeterController.f_MINIMUM_FONT_SIZE__org_pepstock_charba_client_impl_charts_BaseMeterController_) {
    check = false;
   } else {
    fontSize = fontSize - BaseMeterController.f_FONT_SIZE_DECREMENT__org_pepstock_charba_client_impl_charts_BaseMeterController_ | 0;
   }
  }
 }
 /** @return {?string} */
 m_getFontColor__org_pepstock_charba_client_impl_charts_MeterOptions__org_pepstock_charba_client_impl_charts_MeterContext_$p_org_pepstock_charba_client_impl_charts_BaseMeterController(/** MeterOptions */ options, /** MeterContext */ context) {
  if (!$Equality.$same(options.m_getFontColorCallback__(), null)) {
   let result = ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String__boolean(context, options.m_getFontColorCallback__(), MeterOptions.f_DEFAULT_FONT_COLOR_AS_STRING__org_pepstock_charba_client_impl_charts_MeterOptions, false);
   if (IsColor.$isInstance(result)) {
    let color = /**@type {IsColor}*/ ($Casts.$to(result, IsColor));
    return color.m_toRGBA__();
   } else if (j_l_String.$isInstance(result)) {
    return /**@type {?string}*/ ($Casts.$to(result, j_l_String));
   }
  } else if (!$Equality.$same(options.m_getFontColor__(), null)) {
   return options.m_getFontColor__().m_toRGBA__();
  }
  return MeterOptions.f_DEFAULT_FONT_COLOR_AS_STRING__org_pepstock_charba_client_impl_charts_MeterOptions;
 }
 /** @return {?string} */
 m_getFormattedValue__org_pepstock_charba_client_impl_charts_MeterOptions__org_pepstock_charba_client_impl_charts_MeterContext_$p_org_pepstock_charba_client_impl_charts_BaseMeterController(/** MeterOptions */ options, /** MeterContext */ context) {
  if (!$Equality.$same(options.m_getFormatCallback__(), null)) {
   let result = /**@type {?string}*/ ($Casts.$to(options.m_getFormatCallback__().m_invoke__org_pepstock_charba_client_callbacks_ChartContext(context), j_l_String));
   if (!$Equality.$same(result, null)) {
    return result;
   }
  }
  return Utilities.m_applyPrecision__double__int(context.m_getValue__(), options.m_getPrecision__());
 }
 /** @return {ControllerProvider} */
 static get f_PROVIDER__org_pepstock_charba_client_impl_charts_BaseMeterController() {
  return (BaseMeterController.$clinit(), BaseMeterController.$static_PROVIDER__org_pepstock_charba_client_impl_charts_BaseMeterController);
 }
 
 static $clinit() {
  BaseMeterController.$clinit = () =>{};
  BaseMeterController.$loadModules();
  AbstractController.$clinit();
  BaseMeterController.$static_PROVIDER__org_pepstock_charba_client_impl_charts_BaseMeterController = BaseMeterControllerProvier.$create__();
  BaseMeterController.f_SQRT_2__org_pepstock_charba_client_impl_charts_BaseMeterController_ = Math.sqrt(2);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseMeterController;
 }
 
 static $loadModules() {
  j_l_Math = goog.module.get('java.lang.Math$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Controller = goog.module.get('org.pepstock.charba.client.Controller$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.controllers.ControllerContext.$Overlay$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  Canvas_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  Context2dItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
  TextBaseline = goog.module.get('org.pepstock.charba.client.dom.enums.TextBaseline$impl');
  Render = goog.module.get('org.pepstock.charba.client.enums.Render$impl');
  TextAlign = goog.module.get('org.pepstock.charba.client.enums.TextAlign$impl');
  BaseMeterControllerProvier = goog.module.get('org.pepstock.charba.client.impl.charts.BaseMeterController.BaseMeterControllerProvier$impl');
  GaugeChart = goog.module.get('org.pepstock.charba.client.impl.charts.GaugeChart$impl');
  MeterChart = goog.module.get('org.pepstock.charba.client.impl.charts.MeterChart$impl');
  MeterDataset = goog.module.get('org.pepstock.charba.client.impl.charts.MeterDataset$impl');
  MeterOptions = goog.module.get('org.pepstock.charba.client.impl.charts.MeterOptions$impl');
  DatasetElement = goog.module.get('org.pepstock.charba.client.items.DatasetElement$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@private {ControllerProvider}*/
BaseMeterController.$static_PROVIDER__org_pepstock_charba_client_impl_charts_BaseMeterController;
/**@const {number}*/
BaseMeterController.f_FONT_SIZE_DECREMENT__org_pepstock_charba_client_impl_charts_BaseMeterController_ = 4;
/**@const {number}*/
BaseMeterController.f_MINIMUM_FONT_SIZE__org_pepstock_charba_client_impl_charts_BaseMeterController_ = 8;
/**@const {number}*/
BaseMeterController.f_PADDING__org_pepstock_charba_client_impl_charts_BaseMeterController_ = 4;
/**@const {number}*/
BaseMeterController.f_MAX_PERCENTAGE__org_pepstock_charba_client_impl_charts_BaseMeterController_ = 100;
/**@type {number}*/
BaseMeterController.f_SQRT_2__org_pepstock_charba_client_impl_charts_BaseMeterController_ = 0;
$Util.$setClassMetadata(BaseMeterController, "org.pepstock.charba.client.impl.charts.BaseMeterController");

exports = BaseMeterController;

//# sourceMappingURL=BaseMeterController.js.map
