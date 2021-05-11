goog.module('org.pepstock.charba.client.items.ItemsEnvelop$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ImmutableEnvelop = goog.require('org.pepstock.charba.client.commons.ImmutableEnvelop$impl');

/**
 * @template T
 * @extends {ImmutableEnvelop<T>}
 */
class ItemsEnvelop extends ImmutableEnvelop {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'ItemsEnvelop(Object)'.
 /** @template T @return {!ItemsEnvelop<T>} */
 static $create__java_lang_Object(/** T */ content) {
  ItemsEnvelop.$clinit();
  let $instance = new ItemsEnvelop();
  $instance.$ctor__org_pepstock_charba_client_items_ItemsEnvelop__java_lang_Object(content);
  return $instance;
 }
 //Initialization from constructor 'ItemsEnvelop(Object)'.
 
 $ctor__org_pepstock_charba_client_items_ItemsEnvelop__java_lang_Object(/** T */ content) {
  this.$ctor__org_pepstock_charba_client_items_ItemsEnvelop__java_lang_Object__boolean(content, false);
 }
 //Factory method corresponding to constructor 'ItemsEnvelop(Object, boolean)'.
 /** @template T @return {!ItemsEnvelop<T>} */
 static $create__java_lang_Object__boolean(/** T */ content, /** boolean */ nullable) {
  ItemsEnvelop.$clinit();
  let $instance = new ItemsEnvelop();
  $instance.$ctor__org_pepstock_charba_client_items_ItemsEnvelop__java_lang_Object__boolean(content, nullable);
  return $instance;
 }
 //Initialization from constructor 'ItemsEnvelop(Object, boolean)'.
 
 $ctor__org_pepstock_charba_client_items_ItemsEnvelop__java_lang_Object__boolean(/** T */ content, /** boolean */ nullable) {
  this.$ctor__org_pepstock_charba_client_commons_ImmutableEnvelop__java_lang_Object__boolean(content, nullable);
 }
 
 static $clinit() {
  ItemsEnvelop.$clinit = () =>{};
  ItemsEnvelop.$loadModules();
  ImmutableEnvelop.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ItemsEnvelop;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(ItemsEnvelop, "org.pepstock.charba.client.items.ItemsEnvelop");

exports = ItemsEnvelop;

//# sourceMappingURL=ItemsEnvelop.js.map
