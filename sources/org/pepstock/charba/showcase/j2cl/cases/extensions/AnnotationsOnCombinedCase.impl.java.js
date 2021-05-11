goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationsOnCombinedCase$impl');

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
let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let BarChart = goog.forwardDeclare('org.pepstock.charba.client.BarChart$impl');
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
let AnnotationOptions = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
let AnnotationPlugin = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
let BoxAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.BoxAnnotation$impl');
let LineAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.LineAnnotation$impl');
let DrawTime = goog.forwardDeclare('org.pepstock.charba.client.annotation.enums.DrawTime$impl');
let Color = goog.forwardDeclare('org.pepstock.charba.client.colors.Color$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let BarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class AnnotationsOnCombinedCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_;
  /**@type {BarChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_;
 }
 /** @return {!AnnotationsOnCombinedCase} */
 static $create__() {
  AnnotationsOnCombinedCase.$clinit();
  let $instance = new AnnotationsOnCombinedCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Line and box annotations on combined bar/line chart"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_.m_getOptions__().m_getTooltips__().m_setIntersect__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_.m_getOptions__().m_getTooltips__().m_setMode__org_pepstock_charba_client_enums_InteractionMode(InteractionMode.f_INDEX__org_pepstock_charba_client_enums_InteractionMode);
  let dataset1 = LineDataset.$create__();
  dataset1.m_setLabel__java_lang_String("dataset 1");
  dataset1.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(Color.$create__int__int__int(71, 170, 237));
  dataset1.m_setBorderWidth__int(2);
  dataset1.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  dataset1.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  let dataset2 = /**@type {BarDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_.m_newDataset__(), BarDataset));
  dataset2.m_setLabel__java_lang_String("dataset 2");
  dataset2.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([Color.$create__int__int__int(255, 99, 132)], IsColor)));
  dataset2.m_setBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([HtmlColor.f_WHITE__org_pepstock_charba_client_colors_HtmlColor], IsColor)));
  dataset2.m_setBorderWidth__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([2], $int)));
  dataset2.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  let dataset3 = /**@type {BarDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_.m_newDataset__(), BarDataset));
  dataset3.m_setLabel__java_lang_String("dataset 3");
  dataset3.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([Color.$create__int__int__int(75, 192, 192)], IsColor)));
  dataset3.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1, dataset2, dataset3], Dataset)));
  let max = Math.max(Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(Collections.m_max__java_util_Collection(dataset1.m_getData__()), Double))), Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(Collections.m_max__java_util_Collection(dataset2.m_getData__()), Double))));
  max = Math.max(max, Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(Collections.m_max__java_util_Collection(dataset3.m_getData__()), Double))));
  let min = Math.min(Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(Collections.m_min__java_util_Collection(dataset1.m_getData__()), Double))), Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(Collections.m_min__java_util_Collection(dataset2.m_getData__()), Double))));
  min = Math.min(min, Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(Collections.m_min__java_util_Collection(dataset3.m_getData__()), Double))));
  let options = AnnotationOptions.$create__();
  let line = LineAnnotation.$create__();
  line.m_setDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime(DrawTime.f_AFTER_DATASETS_DRAW__org_pepstock_charba_client_annotation_enums_DrawTime);
  line.m_setScaleID__java_lang_String(DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId.m_value__());
  line.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_BLACK__org_pepstock_charba_client_colors_HtmlColor);
  line.m_setBorderWidth__int(5);
  line.m_setValue__double(this.m_getRandomDigits__int__double__double(1, min, max)[0]);
  line.m_getLabel__().m_setDisplay__boolean(true);
  line.m_getLabel__().m_setContent__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["My threshold"], j_l_String)));
  line.m_getLabel__().m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_RED__org_pepstock_charba_client_colors_HtmlColor);
  let box = BoxAnnotation.$create__java_lang_String("stock123");
  box.m_setDisplay__boolean(true);
  box.m_setDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime(DrawTime.f_BEFORE_DATASETS_DRAW__org_pepstock_charba_client_annotation_enums_DrawTime);
  box.m_setXScaleID__java_lang_String(DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId.m_value__());
  box.m_setYScaleID__java_lang_String(DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId.m_value__());
  box.m_setXMin__java_lang_String("February");
  box.m_setXMax__java_lang_String("April");
  let value = this.m_getRandomDigits__int__double__double(1, min, max)[0];
  box.m_setYMax__double(value);
  box.m_setYMin__double(value - 40);
  box.m_setBackgroundColor__java_lang_String("rgba(101, 33, 171, 0.5)");
  box.m_setBorderColor__java_lang_String("rgb(101, 33, 171)");
  box.m_setBorderWidth__int(1);
  options.m_setAnnotations__arrayOf_org_pepstock_charba_client_annotation_AbstractAnnotation(/**@type {!Array<AbstractAnnotation>}*/ ($Arrays.$init([line, box], AbstractAnnotation)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, options);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsOnCombinedCase_ = BarChart.$create__();
 }
 
 static $clinit() {
  AnnotationsOnCombinedCase.$clinit = () =>{};
  AnnotationsOnCombinedCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnnotationsOnCombinedCase;
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
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  BarChart = goog.module.get('org.pepstock.charba.client.BarChart$impl');
  AbstractAnnotation = goog.module.get('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
  AnnotationOptions = goog.module.get('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
  AnnotationPlugin = goog.module.get('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
  BoxAnnotation = goog.module.get('org.pepstock.charba.client.annotation.BoxAnnotation$impl');
  LineAnnotation = goog.module.get('org.pepstock.charba.client.annotation.LineAnnotation$impl');
  DrawTime = goog.module.get('org.pepstock.charba.client.annotation.enums.DrawTime$impl');
  Color = goog.module.get('org.pepstock.charba.client.colors.Color$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  BarDataset = goog.module.get('org.pepstock.charba.client.data.BarDataset$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  InteractionMode = goog.module.get('org.pepstock.charba.client.enums.InteractionMode$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
$Util.$setClassMetadata(AnnotationsOnCombinedCase, "org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationsOnCombinedCase");

exports = AnnotationsOnCombinedCase;

//# sourceMappingURL=AnnotationsOnCombinedCase.js.map
