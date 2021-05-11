goog.module('org.pepstock.charba.client.intl.BaseFormatOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
const IsDefaultBaseFormatOptions = goog.require('org.pepstock.charba.client.defaults.IsDefaultBaseFormatOptions$impl');

let DefaultBaseFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultBaseFormatOptions$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.intl.BaseFormatOptions.Property$impl');
let LocaleMatcher = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.LocaleMatcher$impl');
let NumberingSystem = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.NumberingSystem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template D
 * @implements {IsDefaultBaseFormatOptions}
 */
class BaseFormatOptions extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {D}*/
  this.f_defaultValues__org_pepstock_charba_client_intl_BaseFormatOptions_;
 }
 //Factory method corresponding to constructor 'BaseFormatOptions(IsDefaultBaseFormatOptions)'.
 /** @template D @return {!BaseFormatOptions<D>} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultBaseFormatOptions(/** D */ defaultValues) {
  let $instance = new BaseFormatOptions();
  $instance.$ctor__org_pepstock_charba_client_intl_BaseFormatOptions__org_pepstock_charba_client_defaults_IsDefaultBaseFormatOptions(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'BaseFormatOptions(IsDefaultBaseFormatOptions)'.
 
 $ctor__org_pepstock_charba_client_intl_BaseFormatOptions__org_pepstock_charba_client_defaults_IsDefaultBaseFormatOptions(/** D */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_intl_BaseFormatOptions__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultBaseFormatOptions(null, defaultValues);
  this.m_setLocaleMatcher__org_pepstock_charba_client_intl_enums_LocaleMatcher(LocaleMatcher.f_LOOKUP__org_pepstock_charba_client_intl_enums_LocaleMatcher);
 }
 //Factory method corresponding to constructor 'BaseFormatOptions(NativeObject, IsDefaultBaseFormatOptions)'.
 /** @template D @return {!BaseFormatOptions<D>} */
 static $create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultBaseFormatOptions(/** ? */ nativeObject, /** D */ defaultValues) {
  BaseFormatOptions.$clinit();
  let $instance = new BaseFormatOptions();
  $instance.$ctor__org_pepstock_charba_client_intl_BaseFormatOptions__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultBaseFormatOptions(nativeObject, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'BaseFormatOptions(NativeObject, IsDefaultBaseFormatOptions)'.
 
 $ctor__org_pepstock_charba_client_intl_BaseFormatOptions__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultBaseFormatOptions(/** ? */ nativeObject, /** D */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_defaultValues__org_pepstock_charba_client_intl_BaseFormatOptions_ = /**@type {D}*/ ($Casts.$to(this.m_checkDefaultValuesArgument__java_lang_Object(defaultValues), IsDefaultBaseFormatOptions));
 }
 /** @return {D} */
 m_getDefaultValues__() {
  return this.f_defaultValues__org_pepstock_charba_client_intl_BaseFormatOptions_;
 }
 
 m_setLocaleMatcher__org_pepstock_charba_client_intl_enums_LocaleMatcher(/** LocaleMatcher */ localeMatcher) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_LOCALE_MACTHER__org_pepstock_charba_client_intl_BaseFormatOptions_Property, localeMatcher);
 }
 /** @override @return {LocaleMatcher} */
 m_getLocaleMatcher__() {
  return /**@type {LocaleMatcher}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_LOCALE_MACTHER__org_pepstock_charba_client_intl_BaseFormatOptions_Property, LocaleMatcher.m_values__(), /**@type {IsDefaultBaseFormatOptions}*/ (this.f_defaultValues__org_pepstock_charba_client_intl_BaseFormatOptions_).m_getLocaleMatcher__()), LocaleMatcher));
 }
 
 m_setNumberingSystem__org_pepstock_charba_client_intl_enums_NumberingSystem(/** NumberingSystem */ numberingSystem) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_NUMBERING_SYSTEM__org_pepstock_charba_client_intl_BaseFormatOptions_Property, numberingSystem);
 }
 /** @override @return {NumberingSystem} */
 m_getNumberingSystem__() {
  return /**@type {NumberingSystem}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_NUMBERING_SYSTEM__org_pepstock_charba_client_intl_BaseFormatOptions_Property, NumberingSystem.m_values__(), /**@type {IsDefaultBaseFormatOptions}*/ (this.f_defaultValues__org_pepstock_charba_client_intl_BaseFormatOptions_).m_getNumberingSystem__()), NumberingSystem));
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_intl() {
  return this.m_getNativeObject__();
 }
 /** @return {BaseFormatOptions<IsDefaultBaseFormatOptions>} */
 static get f_LOOKUP__org_pepstock_charba_client_intl_BaseFormatOptions() {
  return (BaseFormatOptions.$clinit(), BaseFormatOptions.$static_LOOKUP__org_pepstock_charba_client_intl_BaseFormatOptions);
 }
 
 static $clinit() {
  BaseFormatOptions.$clinit = () =>{};
  BaseFormatOptions.$loadModules();
  NativeObjectContainer.$clinit();
  BaseFormatOptions.$static_LOOKUP__org_pepstock_charba_client_intl_BaseFormatOptions = /**@type {!BaseFormatOptions<IsDefaultBaseFormatOptions>}*/ (BaseFormatOptions.$create__org_pepstock_charba_client_defaults_IsDefaultBaseFormatOptions(DefaultBaseFormatOptions.f_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultBaseFormatOptions));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseFormatOptions;
 }
 
 static $loadModules() {
  DefaultBaseFormatOptions = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultBaseFormatOptions$impl');
  Property = goog.module.get('org.pepstock.charba.client.intl.BaseFormatOptions.Property$impl');
  LocaleMatcher = goog.module.get('org.pepstock.charba.client.intl.enums.LocaleMatcher$impl');
  NumberingSystem = goog.module.get('org.pepstock.charba.client.intl.enums.NumberingSystem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {BaseFormatOptions<IsDefaultBaseFormatOptions>}*/
BaseFormatOptions.$static_LOOKUP__org_pepstock_charba_client_intl_BaseFormatOptions;
IsDefaultBaseFormatOptions.$markImplementor(BaseFormatOptions);
$Util.$setClassMetadata(BaseFormatOptions, "org.pepstock.charba.client.intl.BaseFormatOptions");

exports = BaseFormatOptions;

//# sourceMappingURL=BaseFormatOptions.js.map
