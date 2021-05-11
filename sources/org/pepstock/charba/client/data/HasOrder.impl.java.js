goog.module('org.pepstock.charba.client.data.HasOrder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.data.HasOrder.$LambdaAdaptor$impl');
let OrderHandler = goog.forwardDeclare('org.pepstock.charba.client.data.OrderHandler$impl');

/**
 * @interface
 */
class HasOrder {
 /** @abstract @return {OrderHandler} */
 m_getOrderHandler__() {}
 /** @abstract */
 m_setOrder__int(/** number */ order) {}
 /** @abstract @return {number} */
 m_getOrder__() {}
 /** @return {HasOrder} */
 static $adapt(/** ?function():OrderHandler */ fn) {
  HasOrder.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_setOrder__$default__org_pepstock_charba_client_data_HasOrder__int(/** !HasOrder */ $thisArg, /** number */ order) {
  HasOrder.$clinit();
  if (!$Equality.$same($thisArg.m_getOrderHandler__(), null)) {
   $thisArg.m_getOrderHandler__().m_setOrder__int_$pp_org_pepstock_charba_client_data(order);
  }
 }
 /** @return {number} */
 static m_getOrder__$default__org_pepstock_charba_client_data_HasOrder(/** !HasOrder */ $thisArg) {
  HasOrder.$clinit();
  if (!$Equality.$same($thisArg.m_getOrderHandler__(), null)) {
   return $thisArg.m_getOrderHandler__().m_getOrder___$pp_org_pepstock_charba_client_data();
  }
  return OrderHandler.f_DEFAULT_ORDER__org_pepstock_charba_client_data_OrderHandler;
 }
 
 static $clinit() {
  HasOrder.$clinit = () =>{};
  HasOrder.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_data_HasOrder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_data_HasOrder;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.data.HasOrder.$LambdaAdaptor$impl');
  OrderHandler = goog.module.get('org.pepstock.charba.client.data.OrderHandler$impl');
 }
}
HasOrder.$markImplementor(/**@type {Function}*/ (HasOrder));
$Util.$setClassMetadataForInterface(HasOrder, "org.pepstock.charba.client.data.HasOrder");

exports = HasOrder;

//# sourceMappingURL=HasOrder.js.map
