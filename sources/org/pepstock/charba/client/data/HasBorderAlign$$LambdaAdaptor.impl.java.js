goog.module('org.pepstock.charba.client.data.HasBorderAlign.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasBorderAlign = goog.require('org.pepstock.charba.client.data.HasBorderAlign$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let BorderAlignCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderAlignCallback$impl');
let BorderAlignHandler = goog.forwardDeclare('org.pepstock.charba.client.data.BorderAlignHandler$impl');
let BorderAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderAlign$impl');

/**
 * @implements {HasBorderAlign}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():BorderAlignHandler */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():BorderAlignHandler}*/
  this.f_fn__org_pepstock_charba_client_data_HasBorderAlign_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_data_HasBorderAlign_$LambdaAdaptor__org_pepstock_charba_client_data_HasBorderAlign_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_data_HasBorderAlign_$LambdaAdaptor__org_pepstock_charba_client_data_HasBorderAlign_$JsFunction(/** ?function():BorderAlignHandler */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_data_HasBorderAlign_$LambdaAdaptor = fn;
 }
 /** @override @return {BorderAlignHandler} */
 m_getBorderAlignHandler__() {
  let /** ?function():BorderAlignHandler */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_data_HasBorderAlign_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {List<BorderAlign>} */
 m_getBorderAlign__() {
  return HasBorderAlign.m_getBorderAlign__$default__org_pepstock_charba_client_data_HasBorderAlign(this);
 }
 //Default method forwarding stub.
 /** @override @return {BorderAlignCallback} */
 m_getBorderAlignCallback__() {
  return HasBorderAlign.m_getBorderAlignCallback__$default__org_pepstock_charba_client_data_HasBorderAlign(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBorderAlign__arrayOf_org_pepstock_charba_client_enums_BorderAlign(/** Array<BorderAlign> */ arg0) {
  HasBorderAlign.m_setBorderAlign__$default__org_pepstock_charba_client_data_HasBorderAlign__arrayOf_org_pepstock_charba_client_enums_BorderAlign(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBorderAlign__java_util_List(/** List<BorderAlign> */ arg0) {
  HasBorderAlign.m_setBorderAlign__$default__org_pepstock_charba_client_data_HasBorderAlign__java_util_List(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBorderAlign__org_pepstock_charba_client_callbacks_BorderAlignCallback(/** BorderAlignCallback */ arg0) {
  HasBorderAlign.m_setBorderAlign__$default__org_pepstock_charba_client_data_HasBorderAlign__org_pepstock_charba_client_callbacks_BorderAlignCallback(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBorderAlign__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ arg0) {
  HasBorderAlign.m_setBorderAlign__$default__org_pepstock_charba_client_data_HasBorderAlign__org_pepstock_charba_client_callbacks_NativeCallback(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HasBorderAlign.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
HasBorderAlign.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.data.HasBorderAlign$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasBorderAlign$$LambdaAdaptor.js.map
