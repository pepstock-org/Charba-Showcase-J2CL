goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomDragLineareAxisCase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

let MarginRightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('elemental2.dom.Document.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
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
let InteractionAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionAxis$impl');
let ModifierKey = goog.forwardDeclare('org.pepstock.charba.client.enums.ModifierKey$impl');
let ZoomOptions = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomOptions$impl');
let ZoomPlugin = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class ZoomDragLineareAxisCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_;
  /**@type {HTMLInputElement}*/
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_;
  /**@type {HTMLInputElement}*/
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_;
  /**@type {HTMLDivElement}*/
  this.f_help__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_;
  /**@type {ScatterChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_;
 }
 /** @return {!ZoomDragLineareAxisCase} */
 static $create__() {
  ZoomDragLineareAxisCase.$clinit();
  let $instance = new ZoomDragLineareAxisCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Drag to zoom on cartesian linear axis"], j_l_String)));
  let dataset1 = /**@type {ScatterDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.m_newDataset__(), ScatterDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  let color1 = GoogleChartColor.m_values__()[0];
  dataset1.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setBorderColor__java_lang_String(color1.m_toHex__());
  let xs1 = this.m_getRandomDigits__int(ZoomDragLineareAxisCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_);
  let ys1 = this.m_getRandomDigits__int(ZoomDragLineareAxisCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_);
  let dp1 = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([ZoomDragLineareAxisCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_], DataPoint));
  for (let i = 0; i < ZoomDragLineareAxisCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_; i = i + 1 | 0) {
   $Arrays.$set(dp1, i, DataPoint.$create__());
   dp1[i].m_setX__double(xs1[i]);
   dp1[i].m_setY__double(ys1[i]);
  }
  dataset1.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(dp1);
  let dataset2 = /**@type {ScatterDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.m_newDataset__(), ScatterDataset));
  dataset2.m_setLabel__java_lang_String("dataset 2");
  let color2 = GoogleChartColor.m_values__()[1];
  dataset2.m_setBackgroundColor__java_lang_String(color2.m_toHex__());
  dataset2.m_setBorderColor__java_lang_String(color2.m_toHex__());
  let xs2 = this.m_getRandomDigits__int(ZoomDragLineareAxisCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_);
  let ys2 = this.m_getRandomDigits__int(ZoomDragLineareAxisCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_);
  let dp2 = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([ZoomDragLineareAxisCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_], DataPoint));
  for (let i_1 = 0; i_1 < ZoomDragLineareAxisCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_; i_1 = i_1 + 1 | 0) {
   $Arrays.$set(dp2, i_1, DataPoint.$create__());
   dp2[i_1].m_setX__double(xs2[i_1]);
   dp2[i_1].m_setY__double(ys2[i_1]);
  }
  dataset2.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(dp2);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1, dataset2], Dataset)));
  let options = ZoomOptions.$create__();
  options.m_getPan__().m_setEnabled__boolean(true);
  options.m_getPan__().m_setMode__org_pepstock_charba_client_enums_InteractionAxis(InteractionAxis.f_XY__org_pepstock_charba_client_enums_InteractionAxis);
  options.m_getPan__().m_setModifierKey__org_pepstock_charba_client_enums_ModifierKey(ModifierKey.f_ALT__org_pepstock_charba_client_enums_ModifierKey);
  options.m_getZoom__().m_setEnabled__boolean(true);
  options.m_getZoom__().m_setDrag__boolean(true);
  options.m_getZoom__().m_setMode__org_pepstock_charba_client_enums_InteractionAxis(InteractionAxis.f_XY__org_pepstock_charba_client_enums_InteractionAxis);
  let drag = ZoomPlugin.m_createDrag__();
  drag.m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_LIGHT_GREEN__org_pepstock_charba_client_colors_HtmlColor.m_alpha__double(0.2));
  drag.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_LIGHT_GREEN__org_pepstock_charba_client_colors_HtmlColor.m_alpha__double(0.6));
  drag.m_setBorderWidth__int(1);
  options.m_getZoom__().m_setDrag__org_pepstock_charba_client_zoom_Drag(drag);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(ZoomPlugin.f_ID__org_pepstock_charba_client_zoom_ZoomPlugin, options);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.appendChild(actionsRow);
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
  let zoomId = "zoom" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForZoom = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForZoom.htmlFor = zoomId;
  labelForZoom.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Zoom enable"));
  actionsCol.appendChild(labelForZoom);
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.id = zoomId;
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.checked = true;
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.onclick = (/** Event */ p0_2) =>{
   this.m_handleZoom__();
   return null;
  };
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.type = "checkbox";
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.className = "gwt-CheckBox";
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_);
  let panId = "pan" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForPan = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForPan.htmlFor = panId;
  labelForPan.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Pan enable"));
  actionsCol.appendChild(labelForPan);
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.id = panId;
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.checked = true;
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.onclick = (/** Event */ p0_3) =>{
   this.m_handlePan__();
   return null;
  };
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.type = "checkbox";
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.className = "gwt-CheckBox";
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_);
  let github = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  github.onclick = (/** Event */ p0_4) =>{
   goog.global.window.open(this.m_getUrl__(), "_blank", "");
   return null;
  };
  github.className = "gwt-Button";
  let img = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), HTMLImageElement_$Overlay));
  img.src = "images/GitHub-Mark-32px.png";
  github.appendChild(img);
  actionsCol.appendChild(github);
  let helpRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  helpRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.appendChild(helpRow);
  let helpCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  helpCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  helpCol.style.textAlign = "center";
  helpCol.vAlign = "top";
  helpRow.appendChild(helpCol);
  this.f_help__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.innerHTML = "<kbd style=\"" + j_l_String.m_valueOf__java_lang_Object(ZoomDragLineareAxisCase.f_CSS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_) + "\">Alt</kbd> to pan";
  helpCol.appendChild(this.f_help__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_);
  let logRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  logRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.appendChild(logRow);
  let logCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  logCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  logCol.style.textAlign = "center";
  logCol.vAlign = "top";
  logRow.appendChild(logCol);
 }
 /** @override @return {HTMLElement} */
 m_getElement__() {
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
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
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.m_update__();
 }
 
 m_handleResetZoom__() {
  ZoomPlugin.m_reset__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_);
 }
 
 m_handleZoom__() {
  let options = /**@type {ZoomOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.m_getOptions__().m_getPlugins__().m_getOptions__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ZoomPlugin.f_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin), ZoomOptions));
  options.m_getZoom__().m_setEnabled__boolean(this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.checked);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.m_update__();
 }
 
 m_handlePan__() {
  let options = /**@type {ZoomOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.m_getOptions__().m_getPlugins__().m_getOptions__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ZoomPlugin.f_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin), ZoomOptions));
  options.m_getPan__().m_setEnabled__boolean(this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.checked);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase() {
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_help__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_ = /**@type {HTMLDivElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), HTMLDivElement_$Overlay));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_ = ScatterChart.$create__();
 }
 
 static $clinit() {
  ZoomDragLineareAxisCase.$clinit = () =>{};
  ZoomDragLineareAxisCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ZoomDragLineareAxisCase;
 }
 
 static $loadModules() {
  MarginRightUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  Document_$Overlay = goog.module.get('elemental2.dom.Document.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
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
  InteractionAxis = goog.module.get('org.pepstock.charba.client.enums.InteractionAxis$impl');
  ModifierKey = goog.module.get('org.pepstock.charba.client.enums.ModifierKey$impl');
  ZoomOptions = goog.module.get('org.pepstock.charba.client.zoom.ZoomOptions$impl');
  ZoomPlugin = goog.module.get('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {number}*/
ZoomDragLineareAxisCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_ = 60;
/**@const {?string}*/
ZoomDragLineareAxisCase.f_CSS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragLineareAxisCase_ = "background: linear-gradient(180deg,#eee,#fff); background-color: rgba(0, 0, 0, 0); background-color: #eee; border: 1px solid #cdd5d7; border-radius: 6px; box-shadow: 0 1px 2px 1px #cdd5d7; font-family: consolas,courier,monospace; font-size: .9rem; font-weight: 700; line-height: 1; margin: 3px; padding: 4px 6px; white-space: nowrap;";
$Util.$setClassMetadata(ZoomDragLineareAxisCase, "org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomDragLineareAxisCase");

exports = ZoomDragLineareAxisCase;

//# sourceMappingURL=ZoomDragLineareAxisCase.js.map
