goog.module('org.pepstock.charba.client.intl.DateTimeFormatWrapper$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbtsractFormatWrapper = goog.require('org.pepstock.charba.client.intl.AbtsractFormatWrapper$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsDefaultDateTimeFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultDateTimeFormatOptions$impl');
let CLocale = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocale$impl');
let DateTimeFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.intl.DateTimeFormatOptions$impl');
let ResolvedOptions = goog.forwardDeclare('org.pepstock.charba.client.intl.DateTimeFormatWrapper.ResolvedOptions$impl');
let NativeDate_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.intl.NativeDate.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.intl.NativeDateTimeFormat.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbtsractFormatWrapper<Intl.DateTimeFormat, Date, IsDefaultDateTimeFormatOptions>}
 */
class DateTimeFormatWrapper extends AbtsractFormatWrapper {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatWrapper} */
 static $create__org_pepstock_charba_client_intl_CLocale__org_pepstock_charba_client_intl_DateTimeFormatOptions(/** CLocale */ locale, /** DateTimeFormatOptions */ options) {
  DateTimeFormatWrapper.$clinit();
  let $instance = new DateTimeFormatWrapper();
  $instance.$ctor__org_pepstock_charba_client_intl_DateTimeFormatWrapper__org_pepstock_charba_client_intl_CLocale__org_pepstock_charba_client_intl_DateTimeFormatOptions(locale, options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_DateTimeFormatWrapper__org_pepstock_charba_client_intl_CLocale__org_pepstock_charba_client_intl_DateTimeFormatOptions(/** CLocale */ locale, /** DateTimeFormatOptions */ options) {
  this.$ctor__org_pepstock_charba_client_intl_AbtsractFormatWrapper__java_lang_Object(new Intl.DateTimeFormat(locale.m_getIdentifier__(), !$Equality.$same(options, null) ? options.m_nativeObject___$pp_org_pepstock_charba_client_intl() : DateTimeFormatWrapper.f_EMPTY_OPTIONS__org_pepstock_charba_client_intl_DateTimeFormatWrapper_));
 }
 /** @return {?string} */
 m_format__java_util_Date_$pp_org_pepstock_charba_client_intl(/** Date */ value) {
  return /**@type {Intl.DateTimeFormat}*/ ($Casts.$to(this.m_getNativeFormat___$pp_org_pepstock_charba_client_intl(), $Overlay)).format(NativeDate_$Overlay.m_create__java_util_Date(value));
 }
 /** @override @return {IsDefaultDateTimeFormatOptions} */
 m_resolvedOptions___$pp_org_pepstock_charba_client_intl() {
  let formatOptions = DateTimeFormatOptions.$create__org_pepstock_charba_client_commons_NativeObject(/**@type {Intl.DateTimeFormat}*/ ($Casts.$to(this.m_getNativeFormat___$pp_org_pepstock_charba_client_intl(), $Overlay)).resolvedOptions());
  return ResolvedOptions.$create__org_pepstock_charba_client_intl_DateTimeFormatOptions(formatOptions);
 }
 /** @return {Array} */
 m_formatToParts__java_util_Date_$pp_org_pepstock_charba_client_intl(/** Date */ value) {
  return /**@type {Intl.DateTimeFormat}*/ ($Casts.$to(this.m_getNativeFormat___$pp_org_pepstock_charba_client_intl(), $Overlay)).formatToParts(NativeDate_$Overlay.m_create__java_util_Date(value));
 }
 //Bridge method.
 /** @override @return {?string} */
 m_format__java_lang_Object_$pp_org_pepstock_charba_client_intl(/** Date */ arg0) {
  return this.m_format__java_util_Date_$pp_org_pepstock_charba_client_intl(/**@type {Date}*/ ($Casts.$to(arg0, Date)));
 }
 //Bridge method.
 /** @override @return {Array} */
 m_formatToParts__java_lang_Object_$pp_org_pepstock_charba_client_intl(/** Date */ arg0) {
  return this.m_formatToParts__java_util_Date_$pp_org_pepstock_charba_client_intl(/**@type {Date}*/ ($Casts.$to(arg0, Date)));
 }
 
 static $clinit() {
  DateTimeFormatWrapper.$clinit = () =>{};
  DateTimeFormatWrapper.$loadModules();
  AbtsractFormatWrapper.$clinit();
  DateTimeFormatWrapper.f_EMPTY_OPTIONS__org_pepstock_charba_client_intl_DateTimeFormatWrapper_ = DateTimeFormatOptions.$create__().m_nativeObject___$pp_org_pepstock_charba_client_intl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatWrapper;
 }
 
 static $loadModules() {
  Date = goog.module.get('java.util.Date$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DateTimeFormatOptions = goog.module.get('org.pepstock.charba.client.intl.DateTimeFormatOptions$impl');
  ResolvedOptions = goog.module.get('org.pepstock.charba.client.intl.DateTimeFormatWrapper.ResolvedOptions$impl');
  NativeDate_$Overlay = goog.module.get('org.pepstock.charba.client.intl.NativeDate.$Overlay$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.intl.NativeDateTimeFormat.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {?}*/
DateTimeFormatWrapper.f_EMPTY_OPTIONS__org_pepstock_charba_client_intl_DateTimeFormatWrapper_;
$Util.$setClassMetadata(DateTimeFormatWrapper, "org.pepstock.charba.client.intl.DateTimeFormatWrapper");

exports = DateTimeFormatWrapper;

//# sourceMappingURL=DateTimeFormatWrapper.js.map
