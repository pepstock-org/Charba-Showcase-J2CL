goog.module('org.pepstock.charba.client.callbacks.TextCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TextCallback = goog.require('org.pepstock.charba.client.callbacks.TextCallback$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');

/**
 * @template C
 * @implements {TextCallback<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(C):* */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(C):*}*/
  this.f_fn__org_pepstock_charba_client_callbacks_TextCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_TextCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_TextCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_TextCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_TextCallback_$JsFunction(/** ?function(C):* */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_TextCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** C */ arg0) {
  let /** ?function(C):* */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_TextCallback_$LambdaAdaptor, $function(arg0));
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
TextCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.TextCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=TextCallback$$LambdaAdaptor.js.map
