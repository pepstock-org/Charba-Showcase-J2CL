goog.module('org.pepstock.charba.client.adapters.DateAdapterOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Helpers = goog.forwardDeclare('org.pepstock.charba.client.Helpers$impl');
let DateAdapter = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapter$impl');
let DateAdaptersOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapterOptions.DateAdaptersOptionsFactory$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapterOptions.Property$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let IsDefaultDateAdapterOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultDateAdapterOptions$impl');
let DefaultDateAdapterOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultDateAdapterOptions$impl');
let CLocale = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocale$impl');
let CLocaleBuilder = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocaleBuilder$impl');
let Calendar = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.Calendar$impl');
let NumberingSystem = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.NumberingSystem$impl');
let TimeZone = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.TimeZone$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class DateAdapterOptions extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultDateAdapterOptions}*/
  this.f_defaultValues__org_pepstock_charba_client_adapters_DateAdapterOptions_;
 }
 //Factory method corresponding to constructor 'DateAdapterOptions()'.
 /** @return {!DateAdapterOptions} */
 static $create__() {
  DateAdapterOptions.$clinit();
  let $instance = new DateAdapterOptions();
  $instance.$ctor__org_pepstock_charba_client_adapters_DateAdapterOptions__();
  return $instance;
 }
 //Initialization from constructor 'DateAdapterOptions()'.
 
 $ctor__org_pepstock_charba_client_adapters_DateAdapterOptions__() {
  this.$ctor__org_pepstock_charba_client_adapters_DateAdapterOptions__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultDateAdapterOptions(null, DefaultDateAdapterOptions.f_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultDateAdapterOptions);
 }
 //Factory method corresponding to constructor 'DateAdapterOptions(NativeObject, IsDefaultDateAdapterOptions)'.
 /** @return {!DateAdapterOptions} */
 static $create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultDateAdapterOptions(/** ? */ nativeObject, /** IsDefaultDateAdapterOptions */ defaultValues) {
  DateAdapterOptions.$clinit();
  let $instance = new DateAdapterOptions();
  $instance.$ctor__org_pepstock_charba_client_adapters_DateAdapterOptions__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultDateAdapterOptions(nativeObject, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'DateAdapterOptions(NativeObject, IsDefaultDateAdapterOptions)'.
 
 $ctor__org_pepstock_charba_client_adapters_DateAdapterOptions__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultDateAdapterOptions(/** ? */ nativeObject, /** IsDefaultDateAdapterOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_defaultValues__org_pepstock_charba_client_adapters_DateAdapterOptions_ = /**@type {IsDefaultDateAdapterOptions}*/ ($Casts.$to(this.m_checkDefaultValuesArgument__java_lang_Object(defaultValues), IsDefaultDateAdapterOptions));
 }
 
 m_setLocale__org_pepstock_charba_client_intl_CLocale(/** CLocale */ locale) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_LOCALE__org_pepstock_charba_client_adapters_DateAdapterOptions_Property, $Equality.$same(locale, null) ? null : locale.m_getIdentifier__());
 }
 /** @return {CLocale} */
 m_getLocale__() {
  let defaultLocale = this.f_defaultValues__org_pepstock_charba_client_adapters_DateAdapterOptions_.m_getLocale__();
  let value = this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_LOCALE__org_pepstock_charba_client_adapters_DateAdapterOptions_Property, $Equality.$same(defaultLocale, null) ? Undefined.f_STRING__org_pepstock_charba_client_items_Undefined : defaultLocale.m_getIdentifier__());
  if (!$Equality.$same(value, null) && ($Equality.$same(defaultLocale, null) || !j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(defaultLocale.m_getIdentifier__(), value))) {
   return CLocaleBuilder.m_build__java_lang_String(value);
  }
  return defaultLocale;
 }
 /** @return {boolean} */
 m_hasLocale___$pp_org_pepstock_charba_client_adapters() {
  return this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_LOCALE__org_pepstock_charba_client_adapters_DateAdapterOptions_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType);
 }
 
 m_setZone__org_pepstock_charba_client_intl_enums_TimeZone(/** TimeZone */ zone) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ZONE__org_pepstock_charba_client_adapters_DateAdapterOptions_Property, zone);
 }
 /** @return {TimeZone} */
 m_getZone__() {
  return /**@type {TimeZone}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ZONE__org_pepstock_charba_client_adapters_DateAdapterOptions_Property, TimeZone.m_values__(), this.f_defaultValues__org_pepstock_charba_client_adapters_DateAdapterOptions_.m_getZone__()), TimeZone));
 }
 
 m_setOutputCalendar__org_pepstock_charba_client_intl_enums_Calendar(/** Calendar */ outputCalendar) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_OUTPUT_CALENDAR__org_pepstock_charba_client_adapters_DateAdapterOptions_Property, outputCalendar);
 }
 /** @return {Calendar} */
 m_getOutputCalendar__() {
  return /**@type {Calendar}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_OUTPUT_CALENDAR__org_pepstock_charba_client_adapters_DateAdapterOptions_Property, Calendar.m_values__(), this.f_defaultValues__org_pepstock_charba_client_adapters_DateAdapterOptions_.m_getOutputCalendar__()), Calendar));
 }
 
 m_setNumberingSystem__org_pepstock_charba_client_intl_enums_NumberingSystem(/** NumberingSystem */ numberingSystem) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_NUMBERING_SYSTEM__org_pepstock_charba_client_adapters_DateAdapterOptions_Property, numberingSystem);
 }
 /** @return {NumberingSystem} */
 m_getNumberingSystem__() {
  return /**@type {NumberingSystem}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_NUMBERING_SYSTEM__org_pepstock_charba_client_adapters_DateAdapterOptions_Property, NumberingSystem.m_values__(), this.f_defaultValues__org_pepstock_charba_client_adapters_DateAdapterOptions_.m_getNumberingSystem__()), NumberingSystem));
 }
 /** @return {DateAdapter} */
 m_create__() {
  let clone = Helpers.m_get__().m_clone__org_pepstock_charba_client_commons_NativeObject(this.m_getNativeObject__());
  return DateAdapter.$create__org_pepstock_charba_client_adapters_DateAdapterOptions(DateAdapterOptions.$create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultDateAdapterOptions(clone, this.f_defaultValues__org_pepstock_charba_client_adapters_DateAdapterOptions_));
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_adapters() {
  return super.m_getNativeObject__();
 }
 /** @return {DateAdaptersOptionsFactory} */
 static get f_FACTORY__org_pepstock_charba_client_adapters_DateAdapterOptions() {
  return (DateAdapterOptions.$clinit(), DateAdapterOptions.$static_FACTORY__org_pepstock_charba_client_adapters_DateAdapterOptions);
 }
 
 static $clinit() {
  DateAdapterOptions.$clinit = () =>{};
  DateAdapterOptions.$loadModules();
  NativeObjectContainer.$clinit();
  DateAdapterOptions.$static_FACTORY__org_pepstock_charba_client_adapters_DateAdapterOptions = DateAdaptersOptionsFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateAdapterOptions;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Helpers = goog.module.get('org.pepstock.charba.client.Helpers$impl');
  DateAdapter = goog.module.get('org.pepstock.charba.client.adapters.DateAdapter$impl');
  DateAdaptersOptionsFactory = goog.module.get('org.pepstock.charba.client.adapters.DateAdapterOptions.DateAdaptersOptionsFactory$impl');
  Property = goog.module.get('org.pepstock.charba.client.adapters.DateAdapterOptions.Property$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  IsDefaultDateAdapterOptions = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultDateAdapterOptions$impl');
  DefaultDateAdapterOptions = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultDateAdapterOptions$impl');
  CLocaleBuilder = goog.module.get('org.pepstock.charba.client.intl.CLocaleBuilder$impl');
  Calendar = goog.module.get('org.pepstock.charba.client.intl.enums.Calendar$impl');
  NumberingSystem = goog.module.get('org.pepstock.charba.client.intl.enums.NumberingSystem$impl');
  TimeZone = goog.module.get('org.pepstock.charba.client.intl.enums.TimeZone$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {DateAdaptersOptionsFactory}*/
DateAdapterOptions.$static_FACTORY__org_pepstock_charba_client_adapters_DateAdapterOptions;
$Util.$setClassMetadata(DateAdapterOptions, "org.pepstock.charba.client.adapters.DateAdapterOptions");

exports = DateAdapterOptions;

//# sourceMappingURL=DateAdapterOptions.js.map
