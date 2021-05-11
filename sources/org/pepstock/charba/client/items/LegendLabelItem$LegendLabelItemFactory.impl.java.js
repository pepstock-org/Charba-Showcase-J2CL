goog.module('org.pepstock.charba.client.items.LegendLabelItem.LegendLabelItemFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let LegendLabelItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendLabelItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<LegendLabelItem>}
 */
class LegendLabelItemFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LegendLabelItemFactory} */
 static $create__() {
  LegendLabelItemFactory.$clinit();
  let $instance = new LegendLabelItemFactory();
  $instance.$ctor__org_pepstock_charba_client_items_LegendLabelItem_LegendLabelItemFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_LegendLabelItem_LegendLabelItemFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {LegendLabelItem} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return LegendLabelItem.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {LegendLabelItem} */
 m_create__() {
  return /**@type {LegendLabelItem}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), LegendLabelItem));
 }
 
 static $clinit() {
  LegendLabelItemFactory.$clinit = () =>{};
  LegendLabelItemFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LegendLabelItemFactory;
 }
 
 static $loadModules() {
  LegendLabelItem = goog.module.get('org.pepstock.charba.client.items.LegendLabelItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(LegendLabelItemFactory);
$Util.$setClassMetadata(LegendLabelItemFactory, "org.pepstock.charba.client.items.LegendLabelItem$LegendLabelItemFactory");

exports = LegendLabelItemFactory;

//# sourceMappingURL=LegendLabelItem$LegendLabelItemFactory.js.map
