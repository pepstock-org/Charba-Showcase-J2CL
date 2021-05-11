goog.module('org.pepstock.charba.client.callbacks.RadiusCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const RadiusCallback = goog.require('org.pepstock.charba.client.callbacks.RadiusCallback$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');

/**
 * @template C
 * @implements {RadiusCallback<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(C):?number */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(C):?number}*/
  this.f_fn__org_pepstock_charba_client_callbacks_RadiusCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_RadiusCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_RadiusCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_RadiusCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_RadiusCallback_$JsFunction(/** ?function(C):?number */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_RadiusCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {?number} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** C */ arg0) {
  let /** ?function(C):?number */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_RadiusCallback_$LambdaAdaptor, $function(arg0));
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
RadiusCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.RadiusCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=RadiusCallback$$LambdaAdaptor.js.map
