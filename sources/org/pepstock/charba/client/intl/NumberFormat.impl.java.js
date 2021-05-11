goog.module('org.pepstock.charba.client.intl.NumberFormat$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractFormat = goog.require('org.pepstock.charba.client.intl.AbstractFormat$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let IsDefaultNumberFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions$impl');
let BaseFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.intl.BaseFormatOptions$impl');
let CLocale = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocale$impl');
let FormatPart = goog.forwardDeclare('org.pepstock.charba.client.intl.FormatPart$impl');
let NumberFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.intl.NumberFormatOptions$impl');
let NumberFormatWrapper = goog.forwardDeclare('org.pepstock.charba.client.intl.NumberFormatWrapper$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractFormat<NumberFormatWrapper, NumberFormatOptions, ?number, IsDefaultNumberFormatOptions>}
 */
class NumberFormat extends AbstractFormat {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'NumberFormat()'.
 /** @return {!NumberFormat} */
 static $create__() {
  NumberFormat.$clinit();
  let $instance = new NumberFormat();
  $instance.$ctor__org_pepstock_charba_client_intl_NumberFormat__();
  return $instance;
 }
 //Initialization from constructor 'NumberFormat()'.
 
 $ctor__org_pepstock_charba_client_intl_NumberFormat__() {
  this.$ctor__org_pepstock_charba_client_intl_NumberFormat__org_pepstock_charba_client_intl_CLocale(CLocale.m_getDefault__());
 }
 //Factory method corresponding to constructor 'NumberFormat(CLocale)'.
 /** @return {!NumberFormat} */
 static $create__org_pepstock_charba_client_intl_CLocale(/** CLocale */ locale) {
  NumberFormat.$clinit();
  let $instance = new NumberFormat();
  $instance.$ctor__org_pepstock_charba_client_intl_NumberFormat__org_pepstock_charba_client_intl_CLocale(locale);
  return $instance;
 }
 //Initialization from constructor 'NumberFormat(CLocale)'.
 
 $ctor__org_pepstock_charba_client_intl_NumberFormat__org_pepstock_charba_client_intl_CLocale(/** CLocale */ locale) {
  this.$ctor__org_pepstock_charba_client_intl_NumberFormat__org_pepstock_charba_client_intl_CLocale__org_pepstock_charba_client_intl_NumberFormatOptions(locale, null);
 }
 //Factory method corresponding to constructor 'NumberFormat(CLocale, NumberFormatOptions)'.
 /** @return {!NumberFormat} */
 static $create__org_pepstock_charba_client_intl_CLocale__org_pepstock_charba_client_intl_NumberFormatOptions(/** CLocale */ locale, /** NumberFormatOptions */ options) {
  NumberFormat.$clinit();
  let $instance = new NumberFormat();
  $instance.$ctor__org_pepstock_charba_client_intl_NumberFormat__org_pepstock_charba_client_intl_CLocale__org_pepstock_charba_client_intl_NumberFormatOptions(locale, options);
  return $instance;
 }
 //Initialization from constructor 'NumberFormat(CLocale, NumberFormatOptions)'.
 
 $ctor__org_pepstock_charba_client_intl_NumberFormat__org_pepstock_charba_client_intl_CLocale__org_pepstock_charba_client_intl_NumberFormatOptions(/** CLocale */ locale, /** NumberFormatOptions */ options) {
  this.$ctor__org_pepstock_charba_client_intl_AbstractFormat__org_pepstock_charba_client_intl_CLocale__java_lang_Object(locale, options);
 }
 /** @return {?string} */
 m_format__double(/** number */ value) {
  return super.m_format__java_lang_Object(value);
 }
 /** @return {List<FormatPart>} */
 m_formatToParts__double(/** number */ value) {
  return super.m_formatToParts__java_lang_Object(value);
 }
 /** @override @return {Array} */
 m_supportedLocalesOf__org_pepstock_charba_client_intl_CLocale_$pp_org_pepstock_charba_client_intl(/** CLocale */ locale) {
  return Intl.NumberFormat.supportedLocalesOf($Overlay.m_fromOrEmpty__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([locale.m_getIdentifier__()], j_l_String))), BaseFormatOptions.f_LOOKUP__org_pepstock_charba_client_intl_BaseFormatOptions.m_nativeObject___$pp_org_pepstock_charba_client_intl());
 }
 /** @return {NumberFormatWrapper} */
 m_createFormat__org_pepstock_charba_client_intl_CLocale__org_pepstock_charba_client_intl_NumberFormatOptions_$pp_org_pepstock_charba_client_intl(/** CLocale */ locale, /** NumberFormatOptions */ options) {
  return NumberFormatWrapper.$create__org_pepstock_charba_client_intl_CLocale__org_pepstock_charba_client_intl_NumberFormatOptions(locale, options);
 }
 //Bridge method.
 /** @override @return {NumberFormatWrapper} */
 m_createFormat__org_pepstock_charba_client_intl_CLocale__java_lang_Object_$pp_org_pepstock_charba_client_intl(/** CLocale */ arg0, /** NumberFormatOptions */ arg1) {
  return this.m_createFormat__org_pepstock_charba_client_intl_CLocale__org_pepstock_charba_client_intl_NumberFormatOptions_$pp_org_pepstock_charba_client_intl(arg0, /**@type {NumberFormatOptions}*/ ($Casts.$to(arg1, NumberFormatOptions)));
 }
 
 static $clinit() {
  NumberFormat.$clinit = () =>{};
  NumberFormat.$loadModules();
  AbstractFormat.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NumberFormat;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  BaseFormatOptions = goog.module.get('org.pepstock.charba.client.intl.BaseFormatOptions$impl');
  CLocale = goog.module.get('org.pepstock.charba.client.intl.CLocale$impl');
  NumberFormatOptions = goog.module.get('org.pepstock.charba.client.intl.NumberFormatOptions$impl');
  NumberFormatWrapper = goog.module.get('org.pepstock.charba.client.intl.NumberFormatWrapper$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(NumberFormat, "org.pepstock.charba.client.intl.NumberFormat");

exports = NumberFormat;

//# sourceMappingURL=NumberFormat.js.map
