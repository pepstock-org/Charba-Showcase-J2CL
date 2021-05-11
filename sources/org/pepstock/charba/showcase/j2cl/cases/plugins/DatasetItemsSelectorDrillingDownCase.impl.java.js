goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorDrillingDownCase$impl');

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
let Date = goog.forwardDeclare('java.util.Date$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let TimeSeriesLineChart = goog.forwardDeclare('org.pepstock.charba.client.TimeSeriesLineChart$impl');
let DateAdapter = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapter$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let CartesianTimeAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianTimeAxis$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let TimeSeriesItem = goog.forwardDeclare('org.pepstock.charba.client.data.TimeSeriesItem$impl');
let TimeSeriesLineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.TimeSeriesLineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let TickSource = goog.forwardDeclare('org.pepstock.charba.client.enums.TickSource$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');
let DatasetRangeSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeSelectionEvent$impl');
let DatasetsItemsSelector = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector$impl');
let DatasetsItemsSelectorOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorDrillingDownCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorDrillingDownCase.$2$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class DatasetItemsSelectorDrillingDownCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_;
  /**@type {TimeSeriesLineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_;
  /**@type {HTMLButtonElement}*/
  this.f_reset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_;
  /**@type {TimeSeriesLineDataset}*/
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_;
  /**@type {CartesianTimeAxis}*/
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_;
  /**@type {DatasetsItemsSelector}*/
  this.f_plugin__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_;
  /**@type {DatasetsItemsSelectorOptions}*/
  this.f_pOptions__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_;
  /**@type {DateAdapter}*/
  this.f_adapter__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_;
 }
 /** @return {!DatasetItemsSelectorDrillingDownCase} */
 static $create__() {
  DatasetItemsSelectorDrillingDownCase.$clinit();
  let $instance = new DatasetItemsSelectorDrillingDownCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_reset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.disabled = true;
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Drilling down into dataset data on timeseries line chart"], j_l_String)));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_ = /**@type {TimeSeriesLineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_newDataset__(), TimeSeriesLineDataset));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_setLabel__java_lang_String("dataset 1");
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  let color1 = GoogleChartColor.m_values__()[0];
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_setBorderColor__java_lang_String(color1.m_toHex__());
  let myDate = Date.$create__int__int__int__int__int(119, 11, 1, 0, 0);
  let time = myDate.m_getTime__();
  let xs1 = this.m_getRandomDigits__int__boolean(DatasetItemsSelectorDrillingDownCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_, false);
  let data = /**@type {!LinkedList<TimeSeriesItem>}*/ (LinkedList.$create__());
  time = $LongUtils.$plus(time, $LongUtils.$times(DatasetItemsSelectorDrillingDownCase.f_HOUR__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_, $Primitives.$widenIntToLong(DatasetItemsSelectorDrillingDownCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_)));
  for (let i = DatasetItemsSelectorDrillingDownCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_ - 1 | 0; i >= 0; i = i - 1 | 0) {
   data.add(TimeSeriesItem.$create__java_util_Date__double(Date.$create__long(time), xs1[i]));
   time = $LongUtils.$minus(time, DatasetItemsSelectorDrillingDownCase.f_HOUR__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_);
  }
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_setTimeSeriesData__java_util_List(data);
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_ = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_getOptions__().m_getScales__().m_getTimeAxis__();
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_getTime__().m_setUnit__org_pepstock_charba_client_enums_TimeUnit(TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit);
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_getTime__().m_setStepSize__double(1);
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_getTicks__().m_setSource__org_pepstock_charba_client_enums_TickSource(TickSource.f_DATA__org_pepstock_charba_client_enums_TickSource);
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_getTicks__().m_setCallback__org_pepstock_charba_client_callbacks_TimeTickCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase(this));
  let axis2 = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_getOptions__().m_getScales__().m_getLinearAxis__();
  axis2.m_setDisplay__boolean(true);
  axis2.m_setBeginAtZero__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_], Dataset)));
  this.f_pOptions__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_setBorderWidth__int(2);
  this.f_pOptions__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_setBorderDash__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([6, 3, 6], $int)));
  this.f_pOptions__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_GREY__org_pepstock_charba_client_colors_HtmlColor);
  this.f_pOptions__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_setColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_LIGHT_GOLDEN_ROD_YELLOW__org_pepstock_charba_client_colors_HtmlColor.m_alpha__double(DatasetsItemsSelectorOptions.f_DEFAULT_ALPHA__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(DatasetsItemsSelector.f_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector, this.f_pOptions__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_getPlugins__().m_add__org_pepstock_charba_client_Plugin(this.f_plugin__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType($2.$create__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase(this), DatasetRangeSelectionEvent.f_TYPE__org_pepstock_charba_client_events_DatasetRangeSelectionEvent);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.appendChild(actionsRow);
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
  this.f_reset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.onclick = (/** Event */ p0_1) =>{
   this.m_handleReset__();
   return null;
  };
  this.f_reset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.className = "gwt-Button";
  this.f_reset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.textContent = "Reset";
  this.f_reset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_reset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_);
  let github = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  github.onclick = (/** Event */ p0_2) =>{
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_getTimeSeriesData__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dp = /**@type {TimeSeriesItem}*/ ($Casts.$to($iterator.m_next__(), TimeSeriesItem));
   {
    dp.m_setValue__double(this.m_getRandomDigit__boolean(false));
   }
  }
  this.m_handleReset__();
 }
 
 m_handleReset__() {
  this.f_reset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.disabled = true;
  let color1 = GoogleChartColor.m_values__()[0];
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_setBorderColor__java_lang_String(color1.m_toHex__());
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_setMin__java_util_Date(null);
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_setMax__java_util_Date(null);
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_getTime__().m_setUnit__org_pepstock_charba_client_enums_TimeUnit(TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit);
  this.f_pOptions__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_setEnabled__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_getOptions__().m_getPlugins__().m_setOptions__org_pepstock_charba_client_plugins_AbstractPluginOptions(this.f_pOptions__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_reconfigure__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_ = TimeSeriesLineChart.$create__();
  this.f_reset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  this.f_plugin__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_ = DatasetsItemsSelector.m_get__();
  this.f_pOptions__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_ = DatasetsItemsSelectorOptions.$create__();
  this.f_adapter__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_ = DateAdapter.$create__();
 }
 
 static $clinit() {
  DatasetItemsSelectorDrillingDownCase.$clinit = () =>{};
  DatasetItemsSelectorDrillingDownCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetItemsSelectorDrillingDownCase;
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
  Date = goog.module.get('java.util.Date$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  TimeSeriesLineChart = goog.module.get('org.pepstock.charba.client.TimeSeriesLineChart$impl');
  DateAdapter = goog.module.get('org.pepstock.charba.client.adapters.DateAdapter$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  TimeSeriesItem = goog.module.get('org.pepstock.charba.client.data.TimeSeriesItem$impl');
  TimeSeriesLineDataset = goog.module.get('org.pepstock.charba.client.data.TimeSeriesLineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  TickSource = goog.module.get('org.pepstock.charba.client.enums.TickSource$impl');
  TimeUnit = goog.module.get('org.pepstock.charba.client.enums.TimeUnit$impl');
  DatasetRangeSelectionEvent = goog.module.get('org.pepstock.charba.client.events.DatasetRangeSelectionEvent$impl');
  DatasetsItemsSelector = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector$impl');
  DatasetsItemsSelectorOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorDrillingDownCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorDrillingDownCase.$2$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@const {!$Long}*/
DatasetItemsSelectorDrillingDownCase.f_MINUTE__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_ = $Long.fromInt(60000);
/**@const {!$Long}*/
DatasetItemsSelectorDrillingDownCase.f_HOUR__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_ = $Long.fromInt(3600000);
/**@const {number}*/
DatasetItemsSelectorDrillingDownCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_ = 144;
$Util.$setClassMetadata(DatasetItemsSelectorDrillingDownCase, "org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorDrillingDownCase");

exports = DatasetItemsSelectorDrillingDownCase;

//# sourceMappingURL=DatasetItemsSelectorDrillingDownCase.js.map
