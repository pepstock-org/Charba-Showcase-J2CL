goog.module('org.pepstock.charba.showcase.j2cl.views.HomeView$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let LineChart = goog.forwardDeclare('org.pepstock.charba.client.LineChart$impl');
let Color = goog.forwardDeclare('org.pepstock.charba.client.colors.Color$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianCategoryAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Unit = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.Unit$impl');
let DatasetSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetSelectionEvent$impl');
let ChartPointer = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointer$impl');
let ChartPointerOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointerOptions$impl');
let PointerElement = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.PointerElement$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.HomeView.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.HomeView.$2$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class HomeView extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_views_HomeView_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_views_HomeView_;
 }
 /** @return {!HomeView} */
 static $create__() {
  HomeView.$clinit();
  let $instance = new HomeView();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_HomeView__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_HomeView__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_views_HomeView();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_views_HomeView_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_views_HomeView_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_views_HomeView_.cellPadding = "12px";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_views_HomeView_.cellSpacing = "12px";
  let singleRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  singleRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_views_HomeView_.appendChild(singleRow);
  let closureCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  singleRow.appendChild(closureCol);
  closureCol.width = "30%";
  closureCol.style.textAlign = "center";
  let closureImg = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), HTMLImageElement_$Overlay));
  closureImg.src = "images/closurecompiler.png";
  closureCol.appendChild(closureImg);
  closureCol.appendChild(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("br"));
  let closureSpan = /**@type {HTMLElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("span"), HTMLElement_$Overlay));
  closureSpan.style.textAlign = "center";
  closureSpan.innerHTML = "J2CL";
  closureSpan.className = "hero-name";
  closureCol.appendChild(closureSpan);
  let midCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  singleRow.appendChild(midCol);
  midCol.width = "40%";
  midCol.style.textAlign = "center";
  let midSpan = /**@type {HTMLElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("span"), HTMLElement_$Overlay));
  midSpan.innerHTML = "<h1>J2CL meets Chart.JS</h1>" + "<h1>by CHARBA</h1>" + "<br/>" + "<p>CHARBA is a J2CL library which wraps Chart.JS to enable charts on your J2CL web application.</p>";
  midSpan.className = "hero-title";
  midCol.appendChild(midSpan);
  let cjsCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  singleRow.appendChild(cjsCol);
  cjsCol.width = "30%";
  cjsCol.style.textAlign = "center";
  let cjsImg = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), HTMLImageElement_$Overlay));
  cjsImg.src = "images/chartjs.png";
  cjsCol.appendChild(cjsImg);
  cjsCol.appendChild(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("br"));
  let cjsSpan = /**@type {HTMLElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("span"), HTMLElement_$Overlay));
  cjsSpan.innerHTML = "Chart.js";
  cjsSpan.className = "hero-name";
  cjsCol.appendChild(cjsSpan);
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_views_HomeView_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartCol.align = "middle";
  chartCol.colSpan = 3;
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_views_HomeView_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_views_HomeView_.m_getOptions__().m_setAspectRatio__double(2.5);
  this.f_chart__org_pepstock_charba_showcase_j2cl_views_HomeView_.m_getOptions__().m_setMaintainAspectRatio__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_views_HomeView_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_views_HomeView_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_views_HomeView_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Charba artifacts"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_views_HomeView_.m_getOptions__().m_getTooltips__().m_setEnabled__boolean(false);
  let datasetGwt = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_views_HomeView_.m_newDataset__(), LineDataset));
  datasetGwt.m_setLabel__java_lang_String("GWT");
  datasetGwt.m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(Color.f_CHARBA__org_pepstock_charba_client_colors_Color);
  datasetGwt.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(Color.f_CHARBA__org_pepstock_charba_client_colors_Color);
  datasetGwt.m_setBorderWidth__int(4);
  datasetGwt.m_setPointBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([HtmlColor.f_WHITE__org_pepstock_charba_client_colors_HtmlColor], IsColor)));
  datasetGwt.m_setPointBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([Color.f_CHARBA__org_pepstock_charba_client_colors_Color], IsColor)));
  datasetGwt.m_setPointBorderWidth__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([1], $int)));
  datasetGwt.m_setPointRadius__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([4], $double)));
  datasetGwt.m_setPointHoverRadius__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([4], $double)));
  datasetGwt.m_setPointHoverBorderWidth__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([1], $int)));
  datasetGwt.m_setPointHitRadius__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([4], $double)));
  datasetGwt.m_setFill__boolean(false);
  datasetGwt.m_setData__arrayOf_double(HomeView.f_VALUES_GWT__org_pepstock_charba_showcase_j2cl_views_HomeView_);
  let datasetJ2CL = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_views_HomeView_.m_newDataset__(), LineDataset));
  datasetJ2CL.m_setLabel__java_lang_String("J2CL");
  datasetJ2CL.m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_CORNFLOWER_BLUE__org_pepstock_charba_client_colors_HtmlColor);
  datasetJ2CL.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_CORNFLOWER_BLUE__org_pepstock_charba_client_colors_HtmlColor);
  datasetJ2CL.m_setBorderWidth__int(4);
  datasetJ2CL.m_setPointBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([HtmlColor.f_WHITE__org_pepstock_charba_client_colors_HtmlColor], IsColor)));
  datasetJ2CL.m_setPointBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([HtmlColor.f_CORNFLOWER_BLUE__org_pepstock_charba_client_colors_HtmlColor], IsColor)));
  datasetJ2CL.m_setPointBorderWidth__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([1], $int)));
  datasetJ2CL.m_setPointRadius__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([4], $double)));
  datasetJ2CL.m_setPointHoverRadius__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([4], $double)));
  datasetJ2CL.m_setPointHoverBorderWidth__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([1], $int)));
  datasetJ2CL.m_setPointHitRadius__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([4], $double)));
  datasetJ2CL.m_setFill__boolean(false);
  datasetJ2CL.m_setData__arrayOf_double(HomeView.f_VALUES_J2CL__org_pepstock_charba_showcase_j2cl_views_HomeView_);
  this.f_chart__org_pepstock_charba_showcase_j2cl_views_HomeView_.m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType($1.$create__org_pepstock_charba_showcase_j2cl_views_HomeView(this), DatasetSelectionEvent.f_TYPE__org_pepstock_charba_client_events_DatasetSelectionEvent);
  let axis1 = CartesianCategoryAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_views_HomeView_);
  axis1.m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Charba version"], j_l_String)));
  axis1.m_getTitle__().m_setColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_BLACK__org_pepstock_charba_client_colors_HtmlColor);
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_views_HomeView_);
  axis2.m_setDisplay__boolean(true);
  axis2.m_getGrid__().m_setZ__int(-1 | 0);
  axis2.m_getTicks__().m_setCallback__org_pepstock_charba_client_callbacks_TickCallback($2.$create__org_pepstock_charba_showcase_j2cl_views_HomeView(this));
  axis2.m_getTitle__().m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["JAR size"], j_l_String)));
  axis2.m_getTitle__().m_setColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_BLACK__org_pepstock_charba_client_colors_HtmlColor);
  this.f_chart__org_pepstock_charba_showcase_j2cl_views_HomeView_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1, axis2], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_views_HomeView_.m_getData__().m_setLabels__arrayOf_java_lang_String(HomeView.f_LABELS__org_pepstock_charba_showcase_j2cl_views_HomeView_);
  this.f_chart__org_pepstock_charba_showcase_j2cl_views_HomeView_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([datasetGwt, datasetJ2CL], Dataset)));
  let options = ChartPointerOptions.$create__();
  options.m_setElements__arrayOf_org_pepstock_charba_client_impl_plugins_enums_PointerElement(/**@type {!Array<PointerElement>}*/ ($Arrays.$init([PointerElement.f_DATASET__org_pepstock_charba_client_impl_plugins_enums_PointerElement, PointerElement.f_LEGEND__org_pepstock_charba_client_impl_plugins_enums_PointerElement], PointerElement)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_views_HomeView_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(ChartPointer.f_ID__org_pepstock_charba_client_impl_plugins_ChartPointer, options);
  this.f_chart__org_pepstock_charba_showcase_j2cl_views_HomeView_.m_getPlugins__().m_add__org_pepstock_charba_client_Plugin(ChartPointer.m_get__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_views_HomeView_.m_getChartElement__().style.width = Unit.f_PCT__org_pepstock_charba_client_dom_enums_Unit.m_format__int(70);
  let chartElement = /**@type {Element}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_views_HomeView_.m_getChartElement__()), Element_$Overlay));
  chartCol.appendChild(chartElement);
 }
 /** @override @return {HTMLElement} */
 m_getElement__() {
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_views_HomeView_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_views_HomeView() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_views_HomeView_ = LineChart.$create__();
 }
 
 static $clinit() {
  HomeView.$clinit = () =>{};
  HomeView.$loadModules();
  BaseComposite.$clinit();
  HomeView.f_LABELS__org_pepstock_charba_showcase_j2cl_views_HomeView_ = /**@type {!Array<?string>}*/ ($Arrays.$init(["1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "3.0", "3.1", "3.2", "3.3", "4.0", "4.1"], j_l_String));
  HomeView.f_VALUES_GWT__org_pepstock_charba_showcase_j2cl_views_HomeView_ = /**@type {!Array<number>}*/ ($Arrays.$init([746, 760, 763, 832, 861, 863, 1200, 1550, 1710, 1720, 1910, 1950, 2040, 2334, 2536, 3064, 3091, 3125, 3125, 4098, 4541], $double));
  HomeView.f_VALUES_J2CL__org_pepstock_charba_showcase_j2cl_views_HomeView_ = /**@type {!Array<number>}*/ ($Arrays.$init([Double.f_NaN__java_lang_Double, Double.f_NaN__java_lang_Double, Double.f_NaN__java_lang_Double, Double.f_NaN__java_lang_Double, Double.f_NaN__java_lang_Double, Double.f_NaN__java_lang_Double, Double.f_NaN__java_lang_Double, Double.f_NaN__java_lang_Double, Double.f_NaN__java_lang_Double, Double.f_NaN__java_lang_Double, Double.f_NaN__java_lang_Double, Double.f_NaN__java_lang_Double, Double.f_NaN__java_lang_Double, Double.f_NaN__java_lang_Double, 2536, 2881, 2910, 2941, 2942, 3933, 4336], $double));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HomeView;
 }
 
 static $loadModules() {
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LineChart = goog.module.get('org.pepstock.charba.client.LineChart$impl');
  Color = goog.module.get('org.pepstock.charba.client.colors.Color$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianCategoryAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Unit = goog.module.get('org.pepstock.charba.client.dom.enums.Unit$impl');
  DatasetSelectionEvent = goog.module.get('org.pepstock.charba.client.events.DatasetSelectionEvent$impl');
  ChartPointer = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointer$impl');
  ChartPointerOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointerOptions$impl');
  PointerElement = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.PointerElement$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.HomeView.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.HomeView.$2$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $double = goog.module.get('vmbootstrap.primitives.$double$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@const {?string}*/
HomeView.f_LINK_GITHUB_VERSION__org_pepstock_charba_showcase_j2cl_views_HomeView_ = "https://github.com/pepstock-org/Charba/releases/tag/";
/**@type {Array<?string>}*/
HomeView.f_LABELS__org_pepstock_charba_showcase_j2cl_views_HomeView_;
/**@type {Array<number>}*/
HomeView.f_VALUES_GWT__org_pepstock_charba_showcase_j2cl_views_HomeView_;
/**@type {Array<number>}*/
HomeView.f_VALUES_J2CL__org_pepstock_charba_showcase_j2cl_views_HomeView_;
$Util.$setClassMetadata(HomeView, "org.pepstock.charba.showcase.j2cl.views.HomeView");

exports = HomeView;

//# sourceMappingURL=HomeView.js.map
