goog.module('org.pepstock.charba.client.options.HasBox.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasBox = goog.require('org.pepstock.charba.client.options.HasBox$impl');

let BoxHandler = goog.forwardDeclare('org.pepstock.charba.client.options.BoxHandler$impl');

/**
 * @implements {HasBox}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():BoxHandler */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():BoxHandler}*/
  this.f_fn__org_pepstock_charba_client_options_HasBox_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_options_HasBox_$LambdaAdaptor__org_pepstock_charba_client_options_HasBox_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_options_HasBox_$LambdaAdaptor__org_pepstock_charba_client_options_HasBox_$JsFunction(/** ?function():BoxHandler */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_options_HasBox_$LambdaAdaptor = fn;
 }
 /** @override @return {BoxHandler} */
 m_getBoxHandler__() {
  let /** ?function():BoxHandler */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_options_HasBox_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBoxHeight__() {
  return HasBox.m_getBoxHeight__$default__org_pepstock_charba_client_options_HasBox(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBoxWidth__() {
  return HasBox.m_getBoxWidth__$default__org_pepstock_charba_client_options_HasBox(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBoxHeight__int(/** number */ arg0) {
  HasBox.m_setBoxHeight__$default__org_pepstock_charba_client_options_HasBox__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBoxWidth__int(/** number */ arg0) {
  HasBox.m_setBoxWidth__$default__org_pepstock_charba_client_options_HasBox__int(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HasBox.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
HasBox.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.options.HasBox$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasBox$$LambdaAdaptor.js.map
