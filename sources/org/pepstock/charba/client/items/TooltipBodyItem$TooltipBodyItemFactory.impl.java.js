goog.module('org.pepstock.charba.client.items.TooltipBodyItem.TooltipBodyItemFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let TooltipBodyItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipBodyItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<TooltipBodyItem>}
 */
class TooltipBodyItemFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TooltipBodyItemFactory} */
 static $create__() {
  TooltipBodyItemFactory.$clinit();
  let $instance = new TooltipBodyItemFactory();
  $instance.$ctor__org_pepstock_charba_client_items_TooltipBodyItem_TooltipBodyItemFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_TooltipBodyItem_TooltipBodyItemFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {TooltipBodyItem} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return TooltipBodyItem.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {TooltipBodyItem} */
 m_create__() {
  return /**@type {TooltipBodyItem}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), TooltipBodyItem));
 }
 
 static $clinit() {
  TooltipBodyItemFactory.$clinit = () =>{};
  TooltipBodyItemFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TooltipBodyItemFactory;
 }
 
 static $loadModules() {
  TooltipBodyItem = goog.module.get('org.pepstock.charba.client.items.TooltipBodyItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(TooltipBodyItemFactory);
$Util.$setClassMetadata(TooltipBodyItemFactory, "org.pepstock.charba.client.items.TooltipBodyItem$TooltipBodyItemFactory");

exports = TooltipBodyItemFactory;

//# sourceMappingURL=TooltipBodyItem$TooltipBodyItemFactory.js.map
