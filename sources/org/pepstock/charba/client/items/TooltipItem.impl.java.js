goog.module('org.pepstock.charba.client.items.TooltipItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Chart_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.Chart.$Overlay$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let DatasetElement = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetElement$impl');
let DatasetPoint = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetPoint$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem.Property$impl');
let TooltipItemFactory = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem.TooltipItemFactory$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

class TooltipItem extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {DatasetPoint}*/
  this.f_dataPoint__org_pepstock_charba_client_items_TooltipItem_;
 }
 /** @return {!TooltipItem} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  TooltipItem.$clinit();
  let $instance = new TooltipItem();
  $instance.$ctor__org_pepstock_charba_client_items_TooltipItem__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_TooltipItem__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_dataPoint__org_pepstock_charba_client_items_TooltipItem_ = DatasetPoint.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_DATA_POINT__org_pepstock_charba_client_items_TooltipItem_Property));
 }
 /** @return {IsChart} */
 m_getChart__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_CHART__org_pepstock_charba_client_items_TooltipItem_Property, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
   return Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(this.m_getNativeChart__org_pepstock_charba_client_commons_Key(Property.f_CHART__org_pepstock_charba_client_items_TooltipItem_Property));
  }
  return null;
 }
 /** @return {?string} */
 m_getLabel__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_LABEL__org_pepstock_charba_client_items_TooltipItem_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {DatasetPoint} */
 m_getDataPoint__() {
  return this.f_dataPoint__org_pepstock_charba_client_items_TooltipItem_;
 }
 /** @return {?string} */
 m_getFormattedValue__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_FORMATTED_VALUE__org_pepstock_charba_client_items_TooltipItem_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getDatasetIndex__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_DATASET_INDEX__org_pepstock_charba_client_items_TooltipItem_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getDataIndex__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_DATA_INDEX__org_pepstock_charba_client_items_TooltipItem_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {DatasetElement} */
 m_getElement__() {
  return DatasetElement.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_ELEMENT__org_pepstock_charba_client_items_TooltipItem_Property));
 }
 /** @return {TooltipItemFactory} */
 static get f_FACTORY__org_pepstock_charba_client_items_TooltipItem() {
  return (TooltipItem.$clinit(), TooltipItem.$static_FACTORY__org_pepstock_charba_client_items_TooltipItem);
 }
 
 static $clinit() {
  TooltipItem.$clinit = () =>{};
  TooltipItem.$loadModules();
  NativeObjectContainer.$clinit();
  TooltipItem.$static_FACTORY__org_pepstock_charba_client_items_TooltipItem = TooltipItemFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TooltipItem;
 }
 
 static $loadModules() {
  Chart_$Overlay = goog.module.get('org.pepstock.charba.client.Chart.$Overlay$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  DatasetElement = goog.module.get('org.pepstock.charba.client.items.DatasetElement$impl');
  DatasetPoint = goog.module.get('org.pepstock.charba.client.items.DatasetPoint$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.TooltipItem.Property$impl');
  TooltipItemFactory = goog.module.get('org.pepstock.charba.client.items.TooltipItem.TooltipItemFactory$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
/**@private {TooltipItemFactory}*/
TooltipItem.$static_FACTORY__org_pepstock_charba_client_items_TooltipItem;
$Util.$setClassMetadata(TooltipItem, "org.pepstock.charba.client.items.TooltipItem");

exports = TooltipItem;

//# sourceMappingURL=TooltipItem.js.map
