goog.module('org.pepstock.charba.client.events.ChartEventContext$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.Chart.$Overlay$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let IsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.commons.IsEnvelop$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let ConfigurationEnvelop = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
let BaseNativeEvent_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay$impl');
let DOMBuilder = goog.forwardDeclare('org.pepstock.charba.client.dom.DOMBuilder$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.events.ChartEventContext.Property$impl');
let ItemsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.items.ItemsEnvelop$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ChartEventContext extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'ChartEventContext(Chart)'.
 /** @return {!ChartEventContext} */
 static $create__org_pepstock_charba_client_Chart(/** Chart */ chart) {
  ChartEventContext.$clinit();
  let $instance = new ChartEventContext();
  $instance.$ctor__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_Chart(chart);
  return $instance;
 }
 //Initialization from constructor 'ChartEventContext(Chart)'.
 
 $ctor__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_Chart(/** Chart */ chart) {
  this.$ctor__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_Chart__org_pepstock_charba_client_dom_BaseNativeEvent(chart, DOMBuilder.m_get__().m_createChangeEvent__());
 }
 //Factory method corresponding to constructor 'ChartEventContext(Chart, BaseNativeEvent)'.
 /** @return {!ChartEventContext} */
 static $create__org_pepstock_charba_client_Chart__org_pepstock_charba_client_dom_BaseNativeEvent(/** Chart */ chart, /** Object */ event) {
  ChartEventContext.$clinit();
  let $instance = new ChartEventContext();
  $instance.$ctor__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_Chart__org_pepstock_charba_client_dom_BaseNativeEvent(chart, event);
  return $instance;
 }
 //Initialization from constructor 'ChartEventContext(Chart, BaseNativeEvent)'.
 
 $ctor__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_Chart__org_pepstock_charba_client_dom_BaseNativeEvent(/** Chart */ chart, /** Object */ event) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(null);
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(chart, "Chart argument");
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(event, "Event argument");
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_Chart(Property.f_CHART__org_pepstock_charba_client_events_ChartEventContext_Property, chart);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_BaseNativeEvent(Property.f_NATIVE__org_pepstock_charba_client_events_ChartEventContext_Property, event);
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TYPE__org_pepstock_charba_client_events_ChartEventContext_Property, event.type);
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_X__org_pepstock_charba_client_events_ChartEventContext_Property, BaseNativeEvent_$Overlay.m_getX__$devirt__org_pepstock_charba_client_dom_BaseNativeEvent(event));
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_Y__org_pepstock_charba_client_events_ChartEventContext_Property, BaseNativeEvent_$Overlay.m_getY__$devirt__org_pepstock_charba_client_dom_BaseNativeEvent(event));
 }
 //Factory method corresponding to constructor 'ChartEventContext(ConfigurationEnvelop)'.
 /** @return {!ChartEventContext} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/** ConfigurationEnvelop<?> */ envelop) {
  ChartEventContext.$clinit();
  let $instance = new ChartEventContext();
  $instance.$ctor__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_configuration_ConfigurationEnvelop(envelop);
  return $instance;
 }
 //Initialization from constructor 'ChartEventContext(ConfigurationEnvelop)'.
 
 $ctor__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/** ConfigurationEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {ConfigurationEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), ConfigurationEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'ChartEventContext(ItemsEnvelop)'.
 /** @return {!ChartEventContext} */
 static $create__org_pepstock_charba_client_items_ItemsEnvelop(/** ItemsEnvelop<?> */ envelop) {
  ChartEventContext.$clinit();
  let $instance = new ChartEventContext();
  $instance.$ctor__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_items_ItemsEnvelop(envelop);
  return $instance;
 }
 //Initialization from constructor 'ChartEventContext(ItemsEnvelop)'.
 
 $ctor__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_items_ItemsEnvelop(/** ItemsEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {ItemsEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), ItemsEnvelop)).m_getContent__()));
 }
 /** @return {Chart} */
 m_getNativeChart__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_CHART__org_pepstock_charba_client_events_ChartEventContext_Property, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getNativeChart__org_pepstock_charba_client_commons_Key(Property.f_CHART__org_pepstock_charba_client_events_ChartEventContext_Property);
  }
  return null;
 }
 /** @return {IsChart} */
 m_getChart__() {
  let chart = this.m_getNativeChart__();
  if (!$Equality.$same(chart, null)) {
   return $Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(chart);
  }
  return null;
 }
 /** @return {Object} */
 m_getNativeEvent__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_NATIVE__org_pepstock_charba_client_events_ChartEventContext_Property, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getNativeEvent__org_pepstock_charba_client_commons_Key(Property.f_NATIVE__org_pepstock_charba_client_events_ChartEventContext_Property);
  }
  return null;
 }
 /** @return {number} */
 m_getX__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_X__org_pepstock_charba_client_events_ChartEventContext_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getY__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_Y__org_pepstock_charba_client_events_ChartEventContext_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {?string} */
 m_getType__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TYPE__org_pepstock_charba_client_events_ChartEventContext_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {?} */
 m_getObject__() {
  return this.m_getNativeObject__();
 }
 
 static $clinit() {
  ChartEventContext.$clinit = () =>{};
  ChartEventContext.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartEventContext;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.Chart.$Overlay$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  IsEnvelop = goog.module.get('org.pepstock.charba.client.commons.IsEnvelop$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  ConfigurationEnvelop = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
  BaseNativeEvent_$Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay$impl');
  DOMBuilder = goog.module.get('org.pepstock.charba.client.dom.DOMBuilder$impl');
  Property = goog.module.get('org.pepstock.charba.client.events.ChartEventContext.Property$impl');
  ItemsEnvelop = goog.module.get('org.pepstock.charba.client.items.ItemsEnvelop$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ChartEventContext, "org.pepstock.charba.client.events.ChartEventContext");

exports = ChartEventContext;

//# sourceMappingURL=ChartEventContext.js.map
