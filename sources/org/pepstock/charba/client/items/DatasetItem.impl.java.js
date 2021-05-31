goog.module('org.pepstock.charba.client.items.DatasetItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayObject_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let IndexAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.IndexAxis$impl');
let DatasetElement = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetElement$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetItem.Property$impl');
let DatasetItemController = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetItemController$impl');
let ScaleItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleItem$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class DatasetItem extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {DatasetItemController}*/
  this.f_datasetItemController__org_pepstock_charba_client_items_DatasetItem_;
 }
 //Factory method corresponding to constructor 'DatasetItem(ChartEnvelop)'.
 /** @return {!DatasetItem} */
 static $create__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<?> */ envelop) {
  DatasetItem.$clinit();
  let $instance = new DatasetItem();
  $instance.$ctor__org_pepstock_charba_client_items_DatasetItem__org_pepstock_charba_client_ChartEnvelop(envelop);
  return $instance;
 }
 //Initialization from constructor 'DatasetItem(ChartEnvelop)'.
 
 $ctor__org_pepstock_charba_client_items_DatasetItem__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_items_DatasetItem__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {ChartEnvelop<?>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ChartEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'DatasetItem()'.
 /** @return {!DatasetItem} */
 static $create__() {
  DatasetItem.$clinit();
  let $instance = new DatasetItem();
  $instance.$ctor__org_pepstock_charba_client_items_DatasetItem__();
  return $instance;
 }
 //Initialization from constructor 'DatasetItem()'.
 
 $ctor__org_pepstock_charba_client_items_DatasetItem__() {
  this.$ctor__org_pepstock_charba_client_items_DatasetItem__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (null));
 }
 //Factory method corresponding to constructor 'DatasetItem(NativeObject)'.
 /** @return {!DatasetItem} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  DatasetItem.$clinit();
  let $instance = new DatasetItem();
  $instance.$ctor__org_pepstock_charba_client_items_DatasetItem__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'DatasetItem(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_items_DatasetItem__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_datasetItemController__org_pepstock_charba_client_items_DatasetItem_ = DatasetItemController.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_CONTROLLER__org_pepstock_charba_client_items_DatasetItem_Property));
 }
 /** @return {DatasetItemController} */
 m_getController__() {
  return this.f_datasetItemController__org_pepstock_charba_client_items_DatasetItem_;
 }
 /** @return {Type} */
 m_getType__() {
  let value = this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TYPE__org_pepstock_charba_client_items_DatasetItem_Property, ChartType.f_BAR__org_pepstock_charba_client_ChartType.m_value__());
  let type = /**@type {ChartType}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(ChartType.m_values__(), value), ChartType));
  if ($Equality.$same(type, null)) {
   type = Defaults.m_get__().m_getControllers__().m_getTypeByString__java_lang_String(value);
  }
  return $Equality.$same(type, null) ? ChartType.f_BAR__org_pepstock_charba_client_ChartType : type;
 }
 /** @return {boolean} */
 m_isVisible__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_VISIBLE__org_pepstock_charba_client_items_DatasetItem_Property, Undefined.f_BOOLEAN__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {boolean} */
 m_isHidden__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_HIDDEN__org_pepstock_charba_client_items_DatasetItem_Property, Undefined.f_BOOLEAN__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getIndex__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_INDEX__org_pepstock_charba_client_items_DatasetItem_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {IndexAxis} */
 m_getIndexAxis__() {
  return /**@type {IndexAxis}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_INDEX_AXIS__org_pepstock_charba_client_items_DatasetItem_Property, IndexAxis.m_values__(), null), IndexAxis));
 }
 /** @return {number} */
 m_getOrder__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_ORDER__org_pepstock_charba_client_items_DatasetItem_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {?string} */
 m_getLabel__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_LABEL__org_pepstock_charba_client_items_DatasetItem_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {ScaleId} */
 m_getYAxisID__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_options_ScaleId(Property.f_Y_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property, DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId);
 }
 /** @return {ScaleItem} */
 m_getYScale__() {
  return this.m_retrieveScale__org_pepstock_charba_client_items_DatasetItem_Property_$p_org_pepstock_charba_client_items_DatasetItem(Property.f_Y_SCALE__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {ScaleId} */
 m_getXAxisID__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_options_ScaleId(Property.f_X_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property, DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId);
 }
 /** @return {ScaleItem} */
 m_getXScale__() {
  return this.m_retrieveScale__org_pepstock_charba_client_items_DatasetItem_Property_$p_org_pepstock_charba_client_items_DatasetItem(Property.f_X_SCALE__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {ScaleId} */
 m_getRAxisID__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_options_ScaleId(Property.f_R_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property, DefaultScaleId.f_R__org_pepstock_charba_client_enums_DefaultScaleId);
 }
 /** @return {ScaleItem} */
 m_getRScale__() {
  return this.m_retrieveScale__org_pepstock_charba_client_items_DatasetItem_Property_$p_org_pepstock_charba_client_items_DatasetItem(Property.f_R_SCALE__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {ScaleId} */
 m_getValueAxisID__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_options_ScaleId(Property.f_V_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property, DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId);
 }
 /** @return {ScaleItem} */
 m_getValueScale__() {
  return this.m_retrieveScale__org_pepstock_charba_client_items_DatasetItem_Property_$p_org_pepstock_charba_client_items_DatasetItem(Property.f_V_SCALE__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {ScaleId} */
 m_getIndexAxisID__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_options_ScaleId(Property.f_I_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property, DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId);
 }
 /** @return {ScaleItem} */
 m_getIndexScale__() {
  return this.m_retrieveScale__org_pepstock_charba_client_items_DatasetItem_Property_$p_org_pepstock_charba_client_items_DatasetItem(Property.f_I_SCALE__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {number} */
 m_getTotal__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_TOTAL__org_pepstock_charba_client_items_DatasetItem_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {List<DatasetElement>} */
 m_getElements__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_DATA__org_pepstock_charba_client_items_DatasetItem_Property), ArrayObject_$Overlay));
  return /**@type {List<DatasetElement>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, DatasetElement.f_FACTORY__org_pepstock_charba_client_items_DatasetElement));
 }
 /** @return {ScaleItem} */
 m_retrieveScale__org_pepstock_charba_client_items_DatasetItem_Property_$p_org_pepstock_charba_client_items_DatasetItem(/** Property */ key) {
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(key) && this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(key, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
   return ScaleItem.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(key));
  }
  return null;
 }
 
 static $clinit() {
  DatasetItem.$clinit = () =>{};
  DatasetItem.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetItem;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayObject_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  IndexAxis = goog.module.get('org.pepstock.charba.client.enums.IndexAxis$impl');
  DatasetElement = goog.module.get('org.pepstock.charba.client.items.DatasetElement$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.DatasetItem.Property$impl');
  DatasetItemController = goog.module.get('org.pepstock.charba.client.items.DatasetItemController$impl');
  ScaleItem = goog.module.get('org.pepstock.charba.client.items.ScaleItem$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(DatasetItem, "org.pepstock.charba.client.items.DatasetItem");

exports = DatasetItem;

//# sourceMappingURL=DatasetItem.js.map
