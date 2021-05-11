goog.module('org.pepstock.charba.client.items.DatasetReference.DatasetReferenceItemFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let DatasetReference = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetReference$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<DatasetReference>}
 */
class DatasetReferenceItemFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DatasetReferenceItemFactory} */
 static $create__() {
  DatasetReferenceItemFactory.$clinit();
  let $instance = new DatasetReferenceItemFactory();
  $instance.$ctor__org_pepstock_charba_client_items_DatasetReference_DatasetReferenceItemFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_DatasetReference_DatasetReferenceItemFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {DatasetReference} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return DatasetReference.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {DatasetReference} */
 m_create__() {
  return /**@type {DatasetReference}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), DatasetReference));
 }
 
 static $clinit() {
  DatasetReferenceItemFactory.$clinit = () =>{};
  DatasetReferenceItemFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetReferenceItemFactory;
 }
 
 static $loadModules() {
  DatasetReference = goog.module.get('org.pepstock.charba.client.items.DatasetReference$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(DatasetReferenceItemFactory);
$Util.$setClassMetadata(DatasetReferenceItemFactory, "org.pepstock.charba.client.items.DatasetReference$DatasetReferenceItemFactory");

exports = DatasetReferenceItemFactory;

//# sourceMappingURL=DatasetReference$DatasetReferenceItemFactory.js.map
