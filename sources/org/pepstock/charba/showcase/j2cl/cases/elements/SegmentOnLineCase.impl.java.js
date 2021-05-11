goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnLineCase$impl');

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
let LineChart = goog.forwardDeclare('org.pepstock.charba.client.LineChart$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianCategoryAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnLineCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnLineCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnLineCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnLineCase.$4$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class SegmentOnLineCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_;
 }
 /** @return {!SegmentOnLineCase} */
 static $create__() {
  SegmentOnLineCase.$clinit();
  let $instance = new SegmentOnLineCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.m_getOptions__().m_setMaintainAspectRatio__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Line chart with custom segments rendering"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.m_getOptions__().m_getTooltips__().m_setMode__org_pepstock_charba_client_enums_InteractionMode(InteractionMode.f_INDEX__org_pepstock_charba_client_enums_InteractionMode);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.m_getOptions__().m_getTooltips__().m_setIntersect__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.m_getOptions__().m_getSegment__().m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase(this));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.m_getOptions__().m_getSegment__().m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback($2.$create__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase(this));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.m_getOptions__().m_getSegment__().m_setBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback($3.$create__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase(this));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.m_getOptions__().m_getSegment__().m_setBorderDash__org_pepstock_charba_client_callbacks_BorderDashCallback($4.$create__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase(this));
  let datasets = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.m_getData__().m_getDatasets__boolean(true);
  let dataset1 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.m_newDataset__(), LineDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  dataset1.m_setFill__boolean(true);
  let values = this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite);
  let data = dataset1.m_getData__boolean(true);
  for (let i = 0; i < values.length; i = i + 1 | 0) {
   data.add(values[i]);
  }
  datasets.add(dataset1);
  let axis1 = CartesianCategoryAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_);
  axis1.m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Month"], j_l_String)));
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_);
  axis2.m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Value"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1, axis2], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.appendChild(actionsRow);
  let actionsCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  actionsCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  actionsCol.style.textAlign = "center";
  actionsCol.vAlign = "middle";
  actionsRow.appendChild(actionsCol);
  let randomize = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  randomize.onclick = (/** Event */ p0) =>{
   for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
    let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
    {
     dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
    }
   }
   this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_.m_update__();
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_ = LineChart.$create__();
 }
 
 static $clinit() {
  SegmentOnLineCase.$clinit = () =>{};
  SegmentOnLineCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SegmentOnLineCase;
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
  LineChart = goog.module.get('org.pepstock.charba.client.LineChart$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianCategoryAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  InteractionMode = goog.module.get('org.pepstock.charba.client.enums.InteractionMode$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnLineCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnLineCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnLineCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnLineCase.$4$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(SegmentOnLineCase, "org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnLineCase");

exports = SegmentOnLineCase;

//# sourceMappingURL=SegmentOnLineCase.js.map
