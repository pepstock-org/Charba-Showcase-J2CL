goog.module('org.pepstock.charba.client.items.DatasetReference$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let AbstractDatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.AbstractDatasetContext$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let DatasetElement = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetElement$impl');
let DatasetReferenceItemFactory = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetReference.DatasetReferenceItemFactory$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetReference.Property$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

class DatasetReference extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {DatasetElement}*/
  this.f_element__org_pepstock_charba_client_items_DatasetReference_;
 }
 //Factory method corresponding to constructor 'DatasetReference(AbstractDatasetContext, DatasetElement)'.
 /** @return {!DatasetReference} */
 static $create__org_pepstock_charba_client_callbacks_AbstractDatasetContext__org_pepstock_charba_client_items_DatasetElement(/** AbstractDatasetContext */ context, /** DatasetElement */ item) {
  DatasetReference.$clinit();
  let $instance = new DatasetReference();
  $instance.$ctor__org_pepstock_charba_client_items_DatasetReference__org_pepstock_charba_client_callbacks_AbstractDatasetContext__org_pepstock_charba_client_items_DatasetElement(context, item);
  return $instance;
 }
 //Initialization from constructor 'DatasetReference(AbstractDatasetContext, DatasetElement)'.
 
 $ctor__org_pepstock_charba_client_items_DatasetReference__org_pepstock_charba_client_callbacks_AbstractDatasetContext__org_pepstock_charba_client_items_DatasetElement(/** AbstractDatasetContext */ context, /** DatasetElement */ item) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(null);
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(context, "Scriptable context argument");
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(item, "Dataset item argument");
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_DATASET_INDEX__org_pepstock_charba_client_items_DatasetReference_Property, context.m_getDatasetIndex__());
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_INDEX__org_pepstock_charba_client_items_DatasetReference_Property, context.m_getDataIndex__());
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_ELEMENT__org_pepstock_charba_client_items_DatasetReference_Property, item);
  this.f_element__org_pepstock_charba_client_items_DatasetReference_ = item;
 }
 //Factory method corresponding to constructor 'DatasetReference(NativeObject)'.
 /** @return {!DatasetReference} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  DatasetReference.$clinit();
  let $instance = new DatasetReference();
  $instance.$ctor__org_pepstock_charba_client_items_DatasetReference__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'DatasetReference(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_items_DatasetReference__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_element__org_pepstock_charba_client_items_DatasetReference_ = DatasetElement.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_ELEMENT__org_pepstock_charba_client_items_DatasetReference_Property));
 }
 /** @return {DatasetElement} */
 m_getElement__() {
  return this.f_element__org_pepstock_charba_client_items_DatasetReference_;
 }
 /** @return {number} */
 m_getDatasetIndex__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_DATASET_INDEX__org_pepstock_charba_client_items_DatasetReference_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getIndex__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_INDEX__org_pepstock_charba_client_items_DatasetReference_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {DatasetReferenceItemFactory} */
 static get f_FACTORY__org_pepstock_charba_client_items_DatasetReference() {
  return (DatasetReference.$clinit(), DatasetReference.$static_FACTORY__org_pepstock_charba_client_items_DatasetReference);
 }
 
 static $clinit() {
  DatasetReference.$clinit = () =>{};
  DatasetReference.$loadModules();
  NativeObjectContainer.$clinit();
  DatasetReference.$static_FACTORY__org_pepstock_charba_client_items_DatasetReference = DatasetReferenceItemFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetReference;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  DatasetElement = goog.module.get('org.pepstock.charba.client.items.DatasetElement$impl');
  DatasetReferenceItemFactory = goog.module.get('org.pepstock.charba.client.items.DatasetReference.DatasetReferenceItemFactory$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.DatasetReference.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
/**@private {DatasetReferenceItemFactory}*/
DatasetReference.$static_FACTORY__org_pepstock_charba_client_items_DatasetReference;
$Util.$setClassMetadata(DatasetReference, "org.pepstock.charba.client.items.DatasetReference");

exports = DatasetReference;

//# sourceMappingURL=DatasetReference.js.map
