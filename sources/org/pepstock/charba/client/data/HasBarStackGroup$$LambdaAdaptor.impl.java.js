goog.module('org.pepstock.charba.client.data.HasBarStackGroup.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasBarStackGroup = goog.require('org.pepstock.charba.client.data.HasBarStackGroup$impl');

let BarStackHandler = goog.forwardDeclare('org.pepstock.charba.client.data.BarStackHandler$impl');

/**
 * @implements {HasBarStackGroup}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():BarStackHandler */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():BarStackHandler}*/
  this.f_fn__org_pepstock_charba_client_data_HasBarStackGroup_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_data_HasBarStackGroup_$LambdaAdaptor__org_pepstock_charba_client_data_HasBarStackGroup_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_data_HasBarStackGroup_$LambdaAdaptor__org_pepstock_charba_client_data_HasBarStackGroup_$JsFunction(/** ?function():BarStackHandler */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_data_HasBarStackGroup_$LambdaAdaptor = fn;
 }
 /** @override @return {BarStackHandler} */
 m_getBarStackHandler__() {
  let /** ?function():BarStackHandler */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_data_HasBarStackGroup_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getStackGroup__() {
  return HasBarStackGroup.m_getStackGroup__$default__org_pepstock_charba_client_data_HasBarStackGroup(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setStackGroup__java_lang_String(/** ?string */ arg0) {
  HasBarStackGroup.m_setStackGroup__$default__org_pepstock_charba_client_data_HasBarStackGroup__java_lang_String(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HasBarStackGroup.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
HasBarStackGroup.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.data.HasBarStackGroup$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasBarStackGroup$$LambdaAdaptor.js.map
