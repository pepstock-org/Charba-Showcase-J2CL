goog.module('org.pepstock.charba.client.items.LegendHitBoxItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SizeItem = goog.require('org.pepstock.charba.client.items.SizeItem$impl');

let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let LegendHitBoxItemFactory = goog.forwardDeclare('org.pepstock.charba.client.items.LegendHitBoxItem.LegendHitBoxItemFactory$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

class LegendHitBoxItem extends SizeItem {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LegendHitBoxItem} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  LegendHitBoxItem.$clinit();
  let $instance = new LegendHitBoxItem();
  $instance.$ctor__org_pepstock_charba_client_items_LegendHitBoxItem__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_LegendHitBoxItem__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_items_SizeItem__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {number} */
 m_getLeft__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Position.f_LEFT__org_pepstock_charba_client_enums_Position, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getTop__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Position.f_TOP__org_pepstock_charba_client_enums_Position, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {boolean} */
 m_isInside__org_pepstock_charba_client_dom_BaseNativeEvent(/** Object */ event) {
  if (this.m_has__org_pepstock_charba_client_commons_Key(Position.f_LEFT__org_pepstock_charba_client_enums_Position) && this.m_has__org_pepstock_charba_client_commons_Key(Position.f_TOP__org_pepstock_charba_client_enums_Position)) {
   let isX = event.layerX >= this.m_getLeft__() && event.layerX <= this.m_getLeft__() + this.m_getWidth__();
   let isY = event.layerY >= this.m_getTop__() && event.layerY <= this.m_getTop__() + this.m_getHeight__();
   return isX && isY;
  }
  return false;
 }
 /** @return {LegendHitBoxItemFactory} */
 static get f_FACTORY__org_pepstock_charba_client_items_LegendHitBoxItem() {
  return (LegendHitBoxItem.$clinit(), LegendHitBoxItem.$static_FACTORY__org_pepstock_charba_client_items_LegendHitBoxItem);
 }
 
 static $clinit() {
  LegendHitBoxItem.$clinit = () =>{};
  LegendHitBoxItem.$loadModules();
  SizeItem.$clinit();
  LegendHitBoxItem.$static_FACTORY__org_pepstock_charba_client_items_LegendHitBoxItem = LegendHitBoxItemFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LegendHitBoxItem;
 }
 
 static $loadModules() {
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  LegendHitBoxItemFactory = goog.module.get('org.pepstock.charba.client.items.LegendHitBoxItem.LegendHitBoxItemFactory$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
/**@private {LegendHitBoxItemFactory}*/
LegendHitBoxItem.$static_FACTORY__org_pepstock_charba_client_items_LegendHitBoxItem;
$Util.$setClassMetadata(LegendHitBoxItem, "org.pepstock.charba.client.items.LegendHitBoxItem");

exports = LegendHitBoxItem;

//# sourceMappingURL=LegendHitBoxItem.js.map
