goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethSelectCountryCase$impl');

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
let DatasetSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetSelectionEvent$impl');
let ChoroplethChart = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethChart$impl');
let ChoroplethDataPoint = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethDataPoint$impl');
let ChoroplethDataset = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethDataset$impl');
let Feature = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature$impl');
let GeoUtils = goog.forwardDeclare('org.pepstock.charba.client.geo.GeoUtils$impl');
let ProjectionAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.ProjectionAxis$impl');
let Projection = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.Projection$impl');
let ChartPointer = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointer$impl');
let App = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.App$impl');
let LogView = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.LogView$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethSelectCountryCase.$1$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class GeoChoroplethSelectCountryCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_;
  /**@type {LogView}*/
  this.f_mylog__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_;
  /**@type {ChoroplethChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_;
  /**@type {ChoroplethDataset}*/
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_;
  /**@type {List<ChoroplethDataPoint>}*/
  this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_;
 }
 /** @return {!GeoChoroplethSelectCountryCase} */
 static $create__() {
  GeoChoroplethSelectCountryCase.$clinit();
  let $instance = new GeoChoroplethSelectCountryCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.m_getOptions__().m_setAspectRatio__double(2.5);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Earth choropleth chart"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType($1.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase(this), DatasetSelectionEvent.f_TYPE__org_pepstock_charba_client_events_DatasetSelectionEvent);
  let labels = GeoUtils.m_loadLabels__java_util_List__org_pepstock_charba_client_commons_Key(App.f_EARTH_FEATURES__org_pepstock_charba_showcase_j2cl_App, GeoChoroplethSelectCountryCase.$static_NAME__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_);
  for (let $iterator = App.f_EARTH_FEATURES__org_pepstock_charba_showcase_j2cl_App.m_iterator__(); $iterator.m_hasNext__(); ) {
   let f = /**@type {Feature}*/ ($Casts.$to($iterator.m_next__(), Feature));
   {
    this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.add(ChoroplethDataPoint.$create__org_pepstock_charba_client_geo_Feature__double(f, this.m_getRandomDigit__double__double(0, 100)));
   }
  }
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_ = /**@type {ChoroplethDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.m_newDataset__(), ChoroplethDataset));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.m_setLabel__java_lang_String("Countries");
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.m_setValues__java_util_List(this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_);
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.m_setShowOutline__boolean(true);
  let axis1 = ProjectionAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_);
  axis1.m_setProjection__org_pepstock_charba_client_geo_enums_Projection(Projection.f_EQUAL_EARTH__org_pepstock_charba_client_geo_enums_Projection);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.m_getData__().m_setLabels__org_pepstock_charba_client_data_Labels(labels);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_], Dataset)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.m_getPlugins__().m_add__org_pepstock_charba_client_Plugin(ChartPointer.m_get__());
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.appendChild(actionsRow);
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
  let logRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  logRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.appendChild(logRow);
  let logCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  logCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  logCol.style.textAlign = "center";
  logCol.vAlign = "top";
  logRow.appendChild(logCol);
  logCol.appendChild(this.f_mylog__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.m_getElement__());
 }
 /** @override @return {HTMLElement} */
 m_getElement__() {
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let g = /**@type {ChoroplethDataPoint}*/ ($Casts.$to($iterator.m_next__(), ChoroplethDataPoint));
   {
    g.m_setValue__double(this.m_getRandomDigit__double__double(0, 100));
   }
  }
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.m_setValues__java_util_List(this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase() {
  this.f_mylog__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_ = LogView.$create__();
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_ = ChoroplethChart.$create__();
  this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_ = /**@type {!LinkedList<ChoroplethDataPoint>}*/ (LinkedList.$create__());
 }
 /** @return {Key} */
 static get f_NAME__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_() {
  return (GeoChoroplethSelectCountryCase.$clinit(), GeoChoroplethSelectCountryCase.$static_NAME__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_);
 }
 
 static $clinit() {
  GeoChoroplethSelectCountryCase.$clinit = () =>{};
  GeoChoroplethSelectCountryCase.$loadModules();
  BaseComposite.$clinit();
  GeoChoroplethSelectCountryCase.$static_NAME__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_ = Key.m_create__java_lang_String("name");
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GeoChoroplethSelectCountryCase;
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
  DatasetSelectionEvent = goog.module.get('org.pepstock.charba.client.events.DatasetSelectionEvent$impl');
  ChoroplethChart = goog.module.get('org.pepstock.charba.client.geo.ChoroplethChart$impl');
  ChoroplethDataPoint = goog.module.get('org.pepstock.charba.client.geo.ChoroplethDataPoint$impl');
  ChoroplethDataset = goog.module.get('org.pepstock.charba.client.geo.ChoroplethDataset$impl');
  Feature = goog.module.get('org.pepstock.charba.client.geo.Feature$impl');
  GeoUtils = goog.module.get('org.pepstock.charba.client.geo.GeoUtils$impl');
  ProjectionAxis = goog.module.get('org.pepstock.charba.client.geo.ProjectionAxis$impl');
  Projection = goog.module.get('org.pepstock.charba.client.geo.enums.Projection$impl');
  ChartPointer = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointer$impl');
  App = goog.module.get('org.pepstock.charba.showcase.j2cl.App$impl');
  LogView = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.commons.LogView$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethSelectCountryCase.$1$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {Key}*/
GeoChoroplethSelectCountryCase.$static_NAME__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_;
$Util.$setClassMetadata(GeoChoroplethSelectCountryCase, "org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethSelectCountryCase");

exports = GeoChoroplethSelectCountryCase;

//# sourceMappingURL=GeoChoroplethSelectCountryCase.js.map
