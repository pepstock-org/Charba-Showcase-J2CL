goog.module('org.pepstock.charba.showcase.j2cl.cases.coloring.FillingBoundariesCase$impl');

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
let HTMLOptionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptionElement.$Overlay$impl');
let HTMLSelectElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLSelectElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let LineChart = goog.forwardDeclare('org.pepstock.charba.client.LineChart$impl');
let UpdateConfigurationBuilder = goog.forwardDeclare('org.pepstock.charba.client.UpdateConfigurationBuilder$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class FillingBoundariesCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_;
  /**@type {HTMLSelectElement}*/
  this.f_fill__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_;
  /**@type {HTMLInputElement}*/
  this.f_smooth__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_;
  /**@type {LineDataset}*/
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_;
 }
 /** @return {!FillingBoundariesCase} */
 static $create__() {
  FillingBoundariesCase.$clinit();
  let $instance = new FillingBoundariesCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  for (let $array = Fill.m_values__(), $index = 0; $index < $array.length; $index++) {
   let cFill = $array[$index];
   {
    let fillN = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
    fillN.text = cFill.name();
    fillN.value = cFill.name();
    this.f_fill__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.add(fillN);
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Setting filling modes on line chart"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_getOptions__().m_setSpanGaps__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_getOptions__().m_getElements__().m_getLine__().m_setTension__double(1.0E-6);
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_ = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_newDataset__(), LineDataset));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_setLabel__java_lang_String("dataset 1");
  let color = GoogleChartColor.m_values__()[0];
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(color.m_alpha__double(0.2));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_setBorderColor__java_lang_String(color.m_toHex__());
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_START__org_pepstock_charba_client_enums_Fill);
  let axis = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_);
  axis.m_getTicks__().m_setAutoSkip__boolean(false);
  axis.m_getTicks__().m_setMaxRotation__int(0);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_], Dataset)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis], Axis)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.appendChild(actionsRow);
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
  let fillId = "fill" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForFill = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForFill.htmlFor = fillId;
  labelForFill.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Filling mode "));
  actionsCol.appendChild(labelForFill);
  this.f_fill__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.id = fillId;
  this.f_fill__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.onchange = (/** Event */ p0_1) =>{
   this.m_handleFill__();
   return null;
  };
  this.f_fill__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.className = "gwt-ListBox";
  this.f_fill__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_fill__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_);
  let smoothId = "smooth" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForSmooth = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForSmooth.htmlFor = smoothId;
  labelForSmooth.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Smooth"));
  actionsCol.appendChild(labelForSmooth);
  this.f_smooth__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.id = smoothId;
  this.f_smooth__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.onclick = (/** Event */ p0_2) =>{
   this.m_handleSmooth__();
   return null;
  };
  this.f_smooth__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.type = "checkbox";
  this.f_smooth__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.className = "gwt-CheckBox";
  this.f_smooth__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_smooth__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_;
 }
 
 m_handleRandomize__() {
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_update__();
 }
 
 m_handleSmooth__() {
  let value = this.f_smooth__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.checked ? 0.4 : 1.0E-6;
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_getOptions__().m_getElements__().m_getLine__().m_setTension__double(value);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_reconfigure__();
 }
 
 m_handleFill__() {
  let selected = /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_fill__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.options, this.f_fill__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.selectedIndex), HTMLOptionElement_$Overlay)).value;
  let i = 0;
  for (let $array = Fill.m_values__(), $index = 0; $index < $array.length; $index++) {
   let cFill = $array[$index];
   {
    if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(cFill.name(), selected)) {
     let color = GoogleChartColor.m_values__()[i];
     this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(color.m_alpha__double(0.2));
     this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_setBorderColor__java_lang_String(color.m_toHex__());
     this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_setFill__org_pepstock_charba_client_enums_IsFill(cFill);
     this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_.m_update__org_pepstock_charba_client_UpdateConfiguration(UpdateConfigurationBuilder.m_create__().m_setDuration__int(1000).m_build__());
     return;
    }
    i = i + 1 | 0;
   }
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_ = LineChart.$create__();
  this.f_fill__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_ = /**@type {HTMLSelectElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("select"), HTMLSelectElement_$Overlay));
  this.f_smooth__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_coloring_FillingBoundariesCase_ = null;
 }
 
 static $clinit() {
  FillingBoundariesCase.$clinit = () =>{};
  FillingBoundariesCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FillingBoundariesCase;
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
  HTMLOptionElement_$Overlay = goog.module.get('elemental2.dom.HTMLOptionElement.$Overlay$impl');
  HTMLSelectElement_$Overlay = goog.module.get('elemental2.dom.HTMLSelectElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  LineChart = goog.module.get('org.pepstock.charba.client.LineChart$impl');
  UpdateConfigurationBuilder = goog.module.get('org.pepstock.charba.client.UpdateConfigurationBuilder$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
$Util.$setClassMetadata(FillingBoundariesCase, "org.pepstock.charba.showcase.j2cl.cases.coloring.FillingBoundariesCase");

exports = FillingBoundariesCase;

//# sourceMappingURL=FillingBoundariesCase.js.map
