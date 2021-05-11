goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.BackgroundRadialGradientPieCase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

let MarginRightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let PieChart = goog.forwardDeclare('org.pepstock.charba.client.PieChart$impl');
let GradientBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientBuilder$impl');
let GradientOrientation = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientOrientation$impl');
let GradientScope = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientScope$impl');
let GradientType = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientType$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let PieDataset = goog.forwardDeclare('org.pepstock.charba.client.data.PieDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let ChartBackgroundColor = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartBackgroundColor$impl');
let ChartBackgroundColorOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptions$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class BackgroundRadialGradientPieCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase_;
  /**@type {PieChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase_;
 }
 /** @return {!BackgroundRadialGradientPieCase} */
 static $create__() {
  BackgroundRadialGradientPieCase.$clinit();
  let $instance = new BackgroundRadialGradientPieCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Chart background plugin on pie chart"], j_l_String)));
  let dataset = /**@type {PieDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase_.m_newDataset__(), PieDataset));
  dataset.m_setLabel__java_lang_String("dataset 1");
  dataset.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(this.m_getSequenceColors__int__double(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, 1));
  dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, false));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset], Dataset)));
  let gradient = GradientBuilder.m_create__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope(GradientType.f_RADIAL__org_pepstock_charba_client_colors_GradientType, GradientOrientation.f_IN_OUT__org_pepstock_charba_client_colors_GradientOrientation, GradientScope.f_CANVAS__org_pepstock_charba_client_colors_GradientScope).m_addColorStop__double__org_pepstock_charba_client_colors_IsColor(1, HtmlColor.f_GRAY__org_pepstock_charba_client_colors_HtmlColor).m_addColorStop__double__org_pepstock_charba_client_colors_IsColor(0, HtmlColor.f_WHITE__org_pepstock_charba_client_colors_HtmlColor).m_build__();
  let option = ChartBackgroundColorOptions.$create__();
  option.m_setBackgroundColor__org_pepstock_charba_client_colors_Gradient(gradient);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(ChartBackgroundColor.f_ID__org_pepstock_charba_client_impl_plugins_ChartBackgroundColor, option);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase_.appendChild(actionsRow);
  let actionsCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  actionsCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  actionsCol.style.textAlign = "center";
  actionsCol.vAlign = "middle";
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String(actionsCol, "colspan", "2");
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_BackgroundRadialGradientPieCase_ = PieChart.$create__();
 }
 
 static $clinit() {
  BackgroundRadialGradientPieCase.$clinit = () =>{};
  BackgroundRadialGradientPieCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BackgroundRadialGradientPieCase;
 }
 
 static $loadModules() {
  MarginRightUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  PieChart = goog.module.get('org.pepstock.charba.client.PieChart$impl');
  GradientBuilder = goog.module.get('org.pepstock.charba.client.colors.GradientBuilder$impl');
  GradientOrientation = goog.module.get('org.pepstock.charba.client.colors.GradientOrientation$impl');
  GradientScope = goog.module.get('org.pepstock.charba.client.colors.GradientScope$impl');
  GradientType = goog.module.get('org.pepstock.charba.client.colors.GradientType$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  PieDataset = goog.module.get('org.pepstock.charba.client.data.PieDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  ChartBackgroundColor = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartBackgroundColor$impl');
  ChartBackgroundColorOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptions$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(BackgroundRadialGradientPieCase, "org.pepstock.charba.showcase.j2cl.cases.plugins.BackgroundRadialGradientPieCase");

exports = BackgroundRadialGradientPieCase;

//# sourceMappingURL=BackgroundRadialGradientPieCase.js.map
