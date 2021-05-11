goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDoughnutCase$impl');

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
let DoughnutChart = goog.forwardDeclare('org.pepstock.charba.client.DoughnutChart$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let DoughnutDataset = goog.forwardDeclare('org.pepstock.charba.client.data.DoughnutDataset$impl');
let DataLabelsOptions = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
let DataLabelsPlugin = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
let Anchor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Anchor$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let DefaultPluginId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultPluginId$impl');
let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDoughnutCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDoughnutCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDoughnutCase.$3$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class DataLabelsDoughnutCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_;
  /**@type {DoughnutChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_;
 }
 /** @return {!DataLabelsDoughnutCase} */
 static $create__() {
  DataLabelsDoughnutCase.$clinit();
  let $instance = new DataLabelsDoughnutCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_getOptions__().m_getTooltips__().m_setEnabled__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setTop__int(42);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setRight__int(16);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setBottom__int(32);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setLeft__int(8);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_getOptions__().m_getPlugins__().m_setEnabled__org_pepstock_charba_client_enums_DefaultPluginId__boolean(DefaultPluginId.f_LEGEND__org_pepstock_charba_client_enums_DefaultPluginId, false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_getOptions__().m_getPlugins__().m_setEnabled__org_pepstock_charba_client_enums_DefaultPluginId__boolean(DefaultPluginId.f_TITLE__org_pepstock_charba_client_enums_DefaultPluginId, false);
  let dataset1 = /**@type {DoughnutDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_newDataset__(), DoughnutDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  dataset1.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(this.m_getSequenceColors__int__double(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, 1));
  dataset1.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, false));
  let option1 = DataLabelsOptions.$create__();
  option1.m_setAnchor__org_pepstock_charba_client_datalabels_enums_Anchor(Anchor.f_END__org_pepstock_charba_client_datalabels_enums_Anchor);
  dataset1.m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, option1);
  let dataset2 = /**@type {DoughnutDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_newDataset__(), DoughnutDataset));
  dataset2.m_setLabel__java_lang_String("dataset 1");
  dataset2.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(this.m_getSequenceColors__int__double(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, 1));
  dataset2.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, false));
  let option2 = DataLabelsOptions.$create__();
  option2.m_setAnchor__org_pepstock_charba_client_datalabels_enums_Anchor(Anchor.f_CENTER__org_pepstock_charba_client_datalabels_enums_Anchor);
  option2.m_setBackgroundColor__java_lang_String(Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
  option2.m_setBorderWidth__int(0);
  dataset2.m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, option2);
  let dataset3 = /**@type {DoughnutDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_newDataset__(), DoughnutDataset));
  dataset3.m_setLabel__java_lang_String("dataset 1");
  dataset3.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(this.m_getSequenceColors__int__double(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, 1));
  dataset3.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, false));
  let option3 = DataLabelsOptions.$create__();
  option3.m_setAnchor__org_pepstock_charba_client_datalabels_enums_Anchor(Anchor.f_START__org_pepstock_charba_client_datalabels_enums_Anchor);
  dataset3.m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, option3);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1, dataset2, dataset3], Dataset)));
  let option = DataLabelsOptions.$create__();
  option.m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase(this));
  option.m_setDisplay__org_pepstock_charba_client_datalabels_callbacks_DisplayCallback($2.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase(this));
  option.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_WHITE__org_pepstock_charba_client_colors_HtmlColor);
  option.m_setBorderRadius__double(25);
  option.m_setBorderWidth__int(2);
  option.m_setColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_WHITE__org_pepstock_charba_client_colors_HtmlColor);
  option.m_getFont__().m_setWeight__org_pepstock_charba_client_enums_Weight(Weight.f_BOLD__org_pepstock_charba_client_enums_Weight);
  option.m_setFormatter__org_pepstock_charba_client_datalabels_callbacks_FormatterCallback($3.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase(this));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, option);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.appendChild(actionsRow);
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
  let addData = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  addData.onclick = (/** Event */ p0_1) =>{
   this.m_handleAddData__();
   return null;
  };
  addData.className = "gwt-Button";
  addData.textContent = "Add data";
  addData.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(addData);
  let removeData = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  removeData.onclick = (/** Event */ p0_2) =>{
   this.m_handleRemoveData__();
   return null;
  };
  removeData.className = "gwt-Button";
  removeData.textContent = "Remove data";
  removeData.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(removeData);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, false));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_update__();
 }
 
 m_handleAddData__() {
  if (this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite < 12) {
   this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_getData__().m_getLabels__().m_add__java_lang_String(this.m_getLabel__());
   this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite = this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite + 1 | 0;
   let datasets = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_getData__().m_getDatasets__();
   for (let $iterator = datasets.m_iterator__(); $iterator.m_hasNext__(); ) {
    let ds = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
    {
     let pds = /**@type {DoughnutDataset}*/ ($Casts.$to(ds, DoughnutDataset));
     pds.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(this.m_getSequenceColors__int__double(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, 1));
     pds.m_getData__().add(this.m_getRandomDigit__boolean(false));
    }
   }
   this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_update__();
  }
 }
 
 m_handleRemoveData__() {
  this.m_removeData__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_);
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_ = DoughnutChart.$create__();
 }
 
 static $clinit() {
  DataLabelsDoughnutCase.$clinit = () =>{};
  DataLabelsDoughnutCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataLabelsDoughnutCase;
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
  DoughnutChart = goog.module.get('org.pepstock.charba.client.DoughnutChart$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  DoughnutDataset = goog.module.get('org.pepstock.charba.client.data.DoughnutDataset$impl');
  DataLabelsOptions = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
  DataLabelsPlugin = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
  Anchor = goog.module.get('org.pepstock.charba.client.datalabels.enums.Anchor$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  DefaultPluginId = goog.module.get('org.pepstock.charba.client.enums.DefaultPluginId$impl');
  Weight = goog.module.get('org.pepstock.charba.client.enums.Weight$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDoughnutCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDoughnutCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDoughnutCase.$3$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(DataLabelsDoughnutCase, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDoughnutCase");

exports = DataLabelsDoughnutCase;

//# sourceMappingURL=DataLabelsDoughnutCase.js.map
