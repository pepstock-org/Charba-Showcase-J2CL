goog.module('org.pepstock.charba.client.zoom.EventPoint$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.zoom.EventPoint.Property$impl');

class EventPoint extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!EventPoint} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  EventPoint.$clinit();
  let $instance = new EventPoint();
  $instance.$ctor__org_pepstock_charba_client_zoom_EventPoint__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_EventPoint__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {number} */
 m_getX__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_X__org_pepstock_charba_client_zoom_EventPoint_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getY__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_Y__org_pepstock_charba_client_zoom_EventPoint_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 
 static $clinit() {
  EventPoint.$clinit = () =>{};
  EventPoint.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EventPoint;
 }
 
 static $loadModules() {
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Property = goog.module.get('org.pepstock.charba.client.zoom.EventPoint.Property$impl');
 }
}
$Util.$setClassMetadata(EventPoint, "org.pepstock.charba.client.zoom.EventPoint");

exports = EventPoint;

//# sourceMappingURL=EventPoint.js.map
