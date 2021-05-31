goog.module('org.pepstock.charba.client.commons.HasCallbackScope.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCallbackScope = goog.require('org.pepstock.charba.client.commons.HasCallbackScope$impl');

/**
 * @implements {HasCallbackScope}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():?string}*/
  this.f_fn__org_pepstock_charba_client_commons_HasCallbackScope_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_commons_HasCallbackScope_$LambdaAdaptor__org_pepstock_charba_client_commons_HasCallbackScope_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_commons_HasCallbackScope_$LambdaAdaptor__org_pepstock_charba_client_commons_HasCallbackScope_$JsFunction(/** ?function():?string */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_commons_HasCallbackScope_$LambdaAdaptor = fn;
 }
 /** @override @return {?string} */
 m_getScope__() {
  let /** ?function():?string */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_commons_HasCallbackScope_$LambdaAdaptor, $function());
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
HasCallbackScope.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.commons.HasCallbackScope$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasCallbackScope$$LambdaAdaptor.js.map
