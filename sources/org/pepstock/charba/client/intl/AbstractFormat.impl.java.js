goog.module('org.pepstock.charba.client.intl.AbstractFormat$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let FormatPartsFactory = goog.forwardDeclare('org.pepstock.charba.client.intl.AbstractFormat.FormatPartsFactory$impl');
let AbtsractFormatWrapper = goog.forwardDeclare('org.pepstock.charba.client.intl.AbtsractFormatWrapper$impl');
let CLocale = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocale$impl');
let FormatPart = goog.forwardDeclare('org.pepstock.charba.client.intl.FormatPart$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template F, O, T, R
 */
class AbstractFormat extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CLocale}*/
  this.f_locale__org_pepstock_charba_client_intl_AbstractFormat_;
  /**@type {F}*/
  this.f_formatter__org_pepstock_charba_client_intl_AbstractFormat_;
  /**@type {R}*/
  this.f_resolvedOptions__org_pepstock_charba_client_intl_AbstractFormat_;
 }
 
 $ctor__org_pepstock_charba_client_intl_AbstractFormat__org_pepstock_charba_client_intl_CLocale__java_lang_Object(/** CLocale */ locale, /** O */ options) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_intl_AbstractFormat();
  this.f_locale__org_pepstock_charba_client_intl_AbstractFormat_ = /**@type {CLocale}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(locale, "Locale argument"), CLocale));
  let supportedLocales = this.m_supportedLocalesOf__org_pepstock_charba_client_intl_CLocale_$pp_org_pepstock_charba_client_intl(locale);
  Checker.m_checkIfNotEqualTo__int__int__java_lang_String(supportedLocales.length, 0, "Locale '" + j_l_String.m_valueOf__java_lang_Object(locale.m_getIdentifier__()) + "' is not supported. Locale array size");
  this.f_formatter__org_pepstock_charba_client_intl_AbstractFormat_ = this.m_createFormat__org_pepstock_charba_client_intl_CLocale__java_lang_Object_$pp_org_pepstock_charba_client_intl(locale, options);
 }
 /** @abstract @return {Array} */
 m_supportedLocalesOf__org_pepstock_charba_client_intl_CLocale_$pp_org_pepstock_charba_client_intl(/** CLocale */ locale) {}
 /** @abstract @return {F} */
 m_createFormat__org_pepstock_charba_client_intl_CLocale__java_lang_Object_$pp_org_pepstock_charba_client_intl(/** CLocale */ locale, /** O */ options) {}
 /** @return {CLocale} */
 m_getLocale__() {
  return this.f_locale__org_pepstock_charba_client_intl_AbstractFormat_;
 }
 /** @return {?string} */
 m_format__java_lang_Object(/** T */ value) {
  if (!$Equality.$same(value, null)) {
   return /**@type {AbtsractFormatWrapper}*/ (this.f_formatter__org_pepstock_charba_client_intl_AbstractFormat_).m_format__java_lang_Object_$pp_org_pepstock_charba_client_intl(value);
  }
  return Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
 }
 /** @return {R} */
 m_resolvedOptions__() {
  if ($Equality.$same(this.f_resolvedOptions__org_pepstock_charba_client_intl_AbstractFormat_, null)) {
   this.f_resolvedOptions__org_pepstock_charba_client_intl_AbstractFormat_ = /**@type {AbtsractFormatWrapper}*/ (this.f_formatter__org_pepstock_charba_client_intl_AbstractFormat_).m_resolvedOptions___$pp_org_pepstock_charba_client_intl();
  }
  return this.f_resolvedOptions__org_pepstock_charba_client_intl_AbstractFormat_;
 }
 /** @return {List<FormatPart>} */
 m_formatToParts__java_lang_Object(/** T */ value) {
  if (!$Equality.$same(value, null)) {
   let array = /**@type {AbtsractFormatWrapper}*/ (this.f_formatter__org_pepstock_charba_client_intl_AbstractFormat_).m_formatToParts__java_lang_Object_$pp_org_pepstock_charba_client_intl(value);
   return /**@type {List<FormatPart>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, AbstractFormat.f_FACTORY__org_pepstock_charba_client_intl_AbstractFormat_));
  }
  return /**@type {List<FormatPart>}*/ (Collections.m_emptyList__());
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_intl_AbstractFormat() {
  this.f_resolvedOptions__org_pepstock_charba_client_intl_AbstractFormat_ = null;
 }
 
 static $clinit() {
  AbstractFormat.$clinit = () =>{};
  AbstractFormat.$loadModules();
  j_l_Object.$clinit();
  AbstractFormat.f_FACTORY__org_pepstock_charba_client_intl_AbstractFormat_ = FormatPartsFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractFormat;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  FormatPartsFactory = goog.module.get('org.pepstock.charba.client.intl.AbstractFormat.FormatPartsFactory$impl');
  CLocale = goog.module.get('org.pepstock.charba.client.intl.CLocale$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {FormatPartsFactory}*/
AbstractFormat.f_FACTORY__org_pepstock_charba_client_intl_AbstractFormat_;
$Util.$setClassMetadata(AbstractFormat, "org.pepstock.charba.client.intl.AbstractFormat");

exports = AbstractFormat;

//# sourceMappingURL=AbstractFormat.js.map
