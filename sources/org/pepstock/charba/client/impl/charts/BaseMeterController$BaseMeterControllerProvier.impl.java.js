goog.module('org.pepstock.charba.client.impl.charts.BaseMeterController.BaseMeterControllerProvier$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ControllerProvider = goog.require('org.pepstock.charba.client.controllers.ControllerProvider$impl');

let Controller = goog.forwardDeclare('org.pepstock.charba.client.Controller$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let BaseMeterController = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.BaseMeterController$impl');

/**
 * @implements {ControllerProvider}
 */
class BaseMeterControllerProvier extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BaseMeterControllerProvier} */
 static $create__() {
  BaseMeterControllerProvier.$clinit();
  let $instance = new BaseMeterControllerProvier();
  $instance.$ctor__org_pepstock_charba_client_impl_charts_BaseMeterController_BaseMeterControllerProvier__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_charts_BaseMeterController_BaseMeterControllerProvier__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {Controller} */
 m_provide__org_pepstock_charba_client_controllers_ControllerType(/** ControllerType */ controllerType) {
  return BaseMeterController.$create__org_pepstock_charba_client_controllers_ControllerType(controllerType);
 }
 
 static $clinit() {
  BaseMeterControllerProvier.$clinit = () =>{};
  BaseMeterControllerProvier.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseMeterControllerProvier;
 }
 
 static $loadModules() {
  BaseMeterController = goog.module.get('org.pepstock.charba.client.impl.charts.BaseMeterController$impl');
 }
}
ControllerProvider.$markImplementor(BaseMeterControllerProvier);
$Util.$setClassMetadata(BaseMeterControllerProvier, "org.pepstock.charba.client.impl.charts.BaseMeterController$BaseMeterControllerProvier");

exports = BaseMeterControllerProvier;

//# sourceMappingURL=BaseMeterController$BaseMeterControllerProvier.js.map
