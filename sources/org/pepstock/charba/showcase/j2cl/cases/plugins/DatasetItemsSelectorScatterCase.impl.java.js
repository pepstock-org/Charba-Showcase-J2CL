goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorScatterCase$impl');

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
let ScatterChart = goog.forwardDeclare('org.pepstock.charba.client.ScatterChart$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let ScatterDataset = goog.forwardDeclare('org.pepstock.charba.client.data.ScatterDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let DatasetRangeCleanSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeCleanSelectionEvent$impl');
let DatasetRangeSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeSelectionEvent$impl');
let DatasetsItemsSelector = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector$impl');
let DatasetsItemsSelectorOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');
let LogView = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.LogView$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorScatterCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorScatterCase.$2$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class DatasetItemsSelectorScatterCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_;
  /**@type {ScatterChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_;
  /**@type {LogView}*/
  this.f_mylog__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_;
 }
 /** @return {!DatasetItemsSelectorScatterCase} */
 static $create__() {
  DatasetItemsSelectorScatterCase.$clinit();
  let $instance = new DatasetItemsSelectorScatterCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.m_getOptions__().m_setAspectRatio__double(2.5);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Dataset items selector plugin on scatter chart"], j_l_String)));
  let dataset1 = /**@type {ScatterDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.m_newDataset__(), ScatterDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  let color1 = GoogleChartColor.m_values__()[0];
  dataset1.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setBorderColor__java_lang_String(color1.m_toHex__());
  let xs1 = this.m_getRandomDigits__int(DatasetItemsSelectorScatterCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_);
  let ys1 = this.m_getRandomDigits__int(DatasetItemsSelectorScatterCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_);
  let dp1 = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([DatasetItemsSelectorScatterCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_], DataPoint));
  for (let i = 0; i < DatasetItemsSelectorScatterCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_; i = i + 1 | 0) {
   $Arrays.$set(dp1, i, DataPoint.$create__());
   dp1[i].m_setX__double(xs1[i]);
   dp1[i].m_setY__double(ys1[i]);
  }
  dataset1.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(dp1);
  let dataset2 = /**@type {ScatterDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.m_newDataset__(), ScatterDataset));
  dataset2.m_setLabel__java_lang_String("dataset 2");
  let color2 = GoogleChartColor.m_values__()[1];
  dataset2.m_setBackgroundColor__java_lang_String(color2.m_toHex__());
  dataset2.m_setBorderColor__java_lang_String(color2.m_toHex__());
  let xs2 = this.m_getRandomDigits__int(DatasetItemsSelectorScatterCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_);
  let ys2 = this.m_getRandomDigits__int(DatasetItemsSelectorScatterCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_);
  let dp2 = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([DatasetItemsSelectorScatterCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_], DataPoint));
  for (let i_1 = 0; i_1 < DatasetItemsSelectorScatterCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_; i_1 = i_1 + 1 | 0) {
   $Arrays.$set(dp2, i_1, DataPoint.$create__());
   dp2[i_1].m_setX__double(xs2[i_1]);
   dp2[i_1].m_setY__double(ys2[i_1]);
  }
  dataset2.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(dp2);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1, dataset2], Dataset)));
  let pOptions = DatasetsItemsSelectorOptions.$create__();
  pOptions.m_setBorderWidth__int(2);
  pOptions.m_setBorderDash__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([6, 3, 6], $int)));
  pOptions.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_GREY__org_pepstock_charba_client_colors_HtmlColor);
  pOptions.m_getSelectionCleaner__().m_setDisplay__boolean(true);
  pOptions.m_getSelectionCleaner__().m_setLabel__java_lang_String("Reset selection");
  pOptions.m_getSelectionCleaner__().m_setPadding__int(6);
  pOptions.m_getSelectionCleaner__().m_getFont__().m_setSize__int(16);
  pOptions.m_setColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_AZURE__org_pepstock_charba_client_colors_HtmlColor.m_alpha__double(DatasetsItemsSelectorOptions.f_DEFAULT_ALPHA__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(DatasetsItemsSelector.f_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector, pOptions);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.m_getPlugins__().m_add__org_pepstock_charba_client_Plugin(DatasetsItemsSelector.m_get__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType($1.$create__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase(this), DatasetRangeCleanSelectionEvent.f_TYPE__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEvent);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType($2.$create__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase(this), DatasetRangeSelectionEvent.f_TYPE__org_pepstock_charba_client_events_DatasetRangeSelectionEvent);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.appendChild(actionsRow);
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
  let logRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  logRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.appendChild(logRow);
  let logCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  logCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  logCol.style.textAlign = "center";
  logCol.vAlign = "top";
  logRow.appendChild(logCol);
  logCol.appendChild(this.f_mylog__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.m_getElement__());
 }
 /** @override @return {HTMLElement} */
 m_getElement__() {
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    let scDataset = /**@type {ScatterDataset}*/ ($Casts.$to(dataset, ScatterDataset));
    for (let $iterator_1 = scDataset.m_getDataPoints__().m_iterator__(); $iterator_1.m_hasNext__(); ) {
     let dp = /**@type {DataPoint}*/ ($Casts.$to($iterator_1.m_next__(), DataPoint));
     {
      dp.m_setX__double(this.m_getRandomDigit__());
      dp.m_setY__double(this.m_getRandomDigit__());
     }
    }
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.m_update__();
 }
 
 m_handleAddDataset__() {
  let datasets = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.m_getData__().m_getDatasets__();
  let dataset = /**@type {ScatterDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.m_newDataset__(), ScatterDataset));
  dataset.m_setLabel__java_lang_String("dataset " + (datasets.size() + 1 | 0));
  let color = GoogleChartColor.m_values__()[datasets.size()];
  dataset.m_setBackgroundColor__java_lang_String(color.m_toHex__());
  dataset.m_setBorderColor__java_lang_String(color.m_toHex__());
  let xs2 = this.m_getRandomDigits__int(DatasetItemsSelectorScatterCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_);
  let ys2 = this.m_getRandomDigits__int(DatasetItemsSelectorScatterCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_);
  let dp2 = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([DatasetItemsSelectorScatterCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_], DataPoint));
  for (let i = 0; i < DatasetItemsSelectorScatterCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_; i = i + 1 | 0) {
   $Arrays.$set(dp2, i, DataPoint.$create__());
   dp2[i].m_setX__double(xs2[i]);
   dp2[i].m_setY__double(ys2[i]);
  }
  dataset.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(dp2);
  datasets.add(dataset);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_.m_update__();
 }
 
 m_handleRemoveDataset__() {
  this.m_removeDataset__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_);
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_ = ScatterChart.$create__();
  this.f_mylog__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_ = LogView.$create__int(4);
 }
 
 static $clinit() {
  DatasetItemsSelectorScatterCase.$clinit = () =>{};
  DatasetItemsSelectorScatterCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetItemsSelectorScatterCase;
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
  ScatterChart = goog.module.get('org.pepstock.charba.client.ScatterChart$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  ScatterDataset = goog.module.get('org.pepstock.charba.client.data.ScatterDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  DatasetRangeCleanSelectionEvent = goog.module.get('org.pepstock.charba.client.events.DatasetRangeCleanSelectionEvent$impl');
  DatasetRangeSelectionEvent = goog.module.get('org.pepstock.charba.client.events.DatasetRangeSelectionEvent$impl');
  DatasetsItemsSelector = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector$impl');
  DatasetsItemsSelectorOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');
  LogView = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.commons.LogView$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorScatterCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorScatterCase.$2$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@const {number}*/
DatasetItemsSelectorScatterCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorScatterCase_ = 16;
$Util.$setClassMetadata(DatasetItemsSelectorScatterCase, "org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorScatterCase");

exports = DatasetItemsSelectorScatterCase;

//# sourceMappingURL=DatasetItemsSelectorScatterCase.js.map
