goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnTimeSeriesLineCase$impl');

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
let TimeSeriesLineChart = goog.forwardDeclare('org.pepstock.charba.client.TimeSeriesLineChart$impl');
let DateAdapter = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapter$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let TimeSeriesItem = goog.forwardDeclare('org.pepstock.charba.client.data.TimeSeriesItem$impl');
let TimeSeriesLineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.TimeSeriesLineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Bounds = goog.forwardDeclare('org.pepstock.charba.client.enums.Bounds$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let TickSource = goog.forwardDeclare('org.pepstock.charba.client.enums.TickSource$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnTimeSeriesLineCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnTimeSeriesLineCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnTimeSeriesLineCase.$3$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');

class SegmentOnTimeSeriesLineCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_;
  /**@type {TimeSeriesLineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_;
  /**@type {!$Long}*/
  this.f_startingPoint__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_ = $Long.fromInt(0);
  /**@type {?string}*/
  this.f_week__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_;
  /**@type {number}*/
  this.f_counter__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_ = 0;
  /**@type {DateAdapter}*/
  this.f_adapter__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_;
 }
 /** @return {!SegmentOnTimeSeriesLineCase} */
 static $create__() {
  SegmentOnTimeSeriesLineCase.$clinit();
  let $instance = new SegmentOnTimeSeriesLineCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Timeseries line chart with different segment colors for week"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_.m_getOptions__().m_getInteraction__().m_setIntersect__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_.m_getOptions__().m_getTooltips__().m_getCallbacks__().m_setTitleCallback__org_pepstock_charba_client_callbacks_TooltipTitleCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase(this));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_.m_getOptions__().m_getSegment__().m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback($2.$create__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase(this));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_.m_getOptions__().m_getSegment__().m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback($3.$create__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase(this));
  let dataset1 = /**@type {TimeSeriesLineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_.m_newDataset__(), TimeSeriesLineDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  dataset1.m_setPointRadius__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([0], $double)));
  dataset1.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_ORIGIN__org_pepstock_charba_client_enums_Fill);
  let xs1 = this.m_getRandomDigits__int__boolean(SegmentOnTimeSeriesLineCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_, false);
  let data = /**@type {!LinkedList<TimeSeriesItem>}*/ (LinkedList.$create__());
  for (let i = SegmentOnTimeSeriesLineCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_ - 1 | 0; i >= 0; i = i - 1 | 0) {
   data.add(TimeSeriesItem.$create__java_util_Date__double(this.f_adapter__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_.m_add__long__long__org_pepstock_charba_client_enums_TimeUnit(this.f_startingPoint__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_, $Primitives.$widenIntToLong(i), TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit), xs1[i]));
  }
  dataset1.m_setTimeSeriesData__java_util_List(data);
  let axis = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_.m_getOptions__().m_getScales__().m_getTimeAxis__();
  axis.m_getTicks__().m_setSource__org_pepstock_charba_client_enums_TickSource(TickSource.f_DATA__org_pepstock_charba_client_enums_TickSource);
  axis.m_setBounds__org_pepstock_charba_client_enums_Bounds(Bounds.f_DATA__org_pepstock_charba_client_enums_Bounds);
  axis.m_getTime__().m_setUnit__org_pepstock_charba_client_enums_TimeUnit(TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit);
  let axis2 = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_.m_getOptions__().m_getScales__().m_getLinearAxis__();
  axis2.m_setDisplay__boolean(true);
  axis2.m_setBeginAtZero__boolean(true);
  axis2.m_setStacked__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_;
 }
 
 m_handleRandomize__() {
  this.f_counter__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_ = -1 | 0;
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
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
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_ = TimeSeriesLineChart.$create__();
  this.f_startingPoint__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_ = System.m_currentTimeMillis__();
  this.f_week__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_ = null;
  this.f_counter__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_ = -1 | 0;
  this.f_adapter__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_ = DateAdapter.$create__();
 }
 
 static $clinit() {
  SegmentOnTimeSeriesLineCase.$clinit = () =>{};
  SegmentOnTimeSeriesLineCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SegmentOnTimeSeriesLineCase;
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
  TimeSeriesLineChart = goog.module.get('org.pepstock.charba.client.TimeSeriesLineChart$impl');
  DateAdapter = goog.module.get('org.pepstock.charba.client.adapters.DateAdapter$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  TimeSeriesItem = goog.module.get('org.pepstock.charba.client.data.TimeSeriesItem$impl');
  TimeSeriesLineDataset = goog.module.get('org.pepstock.charba.client.data.TimeSeriesLineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Bounds = goog.module.get('org.pepstock.charba.client.enums.Bounds$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  TickSource = goog.module.get('org.pepstock.charba.client.enums.TickSource$impl');
  TimeUnit = goog.module.get('org.pepstock.charba.client.enums.TimeUnit$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnTimeSeriesLineCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnTimeSeriesLineCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnTimeSeriesLineCase.$3$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $double = goog.module.get('vmbootstrap.primitives.$double$impl');
 }
}
/**@const {number}*/
SegmentOnTimeSeriesLineCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_ = 60;
$Util.$setClassMetadata(SegmentOnTimeSeriesLineCase, "org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnTimeSeriesLineCase");

exports = SegmentOnTimeSeriesLineCase;

//# sourceMappingURL=SegmentOnTimeSeriesLineCase.js.map
