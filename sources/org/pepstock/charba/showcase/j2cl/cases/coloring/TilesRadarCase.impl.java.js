goog.module('org.pepstock.charba.showcase.j2cl.cases.coloring.TilesRadarCase$impl');

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
let RadarChart = goog.forwardDeclare('org.pepstock.charba.client.RadarChart$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let Shape = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Shape$impl');
let TilesFactory = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.TilesFactory$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let RadarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.RadarDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TilesRadarCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_;
  /**@type {RadarChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_;
  /**@type {Random}*/
  this.f_random__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_;
 }
 /** @return {!TilesRadarCase} */
 static $create__() {
  TilesRadarCase.$clinit();
  let $instance = new TilesRadarCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  let index = this.m_getIndex__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase(0, Shape.m_values__().length - 1 | 0);
  let p = TilesFactory.m_createPattern__org_pepstock_charba_client_colors_tiles_IsShape__org_pepstock_charba_client_colors_IsColor(Shape.m_values__()[index], GoogleChartColor.m_values__()[1]);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Using tiles on radar chart datasets"], j_l_String)));
  let dataset1 = /**@type {RadarDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_.m_newDataset__(), RadarDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  dataset1.m_setBackgroundColor__org_pepstock_charba_client_colors_Pattern(p);
  dataset1.m_setData__arrayOf_double(this.m_getFixedDigits__int(TilesRadarCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__int(TilesRadarCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    let dataset1 = /**@type {RadarDataset}*/ ($Casts.$to(dataset, RadarDataset));
    dataset1.m_setData__arrayOf_double(this.m_getRandomDigits__int(TilesRadarCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_));
    let index = this.m_getIndex__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase(0, Shape.m_values__().length - 1 | 0);
    let p = TilesFactory.m_createPattern__org_pepstock_charba_client_colors_tiles_IsShape__org_pepstock_charba_client_colors_IsColor(Shape.m_values__()[index], GoogleChartColor.m_values__()[1]);
    dataset1.m_setBackgroundColor__org_pepstock_charba_client_colors_Pattern(p);
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_.m_update__();
 }
 /** @return {number} */
 m_getIndex__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase(/** number */ min, /** number */ max) {
  return this.f_random__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_.m_nextInt__int(max + 1 - min | 0) + min | 0;
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_ = RadarChart.$create__();
  this.f_random__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_ = Random.$create__();
 }
 
 static $clinit() {
  TilesRadarCase.$clinit = () =>{};
  TilesRadarCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TilesRadarCase;
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
  RadarChart = goog.module.get('org.pepstock.charba.client.RadarChart$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Shape = goog.module.get('org.pepstock.charba.client.colors.tiles.Shape$impl');
  TilesFactory = goog.module.get('org.pepstock.charba.client.colors.tiles.TilesFactory$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  RadarDataset = goog.module.get('org.pepstock.charba.client.data.RadarDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number}*/
TilesRadarCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesRadarCase_ = 10;
$Util.$setClassMetadata(TilesRadarCase, "org.pepstock.charba.showcase.j2cl.cases.coloring.TilesRadarCase");

exports = TilesRadarCase;

//# sourceMappingURL=TilesRadarCase.js.map
