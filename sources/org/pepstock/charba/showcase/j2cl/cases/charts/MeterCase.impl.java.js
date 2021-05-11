goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.MeterCase$impl');

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
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Render = goog.forwardDeclare('org.pepstock.charba.client.enums.Render$impl');
let MeterChart = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.MeterChart$impl');
let MeterDataset = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.MeterDataset$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.MeterCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.MeterCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.MeterCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.MeterCase.$4$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class MeterCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_;
  /**@type {MeterChart}*/
  this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_;
  /**@type {MeterChart}*/
  this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_;
  /**@type {MeterChart}*/
  this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_;
  /**@type {List<MeterDataset>}*/
  this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_;
 }
 /** @return {!MeterCase} */
 static $create__() {
  MeterCase.$clinit();
  let $instance = new MeterCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.cellPadding = "12";
  let chartRow1 = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow1.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.appendChild(chartRow1);
  let chartCol11 = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol11.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("50%");
  chartRow1.appendChild(chartCol11);
  let chartCol12 = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol12.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("50%");
  chartRow1.appendChild(chartCol12);
  let chartRow2 = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow2.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.appendChild(chartRow2);
  let chartCol21 = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol21.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("50%");
  chartRow2.appendChild(chartCol21);
  let chartCol22 = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol22.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("50%");
  chartRow2.appendChild(chartCol22);
  this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["METER chart to represent percentage value"], j_l_String)));
  this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_getOptions__().m_setRender__org_pepstock_charba_client_enums_Render(Render.f_PERCENTAGE__org_pepstock_charba_client_enums_Render);
  this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_getOptions__().m_setFormatCallback__org_pepstock_charba_client_callbacks_MeterFormatCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase(this));
  this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.m_getDataset__org_pepstock_charba_client_impl_charts_MeterChart__java_lang_String__double_$p_org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase(this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_, "Percent", 100)], Dataset)));
  chartCol11.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_getChartElement__()), Node_$Overlay)));
  this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["METER chart to represent value and dataset label"], j_l_String)));
  this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_getOptions__().m_setRender__org_pepstock_charba_client_enums_Render(Render.f_VALUE_AND_LABEL__org_pepstock_charba_client_enums_Render);
  this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_getOptions__().m_setFontColor__org_pepstock_charba_client_callbacks_ColorCallback($2.$create__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase(this));
  this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_getOptions__().m_setFormatCallback__org_pepstock_charba_client_callbacks_MeterFormatCallback($3.$create__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase(this));
  this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.m_getDataset__org_pepstock_charba_client_impl_charts_MeterChart__java_lang_String__double_$p_org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase(this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_, "memory", 2048)], Dataset)));
  chartCol12.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_getChartElement__()), Node_$Overlay)));
  this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["METER chart to represent value and dataset label", "changing the color of label"], j_l_String)));
  this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_getOptions__().m_setRender__org_pepstock_charba_client_enums_Render(Render.f_VALUE_AND_LABEL__org_pepstock_charba_client_enums_Render);
  this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_getOptions__().m_setFormatCallback__org_pepstock_charba_client_callbacks_MeterFormatCallback($4.$create__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase(this));
  this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_getOptions__().m_setFontColor__org_pepstock_charba_client_colors_IsColor(ColorBuilder.m_build__int__int__int(90, 173, 255));
  this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.m_getDataset__org_pepstock_charba_client_impl_charts_MeterChart__java_lang_String__double_$p_org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase(this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_, "Storage", 200)], Dataset)));
  chartCol21.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {MeterDataset}*/ ($Casts.$to($iterator.m_next__(), MeterDataset));
   {
    dataset.m_setValue__double(Math.random() * dataset.m_getMax__());
   }
  }
  this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_update__();
  this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_update__();
  this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.m_update__();
 }
 /** @return {MeterDataset} */
 m_getDataset__org_pepstock_charba_client_impl_charts_MeterChart__java_lang_String__double_$p_org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase(/** MeterChart */ chart, /** ?string */ label, /** number */ max) {
  chart.m_getOptions__().m_setResponsive__boolean(true);
  let dataset = chart.m_newDataset__double(max);
  dataset.m_setLabel__java_lang_String(label);
  dataset.m_setValue__double(Math.random() * max);
  this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_.add(dataset);
  return dataset;
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase() {
  this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_ = MeterChart.$create__();
  this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_ = MeterChart.$create__();
  this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_ = MeterChart.$create__();
  this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_charts_MeterCase_ = /**@type {!ArrayList<MeterDataset>}*/ (ArrayList.$create__());
 }
 
 static $clinit() {
  MeterCase.$clinit = () =>{};
  MeterCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MeterCase;
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
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Render = goog.module.get('org.pepstock.charba.client.enums.Render$impl');
  MeterChart = goog.module.get('org.pepstock.charba.client.impl.charts.MeterChart$impl');
  MeterDataset = goog.module.get('org.pepstock.charba.client.impl.charts.MeterDataset$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.charts.MeterCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.charts.MeterCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.charts.MeterCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.charts.MeterCase.$4$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(MeterCase, "org.pepstock.charba.showcase.j2cl.cases.charts.MeterCase");

exports = MeterCase;

//# sourceMappingURL=MeterCase.js.map
