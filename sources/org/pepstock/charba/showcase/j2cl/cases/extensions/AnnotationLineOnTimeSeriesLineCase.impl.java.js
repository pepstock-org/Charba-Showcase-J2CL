goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLineOnTimeSeriesLineCase$impl');

const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

let MarginRightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let System = goog.forwardDeclare('java.lang.System$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let TimeSeriesLineChart = goog.forwardDeclare('org.pepstock.charba.client.TimeSeriesLineChart$impl');
let DateAdapter = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapter$impl');
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let AnnotationOptions = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
let AnnotationPlugin = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
let LineAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.LineAnnotation$impl');
let ValueCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.ValueCallback$impl');
let DrawTime = goog.forwardDeclare('org.pepstock.charba.client.annotation.enums.DrawTime$impl');
let LabelPosition = goog.forwardDeclare('org.pepstock.charba.client.annotation.enums.LabelPosition$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let TimeSeriesItem = goog.forwardDeclare('org.pepstock.charba.client.data.TimeSeriesItem$impl');
let TimeSeriesLineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.TimeSeriesLineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let TickSource = goog.forwardDeclare('org.pepstock.charba.client.enums.TickSource$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLineOnTimeSeriesLineCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLineOnTimeSeriesLineCase.$2$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class AnnotationLineOnTimeSeriesLineCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_;
  /**@type {TimeSeriesLineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_;
  /**@type {LineAnnotation}*/
  this.f_line1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_;
  /**@type {TimeSeriesLineDataset}*/
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_;
  /**@type {TimeSeriesLineDataset}*/
  this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_;
  /**@type {!$Long}*/
  this.f_startingPoint__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_ = $Long.fromInt(0);
 }
 /** @return {!AnnotationLineOnTimeSeriesLineCase} */
 static $create__() {
  AnnotationLineOnTimeSeriesLineCase.$clinit();
  let $instance = new AnnotationLineOnTimeSeriesLineCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  let adapter = DateAdapter.$create__();
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Line annotation on timeseries line chart"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_getOptions__().m_getTooltips__().m_setTitleMarginBottom__int(10);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_getOptions__().m_getTooltips__().m_getCallbacks__().m_setTitleCallback__org_pepstock_charba_client_callbacks_TooltipTitleCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase__org_pepstock_charba_client_adapters_DateAdapter(this, adapter));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_ = /**@type {TimeSeriesLineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_newDataset__(), TimeSeriesLineDataset));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_setLabel__java_lang_String("dataset 1");
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  let color1 = GoogleChartColor.m_values__()[0];
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_setBorderColor__java_lang_String(color1.m_toHex__());
  this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_ = /**@type {TimeSeriesLineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_newDataset__(), TimeSeriesLineDataset));
  this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_setLabel__java_lang_String("dataset 2");
  this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  let color2 = GoogleChartColor.m_values__()[1];
  this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_setBackgroundColor__java_lang_String(color2.m_toHex__());
  this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_setBorderColor__java_lang_String(color2.m_toHex__());
  let gap = $Primitives.$coerceDivision(AnnotationLineOnTimeSeriesLineCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_ / 2);
  let xs1 = this.m_getRandomDigits__int__boolean(AnnotationLineOnTimeSeriesLineCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_, false);
  let xs2 = this.m_getRandomDigits__int__boolean(AnnotationLineOnTimeSeriesLineCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_, false);
  let data = /**@type {!LinkedList<TimeSeriesItem>}*/ (LinkedList.$create__());
  let data1 = /**@type {!LinkedList<TimeSeriesItem>}*/ (LinkedList.$create__());
  for (let i = AnnotationLineOnTimeSeriesLineCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_ - 1 | 0; i >= 0; i = i - 1 | 0) {
   data.add(TimeSeriesItem.$create__java_util_Date__double(adapter.m_add__long__long__org_pepstock_charba_client_enums_TimeUnit(this.f_startingPoint__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_, $Primitives.$widenIntToLong(i - gap | 0), TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit), xs1[i]));
   data1.add(TimeSeriesItem.$create__java_util_Date__double(adapter.m_add__long__long__org_pepstock_charba_client_enums_TimeUnit(this.f_startingPoint__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_, $Primitives.$widenIntToLong(i - gap | 0), TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit), xs2[i]));
  }
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_setTimeSeriesData__java_util_List(data);
  this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_setTimeSeriesData__java_util_List(data1);
  let axis = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_getOptions__().m_getScales__().m_getTimeAxis__();
  axis.m_getTicks__().m_setSource__org_pepstock_charba_client_enums_TickSource(TickSource.f_DATA__org_pepstock_charba_client_enums_TickSource);
  axis.m_getTime__().m_setUnit__org_pepstock_charba_client_enums_TimeUnit(TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit);
  let axis2 = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_getOptions__().m_getScales__().m_getLinearAxis__();
  axis2.m_setDisplay__boolean(true);
  axis2.m_setBeginAtZero__boolean(true);
  axis2.m_setStacked__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_, this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_], Dataset)));
  let options = AnnotationOptions.$create__();
  let line = LineAnnotation.$create__();
  line.m_setDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime(DrawTime.f_AFTER_DRAW__org_pepstock_charba_client_annotation_enums_DrawTime);
  line.m_setScaleID__java_lang_String(DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId.m_value__());
  line.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_DARK_GRAY__org_pepstock_charba_client_colors_HtmlColor);
  line.m_setBorderWidth__int(2);
  line.m_setValue__org_pepstock_charba_client_annotation_callbacks_ValueCallback(ValueCallback.$adapt((/** AnnotationContext */ context) =>{
   return Date.$create__();
  }));
  line.m_getLabel__().m_setDisplay__boolean(true);
  line.m_getLabel__().m_setContent__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Now"], j_l_String)));
  line.m_getLabel__().m_setPosition__org_pepstock_charba_client_annotation_enums_LabelPosition(LabelPosition.f_START__org_pepstock_charba_client_annotation_enums_LabelPosition);
  this.f_line1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_setDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime(DrawTime.f_AFTER_DRAW__org_pepstock_charba_client_annotation_enums_DrawTime);
  this.f_line1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_setScaleID__java_lang_String(DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId.m_value__());
  this.f_line1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_ORANGE__org_pepstock_charba_client_colors_HtmlColor);
  this.f_line1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_setBorderWidth__int(4);
  this.f_line1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_setBorderDash__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([4, 4], $int)));
  this.f_line1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_setValue__org_pepstock_charba_client_annotation_callbacks_ValueCallback(ValueCallback.$adapt((/** AnnotationContext */ context_1) =>{
   return this.m_getAverage___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase();
  }));
  this.f_line1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_getLabel__().m_setDisplay__boolean(true);
  this.f_line1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_getLabel__().m_setContent__org_pepstock_charba_client_annotation_callbacks_ContentCallback($2.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase(this));
  this.f_line1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_getLabel__().m_setPosition__org_pepstock_charba_client_annotation_enums_LabelPosition(LabelPosition.f_END__org_pepstock_charba_client_annotation_enums_LabelPosition);
  this.f_line1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_getLabel__().m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_ORANGE__org_pepstock_charba_client_colors_HtmlColor);
  this.f_line1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_getLabel__().m_setColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_BLACK__org_pepstock_charba_client_colors_HtmlColor);
  this.f_line1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_getLabel__().m_getFont__().m_setSize__int(18);
  options.m_setAnnotations__arrayOf_org_pepstock_charba_client_annotation_AbstractAnnotation(/**@type {!Array<AbstractAnnotation>}*/ ($Arrays.$init([line, this.f_line1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_], AbstractAnnotation)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, options);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.appendChild(actionsRow);
  let actionsCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  actionsCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  actionsCol.style.textAlign = "center";
  actionsCol.vAlign = "middle";
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    let scDataset = /**@type {TimeSeriesLineDataset}*/ ($Casts.$to(dataset, TimeSeriesLineDataset));
    for (let $iterator_1 = scDataset.m_getTimeSeriesData__().m_iterator__(); $iterator_1.m_hasNext__(); ) {
     let dp = /**@type {TimeSeriesItem}*/ ($Casts.$to($iterator_1.m_next__(), TimeSeriesItem));
     {
      dp.m_setValue__double(this.m_getRandomDigit__boolean(false));
     }
    }
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_update__();
 }
 /** @return {number} */
 m_getAverage___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase() {
  let sum = 0;
  let count = 0;
  let dsvisible = 0;
  let datasets = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_getData__().m_getDatasets__();
  for (let i = 0; i < datasets.size(); i = i + 1 | 0) {
   if (this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_.m_isDatasetVisible__int(i)) {
    dsvisible++;
    let scDataset = /**@type {TimeSeriesLineDataset}*/ ($Casts.$to(datasets.getAtIndex(i), TimeSeriesLineDataset));
    for (let $iterator = scDataset.m_getTimeSeriesData__().m_iterator__(); $iterator.m_hasNext__(); ) {
     let dp = /**@type {TimeSeriesItem}*/ ($Casts.$to($iterator.m_next__(), TimeSeriesItem));
     {
      sum += dp.m_getValue__();
      count++;
     }
    }
   }
  }
  return sum / Math.max(1, count / Math.max(1, dsvisible));
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_ = TimeSeriesLineChart.$create__();
  this.f_line1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_ = LineAnnotation.$create__();
  this.f_startingPoint__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_ = System.m_currentTimeMillis__();
 }
 
 static $clinit() {
  AnnotationLineOnTimeSeriesLineCase.$clinit = () =>{};
  AnnotationLineOnTimeSeriesLineCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnnotationLineOnTimeSeriesLineCase;
 }
 
 static $loadModules() {
  MarginRightUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  System = goog.module.get('java.lang.System$impl');
  Date = goog.module.get('java.util.Date$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  TimeSeriesLineChart = goog.module.get('org.pepstock.charba.client.TimeSeriesLineChart$impl');
  DateAdapter = goog.module.get('org.pepstock.charba.client.adapters.DateAdapter$impl');
  AbstractAnnotation = goog.module.get('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
  AnnotationOptions = goog.module.get('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
  AnnotationPlugin = goog.module.get('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
  LineAnnotation = goog.module.get('org.pepstock.charba.client.annotation.LineAnnotation$impl');
  ValueCallback = goog.module.get('org.pepstock.charba.client.annotation.callbacks.ValueCallback$impl');
  DrawTime = goog.module.get('org.pepstock.charba.client.annotation.enums.DrawTime$impl');
  LabelPosition = goog.module.get('org.pepstock.charba.client.annotation.enums.LabelPosition$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  TimeSeriesItem = goog.module.get('org.pepstock.charba.client.data.TimeSeriesItem$impl');
  TimeSeriesLineDataset = goog.module.get('org.pepstock.charba.client.data.TimeSeriesLineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  TickSource = goog.module.get('org.pepstock.charba.client.enums.TickSource$impl');
  TimeUnit = goog.module.get('org.pepstock.charba.client.enums.TimeUnit$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLineOnTimeSeriesLineCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLineOnTimeSeriesLineCase.$2$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@const {number}*/
AnnotationLineOnTimeSeriesLineCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_ = 60;
$Util.$setClassMetadata(AnnotationLineOnTimeSeriesLineCase, "org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLineOnTimeSeriesLineCase");

exports = AnnotationLineOnTimeSeriesLineCase;

//# sourceMappingURL=AnnotationLineOnTimeSeriesLineCase.js.map
