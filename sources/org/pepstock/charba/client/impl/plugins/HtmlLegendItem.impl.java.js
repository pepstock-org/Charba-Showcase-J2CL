goog.module('org.pepstock.charba.client.impl.plugins.HtmlLegendItem$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let LegendLabelItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendLabelItem$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

class HtmlLegendItem extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsChart}*/
  this.f_chart__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_;
  /**@type {LegendLabelItem}*/
  this.f_legendItem__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_;
  /**@type {number}*/
  this.f_size__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_ = 0;
  /**@type {number}*/
  this.f_radius__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_ = 0;
 }
 /** @return {!HtmlLegendItem} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  HtmlLegendItem.$clinit();
  let $instance = new HtmlLegendItem();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendItem__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendItem__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_impl_plugins_HtmlLegendItem();
  IsChart.m_checkIfValid__org_pepstock_charba_client_IsChart(chart);
  this.f_chart__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_ = chart;
 }
 /** @return {IsChart} */
 m_getChart__() {
  return this.f_chart__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_;
 }
 /** @return {LegendLabelItem} */
 m_getLegendItem__() {
  return this.f_legendItem__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_;
 }
 
 m_setLegendItem__org_pepstock_charba_client_items_LegendLabelItem_$pp_org_pepstock_charba_client_impl_plugins(/** LegendLabelItem */ legendItem) {
  this.f_legendItem__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_ = legendItem;
 }
 /** @return {number} */
 m_getSize__() {
  return this.f_size__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_;
 }
 
 m_setSize__int_$pp_org_pepstock_charba_client_impl_plugins(/** number */ size) {
  this.f_size__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_ = size;
 }
 /** @return {number} */
 m_getRadius__() {
  return this.f_radius__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_;
 }
 
 m_setRadius__double_$pp_org_pepstock_charba_client_impl_plugins(/** number */ radius) {
  this.f_radius__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_ = radius;
 }
 /** @return {?string} */
 m_toUniqueKey__() {
  if (!$Equality.$same(this.f_legendItem__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_, null)) {
   let builder = StringBuilder.$create__java_lang_String(this.f_chart__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_.m_getId__());
   builder.m_append__java_lang_String(j_l_String.m_replace__java_lang_String__char__char(this.f_legendItem__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_.m_toJSON__(), 10 /* "\n" */, 32 /* " " */));
   return builder.toString();
  }
  return Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_impl_plugins_HtmlLegendItem() {
  this.f_legendItem__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_ = null;
  this.f_size__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_ = 0;
  this.f_radius__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_ = 0;
 }
 
 static $clinit() {
  HtmlLegendItem.$clinit = () =>{};
  HtmlLegendItem.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlLegendItem;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
$Util.$setClassMetadata(HtmlLegendItem, "org.pepstock.charba.client.impl.plugins.HtmlLegendItem");

exports = HtmlLegendItem;

//# sourceMappingURL=HtmlLegendItem.js.map
