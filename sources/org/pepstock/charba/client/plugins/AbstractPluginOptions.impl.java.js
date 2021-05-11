goog.module('org.pepstock.charba.client.plugins.AbstractPluginOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let AtomicInteger = goog.forwardDeclare('java.util.concurrent.atomic.AtomicInteger$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let ArrayEnumList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayEnumList$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let IsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.commons.IsEnvelop$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let Event = goog.forwardDeclare('org.pepstock.charba.client.enums.Event$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.plugins.AbstractPluginOptions.Property$impl');
let AbstractPluginOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');
let PluginIdChecker = goog.forwardDeclare('org.pepstock.charba.client.plugins.PluginIdChecker$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 */
class AbstractPluginOptions extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_pluginId__org_pepstock_charba_client_plugins_AbstractPluginOptions_;
 }
 
 $ctor__org_pepstock_charba_client_plugins_AbstractPluginOptions__java_lang_String__org_pepstock_charba_client_commons_NativeObject(/** ?string */ pluginId, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  PluginIdChecker.m_check__java_lang_String(pluginId);
  this.f_pluginId__org_pepstock_charba_client_plugins_AbstractPluginOptions_ = pluginId;
  if (!this.m_has__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_OPTIONS_ID__org_pepstock_charba_client_plugins_AbstractPluginOptions_Property)) {
   let sb = StringBuilder.$create__java_lang_String(pluginId);
   this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_CHARBA_OPTIONS_ID__org_pepstock_charba_client_plugins_AbstractPluginOptions_Property, sb.m_append__java_lang_String(Constants.f_MINUS__org_pepstock_charba_client_commons_Constants).m_append__int(AbstractPluginOptions.f_COUNTER__org_pepstock_charba_client_plugins_AbstractPluginOptions_.m_getAndIncrement__()).toString());
  }
 }
 /** @return {?string} */
 m_getId__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_CHARBA_OPTIONS_ID__org_pepstock_charba_client_plugins_AbstractPluginOptions_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {?string} */
 m_getPluginId__() {
  return this.f_pluginId__org_pepstock_charba_client_plugins_AbstractPluginOptions_;
 }
 
 m_setEvents__arrayOf_org_pepstock_charba_client_enums_Event(/** Array<Event> */ events) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_EVENTS__org_pepstock_charba_client_plugins_AbstractPluginOptions_Property, ArrayString_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_commons_Key(events));
 }
 /** @return {List<Event>} */
 m_getEvents__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_EVENTS__org_pepstock_charba_client_plugins_AbstractPluginOptions_Property), ArrayString_$Overlay));
  return !$Equality.$same(array, null) ? /**@type {ArrayEnumList<Event>}*/ (ArrayListHelper.m_list__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayString(Event.m_values__(), array)) : /**@type {List<Event>}*/ (Collections.m_unmodifiableList__java_util_List(Defaults.m_get__().m_getGlobal__().m_getEvents__()));
 }
 /** @template T @return {T} */
 m_loadGlobalsPluginOptions__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(/** AbstractPluginOptionsFactory<T> */ factory) {
  if (!$Equality.$same(factory, null)) {
   if (Defaults.m_get__().m_getGlobal__().m_getPlugins__().m_hasOptions__java_lang_String(this.f_pluginId__org_pepstock_charba_client_plugins_AbstractPluginOptions_)) {
    return Defaults.m_get__().m_getGlobal__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(this.f_pluginId__org_pepstock_charba_client_plugins_AbstractPluginOptions_, factory);
   } else {
    return factory.m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(null, null);
   }
  }
  return null;
 }
 
 m_applyingDefaults__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<?string> */ envelop) {
  if (IsEnvelop.m_isValid__org_pepstock_charba_client_commons_IsEnvelop(envelop)) {
   this.m_applyingDefaults__();
  }
 }
 
 m_applyingDefaults__() {}
 
 m_store__() {
  Defaults.m_get__().m_getGlobal__().m_getPlugins__().m_setOptions__org_pepstock_charba_client_plugins_AbstractPluginOptions(this);
 }
 
 m_store__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   chart.m_getOptions__().m_getPlugins__().m_setOptions__org_pepstock_charba_client_plugins_AbstractPluginOptions(this);
  }
 }
 
 m_store__org_pepstock_charba_client_Type(/** Type */ type) {
  if (Type.m_isValid__org_pepstock_charba_client_Type(type)) {
   let chartOptions = Defaults.m_get__().m_getOptions__org_pepstock_charba_client_Type(type);
   chartOptions.m_getPlugins__().m_setOptions__org_pepstock_charba_client_plugins_AbstractPluginOptions(this);
  }
 }
 
 m_store__org_pepstock_charba_client_data_Dataset(/** Dataset */ dataset) {
  if (!$Equality.$same(dataset, null)) {
   dataset.m_setOptions__org_pepstock_charba_client_plugins_AbstractPluginOptions(this);
  }
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_plugins() {
  return super.m_getNativeObject__();
 }
 
 static $clinit() {
  AbstractPluginOptions.$clinit = () =>{};
  AbstractPluginOptions.$loadModules();
  NativeObjectContainer.$clinit();
  AbstractPluginOptions.f_COUNTER__org_pepstock_charba_client_plugins_AbstractPluginOptions_ = AtomicInteger.$create__int(0);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractPluginOptions;
 }
 
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  AtomicInteger = goog.module.get('java.util.concurrent.atomic.AtomicInteger$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  Type = goog.module.get('org.pepstock.charba.client.Type$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  IsEnvelop = goog.module.get('org.pepstock.charba.client.commons.IsEnvelop$impl');
  Event = goog.module.get('org.pepstock.charba.client.enums.Event$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Property = goog.module.get('org.pepstock.charba.client.plugins.AbstractPluginOptions.Property$impl');
  PluginIdChecker = goog.module.get('org.pepstock.charba.client.plugins.PluginIdChecker$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {AtomicInteger}*/
AbstractPluginOptions.f_COUNTER__org_pepstock_charba_client_plugins_AbstractPluginOptions_;
$Util.$setClassMetadata(AbstractPluginOptions, "org.pepstock.charba.client.plugins.AbstractPluginOptions");

exports = AbstractPluginOptions;

//# sourceMappingURL=AbstractPluginOptions.js.map
