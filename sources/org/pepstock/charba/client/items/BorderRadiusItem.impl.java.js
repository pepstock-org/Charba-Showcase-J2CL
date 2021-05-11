goog.module('org.pepstock.charba.client.items.BorderRadiusItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.BorderRadiusItem.Property$impl');

class BorderRadiusItem extends AbstractNode {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BorderRadiusItem} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** ? */ nativeObject) {
  BorderRadiusItem.$clinit();
  let $instance = new BorderRadiusItem();
  $instance.$ctor__org_pepstock_charba_client_items_BorderRadiusItem__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(parent, childKey, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_BorderRadiusItem__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(parent, childKey, nativeObject);
 }
 
 m_set__int(/** number */ borderRadius) {
  this.m_setTopLeft__int(borderRadius);
  this.m_setBottomLeft__int(borderRadius);
  this.m_setTopRight__int(borderRadius);
  this.m_setBottomRight__int(borderRadius);
 }
 
 m_setTopLeft__int(/** number */ borderRadius) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_TOP_LEFT__org_pepstock_charba_client_items_BorderRadiusItem_Property, Checker.m_positiveOrZero__int(borderRadius));
 }
 /** @return {number} */
 m_getTopLeft__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_TOP_LEFT__org_pepstock_charba_client_items_BorderRadiusItem_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getBar__().m_getBorderRadius__());
 }
 
 m_setTopRight__int(/** number */ borderRadius) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_TOP_RIGHT__org_pepstock_charba_client_items_BorderRadiusItem_Property, Checker.m_positiveOrZero__int(borderRadius));
 }
 /** @return {number} */
 m_getTopRight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_TOP_RIGHT__org_pepstock_charba_client_items_BorderRadiusItem_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getBar__().m_getBorderRadius__());
 }
 
 m_setBottomLeft__int(/** number */ borderRadius) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_BOTTOM_LEFT__org_pepstock_charba_client_items_BorderRadiusItem_Property, Checker.m_positiveOrZero__int(borderRadius));
 }
 /** @return {number} */
 m_getBottomLeft__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BOTTOM_LEFT__org_pepstock_charba_client_items_BorderRadiusItem_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getBar__().m_getBorderRadius__());
 }
 
 m_setBottomRight__int(/** number */ borderRadius) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_BOTTOM_RIGHT__org_pepstock_charba_client_items_BorderRadiusItem_Property, Checker.m_positiveOrZero__int(borderRadius));
 }
 /** @return {number} */
 m_getBottomRight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BOTTOM_RIGHT__org_pepstock_charba_client_items_BorderRadiusItem_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getBar__().m_getBorderRadius__());
 }
 
 static $clinit() {
  BorderRadiusItem.$clinit = () =>{};
  BorderRadiusItem.$loadModules();
  AbstractNode.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BorderRadiusItem;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.BorderRadiusItem.Property$impl');
 }
}
$Util.$setClassMetadata(BorderRadiusItem, "org.pepstock.charba.client.items.BorderRadiusItem");

exports = BorderRadiusItem;

//# sourceMappingURL=BorderRadiusItem.js.map
