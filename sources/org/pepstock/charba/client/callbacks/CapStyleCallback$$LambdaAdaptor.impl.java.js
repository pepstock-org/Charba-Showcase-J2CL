goog.module('org.pepstock.charba.client.callbacks.CapStyleCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CapStyleCallback = goog.require('org.pepstock.charba.client.callbacks.CapStyleCallback$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let CapStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.CapStyle$impl');

/**
 * @template C
 * @implements {CapStyleCallback<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(C):CapStyle */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(C):CapStyle}*/
  this.f_fn__org_pepstock_charba_client_callbacks_CapStyleCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_CapStyleCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_CapStyleCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_CapStyleCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_CapStyleCallback_$JsFunction(/** ?function(C):CapStyle */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_CapStyleCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {CapStyle} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** C */ arg0) {
  let /** ?function(C):CapStyle */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_CapStyleCallback_$LambdaAdaptor, $function(arg0));
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
CapStyleCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.CapStyleCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=CapStyleCallback$$LambdaAdaptor.js.map
