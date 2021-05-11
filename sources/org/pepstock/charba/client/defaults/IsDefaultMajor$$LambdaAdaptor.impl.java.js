goog.module('org.pepstock.charba.client.defaults.IsDefaultMajor.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultMajor = goog.require('org.pepstock.charba.client.defaults.IsDefaultMajor$impl');

/**
 * @implements {IsDefaultMajor}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():boolean}*/
  this.f_fn__org_pepstock_charba_client_defaults_IsDefaultMajor_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_defaults_IsDefaultMajor_$LambdaAdaptor__org_pepstock_charba_client_defaults_IsDefaultMajor_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_defaults_IsDefaultMajor_$LambdaAdaptor__org_pepstock_charba_client_defaults_IsDefaultMajor_$JsFunction(/** ?function():boolean */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_defaults_IsDefaultMajor_$LambdaAdaptor = fn;
 }
 /** @override @return {boolean} */
 m_isEnabled__() {
  let /** ?function():boolean */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_defaults_IsDefaultMajor_$LambdaAdaptor, $function());
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
IsDefaultMajor.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.defaults.IsDefaultMajor$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=IsDefaultMajor$$LambdaAdaptor.js.map
