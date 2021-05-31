goog.module('org.pepstock.charba.client.impl.plugins.HtmlLegendCallbackProxy$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Charts = goog.forwardDeclare('org.pepstock.charba.client.Charts$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let BaseEventTypes = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseEventTypes$impl');
let BaseHtmlElement_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseHtmlElement.$Overlay$impl');
let BaseStyleProperties_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay$impl');
let Div_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Div.$Overlay$impl');
let TableCell_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.TableCell.$Overlay$impl');
let ChartEventContext = goog.forwardDeclare('org.pepstock.charba.client.events.ChartEventContext$impl');
let LegendClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendClickEvent$impl');
let LegendHoverEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendHoverEvent$impl');
let LegendLeaveEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendLeaveEvent$impl');
let HtmlLegend = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegend$impl');
let HtmlLegendId = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendId$impl');
let HtmlLegendOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions$impl');
let LegendItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem$impl');
let LegendLabelItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendLabelItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class HtmlLegendCallbackProxy extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object):void>}*/
  this.f_clickCallbackProxy__org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy_;
  /**@type {CharbaCallbackProxy<?function(Object):void>}*/
  this.f_hoverCallbackProxy__org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy_;
  /**@type {CharbaCallbackProxy<?function(Object):void>}*/
  this.f_leaveCallbackProxy__org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy_;
 }
 /** @return {!HtmlLegendCallbackProxy} */
 static $create__() {
  HtmlLegendCallbackProxy.$clinit();
  let $instance = new HtmlLegendCallbackProxy();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy();
  this.f_clickCallbackProxy__org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy_.callback = (/** Object */ arg0) =>{
   this.m_handleEvent__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy(arg0);
  };
  this.f_hoverCallbackProxy__org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy_.callback = (/** Object */ arg0_1) =>{
   this.m_handleEvent__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy(arg0_1);
  };
  this.f_leaveCallbackProxy__org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy_.callback = (/** Object */ arg0_2) =>{
   this.m_handleEvent__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy(arg0_2);
  };
 }
 
 m_addListeners__org_pepstock_charba_client_dom_BaseElement_$pp_org_pepstock_charba_client_impl_plugins(/** Element */ element) {
  element.addEventListener(BaseEventTypes.f_CLICK__org_pepstock_charba_client_dom_BaseEventTypes, this.f_clickCallbackProxy__org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy_.proxy);
  element.addEventListener(BaseEventTypes.f_MOUSE_MOVE__org_pepstock_charba_client_dom_BaseEventTypes, this.f_hoverCallbackProxy__org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy_.proxy);
  element.addEventListener(BaseEventTypes.f_MOUSE_LEAVE__org_pepstock_charba_client_dom_BaseEventTypes, this.f_leaveCallbackProxy__org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy_.proxy);
 }
 
 m_removeListeners__org_pepstock_charba_client_dom_BaseElement_$pp_org_pepstock_charba_client_impl_plugins(/** Element */ element) {
  element.removeEventListener(BaseEventTypes.f_CLICK__org_pepstock_charba_client_dom_BaseEventTypes, this.f_clickCallbackProxy__org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy_.proxy);
  element.removeEventListener(BaseEventTypes.f_MOUSE_MOVE__org_pepstock_charba_client_dom_BaseEventTypes, this.f_hoverCallbackProxy__org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy_.proxy);
  element.removeEventListener(BaseEventTypes.f_MOUSE_LEAVE__org_pepstock_charba_client_dom_BaseEventTypes, this.f_leaveCallbackProxy__org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy_.proxy);
 }
 
 m_handleEvent__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy(/** Object */ event) {
  let eventTarget = event.target;
  if (BaseHtmlElement_$Overlay.$isInstance(eventTarget)) {
   let element = /**@type {HTMLElement}*/ ($Casts.$to(eventTarget, BaseHtmlElement_$Overlay));
   let legendColumnElement = null;
   if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(element.nodeName, TableCell_$Overlay.f_TAG__org_pepstock_charba_client_dom_elements_TableCell_$Overlay)) {
    legendColumnElement = element;
   } else {
    legendColumnElement = this.m_checkParent__org_pepstock_charba_client_dom_BaseHtmlElement_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy(element);
   }
   if (!$Equality.$same(legendColumnElement, null)) {
    let legendId = HtmlLegendId.m_get__org_pepstock_charba_client_dom_BaseHtmlElement(legendColumnElement);
    if (!$Equality.$same(legendId, null) && Charts.m_hasNative__java_lang_String(legendId.m_getChartId___$pp_org_pepstock_charba_client_impl_plugins())) {
     let chartId = legendId.m_getChartId___$pp_org_pepstock_charba_client_impl_plugins();
     let chart = Charts.m_get__java_lang_String(chartId);
     let legendItems = /**@type {List<LegendLabelItem>}*/ ($Casts.$to(HtmlLegend.m_get__().m_getPluginLegendLabelsItems___$pp_org_pepstock_charba_client_impl_plugins().get(chartId), List));
     let selectedItem = legendId.m_lookForLegendItem__java_util_List_$pp_org_pepstock_charba_client_impl_plugins(legendItems);
     this.m_fireEvent__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy(chart, selectedItem, event);
    }
   }
  }
 }
 /** @return {HTMLElement} */
 m_checkParent__org_pepstock_charba_client_dom_BaseHtmlElement_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy(/** HTMLElement */ child) {
  if (!$Equality.$same(child.parentElement, null)) {
   if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(child.parentElement.nodeName, TableCell_$Overlay.f_TAG__org_pepstock_charba_client_dom_elements_TableCell_$Overlay)) {
    return BaseHtmlElement_$Overlay.m_getParentHtmlElement__$devirt__org_pepstock_charba_client_dom_BaseHtmlElement(child);
   } else {
    return this.m_checkParent__org_pepstock_charba_client_dom_BaseHtmlElement_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy(BaseHtmlElement_$Overlay.m_getParentHtmlElement__$devirt__org_pepstock_charba_client_dom_BaseHtmlElement(child));
   }
  }
  return null;
 }
 
 m_fireEvent__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy(/** IsChart */ chart, /** LegendItem */ selectedItem, /** Object */ event) {
  if (!$Equality.$same(selectedItem, null) && Charts.m_hasNative__org_pepstock_charba_client_IsChart(chart)) {
   if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(BaseEventTypes.f_CLICK__org_pepstock_charba_client_dom_BaseEventTypes, event.type)) {
    this.m_onClick__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy(chart, selectedItem, event);
   } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(BaseEventTypes.f_MOUSE_MOVE__org_pepstock_charba_client_dom_BaseEventTypes, event.type)) {
    this.m_onHover__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy(chart, selectedItem, event);
   } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(BaseEventTypes.f_MOUSE_LEAVE__org_pepstock_charba_client_dom_BaseEventTypes, event.type)) {
    this.m_onLeave__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy(chart, selectedItem, event);
   }
  }
 }
 
 m_onClick__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy(/** IsChart */ chart, /** LegendItem */ selectedItem, /** Object */ event) {
  let nativeChart = Charts.m_getNative__org_pepstock_charba_client_IsChart(chart);
  let eventContext = ChartEventContext.$create__org_pepstock_charba_client_Chart__org_pepstock_charba_client_dom_BaseNativeEvent(nativeChart, event);
  HtmlLegend.m_get__().m_getPluginAddedLegendStatus___$pp_org_pepstock_charba_client_impl_plugins().remove(chart.m_getId__());
  let eventToFire = LegendClickEvent.$create__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_items_LegendItem(eventContext, selectedItem);
  if (chart.m_getOptions__().m_getLegend__().m_hasClickHandlers__()) {
   chart.m_fireEvent__org_pepstock_charba_client_events_Event(eventToFire);
  } else {
   Defaults.m_get__().m_invokeLegendOnClick__org_pepstock_charba_client_events_LegendClickEvent(eventToFire);
  }
 }
 
 m_onHover__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy(/** IsChart */ chart, /** LegendItem */ selectedItem, /** Object */ event) {
  let nativeChart = Charts.m_getNative__org_pepstock_charba_client_IsChart(chart);
  let eventContext = ChartEventContext.$create__org_pepstock_charba_client_Chart__org_pepstock_charba_client_dom_BaseNativeEvent(nativeChart, event);
  this.m_setCursorOnLegend__org_pepstock_charba_client_IsChart__boolean_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy(chart, true);
  let eventToFire = LegendHoverEvent.$create__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_items_LegendItem(eventContext, selectedItem);
  if (chart.m_getOptions__().m_getLegend__().m_hasHoverHandlers__()) {
   chart.m_fireEvent__org_pepstock_charba_client_events_Event(eventToFire);
  } else {
   Defaults.m_get__().m_invokeLegendOnHover__org_pepstock_charba_client_events_LegendHoverEvent(eventToFire);
  }
 }
 
 m_onLeave__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy(/** IsChart */ chart, /** LegendItem */ selectedItem, /** Object */ event) {
  let nativeChart = Charts.m_getNative__org_pepstock_charba_client_IsChart(chart);
  let eventContext = ChartEventContext.$create__org_pepstock_charba_client_Chart__org_pepstock_charba_client_dom_BaseNativeEvent(nativeChart, event);
  this.m_setCursorOnLegend__org_pepstock_charba_client_IsChart__boolean_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy(chart, false);
  let eventToFire = LegendLeaveEvent.$create__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_items_LegendItem(eventContext, selectedItem);
  if (chart.m_getOptions__().m_getLegend__().m_hasLeaveHandlers__()) {
   chart.m_fireEvent__org_pepstock_charba_client_events_Event(eventToFire);
  } else {
   Defaults.m_get__().m_invokeLegendOnLeave__org_pepstock_charba_client_events_LegendLeaveEvent(eventToFire);
  }
 }
 
 m_setCursorOnLegend__org_pepstock_charba_client_IsChart__boolean_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy(/** IsChart */ chart, /** boolean */ setPointer) {
  if (HtmlLegend.m_get__().m_getPluginDivElements___$pp_org_pepstock_charba_client_impl_plugins().containsKey(chart.m_getId__())) {
   let legendElement = /**@type {HTMLDivElement}*/ ($Casts.$to(HtmlLegend.m_get__().m_getPluginDivElements___$pp_org_pepstock_charba_client_impl_plugins().get(chart.m_getId__()), Div_$Overlay));
   let options = /**@type {HtmlLegendOptions}*/ ($Casts.$to(HtmlLegend.m_get__().m_getPluginOptions___$pp_org_pepstock_charba_client_impl_plugins().get(chart.m_getId__()), HtmlLegendOptions));
   BaseStyleProperties_$Overlay.m_setCursorType__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_CursorType(legendElement.style, setPointer ? options.m_getCursorPointer__() : options.m_getCurrentCursor___$pp_org_pepstock_charba_client_impl_plugins());
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy() {
  this.f_clickCallbackProxy__org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy_ = /**@type {CharbaCallbackProxy<?function(Object):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hoverCallbackProxy__org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy_ = /**@type {CharbaCallbackProxy<?function(Object):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_leaveCallbackProxy__org_pepstock_charba_client_impl_plugins_HtmlLegendCallbackProxy_ = /**@type {CharbaCallbackProxy<?function(Object):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
 }
 
 static $clinit() {
  HtmlLegendCallbackProxy.$clinit = () =>{};
  HtmlLegendCallbackProxy.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlLegendCallbackProxy;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  List = goog.module.get('java.util.List$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Charts = goog.module.get('org.pepstock.charba.client.Charts$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  BaseEventTypes = goog.module.get('org.pepstock.charba.client.dom.BaseEventTypes$impl');
  BaseHtmlElement_$Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseHtmlElement.$Overlay$impl');
  BaseStyleProperties_$Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay$impl');
  Div_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Div.$Overlay$impl');
  TableCell_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.TableCell.$Overlay$impl');
  ChartEventContext = goog.module.get('org.pepstock.charba.client.events.ChartEventContext$impl');
  LegendClickEvent = goog.module.get('org.pepstock.charba.client.events.LegendClickEvent$impl');
  LegendHoverEvent = goog.module.get('org.pepstock.charba.client.events.LegendHoverEvent$impl');
  LegendLeaveEvent = goog.module.get('org.pepstock.charba.client.events.LegendLeaveEvent$impl');
  HtmlLegend = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegend$impl');
  HtmlLegendId = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegendId$impl');
  HtmlLegendOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(HtmlLegendCallbackProxy, "org.pepstock.charba.client.impl.plugins.HtmlLegendCallbackProxy");

exports = HtmlLegendCallbackProxy;

//# sourceMappingURL=HtmlLegendCallbackProxy.js.map
