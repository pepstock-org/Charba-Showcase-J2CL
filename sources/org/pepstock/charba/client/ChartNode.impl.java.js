goog.module('org.pepstock.charba.client.ChartNode$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.Chart.$Overlay$impl');
let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let DefaultsBuilder = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
let ChartAreaNode = goog.forwardDeclare('org.pepstock.charba.client.items.ChartAreaNode$impl');
let LegendNode = goog.forwardDeclare('org.pepstock.charba.client.items.LegendNode$impl');
let OptionsNode = goog.forwardDeclare('org.pepstock.charba.client.items.OptionsNode$impl');
let ScalesNode = goog.forwardDeclare('org.pepstock.charba.client.items.ScalesNode$impl');
let TitleNode = goog.forwardDeclare('org.pepstock.charba.client.items.TitleNode$impl');
let TooltipNode = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipNode$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let JSON_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.utils.JSON.$Overlay$impl');

class ChartNode extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Chart}*/
  this.f_chart__org_pepstock_charba_client_ChartNode_;
  /**@type {OptionsNode}*/
  this.f_options__org_pepstock_charba_client_ChartNode_;
  /**@type {LegendNode}*/
  this.f_legend__org_pepstock_charba_client_ChartNode_;
  /**@type {ScalesNode}*/
  this.f_scales__org_pepstock_charba_client_ChartNode_;
  /**@type {ChartAreaNode}*/
  this.f_chartArea__org_pepstock_charba_client_ChartNode_;
  /**@type {TitleNode}*/
  this.f_title__org_pepstock_charba_client_ChartNode_;
  /**@type {TooltipNode}*/
  this.f_tooltip__org_pepstock_charba_client_ChartNode_;
  /**@type {boolean}*/
  this.f_initialized__org_pepstock_charba_client_ChartNode_ = false;
 }
 /** @return {!ChartNode} */
 static $create__java_lang_String__org_pepstock_charba_client_Chart(/** ?string */ chartId, /** Chart */ chart) {
  ChartNode.$clinit();
  let $instance = new ChartNode();
  $instance.$ctor__org_pepstock_charba_client_ChartNode__java_lang_String__org_pepstock_charba_client_Chart(chartId, chart);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_ChartNode__java_lang_String__org_pepstock_charba_client_Chart(/** ?string */ chartId, /** Chart */ chart) {
  this.$ctor__java_lang_Object__();
  this.f_chart__org_pepstock_charba_client_ChartNode_ = chart;
  this.f_initialized__org_pepstock_charba_client_ChartNode_ = !$Equality.$same(chart, null);
  let defaultValues = this.f_initialized__org_pepstock_charba_client_ChartNode_ ? $Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart).m_getDefaultChartOptions__() : DefaultsBuilder.m_get__().m_getScaledOptions__();
  this.f_options__org_pepstock_charba_client_ChartNode_ = OptionsNode.$create__java_lang_String__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_ChartEnvelop(chartId, defaultValues, /**@type {!ChartEnvelop<?>}*/ (ChartEnvelop.$create__java_lang_Object__boolean(this.f_initialized__org_pepstock_charba_client_ChartNode_ ? chart.options : null, true)));
  this.f_legend__org_pepstock_charba_client_ChartNode_ = LegendNode.$create__org_pepstock_charba_client_ChartEnvelop(/**@type {!ChartEnvelop<?>}*/ (ChartEnvelop.$create__java_lang_Object__boolean(this.f_initialized__org_pepstock_charba_client_ChartNode_ ? chart.legend : null, true)));
  this.f_scales__org_pepstock_charba_client_ChartNode_ = ScalesNode.$create__org_pepstock_charba_client_ChartEnvelop(/**@type {!ChartEnvelop<?>}*/ (ChartEnvelop.$create__java_lang_Object__boolean(this.f_initialized__org_pepstock_charba_client_ChartNode_ ? chart.scales : null, true)));
  this.f_chartArea__org_pepstock_charba_client_ChartNode_ = ChartAreaNode.$create__org_pepstock_charba_client_ChartEnvelop(/**@type {!ChartEnvelop<?>}*/ (ChartEnvelop.$create__java_lang_Object__boolean(this.f_initialized__org_pepstock_charba_client_ChartNode_ ? chart.chartArea : null, true)));
  this.f_title__org_pepstock_charba_client_ChartNode_ = TitleNode.$create__org_pepstock_charba_client_ChartEnvelop(/**@type {!ChartEnvelop<?>}*/ (ChartEnvelop.$create__java_lang_Object__boolean(this.f_initialized__org_pepstock_charba_client_ChartNode_ ? chart.titleBlock : null, true)));
  this.f_tooltip__org_pepstock_charba_client_ChartNode_ = TooltipNode.$create__org_pepstock_charba_client_ChartEnvelop(/**@type {!ChartEnvelop<?>}*/ (ChartEnvelop.$create__java_lang_Object__boolean(this.f_initialized__org_pepstock_charba_client_ChartNode_ ? chart.tooltip : null, true)));
 }
 /** @return {boolean} */
 m_isInitialized__() {
  return this.f_initialized__org_pepstock_charba_client_ChartNode_;
 }
 /** @return {OptionsNode} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_ChartNode_;
 }
 /** @return {LegendNode} */
 m_getLegend__() {
  return this.f_legend__org_pepstock_charba_client_ChartNode_;
 }
 /** @return {ScalesNode} */
 m_getScales__() {
  return this.f_scales__org_pepstock_charba_client_ChartNode_;
 }
 /** @return {ChartAreaNode} */
 m_getChartArea__() {
  return this.f_chartArea__org_pepstock_charba_client_ChartNode_;
 }
 /** @return {TitleNode} */
 m_getTitle__() {
  return this.f_title__org_pepstock_charba_client_ChartNode_;
 }
 /** @return {TooltipNode} */
 m_getTooltip__() {
  return this.f_tooltip__org_pepstock_charba_client_ChartNode_;
 }
 /** @return {number} */
 m_getId__() {
  return this.f_initialized__org_pepstock_charba_client_ChartNode_ ? Checker.m_positiveOrDefault__int__int(this.f_chart__org_pepstock_charba_client_ChartNode_.id, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined) : Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {number} */
 m_getWidth__() {
  return this.f_initialized__org_pepstock_charba_client_ChartNode_ ? Checker.m_positiveOrDefault__int__int(this.f_chart__org_pepstock_charba_client_ChartNode_.width, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined) : Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {number} */
 m_getHeight__() {
  return this.f_initialized__org_pepstock_charba_client_ChartNode_ ? Checker.m_positiveOrDefault__int__int(this.f_chart__org_pepstock_charba_client_ChartNode_.height, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined) : Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {number} */
 m_getAspectRatio__() {
  return this.f_initialized__org_pepstock_charba_client_ChartNode_ ? Checker.m_positiveOrDefault__double__double(this.f_chart__org_pepstock_charba_client_ChartNode_.aspectRatio, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined) : Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {number} */
 m_getCurrentDevicePixelRatio__() {
  return this.f_initialized__org_pepstock_charba_client_ChartNode_ ? Checker.m_positiveOrDefault__double__double(this.f_chart__org_pepstock_charba_client_ChartNode_.currentDevicePixelRatio, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined) : Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {?string} */
 m_toJSON__() {
  return JSON_$Overlay.m_stringifyWithReplacer__java_lang_Object__int(this.f_chart__org_pepstock_charba_client_ChartNode_, 3);
 }
 
 static $clinit() {
  ChartNode.$clinit = () =>{};
  ChartNode.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartNode;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.Chart.$Overlay$impl');
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  DefaultsBuilder = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
  ChartAreaNode = goog.module.get('org.pepstock.charba.client.items.ChartAreaNode$impl');
  LegendNode = goog.module.get('org.pepstock.charba.client.items.LegendNode$impl');
  OptionsNode = goog.module.get('org.pepstock.charba.client.items.OptionsNode$impl');
  ScalesNode = goog.module.get('org.pepstock.charba.client.items.ScalesNode$impl');
  TitleNode = goog.module.get('org.pepstock.charba.client.items.TitleNode$impl');
  TooltipNode = goog.module.get('org.pepstock.charba.client.items.TooltipNode$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  JSON_$Overlay = goog.module.get('org.pepstock.charba.client.utils.JSON.$Overlay$impl');
 }
}
$Util.$setClassMetadata(ChartNode, "org.pepstock.charba.client.ChartNode");

exports = ChartNode;

//# sourceMappingURL=ChartNode.js.map
