goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationPointsOnLineCase$impl');

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
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
let AnnotationOptions = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
let AnnotationPlugin = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
let PointAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.PointAnnotation$impl');
let DrawTime = goog.forwardDeclare('org.pepstock.charba.client.annotation.enums.DrawTime$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let GwtMaterialColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GwtMaterialColor$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class AnnotationPointsOnLineCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_;
 }
 /** @return {!AnnotationPointsOnLineCase} */
 static $create__() {
  AnnotationPointsOnLineCase.$clinit();
  let $instance = new AnnotationPointsOnLineCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase();
  this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite = 12;
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Point annotations on line chart"], j_l_String)));
  let dataset1 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_.m_newDataset__(), LineDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  let color1 = GoogleChartColor.m_values__()[0];
  dataset1.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setBorderColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setFill__boolean(false);
  let values = this.m_getRandomDigits__int__double__double(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, 0, 100);
  let data = dataset1.m_getData__boolean(true);
  for (let i = 0; i < values.length; i = i + 1 | 0) {
   data.add(values[i]);
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1], Dataset)));
  let options = AnnotationOptions.$create__();
  let point1 = PointAnnotation.$create__();
  point1.m_setDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime(DrawTime.f_AFTER_DATASETS_DRAW__org_pepstock_charba_client_annotation_enums_DrawTime);
  point1.m_setXValue__java_lang_String("February");
  point1.m_setXScaleID__org_pepstock_charba_client_options_IsScaleId(DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId);
  point1.m_setYScaleID__org_pepstock_charba_client_options_IsScaleId(DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId);
  point1.m_setYValue__double(50);
  point1.m_setRadius__double(10);
  point1.m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(GwtMaterialColor.f_YELLOW_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor.m_alpha__double(0.3));
  point1.m_setBorderWidth__int(2);
  point1.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(GwtMaterialColor.f_YELLOW_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor.m_darker__());
  let point2 = PointAnnotation.$create__();
  point2.m_setDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime(DrawTime.f_AFTER_DATASETS_DRAW__org_pepstock_charba_client_annotation_enums_DrawTime);
  point2.m_setXScaleID__org_pepstock_charba_client_options_IsScaleId(DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId);
  point2.m_setYScaleID__org_pepstock_charba_client_options_IsScaleId(DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId);
  point2.m_setXValue__java_lang_String("April");
  point2.m_setYValue__double(20);
  point2.m_setRadius__double(25);
  point2.m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(GwtMaterialColor.f_BROWN_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor.m_alpha__double(0.3));
  point2.m_setBorderWidth__int(3);
  point2.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(GwtMaterialColor.f_BROWN_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor.m_darker__());
  let point3 = PointAnnotation.$create__();
  point3.m_setDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime(DrawTime.f_AFTER_DATASETS_DRAW__org_pepstock_charba_client_annotation_enums_DrawTime);
  point3.m_setXScaleID__org_pepstock_charba_client_options_IsScaleId(DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId);
  point3.m_setYScaleID__org_pepstock_charba_client_options_IsScaleId(DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId);
  point3.m_setXValue__java_lang_String("July");
  point3.m_setYValue__double(30);
  point3.m_setRadius__double(15);
  point3.m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(GwtMaterialColor.f_GREEN_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor.m_alpha__double(0.3));
  point3.m_setBorderWidth__int(4);
  point3.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(GwtMaterialColor.f_GREEN_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor.m_darker__());
  let point4 = PointAnnotation.$create__();
  point4.m_setXScaleID__org_pepstock_charba_client_options_IsScaleId(DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId);
  point4.m_setYScaleID__org_pepstock_charba_client_options_IsScaleId(DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId);
  point4.m_setDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime(DrawTime.f_AFTER_DATASETS_DRAW__org_pepstock_charba_client_annotation_enums_DrawTime);
  point4.m_setXValue__java_lang_String("November");
  point4.m_setYValue__double(60);
  point4.m_setRadius__double(25);
  point4.m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(GwtMaterialColor.f_INDIGO_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor.m_alpha__double(0.3));
  point4.m_setBorderWidth__int(5);
  point4.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(GwtMaterialColor.f_INDIGO_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor.m_darker__());
  options.m_setAnnotations__arrayOf_org_pepstock_charba_client_annotation_AbstractAnnotation(/**@type {!Array<AbstractAnnotation>}*/ ($Arrays.$init([point1, point2, point3, point4], AbstractAnnotation)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, options);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_.m_update__();
 }
 
 m_handleAddDataset__() {
  let datasets = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_.m_getData__().m_getDatasets__();
  let dataset = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_.m_newDataset__(), LineDataset));
  dataset.m_setLabel__java_lang_String("dataset " + (datasets.size() + 1 | 0));
  let color = GoogleChartColor.m_values__()[datasets.size()];
  dataset.m_setBackgroundColor__java_lang_String(color.m_toHex__());
  dataset.m_setBorderColor__java_lang_String(color.m_toHex__());
  dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  dataset.m_setFill__boolean(false);
  datasets.add(dataset);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_.m_update__();
 }
 
 m_handleRemoveDataset__() {
  this.m_removeDataset__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_);
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationPointsOnLineCase_ = LineChart.$create__();
 }
 
 static $clinit() {
  AnnotationPointsOnLineCase.$clinit = () =>{};
  AnnotationPointsOnLineCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnnotationPointsOnLineCase;
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
  AbstractAnnotation = goog.module.get('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
  AnnotationOptions = goog.module.get('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
  AnnotationPlugin = goog.module.get('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
  PointAnnotation = goog.module.get('org.pepstock.charba.client.annotation.PointAnnotation$impl');
  DrawTime = goog.module.get('org.pepstock.charba.client.annotation.enums.DrawTime$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  GwtMaterialColor = goog.module.get('org.pepstock.charba.client.colors.GwtMaterialColor$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AnnotationPointsOnLineCase, "org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationPointsOnLineCase");

exports = AnnotationPointsOnLineCase;

//# sourceMappingURL=AnnotationPointsOnLineCase.js.map
