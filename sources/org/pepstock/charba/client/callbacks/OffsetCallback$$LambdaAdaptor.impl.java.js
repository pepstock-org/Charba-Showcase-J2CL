goog.module('org.pepstock.charba.client.callbacks.OffsetCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const OffsetCallback = goog.require('org.pepstock.charba.client.callbacks.OffsetCallback$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');

/**
 * @template C
 * @implements {OffsetCallback<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(C):Integer */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(C):Integer}*/
  this.f_fn__org_pepstock_charba_client_callbacks_OffsetCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_OffsetCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_OffsetCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_OffsetCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_OffsetCallback_$JsFunction(/** ?function(C):Integer */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_OffsetCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {Integer} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** C */ arg0) {
  let /** ?function(C):Integer */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_OffsetCallback_$LambdaAdaptor, $function(arg0));
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
OffsetCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.OffsetCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=OffsetCallback$$LambdaAdaptor.js.map
