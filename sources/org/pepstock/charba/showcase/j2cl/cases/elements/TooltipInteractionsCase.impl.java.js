goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.TooltipInteractionsCase$impl');

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
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class TooltipInteractionsCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_;
  /**@type {HTMLSelectElement}*/
  this.f_mode__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_;
  /**@type {HTMLInputElement}*/
  this.f_intersect__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_;
  /**@type {LineDataset}*/
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_;
  /**@type {LineDataset}*/
  this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_;
 }
 /** @return {!TooltipInteractionsCase} */
 static $create__() {
  TooltipInteractionsCase.$clinit();
  let $instance = new TooltipInteractionsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  for (let $array = InteractionMode.m_values__(), $index = 0; $index < $array.length; $index++) {
   let cMode = $array[$index];
   {
    let cModeN = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
    cModeN.text = cMode.name();
    cModeN.value = cMode.name();
    this.f_mode__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.add(cModeN);
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Tooltip mode and intesect options"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_getOptions__().m_getTooltips__().m_setMode__org_pepstock_charba_client_enums_InteractionMode(InteractionMode.f_POINT__org_pepstock_charba_client_enums_InteractionMode);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_getOptions__().m_getTooltips__().m_setIntersect__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_getOptions__().m_getHover__().m_setMode__org_pepstock_charba_client_enums_InteractionMode(InteractionMode.f_POINT__org_pepstock_charba_client_enums_InteractionMode);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_getOptions__().m_getHover__().m_setIntersect__boolean(false);
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_ = LineDataset.$create__();
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_setLabel__java_lang_String("dataset 1");
  let color1 = GoogleChartColor.m_values__()[0];
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_setBorderColor__java_lang_String(color1.m_toHex__());
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_ = LineDataset.$create__();
  this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_setLabel__java_lang_String("dataset 2");
  let color2 = GoogleChartColor.m_values__()[1];
  this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_setBackgroundColor__java_lang_String(color2.m_toHex__());
  this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_setBorderColor__java_lang_String(color2.m_toHex__());
  this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_, this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.appendChild(actionsRow);
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
  let modeId = "mode" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForMode = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForMode.htmlFor = modeId;
  labelForMode.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Mode "));
  actionsCol.appendChild(labelForMode);
  this.f_mode__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.id = modeId;
  this.f_mode__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.onchange = (/** Event */ p0_1) =>{
   this.m_handleMode__();
   return null;
  };
  this.f_mode__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.className = "gwt-ListBox";
  this.f_mode__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_mode__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_);
  let intersectId = "intersect" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForIntersect = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForIntersect.htmlFor = intersectId;
  labelForIntersect.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Use intersect "));
  actionsCol.appendChild(labelForIntersect);
  this.f_intersect__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.id = intersectId;
  this.f_intersect__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.onclick = (/** Event */ p0_2) =>{
   this.m_handleIntersect__();
   return null;
  };
  this.f_intersect__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.type = "checkbox";
  this.f_intersect__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.className = "gwt-CheckBox";
  this.f_intersect__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_intersect__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_update__();
 }
 
 m_handleMode__() {
  let selected = /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_mode__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.options, this.f_mode__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.selectedIndex), HTMLOptionElement_$Overlay)).value;
  for (let $array = InteractionMode.m_values__(), $index = 0; $index < $array.length; $index++) {
   let cMode = $array[$index];
   {
    if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(cMode.name(), selected)) {
     this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_getOptions__().m_getTooltips__().m_setMode__org_pepstock_charba_client_enums_InteractionMode(cMode);
     this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_getOptions__().m_getHover__().m_setMode__org_pepstock_charba_client_enums_InteractionMode(cMode);
     this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_reconfigure__org_pepstock_charba_client_UpdateConfiguration(UpdateConfigurationBuilder.m_create__().m_setDuration__int(1000).m_build__());
     return;
    }
   }
  }
 }
 
 m_handleIntersect__() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_getOptions__().m_getTooltips__().m_setIntersect__boolean(this.f_intersect__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.checked);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_getOptions__().m_getHover__().m_setIntersect__boolean(this.f_intersect__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.checked);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_.m_reconfigure__org_pepstock_charba_client_UpdateConfiguration(UpdateConfigurationBuilder.m_create__().m_setDuration__int(1000).m_build__());
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_ = LineChart.$create__();
  this.f_mode__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_ = /**@type {HTMLSelectElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("select"), HTMLSelectElement_$Overlay));
  this.f_intersect__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_ = null;
  this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipInteractionsCase_ = null;
 }
 
 static $clinit() {
  TooltipInteractionsCase.$clinit = () =>{};
  TooltipInteractionsCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TooltipInteractionsCase;
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
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  InteractionMode = goog.module.get('org.pepstock.charba.client.enums.InteractionMode$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
$Util.$setClassMetadata(TooltipInteractionsCase, "org.pepstock.charba.showcase.j2cl.cases.elements.TooltipInteractionsCase");

exports = TooltipInteractionsCase;

//# sourceMappingURL=TooltipInteractionsCase.js.map
