goog.module('org.pepstock.charba.client.items.DatasetPoint$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let CallbacksEnvelop = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CallbacksEnvelop$impl');
let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetPoint.Property$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class DatasetPoint extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'DatasetPoint(CallbacksEnvelop)'.
 /** @return {!DatasetPoint} */
 static $create__org_pepstock_charba_client_callbacks_CallbacksEnvelop(/** CallbacksEnvelop<?> */ envelop) {
  DatasetPoint.$clinit();
  let $instance = new DatasetPoint();
  $instance.$ctor__org_pepstock_charba_client_items_DatasetPoint__org_pepstock_charba_client_callbacks_CallbacksEnvelop(envelop);
  return $instance;
 }
 //Initialization from constructor 'DatasetPoint(CallbacksEnvelop)'.
 
 $ctor__org_pepstock_charba_client_items_DatasetPoint__org_pepstock_charba_client_callbacks_CallbacksEnvelop(/** CallbacksEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {CallbacksEnvelop<?>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), CallbacksEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'DatasetPoint(NativeObject)'.
 /** @return {!DatasetPoint} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  DatasetPoint.$clinit();
  let $instance = new DatasetPoint();
  $instance.$ctor__org_pepstock_charba_client_items_DatasetPoint__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'DatasetPoint(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_items_DatasetPoint__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {number} */
 m_getX__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_X__org_pepstock_charba_client_items_DatasetPoint_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getY__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_Y__org_pepstock_charba_client_items_DatasetPoint_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 
 static $clinit() {
  DatasetPoint.$clinit = () =>{};
  DatasetPoint.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetPoint;
 }
 
 static $loadModules() {
  CallbacksEnvelop = goog.module.get('org.pepstock.charba.client.callbacks.CallbacksEnvelop$impl');
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.DatasetPoint.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(DatasetPoint, "org.pepstock.charba.client.items.DatasetPoint");

exports = DatasetPoint;

//# sourceMappingURL=DatasetPoint.js.map
