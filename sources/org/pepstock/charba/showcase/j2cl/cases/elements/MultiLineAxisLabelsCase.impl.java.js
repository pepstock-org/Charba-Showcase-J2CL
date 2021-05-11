goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.MultiLineAxisLabelsCase$impl');

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
let Date = goog.forwardDeclare('java.util.Date$impl');
let LineChart = goog.forwardDeclare('org.pepstock.charba.client.LineChart$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let Labels = goog.forwardDeclare('org.pepstock.charba.client.data.Labels$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class MultiLineAxisLabelsCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_;
  /**@type {?string}*/
  this.f_year__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_;
 }
 /** @return {!MultiLineAxisLabelsCase} */
 static $create__() {
  MultiLineAxisLabelsCase.$clinit();
  let $instance = new MultiLineAxisLabelsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  let now = Date.$create__();
  this.f_year__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_ = j_l_String.m_valueOf__int(now.m_getYear__() + 1900 | 0);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Multiple lines fof labels on axis"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_getOptions__().m_getTooltips__().m_setMode__org_pepstock_charba_client_enums_InteractionMode(InteractionMode.f_INDEX__org_pepstock_charba_client_enums_InteractionMode);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_getOptions__().m_getTooltips__().m_setIntersect__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_getOptions__().m_getHover__().m_setMode__org_pepstock_charba_client_enums_InteractionMode(InteractionMode.f_NEAREST__org_pepstock_charba_client_enums_InteractionMode);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_getOptions__().m_getHover__().m_setIntersect__boolean(true);
  let dataset1 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_newDataset__(), LineDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  let color1 = GoogleChartColor.m_values__()[0];
  dataset1.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setBorderColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  dataset1.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  let dataset2 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_newDataset__(), LineDataset));
  dataset2.m_setLabel__java_lang_String("dataset 2");
  let color2 = GoogleChartColor.m_values__()[1];
  dataset2.m_setBackgroundColor__java_lang_String(color2.m_toHex__());
  dataset2.m_setBorderColor__java_lang_String(color2.m_toHex__());
  dataset2.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  dataset2.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  let lbl = this.m_getMultiLabels___$p_org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase();
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_getData__().m_setLabels__org_pepstock_charba_client_data_Labels(lbl);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1, dataset2], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.appendChild(actionsRow);
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
  let addData = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  addData.onclick = (/** Event */ p0_3) =>{
   this.m_handleAddData__();
   return null;
  };
  addData.className = "gwt-Button";
  addData.textContent = "Add data";
  addData.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(addData);
  let removeData = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  removeData.onclick = (/** Event */ p0_4) =>{
   this.m_handleRemoveData__();
   return null;
  };
  removeData.className = "gwt-Button";
  removeData.textContent = "Remove data";
  removeData.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(removeData);
  let github = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  github.onclick = (/** Event */ p0_5) =>{
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_update__();
 }
 
 m_handleAddDataset__() {
  let datasets = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_getData__().m_getDatasets__();
  let dataset = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_newDataset__(), LineDataset));
  dataset.m_setLabel__java_lang_String("dataset " + (datasets.size() + 1 | 0));
  let color = GoogleChartColor.m_values__()[datasets.size()];
  dataset.m_setBackgroundColor__java_lang_String(color.m_toHex__());
  dataset.m_setBorderColor__java_lang_String(color.m_toHex__());
  dataset.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  datasets.add(dataset);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_update__();
 }
 
 m_handleRemoveDataset__() {
  this.m_removeDataset__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_);
 }
 
 m_handleAddData__() {
  if (this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite < 12) {
   this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite = this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite + 1 | 0;
   this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_getData__().m_setLabels__org_pepstock_charba_client_data_Labels(this.m_getMultiLabels___$p_org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase());
   let datasets = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_getData__().m_getDatasets__();
   for (let $iterator = datasets.m_iterator__(); $iterator.m_hasNext__(); ) {
    let ds = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
    {
     ds.m_getData__().add(this.m_getRandomDigit__());
    }
   }
   this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_update__();
  }
 }
 
 m_handleRemoveData__() {
  if (this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite > 1) {
   this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite = this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite - 1 | 0;
   this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_getData__().m_setLabels__org_pepstock_charba_client_data_Labels(this.m_getMultiLabels___$p_org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase());
   let datasets = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_getData__().m_getDatasets__();
   for (let $iterator = datasets.m_iterator__(); $iterator.m_hasNext__(); ) {
    let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
    {
     dataset.m_getData__().removeAtIndex(dataset.m_getData__().size() - 1 | 0);
    }
   }
   this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_.m_update__();
  }
 }
 /** @return {Labels} */
 m_getMultiLabels___$p_org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase() {
  let labels = this.m_getLabels__();
  let l = Labels.m_build__();
  for (let i = 0; i < labels.length; i = i + 1 | 0) {
   if ($Primitives.$coerceDivision(i % 2) == 0) {
    l.m_add__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([labels[i], this.f_year__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_], j_l_String)));
   } else {
    l.m_add__java_lang_String(labels[i]);
   }
  }
  return l;
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_ = LineChart.$create__();
  this.f_year__org_pepstock_charba_showcase_j2cl_cases_elements_MultiLineAxisLabelsCase_ = null;
 }
 
 static $clinit() {
  MultiLineAxisLabelsCase.$clinit = () =>{};
  MultiLineAxisLabelsCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MultiLineAxisLabelsCase;
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
  Date = goog.module.get('java.util.Date$impl');
  LineChart = goog.module.get('org.pepstock.charba.client.LineChart$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  Labels = goog.module.get('org.pepstock.charba.client.data.Labels$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  InteractionMode = goog.module.get('org.pepstock.charba.client.enums.InteractionMode$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
$Util.$setClassMetadata(MultiLineAxisLabelsCase, "org.pepstock.charba.showcase.j2cl.cases.elements.MultiLineAxisLabelsCase");

exports = MultiLineAxisLabelsCase;

//# sourceMappingURL=MultiLineAxisLabelsCase.js.map
