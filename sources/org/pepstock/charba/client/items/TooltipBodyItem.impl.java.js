goog.module('org.pepstock.charba.client.items.TooltipBodyItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipBodyItem.Property$impl');
let TooltipBodyItemFactory = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipBodyItem.TooltipBodyItemFactory$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TooltipBodyItem extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TooltipBodyItem} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  TooltipBodyItem.$clinit();
  let $instance = new TooltipBodyItem();
  $instance.$ctor__org_pepstock_charba_client_items_TooltipBodyItem__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_TooltipBodyItem__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {List<?string>} */
 m_getBefore__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_BEFORE__org_pepstock_charba_client_items_TooltipBodyItem_Property), ArrayString_$Overlay));
  return ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayString(array);
 }
 /** @return {List<?string>} */
 m_getLines__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_LINES__org_pepstock_charba_client_items_TooltipBodyItem_Property), ArrayString_$Overlay));
  return ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayString(array);
 }
 /** @return {List<?string>} */
 m_getAfter__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_AFTER__org_pepstock_charba_client_items_TooltipBodyItem_Property), ArrayString_$Overlay));
  return ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayString(array);
 }
 /** @return {TooltipBodyItemFactory} */
 static get f_FACTORY__org_pepstock_charba_client_items_TooltipBodyItem() {
  return (TooltipBodyItem.$clinit(), TooltipBodyItem.$static_FACTORY__org_pepstock_charba_client_items_TooltipBodyItem);
 }
 
 static $clinit() {
  TooltipBodyItem.$clinit = () =>{};
  TooltipBodyItem.$loadModules();
  NativeObjectContainer.$clinit();
  TooltipBodyItem.$static_FACTORY__org_pepstock_charba_client_items_TooltipBodyItem = TooltipBodyItemFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TooltipBodyItem;
 }
 
 static $loadModules() {
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.TooltipBodyItem.Property$impl');
  TooltipBodyItemFactory = goog.module.get('org.pepstock.charba.client.items.TooltipBodyItem.TooltipBodyItemFactory$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {TooltipBodyItemFactory}*/
TooltipBodyItem.$static_FACTORY__org_pepstock_charba_client_items_TooltipBodyItem;
$Util.$setClassMetadata(TooltipBodyItem, "org.pepstock.charba.client.items.TooltipBodyItem");

exports = TooltipBodyItem;

//# sourceMappingURL=TooltipBodyItem.js.map
