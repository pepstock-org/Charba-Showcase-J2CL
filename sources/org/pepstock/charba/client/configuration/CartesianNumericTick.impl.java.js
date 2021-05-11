goog.module('org.pepstock.charba.client.configuration.CartesianNumericTick$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CartesianTick = goog.require('org.pepstock.charba.client.configuration.CartesianTick$impl');
const IsNumericTick = goog.require('org.pepstock.charba.client.configuration.IsNumericTick$impl');

let IsProvider = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let NumberFormatter = goog.forwardDeclare('org.pepstock.charba.client.configuration.NumberFormatter$impl');
let IsNumberFormat = goog.forwardDeclare('org.pepstock.charba.client.options.IsNumberFormat$impl');

/**
 * @abstract
 * @implements {IsNumericTick}
 */
class CartesianNumericTick extends CartesianTick {
 /** @protected */
 constructor() {
  super();
  /**@type {NumberFormatter}*/
  this.f_numberFormatter__org_pepstock_charba_client_configuration_CartesianNumericTick_;
 }
 
 $ctor__org_pepstock_charba_client_configuration_CartesianNumericTick__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianTick__org_pepstock_charba_client_configuration_Axis(axis);
  this.f_numberFormatter__org_pepstock_charba_client_configuration_CartesianNumericTick_ = NumberFormatter.$create__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(IsProvider.$adapt(() =>{
   return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getNumberFormat__();
  }));
 }
 /** @override @return {IsNumberFormat} */
 m_getNumberFormat__() {
  return this.f_numberFormatter__org_pepstock_charba_client_configuration_CartesianNumericTick_;
 }
 
 static $clinit() {
  CartesianNumericTick.$clinit = () =>{};
  CartesianNumericTick.$loadModules();
  CartesianTick.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CartesianNumericTick;
 }
 
 static $loadModules() {
  IsProvider = goog.module.get('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
  NumberFormatter = goog.module.get('org.pepstock.charba.client.configuration.NumberFormatter$impl');
 }
}
IsNumericTick.$markImplementor(CartesianNumericTick);
$Util.$setClassMetadata(CartesianNumericTick, "org.pepstock.charba.client.configuration.CartesianNumericTick");

exports = CartesianNumericTick;

//# sourceMappingURL=CartesianNumericTick.js.map
