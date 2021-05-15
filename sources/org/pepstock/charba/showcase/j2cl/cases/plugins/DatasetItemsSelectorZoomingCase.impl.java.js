goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorZoomingCase$impl');

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
let LineChart = goog.forwardDeclare('org.pepstock.charba.client.LineChart$impl');
let DateAdapter = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapter$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let CartesianTimeAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianTimeAxis$impl');
let CartesianTimeSeriesAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let TickSource = goog.forwardDeclare('org.pepstock.charba.client.enums.TickSource$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');
let DatasetRangeCleanSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeCleanSelectionEvent$impl');
let DatasetRangeSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeSelectionEvent$impl');
let ChartBackgroundColor = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartBackgroundColor$impl');
let DatasetsItemsSelector = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector$impl');
let DatasetsItemsSelectorOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorZoomingCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorZoomingCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorZoomingCase.$3$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class DatasetItemsSelectorZoomingCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_;
  /**@type {LineChart}*/
  this.f_small__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_;
  /**@type {DatasetsItemsSelector}*/
  this.f_selector__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_;
  /**@type {LineDataset}*/
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_;
  /**@type {DateAdapter}*/
  this.f_adapter__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_;
 }
 /** @return {!DatasetItemsSelectorZoomingCase} */
 static $create__() {
  DatasetItemsSelectorZoomingCase.$clinit();
  let $instance = new DatasetItemsSelectorZoomingCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getOptions__().m_setMaintainAspectRatio__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getOptions__().m_setAspectRatio__double(3);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Zooming dataset data on timeseries line chart"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getOptions__().m_getTooltips__().m_setTitleMarginBottom__int(10);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getOptions__().m_getTooltips__().m_getCallbacks__().m_setTitleCallback__org_pepstock_charba_client_callbacks_TooltipTitleCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase(this));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_ = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_newDataset__(), LineDataset));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_setLabel__java_lang_String("dataset 1");
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_ORIGIN__org_pepstock_charba_client_enums_Fill);
  let color1 = GoogleChartColor.m_values__()[0];
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_setBorderColor__java_lang_String(color1.m_toHex__());
  let dataset2 = /**@type {LineDataset}*/ ($Casts.$to(this.f_small__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_newDataset__(), LineDataset));
  let time = Date.$create__().m_getTime__();
  let xs1 = this.m_getRandomDigits__int__boolean(DatasetItemsSelectorZoomingCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_, false);
  let dp1 = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([DatasetItemsSelectorZoomingCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_], DataPoint));
  for (let i = 0; i < DatasetItemsSelectorZoomingCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_; i = i + 1 | 0) {
   $Arrays.$set(dp1, i, DataPoint.$create__());
   dp1[i].m_setY__double(xs1[i]);
   dp1[i].m_setX__java_util_Date(Date.$create__long(time));
   time = $LongUtils.$plus(time, DatasetItemsSelectorZoomingCase.f_DAY__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_);
  }
  dataset2.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(dp1);
  this.f_small__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset2], Dataset)));
  let axis = CartesianTimeSeriesAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_);
  axis.m_getTicks__().m_setSource__org_pepstock_charba_client_enums_TickSource(TickSource.f_DATA__org_pepstock_charba_client_enums_TickSource);
  axis.m_getTime__().m_setUnit__org_pepstock_charba_client_enums_TimeUnit(TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit);
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_);
  axis2.m_setDisplay__boolean(true);
  axis2.m_setBeginAtZero__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis, axis2], Axis)));
  this.f_small__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getOptions__().m_getPlugins__().m_setEnabled__java_lang_String__boolean(ChartBackgroundColor.f_ID__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor, false);
  this.f_small__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_small__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getOptions__().m_setMaintainAspectRatio__boolean(true);
  this.f_small__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getOptions__().m_setAspectRatio__double(15);
  this.f_small__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(false);
  this.f_small__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(false);
  this.f_small__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getOptions__().m_getElements__().m_getPoint__().m_setRadius__double(0);
  let axis1Small = CartesianTimeAxis.$create__org_pepstock_charba_client_IsChart(this.f_small__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_);
  axis1Small.m_setDisplay__boolean(false);
  this.f_small__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1Small], Axis)));
  let pOptions = DatasetsItemsSelectorOptions.$create__();
  pOptions.m_setBorderWidth__int(5);
  pOptions.m_setBorderDash__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([6], $int)));
  this.f_small__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(DatasetsItemsSelector.f_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector, pOptions);
  this.f_small__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getPlugins__().m_add__org_pepstock_charba_client_Plugin(this.f_selector__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_);
  this.f_small__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType($2.$create__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis(this, axis), DatasetRangeCleanSelectionEvent.f_TYPE__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEvent);
  this.f_small__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType($3.$create__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis(this, dataset2, axis), DatasetRangeSelectionEvent.f_TYPE__org_pepstock_charba_client_events_DatasetRangeSelectionEvent);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getChartElement__()), Node_$Overlay)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_small__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.appendChild(actionsRow);
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
  let reset = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  reset.onclick = (/** Event */ p0_1) =>{
   this.m_handleReset__();
   return null;
  };
  reset.className = "gwt-Button";
  reset.textContent = "Reset";
  reset.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(reset);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_;
 }
 
 m_handleRandomize__() {
  let newDataPoints = /**@type {!LinkedList<DataPoint>}*/ (LinkedList.$create__());
  for (let $iterator = this.f_small__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    let scDataset = /**@type {LineDataset}*/ ($Casts.$to(dataset, LineDataset));
    for (let $iterator_1 = scDataset.m_getDataPoints__().m_iterator__(); $iterator_1.m_hasNext__(); ) {
     let dp = /**@type {DataPoint}*/ ($Casts.$to($iterator_1.m_next__(), DataPoint));
     {
      dp.m_setY__double(this.m_getRandomDigit__boolean(false));
      newDataPoints.add(dp);
     }
    }
   }
  }
  this.f_small__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_update__();
  if (!this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getDataPoints__().isEmpty()) {
   this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_setDataPoints__java_util_List(newDataPoints);
   this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_], Dataset)));
   this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_update__();
  }
 }
 
 m_handleReset__() {
  this.f_selector__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_cleanSelection__org_pepstock_charba_client_IsChart(this.f_small__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_);
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_ = LineChart.$create__();
  this.f_small__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_ = LineChart.$create__();
  this.f_selector__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_ = DatasetsItemsSelector.m_get__();
  this.f_adapter__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_ = DateAdapter.$create__();
 }
 
 static $clinit() {
  DatasetItemsSelectorZoomingCase.$clinit = () =>{};
  DatasetItemsSelectorZoomingCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetItemsSelectorZoomingCase;
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
  LineChart = goog.module.get('org.pepstock.charba.client.LineChart$impl');
  DateAdapter = goog.module.get('org.pepstock.charba.client.adapters.DateAdapter$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  CartesianTimeAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianTimeAxis$impl');
  CartesianTimeSeriesAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  TickSource = goog.module.get('org.pepstock.charba.client.enums.TickSource$impl');
  TimeUnit = goog.module.get('org.pepstock.charba.client.enums.TimeUnit$impl');
  DatasetRangeCleanSelectionEvent = goog.module.get('org.pepstock.charba.client.events.DatasetRangeCleanSelectionEvent$impl');
  DatasetRangeSelectionEvent = goog.module.get('org.pepstock.charba.client.events.DatasetRangeSelectionEvent$impl');
  ChartBackgroundColor = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartBackgroundColor$impl');
  DatasetsItemsSelector = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector$impl');
  DatasetsItemsSelectorOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorZoomingCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorZoomingCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorZoomingCase.$3$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@const {!$Long}*/
DatasetItemsSelectorZoomingCase.f_DAY__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_ = $Long.fromInt(86400000);
/**@const {number}*/
DatasetItemsSelectorZoomingCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_ = 60;
$Util.$setClassMetadata(DatasetItemsSelectorZoomingCase, "org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorZoomingCase");

exports = DatasetItemsSelectorZoomingCase;

//# sourceMappingURL=DatasetItemsSelectorZoomingCase.js.map
