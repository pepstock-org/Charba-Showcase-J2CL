goog.module('org.pepstock.charba.client.callbacks.BorderDashOffsetCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BorderDashOffsetCallback = goog.require('org.pepstock.charba.client.callbacks.BorderDashOffsetCallback$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');

/**
 * @template C
 * @implements {BorderDashOffsetCallback<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(C):?number */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(C):?number}*/
  this.f_fn__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback_$JsFunction(/** ?function(C):?number */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {?number} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** C */ arg0) {
  let /** ?function(C):?number */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback_$LambdaAdaptor, $function(arg0));
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
BorderDashOffsetCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.BorderDashOffsetCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=BorderDashOffsetCallback$$LambdaAdaptor.js.map
