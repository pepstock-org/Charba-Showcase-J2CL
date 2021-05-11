goog.module('org.pepstock.charba.client.impl.plugins.enums.IsEnumeratedScheme.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsEnumeratedScheme = goog.require('org.pepstock.charba.client.impl.plugins.enums.IsEnumeratedScheme$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let GradientOrientation = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientOrientation$impl');
let GradientScope = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientScope$impl');
let GradientType = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientType$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ColorScheme = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorScheme$impl');

/**
 * @implements {IsEnumeratedScheme}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():ColorScheme */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():ColorScheme}*/
  this.f_fn__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme_$LambdaAdaptor__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme_$LambdaAdaptor__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme_$JsFunction(/** ?function():ColorScheme */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme_$LambdaAdaptor = fn;
 }
 /** @override @return {ColorScheme} */
 m_getScheme__() {
  let /** ?function():ColorScheme */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_value__() {
  return IsEnumeratedScheme.m_value__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_category__() {
  return IsEnumeratedScheme.m_category__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme(this);
 }
 //Default method forwarding stub.
 /** @override @return {List<IsColor>} */
 m_getColors__() {
  return IsEnumeratedScheme.m_getColors__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme(this);
 }
 //Default method forwarding stub.
 /** @override @return {Gradient} */
 m_createGradient__() {
  return IsEnumeratedScheme.m_createGradient__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme(this);
 }
 //Default method forwarding stub.
 /** @override @return {Gradient} */
 m_createGradient__org_pepstock_charba_client_colors_GradientType(/** GradientType */ arg0) {
  return IsEnumeratedScheme.m_createGradient__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme__org_pepstock_charba_client_colors_GradientType(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {Gradient} */
 m_createGradient__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation(/** GradientType */ arg0, /** GradientOrientation */ arg1) {
  return IsEnumeratedScheme.m_createGradient__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @return {Gradient} */
 m_createGradient__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientScope(/** GradientType */ arg0, /** GradientScope */ arg1) {
  return IsEnumeratedScheme.m_createGradient__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientScope(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @return {Gradient} */
 m_createGradient__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope(/** GradientType */ arg0, /** GradientOrientation */ arg1, /** GradientScope */ arg2) {
  return IsEnumeratedScheme.m_createGradient__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope(this, arg0, arg1, arg2);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  IsEnumeratedScheme.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
IsEnumeratedScheme.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.impl.plugins.enums.IsEnumeratedScheme$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=IsEnumeratedScheme$$LambdaAdaptor.js.map
