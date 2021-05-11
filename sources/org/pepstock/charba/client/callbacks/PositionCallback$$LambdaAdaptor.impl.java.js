goog.module('org.pepstock.charba.client.callbacks.PositionCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const PositionCallback = goog.require('org.pepstock.charba.client.callbacks.PositionCallback$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');

/**
 * @template C
 * @implements {PositionCallback<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(C):Position */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(C):Position}*/
  this.f_fn__org_pepstock_charba_client_callbacks_PositionCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_PositionCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_PositionCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_PositionCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_PositionCallback_$JsFunction(/** ?function(C):Position */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_PositionCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {Position} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** C */ arg0) {
  let /** ?function(C):Position */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_PositionCallback_$LambdaAdaptor, $function(arg0));
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
PositionCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.PositionCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=PositionCallback$$LambdaAdaptor.js.map
