goog.module('org.pepstock.charba.client.callbacks.Scriptable.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');

/**
 * @template T, C
 * @implements {Scriptable<T, C>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(C):T */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(C):T}*/
  this.f_fn__org_pepstock_charba_client_callbacks_Scriptable_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_Scriptable_$LambdaAdaptor__org_pepstock_charba_client_callbacks_Scriptable_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_Scriptable_$LambdaAdaptor__org_pepstock_charba_client_callbacks_Scriptable_$JsFunction(/** ?function(C):T */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_Scriptable_$LambdaAdaptor = fn;
 }
 /** @override @return {T} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** C */ arg0) {
  let /** ?function(C):T */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_Scriptable_$LambdaAdaptor, $function(arg0));
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
Scriptable.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.Scriptable$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=Scriptable$$LambdaAdaptor.js.map
