goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.AnimationProgressiveLineCase$impl');

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
let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let LineChart = goog.forwardDeclare('org.pepstock.charba.client.LineChart$impl');
let NativeCallback_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let DefaultAnimationPropertyKey = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultAnimationPropertyKey$impl');
let Easing = goog.forwardDeclare('org.pepstock.charba.client.enums.Easing$impl');
let Delay = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.AnimationProgressiveLineCase.Delay$impl');
let From = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.AnimationProgressiveLineCase.From$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');

class AnimationProgressiveLineCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_;
  /**@type {HTMLInputElement}*/
  this.f_nativeCallbacks__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_;
 }
 /** @return {!AnimationProgressiveLineCase} */
 static $create__() {
  AnimationProgressiveLineCase.$clinit();
  let $instance = new AnimationProgressiveLineCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.m_getOptions__().m_setMaintainAspectRatio__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Progressive line"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.m_getOptions__().m_getTooltips__().m_setEnabled__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.m_getOptions__().m_getInteraction__().m_setIntersect__boolean(false);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.m_getOptions__().m_getElements__().m_getLine__().m_setTension__double(0);
  let animations = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.m_getOptions__().m_getAnimations__();
  let x = animations.m_create__org_pepstock_charba_client_options_AnimationCollectionKey(DefaultAnimationPropertyKey.f_X__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey);
  x.m_setEasing__org_pepstock_charba_client_enums_Easing(Easing.f_LINEAR__org_pepstock_charba_client_enums_Easing);
  x.m_setDuration__int(AnimationProgressiveLineCase.f_DELAY_BETWEEN_POINTS__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_);
  x.m_setFrom__double(Double.f_NaN__java_lang_Double);
  x.m_setDelay__org_pepstock_charba_client_callbacks_DelayCallback(AnimationProgressiveLineCase.f_X_DELAY_CALLBACK__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_);
  let y = animations.m_create__org_pepstock_charba_client_options_AnimationCollectionKey(DefaultAnimationPropertyKey.f_Y__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey);
  y.m_setEasing__org_pepstock_charba_client_enums_Easing(Easing.f_LINEAR__org_pepstock_charba_client_enums_Easing);
  y.m_setDuration__int(AnimationProgressiveLineCase.f_DELAY_BETWEEN_POINTS__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_);
  y.m_setDelay__org_pepstock_charba_client_callbacks_DelayCallback(AnimationProgressiveLineCase.f_Y_DELAY_CALLBACK__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_);
  y.m_setFrom__org_pepstock_charba_client_callbacks_FromCallback(AnimationProgressiveLineCase.f_FROM_CALLBACK__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_);
  let datapoint1 = /**@type {!LinkedList<DataPoint>}*/ (LinkedList.$create__());
  let datapoint2 = /**@type {!LinkedList<DataPoint>}*/ (LinkedList.$create__());
  let datasets = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.m_getData__().m_getDatasets__boolean(true);
  let prev = 100;
  let prev2 = 80;
  for (let i = 0; i < AnimationProgressiveLineCase.f_AMOUNT__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_; i = i + 1 | 0) {
   prev += 5 - Math.random() * 10;
   let dp1 = DataPoint.$create__();
   dp1.m_setX__double(i);
   dp1.m_setY__double(prev);
   datapoint1.add(dp1);
   prev2 += 5 - Math.random() * 10;
   let dp2 = DataPoint.$create__();
   dp2.m_setX__double(i);
   dp2.m_setY__double(prev2);
   datapoint2.add(dp2);
  }
  let dataset1 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.m_newDataset__(), LineDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  dataset1.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(GoogleChartColor.m_values__()[0]);
  dataset1.m_setFill__boolean(false);
  dataset1.m_setDataPoints__java_util_List(datapoint1);
  dataset1.m_setPointRadius__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([0], $double)));
  datasets.add(dataset1);
  let dataset2 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.m_newDataset__(), LineDataset));
  dataset2.m_setLabel__java_lang_String("dataset 2");
  dataset2.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(GoogleChartColor.m_values__()[1]);
  dataset2.m_setFill__boolean(false);
  dataset2.m_setDataPoints__java_util_List(datapoint2);
  dataset2.m_setPointRadius__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([0], $double)));
  datasets.add(dataset2);
  let axis1 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_AxisKind(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_, AxisKind.f_X__org_pepstock_charba_client_enums_AxisKind);
  axis1.m_setDisplay__boolean(true);
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_);
  axis2.m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1, axis2], Axis)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.appendChild(actionsRow);
  let actionsCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  actionsCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  actionsCol.style.textAlign = "center";
  actionsCol.vAlign = "middle";
  actionsRow.appendChild(actionsCol);
  let nativeCallbacksId = "nativeCallbacks" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForNativeCallbacks = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForNativeCallbacks.htmlFor = nativeCallbacksId;
  labelForNativeCallbacks.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Use native callbacks "));
  actionsCol.appendChild(labelForNativeCallbacks);
  this.f_nativeCallbacks__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.id = nativeCallbacksId;
  this.f_nativeCallbacks__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.onclick = (/** Event */ p0) =>{
   this.m_handleNativeCallbacks__();
   return null;
  };
  this.f_nativeCallbacks__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.type = "checkbox";
  this.f_nativeCallbacks__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.className = "gwt-CheckBox";
  this.f_nativeCallbacks__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_nativeCallbacks__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_;
 }
 
 m_handleNativeCallbacks__() {
  let animations = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.m_getOptions__().m_getAnimations__();
  let x = animations.m_get__org_pepstock_charba_client_options_AnimationCollectionKey(DefaultAnimationPropertyKey.f_X__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey);
  let y = animations.m_get__org_pepstock_charba_client_options_AnimationCollectionKey(DefaultAnimationPropertyKey.f_Y__org_pepstock_charba_client_enums_DefaultAnimationPropertyKey);
  if (this.f_nativeCallbacks__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.checked) {
   x.m_setDelay__org_pepstock_charba_client_callbacks_NativeCallback(AnimationProgressiveLineCase.f_NATIVE_DELAY_X__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_);
   y.m_setFrom__org_pepstock_charba_client_callbacks_NativeCallback(AnimationProgressiveLineCase.f_NATIVE_FROM_Y__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_);
   y.m_setDelay__org_pepstock_charba_client_callbacks_NativeCallback(AnimationProgressiveLineCase.f_NATIVE_DELAY_Y__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_);
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.m_reconfigure__();
  this.f_nativeCallbacks__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_.disabled = true;
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_ = LineChart.$create__();
  this.f_nativeCallbacks__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_ = /**@type {HTMLInputElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
 }
 
 static $clinit() {
  AnimationProgressiveLineCase.$clinit = () =>{};
  AnimationProgressiveLineCase.$loadModules();
  BaseComposite.$clinit();
  AnimationProgressiveLineCase.f_NATIVE_DELAY_X__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_ = NativeCallback_$Overlay.m_create__java_lang_String("if (context.type !== 'data' || context.xStarted) { return 0; } context.xStarted = true; return context.index * " + AnimationProgressiveLineCase.f_DELAY_BETWEEN_POINTS__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_ + ";");
  AnimationProgressiveLineCase.f_NATIVE_DELAY_Y__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_ = NativeCallback_$Overlay.m_create__java_lang_String("if (context.type !== 'data' || context.yStarted) { return 0; } context.yStarted = true; return context.index * " + AnimationProgressiveLineCase.f_DELAY_BETWEEN_POINTS__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_ + ";");
  AnimationProgressiveLineCase.f_NATIVE_FROM_Y__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_ = NativeCallback_$Overlay.m_create__java_lang_String("return context.index === 0 ? context.chart.scales.y.getPixelForValue(100) : context.chart.getDatasetMeta(context.datasetIndex).data[context.index - 1].getProps(['y'], true).y;");
  AnimationProgressiveLineCase.f_X_DELAY_CALLBACK__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_ = Delay.$create__org_pepstock_charba_client_commons_Key(Key.m_create__java_lang_String("xMyStarted"));
  AnimationProgressiveLineCase.f_Y_DELAY_CALLBACK__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_ = Delay.$create__org_pepstock_charba_client_commons_Key(Key.m_create__java_lang_String("yMyStarted"));
  AnimationProgressiveLineCase.f_FROM_CALLBACK__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_ = From.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnimationProgressiveLineCase;
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
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  LineChart = goog.module.get('org.pepstock.charba.client.LineChart$impl');
  NativeCallback_$Overlay = goog.module.get('org.pepstock.charba.client.callbacks.NativeCallback.$Overlay$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  DefaultAnimationPropertyKey = goog.module.get('org.pepstock.charba.client.enums.DefaultAnimationPropertyKey$impl');
  Easing = goog.module.get('org.pepstock.charba.client.enums.Easing$impl');
  Delay = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.elements.AnimationProgressiveLineCase.Delay$impl');
  From = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.elements.AnimationProgressiveLineCase.From$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $double = goog.module.get('vmbootstrap.primitives.$double$impl');
 }
}
/**@const {number}*/
AnimationProgressiveLineCase.f_DURATION__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_ = 10000;
/**@const {number}*/
AnimationProgressiveLineCase.f_AMOUNT__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_ = 1000;
/**@const {number}*/
AnimationProgressiveLineCase.f_DELAY_BETWEEN_POINTS__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_ = 10;
/**@type {Function}*/
AnimationProgressiveLineCase.f_NATIVE_DELAY_X__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_;
/**@type {Function}*/
AnimationProgressiveLineCase.f_NATIVE_DELAY_Y__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_;
/**@type {Function}*/
AnimationProgressiveLineCase.f_NATIVE_FROM_Y__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_;
/**@type {Delay}*/
AnimationProgressiveLineCase.f_X_DELAY_CALLBACK__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_;
/**@type {Delay}*/
AnimationProgressiveLineCase.f_Y_DELAY_CALLBACK__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_;
/**@type {From}*/
AnimationProgressiveLineCase.f_FROM_CALLBACK__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_;
$Util.$setClassMetadata(AnimationProgressiveLineCase, "org.pepstock.charba.showcase.j2cl.cases.elements.AnimationProgressiveLineCase");

exports = AnimationProgressiveLineCase;

//# sourceMappingURL=AnimationProgressiveLineCase.js.map
