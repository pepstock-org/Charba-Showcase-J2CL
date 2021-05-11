goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase$impl');

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
let PieChart = goog.forwardDeclare('org.pepstock.charba.client.PieChart$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let PieDataset = goog.forwardDeclare('org.pepstock.charba.client.data.PieDataset$impl');
let DataLabelsOptions = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
let DataLabelsPlugin = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
let Align = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Align$impl');
let Anchor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Anchor$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let DefaultPluginId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultPluginId$impl');
let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase.$4$impl');
let $5 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase.$5$impl');
let $6 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase.$6$impl');
let $7 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase.$7$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class DataLabelsMultiLabelsCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_;
  /**@type {PieChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_;
 }
 /** @return {!DataLabelsMultiLabelsCase} */
 static $create__() {
  DataLabelsMultiLabelsCase.$clinit();
  let $instance = new DataLabelsMultiLabelsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.m_getOptions__().m_getTooltips__().m_setEnabled__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setTop__int(42);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setRight__int(16);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setBottom__int(32);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setLeft__int(8);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.m_getOptions__().m_getPlugins__().m_setEnabled__org_pepstock_charba_client_enums_DefaultPluginId__boolean(DefaultPluginId.f_LEGEND__org_pepstock_charba_client_enums_DefaultPluginId, false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.m_getOptions__().m_getPlugins__().m_setEnabled__org_pepstock_charba_client_enums_DefaultPluginId__boolean(DefaultPluginId.f_TITLE__org_pepstock_charba_client_enums_DefaultPluginId, false);
  let dataset1 = /**@type {PieDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.m_newDataset__(), PieDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  dataset1.m_setBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(this.m_getSequenceColors__int__double(DataLabelsMultiLabelsCase.f_DATASET_NUMBER__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_, 1));
  dataset1.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(DataLabelsMultiLabelsCase.f_DATASET_NUMBER__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_, false));
  let option1 = DataLabelsOptions.$create__();
  let index = option1.m_getLabels__().m_createLabel__java_lang_String("index");
  index.m_setAlign__org_pepstock_charba_client_datalabels_enums_Align(Align.f_END__org_pepstock_charba_client_datalabels_enums_Align);
  index.m_setAnchor__org_pepstock_charba_client_datalabels_enums_Anchor(Anchor.f_END__org_pepstock_charba_client_datalabels_enums_Anchor);
  index.m_setDisplay__boolean(true);
  index.m_getFont__().m_setSize__int(18);
  index.m_setColor__org_pepstock_charba_client_callbacks_ColorCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase(this));
  index.m_setOffset__int(8);
  index.m_setFormatter__org_pepstock_charba_client_datalabels_callbacks_FormatterCallback($2.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase(this));
  index.m_setOpacity__org_pepstock_charba_client_datalabels_callbacks_OpacityCallback($3.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase(this));
  let name = option1.m_getLabels__().m_createLabel__java_lang_String("name");
  name.m_setAlign__org_pepstock_charba_client_datalabels_enums_Align(Align.f_TOP__org_pepstock_charba_client_datalabels_enums_Align);
  name.m_getFont__().m_setSize__int(18);
  name.m_setDisplay__boolean(true);
  name.m_setFormatter__org_pepstock_charba_client_datalabels_callbacks_FormatterCallback($4.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase(this));
  let value = option1.m_getLabels__().m_createLabel__java_lang_String("value");
  value.m_setAlign__org_pepstock_charba_client_datalabels_enums_Align(Align.f_BOTTOM__org_pepstock_charba_client_datalabels_enums_Align);
  value.m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback($5.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase(this));
  value.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_WHITE__org_pepstock_charba_client_colors_HtmlColor);
  value.m_setBorderWidth__int(2);
  value.m_setBorderRadius__double(4);
  value.m_setColor__org_pepstock_charba_client_callbacks_ColorCallback($6.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase(this));
  value.m_setFormatter__org_pepstock_charba_client_datalabels_callbacks_FormatterCallback($7.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase(this));
  value.m_getPadding__().m_set__int(6);
  value.m_setDisplay__boolean(true);
  dataset1.m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, option1);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1], Dataset)));
  let option = DataLabelsOptions.$create__();
  option.m_setColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_WHITE__org_pepstock_charba_client_colors_HtmlColor);
  option.m_getFont__().m_setWeight__org_pepstock_charba_client_enums_Weight(Weight.f_BOLD__org_pepstock_charba_client_enums_Weight);
  option.m_setDisplay__boolean(false);
  option.m_setOffset__int(0);
  option.m_getPadding__().m_set__int(0);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, option);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.appendChild(actionsRow);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int__boolean(DataLabelsMultiLabelsCase.f_DATASET_NUMBER__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_, false));
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_ = PieChart.$create__();
 }
 
 static $clinit() {
  DataLabelsMultiLabelsCase.$clinit = () =>{};
  DataLabelsMultiLabelsCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataLabelsMultiLabelsCase;
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
  PieChart = goog.module.get('org.pepstock.charba.client.PieChart$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  PieDataset = goog.module.get('org.pepstock.charba.client.data.PieDataset$impl');
  DataLabelsOptions = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
  DataLabelsPlugin = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
  Align = goog.module.get('org.pepstock.charba.client.datalabels.enums.Align$impl');
  Anchor = goog.module.get('org.pepstock.charba.client.datalabels.enums.Anchor$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  DefaultPluginId = goog.module.get('org.pepstock.charba.client.enums.DefaultPluginId$impl');
  Weight = goog.module.get('org.pepstock.charba.client.enums.Weight$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase.$4$impl');
  $5 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase.$5$impl');
  $6 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase.$6$impl');
  $7 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase.$7$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number}*/
DataLabelsMultiLabelsCase.f_DATASET_NUMBER__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_ = 4;
$Util.$setClassMetadata(DataLabelsMultiLabelsCase, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase");

exports = DataLabelsMultiLabelsCase;

//# sourceMappingURL=DataLabelsMultiLabelsCase.js.map
