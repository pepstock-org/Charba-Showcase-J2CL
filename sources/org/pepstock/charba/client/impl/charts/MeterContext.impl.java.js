goog.module('org.pepstock.charba.client.impl.charts.MeterContext$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartContext = goog.require('org.pepstock.charba.client.callbacks.ChartContext$impl');

let BaseContext = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.BaseContext$impl');

class MeterContext extends ChartContext {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_value__org_pepstock_charba_client_impl_charts_MeterContext_ = 0;
  /**@type {number}*/
  this.f_easing__org_pepstock_charba_client_impl_charts_MeterContext_ = 0;
 }
 /** @return {!MeterContext} */
 static $create__org_pepstock_charba_client_impl_charts_BaseContext(/** BaseContext */ baseContext) {
  MeterContext.$clinit();
  let $instance = new MeterContext();
  $instance.$ctor__org_pepstock_charba_client_impl_charts_MeterContext__org_pepstock_charba_client_impl_charts_BaseContext(baseContext);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_charts_MeterContext__org_pepstock_charba_client_impl_charts_BaseContext(/** BaseContext */ baseContext) {
  this.$ctor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_commons_NativeObject(baseContext.m_nativeObject___$pp_org_pepstock_charba_client_impl_charts());
  this.$init___$p_org_pepstock_charba_client_impl_charts_MeterContext();
 }
 /** @return {number} */
 m_getValue__() {
  return this.f_value__org_pepstock_charba_client_impl_charts_MeterContext_;
 }
 
 m_setValue__double_$pp_org_pepstock_charba_client_impl_charts(/** number */ value) {
  this.f_value__org_pepstock_charba_client_impl_charts_MeterContext_ = value;
 }
 /** @return {number} */
 m_getEasing__() {
  return this.f_easing__org_pepstock_charba_client_impl_charts_MeterContext_;
 }
 
 m_setEasing__double_$pp_org_pepstock_charba_client_impl_charts(/** number */ easing) {
  this.f_easing__org_pepstock_charba_client_impl_charts_MeterContext_ = easing;
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_impl_charts() {
  return this.m_getNativeObject__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_impl_charts_MeterContext() {
  this.f_value__org_pepstock_charba_client_impl_charts_MeterContext_ = 0;
  this.f_easing__org_pepstock_charba_client_impl_charts_MeterContext_ = 0;
 }
 
 static $clinit() {
  MeterContext.$clinit = () =>{};
  MeterContext.$loadModules();
  ChartContext.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MeterContext;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(MeterContext, "org.pepstock.charba.client.impl.charts.MeterContext");

exports = MeterContext;

//# sourceMappingURL=MeterContext.js.map
