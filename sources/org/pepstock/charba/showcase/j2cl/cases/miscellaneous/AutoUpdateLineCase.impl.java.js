goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.AutoUpdateLineCase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

let MarginRightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
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
let Date = goog.forwardDeclare('java.util.Date$impl');
let LineChart = goog.forwardDeclare('org.pepstock.charba.client.LineChart$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let CartesianTimeAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianTimeAxis$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let TickSource = goog.forwardDeclare('org.pepstock.charba.client.enums.TickSource$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.AutoUpdateLineCase.$1$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class AutoUpdateLineCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_;
  /**@type {HTMLButtonElement}*/
  this.f_start__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_;
  /**@type {HTMLButtonElement}*/
  this.f_stop__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_;
  /**@type {Date}*/
  this.f_nowDate__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_;
  /**@type {LineDataset}*/
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_;
  /**@type {CartesianTimeAxis}*/
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_;
 }
 /** @return {!AutoUpdateLineCase} */
 static $create__() {
  AutoUpdateLineCase.$clinit();
  let $instance = new AutoUpdateLineCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Auto update chart (every 5 seconds)"], j_l_String)));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_ = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.m_newDataset__(), LineDataset));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.m_setLabel__java_lang_String("Data");
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  let color1 = GoogleChartColor.m_values__()[0];
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.m_setBorderColor__java_lang_String(color1.m_toHex__());
  let time = $Primitives.$widenLongToDouble($LongUtils.$minus(this.f_nowDate__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.m_getTime__(), $Primitives.$widenIntToLong(Math.imul(AutoUpdateLineCase.f_INTERVAL__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_, AutoUpdateLineCase.f_INITIAL_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_ - 1))));
  let xs1 = this.m_getRandomDigits__int__boolean(AutoUpdateLineCase.f_INITIAL_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_, false);
  let dataDp = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([AutoUpdateLineCase.f_INITIAL_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_], DataPoint));
  for (let i = 0; i < AutoUpdateLineCase.f_INITIAL_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_; i = i + 1 | 0) {
   $Arrays.$set(dataDp, i, DataPoint.$create__());
   let newDate = Date.$create__long($Primitives.$narrowDoubleToLong(time));
   dataDp[i].m_setY__double(xs1[i]);
   dataDp[i].m_setX__java_util_Date(newDate);
   time = time + AutoUpdateLineCase.f_INTERVAL__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_;
  }
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(dataDp);
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_ = CartesianTimeAxis.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_AxisKind(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_, AxisKind.f_X__org_pepstock_charba_client_enums_AxisKind);
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.m_getTicks__().m_setSource__org_pepstock_charba_client_enums_TickSource(TickSource.f_DATA__org_pepstock_charba_client_enums_TickSource);
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.m_getTime__().m_setUnit__org_pepstock_charba_client_enums_TimeUnit(TimeUnit.f_SECOND__org_pepstock_charba_client_enums_TimeUnit);
  this.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.m_getTime__().m_getDisplayFormats__().m_setDisplayFormat__org_pepstock_charba_client_enums_TimeUnit__java_lang_String(TimeUnit.f_SECOND__org_pepstock_charba_client_enums_TimeUnit, "H:mm:ss");
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_);
  axis2.m_setDisplay__boolean(true);
  axis2.m_setBeginAtZero__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([this.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_, axis2], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_], Dataset)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.m_createAndSetTimer__org_pepstock_charba_client_ChartTimerTask__int($1.$create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase(this), AutoUpdateLineCase.f_INTERVAL__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.appendChild(actionsRow);
  let actionsCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  actionsCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  actionsCol.style.textAlign = "center";
  actionsCol.vAlign = "middle";
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String(actionsCol, "colspan", "2");
  actionsRow.appendChild(actionsCol);
  this.f_start__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  this.f_start__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.onclick = (/** Event */ p0) =>{
   this.m_handleStart__();
   return null;
  };
  this.f_start__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.className = "gwt-Button";
  this.f_start__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.textContent = "Start";
  this.f_start__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  this.f_start__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.disabled = true;
  actionsCol.appendChild(this.f_start__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_);
  this.f_stop__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  this.f_stop__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.onclick = (/** Event */ p0_1) =>{
   this.m_handleStop__();
   return null;
  };
  this.f_stop__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.className = "gwt-Button";
  this.f_stop__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.textContent = "Stop";
  this.f_stop__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_stop__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_;
 }
 
 m_handleStart__() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.m_getTimer__().m_start__();
  this.f_start__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.disabled = true;
  this.f_stop__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.disabled = false;
 }
 
 m_handleStop__() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.m_getTimer__().m_stop__();
  this.f_start__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.disabled = false;
  this.f_stop__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.disabled = true;
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_ = LineChart.$create__();
  this.f_nowDate__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_ = Date.$create__();
 }
 
 static $clinit() {
  AutoUpdateLineCase.$clinit = () =>{};
  AutoUpdateLineCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AutoUpdateLineCase;
 }
 
 static $loadModules() {
  MarginRightUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
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
  Date = goog.module.get('java.util.Date$impl');
  LineChart = goog.module.get('org.pepstock.charba.client.LineChart$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  CartesianTimeAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianTimeAxis$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  TickSource = goog.module.get('org.pepstock.charba.client.enums.TickSource$impl');
  TimeUnit = goog.module.get('org.pepstock.charba.client.enums.TimeUnit$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.AutoUpdateLineCase.$1$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {number}*/
AutoUpdateLineCase.f_INTERVAL__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_ = 5000;
/**@const {number}*/
AutoUpdateLineCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_ = 20;
/**@const {number}*/
AutoUpdateLineCase.f_INITIAL_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_ = 10;
$Util.$setClassMetadata(AutoUpdateLineCase, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.AutoUpdateLineCase");

exports = AutoUpdateLineCase;

//# sourceMappingURL=AutoUpdateLineCase.js.map
