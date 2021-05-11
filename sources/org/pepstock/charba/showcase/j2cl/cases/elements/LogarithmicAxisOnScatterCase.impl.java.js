goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.LogarithmicAxisOnScatterCase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ScatterChart = goog.forwardDeclare('org.pepstock.charba.client.ScatterChart$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let CartesianLogarithmicAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLogarithmicAxis$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let ScatterDataset = goog.forwardDeclare('org.pepstock.charba.client.data.ScatterDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let AxisPosition = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisPosition$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.LogarithmicAxisOnScatterCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.LogarithmicAxisOnScatterCase.$2$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');

class LogarithmicAxisOnScatterCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_;
  /**@type {ScatterChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_;
 }
 /** @return {!LogarithmicAxisOnScatterCase} */
 static $create__() {
  LogarithmicAxisOnScatterCase.$clinit();
  let $instance = new LogarithmicAxisOnScatterCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Logarithmic axis on scatter chart"], j_l_String)));
  let dataset1 = /**@type {ScatterDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_.m_newDataset__(), ScatterDataset));
  dataset1.m_setLabel__java_lang_String("V(node2)");
  let color1 = GoogleChartColor.m_values__()[1];
  let points = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([LogarithmicAxisOnScatterCase.f_X__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_.length], DataPoint));
  for (let i = 0; i < LogarithmicAxisOnScatterCase.f_X__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_.length; i = i + 1 | 0) {
   $Arrays.$set(points, i, DataPoint.$create__());
   points[i].m_setX__double(LogarithmicAxisOnScatterCase.f_X__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_[i]);
   points[i].m_setY__double(LogarithmicAxisOnScatterCase.f_Y__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_[i]);
  }
  dataset1.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(points);
  dataset1.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setBorderColor__java_lang_String(color1.m_toHex__());
  let axis1 = CartesianLogarithmicAxis.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_AxisKind(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_, AxisKind.f_X__org_pepstock_charba_client_enums_AxisKind);
  axis1.m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setDisplay__boolean(true);
  axis1.m_setPosition__org_pepstock_charba_client_enums_AxisPosition(AxisPosition.f_BOTTOM__org_pepstock_charba_client_enums_AxisPosition);
  axis1.m_getTicks__().m_setCallback__org_pepstock_charba_client_callbacks_TickCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase(this));
  axis1.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Frequency"], j_l_String)));
  axis1.m_getTitle__().m_setDisplay__boolean(true);
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_);
  axis2.m_setDisplay__boolean(true);
  axis2.m_getTicks__().m_setCallback__org_pepstock_charba_client_callbacks_TickCallback($2.$create__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase(this));
  axis2.m_getTitle__().m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["voltage"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1, axis2], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_.appendChild(actionsRow);
  let actionsCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  actionsCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  actionsCol.style.textAlign = "center";
  actionsCol.vAlign = "middle";
  actionsRow.appendChild(actionsCol);
  let github = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  github.onclick = (/** Event */ p0) =>{
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_ = ScatterChart.$create__();
 }
 
 static $clinit() {
  LogarithmicAxisOnScatterCase.$clinit = () =>{};
  LogarithmicAxisOnScatterCase.$loadModules();
  BaseComposite.$clinit();
  LogarithmicAxisOnScatterCase.f_X__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_ = /**@type {!Array<number>}*/ ($Arrays.$init([1, 1.26, 1.58, 2, 2.51, 3.16, 3.98, 5.01, 6.31, 7.94, 10, 12.6, 15.8, 20, 25.1, 31.6, 39.8, 50.1, 63.1, 79.4, 100, 126, 158, 200, 251, 316, 398, 501, 631, 794, 1000], $double));
  LogarithmicAxisOnScatterCase.f_Y__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_ = /**@type {!Array<number>}*/ ($Arrays.$init([-0.01711, -0.02708, -0.04285, -0.06772, -0.1068, -0.1681, -0.2635, -0.4106, -0.6339, -0.9659, -1.445, -2.11, -2.992, -4.102, -5.429, -6.944, -8.607, -10.38, -12.23, -14.13, -16.07, -18.03, -20, -21.99, -23.98, -25.97, -27.97, -29.96, -31.96, -33.96, -35.96], $double));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LogarithmicAxisOnScatterCase;
 }
 
 static $loadModules() {
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ScatterChart = goog.module.get('org.pepstock.charba.client.ScatterChart$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  CartesianLogarithmicAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLogarithmicAxis$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  ScatterDataset = goog.module.get('org.pepstock.charba.client.data.ScatterDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  AxisPosition = goog.module.get('org.pepstock.charba.client.enums.AxisPosition$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.elements.LogarithmicAxisOnScatterCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.elements.LogarithmicAxisOnScatterCase.$2$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $double = goog.module.get('vmbootstrap.primitives.$double$impl');
 }
}
/**@type {Array<number>}*/
LogarithmicAxisOnScatterCase.f_X__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_;
/**@type {Array<number>}*/
LogarithmicAxisOnScatterCase.f_Y__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_;
$Util.$setClassMetadata(LogarithmicAxisOnScatterCase, "org.pepstock.charba.showcase.j2cl.cases.elements.LogarithmicAxisOnScatterCase");

exports = LogarithmicAxisOnScatterCase;

//# sourceMappingURL=LogarithmicAxisOnScatterCase.js.map
