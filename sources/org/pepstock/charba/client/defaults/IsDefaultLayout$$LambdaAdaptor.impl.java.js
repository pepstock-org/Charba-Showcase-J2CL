goog.module('org.pepstock.charba.client.defaults.IsDefaultLayout.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultLayout = goog.require('org.pepstock.charba.client.defaults.IsDefaultLayout$impl');

let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');

/**
 * @implements {IsDefaultLayout}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():IsDefaultPadding */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():IsDefaultPadding}*/
  this.f_fn__org_pepstock_charba_client_defaults_IsDefaultLayout_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_defaults_IsDefaultLayout_$LambdaAdaptor__org_pepstock_charba_client_defaults_IsDefaultLayout_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_defaults_IsDefaultLayout_$LambdaAdaptor__org_pepstock_charba_client_defaults_IsDefaultLayout_$JsFunction(/** ?function():IsDefaultPadding */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_defaults_IsDefaultLayout_$LambdaAdaptor = fn;
 }
 /** @override @return {IsDefaultPadding} */
 m_getPadding__() {
  let /** ?function():IsDefaultPadding */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_defaults_IsDefaultLayout_$LambdaAdaptor, $function());
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
IsDefaultLayout.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.defaults.IsDefaultLayout$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=IsDefaultLayout$$LambdaAdaptor.js.map
