goog.module('org.pepstock.charba.client.callbacks.BorderDashCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BorderDashCallback = goog.require('org.pepstock.charba.client.callbacks.BorderDashCallback$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');

/**
 * @template C
 * @implements {BorderDashCallback<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(C):List<Integer> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(C):List<Integer>}*/
  this.f_fn__org_pepstock_charba_client_callbacks_BorderDashCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_BorderDashCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_BorderDashCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_BorderDashCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_BorderDashCallback_$JsFunction(/** ?function(C):List<Integer> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_BorderDashCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {List<Integer>} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** C */ arg0) {
  let /** ?function(C):List<Integer> */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_BorderDashCallback_$LambdaAdaptor, $function(arg0));
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
BorderDashCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.BorderDashCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=BorderDashCallback$$LambdaAdaptor.js.map
