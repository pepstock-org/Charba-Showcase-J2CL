goog.module('org.pepstock.charba.client.items.BaseBoxNodeItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseBoxItem = goog.require('org.pepstock.charba.client.items.BaseBoxItem$impl');

let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.BaseBoxNodeItem.Property$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 */
class BaseBoxNodeItem extends BaseBoxItem {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_items_BaseBoxNodeItem__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_items_BaseBoxItem__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {boolean} */
 m_isActive__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ACTIVE__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Undefined.f_BOOLEAN__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {boolean} */
 m_isFullSize__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_FULL_SIZE__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Undefined.f_BOOLEAN__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {Position} */
 m_getPosition__() {
  return /**@type {Position}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POSITION__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Position.m_values__(), Position.f_TOP__org_pepstock_charba_client_enums_Position), Position));
 }
 /** @return {number} */
 m_getWeight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_WEIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getMaxWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_MAX_WIDTH__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getMaxHeight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_MAX_HEIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getPaddingTop__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_PADDING_TOP__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getPaddingRight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_PADDING_RIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getPaddingBottom__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_PADDING_BOTTOM__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getPaddingLeft__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_PADDING_LEFT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 
 static $clinit() {
  BaseBoxNodeItem.$clinit = () =>{};
  BaseBoxNodeItem.$loadModules();
  BaseBoxItem.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseBoxNodeItem;
 }
 
 static $loadModules() {
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.BaseBoxNodeItem.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(BaseBoxNodeItem, "org.pepstock.charba.client.items.BaseBoxNodeItem");

exports = BaseBoxNodeItem;

//# sourceMappingURL=BaseBoxNodeItem.js.map
