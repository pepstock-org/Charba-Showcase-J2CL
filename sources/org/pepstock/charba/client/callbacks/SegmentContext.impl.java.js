goog.module('org.pepstock.charba.client.callbacks.SegmentContext$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartContext = goog.require('org.pepstock.charba.client.callbacks.ChartContext$impl');

let Property = goog.forwardDeclare('org.pepstock.charba.client.callbacks.SegmentContext.Property$impl');
let SegementDatasetElement = goog.forwardDeclare('org.pepstock.charba.client.callbacks.SegmentContext.SegementDatasetElement$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ContextType = goog.forwardDeclare('org.pepstock.charba.client.enums.ContextType$impl');
let DatasetElement = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetElement$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class SegmentContext extends ChartContext {
 /** @protected */
 constructor() {
  super();
  /**@type {DatasetElement}*/
  this.f_point0__org_pepstock_charba_client_callbacks_SegmentContext_;
  /**@type {DatasetElement}*/
  this.f_point1__org_pepstock_charba_client_callbacks_SegmentContext_;
 }
 /** @return {!SegmentContext} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  SegmentContext.$clinit();
  let $instance = new SegmentContext();
  $instance.$ctor__org_pepstock_charba_client_callbacks_SegmentContext__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_callbacks_SegmentContext__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_point0__org_pepstock_charba_client_callbacks_SegmentContext_ = SegementDatasetElement.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_P0__org_pepstock_charba_client_callbacks_SegmentContext_Property));
  this.f_point1__org_pepstock_charba_client_callbacks_SegmentContext_ = SegementDatasetElement.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_P1__org_pepstock_charba_client_callbacks_SegmentContext_Property));
 }
 /** @return {DatasetElement} */
 m_getStartPoint__() {
  return this.f_point0__org_pepstock_charba_client_callbacks_SegmentContext_;
 }
 /** @return {DatasetElement} */
 m_getEndPoint__() {
  return this.f_point1__org_pepstock_charba_client_callbacks_SegmentContext_;
 }
 /** @override @return {boolean} */
 m_isConsistent__() {
  return $Objects.m_equals__java_lang_Object__java_lang_Object(ContextType.f_CHART__org_pepstock_charba_client_enums_ContextType, this.m_getType__()) || $Objects.m_equals__java_lang_Object__java_lang_Object(ContextType.f_SEGMENT__org_pepstock_charba_client_enums_ContextType, this.m_getType__());
 }
 /** @override @return {boolean} */
 m_checkIfPropertyIsValid__org_pepstock_charba_client_commons_Key(/** Key */ property) {
  if (super.m_checkIfPropertyIsValid__org_pepstock_charba_client_commons_Key(property)) {
   return !Key.m_hasKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(Property.m_values__(), property.m_value__());
  }
  return false;
 }
 
 static $clinit() {
  SegmentContext.$clinit = () =>{};
  SegmentContext.$loadModules();
  ChartContext.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SegmentContext;
 }
 
 static $loadModules() {
  Property = goog.module.get('org.pepstock.charba.client.callbacks.SegmentContext.Property$impl');
  SegementDatasetElement = goog.module.get('org.pepstock.charba.client.callbacks.SegmentContext.SegementDatasetElement$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ContextType = goog.module.get('org.pepstock.charba.client.enums.ContextType$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(SegmentContext, "org.pepstock.charba.client.callbacks.SegmentContext");

exports = SegmentContext;

//# sourceMappingURL=SegmentContext.js.map
