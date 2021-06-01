goog.module('org.pepstock.charba.client.items.ActiveDatasetElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let ActiveDatasetElementFactory = goog.forwardDeclare('org.pepstock.charba.client.items.ActiveDatasetElement.ActiveDatasetElementFactory$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.ActiveDatasetElement.Property$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

class ActiveDatasetElement extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'ActiveDatasetElement(int, int)'.
 /** @return {!ActiveDatasetElement} */
 static $create__int__int(/** number */ datasetIndex, /** number */ dataIndex) {
  ActiveDatasetElement.$clinit();
  let $instance = new ActiveDatasetElement();
  $instance.$ctor__org_pepstock_charba_client_items_ActiveDatasetElement__int__int(datasetIndex, dataIndex);
  return $instance;
 }
 //Initialization from constructor 'ActiveDatasetElement(int, int)'.
 
 $ctor__org_pepstock_charba_client_items_ActiveDatasetElement__int__int(/** number */ datasetIndex, /** number */ dataIndex) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__();
  this.m_setDatasetIndex__int(datasetIndex);
  this.m_setIndex__int(dataIndex);
 }
 //Factory method corresponding to constructor 'ActiveDatasetElement()'.
 /** @return {!ActiveDatasetElement} */
 static $create__() {
  ActiveDatasetElement.$clinit();
  let $instance = new ActiveDatasetElement();
  $instance.$ctor__org_pepstock_charba_client_items_ActiveDatasetElement__();
  return $instance;
 }
 //Initialization from constructor 'ActiveDatasetElement()'.
 
 $ctor__org_pepstock_charba_client_items_ActiveDatasetElement__() {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__();
 }
 //Factory method corresponding to constructor 'ActiveDatasetElement(NativeObject)'.
 /** @return {!ActiveDatasetElement} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  ActiveDatasetElement.$clinit();
  let $instance = new ActiveDatasetElement();
  $instance.$ctor__org_pepstock_charba_client_items_ActiveDatasetElement__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'ActiveDatasetElement(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_items_ActiveDatasetElement__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 m_setDatasetIndex__int(/** number */ datasetIndex) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_DATASET_INDEX__org_pepstock_charba_client_items_ActiveDatasetElement_Property, Checker.m_greaterThanOrZero__int__int(datasetIndex, 0));
 }
 /** @return {number} */
 m_getDatasetIndex__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_DATASET_INDEX__org_pepstock_charba_client_items_ActiveDatasetElement_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 
 m_setIndex__int(/** number */ dataIndex) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_INDEX__org_pepstock_charba_client_items_ActiveDatasetElement_Property, Checker.m_greaterThanOrZero__int__int(dataIndex, 0));
 }
 /** @return {number} */
 m_getIndex__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_INDEX__org_pepstock_charba_client_items_ActiveDatasetElement_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {ActiveDatasetElementFactory} */
 static get f_FACTORY__org_pepstock_charba_client_items_ActiveDatasetElement() {
  return (ActiveDatasetElement.$clinit(), ActiveDatasetElement.$static_FACTORY__org_pepstock_charba_client_items_ActiveDatasetElement);
 }
 
 static $clinit() {
  ActiveDatasetElement.$clinit = () =>{};
  ActiveDatasetElement.$loadModules();
  NativeObjectContainer.$clinit();
  ActiveDatasetElement.$static_FACTORY__org_pepstock_charba_client_items_ActiveDatasetElement = ActiveDatasetElementFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ActiveDatasetElement;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  ActiveDatasetElementFactory = goog.module.get('org.pepstock.charba.client.items.ActiveDatasetElement.ActiveDatasetElementFactory$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.ActiveDatasetElement.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
/**@private {ActiveDatasetElementFactory}*/
ActiveDatasetElement.$static_FACTORY__org_pepstock_charba_client_items_ActiveDatasetElement;
$Util.$setClassMetadata(ActiveDatasetElement, "org.pepstock.charba.client.items.ActiveDatasetElement");

exports = ActiveDatasetElement;

//# sourceMappingURL=ActiveDatasetElement.js.map
