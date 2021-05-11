goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FloatingDataTimeSeriesByBarCase$impl');

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
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let BarChart = goog.forwardDeclare('org.pepstock.charba.client.BarChart$impl');
let DateAdapter = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapter$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianTimeSeriesAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis$impl');
let BarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let FloatingData = goog.forwardDeclare('org.pepstock.charba.client.data.FloatingData$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class FloatingDataTimeSeriesByBarCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_;
  /**@type {BarChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_;
  /**@type {!$Long}*/
  this.f_startingPoint__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_ = $Long.fromInt(0);
 }
 /** @return {!FloatingDataTimeSeriesByBarCase} */
 static $create__() {
  FloatingDataTimeSeriesByBarCase.$clinit();
  let $instance = new FloatingDataTimeSeriesByBarCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Floating data on timeseries by bar chart"], j_l_String)));
  let dataset1 = /**@type {BarDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_.m_newDataset__(), BarDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  dataset1.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([HtmlColor.f_GREEN__org_pepstock_charba_client_colors_HtmlColor], IsColor)));
  let adapter = DateAdapter.$create__();
  let dataPoints1 = /**@type {!LinkedList<DataPoint>}*/ (LinkedList.$create__());
  for (let i = 0; i < FloatingDataTimeSeriesByBarCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_; i = i + 1 | 0) {
   let date = adapter.m_add__long__long__org_pepstock_charba_client_enums_TimeUnit(this.f_startingPoint__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_, $Primitives.$widenIntToLong(i), TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit);
   let value = 100 * Math.random();
   let dp = DataPoint.$create__();
   dp.m_setX__java_util_Date(date);
   dp.m_setY__org_pepstock_charba_client_data_FloatingData(FloatingData.$create__double__double(value, Math.min(value + 50 * Math.random(), 100)));
   dataPoints1.add(dp);
  }
  dataset1.m_setDataPoints__java_util_List(dataPoints1);
  let dataset2 = /**@type {BarDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_.m_newDataset__(), BarDataset));
  dataset2.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([HtmlColor.f_ORANGE__org_pepstock_charba_client_colors_HtmlColor], IsColor)));
  dataset2.m_setLabel__java_lang_String("dataset 2");
  let dataPoints2 = /**@type {!LinkedList<DataPoint>}*/ (LinkedList.$create__());
  for (let i_1 = 0; i_1 < FloatingDataTimeSeriesByBarCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_; i_1 = i_1 + 1 | 0) {
   let date_1 = adapter.m_add__long__long__org_pepstock_charba_client_enums_TimeUnit(this.f_startingPoint__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_, $Primitives.$widenIntToLong(i_1), TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit);
   let value_1 = 100 * Math.random();
   let dp_1 = DataPoint.$create__();
   dp_1.m_setX__java_util_Date(date_1);
   dp_1.m_setY__org_pepstock_charba_client_data_FloatingData(FloatingData.$create__double__double(value_1, Math.min(value_1 + 50 * Math.random(), 100)));
   dataPoints2.add(dp_1);
  }
  dataset2.m_setDataPoints__java_util_List(dataPoints2);
  let axis = CartesianTimeSeriesAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_);
  axis.m_getTime__().m_setUnit__org_pepstock_charba_client_enums_TimeUnit(TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit);
  axis.m_setOffset__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1, dataset2], Dataset)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis], Axis)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    let scDataset = /**@type {BarDataset}*/ ($Casts.$to(dataset, BarDataset));
    for (let $iterator_1 = scDataset.m_getFloatingData__().m_iterator__(); $iterator_1.m_hasNext__(); ) {
     let dp = /**@type {FloatingData}*/ ($Casts.$to($iterator_1.m_next__(), FloatingData));
     {
      let value = 100 * Math.random();
      dp.m_setValues__double__double(value, Math.min(value + 50 * Math.random(), 100));
     }
    }
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_ = BarChart.$create__();
  this.f_startingPoint__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_ = System.m_currentTimeMillis__();
 }
 
 static $clinit() {
  FloatingDataTimeSeriesByBarCase.$clinit = () =>{};
  FloatingDataTimeSeriesByBarCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FloatingDataTimeSeriesByBarCase;
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
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  BarChart = goog.module.get('org.pepstock.charba.client.BarChart$impl');
  DateAdapter = goog.module.get('org.pepstock.charba.client.adapters.DateAdapter$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianTimeSeriesAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis$impl');
  BarDataset = goog.module.get('org.pepstock.charba.client.data.BarDataset$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  FloatingData = goog.module.get('org.pepstock.charba.client.data.FloatingData$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  TimeUnit = goog.module.get('org.pepstock.charba.client.enums.TimeUnit$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {number}*/
FloatingDataTimeSeriesByBarCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataTimeSeriesByBarCase_ = 15;
$Util.$setClassMetadata(FloatingDataTimeSeriesByBarCase, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FloatingDataTimeSeriesByBarCase");

exports = FloatingDataTimeSeriesByBarCase;

//# sourceMappingURL=FloatingDataTimeSeriesByBarCase.js.map
