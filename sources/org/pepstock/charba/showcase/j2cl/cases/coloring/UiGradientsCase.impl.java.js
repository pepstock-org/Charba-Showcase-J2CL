goog.module('org.pepstock.charba.showcase.j2cl.cases.coloring.UiGradientsCase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

let MarginRightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('elemental2.dom.Document.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let HTMLOptionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptionElement.$Overlay$impl');
let HTMLSelectElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLSelectElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let LineChart = goog.forwardDeclare('org.pepstock.charba.client.LineChart$impl');
let GradientOrientation = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientOrientation$impl');
let GradientType = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientType$impl');
let UiGradient = goog.forwardDeclare('org.pepstock.charba.client.colors.UiGradient$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class UiGradientsCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_;
  /**@type {HTMLSelectElement}*/
  this.f_gradient__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_;
  /**@type {HTMLSelectElement}*/
  this.f_orientation__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_;
  /**@type {LineDataset}*/
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_;
 }
 /** @return {!UiGradientsCase} */
 static $create__() {
  UiGradientsCase.$clinit();
  let $instance = new UiGradientsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  let first = null;
  for (let $array = UiGradient.m_values__(), $index = 0; $index < $array.length; $index++) {
   let myColor = $array[$index];
   {
    if ($Equality.$same(first, null)) {
     first = myColor;
    }
    let colorN = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
    colorN.text = myColor.name();
    colorN.value = myColor.name();
    this.f_gradient__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.add(colorN);
   }
  }
  let firstOrientation = null;
  for (let $array_1 = GradientOrientation.m_values__(), $index_1 = 0; $index_1 < $array_1.length; $index_1++) {
   let myOrientation = $array_1[$index_1];
   {
    if ($Equality.$same(firstOrientation, null)) {
     firstOrientation = myOrientation;
    }
    let orientationN = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
    orientationN.text = myOrientation.name();
    orientationN.value = myOrientation.name();
    this.f_orientation__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.add(orientationN);
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["UI gradients on line chart"], j_l_String)));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_ = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.m_newDataset__(), LineDataset));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.m_setLabel__java_lang_String("dataset 1");
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.m_setBackgroundColor__org_pepstock_charba_client_colors_Gradient(first.m_createGradient__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation(GradientType.f_LINEAR__org_pepstock_charba_client_colors_GradientType, firstOrientation));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, false));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_ORIGIN__org_pepstock_charba_client_enums_Fill);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.appendChild(actionsRow);
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
  let orientationId = "orientation" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForOrientation = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForOrientation.htmlFor = orientationId;
  labelForOrientation.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Orientation "));
  actionsCol.appendChild(labelForOrientation);
  this.f_orientation__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.id = orientationId;
  this.f_orientation__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.onchange = (/** Event */ p0_1) =>{
   this.m_handleOrientation__();
   return null;
  };
  this.f_orientation__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.className = "gwt-ListBox";
  this.f_orientation__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_orientation__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_);
  let gradientId = "gradient" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForGradient = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForGradient.htmlFor = gradientId;
  labelForGradient.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "UI Gradients "));
  actionsCol.appendChild(labelForGradient);
  this.f_gradient__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.id = gradientId;
  this.f_gradient__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.onchange = (/** Event */ p0_2) =>{
   this.m_handleGradient__();
   return null;
  };
  this.f_gradient__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.className = "gwt-ListBox";
  this.f_gradient__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_gradient__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_;
 }
 
 m_handleRandomize__() {
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, false));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.m_update__();
 }
 
 m_handleOrientation__() {
  this.m_applyGradient___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase();
 }
 
 m_handleGradient__() {
  this.m_applyGradient___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase();
 }
 
 m_applyGradient___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase() {
  let selectedGradient = /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_gradient__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.options, this.f_gradient__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.selectedIndex), HTMLOptionElement_$Overlay)).value;
  let selectedOrientation = /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_orientation__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.options, this.f_orientation__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.selectedIndex), HTMLOptionElement_$Overlay)).value;
  let gradient = UiGradient.m_valueOf__java_lang_String(selectedGradient);
  let orie = GradientOrientation.m_valueOf__java_lang_String(selectedOrientation);
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.m_setBackgroundColor__org_pepstock_charba_client_colors_Gradient(gradient.m_createGradient__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation(orie.m_getType__(), orie));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_ = LineChart.$create__();
  this.f_gradient__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_ = /**@type {HTMLSelectElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("select"), HTMLSelectElement_$Overlay));
  this.f_orientation__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_ = /**@type {HTMLSelectElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("select"), HTMLSelectElement_$Overlay));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_coloring_UiGradientsCase_ = null;
 }
 
 static $clinit() {
  UiGradientsCase.$clinit = () =>{};
  UiGradientsCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UiGradientsCase;
 }
 
 static $loadModules() {
  MarginRightUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  Document_$Overlay = goog.module.get('elemental2.dom.Document.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  HTMLOptionElement_$Overlay = goog.module.get('elemental2.dom.HTMLOptionElement.$Overlay$impl');
  HTMLSelectElement_$Overlay = goog.module.get('elemental2.dom.HTMLSelectElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  LineChart = goog.module.get('org.pepstock.charba.client.LineChart$impl');
  GradientOrientation = goog.module.get('org.pepstock.charba.client.colors.GradientOrientation$impl');
  GradientType = goog.module.get('org.pepstock.charba.client.colors.GradientType$impl');
  UiGradient = goog.module.get('org.pepstock.charba.client.colors.UiGradient$impl');
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
$Util.$setClassMetadata(UiGradientsCase, "org.pepstock.charba.showcase.j2cl.cases.coloring.UiGradientsCase");

exports = UiGradientsCase;

//# sourceMappingURL=UiGradientsCase.js.map
