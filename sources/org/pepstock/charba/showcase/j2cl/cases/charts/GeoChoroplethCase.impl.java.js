goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.GeoChoroplethCase$impl');

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
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let ChoroplethChart = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethChart$impl');
let ChoroplethDataPoint = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethDataPoint$impl');
let ChoroplethDataset = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethDataset$impl');
let Feature = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature$impl');
let GeoUtils = goog.forwardDeclare('org.pepstock.charba.client.geo.GeoUtils$impl');
let ProjectionAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.ProjectionAxis$impl');
let Projection = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.Projection$impl');
let App = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.App$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class GeoChoroplethCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_;
  /**@type {ChoroplethChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_;
  /**@type {ChoroplethDataset}*/
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_;
  /**@type {List<ChoroplethDataPoint>}*/
  this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_;
 }
 /** @return {!GeoChoroplethCase} */
 static $create__() {
  GeoChoroplethCase.$clinit();
  let $instance = new GeoChoroplethCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Earth choropleth chart"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_.m_getOptions__().m_setShowGraticule__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_.m_getOptions__().m_setShowOutline__boolean(true);
  let labels = GeoUtils.m_loadLabels__java_util_List__org_pepstock_charba_client_commons_Key(App.f_EARTH_FEATURES__org_pepstock_charba_showcase_j2cl_App, GeoChoroplethCase.f_NAME__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_);
  for (let $iterator = App.f_EARTH_FEATURES__org_pepstock_charba_showcase_j2cl_App.m_iterator__(); $iterator.m_hasNext__(); ) {
   let f = /**@type {Feature}*/ ($Casts.$to($iterator.m_next__(), Feature));
   {
    this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_.add(ChoroplethDataPoint.$create__org_pepstock_charba_client_geo_Feature__double(f, this.m_getRandomDigit__double__double(0, 100)));
   }
  }
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_ = /**@type {ChoroplethDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_.m_newDataset__(), ChoroplethDataset));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_.m_setLabel__java_lang_String("Countries");
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_.m_setValues__java_util_List(this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_);
  let axis1 = ProjectionAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_);
  axis1.m_setProjection__org_pepstock_charba_client_geo_enums_Projection(Projection.f_EQUAL_EARTH__org_pepstock_charba_client_geo_enums_Projection);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_.m_getData__().m_setLabels__org_pepstock_charba_client_data_Labels(labels);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let g = /**@type {ChoroplethDataPoint}*/ ($Casts.$to($iterator.m_next__(), ChoroplethDataPoint));
   {
    g.m_setValue__double(this.m_getRandomDigit__double__double(0, 100));
   }
  }
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_.m_setValues__java_util_List(this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_ = ChoroplethChart.$create__();
  this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_ = /**@type {!LinkedList<ChoroplethDataPoint>}*/ (LinkedList.$create__());
 }
 
 static $clinit() {
  GeoChoroplethCase.$clinit = () =>{};
  GeoChoroplethCase.$loadModules();
  BaseComposite.$clinit();
  GeoChoroplethCase.f_NAME__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_ = Key.m_create__java_lang_String("name");
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GeoChoroplethCase;
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
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  ChoroplethChart = goog.module.get('org.pepstock.charba.client.geo.ChoroplethChart$impl');
  ChoroplethDataPoint = goog.module.get('org.pepstock.charba.client.geo.ChoroplethDataPoint$impl');
  ChoroplethDataset = goog.module.get('org.pepstock.charba.client.geo.ChoroplethDataset$impl');
  Feature = goog.module.get('org.pepstock.charba.client.geo.Feature$impl');
  GeoUtils = goog.module.get('org.pepstock.charba.client.geo.GeoUtils$impl');
  ProjectionAxis = goog.module.get('org.pepstock.charba.client.geo.ProjectionAxis$impl');
  Projection = goog.module.get('org.pepstock.charba.client.geo.enums.Projection$impl');
  App = goog.module.get('org.pepstock.charba.showcase.j2cl.App$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Key}*/
GeoChoroplethCase.f_NAME__org_pepstock_charba_showcase_j2cl_cases_charts_GeoChoroplethCase_;
$Util.$setClassMetadata(GeoChoroplethCase, "org.pepstock.charba.showcase.j2cl.cases.charts.GeoChoroplethCase");

exports = GeoChoroplethCase;

//# sourceMappingURL=GeoChoroplethCase.js.map