goog.module('org.pepstock.charba.client.callbacks.PaddingCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const PaddingCallback = goog.require('org.pepstock.charba.client.callbacks.PaddingCallback$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let PaddingItem = goog.forwardDeclare('org.pepstock.charba.client.items.PaddingItem$impl');

/**
 * @template C
 * @implements {PaddingCallback<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(C):PaddingItem */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(C):PaddingItem}*/
  this.f_fn__org_pepstock_charba_client_callbacks_PaddingCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_PaddingCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_PaddingCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_PaddingCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_PaddingCallback_$JsFunction(/** ?function(C):PaddingItem */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_PaddingCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {PaddingItem} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** C */ arg0) {
  let /** ?function(C):PaddingItem */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_PaddingCallback_$LambdaAdaptor, $function(arg0));
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
PaddingCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.PaddingCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=PaddingCallback$$LambdaAdaptor.js.map
