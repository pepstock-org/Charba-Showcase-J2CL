goog.module('org.pepstock.charba.client.items.BaseBoxItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
const IsArea = goog.require('org.pepstock.charba.client.items.IsArea$impl');

let Property = goog.forwardDeclare('org.pepstock.charba.client.items.BaseBoxItem.Property$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

/**
 * @abstract
 * @implements {IsArea}
 */
class BaseBoxItem extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_items_BaseBoxItem__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @override @return {number} */
 m_getTop__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_TOP__org_pepstock_charba_client_items_BaseBoxItem_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @override @return {number} */
 m_getRight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_RIGHT__org_pepstock_charba_client_items_BaseBoxItem_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @override @return {number} */
 m_getBottom__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_BOTTOM__org_pepstock_charba_client_items_BaseBoxItem_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @override @return {number} */
 m_getLeft__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_LEFT__org_pepstock_charba_client_items_BaseBoxItem_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @override @return {number} */
 m_getWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_WIDTH__org_pepstock_charba_client_items_BaseBoxItem_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @override @return {number} */
 m_getHeight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_HEIGHT__org_pepstock_charba_client_items_BaseBoxItem_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {boolean} */
 m_isInside__org_pepstock_charba_client_dom_BaseNativeEvent(/** Object */ event) {
  if (IsArea.m_isConsistent__org_pepstock_charba_client_items_IsArea(this)) {
   let isX = event.layerX >= this.m_getLeft__() && event.layerX <= this.m_getRight__();
   let isY = event.layerY >= this.m_getTop__() && event.layerY <= this.m_getBottom__();
   return isX && isY;
  }
  return false;
 }
 
 static $clinit() {
  BaseBoxItem.$clinit = () =>{};
  BaseBoxItem.$loadModules();
  NativeObjectContainer.$clinit();
  IsArea.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseBoxItem;
 }
 
 static $loadModules() {
  Property = goog.module.get('org.pepstock.charba.client.items.BaseBoxItem.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
IsArea.$markImplementor(BaseBoxItem);
$Util.$setClassMetadata(BaseBoxItem, "org.pepstock.charba.client.items.BaseBoxItem");

exports = BaseBoxItem;

//# sourceMappingURL=BaseBoxItem.js.map
