goog.module('org.pepstock.charba.client.configuration.AxisContainer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');

/**
 * @abstract
 */
class AxisContainer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Axis}*/
  this.f_axis__org_pepstock_charba_client_configuration_AxisContainer_;
 }
 
 $ctor__org_pepstock_charba_client_configuration_AxisContainer__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  this.$ctor__java_lang_Object__();
  this.f_axis__org_pepstock_charba_client_configuration_AxisContainer_ = axis;
 }
 /** @return {Axis} */
 m_getAxis__() {
  return this.f_axis__org_pepstock_charba_client_configuration_AxisContainer_;
 }
 
 static $clinit() {
  AxisContainer.$clinit = () =>{};
  AxisContainer.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AxisContainer;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(AxisContainer, "org.pepstock.charba.client.configuration.AxisContainer");

exports = AxisContainer;

//# sourceMappingURL=AxisContainer.js.map
