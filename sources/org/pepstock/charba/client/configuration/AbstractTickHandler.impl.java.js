goog.module('org.pepstock.charba.client.configuration.AbstractTickHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AxisContainer = goog.require('org.pepstock.charba.client.configuration.AxisContainer$impl');

let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let Tick = goog.forwardDeclare('org.pepstock.charba.client.configuration.Tick$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.Tick.Property$impl');

/**
 * @abstract
 * @template T, C
 */
class AbstractTickHandler extends AxisContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {C}*/
  this.f_callback__org_pepstock_charba_client_configuration_AbstractTickHandler_;
  /**@type {T}*/
  this.f_configuration__org_pepstock_charba_client_configuration_AbstractTickHandler_;
 }
 
 $ctor__org_pepstock_charba_client_configuration_AbstractTickHandler__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_Tick(/** Axis */ axis, /** T */ configuration) {
  this.$ctor__org_pepstock_charba_client_configuration_AxisContainer__org_pepstock_charba_client_configuration_Axis(axis);
  this.$init___$p_org_pepstock_charba_client_configuration_AbstractTickHandler();
  this.f_configuration__org_pepstock_charba_client_configuration_AbstractTickHandler_ = configuration;
 }
 /** @return {T} */
 m_getConfiguration___$pp_org_pepstock_charba_client_configuration() {
  return this.f_configuration__org_pepstock_charba_client_configuration_AbstractTickHandler_;
 }
 /** @abstract @return {?function():void} */
 m_getProxy___$pp_org_pepstock_charba_client_configuration() {}
 /** @return {C} */
 m_getCallback___$pp_org_pepstock_charba_client_configuration() {
  return this.f_callback__org_pepstock_charba_client_configuration_AbstractTickHandler_;
 }
 
 m_setCallback__java_lang_Object_$pp_org_pepstock_charba_client_configuration(/** C */ callback) {
  this.f_callback__org_pepstock_charba_client_configuration_AbstractTickHandler_ = callback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy_$pp_org_pepstock_charba_client_configuration(/**@type {Tick}*/ (this.f_configuration__org_pepstock_charba_client_configuration_AbstractTickHandler_).m_getConfiguration___$pp_org_pepstock_charba_client_configuration(), Property.f_CALLBACK__org_pepstock_charba_client_configuration_Tick_Property, callback, this.m_getProxy___$pp_org_pepstock_charba_client_configuration());
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_AbstractTickHandler() {
  this.f_callback__org_pepstock_charba_client_configuration_AbstractTickHandler_ = null;
 }
 
 static $clinit() {
  AbstractTickHandler.$clinit = () =>{};
  AbstractTickHandler.$loadModules();
  AxisContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractTickHandler;
 }
 
 static $loadModules() {
  Property = goog.module.get('org.pepstock.charba.client.configuration.Tick.Property$impl');
 }
}
$Util.$setClassMetadata(AbstractTickHandler, "org.pepstock.charba.client.configuration.AbstractTickHandler");

exports = AbstractTickHandler;

//# sourceMappingURL=AbstractTickHandler.js.map
