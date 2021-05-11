goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase$impl');

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
let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let FontStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.FontStyle$impl');
let Render = goog.forwardDeclare('org.pepstock.charba.client.enums.Render$impl');
let DefaultThreshold = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.DefaultThreshold$impl');
let GaugeChart = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.GaugeChart$impl');
let GaugeDataset = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.GaugeDataset$impl');
let Threshold = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.Threshold$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase.$4$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class GaugeCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_;
  /**@type {GaugeChart}*/
  this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_;
  /**@type {GaugeChart}*/
  this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_;
  /**@type {GaugeChart}*/
  this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_;
  /**@type {GaugeChart}*/
  this.f_chartValueReverse__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_;
  /**@type {List<GaugeDataset>}*/
  this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_;
 }
 /** @return {!GaugeCase} */
 static $create__() {
  GaugeCase.$clinit();
  let $instance = new GaugeCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.cellPadding = "12";
  let chartRow1 = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow1.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.appendChild(chartRow1);
  let chartCol11 = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol11.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("50%");
  chartRow1.appendChild(chartCol11);
  let chartCol12 = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol12.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("50%");
  chartRow1.appendChild(chartCol12);
  let chartRow2 = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow2.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.appendChild(chartRow2);
  let chartCol21 = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol21.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("50%");
  chartRow2.appendChild(chartCol21);
  let chartCol22 = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol22.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("50%");
  chartRow2.appendChild(chartCol22);
  this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["GAUGE chart to represent percentage value"], j_l_String)));
  this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getOptions__().m_setRender__org_pepstock_charba_client_enums_Render(Render.f_PERCENTAGE__org_pepstock_charba_client_enums_Render);
  this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getOptions__().m_setFormatCallback__org_pepstock_charba_client_callbacks_MeterFormatCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase(this));
  this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getOptions__().m_setAnimated__boolean(true);
  this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.m_getDataset__org_pepstock_charba_client_impl_charts_GaugeChart__java_lang_String__double_$p_org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase(this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_, "Percent", 100)], Dataset)));
  chartCol11.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getChartElement__()), Node_$Overlay)));
  this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["GAUGE chart to represent value and dataset label"], j_l_String)));
  this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getOptions__().m_setRender__org_pepstock_charba_client_enums_Render(Render.f_VALUE_AND_LABEL__org_pepstock_charba_client_enums_Render);
  this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getOptions__().m_setAnimated__boolean(true);
  this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getOptions__().m_setFontColor__org_pepstock_charba_client_callbacks_ColorCallback($2.$create__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase(this));
  this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getOptions__().m_setFormatCallback__org_pepstock_charba_client_callbacks_MeterFormatCallback($3.$create__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase(this));
  this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getOptions__().m_getFont__().m_setStyle__org_pepstock_charba_client_enums_FontStyle(FontStyle.f_ITALIC__org_pepstock_charba_client_enums_FontStyle);
  this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.m_getDataset__org_pepstock_charba_client_impl_charts_GaugeChart__java_lang_String__double_$p_org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase(this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_, "Memory", 2048)], Dataset)));
  chartCol12.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getChartElement__()), Node_$Overlay)));
  this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["GAUGE chart to represent value and dataset label", "changing the color of label"], j_l_String)));
  this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getOptions__().m_setRender__org_pepstock_charba_client_enums_Render(Render.f_VALUE_AND_LABEL__org_pepstock_charba_client_enums_Render);
  this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getOptions__().m_setFormatCallback__org_pepstock_charba_client_callbacks_MeterFormatCallback($4.$create__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase(this));
  this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getOptions__().m_setFontColor__org_pepstock_charba_client_colors_IsColor(ColorBuilder.m_build__int__int__int(90, 173, 255));
  this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.m_getDataset__org_pepstock_charba_client_impl_charts_GaugeChart__java_lang_String__double_$p_org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase(this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_, "Storage", 200)], Dataset)));
  chartCol21.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getChartElement__()), Node_$Overlay)));
  this.f_chartValueReverse__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chartValueReverse__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["GAUGE chart with thresholds on reverse mode"], j_l_String)));
  this.f_chartValueReverse__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getOptions__().m_setRender__org_pepstock_charba_client_enums_Render(Render.f_VALUE__org_pepstock_charba_client_enums_Render);
  this.f_chartValueReverse__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getOptions__().m_setPrecision__int(0);
  let ds = this.m_getDataset__org_pepstock_charba_client_impl_charts_GaugeChart__java_lang_String__double_$p_org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase(this.f_chartValueReverse__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_, "Reverse", 400);
  ds.m_setThresholds__arrayOf_org_pepstock_charba_client_impl_charts_Threshold(/**@type {!Array<Threshold>}*/ ($Arrays.$init([DefaultThreshold.f_NORMAL__org_pepstock_charba_client_impl_charts_DefaultThreshold.m_getThreshold__().m_setValue__double(Double.f_MAX_VALUE__java_lang_Double), DefaultThreshold.f_WARNING__org_pepstock_charba_client_impl_charts_DefaultThreshold.m_getThreshold__().m_setValue__double(100), DefaultThreshold.f_CRITICAL__org_pepstock_charba_client_impl_charts_DefaultThreshold.m_getThreshold__().m_setValue__double(40)], Threshold)));
  ds.m_setPercentageThreshold__boolean(false);
  this.f_chartValueReverse__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([ds], Dataset)));
  chartCol22.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chartValueReverse__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.appendChild(actionsRow);
  let actionsCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  actionsCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  actionsCol.style.textAlign = "center";
  actionsCol.vAlign = "middle";
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String(actionsCol, "colspan", "2");
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {GaugeDataset}*/ ($Casts.$to($iterator.m_next__(), GaugeDataset));
   {
    dataset.m_setValue__double(Math.random() * dataset.m_getMax__());
   }
  }
  this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_update__();
  this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_update__();
  this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_update__();
  this.f_chartValueReverse__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_update__();
 }
 /** @return {GaugeDataset} */
 m_getDataset__org_pepstock_charba_client_impl_charts_GaugeChart__java_lang_String__double_$p_org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase(/** GaugeChart */ chart, /** ?string */ label, /** number */ max) {
  chart.m_getOptions__().m_setResponsive__boolean(true);
  let dataset = chart.m_newDataset__double(max);
  dataset.m_setLabel__java_lang_String(label);
  dataset.m_setValue__double(Math.random() * max);
  this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.add(dataset);
  return dataset;
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase() {
  this.f_chartPercent__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_ = GaugeChart.$create__();
  this.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_ = GaugeChart.$create__();
  this.f_chartValueColor__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_ = GaugeChart.$create__();
  this.f_chartValueReverse__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_ = GaugeChart.$create__();
  this.f_datasets__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_ = /**@type {!ArrayList<GaugeDataset>}*/ (ArrayList.$create__());
 }
 
 static $clinit() {
  GaugeCase.$clinit = () =>{};
  GaugeCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GaugeCase;
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
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  FontStyle = goog.module.get('org.pepstock.charba.client.enums.FontStyle$impl');
  Render = goog.module.get('org.pepstock.charba.client.enums.Render$impl');
  DefaultThreshold = goog.module.get('org.pepstock.charba.client.impl.charts.DefaultThreshold$impl');
  GaugeChart = goog.module.get('org.pepstock.charba.client.impl.charts.GaugeChart$impl');
  GaugeDataset = goog.module.get('org.pepstock.charba.client.impl.charts.GaugeDataset$impl');
  Threshold = goog.module.get('org.pepstock.charba.client.impl.charts.Threshold$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase.$4$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(GaugeCase, "org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase");

exports = GaugeCase;

//# sourceMappingURL=GaugeCase.js.map
