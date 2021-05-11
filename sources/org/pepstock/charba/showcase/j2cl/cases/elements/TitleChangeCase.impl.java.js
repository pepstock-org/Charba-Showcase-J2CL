goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.TitleChangeCase$impl');

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
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let LineChart = goog.forwardDeclare('org.pepstock.charba.client.LineChart$impl');
let UpdateConfigurationBuilder = goog.forwardDeclare('org.pepstock.charba.client.UpdateConfigurationBuilder$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianCategoryAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class TitleChangeCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_;
  /**@type {HTMLInputElement}*/
  this.f_split__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_;
  /**@type {HTMLInputElement}*/
  this.f_text__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_;
 }
 /** @return {!TitleChangeCase} */
 static $create__() {
  TitleChangeCase.$clinit();
  let $instance = new TitleChangeCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([TitleChangeCase.f_ORIGINAL_TITLE__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_], j_l_String)));
  let datasets = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.m_getData__().m_getDatasets__boolean(true);
  let dataset1 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.m_newDataset__(), LineDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  let color1 = GoogleChartColor.m_values__()[0];
  dataset1.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setBorderColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setFill__boolean(false);
  let values = this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite);
  let data = dataset1.m_getData__boolean(true);
  for (let i = 0; i < values.length; i = i + 1 | 0) {
   data.add(values[i]);
  }
  datasets.add(dataset1);
  let dataset2 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.m_newDataset__(), LineDataset));
  dataset2.m_setLabel__java_lang_String("dataset 2");
  let color2 = GoogleChartColor.m_values__()[1];
  dataset2.m_setBackgroundColor__java_lang_String(color2.m_toHex__());
  dataset2.m_setBorderColor__java_lang_String(color2.m_toHex__());
  dataset2.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  dataset2.m_setFill__boolean(false);
  datasets.add(dataset2);
  let axis1 = CartesianCategoryAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_);
  axis1.m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Month"], j_l_String)));
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_);
  axis2.m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Value"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1, axis2], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.appendChild(actionsRow);
  let actionsCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  actionsCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  actionsCol.style.textAlign = "center";
  actionsCol.vAlign = "middle";
  actionsRow.appendChild(actionsCol);
  let textId = "text" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForText = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForText.htmlFor = textId;
  labelForText.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Title "));
  actionsCol.appendChild(labelForText);
  this.f_text__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.id = textId;
  this.f_text__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.oninput = (/** Event */ p0) =>{
   this.m_handleTextChange__();
   return null;
  };
  this.f_text__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.type = "text";
  this.f_text__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.className = "gwt-TextBox";
  this.f_text__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_text__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_);
  let splitId = "split" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForSplit = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForSplit.htmlFor = splitId;
  labelForSplit.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Split by blanks "));
  actionsCol.appendChild(labelForSplit);
  this.f_split__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.id = splitId;
  this.f_split__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.onclick = (/** Event */ p0_1) =>{
   this.m_handleSplit__();
   return null;
  };
  this.f_split__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.type = "checkbox";
  this.f_split__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.className = "gwt-CheckBox";
  this.f_split__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_split__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_);
  let github = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  github.onclick = (/** Event */ p0_2) =>{
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_;
 }
 
 m_handleTextChange__() {
  let value = j_l_String.m_length__java_lang_String(this.f_text__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.value) > 0 ? this.f_text__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.value : TitleChangeCase.f_ORIGINAL_TITLE__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_;
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([value], j_l_String)));
  this.m_handleSplit__();
 }
 
 m_handleSplit__() {
  if (this.f_split__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.checked) {
   let values = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.m_getOptions__().m_getTitle__().m_getText__();
   if (!values.isEmpty()) {
    let value = /**@type {?string}*/ ($Casts.$to(values.getAtIndex(0), j_l_String));
    if (j_l_String.m_contains__java_lang_String__java_lang_CharSequence(value, " ")) {
     let splitValues = j_l_String.m_split__java_lang_String__java_lang_String(value, " ");
     this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(splitValues);
     this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.m_reconfigure__org_pepstock_charba_client_UpdateConfiguration(UpdateConfigurationBuilder.m_create__().m_setDuration__int(0).m_build__());
    }
   }
  } else {
   let values_1 = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.m_getOptions__().m_getTitle__().m_getText__();
   if (!values_1.isEmpty()) {
    let title = StringBuilder.$create__();
    for (let $iterator = values_1.m_iterator__(); $iterator.m_hasNext__(); ) {
     let value_1 = /**@type {?string}*/ ($Casts.$to($iterator.m_next__(), j_l_String));
     {
      title.m_append__java_lang_String(value_1).m_append__java_lang_String(" ");
     }
    }
    this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([j_l_String.m_trim__java_lang_String(title.toString())], j_l_String)));
    this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_.m_reconfigure__org_pepstock_charba_client_UpdateConfiguration(UpdateConfigurationBuilder.m_create__().m_setDuration__int(0).m_build__());
   }
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_ = LineChart.$create__();
  this.f_split__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_text__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
 }
 
 static $clinit() {
  TitleChangeCase.$clinit = () =>{};
  TitleChangeCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TitleChangeCase;
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
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  LineChart = goog.module.get('org.pepstock.charba.client.LineChart$impl');
  UpdateConfigurationBuilder = goog.module.get('org.pepstock.charba.client.UpdateConfigurationBuilder$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianCategoryAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {?string}*/
TitleChangeCase.f_ORIGINAL_TITLE__org_pepstock_charba_showcase_j2cl_cases_elements_TitleChangeCase_ = "Changing title text on line chart";
$Util.$setClassMetadata(TitleChangeCase, "org.pepstock.charba.showcase.j2cl.cases.elements.TitleChangeCase");

exports = TitleChangeCase;

//# sourceMappingURL=TitleChangeCase.js.map
