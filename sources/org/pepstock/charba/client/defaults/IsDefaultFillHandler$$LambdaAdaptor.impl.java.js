goog.module('org.pepstock.charba.client.defaults.IsDefaultFillHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultFillHandler = goog.require('org.pepstock.charba.client.defaults.IsDefaultFillHandler$impl');

let IsFill = goog.forwardDeclare('org.pepstock.charba.client.enums.IsFill$impl');

/**
 * @implements {IsDefaultFillHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():IsFill */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():IsFill}*/
  this.f_fn__org_pepstock_charba_client_defaults_IsDefaultFillHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_defaults_IsDefaultFillHandler_$LambdaAdaptor__org_pepstock_charba_client_defaults_IsDefaultFillHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_defaults_IsDefaultFillHandler_$LambdaAdaptor__org_pepstock_charba_client_defaults_IsDefaultFillHandler_$JsFunction(/** ?function():IsFill */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_defaults_IsDefaultFillHandler_$LambdaAdaptor = fn;
 }
 /** @override @return {IsFill} */
 m_getFill__() {
  let /** ?function():IsFill */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_defaults_IsDefaultFillHandler_$LambdaAdaptor, $function());
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
IsDefaultFillHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.defaults.IsDefaultFillHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=IsDefaultFillHandler$$LambdaAdaptor.js.map
