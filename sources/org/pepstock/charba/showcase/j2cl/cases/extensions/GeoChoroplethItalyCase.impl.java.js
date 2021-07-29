goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethItalyCase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

let MarginRightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('elemental2.dom.Document.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let HTMLOptionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptionElement.$Overlay$impl');
let HTMLSelectElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLSelectElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let ChoroplethChart = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethChart$impl');
let ChoroplethDataPoint = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethDataPoint$impl');
let ChoroplethDataset = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethDataset$impl');
let ColorAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.ColorAxis$impl');
let Feature = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature$impl');
let GeoUtils = goog.forwardDeclare('org.pepstock.charba.client.geo.GeoUtils$impl');
let ProjectionAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.ProjectionAxis$impl');
let FeatureFilterCallback = goog.forwardDeclare('org.pepstock.charba.client.geo.callbacks.FeatureFilterCallback$impl');
let FeatureFindCallback = goog.forwardDeclare('org.pepstock.charba.client.geo.callbacks.FeatureFindCallback$impl');
let Interpolate = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.Interpolate$impl');
let Projection = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.Projection$impl');
let App = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.App$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class GeoChoroplethItalyCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_;
  /**@type {HTMLSelectElement}*/
  this.f_color__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_;
  /**@type {ChoroplethChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_;
  /**@type {ChoroplethDataset}*/
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_;
  /**@type {ColorAxis}*/
  this.f_axis2__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_;
  /**@type {List<ChoroplethDataPoint>}*/
  this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_;
 }
 /** @return {!GeoChoroplethItalyCase} */
 static $create__() {
  GeoChoroplethItalyCase.$clinit();
  let $instance = new GeoChoroplethItalyCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  let colorDefault = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  colorDefault.text = "Default";
  colorDefault.value = Interpolate.f_BLUES__org_pepstock_charba_client_geo_enums_Interpolate.name();
  this.f_color__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.add(colorDefault);
  for (let $array = Interpolate.m_values__(), $index = 0; $index < $array.length; $index++) {
   let interpolate = $array[$index];
   {
    let colorN = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
    colorN.text = interpolate.name();
    colorN.value = interpolate.name();
    this.f_color__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.add(colorN);
   }
  }
  let stateFeatures = GeoUtils.m_features__org_pepstock_charba_client_geo_TopoJson__java_lang_String__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback(App.f_ITALY__org_pepstock_charba_showcase_j2cl_App, "ITA_adm2", FeatureFilterCallback.$adapt((/** Feature */ element, /** number */ index) =>{
   return j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("Italy", element.m_getPropertyValue__org_pepstock_charba_client_commons_Key__java_lang_String(GeoChoroplethItalyCase.f_NAME0__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_, null));
  }));
  let outline = GeoUtils.m_feature__org_pepstock_charba_client_geo_TopoJson__java_lang_String__org_pepstock_charba_client_geo_callbacks_FeatureFindCallback(App.f_EUROPE__org_pepstock_charba_showcase_j2cl_App, "continent_Europe_subunits", FeatureFindCallback.$adapt((/** Feature */ element_1, /** number */ index_1) =>{
   return j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("Italy", element_1.m_getPropertyValue__org_pepstock_charba_client_commons_Key__java_lang_String(GeoChoroplethItalyCase.f_GEOUNIT__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_, null)) && element_1.m_hasGeometry__();
  }));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Italian provinces choropleth chart with selected interpolation"], j_l_String)));
  let labels = GeoUtils.m_loadLabels__java_util_List__org_pepstock_charba_client_commons_Key(stateFeatures, GeoChoroplethItalyCase.f_NAME2__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_);
  for (let $iterator = stateFeatures.m_iterator__(); $iterator.m_hasNext__(); ) {
   let f = /**@type {Feature}*/ ($Casts.$to($iterator.m_next__(), Feature));
   {
    this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.add(ChoroplethDataPoint.$create__org_pepstock_charba_client_geo_Feature__double(f, this.m_getRandomDigit__double__double(0, 100)));
   }
  }
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_ = /**@type {ChoroplethDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.m_newDataset__(), ChoroplethDataset));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.m_setLabel__java_lang_String("Italy");
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.m_setOutline__arrayOf_org_pepstock_charba_client_geo_Feature(/**@type {!Array<Feature>}*/ ($Arrays.$init([outline], Feature)));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.m_setValues__java_util_List(this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_);
  let axis1 = ProjectionAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_);
  axis1.m_setProjection__org_pepstock_charba_client_geo_enums_Projection(Projection.f_EQUAL_EARTH__org_pepstock_charba_client_geo_enums_Projection);
  this.f_axis2__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_ = ColorAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_);
  this.f_axis2__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.m_setInterpolate__org_pepstock_charba_client_geo_enums_Interpolate(Interpolate.f_BLUES__org_pepstock_charba_client_geo_enums_Interpolate);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1, this.f_axis2__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.m_getData__().m_setLabels__org_pepstock_charba_client_data_Labels(labels);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.appendChild(actionsRow);
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
  let colorId = "color" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForColor = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForColor.htmlFor = colorId;
  labelForColor.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Color "));
  actionsCol.appendChild(labelForColor);
  this.f_color__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.id = colorId;
  this.f_color__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.onchange = (/** Event */ p0_1) =>{
   this.m_handleColor__();
   return null;
  };
  this.f_color__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.className = "gwt-ListBox";
  this.f_color__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_color__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_);
  let github = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  github.onclick = (/** Event */ p0_2) =>{
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let g = /**@type {ChoroplethDataPoint}*/ ($Casts.$to($iterator.m_next__(), ChoroplethDataPoint));
   {
    g.m_setValue__double(this.m_getRandomDigit__double__double(0, 100));
   }
  }
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.m_setValues__java_util_List(this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.m_update__();
 }
 
 m_handleColor__() {
  let selected = /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_color__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.options, this.f_color__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.selectedIndex), HTMLOptionElement_$Overlay)).value;
  let interpolate = Interpolate.m_valueOf__java_lang_String(selected);
  this.f_axis2__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.m_setInterpolate__org_pepstock_charba_client_geo_enums_Interpolate(interpolate);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_.m_reconfigure__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase() {
  this.f_color__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_ = /**@type {HTMLSelectElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("select"), HTMLSelectElement_$Overlay));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_ = ChoroplethChart.$create__();
  this.f_geodata__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_ = /**@type {!LinkedList<ChoroplethDataPoint>}*/ (LinkedList.$create__());
 }
 
 static $clinit() {
  GeoChoroplethItalyCase.$clinit = () =>{};
  GeoChoroplethItalyCase.$loadModules();
  BaseComposite.$clinit();
  GeoChoroplethItalyCase.f_NAME0__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_ = Key.m_create__java_lang_String("NAME_0");
  GeoChoroplethItalyCase.f_NAME2__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_ = Key.m_create__java_lang_String("NAME_2");
  GeoChoroplethItalyCase.f_GEOUNIT__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_ = Key.m_create__java_lang_String("geounit");
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GeoChoroplethItalyCase;
 }
 
 static $loadModules() {
  MarginRightUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  Document_$Overlay = goog.module.get('elemental2.dom.Document.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  HTMLOptionElement_$Overlay = goog.module.get('elemental2.dom.HTMLOptionElement.$Overlay$impl');
  HTMLSelectElement_$Overlay = goog.module.get('elemental2.dom.HTMLSelectElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  ChoroplethChart = goog.module.get('org.pepstock.charba.client.geo.ChoroplethChart$impl');
  ChoroplethDataPoint = goog.module.get('org.pepstock.charba.client.geo.ChoroplethDataPoint$impl');
  ChoroplethDataset = goog.module.get('org.pepstock.charba.client.geo.ChoroplethDataset$impl');
  ColorAxis = goog.module.get('org.pepstock.charba.client.geo.ColorAxis$impl');
  Feature = goog.module.get('org.pepstock.charba.client.geo.Feature$impl');
  GeoUtils = goog.module.get('org.pepstock.charba.client.geo.GeoUtils$impl');
  ProjectionAxis = goog.module.get('org.pepstock.charba.client.geo.ProjectionAxis$impl');
  FeatureFilterCallback = goog.module.get('org.pepstock.charba.client.geo.callbacks.FeatureFilterCallback$impl');
  FeatureFindCallback = goog.module.get('org.pepstock.charba.client.geo.callbacks.FeatureFindCallback$impl');
  Interpolate = goog.module.get('org.pepstock.charba.client.geo.enums.Interpolate$impl');
  Projection = goog.module.get('org.pepstock.charba.client.geo.enums.Projection$impl');
  App = goog.module.get('org.pepstock.charba.showcase.j2cl.App$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@type {Key}*/
GeoChoroplethItalyCase.f_NAME0__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_;
/**@type {Key}*/
GeoChoroplethItalyCase.f_NAME2__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_;
/**@type {Key}*/
GeoChoroplethItalyCase.f_GEOUNIT__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethItalyCase_;
$Util.$setClassMetadata(GeoChoroplethItalyCase, "org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethItalyCase");

exports = GeoChoroplethItalyCase;

//# sourceMappingURL=GeoChoroplethItalyCase.js.map
