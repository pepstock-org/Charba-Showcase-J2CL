goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomDragTimeAxisCase$impl');

const $Long = goog.require('nativebootstrap.Long$impl');
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
let Date = goog.forwardDeclare('java.util.Date$impl');
let ScatterChart = goog.forwardDeclare('org.pepstock.charba.client.ScatterChart$impl');
let DateAdapter = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapter$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let CartesianTimeAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianTimeAxis$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let ScatterDataset = goog.forwardDeclare('org.pepstock.charba.client.data.ScatterDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let DefaultTransitionKey = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultTransitionKey$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let InteractionAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionAxis$impl');
let ModifierKey = goog.forwardDeclare('org.pepstock.charba.client.enums.ModifierKey$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');
let ScaleRange = goog.forwardDeclare('org.pepstock.charba.client.zoom.ScaleRange$impl');
let ZoomOptions = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomOptions$impl');
let ZoomPlugin = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomDragTimeAxisCase.$1$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class ZoomDragTimeAxisCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_;
  /**@type {HTMLInputElement}*/
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_;
  /**@type {HTMLInputElement}*/
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_;
  /**@type {HTMLDivElement}*/
  this.f_help__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_;
  /**@type {ScatterChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_;
  /**@type {!$Long}*/
  this.f_time__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_ = $Long.fromInt(0);
 }
 /** @return {!ZoomDragTimeAxisCase} */
 static $create__() {
  ZoomDragTimeAxisCase.$clinit();
  let $instance = new ZoomDragTimeAxisCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  let adapter = DateAdapter.$create__();
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.m_getOptions__().m_setMaintainAspectRatio__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Drag to zoom on cartesian time axis"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.m_getOptions__().m_getTooltips__().m_setTitleMarginBottom__int(10);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.m_getOptions__().m_getTooltips__().m_getCallbacks__().m_setTitleCallback__org_pepstock_charba_client_callbacks_TooltipTitleCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase__org_pepstock_charba_client_adapters_DateAdapter(this, adapter));
  let dataset1 = /**@type {ScatterDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.m_newDataset__(), ScatterDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  dataset1.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  let color1 = GoogleChartColor.m_values__()[0];
  dataset1.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setBorderColor__java_lang_String(color1.m_toHex__());
  this.f_time__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_ = Date.$create__().m_getTime__();
  let xs1 = this.m_getRandomDigits__int__double__double(ZoomDragTimeAxisCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_, 0, 1000);
  let points = dataset1.m_getDataPoints__boolean(true);
  for (let i = ZoomDragTimeAxisCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_ - 1 | 0; i >= 0; i = i - 1 | 0) {
   let newTime = $LongUtils.$plus(this.f_time__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_, $Primitives.$narrowDoubleToLong(Math.random() * $Primitives.$widenLongToDouble(ZoomDragTimeAxisCase.f_MAX_DAYS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_)));
   let dp = DataPoint.$create__();
   dp.m_setX__java_util_Date(Date.$create__long(newTime));
   dp.m_setY__double(xs1[i]);
   points.add(dp);
  }
  let axis = CartesianTimeAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_);
  axis.m_getTicks__().m_setAutoSkip__boolean(true);
  axis.m_getTicks__().m_setAutoSkipPadding__int(50);
  axis.m_getTicks__().m_setMaxRotation__int(0);
  axis.m_getTime__().m_getDisplayFormats__().m_setDisplayFormat__org_pepstock_charba_client_enums_TimeUnit__java_lang_String(TimeUnit.f_HOUR__org_pepstock_charba_client_enums_TimeUnit, "HH:mm");
  axis.m_getTime__().m_getDisplayFormats__().m_setDisplayFormat__org_pepstock_charba_client_enums_TimeUnit__java_lang_String(TimeUnit.f_MINUTE__org_pepstock_charba_client_enums_TimeUnit, "HH:mm");
  axis.m_getTime__().m_getDisplayFormats__().m_setDisplayFormat__org_pepstock_charba_client_enums_TimeUnit__java_lang_String(TimeUnit.f_SECOND__org_pepstock_charba_client_enums_TimeUnit, "HH:mm:ss");
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_);
  axis2.m_setDisplay__boolean(true);
  axis2.m_setBeginAtZero__boolean(true);
  axis2.m_setStacked__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1], Dataset)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis, axis2], Axis)));
  let options = ZoomOptions.$create__();
  options.m_getPan__().m_setEnabled__boolean(true);
  options.m_getPan__().m_setMode__org_pepstock_charba_client_enums_InteractionAxis(InteractionAxis.f_XY__org_pepstock_charba_client_enums_InteractionAxis);
  options.m_getPan__().m_setModifierKey__org_pepstock_charba_client_enums_ModifierKey(ModifierKey.f_ALT__org_pepstock_charba_client_enums_ModifierKey);
  options.m_getZoom__().m_setMode__org_pepstock_charba_client_enums_InteractionAxis(InteractionAxis.f_XY__org_pepstock_charba_client_enums_InteractionAxis);
  options.m_getZoom__().m_getWheel__().m_setEnabled__boolean(true);
  options.m_getZoom__().m_getDrag__().m_setEnabled__boolean(true);
  options.m_getZoom__().m_getDrag__().m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_LIGHT_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor.m_alpha__double(0.2));
  options.m_getZoom__().m_getDrag__().m_setBorderColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_LIGHT_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor.m_alpha__double(0.6));
  options.m_getZoom__().m_getDrag__().m_setBorderWidth__int(1);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(ZoomPlugin.f_ID__org_pepstock_charba_client_zoom_ZoomPlugin, options);
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.appendChild(actionsRow);
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
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.id = zoomId;
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.checked = true;
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.onclick = (/** Event */ p0_2) =>{
   this.m_handleZoom__();
   return null;
  };
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.type = "checkbox";
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.className = "gwt-CheckBox";
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_);
  let panId = "pan" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForPan = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForPan.htmlFor = panId;
  labelForPan.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Pan enable"));
  actionsCol.appendChild(labelForPan);
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.id = panId;
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.checked = true;
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.onclick = (/** Event */ p0_3) =>{
   this.m_handlePan__();
   return null;
  };
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.type = "checkbox";
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.className = "gwt-CheckBox";
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_);
  let zoomNextWeek = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  zoomNextWeek.onclick = (/** Event */ p0_4) =>{
   this.m_handleZoomNextWeek__();
   return null;
  };
  zoomNextWeek.className = "gwt-Button";
  zoomNextWeek.textContent = "Zoom next week";
  zoomNextWeek.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(zoomNextWeek);
  let zoom400600 = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  zoom400600.onclick = (/** Event */ p0_5) =>{
   this.m_handleZoom400600__();
   return null;
  };
  zoom400600.className = "gwt-Button";
  zoom400600.textContent = "Zoom to 400-600";
  zoom400600.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(zoom400600);
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
  let helpRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  helpRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.appendChild(helpRow);
  let helpCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  helpCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  helpCol.style.textAlign = "center";
  helpCol.vAlign = "top";
  helpRow.appendChild(helpCol);
  this.f_help__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.innerHTML = "<kbd style=\"" + j_l_String.m_valueOf__java_lang_Object(ZoomDragTimeAxisCase.f_CSS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_) + "\">Alt</kbd> to pan";
  helpCol.appendChild(this.f_help__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_);
  let logRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  logRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.appendChild(logRow);
  let logCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  logCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  logCol.style.textAlign = "center";
  logCol.vAlign = "top";
  logRow.appendChild(logCol);
 }
 /** @override @return {HTMLElement} */
 m_getElement__() {
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    let scDataset = /**@type {ScatterDataset}*/ ($Casts.$to(dataset, ScatterDataset));
    let points = scDataset.m_getDataPoints__boolean(true);
    for (let $iterator_1 = points.m_iterator__(); $iterator_1.m_hasNext__(); ) {
     let dp = /**@type {DataPoint}*/ ($Casts.$to($iterator_1.m_next__(), DataPoint));
     {
      dp.m_setY__double(this.m_getRandomDigit__double__double(0, 1000));
     }
    }
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.m_update__();
 }
 
 m_handleResetZoom__() {
  ZoomPlugin.m_reset__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_);
 }
 
 m_handleZoom__() {
  let options = /**@type {ZoomOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.m_getOptions__().m_getPlugins__().m_getOptions__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ZoomPlugin.f_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin), ZoomOptions));
  options.m_getZoom__().m_getWheel__().m_setEnabled__boolean(this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.checked);
  options.m_getZoom__().m_getDrag__().m_setEnabled__boolean(this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.checked);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.m_update__();
 }
 
 m_handlePan__() {
  let options = /**@type {ZoomOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.m_getOptions__().m_getPlugins__().m_getOptions__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ZoomPlugin.f_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin), ZoomOptions));
  options.m_getPan__().m_setEnabled__boolean(this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.checked);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_.m_update__();
 }
 
 m_handleZoomNextWeek__() {
  let range = ScaleRange.$create__();
  range.m_setMin__double($Primitives.$widenLongToDouble(this.f_time__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_));
  range.m_setMax__double($Primitives.$widenLongToDouble($LongUtils.$plus(this.f_time__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_, $LongUtils.$times(ZoomDragTimeAxisCase.f_DAY__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_, $Long.fromInt(8)))));
  ZoomPlugin.m_zoomScale__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_zoom_ScaleRange__org_pepstock_charba_client_options_TransitionKey(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_, DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId, range, DefaultTransitionKey.f_DEFAULT__org_pepstock_charba_client_enums_DefaultTransitionKey);
 }
 
 m_handleZoom400600__() {
  let range = ScaleRange.$create__();
  range.m_setMin__double(400);
  range.m_setMax__double(600);
  ZoomPlugin.m_zoomScale__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_zoom_ScaleRange__org_pepstock_charba_client_options_TransitionKey(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_, DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId, range, DefaultTransitionKey.f_DEFAULT__org_pepstock_charba_client_enums_DefaultTransitionKey);
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase() {
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_help__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_ = /**@type {HTMLDivElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), HTMLDivElement_$Overlay));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_ = ScatterChart.$create__();
 }
 
 static $clinit() {
  ZoomDragTimeAxisCase.$clinit = () =>{};
  ZoomDragTimeAxisCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ZoomDragTimeAxisCase;
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
  Date = goog.module.get('java.util.Date$impl');
  ScatterChart = goog.module.get('org.pepstock.charba.client.ScatterChart$impl');
  DateAdapter = goog.module.get('org.pepstock.charba.client.adapters.DateAdapter$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  CartesianTimeAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianTimeAxis$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  ScatterDataset = goog.module.get('org.pepstock.charba.client.data.ScatterDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  DefaultTransitionKey = goog.module.get('org.pepstock.charba.client.enums.DefaultTransitionKey$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  InteractionAxis = goog.module.get('org.pepstock.charba.client.enums.InteractionAxis$impl');
  ModifierKey = goog.module.get('org.pepstock.charba.client.enums.ModifierKey$impl');
  TimeUnit = goog.module.get('org.pepstock.charba.client.enums.TimeUnit$impl');
  ScaleRange = goog.module.get('org.pepstock.charba.client.zoom.ScaleRange$impl');
  ZoomOptions = goog.module.get('org.pepstock.charba.client.zoom.ZoomOptions$impl');
  ZoomPlugin = goog.module.get('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomDragTimeAxisCase.$1$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {!$Long}*/
ZoomDragTimeAxisCase.f_DAY__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_ = $Long.fromInt(86400000);
/**@const {!$Long}*/
ZoomDragTimeAxisCase.f_MAX_DAYS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_ = $Long.fromInt(1728000000);
/**@const {number}*/
ZoomDragTimeAxisCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_ = 500;
/**@const {?string}*/
ZoomDragTimeAxisCase.f_CSS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomDragTimeAxisCase_ = "background: linear-gradient(180deg,#eee,#fff); background-color: rgba(0, 0, 0, 0); background-color: #eee; border: 1px solid #cdd5d7; border-radius: 6px; box-shadow: 0 1px 2px 1px #cdd5d7; font-family: consolas,courier,monospace; font-size: .9rem; font-weight: 700; line-height: 1; margin: 3px; padding: 4px 6px; white-space: nowrap;";
$Util.$setClassMetadata(ZoomDragTimeAxisCase, "org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomDragTimeAxisCase");

exports = ZoomDragTimeAxisCase;

//# sourceMappingURL=ZoomDragTimeAxisCase.js.map
