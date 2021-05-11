goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FlagsPluginOnBarCase$impl');

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
let HorizontalBarChart = goog.forwardDeclare('org.pepstock.charba.client.HorizontalBarChart$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianCategoryAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let CastHelper = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.CastHelper$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FlagsPluginOnBarCase.$1$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class FlagsPluginOnBarCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_;
  /**@type {HorizontalBarChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_;
  /**@type {CartesianCategoryAxis}*/
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_;
 }
 /** @return {!FlagsPluginOnBarCase} */
 static $create__() {
  FlagsPluginOnBarCase.$clinit();
  let $instance = new FlagsPluginOnBarCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_RIGHT__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Flags plugin on bar chart"], j_l_String)));
  let dataset1 = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.m_newDataset__();
  dataset1.m_setLabel__java_lang_String("Countries");
  let color1 = GoogleChartColor.m_values__()[0];
  dataset1.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([color1.m_alpha__double(0.2)], IsColor)));
  dataset1.m_setBorderColor__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([color1.m_toHex__()], j_l_String)));
  dataset1.m_setBorderWidth__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([1], $int)));
  dataset1.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(FlagsPluginOnBarCase.f_COUNTRIES__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.length, false));
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_ = CartesianCategoryAxis.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_AxisKind(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_, AxisKind.f_Y__org_pepstock_charba_client_enums_AxisKind);
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.m_setDisplay__boolean(true);
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(FlagsPluginOnBarCase.f_COUNTRIES__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1], Dataset)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([this.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_], Axis)));
  let p = $1.$create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase__java_lang_String(this, "flagsplugin");
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.m_getPlugins__().m_add__org_pepstock_charba_client_Plugin(p);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_;
 }
 /** @return {HTMLImageElement} */
 m_getImageElement__elemental2_dom_HTMLImageElement_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase(/** HTMLImageElement */ resource) {
  return CastHelper.m_toImg__java_lang_Object(resource);
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.m_update__();
 }
 
 m_calculateAndSetScaleLabelPadding__double_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase(/** number */ width) {
  let percent = width * FlagsPluginOnBarCase.f_PERCENT__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_ / 100;
  let padding = $Primitives.$narrowDoubleToInt(Math.min(Math.max(FlagsPluginOnBarCase.f_MIN__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_, percent), FlagsPluginOnBarCase.f_MAX__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_));
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_.m_getTitle__().m_getPadding__().m_setTop__int(padding);
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_ = HorizontalBarChart.$create__();
 }
 
 static $clinit() {
  FlagsPluginOnBarCase.$clinit = () =>{};
  FlagsPluginOnBarCase.$loadModules();
  BaseComposite.$clinit();
  FlagsPluginOnBarCase.f_COUNTRIES__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_ = /**@type {!Array<?string>}*/ ($Arrays.$init(["br", "de", "fr", "gb", "it", "us"], j_l_String));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FlagsPluginOnBarCase;
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
  HorizontalBarChart = goog.module.get('org.pepstock.charba.client.HorizontalBarChart$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianCategoryAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  CastHelper = goog.module.get('org.pepstock.charba.client.dom.elements.CastHelper$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FlagsPluginOnBarCase.$1$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@type {Array<?string>}*/
FlagsPluginOnBarCase.f_COUNTRIES__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_;
/**@const {number}*/
FlagsPluginOnBarCase.f_MIN__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_ = 50;
/**@const {number}*/
FlagsPluginOnBarCase.f_MAX__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_ = 100;
/**@const {number}*/
FlagsPluginOnBarCase.f_PERCENT__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FlagsPluginOnBarCase_ = 10;
$Util.$setClassMetadata(FlagsPluginOnBarCase, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FlagsPluginOnBarCase");

exports = FlagsPluginOnBarCase;

//# sourceMappingURL=FlagsPluginOnBarCase.js.map
