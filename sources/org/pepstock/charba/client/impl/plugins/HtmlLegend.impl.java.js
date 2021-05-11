goog.module('org.pepstock.charba.client.impl.plugins.HtmlLegend$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPlugin = goog.require('org.pepstock.charba.client.plugins.AbstractPlugin$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let TilesFactory = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.TilesFactory$impl');
let BaseElement_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseElement.$Overlay$impl');
let BaseHtmlElement_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseHtmlElement.$Overlay$impl');
let BaseNode_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseNode.$Overlay$impl');
let DOMBuilder = goog.forwardDeclare('org.pepstock.charba.client.dom.DOMBuilder$impl');
let Canvas_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Div.$Overlay$impl');
let TableCell_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.TableCell.$Overlay$impl');
let Unit = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.Unit$impl');
let DefaultPluginId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultPluginId$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let HtmlLegendCallbackProxy = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendCallbackProxy$impl');
let HtmlLegendDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendDefaultOptions$impl');
let HtmlLegendGenerator = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendGenerator$impl');
let HtmlLegendItem = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendItem$impl');
let HtmlLegendOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions$impl');
let HtmlLegendOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendOptionsFactory$impl');
let HtmlLegendBuilderDefaultsOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendOptionsFactory.HtmlLegendBuilderDefaultsOptionsFactory$impl');
let LegendLabelItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendLabelItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class HtmlLegend extends AbstractPlugin {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<?string, HtmlLegendOptions>}*/
  this.f_pluginOptions__org_pepstock_charba_client_impl_plugins_HtmlLegend_;
  /**@type {Map<?string, List<LegendLabelItem>>}*/
  this.f_pluginLegendLabelsItems__org_pepstock_charba_client_impl_plugins_HtmlLegend_;
  /**@type {Set<?string>}*/
  this.f_pluginAddedLegendStatus__org_pepstock_charba_client_impl_plugins_HtmlLegend_;
  /**@type {Map<?string, HTMLDivElement>}*/
  this.f_pluginDivElements__org_pepstock_charba_client_impl_plugins_HtmlLegend_;
  /**@type {Map<?string, ?boolean>}*/
  this.f_pluginLegendDisplayStatus__org_pepstock_charba_client_impl_plugins_HtmlLegend_;
  /**@type {Map<?string, HtmlLegendCallbackProxy>}*/
  this.f_pluginCallbackProxies__org_pepstock_charba_client_impl_plugins_HtmlLegend_;
 }
 /** @return {!HtmlLegend} */
 static $create__() {
  let $instance = new HtmlLegend();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_HtmlLegend__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_HtmlLegend__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPlugin__java_lang_String(HtmlLegend.f_ID__org_pepstock_charba_client_impl_plugins_HtmlLegend);
  this.$init___$p_org_pepstock_charba_client_impl_plugins_HtmlLegend();
 }
 /** @return {HtmlLegend} */
 static m_get__() {
  HtmlLegend.$clinit();
  return HtmlLegend.f_INSTANCE__org_pepstock_charba_client_impl_plugins_HtmlLegend_;
 }
 /** @override */
 m_onConfigure__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart)) {
   if (!this.f_pluginCallbackProxies__org_pepstock_charba_client_impl_plugins_HtmlLegend_.containsKey(chart.m_getId__())) {
    this.f_pluginCallbackProxies__org_pepstock_charba_client_impl_plugins_HtmlLegend_.put(chart.m_getId__(), HtmlLegendCallbackProxy.$create__());
   }
   let pOptions = null;
   let options = chart.m_getWholeOptions__();
   if (options.m_getPlugins__().m_hasOptions__java_lang_String(HtmlLegend.f_ID__org_pepstock_charba_client_impl_plugins_HtmlLegend)) {
    pOptions = /**@type {HtmlLegendOptions}*/ ($Casts.$to(options.m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(HtmlLegend.f_ID__org_pepstock_charba_client_impl_plugins_HtmlLegend, HtmlLegend.$static_FACTORY__org_pepstock_charba_client_impl_plugins_HtmlLegend), HtmlLegendOptions));
   } else {
    pOptions = HtmlLegendOptions.$create__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions(HtmlLegendDefaultOptions.f_INSTANCE__org_pepstock_charba_client_impl_plugins_HtmlLegendDefaultOptions);
   }
   this.f_pluginOptions__org_pepstock_charba_client_impl_plugins_HtmlLegend_.put(chart.m_getId__(), pOptions);
   pOptions.m_setCurrentCursor__org_pepstock_charba_client_dom_enums_CursorType_$pp_org_pepstock_charba_client_impl_plugins(chart.m_getInitialCursor__());
   if (pOptions.m_isDisplay__()) {
    this.m_manageLegendDisplay__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(chart, pOptions);
   } else {
    this.m_resetStatus__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(chart);
   }
  }
 }
 /** @override */
 m_onBeginDrawing__org_pepstock_charba_client_IsChart__boolean(/** IsChart */ chart, /** boolean */ overridePreviousUpdate) {
  if (this.m_mustBeDisplay__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(chart)) {
   if (overridePreviousUpdate) {
    this.f_pluginAddedLegendStatus__org_pepstock_charba_client_impl_plugins_HtmlLegend_.remove(chart.m_getId__());
   }
   let legend = chart.m_getOptions__().m_getLegend__();
   let legendElement = null;
   if (!this.f_pluginDivElements__org_pepstock_charba_client_impl_plugins_HtmlLegend_.containsKey(chart.m_getId__())) {
    legendElement = DOMBuilder.m_get__().m_createDivElement__();
    legendElement.id = this.m_formatLegendElementId__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(chart);
    this.f_pluginDivElements__org_pepstock_charba_client_impl_plugins_HtmlLegend_.put(chart.m_getId__(), legendElement);
   } else {
    legendElement = /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_pluginDivElements__org_pepstock_charba_client_impl_plugins_HtmlLegend_.get(chart.m_getId__()), $Overlay));
   }
   if ($Equality.$same(legendElement.parentNode, null)) {
    this.m_addLegendElement__org_pepstock_charba_client_dom_elements_Div__org_pepstock_charba_client_dom_elements_Div__org_pepstock_charba_client_enums_Position__int_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(chart.m_getChartElement__(), legendElement, legend.m_getPosition__(), legend.m_getLabels__().m_getPadding__());
   } else {
    this.f_pluginAddedLegendStatus__org_pepstock_charba_client_impl_plugins_HtmlLegend_.remove(chart.m_getId__());
    this.m_manageLegendElement__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_dom_elements_Div__org_pepstock_charba_client_enums_Position_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(chart, legendElement, legend.m_getPosition__());
   }
   if (legend.m_isFullSize__()) {
    legendElement.style.width = Unit.f_PCT__org_pepstock_charba_client_dom_enums_Unit.m_format__int(100);
   }
  }
 }
 /** @override */
 m_onAfterDraw__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (this.m_mustBeDisplay__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(chart) && this.f_pluginDivElements__org_pepstock_charba_client_impl_plugins_HtmlLegend_.containsKey(chart.m_getId__()) && !this.f_pluginAddedLegendStatus__org_pepstock_charba_client_impl_plugins_HtmlLegend_.contains(chart.m_getId__())) {
   let legendElement = /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_pluginDivElements__org_pepstock_charba_client_impl_plugins_HtmlLegend_.get(chart.m_getId__()), $Overlay));
   let html = HtmlLegend.f_GENERATOR__org_pepstock_charba_client_impl_plugins_HtmlLegend_.m_generateLegend__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_impl_plugins(chart);
   BaseNode_$Overlay.m_removeAllChildren__$devirt__org_pepstock_charba_client_dom_BaseNode(legendElement);
   legendElement.innerHTML = html.m_asString__();
   this.m_removeListeners__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_dom_elements_Div_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(chart, legendElement);
   this.m_addListeners__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_dom_elements_Div_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(chart, legendElement);
   this.f_pluginAddedLegendStatus__org_pepstock_charba_client_impl_plugins_HtmlLegend_.add(chart.m_getId__());
  }
 }
 /** @override */
 m_onEndDrawing__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (this.m_mustBeDisplay__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(chart)) {
   this.f_pluginAddedLegendStatus__org_pepstock_charba_client_impl_plugins_HtmlLegend_.remove(chart.m_getId__());
  }
 }
 /** @override */
 m_onDestroy__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.m_resetStatus__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(chart);
   this.f_pluginLegendDisplayStatus__org_pepstock_charba_client_impl_plugins_HtmlLegend_.remove(chart.m_getId__());
   this.f_pluginCallbackProxies__org_pepstock_charba_client_impl_plugins_HtmlLegend_.remove(chart.m_getId__());
   this.f_pluginOptions__org_pepstock_charba_client_impl_plugins_HtmlLegend_.remove(chart.m_getId__());
  }
 }
 
 m_manageLegendDisplay__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(/** IsChart */ chart, /** HtmlLegendOptions */ pOptions) {
  let cachedValue = false;
  if (this.f_pluginLegendDisplayStatus__org_pepstock_charba_client_impl_plugins_HtmlLegend_.containsKey(chart.m_getId__())) {
   cachedValue = Boolean.m_booleanValue__java_lang_Boolean(/**@type {?boolean}*/ ($Casts.$to(this.f_pluginLegendDisplayStatus__org_pepstock_charba_client_impl_plugins_HtmlLegend_.get(chart.m_getId__()), Boolean)));
   if (chart.m_getOptions__().m_getLegend__().m_isDisplay__() && !cachedValue) {
    this.f_pluginLegendDisplayStatus__org_pepstock_charba_client_impl_plugins_HtmlLegend_.put(chart.m_getId__(), chart.m_getOptions__().m_getLegend__().m_isDisplay__());
   }
  } else {
   this.f_pluginLegendDisplayStatus__org_pepstock_charba_client_impl_plugins_HtmlLegend_.put(chart.m_getId__(), chart.m_getOptions__().m_getLegend__().m_isDisplay__());
  }
  let mustBeChecked = chart.m_getOptions__().m_getLegend__().m_isDisplay__() || cachedValue;
  if (mustBeChecked && chart.m_getOptions__().m_getPlugins__().m_isEnabled__org_pepstock_charba_client_enums_DefaultPluginId(DefaultPluginId.f_LEGEND__org_pepstock_charba_client_enums_DefaultPluginId)) {
   chart.m_getOptions__().m_getLegend__().m_setDisplay__boolean(false);
  } else {
   this.m_resetStatus__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(chart);
   pOptions.m_setDisplay__boolean(false);
  }
 }
 /** @return {boolean} */
 m_mustBeDisplay__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart) && this.f_pluginOptions__org_pepstock_charba_client_impl_plugins_HtmlLegend_.containsKey(chart.m_getId__())) {
   let options = /**@type {HtmlLegendOptions}*/ ($Casts.$to(this.f_pluginOptions__org_pepstock_charba_client_impl_plugins_HtmlLegend_.get(chart.m_getId__()), HtmlLegendOptions));
   return options.m_isDisplay__();
  }
  return false;
 }
 
 m_resetStatus__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(/** IsChart */ chart) {
  if (this.f_pluginDivElements__org_pepstock_charba_client_impl_plugins_HtmlLegend_.containsKey(chart.m_getId__())) {
   let legendElement = /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_pluginDivElements__org_pepstock_charba_client_impl_plugins_HtmlLegend_.remove(chart.m_getId__()), $Overlay));
   this.m_removeListeners__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_dom_elements_Div_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(chart, legendElement);
   BaseNode_$Overlay.m_removeAllChildren__$devirt__org_pepstock_charba_client_dom_BaseNode(legendElement);
   BaseHtmlElement_$Overlay.m_removeFromParent__$devirt__org_pepstock_charba_client_dom_BaseHtmlElement(legendElement);
  }
  this.f_pluginAddedLegendStatus__org_pepstock_charba_client_impl_plugins_HtmlLegend_.remove(chart.m_getId__());
  this.f_pluginLegendLabelsItems__org_pepstock_charba_client_impl_plugins_HtmlLegend_.remove(chart.m_getId__());
  let htmlLegendItem = HtmlLegendItem.$create__org_pepstock_charba_client_IsChart(chart);
  TilesFactory.m_clearHtmlLegendItems__org_pepstock_charba_client_impl_plugins_HtmlLegendItem(htmlLegendItem);
 }
 /** @return {?string} */
 m_formatLegendElementId__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(/** IsChart */ chart) {
  return j_l_String.m_valueOf__java_lang_Object(chart.m_getId__()) + j_l_String.m_valueOf__java_lang_Object(HtmlLegend.f_SUFFIX_LEGEND_ELEMENT_ID__org_pepstock_charba_client_impl_plugins_HtmlLegend_);
 }
 
 m_addListeners__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_dom_elements_Div_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(/** IsChart */ chart, /** HTMLDivElement */ legendElement) {
  let tds = legendElement.getElementsByTagName(TableCell_$Overlay.f_TAG__org_pepstock_charba_client_dom_elements_TableCell_$Overlay);
  for (let i = 0; i < tds.length; i = i + 1 | 0) {
   let td = /**@type {Element}*/ ($Casts.$to(tds.item(i), BaseElement_$Overlay));
   if (j_l_String.m_startsWith__java_lang_String__java_lang_String(td.id, chart.m_getId__()) && this.f_pluginCallbackProxies__org_pepstock_charba_client_impl_plugins_HtmlLegend_.containsKey(chart.m_getId__())) {
    let callbackProxy = /**@type {HtmlLegendCallbackProxy}*/ ($Casts.$to(this.f_pluginCallbackProxies__org_pepstock_charba_client_impl_plugins_HtmlLegend_.get(chart.m_getId__()), HtmlLegendCallbackProxy));
    callbackProxy.m_addListeners__org_pepstock_charba_client_dom_BaseElement_$pp_org_pepstock_charba_client_impl_plugins(td);
   }
  }
 }
 
 m_removeListeners__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_dom_elements_Div_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(/** IsChart */ chart, /** HTMLDivElement */ legendElement) {
  let tds = legendElement.getElementsByTagName(TableCell_$Overlay.f_TAG__org_pepstock_charba_client_dom_elements_TableCell_$Overlay);
  for (let i = 0; i < tds.length; i = i + 1 | 0) {
   let td = /**@type {Element}*/ ($Casts.$to(tds.item(i), BaseElement_$Overlay));
   if (j_l_String.m_startsWith__java_lang_String__java_lang_String(td.id, chart.m_getId__()) && this.f_pluginCallbackProxies__org_pepstock_charba_client_impl_plugins_HtmlLegend_.containsKey(chart.m_getId__())) {
    let callbackProxy = /**@type {HtmlLegendCallbackProxy}*/ ($Casts.$to(this.f_pluginCallbackProxies__org_pepstock_charba_client_impl_plugins_HtmlLegend_.get(chart.m_getId__()), HtmlLegendCallbackProxy));
    callbackProxy.m_removeListeners__org_pepstock_charba_client_dom_BaseElement_$pp_org_pepstock_charba_client_impl_plugins(td);
   }
  }
 }
 
 m_addLegendElement__org_pepstock_charba_client_dom_elements_Div__org_pepstock_charba_client_dom_elements_Div__org_pepstock_charba_client_enums_Position__int_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(/** HTMLDivElement */ chartElement, /** HTMLDivElement */ legendElement, /** Position */ position, /** number */ padding) {
  if (this.m_mustAddToBottom__org_pepstock_charba_client_enums_Position_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(position)) {
   chartElement.appendChild(legendElement);
   legendElement.style.paddingBottom = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(padding);
  } else {
   chartElement.insertBefore(legendElement, chartElement.firstChild);
   legendElement.style.paddingTop = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(padding);
  }
 }
 
 m_manageLegendElement__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_dom_elements_Div__org_pepstock_charba_client_enums_Position_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(/** IsChart */ chart, /** HTMLDivElement */ legendElement, /** Position */ position) {
  let chartElement = chart.m_getChartElement__();
  let isAfterCanvas = this.m_isAfterCanvas__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_dom_elements_Div_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(chart, legendElement);
  let mustBeAddedToBottom = this.m_mustAddToBottom__org_pepstock_charba_client_enums_Position_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(position);
  if (mustBeAddedToBottom && !isAfterCanvas) {
   BaseHtmlElement_$Overlay.m_removeFromParent__$devirt__org_pepstock_charba_client_dom_BaseHtmlElement(legendElement);
   chartElement.appendChild(legendElement);
  } else if (!mustBeAddedToBottom && isAfterCanvas) {
   BaseHtmlElement_$Overlay.m_removeFromParent__$devirt__org_pepstock_charba_client_dom_BaseHtmlElement(legendElement);
   chartElement.insertBefore(legendElement, chartElement.firstChild);
  }
 }
 /** @return {boolean} */
 m_mustAddToBottom__org_pepstock_charba_client_enums_Position_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(/** Position */ position) {
  return $Objects.m_equals__java_lang_Object__java_lang_Object(Position.f_RIGHT__org_pepstock_charba_client_enums_Position, position) || $Objects.m_equals__java_lang_Object__java_lang_Object(Position.f_BOTTOM__org_pepstock_charba_client_enums_Position, position);
 }
 /** @return {boolean} */
 m_isAfterCanvas__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_dom_elements_Div_$p_org_pepstock_charba_client_impl_plugins_HtmlLegend(/** IsChart */ chart, /** HTMLDivElement */ legendElement) {
  let chartElement = chart.m_getChartElement__();
  let canvasId = chart.m_getCanvas__().id;
  let children = chartElement.childNodes;
  for (let i = 0; i < children.length; i = i + 1 | 0) {
   let childNode = children.item(i);
   if (BaseHtmlElement_$Overlay.$isInstance(childNode)) {
    let childElement = /**@type {HTMLElement}*/ ($Casts.$to(childNode, BaseHtmlElement_$Overlay));
    if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(childElement.nodeName, $Overlay.f_TAG__org_pepstock_charba_client_dom_elements_Div_$Overlay) && j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(legendElement.id, childElement.id)) {
     return false;
    } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(childElement.nodeName, Canvas_$Overlay.f_TAG__org_pepstock_charba_client_dom_elements_Canvas_$Overlay) && j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(childElement.id, canvasId)) {
     return true;
    }
   }
  }
  return false;
 }
 /** @return {Map<?string, HtmlLegendOptions>} */
 m_getPluginOptions___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.f_pluginOptions__org_pepstock_charba_client_impl_plugins_HtmlLegend_;
 }
 /** @return {Map<?string, List<LegendLabelItem>>} */
 m_getPluginLegendLabelsItems___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.f_pluginLegendLabelsItems__org_pepstock_charba_client_impl_plugins_HtmlLegend_;
 }
 /** @return {Set<?string>} */
 m_getPluginAddedLegendStatus___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.f_pluginAddedLegendStatus__org_pepstock_charba_client_impl_plugins_HtmlLegend_;
 }
 /** @return {Map<?string, HTMLDivElement>} */
 m_getPluginDivElements___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.f_pluginDivElements__org_pepstock_charba_client_impl_plugins_HtmlLegend_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_impl_plugins_HtmlLegend() {
  this.f_pluginOptions__org_pepstock_charba_client_impl_plugins_HtmlLegend_ = /**@type {!HashMap<?string, HtmlLegendOptions>}*/ (HashMap.$create__());
  this.f_pluginLegendLabelsItems__org_pepstock_charba_client_impl_plugins_HtmlLegend_ = /**@type {!HashMap<?string, List<LegendLabelItem>>}*/ (HashMap.$create__());
  this.f_pluginAddedLegendStatus__org_pepstock_charba_client_impl_plugins_HtmlLegend_ = /**@type {!HashSet<?string>}*/ (HashSet.$create__());
  this.f_pluginDivElements__org_pepstock_charba_client_impl_plugins_HtmlLegend_ = /**@type {!HashMap<?string, HTMLDivElement>}*/ (HashMap.$create__());
  this.f_pluginLegendDisplayStatus__org_pepstock_charba_client_impl_plugins_HtmlLegend_ = /**@type {!HashMap<?string, ?boolean>}*/ (HashMap.$create__());
  this.f_pluginCallbackProxies__org_pepstock_charba_client_impl_plugins_HtmlLegend_ = /**@type {!HashMap<?string, HtmlLegendCallbackProxy>}*/ (HashMap.$create__());
 }
 /** @return {HtmlLegendOptionsFactory} */
 static get f_FACTORY__org_pepstock_charba_client_impl_plugins_HtmlLegend() {
  return (HtmlLegend.$clinit(), HtmlLegend.$static_FACTORY__org_pepstock_charba_client_impl_plugins_HtmlLegend);
 }
 /** @return {HtmlLegendBuilderDefaultsOptionsFactory} */
 static get f_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_HtmlLegend() {
  return (HtmlLegend.$clinit(), HtmlLegend.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_HtmlLegend);
 }
 
 static $clinit() {
  HtmlLegend.$clinit = () =>{};
  HtmlLegend.$loadModules();
  AbstractPlugin.$clinit();
  HtmlLegend.$static_FACTORY__org_pepstock_charba_client_impl_plugins_HtmlLegend = HtmlLegendOptionsFactory.$create__();
  HtmlLegend.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_HtmlLegend = HtmlLegendBuilderDefaultsOptionsFactory.$create__();
  HtmlLegend.f_INSTANCE__org_pepstock_charba_client_impl_plugins_HtmlLegend_ = HtmlLegend.$create__();
  HtmlLegend.f_GENERATOR__org_pepstock_charba_client_impl_plugins_HtmlLegend_ = HtmlLegendGenerator.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlLegend;
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  TilesFactory = goog.module.get('org.pepstock.charba.client.colors.tiles.TilesFactory$impl');
  BaseElement_$Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseElement.$Overlay$impl');
  BaseHtmlElement_$Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseHtmlElement.$Overlay$impl');
  BaseNode_$Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseNode.$Overlay$impl');
  DOMBuilder = goog.module.get('org.pepstock.charba.client.dom.DOMBuilder$impl');
  Canvas_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Div.$Overlay$impl');
  TableCell_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.TableCell.$Overlay$impl');
  Unit = goog.module.get('org.pepstock.charba.client.dom.enums.Unit$impl');
  DefaultPluginId = goog.module.get('org.pepstock.charba.client.enums.DefaultPluginId$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  HtmlLegendCallbackProxy = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegendCallbackProxy$impl');
  HtmlLegendDefaultOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegendDefaultOptions$impl');
  HtmlLegendGenerator = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegendGenerator$impl');
  HtmlLegendItem = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegendItem$impl');
  HtmlLegendOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions$impl');
  HtmlLegendOptionsFactory = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegendOptionsFactory$impl');
  HtmlLegendBuilderDefaultsOptionsFactory = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegendOptionsFactory.HtmlLegendBuilderDefaultsOptionsFactory$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@const {?string}*/
HtmlLegend.f_ID__org_pepstock_charba_client_impl_plugins_HtmlLegend = "charbahtmllegend";
/**@private {HtmlLegendOptionsFactory}*/
HtmlLegend.$static_FACTORY__org_pepstock_charba_client_impl_plugins_HtmlLegend;
/**@private {HtmlLegendBuilderDefaultsOptionsFactory}*/
HtmlLegend.$static_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_HtmlLegend;
/**@type {HtmlLegend}*/
HtmlLegend.f_INSTANCE__org_pepstock_charba_client_impl_plugins_HtmlLegend_;
/**@const {?string}*/
HtmlLegend.f_SUFFIX_LEGEND_ELEMENT_ID__org_pepstock_charba_client_impl_plugins_HtmlLegend_ = "_legend";
/**@type {HtmlLegendGenerator}*/
HtmlLegend.f_GENERATOR__org_pepstock_charba_client_impl_plugins_HtmlLegend_;
$Util.$setClassMetadata(HtmlLegend, "org.pepstock.charba.client.impl.plugins.HtmlLegend");

exports = HtmlLegend;

//# sourceMappingURL=HtmlLegend.js.map
