goog.module('org.pepstock.charba.client.intl.enums.Currency$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsLocaleItem = goog.require('org.pepstock.charba.client.intl.IsLocaleItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Currency>}
 * @implements {IsLocaleItem}
 */
class Currency extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_enums_Currency_;
  /**@type {?string}*/
  this.f_name__org_pepstock_charba_client_intl_enums_Currency_;
  /**@type {number}*/
  this.f_minimumFractionDigits__org_pepstock_charba_client_intl_enums_Currency_ = 0;
 }
 /** @return {!Currency} */
 static $create__java_lang_String__int__java_lang_String__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ?string */ name, /** number */ minimumFractionDigits) {
  let $instance = new Currency();
  $instance.$ctor__org_pepstock_charba_client_intl_enums_Currency__java_lang_String__int__java_lang_String__java_lang_String__int($name, $ordinal, value, name, minimumFractionDigits);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_enums_Currency__java_lang_String__int__java_lang_String__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ?string */ name, /** number */ minimumFractionDigits) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_enums_Currency_ = value;
  this.f_name__org_pepstock_charba_client_intl_enums_Currency_ = name;
  this.f_minimumFractionDigits__org_pepstock_charba_client_intl_enums_Currency_ = minimumFractionDigits;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_enums_Currency_;
 }
 /** @override @return {?string} */
 m_getName__() {
  return this.f_name__org_pepstock_charba_client_intl_enums_Currency_;
 }
 /** @return {number} */
 m_getMinimumFractionDigits__() {
  return this.f_minimumFractionDigits__org_pepstock_charba_client_intl_enums_Currency_;
 }
 /** @return {!Currency} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Currency.$clinit();
  if ($Equality.$same(Currency.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_Currency_, null)) {
   Currency.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_Currency_ = $Enums.createMapFromValues(Currency.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Currency.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_Currency_);
 }
 /** @return {!Array<!Currency>} */
 static m_values__() {
  Currency.$clinit();
  return /**@type {!Array<Currency>}*/ ($Arrays.$init([Currency.$static_ADB_UNIT_OF_ACCOUNT__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_AFGHANI__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_ALGERIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_ARGENTINE_PESO__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_ARMENIAN_DRAM__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_ARUBAN_FLORIN__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_AUSTRALIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_AZERBAIJAN_MANAT__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_BAHAMIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_BAHRAINI_DINAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_BAHT__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_BALBOA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_BARBADOS_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_BELARUSIAN_RUBLE__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_BELIZE_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_BERMUDIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_BOLIVIANO__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_BOLIVAR_SOBERANO__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_BOND_MARKETS_UNIT_EUROPEAN_COMPOSITE_UNIT__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_BOND_MARKETS_UNIT_EUROPEAN_MONETARY_UNIT__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_BOND_MARKETS_UNIT_EUROPEAN_UNIT_OF_ACCOUNT_17__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_BOND_MARKETS_UNIT_EUROPEAN_UNIT_OF_ACCOUNT_9__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_BRAZILIAN_REAL__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_BRUNEI_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_BULGARIAN_LEV__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_BURUNDI_FRANC__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_CFA_FRANC_BCEAO__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_CFA_FRANC_BEAC__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_CFP_FRANC__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_CABO_VERDE_ESCUDO__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_CANADIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_CAYMAN_ISLANDS_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_CHILEAN_PESO__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_CODES_SPECIFICALLY_RESERVED_FOR_TESTING_PURPOSES__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_COLOMBIAN_PESO__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_COMORIAN_FRANC__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_CONGOLESE_FRANC__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_CONVERTIBLE_MARK__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_CORDOBA_ORO__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_COSTA_RICAN_COLON__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_CUBAN_PESO__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_CZECH_KORUNA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_DALASI__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_DANISH_KRONE__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_DENAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_DJIBOUTI_FRANC__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_DOBRA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_DOMINICAN_PESO__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_DONG__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_EAST_CARIBBEAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_EGYPTIAN_POUND__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_EL_SALVADOR_COLON__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_ETHIOPIAN_BIRR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_EURO__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_FALKLAND_ISLANDS_POUND__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_FIJI_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_FORINT__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_GHANA_CEDI__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_GIBRALTAR_POUND__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_GOLD__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_GOURDE__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_GUARANI__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_GUINEAN_FRANC__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_GUYANA_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_HONG_KONG_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_HRYVNIA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_ICELAND_KRONA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_INDIAN_RUPEE__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_IRANIAN_RIAL__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_IRAQI_DINAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_JAMAICAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_JORDANIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_KENYAN_SHILLING__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_KINA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_KUNA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_KUWAITI_DINAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_KWANZA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_KYAT__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_LAO_KIP__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_LARI__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_LEBANESE_POUND__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_LEK__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_LEMPIRA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_LEONE__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_LIBERIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_LIBYAN_DINAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_LILANGENI__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_LOTI__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_MALAGASY_ARIARY__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_MALAWI_KWACHA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_MALAYSIAN_RINGGIT__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_MAURITIUS_RUPEE__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_MEXICAN_PESO__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_MEXICAN_UNIDAD_DE_INVERSION__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_MOLDOVAN_LEU__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_MOROCCAN_DIRHAM__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_MOZAMBIQUE_METICAL__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_MVDOL__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_NAIRA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_NAKFA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_NAMIBIA_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_NEPALESE_RUPEE__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_NETHERLANDS_ANTILLEAN_GUILDER__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_NEW_ISRAELI_SHEQEL__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_NEW_TAIWAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_NEW_ZEALAND_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_NGULTRUM__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_NORTH_KOREAN_WON__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_NORWEGIAN_KRONE__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_OUGUIYA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_PAKISTAN_RUPEE__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_PALLADIUM__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_PATACA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_PAANGA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_PESO_CONVERTIBLE__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_PESO_URUGUAYO__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_PHILIPPINE_PESO__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_PLATINUM__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_POUND_STERLING__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_PULA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_QATARI_RIAL__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_QUETZAL__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_RAND__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_RIAL_OMANI__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_RIEL__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_ROMANIAN_LEU__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_RUFIYAA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_RUPIAH__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_RUSSIAN_RUBLE__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_RWANDA_FRANC__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_SPECIAL_DRAWING_RIGHT__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_SAUDI_RIYAL__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_SERBIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_SEYCHELLES_RUPEE__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_SILVER__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_SINGAPORE_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_SOL__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_SOLOMON_ISLANDS_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_SOM__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_SOMALI_SHILLING__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_SOMONI__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_SOUTH_SUDANESE_POUND__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_SRI_LANKA_RUPEE__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_SUCRE__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_SUDANESE_POUND__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_SURINAM_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_SWEDISH_KRONA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_SWISS_FRANC__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_SYRIAN_POUND__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_TAKA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_TALA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_TENGE__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_THE_CODES_ASSIGNED_FOR_TRANSACTIONS_WHERE_NO_CURRENCY_IS_INVOLVED__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_TRINIDAD_AND_TOBAGO_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_TUGRIK__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_TUNISIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_TURKISH_LIRA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_TURKMENISTAN_NEW_MANAT__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_UAE_DIRHAM__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_US_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_US_DOLLAR_NEXT_DAY__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_UGANDA_SHILLING__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_UNIDAD_PREVISIONAL__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_UNIDAD_DE_FOMENTO__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_UNIDAD_DE_VALOR_REAL__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_URUGUAY_PESO_EN_UNIDADES_INDEXADAS__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_UZBEKISTAN_SUM__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_VATU__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_WIR_EURO__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_WIR_FRANC__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_WON__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_YEMENI_RIAL__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_YEN__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_YUAN_RENMINBI__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_ZAMBIAN_KWACHA__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_ZIMBABWE_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, Currency.$static_ZLOTY__org_pepstock_charba_client_intl_enums_Currency], Currency));
 }
 /** @return {!Currency} */
 static get f_ADB_UNIT_OF_ACCOUNT__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_ADB_UNIT_OF_ACCOUNT__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_AFGHANI__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_AFGHANI__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_ALGERIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_ALGERIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_ARGENTINE_PESO__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_ARGENTINE_PESO__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_ARMENIAN_DRAM__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_ARMENIAN_DRAM__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_ARUBAN_FLORIN__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_ARUBAN_FLORIN__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_AUSTRALIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_AUSTRALIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_AZERBAIJAN_MANAT__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_AZERBAIJAN_MANAT__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_BAHAMIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_BAHAMIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_BAHRAINI_DINAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_BAHRAINI_DINAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_BAHT__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_BAHT__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_BALBOA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_BALBOA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_BARBADOS_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_BARBADOS_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_BELARUSIAN_RUBLE__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_BELARUSIAN_RUBLE__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_BELIZE_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_BELIZE_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_BERMUDIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_BERMUDIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_BOLIVIANO__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_BOLIVIANO__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_BOLIVAR_SOBERANO__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_BOLIVAR_SOBERANO__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_BOND_MARKETS_UNIT_EUROPEAN_COMPOSITE_UNIT__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_BOND_MARKETS_UNIT_EUROPEAN_COMPOSITE_UNIT__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_BOND_MARKETS_UNIT_EUROPEAN_MONETARY_UNIT__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_BOND_MARKETS_UNIT_EUROPEAN_MONETARY_UNIT__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_BOND_MARKETS_UNIT_EUROPEAN_UNIT_OF_ACCOUNT_17__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_BOND_MARKETS_UNIT_EUROPEAN_UNIT_OF_ACCOUNT_17__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_BOND_MARKETS_UNIT_EUROPEAN_UNIT_OF_ACCOUNT_9__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_BOND_MARKETS_UNIT_EUROPEAN_UNIT_OF_ACCOUNT_9__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_BRAZILIAN_REAL__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_BRAZILIAN_REAL__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_BRUNEI_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_BRUNEI_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_BULGARIAN_LEV__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_BULGARIAN_LEV__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_BURUNDI_FRANC__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_BURUNDI_FRANC__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_CFA_FRANC_BCEAO__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_CFA_FRANC_BCEAO__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_CFA_FRANC_BEAC__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_CFA_FRANC_BEAC__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_CFP_FRANC__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_CFP_FRANC__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_CABO_VERDE_ESCUDO__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_CABO_VERDE_ESCUDO__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_CANADIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_CANADIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_CAYMAN_ISLANDS_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_CAYMAN_ISLANDS_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_CHILEAN_PESO__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_CHILEAN_PESO__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_CODES_SPECIFICALLY_RESERVED_FOR_TESTING_PURPOSES__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_CODES_SPECIFICALLY_RESERVED_FOR_TESTING_PURPOSES__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_COLOMBIAN_PESO__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_COLOMBIAN_PESO__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_COMORIAN_FRANC__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_COMORIAN_FRANC__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_CONGOLESE_FRANC__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_CONGOLESE_FRANC__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_CONVERTIBLE_MARK__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_CONVERTIBLE_MARK__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_CORDOBA_ORO__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_CORDOBA_ORO__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_COSTA_RICAN_COLON__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_COSTA_RICAN_COLON__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_CUBAN_PESO__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_CUBAN_PESO__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_CZECH_KORUNA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_CZECH_KORUNA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_DALASI__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_DALASI__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_DANISH_KRONE__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_DANISH_KRONE__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_DENAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_DENAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_DJIBOUTI_FRANC__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_DJIBOUTI_FRANC__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_DOBRA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_DOBRA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_DOMINICAN_PESO__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_DOMINICAN_PESO__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_DONG__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_DONG__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_EAST_CARIBBEAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_EAST_CARIBBEAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_EGYPTIAN_POUND__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_EGYPTIAN_POUND__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_EL_SALVADOR_COLON__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_EL_SALVADOR_COLON__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_ETHIOPIAN_BIRR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_ETHIOPIAN_BIRR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_EURO__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_EURO__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_FALKLAND_ISLANDS_POUND__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_FALKLAND_ISLANDS_POUND__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_FIJI_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_FIJI_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_FORINT__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_FORINT__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_GHANA_CEDI__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_GHANA_CEDI__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_GIBRALTAR_POUND__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_GIBRALTAR_POUND__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_GOLD__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_GOLD__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_GOURDE__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_GOURDE__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_GUARANI__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_GUARANI__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_GUINEAN_FRANC__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_GUINEAN_FRANC__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_GUYANA_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_GUYANA_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_HONG_KONG_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_HONG_KONG_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_HRYVNIA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_HRYVNIA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_ICELAND_KRONA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_ICELAND_KRONA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_INDIAN_RUPEE__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_INDIAN_RUPEE__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_IRANIAN_RIAL__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_IRANIAN_RIAL__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_IRAQI_DINAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_IRAQI_DINAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_JAMAICAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_JAMAICAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_JORDANIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_JORDANIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_KENYAN_SHILLING__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_KENYAN_SHILLING__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_KINA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_KINA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_KUNA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_KUNA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_KUWAITI_DINAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_KUWAITI_DINAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_KWANZA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_KWANZA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_KYAT__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_KYAT__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_LAO_KIP__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_LAO_KIP__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_LARI__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_LARI__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_LEBANESE_POUND__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_LEBANESE_POUND__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_LEK__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_LEK__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_LEMPIRA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_LEMPIRA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_LEONE__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_LEONE__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_LIBERIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_LIBERIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_LIBYAN_DINAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_LIBYAN_DINAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_LILANGENI__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_LILANGENI__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_LOTI__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_LOTI__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_MALAGASY_ARIARY__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_MALAGASY_ARIARY__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_MALAWI_KWACHA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_MALAWI_KWACHA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_MALAYSIAN_RINGGIT__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_MALAYSIAN_RINGGIT__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_MAURITIUS_RUPEE__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_MAURITIUS_RUPEE__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_MEXICAN_PESO__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_MEXICAN_PESO__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_MEXICAN_UNIDAD_DE_INVERSION__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_MEXICAN_UNIDAD_DE_INVERSION__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_MOLDOVAN_LEU__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_MOLDOVAN_LEU__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_MOROCCAN_DIRHAM__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_MOROCCAN_DIRHAM__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_MOZAMBIQUE_METICAL__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_MOZAMBIQUE_METICAL__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_MVDOL__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_MVDOL__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_NAIRA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_NAIRA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_NAKFA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_NAKFA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_NAMIBIA_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_NAMIBIA_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_NEPALESE_RUPEE__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_NEPALESE_RUPEE__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_NETHERLANDS_ANTILLEAN_GUILDER__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_NETHERLANDS_ANTILLEAN_GUILDER__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_NEW_ISRAELI_SHEQEL__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_NEW_ISRAELI_SHEQEL__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_NEW_TAIWAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_NEW_TAIWAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_NEW_ZEALAND_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_NEW_ZEALAND_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_NGULTRUM__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_NGULTRUM__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_NORTH_KOREAN_WON__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_NORTH_KOREAN_WON__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_NORWEGIAN_KRONE__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_NORWEGIAN_KRONE__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_OUGUIYA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_OUGUIYA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_PAKISTAN_RUPEE__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_PAKISTAN_RUPEE__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_PALLADIUM__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_PALLADIUM__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_PATACA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_PATACA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_PAANGA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_PAANGA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_PESO_CONVERTIBLE__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_PESO_CONVERTIBLE__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_PESO_URUGUAYO__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_PESO_URUGUAYO__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_PHILIPPINE_PESO__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_PHILIPPINE_PESO__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_PLATINUM__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_PLATINUM__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_POUND_STERLING__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_POUND_STERLING__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_PULA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_PULA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_QATARI_RIAL__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_QATARI_RIAL__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_QUETZAL__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_QUETZAL__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_RAND__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_RAND__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_RIAL_OMANI__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_RIAL_OMANI__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_RIEL__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_RIEL__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_ROMANIAN_LEU__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_ROMANIAN_LEU__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_RUFIYAA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_RUFIYAA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_RUPIAH__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_RUPIAH__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_RUSSIAN_RUBLE__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_RUSSIAN_RUBLE__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_RWANDA_FRANC__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_RWANDA_FRANC__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_SPECIAL_DRAWING_RIGHT__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_SPECIAL_DRAWING_RIGHT__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_SAUDI_RIYAL__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_SAUDI_RIYAL__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_SERBIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_SERBIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_SEYCHELLES_RUPEE__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_SEYCHELLES_RUPEE__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_SILVER__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_SILVER__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_SINGAPORE_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_SINGAPORE_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_SOL__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_SOL__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_SOLOMON_ISLANDS_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_SOLOMON_ISLANDS_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_SOM__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_SOM__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_SOMALI_SHILLING__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_SOMALI_SHILLING__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_SOMONI__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_SOMONI__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_SOUTH_SUDANESE_POUND__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_SOUTH_SUDANESE_POUND__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_SRI_LANKA_RUPEE__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_SRI_LANKA_RUPEE__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_SUCRE__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_SUCRE__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_SUDANESE_POUND__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_SUDANESE_POUND__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_SURINAM_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_SURINAM_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_SWEDISH_KRONA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_SWEDISH_KRONA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_SWISS_FRANC__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_SWISS_FRANC__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_SYRIAN_POUND__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_SYRIAN_POUND__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_TAKA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_TAKA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_TALA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_TALA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_TENGE__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_TENGE__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_THE_CODES_ASSIGNED_FOR_TRANSACTIONS_WHERE_NO_CURRENCY_IS_INVOLVED__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_THE_CODES_ASSIGNED_FOR_TRANSACTIONS_WHERE_NO_CURRENCY_IS_INVOLVED__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_TRINIDAD_AND_TOBAGO_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_TRINIDAD_AND_TOBAGO_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_TUGRIK__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_TUGRIK__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_TUNISIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_TUNISIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_TURKISH_LIRA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_TURKISH_LIRA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_TURKMENISTAN_NEW_MANAT__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_TURKMENISTAN_NEW_MANAT__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_UAE_DIRHAM__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_UAE_DIRHAM__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_US_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_US_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_US_DOLLAR_NEXT_DAY__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_US_DOLLAR_NEXT_DAY__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_UGANDA_SHILLING__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_UGANDA_SHILLING__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_UNIDAD_PREVISIONAL__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_UNIDAD_PREVISIONAL__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_UNIDAD_DE_FOMENTO__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_UNIDAD_DE_FOMENTO__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_UNIDAD_DE_VALOR_REAL__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_UNIDAD_DE_VALOR_REAL__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_URUGUAY_PESO_EN_UNIDADES_INDEXADAS__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_URUGUAY_PESO_EN_UNIDADES_INDEXADAS__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_UZBEKISTAN_SUM__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_UZBEKISTAN_SUM__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_VATU__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_VATU__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_WIR_EURO__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_WIR_EURO__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_WIR_FRANC__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_WIR_FRANC__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_WON__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_WON__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_YEMENI_RIAL__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_YEMENI_RIAL__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_YEN__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_YEN__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_YUAN_RENMINBI__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_YUAN_RENMINBI__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_ZAMBIAN_KWACHA__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_ZAMBIAN_KWACHA__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_ZIMBABWE_DOLLAR__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_ZIMBABWE_DOLLAR__org_pepstock_charba_client_intl_enums_Currency);
 }
 /** @return {!Currency} */
 static get f_ZLOTY__org_pepstock_charba_client_intl_enums_Currency() {
  return (Currency.$clinit(), Currency.$static_ZLOTY__org_pepstock_charba_client_intl_enums_Currency);
 }
 
 static $clinit() {
  Currency.$clinit = () =>{};
  Currency.$loadModules();
  Enum.$clinit();
  Currency.$static_ADB_UNIT_OF_ACCOUNT__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("ADB_UNIT_OF_ACCOUNT"), Currency.$ordinal_ADB_UNIT_OF_ACCOUNT__org_pepstock_charba_client_intl_enums_Currency, "XUA", "ADB Unit of Account", 2);
  Currency.$static_AFGHANI__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("AFGHANI"), Currency.$ordinal_AFGHANI__org_pepstock_charba_client_intl_enums_Currency, "AFN", "Afghani", 2);
  Currency.$static_ALGERIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("ALGERIAN_DINAR"), Currency.$ordinal_ALGERIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency, "DZD", "Algerian Dinar", 2);
  Currency.$static_ARGENTINE_PESO__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("ARGENTINE_PESO"), Currency.$ordinal_ARGENTINE_PESO__org_pepstock_charba_client_intl_enums_Currency, "ARS", "Argentine Peso", 2);
  Currency.$static_ARMENIAN_DRAM__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("ARMENIAN_DRAM"), Currency.$ordinal_ARMENIAN_DRAM__org_pepstock_charba_client_intl_enums_Currency, "AMD", "Armenian Dram", 2);
  Currency.$static_ARUBAN_FLORIN__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("ARUBAN_FLORIN"), Currency.$ordinal_ARUBAN_FLORIN__org_pepstock_charba_client_intl_enums_Currency, "AWG", "Aruban Florin", 2);
  Currency.$static_AUSTRALIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("AUSTRALIAN_DOLLAR"), Currency.$ordinal_AUSTRALIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "AUD", "Australian Dollar", 2);
  Currency.$static_AZERBAIJAN_MANAT__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("AZERBAIJAN_MANAT"), Currency.$ordinal_AZERBAIJAN_MANAT__org_pepstock_charba_client_intl_enums_Currency, "AZN", "Azerbaijan Manat", 2);
  Currency.$static_BAHAMIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("BAHAMIAN_DOLLAR"), Currency.$ordinal_BAHAMIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "BSD", "Bahamian Dollar", 2);
  Currency.$static_BAHRAINI_DINAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("BAHRAINI_DINAR"), Currency.$ordinal_BAHRAINI_DINAR__org_pepstock_charba_client_intl_enums_Currency, "BHD", "Bahraini Dinar", 3);
  Currency.$static_BAHT__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("BAHT"), Currency.$ordinal_BAHT__org_pepstock_charba_client_intl_enums_Currency, "THB", "Baht", 2);
  Currency.$static_BALBOA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("BALBOA"), Currency.$ordinal_BALBOA__org_pepstock_charba_client_intl_enums_Currency, "PAB", "Balboa", 2);
  Currency.$static_BARBADOS_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("BARBADOS_DOLLAR"), Currency.$ordinal_BARBADOS_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "BBD", "Barbados Dollar", 2);
  Currency.$static_BELARUSIAN_RUBLE__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("BELARUSIAN_RUBLE"), Currency.$ordinal_BELARUSIAN_RUBLE__org_pepstock_charba_client_intl_enums_Currency, "BYN", "Belarusian Ruble", 2);
  Currency.$static_BELIZE_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("BELIZE_DOLLAR"), Currency.$ordinal_BELIZE_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "BZD", "Belize Dollar", 2);
  Currency.$static_BERMUDIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("BERMUDIAN_DOLLAR"), Currency.$ordinal_BERMUDIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "BMD", "Bermudian Dollar", 2);
  Currency.$static_BOLIVIANO__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("BOLIVIANO"), Currency.$ordinal_BOLIVIANO__org_pepstock_charba_client_intl_enums_Currency, "BOB", "Boliviano", 2);
  Currency.$static_BOLIVAR_SOBERANO__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("BOLIVAR_SOBERANO"), Currency.$ordinal_BOLIVAR_SOBERANO__org_pepstock_charba_client_intl_enums_Currency, "VES", "Bol\u00EDvar Soberano", 2);
  Currency.$static_BOND_MARKETS_UNIT_EUROPEAN_COMPOSITE_UNIT__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("BOND_MARKETS_UNIT_EUROPEAN_COMPOSITE_UNIT"), Currency.$ordinal_BOND_MARKETS_UNIT_EUROPEAN_COMPOSITE_UNIT__org_pepstock_charba_client_intl_enums_Currency, "XBA", "Bond Markets Unit European Composite Unit (EURCO)", 2);
  Currency.$static_BOND_MARKETS_UNIT_EUROPEAN_MONETARY_UNIT__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("BOND_MARKETS_UNIT_EUROPEAN_MONETARY_UNIT"), Currency.$ordinal_BOND_MARKETS_UNIT_EUROPEAN_MONETARY_UNIT__org_pepstock_charba_client_intl_enums_Currency, "XBB", "Bond Markets Unit European Monetary Unit (E.M.U.-6)", 2);
  Currency.$static_BOND_MARKETS_UNIT_EUROPEAN_UNIT_OF_ACCOUNT_17__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("BOND_MARKETS_UNIT_EUROPEAN_UNIT_OF_ACCOUNT_17"), Currency.$ordinal_BOND_MARKETS_UNIT_EUROPEAN_UNIT_OF_ACCOUNT_17__org_pepstock_charba_client_intl_enums_Currency, "XBD", "Bond Markets Unit European Unit of Account 17 (E.U.A.-17)", 2);
  Currency.$static_BOND_MARKETS_UNIT_EUROPEAN_UNIT_OF_ACCOUNT_9__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("BOND_MARKETS_UNIT_EUROPEAN_UNIT_OF_ACCOUNT_9"), Currency.$ordinal_BOND_MARKETS_UNIT_EUROPEAN_UNIT_OF_ACCOUNT_9__org_pepstock_charba_client_intl_enums_Currency, "XBC", "Bond Markets Unit European Unit of Account 9 (E.U.A.-9)", 2);
  Currency.$static_BRAZILIAN_REAL__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("BRAZILIAN_REAL"), Currency.$ordinal_BRAZILIAN_REAL__org_pepstock_charba_client_intl_enums_Currency, "BRL", "Brazilian Real", 2);
  Currency.$static_BRUNEI_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("BRUNEI_DOLLAR"), Currency.$ordinal_BRUNEI_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "BND", "Brunei Dollar", 2);
  Currency.$static_BULGARIAN_LEV__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("BULGARIAN_LEV"), Currency.$ordinal_BULGARIAN_LEV__org_pepstock_charba_client_intl_enums_Currency, "BGN", "Bulgarian Lev", 2);
  Currency.$static_BURUNDI_FRANC__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("BURUNDI_FRANC"), Currency.$ordinal_BURUNDI_FRANC__org_pepstock_charba_client_intl_enums_Currency, "BIF", "Burundi Franc", 0);
  Currency.$static_CFA_FRANC_BCEAO__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("CFA_FRANC_BCEAO"), Currency.$ordinal_CFA_FRANC_BCEAO__org_pepstock_charba_client_intl_enums_Currency, "XOF", "CFA Franc BCEAO", 0);
  Currency.$static_CFA_FRANC_BEAC__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("CFA_FRANC_BEAC"), Currency.$ordinal_CFA_FRANC_BEAC__org_pepstock_charba_client_intl_enums_Currency, "XAF", "CFA Franc BEAC", 0);
  Currency.$static_CFP_FRANC__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("CFP_FRANC"), Currency.$ordinal_CFP_FRANC__org_pepstock_charba_client_intl_enums_Currency, "XPF", "CFP Franc", 0);
  Currency.$static_CABO_VERDE_ESCUDO__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("CABO_VERDE_ESCUDO"), Currency.$ordinal_CABO_VERDE_ESCUDO__org_pepstock_charba_client_intl_enums_Currency, "CVE", "Cabo Verde Escudo", 2);
  Currency.$static_CANADIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("CANADIAN_DOLLAR"), Currency.$ordinal_CANADIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "CAD", "Canadian Dollar", 2);
  Currency.$static_CAYMAN_ISLANDS_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("CAYMAN_ISLANDS_DOLLAR"), Currency.$ordinal_CAYMAN_ISLANDS_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "KYD", "Cayman Islands Dollar", 2);
  Currency.$static_CHILEAN_PESO__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("CHILEAN_PESO"), Currency.$ordinal_CHILEAN_PESO__org_pepstock_charba_client_intl_enums_Currency, "CLP", "Chilean Peso", 0);
  Currency.$static_CODES_SPECIFICALLY_RESERVED_FOR_TESTING_PURPOSES__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("CODES_SPECIFICALLY_RESERVED_FOR_TESTING_PURPOSES"), Currency.$ordinal_CODES_SPECIFICALLY_RESERVED_FOR_TESTING_PURPOSES__org_pepstock_charba_client_intl_enums_Currency, "XTS", "Codes specifically reserved for testing purposes", 2);
  Currency.$static_COLOMBIAN_PESO__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("COLOMBIAN_PESO"), Currency.$ordinal_COLOMBIAN_PESO__org_pepstock_charba_client_intl_enums_Currency, "COP", "Colombian Peso", 2);
  Currency.$static_COMORIAN_FRANC__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("COMORIAN_FRANC"), Currency.$ordinal_COMORIAN_FRANC__org_pepstock_charba_client_intl_enums_Currency, "KMF", "Comorian Franc ", 0);
  Currency.$static_CONGOLESE_FRANC__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("CONGOLESE_FRANC"), Currency.$ordinal_CONGOLESE_FRANC__org_pepstock_charba_client_intl_enums_Currency, "CDF", "Congolese Franc", 2);
  Currency.$static_CONVERTIBLE_MARK__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("CONVERTIBLE_MARK"), Currency.$ordinal_CONVERTIBLE_MARK__org_pepstock_charba_client_intl_enums_Currency, "BAM", "Convertible Mark", 2);
  Currency.$static_CORDOBA_ORO__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("CORDOBA_ORO"), Currency.$ordinal_CORDOBA_ORO__org_pepstock_charba_client_intl_enums_Currency, "NIO", "Cordoba Oro", 2);
  Currency.$static_COSTA_RICAN_COLON__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("COSTA_RICAN_COLON"), Currency.$ordinal_COSTA_RICAN_COLON__org_pepstock_charba_client_intl_enums_Currency, "CRC", "Costa Rican Colon", 2);
  Currency.$static_CUBAN_PESO__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("CUBAN_PESO"), Currency.$ordinal_CUBAN_PESO__org_pepstock_charba_client_intl_enums_Currency, "CUP", "Cuban Peso", 2);
  Currency.$static_CZECH_KORUNA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("CZECH_KORUNA"), Currency.$ordinal_CZECH_KORUNA__org_pepstock_charba_client_intl_enums_Currency, "CZK", "Czech Koruna", 2);
  Currency.$static_DALASI__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("DALASI"), Currency.$ordinal_DALASI__org_pepstock_charba_client_intl_enums_Currency, "GMD", "Dalasi", 2);
  Currency.$static_DANISH_KRONE__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("DANISH_KRONE"), Currency.$ordinal_DANISH_KRONE__org_pepstock_charba_client_intl_enums_Currency, "DKK", "Danish Krone", 2);
  Currency.$static_DENAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("DENAR"), Currency.$ordinal_DENAR__org_pepstock_charba_client_intl_enums_Currency, "MKD", "Denar", 2);
  Currency.$static_DJIBOUTI_FRANC__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("DJIBOUTI_FRANC"), Currency.$ordinal_DJIBOUTI_FRANC__org_pepstock_charba_client_intl_enums_Currency, "DJF", "Djibouti Franc", 0);
  Currency.$static_DOBRA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("DOBRA"), Currency.$ordinal_DOBRA__org_pepstock_charba_client_intl_enums_Currency, "STN", "Dobra", 2);
  Currency.$static_DOMINICAN_PESO__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("DOMINICAN_PESO"), Currency.$ordinal_DOMINICAN_PESO__org_pepstock_charba_client_intl_enums_Currency, "DOP", "Dominican Peso", 2);
  Currency.$static_DONG__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("DONG"), Currency.$ordinal_DONG__org_pepstock_charba_client_intl_enums_Currency, "VND", "Dong", 0);
  Currency.$static_EAST_CARIBBEAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("EAST_CARIBBEAN_DOLLAR"), Currency.$ordinal_EAST_CARIBBEAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "XCD", "East Caribbean Dollar", 2);
  Currency.$static_EGYPTIAN_POUND__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("EGYPTIAN_POUND"), Currency.$ordinal_EGYPTIAN_POUND__org_pepstock_charba_client_intl_enums_Currency, "EGP", "Egyptian Pound", 2);
  Currency.$static_EL_SALVADOR_COLON__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("EL_SALVADOR_COLON"), Currency.$ordinal_EL_SALVADOR_COLON__org_pepstock_charba_client_intl_enums_Currency, "SVC", "El Salvador Colon", 2);
  Currency.$static_ETHIOPIAN_BIRR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("ETHIOPIAN_BIRR"), Currency.$ordinal_ETHIOPIAN_BIRR__org_pepstock_charba_client_intl_enums_Currency, "ETB", "Ethiopian Birr", 2);
  Currency.$static_EURO__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("EURO"), Currency.$ordinal_EURO__org_pepstock_charba_client_intl_enums_Currency, "EUR", "Euro", 2);
  Currency.$static_FALKLAND_ISLANDS_POUND__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("FALKLAND_ISLANDS_POUND"), Currency.$ordinal_FALKLAND_ISLANDS_POUND__org_pepstock_charba_client_intl_enums_Currency, "FKP", "Falkland Islands Pound", 2);
  Currency.$static_FIJI_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("FIJI_DOLLAR"), Currency.$ordinal_FIJI_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "FJD", "Fiji Dollar", 2);
  Currency.$static_FORINT__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("FORINT"), Currency.$ordinal_FORINT__org_pepstock_charba_client_intl_enums_Currency, "HUF", "Forint", 2);
  Currency.$static_GHANA_CEDI__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("GHANA_CEDI"), Currency.$ordinal_GHANA_CEDI__org_pepstock_charba_client_intl_enums_Currency, "GHS", "Ghana Cedi", 2);
  Currency.$static_GIBRALTAR_POUND__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("GIBRALTAR_POUND"), Currency.$ordinal_GIBRALTAR_POUND__org_pepstock_charba_client_intl_enums_Currency, "GIP", "Gibraltar Pound", 2);
  Currency.$static_GOLD__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("GOLD"), Currency.$ordinal_GOLD__org_pepstock_charba_client_intl_enums_Currency, "XAU", "Gold", 2);
  Currency.$static_GOURDE__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("GOURDE"), Currency.$ordinal_GOURDE__org_pepstock_charba_client_intl_enums_Currency, "HTG", "Gourde", 2);
  Currency.$static_GUARANI__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("GUARANI"), Currency.$ordinal_GUARANI__org_pepstock_charba_client_intl_enums_Currency, "PYG", "Guarani", 0);
  Currency.$static_GUINEAN_FRANC__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("GUINEAN_FRANC"), Currency.$ordinal_GUINEAN_FRANC__org_pepstock_charba_client_intl_enums_Currency, "GNF", "Guinean Franc", 0);
  Currency.$static_GUYANA_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("GUYANA_DOLLAR"), Currency.$ordinal_GUYANA_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "GYD", "Guyana Dollar", 2);
  Currency.$static_HONG_KONG_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("HONG_KONG_DOLLAR"), Currency.$ordinal_HONG_KONG_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "HKD", "Hong Kong Dollar", 2);
  Currency.$static_HRYVNIA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("HRYVNIA"), Currency.$ordinal_HRYVNIA__org_pepstock_charba_client_intl_enums_Currency, "UAH", "Hryvnia", 2);
  Currency.$static_ICELAND_KRONA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("ICELAND_KRONA"), Currency.$ordinal_ICELAND_KRONA__org_pepstock_charba_client_intl_enums_Currency, "ISK", "Iceland Krona", 0);
  Currency.$static_INDIAN_RUPEE__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("INDIAN_RUPEE"), Currency.$ordinal_INDIAN_RUPEE__org_pepstock_charba_client_intl_enums_Currency, "INR", "Indian Rupee", 2);
  Currency.$static_IRANIAN_RIAL__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("IRANIAN_RIAL"), Currency.$ordinal_IRANIAN_RIAL__org_pepstock_charba_client_intl_enums_Currency, "IRR", "Iranian Rial", 2);
  Currency.$static_IRAQI_DINAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("IRAQI_DINAR"), Currency.$ordinal_IRAQI_DINAR__org_pepstock_charba_client_intl_enums_Currency, "IQD", "Iraqi Dinar", 3);
  Currency.$static_JAMAICAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("JAMAICAN_DOLLAR"), Currency.$ordinal_JAMAICAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "JMD", "Jamaican Dollar", 2);
  Currency.$static_JORDANIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("JORDANIAN_DINAR"), Currency.$ordinal_JORDANIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency, "JOD", "Jordanian Dinar", 3);
  Currency.$static_KENYAN_SHILLING__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("KENYAN_SHILLING"), Currency.$ordinal_KENYAN_SHILLING__org_pepstock_charba_client_intl_enums_Currency, "KES", "Kenyan Shilling", 2);
  Currency.$static_KINA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("KINA"), Currency.$ordinal_KINA__org_pepstock_charba_client_intl_enums_Currency, "PGK", "Kina", 2);
  Currency.$static_KUNA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("KUNA"), Currency.$ordinal_KUNA__org_pepstock_charba_client_intl_enums_Currency, "HRK", "Kuna", 2);
  Currency.$static_KUWAITI_DINAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("KUWAITI_DINAR"), Currency.$ordinal_KUWAITI_DINAR__org_pepstock_charba_client_intl_enums_Currency, "KWD", "Kuwaiti Dinar", 3);
  Currency.$static_KWANZA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("KWANZA"), Currency.$ordinal_KWANZA__org_pepstock_charba_client_intl_enums_Currency, "AOA", "Kwanza", 2);
  Currency.$static_KYAT__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("KYAT"), Currency.$ordinal_KYAT__org_pepstock_charba_client_intl_enums_Currency, "MMK", "Kyat", 2);
  Currency.$static_LAO_KIP__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("LAO_KIP"), Currency.$ordinal_LAO_KIP__org_pepstock_charba_client_intl_enums_Currency, "LAK", "Lao Kip", 2);
  Currency.$static_LARI__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("LARI"), Currency.$ordinal_LARI__org_pepstock_charba_client_intl_enums_Currency, "GEL", "Lari", 2);
  Currency.$static_LEBANESE_POUND__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("LEBANESE_POUND"), Currency.$ordinal_LEBANESE_POUND__org_pepstock_charba_client_intl_enums_Currency, "LBP", "Lebanese Pound", 2);
  Currency.$static_LEK__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("LEK"), Currency.$ordinal_LEK__org_pepstock_charba_client_intl_enums_Currency, "ALL", "Lek", 2);
  Currency.$static_LEMPIRA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("LEMPIRA"), Currency.$ordinal_LEMPIRA__org_pepstock_charba_client_intl_enums_Currency, "HNL", "Lempira", 2);
  Currency.$static_LEONE__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("LEONE"), Currency.$ordinal_LEONE__org_pepstock_charba_client_intl_enums_Currency, "SLL", "Leone", 2);
  Currency.$static_LIBERIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("LIBERIAN_DOLLAR"), Currency.$ordinal_LIBERIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "LRD", "Liberian Dollar", 2);
  Currency.$static_LIBYAN_DINAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("LIBYAN_DINAR"), Currency.$ordinal_LIBYAN_DINAR__org_pepstock_charba_client_intl_enums_Currency, "LYD", "Libyan Dinar", 3);
  Currency.$static_LILANGENI__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("LILANGENI"), Currency.$ordinal_LILANGENI__org_pepstock_charba_client_intl_enums_Currency, "SZL", "Lilangeni", 2);
  Currency.$static_LOTI__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("LOTI"), Currency.$ordinal_LOTI__org_pepstock_charba_client_intl_enums_Currency, "LSL", "Loti", 2);
  Currency.$static_MALAGASY_ARIARY__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("MALAGASY_ARIARY"), Currency.$ordinal_MALAGASY_ARIARY__org_pepstock_charba_client_intl_enums_Currency, "MGA", "Malagasy Ariary", 2);
  Currency.$static_MALAWI_KWACHA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("MALAWI_KWACHA"), Currency.$ordinal_MALAWI_KWACHA__org_pepstock_charba_client_intl_enums_Currency, "MWK", "Malawi Kwacha", 2);
  Currency.$static_MALAYSIAN_RINGGIT__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("MALAYSIAN_RINGGIT"), Currency.$ordinal_MALAYSIAN_RINGGIT__org_pepstock_charba_client_intl_enums_Currency, "MYR", "Malaysian Ringgit", 2);
  Currency.$static_MAURITIUS_RUPEE__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("MAURITIUS_RUPEE"), Currency.$ordinal_MAURITIUS_RUPEE__org_pepstock_charba_client_intl_enums_Currency, "MUR", "Mauritius Rupee", 2);
  Currency.$static_MEXICAN_PESO__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("MEXICAN_PESO"), Currency.$ordinal_MEXICAN_PESO__org_pepstock_charba_client_intl_enums_Currency, "MXN", "Mexican Peso", 2);
  Currency.$static_MEXICAN_UNIDAD_DE_INVERSION__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("MEXICAN_UNIDAD_DE_INVERSION"), Currency.$ordinal_MEXICAN_UNIDAD_DE_INVERSION__org_pepstock_charba_client_intl_enums_Currency, "MXV", "Mexican Unidad de Inversion (UDI)", 2);
  Currency.$static_MOLDOVAN_LEU__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("MOLDOVAN_LEU"), Currency.$ordinal_MOLDOVAN_LEU__org_pepstock_charba_client_intl_enums_Currency, "MDL", "Moldovan Leu", 2);
  Currency.$static_MOROCCAN_DIRHAM__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("MOROCCAN_DIRHAM"), Currency.$ordinal_MOROCCAN_DIRHAM__org_pepstock_charba_client_intl_enums_Currency, "MAD", "Moroccan Dirham", 2);
  Currency.$static_MOZAMBIQUE_METICAL__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("MOZAMBIQUE_METICAL"), Currency.$ordinal_MOZAMBIQUE_METICAL__org_pepstock_charba_client_intl_enums_Currency, "MZN", "Mozambique Metical", 2);
  Currency.$static_MVDOL__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("MVDOL"), Currency.$ordinal_MVDOL__org_pepstock_charba_client_intl_enums_Currency, "BOV", "Mvdol", 2);
  Currency.$static_NAIRA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("NAIRA"), Currency.$ordinal_NAIRA__org_pepstock_charba_client_intl_enums_Currency, "NGN", "Naira", 2);
  Currency.$static_NAKFA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("NAKFA"), Currency.$ordinal_NAKFA__org_pepstock_charba_client_intl_enums_Currency, "ERN", "Nakfa", 2);
  Currency.$static_NAMIBIA_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("NAMIBIA_DOLLAR"), Currency.$ordinal_NAMIBIA_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "NAD", "Namibia Dollar", 2);
  Currency.$static_NEPALESE_RUPEE__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("NEPALESE_RUPEE"), Currency.$ordinal_NEPALESE_RUPEE__org_pepstock_charba_client_intl_enums_Currency, "NPR", "Nepalese Rupee", 2);
  Currency.$static_NETHERLANDS_ANTILLEAN_GUILDER__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("NETHERLANDS_ANTILLEAN_GUILDER"), Currency.$ordinal_NETHERLANDS_ANTILLEAN_GUILDER__org_pepstock_charba_client_intl_enums_Currency, "ANG", "Netherlands Antillean Guilder", 2);
  Currency.$static_NEW_ISRAELI_SHEQEL__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("NEW_ISRAELI_SHEQEL"), Currency.$ordinal_NEW_ISRAELI_SHEQEL__org_pepstock_charba_client_intl_enums_Currency, "ILS", "New Israeli Sheqel", 2);
  Currency.$static_NEW_TAIWAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("NEW_TAIWAN_DOLLAR"), Currency.$ordinal_NEW_TAIWAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "TWD", "New Taiwan Dollar", 2);
  Currency.$static_NEW_ZEALAND_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("NEW_ZEALAND_DOLLAR"), Currency.$ordinal_NEW_ZEALAND_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "NZD", "New Zealand Dollar", 2);
  Currency.$static_NGULTRUM__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("NGULTRUM"), Currency.$ordinal_NGULTRUM__org_pepstock_charba_client_intl_enums_Currency, "BTN", "Ngultrum", 2);
  Currency.$static_NORTH_KOREAN_WON__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("NORTH_KOREAN_WON"), Currency.$ordinal_NORTH_KOREAN_WON__org_pepstock_charba_client_intl_enums_Currency, "KPW", "North Korean Won", 2);
  Currency.$static_NORWEGIAN_KRONE__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("NORWEGIAN_KRONE"), Currency.$ordinal_NORWEGIAN_KRONE__org_pepstock_charba_client_intl_enums_Currency, "NOK", "Norwegian Krone", 2);
  Currency.$static_OUGUIYA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("OUGUIYA"), Currency.$ordinal_OUGUIYA__org_pepstock_charba_client_intl_enums_Currency, "MRU", "Ouguiya", 2);
  Currency.$static_PAKISTAN_RUPEE__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("PAKISTAN_RUPEE"), Currency.$ordinal_PAKISTAN_RUPEE__org_pepstock_charba_client_intl_enums_Currency, "PKR", "Pakistan Rupee", 2);
  Currency.$static_PALLADIUM__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("PALLADIUM"), Currency.$ordinal_PALLADIUM__org_pepstock_charba_client_intl_enums_Currency, "XPD", "Palladium", 2);
  Currency.$static_PATACA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("PATACA"), Currency.$ordinal_PATACA__org_pepstock_charba_client_intl_enums_Currency, "MOP", "Pataca", 2);
  Currency.$static_PAANGA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("PAANGA"), Currency.$ordinal_PAANGA__org_pepstock_charba_client_intl_enums_Currency, "TOP", "Pa\u2019anga", 2);
  Currency.$static_PESO_CONVERTIBLE__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("PESO_CONVERTIBLE"), Currency.$ordinal_PESO_CONVERTIBLE__org_pepstock_charba_client_intl_enums_Currency, "CUC", "Peso Convertible", 2);
  Currency.$static_PESO_URUGUAYO__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("PESO_URUGUAYO"), Currency.$ordinal_PESO_URUGUAYO__org_pepstock_charba_client_intl_enums_Currency, "UYU", "Peso Uruguayo", 2);
  Currency.$static_PHILIPPINE_PESO__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("PHILIPPINE_PESO"), Currency.$ordinal_PHILIPPINE_PESO__org_pepstock_charba_client_intl_enums_Currency, "PHP", "Philippine Peso", 2);
  Currency.$static_PLATINUM__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("PLATINUM"), Currency.$ordinal_PLATINUM__org_pepstock_charba_client_intl_enums_Currency, "XPT", "Platinum", 2);
  Currency.$static_POUND_STERLING__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("POUND_STERLING"), Currency.$ordinal_POUND_STERLING__org_pepstock_charba_client_intl_enums_Currency, "GBP", "Pound Sterling", 2);
  Currency.$static_PULA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("PULA"), Currency.$ordinal_PULA__org_pepstock_charba_client_intl_enums_Currency, "BWP", "Pula", 2);
  Currency.$static_QATARI_RIAL__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("QATARI_RIAL"), Currency.$ordinal_QATARI_RIAL__org_pepstock_charba_client_intl_enums_Currency, "QAR", "Qatari Rial", 2);
  Currency.$static_QUETZAL__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("QUETZAL"), Currency.$ordinal_QUETZAL__org_pepstock_charba_client_intl_enums_Currency, "GTQ", "Quetzal", 2);
  Currency.$static_RAND__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("RAND"), Currency.$ordinal_RAND__org_pepstock_charba_client_intl_enums_Currency, "ZAR", "Rand", 2);
  Currency.$static_RIAL_OMANI__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("RIAL_OMANI"), Currency.$ordinal_RIAL_OMANI__org_pepstock_charba_client_intl_enums_Currency, "OMR", "Rial Omani", 3);
  Currency.$static_RIEL__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("RIEL"), Currency.$ordinal_RIEL__org_pepstock_charba_client_intl_enums_Currency, "KHR", "Riel", 2);
  Currency.$static_ROMANIAN_LEU__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("ROMANIAN_LEU"), Currency.$ordinal_ROMANIAN_LEU__org_pepstock_charba_client_intl_enums_Currency, "RON", "Romanian Leu", 2);
  Currency.$static_RUFIYAA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("RUFIYAA"), Currency.$ordinal_RUFIYAA__org_pepstock_charba_client_intl_enums_Currency, "MVR", "Rufiyaa", 2);
  Currency.$static_RUPIAH__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("RUPIAH"), Currency.$ordinal_RUPIAH__org_pepstock_charba_client_intl_enums_Currency, "IDR", "Rupiah", 2);
  Currency.$static_RUSSIAN_RUBLE__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("RUSSIAN_RUBLE"), Currency.$ordinal_RUSSIAN_RUBLE__org_pepstock_charba_client_intl_enums_Currency, "RUB", "Russian Ruble", 2);
  Currency.$static_RWANDA_FRANC__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("RWANDA_FRANC"), Currency.$ordinal_RWANDA_FRANC__org_pepstock_charba_client_intl_enums_Currency, "RWF", "Rwanda Franc", 0);
  Currency.$static_SPECIAL_DRAWING_RIGHT__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("SPECIAL_DRAWING_RIGHT"), Currency.$ordinal_SPECIAL_DRAWING_RIGHT__org_pepstock_charba_client_intl_enums_Currency, "XDR", "SDR (Special Drawing Right)", 2);
  Currency.$static_SAUDI_RIYAL__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("SAUDI_RIYAL"), Currency.$ordinal_SAUDI_RIYAL__org_pepstock_charba_client_intl_enums_Currency, "SAR", "Saudi Riyal", 2);
  Currency.$static_SERBIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("SERBIAN_DINAR"), Currency.$ordinal_SERBIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency, "RSD", "Serbian Dinar", 2);
  Currency.$static_SEYCHELLES_RUPEE__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("SEYCHELLES_RUPEE"), Currency.$ordinal_SEYCHELLES_RUPEE__org_pepstock_charba_client_intl_enums_Currency, "SCR", "Seychelles Rupee", 2);
  Currency.$static_SILVER__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("SILVER"), Currency.$ordinal_SILVER__org_pepstock_charba_client_intl_enums_Currency, "XAG", "Silver", 2);
  Currency.$static_SINGAPORE_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("SINGAPORE_DOLLAR"), Currency.$ordinal_SINGAPORE_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "SGD", "Singapore Dollar", 2);
  Currency.$static_SOL__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("SOL"), Currency.$ordinal_SOL__org_pepstock_charba_client_intl_enums_Currency, "PEN", "Sol", 2);
  Currency.$static_SOLOMON_ISLANDS_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("SOLOMON_ISLANDS_DOLLAR"), Currency.$ordinal_SOLOMON_ISLANDS_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "SBD", "Solomon Islands Dollar", 2);
  Currency.$static_SOM__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("SOM"), Currency.$ordinal_SOM__org_pepstock_charba_client_intl_enums_Currency, "KGS", "Som", 2);
  Currency.$static_SOMALI_SHILLING__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("SOMALI_SHILLING"), Currency.$ordinal_SOMALI_SHILLING__org_pepstock_charba_client_intl_enums_Currency, "SOS", "Somali Shilling", 2);
  Currency.$static_SOMONI__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("SOMONI"), Currency.$ordinal_SOMONI__org_pepstock_charba_client_intl_enums_Currency, "TJS", "Somoni", 2);
  Currency.$static_SOUTH_SUDANESE_POUND__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("SOUTH_SUDANESE_POUND"), Currency.$ordinal_SOUTH_SUDANESE_POUND__org_pepstock_charba_client_intl_enums_Currency, "SSP", "South Sudanese Pound", 2);
  Currency.$static_SRI_LANKA_RUPEE__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("SRI_LANKA_RUPEE"), Currency.$ordinal_SRI_LANKA_RUPEE__org_pepstock_charba_client_intl_enums_Currency, "LKR", "Sri Lanka Rupee", 2);
  Currency.$static_SUCRE__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("SUCRE"), Currency.$ordinal_SUCRE__org_pepstock_charba_client_intl_enums_Currency, "XSU", "Sucre", 2);
  Currency.$static_SUDANESE_POUND__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("SUDANESE_POUND"), Currency.$ordinal_SUDANESE_POUND__org_pepstock_charba_client_intl_enums_Currency, "SDG", "Sudanese Pound", 2);
  Currency.$static_SURINAM_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("SURINAM_DOLLAR"), Currency.$ordinal_SURINAM_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "SRD", "Surinam Dollar", 2);
  Currency.$static_SWEDISH_KRONA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("SWEDISH_KRONA"), Currency.$ordinal_SWEDISH_KRONA__org_pepstock_charba_client_intl_enums_Currency, "SEK", "Swedish Krona", 2);
  Currency.$static_SWISS_FRANC__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("SWISS_FRANC"), Currency.$ordinal_SWISS_FRANC__org_pepstock_charba_client_intl_enums_Currency, "CHF", "Swiss Franc", 2);
  Currency.$static_SYRIAN_POUND__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("SYRIAN_POUND"), Currency.$ordinal_SYRIAN_POUND__org_pepstock_charba_client_intl_enums_Currency, "SYP", "Syrian Pound", 2);
  Currency.$static_TAKA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("TAKA"), Currency.$ordinal_TAKA__org_pepstock_charba_client_intl_enums_Currency, "BDT", "Taka", 2);
  Currency.$static_TALA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("TALA"), Currency.$ordinal_TALA__org_pepstock_charba_client_intl_enums_Currency, "WST", "Tala", 2);
  Currency.$static_TENGE__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("TENGE"), Currency.$ordinal_TENGE__org_pepstock_charba_client_intl_enums_Currency, "KZT", "Tenge", 2);
  Currency.$static_THE_CODES_ASSIGNED_FOR_TRANSACTIONS_WHERE_NO_CURRENCY_IS_INVOLVED__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("THE_CODES_ASSIGNED_FOR_TRANSACTIONS_WHERE_NO_CURRENCY_IS_INVOLVED"), Currency.$ordinal_THE_CODES_ASSIGNED_FOR_TRANSACTIONS_WHERE_NO_CURRENCY_IS_INVOLVED__org_pepstock_charba_client_intl_enums_Currency, "XXX", "The codes assigned for transactions where no currency is involved", 2);
  Currency.$static_TRINIDAD_AND_TOBAGO_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("TRINIDAD_AND_TOBAGO_DOLLAR"), Currency.$ordinal_TRINIDAD_AND_TOBAGO_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "TTD", "Trinidad and Tobago Dollar", 2);
  Currency.$static_TUGRIK__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("TUGRIK"), Currency.$ordinal_TUGRIK__org_pepstock_charba_client_intl_enums_Currency, "MNT", "Tugrik", 2);
  Currency.$static_TUNISIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("TUNISIAN_DINAR"), Currency.$ordinal_TUNISIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency, "TND", "Tunisian Dinar", 3);
  Currency.$static_TURKISH_LIRA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("TURKISH_LIRA"), Currency.$ordinal_TURKISH_LIRA__org_pepstock_charba_client_intl_enums_Currency, "TRY", "Turkish Lira", 2);
  Currency.$static_TURKMENISTAN_NEW_MANAT__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("TURKMENISTAN_NEW_MANAT"), Currency.$ordinal_TURKMENISTAN_NEW_MANAT__org_pepstock_charba_client_intl_enums_Currency, "TMT", "Turkmenistan New Manat", 2);
  Currency.$static_UAE_DIRHAM__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("UAE_DIRHAM"), Currency.$ordinal_UAE_DIRHAM__org_pepstock_charba_client_intl_enums_Currency, "AED", "UAE Dirham", 2);
  Currency.$static_US_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("US_DOLLAR"), Currency.$ordinal_US_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "USD", "US Dollar", 2);
  Currency.$static_US_DOLLAR_NEXT_DAY__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("US_DOLLAR_NEXT_DAY"), Currency.$ordinal_US_DOLLAR_NEXT_DAY__org_pepstock_charba_client_intl_enums_Currency, "USN", "US Dollar (Next day)", 2);
  Currency.$static_UGANDA_SHILLING__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("UGANDA_SHILLING"), Currency.$ordinal_UGANDA_SHILLING__org_pepstock_charba_client_intl_enums_Currency, "UGX", "Uganda Shilling", 0);
  Currency.$static_UNIDAD_PREVISIONAL__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("UNIDAD_PREVISIONAL"), Currency.$ordinal_UNIDAD_PREVISIONAL__org_pepstock_charba_client_intl_enums_Currency, "UYW", "Unidad Previsional", 4);
  Currency.$static_UNIDAD_DE_FOMENTO__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("UNIDAD_DE_FOMENTO"), Currency.$ordinal_UNIDAD_DE_FOMENTO__org_pepstock_charba_client_intl_enums_Currency, "CLF", "Unidad de Fomento", 4);
  Currency.$static_UNIDAD_DE_VALOR_REAL__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("UNIDAD_DE_VALOR_REAL"), Currency.$ordinal_UNIDAD_DE_VALOR_REAL__org_pepstock_charba_client_intl_enums_Currency, "COU", "Unidad de Valor Real", 2);
  Currency.$static_URUGUAY_PESO_EN_UNIDADES_INDEXADAS__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("URUGUAY_PESO_EN_UNIDADES_INDEXADAS"), Currency.$ordinal_URUGUAY_PESO_EN_UNIDADES_INDEXADAS__org_pepstock_charba_client_intl_enums_Currency, "UYI", "Uruguay Peso en Unidades Indexadas (UI)", 0);
  Currency.$static_UZBEKISTAN_SUM__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("UZBEKISTAN_SUM"), Currency.$ordinal_UZBEKISTAN_SUM__org_pepstock_charba_client_intl_enums_Currency, "UZS", "Uzbekistan Sum", 2);
  Currency.$static_VATU__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("VATU"), Currency.$ordinal_VATU__org_pepstock_charba_client_intl_enums_Currency, "VUV", "Vatu", 0);
  Currency.$static_WIR_EURO__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("WIR_EURO"), Currency.$ordinal_WIR_EURO__org_pepstock_charba_client_intl_enums_Currency, "CHE", "WIR Euro", 2);
  Currency.$static_WIR_FRANC__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("WIR_FRANC"), Currency.$ordinal_WIR_FRANC__org_pepstock_charba_client_intl_enums_Currency, "CHW", "WIR Franc", 2);
  Currency.$static_WON__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("WON"), Currency.$ordinal_WON__org_pepstock_charba_client_intl_enums_Currency, "KRW", "Won", 0);
  Currency.$static_YEMENI_RIAL__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("YEMENI_RIAL"), Currency.$ordinal_YEMENI_RIAL__org_pepstock_charba_client_intl_enums_Currency, "YER", "Yemeni Rial", 2);
  Currency.$static_YEN__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("YEN"), Currency.$ordinal_YEN__org_pepstock_charba_client_intl_enums_Currency, "JPY", "Yen", 0);
  Currency.$static_YUAN_RENMINBI__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("YUAN_RENMINBI"), Currency.$ordinal_YUAN_RENMINBI__org_pepstock_charba_client_intl_enums_Currency, "CNY", "Yuan Renminbi", 2);
  Currency.$static_ZAMBIAN_KWACHA__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("ZAMBIAN_KWACHA"), Currency.$ordinal_ZAMBIAN_KWACHA__org_pepstock_charba_client_intl_enums_Currency, "ZMW", "Zambian Kwacha", 2);
  Currency.$static_ZIMBABWE_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("ZIMBABWE_DOLLAR"), Currency.$ordinal_ZIMBABWE_DOLLAR__org_pepstock_charba_client_intl_enums_Currency, "ZWL", "Zimbabwe Dollar", 2);
  Currency.$static_ZLOTY__org_pepstock_charba_client_intl_enums_Currency = Currency.$create__java_lang_String__int__java_lang_String__java_lang_String__int($Util.$makeEnumName("ZLOTY"), Currency.$ordinal_ZLOTY__org_pepstock_charba_client_intl_enums_Currency, "PLN", "Zloty", 2);
  Currency.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_Currency_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Currency;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Currency}*/
Currency.$static_ADB_UNIT_OF_ACCOUNT__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_AFGHANI__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_ALGERIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_ARGENTINE_PESO__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_ARMENIAN_DRAM__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_ARUBAN_FLORIN__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_AUSTRALIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_AZERBAIJAN_MANAT__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_BAHAMIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_BAHRAINI_DINAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_BAHT__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_BALBOA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_BARBADOS_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_BELARUSIAN_RUBLE__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_BELIZE_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_BERMUDIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_BOLIVIANO__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_BOLIVAR_SOBERANO__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_BOND_MARKETS_UNIT_EUROPEAN_COMPOSITE_UNIT__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_BOND_MARKETS_UNIT_EUROPEAN_MONETARY_UNIT__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_BOND_MARKETS_UNIT_EUROPEAN_UNIT_OF_ACCOUNT_17__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_BOND_MARKETS_UNIT_EUROPEAN_UNIT_OF_ACCOUNT_9__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_BRAZILIAN_REAL__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_BRUNEI_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_BULGARIAN_LEV__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_BURUNDI_FRANC__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_CFA_FRANC_BCEAO__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_CFA_FRANC_BEAC__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_CFP_FRANC__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_CABO_VERDE_ESCUDO__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_CANADIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_CAYMAN_ISLANDS_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_CHILEAN_PESO__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_CODES_SPECIFICALLY_RESERVED_FOR_TESTING_PURPOSES__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_COLOMBIAN_PESO__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_COMORIAN_FRANC__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_CONGOLESE_FRANC__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_CONVERTIBLE_MARK__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_CORDOBA_ORO__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_COSTA_RICAN_COLON__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_CUBAN_PESO__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_CZECH_KORUNA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_DALASI__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_DANISH_KRONE__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_DENAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_DJIBOUTI_FRANC__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_DOBRA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_DOMINICAN_PESO__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_DONG__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_EAST_CARIBBEAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_EGYPTIAN_POUND__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_EL_SALVADOR_COLON__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_ETHIOPIAN_BIRR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_EURO__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_FALKLAND_ISLANDS_POUND__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_FIJI_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_FORINT__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_GHANA_CEDI__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_GIBRALTAR_POUND__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_GOLD__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_GOURDE__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_GUARANI__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_GUINEAN_FRANC__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_GUYANA_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_HONG_KONG_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_HRYVNIA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_ICELAND_KRONA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_INDIAN_RUPEE__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_IRANIAN_RIAL__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_IRAQI_DINAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_JAMAICAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_JORDANIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_KENYAN_SHILLING__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_KINA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_KUNA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_KUWAITI_DINAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_KWANZA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_KYAT__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_LAO_KIP__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_LARI__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_LEBANESE_POUND__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_LEK__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_LEMPIRA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_LEONE__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_LIBERIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_LIBYAN_DINAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_LILANGENI__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_LOTI__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_MALAGASY_ARIARY__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_MALAWI_KWACHA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_MALAYSIAN_RINGGIT__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_MAURITIUS_RUPEE__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_MEXICAN_PESO__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_MEXICAN_UNIDAD_DE_INVERSION__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_MOLDOVAN_LEU__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_MOROCCAN_DIRHAM__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_MOZAMBIQUE_METICAL__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_MVDOL__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_NAIRA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_NAKFA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_NAMIBIA_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_NEPALESE_RUPEE__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_NETHERLANDS_ANTILLEAN_GUILDER__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_NEW_ISRAELI_SHEQEL__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_NEW_TAIWAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_NEW_ZEALAND_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_NGULTRUM__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_NORTH_KOREAN_WON__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_NORWEGIAN_KRONE__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_OUGUIYA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_PAKISTAN_RUPEE__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_PALLADIUM__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_PATACA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_PAANGA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_PESO_CONVERTIBLE__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_PESO_URUGUAYO__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_PHILIPPINE_PESO__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_PLATINUM__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_POUND_STERLING__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_PULA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_QATARI_RIAL__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_QUETZAL__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_RAND__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_RIAL_OMANI__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_RIEL__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_ROMANIAN_LEU__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_RUFIYAA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_RUPIAH__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_RUSSIAN_RUBLE__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_RWANDA_FRANC__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_SPECIAL_DRAWING_RIGHT__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_SAUDI_RIYAL__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_SERBIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_SEYCHELLES_RUPEE__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_SILVER__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_SINGAPORE_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_SOL__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_SOLOMON_ISLANDS_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_SOM__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_SOMALI_SHILLING__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_SOMONI__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_SOUTH_SUDANESE_POUND__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_SRI_LANKA_RUPEE__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_SUCRE__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_SUDANESE_POUND__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_SURINAM_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_SWEDISH_KRONA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_SWISS_FRANC__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_SYRIAN_POUND__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_TAKA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_TALA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_TENGE__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_THE_CODES_ASSIGNED_FOR_TRANSACTIONS_WHERE_NO_CURRENCY_IS_INVOLVED__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_TRINIDAD_AND_TOBAGO_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_TUGRIK__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_TUNISIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_TURKISH_LIRA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_TURKMENISTAN_NEW_MANAT__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_UAE_DIRHAM__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_US_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_US_DOLLAR_NEXT_DAY__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_UGANDA_SHILLING__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_UNIDAD_PREVISIONAL__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_UNIDAD_DE_FOMENTO__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_UNIDAD_DE_VALOR_REAL__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_URUGUAY_PESO_EN_UNIDADES_INDEXADAS__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_UZBEKISTAN_SUM__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_VATU__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_WIR_EURO__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_WIR_FRANC__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_WON__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_YEMENI_RIAL__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_YEN__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_YUAN_RENMINBI__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_ZAMBIAN_KWACHA__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_ZIMBABWE_DOLLAR__org_pepstock_charba_client_intl_enums_Currency;
/**@private {!Currency}*/
Currency.$static_ZLOTY__org_pepstock_charba_client_intl_enums_Currency;
/**@type {Map<?string, !Currency>}*/
Currency.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_Currency_;
/**@const {number}*/
Currency.$ordinal_ADB_UNIT_OF_ACCOUNT__org_pepstock_charba_client_intl_enums_Currency = 0;
/**@const {number}*/
Currency.$ordinal_AFGHANI__org_pepstock_charba_client_intl_enums_Currency = 1;
/**@const {number}*/
Currency.$ordinal_ALGERIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency = 2;
/**@const {number}*/
Currency.$ordinal_ARGENTINE_PESO__org_pepstock_charba_client_intl_enums_Currency = 3;
/**@const {number}*/
Currency.$ordinal_ARMENIAN_DRAM__org_pepstock_charba_client_intl_enums_Currency = 4;
/**@const {number}*/
Currency.$ordinal_ARUBAN_FLORIN__org_pepstock_charba_client_intl_enums_Currency = 5;
/**@const {number}*/
Currency.$ordinal_AUSTRALIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 6;
/**@const {number}*/
Currency.$ordinal_AZERBAIJAN_MANAT__org_pepstock_charba_client_intl_enums_Currency = 7;
/**@const {number}*/
Currency.$ordinal_BAHAMIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 8;
/**@const {number}*/
Currency.$ordinal_BAHRAINI_DINAR__org_pepstock_charba_client_intl_enums_Currency = 9;
/**@const {number}*/
Currency.$ordinal_BAHT__org_pepstock_charba_client_intl_enums_Currency = 10;
/**@const {number}*/
Currency.$ordinal_BALBOA__org_pepstock_charba_client_intl_enums_Currency = 11;
/**@const {number}*/
Currency.$ordinal_BARBADOS_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 12;
/**@const {number}*/
Currency.$ordinal_BELARUSIAN_RUBLE__org_pepstock_charba_client_intl_enums_Currency = 13;
/**@const {number}*/
Currency.$ordinal_BELIZE_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 14;
/**@const {number}*/
Currency.$ordinal_BERMUDIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 15;
/**@const {number}*/
Currency.$ordinal_BOLIVIANO__org_pepstock_charba_client_intl_enums_Currency = 16;
/**@const {number}*/
Currency.$ordinal_BOLIVAR_SOBERANO__org_pepstock_charba_client_intl_enums_Currency = 17;
/**@const {number}*/
Currency.$ordinal_BOND_MARKETS_UNIT_EUROPEAN_COMPOSITE_UNIT__org_pepstock_charba_client_intl_enums_Currency = 18;
/**@const {number}*/
Currency.$ordinal_BOND_MARKETS_UNIT_EUROPEAN_MONETARY_UNIT__org_pepstock_charba_client_intl_enums_Currency = 19;
/**@const {number}*/
Currency.$ordinal_BOND_MARKETS_UNIT_EUROPEAN_UNIT_OF_ACCOUNT_17__org_pepstock_charba_client_intl_enums_Currency = 20;
/**@const {number}*/
Currency.$ordinal_BOND_MARKETS_UNIT_EUROPEAN_UNIT_OF_ACCOUNT_9__org_pepstock_charba_client_intl_enums_Currency = 21;
/**@const {number}*/
Currency.$ordinal_BRAZILIAN_REAL__org_pepstock_charba_client_intl_enums_Currency = 22;
/**@const {number}*/
Currency.$ordinal_BRUNEI_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 23;
/**@const {number}*/
Currency.$ordinal_BULGARIAN_LEV__org_pepstock_charba_client_intl_enums_Currency = 24;
/**@const {number}*/
Currency.$ordinal_BURUNDI_FRANC__org_pepstock_charba_client_intl_enums_Currency = 25;
/**@const {number}*/
Currency.$ordinal_CFA_FRANC_BCEAO__org_pepstock_charba_client_intl_enums_Currency = 26;
/**@const {number}*/
Currency.$ordinal_CFA_FRANC_BEAC__org_pepstock_charba_client_intl_enums_Currency = 27;
/**@const {number}*/
Currency.$ordinal_CFP_FRANC__org_pepstock_charba_client_intl_enums_Currency = 28;
/**@const {number}*/
Currency.$ordinal_CABO_VERDE_ESCUDO__org_pepstock_charba_client_intl_enums_Currency = 29;
/**@const {number}*/
Currency.$ordinal_CANADIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 30;
/**@const {number}*/
Currency.$ordinal_CAYMAN_ISLANDS_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 31;
/**@const {number}*/
Currency.$ordinal_CHILEAN_PESO__org_pepstock_charba_client_intl_enums_Currency = 32;
/**@const {number}*/
Currency.$ordinal_CODES_SPECIFICALLY_RESERVED_FOR_TESTING_PURPOSES__org_pepstock_charba_client_intl_enums_Currency = 33;
/**@const {number}*/
Currency.$ordinal_COLOMBIAN_PESO__org_pepstock_charba_client_intl_enums_Currency = 34;
/**@const {number}*/
Currency.$ordinal_COMORIAN_FRANC__org_pepstock_charba_client_intl_enums_Currency = 35;
/**@const {number}*/
Currency.$ordinal_CONGOLESE_FRANC__org_pepstock_charba_client_intl_enums_Currency = 36;
/**@const {number}*/
Currency.$ordinal_CONVERTIBLE_MARK__org_pepstock_charba_client_intl_enums_Currency = 37;
/**@const {number}*/
Currency.$ordinal_CORDOBA_ORO__org_pepstock_charba_client_intl_enums_Currency = 38;
/**@const {number}*/
Currency.$ordinal_COSTA_RICAN_COLON__org_pepstock_charba_client_intl_enums_Currency = 39;
/**@const {number}*/
Currency.$ordinal_CUBAN_PESO__org_pepstock_charba_client_intl_enums_Currency = 40;
/**@const {number}*/
Currency.$ordinal_CZECH_KORUNA__org_pepstock_charba_client_intl_enums_Currency = 41;
/**@const {number}*/
Currency.$ordinal_DALASI__org_pepstock_charba_client_intl_enums_Currency = 42;
/**@const {number}*/
Currency.$ordinal_DANISH_KRONE__org_pepstock_charba_client_intl_enums_Currency = 43;
/**@const {number}*/
Currency.$ordinal_DENAR__org_pepstock_charba_client_intl_enums_Currency = 44;
/**@const {number}*/
Currency.$ordinal_DJIBOUTI_FRANC__org_pepstock_charba_client_intl_enums_Currency = 45;
/**@const {number}*/
Currency.$ordinal_DOBRA__org_pepstock_charba_client_intl_enums_Currency = 46;
/**@const {number}*/
Currency.$ordinal_DOMINICAN_PESO__org_pepstock_charba_client_intl_enums_Currency = 47;
/**@const {number}*/
Currency.$ordinal_DONG__org_pepstock_charba_client_intl_enums_Currency = 48;
/**@const {number}*/
Currency.$ordinal_EAST_CARIBBEAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 49;
/**@const {number}*/
Currency.$ordinal_EGYPTIAN_POUND__org_pepstock_charba_client_intl_enums_Currency = 50;
/**@const {number}*/
Currency.$ordinal_EL_SALVADOR_COLON__org_pepstock_charba_client_intl_enums_Currency = 51;
/**@const {number}*/
Currency.$ordinal_ETHIOPIAN_BIRR__org_pepstock_charba_client_intl_enums_Currency = 52;
/**@const {number}*/
Currency.$ordinal_EURO__org_pepstock_charba_client_intl_enums_Currency = 53;
/**@const {number}*/
Currency.$ordinal_FALKLAND_ISLANDS_POUND__org_pepstock_charba_client_intl_enums_Currency = 54;
/**@const {number}*/
Currency.$ordinal_FIJI_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 55;
/**@const {number}*/
Currency.$ordinal_FORINT__org_pepstock_charba_client_intl_enums_Currency = 56;
/**@const {number}*/
Currency.$ordinal_GHANA_CEDI__org_pepstock_charba_client_intl_enums_Currency = 57;
/**@const {number}*/
Currency.$ordinal_GIBRALTAR_POUND__org_pepstock_charba_client_intl_enums_Currency = 58;
/**@const {number}*/
Currency.$ordinal_GOLD__org_pepstock_charba_client_intl_enums_Currency = 59;
/**@const {number}*/
Currency.$ordinal_GOURDE__org_pepstock_charba_client_intl_enums_Currency = 60;
/**@const {number}*/
Currency.$ordinal_GUARANI__org_pepstock_charba_client_intl_enums_Currency = 61;
/**@const {number}*/
Currency.$ordinal_GUINEAN_FRANC__org_pepstock_charba_client_intl_enums_Currency = 62;
/**@const {number}*/
Currency.$ordinal_GUYANA_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 63;
/**@const {number}*/
Currency.$ordinal_HONG_KONG_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 64;
/**@const {number}*/
Currency.$ordinal_HRYVNIA__org_pepstock_charba_client_intl_enums_Currency = 65;
/**@const {number}*/
Currency.$ordinal_ICELAND_KRONA__org_pepstock_charba_client_intl_enums_Currency = 66;
/**@const {number}*/
Currency.$ordinal_INDIAN_RUPEE__org_pepstock_charba_client_intl_enums_Currency = 67;
/**@const {number}*/
Currency.$ordinal_IRANIAN_RIAL__org_pepstock_charba_client_intl_enums_Currency = 68;
/**@const {number}*/
Currency.$ordinal_IRAQI_DINAR__org_pepstock_charba_client_intl_enums_Currency = 69;
/**@const {number}*/
Currency.$ordinal_JAMAICAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 70;
/**@const {number}*/
Currency.$ordinal_JORDANIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency = 71;
/**@const {number}*/
Currency.$ordinal_KENYAN_SHILLING__org_pepstock_charba_client_intl_enums_Currency = 72;
/**@const {number}*/
Currency.$ordinal_KINA__org_pepstock_charba_client_intl_enums_Currency = 73;
/**@const {number}*/
Currency.$ordinal_KUNA__org_pepstock_charba_client_intl_enums_Currency = 74;
/**@const {number}*/
Currency.$ordinal_KUWAITI_DINAR__org_pepstock_charba_client_intl_enums_Currency = 75;
/**@const {number}*/
Currency.$ordinal_KWANZA__org_pepstock_charba_client_intl_enums_Currency = 76;
/**@const {number}*/
Currency.$ordinal_KYAT__org_pepstock_charba_client_intl_enums_Currency = 77;
/**@const {number}*/
Currency.$ordinal_LAO_KIP__org_pepstock_charba_client_intl_enums_Currency = 78;
/**@const {number}*/
Currency.$ordinal_LARI__org_pepstock_charba_client_intl_enums_Currency = 79;
/**@const {number}*/
Currency.$ordinal_LEBANESE_POUND__org_pepstock_charba_client_intl_enums_Currency = 80;
/**@const {number}*/
Currency.$ordinal_LEK__org_pepstock_charba_client_intl_enums_Currency = 81;
/**@const {number}*/
Currency.$ordinal_LEMPIRA__org_pepstock_charba_client_intl_enums_Currency = 82;
/**@const {number}*/
Currency.$ordinal_LEONE__org_pepstock_charba_client_intl_enums_Currency = 83;
/**@const {number}*/
Currency.$ordinal_LIBERIAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 84;
/**@const {number}*/
Currency.$ordinal_LIBYAN_DINAR__org_pepstock_charba_client_intl_enums_Currency = 85;
/**@const {number}*/
Currency.$ordinal_LILANGENI__org_pepstock_charba_client_intl_enums_Currency = 86;
/**@const {number}*/
Currency.$ordinal_LOTI__org_pepstock_charba_client_intl_enums_Currency = 87;
/**@const {number}*/
Currency.$ordinal_MALAGASY_ARIARY__org_pepstock_charba_client_intl_enums_Currency = 88;
/**@const {number}*/
Currency.$ordinal_MALAWI_KWACHA__org_pepstock_charba_client_intl_enums_Currency = 89;
/**@const {number}*/
Currency.$ordinal_MALAYSIAN_RINGGIT__org_pepstock_charba_client_intl_enums_Currency = 90;
/**@const {number}*/
Currency.$ordinal_MAURITIUS_RUPEE__org_pepstock_charba_client_intl_enums_Currency = 91;
/**@const {number}*/
Currency.$ordinal_MEXICAN_PESO__org_pepstock_charba_client_intl_enums_Currency = 92;
/**@const {number}*/
Currency.$ordinal_MEXICAN_UNIDAD_DE_INVERSION__org_pepstock_charba_client_intl_enums_Currency = 93;
/**@const {number}*/
Currency.$ordinal_MOLDOVAN_LEU__org_pepstock_charba_client_intl_enums_Currency = 94;
/**@const {number}*/
Currency.$ordinal_MOROCCAN_DIRHAM__org_pepstock_charba_client_intl_enums_Currency = 95;
/**@const {number}*/
Currency.$ordinal_MOZAMBIQUE_METICAL__org_pepstock_charba_client_intl_enums_Currency = 96;
/**@const {number}*/
Currency.$ordinal_MVDOL__org_pepstock_charba_client_intl_enums_Currency = 97;
/**@const {number}*/
Currency.$ordinal_NAIRA__org_pepstock_charba_client_intl_enums_Currency = 98;
/**@const {number}*/
Currency.$ordinal_NAKFA__org_pepstock_charba_client_intl_enums_Currency = 99;
/**@const {number}*/
Currency.$ordinal_NAMIBIA_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 100;
/**@const {number}*/
Currency.$ordinal_NEPALESE_RUPEE__org_pepstock_charba_client_intl_enums_Currency = 101;
/**@const {number}*/
Currency.$ordinal_NETHERLANDS_ANTILLEAN_GUILDER__org_pepstock_charba_client_intl_enums_Currency = 102;
/**@const {number}*/
Currency.$ordinal_NEW_ISRAELI_SHEQEL__org_pepstock_charba_client_intl_enums_Currency = 103;
/**@const {number}*/
Currency.$ordinal_NEW_TAIWAN_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 104;
/**@const {number}*/
Currency.$ordinal_NEW_ZEALAND_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 105;
/**@const {number}*/
Currency.$ordinal_NGULTRUM__org_pepstock_charba_client_intl_enums_Currency = 106;
/**@const {number}*/
Currency.$ordinal_NORTH_KOREAN_WON__org_pepstock_charba_client_intl_enums_Currency = 107;
/**@const {number}*/
Currency.$ordinal_NORWEGIAN_KRONE__org_pepstock_charba_client_intl_enums_Currency = 108;
/**@const {number}*/
Currency.$ordinal_OUGUIYA__org_pepstock_charba_client_intl_enums_Currency = 109;
/**@const {number}*/
Currency.$ordinal_PAKISTAN_RUPEE__org_pepstock_charba_client_intl_enums_Currency = 110;
/**@const {number}*/
Currency.$ordinal_PALLADIUM__org_pepstock_charba_client_intl_enums_Currency = 111;
/**@const {number}*/
Currency.$ordinal_PATACA__org_pepstock_charba_client_intl_enums_Currency = 112;
/**@const {number}*/
Currency.$ordinal_PAANGA__org_pepstock_charba_client_intl_enums_Currency = 113;
/**@const {number}*/
Currency.$ordinal_PESO_CONVERTIBLE__org_pepstock_charba_client_intl_enums_Currency = 114;
/**@const {number}*/
Currency.$ordinal_PESO_URUGUAYO__org_pepstock_charba_client_intl_enums_Currency = 115;
/**@const {number}*/
Currency.$ordinal_PHILIPPINE_PESO__org_pepstock_charba_client_intl_enums_Currency = 116;
/**@const {number}*/
Currency.$ordinal_PLATINUM__org_pepstock_charba_client_intl_enums_Currency = 117;
/**@const {number}*/
Currency.$ordinal_POUND_STERLING__org_pepstock_charba_client_intl_enums_Currency = 118;
/**@const {number}*/
Currency.$ordinal_PULA__org_pepstock_charba_client_intl_enums_Currency = 119;
/**@const {number}*/
Currency.$ordinal_QATARI_RIAL__org_pepstock_charba_client_intl_enums_Currency = 120;
/**@const {number}*/
Currency.$ordinal_QUETZAL__org_pepstock_charba_client_intl_enums_Currency = 121;
/**@const {number}*/
Currency.$ordinal_RAND__org_pepstock_charba_client_intl_enums_Currency = 122;
/**@const {number}*/
Currency.$ordinal_RIAL_OMANI__org_pepstock_charba_client_intl_enums_Currency = 123;
/**@const {number}*/
Currency.$ordinal_RIEL__org_pepstock_charba_client_intl_enums_Currency = 124;
/**@const {number}*/
Currency.$ordinal_ROMANIAN_LEU__org_pepstock_charba_client_intl_enums_Currency = 125;
/**@const {number}*/
Currency.$ordinal_RUFIYAA__org_pepstock_charba_client_intl_enums_Currency = 126;
/**@const {number}*/
Currency.$ordinal_RUPIAH__org_pepstock_charba_client_intl_enums_Currency = 127;
/**@const {number}*/
Currency.$ordinal_RUSSIAN_RUBLE__org_pepstock_charba_client_intl_enums_Currency = 128;
/**@const {number}*/
Currency.$ordinal_RWANDA_FRANC__org_pepstock_charba_client_intl_enums_Currency = 129;
/**@const {number}*/
Currency.$ordinal_SPECIAL_DRAWING_RIGHT__org_pepstock_charba_client_intl_enums_Currency = 130;
/**@const {number}*/
Currency.$ordinal_SAUDI_RIYAL__org_pepstock_charba_client_intl_enums_Currency = 131;
/**@const {number}*/
Currency.$ordinal_SERBIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency = 132;
/**@const {number}*/
Currency.$ordinal_SEYCHELLES_RUPEE__org_pepstock_charba_client_intl_enums_Currency = 133;
/**@const {number}*/
Currency.$ordinal_SILVER__org_pepstock_charba_client_intl_enums_Currency = 134;
/**@const {number}*/
Currency.$ordinal_SINGAPORE_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 135;
/**@const {number}*/
Currency.$ordinal_SOL__org_pepstock_charba_client_intl_enums_Currency = 136;
/**@const {number}*/
Currency.$ordinal_SOLOMON_ISLANDS_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 137;
/**@const {number}*/
Currency.$ordinal_SOM__org_pepstock_charba_client_intl_enums_Currency = 138;
/**@const {number}*/
Currency.$ordinal_SOMALI_SHILLING__org_pepstock_charba_client_intl_enums_Currency = 139;
/**@const {number}*/
Currency.$ordinal_SOMONI__org_pepstock_charba_client_intl_enums_Currency = 140;
/**@const {number}*/
Currency.$ordinal_SOUTH_SUDANESE_POUND__org_pepstock_charba_client_intl_enums_Currency = 141;
/**@const {number}*/
Currency.$ordinal_SRI_LANKA_RUPEE__org_pepstock_charba_client_intl_enums_Currency = 142;
/**@const {number}*/
Currency.$ordinal_SUCRE__org_pepstock_charba_client_intl_enums_Currency = 143;
/**@const {number}*/
Currency.$ordinal_SUDANESE_POUND__org_pepstock_charba_client_intl_enums_Currency = 144;
/**@const {number}*/
Currency.$ordinal_SURINAM_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 145;
/**@const {number}*/
Currency.$ordinal_SWEDISH_KRONA__org_pepstock_charba_client_intl_enums_Currency = 146;
/**@const {number}*/
Currency.$ordinal_SWISS_FRANC__org_pepstock_charba_client_intl_enums_Currency = 147;
/**@const {number}*/
Currency.$ordinal_SYRIAN_POUND__org_pepstock_charba_client_intl_enums_Currency = 148;
/**@const {number}*/
Currency.$ordinal_TAKA__org_pepstock_charba_client_intl_enums_Currency = 149;
/**@const {number}*/
Currency.$ordinal_TALA__org_pepstock_charba_client_intl_enums_Currency = 150;
/**@const {number}*/
Currency.$ordinal_TENGE__org_pepstock_charba_client_intl_enums_Currency = 151;
/**@const {number}*/
Currency.$ordinal_THE_CODES_ASSIGNED_FOR_TRANSACTIONS_WHERE_NO_CURRENCY_IS_INVOLVED__org_pepstock_charba_client_intl_enums_Currency = 152;
/**@const {number}*/
Currency.$ordinal_TRINIDAD_AND_TOBAGO_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 153;
/**@const {number}*/
Currency.$ordinal_TUGRIK__org_pepstock_charba_client_intl_enums_Currency = 154;
/**@const {number}*/
Currency.$ordinal_TUNISIAN_DINAR__org_pepstock_charba_client_intl_enums_Currency = 155;
/**@const {number}*/
Currency.$ordinal_TURKISH_LIRA__org_pepstock_charba_client_intl_enums_Currency = 156;
/**@const {number}*/
Currency.$ordinal_TURKMENISTAN_NEW_MANAT__org_pepstock_charba_client_intl_enums_Currency = 157;
/**@const {number}*/
Currency.$ordinal_UAE_DIRHAM__org_pepstock_charba_client_intl_enums_Currency = 158;
/**@const {number}*/
Currency.$ordinal_US_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 159;
/**@const {number}*/
Currency.$ordinal_US_DOLLAR_NEXT_DAY__org_pepstock_charba_client_intl_enums_Currency = 160;
/**@const {number}*/
Currency.$ordinal_UGANDA_SHILLING__org_pepstock_charba_client_intl_enums_Currency = 161;
/**@const {number}*/
Currency.$ordinal_UNIDAD_PREVISIONAL__org_pepstock_charba_client_intl_enums_Currency = 162;
/**@const {number}*/
Currency.$ordinal_UNIDAD_DE_FOMENTO__org_pepstock_charba_client_intl_enums_Currency = 163;
/**@const {number}*/
Currency.$ordinal_UNIDAD_DE_VALOR_REAL__org_pepstock_charba_client_intl_enums_Currency = 164;
/**@const {number}*/
Currency.$ordinal_URUGUAY_PESO_EN_UNIDADES_INDEXADAS__org_pepstock_charba_client_intl_enums_Currency = 165;
/**@const {number}*/
Currency.$ordinal_UZBEKISTAN_SUM__org_pepstock_charba_client_intl_enums_Currency = 166;
/**@const {number}*/
Currency.$ordinal_VATU__org_pepstock_charba_client_intl_enums_Currency = 167;
/**@const {number}*/
Currency.$ordinal_WIR_EURO__org_pepstock_charba_client_intl_enums_Currency = 168;
/**@const {number}*/
Currency.$ordinal_WIR_FRANC__org_pepstock_charba_client_intl_enums_Currency = 169;
/**@const {number}*/
Currency.$ordinal_WON__org_pepstock_charba_client_intl_enums_Currency = 170;
/**@const {number}*/
Currency.$ordinal_YEMENI_RIAL__org_pepstock_charba_client_intl_enums_Currency = 171;
/**@const {number}*/
Currency.$ordinal_YEN__org_pepstock_charba_client_intl_enums_Currency = 172;
/**@const {number}*/
Currency.$ordinal_YUAN_RENMINBI__org_pepstock_charba_client_intl_enums_Currency = 173;
/**@const {number}*/
Currency.$ordinal_ZAMBIAN_KWACHA__org_pepstock_charba_client_intl_enums_Currency = 174;
/**@const {number}*/
Currency.$ordinal_ZIMBABWE_DOLLAR__org_pepstock_charba_client_intl_enums_Currency = 175;
/**@const {number}*/
Currency.$ordinal_ZLOTY__org_pepstock_charba_client_intl_enums_Currency = 176;
IsLocaleItem.$markImplementor(Currency);
$Util.$setClassMetadataForEnum(Currency, "org.pepstock.charba.client.intl.enums.Currency");

exports = Currency;

//# sourceMappingURL=Currency.js.map
