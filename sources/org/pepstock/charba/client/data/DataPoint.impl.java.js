goog.module('org.pepstock.charba.client.data.DataPoint$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let ArrayDouble_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint.Property$impl');
let FloatingData = goog.forwardDeclare('org.pepstock.charba.client.data.FloatingData$impl');
let ItemsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.items.ItemsEnvelop$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class DataPoint extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'DataPoint()'.
 /** @return {!DataPoint} */
 static $create__() {
  DataPoint.$clinit();
  let $instance = new DataPoint();
  $instance.$ctor__org_pepstock_charba_client_data_DataPoint__();
  return $instance;
 }
 //Initialization from constructor 'DataPoint()'.
 
 $ctor__org_pepstock_charba_client_data_DataPoint__() {
  this.$ctor__org_pepstock_charba_client_data_DataPoint__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (null));
 }
 //Factory method corresponding to constructor 'DataPoint(ItemsEnvelop)'.
 /** @return {!DataPoint} */
 static $create__org_pepstock_charba_client_items_ItemsEnvelop(/** ItemsEnvelop<?> */ envelop) {
  DataPoint.$clinit();
  let $instance = new DataPoint();
  $instance.$ctor__org_pepstock_charba_client_data_DataPoint__org_pepstock_charba_client_items_ItemsEnvelop(envelop);
  return $instance;
 }
 //Initialization from constructor 'DataPoint(ItemsEnvelop)'.
 
 $ctor__org_pepstock_charba_client_data_DataPoint__org_pepstock_charba_client_items_ItemsEnvelop(/** ItemsEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_data_DataPoint__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {ItemsEnvelop<?>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ItemsEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'DataPoint(NativeObject)'.
 /** @return {!DataPoint} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  DataPoint.$clinit();
  let $instance = new DataPoint();
  $instance.$ctor__org_pepstock_charba_client_data_DataPoint__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'DataPoint(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_data_DataPoint__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {ObjectType} */
 m_getXObjectType__() {
  return this.m_type__org_pepstock_charba_client_commons_Key(Property.f_X__org_pepstock_charba_client_data_DataPoint_Property);
 }
 
 m_setX__double(/** number */ x) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_X__org_pepstock_charba_client_data_DataPoint_Property, x);
 }
 /** @return {number} */
 m_getX__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType, this.m_getXObjectType__())) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_X__org_pepstock_charba_client_data_DataPoint_Property, DataPoint.f_DEFAULT_X__org_pepstock_charba_client_data_DataPoint);
  }
  return DataPoint.f_DEFAULT_X__org_pepstock_charba_client_data_DataPoint;
 }
 
 m_setX__java_util_Date(/** Date */ x) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_X__org_pepstock_charba_client_data_DataPoint_Property, x);
 }
 /** @return {Date} */
 m_getXAsDate__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType, this.m_getXObjectType__())) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_X__org_pepstock_charba_client_data_DataPoint_Property, /**@type {Date}*/ (null));
  }
  return null;
 }
 
 m_setX__java_lang_String(/** ?string */ x) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_X__org_pepstock_charba_client_data_DataPoint_Property, x);
 }
 /** @return {?string} */
 m_getXAsString__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType, this.m_getXObjectType__())) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_X__org_pepstock_charba_client_data_DataPoint_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
  }
  return Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {ObjectType} */
 m_getYObjectType__() {
  return this.m_type__org_pepstock_charba_client_commons_Key(Property.f_Y__org_pepstock_charba_client_data_DataPoint_Property);
 }
 
 m_setY__double(/** number */ y) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_Y__org_pepstock_charba_client_data_DataPoint_Property, y);
 }
 /** @return {number} */
 m_getY__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType, this.m_getYObjectType__())) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_Y__org_pepstock_charba_client_data_DataPoint_Property, DataPoint.f_DEFAULT_Y__org_pepstock_charba_client_data_DataPoint);
  }
  return DataPoint.f_DEFAULT_Y__org_pepstock_charba_client_data_DataPoint;
 }
 
 m_setY__org_pepstock_charba_client_data_FloatingData(/** FloatingData */ y) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeArrayContainer(Property.f_Y__org_pepstock_charba_client_data_DataPoint_Property, y);
 }
 /** @return {FloatingData} */
 m_getYAsFloatingData__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_ARRAY__org_pepstock_charba_client_commons_ObjectType, this.m_getYObjectType__())) {
   return FloatingData.$create__org_pepstock_charba_client_commons_ArrayDouble(/**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_Y__org_pepstock_charba_client_data_DataPoint_Property), ArrayDouble_$Overlay)));
  }
  return FloatingData.$create__();
 }
 
 m_setR__double(/** number */ r) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_R__org_pepstock_charba_client_data_DataPoint_Property, Checker.m_positiveOrZero__double(r));
 }
 /** @return {number} */
 m_getR__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_R__org_pepstock_charba_client_data_DataPoint_Property, DataPoint.f_DEFAULT_R__org_pepstock_charba_client_data_DataPoint);
 }
 
 m_setAttribute__org_pepstock_charba_client_commons_Key__double(/** Key */ key, /** number */ value) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(key, value);
 }
 /** @return {number} */
 m_getAttribute__org_pepstock_charba_client_commons_Key(/** Key */ key) {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(key, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 
 static $clinit() {
  DataPoint.$clinit = () =>{};
  DataPoint.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataPoint;
 }
 
 static $loadModules() {
  ArrayDouble_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  Property = goog.module.get('org.pepstock.charba.client.data.DataPoint.Property$impl');
  FloatingData = goog.module.get('org.pepstock.charba.client.data.FloatingData$impl');
  ItemsEnvelop = goog.module.get('org.pepstock.charba.client.items.ItemsEnvelop$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@const {number}*/
DataPoint.f_DEFAULT_X__org_pepstock_charba_client_data_DataPoint = NaN;
/**@const {number}*/
DataPoint.f_DEFAULT_R__org_pepstock_charba_client_data_DataPoint = NaN;
/**@const {number}*/
DataPoint.f_DEFAULT_Y__org_pepstock_charba_client_data_DataPoint = NaN;
$Util.$setClassMetadata(DataPoint, "org.pepstock.charba.client.data.DataPoint");

exports = DataPoint;

//# sourceMappingURL=DataPoint.js.map
