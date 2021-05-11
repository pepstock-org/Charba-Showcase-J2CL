goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsLinearGradientLineCase$impl');

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
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let GradientBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientBuilder$impl');
let GradientOrientation = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientOrientation$impl');
let GradientScope = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientScope$impl');
let GradientType = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientType$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianCategoryAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let DataLabelsOptions = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
let DataLabelsPlugin = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
let Align = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Align$impl');
let Anchor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Anchor$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let DefaultPluginId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultPluginId$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsLinearGradientLineCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsLinearGradientLineCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsLinearGradientLineCase.$3$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');

class DataLabelsLinearGradientLineCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_;
 }
 /** @return {!DataLabelsLinearGradientLineCase} */
 static $create__() {
  DataLabelsLinearGradientLineCase.$clinit();
  let $instance = new DataLabelsLinearGradientLineCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.m_getOptions__().m_getTooltips__().m_setEnabled__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setTop__int(64);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setRight__int(32);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setBottom__int(32);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setLeft__int(8);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.m_getOptions__().m_getPlugins__().m_setEnabled__org_pepstock_charba_client_enums_DefaultPluginId__boolean(DefaultPluginId.f_LEGEND__org_pepstock_charba_client_enums_DefaultPluginId, false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.m_getOptions__().m_getPlugins__().m_setEnabled__org_pepstock_charba_client_enums_DefaultPluginId__boolean(DefaultPluginId.f_TITLE__org_pepstock_charba_client_enums_DefaultPluginId, false);
  let dataset1 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.m_newDataset__(), LineDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  let gradient1 = GradientBuilder.m_create__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope(GradientType.f_LINEAR__org_pepstock_charba_client_colors_GradientType, GradientOrientation.f_LEFT_RIGHT__org_pepstock_charba_client_colors_GradientOrientation, GradientScope.f_CHART__org_pepstock_charba_client_colors_GradientScope).m_addColorStop__double__org_pepstock_charba_client_colors_IsColor(1, HtmlColor.f_PURPLE__org_pepstock_charba_client_colors_HtmlColor).m_addColorStop__double__org_pepstock_charba_client_colors_IsColor(0, HtmlColor.f_ORANGE__org_pepstock_charba_client_colors_HtmlColor).m_build__();
  dataset1.m_setBackgroundColor__org_pepstock_charba_client_colors_Gradient(gradient1);
  dataset1.m_setBorderColor__org_pepstock_charba_client_colors_Gradient(gradient1);
  dataset1.m_setPointBackgroundColor__arrayOf_org_pepstock_charba_client_colors_Gradient(/**@type {!Array<Gradient>}*/ ($Arrays.$init([gradient1], Gradient)));
  dataset1.m_setPointHoverBackgroundColor__arrayOf_org_pepstock_charba_client_colors_Gradient(/**@type {!Array<Gradient>}*/ ($Arrays.$init([gradient1], Gradient)));
  dataset1.m_setPointHoverBorderColor__arrayOf_org_pepstock_charba_client_colors_Gradient(/**@type {!Array<Gradient>}*/ ($Arrays.$init([gradient1], Gradient)));
  dataset1.m_setPointRadius__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([5], $double)));
  let values = this.m_getRandomDigits__int__boolean(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, false);
  dataset1.m_setData__arrayOf_double(values);
  dataset1.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  let axis1 = CartesianCategoryAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_);
  axis1.m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Month"], j_l_String)));
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_);
  axis2.m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Value"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1, axis2], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1], Dataset)));
  let option = DataLabelsOptions.$create__();
  option.m_setAlign__org_pepstock_charba_client_datalabels_enums_Align(Align.f_END__org_pepstock_charba_client_datalabels_enums_Align);
  option.m_setAnchor__org_pepstock_charba_client_datalabels_enums_Anchor(Anchor.f_END__org_pepstock_charba_client_datalabels_enums_Anchor);
  option.m_setBorderRadius__double(4);
  option.m_setBorderWidth__int(4);
  option.m_setColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_WHITE__org_pepstock_charba_client_colors_HtmlColor);
  option.m_getFont__().m_setWeight__org_pepstock_charba_client_enums_Weight(Weight.f_BOLD__org_pepstock_charba_client_enums_Weight);
  option.m_getFont__().m_setSize__int(11);
  option.m_setOffset__int(4);
  option.m_getPadding__().m_set__int(8);
  option.m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase(this));
  option.m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback($2.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase(this));
  option.m_setFormatter__org_pepstock_charba_client_datalabels_callbacks_FormatterCallback($3.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase(this));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, option);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, false));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.m_update__();
 }
 
 m_handleAddData__() {
  this.m_addData__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_);
 }
 
 m_handleRemoveData__() {
  this.m_removeData__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_);
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_ = LineChart.$create__();
 }
 
 static $clinit() {
  DataLabelsLinearGradientLineCase.$clinit = () =>{};
  DataLabelsLinearGradientLineCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataLabelsLinearGradientLineCase;
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
  Gradient = goog.module.get('org.pepstock.charba.client.colors.Gradient$impl');
  GradientBuilder = goog.module.get('org.pepstock.charba.client.colors.GradientBuilder$impl');
  GradientOrientation = goog.module.get('org.pepstock.charba.client.colors.GradientOrientation$impl');
  GradientScope = goog.module.get('org.pepstock.charba.client.colors.GradientScope$impl');
  GradientType = goog.module.get('org.pepstock.charba.client.colors.GradientType$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianCategoryAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  DataLabelsOptions = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
  DataLabelsPlugin = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
  Align = goog.module.get('org.pepstock.charba.client.datalabels.enums.Align$impl');
  Anchor = goog.module.get('org.pepstock.charba.client.datalabels.enums.Anchor$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  DefaultPluginId = goog.module.get('org.pepstock.charba.client.enums.DefaultPluginId$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  Weight = goog.module.get('org.pepstock.charba.client.enums.Weight$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsLinearGradientLineCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsLinearGradientLineCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsLinearGradientLineCase.$3$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $double = goog.module.get('vmbootstrap.primitives.$double$impl');
 }
}
$Util.$setClassMetadata(DataLabelsLinearGradientLineCase, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsLinearGradientLineCase");

exports = DataLabelsLinearGradientLineCase;

//# sourceMappingURL=DataLabelsLinearGradientLineCase.js.map
