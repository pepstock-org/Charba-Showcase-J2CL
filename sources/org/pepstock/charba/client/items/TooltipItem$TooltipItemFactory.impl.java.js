goog.module('org.pepstock.charba.client.items.TooltipItem.TooltipItemFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<TooltipItem>}
 */
class TooltipItemFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TooltipItemFactory} */
 static $create__() {
  TooltipItemFactory.$clinit();
  let $instance = new TooltipItemFactory();
  $instance.$ctor__org_pepstock_charba_client_items_TooltipItem_TooltipItemFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_TooltipItem_TooltipItemFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {TooltipItem} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return TooltipItem.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {TooltipItem} */
 m_create__() {
  return /**@type {TooltipItem}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), TooltipItem));
 }
 
 static $clinit() {
  TooltipItemFactory.$clinit = () =>{};
  TooltipItemFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TooltipItemFactory;
 }
 
 static $loadModules() {
  TooltipItem = goog.module.get('org.pepstock.charba.client.items.TooltipItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(TooltipItemFactory);
$Util.$setClassMetadata(TooltipItemFactory, "org.pepstock.charba.client.items.TooltipItem$TooltipItemFactory");

exports = TooltipItemFactory;

//# sourceMappingURL=TooltipItem$TooltipItemFactory.js.map
