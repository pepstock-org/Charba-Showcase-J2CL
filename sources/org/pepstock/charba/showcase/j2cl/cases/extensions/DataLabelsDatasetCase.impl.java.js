goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDatasetCase$impl');

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
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianCategoryAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let DataLabelsOptions = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
let DataLabelsPlugin = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let DefaultPluginId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultPluginId$impl');
let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDatasetCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDatasetCase.$2$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class DataLabelsDatasetCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_;
  /**@type {LineDataset}*/
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_;
  /**@type {LineDataset}*/
  this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_;
 }
 /** @return {!DataLabelsDatasetCase} */
 static $create__() {
  DataLabelsDatasetCase.$clinit();
  let $instance = new DataLabelsDatasetCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_getOptions__().m_getTooltips__().m_setEnabled__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setTop__int(32);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setRight__int(24);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setBottom__int(32);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setLeft__int(16);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_getOptions__().m_getElements__().m_getLine__().m_setFill__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_getOptions__().m_getElements__().m_getLine__().m_setBorderWidth__int(2);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_getOptions__().m_getPlugins__().m_setEnabled__org_pepstock_charba_client_enums_DefaultPluginId__boolean(DefaultPluginId.f_LEGEND__org_pepstock_charba_client_enums_DefaultPluginId, false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_getOptions__().m_getPlugins__().m_setEnabled__org_pepstock_charba_client_enums_DefaultPluginId__boolean(DefaultPluginId.f_TITLE__org_pepstock_charba_client_enums_DefaultPluginId, false);
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_ = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_newDataset__(), LineDataset));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_setLabel__java_lang_String("dataset 1");
  let color1 = GoogleChartColor.m_values__()[0];
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(color1.m_alpha__double(0.7));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_setPointBackgroundColor__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([color1.m_toHex__()], j_l_String)));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_setBorderColor__java_lang_String(color1.m_toHex__());
  let values = this.m_getRandomDigits__int__boolean(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, false);
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_setData__arrayOf_double(values);
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_setFill__java_lang_String("+1");
  this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_ = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_newDataset__(), LineDataset));
  this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_setLabel__java_lang_String("dataset 2");
  let color2 = GoogleChartColor.m_values__()[1];
  this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_setPointBackgroundColor__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([color2.m_toHex__()], j_l_String)));
  this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_setBorderColor__java_lang_String(color2.m_toHex__());
  let values2 = this.m_getRandomDigits__int__boolean(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, false);
  this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_setData__arrayOf_double(values2);
  let axis1 = CartesianCategoryAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_);
  axis1.m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Month"], j_l_String)));
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_);
  axis2.m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Value"], j_l_String)));
  axis2.m_setStacked__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1, axis2], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_, this.f_dataset2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_], Dataset)));
  let option = DataLabelsOptions.$create__();
  option.m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase(this));
  option.m_setBorderRadius__double(4);
  option.m_setColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_WHITE__org_pepstock_charba_client_colors_HtmlColor);
  option.m_setOffset__int(8);
  option.m_getFont__().m_setSize__int(11);
  option.m_getFont__().m_setWeight__org_pepstock_charba_client_enums_Weight(Weight.f_BOLD__org_pepstock_charba_client_enums_Weight);
  option.m_setAlign__org_pepstock_charba_client_datalabels_callbacks_AlignCallback($2.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase(this));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, option);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.appendChild(actionsRow);
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
  let addData = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  addData.onclick = (/** Event */ p0_1) =>{
   this.m_handleAddData__();
   return null;
  };
  addData.className = "gwt-Button";
  addData.textContent = "Add data";
  addData.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(addData);
  let removeData = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  removeData.onclick = (/** Event */ p0_2) =>{
   this.m_handleRemoveData__();
   return null;
  };
  removeData.className = "gwt-Button";
  removeData.textContent = "Remove data";
  removeData.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(removeData);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, false));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_.m_update__();
 }
 
 m_handleAddData__() {
  this.m_addData__org_pepstock_charba_client_IsChart__boolean(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_, false);
 }
 
 m_handleRemoveData__() {
  this.m_removeData__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_);
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDatasetCase_ = LineChart.$create__();
 }
 
 static $clinit() {
  DataLabelsDatasetCase.$clinit = () =>{};
  DataLabelsDatasetCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataLabelsDatasetCase;
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
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianCategoryAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  DataLabelsOptions = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
  DataLabelsPlugin = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  DefaultPluginId = goog.module.get('org.pepstock.charba.client.enums.DefaultPluginId$impl');
  Weight = goog.module.get('org.pepstock.charba.client.enums.Weight$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDatasetCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDatasetCase.$2$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(DataLabelsDatasetCase, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDatasetCase");

exports = DataLabelsDatasetCase;

//# sourceMappingURL=DataLabelsDatasetCase.js.map
