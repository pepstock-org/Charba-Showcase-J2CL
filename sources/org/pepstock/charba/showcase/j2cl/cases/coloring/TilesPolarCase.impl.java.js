goog.module('org.pepstock.charba.showcase.j2cl.cases.coloring.TilesPolarCase$impl');

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
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let Shape = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Shape$impl');
let TilesFactory = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.TilesFactory$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let PolarAreaDataset = goog.forwardDeclare('org.pepstock.charba.client.data.PolarAreaDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TilesPolarCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_;
  /**@type {PolarAreaChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_;
 }
 /** @return {!TilesPolarCase} */
 static $create__() {
  TilesPolarCase.$clinit();
  let $instance = new TilesPolarCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  let tiles = /**@type {!Array<Pattern>}*/ ($Arrays.$create([TilesPolarCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_], Pattern));
  for (let i = 0; i < TilesPolarCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_; i = i + 1 | 0) {
   let p = TilesFactory.m_createPattern__org_pepstock_charba_client_colors_tiles_IsShape__org_pepstock_charba_client_colors_IsColor(Shape.m_values__()[i], GoogleChartColor.m_values__()[i]);
   $Arrays.$set(tiles, i, p);
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Using tiles on polar area chart datasets"], j_l_String)));
  let dataset = /**@type {PolarAreaDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_.m_newDataset__(), PolarAreaDataset));
  dataset.m_setLabel__java_lang_String("dataset 1");
  dataset.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_Pattern(tiles);
  dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(TilesPolarCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_, false));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__int(TilesPolarCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(TilesPolarCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_, false));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_ = PolarAreaChart.$create__();
 }
 
 static $clinit() {
  TilesPolarCase.$clinit = () =>{};
  TilesPolarCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TilesPolarCase;
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
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Pattern = goog.module.get('org.pepstock.charba.client.colors.Pattern$impl');
  Shape = goog.module.get('org.pepstock.charba.client.colors.tiles.Shape$impl');
  TilesFactory = goog.module.get('org.pepstock.charba.client.colors.tiles.TilesFactory$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  PolarAreaDataset = goog.module.get('org.pepstock.charba.client.data.PolarAreaDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number}*/
TilesPolarCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPolarCase_ = 6;
$Util.$setClassMetadata(TilesPolarCase, "org.pepstock.charba.showcase.j2cl.cases.coloring.TilesPolarCase");

exports = TilesPolarCase;

//# sourceMappingURL=TilesPolarCase.js.map
