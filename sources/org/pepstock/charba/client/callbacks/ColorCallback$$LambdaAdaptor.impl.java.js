goog.module('org.pepstock.charba.client.callbacks.ColorCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');

/**
 * @template C
 * @implements {ColorCallback<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(C):* */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(C):*}*/
  this.f_fn__org_pepstock_charba_client_callbacks_ColorCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_ColorCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_ColorCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_ColorCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_ColorCallback_$JsFunction(/** ?function(C):* */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_ColorCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** C */ arg0) {
  let /** ?function(C):* */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_ColorCallback_$LambdaAdaptor, $function(arg0));
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
ColorCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.ColorCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=ColorCallback$$LambdaAdaptor.js.map
