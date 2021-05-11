goog.module('org.pepstock.charba.client.configuration.Major$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AxisContainer = goog.require('org.pepstock.charba.client.configuration.AxisContainer$impl');

let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let Tick = goog.forwardDeclare('org.pepstock.charba.client.configuration.Tick$impl');

class Major extends AxisContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {Tick}*/
  this.f_tick__org_pepstock_charba_client_configuration_Major_;
 }
 /** @return {!Major} */
 static $create__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_Tick(/** Axis */ axis, /** Tick */ tick) {
  Major.$clinit();
  let $instance = new Major();
  $instance.$ctor__org_pepstock_charba_client_configuration_Major__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_Tick(axis, tick);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Major__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_Tick(/** Axis */ axis, /** Tick */ tick) {
  this.$ctor__org_pepstock_charba_client_configuration_AxisContainer__org_pepstock_charba_client_configuration_Axis(axis);
  this.f_tick__org_pepstock_charba_client_configuration_Major_ = tick;
 }
 
 m_setEnabled__boolean(/** boolean */ enabled) {
  this.f_tick__org_pepstock_charba_client_configuration_Major_.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getMajor__().m_setEnabled__boolean(enabled);
 }
 /** @return {boolean} */
 m_isEnabled__() {
  return this.f_tick__org_pepstock_charba_client_configuration_Major_.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getMajor__().m_isEnabled__();
 }
 
 static $clinit() {
  Major.$clinit = () =>{};
  Major.$loadModules();
  AxisContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Major;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Major, "org.pepstock.charba.client.configuration.Major");

exports = Major;

//# sourceMappingURL=Major.js.map
