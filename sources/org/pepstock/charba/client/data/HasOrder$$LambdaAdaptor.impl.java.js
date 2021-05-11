goog.module('org.pepstock.charba.client.data.HasOrder.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasOrder = goog.require('org.pepstock.charba.client.data.HasOrder$impl');

let OrderHandler = goog.forwardDeclare('org.pepstock.charba.client.data.OrderHandler$impl');

/**
 * @implements {HasOrder}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():OrderHandler */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():OrderHandler}*/
  this.f_fn__org_pepstock_charba_client_data_HasOrder_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_data_HasOrder_$LambdaAdaptor__org_pepstock_charba_client_data_HasOrder_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_data_HasOrder_$LambdaAdaptor__org_pepstock_charba_client_data_HasOrder_$JsFunction(/** ?function():OrderHandler */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_data_HasOrder_$LambdaAdaptor = fn;
 }
 /** @override @return {OrderHandler} */
 m_getOrderHandler__() {
  let /** ?function():OrderHandler */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_data_HasOrder_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getOrder__() {
  return HasOrder.m_getOrder__$default__org_pepstock_charba_client_data_HasOrder(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setOrder__int(/** number */ arg0) {
  HasOrder.m_setOrder__$default__org_pepstock_charba_client_data_HasOrder__int(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HasOrder.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
HasOrder.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.data.HasOrder$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasOrder$$LambdaAdaptor.js.map
