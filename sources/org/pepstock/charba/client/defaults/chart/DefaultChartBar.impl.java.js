goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartBar$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultBar = goog.require('org.pepstock.charba.client.defaults.IsDefaultBar$impl');

let IsDefaultPointStyleHandler = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
let BorderSkipped = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderSkipped$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');

/**
 * @implements {IsDefaultBar}
 */
class DefaultChartBar extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultBar}*/
  this.f_bar__org_pepstock_charba_client_defaults_chart_DefaultChartBar_;
 }
 /** @return {!DefaultChartBar} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultBar(/** IsDefaultBar */ bar) {
  DefaultChartBar.$clinit();
  let $instance = new DefaultChartBar();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartBar__org_pepstock_charba_client_defaults_IsDefaultBar(bar);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartBar__org_pepstock_charba_client_defaults_IsDefaultBar(/** IsDefaultBar */ bar) {
  this.$ctor__java_lang_Object__();
  this.f_bar__org_pepstock_charba_client_defaults_chart_DefaultChartBar_ = bar;
 }
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return this.f_bar__org_pepstock_charba_client_defaults_chart_DefaultChartBar_.m_getBackgroundColorAsString__();
 }
 /** @override @return {number} */
 m_getBorderWidth__() {
  return this.f_bar__org_pepstock_charba_client_defaults_chart_DefaultChartBar_.m_getBorderWidth__();
 }
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return this.f_bar__org_pepstock_charba_client_defaults_chart_DefaultChartBar_.m_getBorderColorAsString__();
 }
 /** @override @return {BorderSkipped} */
 m_getBorderSkipped__() {
  return this.f_bar__org_pepstock_charba_client_defaults_chart_DefaultChartBar_.m_getBorderSkipped__();
 }
 /** @override @return {number} */
 m_getBorderRadius__() {
  return this.f_bar__org_pepstock_charba_client_defaults_chart_DefaultChartBar_.m_getBorderRadius__();
 }
 /** @override @return {PointStyle} */
 m_getPointStyle__() {
  return this.f_bar__org_pepstock_charba_client_defaults_chart_DefaultChartBar_.m_getPointStyle__();
 }
 /** @override @return {boolean} */
 m_isPointStyleAsImage__() {
  return this.f_bar__org_pepstock_charba_client_defaults_chart_DefaultChartBar_.m_isPointStyleAsImage__();
 }
 /** @override @return {HTMLImageElement} */
 m_getPointStyleAsImage__() {
  return this.f_bar__org_pepstock_charba_client_defaults_chart_DefaultChartBar_.m_getPointStyleAsImage__();
 }
 /** @override @return {?string} */
 m_getHoverBackgroundColorAsString__() {
  return this.f_bar__org_pepstock_charba_client_defaults_chart_DefaultChartBar_.m_getHoverBackgroundColorAsString__();
 }
 /** @override @return {number} */
 m_getHoverBorderWidth__() {
  return this.f_bar__org_pepstock_charba_client_defaults_chart_DefaultChartBar_.m_getHoverBorderWidth__();
 }
 /** @override @return {?string} */
 m_getHoverBorderColorAsString__() {
  return this.f_bar__org_pepstock_charba_client_defaults_chart_DefaultChartBar_.m_getHoverBorderColorAsString__();
 }
 /** @override @return {number} */
 m_getHoverBorderRadius__() {
  return this.f_bar__org_pepstock_charba_client_defaults_chart_DefaultChartBar_.m_getHoverBorderRadius__();
 }
 /** @override @return {boolean} */
 m_isEnableBorderRadius__() {
  return this.f_bar__org_pepstock_charba_client_defaults_chart_DefaultChartBar_.m_isEnableBorderRadius__();
 }
 
 static $clinit() {
  DefaultChartBar.$clinit = () =>{};
  DefaultChartBar.$loadModules();
  j_l_Object.$clinit();
  IsDefaultPointStyleHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartBar;
 }
 
 static $loadModules() {
  IsDefaultPointStyleHandler = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
 }
}
IsDefaultBar.$markImplementor(DefaultChartBar);
$Util.$setClassMetadata(DefaultChartBar, "org.pepstock.charba.client.defaults.chart.DefaultChartBar");

exports = DefaultChartBar;

//# sourceMappingURL=DefaultChartBar.js.map
