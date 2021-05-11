goog.module('org.pepstock.charba.client.configuration.CartesianTick$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Tick = goog.require('org.pepstock.charba.client.configuration.Tick$impl');

let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CrossAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.CrossAlign$impl');
let ElementAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ElementAlign$impl');

/**
 * @abstract
 */
class CartesianTick extends Tick {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_configuration_CartesianTick__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  this.$ctor__org_pepstock_charba_client_configuration_Tick__org_pepstock_charba_client_configuration_Axis(axis);
 }
 
 m_setAutoSkip__boolean(/** boolean */ autoSkip) {
  this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_setAutoSkip__boolean(autoSkip);
 }
 /** @return {boolean} */
 m_isAutoSkip__() {
  return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_isAutoSkip__();
 }
 
 m_setAutoSkipPadding__int(/** number */ autoSkipPadding) {
  this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_setAutoSkipPadding__int(autoSkipPadding);
 }
 /** @return {number} */
 m_getAutoSkipPadding__() {
  return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getAutoSkipPadding__();
 }
 
 m_setLabelOffset__int(/** number */ labelOffset) {
  this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_setLabelOffset__int(labelOffset);
 }
 /** @return {number} */
 m_getLabelOffset__() {
  return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getLabelOffset__();
 }
 
 m_setMaxRotation__int(/** number */ maxRotation) {
  this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_setMaxRotation__int(maxRotation);
 }
 /** @return {number} */
 m_getMaxRotation__() {
  return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getMaxRotation__();
 }
 
 m_setMinRotation__int(/** number */ minRotation) {
  this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_setMinRotation__int(minRotation);
 }
 /** @return {number} */
 m_getMinRotation__() {
  return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getMinRotation__();
 }
 
 m_setMirror__boolean(/** boolean */ mirror) {
  this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_setMirror__boolean(mirror);
 }
 /** @return {boolean} */
 m_isMirror__() {
  return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_isMirror__();
 }
 
 m_setSampleSize__int(/** number */ sampleSize) {
  this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_setSampleSize__int(sampleSize);
 }
 /** @return {number} */
 m_getSampleSize__() {
  return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getSampleSize__();
 }
 
 m_setAlign__org_pepstock_charba_client_enums_ElementAlign(/** ElementAlign */ align) {
  this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_setAlign__org_pepstock_charba_client_enums_ElementAlign(align);
 }
 /** @return {ElementAlign} */
 m_getAlign__() {
  return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getAlign__();
 }
 
 m_setCrossAlign__org_pepstock_charba_client_enums_CrossAlign(/** CrossAlign */ crossAlign) {
  this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_setCrossAlign__org_pepstock_charba_client_enums_CrossAlign(crossAlign);
 }
 /** @return {CrossAlign} */
 m_getCrossAlign__() {
  return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getCrossAlign__();
 }
 
 static $clinit() {
  CartesianTick.$clinit = () =>{};
  CartesianTick.$loadModules();
  Tick.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CartesianTick;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(CartesianTick, "org.pepstock.charba.client.configuration.CartesianTick");

exports = CartesianTick;

//# sourceMappingURL=CartesianTick.js.map
