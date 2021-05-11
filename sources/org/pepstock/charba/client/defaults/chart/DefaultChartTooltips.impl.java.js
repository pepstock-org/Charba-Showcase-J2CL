goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartTooltips$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultTooltips = goog.require('org.pepstock.charba.client.defaults.IsDefaultTooltips$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let IsDefaultAnimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimation$impl');
let IsDefaultAnimations = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimations$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let IsDefaultTransitions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTransitions$impl');
let Event = goog.forwardDeclare('org.pepstock.charba.client.enums.Event$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');
let IsTooltipPosition = goog.forwardDeclare('org.pepstock.charba.client.enums.IsTooltipPosition$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');
let TextDirection = goog.forwardDeclare('org.pepstock.charba.client.enums.TextDirection$impl');
let TooltipAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TooltipAlign$impl');

/**
 * @implements {IsDefaultTooltips}
 */
class DefaultChartTooltips extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultTooltips}*/
  this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_;
 }
 /** @return {!DefaultChartTooltips} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultTooltips(/** IsDefaultTooltips */ tooltip) {
  DefaultChartTooltips.$clinit();
  let $instance = new DefaultChartTooltips();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips__org_pepstock_charba_client_defaults_IsDefaultTooltips(tooltip);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips__org_pepstock_charba_client_defaults_IsDefaultTooltips(/** IsDefaultTooltips */ tooltip) {
  this.$ctor__java_lang_Object__();
  this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_ = tooltip;
 }
 /** @override @return {IsDefaultTransitions} */
 m_getTransitions__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getTransitions__();
 }
 /** @override @return {IsDefaultAnimation} */
 m_getAnimation__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getAnimation__();
 }
 /** @override @return {IsDefaultAnimations} */
 m_getAnimations__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getAnimations__();
 }
 /** @override @return {IsDefaultPadding} */
 m_getPadding__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getPadding__();
 }
 /** @override @return {boolean} */
 m_isEnabled__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_isEnabled__();
 }
 /** @override @return {List<Event>} */
 m_getEvents__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getEvents__();
 }
 /** @override @return {InteractionMode} */
 m_getMode__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getMode__();
 }
 /** @override @return {boolean} */
 m_isIntersect__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_isIntersect__();
 }
 /** @override @return {IsTooltipPosition} */
 m_getPosition__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getPosition__();
 }
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getBackgroundColorAsString__();
 }
 /** @override @return {IsDefaultFont} */
 m_getTitleFont__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getTitleFont__();
 }
 /** @override @return {?string} */
 m_getTitleColorAsString__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getTitleColorAsString__();
 }
 /** @override @return {TextAlign} */
 m_getTitleAlign__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getTitleAlign__();
 }
 /** @override @return {number} */
 m_getTitleSpacing__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getTitleSpacing__();
 }
 /** @override @return {number} */
 m_getTitleMarginBottom__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getTitleMarginBottom__();
 }
 /** @override @return {IsDefaultFont} */
 m_getBodyFont__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getBodyFont__();
 }
 /** @override @return {?string} */
 m_getBodyColorAsString__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getBodyColorAsString__();
 }
 /** @override @return {TextAlign} */
 m_getBodyAlign__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getBodyAlign__();
 }
 /** @override @return {number} */
 m_getBodySpacing__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getBodySpacing__();
 }
 /** @override @return {IsDefaultFont} */
 m_getFooterFont__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getFooterFont__();
 }
 /** @override @return {?string} */
 m_getFooterColorAsString__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getFooterColorAsString__();
 }
 /** @override @return {TextAlign} */
 m_getFooterAlign__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getFooterAlign__();
 }
 /** @override @return {number} */
 m_getFooterSpacing__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getFooterSpacing__();
 }
 /** @override @return {number} */
 m_getFooterMarginTop__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getFooterMarginTop__();
 }
 /** @override @return {number} */
 m_getCaretPadding__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getCaretPadding__();
 }
 /** @override @return {number} */
 m_getCaretSize__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getCaretSize__();
 }
 /** @override @return {number} */
 m_getCornerRadius__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getCornerRadius__();
 }
 /** @override @return {?string} */
 m_getMultiKeyBackgroundAsString__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getMultiKeyBackgroundAsString__();
 }
 /** @override @return {boolean} */
 m_isDisplayColors__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_isDisplayColors__();
 }
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getBorderColorAsString__();
 }
 /** @override @return {number} */
 m_getBorderWidth__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getBorderWidth__();
 }
 /** @override @return {boolean} */
 m_isRtl__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_isRtl__();
 }
 /** @override @return {TextDirection} */
 m_getTextDirection__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getTextDirection__();
 }
 /** @override @return {number} */
 m_getBoxWidth__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getBoxWidth__();
 }
 /** @override @return {number} */
 m_getBoxHeight__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getBoxHeight__();
 }
 /** @override @return {boolean} */
 m_isUsePointStyle__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_isUsePointStyle__();
 }
 /** @override @return {TooltipAlign} */
 m_getXAlign__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getXAlign__();
 }
 /** @override @return {TooltipAlign} */
 m_getYAlign__() {
  return this.f_tooltip__org_pepstock_charba_client_defaults_chart_DefaultChartTooltips_.m_getYAlign__();
 }
 
 static $clinit() {
  DefaultChartTooltips.$clinit = () =>{};
  DefaultChartTooltips.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartTooltips;
 }
 
 static $loadModules() {}
}
IsDefaultTooltips.$markImplementor(DefaultChartTooltips);
$Util.$setClassMetadata(DefaultChartTooltips, "org.pepstock.charba.client.defaults.chart.DefaultChartTooltips");

exports = DefaultChartTooltips;

//# sourceMappingURL=DefaultChartTooltips.js.map
