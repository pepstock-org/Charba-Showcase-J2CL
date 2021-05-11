goog.module('org.pepstock.charba.client.intl.Language$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsLocaleItem = goog.require('org.pepstock.charba.client.intl.IsLocaleItem$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Language>}
 * @implements {IsLocaleItem}
 */
class Language extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_code3chars__org_pepstock_charba_client_intl_Language_;
  /**@type {?string}*/
  this.f_code2chars__org_pepstock_charba_client_intl_Language_;
  /**@type {?string}*/
  this.f_name__org_pepstock_charba_client_intl_Language_;
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_Language_;
 }
 //Factory method corresponding to constructor 'Language(String, int, String, String)'.
 /** @return {!Language} */
 static $create__java_lang_String__int__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ code3chars, /** ?string */ name) {
  let $instance = new Language();
  $instance.$ctor__org_pepstock_charba_client_intl_Language__java_lang_String__int__java_lang_String__java_lang_String($name, $ordinal, code3chars, name);
  return $instance;
 }
 //Initialization from constructor 'Language(String, int, String, String)'.
 
 $ctor__org_pepstock_charba_client_intl_Language__java_lang_String__int__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ code3chars, /** ?string */ name) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__org_pepstock_charba_client_intl_Language__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($name, $ordinal, code3chars, null, name);
 }
 //Factory method corresponding to constructor 'Language(String, int, String, String, String)'.
 /** @return {!Language} */
 static $create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ code3chars, /** ?string */ code2chars, /** ?string */ name) {
  let $instance = new Language();
  $instance.$ctor__org_pepstock_charba_client_intl_Language__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($name, $ordinal, code3chars, code2chars, name);
  return $instance;
 }
 //Initialization from constructor 'Language(String, int, String, String, String)'.
 
 $ctor__org_pepstock_charba_client_intl_Language__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ code3chars, /** ?string */ code2chars, /** ?string */ name) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_code3chars__org_pepstock_charba_client_intl_Language_ = code3chars;
  this.f_code2chars__org_pepstock_charba_client_intl_Language_ = code2chars;
  this.f_name__org_pepstock_charba_client_intl_Language_ = name;
  this.f_value__org_pepstock_charba_client_intl_Language_ = !$Equality.$same(code2chars, null) ? code2chars : code3chars;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_Language_;
 }
 /** @return {?string} */
 m_getCode3Chars__() {
  return this.f_code3chars__org_pepstock_charba_client_intl_Language_;
 }
 /** @return {?string} */
 m_getCode2Chars__() {
  return this.f_code2chars__org_pepstock_charba_client_intl_Language_;
 }
 /** @override @return {?string} */
 m_getName__() {
  return this.f_name__org_pepstock_charba_client_intl_Language_;
 }
 /** @return {Language} */
 static m_getByCode__java_lang_String(/** ?string */ identifier) {
  Language.$clinit();
  if (!$Equality.$same(identifier, null) && j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(identifier)) > 0) {
   for (let $array = Language.m_values__(), $index = 0; $index < $array.length; $index++) {
    let language = $array[$index];
    {
     if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(language.m_value__(), identifier) || j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(language.m_getCode3Chars__(), identifier)) {
      return language;
     }
    }
   }
  }
  return null;
 }
 /** @return {!Language} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Language.$clinit();
  if ($Equality.$same(Language.f_namesToValuesMap__org_pepstock_charba_client_intl_Language_, null)) {
   Language.f_namesToValuesMap__org_pepstock_charba_client_intl_Language_ = $Enums.createMapFromValues(Language.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Language.f_namesToValuesMap__org_pepstock_charba_client_intl_Language_);
 }
 /** @return {!Array<!Language>} */
 static m_values__() {
  Language.$clinit();
  return /**@type {!Array<Language>}*/ ($Arrays.$init([Language.$static_AFAR__org_pepstock_charba_client_intl_Language, Language.$static_AFRIKAANS__org_pepstock_charba_client_intl_Language, Language.$static_AGHEM__org_pepstock_charba_client_intl_Language, Language.$static_AKAN__org_pepstock_charba_client_intl_Language, Language.$static_ALBANIAN__org_pepstock_charba_client_intl_Language, Language.$static_AMHARIC__org_pepstock_charba_client_intl_Language, Language.$static_ARABIC__org_pepstock_charba_client_intl_Language, Language.$static_ARMENIAN__org_pepstock_charba_client_intl_Language, Language.$static_ASSAMESE__org_pepstock_charba_client_intl_Language, Language.$static_ASTURIAN__org_pepstock_charba_client_intl_Language, Language.$static_ASU__org_pepstock_charba_client_intl_Language, Language.$static_AZERBAIJANI__org_pepstock_charba_client_intl_Language, Language.$static_BAFIA__org_pepstock_charba_client_intl_Language, Language.$static_BAMBARA__org_pepstock_charba_client_intl_Language, Language.$static_BASA__org_pepstock_charba_client_intl_Language, Language.$static_BASHKIR__org_pepstock_charba_client_intl_Language, Language.$static_BASQUE__org_pepstock_charba_client_intl_Language, Language.$static_BELARUSIAN__org_pepstock_charba_client_intl_Language, Language.$static_BEMBA__org_pepstock_charba_client_intl_Language, Language.$static_BENA__org_pepstock_charba_client_intl_Language, Language.$static_BENGALI__org_pepstock_charba_client_intl_Language, Language.$static_BILIN__org_pepstock_charba_client_intl_Language, Language.$static_BODO__org_pepstock_charba_client_intl_Language, Language.$static_BOSNIAN__org_pepstock_charba_client_intl_Language, Language.$static_BRETON__org_pepstock_charba_client_intl_Language, Language.$static_BUKUSU__org_pepstock_charba_client_intl_Language, Language.$static_BULGARIAN__org_pepstock_charba_client_intl_Language, Language.$static_BURMESE__org_pepstock_charba_client_intl_Language, Language.$static_CATALAN__org_pepstock_charba_client_intl_Language, Language.$static_CEBUANO__org_pepstock_charba_client_intl_Language, Language.$static_CENTRAL_ATLAS_TAMAZIGHT__org_pepstock_charba_client_intl_Language, Language.$static_CENTRAL_KURDISH__org_pepstock_charba_client_intl_Language, Language.$static_CHAKMA__org_pepstock_charba_client_intl_Language, Language.$static_CHECHEN__org_pepstock_charba_client_intl_Language, Language.$static_CHEROKEE__org_pepstock_charba_client_intl_Language, Language.$static_CHIGA__org_pepstock_charba_client_intl_Language, Language.$static_CHINESE__org_pepstock_charba_client_intl_Language, Language.$static_CHURCH_SLAVIC__org_pepstock_charba_client_intl_Language, Language.$static_CONGO_SWAHILI__org_pepstock_charba_client_intl_Language, Language.$static_CORNISH__org_pepstock_charba_client_intl_Language, Language.$static_CORSICAN__org_pepstock_charba_client_intl_Language, Language.$static_CROATIAN__org_pepstock_charba_client_intl_Language, Language.$static_CUSCO_QUECHUA__org_pepstock_charba_client_intl_Language, Language.$static_CZECH__org_pepstock_charba_client_intl_Language, Language.$static_DANISH__org_pepstock_charba_client_intl_Language, Language.$static_DARI__org_pepstock_charba_client_intl_Language, Language.$static_DHIVEHI__org_pepstock_charba_client_intl_Language, Language.$static_DUALA__org_pepstock_charba_client_intl_Language, Language.$static_DUTCH__org_pepstock_charba_client_intl_Language, Language.$static_DZONGKHA__org_pepstock_charba_client_intl_Language, Language.$static_EASTERN_YIDDISH__org_pepstock_charba_client_intl_Language, Language.$static_EMBU__org_pepstock_charba_client_intl_Language, Language.$static_ENGLISH__org_pepstock_charba_client_intl_Language, Language.$static_ESPERANTO__org_pepstock_charba_client_intl_Language, Language.$static_ESTONIAN__org_pepstock_charba_client_intl_Language, Language.$static_EWE__org_pepstock_charba_client_intl_Language, Language.$static_EWONDO__org_pepstock_charba_client_intl_Language, Language.$static_FANTI__org_pepstock_charba_client_intl_Language, Language.$static_FAROESE__org_pepstock_charba_client_intl_Language, Language.$static_FILIPINO__org_pepstock_charba_client_intl_Language, Language.$static_FINNISH__org_pepstock_charba_client_intl_Language, Language.$static_FRENCH__org_pepstock_charba_client_intl_Language, Language.$static_FRIULIAN__org_pepstock_charba_client_intl_Language, Language.$static_FULAH__org_pepstock_charba_client_intl_Language, Language.$static_GALICIAN__org_pepstock_charba_client_intl_Language, Language.$static_GANDA__org_pepstock_charba_client_intl_Language, Language.$static_GEORGIAN__org_pepstock_charba_client_intl_Language, Language.$static_GERMAN__org_pepstock_charba_client_intl_Language, Language.$static_GUARANI__org_pepstock_charba_client_intl_Language, Language.$static_GUJARATI__org_pepstock_charba_client_intl_Language, Language.$static_GUSII__org_pepstock_charba_client_intl_Language, Language.$static_HALH_MONGOLIAN__org_pepstock_charba_client_intl_Language, Language.$static_HAUSA__org_pepstock_charba_client_intl_Language, Language.$static_HAWAIIAN__org_pepstock_charba_client_intl_Language, Language.$static_HEBREW__org_pepstock_charba_client_intl_Language, Language.$static_HINDI__org_pepstock_charba_client_intl_Language, Language.$static_HUNGARIAN__org_pepstock_charba_client_intl_Language, Language.$static_ICELANDIC__org_pepstock_charba_client_intl_Language, Language.$static_IGBO__org_pepstock_charba_client_intl_Language, Language.$static_INARI_SAMI__org_pepstock_charba_client_intl_Language, Language.$static_INDONESIAN__org_pepstock_charba_client_intl_Language, Language.$static_INTERLINGUA__org_pepstock_charba_client_intl_Language, Language.$static_INUKTITUT__org_pepstock_charba_client_intl_Language, Language.$static_IRANIAN_PERSIAN__org_pepstock_charba_client_intl_Language, Language.$static_IRISH__org_pepstock_charba_client_intl_Language, Language.$static_ITALIAN__org_pepstock_charba_client_intl_Language, Language.$static_JAPANESE__org_pepstock_charba_client_intl_Language, Language.$static_JAVANESE__org_pepstock_charba_client_intl_Language, Language.$static_JOLA_FONYI__org_pepstock_charba_client_intl_Language, Language.$static_KICHE__org_pepstock_charba_client_intl_Language, Language.$static_KABUVERDIANU__org_pepstock_charba_client_intl_Language, Language.$static_KABYLE__org_pepstock_charba_client_intl_Language, Language.$static_KAKO__org_pepstock_charba_client_intl_Language, Language.$static_KALAALLISUT__org_pepstock_charba_client_intl_Language, Language.$static_KALENJIN__org_pepstock_charba_client_intl_Language, Language.$static_KAMBA__org_pepstock_charba_client_intl_Language, Language.$static_KANNADA__org_pepstock_charba_client_intl_Language, Language.$static_KASHMIRI__org_pepstock_charba_client_intl_Language, Language.$static_KAZAKH__org_pepstock_charba_client_intl_Language, Language.$static_KHMER__org_pepstock_charba_client_intl_Language, Language.$static_KHOEKHOE__org_pepstock_charba_client_intl_Language, Language.$static_KIKUYU__org_pepstock_charba_client_intl_Language, Language.$static_KINYARWANDA__org_pepstock_charba_client_intl_Language, Language.$static_KIRGHIZ__org_pepstock_charba_client_intl_Language, Language.$static_KONKANI_INDIVIDUAL__org_pepstock_charba_client_intl_Language, Language.$static_KONKANI_MACRO__org_pepstock_charba_client_intl_Language, Language.$static_KOREAN__org_pepstock_charba_client_intl_Language, Language.$static_KOYRA_CHIINI_SONGHAY__org_pepstock_charba_client_intl_Language, Language.$static_KOYRABORO_SENNI_SONGHAI__org_pepstock_charba_client_intl_Language, Language.$static_KURDISH__org_pepstock_charba_client_intl_Language, Language.$static_KWASIO__org_pepstock_charba_client_intl_Language, Language.$static_KALSCH__org_pepstock_charba_client_intl_Language, Language.$static_LAKOTA__org_pepstock_charba_client_intl_Language, Language.$static_LANGI__org_pepstock_charba_client_intl_Language, Language.$static_LAO__org_pepstock_charba_client_intl_Language, Language.$static_LATVIAN__org_pepstock_charba_client_intl_Language, Language.$static_LINGALA__org_pepstock_charba_client_intl_Language, Language.$static_LITHUANIAN__org_pepstock_charba_client_intl_Language, Language.$static_LOW_GERMAN__org_pepstock_charba_client_intl_Language, Language.$static_LOWER_SORBIAN__org_pepstock_charba_client_intl_Language, Language.$static_LUBA_KATANGA__org_pepstock_charba_client_intl_Language, Language.$static_LULE_SAMI__org_pepstock_charba_client_intl_Language, Language.$static_LUO__org_pepstock_charba_client_intl_Language, Language.$static_LUXEMBOURGISH__org_pepstock_charba_client_intl_Language, Language.$static_LUYIA__org_pepstock_charba_client_intl_Language, Language.$static_MACEDONIAN__org_pepstock_charba_client_intl_Language, Language.$static_MACHAME__org_pepstock_charba_client_intl_Language, Language.$static_MAITHILI__org_pepstock_charba_client_intl_Language, Language.$static_MAKHUWA_MEETTO__org_pepstock_charba_client_intl_Language, Language.$static_MAKONDE__org_pepstock_charba_client_intl_Language, Language.$static_MALAGASY__org_pepstock_charba_client_intl_Language, Language.$static_MALAY__org_pepstock_charba_client_intl_Language, Language.$static_MALAYALAM__org_pepstock_charba_client_intl_Language, Language.$static_MALTESE__org_pepstock_charba_client_intl_Language, Language.$static_MANDARIN__org_pepstock_charba_client_intl_Language, Language.$static_MANIPURI__org_pepstock_charba_client_intl_Language, Language.$static_MANX__org_pepstock_charba_client_intl_Language, Language.$static_MAORI__org_pepstock_charba_client_intl_Language, Language.$static_MAPUDUNGUN__org_pepstock_charba_client_intl_Language, Language.$static_MARATHI__org_pepstock_charba_client_intl_Language, Language.$static_MASAI__org_pepstock_charba_client_intl_Language, Language.$static_MAZANDERANI__org_pepstock_charba_client_intl_Language, Language.$static_MERU__org_pepstock_charba_client_intl_Language, Language.$static_META__org_pepstock_charba_client_intl_Language, Language.$static_MODERN_GREEK__org_pepstock_charba_client_intl_Language, Language.$static_MOHAWK__org_pepstock_charba_client_intl_Language, Language.$static_MONGOLIAN__org_pepstock_charba_client_intl_Language, Language.$static_MONTENEGRIN__org_pepstock_charba_client_intl_Language, Language.$static_MORISYEN__org_pepstock_charba_client_intl_Language, Language.$static_MUNDANG__org_pepstock_charba_client_intl_Language, Language.$static_NKO__org_pepstock_charba_client_intl_Language, Language.$static_NEPALI_INDIVIDUAL__org_pepstock_charba_client_intl_Language, Language.$static_NEPALI_MACRO__org_pepstock_charba_client_intl_Language, Language.$static_NGIEMBOON__org_pepstock_charba_client_intl_Language, Language.$static_NGOMBA__org_pepstock_charba_client_intl_Language, Language.$static_NIGERIAN_PIDGIN__org_pepstock_charba_client_intl_Language, Language.$static_NORTH_AZERBAIJANI__org_pepstock_charba_client_intl_Language, Language.$static_NORTH_NDEBELE__org_pepstock_charba_client_intl_Language, Language.$static_NORTHERN_KURDISH__org_pepstock_charba_client_intl_Language, Language.$static_NORTHERN_LURI__org_pepstock_charba_client_intl_Language, Language.$static_NORTHERN_PASHTO__org_pepstock_charba_client_intl_Language, Language.$static_NORTHERN_SAMI__org_pepstock_charba_client_intl_Language, Language.$static_NORTHERN_UZBEK__org_pepstock_charba_client_intl_Language, Language.$static_NORWEGIAN__org_pepstock_charba_client_intl_Language, Language.$static_NORWEGIAN_BOKMAL__org_pepstock_charba_client_intl_Language, Language.$static_NORWEGIAN_NYNORSK__org_pepstock_charba_client_intl_Language, Language.$static_NUER__org_pepstock_charba_client_intl_Language, Language.$static_NYANKOLE__org_pepstock_charba_client_intl_Language, Language.$static_OCCITAN__org_pepstock_charba_client_intl_Language, Language.$static_ODIA__org_pepstock_charba_client_intl_Language, Language.$static_ORIYA__org_pepstock_charba_client_intl_Language, Language.$static_OROMO__org_pepstock_charba_client_intl_Language, Language.$static_OSSETIAN__org_pepstock_charba_client_intl_Language, Language.$static_PANJABI__org_pepstock_charba_client_intl_Language, Language.$static_PEDI__org_pepstock_charba_client_intl_Language, Language.$static_PERSIAN__org_pepstock_charba_client_intl_Language, Language.$static_PLATEAU_MALAGASY__org_pepstock_charba_client_intl_Language, Language.$static_POLISH__org_pepstock_charba_client_intl_Language, Language.$static_PORTUGUESE__org_pepstock_charba_client_intl_Language, Language.$static_PRUSSIAN__org_pepstock_charba_client_intl_Language, Language.$static_PULAAR__org_pepstock_charba_client_intl_Language, Language.$static_PUSHTO__org_pepstock_charba_client_intl_Language, Language.$static_QUECHUA__org_pepstock_charba_client_intl_Language, Language.$static_ROMANIAN__org_pepstock_charba_client_intl_Language, Language.$static_ROMANSH__org_pepstock_charba_client_intl_Language, Language.$static_ROMBO__org_pepstock_charba_client_intl_Language, Language.$static_RUNDI__org_pepstock_charba_client_intl_Language, Language.$static_RUSSIAN__org_pepstock_charba_client_intl_Language, Language.$static_RWA__org_pepstock_charba_client_intl_Language, Language.$static_SABAOT__org_pepstock_charba_client_intl_Language, Language.$static_SAHO__org_pepstock_charba_client_intl_Language, Language.$static_SAMBURU__org_pepstock_charba_client_intl_Language, Language.$static_SANGO__org_pepstock_charba_client_intl_Language, Language.$static_SANGU__org_pepstock_charba_client_intl_Language, Language.$static_SANSKRIT__org_pepstock_charba_client_intl_Language, Language.$static_SANTALI__org_pepstock_charba_client_intl_Language, Language.$static_SCOTTISH_GAELIC__org_pepstock_charba_client_intl_Language, Language.$static_SENA__org_pepstock_charba_client_intl_Language, Language.$static_SERBIAN__org_pepstock_charba_client_intl_Language, Language.$static_SERBO_CROATIAN__org_pepstock_charba_client_intl_Language, Language.$static_SHAMBALA__org_pepstock_charba_client_intl_Language, Language.$static_SHONA__org_pepstock_charba_client_intl_Language, Language.$static_SICHUAN_YI__org_pepstock_charba_client_intl_Language, Language.$static_SINDHI__org_pepstock_charba_client_intl_Language, Language.$static_SINHALA__org_pepstock_charba_client_intl_Language, Language.$static_SKOLT_SAMI__org_pepstock_charba_client_intl_Language, Language.$static_SLOVAK__org_pepstock_charba_client_intl_Language, Language.$static_SLOVENIAN__org_pepstock_charba_client_intl_Language, Language.$static_SOGA__org_pepstock_charba_client_intl_Language, Language.$static_SOMALI__org_pepstock_charba_client_intl_Language, Language.$static_SOUTH_NDEBELE__org_pepstock_charba_client_intl_Language, Language.$static_SOUTHERN_SAMI__org_pepstock_charba_client_intl_Language, Language.$static_SOUTHERN_SOTHO__org_pepstock_charba_client_intl_Language, Language.$static_SPANISH__org_pepstock_charba_client_intl_Language, Language.$static_STANDARD_ARABIC__org_pepstock_charba_client_intl_Language, Language.$static_STANDARD_ESTONIAN__org_pepstock_charba_client_intl_Language, Language.$static_STANDARD_LATVIAN__org_pepstock_charba_client_intl_Language, Language.$static_STANDARD_MALAY__org_pepstock_charba_client_intl_Language, Language.$static_STANDARD_MOROCCAN_TAMAZIGHT__org_pepstock_charba_client_intl_Language, Language.$static_SUNDANESE__org_pepstock_charba_client_intl_Language, Language.$static_SWAHILI_INDIVIDUAL__org_pepstock_charba_client_intl_Language, Language.$static_SWAHILI_MACRO__org_pepstock_charba_client_intl_Language, Language.$static_SWATI__org_pepstock_charba_client_intl_Language, Language.$static_SWEDISH__org_pepstock_charba_client_intl_Language, Language.$static_SWISS_GERMAN__org_pepstock_charba_client_intl_Language, Language.$static_SYRIAC__org_pepstock_charba_client_intl_Language, Language.$static_TACHELHIT__org_pepstock_charba_client_intl_Language, Language.$static_TAGALOG__org_pepstock_charba_client_intl_Language, Language.$static_TAITA__org_pepstock_charba_client_intl_Language, Language.$static_TAJIK__org_pepstock_charba_client_intl_Language, Language.$static_TAMIL__org_pepstock_charba_client_intl_Language, Language.$static_TASAWAQ__org_pepstock_charba_client_intl_Language, Language.$static_TATAR__org_pepstock_charba_client_intl_Language, Language.$static_TELUGU__org_pepstock_charba_client_intl_Language, Language.$static_TESO__org_pepstock_charba_client_intl_Language, Language.$static_THAI__org_pepstock_charba_client_intl_Language, Language.$static_TIBETAN__org_pepstock_charba_client_intl_Language, Language.$static_TIGRE__org_pepstock_charba_client_intl_Language, Language.$static_TIGRINYA__org_pepstock_charba_client_intl_Language, Language.$static_TONGA__org_pepstock_charba_client_intl_Language, Language.$static_TOSK_ALBANIAN__org_pepstock_charba_client_intl_Language, Language.$static_TSONGA__org_pepstock_charba_client_intl_Language, Language.$static_TSWANA__org_pepstock_charba_client_intl_Language, Language.$static_TURKISH__org_pepstock_charba_client_intl_Language, Language.$static_TURKMEN__org_pepstock_charba_client_intl_Language, Language.$static_TWI__org_pepstock_charba_client_intl_Language, Language.$static_UIGHUR__org_pepstock_charba_client_intl_Language, Language.$static_UKRAINIAN__org_pepstock_charba_client_intl_Language, Language.$static_UPPER_SORBIAN__org_pepstock_charba_client_intl_Language, Language.$static_URDU__org_pepstock_charba_client_intl_Language, Language.$static_UZBEK__org_pepstock_charba_client_intl_Language, Language.$static_VAI__org_pepstock_charba_client_intl_Language, Language.$static_VENDA__org_pepstock_charba_client_intl_Language, Language.$static_VIETNAMESE__org_pepstock_charba_client_intl_Language, Language.$static_VOLAPAK__org_pepstock_charba_client_intl_Language, Language.$static_VUNJO__org_pepstock_charba_client_intl_Language, Language.$static_WALSER__org_pepstock_charba_client_intl_Language, Language.$static_WELSH__org_pepstock_charba_client_intl_Language, Language.$static_WEST_CENTRAL_OROMO__org_pepstock_charba_client_intl_Language, Language.$static_WESTERN_FRISIAN__org_pepstock_charba_client_intl_Language, Language.$static_WOLAYTTA__org_pepstock_charba_client_intl_Language, Language.$static_WOLOF__org_pepstock_charba_client_intl_Language, Language.$static_XHOSA__org_pepstock_charba_client_intl_Language, Language.$static_YAKUT__org_pepstock_charba_client_intl_Language, Language.$static_YANGBEN__org_pepstock_charba_client_intl_Language, Language.$static_YIDDISH__org_pepstock_charba_client_intl_Language, Language.$static_YORUBA__org_pepstock_charba_client_intl_Language, Language.$static_YUE_CHINESE__org_pepstock_charba_client_intl_Language, Language.$static_ZARMA__org_pepstock_charba_client_intl_Language, Language.$static_ZULU__org_pepstock_charba_client_intl_Language], Language));
 }
 /** @return {!Language} */
 static get f_AFAR__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_AFAR__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_AFRIKAANS__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_AFRIKAANS__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_AGHEM__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_AGHEM__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_AKAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_AKAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_ALBANIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_ALBANIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_AMHARIC__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_AMHARIC__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_ARABIC__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_ARABIC__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_ARMENIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_ARMENIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_ASSAMESE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_ASSAMESE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_ASTURIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_ASTURIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_ASU__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_ASU__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_AZERBAIJANI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_AZERBAIJANI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_BAFIA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_BAFIA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_BAMBARA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_BAMBARA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_BASA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_BASA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_BASHKIR__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_BASHKIR__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_BASQUE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_BASQUE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_BELARUSIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_BELARUSIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_BEMBA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_BEMBA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_BENA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_BENA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_BENGALI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_BENGALI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_BILIN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_BILIN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_BODO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_BODO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_BOSNIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_BOSNIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_BRETON__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_BRETON__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_BUKUSU__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_BUKUSU__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_BULGARIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_BULGARIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_BURMESE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_BURMESE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_CATALAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_CATALAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_CEBUANO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_CEBUANO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_CENTRAL_ATLAS_TAMAZIGHT__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_CENTRAL_ATLAS_TAMAZIGHT__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_CENTRAL_KURDISH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_CENTRAL_KURDISH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_CHAKMA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_CHAKMA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_CHECHEN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_CHECHEN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_CHEROKEE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_CHEROKEE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_CHIGA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_CHIGA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_CHINESE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_CHINESE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_CHURCH_SLAVIC__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_CHURCH_SLAVIC__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_CONGO_SWAHILI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_CONGO_SWAHILI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_CORNISH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_CORNISH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_CORSICAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_CORSICAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_CROATIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_CROATIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_CUSCO_QUECHUA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_CUSCO_QUECHUA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_CZECH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_CZECH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_DANISH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_DANISH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_DARI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_DARI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_DHIVEHI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_DHIVEHI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_DUALA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_DUALA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_DUTCH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_DUTCH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_DZONGKHA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_DZONGKHA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_EASTERN_YIDDISH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_EASTERN_YIDDISH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_EMBU__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_EMBU__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_ENGLISH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_ENGLISH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_ESPERANTO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_ESPERANTO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_ESTONIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_ESTONIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_EWE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_EWE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_EWONDO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_EWONDO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_FANTI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_FANTI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_FAROESE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_FAROESE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_FILIPINO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_FILIPINO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_FINNISH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_FINNISH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_FRENCH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_FRENCH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_FRIULIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_FRIULIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_FULAH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_FULAH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_GALICIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_GALICIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_GANDA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_GANDA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_GEORGIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_GEORGIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_GERMAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_GERMAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_GUARANI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_GUARANI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_GUJARATI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_GUJARATI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_GUSII__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_GUSII__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_HALH_MONGOLIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_HALH_MONGOLIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_HAUSA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_HAUSA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_HAWAIIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_HAWAIIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_HEBREW__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_HEBREW__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_HINDI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_HINDI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_HUNGARIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_HUNGARIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_ICELANDIC__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_ICELANDIC__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_IGBO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_IGBO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_INARI_SAMI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_INARI_SAMI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_INDONESIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_INDONESIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_INTERLINGUA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_INTERLINGUA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_INUKTITUT__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_INUKTITUT__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_IRANIAN_PERSIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_IRANIAN_PERSIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_IRISH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_IRISH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_ITALIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_ITALIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_JAPANESE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_JAPANESE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_JAVANESE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_JAVANESE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_JOLA_FONYI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_JOLA_FONYI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KICHE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KICHE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KABUVERDIANU__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KABUVERDIANU__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KABYLE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KABYLE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KAKO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KAKO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KALAALLISUT__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KALAALLISUT__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KALENJIN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KALENJIN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KAMBA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KAMBA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KANNADA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KANNADA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KASHMIRI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KASHMIRI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KAZAKH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KAZAKH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KHMER__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KHMER__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KHOEKHOE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KHOEKHOE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KIKUYU__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KIKUYU__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KINYARWANDA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KINYARWANDA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KIRGHIZ__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KIRGHIZ__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KONKANI_INDIVIDUAL__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KONKANI_INDIVIDUAL__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KONKANI_MACRO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KONKANI_MACRO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KOREAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KOREAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KOYRA_CHIINI_SONGHAY__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KOYRA_CHIINI_SONGHAY__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KOYRABORO_SENNI_SONGHAI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KOYRABORO_SENNI_SONGHAI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KURDISH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KURDISH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KWASIO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KWASIO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_KALSCH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_KALSCH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_LAKOTA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_LAKOTA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_LANGI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_LANGI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_LAO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_LAO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_LATVIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_LATVIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_LINGALA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_LINGALA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_LITHUANIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_LITHUANIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_LOW_GERMAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_LOW_GERMAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_LOWER_SORBIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_LOWER_SORBIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_LUBA_KATANGA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_LUBA_KATANGA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_LULE_SAMI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_LULE_SAMI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_LUO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_LUO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_LUXEMBOURGISH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_LUXEMBOURGISH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_LUYIA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_LUYIA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MACEDONIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MACEDONIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MACHAME__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MACHAME__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MAITHILI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MAITHILI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MAKHUWA_MEETTO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MAKHUWA_MEETTO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MAKONDE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MAKONDE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MALAGASY__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MALAGASY__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MALAY__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MALAY__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MALAYALAM__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MALAYALAM__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MALTESE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MALTESE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MANDARIN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MANDARIN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MANIPURI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MANIPURI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MANX__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MANX__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MAORI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MAORI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MAPUDUNGUN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MAPUDUNGUN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MARATHI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MARATHI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MASAI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MASAI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MAZANDERANI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MAZANDERANI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MERU__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MERU__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_META__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_META__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MODERN_GREEK__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MODERN_GREEK__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MOHAWK__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MOHAWK__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MONGOLIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MONGOLIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MONTENEGRIN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MONTENEGRIN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MORISYEN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MORISYEN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_MUNDANG__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_MUNDANG__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_NKO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_NKO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_NEPALI_INDIVIDUAL__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_NEPALI_INDIVIDUAL__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_NEPALI_MACRO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_NEPALI_MACRO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_NGIEMBOON__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_NGIEMBOON__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_NGOMBA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_NGOMBA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_NIGERIAN_PIDGIN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_NIGERIAN_PIDGIN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_NORTH_AZERBAIJANI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_NORTH_AZERBAIJANI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_NORTH_NDEBELE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_NORTH_NDEBELE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_NORTHERN_KURDISH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_NORTHERN_KURDISH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_NORTHERN_LURI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_NORTHERN_LURI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_NORTHERN_PASHTO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_NORTHERN_PASHTO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_NORTHERN_SAMI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_NORTHERN_SAMI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_NORTHERN_UZBEK__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_NORTHERN_UZBEK__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_NORWEGIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_NORWEGIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_NORWEGIAN_BOKMAL__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_NORWEGIAN_BOKMAL__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_NORWEGIAN_NYNORSK__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_NORWEGIAN_NYNORSK__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_NUER__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_NUER__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_NYANKOLE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_NYANKOLE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_OCCITAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_OCCITAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_ODIA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_ODIA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_ORIYA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_ORIYA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_OROMO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_OROMO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_OSSETIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_OSSETIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_PANJABI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_PANJABI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_PEDI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_PEDI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_PERSIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_PERSIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_PLATEAU_MALAGASY__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_PLATEAU_MALAGASY__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_POLISH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_POLISH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_PORTUGUESE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_PORTUGUESE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_PRUSSIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_PRUSSIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_PULAAR__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_PULAAR__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_PUSHTO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_PUSHTO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_QUECHUA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_QUECHUA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_ROMANIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_ROMANIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_ROMANSH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_ROMANSH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_ROMBO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_ROMBO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_RUNDI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_RUNDI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_RUSSIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_RUSSIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_RWA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_RWA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SABAOT__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SABAOT__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SAHO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SAHO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SAMBURU__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SAMBURU__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SANGO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SANGO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SANGU__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SANGU__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SANSKRIT__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SANSKRIT__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SANTALI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SANTALI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SCOTTISH_GAELIC__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SCOTTISH_GAELIC__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SENA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SENA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SERBIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SERBIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SERBO_CROATIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SERBO_CROATIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SHAMBALA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SHAMBALA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SHONA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SHONA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SICHUAN_YI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SICHUAN_YI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SINDHI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SINDHI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SINHALA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SINHALA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SKOLT_SAMI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SKOLT_SAMI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SLOVAK__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SLOVAK__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SLOVENIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SLOVENIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SOGA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SOGA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SOMALI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SOMALI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SOUTH_NDEBELE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SOUTH_NDEBELE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SOUTHERN_SAMI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SOUTHERN_SAMI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SOUTHERN_SOTHO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SOUTHERN_SOTHO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SPANISH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SPANISH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_STANDARD_ARABIC__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_STANDARD_ARABIC__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_STANDARD_ESTONIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_STANDARD_ESTONIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_STANDARD_LATVIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_STANDARD_LATVIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_STANDARD_MALAY__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_STANDARD_MALAY__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_STANDARD_MOROCCAN_TAMAZIGHT__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_STANDARD_MOROCCAN_TAMAZIGHT__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SUNDANESE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SUNDANESE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SWAHILI_INDIVIDUAL__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SWAHILI_INDIVIDUAL__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SWAHILI_MACRO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SWAHILI_MACRO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SWATI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SWATI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SWEDISH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SWEDISH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SWISS_GERMAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SWISS_GERMAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_SYRIAC__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_SYRIAC__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_TACHELHIT__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_TACHELHIT__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_TAGALOG__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_TAGALOG__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_TAITA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_TAITA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_TAJIK__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_TAJIK__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_TAMIL__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_TAMIL__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_TASAWAQ__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_TASAWAQ__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_TATAR__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_TATAR__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_TELUGU__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_TELUGU__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_TESO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_TESO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_THAI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_THAI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_TIBETAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_TIBETAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_TIGRE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_TIGRE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_TIGRINYA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_TIGRINYA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_TONGA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_TONGA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_TOSK_ALBANIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_TOSK_ALBANIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_TSONGA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_TSONGA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_TSWANA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_TSWANA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_TURKISH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_TURKISH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_TURKMEN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_TURKMEN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_TWI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_TWI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_UIGHUR__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_UIGHUR__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_UKRAINIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_UKRAINIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_UPPER_SORBIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_UPPER_SORBIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_URDU__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_URDU__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_UZBEK__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_UZBEK__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_VAI__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_VAI__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_VENDA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_VENDA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_VIETNAMESE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_VIETNAMESE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_VOLAPAK__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_VOLAPAK__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_VUNJO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_VUNJO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_WALSER__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_WALSER__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_WELSH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_WELSH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_WEST_CENTRAL_OROMO__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_WEST_CENTRAL_OROMO__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_WESTERN_FRISIAN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_WESTERN_FRISIAN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_WOLAYTTA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_WOLAYTTA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_WOLOF__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_WOLOF__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_XHOSA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_XHOSA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_YAKUT__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_YAKUT__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_YANGBEN__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_YANGBEN__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_YIDDISH__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_YIDDISH__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_YORUBA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_YORUBA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_YUE_CHINESE__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_YUE_CHINESE__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_ZARMA__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_ZARMA__org_pepstock_charba_client_intl_Language);
 }
 /** @return {!Language} */
 static get f_ZULU__org_pepstock_charba_client_intl_Language() {
  return (Language.$clinit(), Language.$static_ZULU__org_pepstock_charba_client_intl_Language);
 }
 
 static $clinit() {
  Language.$clinit = () =>{};
  Language.$loadModules();
  Enum.$clinit();
  Language.$static_AFAR__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("AFAR"), Language.$ordinal_AFAR__org_pepstock_charba_client_intl_Language, "aar", "aa", "Afar");
  Language.$static_AFRIKAANS__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("AFRIKAANS"), Language.$ordinal_AFRIKAANS__org_pepstock_charba_client_intl_Language, "afr", "af", "Afrikaans");
  Language.$static_AGHEM__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("AGHEM"), Language.$ordinal_AGHEM__org_pepstock_charba_client_intl_Language, "agq", "Aghem");
  Language.$static_AKAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("AKAN"), Language.$ordinal_AKAN__org_pepstock_charba_client_intl_Language, "aka", "ak", "Akan");
  Language.$static_ALBANIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("ALBANIAN"), Language.$ordinal_ALBANIAN__org_pepstock_charba_client_intl_Language, "sqi", "sq", "Albanian");
  Language.$static_AMHARIC__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("AMHARIC"), Language.$ordinal_AMHARIC__org_pepstock_charba_client_intl_Language, "amh", "am", "Amharic");
  Language.$static_ARABIC__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("ARABIC"), Language.$ordinal_ARABIC__org_pepstock_charba_client_intl_Language, "ara", "ar", "Arabic");
  Language.$static_ARMENIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("ARMENIAN"), Language.$ordinal_ARMENIAN__org_pepstock_charba_client_intl_Language, "hye", "hy", "Armenian");
  Language.$static_ASSAMESE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("ASSAMESE"), Language.$ordinal_ASSAMESE__org_pepstock_charba_client_intl_Language, "asm", "as", "Assamese");
  Language.$static_ASTURIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ASTURIAN"), Language.$ordinal_ASTURIAN__org_pepstock_charba_client_intl_Language, "ast", "Asturian");
  Language.$static_ASU__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ASU"), Language.$ordinal_ASU__org_pepstock_charba_client_intl_Language, "asa", "Asu (Tanzania)");
  Language.$static_AZERBAIJANI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("AZERBAIJANI"), Language.$ordinal_AZERBAIJANI__org_pepstock_charba_client_intl_Language, "aze", "az", "Azerbaijani");
  Language.$static_BAFIA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BAFIA"), Language.$ordinal_BAFIA__org_pepstock_charba_client_intl_Language, "ksf", "Bafia");
  Language.$static_BAMBARA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("BAMBARA"), Language.$ordinal_BAMBARA__org_pepstock_charba_client_intl_Language, "bam", "bm", "Bambara");
  Language.$static_BASA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BASA"), Language.$ordinal_BASA__org_pepstock_charba_client_intl_Language, "bas", "Basa (Cameroon)");
  Language.$static_BASHKIR__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("BASHKIR"), Language.$ordinal_BASHKIR__org_pepstock_charba_client_intl_Language, "bak", "ba", "Bashkir");
  Language.$static_BASQUE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("BASQUE"), Language.$ordinal_BASQUE__org_pepstock_charba_client_intl_Language, "eus", "eu", "Basque");
  Language.$static_BELARUSIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("BELARUSIAN"), Language.$ordinal_BELARUSIAN__org_pepstock_charba_client_intl_Language, "bel", "be", "Belarusian");
  Language.$static_BEMBA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BEMBA"), Language.$ordinal_BEMBA__org_pepstock_charba_client_intl_Language, "bem", "Bemba (Zambia)");
  Language.$static_BENA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BENA"), Language.$ordinal_BENA__org_pepstock_charba_client_intl_Language, "bez", "Bena (Tanzania)");
  Language.$static_BENGALI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("BENGALI"), Language.$ordinal_BENGALI__org_pepstock_charba_client_intl_Language, "ben", "bn", "Bengali");
  Language.$static_BILIN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BILIN"), Language.$ordinal_BILIN__org_pepstock_charba_client_intl_Language, "byn", "Bilin");
  Language.$static_BODO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BODO"), Language.$ordinal_BODO__org_pepstock_charba_client_intl_Language, "brx", "Bodo (India)");
  Language.$static_BOSNIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("BOSNIAN"), Language.$ordinal_BOSNIAN__org_pepstock_charba_client_intl_Language, "bos", "bs", "Bosnian");
  Language.$static_BRETON__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("BRETON"), Language.$ordinal_BRETON__org_pepstock_charba_client_intl_Language, "bre", "br", "Breton");
  Language.$static_BUKUSU__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BUKUSU"), Language.$ordinal_BUKUSU__org_pepstock_charba_client_intl_Language, "bxk", "Bukusu");
  Language.$static_BULGARIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("BULGARIAN"), Language.$ordinal_BULGARIAN__org_pepstock_charba_client_intl_Language, "bul", "bg", "Bulgarian");
  Language.$static_BURMESE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("BURMESE"), Language.$ordinal_BURMESE__org_pepstock_charba_client_intl_Language, "mya", "my", "Burmese");
  Language.$static_CATALAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("CATALAN"), Language.$ordinal_CATALAN__org_pepstock_charba_client_intl_Language, "cat", "ca", "Catalan");
  Language.$static_CEBUANO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CEBUANO"), Language.$ordinal_CEBUANO__org_pepstock_charba_client_intl_Language, "ceb", "Cebuano");
  Language.$static_CENTRAL_ATLAS_TAMAZIGHT__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CENTRAL_ATLAS_TAMAZIGHT"), Language.$ordinal_CENTRAL_ATLAS_TAMAZIGHT__org_pepstock_charba_client_intl_Language, "tzm", "Central Atlas Tamazight");
  Language.$static_CENTRAL_KURDISH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CENTRAL_KURDISH"), Language.$ordinal_CENTRAL_KURDISH__org_pepstock_charba_client_intl_Language, "ckb", "Central Kurdish");
  Language.$static_CHAKMA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CHAKMA"), Language.$ordinal_CHAKMA__org_pepstock_charba_client_intl_Language, "ccp", "Chakma");
  Language.$static_CHECHEN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("CHECHEN"), Language.$ordinal_CHECHEN__org_pepstock_charba_client_intl_Language, "che", "ce", "Chechen");
  Language.$static_CHEROKEE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CHEROKEE"), Language.$ordinal_CHEROKEE__org_pepstock_charba_client_intl_Language, "chr", "Cherokee");
  Language.$static_CHIGA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CHIGA"), Language.$ordinal_CHIGA__org_pepstock_charba_client_intl_Language, "cgg", "Chiga");
  Language.$static_CHINESE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("CHINESE"), Language.$ordinal_CHINESE__org_pepstock_charba_client_intl_Language, "zho", "zh", "Chinese");
  Language.$static_CHURCH_SLAVIC__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("CHURCH_SLAVIC"), Language.$ordinal_CHURCH_SLAVIC__org_pepstock_charba_client_intl_Language, "chu", "cu", "Church Slavic");
  Language.$static_CONGO_SWAHILI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CONGO_SWAHILI"), Language.$ordinal_CONGO_SWAHILI__org_pepstock_charba_client_intl_Language, "swc", "Congo Swahili");
  Language.$static_CORNISH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("CORNISH"), Language.$ordinal_CORNISH__org_pepstock_charba_client_intl_Language, "cor", "kw", "Cornish");
  Language.$static_CORSICAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("CORSICAN"), Language.$ordinal_CORSICAN__org_pepstock_charba_client_intl_Language, "cos", "co", "Corsican");
  Language.$static_CROATIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("CROATIAN"), Language.$ordinal_CROATIAN__org_pepstock_charba_client_intl_Language, "hrv", "hr", "Croatian");
  Language.$static_CUSCO_QUECHUA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CUSCO_QUECHUA"), Language.$ordinal_CUSCO_QUECHUA__org_pepstock_charba_client_intl_Language, "quz", "Cusco Quechua");
  Language.$static_CZECH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("CZECH"), Language.$ordinal_CZECH__org_pepstock_charba_client_intl_Language, "ces", "cs", "Czech");
  Language.$static_DANISH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("DANISH"), Language.$ordinal_DANISH__org_pepstock_charba_client_intl_Language, "dan", "da", "Danish");
  Language.$static_DARI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("DARI"), Language.$ordinal_DARI__org_pepstock_charba_client_intl_Language, "prs", "Dari");
  Language.$static_DHIVEHI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("DHIVEHI"), Language.$ordinal_DHIVEHI__org_pepstock_charba_client_intl_Language, "div", "dv", "Dhivehi");
  Language.$static_DUALA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("DUALA"), Language.$ordinal_DUALA__org_pepstock_charba_client_intl_Language, "dua", "Duala");
  Language.$static_DUTCH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("DUTCH"), Language.$ordinal_DUTCH__org_pepstock_charba_client_intl_Language, "nld", "nl", "Dutch");
  Language.$static_DZONGKHA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("DZONGKHA"), Language.$ordinal_DZONGKHA__org_pepstock_charba_client_intl_Language, "dzo", "dz", "Dzongkha");
  Language.$static_EASTERN_YIDDISH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("EASTERN_YIDDISH"), Language.$ordinal_EASTERN_YIDDISH__org_pepstock_charba_client_intl_Language, "ydd", "Eastern Yiddish");
  Language.$static_EMBU__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("EMBU"), Language.$ordinal_EMBU__org_pepstock_charba_client_intl_Language, "ebu", "Embu");
  Language.$static_ENGLISH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("ENGLISH"), Language.$ordinal_ENGLISH__org_pepstock_charba_client_intl_Language, "eng", "en", "English");
  Language.$static_ESPERANTO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("ESPERANTO"), Language.$ordinal_ESPERANTO__org_pepstock_charba_client_intl_Language, "epo", "eo", "Esperanto");
  Language.$static_ESTONIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("ESTONIAN"), Language.$ordinal_ESTONIAN__org_pepstock_charba_client_intl_Language, "est", "et", "Estonian");
  Language.$static_EWE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("EWE"), Language.$ordinal_EWE__org_pepstock_charba_client_intl_Language, "ewe", "ee", "Ewe");
  Language.$static_EWONDO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("EWONDO"), Language.$ordinal_EWONDO__org_pepstock_charba_client_intl_Language, "ewo", "Ewondo");
  Language.$static_FANTI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("FANTI"), Language.$ordinal_FANTI__org_pepstock_charba_client_intl_Language, "fat", "Fanti");
  Language.$static_FAROESE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("FAROESE"), Language.$ordinal_FAROESE__org_pepstock_charba_client_intl_Language, "fao", "fo", "Faroese");
  Language.$static_FILIPINO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("FILIPINO"), Language.$ordinal_FILIPINO__org_pepstock_charba_client_intl_Language, "fil", "Filipino");
  Language.$static_FINNISH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("FINNISH"), Language.$ordinal_FINNISH__org_pepstock_charba_client_intl_Language, "fin", "fi", "Finnish");
  Language.$static_FRENCH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("FRENCH"), Language.$ordinal_FRENCH__org_pepstock_charba_client_intl_Language, "fra", "fr", "French");
  Language.$static_FRIULIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("FRIULIAN"), Language.$ordinal_FRIULIAN__org_pepstock_charba_client_intl_Language, "fur", "Friulian");
  Language.$static_FULAH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("FULAH"), Language.$ordinal_FULAH__org_pepstock_charba_client_intl_Language, "ful", "ff", "Fulah");
  Language.$static_GALICIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("GALICIAN"), Language.$ordinal_GALICIAN__org_pepstock_charba_client_intl_Language, "glg", "gl", "Galician");
  Language.$static_GANDA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("GANDA"), Language.$ordinal_GANDA__org_pepstock_charba_client_intl_Language, "lug", "lg", "Ganda");
  Language.$static_GEORGIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("GEORGIAN"), Language.$ordinal_GEORGIAN__org_pepstock_charba_client_intl_Language, "kat", "ka", "Georgian");
  Language.$static_GERMAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("GERMAN"), Language.$ordinal_GERMAN__org_pepstock_charba_client_intl_Language, "deu", "de", "German");
  Language.$static_GUARANI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("GUARANI"), Language.$ordinal_GUARANI__org_pepstock_charba_client_intl_Language, "grn", "gn", "Guarani");
  Language.$static_GUJARATI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("GUJARATI"), Language.$ordinal_GUJARATI__org_pepstock_charba_client_intl_Language, "guj", "gu", "Gujarati");
  Language.$static_GUSII__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("GUSII"), Language.$ordinal_GUSII__org_pepstock_charba_client_intl_Language, "guz", "Gusii");
  Language.$static_HALH_MONGOLIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("HALH_MONGOLIAN"), Language.$ordinal_HALH_MONGOLIAN__org_pepstock_charba_client_intl_Language, "khk", "Halh Mongolian");
  Language.$static_HAUSA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("HAUSA"), Language.$ordinal_HAUSA__org_pepstock_charba_client_intl_Language, "hau", "ha", "Hausa");
  Language.$static_HAWAIIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("HAWAIIAN"), Language.$ordinal_HAWAIIAN__org_pepstock_charba_client_intl_Language, "haw", "Hawaiian");
  Language.$static_HEBREW__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("HEBREW"), Language.$ordinal_HEBREW__org_pepstock_charba_client_intl_Language, "heb", "he", "Hebrew");
  Language.$static_HINDI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("HINDI"), Language.$ordinal_HINDI__org_pepstock_charba_client_intl_Language, "hin", "hi", "Hindi");
  Language.$static_HUNGARIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("HUNGARIAN"), Language.$ordinal_HUNGARIAN__org_pepstock_charba_client_intl_Language, "hun", "hu", "Hungarian");
  Language.$static_ICELANDIC__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("ICELANDIC"), Language.$ordinal_ICELANDIC__org_pepstock_charba_client_intl_Language, "isl", "is", "Icelandic");
  Language.$static_IGBO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("IGBO"), Language.$ordinal_IGBO__org_pepstock_charba_client_intl_Language, "ibo", "ig", "Igbo");
  Language.$static_INARI_SAMI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("INARI_SAMI"), Language.$ordinal_INARI_SAMI__org_pepstock_charba_client_intl_Language, "smn", "Inari Sami");
  Language.$static_INDONESIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("INDONESIAN"), Language.$ordinal_INDONESIAN__org_pepstock_charba_client_intl_Language, "ind", "id", "Indonesian");
  Language.$static_INTERLINGUA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("INTERLINGUA"), Language.$ordinal_INTERLINGUA__org_pepstock_charba_client_intl_Language, "ina", "ia", "Interlingua (International Auxiliary Language Association)");
  Language.$static_INUKTITUT__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("INUKTITUT"), Language.$ordinal_INUKTITUT__org_pepstock_charba_client_intl_Language, "iku", "iu", "Inuktitut");
  Language.$static_IRANIAN_PERSIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("IRANIAN_PERSIAN"), Language.$ordinal_IRANIAN_PERSIAN__org_pepstock_charba_client_intl_Language, "pes", "Iranian Persian");
  Language.$static_IRISH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("IRISH"), Language.$ordinal_IRISH__org_pepstock_charba_client_intl_Language, "gle", "ga", "Irish");
  Language.$static_ITALIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("ITALIAN"), Language.$ordinal_ITALIAN__org_pepstock_charba_client_intl_Language, "ita", "it", "Italian");
  Language.$static_JAPANESE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("JAPANESE"), Language.$ordinal_JAPANESE__org_pepstock_charba_client_intl_Language, "jpn", "ja", "Japanese");
  Language.$static_JAVANESE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("JAVANESE"), Language.$ordinal_JAVANESE__org_pepstock_charba_client_intl_Language, "jav", "jv", "Javanese");
  Language.$static_JOLA_FONYI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("JOLA_FONYI"), Language.$ordinal_JOLA_FONYI__org_pepstock_charba_client_intl_Language, "dyo", "Jola-Fonyi");
  Language.$static_KICHE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("KICHE"), Language.$ordinal_KICHE__org_pepstock_charba_client_intl_Language, "quc", "K'iche'");
  Language.$static_KABUVERDIANU__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("KABUVERDIANU"), Language.$ordinal_KABUVERDIANU__org_pepstock_charba_client_intl_Language, "kea", "Kabuverdianu");
  Language.$static_KABYLE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("KABYLE"), Language.$ordinal_KABYLE__org_pepstock_charba_client_intl_Language, "kab", "Kabyle");
  Language.$static_KAKO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("KAKO"), Language.$ordinal_KAKO__org_pepstock_charba_client_intl_Language, "kkj", "Kako");
  Language.$static_KALAALLISUT__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("KALAALLISUT"), Language.$ordinal_KALAALLISUT__org_pepstock_charba_client_intl_Language, "kal", "kl", "Kalaallisut");
  Language.$static_KALENJIN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("KALENJIN"), Language.$ordinal_KALENJIN__org_pepstock_charba_client_intl_Language, "kln", "Kalenjin");
  Language.$static_KAMBA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("KAMBA"), Language.$ordinal_KAMBA__org_pepstock_charba_client_intl_Language, "kam", "Kamba (Kenya)");
  Language.$static_KANNADA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("KANNADA"), Language.$ordinal_KANNADA__org_pepstock_charba_client_intl_Language, "kan", "kn", "Kannada");
  Language.$static_KASHMIRI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("KASHMIRI"), Language.$ordinal_KASHMIRI__org_pepstock_charba_client_intl_Language, "kas", "ks", "Kashmiri");
  Language.$static_KAZAKH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("KAZAKH"), Language.$ordinal_KAZAKH__org_pepstock_charba_client_intl_Language, "kaz", "kk", "Kazakh");
  Language.$static_KHMER__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("KHMER"), Language.$ordinal_KHMER__org_pepstock_charba_client_intl_Language, "khm", "km", "Khmer");
  Language.$static_KHOEKHOE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("KHOEKHOE"), Language.$ordinal_KHOEKHOE__org_pepstock_charba_client_intl_Language, "naq", "Khoekhoe");
  Language.$static_KIKUYU__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("KIKUYU"), Language.$ordinal_KIKUYU__org_pepstock_charba_client_intl_Language, "kik", "ki", "Kikuyu");
  Language.$static_KINYARWANDA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("KINYARWANDA"), Language.$ordinal_KINYARWANDA__org_pepstock_charba_client_intl_Language, "kin", "rw", "Kinyarwanda");
  Language.$static_KIRGHIZ__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("KIRGHIZ"), Language.$ordinal_KIRGHIZ__org_pepstock_charba_client_intl_Language, "kir", "ky", "Kirghiz");
  Language.$static_KONKANI_INDIVIDUAL__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("KONKANI_INDIVIDUAL"), Language.$ordinal_KONKANI_INDIVIDUAL__org_pepstock_charba_client_intl_Language, "knn", "Konkani (individual language)");
  Language.$static_KONKANI_MACRO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("KONKANI_MACRO"), Language.$ordinal_KONKANI_MACRO__org_pepstock_charba_client_intl_Language, "kok", "Konkani (macrolanguage)");
  Language.$static_KOREAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("KOREAN"), Language.$ordinal_KOREAN__org_pepstock_charba_client_intl_Language, "kor", "ko", "Korean");
  Language.$static_KOYRA_CHIINI_SONGHAY__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("KOYRA_CHIINI_SONGHAY"), Language.$ordinal_KOYRA_CHIINI_SONGHAY__org_pepstock_charba_client_intl_Language, "khq", "Koyra Chiini Songhay");
  Language.$static_KOYRABORO_SENNI_SONGHAI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("KOYRABORO_SENNI_SONGHAI"), Language.$ordinal_KOYRABORO_SENNI_SONGHAI__org_pepstock_charba_client_intl_Language, "ses", "Koyraboro Senni Songhai");
  Language.$static_KURDISH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("KURDISH"), Language.$ordinal_KURDISH__org_pepstock_charba_client_intl_Language, "kur", "ku", "Kurdish");
  Language.$static_KWASIO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("KWASIO"), Language.$ordinal_KWASIO__org_pepstock_charba_client_intl_Language, "nmg", "Kwasio");
  Language.$static_KALSCH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("KALSCH"), Language.$ordinal_KALSCH__org_pepstock_charba_client_intl_Language, "ksh", "K\u00C3\u00B6lsch");
  Language.$static_LAKOTA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("LAKOTA"), Language.$ordinal_LAKOTA__org_pepstock_charba_client_intl_Language, "lkt", "Lakota");
  Language.$static_LANGI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("LANGI"), Language.$ordinal_LANGI__org_pepstock_charba_client_intl_Language, "lag", "Langi");
  Language.$static_LAO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("LAO"), Language.$ordinal_LAO__org_pepstock_charba_client_intl_Language, "lao", "lo", "Lao");
  Language.$static_LATVIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("LATVIAN"), Language.$ordinal_LATVIAN__org_pepstock_charba_client_intl_Language, "lav", "lv", "Latvian");
  Language.$static_LINGALA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("LINGALA"), Language.$ordinal_LINGALA__org_pepstock_charba_client_intl_Language, "lin", "ln", "Lingala");
  Language.$static_LITHUANIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("LITHUANIAN"), Language.$ordinal_LITHUANIAN__org_pepstock_charba_client_intl_Language, "lit", "lt", "Lithuanian");
  Language.$static_LOW_GERMAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("LOW_GERMAN"), Language.$ordinal_LOW_GERMAN__org_pepstock_charba_client_intl_Language, "nds", "Low German");
  Language.$static_LOWER_SORBIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("LOWER_SORBIAN"), Language.$ordinal_LOWER_SORBIAN__org_pepstock_charba_client_intl_Language, "dsb", "Lower Sorbian");
  Language.$static_LUBA_KATANGA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("LUBA_KATANGA"), Language.$ordinal_LUBA_KATANGA__org_pepstock_charba_client_intl_Language, "lub", "lu", "Luba-Katanga");
  Language.$static_LULE_SAMI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("LULE_SAMI"), Language.$ordinal_LULE_SAMI__org_pepstock_charba_client_intl_Language, "smj", "Lule Sami");
  Language.$static_LUO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("LUO"), Language.$ordinal_LUO__org_pepstock_charba_client_intl_Language, "luo", "Luo (Kenya and Tanzania)");
  Language.$static_LUXEMBOURGISH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("LUXEMBOURGISH"), Language.$ordinal_LUXEMBOURGISH__org_pepstock_charba_client_intl_Language, "ltz", "lb", "Luxembourgish");
  Language.$static_LUYIA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("LUYIA"), Language.$ordinal_LUYIA__org_pepstock_charba_client_intl_Language, "luy", "Luyia");
  Language.$static_MACEDONIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("MACEDONIAN"), Language.$ordinal_MACEDONIAN__org_pepstock_charba_client_intl_Language, "mkd", "mk", "Macedonian");
  Language.$static_MACHAME__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MACHAME"), Language.$ordinal_MACHAME__org_pepstock_charba_client_intl_Language, "jmc", "Machame");
  Language.$static_MAITHILI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MAITHILI"), Language.$ordinal_MAITHILI__org_pepstock_charba_client_intl_Language, "mai", "Maithili");
  Language.$static_MAKHUWA_MEETTO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MAKHUWA_MEETTO"), Language.$ordinal_MAKHUWA_MEETTO__org_pepstock_charba_client_intl_Language, "mgh", "Makhuwa-Meetto");
  Language.$static_MAKONDE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MAKONDE"), Language.$ordinal_MAKONDE__org_pepstock_charba_client_intl_Language, "kde", "Makonde");
  Language.$static_MALAGASY__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("MALAGASY"), Language.$ordinal_MALAGASY__org_pepstock_charba_client_intl_Language, "mlg", "mg", "Malagasy");
  Language.$static_MALAY__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("MALAY"), Language.$ordinal_MALAY__org_pepstock_charba_client_intl_Language, "msa", "ms", "Malay (macrolanguage)");
  Language.$static_MALAYALAM__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("MALAYALAM"), Language.$ordinal_MALAYALAM__org_pepstock_charba_client_intl_Language, "mal", "ml", "Malayalam");
  Language.$static_MALTESE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("MALTESE"), Language.$ordinal_MALTESE__org_pepstock_charba_client_intl_Language, "mlt", "mt", "Maltese");
  Language.$static_MANDARIN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MANDARIN"), Language.$ordinal_MANDARIN__org_pepstock_charba_client_intl_Language, "cmn", "Mandarin Chinese");
  Language.$static_MANIPURI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MANIPURI"), Language.$ordinal_MANIPURI__org_pepstock_charba_client_intl_Language, "mni", "Manipuri");
  Language.$static_MANX__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("MANX"), Language.$ordinal_MANX__org_pepstock_charba_client_intl_Language, "glv", "gv", "Manx");
  Language.$static_MAORI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("MAORI"), Language.$ordinal_MAORI__org_pepstock_charba_client_intl_Language, "mri", "mi", "Maori");
  Language.$static_MAPUDUNGUN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MAPUDUNGUN"), Language.$ordinal_MAPUDUNGUN__org_pepstock_charba_client_intl_Language, "arn", "Mapudungun");
  Language.$static_MARATHI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("MARATHI"), Language.$ordinal_MARATHI__org_pepstock_charba_client_intl_Language, "mar", "mr", "Marathi");
  Language.$static_MASAI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MASAI"), Language.$ordinal_MASAI__org_pepstock_charba_client_intl_Language, "mas", "Masai");
  Language.$static_MAZANDERANI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MAZANDERANI"), Language.$ordinal_MAZANDERANI__org_pepstock_charba_client_intl_Language, "mzn", "Mazanderani");
  Language.$static_MERU__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MERU"), Language.$ordinal_MERU__org_pepstock_charba_client_intl_Language, "mer", "Meru");
  Language.$static_META__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("META"), Language.$ordinal_META__org_pepstock_charba_client_intl_Language, "mgo", "Meta'");
  Language.$static_MODERN_GREEK__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("MODERN_GREEK"), Language.$ordinal_MODERN_GREEK__org_pepstock_charba_client_intl_Language, "ell", "el", "Modern Greek (1453-)");
  Language.$static_MOHAWK__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MOHAWK"), Language.$ordinal_MOHAWK__org_pepstock_charba_client_intl_Language, "moh", "Mohawk");
  Language.$static_MONGOLIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("MONGOLIAN"), Language.$ordinal_MONGOLIAN__org_pepstock_charba_client_intl_Language, "mon", "mn", "Mongolian");
  Language.$static_MONTENEGRIN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MONTENEGRIN"), Language.$ordinal_MONTENEGRIN__org_pepstock_charba_client_intl_Language, "cnr", "Montenegrin");
  Language.$static_MORISYEN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MORISYEN"), Language.$ordinal_MORISYEN__org_pepstock_charba_client_intl_Language, "mfe", "Morisyen");
  Language.$static_MUNDANG__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MUNDANG"), Language.$ordinal_MUNDANG__org_pepstock_charba_client_intl_Language, "mua", "Mundang");
  Language.$static_NKO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NKO"), Language.$ordinal_NKO__org_pepstock_charba_client_intl_Language, "nqo", "N'Ko");
  Language.$static_NEPALI_INDIVIDUAL__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NEPALI_INDIVIDUAL"), Language.$ordinal_NEPALI_INDIVIDUAL__org_pepstock_charba_client_intl_Language, "npi", "Nepali (individual language)");
  Language.$static_NEPALI_MACRO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("NEPALI_MACRO"), Language.$ordinal_NEPALI_MACRO__org_pepstock_charba_client_intl_Language, "nep", "ne", "Nepali (macrolanguage)");
  Language.$static_NGIEMBOON__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NGIEMBOON"), Language.$ordinal_NGIEMBOON__org_pepstock_charba_client_intl_Language, "nnh", "Ngiemboon");
  Language.$static_NGOMBA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NGOMBA"), Language.$ordinal_NGOMBA__org_pepstock_charba_client_intl_Language, "jgo", "Ngomba");
  Language.$static_NIGERIAN_PIDGIN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NIGERIAN_PIDGIN"), Language.$ordinal_NIGERIAN_PIDGIN__org_pepstock_charba_client_intl_Language, "pcm", "Nigerian Pidgin");
  Language.$static_NORTH_AZERBAIJANI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NORTH_AZERBAIJANI"), Language.$ordinal_NORTH_AZERBAIJANI__org_pepstock_charba_client_intl_Language, "azj", "North Azerbaijani");
  Language.$static_NORTH_NDEBELE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("NORTH_NDEBELE"), Language.$ordinal_NORTH_NDEBELE__org_pepstock_charba_client_intl_Language, "nde", "nd", "North Ndebele");
  Language.$static_NORTHERN_KURDISH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NORTHERN_KURDISH"), Language.$ordinal_NORTHERN_KURDISH__org_pepstock_charba_client_intl_Language, "kmr", "Northern Kurdish");
  Language.$static_NORTHERN_LURI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NORTHERN_LURI"), Language.$ordinal_NORTHERN_LURI__org_pepstock_charba_client_intl_Language, "lrc", "Northern Luri");
  Language.$static_NORTHERN_PASHTO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NORTHERN_PASHTO"), Language.$ordinal_NORTHERN_PASHTO__org_pepstock_charba_client_intl_Language, "pbu", "Northern Pashto");
  Language.$static_NORTHERN_SAMI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("NORTHERN_SAMI"), Language.$ordinal_NORTHERN_SAMI__org_pepstock_charba_client_intl_Language, "sme", "se", "Northern Sami");
  Language.$static_NORTHERN_UZBEK__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NORTHERN_UZBEK"), Language.$ordinal_NORTHERN_UZBEK__org_pepstock_charba_client_intl_Language, "uzn", "Northern Uzbek");
  Language.$static_NORWEGIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("NORWEGIAN"), Language.$ordinal_NORWEGIAN__org_pepstock_charba_client_intl_Language, "nor", "no", "Norwegian");
  Language.$static_NORWEGIAN_BOKMAL__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("NORWEGIAN_BOKMAL"), Language.$ordinal_NORWEGIAN_BOKMAL__org_pepstock_charba_client_intl_Language, "nob", "nb", "Norwegian Bokm\u00C3\u00A5l");
  Language.$static_NORWEGIAN_NYNORSK__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("NORWEGIAN_NYNORSK"), Language.$ordinal_NORWEGIAN_NYNORSK__org_pepstock_charba_client_intl_Language, "nno", "nn", "Norwegian Nynorsk");
  Language.$static_NUER__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NUER"), Language.$ordinal_NUER__org_pepstock_charba_client_intl_Language, "nus", "Nuer");
  Language.$static_NYANKOLE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NYANKOLE"), Language.$ordinal_NYANKOLE__org_pepstock_charba_client_intl_Language, "nyn", "Nyankole");
  Language.$static_OCCITAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("OCCITAN"), Language.$ordinal_OCCITAN__org_pepstock_charba_client_intl_Language, "oci", "oc", "Occitan (post 1500)");
  Language.$static_ODIA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ODIA"), Language.$ordinal_ODIA__org_pepstock_charba_client_intl_Language, "ory", "Odia");
  Language.$static_ORIYA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("ORIYA"), Language.$ordinal_ORIYA__org_pepstock_charba_client_intl_Language, "ori", "or", "Oriya (macrolanguage)");
  Language.$static_OROMO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("OROMO"), Language.$ordinal_OROMO__org_pepstock_charba_client_intl_Language, "orm", "om", "Oromo");
  Language.$static_OSSETIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("OSSETIAN"), Language.$ordinal_OSSETIAN__org_pepstock_charba_client_intl_Language, "oss", "os", "Ossetian");
  Language.$static_PANJABI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("PANJABI"), Language.$ordinal_PANJABI__org_pepstock_charba_client_intl_Language, "pan", "pa", "Panjabi");
  Language.$static_PEDI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("PEDI"), Language.$ordinal_PEDI__org_pepstock_charba_client_intl_Language, "nso", "Pedi");
  Language.$static_PERSIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("PERSIAN"), Language.$ordinal_PERSIAN__org_pepstock_charba_client_intl_Language, "fas", "fa", "Persian");
  Language.$static_PLATEAU_MALAGASY__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("PLATEAU_MALAGASY"), Language.$ordinal_PLATEAU_MALAGASY__org_pepstock_charba_client_intl_Language, "plt", "Plateau Malagasy");
  Language.$static_POLISH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("POLISH"), Language.$ordinal_POLISH__org_pepstock_charba_client_intl_Language, "pol", "pl", "Polish");
  Language.$static_PORTUGUESE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("PORTUGUESE"), Language.$ordinal_PORTUGUESE__org_pepstock_charba_client_intl_Language, "por", "pt", "Portuguese");
  Language.$static_PRUSSIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("PRUSSIAN"), Language.$ordinal_PRUSSIAN__org_pepstock_charba_client_intl_Language, "prg", "Prussian");
  Language.$static_PULAAR__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("PULAAR"), Language.$ordinal_PULAAR__org_pepstock_charba_client_intl_Language, "fuc", "Pulaar");
  Language.$static_PUSHTO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("PUSHTO"), Language.$ordinal_PUSHTO__org_pepstock_charba_client_intl_Language, "pus", "ps", "Pushto");
  Language.$static_QUECHUA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("QUECHUA"), Language.$ordinal_QUECHUA__org_pepstock_charba_client_intl_Language, "que", "qu", "Quechua");
  Language.$static_ROMANIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("ROMANIAN"), Language.$ordinal_ROMANIAN__org_pepstock_charba_client_intl_Language, "ron", "ro", "Romanian");
  Language.$static_ROMANSH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("ROMANSH"), Language.$ordinal_ROMANSH__org_pepstock_charba_client_intl_Language, "roh", "rm", "Romansh");
  Language.$static_ROMBO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ROMBO"), Language.$ordinal_ROMBO__org_pepstock_charba_client_intl_Language, "rof", "Rombo");
  Language.$static_RUNDI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("RUNDI"), Language.$ordinal_RUNDI__org_pepstock_charba_client_intl_Language, "run", "rn", "Rundi");
  Language.$static_RUSSIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("RUSSIAN"), Language.$ordinal_RUSSIAN__org_pepstock_charba_client_intl_Language, "rus", "ru", "Russian");
  Language.$static_RWA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("RWA"), Language.$ordinal_RWA__org_pepstock_charba_client_intl_Language, "rwk", "Rwa");
  Language.$static_SABAOT__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SABAOT"), Language.$ordinal_SABAOT__org_pepstock_charba_client_intl_Language, "spy", "Sabaot");
  Language.$static_SAHO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SAHO"), Language.$ordinal_SAHO__org_pepstock_charba_client_intl_Language, "ssy", "Saho");
  Language.$static_SAMBURU__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SAMBURU"), Language.$ordinal_SAMBURU__org_pepstock_charba_client_intl_Language, "saq", "Samburu");
  Language.$static_SANGO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("SANGO"), Language.$ordinal_SANGO__org_pepstock_charba_client_intl_Language, "sag", "sg", "Sango");
  Language.$static_SANGU__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SANGU"), Language.$ordinal_SANGU__org_pepstock_charba_client_intl_Language, "sbp", "Sangu (Tanzania)");
  Language.$static_SANSKRIT__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("SANSKRIT"), Language.$ordinal_SANSKRIT__org_pepstock_charba_client_intl_Language, "san", "sa", "Sanskrit");
  Language.$static_SANTALI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SANTALI"), Language.$ordinal_SANTALI__org_pepstock_charba_client_intl_Language, "sat", "Santali");
  Language.$static_SCOTTISH_GAELIC__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("SCOTTISH_GAELIC"), Language.$ordinal_SCOTTISH_GAELIC__org_pepstock_charba_client_intl_Language, "gla", "gd", "Scottish Gaelic");
  Language.$static_SENA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SENA"), Language.$ordinal_SENA__org_pepstock_charba_client_intl_Language, "seh", "Sena");
  Language.$static_SERBIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("SERBIAN"), Language.$ordinal_SERBIAN__org_pepstock_charba_client_intl_Language, "srp", "sr", "Serbian");
  Language.$static_SERBO_CROATIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("SERBO_CROATIAN"), Language.$ordinal_SERBO_CROATIAN__org_pepstock_charba_client_intl_Language, "hbs", "sh", "Serbo-Croatian");
  Language.$static_SHAMBALA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SHAMBALA"), Language.$ordinal_SHAMBALA__org_pepstock_charba_client_intl_Language, "ksb", "Shambala");
  Language.$static_SHONA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("SHONA"), Language.$ordinal_SHONA__org_pepstock_charba_client_intl_Language, "sna", "sn", "Shona");
  Language.$static_SICHUAN_YI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("SICHUAN_YI"), Language.$ordinal_SICHUAN_YI__org_pepstock_charba_client_intl_Language, "iii", "ii", "Sichuan Yi");
  Language.$static_SINDHI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("SINDHI"), Language.$ordinal_SINDHI__org_pepstock_charba_client_intl_Language, "snd", "sd", "Sindhi");
  Language.$static_SINHALA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("SINHALA"), Language.$ordinal_SINHALA__org_pepstock_charba_client_intl_Language, "sin", "si", "Sinhala");
  Language.$static_SKOLT_SAMI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SKOLT_SAMI"), Language.$ordinal_SKOLT_SAMI__org_pepstock_charba_client_intl_Language, "sms", "Skolt Sami");
  Language.$static_SLOVAK__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("SLOVAK"), Language.$ordinal_SLOVAK__org_pepstock_charba_client_intl_Language, "slk", "sk", "Slovak");
  Language.$static_SLOVENIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("SLOVENIAN"), Language.$ordinal_SLOVENIAN__org_pepstock_charba_client_intl_Language, "slv", "sl", "Slovenian");
  Language.$static_SOGA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SOGA"), Language.$ordinal_SOGA__org_pepstock_charba_client_intl_Language, "xog", "Soga");
  Language.$static_SOMALI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("SOMALI"), Language.$ordinal_SOMALI__org_pepstock_charba_client_intl_Language, "som", "so", "Somali");
  Language.$static_SOUTH_NDEBELE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("SOUTH_NDEBELE"), Language.$ordinal_SOUTH_NDEBELE__org_pepstock_charba_client_intl_Language, "nbl", "nr", "South Ndebele");
  Language.$static_SOUTHERN_SAMI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SOUTHERN_SAMI"), Language.$ordinal_SOUTHERN_SAMI__org_pepstock_charba_client_intl_Language, "sma", "Southern Sami");
  Language.$static_SOUTHERN_SOTHO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("SOUTHERN_SOTHO"), Language.$ordinal_SOUTHERN_SOTHO__org_pepstock_charba_client_intl_Language, "sot", "st", "Southern Sotho");
  Language.$static_SPANISH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("SPANISH"), Language.$ordinal_SPANISH__org_pepstock_charba_client_intl_Language, "spa", "es", "Spanish");
  Language.$static_STANDARD_ARABIC__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("STANDARD_ARABIC"), Language.$ordinal_STANDARD_ARABIC__org_pepstock_charba_client_intl_Language, "arb", "Standard Arabic");
  Language.$static_STANDARD_ESTONIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("STANDARD_ESTONIAN"), Language.$ordinal_STANDARD_ESTONIAN__org_pepstock_charba_client_intl_Language, "ekk", "Standard Estonian");
  Language.$static_STANDARD_LATVIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("STANDARD_LATVIAN"), Language.$ordinal_STANDARD_LATVIAN__org_pepstock_charba_client_intl_Language, "lvs", "Standard Latvian");
  Language.$static_STANDARD_MALAY__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("STANDARD_MALAY"), Language.$ordinal_STANDARD_MALAY__org_pepstock_charba_client_intl_Language, "zsm", "Standard Malay");
  Language.$static_STANDARD_MOROCCAN_TAMAZIGHT__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("STANDARD_MOROCCAN_TAMAZIGHT"), Language.$ordinal_STANDARD_MOROCCAN_TAMAZIGHT__org_pepstock_charba_client_intl_Language, "zgh", "Standard Moroccan Tamazight");
  Language.$static_SUNDANESE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("SUNDANESE"), Language.$ordinal_SUNDANESE__org_pepstock_charba_client_intl_Language, "sun", "su", "Sundanese");
  Language.$static_SWAHILI_INDIVIDUAL__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SWAHILI_INDIVIDUAL"), Language.$ordinal_SWAHILI_INDIVIDUAL__org_pepstock_charba_client_intl_Language, "swh", "Swahili (individual language)");
  Language.$static_SWAHILI_MACRO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("SWAHILI_MACRO"), Language.$ordinal_SWAHILI_MACRO__org_pepstock_charba_client_intl_Language, "swa", "sw", "Swahili (macrolanguage)");
  Language.$static_SWATI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("SWATI"), Language.$ordinal_SWATI__org_pepstock_charba_client_intl_Language, "ssw", "ss", "Swati");
  Language.$static_SWEDISH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("SWEDISH"), Language.$ordinal_SWEDISH__org_pepstock_charba_client_intl_Language, "swe", "sv", "Swedish");
  Language.$static_SWISS_GERMAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SWISS_GERMAN"), Language.$ordinal_SWISS_GERMAN__org_pepstock_charba_client_intl_Language, "gsw", "Swiss German");
  Language.$static_SYRIAC__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SYRIAC"), Language.$ordinal_SYRIAC__org_pepstock_charba_client_intl_Language, "syr", "Syriac");
  Language.$static_TACHELHIT__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("TACHELHIT"), Language.$ordinal_TACHELHIT__org_pepstock_charba_client_intl_Language, "shi", "Tachelhit");
  Language.$static_TAGALOG__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("TAGALOG"), Language.$ordinal_TAGALOG__org_pepstock_charba_client_intl_Language, "tgl", "tl", "Tagalog");
  Language.$static_TAITA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("TAITA"), Language.$ordinal_TAITA__org_pepstock_charba_client_intl_Language, "dav", "Taita");
  Language.$static_TAJIK__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("TAJIK"), Language.$ordinal_TAJIK__org_pepstock_charba_client_intl_Language, "tgk", "tg", "Tajik");
  Language.$static_TAMIL__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("TAMIL"), Language.$ordinal_TAMIL__org_pepstock_charba_client_intl_Language, "tam", "ta", "Tamil");
  Language.$static_TASAWAQ__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("TASAWAQ"), Language.$ordinal_TASAWAQ__org_pepstock_charba_client_intl_Language, "twq", "Tasawaq");
  Language.$static_TATAR__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("TATAR"), Language.$ordinal_TATAR__org_pepstock_charba_client_intl_Language, "tat", "tt", "Tatar");
  Language.$static_TELUGU__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("TELUGU"), Language.$ordinal_TELUGU__org_pepstock_charba_client_intl_Language, "tel", "te", "Telugu");
  Language.$static_TESO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("TESO"), Language.$ordinal_TESO__org_pepstock_charba_client_intl_Language, "teo", "Teso");
  Language.$static_THAI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("THAI"), Language.$ordinal_THAI__org_pepstock_charba_client_intl_Language, "tha", "th", "Thai");
  Language.$static_TIBETAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("TIBETAN"), Language.$ordinal_TIBETAN__org_pepstock_charba_client_intl_Language, "bod", "bo", "Tibetan");
  Language.$static_TIGRE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("TIGRE"), Language.$ordinal_TIGRE__org_pepstock_charba_client_intl_Language, "tig", "Tigre");
  Language.$static_TIGRINYA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("TIGRINYA"), Language.$ordinal_TIGRINYA__org_pepstock_charba_client_intl_Language, "tir", "ti", "Tigrinya");
  Language.$static_TONGA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("TONGA"), Language.$ordinal_TONGA__org_pepstock_charba_client_intl_Language, "ton", "to", "Tonga (Tonga Islands)");
  Language.$static_TOSK_ALBANIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("TOSK_ALBANIAN"), Language.$ordinal_TOSK_ALBANIAN__org_pepstock_charba_client_intl_Language, "als", "Tosk Albanian");
  Language.$static_TSONGA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("TSONGA"), Language.$ordinal_TSONGA__org_pepstock_charba_client_intl_Language, "tso", "ts", "Tsonga");
  Language.$static_TSWANA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("TSWANA"), Language.$ordinal_TSWANA__org_pepstock_charba_client_intl_Language, "tsn", "tn", "Tswana");
  Language.$static_TURKISH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("TURKISH"), Language.$ordinal_TURKISH__org_pepstock_charba_client_intl_Language, "tur", "tr", "Turkish");
  Language.$static_TURKMEN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("TURKMEN"), Language.$ordinal_TURKMEN__org_pepstock_charba_client_intl_Language, "tuk", "tk", "Turkmen");
  Language.$static_TWI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("TWI"), Language.$ordinal_TWI__org_pepstock_charba_client_intl_Language, "twi", "tw", "Twi");
  Language.$static_UIGHUR__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("UIGHUR"), Language.$ordinal_UIGHUR__org_pepstock_charba_client_intl_Language, "uig", "ug", "Uighur");
  Language.$static_UKRAINIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("UKRAINIAN"), Language.$ordinal_UKRAINIAN__org_pepstock_charba_client_intl_Language, "ukr", "uk", "Ukrainian");
  Language.$static_UPPER_SORBIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("UPPER_SORBIAN"), Language.$ordinal_UPPER_SORBIAN__org_pepstock_charba_client_intl_Language, "hsb", "Upper Sorbian");
  Language.$static_URDU__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("URDU"), Language.$ordinal_URDU__org_pepstock_charba_client_intl_Language, "urd", "ur", "Urdu");
  Language.$static_UZBEK__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("UZBEK"), Language.$ordinal_UZBEK__org_pepstock_charba_client_intl_Language, "uzb", "uz", "Uzbek");
  Language.$static_VAI__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("VAI"), Language.$ordinal_VAI__org_pepstock_charba_client_intl_Language, "vai", "Vai");
  Language.$static_VENDA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("VENDA"), Language.$ordinal_VENDA__org_pepstock_charba_client_intl_Language, "ven", "ve", "Venda");
  Language.$static_VIETNAMESE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("VIETNAMESE"), Language.$ordinal_VIETNAMESE__org_pepstock_charba_client_intl_Language, "vie", "vi", "Vietnamese");
  Language.$static_VOLAPAK__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("VOLAPAK"), Language.$ordinal_VOLAPAK__org_pepstock_charba_client_intl_Language, "vol", "vo", "Volap\u00C3\u00BCk");
  Language.$static_VUNJO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("VUNJO"), Language.$ordinal_VUNJO__org_pepstock_charba_client_intl_Language, "vun", "Vunjo");
  Language.$static_WALSER__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("WALSER"), Language.$ordinal_WALSER__org_pepstock_charba_client_intl_Language, "wae", "Walser");
  Language.$static_WELSH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("WELSH"), Language.$ordinal_WELSH__org_pepstock_charba_client_intl_Language, "cym", "cy", "Welsh");
  Language.$static_WEST_CENTRAL_OROMO__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("WEST_CENTRAL_OROMO"), Language.$ordinal_WEST_CENTRAL_OROMO__org_pepstock_charba_client_intl_Language, "gaz", "West Central Oromo");
  Language.$static_WESTERN_FRISIAN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("WESTERN_FRISIAN"), Language.$ordinal_WESTERN_FRISIAN__org_pepstock_charba_client_intl_Language, "fry", "fy", "Western Frisian");
  Language.$static_WOLAYTTA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("WOLAYTTA"), Language.$ordinal_WOLAYTTA__org_pepstock_charba_client_intl_Language, "wal", "Wolaytta");
  Language.$static_WOLOF__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("WOLOF"), Language.$ordinal_WOLOF__org_pepstock_charba_client_intl_Language, "wol", "wo", "Wolof");
  Language.$static_XHOSA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("XHOSA"), Language.$ordinal_XHOSA__org_pepstock_charba_client_intl_Language, "xho", "xh", "Xhosa");
  Language.$static_YAKUT__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("YAKUT"), Language.$ordinal_YAKUT__org_pepstock_charba_client_intl_Language, "sah", "Yakut");
  Language.$static_YANGBEN__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("YANGBEN"), Language.$ordinal_YANGBEN__org_pepstock_charba_client_intl_Language, "yav", "Yangben");
  Language.$static_YIDDISH__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("YIDDISH"), Language.$ordinal_YIDDISH__org_pepstock_charba_client_intl_Language, "yid", "yi", "Yiddish");
  Language.$static_YORUBA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("YORUBA"), Language.$ordinal_YORUBA__org_pepstock_charba_client_intl_Language, "yor", "yo", "Yoruba");
  Language.$static_YUE_CHINESE__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("YUE_CHINESE"), Language.$ordinal_YUE_CHINESE__org_pepstock_charba_client_intl_Language, "yue", "Yue Chinese");
  Language.$static_ZARMA__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ZARMA"), Language.$ordinal_ZARMA__org_pepstock_charba_client_intl_Language, "dje", "Zarma");
  Language.$static_ZULU__org_pepstock_charba_client_intl_Language = Language.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName("ZULU"), Language.$ordinal_ZULU__org_pepstock_charba_client_intl_Language, "zul", "zu", "Zulu");
  Language.f_namesToValuesMap__org_pepstock_charba_client_intl_Language_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Language;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Language}*/
Language.$static_AFAR__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_AFRIKAANS__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_AGHEM__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_AKAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_ALBANIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_AMHARIC__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_ARABIC__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_ARMENIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_ASSAMESE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_ASTURIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_ASU__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_AZERBAIJANI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_BAFIA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_BAMBARA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_BASA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_BASHKIR__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_BASQUE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_BELARUSIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_BEMBA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_BENA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_BENGALI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_BILIN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_BODO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_BOSNIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_BRETON__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_BUKUSU__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_BULGARIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_BURMESE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_CATALAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_CEBUANO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_CENTRAL_ATLAS_TAMAZIGHT__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_CENTRAL_KURDISH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_CHAKMA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_CHECHEN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_CHEROKEE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_CHIGA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_CHINESE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_CHURCH_SLAVIC__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_CONGO_SWAHILI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_CORNISH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_CORSICAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_CROATIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_CUSCO_QUECHUA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_CZECH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_DANISH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_DARI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_DHIVEHI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_DUALA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_DUTCH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_DZONGKHA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_EASTERN_YIDDISH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_EMBU__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_ENGLISH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_ESPERANTO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_ESTONIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_EWE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_EWONDO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_FANTI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_FAROESE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_FILIPINO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_FINNISH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_FRENCH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_FRIULIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_FULAH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_GALICIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_GANDA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_GEORGIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_GERMAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_GUARANI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_GUJARATI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_GUSII__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_HALH_MONGOLIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_HAUSA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_HAWAIIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_HEBREW__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_HINDI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_HUNGARIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_ICELANDIC__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_IGBO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_INARI_SAMI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_INDONESIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_INTERLINGUA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_INUKTITUT__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_IRANIAN_PERSIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_IRISH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_ITALIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_JAPANESE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_JAVANESE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_JOLA_FONYI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KICHE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KABUVERDIANU__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KABYLE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KAKO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KALAALLISUT__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KALENJIN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KAMBA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KANNADA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KASHMIRI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KAZAKH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KHMER__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KHOEKHOE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KIKUYU__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KINYARWANDA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KIRGHIZ__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KONKANI_INDIVIDUAL__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KONKANI_MACRO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KOREAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KOYRA_CHIINI_SONGHAY__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KOYRABORO_SENNI_SONGHAI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KURDISH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KWASIO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_KALSCH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_LAKOTA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_LANGI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_LAO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_LATVIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_LINGALA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_LITHUANIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_LOW_GERMAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_LOWER_SORBIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_LUBA_KATANGA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_LULE_SAMI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_LUO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_LUXEMBOURGISH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_LUYIA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MACEDONIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MACHAME__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MAITHILI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MAKHUWA_MEETTO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MAKONDE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MALAGASY__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MALAY__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MALAYALAM__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MALTESE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MANDARIN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MANIPURI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MANX__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MAORI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MAPUDUNGUN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MARATHI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MASAI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MAZANDERANI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MERU__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_META__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MODERN_GREEK__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MOHAWK__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MONGOLIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MONTENEGRIN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MORISYEN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_MUNDANG__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_NKO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_NEPALI_INDIVIDUAL__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_NEPALI_MACRO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_NGIEMBOON__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_NGOMBA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_NIGERIAN_PIDGIN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_NORTH_AZERBAIJANI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_NORTH_NDEBELE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_NORTHERN_KURDISH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_NORTHERN_LURI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_NORTHERN_PASHTO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_NORTHERN_SAMI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_NORTHERN_UZBEK__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_NORWEGIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_NORWEGIAN_BOKMAL__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_NORWEGIAN_NYNORSK__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_NUER__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_NYANKOLE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_OCCITAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_ODIA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_ORIYA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_OROMO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_OSSETIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_PANJABI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_PEDI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_PERSIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_PLATEAU_MALAGASY__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_POLISH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_PORTUGUESE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_PRUSSIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_PULAAR__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_PUSHTO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_QUECHUA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_ROMANIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_ROMANSH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_ROMBO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_RUNDI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_RUSSIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_RWA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SABAOT__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SAHO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SAMBURU__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SANGO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SANGU__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SANSKRIT__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SANTALI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SCOTTISH_GAELIC__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SENA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SERBIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SERBO_CROATIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SHAMBALA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SHONA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SICHUAN_YI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SINDHI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SINHALA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SKOLT_SAMI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SLOVAK__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SLOVENIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SOGA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SOMALI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SOUTH_NDEBELE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SOUTHERN_SAMI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SOUTHERN_SOTHO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SPANISH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_STANDARD_ARABIC__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_STANDARD_ESTONIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_STANDARD_LATVIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_STANDARD_MALAY__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_STANDARD_MOROCCAN_TAMAZIGHT__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SUNDANESE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SWAHILI_INDIVIDUAL__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SWAHILI_MACRO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SWATI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SWEDISH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SWISS_GERMAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_SYRIAC__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_TACHELHIT__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_TAGALOG__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_TAITA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_TAJIK__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_TAMIL__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_TASAWAQ__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_TATAR__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_TELUGU__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_TESO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_THAI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_TIBETAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_TIGRE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_TIGRINYA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_TONGA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_TOSK_ALBANIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_TSONGA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_TSWANA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_TURKISH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_TURKMEN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_TWI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_UIGHUR__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_UKRAINIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_UPPER_SORBIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_URDU__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_UZBEK__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_VAI__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_VENDA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_VIETNAMESE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_VOLAPAK__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_VUNJO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_WALSER__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_WELSH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_WEST_CENTRAL_OROMO__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_WESTERN_FRISIAN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_WOLAYTTA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_WOLOF__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_XHOSA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_YAKUT__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_YANGBEN__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_YIDDISH__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_YORUBA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_YUE_CHINESE__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_ZARMA__org_pepstock_charba_client_intl_Language;
/**@private {!Language}*/
Language.$static_ZULU__org_pepstock_charba_client_intl_Language;
/**@type {Map<?string, !Language>}*/
Language.f_namesToValuesMap__org_pepstock_charba_client_intl_Language_;
/**@const {number}*/
Language.$ordinal_AFAR__org_pepstock_charba_client_intl_Language = 0;
/**@const {number}*/
Language.$ordinal_AFRIKAANS__org_pepstock_charba_client_intl_Language = 1;
/**@const {number}*/
Language.$ordinal_AGHEM__org_pepstock_charba_client_intl_Language = 2;
/**@const {number}*/
Language.$ordinal_AKAN__org_pepstock_charba_client_intl_Language = 3;
/**@const {number}*/
Language.$ordinal_ALBANIAN__org_pepstock_charba_client_intl_Language = 4;
/**@const {number}*/
Language.$ordinal_AMHARIC__org_pepstock_charba_client_intl_Language = 5;
/**@const {number}*/
Language.$ordinal_ARABIC__org_pepstock_charba_client_intl_Language = 6;
/**@const {number}*/
Language.$ordinal_ARMENIAN__org_pepstock_charba_client_intl_Language = 7;
/**@const {number}*/
Language.$ordinal_ASSAMESE__org_pepstock_charba_client_intl_Language = 8;
/**@const {number}*/
Language.$ordinal_ASTURIAN__org_pepstock_charba_client_intl_Language = 9;
/**@const {number}*/
Language.$ordinal_ASU__org_pepstock_charba_client_intl_Language = 10;
/**@const {number}*/
Language.$ordinal_AZERBAIJANI__org_pepstock_charba_client_intl_Language = 11;
/**@const {number}*/
Language.$ordinal_BAFIA__org_pepstock_charba_client_intl_Language = 12;
/**@const {number}*/
Language.$ordinal_BAMBARA__org_pepstock_charba_client_intl_Language = 13;
/**@const {number}*/
Language.$ordinal_BASA__org_pepstock_charba_client_intl_Language = 14;
/**@const {number}*/
Language.$ordinal_BASHKIR__org_pepstock_charba_client_intl_Language = 15;
/**@const {number}*/
Language.$ordinal_BASQUE__org_pepstock_charba_client_intl_Language = 16;
/**@const {number}*/
Language.$ordinal_BELARUSIAN__org_pepstock_charba_client_intl_Language = 17;
/**@const {number}*/
Language.$ordinal_BEMBA__org_pepstock_charba_client_intl_Language = 18;
/**@const {number}*/
Language.$ordinal_BENA__org_pepstock_charba_client_intl_Language = 19;
/**@const {number}*/
Language.$ordinal_BENGALI__org_pepstock_charba_client_intl_Language = 20;
/**@const {number}*/
Language.$ordinal_BILIN__org_pepstock_charba_client_intl_Language = 21;
/**@const {number}*/
Language.$ordinal_BODO__org_pepstock_charba_client_intl_Language = 22;
/**@const {number}*/
Language.$ordinal_BOSNIAN__org_pepstock_charba_client_intl_Language = 23;
/**@const {number}*/
Language.$ordinal_BRETON__org_pepstock_charba_client_intl_Language = 24;
/**@const {number}*/
Language.$ordinal_BUKUSU__org_pepstock_charba_client_intl_Language = 25;
/**@const {number}*/
Language.$ordinal_BULGARIAN__org_pepstock_charba_client_intl_Language = 26;
/**@const {number}*/
Language.$ordinal_BURMESE__org_pepstock_charba_client_intl_Language = 27;
/**@const {number}*/
Language.$ordinal_CATALAN__org_pepstock_charba_client_intl_Language = 28;
/**@const {number}*/
Language.$ordinal_CEBUANO__org_pepstock_charba_client_intl_Language = 29;
/**@const {number}*/
Language.$ordinal_CENTRAL_ATLAS_TAMAZIGHT__org_pepstock_charba_client_intl_Language = 30;
/**@const {number}*/
Language.$ordinal_CENTRAL_KURDISH__org_pepstock_charba_client_intl_Language = 31;
/**@const {number}*/
Language.$ordinal_CHAKMA__org_pepstock_charba_client_intl_Language = 32;
/**@const {number}*/
Language.$ordinal_CHECHEN__org_pepstock_charba_client_intl_Language = 33;
/**@const {number}*/
Language.$ordinal_CHEROKEE__org_pepstock_charba_client_intl_Language = 34;
/**@const {number}*/
Language.$ordinal_CHIGA__org_pepstock_charba_client_intl_Language = 35;
/**@const {number}*/
Language.$ordinal_CHINESE__org_pepstock_charba_client_intl_Language = 36;
/**@const {number}*/
Language.$ordinal_CHURCH_SLAVIC__org_pepstock_charba_client_intl_Language = 37;
/**@const {number}*/
Language.$ordinal_CONGO_SWAHILI__org_pepstock_charba_client_intl_Language = 38;
/**@const {number}*/
Language.$ordinal_CORNISH__org_pepstock_charba_client_intl_Language = 39;
/**@const {number}*/
Language.$ordinal_CORSICAN__org_pepstock_charba_client_intl_Language = 40;
/**@const {number}*/
Language.$ordinal_CROATIAN__org_pepstock_charba_client_intl_Language = 41;
/**@const {number}*/
Language.$ordinal_CUSCO_QUECHUA__org_pepstock_charba_client_intl_Language = 42;
/**@const {number}*/
Language.$ordinal_CZECH__org_pepstock_charba_client_intl_Language = 43;
/**@const {number}*/
Language.$ordinal_DANISH__org_pepstock_charba_client_intl_Language = 44;
/**@const {number}*/
Language.$ordinal_DARI__org_pepstock_charba_client_intl_Language = 45;
/**@const {number}*/
Language.$ordinal_DHIVEHI__org_pepstock_charba_client_intl_Language = 46;
/**@const {number}*/
Language.$ordinal_DUALA__org_pepstock_charba_client_intl_Language = 47;
/**@const {number}*/
Language.$ordinal_DUTCH__org_pepstock_charba_client_intl_Language = 48;
/**@const {number}*/
Language.$ordinal_DZONGKHA__org_pepstock_charba_client_intl_Language = 49;
/**@const {number}*/
Language.$ordinal_EASTERN_YIDDISH__org_pepstock_charba_client_intl_Language = 50;
/**@const {number}*/
Language.$ordinal_EMBU__org_pepstock_charba_client_intl_Language = 51;
/**@const {number}*/
Language.$ordinal_ENGLISH__org_pepstock_charba_client_intl_Language = 52;
/**@const {number}*/
Language.$ordinal_ESPERANTO__org_pepstock_charba_client_intl_Language = 53;
/**@const {number}*/
Language.$ordinal_ESTONIAN__org_pepstock_charba_client_intl_Language = 54;
/**@const {number}*/
Language.$ordinal_EWE__org_pepstock_charba_client_intl_Language = 55;
/**@const {number}*/
Language.$ordinal_EWONDO__org_pepstock_charba_client_intl_Language = 56;
/**@const {number}*/
Language.$ordinal_FANTI__org_pepstock_charba_client_intl_Language = 57;
/**@const {number}*/
Language.$ordinal_FAROESE__org_pepstock_charba_client_intl_Language = 58;
/**@const {number}*/
Language.$ordinal_FILIPINO__org_pepstock_charba_client_intl_Language = 59;
/**@const {number}*/
Language.$ordinal_FINNISH__org_pepstock_charba_client_intl_Language = 60;
/**@const {number}*/
Language.$ordinal_FRENCH__org_pepstock_charba_client_intl_Language = 61;
/**@const {number}*/
Language.$ordinal_FRIULIAN__org_pepstock_charba_client_intl_Language = 62;
/**@const {number}*/
Language.$ordinal_FULAH__org_pepstock_charba_client_intl_Language = 63;
/**@const {number}*/
Language.$ordinal_GALICIAN__org_pepstock_charba_client_intl_Language = 64;
/**@const {number}*/
Language.$ordinal_GANDA__org_pepstock_charba_client_intl_Language = 65;
/**@const {number}*/
Language.$ordinal_GEORGIAN__org_pepstock_charba_client_intl_Language = 66;
/**@const {number}*/
Language.$ordinal_GERMAN__org_pepstock_charba_client_intl_Language = 67;
/**@const {number}*/
Language.$ordinal_GUARANI__org_pepstock_charba_client_intl_Language = 68;
/**@const {number}*/
Language.$ordinal_GUJARATI__org_pepstock_charba_client_intl_Language = 69;
/**@const {number}*/
Language.$ordinal_GUSII__org_pepstock_charba_client_intl_Language = 70;
/**@const {number}*/
Language.$ordinal_HALH_MONGOLIAN__org_pepstock_charba_client_intl_Language = 71;
/**@const {number}*/
Language.$ordinal_HAUSA__org_pepstock_charba_client_intl_Language = 72;
/**@const {number}*/
Language.$ordinal_HAWAIIAN__org_pepstock_charba_client_intl_Language = 73;
/**@const {number}*/
Language.$ordinal_HEBREW__org_pepstock_charba_client_intl_Language = 74;
/**@const {number}*/
Language.$ordinal_HINDI__org_pepstock_charba_client_intl_Language = 75;
/**@const {number}*/
Language.$ordinal_HUNGARIAN__org_pepstock_charba_client_intl_Language = 76;
/**@const {number}*/
Language.$ordinal_ICELANDIC__org_pepstock_charba_client_intl_Language = 77;
/**@const {number}*/
Language.$ordinal_IGBO__org_pepstock_charba_client_intl_Language = 78;
/**@const {number}*/
Language.$ordinal_INARI_SAMI__org_pepstock_charba_client_intl_Language = 79;
/**@const {number}*/
Language.$ordinal_INDONESIAN__org_pepstock_charba_client_intl_Language = 80;
/**@const {number}*/
Language.$ordinal_INTERLINGUA__org_pepstock_charba_client_intl_Language = 81;
/**@const {number}*/
Language.$ordinal_INUKTITUT__org_pepstock_charba_client_intl_Language = 82;
/**@const {number}*/
Language.$ordinal_IRANIAN_PERSIAN__org_pepstock_charba_client_intl_Language = 83;
/**@const {number}*/
Language.$ordinal_IRISH__org_pepstock_charba_client_intl_Language = 84;
/**@const {number}*/
Language.$ordinal_ITALIAN__org_pepstock_charba_client_intl_Language = 85;
/**@const {number}*/
Language.$ordinal_JAPANESE__org_pepstock_charba_client_intl_Language = 86;
/**@const {number}*/
Language.$ordinal_JAVANESE__org_pepstock_charba_client_intl_Language = 87;
/**@const {number}*/
Language.$ordinal_JOLA_FONYI__org_pepstock_charba_client_intl_Language = 88;
/**@const {number}*/
Language.$ordinal_KICHE__org_pepstock_charba_client_intl_Language = 89;
/**@const {number}*/
Language.$ordinal_KABUVERDIANU__org_pepstock_charba_client_intl_Language = 90;
/**@const {number}*/
Language.$ordinal_KABYLE__org_pepstock_charba_client_intl_Language = 91;
/**@const {number}*/
Language.$ordinal_KAKO__org_pepstock_charba_client_intl_Language = 92;
/**@const {number}*/
Language.$ordinal_KALAALLISUT__org_pepstock_charba_client_intl_Language = 93;
/**@const {number}*/
Language.$ordinal_KALENJIN__org_pepstock_charba_client_intl_Language = 94;
/**@const {number}*/
Language.$ordinal_KAMBA__org_pepstock_charba_client_intl_Language = 95;
/**@const {number}*/
Language.$ordinal_KANNADA__org_pepstock_charba_client_intl_Language = 96;
/**@const {number}*/
Language.$ordinal_KASHMIRI__org_pepstock_charba_client_intl_Language = 97;
/**@const {number}*/
Language.$ordinal_KAZAKH__org_pepstock_charba_client_intl_Language = 98;
/**@const {number}*/
Language.$ordinal_KHMER__org_pepstock_charba_client_intl_Language = 99;
/**@const {number}*/
Language.$ordinal_KHOEKHOE__org_pepstock_charba_client_intl_Language = 100;
/**@const {number}*/
Language.$ordinal_KIKUYU__org_pepstock_charba_client_intl_Language = 101;
/**@const {number}*/
Language.$ordinal_KINYARWANDA__org_pepstock_charba_client_intl_Language = 102;
/**@const {number}*/
Language.$ordinal_KIRGHIZ__org_pepstock_charba_client_intl_Language = 103;
/**@const {number}*/
Language.$ordinal_KONKANI_INDIVIDUAL__org_pepstock_charba_client_intl_Language = 104;
/**@const {number}*/
Language.$ordinal_KONKANI_MACRO__org_pepstock_charba_client_intl_Language = 105;
/**@const {number}*/
Language.$ordinal_KOREAN__org_pepstock_charba_client_intl_Language = 106;
/**@const {number}*/
Language.$ordinal_KOYRA_CHIINI_SONGHAY__org_pepstock_charba_client_intl_Language = 107;
/**@const {number}*/
Language.$ordinal_KOYRABORO_SENNI_SONGHAI__org_pepstock_charba_client_intl_Language = 108;
/**@const {number}*/
Language.$ordinal_KURDISH__org_pepstock_charba_client_intl_Language = 109;
/**@const {number}*/
Language.$ordinal_KWASIO__org_pepstock_charba_client_intl_Language = 110;
/**@const {number}*/
Language.$ordinal_KALSCH__org_pepstock_charba_client_intl_Language = 111;
/**@const {number}*/
Language.$ordinal_LAKOTA__org_pepstock_charba_client_intl_Language = 112;
/**@const {number}*/
Language.$ordinal_LANGI__org_pepstock_charba_client_intl_Language = 113;
/**@const {number}*/
Language.$ordinal_LAO__org_pepstock_charba_client_intl_Language = 114;
/**@const {number}*/
Language.$ordinal_LATVIAN__org_pepstock_charba_client_intl_Language = 115;
/**@const {number}*/
Language.$ordinal_LINGALA__org_pepstock_charba_client_intl_Language = 116;
/**@const {number}*/
Language.$ordinal_LITHUANIAN__org_pepstock_charba_client_intl_Language = 117;
/**@const {number}*/
Language.$ordinal_LOW_GERMAN__org_pepstock_charba_client_intl_Language = 118;
/**@const {number}*/
Language.$ordinal_LOWER_SORBIAN__org_pepstock_charba_client_intl_Language = 119;
/**@const {number}*/
Language.$ordinal_LUBA_KATANGA__org_pepstock_charba_client_intl_Language = 120;
/**@const {number}*/
Language.$ordinal_LULE_SAMI__org_pepstock_charba_client_intl_Language = 121;
/**@const {number}*/
Language.$ordinal_LUO__org_pepstock_charba_client_intl_Language = 122;
/**@const {number}*/
Language.$ordinal_LUXEMBOURGISH__org_pepstock_charba_client_intl_Language = 123;
/**@const {number}*/
Language.$ordinal_LUYIA__org_pepstock_charba_client_intl_Language = 124;
/**@const {number}*/
Language.$ordinal_MACEDONIAN__org_pepstock_charba_client_intl_Language = 125;
/**@const {number}*/
Language.$ordinal_MACHAME__org_pepstock_charba_client_intl_Language = 126;
/**@const {number}*/
Language.$ordinal_MAITHILI__org_pepstock_charba_client_intl_Language = 127;
/**@const {number}*/
Language.$ordinal_MAKHUWA_MEETTO__org_pepstock_charba_client_intl_Language = 128;
/**@const {number}*/
Language.$ordinal_MAKONDE__org_pepstock_charba_client_intl_Language = 129;
/**@const {number}*/
Language.$ordinal_MALAGASY__org_pepstock_charba_client_intl_Language = 130;
/**@const {number}*/
Language.$ordinal_MALAY__org_pepstock_charba_client_intl_Language = 131;
/**@const {number}*/
Language.$ordinal_MALAYALAM__org_pepstock_charba_client_intl_Language = 132;
/**@const {number}*/
Language.$ordinal_MALTESE__org_pepstock_charba_client_intl_Language = 133;
/**@const {number}*/
Language.$ordinal_MANDARIN__org_pepstock_charba_client_intl_Language = 134;
/**@const {number}*/
Language.$ordinal_MANIPURI__org_pepstock_charba_client_intl_Language = 135;
/**@const {number}*/
Language.$ordinal_MANX__org_pepstock_charba_client_intl_Language = 136;
/**@const {number}*/
Language.$ordinal_MAORI__org_pepstock_charba_client_intl_Language = 137;
/**@const {number}*/
Language.$ordinal_MAPUDUNGUN__org_pepstock_charba_client_intl_Language = 138;
/**@const {number}*/
Language.$ordinal_MARATHI__org_pepstock_charba_client_intl_Language = 139;
/**@const {number}*/
Language.$ordinal_MASAI__org_pepstock_charba_client_intl_Language = 140;
/**@const {number}*/
Language.$ordinal_MAZANDERANI__org_pepstock_charba_client_intl_Language = 141;
/**@const {number}*/
Language.$ordinal_MERU__org_pepstock_charba_client_intl_Language = 142;
/**@const {number}*/
Language.$ordinal_META__org_pepstock_charba_client_intl_Language = 143;
/**@const {number}*/
Language.$ordinal_MODERN_GREEK__org_pepstock_charba_client_intl_Language = 144;
/**@const {number}*/
Language.$ordinal_MOHAWK__org_pepstock_charba_client_intl_Language = 145;
/**@const {number}*/
Language.$ordinal_MONGOLIAN__org_pepstock_charba_client_intl_Language = 146;
/**@const {number}*/
Language.$ordinal_MONTENEGRIN__org_pepstock_charba_client_intl_Language = 147;
/**@const {number}*/
Language.$ordinal_MORISYEN__org_pepstock_charba_client_intl_Language = 148;
/**@const {number}*/
Language.$ordinal_MUNDANG__org_pepstock_charba_client_intl_Language = 149;
/**@const {number}*/
Language.$ordinal_NKO__org_pepstock_charba_client_intl_Language = 150;
/**@const {number}*/
Language.$ordinal_NEPALI_INDIVIDUAL__org_pepstock_charba_client_intl_Language = 151;
/**@const {number}*/
Language.$ordinal_NEPALI_MACRO__org_pepstock_charba_client_intl_Language = 152;
/**@const {number}*/
Language.$ordinal_NGIEMBOON__org_pepstock_charba_client_intl_Language = 153;
/**@const {number}*/
Language.$ordinal_NGOMBA__org_pepstock_charba_client_intl_Language = 154;
/**@const {number}*/
Language.$ordinal_NIGERIAN_PIDGIN__org_pepstock_charba_client_intl_Language = 155;
/**@const {number}*/
Language.$ordinal_NORTH_AZERBAIJANI__org_pepstock_charba_client_intl_Language = 156;
/**@const {number}*/
Language.$ordinal_NORTH_NDEBELE__org_pepstock_charba_client_intl_Language = 157;
/**@const {number}*/
Language.$ordinal_NORTHERN_KURDISH__org_pepstock_charba_client_intl_Language = 158;
/**@const {number}*/
Language.$ordinal_NORTHERN_LURI__org_pepstock_charba_client_intl_Language = 159;
/**@const {number}*/
Language.$ordinal_NORTHERN_PASHTO__org_pepstock_charba_client_intl_Language = 160;
/**@const {number}*/
Language.$ordinal_NORTHERN_SAMI__org_pepstock_charba_client_intl_Language = 161;
/**@const {number}*/
Language.$ordinal_NORTHERN_UZBEK__org_pepstock_charba_client_intl_Language = 162;
/**@const {number}*/
Language.$ordinal_NORWEGIAN__org_pepstock_charba_client_intl_Language = 163;
/**@const {number}*/
Language.$ordinal_NORWEGIAN_BOKMAL__org_pepstock_charba_client_intl_Language = 164;
/**@const {number}*/
Language.$ordinal_NORWEGIAN_NYNORSK__org_pepstock_charba_client_intl_Language = 165;
/**@const {number}*/
Language.$ordinal_NUER__org_pepstock_charba_client_intl_Language = 166;
/**@const {number}*/
Language.$ordinal_NYANKOLE__org_pepstock_charba_client_intl_Language = 167;
/**@const {number}*/
Language.$ordinal_OCCITAN__org_pepstock_charba_client_intl_Language = 168;
/**@const {number}*/
Language.$ordinal_ODIA__org_pepstock_charba_client_intl_Language = 169;
/**@const {number}*/
Language.$ordinal_ORIYA__org_pepstock_charba_client_intl_Language = 170;
/**@const {number}*/
Language.$ordinal_OROMO__org_pepstock_charba_client_intl_Language = 171;
/**@const {number}*/
Language.$ordinal_OSSETIAN__org_pepstock_charba_client_intl_Language = 172;
/**@const {number}*/
Language.$ordinal_PANJABI__org_pepstock_charba_client_intl_Language = 173;
/**@const {number}*/
Language.$ordinal_PEDI__org_pepstock_charba_client_intl_Language = 174;
/**@const {number}*/
Language.$ordinal_PERSIAN__org_pepstock_charba_client_intl_Language = 175;
/**@const {number}*/
Language.$ordinal_PLATEAU_MALAGASY__org_pepstock_charba_client_intl_Language = 176;
/**@const {number}*/
Language.$ordinal_POLISH__org_pepstock_charba_client_intl_Language = 177;
/**@const {number}*/
Language.$ordinal_PORTUGUESE__org_pepstock_charba_client_intl_Language = 178;
/**@const {number}*/
Language.$ordinal_PRUSSIAN__org_pepstock_charba_client_intl_Language = 179;
/**@const {number}*/
Language.$ordinal_PULAAR__org_pepstock_charba_client_intl_Language = 180;
/**@const {number}*/
Language.$ordinal_PUSHTO__org_pepstock_charba_client_intl_Language = 181;
/**@const {number}*/
Language.$ordinal_QUECHUA__org_pepstock_charba_client_intl_Language = 182;
/**@const {number}*/
Language.$ordinal_ROMANIAN__org_pepstock_charba_client_intl_Language = 183;
/**@const {number}*/
Language.$ordinal_ROMANSH__org_pepstock_charba_client_intl_Language = 184;
/**@const {number}*/
Language.$ordinal_ROMBO__org_pepstock_charba_client_intl_Language = 185;
/**@const {number}*/
Language.$ordinal_RUNDI__org_pepstock_charba_client_intl_Language = 186;
/**@const {number}*/
Language.$ordinal_RUSSIAN__org_pepstock_charba_client_intl_Language = 187;
/**@const {number}*/
Language.$ordinal_RWA__org_pepstock_charba_client_intl_Language = 188;
/**@const {number}*/
Language.$ordinal_SABAOT__org_pepstock_charba_client_intl_Language = 189;
/**@const {number}*/
Language.$ordinal_SAHO__org_pepstock_charba_client_intl_Language = 190;
/**@const {number}*/
Language.$ordinal_SAMBURU__org_pepstock_charba_client_intl_Language = 191;
/**@const {number}*/
Language.$ordinal_SANGO__org_pepstock_charba_client_intl_Language = 192;
/**@const {number}*/
Language.$ordinal_SANGU__org_pepstock_charba_client_intl_Language = 193;
/**@const {number}*/
Language.$ordinal_SANSKRIT__org_pepstock_charba_client_intl_Language = 194;
/**@const {number}*/
Language.$ordinal_SANTALI__org_pepstock_charba_client_intl_Language = 195;
/**@const {number}*/
Language.$ordinal_SCOTTISH_GAELIC__org_pepstock_charba_client_intl_Language = 196;
/**@const {number}*/
Language.$ordinal_SENA__org_pepstock_charba_client_intl_Language = 197;
/**@const {number}*/
Language.$ordinal_SERBIAN__org_pepstock_charba_client_intl_Language = 198;
/**@const {number}*/
Language.$ordinal_SERBO_CROATIAN__org_pepstock_charba_client_intl_Language = 199;
/**@const {number}*/
Language.$ordinal_SHAMBALA__org_pepstock_charba_client_intl_Language = 200;
/**@const {number}*/
Language.$ordinal_SHONA__org_pepstock_charba_client_intl_Language = 201;
/**@const {number}*/
Language.$ordinal_SICHUAN_YI__org_pepstock_charba_client_intl_Language = 202;
/**@const {number}*/
Language.$ordinal_SINDHI__org_pepstock_charba_client_intl_Language = 203;
/**@const {number}*/
Language.$ordinal_SINHALA__org_pepstock_charba_client_intl_Language = 204;
/**@const {number}*/
Language.$ordinal_SKOLT_SAMI__org_pepstock_charba_client_intl_Language = 205;
/**@const {number}*/
Language.$ordinal_SLOVAK__org_pepstock_charba_client_intl_Language = 206;
/**@const {number}*/
Language.$ordinal_SLOVENIAN__org_pepstock_charba_client_intl_Language = 207;
/**@const {number}*/
Language.$ordinal_SOGA__org_pepstock_charba_client_intl_Language = 208;
/**@const {number}*/
Language.$ordinal_SOMALI__org_pepstock_charba_client_intl_Language = 209;
/**@const {number}*/
Language.$ordinal_SOUTH_NDEBELE__org_pepstock_charba_client_intl_Language = 210;
/**@const {number}*/
Language.$ordinal_SOUTHERN_SAMI__org_pepstock_charba_client_intl_Language = 211;
/**@const {number}*/
Language.$ordinal_SOUTHERN_SOTHO__org_pepstock_charba_client_intl_Language = 212;
/**@const {number}*/
Language.$ordinal_SPANISH__org_pepstock_charba_client_intl_Language = 213;
/**@const {number}*/
Language.$ordinal_STANDARD_ARABIC__org_pepstock_charba_client_intl_Language = 214;
/**@const {number}*/
Language.$ordinal_STANDARD_ESTONIAN__org_pepstock_charba_client_intl_Language = 215;
/**@const {number}*/
Language.$ordinal_STANDARD_LATVIAN__org_pepstock_charba_client_intl_Language = 216;
/**@const {number}*/
Language.$ordinal_STANDARD_MALAY__org_pepstock_charba_client_intl_Language = 217;
/**@const {number}*/
Language.$ordinal_STANDARD_MOROCCAN_TAMAZIGHT__org_pepstock_charba_client_intl_Language = 218;
/**@const {number}*/
Language.$ordinal_SUNDANESE__org_pepstock_charba_client_intl_Language = 219;
/**@const {number}*/
Language.$ordinal_SWAHILI_INDIVIDUAL__org_pepstock_charba_client_intl_Language = 220;
/**@const {number}*/
Language.$ordinal_SWAHILI_MACRO__org_pepstock_charba_client_intl_Language = 221;
/**@const {number}*/
Language.$ordinal_SWATI__org_pepstock_charba_client_intl_Language = 222;
/**@const {number}*/
Language.$ordinal_SWEDISH__org_pepstock_charba_client_intl_Language = 223;
/**@const {number}*/
Language.$ordinal_SWISS_GERMAN__org_pepstock_charba_client_intl_Language = 224;
/**@const {number}*/
Language.$ordinal_SYRIAC__org_pepstock_charba_client_intl_Language = 225;
/**@const {number}*/
Language.$ordinal_TACHELHIT__org_pepstock_charba_client_intl_Language = 226;
/**@const {number}*/
Language.$ordinal_TAGALOG__org_pepstock_charba_client_intl_Language = 227;
/**@const {number}*/
Language.$ordinal_TAITA__org_pepstock_charba_client_intl_Language = 228;
/**@const {number}*/
Language.$ordinal_TAJIK__org_pepstock_charba_client_intl_Language = 229;
/**@const {number}*/
Language.$ordinal_TAMIL__org_pepstock_charba_client_intl_Language = 230;
/**@const {number}*/
Language.$ordinal_TASAWAQ__org_pepstock_charba_client_intl_Language = 231;
/**@const {number}*/
Language.$ordinal_TATAR__org_pepstock_charba_client_intl_Language = 232;
/**@const {number}*/
Language.$ordinal_TELUGU__org_pepstock_charba_client_intl_Language = 233;
/**@const {number}*/
Language.$ordinal_TESO__org_pepstock_charba_client_intl_Language = 234;
/**@const {number}*/
Language.$ordinal_THAI__org_pepstock_charba_client_intl_Language = 235;
/**@const {number}*/
Language.$ordinal_TIBETAN__org_pepstock_charba_client_intl_Language = 236;
/**@const {number}*/
Language.$ordinal_TIGRE__org_pepstock_charba_client_intl_Language = 237;
/**@const {number}*/
Language.$ordinal_TIGRINYA__org_pepstock_charba_client_intl_Language = 238;
/**@const {number}*/
Language.$ordinal_TONGA__org_pepstock_charba_client_intl_Language = 239;
/**@const {number}*/
Language.$ordinal_TOSK_ALBANIAN__org_pepstock_charba_client_intl_Language = 240;
/**@const {number}*/
Language.$ordinal_TSONGA__org_pepstock_charba_client_intl_Language = 241;
/**@const {number}*/
Language.$ordinal_TSWANA__org_pepstock_charba_client_intl_Language = 242;
/**@const {number}*/
Language.$ordinal_TURKISH__org_pepstock_charba_client_intl_Language = 243;
/**@const {number}*/
Language.$ordinal_TURKMEN__org_pepstock_charba_client_intl_Language = 244;
/**@const {number}*/
Language.$ordinal_TWI__org_pepstock_charba_client_intl_Language = 245;
/**@const {number}*/
Language.$ordinal_UIGHUR__org_pepstock_charba_client_intl_Language = 246;
/**@const {number}*/
Language.$ordinal_UKRAINIAN__org_pepstock_charba_client_intl_Language = 247;
/**@const {number}*/
Language.$ordinal_UPPER_SORBIAN__org_pepstock_charba_client_intl_Language = 248;
/**@const {number}*/
Language.$ordinal_URDU__org_pepstock_charba_client_intl_Language = 249;
/**@const {number}*/
Language.$ordinal_UZBEK__org_pepstock_charba_client_intl_Language = 250;
/**@const {number}*/
Language.$ordinal_VAI__org_pepstock_charba_client_intl_Language = 251;
/**@const {number}*/
Language.$ordinal_VENDA__org_pepstock_charba_client_intl_Language = 252;
/**@const {number}*/
Language.$ordinal_VIETNAMESE__org_pepstock_charba_client_intl_Language = 253;
/**@const {number}*/
Language.$ordinal_VOLAPAK__org_pepstock_charba_client_intl_Language = 254;
/**@const {number}*/
Language.$ordinal_VUNJO__org_pepstock_charba_client_intl_Language = 255;
/**@const {number}*/
Language.$ordinal_WALSER__org_pepstock_charba_client_intl_Language = 256;
/**@const {number}*/
Language.$ordinal_WELSH__org_pepstock_charba_client_intl_Language = 257;
/**@const {number}*/
Language.$ordinal_WEST_CENTRAL_OROMO__org_pepstock_charba_client_intl_Language = 258;
/**@const {number}*/
Language.$ordinal_WESTERN_FRISIAN__org_pepstock_charba_client_intl_Language = 259;
/**@const {number}*/
Language.$ordinal_WOLAYTTA__org_pepstock_charba_client_intl_Language = 260;
/**@const {number}*/
Language.$ordinal_WOLOF__org_pepstock_charba_client_intl_Language = 261;
/**@const {number}*/
Language.$ordinal_XHOSA__org_pepstock_charba_client_intl_Language = 262;
/**@const {number}*/
Language.$ordinal_YAKUT__org_pepstock_charba_client_intl_Language = 263;
/**@const {number}*/
Language.$ordinal_YANGBEN__org_pepstock_charba_client_intl_Language = 264;
/**@const {number}*/
Language.$ordinal_YIDDISH__org_pepstock_charba_client_intl_Language = 265;
/**@const {number}*/
Language.$ordinal_YORUBA__org_pepstock_charba_client_intl_Language = 266;
/**@const {number}*/
Language.$ordinal_YUE_CHINESE__org_pepstock_charba_client_intl_Language = 267;
/**@const {number}*/
Language.$ordinal_ZARMA__org_pepstock_charba_client_intl_Language = 268;
/**@const {number}*/
Language.$ordinal_ZULU__org_pepstock_charba_client_intl_Language = 269;
IsLocaleItem.$markImplementor(Language);
$Util.$setClassMetadataForEnum(Language, "org.pepstock.charba.client.intl.Language");

exports = Language;

//# sourceMappingURL=Language.js.map
