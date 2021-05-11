goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.PointerLineCase$impl');

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
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let LineChart = goog.forwardDeclare('org.pepstock.charba.client.LineChart$impl');
let UpdateConfigurationBuilder = goog.forwardDeclare('org.pepstock.charba.client.UpdateConfigurationBuilder$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianCategoryAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let CursorType = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.CursorType$impl');
let AxisClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisClickEvent$impl');
let DatasetSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetSelectionEvent$impl');
let TitleClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.TitleClickEvent$impl');
let ChartPointer = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointer$impl');
let ChartPointerOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointerOptions$impl');
let PointerElement = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.PointerElement$impl');
let LogView = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.LogView$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.PointerLineCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.PointerLineCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.PointerLineCase.$3$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class PointerLineCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_;
  /**@type {HTMLSelectElement}*/
  this.f_cursor__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_;
  /**@type {HTMLInputElement}*/
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_;
  /**@type {HTMLInputElement}*/
  this.f_legend__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_;
  /**@type {HTMLInputElement}*/
  this.f_title__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_;
  /**@type {HTMLInputElement}*/
  this.f_axes__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_;
  /**@type {LogView}*/
  this.f_mylog__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_;
  /**@type {ChartPointerOptions}*/
  this.f_options__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_;
  /**@type {List<PointerElement>}*/
  this.f_elements__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_;
 }
 /** @return {!PointerLineCase} */
 static $create__() {
  PointerLineCase.$clinit();
  let $instance = new PointerLineCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  let cursorDefault = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  cursorDefault.text = "Default";
  cursorDefault.value = CursorType.f_POINTER__org_pepstock_charba_client_dom_enums_CursorType.name();
  this.f_cursor__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.add(cursorDefault);
  for (let $array = CursorType.m_values__(), $index = 0; $index < $array.length; $index++) {
   let myC = $array[$index];
   {
    let cursorN = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
    cursorN.text = myC.name();
    cursorN.value = myC.name();
    this.f_cursor__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.add(cursorN);
   }
  }
  for (let $array_1 = PointerElement.m_values__(), $index_1 = 0; $index_1 < $array_1.length; $index_1++) {
   let element = $array_1[$index_1];
   {
    this.f_elements__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.add(element);
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_getOptions__().m_setMaintainAspectRatio__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_getOptions__().m_setAspectRatio__double(3);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Setting cursors on line chart"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_getOptions__().m_getTooltips__().m_setEnabled__boolean(false);
  let datasets = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_getData__().m_getDatasets__boolean(true);
  let dataset1 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_newDataset__(), LineDataset));
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
  let dataset2 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_newDataset__(), LineDataset));
  dataset2.m_setLabel__java_lang_String("dataset 2");
  let color2 = GoogleChartColor.m_values__()[1];
  dataset2.m_setBackgroundColor__java_lang_String(color2.m_toHex__());
  dataset2.m_setBorderColor__java_lang_String(color2.m_toHex__());
  dataset2.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  dataset2.m_setFill__boolean(false);
  datasets.add(dataset2);
  let axis1 = CartesianCategoryAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_);
  axis1.m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Month"], j_l_String)));
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_);
  axis2.m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Value"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1, axis2], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType($1.$create__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase(this), DatasetSelectionEvent.f_TYPE__org_pepstock_charba_client_events_DatasetSelectionEvent);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType($2.$create__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase(this), TitleClickEvent.f_TYPE__org_pepstock_charba_client_events_TitleClickEvent);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType($3.$create__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase(this), AxisClickEvent.f_TYPE__org_pepstock_charba_client_events_AxisClickEvent);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_getPlugins__().m_add__org_pepstock_charba_client_Plugin(ChartPointer.m_get__());
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.appendChild(actionsRow);
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
  let cursorId = "cursor" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForCursor = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForCursor.htmlFor = cursorId;
  labelForCursor.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Cursor  type "));
  actionsCol.appendChild(labelForCursor);
  this.f_cursor__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.id = cursorId;
  this.f_cursor__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.onchange = (/** Event */ p0_1) =>{
   this.m_handleCursor__();
   return null;
  };
  this.f_cursor__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.className = "gwt-ListBox";
  this.f_cursor__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_cursor__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_);
  this.m_configCheckBox__elemental2_dom_HTMLTableCellElement__elemental2_dom_HTMLInputElement__java_lang_String__java_lang_String_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase(actionsCol, this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_, "Dataset ", "dataset");
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.onclick = (/** Event */ p0_2) =>{
   this.m_handleElement__();
   return null;
  };
  this.m_configCheckBox__elemental2_dom_HTMLTableCellElement__elemental2_dom_HTMLInputElement__java_lang_String__java_lang_String_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase(actionsCol, this.f_legend__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_, "Legend ", "legend");
  this.f_legend__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.onclick = (/** Event */ p0_3) =>{
   this.m_handleElement__();
   return null;
  };
  this.m_configCheckBox__elemental2_dom_HTMLTableCellElement__elemental2_dom_HTMLInputElement__java_lang_String__java_lang_String_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase(actionsCol, this.f_title__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_, "Title ", "title");
  this.f_title__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.onclick = (/** Event */ p0_4) =>{
   this.m_handleElement__();
   return null;
  };
  this.m_configCheckBox__elemental2_dom_HTMLTableCellElement__elemental2_dom_HTMLInputElement__java_lang_String__java_lang_String_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase(actionsCol, this.f_axes__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_, "Axes ", "axes");
  this.f_axes__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.onclick = (/** Event */ p0_5) =>{
   this.m_handleElement__();
   return null;
  };
  let github = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  github.onclick = (/** Event */ p0_6) =>{
   goog.global.window.open(this.m_getUrl__(), "_blank", "");
   return null;
  };
  github.className = "gwt-Button";
  let img = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), HTMLImageElement_$Overlay));
  img.src = "images/GitHub-Mark-32px.png";
  github.appendChild(img);
  actionsCol.appendChild(github);
  let logRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  logRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.appendChild(logRow);
  let logCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  logCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  logCol.style.textAlign = "center";
  logCol.vAlign = "top";
  logRow.appendChild(logCol);
  logCol.appendChild(this.f_mylog__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_getElement__());
 }
 /** @override @return {HTMLElement} */
 m_getElement__() {
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_update__();
 }
 
 m_handleCursor__() {
  let selected = /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_cursor__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.options, this.f_cursor__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.selectedIndex), HTMLOptionElement_$Overlay)).value;
  let myC = CursorType.m_valueOf__java_lang_String(selected);
  this.f_options__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_setCursorPointer__org_pepstock_charba_client_dom_enums_CursorType(myC);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(ChartPointer.f_ID__org_pepstock_charba_client_impl_plugins_ChartPointer, this.f_options__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_reconfigure__org_pepstock_charba_client_UpdateConfiguration(UpdateConfigurationBuilder.m_create__().m_setDuration__int(1000).m_build__());
 }
 
 m_handleElement__() {
  this.m_checkElement__elemental2_dom_HTMLInputElement__org_pepstock_charba_client_impl_plugins_enums_PointerElement_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase(this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_, PointerElement.f_DATASET__org_pepstock_charba_client_impl_plugins_enums_PointerElement);
  this.m_checkElement__elemental2_dom_HTMLInputElement__org_pepstock_charba_client_impl_plugins_enums_PointerElement_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase(this.f_legend__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_, PointerElement.f_LEGEND__org_pepstock_charba_client_impl_plugins_enums_PointerElement);
  this.m_checkElement__elemental2_dom_HTMLInputElement__org_pepstock_charba_client_impl_plugins_enums_PointerElement_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase(this.f_title__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_, PointerElement.f_TITLE__org_pepstock_charba_client_impl_plugins_enums_PointerElement);
  this.m_checkElement__elemental2_dom_HTMLInputElement__org_pepstock_charba_client_impl_plugins_enums_PointerElement_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase(this.f_axes__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_, PointerElement.f_AXES__org_pepstock_charba_client_impl_plugins_enums_PointerElement);
  this.f_options__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_setElements__arrayOf_org_pepstock_charba_client_impl_plugins_enums_PointerElement(/**@type {Array<PointerElement>}*/ ($Arrays.$castTo(this.f_elements__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_toArray__arrayOf_java_lang_Object(/**@type {!Array<PointerElement>}*/ ($Arrays.$create([0], PointerElement))), PointerElement, 1)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(ChartPointer.f_ID__org_pepstock_charba_client_impl_plugins_ChartPointer, this.f_options__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_reconfigure__org_pepstock_charba_client_UpdateConfiguration(UpdateConfigurationBuilder.m_create__().m_setDuration__int(1000).m_build__());
 }
 
 m_checkElement__elemental2_dom_HTMLInputElement__org_pepstock_charba_client_impl_plugins_enums_PointerElement_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase(/** HTMLInputElement */ status, /** PointerElement */ element) {
  if (status.checked && !this.f_elements__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.contains(element)) {
   this.f_elements__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.add(element);
  } else if (!status.checked) {
   this.f_elements__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.remove(element);
  }
 }
 
 m_configCheckBox__elemental2_dom_HTMLTableCellElement__elemental2_dom_HTMLInputElement__java_lang_String__java_lang_String_$p_org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase(/** HTMLTableCellElement */ actionsCol, /** HTMLInputElement */ checkBox, /** ?string */ label, /** ?string */ prefixId) {
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
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_ = LineChart.$create__();
  this.f_cursor__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_ = /**@type {HTMLSelectElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("select"), HTMLSelectElement_$Overlay));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_legend__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_title__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_axes__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_mylog__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_ = LogView.$create__int(4);
  this.f_options__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_ = ChartPointerOptions.$create__();
  this.f_elements__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_ = /**@type {!LinkedList<PointerElement>}*/ (LinkedList.$create__());
 }
 
 static $clinit() {
  PointerLineCase.$clinit = () =>{};
  PointerLineCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PointerLineCase;
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
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  LineChart = goog.module.get('org.pepstock.charba.client.LineChart$impl');
  UpdateConfigurationBuilder = goog.module.get('org.pepstock.charba.client.UpdateConfigurationBuilder$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianCategoryAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  CursorType = goog.module.get('org.pepstock.charba.client.dom.enums.CursorType$impl');
  AxisClickEvent = goog.module.get('org.pepstock.charba.client.events.AxisClickEvent$impl');
  DatasetSelectionEvent = goog.module.get('org.pepstock.charba.client.events.DatasetSelectionEvent$impl');
  TitleClickEvent = goog.module.get('org.pepstock.charba.client.events.TitleClickEvent$impl');
  ChartPointer = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointer$impl');
  ChartPointerOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointerOptions$impl');
  PointerElement = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.PointerElement$impl');
  LogView = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.commons.LogView$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.plugins.PointerLineCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.plugins.PointerLineCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.plugins.PointerLineCase.$3$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
$Util.$setClassMetadata(PointerLineCase, "org.pepstock.charba.showcase.j2cl.cases.plugins.PointerLineCase");

exports = PointerLineCase;

//# sourceMappingURL=PointerLineCase.js.map
