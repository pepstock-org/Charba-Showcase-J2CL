goog.module('org.pepstock.charba.client.options.DisplayFormats$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DateAdapter = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapter$impl');
let DateAdapterFormats = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapterFormats$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let NoDefaults = goog.forwardDeclare('org.pepstock.charba.client.defaults.NoDefaults$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');
let Time = goog.forwardDeclare('org.pepstock.charba.client.options.Time$impl');

/**
 * @extends {AbstractModel<Time, NoDefaults>}
 */
class DisplayFormats extends AbstractModel {
 /** @protected */
 constructor() {
  super();
  /**@type {DateAdapterFormats}*/
  this.f_defaultFormats__org_pepstock_charba_client_options_DisplayFormats_;
 }
 /** @return {!DisplayFormats} */
 static $create__org_pepstock_charba_client_options_Time__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(/** Time */ time, /** Key */ childKey, /** ? */ nativeObject) {
  DisplayFormats.$clinit();
  let $instance = new DisplayFormats();
  $instance.$ctor__org_pepstock_charba_client_options_DisplayFormats__org_pepstock_charba_client_options_Time__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(time, childKey, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_DisplayFormats__org_pepstock_charba_client_options_Time__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(/** Time */ time, /** Key */ childKey, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(time, childKey, NoDefaults.f_INSTANCE__org_pepstock_charba_client_defaults_NoDefaults, nativeObject);
  this.$init___$p_org_pepstock_charba_client_options_DisplayFormats();
 }
 
 m_setDisplayFormat__org_pepstock_charba_client_enums_TimeUnit__java_lang_String(/** TimeUnit */ unit, /** ?string */ format) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(unit, format);
 }
 /** @return {?string} */
 m_getDisplayFormat__org_pepstock_charba_client_enums_TimeUnit(/** TimeUnit */ unit) {
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(unit)) {
   if ($Equality.$same(this.f_defaultFormats__org_pepstock_charba_client_options_DisplayFormats_, null)) {
    let adapter = DateAdapter.$create__();
    this.f_defaultFormats__org_pepstock_charba_client_options_DisplayFormats_ = adapter.m_getFormats__();
   }
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(unit, this.f_defaultFormats__org_pepstock_charba_client_options_DisplayFormats_.m_getFormat__org_pepstock_charba_client_enums_TimeUnit(unit));
  }
  return null;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_options_DisplayFormats() {
  this.f_defaultFormats__org_pepstock_charba_client_options_DisplayFormats_ = null;
 }
 
 static $clinit() {
  DisplayFormats.$clinit = () =>{};
  DisplayFormats.$loadModules();
  AbstractModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DisplayFormats;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DateAdapter = goog.module.get('org.pepstock.charba.client.adapters.DateAdapter$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  NoDefaults = goog.module.get('org.pepstock.charba.client.defaults.NoDefaults$impl');
 }
}
$Util.$setClassMetadata(DisplayFormats, "org.pepstock.charba.client.options.DisplayFormats");

exports = DisplayFormats;

//# sourceMappingURL=DisplayFormats.js.map
