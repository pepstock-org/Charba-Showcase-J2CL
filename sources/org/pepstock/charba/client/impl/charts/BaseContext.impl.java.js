goog.module('org.pepstock.charba.client.impl.charts.BaseContext$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Charts = goog.forwardDeclare('org.pepstock.charba.client.Charts$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let ContextType = goog.forwardDeclare('org.pepstock.charba.client.enums.ContextType$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.BaseContext.Property$impl');

class BaseContext extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BaseContext} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  BaseContext.$clinit();
  let $instance = new BaseContext();
  $instance.$ctor__org_pepstock_charba_client_impl_charts_BaseContext__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_charts_BaseContext__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__();
  Checker.m_assertCheck__boolean__java_lang_String(Charts.m_hasNative__org_pepstock_charba_client_IsChart(chart), "Chart argument does not have any related native chart instance");
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_Chart(Property.f_CHART__org_pepstock_charba_client_impl_charts_BaseContext_Property, Charts.m_getNative__org_pepstock_charba_client_IsChart(chart));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TYPE__org_pepstock_charba_client_impl_charts_BaseContext_Property, ContextType.f_METER__org_pepstock_charba_client_enums_ContextType);
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_impl_charts() {
  return this.m_getNativeObject__();
 }
 
 static $clinit() {
  BaseContext.$clinit = () =>{};
  BaseContext.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseContext;
 }
 
 static $loadModules() {
  Charts = goog.module.get('org.pepstock.charba.client.Charts$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  ContextType = goog.module.get('org.pepstock.charba.client.enums.ContextType$impl');
  Property = goog.module.get('org.pepstock.charba.client.impl.charts.BaseContext.Property$impl');
 }
}
$Util.$setClassMetadata(BaseContext, "org.pepstock.charba.client.impl.charts.BaseContext");

exports = BaseContext;

//# sourceMappingURL=BaseContext.js.map
