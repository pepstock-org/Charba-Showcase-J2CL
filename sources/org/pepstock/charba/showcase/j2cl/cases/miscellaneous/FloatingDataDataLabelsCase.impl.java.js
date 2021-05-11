goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FloatingDataDataLabelsCase$impl');

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
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianCategoryAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let BarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let FloatingData = goog.forwardDeclare('org.pepstock.charba.client.data.FloatingData$impl');
let DataLabelsOptionsBuilder = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsOptionsBuilder$impl');
let DataLabelsPlugin = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
let Align = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Align$impl');
let Anchor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Anchor$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let DefaultPluginId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultPluginId$impl');
let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FloatingDataDataLabelsCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FloatingDataDataLabelsCase.$2$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');

class FloatingDataDataLabelsCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_;
  /**@type {BarChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_;
 }
 /** @return {!FloatingDataDataLabelsCase} */
 static $create__() {
  FloatingDataDataLabelsCase.$clinit();
  let $instance = new FloatingDataDataLabelsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_.m_getOptions__().m_getTooltips__().m_setEnabled__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setTop__int(32);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_.m_getOptions__().m_getElements__().m_getLine__().m_setFill__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_.m_getOptions__().m_getPlugins__().m_setEnabled__org_pepstock_charba_client_enums_DefaultPluginId__boolean(DefaultPluginId.f_LEGEND__org_pepstock_charba_client_enums_DefaultPluginId, false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_.m_getOptions__().m_getPlugins__().m_setEnabled__org_pepstock_charba_client_enums_DefaultPluginId__boolean(DefaultPluginId.f_TITLE__org_pepstock_charba_client_enums_DefaultPluginId, false);
  let dataset1 = /**@type {BarDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_.m_newDataset__(), BarDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  let color1 = GoogleChartColor.m_values__()[0];
  dataset1.m_setBackgroundColor__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([color1.m_toHex__()], j_l_String)));
  dataset1.m_setBorderColor__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([color1.m_toHex__()], j_l_String)));
  let values = this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite);
  let gaps = this.m_getRandomDigits__int__boolean(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, false);
  let dataToSet = /**@type {!Array<Array<number>>}*/ ($Arrays.$create([this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, 2], $double));
  for (let i = 0; i < this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite; i = i + 1 | 0) {
   $Arrays.$set(dataToSet, i, /**@type {!Array<number>}*/ ($Arrays.$init([values[i], values[i] + Math.max(gaps[i], 20)], $double)));
  }
  dataset1.m_setFloatingData__arrayOf_arrayOf_double(dataToSet);
  let axis1 = CartesianCategoryAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_);
  axis1.m_setDisplay__boolean(true);
  axis1.m_setOffset__boolean(true);
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_);
  axis2.m_setDisplay__boolean(true);
  axis2.m_setBeginAtZero__boolean(true);
  axis2.m_getTitle__().m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Value"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1, axis2], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1], Dataset)));
  let builder = DataLabelsOptionsBuilder.m_create__().m_createLabel__java_lang_String("top").m_setAlign__org_pepstock_charba_client_datalabels_enums_Align(Align.f_CENTER__org_pepstock_charba_client_datalabels_enums_Align).m_setAnchor__org_pepstock_charba_client_datalabels_enums_Anchor(Anchor.f_END__org_pepstock_charba_client_datalabels_enums_Anchor).m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_WHITE__org_pepstock_charba_client_colors_HtmlColor).m_setColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_GREEN__org_pepstock_charba_client_colors_HtmlColor).m_setBorderColor__org_pepstock_charba_client_colors_IsColor(color1).m_setBorderRadius__double(25).m_setBorderWidth__int(2).m_setFontWeight__org_pepstock_charba_client_enums_Weight(Weight.f_BOLD__org_pepstock_charba_client_enums_Weight).m_setFormatter__org_pepstock_charba_client_datalabels_callbacks_FormatterCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase(this)).m_getOptionsBuilder__();
  let option = builder.m_createLabel__java_lang_String("down").m_setAlign__org_pepstock_charba_client_datalabels_enums_Align(Align.f_CENTER__org_pepstock_charba_client_datalabels_enums_Align).m_setAnchor__org_pepstock_charba_client_datalabels_enums_Anchor(Anchor.f_START__org_pepstock_charba_client_datalabels_enums_Anchor).m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_WHITE__org_pepstock_charba_client_colors_HtmlColor).m_setColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_RED__org_pepstock_charba_client_colors_HtmlColor).m_setBorderColor__org_pepstock_charba_client_colors_IsColor(color1).m_setBorderRadius__double(25).m_setBorderWidth__int(2).m_setFontWeight__org_pepstock_charba_client_enums_Weight(Weight.f_BOLD__org_pepstock_charba_client_enums_Weight).m_setFormatter__org_pepstock_charba_client_datalabels_callbacks_FormatterCallback($2.$create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase(this)).m_getOptionsBuilder__().m_build__();
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, option);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    let values = this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite);
    let gaps = this.m_getRandomDigits__int__boolean(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, false);
    let barDataset = /**@type {BarDataset}*/ ($Casts.$to(dataset, BarDataset));
    let data = barDataset.m_getFloatingData__();
    for (let i = 0; i < this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite; i = i + 1 | 0) {
     let fData = /**@type {FloatingData}*/ ($Casts.$to(data.getAtIndex(i), FloatingData));
     fData.m_setValues__double__double(values[i], values[i] + Math.max(gaps[i], 20));
    }
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_ = BarChart.$create__();
 }
 
 static $clinit() {
  FloatingDataDataLabelsCase.$clinit = () =>{};
  FloatingDataDataLabelsCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FloatingDataDataLabelsCase;
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
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianCategoryAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  BarDataset = goog.module.get('org.pepstock.charba.client.data.BarDataset$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  FloatingData = goog.module.get('org.pepstock.charba.client.data.FloatingData$impl');
  DataLabelsOptionsBuilder = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsOptionsBuilder$impl');
  DataLabelsPlugin = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
  Align = goog.module.get('org.pepstock.charba.client.datalabels.enums.Align$impl');
  Anchor = goog.module.get('org.pepstock.charba.client.datalabels.enums.Anchor$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  DefaultPluginId = goog.module.get('org.pepstock.charba.client.enums.DefaultPluginId$impl');
  Weight = goog.module.get('org.pepstock.charba.client.enums.Weight$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FloatingDataDataLabelsCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FloatingDataDataLabelsCase.$2$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $double = goog.module.get('vmbootstrap.primitives.$double$impl');
 }
}
$Util.$setClassMetadata(FloatingDataDataLabelsCase, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FloatingDataDataLabelsCase");

exports = FloatingDataDataLabelsCase;

//# sourceMappingURL=FloatingDataDataLabelsCase.js.map
