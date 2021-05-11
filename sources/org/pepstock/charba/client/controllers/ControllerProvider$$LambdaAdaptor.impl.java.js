goog.module('org.pepstock.charba.client.controllers.ControllerProvider.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ControllerProvider = goog.require('org.pepstock.charba.client.controllers.ControllerProvider$impl');

let Controller = goog.forwardDeclare('org.pepstock.charba.client.Controller$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');

/**
 * @implements {ControllerProvider}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ControllerType):Controller */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ControllerType):Controller}*/
  this.f_fn__org_pepstock_charba_client_controllers_ControllerProvider_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_controllers_ControllerProvider_$LambdaAdaptor__org_pepstock_charba_client_controllers_ControllerProvider_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_controllers_ControllerProvider_$LambdaAdaptor__org_pepstock_charba_client_controllers_ControllerProvider_$JsFunction(/** ?function(ControllerType):Controller */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_controllers_ControllerProvider_$LambdaAdaptor = fn;
 }
 /** @override @return {Controller} */
 m_provide__org_pepstock_charba_client_controllers_ControllerType(/** ControllerType */ arg0) {
  let /** ?function(ControllerType):Controller */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_controllers_ControllerProvider_$LambdaAdaptor, $function(arg0));
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
ControllerProvider.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.controllers.ControllerProvider$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=ControllerProvider$$LambdaAdaptor.js.map
