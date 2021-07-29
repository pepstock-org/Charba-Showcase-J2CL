goog.module('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptionsBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let GlobalCompositeOperation = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.GlobalCompositeOperation$impl');
let ChartBackgroundColorOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptions$impl');

class ChartBackgroundColorOptionsBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ChartBackgroundColorOptions}*/
  this.f_options__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptionsBuilder_;
 }
 /** @return {!ChartBackgroundColorOptionsBuilder} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  let $instance = new ChartBackgroundColorOptionsBuilder();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptionsBuilder__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptionsBuilder__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__java_lang_Object__();
  this.f_options__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptionsBuilder_ = ChartBackgroundColorOptions.$create__org_pepstock_charba_client_IsChart(chart);
 }
 /** @return {ChartBackgroundColorOptionsBuilder} */
 static m_create__() {
  ChartBackgroundColorOptionsBuilder.$clinit();
  return ChartBackgroundColorOptionsBuilder.m_create__org_pepstock_charba_client_IsChart(null);
 }
 /** @return {ChartBackgroundColorOptionsBuilder} */
 static m_create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  ChartBackgroundColorOptionsBuilder.$clinit();
  return ChartBackgroundColorOptionsBuilder.$create__org_pepstock_charba_client_IsChart(chart);
 }
 /** @return {ChartBackgroundColorOptions} */
 m_build__() {
  return this.f_options__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptionsBuilder_;
 }
 /** @return {ChartBackgroundColorOptionsBuilder} */
 m_setBackgroundColor__java_lang_String(/** ?string */ color) {
  this.f_options__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptionsBuilder_.m_setBackgroundColor__java_lang_String(color);
  return this;
 }
 /** @return {ChartBackgroundColorOptionsBuilder} */
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.f_options__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptionsBuilder_.m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(color);
  return this;
 }
 /** @return {ChartBackgroundColorOptionsBuilder} */
 m_setBackgroundColor__org_pepstock_charba_client_colors_Gradient(/** Gradient */ gradient) {
  this.f_options__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptionsBuilder_.m_setBackgroundColor__org_pepstock_charba_client_colors_Gradient(gradient);
  return this;
 }
 /** @return {ChartBackgroundColorOptionsBuilder} */
 m_setBackgroundColor__org_pepstock_charba_client_colors_Pattern(/** Pattern */ pattern) {
  this.f_options__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptionsBuilder_.m_setBackgroundColor__org_pepstock_charba_client_colors_Pattern(pattern);
  return this;
 }
 /** @return {ChartBackgroundColorOptionsBuilder} */
 m_setGlobalCompositeOperation__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation(/** GlobalCompositeOperation */ globalCompositeOperation) {
  this.f_options__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorOptionsBuilder_.m_setGlobalCompositeOperation__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation(globalCompositeOperation);
  return this;
 }
 
 static $clinit() {
  ChartBackgroundColorOptionsBuilder.$clinit = () =>{};
  ChartBackgroundColorOptionsBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartBackgroundColorOptionsBuilder;
 }
 
 static $loadModules() {
  ChartBackgroundColorOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptions$impl');
 }
}
$Util.$setClassMetadata(ChartBackgroundColorOptionsBuilder, "org.pepstock.charba.client.impl.plugins.ChartBackgroundColorOptionsBuilder");

exports = ChartBackgroundColorOptionsBuilder;

//# sourceMappingURL=ChartBackgroundColorOptionsBuilder.js.map
