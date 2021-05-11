goog.module('org.pepstock.charba.showcase.j2cl.cases.coloring.TilesImagesCase$impl');

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
let DoughnutChart = goog.forwardDeclare('org.pepstock.charba.client.DoughnutChart$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let ImageShape = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.ImageShape$impl');
let TilesFactory = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.TilesFactory$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let DoughnutDataset = goog.forwardDeclare('org.pepstock.charba.client.data.DoughnutDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let CastHelper = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.CastHelper$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let Images = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.Images$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TilesImagesCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_;
  /**@type {DoughnutChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_;
 }
 /** @return {!TilesImagesCase} */
 static $create__() {
  TilesImagesCase.$clinit();
  let $instance = new TilesImagesCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  let imgShapes = /**@type {!Array<ImageShape>}*/ ($Arrays.$init([ImageShape.$create__org_pepstock_charba_client_dom_elements_Img(CastHelper.m_toImg__java_lang_Object(Images.m_get__().f_cache__org_pepstock_charba_showcase_j2cl_cases_commons_Images)), ImageShape.$create__org_pepstock_charba_client_dom_elements_Img(CastHelper.m_toImg__java_lang_Object(Images.m_get__().f_extensionWhite__org_pepstock_charba_showcase_j2cl_cases_commons_Images)), ImageShape.$create__org_pepstock_charba_client_dom_elements_Img(CastHelper.m_toImg__java_lang_Object(Images.m_get__().f_fingerprintWhite__org_pepstock_charba_showcase_j2cl_cases_commons_Images)), ImageShape.$create__org_pepstock_charba_client_dom_elements_Img(CastHelper.m_toImg__java_lang_Object(Images.m_get__().f_headlineWhite__org_pepstock_charba_showcase_j2cl_cases_commons_Images)), ImageShape.$create__org_pepstock_charba_client_dom_elements_Img(CastHelper.m_toImg__java_lang_Object(Images.m_get__().f_visibilityWhite__org_pepstock_charba_showcase_j2cl_cases_commons_Images))], ImageShape));
  let tiles = /**@type {!Array<Pattern>}*/ ($Arrays.$create([TilesImagesCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_], Pattern));
  for (let i = 0; i < TilesImagesCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_; i = i + 1 | 0) {
   let p = TilesFactory.m_createPattern__org_pepstock_charba_client_colors_tiles_IsShape__org_pepstock_charba_client_colors_IsColor(imgShapes[i], GoogleChartColor.m_values__()[i]);
   $Arrays.$set(tiles, i, p);
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Using tiles on doughnut chart datasets"], j_l_String)));
  let dataset = /**@type {DoughnutDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_.m_newDataset__(), DoughnutDataset));
  dataset.m_setLabel__java_lang_String("dataset 1");
  dataset.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_Pattern(tiles);
  dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(TilesImagesCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_, false));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__int(TilesImagesCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(TilesImagesCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_, false));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_ = DoughnutChart.$create__();
 }
 
 static $clinit() {
  TilesImagesCase.$clinit = () =>{};
  TilesImagesCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TilesImagesCase;
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
  DoughnutChart = goog.module.get('org.pepstock.charba.client.DoughnutChart$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Pattern = goog.module.get('org.pepstock.charba.client.colors.Pattern$impl');
  ImageShape = goog.module.get('org.pepstock.charba.client.colors.tiles.ImageShape$impl');
  TilesFactory = goog.module.get('org.pepstock.charba.client.colors.tiles.TilesFactory$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  DoughnutDataset = goog.module.get('org.pepstock.charba.client.data.DoughnutDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  CastHelper = goog.module.get('org.pepstock.charba.client.dom.elements.CastHelper$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  Images = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.commons.Images$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number}*/
TilesImagesCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesImagesCase_ = 5;
$Util.$setClassMetadata(TilesImagesCase, "org.pepstock.charba.showcase.j2cl.cases.coloring.TilesImagesCase");

exports = TilesImagesCase;

//# sourceMappingURL=TilesImagesCase.js.map
