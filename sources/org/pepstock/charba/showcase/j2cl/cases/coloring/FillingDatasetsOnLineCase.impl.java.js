goog.module('org.pepstock.charba.showcase.j2cl.cases.coloring.FillingDatasetsOnLineCase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

let MarginRightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('elemental2.dom.Document.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let LineChart = goog.forwardDeclare('org.pepstock.charba.client.LineChart$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianCategoryAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let IsFill = goog.forwardDeclare('org.pepstock.charba.client.enums.IsFill$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $boolean = goog.forwardDeclare('vmbootstrap.primitives.$boolean$impl');

class FillingDatasetsOnLineCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_;
  /**@type {HTMLInputElement}*/
  this.f_smooth__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_;
  /**@type {HTMLInputElement}*/
  this.f_propagate__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_;
 }
 /** @return {!FillingDatasetsOnLineCase} */
 static $create__() {
  FillingDatasetsOnLineCase.$clinit();
  let $instance = new FillingDatasetsOnLineCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.m_getOptions__().m_setMaintainAspectRatio__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Filling datasets mode on line chart"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.m_getOptions__().m_getElements__().m_getLine__().m_setTension__double(1.0E-6);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.m_getOptions__().m_setSpanGaps__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.m_getOptions__().m_getFiller__().m_setPropagate__boolean(false);
  let datasets = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.m_getData__().m_getDatasets__boolean(true);
  for (let i = 0; i < 9; i = i + 1 | 0) {
   let dataset1 = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.m_newDataset__boolean(FillingDatasetsOnLineCase.f_HIDDENS__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_[i]);
   dataset1.m_setLabel__java_lang_String("dataset " + i);
   let color1 = GoogleChartColor.m_values__()[i];
   dataset1.m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(color1.m_alpha__double(0.2));
   dataset1.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(color1);
   let fill = FillingDatasetsOnLineCase.f_FILLS__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_[i];
   if (!$Equality.$same(fill, null)) {
    dataset1.m_setFill__org_pepstock_charba_client_enums_IsFill(fill);
   }
   dataset1.m_setData__arrayOf_double(this.m_getRandomDigits__int__double__double(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, 5, 15));
   datasets.add(dataset1);
  }
  let axis1 = CartesianCategoryAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_);
  axis1.m_setDisplay__boolean(true);
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_);
  axis2.m_setDisplay__boolean(true);
  axis2.m_setStacked__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1, axis2], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.appendChild(actionsRow);
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
  let smoothId = "smooth" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForSmooth = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForSmooth.htmlFor = smoothId;
  labelForSmooth.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Smooth "));
  actionsCol.appendChild(labelForSmooth);
  this.f_smooth__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.id = smoothId;
  this.f_smooth__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.onclick = (/** Event */ p0_1) =>{
   this.m_handleSmooth__();
   return null;
  };
  this.f_smooth__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.type = "checkbox";
  this.f_smooth__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.className = "gwt-CheckBox";
  this.f_smooth__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_smooth__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_);
  let propagateId = "propagate" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForPropagate = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForPropagate.htmlFor = propagateId;
  labelForPropagate.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Propagate "));
  actionsCol.appendChild(labelForPropagate);
  this.f_propagate__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.id = propagateId;
  this.f_propagate__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.onclick = (/** Event */ p0_2) =>{
   this.m_handlePropagate__();
   return null;
  };
  this.f_propagate__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.type = "checkbox";
  this.f_propagate__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.className = "gwt-CheckBox";
  this.f_propagate__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_propagate__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_);
  let github = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  github.onclick = (/** Event */ p0_3) =>{
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int__double__double(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, 5, 15));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.m_update__();
 }
 
 m_handleSmooth__() {
  let value = this.f_smooth__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.checked ? 0.4 : 1.0E-6;
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.m_getOptions__().m_getElements__().m_getLine__().m_setTension__double(value);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.m_reconfigure__();
 }
 
 m_handlePropagate__() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.m_getOptions__().m_getFiller__().m_setPropagate__boolean(this.f_propagate__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.checked);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_.m_reconfigure__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_ = LineChart.$create__();
  this.f_smooth__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_propagate__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
 }
 
 static $clinit() {
  FillingDatasetsOnLineCase.$clinit = () =>{};
  FillingDatasetsOnLineCase.$loadModules();
  BaseComposite.$clinit();
  FillingDatasetsOnLineCase.f_HIDDENS__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_ = /**@type {!Array<boolean>}*/ ($Arrays.$init([true, false, true, false, false, false, false, false, true], $boolean));
  FillingDatasetsOnLineCase.f_FILLS__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_ = /**@type {!Array<IsFill>}*/ ($Arrays.$init([null, Fill.m_getFill__java_lang_String("-1"), Fill.m_getFill__int(1), Fill.m_getFill__java_lang_String("-1"), Fill.m_getFill__java_lang_String("-1"), Fill.m_getFill__java_lang_String("+2"), Fill.f_FALSE__org_pepstock_charba_client_enums_Fill, Fill.m_getFill__int(8), Fill.f_END__org_pepstock_charba_client_enums_Fill], IsFill));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FillingDatasetsOnLineCase;
 }
 
 static $loadModules() {
  MarginRightUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  Document_$Overlay = goog.module.get('elemental2.dom.Document.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  LineChart = goog.module.get('org.pepstock.charba.client.LineChart$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianCategoryAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  IsFill = goog.module.get('org.pepstock.charba.client.enums.IsFill$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $boolean = goog.module.get('vmbootstrap.primitives.$boolean$impl');
 }
}
/**@type {Array<boolean>}*/
FillingDatasetsOnLineCase.f_HIDDENS__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_;
/**@type {Array<IsFill>}*/
FillingDatasetsOnLineCase.f_FILLS__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingDatasetsOnLineCase_;
$Util.$setClassMetadata(FillingDatasetsOnLineCase, "org.pepstock.charba.showcase.j2cl.cases.coloring.FillingDatasetsOnLineCase");

exports = FillingDatasetsOnLineCase;

//# sourceMappingURL=FillingDatasetsOnLineCase.js.map
