goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorTimeSeriesByBarCase$impl');

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
let BarChart = goog.forwardDeclare('org.pepstock.charba.client.BarChart$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let DateAdapter = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapter$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianTimeSeriesAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis$impl');
let BarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Bounds = goog.forwardDeclare('org.pepstock.charba.client.enums.Bounds$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');
let DatasetRangeSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeSelectionEvent$impl');
let DatasetsItemsSelector = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector$impl');
let DatasetsItemsSelectorOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');
let LogView = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.LogView$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorTimeSeriesByBarCase.$1$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class DatasetItemsSelectorTimeSeriesByBarCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_;
  /**@type {BarChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_;
  /**@type {LogView}*/
  this.f_mylog__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_;
 }
 /** @return {!DatasetItemsSelectorTimeSeriesByBarCase} */
 static $create__() {
  DatasetItemsSelectorTimeSeriesByBarCase.$clinit();
  let $instance = new DatasetItemsSelectorTimeSeriesByBarCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Timeseries by bar chart"], j_l_String)));
  let adapter = DateAdapter.$create__();
  let time = adapter.m_startOf__java_util_Date__org_pepstock_charba_client_enums_TimeUnit(Date.$create__(), TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit).m_getTime__();
  let dataset1 = /**@type {BarDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_.m_newDataset__(), BarDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  dataset1.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([HtmlColor.f_GREEN__org_pepstock_charba_client_colors_HtmlColor], IsColor)));
  let points = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([DatasetItemsSelectorTimeSeriesByBarCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_], DataPoint));
  let rainPoints = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([DatasetItemsSelectorTimeSeriesByBarCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_], DataPoint));
  let idx = 0;
  for (let i = 0; i < DatasetItemsSelectorTimeSeriesByBarCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_; i = i + 1 | 0) {
   let dataPoint = DataPoint.$create__();
   dataPoint.m_setX__java_util_Date(Date.$create__long(time));
   dataPoint.m_setX__double(100 * Math.random());
   $Arrays.$set(points, idx, dataPoint);
   let rainPoint = DataPoint.$create__();
   rainPoint.m_setX__java_util_Date(Date.$create__long(time));
   rainPoint.m_setY__double(100 * Math.random());
   $Arrays.$set(rainPoints, idx, rainPoint);
   idx = idx + 1 | 0;
   time = $LongUtils.$plus(time, DatasetItemsSelectorTimeSeriesByBarCase.f_DAY__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_);
  }
  dataset1.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(rainPoints);
  let dataset2 = /**@type {BarDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_.m_newDataset__(), BarDataset));
  dataset2.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([HtmlColor.f_ORANGE__org_pepstock_charba_client_colors_HtmlColor], IsColor)));
  dataset2.m_setLabel__java_lang_String("dataset 2");
  let rainPoints2 = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([DatasetItemsSelectorTimeSeriesByBarCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_], DataPoint));
  time = adapter.m_startOf__java_util_Date__org_pepstock_charba_client_enums_TimeUnit(Date.$create__(), TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit).m_getTime__();
  idx = 0;
  for (let i_1 = 0; i_1 < DatasetItemsSelectorTimeSeriesByBarCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_; i_1 = i_1 + 1 | 0) {
   let dataPoint_1 = DataPoint.$create__();
   dataPoint_1.m_setX__java_util_Date(Date.$create__long(time));
   dataPoint_1.m_setX__double(100 * Math.random());
   $Arrays.$set(points, idx, dataPoint_1);
   let rainPoint2 = DataPoint.$create__();
   rainPoint2.m_setX__java_util_Date(Date.$create__long(time));
   rainPoint2.m_setY__double(100 * Math.random());
   $Arrays.$set(rainPoints2, idx, rainPoint2);
   idx = idx + 1 | 0;
   time = $LongUtils.$plus(time, DatasetItemsSelectorTimeSeriesByBarCase.f_DAY__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_);
  }
  dataset2.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(rainPoints2);
  let axis = CartesianTimeSeriesAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_);
  axis.m_setBounds__org_pepstock_charba_client_enums_Bounds(Bounds.f_DATA__org_pepstock_charba_client_enums_Bounds);
  axis.m_getTime__().m_setUnit__org_pepstock_charba_client_enums_TimeUnit(TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit);
  axis.m_setOffset__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1, dataset2], Dataset)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis], Axis)));
  let pOptions = DatasetsItemsSelectorOptions.$create__();
  pOptions.m_setBorderWidth__int(2);
  pOptions.m_setBorderDash__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([6, 2], $int)));
  pOptions.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_GREY__org_pepstock_charba_client_colors_HtmlColor);
  pOptions.m_getSelectionCleaner__().m_setDisplay__boolean(true);
  pOptions.m_getSelectionCleaner__().m_setColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_DARK_RED__org_pepstock_charba_client_colors_HtmlColor);
  pOptions.m_getSelectionCleaner__().m_setLabel__java_lang_String("Reset selection");
  pOptions.m_getSelectionCleaner__().m_getFont__().m_setSize__int(Defaults.m_get__().m_getGlobal__().m_getTitle__().m_getFont__().m_getSize__());
  pOptions.m_setColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_LIGHT_GREEN__org_pepstock_charba_client_colors_HtmlColor.m_alpha__double(DatasetsItemsSelectorOptions.f_DEFAULT_ALPHA__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(DatasetsItemsSelector.f_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector, pOptions);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_.m_getPlugins__().m_add__org_pepstock_charba_client_Plugin(DatasetsItemsSelector.m_get__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_.m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType($1.$create__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase(this), DatasetRangeSelectionEvent.f_TYPE__org_pepstock_charba_client_events_DatasetRangeSelectionEvent);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_.appendChild(actionsRow);
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
  let logRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  logRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_.appendChild(logRow);
  let logCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  logCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  logCol.style.textAlign = "center";
  logCol.vAlign = "top";
  logRow.appendChild(logCol);
  logCol.appendChild(this.f_mylog__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_.m_getElement__());
 }
 /** @override @return {HTMLElement} */
 m_getElement__() {
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    let scDataset = /**@type {BarDataset}*/ ($Casts.$to(dataset, BarDataset));
    for (let $iterator_1 = scDataset.m_getDataPoints__().m_iterator__(); $iterator_1.m_hasNext__(); ) {
     let dp = /**@type {DataPoint}*/ ($Casts.$to($iterator_1.m_next__(), DataPoint));
     {
      dp.m_setY__double(this.m_getRandomDigit__boolean(false));
     }
    }
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_ = BarChart.$create__();
  this.f_mylog__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_ = LogView.$create__int(4);
 }
 
 static $clinit() {
  DatasetItemsSelectorTimeSeriesByBarCase.$clinit = () =>{};
  DatasetItemsSelectorTimeSeriesByBarCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetItemsSelectorTimeSeriesByBarCase;
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
  BarChart = goog.module.get('org.pepstock.charba.client.BarChart$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  DateAdapter = goog.module.get('org.pepstock.charba.client.adapters.DateAdapter$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianTimeSeriesAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis$impl');
  BarDataset = goog.module.get('org.pepstock.charba.client.data.BarDataset$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Bounds = goog.module.get('org.pepstock.charba.client.enums.Bounds$impl');
  TimeUnit = goog.module.get('org.pepstock.charba.client.enums.TimeUnit$impl');
  DatasetRangeSelectionEvent = goog.module.get('org.pepstock.charba.client.events.DatasetRangeSelectionEvent$impl');
  DatasetsItemsSelector = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector$impl');
  DatasetsItemsSelectorOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');
  LogView = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.commons.LogView$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorTimeSeriesByBarCase.$1$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@const {!$Long}*/
DatasetItemsSelectorTimeSeriesByBarCase.f_DAY__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_ = $Long.fromInt(86400000);
/**@const {number}*/
DatasetItemsSelectorTimeSeriesByBarCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_ = 15;
$Util.$setClassMetadata(DatasetItemsSelectorTimeSeriesByBarCase, "org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorTimeSeriesByBarCase");

exports = DatasetItemsSelectorTimeSeriesByBarCase;

//# sourceMappingURL=DatasetItemsSelectorTimeSeriesByBarCase.js.map
