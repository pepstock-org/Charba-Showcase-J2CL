goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.BubbleCase$impl');

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
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class BubbleCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_;
  /**@type {BubbleChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_;
 }
 /** @return {!BubbleCase} */
 static $create__() {
  BubbleCase.$clinit();
  let $instance = new BubbleCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Bubble chart"], j_l_String)));
  let dataset1 = /**@type {BubbleDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_.m_newDataset__(), BubbleDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  let colors = /**@type {!Array<?string>}*/ ($Arrays.$create([BubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_], j_l_String));
  let hcolors = /**@type {!Array<?string>}*/ ($Arrays.$create([BubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_], j_l_String));
  let bcolors = /**@type {!Array<?string>}*/ ($Arrays.$create([BubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_], j_l_String));
  let bwidth = /**@type {!Array<number>}*/ ($Arrays.$create([BubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_], $int));
  let hbwidth = /**@type {!Array<number>}*/ ($Arrays.$create([BubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_], $int));
  let dp1 = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([BubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_], DataPoint));
  for (let i = 0; i < BubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_; i = i + 1 | 0) {
   $Arrays.$set(dp1, i, DataPoint.$create__());
   dp1[i].m_setX__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase());
   dp1[i].m_setY__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase());
   dp1[i].m_setR__double(this.m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase(0, 50));
   $Arrays.$set(colors, i, this.m_colorize__boolean__org_pepstock_charba_client_data_DataPoint_$p_org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase(false, dp1[i]));
   $Arrays.$set(bcolors, i, this.m_colorize__boolean__org_pepstock_charba_client_data_DataPoint_$p_org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase(true, dp1[i]));
   $Arrays.$set(bwidth, i, Math.min(Math.max(1, i + 1 | 0), 5));
   $Arrays.$set(hcolors, i, "transparent");
   $Arrays.$set(hbwidth, i, $Primitives.$narrowLongToInt(j_l_Math.m_round__double(8 * dp1[i].m_getR__() / 1000)));
  }
  dataset1.m_setBackgroundColor__arrayOf_java_lang_String(colors);
  dataset1.m_setBorderColor__arrayOf_java_lang_String(bcolors);
  dataset1.m_setBorderWidth__arrayOf_int(bwidth);
  dataset1.m_setHoverBackgroundColor__arrayOf_java_lang_String(hcolors);
  dataset1.m_setHoverBorderWidth__arrayOf_int(hbwidth);
  dataset1.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(dp1);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_.appendChild(actionsRow);
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
  let addDataset = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  addDataset.onclick = (/** Event */ p0_1) =>{
   this.m_handleAddDataset__();
   return null;
  };
  addDataset.className = "gwt-Button";
  addDataset.textContent = "Add dataset";
  addDataset.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(addDataset);
  let removeDataset = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  removeDataset.onclick = (/** Event */ p0_2) =>{
   this.m_handleRemoveDataset__();
   return null;
  };
  removeDataset.className = "gwt-Button";
  removeDataset.textContent = "Remove dataset";
  removeDataset.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(removeDataset);
  let github = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  github.onclick = (/** Event */ p0_3) =>{
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_;
 }
 /** @return {number} */
 m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase() {
  return this.m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase(BubbleCase.f_MIN_XY__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_, BubbleCase.f_MAX_XY__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_);
 }
 /** @return {number} */
 m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase(/** number */ min, /** number */ max) {
  let random = Random.$create__();
  return random.m_nextInt__int(max + 1 - min | 0) + min | 0;
 }
 /** @return {?string} */
 m_colorize__boolean__org_pepstock_charba_client_data_DataPoint_$p_org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase(/** boolean */ opaque, /** DataPoint */ value) {
  let x = value.m_getX__() / 100;
  let y = value.m_getY__() / 100;
  let r = x < 0 && y < 0 ? 250 : x < 0 ? 150 : y < 0 ? 50 : 0;
  let g = x < 0 && y < 0 ? 0 : x < 0 ? 50 : y < 0 ? 150 : 250;
  let b = x < 0 && y < 0 ? 0 : x > 0 && y > 0 ? 250 : 150;
  let a = opaque ? 1 : 0.2 * value.m_getR__() / 50;
  return "rgba(" + r + "," + g + "," + b + "," + a + ")";
 }
 
 m_handleRandomize__() {
  let colors = /**@type {!Array<?string>}*/ ($Arrays.$create([BubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_], j_l_String));
  let bcolors = /**@type {!Array<?string>}*/ ($Arrays.$create([BubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_], j_l_String));
  let bwidth = /**@type {!Array<number>}*/ ($Arrays.$create([BubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_], $int));
  let hbwidth = /**@type {!Array<number>}*/ ($Arrays.$create([BubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_], $int));
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    let bDataset = /**@type {BubbleDataset}*/ ($Casts.$to(dataset, BubbleDataset));
    let i = 0;
    for (let $iterator_1 = bDataset.m_getDataPoints__().m_iterator__(); $iterator_1.m_hasNext__(); ) {
     let dp = /**@type {DataPoint}*/ ($Casts.$to($iterator_1.m_next__(), DataPoint));
     {
      dp.m_setX__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase());
      dp.m_setY__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase());
      dp.m_setR__double(this.m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase(0, 50));
      $Arrays.$set(colors, i, this.m_colorize__boolean__org_pepstock_charba_client_data_DataPoint_$p_org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase(false, dp));
      $Arrays.$set(bcolors, i, this.m_colorize__boolean__org_pepstock_charba_client_data_DataPoint_$p_org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase(true, dp));
      $Arrays.$set(bwidth, i, Math.min(Math.max(1, i + 1 | 0), 5));
      $Arrays.$set(hbwidth, i, $Primitives.$narrowLongToInt(j_l_Math.m_round__double(8 * dp.m_getR__() / 1000)));
      i = i + 1 | 0;
     }
    }
    bDataset.m_setBackgroundColor__arrayOf_java_lang_String(colors);
    bDataset.m_setBorderColor__arrayOf_java_lang_String(bcolors);
    bDataset.m_setBorderWidth__arrayOf_int(bwidth);
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_.m_update__();
 }
 
 m_handleAddDataset__() {
  let datasets = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_.m_getData__().m_getDatasets__();
  let dataset = /**@type {BubbleDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_.m_newDataset__(), BubbleDataset));
  dataset.m_setLabel__java_lang_String("dataset " + (datasets.size() + 1 | 0));
  let colors = /**@type {!Array<?string>}*/ ($Arrays.$create([BubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_], j_l_String));
  let hcolors = /**@type {!Array<?string>}*/ ($Arrays.$create([BubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_], j_l_String));
  let bcolors = /**@type {!Array<?string>}*/ ($Arrays.$create([BubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_], j_l_String));
  let bwidth = /**@type {!Array<number>}*/ ($Arrays.$create([BubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_], $int));
  let hbwidth = /**@type {!Array<number>}*/ ($Arrays.$create([BubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_], $int));
  let dp1 = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([BubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_], DataPoint));
  for (let i = 0; i < BubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_; i = i + 1 | 0) {
   $Arrays.$set(dp1, i, DataPoint.$create__());
   dp1[i].m_setX__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase());
   dp1[i].m_setY__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase());
   dp1[i].m_setR__double(this.m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase(0, 50));
   $Arrays.$set(colors, i, this.m_colorize__boolean__org_pepstock_charba_client_data_DataPoint_$p_org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase(false, dp1[i]));
   $Arrays.$set(bcolors, i, this.m_colorize__boolean__org_pepstock_charba_client_data_DataPoint_$p_org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase(true, dp1[i]));
   $Arrays.$set(bwidth, i, Math.min(Math.max(1, i + 1 | 0), 5));
   $Arrays.$set(hcolors, i, "transparent");
   $Arrays.$set(hbwidth, i, $Primitives.$narrowLongToInt(j_l_Math.m_round__double(8 * dp1[i].m_getR__() / 1000)));
  }
  dataset.m_setBackgroundColor__arrayOf_java_lang_String(colors);
  dataset.m_setBorderColor__arrayOf_java_lang_String(bcolors);
  dataset.m_setBorderWidth__arrayOf_int(bwidth);
  dataset.m_setHoverBackgroundColor__arrayOf_java_lang_String(hcolors);
  dataset.m_setHoverBorderWidth__arrayOf_int(hbwidth);
  dataset.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(dp1);
  datasets.add(dataset);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_.m_update__();
 }
 
 m_handleRemoveDataset__() {
  this.m_removeDataset__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_);
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_ = BubbleChart.$create__();
 }
 
 static $clinit() {
  BubbleCase.$clinit = () =>{};
  BubbleCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BubbleCase;
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
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@const {number}*/
BubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_ = 16;
/**@const {number}*/
BubbleCase.f_MIN_XY__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_ = -150;
/**@const {number}*/
BubbleCase.f_MAX_XY__org_pepstock_charba_showcase_j2cl_cases_charts_BubbleCase_ = 100;
$Util.$setClassMetadata(BubbleCase, "org.pepstock.charba.showcase.j2cl.cases.charts.BubbleCase");

exports = BubbleCase;

//# sourceMappingURL=BubbleCase.js.map
