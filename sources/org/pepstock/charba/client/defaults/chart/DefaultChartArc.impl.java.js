goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartArc$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultArc = goog.require('org.pepstock.charba.client.defaults.IsDefaultArc$impl');

let BorderAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderAlign$impl');

/**
 * @implements {IsDefaultArc}
 */
class DefaultChartArc extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultArc}*/
  this.f_arc__org_pepstock_charba_client_defaults_chart_DefaultChartArc_;
 }
 /** @return {!DefaultChartArc} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultArc(/** IsDefaultArc */ arc) {
  DefaultChartArc.$clinit();
  let $instance = new DefaultChartArc();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartArc__org_pepstock_charba_client_defaults_IsDefaultArc(arc);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartArc__org_pepstock_charba_client_defaults_IsDefaultArc(/** IsDefaultArc */ arc) {
  this.$ctor__java_lang_Object__();
  this.f_arc__org_pepstock_charba_client_defaults_chart_DefaultChartArc_ = arc;
 }
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return this.f_arc__org_pepstock_charba_client_defaults_chart_DefaultChartArc_.m_getBackgroundColorAsString__();
 }
 /** @override @return {number} */
 m_getBorderWidth__() {
  return this.f_arc__org_pepstock_charba_client_defaults_chart_DefaultChartArc_.m_getBorderWidth__();
 }
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return this.f_arc__org_pepstock_charba_client_defaults_chart_DefaultChartArc_.m_getBorderColorAsString__();
 }
 /** @override @return {BorderAlign} */
 m_getBorderAlign__() {
  return this.f_arc__org_pepstock_charba_client_defaults_chart_DefaultChartArc_.m_getBorderAlign__();
 }
 /** @override @return {number} */
 m_getWeight__() {
  return this.f_arc__org_pepstock_charba_client_defaults_chart_DefaultChartArc_.m_getWeight__();
 }
 /** @override @return {number} */
 m_getAngle__() {
  return this.f_arc__org_pepstock_charba_client_defaults_chart_DefaultChartArc_.m_getAngle__();
 }
 /** @override @return {number} */
 m_getOffset__() {
  return this.f_arc__org_pepstock_charba_client_defaults_chart_DefaultChartArc_.m_getOffset__();
 }
 /** @override @return {number} */
 m_getBorderRadius__() {
  return this.f_arc__org_pepstock_charba_client_defaults_chart_DefaultChartArc_.m_getBorderRadius__();
 }
 /** @override @return {?string} */
 m_getHoverBackgroundColorAsString__() {
  return this.f_arc__org_pepstock_charba_client_defaults_chart_DefaultChartArc_.m_getHoverBackgroundColorAsString__();
 }
 /** @override @return {number} */
 m_getHoverBorderWidth__() {
  return this.f_arc__org_pepstock_charba_client_defaults_chart_DefaultChartArc_.m_getHoverBorderWidth__();
 }
 /** @override @return {?string} */
 m_getHoverBorderColorAsString__() {
  return this.f_arc__org_pepstock_charba_client_defaults_chart_DefaultChartArc_.m_getHoverBorderColorAsString__();
 }
 /** @override @return {number} */
 m_getHoverOffset__() {
  return this.f_arc__org_pepstock_charba_client_defaults_chart_DefaultChartArc_.m_getHoverOffset__();
 }
 /** @override @return {number} */
 m_getSpacing__() {
  return this.f_arc__org_pepstock_charba_client_defaults_chart_DefaultChartArc_.m_getSpacing__();
 }
 
 static $clinit() {
  DefaultChartArc.$clinit = () =>{};
  DefaultChartArc.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartArc;
 }
 
 static $loadModules() {}
}
IsDefaultArc.$markImplementor(DefaultChartArc);
$Util.$setClassMetadata(DefaultChartArc, "org.pepstock.charba.client.defaults.chart.DefaultChartArc");

exports = DefaultChartArc;

//# sourceMappingURL=DefaultChartArc.js.map
