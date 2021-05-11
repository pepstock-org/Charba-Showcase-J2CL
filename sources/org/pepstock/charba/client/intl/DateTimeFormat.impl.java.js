goog.module('org.pepstock.charba.client.intl.DateTimeFormat$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractFormat = goog.require('org.pepstock.charba.client.intl.AbstractFormat$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let IsDefaultDateTimeFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultDateTimeFormatOptions$impl');
let BaseFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.intl.BaseFormatOptions$impl');
let CLocale = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocale$impl');
let DateTimeFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.intl.DateTimeFormatOptions$impl');
let DateTimeFormatWrapper = goog.forwardDeclare('org.pepstock.charba.client.intl.DateTimeFormatWrapper$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractFormat<DateTimeFormatWrapper, DateTimeFormatOptions, Date, IsDefaultDateTimeFormatOptions>}
 */
class DateTimeFormat extends AbstractFormat {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'DateTimeFormat()'.
 /** @return {!DateTimeFormat} */
 static $create__() {
  DateTimeFormat.$clinit();
  let $instance = new DateTimeFormat();
  $instance.$ctor__org_pepstock_charba_client_intl_DateTimeFormat__();
  return $instance;
 }
 //Initialization from constructor 'DateTimeFormat()'.
 
 $ctor__org_pepstock_charba_client_intl_DateTimeFormat__() {
  this.$ctor__org_pepstock_charba_client_intl_DateTimeFormat__org_pepstock_charba_client_intl_CLocale(CLocale.m_getDefault__());
 }
 //Factory method corresponding to constructor 'DateTimeFormat(CLocale)'.
 /** @return {!DateTimeFormat} */
 static $create__org_pepstock_charba_client_intl_CLocale(/** CLocale */ locale) {
  DateTimeFormat.$clinit();
  let $instance = new DateTimeFormat();
  $instance.$ctor__org_pepstock_charba_client_intl_DateTimeFormat__org_pepstock_charba_client_intl_CLocale(locale);
  return $instance;
 }
 //Initialization from constructor 'DateTimeFormat(CLocale)'.
 
 $ctor__org_pepstock_charba_client_intl_DateTimeFormat__org_pepstock_charba_client_intl_CLocale(/** CLocale */ locale) {
  this.$ctor__org_pepstock_charba_client_intl_DateTimeFormat__org_pepstock_charba_client_intl_CLocale__org_pepstock_charba_client_intl_DateTimeFormatOptions(locale, null);
 }
 //Factory method corresponding to constructor 'DateTimeFormat(CLocale, DateTimeFormatOptions)'.
 /** @return {!DateTimeFormat} */
 static $create__org_pepstock_charba_client_intl_CLocale__org_pepstock_charba_client_intl_DateTimeFormatOptions(/** CLocale */ locale, /** DateTimeFormatOptions */ options) {
  DateTimeFormat.$clinit();
  let $instance = new DateTimeFormat();
  $instance.$ctor__org_pepstock_charba_client_intl_DateTimeFormat__org_pepstock_charba_client_intl_CLocale__org_pepstock_charba_client_intl_DateTimeFormatOptions(locale, options);
  return $instance;
 }
 //Initialization from constructor 'DateTimeFormat(CLocale, DateTimeFormatOptions)'.
 
 $ctor__org_pepstock_charba_client_intl_DateTimeFormat__org_pepstock_charba_client_intl_CLocale__org_pepstock_charba_client_intl_DateTimeFormatOptions(/** CLocale */ locale, /** DateTimeFormatOptions */ options) {
  this.$ctor__org_pepstock_charba_client_intl_AbstractFormat__org_pepstock_charba_client_intl_CLocale__java_lang_Object(locale, options);
 }
 /** @override @return {Array} */
 m_supportedLocalesOf__org_pepstock_charba_client_intl_CLocale_$pp_org_pepstock_charba_client_intl(/** CLocale */ locale) {
  return Intl.DateTimeFormat.supportedLocalesOf($Overlay.m_fromOrEmpty__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([locale.m_getIdentifier__()], j_l_String))), BaseFormatOptions.f_LOOKUP__org_pepstock_charba_client_intl_BaseFormatOptions.m_nativeObject___$pp_org_pepstock_charba_client_intl());
 }
 /** @return {DateTimeFormatWrapper} */
 m_createFormat__org_pepstock_charba_client_intl_CLocale__org_pepstock_charba_client_intl_DateTimeFormatOptions_$pp_org_pepstock_charba_client_intl(/** CLocale */ locale, /** DateTimeFormatOptions */ options) {
  return DateTimeFormatWrapper.$create__org_pepstock_charba_client_intl_CLocale__org_pepstock_charba_client_intl_DateTimeFormatOptions(locale, options);
 }
 //Bridge method.
 /** @override @return {DateTimeFormatWrapper} */
 m_createFormat__org_pepstock_charba_client_intl_CLocale__java_lang_Object_$pp_org_pepstock_charba_client_intl(/** CLocale */ arg0, /** DateTimeFormatOptions */ arg1) {
  return this.m_createFormat__org_pepstock_charba_client_intl_CLocale__org_pepstock_charba_client_intl_DateTimeFormatOptions_$pp_org_pepstock_charba_client_intl(arg0, /**@type {DateTimeFormatOptions}*/ ($Casts.$to(arg1, DateTimeFormatOptions)));
 }
 
 static $clinit() {
  DateTimeFormat.$clinit = () =>{};
  DateTimeFormat.$loadModules();
  AbstractFormat.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormat;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  BaseFormatOptions = goog.module.get('org.pepstock.charba.client.intl.BaseFormatOptions$impl');
  CLocale = goog.module.get('org.pepstock.charba.client.intl.CLocale$impl');
  DateTimeFormatOptions = goog.module.get('org.pepstock.charba.client.intl.DateTimeFormatOptions$impl');
  DateTimeFormatWrapper = goog.module.get('org.pepstock.charba.client.intl.DateTimeFormatWrapper$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(DateTimeFormat, "org.pepstock.charba.client.intl.DateTimeFormat");

exports = DateTimeFormat;

//# sourceMappingURL=DateTimeFormat.js.map
