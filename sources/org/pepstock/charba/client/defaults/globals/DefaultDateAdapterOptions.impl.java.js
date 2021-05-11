goog.module('org.pepstock.charba.client.defaults.globals.DefaultDateAdapterOptions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultDateAdapterOptions = goog.require('org.pepstock.charba.client.defaults.IsDefaultDateAdapterOptions$impl');

let CLocale = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocale$impl');
let Calendar = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.Calendar$impl');
let NumberingSystem = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.NumberingSystem$impl');
let TimeZone = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.TimeZone$impl');

/**
 * @implements {IsDefaultDateAdapterOptions}
 */
class DefaultDateAdapterOptions extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultDateAdapterOptions} */
 static $create__() {
  DefaultDateAdapterOptions.$clinit();
  let $instance = new DefaultDateAdapterOptions();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultDateAdapterOptions__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultDateAdapterOptions__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {CLocale} */
 m_getLocale__() {
  return DefaultDateAdapterOptions.f_DEFAULT_LOCALE__org_pepstock_charba_client_defaults_globals_DefaultDateAdapterOptions_;
 }
 /** @override @return {TimeZone} */
 m_getZone__() {
  return DefaultDateAdapterOptions.f_DEFAULT_ZONE__org_pepstock_charba_client_defaults_globals_DefaultDateAdapterOptions_;
 }
 /** @override @return {Calendar} */
 m_getOutputCalendar__() {
  return DefaultDateAdapterOptions.f_DEFAULT_OUTPUT_CALENDAR__org_pepstock_charba_client_defaults_globals_DefaultDateAdapterOptions_;
 }
 /** @override @return {NumberingSystem} */
 m_getNumberingSystem__() {
  return DefaultDateAdapterOptions.f_DEFAULT_NUMBERING_SYSTEM__org_pepstock_charba_client_defaults_globals_DefaultDateAdapterOptions_;
 }
 /** @return {IsDefaultDateAdapterOptions} */
 static get f_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultDateAdapterOptions() {
  return (DefaultDateAdapterOptions.$clinit(), DefaultDateAdapterOptions.$static_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultDateAdapterOptions);
 }
 
 static $clinit() {
  DefaultDateAdapterOptions.$clinit = () =>{};
  DefaultDateAdapterOptions.$loadModules();
  j_l_Object.$clinit();
  DefaultDateAdapterOptions.$static_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultDateAdapterOptions = DefaultDateAdapterOptions.$create__();
  DefaultDateAdapterOptions.f_DEFAULT_LOCALE__org_pepstock_charba_client_defaults_globals_DefaultDateAdapterOptions_ = null;
  DefaultDateAdapterOptions.f_DEFAULT_ZONE__org_pepstock_charba_client_defaults_globals_DefaultDateAdapterOptions_ = null;
  DefaultDateAdapterOptions.f_DEFAULT_OUTPUT_CALENDAR__org_pepstock_charba_client_defaults_globals_DefaultDateAdapterOptions_ = null;
  DefaultDateAdapterOptions.f_DEFAULT_NUMBERING_SYSTEM__org_pepstock_charba_client_defaults_globals_DefaultDateAdapterOptions_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultDateAdapterOptions;
 }
 
 static $loadModules() {}
}
/**@private {IsDefaultDateAdapterOptions}*/
DefaultDateAdapterOptions.$static_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultDateAdapterOptions;
/**@type {CLocale}*/
DefaultDateAdapterOptions.f_DEFAULT_LOCALE__org_pepstock_charba_client_defaults_globals_DefaultDateAdapterOptions_;
/**@type {TimeZone}*/
DefaultDateAdapterOptions.f_DEFAULT_ZONE__org_pepstock_charba_client_defaults_globals_DefaultDateAdapterOptions_;
/**@type {Calendar}*/
DefaultDateAdapterOptions.f_DEFAULT_OUTPUT_CALENDAR__org_pepstock_charba_client_defaults_globals_DefaultDateAdapterOptions_;
/**@type {NumberingSystem}*/
DefaultDateAdapterOptions.f_DEFAULT_NUMBERING_SYSTEM__org_pepstock_charba_client_defaults_globals_DefaultDateAdapterOptions_;
IsDefaultDateAdapterOptions.$markImplementor(DefaultDateAdapterOptions);
$Util.$setClassMetadata(DefaultDateAdapterOptions, "org.pepstock.charba.client.defaults.globals.DefaultDateAdapterOptions");

exports = DefaultDateAdapterOptions;

//# sourceMappingURL=DefaultDateAdapterOptions.js.map
