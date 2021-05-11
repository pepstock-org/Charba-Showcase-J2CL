goog.module('org.pepstock.charba.client.items.LegendItem.LegendItemFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let LegendItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<LegendItem>}
 */
class LegendItemFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LegendItemFactory} */
 static $create__() {
  LegendItemFactory.$clinit();
  let $instance = new LegendItemFactory();
  $instance.$ctor__org_pepstock_charba_client_items_LegendItem_LegendItemFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_LegendItem_LegendItemFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {LegendItem} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return LegendItem.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {LegendItem} */
 m_create__() {
  return /**@type {LegendItem}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), LegendItem));
 }
 
 static $clinit() {
  LegendItemFactory.$clinit = () =>{};
  LegendItemFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LegendItemFactory;
 }
 
 static $loadModules() {
  LegendItem = goog.module.get('org.pepstock.charba.client.items.LegendItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(LegendItemFactory);
$Util.$setClassMetadata(LegendItemFactory, "org.pepstock.charba.client.items.LegendItem$LegendItemFactory");

exports = LegendItemFactory;

//# sourceMappingURL=LegendItem$LegendItemFactory.js.map
