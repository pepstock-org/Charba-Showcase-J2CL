goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCallbacksOnTimeSeriesCase$impl');

const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

let MarginRightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('elemental2.dom.Document.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let TimeSeriesLineChart = goog.forwardDeclare('org.pepstock.charba.client.TimeSeriesLineChart$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let CartesianTimeSeriesAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let TimeSeriesItem = goog.forwardDeclare('org.pepstock.charba.client.data.TimeSeriesItem$impl');
let TimeSeriesLineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.TimeSeriesLineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let InteractionAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionAxis$impl');
let ModifierKey = goog.forwardDeclare('org.pepstock.charba.client.enums.ModifierKey$impl');
let TickSource = goog.forwardDeclare('org.pepstock.charba.client.enums.TickSource$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');
let ZoomOptions = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomOptions$impl');
let ZoomPlugin = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
let LogView = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.LogView$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCallbacksOnTimeSeriesCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCallbacksOnTimeSeriesCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCallbacksOnTimeSeriesCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCallbacksOnTimeSeriesCase.$4$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class ZoomCallbacksOnTimeSeriesCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_;
  /**@type {TimeSeriesLineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_;
  /**@type {LogView}*/
  this.f_mylog__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_;
  /**@type {HTMLInputElement}*/
  this.f_dragging__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_;
  /**@type {HTMLInputElement}*/
  this.f_modifier__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_;
  /**@type {HTMLDivElement}*/
  this.f_help__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_;
  /**@type {CartesianTimeSeriesAxis}*/
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_;
 }
 /** @return {!ZoomCallbacksOnTimeSeriesCase} */
 static $create__() {
  ZoomCallbacksOnTimeSeriesCase.$clinit();
  let $instance = new ZoomCallbacksOnTimeSeriesCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_getOptions__().m_setMaintainAspectRatio__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_getOptions__().m_setAspectRatio__double(3);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Zoom callbacks on timeseries line chart"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_getOptions__().m_getTooltips__().m_setTitleMarginBottom__int(10);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_getOptions__().m_getTooltips__().m_getCallbacks__().m_setTitleCallback__org_pepstock_charba_client_callbacks_TooltipTitleCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase(this));
  let dataset1 = /**@type {TimeSeriesLineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_newDataset__(), TimeSeriesLineDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  dataset1.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  let color1 = GoogleChartColor.m_values__()[0];
  dataset1.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setBorderColor__java_lang_String(color1.m_toHex__());
  let dataset2 = /**@type {TimeSeriesLineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_newDataset__(), TimeSeriesLineDataset));
  dataset2.m_setLabel__java_lang_String("dataset 2");
  dataset2.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  let color2 = GoogleChartColor.m_values__()[1];
  dataset2.m_setBackgroundColor__java_lang_String(color2.m_toHex__());
  dataset2.m_setBorderColor__java_lang_String(color2.m_toHex__());
  let time = Date.$create__().m_getTime__();
  let xs1 = this.m_getRandomDigits__int__boolean(ZoomCallbacksOnTimeSeriesCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_, false);
  let xs2 = this.m_getRandomDigits__int__boolean(ZoomCallbacksOnTimeSeriesCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_, false);
  let data = /**@type {!LinkedList<TimeSeriesItem>}*/ (LinkedList.$create__());
  let data1 = /**@type {!LinkedList<TimeSeriesItem>}*/ (LinkedList.$create__());
  time = $LongUtils.$plus(time, $LongUtils.$times(ZoomCallbacksOnTimeSeriesCase.f_DAY__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_, $Primitives.$widenIntToLong(ZoomCallbacksOnTimeSeriesCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_)));
  for (let i = ZoomCallbacksOnTimeSeriesCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_ - 1 | 0; i >= 0; i = i - 1 | 0) {
   data.add(TimeSeriesItem.$create__java_util_Date__double(Date.$create__long(time), xs1[i]));
   data1.add(TimeSeriesItem.$create__java_util_Date__double(Date.$create__long(time), xs2[i]));
   time = $LongUtils.$minus(time, ZoomCallbacksOnTimeSeriesCase.f_DAY__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_);
  }
  dataset1.m_setTimeSeriesData__java_util_List(data);
  dataset2.m_setTimeSeriesData__java_util_List(data1);
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_ = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_getOptions__().m_getScales__().m_getTimeAxis__();
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_getTicks__().m_setSource__org_pepstock_charba_client_enums_TickSource(TickSource.f_DATA__org_pepstock_charba_client_enums_TickSource);
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_getTime__().m_setUnit__org_pepstock_charba_client_enums_TimeUnit(TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit);
  let axis2 = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_getOptions__().m_getScales__().m_getLinearAxis__();
  axis2.m_setDisplay__boolean(true);
  axis2.m_setBeginAtZero__boolean(true);
  axis2.m_setStacked__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1, dataset2], Dataset)));
  let options = ZoomOptions.$create__();
  options.m_getZoom__().m_getWheel__().m_setEnabled__boolean(true);
  options.m_getZoom__().m_setMode__org_pepstock_charba_client_enums_InteractionAxis(InteractionAxis.f_X__org_pepstock_charba_client_enums_InteractionAxis);
  options.m_getZoom__().m_getWheel__().m_setSpeed__double(0.05);
  options.m_getZoom__().m_getDrag__().m_setEnabled__boolean(true);
  options.m_getZoom__().m_setCompletedCallback__org_pepstock_charba_client_zoom_callbacks_CompletedCallback($2.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase(this));
  options.m_getZoom__().m_setProgressCallback__org_pepstock_charba_client_zoom_callbacks_ProgressCallback($3.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase(this));
  options.m_getZoom__().m_setRejectedCallback__org_pepstock_charba_client_zoom_callbacks_RejectedCallback($4.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase(this));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(ZoomPlugin.f_ID__org_pepstock_charba_client_zoom_ZoomPlugin, options);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.appendChild(actionsRow);
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
  let draggingId = "dragging" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForDragging = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForDragging.htmlFor = draggingId;
  labelForDragging.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Dragging "));
  actionsCol.appendChild(labelForDragging);
  this.f_dragging__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.id = draggingId;
  this.f_dragging__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.checked = true;
  this.f_dragging__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.onclick = (/** Event */ p0_1) =>{
   this.m_handleDragging__();
   return null;
  };
  this.f_dragging__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.type = "checkbox";
  this.f_dragging__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.className = "gwt-CheckBox";
  this.f_dragging__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_dragging__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_);
  let modifierId = "modifier" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForModifier = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForModifier.htmlFor = modifierId;
  labelForModifier.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "ALT modifier "));
  actionsCol.appendChild(labelForModifier);
  this.f_modifier__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.id = draggingId;
  this.f_modifier__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.checked = false;
  this.f_modifier__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.disabled = true;
  this.f_modifier__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.onclick = (/** Event */ p0_2) =>{
   this.m_handleModifier__();
   return null;
  };
  this.f_modifier__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.type = "checkbox";
  this.f_modifier__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.className = "gwt-CheckBox";
  this.f_modifier__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_modifier__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_);
  let reset = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  reset.onclick = (/** Event */ p0_3) =>{
   this.m_handleResetZoom__();
   return null;
  };
  reset.className = "gwt-Button";
  reset.textContent = "Reset zoom";
  reset.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(reset);
  let github = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  github.onclick = (/** Event */ p0_4) =>{
   goog.global.window.open(this.m_getUrl__(), "_blank", "");
   return null;
  };
  github.className = "gwt-Button";
  let img = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), HTMLImageElement_$Overlay));
  img.src = "images/GitHub-Mark-32px.png";
  github.appendChild(img);
  actionsCol.appendChild(github);
  let helpRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  helpRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.appendChild(helpRow);
  let helpCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  helpCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  helpCol.style.textAlign = "center";
  helpCol.vAlign = "top";
  helpRow.appendChild(helpCol);
  helpCol.appendChild(this.f_help__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_);
  let logRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  logRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.appendChild(logRow);
  let logCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  logCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  logCol.style.textAlign = "center";
  logCol.vAlign = "top";
  logRow.appendChild(logCol);
  logCol.appendChild(this.f_mylog__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_getElement__());
 }
 /** @override @return {HTMLElement} */
 m_getElement__() {
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
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
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_update__();
 }
 
 m_handleDragging__() {
  let options = /**@type {ZoomOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_getOptions__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ZoomPlugin.f_ID__org_pepstock_charba_client_zoom_ZoomPlugin, ZoomPlugin.f_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin), ZoomOptions));
  if (this.f_dragging__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.checked) {
   options.m_getZoom__().m_getDrag__().m_setEnabled__boolean(true);
   options.m_getZoom__().m_getWheel__().m_setModifierKey__org_pepstock_charba_client_enums_ModifierKey(null);
   this.f_modifier__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.checked = false;
   this.f_modifier__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.disabled = true;
   this.f_help__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.innerHTML = "";
  } else {
   options.m_getZoom__().m_getDrag__().m_setEnabled__boolean(false);
   this.f_modifier__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.disabled = false;
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_update__();
 }
 
 m_handleModifier__() {
  let options = /**@type {ZoomOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_getOptions__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ZoomPlugin.f_ID__org_pepstock_charba_client_zoom_ZoomPlugin, ZoomPlugin.f_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin), ZoomOptions));
  if (this.f_modifier__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.checked) {
   options.m_getZoom__().m_getWheel__().m_setModifierKey__org_pepstock_charba_client_enums_ModifierKey(ModifierKey.f_ALT__org_pepstock_charba_client_enums_ModifierKey);
   this.f_help__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.innerHTML = "<kbd style=\"" + j_l_String.m_valueOf__java_lang_Object(ZoomCallbacksOnTimeSeriesCase.f_CSS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_) + "\">Alt</kbd> + wheeling to zoom";
  } else {
   options.m_getZoom__().m_getWheel__().m_setModifierKey__org_pepstock_charba_client_enums_ModifierKey(null);
   this.f_help__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.innerHTML = "";
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_update__();
 }
 
 m_handleResetZoom__() {
  ZoomPlugin.m_reset__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_);
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_ = TimeSeriesLineChart.$create__();
  this.f_mylog__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_ = LogView.$create__();
  this.f_dragging__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_modifier__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_help__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_ = /**@type {HTMLDivElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), HTMLDivElement_$Overlay));
 }
 
 static $clinit() {
  ZoomCallbacksOnTimeSeriesCase.$clinit = () =>{};
  ZoomCallbacksOnTimeSeriesCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ZoomCallbacksOnTimeSeriesCase;
 }
 
 static $loadModules() {
  MarginRightUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  Document_$Overlay = goog.module.get('elemental2.dom.Document.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Date = goog.module.get('java.util.Date$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  TimeSeriesLineChart = goog.module.get('org.pepstock.charba.client.TimeSeriesLineChart$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  TimeSeriesItem = goog.module.get('org.pepstock.charba.client.data.TimeSeriesItem$impl');
  TimeSeriesLineDataset = goog.module.get('org.pepstock.charba.client.data.TimeSeriesLineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  InteractionAxis = goog.module.get('org.pepstock.charba.client.enums.InteractionAxis$impl');
  ModifierKey = goog.module.get('org.pepstock.charba.client.enums.ModifierKey$impl');
  TickSource = goog.module.get('org.pepstock.charba.client.enums.TickSource$impl');
  TimeUnit = goog.module.get('org.pepstock.charba.client.enums.TimeUnit$impl');
  ZoomOptions = goog.module.get('org.pepstock.charba.client.zoom.ZoomOptions$impl');
  ZoomPlugin = goog.module.get('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
  LogView = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.commons.LogView$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCallbacksOnTimeSeriesCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCallbacksOnTimeSeriesCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCallbacksOnTimeSeriesCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCallbacksOnTimeSeriesCase.$4$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {!$Long}*/
ZoomCallbacksOnTimeSeriesCase.f_DAY__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_ = $Long.fromInt(86400000);
/**@const {number}*/
ZoomCallbacksOnTimeSeriesCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_ = 60;
/**@const {?string}*/
ZoomCallbacksOnTimeSeriesCase.f_CSS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_ = "background: linear-gradient(180deg,#eee,#fff); background-color: rgba(0, 0, 0, 0); background-color: #eee; border: 1px solid #cdd5d7; border-radius: 6px; box-shadow: 0 1px 2px 1px #cdd5d7; font-family: consolas,courier,monospace; font-size: .9rem; font-weight: 700; line-height: 1; margin: 3px; padding: 4px 6px; white-space: nowrap;";
$Util.$setClassMetadata(ZoomCallbacksOnTimeSeriesCase, "org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCallbacksOnTimeSeriesCase");

exports = ZoomCallbacksOnTimeSeriesCase;

//# sourceMappingURL=ZoomCallbacksOnTimeSeriesCase.js.map
