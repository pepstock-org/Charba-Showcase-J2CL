goog.module('org.pepstock.charba.client.options.ScaleId.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScaleId = goog.require('org.pepstock.charba.client.options.ScaleId$impl');

/**
 * @implements {ScaleId}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():?string}*/
  this.f_fn__org_pepstock_charba_client_options_ScaleId_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_options_ScaleId_$LambdaAdaptor__org_pepstock_charba_client_options_ScaleId_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_options_ScaleId_$LambdaAdaptor__org_pepstock_charba_client_options_ScaleId_$JsFunction(/** ?function():?string */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_options_ScaleId_$LambdaAdaptor = fn;
 }
 /** @override @return {?string} */
 m_value__() {
  let /** ?function():?string */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_options_ScaleId_$LambdaAdaptor, $function());
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
ScaleId.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.options.ScaleId$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=ScaleId$$LambdaAdaptor.js.map
