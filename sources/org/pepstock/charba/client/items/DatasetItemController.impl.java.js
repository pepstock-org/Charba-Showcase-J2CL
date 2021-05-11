goog.module('org.pepstock.charba.client.items.DatasetItemController$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let DatasetElementOptions = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetElementOptions$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetItemController.Property$impl');
let JsItemsHelper = goog.forwardDeclare('org.pepstock.charba.client.items.JsItemsHelper$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

class DatasetItemController extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DatasetItemController} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  DatasetItemController.$clinit();
  let $instance = new DatasetItemController();
  $instance.$ctor__org_pepstock_charba_client_items_DatasetItemController__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_DatasetItemController__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {number} */
 m_getIndex__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_INDEX__org_pepstock_charba_client_items_DatasetItemController_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getOuterRadius__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_OUTER_RADIUS__org_pepstock_charba_client_items_DatasetItemController_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getInnerRadius__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_INNER_RADIUS__org_pepstock_charba_client_items_DatasetItemController_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getOffsetX__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_OFFSET_X__org_pepstock_charba_client_items_DatasetItemController_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getOffsetY__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_OFFSET_Y__org_pepstock_charba_client_items_DatasetItemController_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {DatasetElementOptions} */
 m_getStyle__int(/** number */ dataIndex) {
  return DatasetElementOptions.$create__org_pepstock_charba_client_commons_NativeObject(JsItemsHelper.m_get__().m_getDatasetControllerStyle__org_pepstock_charba_client_commons_NativeObject__int_$pp_org_pepstock_charba_client_items(this.m_getNativeObject__(), dataIndex));
 }
 
 static $clinit() {
  DatasetItemController.$clinit = () =>{};
  DatasetItemController.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetItemController;
 }
 
 static $loadModules() {
  DatasetElementOptions = goog.module.get('org.pepstock.charba.client.items.DatasetElementOptions$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.DatasetItemController.Property$impl');
  JsItemsHelper = goog.module.get('org.pepstock.charba.client.items.JsItemsHelper$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
$Util.$setClassMetadata(DatasetItemController, "org.pepstock.charba.client.items.DatasetItemController");

exports = DatasetItemController;

//# sourceMappingURL=DatasetItemController.js.map
