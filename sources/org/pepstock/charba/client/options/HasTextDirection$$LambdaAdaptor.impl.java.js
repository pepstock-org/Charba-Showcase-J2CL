goog.module('org.pepstock.charba.client.options.HasTextDirection.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasTextDirection = goog.require('org.pepstock.charba.client.options.HasTextDirection$impl');

let TextDirection = goog.forwardDeclare('org.pepstock.charba.client.enums.TextDirection$impl');
let TextDirectionHandler = goog.forwardDeclare('org.pepstock.charba.client.options.TextDirectionHandler$impl');

/**
 * @implements {HasTextDirection}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():TextDirectionHandler */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():TextDirectionHandler}*/
  this.f_fn__org_pepstock_charba_client_options_HasTextDirection_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_options_HasTextDirection_$LambdaAdaptor__org_pepstock_charba_client_options_HasTextDirection_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_options_HasTextDirection_$LambdaAdaptor__org_pepstock_charba_client_options_HasTextDirection_$JsFunction(/** ?function():TextDirectionHandler */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_options_HasTextDirection_$LambdaAdaptor = fn;
 }
 /** @override @return {TextDirectionHandler} */
 m_getTextDirectionHandler__() {
  let /** ?function():TextDirectionHandler */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_options_HasTextDirection_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {TextDirection} */
 m_getTextDirection__() {
  return HasTextDirection.m_getTextDirection__$default__org_pepstock_charba_client_options_HasTextDirection(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isRtl__() {
  return HasTextDirection.m_isRtl__$default__org_pepstock_charba_client_options_HasTextDirection(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setRtl__boolean(/** boolean */ arg0) {
  HasTextDirection.m_setRtl__$default__org_pepstock_charba_client_options_HasTextDirection__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setTextDirection__org_pepstock_charba_client_enums_TextDirection(/** TextDirection */ arg0) {
  HasTextDirection.m_setTextDirection__$default__org_pepstock_charba_client_options_HasTextDirection__org_pepstock_charba_client_enums_TextDirection(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HasTextDirection.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
HasTextDirection.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.options.HasTextDirection$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasTextDirection$$LambdaAdaptor.js.map
