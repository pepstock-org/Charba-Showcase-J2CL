goog.module('org.pepstock.charba.client.controllers.ControllersEnvelop$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ImmutableEnvelop = goog.require('org.pepstock.charba.client.commons.ImmutableEnvelop$impl');

/**
 * @template T
 * @extends {ImmutableEnvelop<T>}
 */
class ControllersEnvelop extends ImmutableEnvelop {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'ControllersEnvelop(Object)'.
 /** @template T @return {!ControllersEnvelop<T>} */
 static $create__java_lang_Object(/** T */ content) {
  ControllersEnvelop.$clinit();
  let $instance = new ControllersEnvelop();
  $instance.$ctor__org_pepstock_charba_client_controllers_ControllersEnvelop__java_lang_Object(content);
  return $instance;
 }
 //Initialization from constructor 'ControllersEnvelop(Object)'.
 
 $ctor__org_pepstock_charba_client_controllers_ControllersEnvelop__java_lang_Object(/** T */ content) {
  this.$ctor__org_pepstock_charba_client_controllers_ControllersEnvelop__java_lang_Object__boolean(content, false);
 }
 //Factory method corresponding to constructor 'ControllersEnvelop(Object, boolean)'.
 /** @template T @return {!ControllersEnvelop<T>} */
 static $create__java_lang_Object__boolean(/** T */ content, /** boolean */ nullable) {
  ControllersEnvelop.$clinit();
  let $instance = new ControllersEnvelop();
  $instance.$ctor__org_pepstock_charba_client_controllers_ControllersEnvelop__java_lang_Object__boolean(content, nullable);
  return $instance;
 }
 //Initialization from constructor 'ControllersEnvelop(Object, boolean)'.
 
 $ctor__org_pepstock_charba_client_controllers_ControllersEnvelop__java_lang_Object__boolean(/** T */ content, /** boolean */ nullable) {
  this.$ctor__org_pepstock_charba_client_commons_ImmutableEnvelop__java_lang_Object__boolean(content, nullable);
 }
 
 static $clinit() {
  ControllersEnvelop.$clinit = () =>{};
  ControllersEnvelop.$loadModules();
  ImmutableEnvelop.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ControllersEnvelop;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(ControllersEnvelop, "org.pepstock.charba.client.controllers.ControllersEnvelop");

exports = ControllersEnvelop;

//# sourceMappingURL=ControllersEnvelop.js.map
