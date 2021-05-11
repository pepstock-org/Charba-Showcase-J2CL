goog.module('org.pepstock.charba.client.callbacks.CategoryTickCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CategoryTickCallback = goog.require('org.pepstock.charba.client.callbacks.CategoryTickCallback$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');

/**
 * @implements {CategoryTickCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(Axis, ?string, number, List<?string>):?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Axis, ?string, number, List<?string>):?string}*/
  this.f_fn__org_pepstock_charba_client_callbacks_CategoryTickCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_CategoryTickCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_CategoryTickCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_CategoryTickCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_CategoryTickCallback_$JsFunction(/** ?function(Axis, ?string, number, List<?string>):?string */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_CategoryTickCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {?string} */
 m_onCallback__org_pepstock_charba_client_configuration_Axis__java_lang_String__int__java_util_List(/** Axis */ arg0, /** ?string */ arg1, /** number */ arg2, /** List<?string> */ arg3) {
  let /** ?function(Axis, ?string, number, List<?string>):?string */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_CategoryTickCallback_$LambdaAdaptor, $function(arg0, arg1, arg2, arg3));
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
CategoryTickCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.CategoryTickCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=CategoryTickCallback$$LambdaAdaptor.js.map
