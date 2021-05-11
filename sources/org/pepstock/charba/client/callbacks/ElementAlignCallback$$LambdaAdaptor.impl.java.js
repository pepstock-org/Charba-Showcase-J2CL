goog.module('org.pepstock.charba.client.callbacks.ElementAlignCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ElementAlignCallback = goog.require('org.pepstock.charba.client.callbacks.ElementAlignCallback$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let ElementAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ElementAlign$impl');

/**
 * @template C
 * @implements {ElementAlignCallback<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(C):ElementAlign */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(C):ElementAlign}*/
  this.f_fn__org_pepstock_charba_client_callbacks_ElementAlignCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_ElementAlignCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_ElementAlignCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_ElementAlignCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_ElementAlignCallback_$JsFunction(/** ?function(C):ElementAlign */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_ElementAlignCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {ElementAlign} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** C */ arg0) {
  let /** ?function(C):ElementAlign */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_ElementAlignCallback_$LambdaAdaptor, $function(arg0));
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
ElementAlignCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.ElementAlignCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=ElementAlignCallback$$LambdaAdaptor.js.map
