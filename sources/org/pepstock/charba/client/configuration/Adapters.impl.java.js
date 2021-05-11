goog.module('org.pepstock.charba.client.configuration.Adapters$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AxisContainer = goog.require('org.pepstock.charba.client.configuration.AxisContainer$impl');

let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let ScaleDateAdapter = goog.forwardDeclare('org.pepstock.charba.client.configuration.ScaleDateAdapter$impl');

class Adapters extends AxisContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {ScaleDateAdapter}*/
  this.f_dateAdapterOptions__org_pepstock_charba_client_configuration_Adapters_;
 }
 /** @return {!Adapters} */
 static $create__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  Adapters.$clinit();
  let $instance = new Adapters();
  $instance.$ctor__org_pepstock_charba_client_configuration_Adapters__org_pepstock_charba_client_configuration_Axis(axis);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Adapters__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  this.$ctor__org_pepstock_charba_client_configuration_AxisContainer__org_pepstock_charba_client_configuration_Axis(axis);
  this.f_dateAdapterOptions__org_pepstock_charba_client_configuration_Adapters_ = ScaleDateAdapter.$create__org_pepstock_charba_client_configuration_Axis(axis);
 }
 /** @return {ScaleDateAdapter} */
 m_getDate__() {
  return this.f_dateAdapterOptions__org_pepstock_charba_client_configuration_Adapters_;
 }
 
 static $clinit() {
  Adapters.$clinit = () =>{};
  Adapters.$loadModules();
  AxisContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Adapters;
 }
 
 static $loadModules() {
  ScaleDateAdapter = goog.module.get('org.pepstock.charba.client.configuration.ScaleDateAdapter$impl');
 }
}
$Util.$setClassMetadata(Adapters, "org.pepstock.charba.client.configuration.Adapters");

exports = Adapters;

//# sourceMappingURL=Adapters.js.map
