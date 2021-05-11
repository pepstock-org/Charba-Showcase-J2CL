goog.module('org.pepstock.charba.client.intl.CLocaleBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let CLocale = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocale$impl');
let LocaleRegExpGroups = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocaleBuilder.LocaleRegExpGroups$impl');
let LocaleRegExpGroupsFactory = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocaleBuilder.LocaleRegExpGroupsFactory$impl');
let Language = goog.forwardDeclare('org.pepstock.charba.client.intl.Language$impl');
let Region = goog.forwardDeclare('org.pepstock.charba.client.intl.Region$impl');
let Script = goog.forwardDeclare('org.pepstock.charba.client.intl.Script$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.utils.RegExpResult.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CLocaleBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Language}*/
  this.f_language__org_pepstock_charba_client_intl_CLocaleBuilder_;
  /**@type {Script}*/
  this.f_script__org_pepstock_charba_client_intl_CLocaleBuilder_;
  /**@type {Region}*/
  this.f_region__org_pepstock_charba_client_intl_CLocaleBuilder_;
  /**@type {?string}*/
  this.f_variantAndExtension__org_pepstock_charba_client_intl_CLocaleBuilder_;
 }
 /** @return {!CLocaleBuilder} */
 static $create__org_pepstock_charba_client_intl_Language(/** Language */ language) {
  let $instance = new CLocaleBuilder();
  $instance.$ctor__org_pepstock_charba_client_intl_CLocaleBuilder__org_pepstock_charba_client_intl_Language(language);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_CLocaleBuilder__org_pepstock_charba_client_intl_Language(/** Language */ language) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_intl_CLocaleBuilder();
  this.f_language__org_pepstock_charba_client_intl_CLocaleBuilder_ = !$Equality.$same(language, null) ? language : Language.f_ENGLISH__org_pepstock_charba_client_intl_Language;
 }
 /** @return {CLocaleBuilder} */
 static m_create__org_pepstock_charba_client_intl_Language(/** Language */ language) {
  CLocaleBuilder.$clinit();
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(language);
  return CLocaleBuilder.$create__org_pepstock_charba_client_intl_Language(language);
 }
 /** @return {CLocaleBuilder} */
 m_setScript__org_pepstock_charba_client_intl_Script(/** Script */ script) {
  this.f_script__org_pepstock_charba_client_intl_CLocaleBuilder_ = script;
  return this;
 }
 /** @return {CLocaleBuilder} */
 m_setRegion__org_pepstock_charba_client_intl_Region(/** Region */ region) {
  this.f_region__org_pepstock_charba_client_intl_CLocaleBuilder_ = region;
  return this;
 }
 /** @return {CLocaleBuilder} */
 m_setVariantAndExtension__java_lang_String(/** ?string */ variantAndExtension) {
  this.f_variantAndExtension__org_pepstock_charba_client_intl_CLocaleBuilder_ = variantAndExtension;
  return this;
 }
 /** @return {CLocale} */
 m_build__() {
  let localeKey = CLocaleBuilder.m_createLocaleIdentifier__org_pepstock_charba_client_intl_Language__org_pepstock_charba_client_intl_Script__org_pepstock_charba_client_intl_Region__java_lang_String(this.f_language__org_pepstock_charba_client_intl_CLocaleBuilder_, this.f_script__org_pepstock_charba_client_intl_CLocaleBuilder_, this.f_region__org_pepstock_charba_client_intl_CLocaleBuilder_, this.f_variantAndExtension__org_pepstock_charba_client_intl_CLocaleBuilder_);
  return CLocaleBuilder.m_createLocale__java_lang_String__org_pepstock_charba_client_intl_Language__org_pepstock_charba_client_intl_Script__org_pepstock_charba_client_intl_Region__java_lang_String(localeKey, this.f_language__org_pepstock_charba_client_intl_CLocaleBuilder_, this.f_script__org_pepstock_charba_client_intl_CLocaleBuilder_, this.f_region__org_pepstock_charba_client_intl_CLocaleBuilder_, this.f_variantAndExtension__org_pepstock_charba_client_intl_CLocaleBuilder_);
 }
 /** @return {CLocale} */
 static m_build__java_lang_String(/** ?string */ localeIdentifier) {
  CLocaleBuilder.$clinit();
  let uncheckedGroups = CLocaleBuilder.m_applyRegExp__java_lang_String(localeIdentifier);
  let groups = /**@type {LocaleRegExpGroups}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(uncheckedGroups, "Locale argument"), LocaleRegExpGroups));
  Checker.m_assertCheck__boolean__java_lang_String(groups.m_isConsistent___$p_org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups(), "Locale argument");
  let language = groups.m_getLanguage___$p_org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups();
  let script = groups.m_getScript___$p_org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups();
  let region = groups.m_getRegion___$p_org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups();
  let variantAndExtension = groups.m_getVariantAndExtension___$p_org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups();
  let identifier = CLocaleBuilder.m_createLocaleIdentifier__org_pepstock_charba_client_intl_Language__org_pepstock_charba_client_intl_Script__org_pepstock_charba_client_intl_Region__java_lang_String(language, script, region, variantAndExtension);
  return CLocaleBuilder.m_createLocale__java_lang_String__org_pepstock_charba_client_intl_Language__org_pepstock_charba_client_intl_Script__org_pepstock_charba_client_intl_Region__java_lang_String(identifier, language, script, region, variantAndExtension);
 }
 /** @return {boolean} */
 static m_isValid__java_lang_String(/** ?string */ localeIdentifier) {
  CLocaleBuilder.$clinit();
  let groups = CLocaleBuilder.m_applyRegExp__java_lang_String(localeIdentifier);
  return !$Equality.$same(groups, null) && groups.m_isConsistent___$p_org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups();
 }
 /** @return {LocaleRegExpGroups} */
 static m_applyRegExp__java_lang_String(/** ?string */ localeIdentifier) {
  if (!$Equality.$same(localeIdentifier, null) && j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(localeIdentifier)) > 0) {
   let result = CLocaleBuilder.f_REGEXP_LOCALE__org_pepstock_charba_client_intl_CLocaleBuilder_.exec(j_l_String.m_trim__java_lang_String(localeIdentifier));
   if (!$Equality.$same(result, null)) {
    return /**@type {LocaleRegExpGroups}*/ ($Casts.$to($Overlay.m_groups__$devirt__org_pepstock_charba_client_utils_RegExpResult__org_pepstock_charba_client_commons_NativeObjectContainerFactory(result, CLocaleBuilder.f_FACTORY__org_pepstock_charba_client_intl_CLocaleBuilder_), LocaleRegExpGroups));
   }
  }
  return null;
 }
 /** @return {CLocale} */
 static m_createLocale__java_lang_String__org_pepstock_charba_client_intl_Language__org_pepstock_charba_client_intl_Script__org_pepstock_charba_client_intl_Region__java_lang_String(/** ?string */ identifier, /** Language */ language, /** Script */ script, /** Region */ region, /** ?string */ variantAndExtension) {
  if (CLocaleBuilder.f_LOCALES__org_pepstock_charba_client_intl_CLocaleBuilder_.containsKey(identifier)) {
   return /**@type {CLocale}*/ ($Casts.$to(CLocaleBuilder.f_LOCALES__org_pepstock_charba_client_intl_CLocaleBuilder_.get(identifier), CLocale));
  }
  let locale = CLocale.$create__java_lang_String__org_pepstock_charba_client_intl_Language__org_pepstock_charba_client_intl_Script__org_pepstock_charba_client_intl_Region__java_lang_String(identifier, language, script, region, variantAndExtension);
  CLocaleBuilder.f_LOCALES__org_pepstock_charba_client_intl_CLocaleBuilder_.put(identifier, locale);
  return locale;
 }
 /** @return {?string} */
 static m_createLocaleIdentifier__org_pepstock_charba_client_intl_Language__org_pepstock_charba_client_intl_Script__org_pepstock_charba_client_intl_Region__java_lang_String(/** Language */ language, /** Script */ script, /** Region */ region, /** ?string */ variantAndExtension) {
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(language);
  let sb = StringBuilder.$create__java_lang_String(language.m_value__());
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(script)) {
   sb.m_append__java_lang_String(Constants.f_MINUS__org_pepstock_charba_client_commons_Constants).m_append__java_lang_String(script.m_value__());
  }
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(region)) {
   sb.m_append__java_lang_String(Constants.f_MINUS__org_pepstock_charba_client_commons_Constants).m_append__java_lang_String(region.m_value__());
  }
  if (!$Equality.$same(variantAndExtension, null) && j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(variantAndExtension)) > 0) {
   if (!j_l_String.m_startsWith__java_lang_String__java_lang_String(variantAndExtension, Constants.f_MINUS__org_pepstock_charba_client_commons_Constants)) {
    sb.m_append__java_lang_String(Constants.f_MINUS__org_pepstock_charba_client_commons_Constants);
   }
   sb.m_append__java_lang_String(variantAndExtension);
  }
  return sb.toString();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_intl_CLocaleBuilder() {
  this.f_script__org_pepstock_charba_client_intl_CLocaleBuilder_ = null;
  this.f_region__org_pepstock_charba_client_intl_CLocaleBuilder_ = null;
  this.f_variantAndExtension__org_pepstock_charba_client_intl_CLocaleBuilder_ = null;
 }
 
 static $clinit() {
  CLocaleBuilder.$clinit = () =>{};
  CLocaleBuilder.$loadModules();
  j_l_Object.$clinit();
  CLocaleBuilder.f_REGEXP_LOCALE__org_pepstock_charba_client_intl_CLocaleBuilder_ = new RegExp(CLocaleBuilder.f_REGEXP_LOCALE_PATTERN__org_pepstock_charba_client_intl_CLocaleBuilder_);
  CLocaleBuilder.f_FACTORY__org_pepstock_charba_client_intl_CLocaleBuilder_ = LocaleRegExpGroupsFactory.$create__();
  CLocaleBuilder.f_LOCALES__org_pepstock_charba_client_intl_CLocaleBuilder_ = /**@type {!HashMap<?string, CLocale>}*/ (HashMap.$create__());
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CLocaleBuilder;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  CLocale = goog.module.get('org.pepstock.charba.client.intl.CLocale$impl');
  LocaleRegExpGroups = goog.module.get('org.pepstock.charba.client.intl.CLocaleBuilder.LocaleRegExpGroups$impl');
  LocaleRegExpGroupsFactory = goog.module.get('org.pepstock.charba.client.intl.CLocaleBuilder.LocaleRegExpGroupsFactory$impl');
  Language = goog.module.get('org.pepstock.charba.client.intl.Language$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.utils.RegExpResult.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {?string}*/
CLocaleBuilder.f_REGEXP_LOCALE_PATTERN__org_pepstock_charba_client_intl_CLocaleBuilder_ = "^(?<language>[A-Za-z]{2,4})([_-](?<script>[A-Za-z]{4}|[0-9]{3}))?([_-](?<region>[A-Za-z]{2}|[0-9]{3}))?((?<variantAndExtension>[A-Za-z0-9-_]+))?$";
/**@type {RegExp}*/
CLocaleBuilder.f_REGEXP_LOCALE__org_pepstock_charba_client_intl_CLocaleBuilder_;
/**@type {LocaleRegExpGroupsFactory}*/
CLocaleBuilder.f_FACTORY__org_pepstock_charba_client_intl_CLocaleBuilder_;
/**@type {Map<?string, CLocale>}*/
CLocaleBuilder.f_LOCALES__org_pepstock_charba_client_intl_CLocaleBuilder_;
$Util.$setClassMetadata(CLocaleBuilder, "org.pepstock.charba.client.intl.CLocaleBuilder");

exports = CLocaleBuilder;

//# sourceMappingURL=CLocaleBuilder.js.map
