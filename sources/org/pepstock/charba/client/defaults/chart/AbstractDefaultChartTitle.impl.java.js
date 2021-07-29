goog.module('org.pepstock.charba.client.defaults.chart.AbstractDefaultChartTitle$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAbstractTitle = goog.require('org.pepstock.charba.client.defaults.IsDefaultAbstractTitle$impl');

let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let ElementAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ElementAlign$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');

/**
 * @abstract
 * @implements {IsDefaultAbstractTitle}
 */
class AbstractDefaultChartTitle extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultAbstractTitle}*/
  this.f_title__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartTitle_;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartTitle__org_pepstock_charba_client_defaults_IsDefaultAbstractTitle(/** IsDefaultAbstractTitle */ title) {
  this.$ctor__java_lang_Object__();
  this.f_title__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartTitle_ = title;
 }
 /** @override @return {IsDefaultFont} */
 m_getFont__() {
  return this.f_title__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartTitle_.m_getFont__();
 }
 /** @override @return {IsDefaultPadding} */
 m_getPadding__() {
  return this.f_title__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartTitle_.m_getPadding__();
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return this.f_title__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartTitle_.m_getColorAsString__();
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return this.f_title__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartTitle_.m_isDisplay__();
 }
 /** @override @return {Position} */
 m_getPosition__() {
  return this.f_title__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartTitle_.m_getPosition__();
 }
 /** @override @return {boolean} */
 m_isFullSize__() {
  return this.f_title__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartTitle_.m_isFullSize__();
 }
 /** @override @return {ElementAlign} */
 m_getAlign__() {
  return this.f_title__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartTitle_.m_getAlign__();
 }
 
 static $clinit() {
  AbstractDefaultChartTitle.$clinit = () =>{};
  AbstractDefaultChartTitle.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractDefaultChartTitle;
 }
 
 static $loadModules() {}
}
IsDefaultAbstractTitle.$markImplementor(AbstractDefaultChartTitle);
$Util.$setClassMetadata(AbstractDefaultChartTitle, "org.pepstock.charba.client.defaults.chart.AbstractDefaultChartTitle");

exports = AbstractDefaultChartTitle;

//# sourceMappingURL=AbstractDefaultChartTitle.js.map
