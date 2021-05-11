goog.module('org.pepstock.charba.client.items.DatasetElement.DatasetItemFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let DatasetElement = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetElement$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<DatasetElement>}
 */
class DatasetItemFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DatasetItemFactory} */
 static $create__() {
  DatasetItemFactory.$clinit();
  let $instance = new DatasetItemFactory();
  $instance.$ctor__org_pepstock_charba_client_items_DatasetElement_DatasetItemFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_DatasetElement_DatasetItemFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {DatasetElement} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return DatasetElement.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {DatasetElement} */
 m_create__() {
  return /**@type {DatasetElement}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), DatasetElement));
 }
 
 static $clinit() {
  DatasetItemFactory.$clinit = () =>{};
  DatasetItemFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetItemFactory;
 }
 
 static $loadModules() {
  DatasetElement = goog.module.get('org.pepstock.charba.client.items.DatasetElement$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(DatasetItemFactory);
$Util.$setClassMetadata(DatasetItemFactory, "org.pepstock.charba.client.items.DatasetElement$DatasetItemFactory");

exports = DatasetItemFactory;

//# sourceMappingURL=DatasetElement$DatasetItemFactory.js.map
