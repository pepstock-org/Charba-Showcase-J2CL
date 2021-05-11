goog.module('org.pepstock.charba.showcase.j2cl.cases.coloring.PatternBubbleCase$impl');

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
let Random = goog.forwardDeclare('java.util.Random$impl');
let BubbleChart = goog.forwardDeclare('org.pepstock.charba.client.BubbleChart$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let PatternBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.PatternBuilder$impl');
let BubbleDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BubbleDataset$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let CastHelper = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.CastHelper$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let Images = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.Images$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class PatternBubbleCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_;
  /**@type {BubbleChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_;
 }
 /** @return {!PatternBubbleCase} */
 static $create__() {
  PatternBubbleCase.$clinit();
  let $instance = new PatternBubbleCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Applying a pattern on bubble chart dataset"], j_l_String)));
  let pattern = PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_Img(CastHelper.m_toImg__java_lang_Object(Images.m_get__().f_background__org_pepstock_charba_showcase_j2cl_cases_commons_Images)).m_build__();
  let pattern2 = PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_Img(CastHelper.m_toImg__java_lang_Object(Images.m_get__().f_patternHover__org_pepstock_charba_showcase_j2cl_cases_commons_Images)).m_build__();
  let dataset1 = /**@type {BubbleDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_.m_newDataset__(), BubbleDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  let patterns = /**@type {!Array<Pattern>}*/ ($Arrays.$create([PatternBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_], Pattern));
  let colors = /**@type {!Array<IsColor>}*/ ($Arrays.$create([PatternBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_], IsColor));
  let bwidth = /**@type {!Array<number>}*/ ($Arrays.$create([PatternBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_], $int));
  let dp1 = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([PatternBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_], DataPoint));
  for (let i = 0; i < PatternBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_; i = i + 1 | 0) {
   $Arrays.$set(dp1, i, DataPoint.$create__());
   dp1[i].m_setX__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase());
   dp1[i].m_setY__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase());
   dp1[i].m_setR__double(this.m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase(0, 50));
   $Arrays.$set(patterns, i, pattern);
   $Arrays.$set(colors, i, HtmlColor.f_DARK_GREY__org_pepstock_charba_client_colors_HtmlColor);
   $Arrays.$set(bwidth, i, Math.min(Math.max(1, i + 1 | 0), 5));
  }
  dataset1.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_Pattern(patterns);
  dataset1.m_setBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(colors);
  dataset1.m_setBorderWidth__arrayOf_int(bwidth);
  dataset1.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(dp1);
  let dataset2 = /**@type {BubbleDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_.m_newDataset__(), BubbleDataset));
  dataset2.m_setLabel__java_lang_String("dataset 2");
  let patterns2 = /**@type {!Array<Pattern>}*/ ($Arrays.$create([PatternBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_], Pattern));
  let colors2 = /**@type {!Array<IsColor>}*/ ($Arrays.$create([PatternBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_], IsColor));
  let bwidth2 = /**@type {!Array<number>}*/ ($Arrays.$create([PatternBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_], $int));
  let dp12 = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([PatternBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_], DataPoint));
  for (let i_1 = 0; i_1 < PatternBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_; i_1 = i_1 + 1 | 0) {
   $Arrays.$set(dp12, i_1, DataPoint.$create__());
   dp12[i_1].m_setX__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase());
   dp12[i_1].m_setY__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase());
   dp12[i_1].m_setR__double(this.m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase(0, 50));
   $Arrays.$set(patterns2, i_1, pattern2);
   $Arrays.$set(colors2, i_1, HtmlColor.f_BLACK__org_pepstock_charba_client_colors_HtmlColor);
   $Arrays.$set(bwidth2, i_1, Math.min(Math.max(1, i_1 + 1 | 0), 5));
  }
  dataset2.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_Pattern(patterns2);
  dataset2.m_setBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(colors2);
  dataset2.m_setBorderWidth__arrayOf_int(bwidth2);
  dataset2.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(dp12);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1, dataset2], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_;
 }
 /** @return {number} */
 m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase() {
  return this.m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase(PatternBubbleCase.f_MIN_XY__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_, PatternBubbleCase.f_MAX_XY__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_);
 }
 /** @return {number} */
 m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase(/** number */ min, /** number */ max) {
  let random = Random.$create__();
  return random.m_nextInt__int(max + 1 - min | 0) + min | 0;
 }
 
 m_handleRandomize__() {
  let bwidth = /**@type {!Array<number>}*/ ($Arrays.$create([PatternBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_], $int));
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    let bDataset = /**@type {BubbleDataset}*/ ($Casts.$to(dataset, BubbleDataset));
    let i = 0;
    for (let $iterator_1 = bDataset.m_getDataPoints__().m_iterator__(); $iterator_1.m_hasNext__(); ) {
     let dp = /**@type {DataPoint}*/ ($Casts.$to($iterator_1.m_next__(), DataPoint));
     {
      dp.m_setX__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase());
      dp.m_setY__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase());
      dp.m_setR__double(this.m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase(0, 50));
      $Arrays.$set(bwidth, i, Math.min(Math.max(1, i + 1 | 0), 5));
      i = i + 1 | 0;
     }
    }
    bDataset.m_setBorderWidth__arrayOf_int(bwidth);
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_ = BubbleChart.$create__();
 }
 
 static $clinit() {
  PatternBubbleCase.$clinit = () =>{};
  PatternBubbleCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PatternBubbleCase;
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
  Random = goog.module.get('java.util.Random$impl');
  BubbleChart = goog.module.get('org.pepstock.charba.client.BubbleChart$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Pattern = goog.module.get('org.pepstock.charba.client.colors.Pattern$impl');
  PatternBuilder = goog.module.get('org.pepstock.charba.client.colors.PatternBuilder$impl');
  BubbleDataset = goog.module.get('org.pepstock.charba.client.data.BubbleDataset$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  CastHelper = goog.module.get('org.pepstock.charba.client.dom.elements.CastHelper$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  Images = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.commons.Images$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@const {number}*/
PatternBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_ = 8;
/**@const {number}*/
PatternBubbleCase.f_MIN_XY__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_ = -150;
/**@const {number}*/
PatternBubbleCase.f_MAX_XY__org_pepstock_charba_showcase_j2cl_cases_coloring_PatternBubbleCase_ = 100;
$Util.$setClassMetadata(PatternBubbleCase, "org.pepstock.charba.showcase.j2cl.cases.coloring.PatternBubbleCase");

exports = PatternBubbleCase;

//# sourceMappingURL=PatternBubbleCase.js.map
