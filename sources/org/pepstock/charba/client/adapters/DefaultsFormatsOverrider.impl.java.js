goog.module('org.pepstock.charba.client.adapters.DefaultsFormatsOverrider$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapterFormats.Property$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');

class DefaultsFormatsOverrider extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultsFormatsOverrider} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  DefaultsFormatsOverrider.$clinit();
  let $instance = new DefaultsFormatsOverrider();
  $instance.$ctor__org_pepstock_charba_client_adapters_DefaultsFormatsOverrider__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_adapters_DefaultsFormatsOverrider__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 m_override___$pp_org_pepstock_charba_client_adapters() {
  this.m_setFormat__org_pepstock_charba_client_commons_Key__java_lang_String_$pp_org_pepstock_charba_client_adapters(Property.f_DATETIME__org_pepstock_charba_client_adapters_DateAdapterFormats_Property, "MMM d, yyyy, h:mm:ss a");
  this.m_setFormat__org_pepstock_charba_client_commons_Key__java_lang_String_$pp_org_pepstock_charba_client_adapters(TimeUnit.f_MILLISECOND__org_pepstock_charba_client_enums_TimeUnit, "h:mm:ss.SSS a");
  this.m_setFormat__org_pepstock_charba_client_commons_Key__java_lang_String_$pp_org_pepstock_charba_client_adapters(TimeUnit.f_SECOND__org_pepstock_charba_client_enums_TimeUnit, "h:mm:ss a");
  this.m_setFormat__org_pepstock_charba_client_commons_Key__java_lang_String_$pp_org_pepstock_charba_client_adapters(TimeUnit.f_MINUTE__org_pepstock_charba_client_enums_TimeUnit, "h:mm a");
  this.m_setFormat__org_pepstock_charba_client_commons_Key__java_lang_String_$pp_org_pepstock_charba_client_adapters(TimeUnit.f_HOUR__org_pepstock_charba_client_enums_TimeUnit, "ha");
  this.m_setFormat__org_pepstock_charba_client_commons_Key__java_lang_String_$pp_org_pepstock_charba_client_adapters(TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit, "MMM d");
  this.m_setFormat__org_pepstock_charba_client_commons_Key__java_lang_String_$pp_org_pepstock_charba_client_adapters(TimeUnit.f_WEEK__org_pepstock_charba_client_enums_TimeUnit, "W yyyy");
  this.m_setFormat__org_pepstock_charba_client_commons_Key__java_lang_String_$pp_org_pepstock_charba_client_adapters(TimeUnit.f_MONTH__org_pepstock_charba_client_enums_TimeUnit, "MMM yyyy");
  this.m_setFormat__org_pepstock_charba_client_commons_Key__java_lang_String_$pp_org_pepstock_charba_client_adapters(TimeUnit.f_QUARTER__org_pepstock_charba_client_enums_TimeUnit, "'Q'q - yyyy");
  this.m_setFormat__org_pepstock_charba_client_commons_Key__java_lang_String_$pp_org_pepstock_charba_client_adapters(TimeUnit.f_YEAR__org_pepstock_charba_client_enums_TimeUnit, "yyyy");
 }
 
 m_setFormat__org_pepstock_charba_client_commons_Key__java_lang_String_$pp_org_pepstock_charba_client_adapters(/** Key */ unit, /** ?string */ format) {
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(unit) && !$Equality.$same(format, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(unit, format);
  }
 }
 
 static $clinit() {
  DefaultsFormatsOverrider.$clinit = () =>{};
  DefaultsFormatsOverrider.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultsFormatsOverrider;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Property = goog.module.get('org.pepstock.charba.client.adapters.DateAdapterFormats.Property$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  TimeUnit = goog.module.get('org.pepstock.charba.client.enums.TimeUnit$impl');
 }
}
$Util.$setClassMetadata(DefaultsFormatsOverrider, "org.pepstock.charba.client.adapters.DefaultsFormatsOverrider");

exports = DefaultsFormatsOverrider;

//# sourceMappingURL=DefaultsFormatsOverrider.js.map
