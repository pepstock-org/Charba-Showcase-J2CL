goog.module('org.pepstock.charba.client.options.HasFill.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasFill = goog.require('org.pepstock.charba.client.options.HasFill$impl');

let IsFill = goog.forwardDeclare('org.pepstock.charba.client.enums.IsFill$impl');
let FillHandler = goog.forwardDeclare('org.pepstock.charba.client.options.FillHandler$impl');

/**
 * @implements {HasFill}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():FillHandler */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():FillHandler}*/
  this.f_fn__org_pepstock_charba_client_options_HasFill_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_options_HasFill_$LambdaAdaptor__org_pepstock_charba_client_options_HasFill_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_options_HasFill_$LambdaAdaptor__org_pepstock_charba_client_options_HasFill_$JsFunction(/** ?function():FillHandler */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_options_HasFill_$LambdaAdaptor = fn;
 }
 /** @override @return {FillHandler} */
 m_getFillHandler__() {
  let /** ?function():FillHandler */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_options_HasFill_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {IsFill} */
 m_getFill__() {
  return HasFill.m_getFill__$default__org_pepstock_charba_client_options_HasFill(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setFill__boolean(/** boolean */ arg0) {
  HasFill.m_setFill__$default__org_pepstock_charba_client_options_HasFill__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setFill__int(/** number */ arg0) {
  HasFill.m_setFill__$default__org_pepstock_charba_client_options_HasFill__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setFill__java_lang_String(/** ?string */ arg0) {
  HasFill.m_setFill__$default__org_pepstock_charba_client_options_HasFill__java_lang_String(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setFill__org_pepstock_charba_client_enums_IsFill(/** IsFill */ arg0) {
  HasFill.m_setFill__$default__org_pepstock_charba_client_options_HasFill__org_pepstock_charba_client_enums_IsFill(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HasFill.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
HasFill.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.options.HasFill$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasFill$$LambdaAdaptor.js.map
