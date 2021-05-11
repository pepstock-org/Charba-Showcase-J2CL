goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartPoint$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultPoint = goog.require('org.pepstock.charba.client.defaults.IsDefaultPoint$impl');

let IsDefaultPointStyleHandler = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');

/**
 * @implements {IsDefaultPoint}
 */
class DefaultChartPoint extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultPoint}*/
  this.f_point__org_pepstock_charba_client_defaults_chart_DefaultChartPoint_;
 }
 /** @return {!DefaultChartPoint} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultPoint(/** IsDefaultPoint */ point) {
  DefaultChartPoint.$clinit();
  let $instance = new DefaultChartPoint();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartPoint__org_pepstock_charba_client_defaults_IsDefaultPoint(point);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartPoint__org_pepstock_charba_client_defaults_IsDefaultPoint(/** IsDefaultPoint */ point) {
  this.$ctor__java_lang_Object__();
  this.f_point__org_pepstock_charba_client_defaults_chart_DefaultChartPoint_ = point;
 }
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return this.f_point__org_pepstock_charba_client_defaults_chart_DefaultChartPoint_.m_getBackgroundColorAsString__();
 }
 /** @override @return {number} */
 m_getBorderWidth__() {
  return this.f_point__org_pepstock_charba_client_defaults_chart_DefaultChartPoint_.m_getBorderWidth__();
 }
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return this.f_point__org_pepstock_charba_client_defaults_chart_DefaultChartPoint_.m_getBorderColorAsString__();
 }
 /** @override @return {number} */
 m_getRadius__() {
  return this.f_point__org_pepstock_charba_client_defaults_chart_DefaultChartPoint_.m_getRadius__();
 }
 /** @override @return {PointStyle} */
 m_getPointStyle__() {
  return this.f_point__org_pepstock_charba_client_defaults_chart_DefaultChartPoint_.m_getPointStyle__();
 }
 /** @override @return {number} */
 m_getHitRadius__() {
  return this.f_point__org_pepstock_charba_client_defaults_chart_DefaultChartPoint_.m_getHitRadius__();
 }
 /** @override @return {number} */
 m_getHoverRadius__() {
  return this.f_point__org_pepstock_charba_client_defaults_chart_DefaultChartPoint_.m_getHoverRadius__();
 }
 /** @override @return {number} */
 m_getHoverBorderWidth__() {
  return this.f_point__org_pepstock_charba_client_defaults_chart_DefaultChartPoint_.m_getHoverBorderWidth__();
 }
 /** @override @return {number} */
 m_getRotation__() {
  return this.f_point__org_pepstock_charba_client_defaults_chart_DefaultChartPoint_.m_getRotation__();
 }
 /** @override @return {boolean} */
 m_isPointStyleAsImage__() {
  return this.f_point__org_pepstock_charba_client_defaults_chart_DefaultChartPoint_.m_isPointStyleAsImage__();
 }
 /** @override @return {HTMLImageElement} */
 m_getPointStyleAsImage__() {
  return this.f_point__org_pepstock_charba_client_defaults_chart_DefaultChartPoint_.m_getPointStyleAsImage__();
 }
 /** @override @return {?string} */
 m_getHoverBackgroundColorAsString__() {
  return this.f_point__org_pepstock_charba_client_defaults_chart_DefaultChartPoint_.m_getHoverBackgroundColorAsString__();
 }
 /** @override @return {?string} */
 m_getHoverBorderColorAsString__() {
  return this.f_point__org_pepstock_charba_client_defaults_chart_DefaultChartPoint_.m_getHoverBorderColorAsString__();
 }
 
 static $clinit() {
  DefaultChartPoint.$clinit = () =>{};
  DefaultChartPoint.$loadModules();
  j_l_Object.$clinit();
  IsDefaultPointStyleHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartPoint;
 }
 
 static $loadModules() {
  IsDefaultPointStyleHandler = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
 }
}
IsDefaultPoint.$markImplementor(DefaultChartPoint);
$Util.$setClassMetadata(DefaultChartPoint, "org.pepstock.charba.client.defaults.chart.DefaultChartPoint");

exports = DefaultChartPoint;

//# sourceMappingURL=DefaultChartPoint.js.map
