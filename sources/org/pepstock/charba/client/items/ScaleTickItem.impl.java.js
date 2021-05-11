goog.module('org.pepstock.charba.client.items.ScaleTickItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleTickItem.Property$impl');
let ScaleTickItemFactory = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleTickItem.ScaleTickItemFactory$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

class ScaleTickItem extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ScaleTickItem} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  ScaleTickItem.$clinit();
  let $instance = new ScaleTickItem();
  $instance.$ctor__org_pepstock_charba_client_items_ScaleTickItem__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_ScaleTickItem__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {?string} */
 m_getLabel__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_LABEL__org_pepstock_charba_client_items_ScaleTickItem_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getValue__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__double(Property.f_VALUE__org_pepstock_charba_client_items_ScaleTickItem_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {?string} */
 m_getValueAsString__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_VALUE__org_pepstock_charba_client_items_ScaleTickItem_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {Date} */
 m_getValueAsDate__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_VALUE__org_pepstock_charba_client_items_ScaleTickItem_Property, /**@type {Date}*/ (null));
 }
 /** @return {boolean} */
 m_isMajor__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_MAJOR__org_pepstock_charba_client_items_ScaleTickItem_Property, Undefined.f_BOOLEAN__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {ScaleTickItemFactory} */
 static get f_FACTORY__org_pepstock_charba_client_items_ScaleTickItem() {
  return (ScaleTickItem.$clinit(), ScaleTickItem.$static_FACTORY__org_pepstock_charba_client_items_ScaleTickItem);
 }
 
 static $clinit() {
  ScaleTickItem.$clinit = () =>{};
  ScaleTickItem.$loadModules();
  NativeObjectContainer.$clinit();
  ScaleTickItem.$static_FACTORY__org_pepstock_charba_client_items_ScaleTickItem = ScaleTickItemFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScaleTickItem;
 }
 
 static $loadModules() {
  Property = goog.module.get('org.pepstock.charba.client.items.ScaleTickItem.Property$impl');
  ScaleTickItemFactory = goog.module.get('org.pepstock.charba.client.items.ScaleTickItem.ScaleTickItemFactory$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
/**@private {ScaleTickItemFactory}*/
ScaleTickItem.$static_FACTORY__org_pepstock_charba_client_items_ScaleTickItem;
$Util.$setClassMetadata(ScaleTickItem, "org.pepstock.charba.client.items.ScaleTickItem");

exports = ScaleTickItem;

//# sourceMappingURL=ScaleTickItem.js.map
