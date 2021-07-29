goog.module('org.pepstock.charba.client.controllers.AbstractControllerContainer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 */
class AbstractControllerContainer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ControllerType}*/
  this.f_type__org_pepstock_charba_client_controllers_AbstractControllerContainer_;
 }
 
 $ctor__org_pepstock_charba_client_controllers_AbstractControllerContainer__org_pepstock_charba_client_controllers_ControllerType(/** ControllerType */ type) {
  this.$ctor__java_lang_Object__();
  this.f_type__org_pepstock_charba_client_controllers_AbstractControllerContainer_ = /**@type {ControllerType}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(type, "Controller type argument"), ControllerType));
 }
 /** @return {ControllerType} */
 m_getType__() {
  return this.f_type__org_pepstock_charba_client_controllers_AbstractControllerContainer_;
 }
 
 static $clinit() {
  AbstractControllerContainer.$clinit = () =>{};
  AbstractControllerContainer.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractControllerContainer;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  ControllerType = goog.module.get('org.pepstock.charba.client.controllers.ControllerType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AbstractControllerContainer, "org.pepstock.charba.client.controllers.AbstractControllerContainer");

exports = AbstractControllerContainer;

//# sourceMappingURL=AbstractControllerContainer.js.map
