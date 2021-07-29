goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ApplyingPointSizesOnLineCase$impl');

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
let LineChart = goog.forwardDeclare('org.pepstock.charba.client.LineChart$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianCategoryAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class ApplyingPointSizesOnLineCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_;
 }
 /** @return {!ApplyingPointSizesOnLineCase} */
 static $create__() {
  ApplyingPointSizesOnLineCase.$clinit();
  let $instance = new ApplyingPointSizesOnLineCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_BOTTOM__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Different point sizes on line chart"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_.m_getOptions__().m_getTooltips__().m_setMode__org_pepstock_charba_client_enums_InteractionMode(InteractionMode.f_INDEX__org_pepstock_charba_client_enums_InteractionMode);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_.m_getOptions__().m_getTooltips__().m_setIntersect__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_.m_getOptions__().m_getHover__().m_setMode__org_pepstock_charba_client_enums_InteractionMode(InteractionMode.f_INDEX__org_pepstock_charba_client_enums_InteractionMode);
  let dataset1 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_.m_newDataset__(), LineDataset));
  dataset1.m_setLabel__java_lang_String("Big Points");
  let color1 = GoogleChartColor.m_values__()[0];
  dataset1.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setBorderColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  dataset1.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  dataset1.m_setBorderDash__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([5, 5], $int)));
  dataset1.m_setPointRadius__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([15], $double)));
  dataset1.m_setPointHoverRadius__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([10], $double)));
  let dataset2 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_.m_newDataset__(), LineDataset));
  dataset2.m_setLabel__java_lang_String("Individual point sizes");
  let color2 = GoogleChartColor.m_values__()[1];
  dataset2.m_setBackgroundColor__java_lang_String(color2.m_toHex__());
  dataset2.m_setBorderColor__java_lang_String(color2.m_toHex__());
  dataset2.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  dataset2.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  dataset2.m_setBorderDash__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([5, 5], $int)));
  dataset2.m_setPointRadius__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([2, 4, 6, 18, 0, 12, 20], $double)));
  let dataset3 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_.m_newDataset__(), LineDataset));
  dataset3.m_setLabel__java_lang_String("Large pointHoverRadius");
  let color3 = GoogleChartColor.m_values__()[2];
  dataset3.m_setBackgroundColor__java_lang_String(color3.m_toHex__());
  dataset3.m_setBorderColor__java_lang_String(color3.m_toHex__());
  dataset3.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  dataset3.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  dataset3.m_setPointHoverRadius__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([30], $double)));
  let dataset4 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_.m_newDataset__(), LineDataset));
  dataset4.m_setLabel__java_lang_String("Large pointHitRadius");
  let color4 = GoogleChartColor.m_values__()[3];
  dataset4.m_setBackgroundColor__java_lang_String(color4.m_toHex__());
  dataset4.m_setBorderColor__java_lang_String(color4.m_toHex__());
  dataset4.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  dataset4.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  dataset4.m_setPointHitRadius__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([20], $double)));
  let axis1 = CartesianCategoryAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_);
  axis1.m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Month"], j_l_String)));
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_);
  axis2.m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Value"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1, axis2], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1, dataset2, dataset3], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointSizesOnLineCase_ = LineChart.$create__();
 }
 
 static $clinit() {
  ApplyingPointSizesOnLineCase.$clinit = () =>{};
  ApplyingPointSizesOnLineCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ApplyingPointSizesOnLineCase;
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
  LineChart = goog.module.get('org.pepstock.charba.client.LineChart$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianCategoryAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  InteractionMode = goog.module.get('org.pepstock.charba.client.enums.InteractionMode$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $double = goog.module.get('vmbootstrap.primitives.$double$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
$Util.$setClassMetadata(ApplyingPointSizesOnLineCase, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ApplyingPointSizesOnLineCase");

exports = ApplyingPointSizesOnLineCase;

//# sourceMappingURL=ApplyingPointSizesOnLineCase.js.map