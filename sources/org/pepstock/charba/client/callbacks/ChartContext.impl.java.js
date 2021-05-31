goog.module('org.pepstock.charba.client.callbacks.ChartContext$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Chart_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.Chart.$Overlay$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext.Property$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let NativeObjectContainerFactory = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');
let ContextType = goog.forwardDeclare('org.pepstock.charba.client.enums.ContextType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ChartContext extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ChartContext} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  ChartContext.$clinit();
  let $instance = new ChartContext();
  $instance.$ctor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(nativeObject, "Native context argument");
  Checker.m_assertCheck__boolean__java_lang_String(this.m_has__org_pepstock_charba_client_commons_Key(Property.f_CHART__org_pepstock_charba_client_callbacks_ChartContext_Property), "Unable to retrieve the chart instance and the context does not seem to be consistent");
 }
 /** @return {IsChart} */
 m_getChart__() {
  return Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(super.m_getNativeChart__org_pepstock_charba_client_commons_Key(Property.f_CHART__org_pepstock_charba_client_callbacks_ChartContext_Property));
 }
 /** @return {ContextType} */
 m_getType__() {
  return /**@type {ContextType}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TYPE__org_pepstock_charba_client_callbacks_ChartContext_Property, ContextType.m_values__(), ContextType.f_UNKNOWN__org_pepstock_charba_client_enums_ContextType), ContextType));
 }
 /** @template T */
 m_setAttributes__org_pepstock_charba_client_commons_NativeObjectContainer(/** T */ attributes) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_ATTRIBUTES__org_pepstock_charba_client_callbacks_ChartContext_Property, attributes);
 }
 /** @return {boolean} */
 m_hasAttributes__() {
  return this.m_has__org_pepstock_charba_client_commons_Key(Property.f_ATTRIBUTES__org_pepstock_charba_client_callbacks_ChartContext_Property);
 }
 /** @template T @return {T} */
 m_getAttributes__org_pepstock_charba_client_commons_NativeObjectContainerFactory(/** NativeObjectContainerFactory<T> */ factory) {
  if (!$Equality.$same(factory, null)) {
   if (this.m_hasAttributes__()) {
    return factory.m_create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_ATTRIBUTES__org_pepstock_charba_client_callbacks_ChartContext_Property));
   }
   let options = factory.m_create__();
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_ATTRIBUTES__org_pepstock_charba_client_callbacks_ChartContext_Property, options);
   return options;
  }
  return null;
 }
 
 m_setAttribute__org_pepstock_charba_client_commons_Key__double(/** Key */ key, /** number */ value) {
  if (this.m_checkIfPropertyIsValid__org_pepstock_charba_client_commons_Key(key)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__double(key, value);
  }
 }
 /** @return {number} */
 m_getAttribute__org_pepstock_charba_client_commons_Key__double(/** Key */ key, /** number */ defaultValue) {
  if (this.m_checkIfPropertyIsValid__org_pepstock_charba_client_commons_Key(key)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__double(key, defaultValue);
  }
  return defaultValue;
 }
 
 m_setAttribute__org_pepstock_charba_client_commons_Key__boolean(/** Key */ key, /** boolean */ value) {
  if (this.m_checkIfPropertyIsValid__org_pepstock_charba_client_commons_Key(key)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(key, value);
  }
 }
 /** @return {boolean} */
 m_getAttribute__org_pepstock_charba_client_commons_Key__boolean(/** Key */ key, /** boolean */ defaultValue) {
  if (this.m_checkIfPropertyIsValid__org_pepstock_charba_client_commons_Key(key)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(key, defaultValue);
  }
  return defaultValue;
 }
 
 m_setAttribute__org_pepstock_charba_client_commons_Key__int(/** Key */ key, /** number */ value) {
  if (this.m_checkIfPropertyIsValid__org_pepstock_charba_client_commons_Key(key)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__int(key, value);
  }
 }
 /** @return {number} */
 m_getAttribute__org_pepstock_charba_client_commons_Key__int(/** Key */ key, /** number */ defaultValue) {
  if (this.m_checkIfPropertyIsValid__org_pepstock_charba_client_commons_Key(key)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__int(key, defaultValue);
  }
  return defaultValue;
 }
 
 m_setAttribute__org_pepstock_charba_client_commons_Key__java_lang_String(/** Key */ key, /** ?string */ value) {
  if (this.m_checkIfPropertyIsValid__org_pepstock_charba_client_commons_Key(key)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(key, value);
  }
 }
 /** @return {?string} */
 m_getAttribute__org_pepstock_charba_client_commons_Key__java_lang_String(/** Key */ key, /** ?string */ defaultValue) {
  if (this.m_checkIfPropertyIsValid__org_pepstock_charba_client_commons_Key(key)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(key, defaultValue);
  }
  return defaultValue;
 }
 /** @return {boolean} */
 m_isConsistent__() {
  return true;
 }
 /** @return {boolean} */
 m_checkIfPropertyIsValid__org_pepstock_charba_client_commons_Key(/** Key */ property) {
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(property)) {
   return !Key.m_hasKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(Property.m_values__(), property.m_value__());
  }
  return false;
 }
 
 static $clinit() {
  ChartContext.$clinit = () =>{};
  ChartContext.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartContext;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Chart_$Overlay = goog.module.get('org.pepstock.charba.client.Chart.$Overlay$impl');
  Property = goog.module.get('org.pepstock.charba.client.callbacks.ChartContext.Property$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ContextType = goog.module.get('org.pepstock.charba.client.enums.ContextType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ChartContext, "org.pepstock.charba.client.callbacks.ChartContext");

exports = ChartContext;

//# sourceMappingURL=ChartContext.js.map
