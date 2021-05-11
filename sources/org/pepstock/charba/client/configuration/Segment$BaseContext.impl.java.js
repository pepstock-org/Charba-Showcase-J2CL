goog.module('org.pepstock.charba.client.configuration.Segment.BaseContext$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Charts = goog.forwardDeclare('org.pepstock.charba.client.Charts$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.Segment.Property$impl');

class BaseContext extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BaseContext} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_commons_NativeObject(/** IsChart */ chart, /** ? */ nativeContext) {
  BaseContext.$clinit();
  let $instance = new BaseContext();
  $instance.$ctor__org_pepstock_charba_client_configuration_Segment_BaseContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_commons_NativeObject(chart, nativeContext);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Segment_BaseContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_commons_NativeObject(/** IsChart */ chart, /** ? */ nativeContext) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeContext);
  Checker.m_assertCheck__boolean__java_lang_String(Charts.m_hasNative__org_pepstock_charba_client_IsChart(chart), "Chart argument does not have any related native chart instance");
  if (!this.m_has__org_pepstock_charba_client_commons_Key(Property.f_CHART__org_pepstock_charba_client_configuration_Segment_Property)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_Chart(Property.f_CHART__org_pepstock_charba_client_configuration_Segment_Property, Charts.m_getNative__org_pepstock_charba_client_IsChart(chart));
  }
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_configuration() {
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
  Property = goog.module.get('org.pepstock.charba.client.configuration.Segment.Property$impl');
 }
}
$Util.$setClassMetadata(BaseContext, "org.pepstock.charba.client.configuration.Segment$BaseContext");

exports = BaseContext;

//# sourceMappingURL=Segment$BaseContext.js.map
