goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartFont$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultFont = goog.require('org.pepstock.charba.client.defaults.IsDefaultFont$impl');

let FontStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.FontStyle$impl');
let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');
let FontItem = goog.forwardDeclare('org.pepstock.charba.client.items.FontItem$impl');

/**
 * @implements {IsDefaultFont}
 */
class DefaultChartFont extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultFont}*/
  this.f_delegatedFont__org_pepstock_charba_client_defaults_chart_DefaultChartFont_;
 }
 /** @return {!DefaultChartFont} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultFont(/** IsDefaultFont */ font) {
  DefaultChartFont.$clinit();
  let $instance = new DefaultChartFont();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartFont__org_pepstock_charba_client_defaults_IsDefaultFont(font);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartFont__org_pepstock_charba_client_defaults_IsDefaultFont(/** IsDefaultFont */ font) {
  this.$ctor__java_lang_Object__();
  this.f_delegatedFont__org_pepstock_charba_client_defaults_chart_DefaultChartFont_ = font;
 }
 /** @override @return {number} */
 m_getSize__() {
  return this.f_delegatedFont__org_pepstock_charba_client_defaults_chart_DefaultChartFont_.m_getSize__();
 }
 /** @override @return {FontStyle} */
 m_getStyle__() {
  return this.f_delegatedFont__org_pepstock_charba_client_defaults_chart_DefaultChartFont_.m_getStyle__();
 }
 /** @override @return {?string} */
 m_getFamily__() {
  return this.f_delegatedFont__org_pepstock_charba_client_defaults_chart_DefaultChartFont_.m_getFamily__();
 }
 /** @override @return {Weight} */
 m_getWeight__() {
  return this.f_delegatedFont__org_pepstock_charba_client_defaults_chart_DefaultChartFont_.m_getWeight__();
 }
 /** @override @return {number} */
 m_getLineHeight__() {
  return this.f_delegatedFont__org_pepstock_charba_client_defaults_chart_DefaultChartFont_.m_getLineHeight__();
 }
 /** @override @return {?string} */
 m_getLineHeightAsString__() {
  return this.f_delegatedFont__org_pepstock_charba_client_defaults_chart_DefaultChartFont_.m_getLineHeightAsString__();
 }
 //Default method forwarding stub.
 /** @override @return {FontItem} */
 m_create__() {
  return IsDefaultFont.m_create__$default__org_pepstock_charba_client_defaults_IsDefaultFont(this);
 }
 //Default method forwarding stub.
 /** @override @return {FontItem} */
 m_create__org_pepstock_charba_client_defaults_IsDefaultFont(/** IsDefaultFont */ arg0) {
  return IsDefaultFont.m_create__$default__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_defaults_IsDefaultFont(this, arg0);
 }
 
 static $clinit() {
  DefaultChartFont.$clinit = () =>{};
  DefaultChartFont.$loadModules();
  j_l_Object.$clinit();
  IsDefaultFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartFont;
 }
 
 static $loadModules() {}
}
IsDefaultFont.$markImplementor(DefaultChartFont);
$Util.$setClassMetadata(DefaultChartFont, "org.pepstock.charba.client.defaults.chart.DefaultChartFont");

exports = DefaultChartFont;

//# sourceMappingURL=DefaultChartFont.js.map
