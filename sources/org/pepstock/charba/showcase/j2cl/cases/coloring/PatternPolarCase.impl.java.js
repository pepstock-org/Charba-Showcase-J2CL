goog.module('org.pepstock.charba.showcase.j2cl.cases.coloring.PatternPolarCase$impl');

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
let PolarAreaChart = goog.forwardDeclare('org.pepstock.charba.client.PolarAreaChart$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let PatternBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.PatternBuilder$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let RadialAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.RadialAxis$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let PolarAreaDataset = goog.forwardDeclare('org.pepstock.charba.client.data.PolarAreaDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let CastHelper = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.CastHelper$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let Images = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.Images$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class PatternPolarCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_;
  /**@type {PolarAreaChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_;
 }
 /** @return {!PatternPolarCase} */
 static $create__() {
  PatternPolarCase.$clinit();
  let $instance = new PatternPolarCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_.m_getOptions__().m_setMaintainAspectRatio__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Applying a pattern on polar area chart dataset"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_.m_getOptions__().m_getTooltips__().m_setMode__org_pepstock_charba_client_enums_InteractionMode(InteractionMode.f_INDEX__org_pepstock_charba_client_enums_InteractionMode);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_.m_getOptions__().m_getTooltips__().m_setIntersect__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_.m_getOptions__().m_getHover__().m_setMode__org_pepstock_charba_client_enums_InteractionMode(InteractionMode.f_NEAREST__org_pepstock_charba_client_enums_InteractionMode);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_.m_getOptions__().m_getHover__().m_setIntersect__boolean(true);
  let dataset1 = /**@type {PolarAreaDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_.m_newDataset__(), PolarAreaDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  let pattern = PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_Img(CastHelper.m_toImg__java_lang_Object(Images.m_get__().f_pattern__org_pepstock_charba_showcase_j2cl_cases_commons_Images)).m_build__();
  let pattern1 = PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_Img(CastHelper.m_toImg__java_lang_Object(Images.m_get__().f_background__org_pepstock_charba_showcase_j2cl_cases_commons_Images)).m_build__();
  let pattern2 = PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_Img(CastHelper.m_toImg__java_lang_Object(Images.m_get__().f_patternHover__org_pepstock_charba_showcase_j2cl_cases_commons_Images)).m_build__();
  dataset1.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_Pattern(/**@type {!Array<Pattern>}*/ ($Arrays.$init([pattern, pattern1, pattern2], Pattern)));
  let values = this.m_getRandomDigits__int__double__double(PatternPolarCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_, 20, 100);
  dataset1.m_setData__arrayOf_double(values);
  dataset1.m_setBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([HtmlColor.f_DARK_GREY__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.f_DARK_GREY__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.f_BLACK__org_pepstock_charba_client_colors_HtmlColor], IsColor)));
  let axis = RadialAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_);
  axis.m_setBeginAtZero__boolean(true);
  axis.m_getGrid__().m_setCircular__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__int(PatternPolarCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int__double__double(PatternPolarCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_, 20, 100));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_ = PolarAreaChart.$create__();
 }
 
 static $clinit() {
  PatternPolarCase.$clinit = () =>{};
  PatternPolarCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PatternPolarCase;
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
  PolarAreaChart = goog.module.get('org.pepstock.charba.client.PolarAreaChart$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Pattern = goog.module.get('org.pepstock.charba.client.colors.Pattern$impl');
  PatternBuilder = goog.module.get('org.pepstock.charba.client.colors.PatternBuilder$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  RadialAxis = goog.module.get('org.pepstock.charba.client.configuration.RadialAxis$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  PolarAreaDataset = goog.module.get('org.pepstock.charba.client.data.PolarAreaDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  CastHelper = goog.module.get('org.pepstock.charba.client.dom.elements.CastHelper$impl');
  InteractionMode = goog.module.get('org.pepstock.charba.client.enums.InteractionMode$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  Images = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.commons.Images$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number}*/
PatternPolarCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternPolarCase_ = 3;
$Util.$setClassMetadata(PatternPolarCase, "org.pepstock.charba.showcase.j2cl.cases.coloring.PatternPolarCase");

exports = PatternPolarCase;

//# sourceMappingURL=PatternPolarCase.js.map
