goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomApiPanCase$impl');

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
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let ScatterDataset = goog.forwardDeclare('org.pepstock.charba.client.data.ScatterDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let DefaultTransitionKey = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultTransitionKey$impl');
let InteractionAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionAxis$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Amount = goog.forwardDeclare('org.pepstock.charba.client.zoom.Amount$impl');
let ZoomOptions = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomOptions$impl');
let ZoomPlugin = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ZoomApiPanCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_;
  /**@type {ScatterChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_;
 }
 /** @return {!ZoomApiPanCase} */
 static $create__() {
  ZoomApiPanCase.$clinit();
  let $instance = new ZoomApiPanCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Programmatically pan on scatter chart"], j_l_String)));
  let dataset1 = /**@type {ScatterDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_.m_newDataset__(), ScatterDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  let color1 = GoogleChartColor.m_values__()[0];
  dataset1.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setBorderColor__java_lang_String(color1.m_toHex__());
  let xs1 = this.m_getRandomDigits__int(ZoomApiPanCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_);
  let ys1 = this.m_getRandomDigits__int(ZoomApiPanCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_);
  let dp1 = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([ZoomApiPanCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_], DataPoint));
  for (let i = 0; i < ZoomApiPanCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_; i = i + 1 | 0) {
   $Arrays.$set(dp1, i, DataPoint.$create__());
   dp1[i].m_setX__double(xs1[i]);
   dp1[i].m_setY__double(ys1[i]);
  }
  dataset1.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(dp1);
  let dataset2 = /**@type {ScatterDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_.m_newDataset__(), ScatterDataset));
  dataset2.m_setLabel__java_lang_String("dataset 2");
  let color2 = GoogleChartColor.m_values__()[1];
  dataset2.m_setBackgroundColor__java_lang_String(color2.m_toHex__());
  dataset2.m_setBorderColor__java_lang_String(color2.m_toHex__());
  let xs2 = this.m_getRandomDigits__int(ZoomApiPanCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_);
  let ys2 = this.m_getRandomDigits__int(ZoomApiPanCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_);
  let dp2 = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([ZoomApiPanCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_], DataPoint));
  for (let i_1 = 0; i_1 < ZoomApiPanCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_; i_1 = i_1 + 1 | 0) {
   $Arrays.$set(dp2, i_1, DataPoint.$create__());
   dp2[i_1].m_setX__double(xs2[i_1]);
   dp2[i_1].m_setY__double(ys2[i_1]);
  }
  dataset2.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(dp2);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1, dataset2], Dataset)));
  let options = ZoomOptions.$create__();
  options.m_getPan__().m_setEnabled__boolean(true);
  options.m_getZoom__().m_setEnabled__boolean(false);
  options.m_getZoom__().m_setMode__org_pepstock_charba_client_enums_InteractionAxis(InteractionAxis.f_XY__org_pepstock_charba_client_enums_InteractionAxis);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(ZoomPlugin.f_ID__org_pepstock_charba_client_zoom_ZoomPlugin, options);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_.appendChild(actionsRow);
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
  let reset = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  reset.onclick = (/** Event */ p0_1) =>{
   this.m_handleResetZoom__();
   return null;
  };
  reset.className = "gwt-Button";
  reset.textContent = "Reset zoom";
  reset.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(reset);
  let panXplus100 = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  panXplus100.onclick = (/** Event */ p0_2) =>{
   this.m_handlePanXPlus100__();
   return null;
  };
  panXplus100.className = "gwt-Button";
  panXplus100.textContent = "Pan x +100px";
  panXplus100.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(panXplus100);
  let panXminus100 = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  panXminus100.onclick = (/** Event */ p0_3) =>{
   this.m_handlePanXMinus100__();
   return null;
  };
  panXminus100.className = "gwt-Button";
  panXminus100.textContent = "Pan x -100px";
  panXminus100.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(panXminus100);
  let panYplus100 = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  panYplus100.onclick = (/** Event */ p0_4) =>{
   this.m_handlePanYPlus100__();
   return null;
  };
  panYplus100.className = "gwt-Button";
  panYplus100.textContent = "Pan y +100px";
  panYplus100.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(panYplus100);
  let panYminus100 = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  panYminus100.onclick = (/** Event */ p0_5) =>{
   this.m_handlePanYMinus100__();
   return null;
  };
  panYminus100.className = "gwt-Button";
  panYminus100.textContent = "Pan y -100px";
  panYminus100.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(panYminus100);
  let github = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  github.onclick = (/** Event */ p0_6) =>{
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
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
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_.m_update__();
 }
 
 m_handleResetZoom__() {
  ZoomPlugin.m_reset__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_);
 }
 
 m_handlePanXPlus100__() {
  ZoomPlugin.m_pan__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_zoom_Amount__org_pepstock_charba_client_options_IsTransitionKey(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_, Amount.$create__double(100), DefaultTransitionKey.f_DEFAULT__org_pepstock_charba_client_enums_DefaultTransitionKey);
 }
 
 m_handlePanXMinus100__() {
  ZoomPlugin.m_pan__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_zoom_Amount__org_pepstock_charba_client_options_IsTransitionKey(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_, Amount.$create__double(-100 | 0), DefaultTransitionKey.f_DEFAULT__org_pepstock_charba_client_enums_DefaultTransitionKey);
 }
 
 m_handlePanYPlus100__() {
  ZoomPlugin.m_pan__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_zoom_Amount__org_pepstock_charba_client_options_IsTransitionKey(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_, Amount.$create__double__double(Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined, 100), DefaultTransitionKey.f_DEFAULT__org_pepstock_charba_client_enums_DefaultTransitionKey);
 }
 
 m_handlePanYMinus100__() {
  ZoomPlugin.m_pan__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_zoom_Amount__org_pepstock_charba_client_options_IsTransitionKey(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_, Amount.$create__double__double(Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined, -100 | 0), DefaultTransitionKey.f_DEFAULT__org_pepstock_charba_client_enums_DefaultTransitionKey);
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_ = ScatterChart.$create__();
 }
 
 static $clinit() {
  ZoomApiPanCase.$clinit = () =>{};
  ZoomApiPanCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ZoomApiPanCase;
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
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  ScatterDataset = goog.module.get('org.pepstock.charba.client.data.ScatterDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  DefaultTransitionKey = goog.module.get('org.pepstock.charba.client.enums.DefaultTransitionKey$impl');
  InteractionAxis = goog.module.get('org.pepstock.charba.client.enums.InteractionAxis$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Amount = goog.module.get('org.pepstock.charba.client.zoom.Amount$impl');
  ZoomOptions = goog.module.get('org.pepstock.charba.client.zoom.ZoomOptions$impl');
  ZoomPlugin = goog.module.get('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number}*/
ZoomApiPanCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomApiPanCase_ = 120;
$Util.$setClassMetadata(ZoomApiPanCase, "org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomApiPanCase");

exports = ZoomApiPanCase;

//# sourceMappingURL=ZoomApiPanCase.js.map
