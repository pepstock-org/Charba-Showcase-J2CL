goog.module('org.pepstock.charba.client.impl.plugins.ChartPointerOptionsBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let CursorType = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.CursorType$impl');
let ChartPointerOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointerOptions$impl');
let PointerElement = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.PointerElement$impl');

class ChartPointerOptionsBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ChartPointerOptions}*/
  this.f_options__org_pepstock_charba_client_impl_plugins_ChartPointerOptionsBuilder_;
 }
 /** @return {!ChartPointerOptionsBuilder} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  let $instance = new ChartPointerOptionsBuilder();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartPointerOptionsBuilder__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartPointerOptionsBuilder__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__java_lang_Object__();
  this.f_options__org_pepstock_charba_client_impl_plugins_ChartPointerOptionsBuilder_ = ChartPointerOptions.$create__org_pepstock_charba_client_IsChart(chart);
 }
 /** @return {ChartPointerOptionsBuilder} */
 static m_create__() {
  ChartPointerOptionsBuilder.$clinit();
  return ChartPointerOptionsBuilder.m_create__org_pepstock_charba_client_IsChart(null);
 }
 /** @return {ChartPointerOptionsBuilder} */
 static m_create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  ChartPointerOptionsBuilder.$clinit();
  return ChartPointerOptionsBuilder.$create__org_pepstock_charba_client_IsChart(chart);
 }
 /** @return {ChartPointerOptions} */
 m_build__() {
  return this.f_options__org_pepstock_charba_client_impl_plugins_ChartPointerOptionsBuilder_;
 }
 /** @return {ChartPointerOptionsBuilder} */
 m_setElements__arrayOf_org_pepstock_charba_client_impl_plugins_enums_PointerElement(/** Array<PointerElement> */ elements) {
  this.f_options__org_pepstock_charba_client_impl_plugins_ChartPointerOptionsBuilder_.m_setElements__arrayOf_org_pepstock_charba_client_impl_plugins_enums_PointerElement(elements);
  return this;
 }
 /** @return {ChartPointerOptionsBuilder} */
 m_setCursorPointer__org_pepstock_charba_client_dom_enums_CursorType(/** CursorType */ cursor) {
  this.f_options__org_pepstock_charba_client_impl_plugins_ChartPointerOptionsBuilder_.m_setCursorPointer__org_pepstock_charba_client_dom_enums_CursorType(cursor);
  return this;
 }
 
 static $clinit() {
  ChartPointerOptionsBuilder.$clinit = () =>{};
  ChartPointerOptionsBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartPointerOptionsBuilder;
 }
 
 static $loadModules() {
  ChartPointerOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointerOptions$impl');
 }
}
$Util.$setClassMetadata(ChartPointerOptionsBuilder, "org.pepstock.charba.client.impl.plugins.ChartPointerOptionsBuilder");

exports = ChartPointerOptionsBuilder;

//# sourceMappingURL=ChartPointerOptionsBuilder.js.map
