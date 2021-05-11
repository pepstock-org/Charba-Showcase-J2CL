goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.GridLinesDisplayCase$impl');

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
let LineChart = goog.forwardDeclare('org.pepstock.charba.client.LineChart$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianCategoryAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class GridLinesDisplayCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_;
  /**@type {HTMLInputElement}*/
  this.f_display__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_;
  /**@type {HTMLInputElement}*/
  this.f_drawBorder__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_;
  /**@type {HTMLInputElement}*/
  this.f_drawOnChartArea__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_;
  /**@type {HTMLInputElement}*/
  this.f_drawTicks__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_;
  /**@type {CartesianCategoryAxis}*/
  this.f_axis1__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase;
  /**@type {CartesianLinearAxis}*/
  this.f_axis2__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase;
 }
 /** @return {!GridLinesDisplayCase} */
 static $create__() {
  GridLinesDisplayCase.$clinit();
  let $instance = new GridLinesDisplayCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Gridlines display options"], j_l_String)));
  let dataset1 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.m_newDataset__(), LineDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  let color1 = GoogleChartColor.m_values__()[0];
  dataset1.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setBorderColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, false));
  dataset1.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  let dataset2 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.m_newDataset__(), LineDataset));
  dataset2.m_setLabel__java_lang_String("dataset 2");
  let color2 = GoogleChartColor.m_values__()[1];
  dataset2.m_setBackgroundColor__java_lang_String(color2.m_toHex__());
  dataset2.m_setBorderColor__java_lang_String(color2.m_toHex__());
  dataset2.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, false));
  dataset2.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  this.f_axis1__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase = CartesianCategoryAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_);
  this.f_axis1__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase.m_setDisplay__boolean(true);
  this.f_axis1__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase.m_getTitle__().m_setDisplay__boolean(true);
  this.f_axis1__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Month"], j_l_String)));
  this.f_axis2__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_);
  this.f_axis2__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase.m_setDisplay__boolean(true);
  this.f_axis2__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase.m_getTitle__().m_setDisplay__boolean(true);
  this.f_axis2__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Value"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([this.f_axis1__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase, this.f_axis2__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1, dataset2], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.appendChild(actionsRow);
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
  this.m_configCheckBox__elemental2_dom_HTMLTableCellElement__elemental2_dom_HTMLInputElement__java_lang_String__java_lang_String_$p_org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase(actionsCol, this.f_display__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_, "Display", "display");
  this.f_display__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.onclick = (/** Event */ p0_1) =>{
   this.m_configChart___$p_org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase();
   return null;
  };
  this.m_configCheckBox__elemental2_dom_HTMLTableCellElement__elemental2_dom_HTMLInputElement__java_lang_String__java_lang_String_$p_org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase(actionsCol, this.f_drawBorder__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_, "Draw border", "drawBorder");
  this.f_drawBorder__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.onclick = (/** Event */ p0_2) =>{
   this.m_configChart___$p_org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase();
   return null;
  };
  this.m_configCheckBox__elemental2_dom_HTMLTableCellElement__elemental2_dom_HTMLInputElement__java_lang_String__java_lang_String_$p_org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase(actionsCol, this.f_drawOnChartArea__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_, "Draw on chart area", "drawOnChartArea");
  this.f_drawOnChartArea__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.onclick = (/** Event */ p0_3) =>{
   this.m_configChart___$p_org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase();
   return null;
  };
  this.m_configCheckBox__elemental2_dom_HTMLTableCellElement__elemental2_dom_HTMLInputElement__java_lang_String__java_lang_String_$p_org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase(actionsCol, this.f_drawTicks__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_, "Draw Ticks", "drawTicks");
  this.f_drawTicks__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.onclick = (/** Event */ p0_4) =>{
   this.m_configChart___$p_org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase();
   return null;
  };
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
 }
 /** @override @return {HTMLElement} */
 m_getElement__() {
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, false));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.m_update__();
 }
 
 m_configCheckBox__elemental2_dom_HTMLTableCellElement__elemental2_dom_HTMLInputElement__java_lang_String__java_lang_String_$p_org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase(/** HTMLTableCellElement */ actionsCol, /** HTMLInputElement */ checkBox, /** ?string */ label, /** ?string */ prefixId) {
  let checkBoxId = j_l_String.m_valueOf__java_lang_Object(prefixId) + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForCheckBox = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForCheckBox.htmlFor = checkBoxId;
  labelForCheckBox.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, label));
  actionsCol.appendChild(labelForCheckBox);
  checkBox.id = checkBoxId;
  checkBox.type = "checkbox";
  checkBox.className = "gwt-CheckBox";
  checkBox.checked = true;
  checkBox.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(checkBox);
 }
 
 m_configChart___$p_org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase() {
  this.f_axis1__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase.m_getGrid__().m_setDisplay__boolean(this.f_display__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.checked);
  this.f_axis1__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase.m_getGrid__().m_setDrawBorder__boolean(this.f_drawBorder__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.checked);
  this.f_axis1__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase.m_getGrid__().m_setDrawOnChartArea__boolean(this.f_drawOnChartArea__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.checked);
  this.f_axis1__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase.m_getGrid__().m_setDrawTicks__boolean(this.f_drawTicks__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.checked);
  this.f_axis2__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase.m_getGrid__().m_setDisplay__boolean(this.f_display__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.checked);
  this.f_axis2__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase.m_getGrid__().m_setDrawBorder__boolean(this.f_drawBorder__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.checked);
  this.f_axis2__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase.m_getGrid__().m_setDrawOnChartArea__boolean(this.f_drawOnChartArea__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.checked);
  this.f_axis2__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase.m_getGrid__().m_setDrawTicks__boolean(this.f_drawTicks__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.checked);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_.m_reconfigure__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_ = LineChart.$create__();
  this.f_display__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_drawBorder__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_drawOnChartArea__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_drawTicks__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_axis1__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase = null;
  this.f_axis2__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesDisplayCase = null;
 }
 
 static $clinit() {
  GridLinesDisplayCase.$clinit = () =>{};
  GridLinesDisplayCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GridLinesDisplayCase;
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
  LineChart = goog.module.get('org.pepstock.charba.client.LineChart$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianCategoryAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
$Util.$setClassMetadata(GridLinesDisplayCase, "org.pepstock.charba.showcase.j2cl.cases.elements.GridLinesDisplayCase");

exports = GridLinesDisplayCase;

//# sourceMappingURL=GridLinesDisplayCase.js.map
