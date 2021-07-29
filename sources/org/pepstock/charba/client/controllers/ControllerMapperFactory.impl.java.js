goog.module('org.pepstock.charba.client.controllers.ControllerMapperFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');
const AbstractControllerContainer = goog.require('org.pepstock.charba.client.controllers.AbstractControllerContainer$impl');

let NativeObjectContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');

/**
 * @abstract
 * @template T
 * @implements {NativeObjectContainerFactory<T>}
 */
class ControllerMapperFactory extends AbstractControllerContainer {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_controllers_ControllerMapperFactory__org_pepstock_charba_client_controllers_ControllerType(/** ControllerType */ type) {
  this.$ctor__org_pepstock_charba_client_controllers_AbstractControllerContainer__org_pepstock_charba_client_controllers_ControllerType(type);
 }
 /** @override @return {T} */
 m_create__() {
  return this.m_create__org_pepstock_charba_client_commons_NativeObject(null);
 }
 
 static $clinit() {
  ControllerMapperFactory.$clinit = () =>{};
  ControllerMapperFactory.$loadModules();
  AbstractControllerContainer.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ControllerMapperFactory;
 }
 
 static $loadModules() {}
}
NativeObjectContainerFactory.$markImplementor(ControllerMapperFactory);
$Util.$setClassMetadata(ControllerMapperFactory, "org.pepstock.charba.client.controllers.ControllerMapperFactory");

exports = ControllerMapperFactory;

//# sourceMappingURL=ControllerMapperFactory.js.map
