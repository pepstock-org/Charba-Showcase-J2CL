goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoBubbleMapDatalabelsCase$impl');

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
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let Labels = goog.forwardDeclare('org.pepstock.charba.client.data.Labels$impl');
let DataLabelsOptions = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
let DataLabelsPlugin = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
let org_pepstock_charba_client_datalabels_enums_Align = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Align$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');
let BubbleMapChart = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapChart$impl');
let BubbleMapDataPoint = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapDataPoint$impl');
let BubbleMapDataset = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapDataset$impl');
let Feature = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature$impl');
let GeoUtils = goog.forwardDeclare('org.pepstock.charba.client.geo.GeoUtils$impl');
let ProjectionAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.ProjectionAxis$impl');
let SizeAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.SizeAxis$impl');
let Align = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.Align$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.Position$impl');
let Projection = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.Projection$impl');
let App = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.App$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoBubbleMapDatalabelsCase.$1$impl');
let Capital = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoBubbleMapDatalabelsCase.Capital$impl');
let UScapitals = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.topojson.UScapitals$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class GeoBubbleMapDatalabelsCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_;
  /**@type {BubbleMapChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_;
  /**@type {BubbleMapDataset}*/
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_;
  /**@type {List<BubbleMapDataPoint>}*/
  this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_;
 }
 /** @return {!GeoBubbleMapDatalabelsCase} */
 static $create__() {
  GeoBubbleMapDatalabelsCase.$clinit();
  let $instance = new GeoBubbleMapDatalabelsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  if (GeoBubbleMapDatalabelsCase.f_CAPITALS__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.isEmpty()) {
   this.m_parseAndLoad___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase();
  }
  let stateFeatures = GeoUtils.m_features__org_pepstock_charba_client_geo_TopoJson__java_lang_String(App.f_US__org_pepstock_charba_showcase_j2cl_App, "states");
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["US bubble map chart"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.m_getOptions__().m_getElements__().m_getBubbleMapPoint__().m_setOutlineBorderColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_RED__org_pepstock_charba_client_colors_HtmlColor);
  let labels = Labels.m_build__();
  for (let $iterator = stateFeatures.m_iterator__(); $iterator.m_hasNext__(); ) {
   let f = /**@type {Feature}*/ ($Casts.$to($iterator.m_next__(), Feature));
   {
    let state = f.m_getStringProperty__org_pepstock_charba_client_commons_Key(GeoBubbleMapDatalabelsCase.f_NAME__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_);
    if (GeoBubbleMapDatalabelsCase.f_CAPITALS__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.containsKey(state)) {
     let c = /**@type {Capital}*/ ($Casts.$to(GeoBubbleMapDatalabelsCase.f_CAPITALS__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.get(state), Capital));
     labels.m_add__java_lang_String(c.f_capital__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_Capital_);
     this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.add(BubbleMapDataPoint.$create__double__double__double(c.f_latitude__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_Capital_, c.f_longitude__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_Capital_, this.m_getRandomDigit__double__double(0, 1000)));
    }
   }
  }
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_ = /**@type {BubbleMapDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.m_newDataset__(), BubbleMapDataset));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.m_setLabel__java_lang_String("States");
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.m_setOutline__java_util_List(stateFeatures);
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.m_setValues__java_util_List(this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_);
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([HtmlColor.f_LIGHT_CORAL__org_pepstock_charba_client_colors_HtmlColor], IsColor)));
  let axis1 = ProjectionAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_);
  axis1.m_setProjection__org_pepstock_charba_client_geo_enums_Projection(Projection.f_ALBERS_USA__org_pepstock_charba_client_geo_enums_Projection);
  let axis2 = SizeAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_);
  axis2.m_getLegend__().m_setAlign__org_pepstock_charba_client_geo_enums_Align(Align.f_RIGHT__org_pepstock_charba_client_geo_enums_Align);
  axis2.m_getLegend__().m_setPosition__org_pepstock_charba_client_geo_enums_Position(Position.f_BOTTOM_RIGHT__org_pepstock_charba_client_geo_enums_Position);
  axis2.m_setRange__int__int(1, 20);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1, axis2], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.m_getData__().m_setLabels__org_pepstock_charba_client_data_Labels(labels);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_], Dataset)));
  let option = DataLabelsOptions.$create__();
  option.m_setAlign__org_pepstock_charba_client_datalabels_enums_Align(org_pepstock_charba_client_datalabels_enums_Align.f_TOP__org_pepstock_charba_client_datalabels_enums_Align);
  option.m_setColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_BLACK__org_pepstock_charba_client_colors_HtmlColor);
  option.m_getFont__().m_setWeight__org_pepstock_charba_client_enums_Weight(Weight.f_BOLD__org_pepstock_charba_client_enums_Weight);
  option.m_setFormatter__org_pepstock_charba_client_datalabels_callbacks_FormatterCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase(this));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, option);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let g = /**@type {BubbleMapDataPoint}*/ ($Casts.$to($iterator.m_next__(), BubbleMapDataPoint));
   {
    g.m_setValue__double(this.m_getRandomDigit__double__double(0, 1000));
   }
  }
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.m_setValues__java_util_List(this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.m_update__();
 }
 
 m_parseAndLoad___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase() {
  let records = j_l_String.m_split__java_lang_String__java_lang_String(GeoBubbleMapDatalabelsCase.f_US_CAPITALS_FILE__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.m_getContent__(), "\n");
  for (let i = 1; i < records.length; i = i + 1 | 0) {
   let c = Capital.$create__java_lang_String(records[i]);
   GeoBubbleMapDatalabelsCase.f_CAPITALS__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_.put(c.f_state__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_Capital_, c);
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_ = BubbleMapChart.$create__();
  this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_ = /**@type {!LinkedList<BubbleMapDataPoint>}*/ (LinkedList.$create__());
 }
 
 static $clinit() {
  GeoBubbleMapDatalabelsCase.$clinit = () =>{};
  GeoBubbleMapDatalabelsCase.$loadModules();
  BaseComposite.$clinit();
  GeoBubbleMapDatalabelsCase.f_US_CAPITALS_FILE__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_ = UScapitals.$create__();
  GeoBubbleMapDatalabelsCase.f_CAPITALS__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_ = /**@type {!HashMap<?string, Capital>}*/ (HashMap.$create__());
  GeoBubbleMapDatalabelsCase.f_NAME__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_ = Key.m_create__java_lang_String("name");
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GeoBubbleMapDatalabelsCase;
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
  HashMap = goog.module.get('java.util.HashMap$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  Labels = goog.module.get('org.pepstock.charba.client.data.Labels$impl');
  DataLabelsOptions = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
  DataLabelsPlugin = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
  org_pepstock_charba_client_datalabels_enums_Align = goog.module.get('org.pepstock.charba.client.datalabels.enums.Align$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Weight = goog.module.get('org.pepstock.charba.client.enums.Weight$impl');
  BubbleMapChart = goog.module.get('org.pepstock.charba.client.geo.BubbleMapChart$impl');
  BubbleMapDataPoint = goog.module.get('org.pepstock.charba.client.geo.BubbleMapDataPoint$impl');
  BubbleMapDataset = goog.module.get('org.pepstock.charba.client.geo.BubbleMapDataset$impl');
  Feature = goog.module.get('org.pepstock.charba.client.geo.Feature$impl');
  GeoUtils = goog.module.get('org.pepstock.charba.client.geo.GeoUtils$impl');
  ProjectionAxis = goog.module.get('org.pepstock.charba.client.geo.ProjectionAxis$impl');
  SizeAxis = goog.module.get('org.pepstock.charba.client.geo.SizeAxis$impl');
  Align = goog.module.get('org.pepstock.charba.client.geo.enums.Align$impl');
  Position = goog.module.get('org.pepstock.charba.client.geo.enums.Position$impl');
  Projection = goog.module.get('org.pepstock.charba.client.geo.enums.Projection$impl');
  App = goog.module.get('org.pepstock.charba.showcase.j2cl.App$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoBubbleMapDatalabelsCase.$1$impl');
  Capital = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoBubbleMapDatalabelsCase.Capital$impl');
  UScapitals = goog.module.get('org.pepstock.charba.showcase.j2cl.topojson.UScapitals$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {UScapitals}*/
GeoBubbleMapDatalabelsCase.f_US_CAPITALS_FILE__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_;
/**@type {Map<?string, Capital>}*/
GeoBubbleMapDatalabelsCase.f_CAPITALS__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_;
/**@type {Key}*/
GeoBubbleMapDatalabelsCase.f_NAME__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoBubbleMapDatalabelsCase_;
$Util.$setClassMetadata(GeoBubbleMapDatalabelsCase, "org.pepstock.charba.showcase.j2cl.cases.extensions.GeoBubbleMapDatalabelsCase");

exports = GeoBubbleMapDatalabelsCase;

//# sourceMappingURL=GeoBubbleMapDatalabelsCase.js.map
