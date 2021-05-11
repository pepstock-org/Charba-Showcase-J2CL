goog.module('org.pepstock.charba.client.callbacks.TextAlignCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TextAlignCallback = goog.require('org.pepstock.charba.client.callbacks.TextAlignCallback$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');

/**
 * @template C
 * @implements {TextAlignCallback<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(C):TextAlign */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(C):TextAlign}*/
  this.f_fn__org_pepstock_charba_client_callbacks_TextAlignCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_TextAlignCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_TextAlignCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_TextAlignCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_TextAlignCallback_$JsFunction(/** ?function(C):TextAlign */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_TextAlignCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {TextAlign} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** C */ arg0) {
  let /** ?function(C):TextAlign */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_TextAlignCallback_$LambdaAdaptor, $function(arg0));
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
TextAlignCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.TextAlignCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=TextAlignCallback$$LambdaAdaptor.js.map
