goog.module('org.pepstock.charba.client.items.LegendHitBoxItem.LegendHitBoxItemFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let LegendHitBoxItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendHitBoxItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<LegendHitBoxItem>}
 */
class LegendHitBoxItemFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LegendHitBoxItemFactory} */
 static $create__() {
  LegendHitBoxItemFactory.$clinit();
  let $instance = new LegendHitBoxItemFactory();
  $instance.$ctor__org_pepstock_charba_client_items_LegendHitBoxItem_LegendHitBoxItemFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_LegendHitBoxItem_LegendHitBoxItemFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {LegendHitBoxItem} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return LegendHitBoxItem.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {LegendHitBoxItem} */
 m_create__() {
  return /**@type {LegendHitBoxItem}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), LegendHitBoxItem));
 }
 
 static $clinit() {
  LegendHitBoxItemFactory.$clinit = () =>{};
  LegendHitBoxItemFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LegendHitBoxItemFactory;
 }
 
 static $loadModules() {
  LegendHitBoxItem = goog.module.get('org.pepstock.charba.client.items.LegendHitBoxItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(LegendHitBoxItemFactory);
$Util.$setClassMetadata(LegendHitBoxItemFactory, "org.pepstock.charba.client.items.LegendHitBoxItem$LegendHitBoxItemFactory");

exports = LegendHitBoxItemFactory;

//# sourceMappingURL=LegendHitBoxItem$LegendHitBoxItemFactory.js.map
