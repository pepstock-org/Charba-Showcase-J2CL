goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksWithThresholdBarCase$impl');

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
let BarChart = goog.forwardDeclare('org.pepstock.charba.client.BarChart$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let BarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksWithThresholdBarCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksWithThresholdBarCase.$2$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class CallbacksWithThresholdBarCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_;
  /**@type {BarChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_;
 }
 /** @return {!CallbacksWithThresholdBarCase} */
 static $create__() {
  CallbacksWithThresholdBarCase.$clinit();
  let $instance = new CallbacksWithThresholdBarCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Callbacks on bar chart dataset"], j_l_String)));
  let dataset1 = /**@type {BarDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_.m_newDataset__(), BarDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  dataset1.m_setBorderWidth__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([2], $int)));
  dataset1.m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase(this));
  dataset1.m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback($2.$create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase(this));
  dataset1.m_setData__arrayOf_double(this.m_getRandomDigits__int__double__double(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, 0, 100));
  let axis = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_);
  axis.m_setMax__double(100);
  axis.m_setMin__double(0);
  axis.m_setBeginAtZero__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int__double__double(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, 0, 100));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_ = BarChart.$create__();
 }
 /** @return {IsColor} */
 static get f_INFO_COLOR__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_() {
  return (CallbacksWithThresholdBarCase.$clinit(), CallbacksWithThresholdBarCase.$static_INFO_COLOR__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_);
 }
 /** @return {IsColor} */
 static get f_WARNING_COLOR__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_() {
  return (CallbacksWithThresholdBarCase.$clinit(), CallbacksWithThresholdBarCase.$static_WARNING_COLOR__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_);
 }
 /** @return {IsColor} */
 static get f_ERROR_COLOR__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_() {
  return (CallbacksWithThresholdBarCase.$clinit(), CallbacksWithThresholdBarCase.$static_ERROR_COLOR__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_);
 }
 
 static $clinit() {
  CallbacksWithThresholdBarCase.$clinit = () =>{};
  CallbacksWithThresholdBarCase.$loadModules();
  BaseComposite.$clinit();
  CallbacksWithThresholdBarCase.$static_INFO_COLOR__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_ = HtmlColor.f_GREEN__org_pepstock_charba_client_colors_HtmlColor;
  CallbacksWithThresholdBarCase.$static_WARNING_COLOR__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_ = HtmlColor.f_ORANGE__org_pepstock_charba_client_colors_HtmlColor;
  CallbacksWithThresholdBarCase.$static_ERROR_COLOR__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_ = HtmlColor.f_RED__org_pepstock_charba_client_colors_HtmlColor;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CallbacksWithThresholdBarCase;
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
  BarChart = goog.module.get('org.pepstock.charba.client.BarChart$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  BarDataset = goog.module.get('org.pepstock.charba.client.data.BarDataset$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksWithThresholdBarCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksWithThresholdBarCase.$2$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@private {IsColor}*/
CallbacksWithThresholdBarCase.$static_INFO_COLOR__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_;
/**@const {number}*/
CallbacksWithThresholdBarCase.f_WARNING__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_ = 60;
/**@private {IsColor}*/
CallbacksWithThresholdBarCase.$static_WARNING_COLOR__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_;
/**@const {number}*/
CallbacksWithThresholdBarCase.f_ERROR__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_ = 85;
/**@private {IsColor}*/
CallbacksWithThresholdBarCase.$static_ERROR_COLOR__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_;
$Util.$setClassMetadata(CallbacksWithThresholdBarCase, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksWithThresholdBarCase");

exports = CallbacksWithThresholdBarCase;

//# sourceMappingURL=CallbacksWithThresholdBarCase.js.map
