goog.module('org.pepstock.charba.client.items.DataItem$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ArrayDouble_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let NativeObjectContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
let NativeObjectContainerFactory = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let BarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let FloatingData = goog.forwardDeclare('org.pepstock.charba.client.data.FloatingData$impl');
let DataType = goog.forwardDeclare('org.pepstock.charba.client.enums.DataType$impl');
let ItemsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.items.ItemsEnvelop$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let JSON_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.utils.JSON.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class DataItem extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?number}*/
  this.f_value__org_pepstock_charba_client_items_DataItem_;
  /**@type {FloatingData}*/
  this.f_valueAsFloatingData__org_pepstock_charba_client_items_DataItem_;
  /**@type {?string}*/
  this.f_valueAsString__org_pepstock_charba_client_items_DataItem_;
  /**@type {DataPoint}*/
  this.f_valueAsPoint__org_pepstock_charba_client_items_DataItem_;
  /**@type {DataType}*/
  this.f_dataType__org_pepstock_charba_client_items_DataItem_;
  /**@type {?}*/
  this.f_nativeObject__org_pepstock_charba_client_items_DataItem_;
 }
 /** @return {!DataItem} */
 static $create__java_lang_Object(/** * */ object) {
  DataItem.$clinit();
  let $instance = new DataItem();
  $instance.$ctor__org_pepstock_charba_client_items_DataItem__java_lang_Object(object);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_DataItem__java_lang_Object(/** * */ object) {
  this.$ctor__java_lang_Object__();
  let type = JsHelper.m_get__().m_typeOf__java_lang_Object(object);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType, type)) {
   this.f_value__org_pepstock_charba_client_items_DataItem_ = /**@type {?number}*/ ($Casts.$to(object, Double));
   this.f_valueAsFloatingData__org_pepstock_charba_client_items_DataItem_ = null;
   this.f_valueAsString__org_pepstock_charba_client_items_DataItem_ = j_l_String.m_valueOf__java_lang_Object(this.f_value__org_pepstock_charba_client_items_DataItem_);
   this.f_valueAsPoint__org_pepstock_charba_client_items_DataItem_ = null;
   this.f_dataType__org_pepstock_charba_client_items_DataItem_ = DataType.f_NUMBERS__org_pepstock_charba_client_enums_DataType;
   this.f_nativeObject__org_pepstock_charba_client_items_DataItem_ = null;
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_ARRAY__org_pepstock_charba_client_commons_ObjectType, type)) {
   this.f_value__org_pepstock_charba_client_items_DataItem_ = Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
   this.f_valueAsFloatingData__org_pepstock_charba_client_items_DataItem_ = BarDataset.f_FLOATING_BAR_DATA_FACTORY__org_pepstock_charba_client_data_BarDataset.m_create__org_pepstock_charba_client_commons_ArrayDouble(/**@type {Array}*/ ($Casts.$to(object, ArrayDouble_$Overlay)));
   this.f_valueAsString__org_pepstock_charba_client_items_DataItem_ = this.f_valueAsFloatingData__org_pepstock_charba_client_items_DataItem_.toString();
   this.f_valueAsPoint__org_pepstock_charba_client_items_DataItem_ = null;
   this.f_dataType__org_pepstock_charba_client_items_DataItem_ = DataType.f_ARRAYS__org_pepstock_charba_client_enums_DataType;
   this.f_nativeObject__org_pepstock_charba_client_items_DataItem_ = null;
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType, type)) {
   this.f_value__org_pepstock_charba_client_items_DataItem_ = Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
   this.f_valueAsFloatingData__org_pepstock_charba_client_items_DataItem_ = null;
   this.f_valueAsString__org_pepstock_charba_client_items_DataItem_ = $Objects.m_toString__java_lang_Object(object);
   this.f_valueAsPoint__org_pepstock_charba_client_items_DataItem_ = null;
   this.f_dataType__org_pepstock_charba_client_items_DataItem_ = DataType.f_STRINGS__org_pepstock_charba_client_enums_DataType;
   this.f_nativeObject__org_pepstock_charba_client_items_DataItem_ = null;
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType, type)) {
   this.f_nativeObject__org_pepstock_charba_client_items_DataItem_ = /**@type {?}*/ (object);
   this.f_value__org_pepstock_charba_client_items_DataItem_ = Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
   this.f_valueAsFloatingData__org_pepstock_charba_client_items_DataItem_ = null;
   this.f_valueAsString__org_pepstock_charba_client_items_DataItem_ = JSON_$Overlay.m_stringify__java_lang_Object__int(object, 3);
   this.f_valueAsPoint__org_pepstock_charba_client_items_DataItem_ = DataPoint.$create__org_pepstock_charba_client_items_ItemsEnvelop(/**@type {!ItemsEnvelop<?>}*/ (ItemsEnvelop.$create__java_lang_Object(this.f_nativeObject__org_pepstock_charba_client_items_DataItem_)));
   this.f_dataType__org_pepstock_charba_client_items_DataItem_ = DataType.f_POINTS__org_pepstock_charba_client_enums_DataType;
  } else {
   this.f_value__org_pepstock_charba_client_items_DataItem_ = Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
   this.f_valueAsFloatingData__org_pepstock_charba_client_items_DataItem_ = null;
   this.f_valueAsString__org_pepstock_charba_client_items_DataItem_ = Constants.f_NULL_STRING__org_pepstock_charba_client_commons_Constants;
   this.f_valueAsPoint__org_pepstock_charba_client_items_DataItem_ = null;
   this.f_dataType__org_pepstock_charba_client_items_DataItem_ = DataType.f_UNKNOWN__org_pepstock_charba_client_enums_DataType;
   this.f_nativeObject__org_pepstock_charba_client_items_DataItem_ = null;
  }
 }
 /** @return {DataType} */
 m_getDataType__() {
  return this.f_dataType__org_pepstock_charba_client_items_DataItem_;
 }
 /** @return {number} */
 m_getValue__() {
  return Double.m_doubleValue__java_lang_Double(this.f_value__org_pepstock_charba_client_items_DataItem_);
 }
 /** @return {FloatingData} */
 m_getValueAsFloatingData__() {
  return this.f_valueAsFloatingData__org_pepstock_charba_client_items_DataItem_;
 }
 /** @return {?string} */
 m_getValueAsString__() {
  return this.f_valueAsString__org_pepstock_charba_client_items_DataItem_;
 }
 /** @return {DataPoint} */
 m_getValueAsDataPoint__() {
  return this.f_valueAsPoint__org_pepstock_charba_client_items_DataItem_;
 }
 /** @template T @return {T} */
 m_createDataPoint__org_pepstock_charba_client_commons_NativeObjectContainerFactory(/** NativeObjectContainerFactory<T> */ factory) {
  if (!$Equality.$same(factory, null)) {
   return factory.m_create__org_pepstock_charba_client_commons_NativeObject(this.f_nativeObject__org_pepstock_charba_client_items_DataItem_);
  }
  return null;
 }
 
 static $clinit() {
  DataItem.$clinit = () =>{};
  DataItem.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataItem;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ArrayDouble_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  BarDataset = goog.module.get('org.pepstock.charba.client.data.BarDataset$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  DataType = goog.module.get('org.pepstock.charba.client.enums.DataType$impl');
  ItemsEnvelop = goog.module.get('org.pepstock.charba.client.items.ItemsEnvelop$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  JSON_$Overlay = goog.module.get('org.pepstock.charba.client.utils.JSON.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(DataItem, "org.pepstock.charba.client.items.DataItem");

exports = DataItem;

//# sourceMappingURL=DataItem.js.map
