goog.module('org.pepstock.charba.client.commons.IsCallbackPropertyHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsCallbackPropertyHandler = goog.require('org.pepstock.charba.client.commons.IsCallbackPropertyHandler$impl');

/**
 * @implements {IsCallbackPropertyHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(?string):boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(?string):boolean}*/
  this.f_fn__org_pepstock_charba_client_commons_IsCallbackPropertyHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_commons_IsCallbackPropertyHandler_$LambdaAdaptor__org_pepstock_charba_client_commons_IsCallbackPropertyHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_commons_IsCallbackPropertyHandler_$LambdaAdaptor__org_pepstock_charba_client_commons_IsCallbackPropertyHandler_$JsFunction(/** ?function(?string):boolean */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_commons_IsCallbackPropertyHandler_$LambdaAdaptor = fn;
 }
 /** @override @return {boolean} */
 m_removeChartScope__java_lang_String(/** ?string */ arg0) {
  let /** ?function(?string):boolean */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_commons_IsCallbackPropertyHandler_$LambdaAdaptor, $function(arg0));
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
IsCallbackPropertyHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.commons.IsCallbackPropertyHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=IsCallbackPropertyHandler$$LambdaAdaptor.js.map
