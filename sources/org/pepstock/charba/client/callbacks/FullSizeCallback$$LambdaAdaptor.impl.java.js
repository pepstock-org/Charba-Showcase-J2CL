goog.module('org.pepstock.charba.client.callbacks.FullSizeCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FullSizeCallback = goog.require('org.pepstock.charba.client.callbacks.FullSizeCallback$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');

/**
 * @template C
 * @implements {FullSizeCallback<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(C):?boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(C):?boolean}*/
  this.f_fn__org_pepstock_charba_client_callbacks_FullSizeCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_FullSizeCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_FullSizeCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_FullSizeCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_FullSizeCallback_$JsFunction(/** ?function(C):?boolean */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_FullSizeCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {?boolean} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** C */ arg0) {
  let /** ?function(C):?boolean */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_FullSizeCallback_$LambdaAdaptor, $function(arg0));
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
FullSizeCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.FullSizeCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=FullSizeCallback$$LambdaAdaptor.js.map
