goog.module('org.pepstock.charba.client.configuration.CartesianCategoryTick$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CartesianTick = goog.require('org.pepstock.charba.client.configuration.CartesianTick$impl');

let CategoryTickCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CategoryTickCallback$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CategoryTickHandler = goog.forwardDeclare('org.pepstock.charba.client.configuration.CategoryTickHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CartesianCategoryTick extends CartesianTick {
 /** @protected */
 constructor() {
  super();
  /**@type {CategoryTickHandler}*/
  this.f_tickHandler__org_pepstock_charba_client_configuration_CartesianCategoryTick_;
 }
 /** @return {!CartesianCategoryTick} */
 static $create__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  CartesianCategoryTick.$clinit();
  let $instance = new CartesianCategoryTick();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianCategoryTick__org_pepstock_charba_client_configuration_Axis(axis);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_CartesianCategoryTick__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianTick__org_pepstock_charba_client_configuration_Axis(axis);
  this.f_tickHandler__org_pepstock_charba_client_configuration_CartesianCategoryTick_ = CategoryTickHandler.$create__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_CartesianCategoryTick(axis, this);
 }
 /** @return {CategoryTickCallback} */
 m_getCallback__() {
  return /**@type {CategoryTickCallback}*/ ($Casts.$to(this.f_tickHandler__org_pepstock_charba_client_configuration_CartesianCategoryTick_.m_getCallback___$pp_org_pepstock_charba_client_configuration(), CategoryTickCallback));
 }
 
 m_setCallback__org_pepstock_charba_client_callbacks_CategoryTickCallback(/** CategoryTickCallback */ callback) {
  this.f_tickHandler__org_pepstock_charba_client_configuration_CartesianCategoryTick_.m_setCallback__java_lang_Object_$pp_org_pepstock_charba_client_configuration(callback);
 }
 
 static $clinit() {
  CartesianCategoryTick.$clinit = () =>{};
  CartesianCategoryTick.$loadModules();
  CartesianTick.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CartesianCategoryTick;
 }
 
 static $loadModules() {
  CategoryTickCallback = goog.module.get('org.pepstock.charba.client.callbacks.CategoryTickCallback$impl');
  CategoryTickHandler = goog.module.get('org.pepstock.charba.client.configuration.CategoryTickHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(CartesianCategoryTick, "org.pepstock.charba.client.configuration.CartesianCategoryTick");

exports = CartesianCategoryTick;

//# sourceMappingURL=CartesianCategoryTick.js.map
