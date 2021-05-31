goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomOverScaleCase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

let MarginRightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('elemental2.dom.Document.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
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
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let ScatterDataset = goog.forwardDeclare('org.pepstock.charba.client.data.ScatterDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let CursorType = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.CursorType$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let InteractionAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionAxis$impl');
let AxisClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisClickEvent$impl');
let ChartPointer = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointer$impl');
let ChartPointerOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointerOptions$impl');
let PointerElement = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.PointerElement$impl');
let ZoomOptions = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomOptions$impl');
let ZoomPlugin = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomOverScaleCase.$1$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class ZoomOverScaleCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_;
  /**@type {HTMLInputElement}*/
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_;
  /**@type {HTMLInputElement}*/
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_;
  /**@type {ScatterChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_;
 }
 /** @return {!ZoomOverScaleCase} */
 static $create__() {
  ZoomOverScaleCase.$clinit();
  let $instance = new ZoomOverScaleCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Zooming on scatter chart"], j_l_String)));
  let dataset1 = /**@type {ScatterDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.m_newDataset__(), ScatterDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  let color1 = GoogleChartColor.m_values__()[0];
  dataset1.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setBorderColor__java_lang_String(color1.m_toHex__());
  let xs1 = this.m_getRandomDigits__int(ZoomOverScaleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_);
  let ys1 = this.m_getRandomDigits__int(ZoomOverScaleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_);
  let dp1 = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([ZoomOverScaleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_], DataPoint));
  for (let i = 0; i < ZoomOverScaleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_; i = i + 1 | 0) {
   $Arrays.$set(dp1, i, DataPoint.$create__());
   dp1[i].m_setX__double(xs1[i]);
   dp1[i].m_setY__double(ys1[i]);
  }
  dataset1.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(dp1);
  let dataset2 = /**@type {ScatterDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.m_newDataset__(), ScatterDataset));
  dataset2.m_setLabel__java_lang_String("dataset 2");
  let color2 = GoogleChartColor.m_values__()[3];
  dataset2.m_setBackgroundColor__java_lang_String(color2.m_toHex__());
  dataset2.m_setBorderColor__java_lang_String(color2.m_toHex__());
  let xs2 = this.m_getRandomDigits__int(ZoomOverScaleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_);
  let ys2 = this.m_getRandomDigits__int(ZoomOverScaleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_);
  let dp2 = /**@type {!Array<DataPoint>}*/ ($Arrays.$create([ZoomOverScaleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_], DataPoint));
  for (let i_1 = 0; i_1 < ZoomOverScaleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_; i_1 = i_1 + 1 | 0) {
   $Arrays.$set(dp2, i_1, DataPoint.$create__());
   dp2[i_1].m_setX__double(xs2[i_1]);
   dp2[i_1].m_setY__double(ys2[i_1]);
  }
  dataset2.m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(dp2);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1, dataset2], Dataset)));
  let axis1 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_AxisKind(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_, AxisKind.f_X__org_pepstock_charba_client_enums_AxisKind);
  axis1.m_setDisplay__boolean(true);
  axis1.m_getGrid__().m_setDisplay__boolean(true);
  axis1.m_getGrid__().m_setBorderColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_RED__org_pepstock_charba_client_colors_HtmlColor);
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_);
  axis2.m_setDisplay__boolean(true);
  axis2.m_getGrid__().m_setDisplay__boolean(true);
  axis2.m_getGrid__().m_setBorderColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_RED__org_pepstock_charba_client_colors_HtmlColor);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1, axis2], Axis)));
  let options = ZoomOptions.$create__();
  options.m_getPan__().m_setEnabled__boolean(true);
  options.m_getPan__().m_setOverScaleMode__org_pepstock_charba_client_enums_InteractionAxis(InteractionAxis.f_XY__org_pepstock_charba_client_enums_InteractionAxis);
  options.m_getZoom__().m_setOverScaleMode__org_pepstock_charba_client_enums_InteractionAxis(InteractionAxis.f_XY__org_pepstock_charba_client_enums_InteractionAxis);
  options.m_getZoom__().m_getWheel__().m_setEnabled__boolean(true);
  options.m_getLimits__().m_getX__().m_setMin__double(-200 | 0);
  options.m_getLimits__().m_getX__().m_setMax__double(200);
  options.m_getLimits__().m_getX__().m_setMinRange__double(20);
  options.m_getLimits__().m_getY__().m_setMin__double(-200 | 0);
  options.m_getLimits__().m_getY__().m_setMax__double(200);
  options.m_getLimits__().m_getY__().m_setMinRange__double(50);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(ZoomPlugin.f_ID__org_pepstock_charba_client_zoom_ZoomPlugin, options);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType($1.$create__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase(this), AxisClickEvent.f_TYPE__org_pepstock_charba_client_events_AxisClickEvent);
  let pointer = ChartPointerOptions.$create__();
  pointer.m_setElements__arrayOf_org_pepstock_charba_client_impl_plugins_enums_PointerElement(/**@type {!Array<PointerElement>}*/ ($Arrays.$init([PointerElement.f_AXES__org_pepstock_charba_client_impl_plugins_enums_PointerElement], PointerElement)));
  pointer.m_setCursorPointer__org_pepstock_charba_client_dom_enums_CursorType(CursorType.f_GRAB__org_pepstock_charba_client_dom_enums_CursorType);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.m_getOptions__().m_getPlugins__().m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(ChartPointer.f_ID__org_pepstock_charba_client_impl_plugins_ChartPointer, pointer);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.m_getPlugins__().m_add__org_pepstock_charba_client_Plugin(ChartPointer.m_get__());
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.appendChild(actionsRow);
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
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.id = zoomId;
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.checked = true;
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.onclick = (/** Event */ p0_2) =>{
   this.m_handleZoom__();
   return null;
  };
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.type = "checkbox";
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.className = "gwt-CheckBox";
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_);
  let panId = "pan" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForPan = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForPan.htmlFor = panId;
  labelForPan.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Pan enable"));
  actionsCol.appendChild(labelForPan);
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.id = panId;
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.checked = true;
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.onclick = (/** Event */ p0_3) =>{
   this.m_handlePan__();
   return null;
  };
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.type = "checkbox";
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.className = "gwt-CheckBox";
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_);
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
 }
 /** @override @return {HTMLElement} */
 m_getElement__() {
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
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
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.m_update__();
 }
 
 m_handleResetZoom__() {
  ZoomPlugin.m_reset__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_);
 }
 
 m_handleZoom__() {
  let options = /**@type {ZoomOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.m_getOptions__().m_getPlugins__().m_getOptions__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ZoomPlugin.f_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin), ZoomOptions));
  options.m_getZoom__().m_getWheel__().m_setEnabled__boolean(this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.checked);
  this.m_updatePointer___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase();
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.m_update__();
 }
 
 m_handlePan__() {
  let options = /**@type {ZoomOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.m_getOptions__().m_getPlugins__().m_getOptions__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ZoomPlugin.f_FACTORY__org_pepstock_charba_client_zoom_ZoomPlugin), ZoomOptions));
  options.m_getPan__().m_setEnabled__boolean(this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.checked);
  this.m_updatePointer___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase();
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.m_update__();
 }
 
 m_updatePointer___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase() {
  let pointer = /**@type {ChartPointerOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.m_getOptions__().m_getPlugins__().m_getOptions__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ChartPointer.f_FACTORY__org_pepstock_charba_client_impl_plugins_ChartPointer), ChartPointerOptions));
  if (this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.checked || this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_.checked) {
   pointer.m_setCursorPointer__org_pepstock_charba_client_dom_enums_CursorType(CursorType.f_GRAB__org_pepstock_charba_client_dom_enums_CursorType);
  } else {
   pointer.m_setCursorPointer__org_pepstock_charba_client_dom_enums_CursorType(CursorType.f_DEFAULT__org_pepstock_charba_client_dom_enums_CursorType);
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase() {
  this.f_enableZoom__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_enablePan__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_ = ScatterChart.$create__();
 }
 
 static $clinit() {
  ZoomOverScaleCase.$clinit = () =>{};
  ZoomOverScaleCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ZoomOverScaleCase;
 }
 
 static $loadModules() {
  MarginRightUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  Document_$Overlay = goog.module.get('elemental2.dom.Document.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
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
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  ScatterDataset = goog.module.get('org.pepstock.charba.client.data.ScatterDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  CursorType = goog.module.get('org.pepstock.charba.client.dom.enums.CursorType$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  InteractionAxis = goog.module.get('org.pepstock.charba.client.enums.InteractionAxis$impl');
  AxisClickEvent = goog.module.get('org.pepstock.charba.client.events.AxisClickEvent$impl');
  ChartPointer = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointer$impl');
  ChartPointerOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointerOptions$impl');
  PointerElement = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.PointerElement$impl');
  ZoomOptions = goog.module.get('org.pepstock.charba.client.zoom.ZoomOptions$impl');
  ZoomPlugin = goog.module.get('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomOverScaleCase.$1$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {number}*/
ZoomOverScaleCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_ = 60;
$Util.$setClassMetadata(ZoomOverScaleCase, "org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomOverScaleCase");

exports = ZoomOverScaleCase;

//# sourceMappingURL=ZoomOverScaleCase.js.map
