goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBubbleCase$impl');

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
let DataLabelsOptions = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
let DataLabelsPlugin = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let DefaultPluginId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultPluginId$impl');
let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBubbleCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBubbleCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBubbleCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBubbleCase.$4$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class DataLabelsBubbleCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_;
  /**@type {BubbleChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_;
 }
 /** @return {!DataLabelsBubbleCase} */
 static $create__() {
  DataLabelsBubbleCase.$clinit();
  let $instance = new DataLabelsBubbleCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_.m_getOptions__().m_getTooltips__().m_setEnabled__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setTop__int(42);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setRight__int(16);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setBottom__int(32);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setLeft__int(8);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_.m_getOptions__().m_getPlugins__().m_setEnabled__org_pepstock_charba_client_enums_DefaultPluginId__boolean(DefaultPluginId.f_LEGEND__org_pepstock_charba_client_enums_DefaultPluginId, false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_.m_getOptions__().m_getPlugins__().m_setEnabled__org_pepstock_charba_client_enums_DefaultPluginId__boolean(DefaultPluginId.f_TITLE__org_pepstock_charba_client_enums_DefaultPluginId, false);
  let dataset1 = /**@type {BubbleDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_.m_newDataset__(), BubbleDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  let colors = /**@type {!Array<?string>}*/ ($Arrays.$create([DataLabelsBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_], j_l_String));
  let hcolors = /**@type {!Array<?string>}*/ ($Arrays.$create([DataLabelsBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_], j_l_String));
  let bcolors = /**@type {!Array<?string>}*/ ($Arrays.$create([DataLabelsBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_], j_l_String));
  let bwidth = /**@type {!Array<number>}*/ ($Arrays.$create([DataLabelsBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_], $int));
  let hbwidth = /**@type {!Array<number>}*/ ($Arrays.$create([DataLabelsBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_], $int));
  let dp1 = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([DataLabelsBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_], DataPoint));
  for (let i = 0; i < DataLabelsBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_; i = i + 1 | 0) {
   $Arrays.$set(dp1, i, DataPoint.$create__());
   dp1[i].m_setX__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase());
   dp1[i].m_setY__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase());
   dp1[i].m_setR__double(this.m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase(0, 50));
   $Arrays.$set(colors, i, this.m_colorize__boolean__org_pepstock_charba_client_data_DataPoint_$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase(false, dp1[i]));
   $Arrays.$set(bcolors, i, this.m_colorize__boolean__org_pepstock_charba_client_data_DataPoint_$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase(true, dp1[i]));
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
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1], Dataset)));
  let option = DataLabelsOptions.$create__();
  option.m_setAnchor__org_pepstock_charba_client_datalabels_callbacks_AnchorCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase(this));
  option.m_setAlign__org_pepstock_charba_client_datalabels_callbacks_AlignCallback($2.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase(this));
  option.m_setColor__org_pepstock_charba_client_callbacks_ColorCallback($3.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase(this));
  option.m_setFormatter__org_pepstock_charba_client_datalabels_callbacks_FormatterCallback($4.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase(this));
  option.m_setOffset__int(2);
  option.m_getFont__().m_setWeight__org_pepstock_charba_client_enums_Weight(Weight.f_BOLD__org_pepstock_charba_client_enums_Weight);
  option.m_getPadding__().m_set__int(0);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, option);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_;
 }
 /** @return {number} */
 m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase() {
  return this.m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase(DataLabelsBubbleCase.f_MIN_XY__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_, DataLabelsBubbleCase.f_MAX_XY__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_);
 }
 /** @return {number} */
 m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase(/** number */ min, /** number */ max) {
  let random = Random.$create__();
  return random.m_nextInt__int(max + 1 - min | 0) + min | 0;
 }
 /** @return {?string} */
 m_colorize__boolean__org_pepstock_charba_client_data_DataPoint_$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase(/** boolean */ opaque, /** DataPoint */ value) {
  let x = value.m_getX__() / 100;
  let y = value.m_getY__() / 100;
  let r = x < 0 && y < 0 ? 250 : x < 0 ? 150 : y < 0 ? 50 : 0;
  let g = x < 0 && y < 0 ? 0 : x < 0 ? 50 : y < 0 ? 150 : 250;
  let b = x < 0 && y < 0 ? 0 : x > 0 && y > 0 ? 250 : 150;
  let a = opaque ? 1 : 0.2 * value.m_getR__() / 50;
  return "rgba(" + r + "," + g + "," + b + "," + a + ")";
 }
 
 m_handleRandomize__() {
  let colors = /**@type {!Array<?string>}*/ ($Arrays.$create([DataLabelsBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_], j_l_String));
  let bcolors = /**@type {!Array<?string>}*/ ($Arrays.$create([DataLabelsBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_], j_l_String));
  let bwidth = /**@type {!Array<number>}*/ ($Arrays.$create([DataLabelsBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_], $int));
  let hbwidth = /**@type {!Array<number>}*/ ($Arrays.$create([DataLabelsBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_], $int));
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    let bDataset = /**@type {BubbleDataset}*/ ($Casts.$to(dataset, BubbleDataset));
    let i = 0;
    for (let $iterator_1 = bDataset.m_getDataPoints__().m_iterator__(); $iterator_1.m_hasNext__(); ) {
     let dp = /**@type {DataPoint}*/ ($Casts.$to($iterator_1.m_next__(), DataPoint));
     {
      dp.m_setX__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase());
      dp.m_setY__double(this.m_getData___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase());
      dp.m_setR__double(this.m_getData__int__int_$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase(0, 50));
      $Arrays.$set(colors, i, this.m_colorize__boolean__org_pepstock_charba_client_data_DataPoint_$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase(false, dp));
      $Arrays.$set(bcolors, i, this.m_colorize__boolean__org_pepstock_charba_client_data_DataPoint_$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase(true, dp));
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
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_ = BubbleChart.$create__();
 }
 
 static $clinit() {
  DataLabelsBubbleCase.$clinit = () =>{};
  DataLabelsBubbleCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataLabelsBubbleCase;
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
  DataLabelsOptions = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
  DataLabelsPlugin = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  DefaultPluginId = goog.module.get('org.pepstock.charba.client.enums.DefaultPluginId$impl');
  Weight = goog.module.get('org.pepstock.charba.client.enums.Weight$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBubbleCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBubbleCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBubbleCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBubbleCase.$4$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@const {number}*/
DataLabelsBubbleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_ = 16;
/**@const {number}*/
DataLabelsBubbleCase.f_MIN_XY__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_ = -150;
/**@const {number}*/
DataLabelsBubbleCase.f_MAX_XY__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_ = 100;
$Util.$setClassMetadata(DataLabelsBubbleCase, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBubbleCase");

exports = DataLabelsBubbleCase;

//# sourceMappingURL=DataLabelsBubbleCase.js.map
