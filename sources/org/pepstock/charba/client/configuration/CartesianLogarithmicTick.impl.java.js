goog.module('org.pepstock.charba.client.configuration.CartesianLogarithmicTick$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CartesianNumericTick = goog.require('org.pepstock.charba.client.configuration.CartesianNumericTick$impl');

let TickCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TickCallback$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let LinearTickHandler = goog.forwardDeclare('org.pepstock.charba.client.configuration.LinearTickHandler$impl');
let NumericTickOptionsHandler = goog.forwardDeclare('org.pepstock.charba.client.configuration.NumericTickOptionsHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CartesianLogarithmicTick extends CartesianNumericTick {
 /** @protected */
 constructor() {
  super();
  /**@type {LinearTickHandler<CartesianLogarithmicTick>}*/
  this.f_tickHandler__org_pepstock_charba_client_configuration_CartesianLogarithmicTick_;
  /**@type {NumericTickOptionsHandler}*/
  this.f_optionsHandler__org_pepstock_charba_client_configuration_CartesianLogarithmicTick_;
 }
 /** @return {!CartesianLogarithmicTick} */
 static $create__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  CartesianLogarithmicTick.$clinit();
  let $instance = new CartesianLogarithmicTick();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicTick__org_pepstock_charba_client_configuration_Axis(axis);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_CartesianLogarithmicTick__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianNumericTick__org_pepstock_charba_client_configuration_Axis(axis);
  this.f_tickHandler__org_pepstock_charba_client_configuration_CartesianLogarithmicTick_ = /**@type {!LinearTickHandler<CartesianLogarithmicTick>}*/ (LinearTickHandler.$create__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_Tick(axis, this));
  this.f_optionsHandler__org_pepstock_charba_client_configuration_CartesianLogarithmicTick_ = NumericTickOptionsHandler.$create__org_pepstock_charba_client_configuration_Axis(axis);
 }
 /** @override @return {NumericTickOptionsHandler} */
 m_getTickOptionsHandler__() {
  return this.f_optionsHandler__org_pepstock_charba_client_configuration_CartesianLogarithmicTick_;
 }
 /** @return {TickCallback} */
 m_getCallback__() {
  return /**@type {TickCallback}*/ ($Casts.$to(this.f_tickHandler__org_pepstock_charba_client_configuration_CartesianLogarithmicTick_.m_getCallback___$pp_org_pepstock_charba_client_configuration(), TickCallback));
 }
 
 m_setCallback__org_pepstock_charba_client_callbacks_TickCallback(/** TickCallback */ callback) {
  this.f_tickHandler__org_pepstock_charba_client_configuration_CartesianLogarithmicTick_.m_setCallback__java_lang_Object_$pp_org_pepstock_charba_client_configuration(callback);
 }
 
 static $clinit() {
  CartesianLogarithmicTick.$clinit = () =>{};
  CartesianLogarithmicTick.$loadModules();
  CartesianNumericTick.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CartesianLogarithmicTick;
 }
 
 static $loadModules() {
  TickCallback = goog.module.get('org.pepstock.charba.client.callbacks.TickCallback$impl');
  LinearTickHandler = goog.module.get('org.pepstock.charba.client.configuration.LinearTickHandler$impl');
  NumericTickOptionsHandler = goog.module.get('org.pepstock.charba.client.configuration.NumericTickOptionsHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(CartesianLogarithmicTick, "org.pepstock.charba.client.configuration.CartesianLogarithmicTick");

exports = CartesianLogarithmicTick;

//# sourceMappingURL=CartesianLogarithmicTick.js.map
