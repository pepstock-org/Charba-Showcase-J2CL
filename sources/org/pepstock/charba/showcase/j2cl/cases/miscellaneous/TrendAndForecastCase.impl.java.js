goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.TrendAndForecastCase$impl');

const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

let MarginRightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let LineChart = goog.forwardDeclare('org.pepstock.charba.client.LineChart$impl');
let DateAdapter = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapter$impl');
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
let AnnotationOptions = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
let AnnotationPlugin = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
let LineAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.LineAnnotation$impl');
let DrawTime = goog.forwardDeclare('org.pepstock.charba.client.annotation.enums.DrawTime$impl');
let LabelPosition = goog.forwardDeclare('org.pepstock.charba.client.annotation.enums.LabelPosition$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let CartesianTimeAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianTimeAxis$impl');
let CartesianTimeSeriesAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');
let TickSource = goog.forwardDeclare('org.pepstock.charba.client.enums.TickSource$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');
let LegendClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendClickEvent$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.TrendAndForecastCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.TrendAndForecastCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.TrendAndForecastCase.$3$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class TrendAndForecastCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_;
  /**@type {Date}*/
  this.f_nowDate__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_;
  /**@type {LineDataset}*/
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_;
  /**@type {LineDataset}*/
  this.f_trend__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_;
  /**@type {LineDataset}*/
  this.f_forecast__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_;
  /**@type {CartesianTimeAxis}*/
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_;
 }
 /** @return {!TrendAndForecastCase} */
 static $create__() {
  TrendAndForecastCase.$clinit();
  let $instance = new TrendAndForecastCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  let adapter = DateAdapter.$create__();
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType($1.$create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase(this), LegendClickEvent.f_TYPE__org_pepstock_charba_client_events_LegendClickEvent);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Trend and forecast on timeseries chart"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getOptions__().m_getTooltips__().m_setTitleMarginBottom__int(10);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getOptions__().m_getTooltips__().m_setMode__org_pepstock_charba_client_enums_InteractionMode(InteractionMode.f_INDEX__org_pepstock_charba_client_enums_InteractionMode);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getOptions__().m_getTooltips__().m_getCallbacks__().m_setTitleCallback__org_pepstock_charba_client_callbacks_TooltipTitleCallback($2.$create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase__org_pepstock_charba_client_adapters_DateAdapter(this, adapter));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_ = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_newDataset__(), LineDataset));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setLabel__java_lang_String("Data");
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  let color1 = GoogleChartColor.m_values__()[0];
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setBorderColor__java_lang_String(color1.m_toHex__());
  this.f_trend__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_ = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_newDataset__(), LineDataset));
  this.f_trend__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setLabel__java_lang_String("Trend");
  this.f_trend__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  let color2 = GoogleChartColor.m_values__()[1];
  this.f_trend__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setBackgroundColor__java_lang_String(color2.m_toHex__());
  this.f_trend__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setBorderColor__java_lang_String(color2.m_toHex__());
  this.f_trend__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setBorderDash__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([4, 4], $int)));
  this.f_trend__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setPointRadius__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([$Primitives.$coerceDivision(this.f_trend__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getBorderWidth__() / 2)], $double)));
  this.f_forecast__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_ = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_newDataset__(), LineDataset));
  this.f_forecast__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setLabel__java_lang_String("Forecast");
  this.f_forecast__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  let color3 = GoogleChartColor.m_values__()[2];
  this.f_forecast__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setBackgroundColor__java_lang_String(color3.m_toHex__());
  this.f_forecast__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setBorderColor__java_lang_String(color3.m_toHex__());
  this.f_forecast__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setBorderDash__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([4, 4], $int)));
  this.f_forecast__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setPointRadius__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([$Primitives.$coerceDivision(this.f_forecast__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getBorderWidth__() / 2)], $double)));
  let time = $Primitives.$widenLongToDouble($LongUtils.$minus(this.f_nowDate__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getTime__(), $LongUtils.$times($Primitives.$widenIntToLong(TrendAndForecastCase.f_PREVIOUS_PERIOD__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_), TrendAndForecastCase.f_DAY__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_)));
  let xs1 = this.m_getRandomDigits__int__boolean(TrendAndForecastCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_, false);
  let dataDp = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([TrendAndForecastCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_], DataPoint));
  let trendDp = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([TrendAndForecastCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_], DataPoint));
  let forecastDp = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([TrendAndForecastCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_], DataPoint));
  for (let i = 0; i < TrendAndForecastCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_; i = i + 1 | 0) {
   $Arrays.$set(dataDp, i, DataPoint.$create__());
   $Arrays.$set(trendDp, i, DataPoint.$create__());
   $Arrays.$set(forecastDp, i, DataPoint.$create__());
   let newDate = Date.$create__long($Primitives.$narrowDoubleToLong(time));
   if (time < $Primitives.$widenLongToDouble(this.f_nowDate__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getTime__())) {
    dataDp[i].m_setY__double(xs1[i]);
    trendDp[i].m_setY__double(xs1[i] * 0.8);
    forecastDp[i].m_setY__double(Double.f_NaN__java_lang_Double);
   } else if (time == $Primitives.$widenLongToDouble(this.f_nowDate__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getTime__())) {
    dataDp[i].m_setY__double(xs1[i]);
    trendDp[i].m_setY__double(xs1[i]);
    forecastDp[i].m_setY__double(xs1[i]);
   } else {
    dataDp[i].m_setY__double(Double.f_NaN__java_lang_Double);
    trendDp[i].m_setY__double(Double.f_NaN__java_lang_Double);
    forecastDp[i].m_setY__double(xs1[i]);
   }
   dataDp[i].m_setX__java_util_Date(newDate);
   trendDp[i].m_setX__java_util_Date(newDate);
   forecastDp[i].m_setX__java_util_Date(newDate);
   time = time + $Primitives.$widenLongToDouble(TrendAndForecastCase.f_DAY__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_);
  }
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(dataDp);
  this.f_trend__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(trendDp);
  this.f_forecast__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(forecastDp);
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_ = CartesianTimeSeriesAxis.$create__org_pepstock_charba_client_IsChart__java_lang_String__org_pepstock_charba_client_enums_AxisKind(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_, TrendAndForecastCase.f_MY_SCALE_ID__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_, AxisKind.f_X__org_pepstock_charba_client_enums_AxisKind);
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getTicks__().m_setSource__org_pepstock_charba_client_enums_TickSource(TickSource.f_DATA__org_pepstock_charba_client_enums_TickSource);
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getTime__().m_setUnit__org_pepstock_charba_client_enums_TimeUnit(TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit);
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_);
  axis2.m_setDisplay__boolean(true);
  axis2.m_setBeginAtZero__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([this.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_, axis2], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_, this.f_trend__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_, this.f_forecast__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_], Dataset)));
  let options = AnnotationOptions.$create__();
  let line = LineAnnotation.$create__();
  line.m_setDisplay__org_pepstock_charba_client_callbacks_DisplayCallback($3.$create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase(this));
  line.m_setDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime(DrawTime.f_AFTER_DRAW__org_pepstock_charba_client_annotation_enums_DrawTime);
  line.m_setScaleID__java_lang_String(TrendAndForecastCase.f_MY_SCALE_ID__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_);
  line.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_DARK_GRAY__org_pepstock_charba_client_colors_HtmlColor);
  line.m_setBorderWidth__int(2);
  line.m_setValue__java_util_Date(Date.$create__long(this.f_nowDate__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getTime__()));
  line.m_getLabel__().m_setDisplay__boolean(true);
  line.m_getLabel__().m_setContent__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Now"], j_l_String)));
  line.m_getLabel__().m_setPosition__org_pepstock_charba_client_annotation_enums_LabelPosition(LabelPosition.f_START__org_pepstock_charba_client_annotation_enums_LabelPosition);
  options.m_setAnnotations__arrayOf_org_pepstock_charba_client_annotation_AbstractAnnotation(/**@type {!Array<AbstractAnnotation>}*/ ($Arrays.$init([line], AbstractAnnotation)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, options);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.appendChild(actionsRow);
  let actionsCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  actionsCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  actionsCol.style.textAlign = "center";
  actionsCol.vAlign = "middle";
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String(actionsCol, "colspan", "2");
  actionsRow.appendChild(actionsCol);
  let randomize = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  randomize.onclick = (/** Event */ p0) =>{
   this.m_handleRandomize__();
   return null;
  };
  randomize.className = "gwt-Button";
  randomize.textContent = "Randomize data";
  randomize.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(randomize);
  let github = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  github.onclick = (/** Event */ p0_1) =>{
   goog.global.window.open(this.m_getUrl__(), "_blank", "");
   return null;
  };
  github.className = "gwt-Button";
  let img = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), HTMLImageElement_$Overlay));
  img.src = "images/GitHub-Mark-32px.png";
  github.appendChild(img);
  actionsCol.appendChild(github);
 }
 /** @override @return {HTMLElement} */
 m_getElement__() {
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_;
 }
 
 m_handleRandomize__() {
  let time = $Primitives.$widenLongToDouble($LongUtils.$minus(this.f_nowDate__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getTime__(), $LongUtils.$times($Primitives.$widenIntToLong(TrendAndForecastCase.f_PREVIOUS_PERIOD__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_), TrendAndForecastCase.f_DAY__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_)));
  let xs1 = this.m_getRandomDigits__int__boolean(TrendAndForecastCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_, false);
  let dataDp = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([TrendAndForecastCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_], DataPoint));
  let trendDp = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([TrendAndForecastCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_], DataPoint));
  let forecastDp = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([TrendAndForecastCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_], DataPoint));
  for (let i = 0; i < TrendAndForecastCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_; i = i + 1 | 0) {
   $Arrays.$set(dataDp, i, DataPoint.$create__());
   $Arrays.$set(trendDp, i, DataPoint.$create__());
   $Arrays.$set(forecastDp, i, DataPoint.$create__());
   let newDate = Date.$create__long($Primitives.$narrowDoubleToLong(time));
   if (time < $Primitives.$widenLongToDouble(this.f_nowDate__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getTime__())) {
    dataDp[i].m_setY__double(xs1[i]);
    trendDp[i].m_setY__double(xs1[i] * 0.8);
    forecastDp[i].m_setY__double(Double.f_NaN__java_lang_Double);
   } else if (time == $Primitives.$widenLongToDouble(this.f_nowDate__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getTime__())) {
    dataDp[i].m_setY__double(xs1[i]);
    trendDp[i].m_setY__double(xs1[i]);
    forecastDp[i].m_setY__double(xs1[i]);
   } else {
    dataDp[i].m_setY__double(Double.f_NaN__java_lang_Double);
    trendDp[i].m_setY__double(Double.f_NaN__java_lang_Double);
    forecastDp[i].m_setY__double(xs1[i]);
   }
   dataDp[i].m_setX__java_util_Date(newDate);
   trendDp[i].m_setX__java_util_Date(newDate);
   forecastDp[i].m_setX__java_util_Date(newDate);
   time = time + $Primitives.$widenLongToDouble(TrendAndForecastCase.f_DAY__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_);
  }
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(dataDp);
  this.f_trend__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(trendDp);
  this.f_forecast__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(forecastDp);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_ = LineChart.$create__();
  this.f_nowDate__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_ = Date.$create__();
 }
 
 static $clinit() {
  TrendAndForecastCase.$clinit = () =>{};
  TrendAndForecastCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TrendAndForecastCase;
 }
 
 static $loadModules() {
  MarginRightUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Date = goog.module.get('java.util.Date$impl');
  LineChart = goog.module.get('org.pepstock.charba.client.LineChart$impl');
  DateAdapter = goog.module.get('org.pepstock.charba.client.adapters.DateAdapter$impl');
  AbstractAnnotation = goog.module.get('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
  AnnotationOptions = goog.module.get('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
  AnnotationPlugin = goog.module.get('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
  LineAnnotation = goog.module.get('org.pepstock.charba.client.annotation.LineAnnotation$impl');
  DrawTime = goog.module.get('org.pepstock.charba.client.annotation.enums.DrawTime$impl');
  LabelPosition = goog.module.get('org.pepstock.charba.client.annotation.enums.LabelPosition$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  CartesianTimeSeriesAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  InteractionMode = goog.module.get('org.pepstock.charba.client.enums.InteractionMode$impl');
  TickSource = goog.module.get('org.pepstock.charba.client.enums.TickSource$impl');
  TimeUnit = goog.module.get('org.pepstock.charba.client.enums.TimeUnit$impl');
  LegendClickEvent = goog.module.get('org.pepstock.charba.client.events.LegendClickEvent$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.TrendAndForecastCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.TrendAndForecastCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.TrendAndForecastCase.$3$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $double = goog.module.get('vmbootstrap.primitives.$double$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@const {!$Long}*/
TrendAndForecastCase.f_DAY__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_ = $Long.fromInt(86400000);
/**@const {number}*/
TrendAndForecastCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_ = 60;
/**@const {number}*/
TrendAndForecastCase.f_PREVIOUS_PERIOD__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_ = 30;
/**@const {?string}*/
TrendAndForecastCase.f_MY_SCALE_ID__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_ = "my";
$Util.$setClassMetadata(TrendAndForecastCase, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.TrendAndForecastCase");

exports = TrendAndForecastCase;

//# sourceMappingURL=TrendAndForecastCase.js.map
