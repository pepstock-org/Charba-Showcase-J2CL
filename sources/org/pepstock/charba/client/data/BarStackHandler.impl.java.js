goog.module('org.pepstock.charba.client.data.BarStackHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.data.BarStackHandler.Property$impl');

class BarStackHandler extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BarStackHandler} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  BarStackHandler.$clinit();
  let $instance = new BarStackHandler();
  $instance.$ctor__org_pepstock_charba_client_data_BarStackHandler__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_BarStackHandler__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 m_setStackGroup__java_lang_String_$pp_org_pepstock_charba_client_data(/** ?string */ stackGroup) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_STACK__org_pepstock_charba_client_data_BarStackHandler_Property, stackGroup);
 }
 /** @return {?string} */
 m_getStackGroup___$pp_org_pepstock_charba_client_data() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_STACK__org_pepstock_charba_client_data_BarStackHandler_Property, ChartType.f_BAR__org_pepstock_charba_client_ChartType.m_value__());
 }
 
 static $clinit() {
  BarStackHandler.$clinit = () =>{};
  BarStackHandler.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BarStackHandler;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  Property = goog.module.get('org.pepstock.charba.client.data.BarStackHandler.Property$impl');
 }
}
$Util.$setClassMetadata(BarStackHandler, "org.pepstock.charba.client.data.BarStackHandler");

exports = BarStackHandler;

//# sourceMappingURL=BarStackHandler.js.map
