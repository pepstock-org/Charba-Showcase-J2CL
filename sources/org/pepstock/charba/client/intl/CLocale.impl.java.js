goog.module('org.pepstock.charba.client.intl.CLocale$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let Id = goog.forwardDeclare('org.pepstock.charba.client.commons.Id$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let BaseElement_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseLocation.$Overlay$impl');
let Meta_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Meta.$Overlay$impl');
let CLocaleBuilder = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocaleBuilder$impl');
let Language = goog.forwardDeclare('org.pepstock.charba.client.intl.Language$impl');
let Region = goog.forwardDeclare('org.pepstock.charba.client.intl.Region$impl');
let Script = goog.forwardDeclare('org.pepstock.charba.client.intl.Script$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class CLocale extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_identifier__org_pepstock_charba_client_intl_CLocale_;
  /**@type {Language}*/
  this.f_language__org_pepstock_charba_client_intl_CLocale_;
  /**@type {Script}*/
  this.f_script__org_pepstock_charba_client_intl_CLocale_;
  /**@type {Region}*/
  this.f_region__org_pepstock_charba_client_intl_CLocale_;
  /**@type {?string}*/
  this.f_variantAndExtension__org_pepstock_charba_client_intl_CLocale_;
 }
 /** @return {!CLocale} */
 static $create__java_lang_String__org_pepstock_charba_client_intl_Language__org_pepstock_charba_client_intl_Script__org_pepstock_charba_client_intl_Region__java_lang_String(/** ?string */ identifier, /** Language */ language, /** Script */ script, /** Region */ region, /** ?string */ variantAndExtension) {
  CLocale.$clinit();
  let $instance = new CLocale();
  $instance.$ctor__org_pepstock_charba_client_intl_CLocale__java_lang_String__org_pepstock_charba_client_intl_Language__org_pepstock_charba_client_intl_Script__org_pepstock_charba_client_intl_Region__java_lang_String(identifier, language, script, region, variantAndExtension);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_CLocale__java_lang_String__org_pepstock_charba_client_intl_Language__org_pepstock_charba_client_intl_Script__org_pepstock_charba_client_intl_Region__java_lang_String(/** ?string */ identifier, /** Language */ language, /** Script */ script, /** Region */ region, /** ?string */ variantAndExtension) {
  this.$ctor__java_lang_Object__();
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(language);
  this.f_identifier__org_pepstock_charba_client_intl_CLocale_ = /**@type {?string}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(identifier, "Locale identifier argument"), j_l_String));
  this.f_language__org_pepstock_charba_client_intl_CLocale_ = language;
  this.f_script__org_pepstock_charba_client_intl_CLocale_ = script;
  this.f_region__org_pepstock_charba_client_intl_CLocale_ = region;
  this.f_variantAndExtension__org_pepstock_charba_client_intl_CLocale_ = variantAndExtension;
 }
 /** @return {?string} */
 m_getIdentifier__() {
  return this.f_identifier__org_pepstock_charba_client_intl_CLocale_;
 }
 /** @return {Language} */
 m_getLanguage__() {
  return this.f_language__org_pepstock_charba_client_intl_CLocale_;
 }
 /** @return {Script} */
 m_getScript__() {
  return this.f_script__org_pepstock_charba_client_intl_CLocale_;
 }
 /** @return {Region} */
 m_getRegion__() {
  return this.f_region__org_pepstock_charba_client_intl_CLocale_;
 }
 /** @return {?string} */
 m_getVariantAndExtension__() {
  return this.f_variantAndExtension__org_pepstock_charba_client_intl_CLocale_;
 }
 /** @override @return {number} */
 hashCode() {
  let prime = 31;
  let result = 1;
  result = Math.imul(prime, result) + ($Equality.$same(this.f_identifier__org_pepstock_charba_client_intl_CLocale_, null) ? 0 : j_l_String.m_hashCode__java_lang_String(this.f_identifier__org_pepstock_charba_client_intl_CLocale_)) | 0;
  return result;
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  if ($Equality.$same(this, obj)) {
   return true;
  }
  if ($Equality.$same(obj, null)) {
   return false;
  }
  if (!$Equality.$same(this.m_getClass__(), $Objects.m_getClass__java_lang_Object(obj))) {
   return false;
  }
  let other = /**@type {CLocale}*/ ($Casts.$to(obj, CLocale));
  if (!$Equality.$same(this.f_identifier__org_pepstock_charba_client_intl_CLocale_, null)) {
   return j_l_String.m_equals__java_lang_String__java_lang_Object(this.f_identifier__org_pepstock_charba_client_intl_CLocale_, other.f_identifier__org_pepstock_charba_client_intl_CLocale_);
  }
  return false;
 }
 /** @override @return {?string} */
 toString() {
  return "CLocale [identifier=" + j_l_String.m_valueOf__java_lang_Object(this.f_identifier__org_pepstock_charba_client_intl_CLocale_) + "]";
 }
 /** @return {boolean} */
 static m_mustKeepDefaultsAligned__() {
  CLocale.$clinit();
  return CLocale.f_mustKeepDefaultsAligned__org_pepstock_charba_client_intl_CLocale_;
 }
 
 static m_setMustKeepDefaultsAligned__boolean(/** boolean */ keptAlignedWithDefaults) {
  CLocale.$clinit();
  if (!CLocale.f_mustKeepDefaultsAligned__org_pepstock_charba_client_intl_CLocale_ && keptAlignedWithDefaults) {
   Defaults.m_get__().m_getGlobal__().m_setLocale__org_pepstock_charba_client_intl_CLocale(CLocale.f_defaultLocale__org_pepstock_charba_client_intl_CLocale_);
  }
  CLocale.f_mustKeepDefaultsAligned__org_pepstock_charba_client_intl_CLocale_ = keptAlignedWithDefaults;
 }
 
 static m_setDefault__org_pepstock_charba_client_intl_CLocale(/** CLocale */ locale) {
  CLocale.$clinit();
  if (!$Equality.$same(locale, null)) {
   CLocale.m_setDefaultInternally__org_pepstock_charba_client_intl_CLocale(locale);
   if (CLocale.m_mustKeepDefaultsAligned__()) {
    Defaults.m_get__().m_getGlobal__().m_setLocale__org_pepstock_charba_client_intl_CLocale(CLocale.f_defaultLocale__org_pepstock_charba_client_intl_CLocale_);
   }
  }
 }
 /** @return {CLocale} */
 static m_getDefault__() {
  CLocale.$clinit();
  if ($Equality.$same(CLocale.f_defaultLocale__org_pepstock_charba_client_intl_CLocale_, null)) {
   let /** CLocale */ tempLocale;
   let localeFromQueryString = $Overlay.m_getParameter__$devirt__org_pepstock_charba_client_dom_BaseLocation__java_lang_String(window.location, CLocale.f_LOCALE_QUERY_STRING_PARAM_KEY__org_pepstock_charba_client_intl_CLocale);
   let localeFromMetaElements = CLocale.m_getLocaleFromMetaElement__();
   let localeFromPlatform = CLocale.m_getDefaultLocale__org_pepstock_charba_client_commons_Key(CLocale.f_LOCALE_KEY__org_pepstock_charba_client_intl_CLocale_);
   if (CLocaleBuilder.m_isValid__java_lang_String(localeFromQueryString)) {
    tempLocale = CLocaleBuilder.m_build__java_lang_String(localeFromQueryString);
   } else if (CLocaleBuilder.m_isValid__java_lang_String(localeFromMetaElements)) {
    tempLocale = CLocaleBuilder.m_build__java_lang_String(localeFromMetaElements);
   } else if (CLocaleBuilder.m_isValid__java_lang_String(localeFromPlatform)) {
    tempLocale = CLocaleBuilder.m_build__java_lang_String(localeFromPlatform);
   } else {
    tempLocale = CLocale.$static_US__org_pepstock_charba_client_intl_CLocale;
   }
   CLocale.m_setDefaultInternally__org_pepstock_charba_client_intl_CLocale(tempLocale);
  }
  return CLocale.f_defaultLocale__org_pepstock_charba_client_intl_CLocale_;
 }
 
 static m_setDefaultInternally__org_pepstock_charba_client_intl_CLocale(/** CLocale */ locale) {
  if (!$Equality.$same(locale, null)) {
   CLocale.f_defaultLocale__org_pepstock_charba_client_intl_CLocale_ = locale;
  }
 }
 /** @return {?string} */
 static m_getLocaleFromMetaElement__() {
  let elements = window.document.head.getElementsByTagName(Meta_$Overlay.f_TAG__org_pepstock_charba_client_dom_elements_Meta_$Overlay);
  for (let i = 0; i < elements.length; i = i + 1 | 0) {
   let element = /**@type {Element}*/ ($Casts.$to(elements.item(i), BaseElement_$Overlay));
   if (Meta_$Overlay.$isInstance(element)) {
    let meta = /**@type {HTMLMetaElement}*/ ($Casts.$to(element, Meta_$Overlay));
    let name = meta.name;
    let content = meta.content;
    if (!$Equality.$same(name, null) && !$Equality.$same(content, null) && j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(CLocale.f_GWT_PROPERTY_KEY__org_pepstock_charba_client_intl_CLocale_, name) && j_l_String.m_startsWith__java_lang_String__java_lang_String(content, j_l_String.m_valueOf__java_lang_Object(CLocale.f_LOCALE_QUERY_STRING_PARAM_KEY__org_pepstock_charba_client_intl_CLocale) + j_l_String.m_valueOf__java_lang_Object(Constants.f_EQ__org_pepstock_charba_client_commons_Constants))) {
     return j_l_String.m_substring__java_lang_String__int(content, j_l_String.m_length__java_lang_String(CLocale.f_LOCALE_QUERY_STRING_PARAM_KEY__org_pepstock_charba_client_intl_CLocale) + 1 | 0);
    }
   }
  }
  return null;
 }
 /** @return {?string} */
 static m_getDefaultLocale__org_pepstock_charba_client_commons_Key(/** Key */ key) {
  let format = new Intl.NumberFormat();
  let options = format.resolvedOptions();
  return Id.m_getStringProperty__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(key, options);
 }
 /** @return {CLocale} */
 static get f_FRANCE__org_pepstock_charba_client_intl_CLocale() {
  return (CLocale.$clinit(), CLocale.$static_FRANCE__org_pepstock_charba_client_intl_CLocale);
 }
 /** @return {CLocale} */
 static get f_GERMANY__org_pepstock_charba_client_intl_CLocale() {
  return (CLocale.$clinit(), CLocale.$static_GERMANY__org_pepstock_charba_client_intl_CLocale);
 }
 /** @return {CLocale} */
 static get f_ITALY__org_pepstock_charba_client_intl_CLocale() {
  return (CLocale.$clinit(), CLocale.$static_ITALY__org_pepstock_charba_client_intl_CLocale);
 }
 /** @return {CLocale} */
 static get f_JAPAN__org_pepstock_charba_client_intl_CLocale() {
  return (CLocale.$clinit(), CLocale.$static_JAPAN__org_pepstock_charba_client_intl_CLocale);
 }
 /** @return {CLocale} */
 static get f_CHINA__org_pepstock_charba_client_intl_CLocale() {
  return (CLocale.$clinit(), CLocale.$static_CHINA__org_pepstock_charba_client_intl_CLocale);
 }
 /** @return {CLocale} */
 static get f_UK__org_pepstock_charba_client_intl_CLocale() {
  return (CLocale.$clinit(), CLocale.$static_UK__org_pepstock_charba_client_intl_CLocale);
 }
 /** @return {CLocale} */
 static get f_US__org_pepstock_charba_client_intl_CLocale() {
  return (CLocale.$clinit(), CLocale.$static_US__org_pepstock_charba_client_intl_CLocale);
 }
 /** @return {CLocale} */
 static get f_CANADA__org_pepstock_charba_client_intl_CLocale() {
  return (CLocale.$clinit(), CLocale.$static_CANADA__org_pepstock_charba_client_intl_CLocale);
 }
 /** @return {CLocale} */
 static get f_CANADA_FRENCH__org_pepstock_charba_client_intl_CLocale() {
  return (CLocale.$clinit(), CLocale.$static_CANADA_FRENCH__org_pepstock_charba_client_intl_CLocale);
 }
 /** @return {CLocale} */
 static get f_RUSSIA__org_pepstock_charba_client_intl_CLocale() {
  return (CLocale.$clinit(), CLocale.$static_RUSSIA__org_pepstock_charba_client_intl_CLocale);
 }
 
 static $clinit() {
  CLocale.$clinit = () =>{};
  CLocale.$loadModules();
  j_l_Object.$clinit();
  CLocale.$static_FRANCE__org_pepstock_charba_client_intl_CLocale = CLocaleBuilder.m_create__org_pepstock_charba_client_intl_Language(Language.f_FRENCH__org_pepstock_charba_client_intl_Language).m_setRegion__org_pepstock_charba_client_intl_Region(Region.f_FRANCE__org_pepstock_charba_client_intl_Region).m_build__();
  CLocale.$static_GERMANY__org_pepstock_charba_client_intl_CLocale = CLocaleBuilder.m_create__org_pepstock_charba_client_intl_Language(Language.f_GERMAN__org_pepstock_charba_client_intl_Language).m_setRegion__org_pepstock_charba_client_intl_Region(Region.f_GERMANY__org_pepstock_charba_client_intl_Region).m_build__();
  CLocale.$static_ITALY__org_pepstock_charba_client_intl_CLocale = CLocaleBuilder.m_create__org_pepstock_charba_client_intl_Language(Language.f_ITALIAN__org_pepstock_charba_client_intl_Language).m_setRegion__org_pepstock_charba_client_intl_Region(Region.f_ITALY__org_pepstock_charba_client_intl_Region).m_build__();
  CLocale.$static_JAPAN__org_pepstock_charba_client_intl_CLocale = CLocaleBuilder.m_create__org_pepstock_charba_client_intl_Language(Language.f_JAPANESE__org_pepstock_charba_client_intl_Language).m_setRegion__org_pepstock_charba_client_intl_Region(Region.f_JAPAN__org_pepstock_charba_client_intl_Region).m_build__();
  CLocale.$static_CHINA__org_pepstock_charba_client_intl_CLocale = CLocaleBuilder.m_create__org_pepstock_charba_client_intl_Language(Language.f_CHINESE__org_pepstock_charba_client_intl_Language).m_setRegion__org_pepstock_charba_client_intl_Region(Region.f_CHINA__org_pepstock_charba_client_intl_Region).m_build__();
  CLocale.$static_UK__org_pepstock_charba_client_intl_CLocale = CLocaleBuilder.m_create__org_pepstock_charba_client_intl_Language(Language.f_ENGLISH__org_pepstock_charba_client_intl_Language).m_setRegion__org_pepstock_charba_client_intl_Region(Region.f_UNITED_KINGDOM__org_pepstock_charba_client_intl_Region).m_build__();
  CLocale.$static_US__org_pepstock_charba_client_intl_CLocale = CLocaleBuilder.m_create__org_pepstock_charba_client_intl_Language(Language.f_ENGLISH__org_pepstock_charba_client_intl_Language).m_setRegion__org_pepstock_charba_client_intl_Region(Region.f_UNITED_STATES__org_pepstock_charba_client_intl_Region).m_build__();
  CLocale.$static_CANADA__org_pepstock_charba_client_intl_CLocale = CLocaleBuilder.m_create__org_pepstock_charba_client_intl_Language(Language.f_ENGLISH__org_pepstock_charba_client_intl_Language).m_setRegion__org_pepstock_charba_client_intl_Region(Region.f_CANADA__org_pepstock_charba_client_intl_Region).m_build__();
  CLocale.$static_CANADA_FRENCH__org_pepstock_charba_client_intl_CLocale = CLocaleBuilder.m_create__org_pepstock_charba_client_intl_Language(Language.f_FRENCH__org_pepstock_charba_client_intl_Language).m_setRegion__org_pepstock_charba_client_intl_Region(Region.f_CANADA__org_pepstock_charba_client_intl_Region).m_build__();
  CLocale.$static_RUSSIA__org_pepstock_charba_client_intl_CLocale = CLocaleBuilder.m_create__org_pepstock_charba_client_intl_Language(Language.f_RUSSIAN__org_pepstock_charba_client_intl_Language).m_setRegion__org_pepstock_charba_client_intl_Region(Region.f_RUSSIA__org_pepstock_charba_client_intl_Region).m_build__();
  CLocale.f_LOCALE_KEY__org_pepstock_charba_client_intl_CLocale_ = Key.m_create__java_lang_String(CLocale.f_LOCALE_QUERY_STRING_PARAM_KEY__org_pepstock_charba_client_intl_CLocale);
  CLocale.f_defaultLocale__org_pepstock_charba_client_intl_CLocale_ = null;
  CLocale.f_mustKeepDefaultsAligned__org_pepstock_charba_client_intl_CLocale_ = false;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CLocale;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  Id = goog.module.get('org.pepstock.charba.client.commons.Id$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  BaseElement_$Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseElement.$Overlay$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseLocation.$Overlay$impl');
  Meta_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Meta.$Overlay$impl');
  CLocaleBuilder = goog.module.get('org.pepstock.charba.client.intl.CLocaleBuilder$impl');
  Language = goog.module.get('org.pepstock.charba.client.intl.Language$impl');
  Region = goog.module.get('org.pepstock.charba.client.intl.Region$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@private {CLocale}*/
CLocale.$static_FRANCE__org_pepstock_charba_client_intl_CLocale;
/**@private {CLocale}*/
CLocale.$static_GERMANY__org_pepstock_charba_client_intl_CLocale;
/**@private {CLocale}*/
CLocale.$static_ITALY__org_pepstock_charba_client_intl_CLocale;
/**@private {CLocale}*/
CLocale.$static_JAPAN__org_pepstock_charba_client_intl_CLocale;
/**@private {CLocale}*/
CLocale.$static_CHINA__org_pepstock_charba_client_intl_CLocale;
/**@private {CLocale}*/
CLocale.$static_UK__org_pepstock_charba_client_intl_CLocale;
/**@private {CLocale}*/
CLocale.$static_US__org_pepstock_charba_client_intl_CLocale;
/**@private {CLocale}*/
CLocale.$static_CANADA__org_pepstock_charba_client_intl_CLocale;
/**@private {CLocale}*/
CLocale.$static_CANADA_FRENCH__org_pepstock_charba_client_intl_CLocale;
/**@private {CLocale}*/
CLocale.$static_RUSSIA__org_pepstock_charba_client_intl_CLocale;
/**@const {?string}*/
CLocale.f_LOCALE_QUERY_STRING_PARAM_KEY__org_pepstock_charba_client_intl_CLocale = "locale";
/**@const {?string}*/
CLocale.f_GWT_PROPERTY_KEY__org_pepstock_charba_client_intl_CLocale_ = "gwt:property";
/**@type {Key}*/
CLocale.f_LOCALE_KEY__org_pepstock_charba_client_intl_CLocale_;
/**@type {CLocale}*/
CLocale.f_defaultLocale__org_pepstock_charba_client_intl_CLocale_;
/**@type {boolean}*/
CLocale.f_mustKeepDefaultsAligned__org_pepstock_charba_client_intl_CLocale_ = false;
$Util.$setClassMetadata(CLocale, "org.pepstock.charba.client.intl.CLocale");

exports = CLocale;

//# sourceMappingURL=CLocale.js.map
