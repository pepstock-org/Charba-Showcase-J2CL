goog.module('org.pepstock.charba.client.items.DatasetElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let CallbacksEnvelop = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CallbacksEnvelop$impl');
let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let DatasetItemFactory = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetElement.DatasetItemFactory$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetElement.Property$impl');
let DatasetElementOptions = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetElementOptions$impl');
let Parsed = goog.forwardDeclare('org.pepstock.charba.client.items.Parsed$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class DatasetElement extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {DatasetElementOptions}*/
  this.f_options__org_pepstock_charba_client_items_DatasetElement_;
  /**@type {Parsed}*/
  this.f_parsed__org_pepstock_charba_client_items_DatasetElement_;
 }
 //Factory method corresponding to constructor 'DatasetElement(CallbacksEnvelop)'.
 /** @return {!DatasetElement} */
 static $create__org_pepstock_charba_client_callbacks_CallbacksEnvelop(/** CallbacksEnvelop<?> */ envelop) {
  DatasetElement.$clinit();
  let $instance = new DatasetElement();
  $instance.$ctor__org_pepstock_charba_client_items_DatasetElement__org_pepstock_charba_client_callbacks_CallbacksEnvelop(envelop);
  return $instance;
 }
 //Initialization from constructor 'DatasetElement(CallbacksEnvelop)'.
 
 $ctor__org_pepstock_charba_client_items_DatasetElement__org_pepstock_charba_client_callbacks_CallbacksEnvelop(/** CallbacksEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_items_DatasetElement__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {CallbacksEnvelop<?>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), CallbacksEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'DatasetElement(NativeObject)'.
 /** @return {!DatasetElement} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  DatasetElement.$clinit();
  let $instance = new DatasetElement();
  $instance.$ctor__org_pepstock_charba_client_items_DatasetElement__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'DatasetElement(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_items_DatasetElement__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_options__org_pepstock_charba_client_items_DatasetElement_ = DatasetElementOptions.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_OPTIONS__org_pepstock_charba_client_items_DatasetElement_Property));
  this.f_parsed__org_pepstock_charba_client_items_DatasetElement_ = Parsed.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_PARSED__org_pepstock_charba_client_items_DatasetElement_Property));
 }
 /** @return {DatasetElementOptions} */
 m_getOptions__() {
  return this.f_options__org_pepstock_charba_client_items_DatasetElement_;
 }
 /** @return {Parsed} */
 m_getParsed__() {
  return this.f_parsed__org_pepstock_charba_client_items_DatasetElement_;
 }
 /** @return {boolean} */
 m_isHorizontal__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_HORIZONTAL__org_pepstock_charba_client_items_DatasetElement_Property, Undefined.f_BOOLEAN__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getBase__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_BASE__org_pepstock_charba_client_items_DatasetElement_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getX__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_X__org_pepstock_charba_client_items_DatasetElement_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getY__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_Y__org_pepstock_charba_client_items_DatasetElement_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_WIDTH__org_pepstock_charba_client_items_DatasetElement_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getHeight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_HEIGHT__org_pepstock_charba_client_items_DatasetElement_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {boolean} */
 m_isSkipped__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_SKIP__org_pepstock_charba_client_items_DatasetElement_Property, Undefined.f_BOOLEAN__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {boolean} */
 m_isStop__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_STOP__org_pepstock_charba_client_items_DatasetElement_Property, Undefined.f_BOOLEAN__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getControlPointPreviousX__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_CONTROL_POINT_PREVIOUS_X__org_pepstock_charba_client_items_DatasetElement_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getControlPointPreviousY__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_CONTROL_POINT_PREVIOUS_Y__org_pepstock_charba_client_items_DatasetElement_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getControlPointNextX__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_CONTROL_POINT_NEXT_X__org_pepstock_charba_client_items_DatasetElement_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getControlPointNextY__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_CONTROL_POINT_NEXT_Y__org_pepstock_charba_client_items_DatasetElement_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getAngle__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getStartAngle__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_START_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getEndAngle__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_END_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getCircumference__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_CIRCUMFERENCE__org_pepstock_charba_client_items_DatasetElement_Property, Defaults.m_get__().m_getGlobal__().m_getCircumference__());
 }
 /** @return {number} */
 m_getOuterRadius__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_OUTER_RADIUS__org_pepstock_charba_client_items_DatasetElement_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getInnerRadius__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_INNER_RADIUS__org_pepstock_charba_client_items_DatasetElement_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {DatasetItemFactory} */
 static get f_FACTORY__org_pepstock_charba_client_items_DatasetElement() {
  return (DatasetElement.$clinit(), DatasetElement.$static_FACTORY__org_pepstock_charba_client_items_DatasetElement);
 }
 
 static $clinit() {
  DatasetElement.$clinit = () =>{};
  DatasetElement.$loadModules();
  NativeObjectContainer.$clinit();
  DatasetElement.$static_FACTORY__org_pepstock_charba_client_items_DatasetElement = DatasetItemFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetElement;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  CallbacksEnvelop = goog.module.get('org.pepstock.charba.client.callbacks.CallbacksEnvelop$impl');
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  DatasetItemFactory = goog.module.get('org.pepstock.charba.client.items.DatasetElement.DatasetItemFactory$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.DatasetElement.Property$impl');
  DatasetElementOptions = goog.module.get('org.pepstock.charba.client.items.DatasetElementOptions$impl');
  Parsed = goog.module.get('org.pepstock.charba.client.items.Parsed$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {DatasetItemFactory}*/
DatasetElement.$static_FACTORY__org_pepstock_charba_client_items_DatasetElement;
$Util.$setClassMetadata(DatasetElement, "org.pepstock.charba.client.items.DatasetElement");

exports = DatasetElement;

//# sourceMappingURL=DatasetElement.js.map
