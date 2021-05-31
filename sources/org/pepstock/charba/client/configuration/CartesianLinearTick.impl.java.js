goog.module('org.pepstock.charba.client.configuration.CartesianLinearTick$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CartesianNumericTick = goog.require('org.pepstock.charba.client.configuration.CartesianNumericTick$impl');
const IsLinearTick = goog.require('org.pepstock.charba.client.configuration.IsLinearTick$impl');

let CountCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CountCallback$impl');
let MaxTicksLimitCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.MaxTicksLimitCallback$impl');
let PrecisionCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PrecisionCallback$impl');
let StepSizeCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.StepSizeCallback$impl');
let TickCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TickCallback$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let LinearTickHandler = goog.forwardDeclare('org.pepstock.charba.client.configuration.LinearTickHandler$impl');
let LinearTickOptionsHandler = goog.forwardDeclare('org.pepstock.charba.client.configuration.LinearTickOptionsHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsLinearTick}
 */
class CartesianLinearTick extends CartesianNumericTick {
 /** @protected */
 constructor() {
  super();
  /**@type {LinearTickHandler<CartesianLinearTick>}*/
  this.f_tickHandler__org_pepstock_charba_client_configuration_CartesianLinearTick_;
  /**@type {LinearTickOptionsHandler}*/
  this.f_optionsHandler__org_pepstock_charba_client_configuration_CartesianLinearTick_;
 }
 /** @return {!CartesianLinearTick} */
 static $create__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  CartesianLinearTick.$clinit();
  let $instance = new CartesianLinearTick();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianLinearTick__org_pepstock_charba_client_configuration_Axis(axis);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_CartesianLinearTick__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  this.$ctor__org_pepstock_charba_client_configuration_CartesianNumericTick__org_pepstock_charba_client_configuration_Axis(axis);
  this.f_tickHandler__org_pepstock_charba_client_configuration_CartesianLinearTick_ = /**@type {!LinearTickHandler<CartesianLinearTick>}*/ (LinearTickHandler.$create__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_Tick(axis, this));
  this.f_optionsHandler__org_pepstock_charba_client_configuration_CartesianLinearTick_ = LinearTickOptionsHandler.$create__org_pepstock_charba_client_configuration_Axis(axis);
 }
 /** @override @return {LinearTickOptionsHandler} */
 m_getLinearTickOptionsHandler__() {
  return this.f_optionsHandler__org_pepstock_charba_client_configuration_CartesianLinearTick_;
 }
 /** @return {TickCallback} */
 m_getCallback__() {
  return /**@type {TickCallback}*/ ($Casts.$to(this.f_tickHandler__org_pepstock_charba_client_configuration_CartesianLinearTick_.m_getCallback___$pp_org_pepstock_charba_client_configuration(), TickCallback));
 }
 
 m_setCallback__org_pepstock_charba_client_callbacks_TickCallback(/** TickCallback */ callback) {
  this.f_tickHandler__org_pepstock_charba_client_configuration_CartesianLinearTick_.m_setCallback__java_lang_Object_$pp_org_pepstock_charba_client_configuration(callback);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getCount__() {
  return IsLinearTick.m_getCount__$default__org_pepstock_charba_client_configuration_IsLinearTick(this);
 }
 //Default method forwarding stub.
 /** @override @return {CountCallback} */
 m_getCountCallback__() {
  return IsLinearTick.m_getCountCallback__$default__org_pepstock_charba_client_configuration_IsLinearTick(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getMaxTicksLimit__() {
  return IsLinearTick.m_getMaxTicksLimit__$default__org_pepstock_charba_client_configuration_IsLinearTick(this);
 }
 //Default method forwarding stub.
 /** @override @return {MaxTicksLimitCallback} */
 m_getMaxTicksLimitCallback__() {
  return IsLinearTick.m_getMaxTicksLimitCallback__$default__org_pepstock_charba_client_configuration_IsLinearTick(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getPrecision__() {
  return IsLinearTick.m_getPrecision__$default__org_pepstock_charba_client_configuration_IsLinearTick(this);
 }
 //Default method forwarding stub.
 /** @override @return {PrecisionCallback} */
 m_getPrecisionCallback__() {
  return IsLinearTick.m_getPrecisionCallback__$default__org_pepstock_charba_client_configuration_IsLinearTick(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getStepSize__() {
  return IsLinearTick.m_getStepSize__$default__org_pepstock_charba_client_configuration_IsLinearTick(this);
 }
 //Default method forwarding stub.
 /** @override @return {StepSizeCallback} */
 m_getStepSizeCallback__() {
  return IsLinearTick.m_getStepSizeCallback__$default__org_pepstock_charba_client_configuration_IsLinearTick(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setCount__int(/** number */ arg0) {
  IsLinearTick.m_setCount__$default__org_pepstock_charba_client_configuration_IsLinearTick__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setCount__org_pepstock_charba_client_callbacks_CountCallback(/** CountCallback */ arg0) {
  IsLinearTick.m_setCount__$default__org_pepstock_charba_client_configuration_IsLinearTick__org_pepstock_charba_client_callbacks_CountCallback(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setCount__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ arg0) {
  IsLinearTick.m_setCount__$default__org_pepstock_charba_client_configuration_IsLinearTick__org_pepstock_charba_client_callbacks_NativeCallback(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setMaxTicksLimit__int(/** number */ arg0) {
  IsLinearTick.m_setMaxTicksLimit__$default__org_pepstock_charba_client_configuration_IsLinearTick__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setMaxTicksLimit__org_pepstock_charba_client_callbacks_MaxTicksLimitCallback(/** MaxTicksLimitCallback */ arg0) {
  IsLinearTick.m_setMaxTicksLimit__$default__org_pepstock_charba_client_configuration_IsLinearTick__org_pepstock_charba_client_callbacks_MaxTicksLimitCallback(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setMaxTicksLimit__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ arg0) {
  IsLinearTick.m_setMaxTicksLimit__$default__org_pepstock_charba_client_configuration_IsLinearTick__org_pepstock_charba_client_callbacks_NativeCallback(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPrecision__int(/** number */ arg0) {
  IsLinearTick.m_setPrecision__$default__org_pepstock_charba_client_configuration_IsLinearTick__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPrecision__org_pepstock_charba_client_callbacks_PrecisionCallback(/** PrecisionCallback */ arg0) {
  IsLinearTick.m_setPrecision__$default__org_pepstock_charba_client_configuration_IsLinearTick__org_pepstock_charba_client_callbacks_PrecisionCallback(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPrecision__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ arg0) {
  IsLinearTick.m_setPrecision__$default__org_pepstock_charba_client_configuration_IsLinearTick__org_pepstock_charba_client_callbacks_NativeCallback(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setStepSize__double(/** number */ arg0) {
  IsLinearTick.m_setStepSize__$default__org_pepstock_charba_client_configuration_IsLinearTick__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setStepSize__org_pepstock_charba_client_callbacks_StepSizeCallback(/** StepSizeCallback */ arg0) {
  IsLinearTick.m_setStepSize__$default__org_pepstock_charba_client_configuration_IsLinearTick__org_pepstock_charba_client_callbacks_StepSizeCallback(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setStepSize__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ arg0) {
  IsLinearTick.m_setStepSize__$default__org_pepstock_charba_client_configuration_IsLinearTick__org_pepstock_charba_client_callbacks_NativeCallback(this, arg0);
 }
 
 static $clinit() {
  CartesianLinearTick.$clinit = () =>{};
  CartesianLinearTick.$loadModules();
  CartesianNumericTick.$clinit();
  IsLinearTick.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CartesianLinearTick;
 }
 
 static $loadModules() {
  TickCallback = goog.module.get('org.pepstock.charba.client.callbacks.TickCallback$impl');
  LinearTickHandler = goog.module.get('org.pepstock.charba.client.configuration.LinearTickHandler$impl');
  LinearTickOptionsHandler = goog.module.get('org.pepstock.charba.client.configuration.LinearTickOptionsHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsLinearTick.$markImplementor(CartesianLinearTick);
$Util.$setClassMetadata(CartesianLinearTick, "org.pepstock.charba.client.configuration.CartesianLinearTick");

exports = CartesianLinearTick;

//# sourceMappingURL=CartesianLinearTick.js.map
