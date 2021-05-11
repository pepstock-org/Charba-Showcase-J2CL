goog.module('org.pepstock.charba.client.configuration.CartesianTimeTick$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CartesianTick = goog.require('org.pepstock.charba.client.configuration.CartesianTick$impl');

let TimeTickCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TimeTickCallback$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let TimeTickHandler = goog.forwardDeclare('org.pepstock.charba.client.configuration.TimeTickHandler$impl');
let TickSource = goog.forwardDeclare('org.pepstock.charba.client.enums.TickSource$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CartesianTimeTick extends CartesianTick {
 /** @protected */
 constructor() {
  super();
  /**@type {TimeTickHandler}*/
  this.f_tickHandler__org_pepstock_charba_client_configuration_CartesianTimeTick_;
 }
 /** @return {!CartesianTimeTick} */
 static $create__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  CartesianTimeTick.$clinit();
  let $instance = new CartesianTimeTick();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianTimeTick__org_pepstock_charba_client_configuration_Axis(axis);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_CartesianTimeTick__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianTick__org_pepstock_charba_client_configuration_Axis(axis);
  this.f_tickHandler__org_pepstock_charba_client_configuration_CartesianTimeTick_ = TimeTickHandler.$create__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_CartesianTimeTick(axis, this);
 }
 
 m_setSource__org_pepstock_charba_client_enums_TickSource(/** TickSource */ source) {
  this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_setSource__org_pepstock_charba_client_enums_TickSource(source);
 }
 /** @return {TickSource} */
 m_getSource__() {
  return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getSource__();
 }
 /** @return {TimeTickCallback} */
 m_getCallback__() {
  return /**@type {TimeTickCallback}*/ ($Casts.$to(this.f_tickHandler__org_pepstock_charba_client_configuration_CartesianTimeTick_.m_getCallback___$pp_org_pepstock_charba_client_configuration(), TimeTickCallback));
 }
 
 m_setCallback__org_pepstock_charba_client_callbacks_TimeTickCallback(/** TimeTickCallback */ callback) {
  this.f_tickHandler__org_pepstock_charba_client_configuration_CartesianTimeTick_.m_setCallback__java_lang_Object_$pp_org_pepstock_charba_client_configuration(callback);
 }
 /** @return {TimeTickHandler} */
 m_getTickHandler___$pp_org_pepstock_charba_client_configuration() {
  return this.f_tickHandler__org_pepstock_charba_client_configuration_CartesianTimeTick_;
 }
 
 static $clinit() {
  CartesianTimeTick.$clinit = () =>{};
  CartesianTimeTick.$loadModules();
  CartesianTick.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CartesianTimeTick;
 }
 
 static $loadModules() {
  TimeTickCallback = goog.module.get('org.pepstock.charba.client.callbacks.TimeTickCallback$impl');
  TimeTickHandler = goog.module.get('org.pepstock.charba.client.configuration.TimeTickHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(CartesianTimeTick, "org.pepstock.charba.client.configuration.CartesianTimeTick");

exports = CartesianTimeTick;

//# sourceMappingURL=CartesianTimeTick.js.map
