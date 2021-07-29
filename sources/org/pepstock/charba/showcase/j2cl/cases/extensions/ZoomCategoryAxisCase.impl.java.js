goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCategoryAxisCase$impl');

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
let BarChart = goog.forwardDeclare('org.pepstock.charba.client.BarChart$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianCategoryAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
let BarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let InteractionAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionAxis$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let ZoomOptions = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomOptions$impl');
let ZoomPlugin = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class ZoomCategoryAxisCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_;
  /**@type {BarChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_;
 }
 /** @return {!ZoomCategoryAxisCase} */
 static $create__() {
  ZoomCategoryAxisCase.$clinit();
  let $instance = new ZoomCategoryAxisCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Zoom on cartesian category axis"], j_l_String)));
  let dataset1 = /**@type {BarDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_.m_newDataset__(), BarDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  let color1 = GoogleChartColor.m_values__()[6];
  dataset1.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([color1.m_alpha__double(0.2)], IsColor)));
  dataset1.m_setBorderColor__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([color1.m_toHex__()], j_l_String)));
  dataset1.m_setBorderWidth__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([1], $int)));
  dataset1.m_setData__arrayOf_double(this.m_getRandomDigits__int__double__double(ZoomCategoryAxisCase.f_AMOUNT__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_, -100 | 0, 100));
  let dataset2 = /**@type {BarDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_.m_newDataset__(), BarDataset));
  dataset2.m_setLabel__java_lang_String("dataset 2");
  let color2 = GoogleChartColor.m_values__()[4];
  dataset2.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([color2.m_alpha__double(0.2)], IsColor)));
  dataset2.m_setBorderColor__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([color2.m_toHex__()], j_l_String)));
  dataset2.m_setBorderWidth__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([1], $int)));
  dataset2.m_setData__arrayOf_double(this.m_getRandomDigits__int__double__double(ZoomCategoryAxisCase.f_AMOUNT__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_, -100 | 0, 100));
  let axis1 = CartesianCategoryAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_);
  axis1.m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Color"], j_l_String)));
  axis1.m_setMinIndex__int(10);
  axis1.m_setMaxIndex__int(30);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(/**@type {Array<?string>}*/ ($Arrays.$castTo(this.m_getLabelColors__int(ZoomCategoryAxisCase.f_AMOUNT__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_).m_toArray__arrayOf_java_lang_Object(/**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), j_l_String, 1)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1, dataset2], Dataset)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1], Axis)));
  let options = ZoomOptions.$create__();
  options.m_getPan__().m_setEnabled__boolean(true);
  options.m_getPan__().m_setMode__org_pepstock_charba_client_enums_InteractionAxis(InteractionAxis.f_XY__org_pepstock_charba_client_enums_InteractionAxis);
  options.m_getPan__().m_setThreshold__double(5);
  options.m_getZoom__().m_getWheel__().m_setEnabled__boolean(true);
  options.m_getZoom__().m_setMode__org_pepstock_charba_client_enums_InteractionAxis(InteractionAxis.f_XY__org_pepstock_charba_client_enums_InteractionAxis);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(ZoomPlugin.f_ID__org_pepstock_charba_client_zoom_ZoomPlugin, options);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_.appendChild(actionsRow);
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
  let reset = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  reset.onclick = (/** Event */ p0_1) =>{
   this.m_handleResetZoom__();
   return null;
  };
  reset.className = "gwt-Button";
  reset.textContent = "Reset zoom";
  reset.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(reset);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int__double__double(ZoomCategoryAxisCase.f_AMOUNT__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_, -100 | 0, 100));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_.m_update__();
 }
 
 m_handleResetZoom__() {
  ZoomPlugin.m_reset__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_);
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_ = BarChart.$create__();
 }
 
 static $clinit() {
  ZoomCategoryAxisCase.$clinit = () =>{};
  ZoomCategoryAxisCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ZoomCategoryAxisCase;
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
  BarChart = goog.module.get('org.pepstock.charba.client.BarChart$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianCategoryAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
  BarDataset = goog.module.get('org.pepstock.charba.client.data.BarDataset$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  InteractionAxis = goog.module.get('org.pepstock.charba.client.enums.InteractionAxis$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  ZoomOptions = goog.module.get('org.pepstock.charba.client.zoom.ZoomOptions$impl');
  ZoomPlugin = goog.module.get('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@const {number}*/
ZoomCategoryAxisCase.f_AMOUNT__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCategoryAxisCase_ = 40;
$Util.$setClassMetadata(ZoomCategoryAxisCase, "org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCategoryAxisCase");

exports = ZoomCategoryAxisCase;

//# sourceMappingURL=ZoomCategoryAxisCase.js.map