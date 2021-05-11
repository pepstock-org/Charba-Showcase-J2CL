goog.module('org.pepstock.charba.client.defaults.chart.AbstractDefaultChartPadding$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultPadding = goog.require('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');

let PaddingItem = goog.forwardDeclare('org.pepstock.charba.client.items.PaddingItem$impl');

/**
 * @abstract
 * @implements {IsDefaultPadding}
 */
class AbstractDefaultChartPadding extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultPadding}*/
  this.f_padding__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartPadding_;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartPadding__org_pepstock_charba_client_defaults_IsDefaultPadding(/** IsDefaultPadding */ padding) {
  this.$ctor__java_lang_Object__();
  this.f_padding__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartPadding_ = padding;
 }
 /** @override @return {number} */
 m_getLeft__() {
  return this.f_padding__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartPadding_.m_getLeft__();
 }
 /** @override @return {number} */
 m_getRight__() {
  return this.f_padding__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartPadding_.m_getRight__();
 }
 /** @override @return {number} */
 m_getTop__() {
  return this.f_padding__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartPadding_.m_getTop__();
 }
 /** @override @return {number} */
 m_getBottom__() {
  return this.f_padding__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartPadding_.m_getBottom__();
 }
 //Default method forwarding stub.
 /** @override @return {PaddingItem} */
 m_create__() {
  return IsDefaultPadding.m_create__$default__org_pepstock_charba_client_defaults_IsDefaultPadding(this);
 }
 //Default method forwarding stub.
 /** @override @return {PaddingItem} */
 m_create__org_pepstock_charba_client_defaults_IsDefaultPadding(/** IsDefaultPadding */ arg0) {
  return IsDefaultPadding.m_create__$default__org_pepstock_charba_client_defaults_IsDefaultPadding__org_pepstock_charba_client_defaults_IsDefaultPadding(this, arg0);
 }
 
 static $clinit() {
  AbstractDefaultChartPadding.$clinit = () =>{};
  AbstractDefaultChartPadding.$loadModules();
  j_l_Object.$clinit();
  IsDefaultPadding.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractDefaultChartPadding;
 }
 
 static $loadModules() {}
}
IsDefaultPadding.$markImplementor(AbstractDefaultChartPadding);
$Util.$setClassMetadata(AbstractDefaultChartPadding, "org.pepstock.charba.client.defaults.chart.AbstractDefaultChartPadding");

exports = AbstractDefaultChartPadding;

//# sourceMappingURL=AbstractDefaultChartPadding.js.map
