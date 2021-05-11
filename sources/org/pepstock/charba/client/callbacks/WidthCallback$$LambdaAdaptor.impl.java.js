goog.module('org.pepstock.charba.client.callbacks.WidthCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const WidthCallback = goog.require('org.pepstock.charba.client.callbacks.WidthCallback$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');

/**
 * @template C
 * @implements {WidthCallback<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(C):Integer */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(C):Integer}*/
  this.f_fn__org_pepstock_charba_client_callbacks_WidthCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_WidthCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_WidthCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_WidthCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_WidthCallback_$JsFunction(/** ?function(C):Integer */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_WidthCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {Integer} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** C */ arg0) {
  let /** ?function(C):Integer */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_WidthCallback_$LambdaAdaptor, $function(arg0));
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
WidthCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.WidthCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=WidthCallback$$LambdaAdaptor.js.map
