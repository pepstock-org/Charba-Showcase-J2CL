goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsPolarCase$impl');

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
let PolarAreaChart = goog.forwardDeclare('org.pepstock.charba.client.PolarAreaChart$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let PolarAreaDataset = goog.forwardDeclare('org.pepstock.charba.client.data.PolarAreaDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let LabelsOptionsBuilder = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsOptionsBuilder$impl');
let LabelsPlugin = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsPlugin$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.labels.enums.Position$impl');
let Render = goog.forwardDeclare('org.pepstock.charba.client.labels.enums.Render$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class LabelsPolarCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_;
  /**@type {PolarAreaChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_;
  /**@const {number}*/
  this.f_myMonths__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_ = 3;
 }
 /** @return {!LabelsPolarCase} */
 static $create__() {
  LabelsPolarCase.$clinit();
  let $instance = new LabelsPolarCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setBottom__int(40);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Using labels on polar chart"], j_l_String)));
  let dataset = /**@type {PolarAreaDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_.m_newDataset__(), PolarAreaDataset));
  dataset.m_setLabel__java_lang_String("dataset 1");
  dataset.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(this.m_getSequenceColors__int__double(this.f_myMonths__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_, 1));
  dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(this.f_myMonths__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_, false));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__int(this.f_myMonths__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset], Dataset)));
  let optionBuilder = LabelsOptionsBuilder.m_create__().m_createLabel__java_lang_String("label").m_setRender__org_pepstock_charba_client_labels_enums_Render(Render.f_LABEL__org_pepstock_charba_client_labels_enums_Render).m_setColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_BLACK__org_pepstock_charba_client_colors_HtmlColor).m_setFontSize__int(32).m_setArc__boolean(true).m_setPosition__org_pepstock_charba_client_labels_enums_Position(Position.f_OUTSIDE__org_pepstock_charba_client_labels_enums_Position).m_getOptionsBuilder__();
  let options = optionBuilder.m_createLabel__java_lang_String("label2").m_setRender__org_pepstock_charba_client_labels_enums_Render(Render.f_PERCENTAGE__org_pepstock_charba_client_labels_enums_Render).m_setColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_WHITE__org_pepstock_charba_client_colors_HtmlColor).m_setPrecision__int(2).m_setFontSize__int(32).m_setOverlap__boolean(false).m_getOptionsBuilder__().m_build__();
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(LabelsPlugin.f_ID__org_pepstock_charba_client_labels_LabelsPlugin, options);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(this.f_myMonths__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_, false));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_LabelsPolarCase_ = PolarAreaChart.$create__();
 }
 
 static $clinit() {
  LabelsPolarCase.$clinit = () =>{};
  LabelsPolarCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LabelsPolarCase;
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
  PolarAreaChart = goog.module.get('org.pepstock.charba.client.PolarAreaChart$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  PolarAreaDataset = goog.module.get('org.pepstock.charba.client.data.PolarAreaDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  LabelsOptionsBuilder = goog.module.get('org.pepstock.charba.client.labels.LabelsOptionsBuilder$impl');
  LabelsPlugin = goog.module.get('org.pepstock.charba.client.labels.LabelsPlugin$impl');
  Position = goog.module.get('org.pepstock.charba.client.labels.enums.Position$impl');
  Render = goog.module.get('org.pepstock.charba.client.labels.enums.Render$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(LabelsPolarCase, "org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsPolarCase");

exports = LabelsPolarCase;

//# sourceMappingURL=LabelsPolarCase.js.map
