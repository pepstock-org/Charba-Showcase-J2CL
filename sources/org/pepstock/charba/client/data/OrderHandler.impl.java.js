goog.module('org.pepstock.charba.client.data.OrderHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Property = goog.forwardDeclare('org.pepstock.charba.client.data.OrderHandler.Property$impl');

class OrderHandler extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!OrderHandler} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  OrderHandler.$clinit();
  let $instance = new OrderHandler();
  $instance.$ctor__org_pepstock_charba_client_data_OrderHandler__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_OrderHandler__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 m_setOrder__int_$pp_org_pepstock_charba_client_data(/** number */ order) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_ORDER__org_pepstock_charba_client_data_OrderHandler_Property, order);
 }
 /** @return {number} */
 m_getOrder___$pp_org_pepstock_charba_client_data() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_ORDER__org_pepstock_charba_client_data_OrderHandler_Property, OrderHandler.f_DEFAULT_ORDER__org_pepstock_charba_client_data_OrderHandler);
 }
 
 static $clinit() {
  OrderHandler.$clinit = () =>{};
  OrderHandler.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OrderHandler;
 }
 
 static $loadModules() {
  Property = goog.module.get('org.pepstock.charba.client.data.OrderHandler.Property$impl');
 }
}
/**@const {number}*/
OrderHandler.f_DEFAULT_ORDER__org_pepstock_charba_client_data_OrderHandler = 0;
$Util.$setClassMetadata(OrderHandler, "org.pepstock.charba.client.data.OrderHandler");

exports = OrderHandler;

//# sourceMappingURL=OrderHandler.js.map
