goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.StandingPluginOnLineCase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let LineChart = goog.forwardDeclare('org.pepstock.charba.client.LineChart$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianCategoryAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.StandingPluginOnLineCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.StandingPluginOnLineCase.$2$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');

class StandingPluginOnLineCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_;
 }
 /** @return {!StandingPluginOnLineCase} */
 static $create__() {
  StandingPluginOnLineCase.$clinit();
  let $instance = new StandingPluginOnLineCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Standing plugin on line chart"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setTop__int(40);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setRight__int(40);
  let datasets = /**@type {!LinkedList<Dataset>}*/ (LinkedList.$create__());
  for (let i = 0; i < StandingPluginOnLineCase.f_FACTORS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_.length; i = i + 1 | 0) {
   let dataset = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_.m_newDataset__(), LineDataset));
   dataset.m_setLabel__java_lang_String(StandingPluginOnLineCase.f_FACTORS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_[i]);
   let color = GoogleChartColor.m_values__()[i];
   dataset.m_setBackgroundColor__java_lang_String(color.m_toHex__());
   dataset.m_setBorderColor__java_lang_String(color.m_toHex__());
   let values = StandingPluginOnLineCase.f_STANDINGS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_[i];
   dataset.m_setData__arrayOf_double(values);
   dataset.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
   datasets.add(dataset);
  }
  let axis1 = CartesianCategoryAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_);
  axis1.m_setDisplay__boolean(true);
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_);
  axis2.m_setDisplay__boolean(true);
  axis2.m_setReverse__boolean(true);
  axis2.m_getTicks__().m_setCallback__org_pepstock_charba_client_callbacks_TickCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase(this));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1, axis2], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(StandingPluginOnLineCase.f_YEARS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {Array<Dataset>}*/ ($Arrays.$castTo(datasets.m_toArray__arrayOf_java_lang_Object(/**@type {!Array<Dataset>}*/ ($Arrays.$create([0], Dataset))), Dataset, 1)));
  let p = $2.$create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase__java_lang_String(this, "standings");
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_.m_getPlugins__().m_add__org_pepstock_charba_client_Plugin(p);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_.appendChild(actionsRow);
  let actionsCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  actionsCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  actionsCol.style.textAlign = "center";
  actionsCol.vAlign = "middle";
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String(actionsCol, "colspan", "2");
  actionsRow.appendChild(actionsCol);
  let github = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  github.onclick = (/** Event */ p0) =>{
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_ = LineChart.$create__();
 }
 
 static $clinit() {
  StandingPluginOnLineCase.$clinit = () =>{};
  StandingPluginOnLineCase.$loadModules();
  BaseComposite.$clinit();
  StandingPluginOnLineCase.f_YEARS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_ = /**@type {!Array<?string>}*/ ($Arrays.$init(["2004", "2006", "2008", "2010", "2012", "2013"], j_l_String));
  StandingPluginOnLineCase.f_FACTORS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_ = /**@type {!Array<?string>}*/ ($Arrays.$init(["Market Factors", "People Skills", "Macro-economic Factors", "Globalization", "Regulatory Concerns", "Technology Factors", "Socio-economic Factors", "Environmental Issues", "Geopolitical Factors"], j_l_String));
  StandingPluginOnLineCase.f_STANDINGS_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_ = /**@type {!Array<number>}*/ ($Arrays.$init([1, 1, 1, 1, 3, 2], $double));
  StandingPluginOnLineCase.f_STANDINGS_2__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_ = /**@type {!Array<number>}*/ ($Arrays.$init([2, 2, 2, 4, 2, 4], $double));
  StandingPluginOnLineCase.f_STANDINGS_3__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_ = /**@type {!Array<number>}*/ ($Arrays.$init([3, 6, 6, 3, 4, 3], $double));
  StandingPluginOnLineCase.f_STANDINGS_4__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_ = /**@type {!Array<number>}*/ ($Arrays.$init([4, 5, 4, 6, 6, 7], $double));
  StandingPluginOnLineCase.f_STANDINGS_5__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_ = /**@type {!Array<number>}*/ ($Arrays.$init([5, 4, 5, 5, 5, 5], $double));
  StandingPluginOnLineCase.f_STANDINGS_6__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_ = /**@type {!Array<number>}*/ ($Arrays.$init([6, 3, 3, 2, 1, 1], $double));
  StandingPluginOnLineCase.f_STANDINGS_7__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_ = /**@type {!Array<number>}*/ ($Arrays.$init([7, 7, 8, 8, 7, 6], $double));
  StandingPluginOnLineCase.f_STANDINGS_8__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_ = /**@type {!Array<number>}*/ ($Arrays.$init([8, 8, 7, 7, 8, 8], $double));
  StandingPluginOnLineCase.f_STANDINGS_9__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_ = /**@type {!Array<number>}*/ ($Arrays.$init([9, 9, 9, 9, 9, 9], $double));
  StandingPluginOnLineCase.f_STANDINGS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_ = /**@type {!Array<Array<number>>}*/ ($Arrays.$init([StandingPluginOnLineCase.f_STANDINGS_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_, StandingPluginOnLineCase.f_STANDINGS_2__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_, StandingPluginOnLineCase.f_STANDINGS_3__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_, StandingPluginOnLineCase.f_STANDINGS_4__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_, StandingPluginOnLineCase.f_STANDINGS_5__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_, StandingPluginOnLineCase.f_STANDINGS_6__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_, StandingPluginOnLineCase.f_STANDINGS_7__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_, StandingPluginOnLineCase.f_STANDINGS_8__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_, StandingPluginOnLineCase.f_STANDINGS_9__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_], $double, 2));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StandingPluginOnLineCase;
 }
 
 static $loadModules() {
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  LineChart = goog.module.get('org.pepstock.charba.client.LineChart$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianCategoryAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.StandingPluginOnLineCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.StandingPluginOnLineCase.$2$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $double = goog.module.get('vmbootstrap.primitives.$double$impl');
 }
}
/**@type {Array<?string>}*/
StandingPluginOnLineCase.f_YEARS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_;
/**@type {Array<?string>}*/
StandingPluginOnLineCase.f_FACTORS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_;
/**@type {Array<number>}*/
StandingPluginOnLineCase.f_STANDINGS_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_;
/**@type {Array<number>}*/
StandingPluginOnLineCase.f_STANDINGS_2__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_;
/**@type {Array<number>}*/
StandingPluginOnLineCase.f_STANDINGS_3__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_;
/**@type {Array<number>}*/
StandingPluginOnLineCase.f_STANDINGS_4__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_;
/**@type {Array<number>}*/
StandingPluginOnLineCase.f_STANDINGS_5__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_;
/**@type {Array<number>}*/
StandingPluginOnLineCase.f_STANDINGS_6__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_;
/**@type {Array<number>}*/
StandingPluginOnLineCase.f_STANDINGS_7__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_;
/**@type {Array<number>}*/
StandingPluginOnLineCase.f_STANDINGS_8__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_;
/**@type {Array<number>}*/
StandingPluginOnLineCase.f_STANDINGS_9__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_;
/**@type {Array<Array<number>>}*/
StandingPluginOnLineCase.f_STANDINGS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_;
$Util.$setClassMetadata(StandingPluginOnLineCase, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.StandingPluginOnLineCase");

exports = StandingPluginOnLineCase;

//# sourceMappingURL=StandingPluginOnLineCase.js.map
