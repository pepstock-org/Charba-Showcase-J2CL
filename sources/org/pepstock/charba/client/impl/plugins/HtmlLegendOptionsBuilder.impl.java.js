goog.module('org.pepstock.charba.client.impl.plugins.HtmlLegendOptionsBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let HtmlLegendItemCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.HtmlLegendItemCallback$impl');
let HtmlLegendTitleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.HtmlLegendTitleCallback$impl');
let HtmlLegendOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions$impl');

class HtmlLegendOptionsBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HtmlLegendOptions}*/
  this.f_options__org_pepstock_charba_client_impl_plugins_HtmlLegendOptionsBuilder_;
 }
 /** @return {!HtmlLegendOptionsBuilder} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  let $instance = new HtmlLegendOptionsBuilder();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendOptionsBuilder__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendOptionsBuilder__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__java_lang_Object__();
  this.f_options__org_pepstock_charba_client_impl_plugins_HtmlLegendOptionsBuilder_ = HtmlLegendOptions.$create__org_pepstock_charba_client_IsChart(chart);
 }
 /** @return {HtmlLegendOptionsBuilder} */
 static m_create__() {
  HtmlLegendOptionsBuilder.$clinit();
  return HtmlLegendOptionsBuilder.m_create__org_pepstock_charba_client_IsChart(null);
 }
 /** @return {HtmlLegendOptionsBuilder} */
 static m_create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  HtmlLegendOptionsBuilder.$clinit();
  return HtmlLegendOptionsBuilder.$create__org_pepstock_charba_client_IsChart(chart);
 }
 /** @return {HtmlLegendOptions} */
 m_build__() {
  return this.f_options__org_pepstock_charba_client_impl_plugins_HtmlLegendOptionsBuilder_;
 }
 /** @return {HtmlLegendOptionsBuilder} */
 m_setDisplay__boolean(/** boolean */ display) {
  this.f_options__org_pepstock_charba_client_impl_plugins_HtmlLegendOptionsBuilder_.m_setDisplay__boolean(display);
  return this;
 }
 /** @return {HtmlLegendOptionsBuilder} */
 m_setLegendItemCallback__org_pepstock_charba_client_callbacks_HtmlLegendItemCallback(/** HtmlLegendItemCallback */ legendTextCallback) {
  this.f_options__org_pepstock_charba_client_impl_plugins_HtmlLegendOptionsBuilder_.m_setLegendItemCallback__org_pepstock_charba_client_callbacks_HtmlLegendItemCallback(legendTextCallback);
  return this;
 }
 /** @return {HtmlLegendOptionsBuilder} */
 m_setLegendTitleCallback__org_pepstock_charba_client_callbacks_HtmlLegendTitleCallback(/** HtmlLegendTitleCallback */ legendTitleCallback) {
  this.f_options__org_pepstock_charba_client_impl_plugins_HtmlLegendOptionsBuilder_.m_setLegendTitleCallback__org_pepstock_charba_client_callbacks_HtmlLegendTitleCallback(legendTitleCallback);
  return this;
 }
 /** @return {HtmlLegendOptionsBuilder} */
 m_setMaximumLegendColumns__int(/** number */ maxColumns) {
  this.f_options__org_pepstock_charba_client_impl_plugins_HtmlLegendOptionsBuilder_.m_setMaximumLegendColumns__int(maxColumns);
  return this;
 }
 
 static $clinit() {
  HtmlLegendOptionsBuilder.$clinit = () =>{};
  HtmlLegendOptionsBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlLegendOptionsBuilder;
 }
 
 static $loadModules() {
  HtmlLegendOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions$impl');
 }
}
$Util.$setClassMetadata(HtmlLegendOptionsBuilder, "org.pepstock.charba.client.impl.plugins.HtmlLegendOptionsBuilder");

exports = HtmlLegendOptionsBuilder;

//# sourceMappingURL=HtmlLegendOptionsBuilder.js.map
