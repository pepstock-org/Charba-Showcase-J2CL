goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksBubbleCase$impl');

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
let j_l_Math = goog.forwardDeclare('java.lang.Math$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Random = goog.forwardDeclare('java.util.Random$impl');
let BubbleChart = goog.forwardDeclare('org.pepstock.charba.client.BubbleChart$impl');
let BubbleDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BubbleDataset$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksBubbleCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksBubbleCase.$2$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class CallbacksBubbleCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_;
  /**@type {BubbleChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_;
  /**@type {BubbleDataset}*/
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_;
 }
 /** @return {!CallbacksBubbleCase} */
 static $create__() {
  CallbacksBubbleCase.$clinit();
  let $instance = new CallbacksBubbleCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Callbacks on bubble chart dataset"], j_l_String)));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_ = /**@type {BubbleDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.m_newDataset__(), BubbleDataset));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.m_setLabel__java_lang_String("dataset 1");
  let hcolors = /**@type {!Array<?string>}*/ ($Arrays.$create([CallbacksBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_], j_l_String));
  let bwidth = /**@type {!Array<number>}*/ ($Arrays.$create([CallbacksBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_], $int));
  let hbwidth = /**@type {!Array<number>}*/ ($Arrays.$create([CallbacksBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_], $int));
  let dp1 = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([CallbacksBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_], DataPoint));
  for (let i = 0; i < CallbacksBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_; i = i + 1 | 0) {
   $Arrays.$set(dp1, i, DataPoint.$create__());
   dp1[i].m_setX__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase());
   dp1[i].m_setY__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase());
   dp1[i].m_setR__double(this.m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase(0, 50));
   $Arrays.$set(bwidth, i, Math.min(Math.max(1, i + 1 | 0), 5));
   $Arrays.$set(hcolors, i, "transparent");
   $Arrays.$set(hbwidth, i, $Primitives.$narrowLongToInt(j_l_Math.m_round__double(8 * dp1[i].m_getR__() / 1000)));
  }
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase(this));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback($2.$create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase(this));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.m_setBorderWidth__arrayOf_int(bwidth);
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.m_setHoverBackgroundColor__arrayOf_java_lang_String(hcolors);
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.m_setHoverBorderWidth__arrayOf_int(hbwidth);
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(dp1);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_;
 }
 /** @return {number} */
 m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase() {
  return this.m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase(CallbacksBubbleCase.f_MIN_XY__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_, CallbacksBubbleCase.f_MAX_XY__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_);
 }
 /** @return {number} */
 m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase(/** number */ min, /** number */ max) {
  let random = Random.$create__();
  return random.m_nextInt__int(max + 1 - min | 0) + min | 0;
 }
 /** @return {?string} */
 m_colorize__boolean__org_pepstock_charba_client_data_DataPoint_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase(/** boolean */ opaque, /** DataPoint */ value) {
  let x = value.m_getX__() / 100;
  let y = value.m_getY__() / 100;
  let r = x < 0 && y < 0 ? 250 : x < 0 ? 150 : y < 0 ? 50 : 0;
  let g = x < 0 && y < 0 ? 0 : x < 0 ? 50 : y < 0 ? 150 : 250;
  let b = x < 0 && y < 0 ? 0 : x > 0 && y > 0 ? 250 : 150;
  let a = opaque ? 1 : 0.2 * value.m_getR__() / 50;
  return "rgba(" + r + "," + g + "," + b + "," + a + ")";
 }
 
 m_handleRandomize__() {
  let bwidth = /**@type {!Array<number>}*/ ($Arrays.$create([CallbacksBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_], $int));
  let hbwidth = /**@type {!Array<number>}*/ ($Arrays.$create([CallbacksBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_], $int));
  let i = 0;
  for (let $iterator = this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.m_getDataPoints__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dp = /**@type {DataPoint}*/ ($Casts.$to($iterator.m_next__(), DataPoint));
   {
    dp.m_setX__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase());
    dp.m_setY__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase());
    dp.m_setR__double(this.m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase(0, 50));
    $Arrays.$set(bwidth, i, Math.min(Math.max(1, i + 1 | 0), 5));
    $Arrays.$set(hbwidth, i, $Primitives.$narrowLongToInt(j_l_Math.m_round__double(8 * dp.m_getR__() / 1000)));
    i = i + 1 | 0;
   }
  }
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.m_setBorderWidth__arrayOf_int(bwidth);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_ = BubbleChart.$create__();
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_ = null;
 }
 
 static $clinit() {
  CallbacksBubbleCase.$clinit = () =>{};
  CallbacksBubbleCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CallbacksBubbleCase;
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
  j_l_Math = goog.module.get('java.lang.Math$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Random = goog.module.get('java.util.Random$impl');
  BubbleChart = goog.module.get('org.pepstock.charba.client.BubbleChart$impl');
  BubbleDataset = goog.module.get('org.pepstock.charba.client.data.BubbleDataset$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksBubbleCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksBubbleCase.$2$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@const {number}*/
CallbacksBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_ = 16;
/**@const {number}*/
CallbacksBubbleCase.f_MIN_XY__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_ = -150;
/**@const {number}*/
CallbacksBubbleCase.f_MAX_XY__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_ = 100;
$Util.$setClassMetadata(CallbacksBubbleCase, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksBubbleCase");

exports = CallbacksBubbleCase;

//# sourceMappingURL=CallbacksBubbleCase.js.map
