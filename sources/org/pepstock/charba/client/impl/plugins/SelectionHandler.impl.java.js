goog.module('org.pepstock.charba.client.impl.plugins.SelectionHandler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let BaseEventTypes = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseEventTypes$impl');
let BaseNativeEvent_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay$impl');
let BaseStyleProperties_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay$impl');
let DOMBuilder = goog.forwardDeclare('org.pepstock.charba.client.dom.DOMBuilder$impl');
let Canvas_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let Context2dItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
let CursorType = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.CursorType$impl');
let TextBaseline = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.TextBaseline$impl');
let AxisType = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisType$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let DatasetRangeSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeSelectionEvent$impl');
let DatasetsItemsSelectorOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');
let SelectionArea = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.SelectionArea$impl');
let SelectionCleaner = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.SelectionCleaner$impl');
let SelectionStatus = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.SelectionStatus$impl');
let SelectionTrack = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.SelectionTrack$impl');
let Align = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.Align$impl');
let Render = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.Render$impl');
let ScaleItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleItem$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class SelectionHandler extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, Object):void>}*/
  this.f_mouseDownCallbackProxy__org_pepstock_charba_client_impl_plugins_SelectionHandler_;
  /**@type {CharbaCallbackProxy<?function(Object, Object):void>}*/
  this.f_mouseMoveCallbackProxy__org_pepstock_charba_client_impl_plugins_SelectionHandler_;
  /**@type {CharbaCallbackProxy<?function(Object, Object):void>}*/
  this.f_mouseUpCallbackProxy__org_pepstock_charba_client_impl_plugins_SelectionHandler_;
  /**@type {CharbaCallbackProxy<?function(Object, Object):void>}*/
  this.f_mouseLeaveCallbackProxy__org_pepstock_charba_client_impl_plugins_SelectionHandler_;
  /**@type {IsChart}*/
  this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_;
  /**@type {DatasetsItemsSelectorOptions}*/
  this.f_options__org_pepstock_charba_client_impl_plugins_SelectionHandler_;
  /**@type {SelectionArea}*/
  this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_;
  /**@type {number}*/
  this.f_paddingTop__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = 0;
  /**@type {number}*/
  this.f_paddingBottom__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = 0;
  /**@type {SelectionTrack}*/
  this.f_track__org_pepstock_charba_client_impl_plugins_SelectionHandler_;
  /**@type {SelectionStatus}*/
  this.f_status__org_pepstock_charba_client_impl_plugins_SelectionHandler_;
  /**@type {HTMLImageElement}*/
  this.f_snapshot__org_pepstock_charba_client_impl_plugins_SelectionHandler_;
  /**@type {?string}*/
  this.f_previousChartAreaAsString__org_pepstock_charba_client_impl_plugins_SelectionHandler_;
  /**@type {?string}*/
  this.f_previousDataURL__org_pepstock_charba_client_impl_plugins_SelectionHandler_;
  /**@type {boolean}*/
  this.f_skipNextFireEvent__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = false;
  /**@type {CursorType}*/
  this.f_cursorOverSelectionCleaner__org_pepstock_charba_client_impl_plugins_SelectionHandler_;
  /**@type {boolean}*/
  this.f_preventClickEvent__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = false;
 }
 /** @return {!SelectionHandler} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions(/** IsChart */ chart, /** DatasetsItemsSelectorOptions */ options) {
  SelectionHandler.$clinit();
  let $instance = new SelectionHandler();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_SelectionHandler__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions(chart, options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_SelectionHandler__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions(/** IsChart */ chart, /** DatasetsItemsSelectorOptions */ options) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_impl_plugins_SelectionHandler();
  this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = chart;
  this.f_options__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = options;
  this.f_mouseDownCallbackProxy__org_pepstock_charba_client_impl_plugins_SelectionHandler_.callback = (/** Object */ context, /** Object */ event) =>{
   this.m_onMouseDown__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_impl_plugins(event);
  };
  this.f_mouseMoveCallbackProxy__org_pepstock_charba_client_impl_plugins_SelectionHandler_.callback = (/** Object */ context_1, /** Object */ event_1) =>{
   this.m_onMouseMove__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_impl_plugins(event_1);
  };
  this.f_mouseUpCallbackProxy__org_pepstock_charba_client_impl_plugins_SelectionHandler_.callback = (/** Object */ context_2, /** Object */ event_2) =>{
   this.m_onMouseUp__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_impl_plugins(event_2);
  };
  this.f_mouseLeaveCallbackProxy__org_pepstock_charba_client_impl_plugins_SelectionHandler_.callback = (/** Object */ context_3, /** Object */ event_3) =>{
   this.m_onMouseLeave__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_impl_plugins(event_3);
  };
  this.f_paddingTop__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = chart.m_getOptions__().m_getLayout__().m_getPadding__().m_getTop__();
  this.f_paddingBottom__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = chart.m_getOptions__().m_getLayout__().m_getPadding__().m_getBottom__();
  let selectionCleaner = options.m_getSelectionCleaner__();
  if (selectionCleaner.m_isDisplay__()) {
   this.m_calculateSelectionCleanerHeight___$p_org_pepstock_charba_client_impl_plugins_SelectionHandler();
   this.m_calculateSelectionCleanerWidth___$p_org_pepstock_charba_client_impl_plugins_SelectionHandler();
   let additionalPadding = selectionCleaner.m_getMargin__();
   additionalPadding = $Primitives.$narrowDoubleToInt(additionalPadding + selectionCleaner.m_getHeight___$pp_org_pepstock_charba_client_impl_plugins());
   additionalPadding = additionalPadding + selectionCleaner.m_getMargin__() | 0;
   selectionCleaner.m_setLayoutPadding__double_$pp_org_pepstock_charba_client_impl_plugins(additionalPadding);
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(selectionCleaner.m_getPosition__(), Position.f_TOP__org_pepstock_charba_client_enums_Position)) {
    let padding = this.f_paddingTop__org_pepstock_charba_client_impl_plugins_SelectionHandler_;
    padding = padding + additionalPadding | 0;
    chart.m_getOptions__().m_getLayout__().m_getPadding__().m_setTop__int(padding);
    chart.m_getNode__().m_getOptions__().m_getLayout__().m_getPadding__().m_setTop__int(padding);
   } else {
    let padding_1 = this.f_paddingBottom__org_pepstock_charba_client_impl_plugins_SelectionHandler_;
    padding_1 = padding_1 + additionalPadding | 0;
    chart.m_getOptions__().m_getLayout__().m_getPadding__().m_setBottom__int(padding_1);
    chart.m_getNode__().m_getOptions__().m_getLayout__().m_getPadding__().m_setBottom__int(padding_1);
   }
  }
 }
 /** @return {DatasetsItemsSelectorOptions} */
 m_getOptions___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.f_options__org_pepstock_charba_client_impl_plugins_SelectionHandler_;
 }
 
 m_destroy___$pp_org_pepstock_charba_client_impl_plugins() {
  this.m_removeListeners___$p_org_pepstock_charba_client_impl_plugins_SelectionHandler();
  this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getOptions__().m_getLayout__().m_getPadding__().m_setTop__int(this.f_paddingTop__org_pepstock_charba_client_impl_plugins_SelectionHandler_);
  this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getOptions__().m_getLayout__().m_getPadding__().m_setBottom__int(this.f_paddingBottom__org_pepstock_charba_client_impl_plugins_SelectionHandler_);
 }
 
 m_addListeners___$pp_org_pepstock_charba_client_impl_plugins() {
  this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__().addEventListener(BaseEventTypes.f_MOUSE_DOWN__org_pepstock_charba_client_dom_BaseEventTypes, this.f_mouseDownCallbackProxy__org_pepstock_charba_client_impl_plugins_SelectionHandler_.proxy);
  this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__().addEventListener(BaseEventTypes.f_MOUSE_MOVE__org_pepstock_charba_client_dom_BaseEventTypes, this.f_mouseMoveCallbackProxy__org_pepstock_charba_client_impl_plugins_SelectionHandler_.proxy);
  this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__().addEventListener(BaseEventTypes.f_MOUSE_LEAVE__org_pepstock_charba_client_dom_BaseEventTypes, this.f_mouseLeaveCallbackProxy__org_pepstock_charba_client_impl_plugins_SelectionHandler_.proxy);
  this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__().addEventListener(BaseEventTypes.f_MOUSE_UP__org_pepstock_charba_client_dom_BaseEventTypes, this.f_mouseUpCallbackProxy__org_pepstock_charba_client_impl_plugins_SelectionHandler_.proxy);
 }
 
 m_removeListeners___$p_org_pepstock_charba_client_impl_plugins_SelectionHandler() {
  this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__().removeEventListener(BaseEventTypes.f_MOUSE_DOWN__org_pepstock_charba_client_dom_BaseEventTypes, this.f_mouseDownCallbackProxy__org_pepstock_charba_client_impl_plugins_SelectionHandler_.proxy);
  this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__().removeEventListener(BaseEventTypes.f_MOUSE_MOVE__org_pepstock_charba_client_dom_BaseEventTypes, this.f_mouseMoveCallbackProxy__org_pepstock_charba_client_impl_plugins_SelectionHandler_.proxy);
  this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__().removeEventListener(BaseEventTypes.f_MOUSE_LEAVE__org_pepstock_charba_client_dom_BaseEventTypes, this.f_mouseLeaveCallbackProxy__org_pepstock_charba_client_impl_plugins_SelectionHandler_.proxy);
  this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__().removeEventListener(BaseEventTypes.f_MOUSE_UP__org_pepstock_charba_client_dom_BaseEventTypes, this.f_mouseUpCallbackProxy__org_pepstock_charba_client_impl_plugins_SelectionHandler_.proxy);
 }
 
 m_onMouseDown__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_impl_plugins(/** Object */ event) {
  event.preventDefault();
  if (this.m_isEventInChartArea__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_impl_plugins_SelectionHandler(event)) {
   BaseStyleProperties_$Overlay.m_setCursorType__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_CursorType(this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__().style, CursorType.f_CROSSHAIR__org_pepstock_charba_client_dom_enums_CursorType);
   this.m_startSelection__double_$pp_org_pepstock_charba_client_impl_plugins(BaseNativeEvent_$Overlay.m_getX__$devirt__org_pepstock_charba_client_dom_BaseNativeEvent(event));
  }
 }
 
 m_onMouseMove__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_impl_plugins(/** Object */ event) {
  if (!this.m_isEventInChartArea__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_impl_plugins_SelectionHandler(event)) {
   this.m_onMouseUp__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_impl_plugins(event);
   return;
  }
  event.preventDefault();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(this.m_getStatus___$pp_org_pepstock_charba_client_impl_plugins(), SelectionStatus.f_SELECTING__org_pepstock_charba_client_impl_plugins_SelectionStatus)) {
   this.m_updateSelection__double__boolean_$pp_org_pepstock_charba_client_impl_plugins(BaseNativeEvent_$Overlay.m_getX__$devirt__org_pepstock_charba_client_dom_BaseNativeEvent(event), false);
  } else if (this.m_isEventInSelectionCleaner__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_impl_plugins_SelectionHandler(event) && $Objects.m_equals__java_lang_Object__java_lang_Object(this.m_getStatus___$pp_org_pepstock_charba_client_impl_plugins(), SelectionStatus.f_SELECTED__org_pepstock_charba_client_impl_plugins_SelectionStatus)) {
   if ($Equality.$same(this.f_cursorOverSelectionCleaner__org_pepstock_charba_client_impl_plugins_SelectionHandler_, null)) {
    this.f_cursorOverSelectionCleaner__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = Utilities.m_getCursorOfChart__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_);
   }
   BaseStyleProperties_$Overlay.m_setCursorType__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_CursorType(this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__().style, CursorType.f_POINTER__org_pepstock_charba_client_dom_enums_CursorType);
  } else if (!$Equality.$same(this.f_cursorOverSelectionCleaner__org_pepstock_charba_client_impl_plugins_SelectionHandler_, null)) {
   BaseStyleProperties_$Overlay.m_setCursorType__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_CursorType(this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__().style, this.f_cursorOverSelectionCleaner__org_pepstock_charba_client_impl_plugins_SelectionHandler_);
   this.f_cursorOverSelectionCleaner__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = null;
  }
 }
 
 m_onMouseLeave__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_impl_plugins(/** Object */ event) {
  this.m_onMouseUp__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_impl_plugins(event);
 }
 
 m_onMouseUp__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_impl_plugins(/** Object */ event) {
  event.preventDefault();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(this.m_getStatus___$pp_org_pepstock_charba_client_impl_plugins(), SelectionStatus.f_SELECTING__org_pepstock_charba_client_impl_plugins_SelectionStatus)) {
   this.f_preventClickEvent__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = true;
   BaseStyleProperties_$Overlay.m_setCursorType__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_CursorType(this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__().style, CursorType.f_DEFAULT__org_pepstock_charba_client_dom_enums_CursorType);
   this.m_updateSelection__double__boolean_$pp_org_pepstock_charba_client_impl_plugins(BaseNativeEvent_$Overlay.m_getX__$devirt__org_pepstock_charba_client_dom_BaseNativeEvent(event), false);
   this.m_endSelection__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_impl_plugins(event);
  }
 }
 /** @return {boolean} */
 m_isPreventClickEvent___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.f_preventClickEvent__org_pepstock_charba_client_impl_plugins_SelectionHandler_;
 }
 
 m_resetPreventClickEvent___$pp_org_pepstock_charba_client_impl_plugins() {
  this.f_preventClickEvent__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = false;
 }
 /** @return {SelectionStatus} */
 m_getStatus___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.f_status__org_pepstock_charba_client_impl_plugins_SelectionHandler_;
 }
 
 m_setStatus__org_pepstock_charba_client_impl_plugins_SelectionStatus_$p_org_pepstock_charba_client_impl_plugins_SelectionHandler(/** SelectionStatus */ status) {
  this.f_status__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = status;
 }
 
 m_setSkipNextFireEvent__boolean_$pp_org_pepstock_charba_client_impl_plugins(/** boolean */ skipNextFireEvent) {
  this.f_skipNextFireEvent__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = skipNextFireEvent;
 }
 /** @return {HTMLImageElement} */
 m_getSnapshot___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.f_snapshot__org_pepstock_charba_client_impl_plugins_SelectionHandler_;
 }
 
 m_setSnapshot__org_pepstock_charba_client_dom_elements_Img_$pp_org_pepstock_charba_client_impl_plugins(/** HTMLImageElement */ snapshot) {
  this.f_snapshot__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = snapshot;
 }
 
 m_startSelection__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ x) {
  this.m_setStatus__org_pepstock_charba_client_impl_plugins_SelectionStatus_$p_org_pepstock_charba_client_impl_plugins_SelectionHandler(SelectionStatus.f_SELECTING__org_pepstock_charba_client_impl_plugins_SelectionStatus);
  let node = this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getNode__();
  let chartArea = node.m_getChartArea__();
  this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_setTop__double_$pp_org_pepstock_charba_client_impl_plugins(chartArea.m_getTop__());
  this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_setBottom__double_$pp_org_pepstock_charba_client_impl_plugins(chartArea.m_getBottom__());
  this.f_track__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = SelectionTrack.$create__double(x);
 }
 
 m_updateSelection__double__boolean_$pp_org_pepstock_charba_client_impl_plugins(/** number */ x, /** boolean */ refresh) {
  let ctx = Canvas_$Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__());
  ctx.save();
  this.m_applySnapshot__org_pepstock_charba_client_dom_elements_Context2dItem__boolean_$p_org_pepstock_charba_client_impl_plugins_SelectionHandler(ctx, refresh);
  let node = this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getNode__();
  let chartArea = node.m_getChartArea__();
  this.f_track__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_setCurrent__double_$pp_org_pepstock_charba_client_impl_plugins(Math.min(Math.max(x, chartArea.m_getLeft__()), chartArea.m_getRight__()));
  this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_setLeft__double_$pp_org_pepstock_charba_client_impl_plugins(this.f_track__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getStart___$pp_org_pepstock_charba_client_impl_plugins());
  this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_setRight__double_$pp_org_pepstock_charba_client_impl_plugins(this.f_track__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getEnd___$pp_org_pepstock_charba_client_impl_plugins());
  Context2dItem_$Overlay.m_setFillColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(ctx, this.f_options__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getColorAsString__());
  ctx.fillRect(this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getLeft___$pp_org_pepstock_charba_client_impl_plugins(), this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getTop___$pp_org_pepstock_charba_client_impl_plugins(), this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getRight___$pp_org_pepstock_charba_client_impl_plugins() - this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getLeft___$pp_org_pepstock_charba_client_impl_plugins(), this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getBottom___$pp_org_pepstock_charba_client_impl_plugins() - this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getTop___$pp_org_pepstock_charba_client_impl_plugins());
  this.m_applyAreaBorder__org_pepstock_charba_client_dom_elements_Context2dItem_$p_org_pepstock_charba_client_impl_plugins_SelectionHandler(ctx);
  let pOptions = this.m_getOptions___$pp_org_pepstock_charba_client_impl_plugins();
  let selectionCleaner = pOptions.m_getSelectionCleaner__();
  if (selectionCleaner.m_isDisplay__()) {
   this.m_drawSelectionCleaner___$p_org_pepstock_charba_client_impl_plugins_SelectionHandler();
  }
  ctx.restore();
 }
 
 m_applyAreaBorder__org_pepstock_charba_client_dom_elements_Context2dItem_$p_org_pepstock_charba_client_impl_plugins_SelectionHandler(/** CanvasRenderingContext2D */ ctx) {
  if (this.f_options__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getBorderWidth__() > 0) {
   ctx.lineWidth = this.f_options__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getBorderWidth__();
   let borderDash = this.f_options__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getBorderDash__();
   Context2dItem_$Overlay.m_setStrokeColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(ctx, this.f_options__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getBorderColorAsString__());
   if (!borderDash.isEmpty()) {
    Context2dItem_$Overlay.m_setLineDash__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_util_List(ctx, this.f_options__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getBorderDash__());
   }
   ctx.lineDashOffset = this.f_options__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getBorderDashOffset__();
   ctx.strokeRect(this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getLeft___$pp_org_pepstock_charba_client_impl_plugins(), this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getTop___$pp_org_pepstock_charba_client_impl_plugins(), this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getRight___$pp_org_pepstock_charba_client_impl_plugins() - this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getLeft___$pp_org_pepstock_charba_client_impl_plugins(), this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getBottom___$pp_org_pepstock_charba_client_impl_plugins() - this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getTop___$pp_org_pepstock_charba_client_impl_plugins());
  }
 }
 
 m_applySnapshot__org_pepstock_charba_client_dom_elements_Context2dItem__boolean_$p_org_pepstock_charba_client_impl_plugins_SelectionHandler(/** CanvasRenderingContext2D */ ctx, /** boolean */ refresh) {
  if (!$Equality.$same(this.f_snapshot__org_pepstock_charba_client_impl_plugins_SelectionHandler_, null)) {
   if (!refresh) {
    ctx.clearRect(0, 0, this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__().offsetWidth, this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__().offsetHeight);
   }
   Context2dItem_$Overlay.m_drawImage__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_Img__double__double__double__double(ctx, this.f_snapshot__org_pepstock_charba_client_impl_plugins_SelectionHandler_, 0, 0, this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__().offsetWidth, this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__().offsetHeight);
  }
 }
 
 m_endSelection__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_impl_plugins(/** Object */ event) {
  this.m_endSelection__org_pepstock_charba_client_dom_BaseNativeEvent__boolean_$pp_org_pepstock_charba_client_impl_plugins(event, false);
 }
 
 m_endSelection__org_pepstock_charba_client_dom_BaseNativeEvent__boolean_$pp_org_pepstock_charba_client_impl_plugins(/** Object */ event, /** boolean */ skipNextFireEvent) {
  this.m_setStatus__org_pepstock_charba_client_impl_plugins_SelectionStatus_$p_org_pepstock_charba_client_impl_plugins_SelectionHandler(SelectionStatus.f_SELECTED__org_pepstock_charba_client_impl_plugins_SelectionStatus);
  if (!skipNextFireEvent && !$Equality.$same(this.f_track__org_pepstock_charba_client_impl_plugins_SelectionHandler_, null) && this.f_track__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_isValid___$pp_org_pepstock_charba_client_impl_plugins() && this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_isEventHandled__org_pepstock_charba_client_events_EventType(DatasetRangeSelectionEvent.f_TYPE__org_pepstock_charba_client_events_DatasetRangeSelectionEvent)) {
   let node = this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getNode__();
   let scaleItem = /**@type {ScaleItem}*/ ($Casts.$to(node.m_getScales__().m_getItems__().get(this.f_options__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getXAxisID__().m_value__()), ScaleItem));
   this.f_track__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_setStartValue__double_$pp_org_pepstock_charba_client_impl_plugins(scaleItem.m_getValueForPixel__double(this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getLeft___$pp_org_pepstock_charba_client_impl_plugins()));
   this.f_track__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_setEndValue__double_$pp_org_pepstock_charba_client_impl_plugins(scaleItem.m_getValueForPixel__double(this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getRight___$pp_org_pepstock_charba_client_impl_plugins()));
   this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_fireEvent__org_pepstock_charba_client_events_Event(DatasetRangeSelectionEvent.$create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleValueItem__org_pepstock_charba_client_items_ScaleValueItem(event, scaleItem.m_getValueAtPixel__double(this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getLeft___$pp_org_pepstock_charba_client_impl_plugins()), scaleItem.m_getValueAtPixel__double(this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getRight___$pp_org_pepstock_charba_client_impl_plugins())));
  }
 }
 
 m_refresh___$pp_org_pepstock_charba_client_impl_plugins() {
  let node = this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getNode__();
  let chartArea = node.m_getChartArea__();
  let scaleItem = /**@type {ScaleItem}*/ ($Casts.$to(node.m_getScales__().m_getItems__().get(this.f_options__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getXAxisID__().m_value__()), ScaleItem));
  let startPixel = scaleItem.m_getPixelForValue__double(this.f_track__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getStartValue___$pp_org_pepstock_charba_client_impl_plugins());
  if (startPixel > chartArea.m_getRight__()) {
   return;
  }
  let endPixel = scaleItem.m_getPixelForValue__double(this.f_track__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getEndValue___$pp_org_pepstock_charba_client_impl_plugins());
  if (endPixel > chartArea.m_getRight__()) {
   this.f_track__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_setCurrent__double_$pp_org_pepstock_charba_client_impl_plugins(chartArea.m_getRight__());
   this.f_track__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_setEndValue__double_$pp_org_pepstock_charba_client_impl_plugins(scaleItem.m_getValueForPixel__double(this.f_track__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getEnd___$pp_org_pepstock_charba_client_impl_plugins()));
   endPixel = chartArea.m_getRight__();
  }
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(AxisType.f_CATEGORY__org_pepstock_charba_client_enums_AxisType, scaleItem.m_getType__()) && Double.m_compare__double__double(this.f_track__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getStartValue___$pp_org_pepstock_charba_client_impl_plugins(), this.f_track__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getEndValue___$pp_org_pepstock_charba_client_impl_plugins()) == 0) {
   let nextValueIndex = this.f_track__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getStartValue___$pp_org_pepstock_charba_client_impl_plugins() == 0 ? 1 : this.f_track__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getStartValue___$pp_org_pepstock_charba_client_impl_plugins() - 1;
   let nextEndPixel = scaleItem.m_getPixelForValue__double(nextValueIndex);
   if (Undefined.m_isNot__double(nextEndPixel)) {
    let gap = this.f_track__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getStartValue___$pp_org_pepstock_charba_client_impl_plugins() == 0 ? (nextEndPixel - startPixel) / 2 : (startPixel - nextEndPixel) / 2;
    startPixel = startPixel - gap;
    endPixel = endPixel + gap;
   } else {
    startPixel = chartArea.m_getLeft__();
    endPixel = chartArea.m_getRight__();
   }
  }
  this.m_startSelection__double_$pp_org_pepstock_charba_client_impl_plugins($Primitives.$narrowDoubleToInt(Math.ceil(startPixel)));
  this.m_updateSelection__double__boolean_$pp_org_pepstock_charba_client_impl_plugins($Primitives.$narrowDoubleToInt(endPixel), true);
  this.m_endSelection__org_pepstock_charba_client_dom_BaseNativeEvent__boolean_$pp_org_pepstock_charba_client_impl_plugins(DOMBuilder.m_get__().m_createChangeEvent__(), this.f_skipNextFireEvent__org_pepstock_charba_client_impl_plugins_SelectionHandler_);
  this.f_skipNextFireEvent__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = false;
 }
 /** @return {boolean} */
 m_isChartChanged__java_lang_String_$pp_org_pepstock_charba_client_impl_plugins(/** ?string */ dataUrl) {
  let chartAreaAsString = this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getNode__().m_getChartArea__().toString();
  if ($Equality.$same(this.f_previousDataURL__org_pepstock_charba_client_impl_plugins_SelectionHandler_, null) && $Equality.$same(this.f_previousChartAreaAsString__org_pepstock_charba_client_impl_plugins_SelectionHandler_, null)) {
   this.f_previousDataURL__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = dataUrl;
   this.f_previousChartAreaAsString__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = chartAreaAsString;
   return true;
  }
  if (!j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(chartAreaAsString, this.f_previousChartAreaAsString__org_pepstock_charba_client_impl_plugins_SelectionHandler_)) {
   this.f_previousDataURL__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = dataUrl;
   this.f_previousChartAreaAsString__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = chartAreaAsString;
   return true;
  }
  if (!j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(dataUrl, this.f_previousDataURL__org_pepstock_charba_client_impl_plugins_SelectionHandler_)) {
   this.f_previousDataURL__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = dataUrl;
   this.f_previousChartAreaAsString__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = chartAreaAsString;
   return true;
  }
  return false;
 }
 
 m_calculateSelectionCleanerHeight___$p_org_pepstock_charba_client_impl_plugins_SelectionHandler() {
  let pOptions = this.m_getOptions___$pp_org_pepstock_charba_client_impl_plugins();
  let selectionCleaner = pOptions.m_getSelectionCleaner__();
  let height = selectionCleaner.m_isUseSelectionStyle__() ? SelectionCleaner.f_BORDER_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner + 1 | 0 : 0;
  height += selectionCleaner.m_getPadding__();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(Render.f_IMAGE__org_pepstock_charba_client_impl_plugins_enums_Render, selectionCleaner.m_getRender__())) {
   let imgHeight = !$Equality.$same(selectionCleaner.m_getImage__(), null) ? selectionCleaner.m_getImage__().height : 0;
   height += imgHeight;
   selectionCleaner.m_setImageHeight__double_$pp_org_pepstock_charba_client_impl_plugins(imgHeight);
   selectionCleaner.m_setLabelHeight__double_$pp_org_pepstock_charba_client_impl_plugins(SelectionCleaner.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
  } else {
   let fontSize = selectionCleaner.m_getFont__().m_getSize__();
   height += fontSize;
   selectionCleaner.m_setImageHeight__double_$pp_org_pepstock_charba_client_impl_plugins($Objects.m_equals__java_lang_Object__java_lang_Object(Render.f_LABEL__org_pepstock_charba_client_impl_plugins_enums_Render, selectionCleaner.m_getRender__()) ? SelectionCleaner.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_plugins_SelectionCleaner : fontSize);
   selectionCleaner.m_setLabelHeight__double_$pp_org_pepstock_charba_client_impl_plugins(fontSize);
  }
  height += selectionCleaner.m_getPadding__();
  height += selectionCleaner.m_isUseSelectionStyle__() ? SelectionCleaner.f_BORDER_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner + 1 | 0 : 0;
  selectionCleaner.m_setHeight__double_$pp_org_pepstock_charba_client_impl_plugins(height);
 }
 
 m_calculateSelectionCleanerWidth___$p_org_pepstock_charba_client_impl_plugins_SelectionHandler() {
  let pOptions = this.m_getOptions___$pp_org_pepstock_charba_client_impl_plugins();
  let selectionCleaner = pOptions.m_getSelectionCleaner__();
  let image = selectionCleaner.m_getImage__();
  let imgWidth = !$Equality.$same(image, null) ? image.width : 1;
  let imgHeight = !$Equality.$same(image, null) ? image.height : 1;
  let aspectRatio = imgHeight / Math.max(imgWidth, 1);
  imgWidth = imgWidth * aspectRatio;
  let ctx = Canvas_$Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__());
  ctx.save();
  ctx.font = Utilities.m_toCSSFontProperty__org_pepstock_charba_client_defaults_IsDefaultFont(selectionCleaner.m_getFont__());
  let metrics = ctx.measureText(selectionCleaner.m_getLabel__());
  let labelWidth = metrics.width;
  ctx.restore();
  let width = selectionCleaner.m_isUseSelectionStyle__() ? SelectionCleaner.f_BORDER_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner + 1 | 0 : 0;
  width += selectionCleaner.m_getPadding__();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(Render.f_IMAGE__org_pepstock_charba_client_impl_plugins_enums_Render, selectionCleaner.m_getRender__())) {
   width += imgWidth;
   selectionCleaner.m_setImageWidth__double_$pp_org_pepstock_charba_client_impl_plugins(imgWidth);
   selectionCleaner.m_setLabelWidth__double_$pp_org_pepstock_charba_client_impl_plugins(SelectionCleaner.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(Render.f_LABEL__org_pepstock_charba_client_impl_plugins_enums_Render, selectionCleaner.m_getRender__())) {
   width += labelWidth;
   selectionCleaner.m_setImageWidth__double_$pp_org_pepstock_charba_client_impl_plugins(SelectionCleaner.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
   selectionCleaner.m_setLabelWidth__double_$pp_org_pepstock_charba_client_impl_plugins(labelWidth);
  } else {
   width += labelWidth;
   width += selectionCleaner.m_getSpacing__();
   width += imgWidth;
   selectionCleaner.m_setImageWidth__double_$pp_org_pepstock_charba_client_impl_plugins(imgWidth);
   selectionCleaner.m_setLabelWidth__double_$pp_org_pepstock_charba_client_impl_plugins(labelWidth);
  }
  width += selectionCleaner.m_getPadding__();
  width += selectionCleaner.m_isUseSelectionStyle__() ? SelectionCleaner.f_BORDER_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner + 1 | 0 : 0;
  selectionCleaner.m_setWidth__double_$pp_org_pepstock_charba_client_impl_plugins(width);
 }
 
 m_calculateSelectionCleanerPositions___$pp_org_pepstock_charba_client_impl_plugins() {
  let pOptions = this.m_getOptions___$pp_org_pepstock_charba_client_impl_plugins();
  let selectionCleaner = pOptions.m_getSelectionCleaner__();
  if (selectionCleaner.m_isDisplay__()) {
   this.m_calculatePointsY__org_pepstock_charba_client_impl_plugins_SelectionCleaner_$p_org_pepstock_charba_client_impl_plugins_SelectionHandler(selectionCleaner);
   this.m_calculatePointsX__org_pepstock_charba_client_impl_plugins_SelectionCleaner_$p_org_pepstock_charba_client_impl_plugins_SelectionHandler(selectionCleaner);
  }
 }
 
 m_calculatePointsX__org_pepstock_charba_client_impl_plugins_SelectionCleaner_$p_org_pepstock_charba_client_impl_plugins_SelectionHandler(/** SelectionCleaner */ selectionCleaner) {
  let x = 0;
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(Align.f_LEFT__org_pepstock_charba_client_impl_plugins_enums_Align, selectionCleaner.m_getAlign__())) {
   selectionCleaner.m_setX__double_$pp_org_pepstock_charba_client_impl_plugins(selectionCleaner.m_getMargin__());
   x = selectionCleaner.m_getMargin__();
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(Align.f_LEFT_CHART_AREA__org_pepstock_charba_client_impl_plugins_enums_Align, selectionCleaner.m_getAlign__())) {
   let node = this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getNode__();
   let areaInstance = node.m_getChartArea__();
   selectionCleaner.m_setX__double_$pp_org_pepstock_charba_client_impl_plugins(areaInstance.m_getLeft__());
   x = areaInstance.m_getLeft__();
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(Align.f_CENTER__org_pepstock_charba_client_impl_plugins_enums_Align, selectionCleaner.m_getAlign__())) {
   x = (this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__().offsetWidth - selectionCleaner.m_getWidth___$pp_org_pepstock_charba_client_impl_plugins()) / 2;
   selectionCleaner.m_setX__double_$pp_org_pepstock_charba_client_impl_plugins(x);
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(Align.f_CENTER_CHART_AREA__org_pepstock_charba_client_impl_plugins_enums_Align, selectionCleaner.m_getAlign__())) {
   let node_1 = this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getNode__();
   let areaInstance_1 = node_1.m_getChartArea__();
   x = (areaInstance_1.m_getRight__() - areaInstance_1.m_getLeft__() - selectionCleaner.m_getWidth___$pp_org_pepstock_charba_client_impl_plugins()) / 2;
   selectionCleaner.m_setX__double_$pp_org_pepstock_charba_client_impl_plugins(x);
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(Align.f_RIGHT_CHART_AREA__org_pepstock_charba_client_impl_plugins_enums_Align, selectionCleaner.m_getAlign__())) {
   let node_2 = this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getNode__();
   let areaInstance_2 = node_2.m_getChartArea__();
   x = areaInstance_2.m_getRight__() - selectionCleaner.m_getWidth___$pp_org_pepstock_charba_client_impl_plugins();
   selectionCleaner.m_setX__double_$pp_org_pepstock_charba_client_impl_plugins(x);
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(Align.f_RIGHT__org_pepstock_charba_client_impl_plugins_enums_Align, selectionCleaner.m_getAlign__())) {
   x = this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__().offsetWidth - selectionCleaner.m_getWidth___$pp_org_pepstock_charba_client_impl_plugins() - selectionCleaner.m_getMargin__();
   selectionCleaner.m_setX__double_$pp_org_pepstock_charba_client_impl_plugins(x);
  }
  x += selectionCleaner.m_isUseSelectionStyle__() ? SelectionCleaner.f_BORDER_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner + 1 | 0 : 0;
  x += selectionCleaner.m_getPadding__();
  this.m_adjustPointsXByRender__org_pepstock_charba_client_impl_plugins_SelectionCleaner__double_$p_org_pepstock_charba_client_impl_plugins_SelectionHandler(selectionCleaner, x);
 }
 
 m_adjustPointsXByRender__org_pepstock_charba_client_impl_plugins_SelectionCleaner__double_$p_org_pepstock_charba_client_impl_plugins_SelectionHandler(/** SelectionCleaner */ selectionCleaner, /** number */ x) {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(Render.f_LABEL__org_pepstock_charba_client_impl_plugins_enums_Render, selectionCleaner.m_getRender__())) {
   selectionCleaner.m_setImageX__double_$pp_org_pepstock_charba_client_impl_plugins(SelectionCleaner.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
   selectionCleaner.m_setLabelX__double_$pp_org_pepstock_charba_client_impl_plugins(x);
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(Render.f_LABEL_IMAGE__org_pepstock_charba_client_impl_plugins_enums_Render, selectionCleaner.m_getRender__())) {
   selectionCleaner.m_setLabelX__double_$pp_org_pepstock_charba_client_impl_plugins(x);
   x += selectionCleaner.m_getLabelWidth___$pp_org_pepstock_charba_client_impl_plugins();
   x += selectionCleaner.m_getSpacing__();
   selectionCleaner.m_setImageX__double_$pp_org_pepstock_charba_client_impl_plugins(x);
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(Render.f_IMAGE_LABEL__org_pepstock_charba_client_impl_plugins_enums_Render, selectionCleaner.m_getRender__())) {
   selectionCleaner.m_setImageX__double_$pp_org_pepstock_charba_client_impl_plugins(x);
   x += selectionCleaner.m_getImageWidth___$pp_org_pepstock_charba_client_impl_plugins();
   x += selectionCleaner.m_getSpacing__();
   selectionCleaner.m_setLabelX__double_$pp_org_pepstock_charba_client_impl_plugins(x);
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(Render.f_IMAGE__org_pepstock_charba_client_impl_plugins_enums_Render, selectionCleaner.m_getRender__())) {
   selectionCleaner.m_setImageX__double_$pp_org_pepstock_charba_client_impl_plugins(x);
   selectionCleaner.m_setLabelX__double_$pp_org_pepstock_charba_client_impl_plugins(SelectionCleaner.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
  }
 }
 
 m_calculatePointsY__org_pepstock_charba_client_impl_plugins_SelectionCleaner_$p_org_pepstock_charba_client_impl_plugins_SelectionHandler(/** SelectionCleaner */ selectionCleaner) {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(selectionCleaner.m_getPosition__(), Position.f_TOP__org_pepstock_charba_client_enums_Position)) {
   let y = selectionCleaner.m_getMargin__();
   selectionCleaner.m_setY__double_$pp_org_pepstock_charba_client_impl_plugins(y);
   y += selectionCleaner.m_isUseSelectionStyle__() ? SelectionCleaner.f_BORDER_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner + 1 | 0 : 0;
   y += selectionCleaner.m_getPadding__();
   selectionCleaner.m_setImageY__double_$pp_org_pepstock_charba_client_impl_plugins(y);
   selectionCleaner.m_setLabelY__double_$pp_org_pepstock_charba_client_impl_plugins(y);
  } else {
   let y_1 = this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__().offsetHeight - selectionCleaner.m_getHeight___$pp_org_pepstock_charba_client_impl_plugins() - selectionCleaner.m_getMargin__();
   selectionCleaner.m_setY__double_$pp_org_pepstock_charba_client_impl_plugins(y_1);
   y_1 += selectionCleaner.m_isUseSelectionStyle__() ? SelectionCleaner.f_BORDER_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner + 1 | 0 : 0;
   y_1 += selectionCleaner.m_getPadding__();
   selectionCleaner.m_setImageY__double_$pp_org_pepstock_charba_client_impl_plugins(y_1);
   selectionCleaner.m_setLabelY__double_$pp_org_pepstock_charba_client_impl_plugins(y_1);
  }
 }
 
 m_removeSelectionCleaner___$pp_org_pepstock_charba_client_impl_plugins() {
  let pOptions = this.m_getOptions___$pp_org_pepstock_charba_client_impl_plugins();
  let selectionCleaner = pOptions.m_getSelectionCleaner__();
  if (selectionCleaner.m_isDisplay__()) {
   let ctx = Canvas_$Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__());
   ctx.save();
   ctx.clearRect(selectionCleaner.m_getX___$pp_org_pepstock_charba_client_impl_plugins(), selectionCleaner.m_getY___$pp_org_pepstock_charba_client_impl_plugins(), selectionCleaner.m_getWidth___$pp_org_pepstock_charba_client_impl_plugins(), selectionCleaner.m_getHeight___$pp_org_pepstock_charba_client_impl_plugins());
   ctx.restore();
  }
 }
 
 m_drawSelectionCleaner___$p_org_pepstock_charba_client_impl_plugins_SelectionHandler() {
  let ctx = Canvas_$Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getCanvas__());
  let pOptions = this.m_getOptions___$pp_org_pepstock_charba_client_impl_plugins();
  let selectionCleaner = pOptions.m_getSelectionCleaner__();
  if (selectionCleaner.m_isUseSelectionStyle__()) {
   Context2dItem_$Overlay.m_setFillColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(ctx, this.f_options__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getColorAsString__());
   ctx.fillRect(selectionCleaner.m_getX___$pp_org_pepstock_charba_client_impl_plugins(), selectionCleaner.m_getY___$pp_org_pepstock_charba_client_impl_plugins(), selectionCleaner.m_getWidth___$pp_org_pepstock_charba_client_impl_plugins(), selectionCleaner.m_getHeight___$pp_org_pepstock_charba_client_impl_plugins());
   if (this.f_options__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getBorderWidth__() > 0) {
    ctx.lineWidth = SelectionCleaner.f_BORDER_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner;
    let borderDash = this.f_options__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getBorderDash__();
    Context2dItem_$Overlay.m_setStrokeColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(ctx, this.f_options__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getBorderColorAsString__());
    if (!borderDash.isEmpty()) {
     Context2dItem_$Overlay.m_setLineDash__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_util_List(ctx, this.f_options__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getBorderDash__());
    }
    ctx.lineDashOffset = this.f_options__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getBorderDashOffset__();
    let borderIncrement = SelectionCleaner.f_BORDER_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner / 2;
    ctx.strokeRect(selectionCleaner.m_getX___$pp_org_pepstock_charba_client_impl_plugins() + borderIncrement, selectionCleaner.m_getY___$pp_org_pepstock_charba_client_impl_plugins() + borderIncrement, selectionCleaner.m_getWidth___$pp_org_pepstock_charba_client_impl_plugins() - SelectionCleaner.f_BORDER_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner, selectionCleaner.m_getHeight___$pp_org_pepstock_charba_client_impl_plugins() - SelectionCleaner.f_BORDER_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner);
   }
  }
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(Render.f_LABEL__org_pepstock_charba_client_impl_plugins_enums_Render, selectionCleaner.m_getRender__())) {
   ctx.font = Utilities.m_toCSSFontProperty__org_pepstock_charba_client_defaults_IsDefaultFont(selectionCleaner.m_getFont__());
   Context2dItem_$Overlay.m_setFillColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(ctx, selectionCleaner.m_getColorAsString__());
   Context2dItem_$Overlay.m_setTextBaseline__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_enums_TextBaseline(ctx, TextBaseline.f_TOP__org_pepstock_charba_client_dom_enums_TextBaseline);
   ctx.fillText(selectionCleaner.m_getLabel__(), selectionCleaner.m_getLabelX___$pp_org_pepstock_charba_client_impl_plugins(), selectionCleaner.m_getLabelY___$pp_org_pepstock_charba_client_impl_plugins());
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(Render.f_LABEL_IMAGE__org_pepstock_charba_client_impl_plugins_enums_Render, selectionCleaner.m_getRender__())) {
   ctx.font = Utilities.m_toCSSFontProperty__org_pepstock_charba_client_defaults_IsDefaultFont(selectionCleaner.m_getFont__());
   Context2dItem_$Overlay.m_setFillColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(ctx, selectionCleaner.m_getColorAsString__());
   Context2dItem_$Overlay.m_setTextBaseline__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_enums_TextBaseline(ctx, TextBaseline.f_TOP__org_pepstock_charba_client_dom_enums_TextBaseline);
   ctx.fillText(selectionCleaner.m_getLabel__(), selectionCleaner.m_getLabelX___$pp_org_pepstock_charba_client_impl_plugins(), selectionCleaner.m_getLabelY___$pp_org_pepstock_charba_client_impl_plugins());
   if (!$Equality.$same(selectionCleaner.m_getImage__(), null)) {
    Context2dItem_$Overlay.m_drawImage__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_Img__double__double__double__double(ctx, selectionCleaner.m_getImage__(), selectionCleaner.m_getImageX___$pp_org_pepstock_charba_client_impl_plugins(), selectionCleaner.m_getImageY___$pp_org_pepstock_charba_client_impl_plugins(), selectionCleaner.m_getImageWidth___$pp_org_pepstock_charba_client_impl_plugins(), selectionCleaner.m_getImageHeight___$pp_org_pepstock_charba_client_impl_plugins());
   }
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(Render.f_IMAGE_LABEL__org_pepstock_charba_client_impl_plugins_enums_Render, selectionCleaner.m_getRender__())) {
   if (!$Equality.$same(selectionCleaner.m_getImage__(), null)) {
    Context2dItem_$Overlay.m_drawImage__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_Img__double__double__double__double(ctx, selectionCleaner.m_getImage__(), selectionCleaner.m_getImageX___$pp_org_pepstock_charba_client_impl_plugins(), selectionCleaner.m_getImageY___$pp_org_pepstock_charba_client_impl_plugins(), selectionCleaner.m_getImageWidth___$pp_org_pepstock_charba_client_impl_plugins(), selectionCleaner.m_getImageHeight___$pp_org_pepstock_charba_client_impl_plugins());
   }
   ctx.font = Utilities.m_toCSSFontProperty__org_pepstock_charba_client_defaults_IsDefaultFont(selectionCleaner.m_getFont__());
   Context2dItem_$Overlay.m_setFillColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(ctx, selectionCleaner.m_getColorAsString__());
   Context2dItem_$Overlay.m_setTextBaseline__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_enums_TextBaseline(ctx, TextBaseline.f_TOP__org_pepstock_charba_client_dom_enums_TextBaseline);
   ctx.fillText(selectionCleaner.m_getLabel__(), selectionCleaner.m_getLabelX___$pp_org_pepstock_charba_client_impl_plugins(), selectionCleaner.m_getLabelY___$pp_org_pepstock_charba_client_impl_plugins());
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(Render.f_IMAGE__org_pepstock_charba_client_impl_plugins_enums_Render, selectionCleaner.m_getRender__())) {
   Context2dItem_$Overlay.m_drawImage__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_Img__double__double__double__double(ctx, selectionCleaner.m_getImage__(), selectionCleaner.m_getImageX___$pp_org_pepstock_charba_client_impl_plugins(), selectionCleaner.m_getImageY___$pp_org_pepstock_charba_client_impl_plugins(), selectionCleaner.m_getImageWidth___$pp_org_pepstock_charba_client_impl_plugins(), selectionCleaner.m_getImageHeight___$pp_org_pepstock_charba_client_impl_plugins());
  }
 }
 /** @return {boolean} */
 m_isEventInSelectionCleaner__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_impl_plugins_SelectionHandler(/** Object */ event) {
  let pOptions = this.m_getOptions___$pp_org_pepstock_charba_client_impl_plugins();
  let selectionCleaner = pOptions.m_getSelectionCleaner__();
  let isX = BaseNativeEvent_$Overlay.m_getX__$devirt__org_pepstock_charba_client_dom_BaseNativeEvent(event) >= selectionCleaner.m_getX___$pp_org_pepstock_charba_client_impl_plugins() && BaseNativeEvent_$Overlay.m_getX__$devirt__org_pepstock_charba_client_dom_BaseNativeEvent(event) <= selectionCleaner.m_getX___$pp_org_pepstock_charba_client_impl_plugins() + selectionCleaner.m_getWidth___$pp_org_pepstock_charba_client_impl_plugins();
  let isY = BaseNativeEvent_$Overlay.m_getY__$devirt__org_pepstock_charba_client_dom_BaseNativeEvent(event) >= selectionCleaner.m_getY___$pp_org_pepstock_charba_client_impl_plugins() && BaseNativeEvent_$Overlay.m_getY__$devirt__org_pepstock_charba_client_dom_BaseNativeEvent(event) <= selectionCleaner.m_getY___$pp_org_pepstock_charba_client_impl_plugins() + selectionCleaner.m_getHeight___$pp_org_pepstock_charba_client_impl_plugins();
  return isX && isY;
 }
 /** @return {boolean} */
 m_isEventInChartArea__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_impl_plugins_SelectionHandler(/** Object */ event) {
  let node = this.f_chart__org_pepstock_charba_client_impl_plugins_SelectionHandler_.m_getNode__();
  let areaInstance = node.m_getChartArea__();
  let isX = BaseNativeEvent_$Overlay.m_getX__$devirt__org_pepstock_charba_client_dom_BaseNativeEvent(event) >= areaInstance.m_getLeft__() && BaseNativeEvent_$Overlay.m_getX__$devirt__org_pepstock_charba_client_dom_BaseNativeEvent(event) <= areaInstance.m_getRight__();
  let isY = BaseNativeEvent_$Overlay.m_getY__$devirt__org_pepstock_charba_client_dom_BaseNativeEvent(event) >= areaInstance.m_getTop__() && BaseNativeEvent_$Overlay.m_getY__$devirt__org_pepstock_charba_client_dom_BaseNativeEvent(event) <= areaInstance.m_getBottom__();
  return isX && isY;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_impl_plugins_SelectionHandler() {
  this.f_mouseDownCallbackProxy__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = /**@type {CharbaCallbackProxy<?function(Object, Object):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_mouseMoveCallbackProxy__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = /**@type {CharbaCallbackProxy<?function(Object, Object):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_mouseUpCallbackProxy__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = /**@type {CharbaCallbackProxy<?function(Object, Object):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_mouseLeaveCallbackProxy__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = /**@type {CharbaCallbackProxy<?function(Object, Object):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_area__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = SelectionArea.$create__();
  this.f_track__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = null;
  this.f_status__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = SelectionStatus.f_READY__org_pepstock_charba_client_impl_plugins_SelectionStatus;
  this.f_snapshot__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = null;
  this.f_previousChartAreaAsString__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = null;
  this.f_previousDataURL__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = null;
  this.f_skipNextFireEvent__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = false;
  this.f_cursorOverSelectionCleaner__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = null;
  this.f_preventClickEvent__org_pepstock_charba_client_impl_plugins_SelectionHandler_ = false;
 }
 
 static $clinit() {
  SelectionHandler.$clinit = () =>{};
  SelectionHandler.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SelectionHandler;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  BaseEventTypes = goog.module.get('org.pepstock.charba.client.dom.BaseEventTypes$impl');
  BaseNativeEvent_$Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay$impl');
  BaseStyleProperties_$Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay$impl');
  DOMBuilder = goog.module.get('org.pepstock.charba.client.dom.DOMBuilder$impl');
  Canvas_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  Context2dItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
  CursorType = goog.module.get('org.pepstock.charba.client.dom.enums.CursorType$impl');
  TextBaseline = goog.module.get('org.pepstock.charba.client.dom.enums.TextBaseline$impl');
  AxisType = goog.module.get('org.pepstock.charba.client.enums.AxisType$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  DatasetRangeSelectionEvent = goog.module.get('org.pepstock.charba.client.events.DatasetRangeSelectionEvent$impl');
  SelectionArea = goog.module.get('org.pepstock.charba.client.impl.plugins.SelectionArea$impl');
  SelectionCleaner = goog.module.get('org.pepstock.charba.client.impl.plugins.SelectionCleaner$impl');
  SelectionStatus = goog.module.get('org.pepstock.charba.client.impl.plugins.SelectionStatus$impl');
  SelectionTrack = goog.module.get('org.pepstock.charba.client.impl.plugins.SelectionTrack$impl');
  Align = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.Align$impl');
  Render = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.Render$impl');
  ScaleItem = goog.module.get('org.pepstock.charba.client.items.ScaleItem$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
$Util.$setClassMetadata(SelectionHandler, "org.pepstock.charba.client.impl.plugins.SelectionHandler");

exports = SelectionHandler;

//# sourceMappingURL=SelectionHandler.js.map
