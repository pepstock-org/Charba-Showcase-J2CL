goog.module('org.pepstock.charba.client.callbacks.FilterCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FilterCallback = goog.require('org.pepstock.charba.client.callbacks.FilterCallback$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');

/**
 * @template T
 * @implements {FilterCallback<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(IsChart, T):boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(IsChart, T):boolean}*/
  this.f_fn__org_pepstock_charba_client_callbacks_FilterCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_FilterCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_FilterCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_FilterCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_FilterCallback_$JsFunction(/** ?function(IsChart, T):boolean */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_FilterCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {boolean} */
 m_onFilter__org_pepstock_charba_client_IsChart__java_lang_Object(/** IsChart */ arg0, /** T */ arg1) {
  let /** ?function(IsChart, T):boolean */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_FilterCallback_$LambdaAdaptor, $function(arg0, arg1));
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
FilterCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.FilterCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=FilterCallback$$LambdaAdaptor.js.map
