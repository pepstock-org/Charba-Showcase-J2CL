goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsBarCase$impl');

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
let BarChart = goog.forwardDeclare('org.pepstock.charba.client.BarChart$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let BarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let FloatingData = goog.forwardDeclare('org.pepstock.charba.client.data.FloatingData$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let LabelsOptions = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsOptions$impl');
let LabelsPlugin = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsPlugin$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsBarCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsBarCase.$2$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class LabelsBarCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_;
  /**@type {BarChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_;
 }
 /** @return {!LabelsBarCase} */
 static $create__() {
  LabelsBarCase.$clinit();
  let $instance = new LabelsBarCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Labels on bar chart"], j_l_String)));
  let dataset1 = /**@type {BarDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_.m_newDataset__(), BarDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  let color1 = GoogleChartColor.m_values__()[0];
  dataset1.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([color1.m_alpha__double(0.2)], IsColor)));
  dataset1.m_setBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([color1], IsColor)));
  let values = this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite);
  let gaps = this.m_getRandomDigits__int__boolean(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, false);
  let data = dataset1.m_getFloatingData__boolean(true);
  for (let i = 0; i < this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite; i = i + 1 | 0) {
   data.add(FloatingData.$create__double__double(values[i], values[i] + gaps[i]));
  }
  let options = LabelsOptions.$create__();
  let label = options.m_createLabel__java_lang_String("bar");
  label.m_setRender__org_pepstock_charba_client_labels_callbacks_RenderCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase(this));
  label.m_setColor__org_pepstock_charba_client_callbacks_ColorCallback($2.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase(this));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(LabelsPlugin.f_ID__org_pepstock_charba_client_labels_LabelsPlugin, options);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_.m_update__();
 }
 
 m_handleAddDataset__() {
  let datasets = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_.m_getData__().m_getDatasets__();
  let dataset = /**@type {BarDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_.m_newDataset__(), BarDataset));
  dataset.m_setLabel__java_lang_String("dataset " + (datasets.size() + 1 | 0));
  let color = GoogleChartColor.m_values__()[datasets.size()];
  dataset.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([color.m_alpha__double(0.2)], IsColor)));
  dataset.m_setBorderColor__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([color.m_toHex__()], j_l_String)));
  dataset.m_setBorderWidth__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([1], $int)));
  dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  datasets.add(dataset);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_.m_update__();
 }
 
 m_handleRemoveDataset__() {
  this.m_removeDataset__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_);
 }
 
 m_handleAddData__() {
  this.m_addData__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_);
 }
 
 m_handleRemoveData__() {
  this.m_removeData__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_);
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsBarCase_ = BarChart.$create__();
 }
 
 static $clinit() {
  LabelsBarCase.$clinit = () =>{};
  LabelsBarCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LabelsBarCase;
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
  BarChart = goog.module.get('org.pepstock.charba.client.BarChart$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  BarDataset = goog.module.get('org.pepstock.charba.client.data.BarDataset$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  FloatingData = goog.module.get('org.pepstock.charba.client.data.FloatingData$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  LabelsOptions = goog.module.get('org.pepstock.charba.client.labels.LabelsOptions$impl');
  LabelsPlugin = goog.module.get('org.pepstock.charba.client.labels.LabelsPlugin$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsBarCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsBarCase.$2$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
$Util.$setClassMetadata(LabelsBarCase, "org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsBarCase");

exports = LabelsBarCase;

//# sourceMappingURL=LabelsBarCase.js.map
