goog.module('org.pepstock.charba.client.callbacks.JoinStyleCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const JoinStyleCallback = goog.require('org.pepstock.charba.client.callbacks.JoinStyleCallback$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let JoinStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.JoinStyle$impl');

/**
 * @template C
 * @implements {JoinStyleCallback<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(C):JoinStyle */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(C):JoinStyle}*/
  this.f_fn__org_pepstock_charba_client_callbacks_JoinStyleCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_JoinStyleCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_JoinStyleCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_JoinStyleCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_JoinStyleCallback_$JsFunction(/** ?function(C):JoinStyle */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_JoinStyleCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {JoinStyle} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** C */ arg0) {
  let /** ?function(C):JoinStyle */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_JoinStyleCallback_$LambdaAdaptor, $function(arg0));
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
JoinStyleCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.JoinStyleCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=JoinStyleCallback$$LambdaAdaptor.js.map
