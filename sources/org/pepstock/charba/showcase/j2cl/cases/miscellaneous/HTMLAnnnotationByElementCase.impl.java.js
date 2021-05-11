goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.HTMLAnnnotationByElementCase$impl');

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
let BarChart = goog.forwardDeclare('org.pepstock.charba.client.BarChart$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let BarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let AxisPosition = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisPosition$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.HTMLAnnnotationByElementCase.$1$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class HTMLAnnnotationByElementCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_;
  /**@type {BarChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_;
  /**@type {BarDataset}*/
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_;
 }
 /** @return {!HTMLAnnnotationByElementCase} */
 static $create__() {
  HTMLAnnnotationByElementCase.$clinit();
  let $instance = new HTMLAnnnotationByElementCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["HTML annotation by HTML element on bar chart"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.m_getOptions__().m_getTooltips__().m_setMode__org_pepstock_charba_client_enums_InteractionMode(InteractionMode.f_INDEX__org_pepstock_charba_client_enums_InteractionMode);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.m_getOptions__().m_getTooltips__().m_setIntersect__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setTop__int(100);
  let axis1 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_);
  axis1.m_setPosition__org_pepstock_charba_client_enums_AxisPosition(AxisPosition.f_LEFT__org_pepstock_charba_client_enums_AxisPosition);
  axis1.m_setDisplay__boolean(true);
  axis1.m_setBeginAtZero__boolean(true);
  axis1.m_getTitle__().m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Percentage"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1], Axis)));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_ = /**@type {BarDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.m_newDataset__(), BarDataset));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.m_setLabel__java_lang_String("Humidity");
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.m_setData__arrayOf_double(this.m_getRandomDigits__int__double__double(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, 0, 75));
  let colors = /**@type {!Array<IsColor>}*/ ($Arrays.$create([this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite], IsColor));
  for (let i = 0; i < this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite; i = i + 1 | 0) {
   if (i == 3) {
    this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.m_getData__().setAtIndex(3, this.m_getRandomDigits__int__double__double(1, 85, 100)[0]);
    $Arrays.$set(colors, i, HtmlColor.f_RED__org_pepstock_charba_client_colors_HtmlColor);
   } else {
    $Arrays.$set(colors, i, HtmlColor.f_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor);
   }
  }
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(colors);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_], Dataset)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.m_getPlugins__().m_add__org_pepstock_charba_client_Plugin($1.$create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase__java_lang_String(this, "raster"));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_;
 }
 
 m_handleRandomize__() {
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.m_setData__arrayOf_double(this.m_getRandomDigits__int__double__double(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, 0, 75));
  let colors = /**@type {!Array<IsColor>}*/ ($Arrays.$create([this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite], IsColor));
  for (let i = 0; i < this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite; i = i + 1 | 0) {
   if (i == 3) {
    this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.m_getData__().setAtIndex(3, this.m_getRandomDigits__int__double__double(1, 85, 100)[0]);
    $Arrays.$set(colors, i, HtmlColor.f_RED__org_pepstock_charba_client_colors_HtmlColor);
   } else {
    $Arrays.$set(colors, i, HtmlColor.f_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor);
   }
  }
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(colors);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_ = BarChart.$create__();
 }
 
 static $clinit() {
  HTMLAnnnotationByElementCase.$clinit = () =>{};
  HTMLAnnnotationByElementCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLAnnnotationByElementCase;
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
  BarChart = goog.module.get('org.pepstock.charba.client.BarChart$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  BarDataset = goog.module.get('org.pepstock.charba.client.data.BarDataset$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  AxisPosition = goog.module.get('org.pepstock.charba.client.enums.AxisPosition$impl');
  InteractionMode = goog.module.get('org.pepstock.charba.client.enums.InteractionMode$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.HTMLAnnnotationByElementCase.$1$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(HTMLAnnnotationByElementCase, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.HTMLAnnnotationByElementCase");

exports = HTMLAnnnotationByElementCase;

//# sourceMappingURL=HTMLAnnnotationByElementCase.js.map
