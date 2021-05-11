goog.module('org.pepstock.charba.client.items.ScaleTickItem.ScaleTickItemFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let ScaleTickItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleTickItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<ScaleTickItem>}
 */
class ScaleTickItemFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ScaleTickItemFactory} */
 static $create__() {
  ScaleTickItemFactory.$clinit();
  let $instance = new ScaleTickItemFactory();
  $instance.$ctor__org_pepstock_charba_client_items_ScaleTickItem_ScaleTickItemFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_ScaleTickItem_ScaleTickItemFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {ScaleTickItem} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return ScaleTickItem.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {ScaleTickItem} */
 m_create__() {
  return /**@type {ScaleTickItem}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), ScaleTickItem));
 }
 
 static $clinit() {
  ScaleTickItemFactory.$clinit = () =>{};
  ScaleTickItemFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScaleTickItemFactory;
 }
 
 static $loadModules() {
  ScaleTickItem = goog.module.get('org.pepstock.charba.client.items.ScaleTickItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(ScaleTickItemFactory);
$Util.$setClassMetadata(ScaleTickItemFactory, "org.pepstock.charba.client.items.ScaleTickItem$ScaleTickItemFactory");

exports = ScaleTickItemFactory;

//# sourceMappingURL=ScaleTickItem$ScaleTickItemFactory.js.map
