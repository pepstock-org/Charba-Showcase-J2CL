goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.DatasetSelectionPieCase$impl');

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
let PieChart = goog.forwardDeclare('org.pepstock.charba.client.PieChart$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let PieDataset = goog.forwardDeclare('org.pepstock.charba.client.data.PieDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let DatasetSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetSelectionEvent$impl');
let ChartPointer = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointer$impl');
let ChartPointerOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointerOptions$impl');
let PointerElement = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.PointerElement$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.DatasetSelectionPieCase.$1$impl');
let LogView = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.LogView$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class DatasetSelectionPieCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_;
  /**@type {PieChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_;
  /**@type {LogView}*/
  this.f_mylog__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_;
 }
 /** @return {!DatasetSelectionPieCase} */
 static $create__() {
  DatasetSelectionPieCase.$clinit();
  let $instance = new DatasetSelectionPieCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_getOptions__().m_setAspectRatio__double(3);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_getOptions__().m_setMaintainAspectRatio__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Selecting dataset on pie chart"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType($1.$create__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase(this), DatasetSelectionEvent.f_TYPE__org_pepstock_charba_client_events_DatasetSelectionEvent);
  let dataset = /**@type {PieDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_newDataset__(), PieDataset));
  dataset.m_setLabel__java_lang_String("dataset 1");
  dataset.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(this.m_getSequenceColors__int__double(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, 1));
  dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, false));
  let op = ChartPointerOptions.$create__();
  op.m_setElements__arrayOf_org_pepstock_charba_client_impl_plugins_enums_PointerElement(/**@type {!Array<PointerElement>}*/ ($Arrays.$init([PointerElement.f_DATASET__org_pepstock_charba_client_impl_plugins_enums_PointerElement], PointerElement)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(ChartPointer.f_ID__org_pepstock_charba_client_impl_plugins_ChartPointer, op);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_getPlugins__().m_add__org_pepstock_charba_client_Plugin(ChartPointer.m_get__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.appendChild(actionsRow);
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
  let addDataset = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  addDataset.onclick = (/** Event */ p0_1) =>{
   this.m_handleAddDataset__();
   return null;
  };
  addDataset.className = "gwt-Button";
  addDataset.textContent = "Add dataset";
  addDataset.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(addDataset);
  let removeDataset = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  removeDataset.onclick = (/** Event */ p0_2) =>{
   this.m_handleRemoveDataset__();
   return null;
  };
  removeDataset.className = "gwt-Button";
  removeDataset.textContent = "Remove dataset";
  removeDataset.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(removeDataset);
  let addData = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  addData.onclick = (/** Event */ p0_3) =>{
   this.m_handleAddData__();
   return null;
  };
  addData.className = "gwt-Button";
  addData.textContent = "Add data";
  addData.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(addData);
  let removeData = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  removeData.onclick = (/** Event */ p0_4) =>{
   this.m_handleRemoveData__();
   return null;
  };
  removeData.className = "gwt-Button";
  removeData.textContent = "Remove data";
  removeData.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(removeData);
  let github = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  github.onclick = (/** Event */ p0_5) =>{
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
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.appendChild(logRow);
  let logCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  logCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  logCol.style.textAlign = "center";
  logCol.vAlign = "top";
  logRow.appendChild(logCol);
  logCol.appendChild(this.f_mylog__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_getElement__());
 }
 /** @override @return {HTMLElement} */
 m_getElement__() {
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, false));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_update__();
 }
 
 m_handleAddDataset__() {
  let datasets = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_getData__().m_getDatasets__();
  let dataset = /**@type {PieDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_newDataset__(), PieDataset));
  dataset.m_setLabel__java_lang_String("dataset " + (datasets.size() + 1 | 0));
  dataset.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(this.m_getSequenceColors__int__double(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, 1));
  dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, false));
  datasets.add(dataset);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_update__();
 }
 
 m_handleRemoveDataset__() {
  this.m_removeDataset__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_);
 }
 
 m_handleAddData__() {
  if (this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite < 12) {
   this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_getData__().m_getLabels__().m_add__java_lang_String(this.m_getLabel__());
   this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite = this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite + 1 | 0;
   let datasets = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_getData__().m_getDatasets__();
   for (let $iterator = datasets.m_iterator__(); $iterator.m_hasNext__(); ) {
    let ds = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
    {
     let pds = /**@type {PieDataset}*/ ($Casts.$to(ds, PieDataset));
     pds.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(this.m_getSequenceColors__int__double(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, 1));
     pds.m_getData__().add(this.m_getRandomDigit__boolean(false));
    }
   }
   this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_.m_update__();
  }
 }
 
 m_handleRemoveData__() {
  this.m_removeData__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_);
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_ = PieChart.$create__();
  this.f_mylog__org_pepstock_charba_showcase_j2cl_cases_charts_DatasetSelectionPieCase_ = LogView.$create__();
 }
 
 static $clinit() {
  DatasetSelectionPieCase.$clinit = () =>{};
  DatasetSelectionPieCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetSelectionPieCase;
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
  PieChart = goog.module.get('org.pepstock.charba.client.PieChart$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  PieDataset = goog.module.get('org.pepstock.charba.client.data.PieDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  DatasetSelectionEvent = goog.module.get('org.pepstock.charba.client.events.DatasetSelectionEvent$impl');
  ChartPointer = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointer$impl');
  ChartPointerOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointerOptions$impl');
  PointerElement = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.PointerElement$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.charts.DatasetSelectionPieCase.$1$impl');
  LogView = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.commons.LogView$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(DatasetSelectionPieCase, "org.pepstock.charba.showcase.j2cl.cases.charts.DatasetSelectionPieCase");

exports = DatasetSelectionPieCase;

//# sourceMappingURL=DatasetSelectionPieCase.js.map
