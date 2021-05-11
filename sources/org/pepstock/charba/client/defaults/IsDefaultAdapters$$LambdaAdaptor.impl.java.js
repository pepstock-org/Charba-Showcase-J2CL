goog.module('org.pepstock.charba.client.defaults.IsDefaultAdapters.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAdapters = goog.require('org.pepstock.charba.client.defaults.IsDefaultAdapters$impl');

let IsDefaultDateAdapterOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultDateAdapterOptions$impl');

/**
 * @implements {IsDefaultAdapters}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():IsDefaultDateAdapterOptions */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():IsDefaultDateAdapterOptions}*/
  this.f_fn__org_pepstock_charba_client_defaults_IsDefaultAdapters_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_defaults_IsDefaultAdapters_$LambdaAdaptor__org_pepstock_charba_client_defaults_IsDefaultAdapters_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_defaults_IsDefaultAdapters_$LambdaAdaptor__org_pepstock_charba_client_defaults_IsDefaultAdapters_$JsFunction(/** ?function():IsDefaultDateAdapterOptions */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_defaults_IsDefaultAdapters_$LambdaAdaptor = fn;
 }
 /** @override @return {IsDefaultDateAdapterOptions} */
 m_getDate__() {
  let /** ?function():IsDefaultDateAdapterOptions */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_defaults_IsDefaultAdapters_$LambdaAdaptor, $function());
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
IsDefaultAdapters.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.defaults.IsDefaultAdapters$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=IsDefaultAdapters$$LambdaAdaptor.js.map
