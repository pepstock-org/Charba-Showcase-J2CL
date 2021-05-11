goog.module('org.pepstock.charba.client.intl.Region$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsLocaleItem = goog.require('org.pepstock.charba.client.intl.IsLocaleItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Region>}
 * @implements {IsLocaleItem}
 */
class Region extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_Region_;
  /**@type {?string}*/
  this.f_name__org_pepstock_charba_client_intl_Region_;
 }
 /** @return {!Region} */
 static $create__java_lang_String__int__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ?string */ name) {
  let $instance = new Region();
  $instance.$ctor__org_pepstock_charba_client_intl_Region__java_lang_String__int__java_lang_String__java_lang_String($name, $ordinal, value, name);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_Region__java_lang_String__int__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ?string */ name) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_Region_ = value;
  this.f_name__org_pepstock_charba_client_intl_Region_ = name;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_Region_;
 }
 /** @override @return {?string} */
 m_getName__() {
  return this.f_name__org_pepstock_charba_client_intl_Region_;
 }
 /** @return {!Region} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Region.$clinit();
  if ($Equality.$same(Region.f_namesToValuesMap__org_pepstock_charba_client_intl_Region_, null)) {
   Region.f_namesToValuesMap__org_pepstock_charba_client_intl_Region_ = $Enums.createMapFromValues(Region.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Region.f_namesToValuesMap__org_pepstock_charba_client_intl_Region_);
 }
 /** @return {!Array<!Region>} */
 static m_values__() {
  Region.$clinit();
  return /**@type {!Array<Region>}*/ ($Arrays.$init([Region.$static_AFGHANISTAN__org_pepstock_charba_client_intl_Region, Region.$static_ALBANIA__org_pepstock_charba_client_intl_Region, Region.$static_ALGERIA__org_pepstock_charba_client_intl_Region, Region.$static_AMERICAN_SAMOA__org_pepstock_charba_client_intl_Region, Region.$static_ANDORRA__org_pepstock_charba_client_intl_Region, Region.$static_ANGOLA__org_pepstock_charba_client_intl_Region, Region.$static_ANGUILLA__org_pepstock_charba_client_intl_Region, Region.$static_ANTARCTICA__org_pepstock_charba_client_intl_Region, Region.$static_ANTIGUA_AND_BARBUDA__org_pepstock_charba_client_intl_Region, Region.$static_ARGENTINA__org_pepstock_charba_client_intl_Region, Region.$static_ARMENIA__org_pepstock_charba_client_intl_Region, Region.$static_ARUBA__org_pepstock_charba_client_intl_Region, Region.$static_AUSTRALIA__org_pepstock_charba_client_intl_Region, Region.$static_AUSTRIA__org_pepstock_charba_client_intl_Region, Region.$static_AZERBAIJAN__org_pepstock_charba_client_intl_Region, Region.$static_BAHRAIN__org_pepstock_charba_client_intl_Region, Region.$static_BAILIWICK_OF_GUERNSEY__org_pepstock_charba_client_intl_Region, Region.$static_BANGLADESH__org_pepstock_charba_client_intl_Region, Region.$static_BARBADOS__org_pepstock_charba_client_intl_Region, Region.$static_BELARUS__org_pepstock_charba_client_intl_Region, Region.$static_BELGIUM__org_pepstock_charba_client_intl_Region, Region.$static_BELIZE__org_pepstock_charba_client_intl_Region, Region.$static_BENIN__org_pepstock_charba_client_intl_Region, Region.$static_BERMUDA__org_pepstock_charba_client_intl_Region, Region.$static_BHUTAN__org_pepstock_charba_client_intl_Region, Region.$static_BOLIVIA__org_pepstock_charba_client_intl_Region, Region.$static_BOSNIA_AND_HERZEGOVINA__org_pepstock_charba_client_intl_Region, Region.$static_BOTSWANA__org_pepstock_charba_client_intl_Region, Region.$static_BOUVET_ISLAND__org_pepstock_charba_client_intl_Region, Region.$static_BRAZIL__org_pepstock_charba_client_intl_Region, Region.$static_BRITISH_INDIAN_OCEAN_TERRITORY__org_pepstock_charba_client_intl_Region, Region.$static_BRITISH_VIRGIN_ISLANDS__org_pepstock_charba_client_intl_Region, Region.$static_BRUNEI__org_pepstock_charba_client_intl_Region, Region.$static_BULGARIA__org_pepstock_charba_client_intl_Region, Region.$static_BURKINA_FASO__org_pepstock_charba_client_intl_Region, Region.$static_BURUNDI__org_pepstock_charba_client_intl_Region, Region.$static_CABO_VERDE__org_pepstock_charba_client_intl_Region, Region.$static_CAMBODIA__org_pepstock_charba_client_intl_Region, Region.$static_CAMEROON__org_pepstock_charba_client_intl_Region, Region.$static_CANADA__org_pepstock_charba_client_intl_Region, Region.$static_CARIBBEAN_NETHERLANDS__org_pepstock_charba_client_intl_Region, Region.$static_CAYMAN_ISLANDS__org_pepstock_charba_client_intl_Region, Region.$static_CENTRAL_AFRICAN_REPUBLIC__org_pepstock_charba_client_intl_Region, Region.$static_CHAD__org_pepstock_charba_client_intl_Region, Region.$static_CHILE__org_pepstock_charba_client_intl_Region, Region.$static_CHINA__org_pepstock_charba_client_intl_Region, Region.$static_CHRISTMAS_ISLAND__org_pepstock_charba_client_intl_Region, Region.$static_COCOS_KEELING_ISLANDS__org_pepstock_charba_client_intl_Region, Region.$static_COLLECTIVITY_OF_SAINT_MARTIN__org_pepstock_charba_client_intl_Region, Region.$static_COLOMBIA__org_pepstock_charba_client_intl_Region, Region.$static_COMOROS__org_pepstock_charba_client_intl_Region, Region.$static_COOK_ISLANDS__org_pepstock_charba_client_intl_Region, Region.$static_COSTA_RICA__org_pepstock_charba_client_intl_Region, Region.$static_CROATIA__org_pepstock_charba_client_intl_Region, Region.$static_CUBA__org_pepstock_charba_client_intl_Region, Region.$static_CURACAO__org_pepstock_charba_client_intl_Region, Region.$static_CYPRUS__org_pepstock_charba_client_intl_Region, Region.$static_CZECH_REPUBLIC__org_pepstock_charba_client_intl_Region, Region.$static_DEMOCRATIC_REPUBLIC_OF_THE_CONGO__org_pepstock_charba_client_intl_Region, Region.$static_DENMARK__org_pepstock_charba_client_intl_Region, Region.$static_DJIBOUTI__org_pepstock_charba_client_intl_Region, Region.$static_DOMINICA__org_pepstock_charba_client_intl_Region, Region.$static_DOMINICAN_REPUBLIC__org_pepstock_charba_client_intl_Region, Region.$static_EAST_TIMOR__org_pepstock_charba_client_intl_Region, Region.$static_ECUADOR__org_pepstock_charba_client_intl_Region, Region.$static_EGYPT__org_pepstock_charba_client_intl_Region, Region.$static_EL_SALVADOR__org_pepstock_charba_client_intl_Region, Region.$static_EQUATORIAL_GUINEA__org_pepstock_charba_client_intl_Region, Region.$static_ERITREA__org_pepstock_charba_client_intl_Region, Region.$static_ESTONIA__org_pepstock_charba_client_intl_Region, Region.$static_ESWATINI__org_pepstock_charba_client_intl_Region, Region.$static_ETHIOPIA__org_pepstock_charba_client_intl_Region, Region.$static_FALKLAND_ISLANDS__org_pepstock_charba_client_intl_Region, Region.$static_FAROE_ISLANDS__org_pepstock_charba_client_intl_Region, Region.$static_FEDERATED_STATES_OF_MICRONESIA__org_pepstock_charba_client_intl_Region, Region.$static_FIJI__org_pepstock_charba_client_intl_Region, Region.$static_FINLAND__org_pepstock_charba_client_intl_Region, Region.$static_FRANCE__org_pepstock_charba_client_intl_Region, Region.$static_FRENCH_GUIANA__org_pepstock_charba_client_intl_Region, Region.$static_FRENCH_POLYNESIA__org_pepstock_charba_client_intl_Region, Region.$static_FRENCH_SOUTHERN_AND_ANTARCTIC_LANDS__org_pepstock_charba_client_intl_Region, Region.$static_GABON__org_pepstock_charba_client_intl_Region, Region.$static_GEORGIA__org_pepstock_charba_client_intl_Region, Region.$static_GERMANY__org_pepstock_charba_client_intl_Region, Region.$static_GHANA__org_pepstock_charba_client_intl_Region, Region.$static_GIBRALTAR__org_pepstock_charba_client_intl_Region, Region.$static_GREECE__org_pepstock_charba_client_intl_Region, Region.$static_GREENLAND__org_pepstock_charba_client_intl_Region, Region.$static_GRENADA__org_pepstock_charba_client_intl_Region, Region.$static_GUADELOUPE__org_pepstock_charba_client_intl_Region, Region.$static_GUAM__org_pepstock_charba_client_intl_Region, Region.$static_GUATEMALA__org_pepstock_charba_client_intl_Region, Region.$static_GUINEA__org_pepstock_charba_client_intl_Region, Region.$static_GUINEA_BISSAU__org_pepstock_charba_client_intl_Region, Region.$static_GUYANA__org_pepstock_charba_client_intl_Region, Region.$static_HAITI__org_pepstock_charba_client_intl_Region, Region.$static_HEARD_ISLAND_AND_MCDONALD_ISLANDS__org_pepstock_charba_client_intl_Region, Region.$static_HONDURAS__org_pepstock_charba_client_intl_Region, Region.$static_HONG_KONG__org_pepstock_charba_client_intl_Region, Region.$static_HUNGARY__org_pepstock_charba_client_intl_Region, Region.$static_ICELAND__org_pepstock_charba_client_intl_Region, Region.$static_INDIA__org_pepstock_charba_client_intl_Region, Region.$static_INDONESIA__org_pepstock_charba_client_intl_Region, Region.$static_IRAN__org_pepstock_charba_client_intl_Region, Region.$static_IRAQ__org_pepstock_charba_client_intl_Region, Region.$static_ISLE_OF_MAN__org_pepstock_charba_client_intl_Region, Region.$static_ISRAEL__org_pepstock_charba_client_intl_Region, Region.$static_ITALY__org_pepstock_charba_client_intl_Region, Region.$static_IVORY_COAST__org_pepstock_charba_client_intl_Region, Region.$static_JAMAICA__org_pepstock_charba_client_intl_Region, Region.$static_JAPAN__org_pepstock_charba_client_intl_Region, Region.$static_JERSEY__org_pepstock_charba_client_intl_Region, Region.$static_JORDAN__org_pepstock_charba_client_intl_Region, Region.$static_KAZAKHSTAN__org_pepstock_charba_client_intl_Region, Region.$static_KENYA__org_pepstock_charba_client_intl_Region, Region.$static_KINGDOM_OF_THE_NETHERLANDS__org_pepstock_charba_client_intl_Region, Region.$static_KIRIBATI__org_pepstock_charba_client_intl_Region, Region.$static_KUWAIT__org_pepstock_charba_client_intl_Region, Region.$static_KYRGYZSTAN__org_pepstock_charba_client_intl_Region, Region.$static_LAOS__org_pepstock_charba_client_intl_Region, Region.$static_LATVIA__org_pepstock_charba_client_intl_Region, Region.$static_LEBANON__org_pepstock_charba_client_intl_Region, Region.$static_LESOTHO__org_pepstock_charba_client_intl_Region, Region.$static_LIBERIA__org_pepstock_charba_client_intl_Region, Region.$static_LIBYA__org_pepstock_charba_client_intl_Region, Region.$static_LIECHTENSTEIN__org_pepstock_charba_client_intl_Region, Region.$static_LITHUANIA__org_pepstock_charba_client_intl_Region, Region.$static_LUXEMBOURG__org_pepstock_charba_client_intl_Region, Region.$static_MACAU__org_pepstock_charba_client_intl_Region, Region.$static_MADAGASCAR__org_pepstock_charba_client_intl_Region, Region.$static_MALAWI__org_pepstock_charba_client_intl_Region, Region.$static_MALAYSIA__org_pepstock_charba_client_intl_Region, Region.$static_MALDIVES__org_pepstock_charba_client_intl_Region, Region.$static_MALI__org_pepstock_charba_client_intl_Region, Region.$static_MALTA__org_pepstock_charba_client_intl_Region, Region.$static_MARSHALL_ISLANDS__org_pepstock_charba_client_intl_Region, Region.$static_MARTINIQUE__org_pepstock_charba_client_intl_Region, Region.$static_MAURITANIA__org_pepstock_charba_client_intl_Region, Region.$static_MAURITIUS__org_pepstock_charba_client_intl_Region, Region.$static_MAYOTTE__org_pepstock_charba_client_intl_Region, Region.$static_MEXICO__org_pepstock_charba_client_intl_Region, Region.$static_MOLDOVA__org_pepstock_charba_client_intl_Region, Region.$static_MONACO__org_pepstock_charba_client_intl_Region, Region.$static_MONGOLIA__org_pepstock_charba_client_intl_Region, Region.$static_MONTENEGRO__org_pepstock_charba_client_intl_Region, Region.$static_MONTSERRAT__org_pepstock_charba_client_intl_Region, Region.$static_MOROCCO__org_pepstock_charba_client_intl_Region, Region.$static_MOZAMBIQUE__org_pepstock_charba_client_intl_Region, Region.$static_MYANMAR__org_pepstock_charba_client_intl_Region, Region.$static_NAMIBIA__org_pepstock_charba_client_intl_Region, Region.$static_NAURU__org_pepstock_charba_client_intl_Region, Region.$static_NEPAL__org_pepstock_charba_client_intl_Region, Region.$static_NEW_CALEDONIA__org_pepstock_charba_client_intl_Region, Region.$static_NEW_ZEALAND__org_pepstock_charba_client_intl_Region, Region.$static_NICARAGUA__org_pepstock_charba_client_intl_Region, Region.$static_NIGER__org_pepstock_charba_client_intl_Region, Region.$static_NIGERIA__org_pepstock_charba_client_intl_Region, Region.$static_NIUE__org_pepstock_charba_client_intl_Region, Region.$static_NORFOLK_ISLAND__org_pepstock_charba_client_intl_Region, Region.$static_NORTH_KOREA__org_pepstock_charba_client_intl_Region, Region.$static_NORTH_MACEDONIA__org_pepstock_charba_client_intl_Region, Region.$static_NORTHERN_MARIANA_ISLANDS__org_pepstock_charba_client_intl_Region, Region.$static_NORWAY__org_pepstock_charba_client_intl_Region, Region.$static_OMAN__org_pepstock_charba_client_intl_Region, Region.$static_PAKISTAN__org_pepstock_charba_client_intl_Region, Region.$static_PALAU__org_pepstock_charba_client_intl_Region, Region.$static_PANAMA__org_pepstock_charba_client_intl_Region, Region.$static_PAPUA_NEW_GUINEA__org_pepstock_charba_client_intl_Region, Region.$static_PARAGUAY__org_pepstock_charba_client_intl_Region, Region.$static_PERU__org_pepstock_charba_client_intl_Region, Region.$static_PHILIPPINES__org_pepstock_charba_client_intl_Region, Region.$static_PITCAIRN_ISLANDS__org_pepstock_charba_client_intl_Region, Region.$static_POLAND__org_pepstock_charba_client_intl_Region, Region.$static_PORTUGAL__org_pepstock_charba_client_intl_Region, Region.$static_PUERTO_RICO__org_pepstock_charba_client_intl_Region, Region.$static_QATAR__org_pepstock_charba_client_intl_Region, Region.$static_REPUBLIC_OF_IRELAND__org_pepstock_charba_client_intl_Region, Region.$static_REPUBLIC_OF_THE_CONGO__org_pepstock_charba_client_intl_Region, Region.$static_ROMANIA__org_pepstock_charba_client_intl_Region, Region.$static_RUSSIA__org_pepstock_charba_client_intl_Region, Region.$static_RWANDA__org_pepstock_charba_client_intl_Region, Region.$static_REUNION__org_pepstock_charba_client_intl_Region, Region.$static_SAINT_BARTHELEMY__org_pepstock_charba_client_intl_Region, Region.$static_SAINT_HELENA__org_pepstock_charba_client_intl_Region, Region.$static_SAINT_KITTS_AND_NEVIS__org_pepstock_charba_client_intl_Region, Region.$static_SAINT_LUCIA__org_pepstock_charba_client_intl_Region, Region.$static_SAINT_PIERRE_AND_MIQUELON__org_pepstock_charba_client_intl_Region, Region.$static_SAINT_VINCENT_AND_THE_GRENADINES__org_pepstock_charba_client_intl_Region, Region.$static_SAMOA__org_pepstock_charba_client_intl_Region, Region.$static_SAN_MARINO__org_pepstock_charba_client_intl_Region, Region.$static_SAUDI_ARABIA__org_pepstock_charba_client_intl_Region, Region.$static_SENEGAL__org_pepstock_charba_client_intl_Region, Region.$static_SERBIA__org_pepstock_charba_client_intl_Region, Region.$static_SEYCHELLES__org_pepstock_charba_client_intl_Region, Region.$static_SIERRA_LEONE__org_pepstock_charba_client_intl_Region, Region.$static_SINGAPORE__org_pepstock_charba_client_intl_Region, Region.$static_SINT_MAARTEN__org_pepstock_charba_client_intl_Region, Region.$static_SLOVAKIA__org_pepstock_charba_client_intl_Region, Region.$static_SLOVENIA__org_pepstock_charba_client_intl_Region, Region.$static_SOLOMON_ISLANDS__org_pepstock_charba_client_intl_Region, Region.$static_SOMALIA__org_pepstock_charba_client_intl_Region, Region.$static_SOUTH_AFRICA__org_pepstock_charba_client_intl_Region, Region.$static_SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS__org_pepstock_charba_client_intl_Region, Region.$static_SOUTH_KOREA__org_pepstock_charba_client_intl_Region, Region.$static_SOUTH_SUDAN__org_pepstock_charba_client_intl_Region, Region.$static_SPAIN__org_pepstock_charba_client_intl_Region, Region.$static_SRI_LANKA__org_pepstock_charba_client_intl_Region, Region.$static_STATE_OF_PALESTINE__org_pepstock_charba_client_intl_Region, Region.$static_SUDAN__org_pepstock_charba_client_intl_Region, Region.$static_SURINAME__org_pepstock_charba_client_intl_Region, Region.$static_SVALBARD_AND_JAN_MAYEN__org_pepstock_charba_client_intl_Region, Region.$static_SWEDEN__org_pepstock_charba_client_intl_Region, Region.$static_SWITZERLAND__org_pepstock_charba_client_intl_Region, Region.$static_SYRIA__org_pepstock_charba_client_intl_Region, Region.$static_SAO_TOME_AND_PRINCIPE__org_pepstock_charba_client_intl_Region, Region.$static_TAIWAN__org_pepstock_charba_client_intl_Region, Region.$static_TAJIKISTAN__org_pepstock_charba_client_intl_Region, Region.$static_TANZANIA__org_pepstock_charba_client_intl_Region, Region.$static_THAILAND__org_pepstock_charba_client_intl_Region, Region.$static_BAHAMAS__org_pepstock_charba_client_intl_Region, Region.$static_GAMBIA__org_pepstock_charba_client_intl_Region, Region.$static_TOGO__org_pepstock_charba_client_intl_Region, Region.$static_TOKELAU__org_pepstock_charba_client_intl_Region, Region.$static_TONGA__org_pepstock_charba_client_intl_Region, Region.$static_TRINIDAD_AND_TOBAGO__org_pepstock_charba_client_intl_Region, Region.$static_TUNISIA__org_pepstock_charba_client_intl_Region, Region.$static_TURKEY__org_pepstock_charba_client_intl_Region, Region.$static_TURKMENISTAN__org_pepstock_charba_client_intl_Region, Region.$static_TURKS_AND_CAICOS_ISLANDS__org_pepstock_charba_client_intl_Region, Region.$static_TUVALU__org_pepstock_charba_client_intl_Region, Region.$static_UGANDA__org_pepstock_charba_client_intl_Region, Region.$static_UKRAINE__org_pepstock_charba_client_intl_Region, Region.$static_UNITED_ARAB_EMIRATES__org_pepstock_charba_client_intl_Region, Region.$static_UNITED_KINGDOM__org_pepstock_charba_client_intl_Region, Region.$static_UNITED_STATES__org_pepstock_charba_client_intl_Region, Region.$static_UNITED_STATES_MINOR_OUTLYING_ISLANDS__org_pepstock_charba_client_intl_Region, Region.$static_UNITED_STATES_VIRGIN_ISLANDS__org_pepstock_charba_client_intl_Region, Region.$static_URUGUAY__org_pepstock_charba_client_intl_Region, Region.$static_UZBEKISTAN__org_pepstock_charba_client_intl_Region, Region.$static_VANUATU__org_pepstock_charba_client_intl_Region, Region.$static_VATICAN_CITY__org_pepstock_charba_client_intl_Region, Region.$static_VENEZUELA__org_pepstock_charba_client_intl_Region, Region.$static_VIETNAM__org_pepstock_charba_client_intl_Region, Region.$static_WALLIS_AND_FUTUNA__org_pepstock_charba_client_intl_Region, Region.$static_WESTERN_SAHARA__org_pepstock_charba_client_intl_Region, Region.$static_YEMEN__org_pepstock_charba_client_intl_Region, Region.$static_ZAMBIA__org_pepstock_charba_client_intl_Region, Region.$static_ZIMBABWE__org_pepstock_charba_client_intl_Region, Region.$static_ALAND_ISLANDS__org_pepstock_charba_client_intl_Region], Region));
 }
 /** @return {!Region} */
 static get f_AFGHANISTAN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_AFGHANISTAN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ALBANIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ALBANIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ALGERIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ALGERIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_AMERICAN_SAMOA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_AMERICAN_SAMOA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ANDORRA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ANDORRA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ANGOLA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ANGOLA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ANGUILLA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ANGUILLA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ANTARCTICA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ANTARCTICA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ANTIGUA_AND_BARBUDA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ANTIGUA_AND_BARBUDA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ARGENTINA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ARGENTINA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ARMENIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ARMENIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ARUBA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ARUBA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_AUSTRALIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_AUSTRALIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_AUSTRIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_AUSTRIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_AZERBAIJAN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_AZERBAIJAN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BAHRAIN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BAHRAIN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BAILIWICK_OF_GUERNSEY__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BAILIWICK_OF_GUERNSEY__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BANGLADESH__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BANGLADESH__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BARBADOS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BARBADOS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BELARUS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BELARUS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BELGIUM__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BELGIUM__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BELIZE__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BELIZE__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BENIN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BENIN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BERMUDA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BERMUDA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BHUTAN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BHUTAN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BOLIVIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BOLIVIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BOSNIA_AND_HERZEGOVINA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BOSNIA_AND_HERZEGOVINA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BOTSWANA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BOTSWANA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BOUVET_ISLAND__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BOUVET_ISLAND__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BRAZIL__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BRAZIL__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BRITISH_INDIAN_OCEAN_TERRITORY__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BRITISH_INDIAN_OCEAN_TERRITORY__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BRITISH_VIRGIN_ISLANDS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BRITISH_VIRGIN_ISLANDS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BRUNEI__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BRUNEI__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BULGARIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BULGARIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BURKINA_FASO__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BURKINA_FASO__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BURUNDI__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BURUNDI__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_CABO_VERDE__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_CABO_VERDE__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_CAMBODIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_CAMBODIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_CAMEROON__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_CAMEROON__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_CANADA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_CANADA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_CARIBBEAN_NETHERLANDS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_CARIBBEAN_NETHERLANDS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_CAYMAN_ISLANDS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_CAYMAN_ISLANDS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_CENTRAL_AFRICAN_REPUBLIC__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_CENTRAL_AFRICAN_REPUBLIC__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_CHAD__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_CHAD__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_CHILE__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_CHILE__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_CHINA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_CHINA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_CHRISTMAS_ISLAND__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_CHRISTMAS_ISLAND__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_COCOS_KEELING_ISLANDS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_COCOS_KEELING_ISLANDS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_COLLECTIVITY_OF_SAINT_MARTIN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_COLLECTIVITY_OF_SAINT_MARTIN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_COLOMBIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_COLOMBIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_COMOROS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_COMOROS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_COOK_ISLANDS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_COOK_ISLANDS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_COSTA_RICA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_COSTA_RICA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_CROATIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_CROATIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_CUBA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_CUBA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_CURACAO__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_CURACAO__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_CYPRUS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_CYPRUS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_CZECH_REPUBLIC__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_CZECH_REPUBLIC__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_DEMOCRATIC_REPUBLIC_OF_THE_CONGO__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_DEMOCRATIC_REPUBLIC_OF_THE_CONGO__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_DENMARK__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_DENMARK__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_DJIBOUTI__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_DJIBOUTI__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_DOMINICA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_DOMINICA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_DOMINICAN_REPUBLIC__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_DOMINICAN_REPUBLIC__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_EAST_TIMOR__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_EAST_TIMOR__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ECUADOR__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ECUADOR__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_EGYPT__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_EGYPT__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_EL_SALVADOR__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_EL_SALVADOR__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_EQUATORIAL_GUINEA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_EQUATORIAL_GUINEA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ERITREA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ERITREA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ESTONIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ESTONIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ESWATINI__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ESWATINI__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ETHIOPIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ETHIOPIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_FALKLAND_ISLANDS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_FALKLAND_ISLANDS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_FAROE_ISLANDS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_FAROE_ISLANDS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_FEDERATED_STATES_OF_MICRONESIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_FEDERATED_STATES_OF_MICRONESIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_FIJI__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_FIJI__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_FINLAND__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_FINLAND__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_FRANCE__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_FRANCE__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_FRENCH_GUIANA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_FRENCH_GUIANA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_FRENCH_POLYNESIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_FRENCH_POLYNESIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_FRENCH_SOUTHERN_AND_ANTARCTIC_LANDS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_FRENCH_SOUTHERN_AND_ANTARCTIC_LANDS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_GABON__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_GABON__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_GEORGIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_GEORGIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_GERMANY__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_GERMANY__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_GHANA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_GHANA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_GIBRALTAR__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_GIBRALTAR__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_GREECE__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_GREECE__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_GREENLAND__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_GREENLAND__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_GRENADA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_GRENADA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_GUADELOUPE__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_GUADELOUPE__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_GUAM__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_GUAM__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_GUATEMALA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_GUATEMALA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_GUINEA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_GUINEA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_GUINEA_BISSAU__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_GUINEA_BISSAU__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_GUYANA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_GUYANA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_HAITI__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_HAITI__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_HEARD_ISLAND_AND_MCDONALD_ISLANDS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_HEARD_ISLAND_AND_MCDONALD_ISLANDS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_HONDURAS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_HONDURAS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_HONG_KONG__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_HONG_KONG__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_HUNGARY__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_HUNGARY__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ICELAND__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ICELAND__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_INDIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_INDIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_INDONESIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_INDONESIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_IRAN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_IRAN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_IRAQ__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_IRAQ__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ISLE_OF_MAN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ISLE_OF_MAN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ISRAEL__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ISRAEL__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ITALY__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ITALY__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_IVORY_COAST__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_IVORY_COAST__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_JAMAICA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_JAMAICA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_JAPAN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_JAPAN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_JERSEY__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_JERSEY__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_JORDAN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_JORDAN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_KAZAKHSTAN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_KAZAKHSTAN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_KENYA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_KENYA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_KINGDOM_OF_THE_NETHERLANDS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_KINGDOM_OF_THE_NETHERLANDS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_KIRIBATI__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_KIRIBATI__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_KUWAIT__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_KUWAIT__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_KYRGYZSTAN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_KYRGYZSTAN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_LAOS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_LAOS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_LATVIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_LATVIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_LEBANON__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_LEBANON__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_LESOTHO__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_LESOTHO__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_LIBERIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_LIBERIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_LIBYA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_LIBYA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_LIECHTENSTEIN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_LIECHTENSTEIN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_LITHUANIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_LITHUANIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_LUXEMBOURG__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_LUXEMBOURG__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_MACAU__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_MACAU__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_MADAGASCAR__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_MADAGASCAR__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_MALAWI__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_MALAWI__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_MALAYSIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_MALAYSIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_MALDIVES__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_MALDIVES__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_MALI__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_MALI__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_MALTA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_MALTA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_MARSHALL_ISLANDS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_MARSHALL_ISLANDS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_MARTINIQUE__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_MARTINIQUE__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_MAURITANIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_MAURITANIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_MAURITIUS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_MAURITIUS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_MAYOTTE__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_MAYOTTE__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_MEXICO__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_MEXICO__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_MOLDOVA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_MOLDOVA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_MONACO__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_MONACO__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_MONGOLIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_MONGOLIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_MONTENEGRO__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_MONTENEGRO__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_MONTSERRAT__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_MONTSERRAT__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_MOROCCO__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_MOROCCO__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_MOZAMBIQUE__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_MOZAMBIQUE__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_MYANMAR__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_MYANMAR__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_NAMIBIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_NAMIBIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_NAURU__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_NAURU__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_NEPAL__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_NEPAL__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_NEW_CALEDONIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_NEW_CALEDONIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_NEW_ZEALAND__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_NEW_ZEALAND__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_NICARAGUA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_NICARAGUA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_NIGER__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_NIGER__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_NIGERIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_NIGERIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_NIUE__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_NIUE__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_NORFOLK_ISLAND__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_NORFOLK_ISLAND__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_NORTH_KOREA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_NORTH_KOREA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_NORTH_MACEDONIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_NORTH_MACEDONIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_NORTHERN_MARIANA_ISLANDS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_NORTHERN_MARIANA_ISLANDS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_NORWAY__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_NORWAY__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_OMAN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_OMAN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_PAKISTAN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_PAKISTAN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_PALAU__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_PALAU__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_PANAMA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_PANAMA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_PAPUA_NEW_GUINEA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_PAPUA_NEW_GUINEA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_PARAGUAY__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_PARAGUAY__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_PERU__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_PERU__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_PHILIPPINES__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_PHILIPPINES__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_PITCAIRN_ISLANDS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_PITCAIRN_ISLANDS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_POLAND__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_POLAND__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_PORTUGAL__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_PORTUGAL__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_PUERTO_RICO__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_PUERTO_RICO__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_QATAR__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_QATAR__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_REPUBLIC_OF_IRELAND__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_REPUBLIC_OF_IRELAND__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_REPUBLIC_OF_THE_CONGO__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_REPUBLIC_OF_THE_CONGO__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ROMANIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ROMANIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_RUSSIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_RUSSIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_RWANDA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_RWANDA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_REUNION__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_REUNION__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SAINT_BARTHELEMY__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SAINT_BARTHELEMY__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SAINT_HELENA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SAINT_HELENA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SAINT_KITTS_AND_NEVIS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SAINT_KITTS_AND_NEVIS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SAINT_LUCIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SAINT_LUCIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SAINT_PIERRE_AND_MIQUELON__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SAINT_PIERRE_AND_MIQUELON__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SAINT_VINCENT_AND_THE_GRENADINES__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SAINT_VINCENT_AND_THE_GRENADINES__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SAMOA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SAMOA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SAN_MARINO__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SAN_MARINO__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SAUDI_ARABIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SAUDI_ARABIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SENEGAL__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SENEGAL__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SERBIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SERBIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SEYCHELLES__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SEYCHELLES__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SIERRA_LEONE__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SIERRA_LEONE__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SINGAPORE__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SINGAPORE__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SINT_MAARTEN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SINT_MAARTEN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SLOVAKIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SLOVAKIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SLOVENIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SLOVENIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SOLOMON_ISLANDS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SOLOMON_ISLANDS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SOMALIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SOMALIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SOUTH_AFRICA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SOUTH_AFRICA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SOUTH_KOREA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SOUTH_KOREA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SOUTH_SUDAN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SOUTH_SUDAN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SPAIN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SPAIN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SRI_LANKA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SRI_LANKA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_STATE_OF_PALESTINE__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_STATE_OF_PALESTINE__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SUDAN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SUDAN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SURINAME__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SURINAME__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SVALBARD_AND_JAN_MAYEN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SVALBARD_AND_JAN_MAYEN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SWEDEN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SWEDEN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SWITZERLAND__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SWITZERLAND__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SYRIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SYRIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_SAO_TOME_AND_PRINCIPE__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_SAO_TOME_AND_PRINCIPE__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_TAIWAN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_TAIWAN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_TAJIKISTAN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_TAJIKISTAN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_TANZANIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_TANZANIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_THAILAND__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_THAILAND__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_BAHAMAS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_BAHAMAS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_GAMBIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_GAMBIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_TOGO__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_TOGO__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_TOKELAU__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_TOKELAU__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_TONGA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_TONGA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_TRINIDAD_AND_TOBAGO__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_TRINIDAD_AND_TOBAGO__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_TUNISIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_TUNISIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_TURKEY__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_TURKEY__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_TURKMENISTAN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_TURKMENISTAN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_TURKS_AND_CAICOS_ISLANDS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_TURKS_AND_CAICOS_ISLANDS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_TUVALU__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_TUVALU__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_UGANDA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_UGANDA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_UKRAINE__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_UKRAINE__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_UNITED_ARAB_EMIRATES__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_UNITED_ARAB_EMIRATES__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_UNITED_KINGDOM__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_UNITED_KINGDOM__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_UNITED_STATES__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_UNITED_STATES__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_UNITED_STATES_MINOR_OUTLYING_ISLANDS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_UNITED_STATES_MINOR_OUTLYING_ISLANDS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_UNITED_STATES_VIRGIN_ISLANDS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_UNITED_STATES_VIRGIN_ISLANDS__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_URUGUAY__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_URUGUAY__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_UZBEKISTAN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_UZBEKISTAN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_VANUATU__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_VANUATU__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_VATICAN_CITY__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_VATICAN_CITY__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_VENEZUELA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_VENEZUELA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_VIETNAM__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_VIETNAM__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_WALLIS_AND_FUTUNA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_WALLIS_AND_FUTUNA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_WESTERN_SAHARA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_WESTERN_SAHARA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_YEMEN__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_YEMEN__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ZAMBIA__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ZAMBIA__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ZIMBABWE__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ZIMBABWE__org_pepstock_charba_client_intl_Region);
 }
 /** @return {!Region} */
 static get f_ALAND_ISLANDS__org_pepstock_charba_client_intl_Region() {
  return (Region.$clinit(), Region.$static_ALAND_ISLANDS__org_pepstock_charba_client_intl_Region);
 }
 
 static $clinit() {
  Region.$clinit = () =>{};
  Region.$loadModules();
  Enum.$clinit();
  Region.$static_AFGHANISTAN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("AFGHANISTAN"), Region.$ordinal_AFGHANISTAN__org_pepstock_charba_client_intl_Region, "AF", "Afghanistan");
  Region.$static_ALBANIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ALBANIA"), Region.$ordinal_ALBANIA__org_pepstock_charba_client_intl_Region, "AL", "Albania");
  Region.$static_ALGERIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ALGERIA"), Region.$ordinal_ALGERIA__org_pepstock_charba_client_intl_Region, "DZ", "Algeria");
  Region.$static_AMERICAN_SAMOA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("AMERICAN_SAMOA"), Region.$ordinal_AMERICAN_SAMOA__org_pepstock_charba_client_intl_Region, "AS", "American Samoa");
  Region.$static_ANDORRA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ANDORRA"), Region.$ordinal_ANDORRA__org_pepstock_charba_client_intl_Region, "AD", "Andorra");
  Region.$static_ANGOLA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ANGOLA"), Region.$ordinal_ANGOLA__org_pepstock_charba_client_intl_Region, "AO", "Angola");
  Region.$static_ANGUILLA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ANGUILLA"), Region.$ordinal_ANGUILLA__org_pepstock_charba_client_intl_Region, "AI", "Anguilla");
  Region.$static_ANTARCTICA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ANTARCTICA"), Region.$ordinal_ANTARCTICA__org_pepstock_charba_client_intl_Region, "AQ", "Antarctica");
  Region.$static_ANTIGUA_AND_BARBUDA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ANTIGUA_AND_BARBUDA"), Region.$ordinal_ANTIGUA_AND_BARBUDA__org_pepstock_charba_client_intl_Region, "AG", "Antigua and Barbuda");
  Region.$static_ARGENTINA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ARGENTINA"), Region.$ordinal_ARGENTINA__org_pepstock_charba_client_intl_Region, "AR", "Argentina");
  Region.$static_ARMENIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ARMENIA"), Region.$ordinal_ARMENIA__org_pepstock_charba_client_intl_Region, "AM", "Armenia");
  Region.$static_ARUBA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ARUBA"), Region.$ordinal_ARUBA__org_pepstock_charba_client_intl_Region, "AW", "Aruba");
  Region.$static_AUSTRALIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("AUSTRALIA"), Region.$ordinal_AUSTRALIA__org_pepstock_charba_client_intl_Region, "AU", "Australia");
  Region.$static_AUSTRIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("AUSTRIA"), Region.$ordinal_AUSTRIA__org_pepstock_charba_client_intl_Region, "AT", "Austria");
  Region.$static_AZERBAIJAN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("AZERBAIJAN"), Region.$ordinal_AZERBAIJAN__org_pepstock_charba_client_intl_Region, "AZ", "Azerbaijan");
  Region.$static_BAHRAIN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BAHRAIN"), Region.$ordinal_BAHRAIN__org_pepstock_charba_client_intl_Region, "BH", "Bahrain");
  Region.$static_BAILIWICK_OF_GUERNSEY__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BAILIWICK_OF_GUERNSEY"), Region.$ordinal_BAILIWICK_OF_GUERNSEY__org_pepstock_charba_client_intl_Region, "GG", "Bailiwick of Guernsey");
  Region.$static_BANGLADESH__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BANGLADESH"), Region.$ordinal_BANGLADESH__org_pepstock_charba_client_intl_Region, "BD", "Bangladesh");
  Region.$static_BARBADOS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BARBADOS"), Region.$ordinal_BARBADOS__org_pepstock_charba_client_intl_Region, "BB", "Barbados");
  Region.$static_BELARUS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BELARUS"), Region.$ordinal_BELARUS__org_pepstock_charba_client_intl_Region, "BY", "Belarus");
  Region.$static_BELGIUM__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BELGIUM"), Region.$ordinal_BELGIUM__org_pepstock_charba_client_intl_Region, "BE", "Belgium");
  Region.$static_BELIZE__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BELIZE"), Region.$ordinal_BELIZE__org_pepstock_charba_client_intl_Region, "BZ", "Belize");
  Region.$static_BENIN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BENIN"), Region.$ordinal_BENIN__org_pepstock_charba_client_intl_Region, "BJ", "Benin");
  Region.$static_BERMUDA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BERMUDA"), Region.$ordinal_BERMUDA__org_pepstock_charba_client_intl_Region, "BM", "Bermuda");
  Region.$static_BHUTAN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BHUTAN"), Region.$ordinal_BHUTAN__org_pepstock_charba_client_intl_Region, "BT", "Bhutan");
  Region.$static_BOLIVIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BOLIVIA"), Region.$ordinal_BOLIVIA__org_pepstock_charba_client_intl_Region, "BO", "Bolivia");
  Region.$static_BOSNIA_AND_HERZEGOVINA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BOSNIA_AND_HERZEGOVINA"), Region.$ordinal_BOSNIA_AND_HERZEGOVINA__org_pepstock_charba_client_intl_Region, "BA", "Bosnia and Herzegovina");
  Region.$static_BOTSWANA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BOTSWANA"), Region.$ordinal_BOTSWANA__org_pepstock_charba_client_intl_Region, "BW", "Botswana");
  Region.$static_BOUVET_ISLAND__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BOUVET_ISLAND"), Region.$ordinal_BOUVET_ISLAND__org_pepstock_charba_client_intl_Region, "BV", "Bouvet Island");
  Region.$static_BRAZIL__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BRAZIL"), Region.$ordinal_BRAZIL__org_pepstock_charba_client_intl_Region, "BR", "Brazil");
  Region.$static_BRITISH_INDIAN_OCEAN_TERRITORY__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BRITISH_INDIAN_OCEAN_TERRITORY"), Region.$ordinal_BRITISH_INDIAN_OCEAN_TERRITORY__org_pepstock_charba_client_intl_Region, "IO", "British Indian Ocean Territory");
  Region.$static_BRITISH_VIRGIN_ISLANDS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BRITISH_VIRGIN_ISLANDS"), Region.$ordinal_BRITISH_VIRGIN_ISLANDS__org_pepstock_charba_client_intl_Region, "VG", "British Virgin Islands");
  Region.$static_BRUNEI__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BRUNEI"), Region.$ordinal_BRUNEI__org_pepstock_charba_client_intl_Region, "BN", "Brunei");
  Region.$static_BULGARIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BULGARIA"), Region.$ordinal_BULGARIA__org_pepstock_charba_client_intl_Region, "BG", "Bulgaria");
  Region.$static_BURKINA_FASO__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BURKINA_FASO"), Region.$ordinal_BURKINA_FASO__org_pepstock_charba_client_intl_Region, "BF", "Burkina Faso");
  Region.$static_BURUNDI__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BURUNDI"), Region.$ordinal_BURUNDI__org_pepstock_charba_client_intl_Region, "BI", "Burundi");
  Region.$static_CABO_VERDE__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CABO_VERDE"), Region.$ordinal_CABO_VERDE__org_pepstock_charba_client_intl_Region, "CV", "Cabo Verde");
  Region.$static_CAMBODIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CAMBODIA"), Region.$ordinal_CAMBODIA__org_pepstock_charba_client_intl_Region, "KH", "Cambodia");
  Region.$static_CAMEROON__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CAMEROON"), Region.$ordinal_CAMEROON__org_pepstock_charba_client_intl_Region, "CM", "Cameroon");
  Region.$static_CANADA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CANADA"), Region.$ordinal_CANADA__org_pepstock_charba_client_intl_Region, "CA", "Canada");
  Region.$static_CARIBBEAN_NETHERLANDS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CARIBBEAN_NETHERLANDS"), Region.$ordinal_CARIBBEAN_NETHERLANDS__org_pepstock_charba_client_intl_Region, "BQ", "Caribbean Netherlands");
  Region.$static_CAYMAN_ISLANDS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CAYMAN_ISLANDS"), Region.$ordinal_CAYMAN_ISLANDS__org_pepstock_charba_client_intl_Region, "KY", "Cayman Islands");
  Region.$static_CENTRAL_AFRICAN_REPUBLIC__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CENTRAL_AFRICAN_REPUBLIC"), Region.$ordinal_CENTRAL_AFRICAN_REPUBLIC__org_pepstock_charba_client_intl_Region, "CF", "Central African Republic");
  Region.$static_CHAD__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CHAD"), Region.$ordinal_CHAD__org_pepstock_charba_client_intl_Region, "TD", "Chad");
  Region.$static_CHILE__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CHILE"), Region.$ordinal_CHILE__org_pepstock_charba_client_intl_Region, "CL", "Chile");
  Region.$static_CHINA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CHINA"), Region.$ordinal_CHINA__org_pepstock_charba_client_intl_Region, "CN", "China");
  Region.$static_CHRISTMAS_ISLAND__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CHRISTMAS_ISLAND"), Region.$ordinal_CHRISTMAS_ISLAND__org_pepstock_charba_client_intl_Region, "CX", "Christmas Island");
  Region.$static_COCOS_KEELING_ISLANDS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("COCOS_KEELING_ISLANDS"), Region.$ordinal_COCOS_KEELING_ISLANDS__org_pepstock_charba_client_intl_Region, "CC", "Cocos (Keeling) Islands");
  Region.$static_COLLECTIVITY_OF_SAINT_MARTIN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("COLLECTIVITY_OF_SAINT_MARTIN"), Region.$ordinal_COLLECTIVITY_OF_SAINT_MARTIN__org_pepstock_charba_client_intl_Region, "MF", "Collectivity of Saint Martin");
  Region.$static_COLOMBIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("COLOMBIA"), Region.$ordinal_COLOMBIA__org_pepstock_charba_client_intl_Region, "CO", "Colombia");
  Region.$static_COMOROS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("COMOROS"), Region.$ordinal_COMOROS__org_pepstock_charba_client_intl_Region, "KM", "Comoros");
  Region.$static_COOK_ISLANDS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("COOK_ISLANDS"), Region.$ordinal_COOK_ISLANDS__org_pepstock_charba_client_intl_Region, "CK", "Cook Islands");
  Region.$static_COSTA_RICA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("COSTA_RICA"), Region.$ordinal_COSTA_RICA__org_pepstock_charba_client_intl_Region, "CR", "Costa Rica");
  Region.$static_CROATIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CROATIA"), Region.$ordinal_CROATIA__org_pepstock_charba_client_intl_Region, "HR", "Croatia");
  Region.$static_CUBA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CUBA"), Region.$ordinal_CUBA__org_pepstock_charba_client_intl_Region, "CU", "Cuba");
  Region.$static_CURACAO__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CURACAO"), Region.$ordinal_CURACAO__org_pepstock_charba_client_intl_Region, "CW", "Cura\u00E7ao");
  Region.$static_CYPRUS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CYPRUS"), Region.$ordinal_CYPRUS__org_pepstock_charba_client_intl_Region, "CY", "Cyprus");
  Region.$static_CZECH_REPUBLIC__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CZECH_REPUBLIC"), Region.$ordinal_CZECH_REPUBLIC__org_pepstock_charba_client_intl_Region, "CZ", "Czech Republic");
  Region.$static_DEMOCRATIC_REPUBLIC_OF_THE_CONGO__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("DEMOCRATIC_REPUBLIC_OF_THE_CONGO"), Region.$ordinal_DEMOCRATIC_REPUBLIC_OF_THE_CONGO__org_pepstock_charba_client_intl_Region, "CD", "Democratic Republic of the Congo");
  Region.$static_DENMARK__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("DENMARK"), Region.$ordinal_DENMARK__org_pepstock_charba_client_intl_Region, "DK", "Denmark");
  Region.$static_DJIBOUTI__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("DJIBOUTI"), Region.$ordinal_DJIBOUTI__org_pepstock_charba_client_intl_Region, "DJ", "Djibouti");
  Region.$static_DOMINICA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("DOMINICA"), Region.$ordinal_DOMINICA__org_pepstock_charba_client_intl_Region, "DM", "Dominica");
  Region.$static_DOMINICAN_REPUBLIC__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("DOMINICAN_REPUBLIC"), Region.$ordinal_DOMINICAN_REPUBLIC__org_pepstock_charba_client_intl_Region, "DO", "Dominican Republic");
  Region.$static_EAST_TIMOR__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("EAST_TIMOR"), Region.$ordinal_EAST_TIMOR__org_pepstock_charba_client_intl_Region, "TL", "East Timor");
  Region.$static_ECUADOR__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ECUADOR"), Region.$ordinal_ECUADOR__org_pepstock_charba_client_intl_Region, "EC", "Ecuador");
  Region.$static_EGYPT__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("EGYPT"), Region.$ordinal_EGYPT__org_pepstock_charba_client_intl_Region, "EG", "Egypt");
  Region.$static_EL_SALVADOR__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("EL_SALVADOR"), Region.$ordinal_EL_SALVADOR__org_pepstock_charba_client_intl_Region, "SV", "El Salvador");
  Region.$static_EQUATORIAL_GUINEA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("EQUATORIAL_GUINEA"), Region.$ordinal_EQUATORIAL_GUINEA__org_pepstock_charba_client_intl_Region, "GQ", "Equatorial Guinea");
  Region.$static_ERITREA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ERITREA"), Region.$ordinal_ERITREA__org_pepstock_charba_client_intl_Region, "ER", "Eritrea");
  Region.$static_ESTONIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ESTONIA"), Region.$ordinal_ESTONIA__org_pepstock_charba_client_intl_Region, "EE", "Estonia");
  Region.$static_ESWATINI__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ESWATINI"), Region.$ordinal_ESWATINI__org_pepstock_charba_client_intl_Region, "SZ", "Eswatini");
  Region.$static_ETHIOPIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ETHIOPIA"), Region.$ordinal_ETHIOPIA__org_pepstock_charba_client_intl_Region, "ET", "Ethiopia");
  Region.$static_FALKLAND_ISLANDS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("FALKLAND_ISLANDS"), Region.$ordinal_FALKLAND_ISLANDS__org_pepstock_charba_client_intl_Region, "FK", "Falkland Islands");
  Region.$static_FAROE_ISLANDS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("FAROE_ISLANDS"), Region.$ordinal_FAROE_ISLANDS__org_pepstock_charba_client_intl_Region, "FO", "Faroe Islands");
  Region.$static_FEDERATED_STATES_OF_MICRONESIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("FEDERATED_STATES_OF_MICRONESIA"), Region.$ordinal_FEDERATED_STATES_OF_MICRONESIA__org_pepstock_charba_client_intl_Region, "FM", "Federated States of Micronesia");
  Region.$static_FIJI__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("FIJI"), Region.$ordinal_FIJI__org_pepstock_charba_client_intl_Region, "FJ", "Fiji");
  Region.$static_FINLAND__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("FINLAND"), Region.$ordinal_FINLAND__org_pepstock_charba_client_intl_Region, "FI", "Finland");
  Region.$static_FRANCE__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("FRANCE"), Region.$ordinal_FRANCE__org_pepstock_charba_client_intl_Region, "FR", "France");
  Region.$static_FRENCH_GUIANA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("FRENCH_GUIANA"), Region.$ordinal_FRENCH_GUIANA__org_pepstock_charba_client_intl_Region, "GF", "French Guiana");
  Region.$static_FRENCH_POLYNESIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("FRENCH_POLYNESIA"), Region.$ordinal_FRENCH_POLYNESIA__org_pepstock_charba_client_intl_Region, "PF", "French Polynesia");
  Region.$static_FRENCH_SOUTHERN_AND_ANTARCTIC_LANDS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("FRENCH_SOUTHERN_AND_ANTARCTIC_LANDS"), Region.$ordinal_FRENCH_SOUTHERN_AND_ANTARCTIC_LANDS__org_pepstock_charba_client_intl_Region, "TF", "French Southern and Antarctic Lands");
  Region.$static_GABON__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("GABON"), Region.$ordinal_GABON__org_pepstock_charba_client_intl_Region, "GA", "Gabon");
  Region.$static_GEORGIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("GEORGIA"), Region.$ordinal_GEORGIA__org_pepstock_charba_client_intl_Region, "GE", "Georgia (country)");
  Region.$static_GERMANY__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("GERMANY"), Region.$ordinal_GERMANY__org_pepstock_charba_client_intl_Region, "DE", "Germany");
  Region.$static_GHANA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("GHANA"), Region.$ordinal_GHANA__org_pepstock_charba_client_intl_Region, "GH", "Ghana");
  Region.$static_GIBRALTAR__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("GIBRALTAR"), Region.$ordinal_GIBRALTAR__org_pepstock_charba_client_intl_Region, "GI", "Gibraltar");
  Region.$static_GREECE__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("GREECE"), Region.$ordinal_GREECE__org_pepstock_charba_client_intl_Region, "GR", "Greece");
  Region.$static_GREENLAND__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("GREENLAND"), Region.$ordinal_GREENLAND__org_pepstock_charba_client_intl_Region, "GL", "Greenland");
  Region.$static_GRENADA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("GRENADA"), Region.$ordinal_GRENADA__org_pepstock_charba_client_intl_Region, "GD", "Grenada");
  Region.$static_GUADELOUPE__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("GUADELOUPE"), Region.$ordinal_GUADELOUPE__org_pepstock_charba_client_intl_Region, "GP", "Guadeloupe");
  Region.$static_GUAM__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("GUAM"), Region.$ordinal_GUAM__org_pepstock_charba_client_intl_Region, "GU", "Guam");
  Region.$static_GUATEMALA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("GUATEMALA"), Region.$ordinal_GUATEMALA__org_pepstock_charba_client_intl_Region, "GT", "Guatemala");
  Region.$static_GUINEA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("GUINEA"), Region.$ordinal_GUINEA__org_pepstock_charba_client_intl_Region, "GN", "Guinea");
  Region.$static_GUINEA_BISSAU__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("GUINEA_BISSAU"), Region.$ordinal_GUINEA_BISSAU__org_pepstock_charba_client_intl_Region, "GW", "Guinea-Bissau");
  Region.$static_GUYANA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("GUYANA"), Region.$ordinal_GUYANA__org_pepstock_charba_client_intl_Region, "GY", "Guyana");
  Region.$static_HAITI__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("HAITI"), Region.$ordinal_HAITI__org_pepstock_charba_client_intl_Region, "HT", "Haiti");
  Region.$static_HEARD_ISLAND_AND_MCDONALD_ISLANDS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("HEARD_ISLAND_AND_MCDONALD_ISLANDS"), Region.$ordinal_HEARD_ISLAND_AND_MCDONALD_ISLANDS__org_pepstock_charba_client_intl_Region, "HM", "Heard Island and McDonald Islands");
  Region.$static_HONDURAS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("HONDURAS"), Region.$ordinal_HONDURAS__org_pepstock_charba_client_intl_Region, "HN", "Honduras");
  Region.$static_HONG_KONG__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("HONG_KONG"), Region.$ordinal_HONG_KONG__org_pepstock_charba_client_intl_Region, "HK", "Hong Kong");
  Region.$static_HUNGARY__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("HUNGARY"), Region.$ordinal_HUNGARY__org_pepstock_charba_client_intl_Region, "HU", "Hungary");
  Region.$static_ICELAND__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ICELAND"), Region.$ordinal_ICELAND__org_pepstock_charba_client_intl_Region, "IS", "Iceland");
  Region.$static_INDIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("INDIA"), Region.$ordinal_INDIA__org_pepstock_charba_client_intl_Region, "IN", "India");
  Region.$static_INDONESIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("INDONESIA"), Region.$ordinal_INDONESIA__org_pepstock_charba_client_intl_Region, "ID", "Indonesia");
  Region.$static_IRAN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("IRAN"), Region.$ordinal_IRAN__org_pepstock_charba_client_intl_Region, "IR", "Iran");
  Region.$static_IRAQ__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("IRAQ"), Region.$ordinal_IRAQ__org_pepstock_charba_client_intl_Region, "IQ", "Iraq");
  Region.$static_ISLE_OF_MAN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ISLE_OF_MAN"), Region.$ordinal_ISLE_OF_MAN__org_pepstock_charba_client_intl_Region, "IM", "Isle of Man");
  Region.$static_ISRAEL__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ISRAEL"), Region.$ordinal_ISRAEL__org_pepstock_charba_client_intl_Region, "IL", "Israel");
  Region.$static_ITALY__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ITALY"), Region.$ordinal_ITALY__org_pepstock_charba_client_intl_Region, "IT", "Italy");
  Region.$static_IVORY_COAST__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("IVORY_COAST"), Region.$ordinal_IVORY_COAST__org_pepstock_charba_client_intl_Region, "CI", "Ivory Coast");
  Region.$static_JAMAICA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("JAMAICA"), Region.$ordinal_JAMAICA__org_pepstock_charba_client_intl_Region, "JM", "Jamaica");
  Region.$static_JAPAN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("JAPAN"), Region.$ordinal_JAPAN__org_pepstock_charba_client_intl_Region, "JP", "Japan");
  Region.$static_JERSEY__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("JERSEY"), Region.$ordinal_JERSEY__org_pepstock_charba_client_intl_Region, "JE", "Jersey");
  Region.$static_JORDAN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("JORDAN"), Region.$ordinal_JORDAN__org_pepstock_charba_client_intl_Region, "JO", "Jordan");
  Region.$static_KAZAKHSTAN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("KAZAKHSTAN"), Region.$ordinal_KAZAKHSTAN__org_pepstock_charba_client_intl_Region, "KZ", "Kazakhstan");
  Region.$static_KENYA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("KENYA"), Region.$ordinal_KENYA__org_pepstock_charba_client_intl_Region, "KE", "Kenya");
  Region.$static_KINGDOM_OF_THE_NETHERLANDS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("KINGDOM_OF_THE_NETHERLANDS"), Region.$ordinal_KINGDOM_OF_THE_NETHERLANDS__org_pepstock_charba_client_intl_Region, "NL", "Kingdom of the Netherlands");
  Region.$static_KIRIBATI__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("KIRIBATI"), Region.$ordinal_KIRIBATI__org_pepstock_charba_client_intl_Region, "KI", "Kiribati");
  Region.$static_KUWAIT__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("KUWAIT"), Region.$ordinal_KUWAIT__org_pepstock_charba_client_intl_Region, "KW", "Kuwait");
  Region.$static_KYRGYZSTAN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("KYRGYZSTAN"), Region.$ordinal_KYRGYZSTAN__org_pepstock_charba_client_intl_Region, "KG", "Kyrgyzstan");
  Region.$static_LAOS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("LAOS"), Region.$ordinal_LAOS__org_pepstock_charba_client_intl_Region, "LA", "Laos");
  Region.$static_LATVIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("LATVIA"), Region.$ordinal_LATVIA__org_pepstock_charba_client_intl_Region, "LV", "Latvia");
  Region.$static_LEBANON__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("LEBANON"), Region.$ordinal_LEBANON__org_pepstock_charba_client_intl_Region, "LB", "Lebanon");
  Region.$static_LESOTHO__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("LESOTHO"), Region.$ordinal_LESOTHO__org_pepstock_charba_client_intl_Region, "LS", "Lesotho");
  Region.$static_LIBERIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("LIBERIA"), Region.$ordinal_LIBERIA__org_pepstock_charba_client_intl_Region, "LR", "Liberia");
  Region.$static_LIBYA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("LIBYA"), Region.$ordinal_LIBYA__org_pepstock_charba_client_intl_Region, "LY", "Libya");
  Region.$static_LIECHTENSTEIN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("LIECHTENSTEIN"), Region.$ordinal_LIECHTENSTEIN__org_pepstock_charba_client_intl_Region, "LI", "Liechtenstein");
  Region.$static_LITHUANIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("LITHUANIA"), Region.$ordinal_LITHUANIA__org_pepstock_charba_client_intl_Region, "LT", "Lithuania");
  Region.$static_LUXEMBOURG__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("LUXEMBOURG"), Region.$ordinal_LUXEMBOURG__org_pepstock_charba_client_intl_Region, "LU", "Luxembourg");
  Region.$static_MACAU__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MACAU"), Region.$ordinal_MACAU__org_pepstock_charba_client_intl_Region, "MO", "Macau");
  Region.$static_MADAGASCAR__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MADAGASCAR"), Region.$ordinal_MADAGASCAR__org_pepstock_charba_client_intl_Region, "MG", "Madagascar");
  Region.$static_MALAWI__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MALAWI"), Region.$ordinal_MALAWI__org_pepstock_charba_client_intl_Region, "MW", "Malawi");
  Region.$static_MALAYSIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MALAYSIA"), Region.$ordinal_MALAYSIA__org_pepstock_charba_client_intl_Region, "MY", "Malaysia");
  Region.$static_MALDIVES__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MALDIVES"), Region.$ordinal_MALDIVES__org_pepstock_charba_client_intl_Region, "MV", "Maldives");
  Region.$static_MALI__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MALI"), Region.$ordinal_MALI__org_pepstock_charba_client_intl_Region, "ML", "Mali");
  Region.$static_MALTA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MALTA"), Region.$ordinal_MALTA__org_pepstock_charba_client_intl_Region, "MT", "Malta");
  Region.$static_MARSHALL_ISLANDS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MARSHALL_ISLANDS"), Region.$ordinal_MARSHALL_ISLANDS__org_pepstock_charba_client_intl_Region, "MH", "Marshall Islands");
  Region.$static_MARTINIQUE__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MARTINIQUE"), Region.$ordinal_MARTINIQUE__org_pepstock_charba_client_intl_Region, "MQ", "Martinique");
  Region.$static_MAURITANIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MAURITANIA"), Region.$ordinal_MAURITANIA__org_pepstock_charba_client_intl_Region, "MR", "Mauritania");
  Region.$static_MAURITIUS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MAURITIUS"), Region.$ordinal_MAURITIUS__org_pepstock_charba_client_intl_Region, "MU", "Mauritius");
  Region.$static_MAYOTTE__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MAYOTTE"), Region.$ordinal_MAYOTTE__org_pepstock_charba_client_intl_Region, "YT", "Mayotte");
  Region.$static_MEXICO__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MEXICO"), Region.$ordinal_MEXICO__org_pepstock_charba_client_intl_Region, "MX", "Mexico");
  Region.$static_MOLDOVA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MOLDOVA"), Region.$ordinal_MOLDOVA__org_pepstock_charba_client_intl_Region, "MD", "Moldova");
  Region.$static_MONACO__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MONACO"), Region.$ordinal_MONACO__org_pepstock_charba_client_intl_Region, "MC", "Monaco");
  Region.$static_MONGOLIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MONGOLIA"), Region.$ordinal_MONGOLIA__org_pepstock_charba_client_intl_Region, "MN", "Mongolia");
  Region.$static_MONTENEGRO__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MONTENEGRO"), Region.$ordinal_MONTENEGRO__org_pepstock_charba_client_intl_Region, "ME", "Montenegro");
  Region.$static_MONTSERRAT__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MONTSERRAT"), Region.$ordinal_MONTSERRAT__org_pepstock_charba_client_intl_Region, "MS", "Montserrat");
  Region.$static_MOROCCO__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MOROCCO"), Region.$ordinal_MOROCCO__org_pepstock_charba_client_intl_Region, "MA", "Morocco");
  Region.$static_MOZAMBIQUE__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MOZAMBIQUE"), Region.$ordinal_MOZAMBIQUE__org_pepstock_charba_client_intl_Region, "MZ", "Mozambique");
  Region.$static_MYANMAR__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MYANMAR"), Region.$ordinal_MYANMAR__org_pepstock_charba_client_intl_Region, "MM", "Myanmar");
  Region.$static_NAMIBIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NAMIBIA"), Region.$ordinal_NAMIBIA__org_pepstock_charba_client_intl_Region, "NA", "Namibia");
  Region.$static_NAURU__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NAURU"), Region.$ordinal_NAURU__org_pepstock_charba_client_intl_Region, "NR", "Nauru");
  Region.$static_NEPAL__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NEPAL"), Region.$ordinal_NEPAL__org_pepstock_charba_client_intl_Region, "NP", "Nepal");
  Region.$static_NEW_CALEDONIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NEW_CALEDONIA"), Region.$ordinal_NEW_CALEDONIA__org_pepstock_charba_client_intl_Region, "NC", "New Caledonia");
  Region.$static_NEW_ZEALAND__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NEW_ZEALAND"), Region.$ordinal_NEW_ZEALAND__org_pepstock_charba_client_intl_Region, "NZ", "New Zealand");
  Region.$static_NICARAGUA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NICARAGUA"), Region.$ordinal_NICARAGUA__org_pepstock_charba_client_intl_Region, "NI", "Nicaragua");
  Region.$static_NIGER__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NIGER"), Region.$ordinal_NIGER__org_pepstock_charba_client_intl_Region, "NE", "Niger");
  Region.$static_NIGERIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NIGERIA"), Region.$ordinal_NIGERIA__org_pepstock_charba_client_intl_Region, "NG", "Nigeria");
  Region.$static_NIUE__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NIUE"), Region.$ordinal_NIUE__org_pepstock_charba_client_intl_Region, "NU", "Niue");
  Region.$static_NORFOLK_ISLAND__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NORFOLK_ISLAND"), Region.$ordinal_NORFOLK_ISLAND__org_pepstock_charba_client_intl_Region, "NF", "Norfolk Island");
  Region.$static_NORTH_KOREA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NORTH_KOREA"), Region.$ordinal_NORTH_KOREA__org_pepstock_charba_client_intl_Region, "KP", "North Korea");
  Region.$static_NORTH_MACEDONIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NORTH_MACEDONIA"), Region.$ordinal_NORTH_MACEDONIA__org_pepstock_charba_client_intl_Region, "MK", "North Macedonia");
  Region.$static_NORTHERN_MARIANA_ISLANDS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NORTHERN_MARIANA_ISLANDS"), Region.$ordinal_NORTHERN_MARIANA_ISLANDS__org_pepstock_charba_client_intl_Region, "MP", "Northern Mariana Islands");
  Region.$static_NORWAY__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("NORWAY"), Region.$ordinal_NORWAY__org_pepstock_charba_client_intl_Region, "NO", "Norway");
  Region.$static_OMAN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("OMAN"), Region.$ordinal_OMAN__org_pepstock_charba_client_intl_Region, "OM", "Oman");
  Region.$static_PAKISTAN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("PAKISTAN"), Region.$ordinal_PAKISTAN__org_pepstock_charba_client_intl_Region, "PK", "Pakistan");
  Region.$static_PALAU__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("PALAU"), Region.$ordinal_PALAU__org_pepstock_charba_client_intl_Region, "PW", "Palau");
  Region.$static_PANAMA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("PANAMA"), Region.$ordinal_PANAMA__org_pepstock_charba_client_intl_Region, "PA", "Panama");
  Region.$static_PAPUA_NEW_GUINEA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("PAPUA_NEW_GUINEA"), Region.$ordinal_PAPUA_NEW_GUINEA__org_pepstock_charba_client_intl_Region, "PG", "Papua New Guinea");
  Region.$static_PARAGUAY__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("PARAGUAY"), Region.$ordinal_PARAGUAY__org_pepstock_charba_client_intl_Region, "PY", "Paraguay");
  Region.$static_PERU__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("PERU"), Region.$ordinal_PERU__org_pepstock_charba_client_intl_Region, "PE", "Peru");
  Region.$static_PHILIPPINES__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("PHILIPPINES"), Region.$ordinal_PHILIPPINES__org_pepstock_charba_client_intl_Region, "PH", "Philippines");
  Region.$static_PITCAIRN_ISLANDS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("PITCAIRN_ISLANDS"), Region.$ordinal_PITCAIRN_ISLANDS__org_pepstock_charba_client_intl_Region, "PN", "Pitcairn Islands");
  Region.$static_POLAND__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("POLAND"), Region.$ordinal_POLAND__org_pepstock_charba_client_intl_Region, "PL", "Poland");
  Region.$static_PORTUGAL__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("PORTUGAL"), Region.$ordinal_PORTUGAL__org_pepstock_charba_client_intl_Region, "PT", "Portugal");
  Region.$static_PUERTO_RICO__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("PUERTO_RICO"), Region.$ordinal_PUERTO_RICO__org_pepstock_charba_client_intl_Region, "PR", "Puerto Rico");
  Region.$static_QATAR__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("QATAR"), Region.$ordinal_QATAR__org_pepstock_charba_client_intl_Region, "QA", "Qatar");
  Region.$static_REPUBLIC_OF_IRELAND__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("REPUBLIC_OF_IRELAND"), Region.$ordinal_REPUBLIC_OF_IRELAND__org_pepstock_charba_client_intl_Region, "IE", "Republic of Ireland");
  Region.$static_REPUBLIC_OF_THE_CONGO__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("REPUBLIC_OF_THE_CONGO"), Region.$ordinal_REPUBLIC_OF_THE_CONGO__org_pepstock_charba_client_intl_Region, "CG", "Republic of the Congo");
  Region.$static_ROMANIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ROMANIA"), Region.$ordinal_ROMANIA__org_pepstock_charba_client_intl_Region, "RO", "Romania");
  Region.$static_RUSSIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("RUSSIA"), Region.$ordinal_RUSSIA__org_pepstock_charba_client_intl_Region, "RU", "Russia");
  Region.$static_RWANDA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("RWANDA"), Region.$ordinal_RWANDA__org_pepstock_charba_client_intl_Region, "RW", "Rwanda");
  Region.$static_REUNION__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("REUNION"), Region.$ordinal_REUNION__org_pepstock_charba_client_intl_Region, "RE", "R\u00E9union");
  Region.$static_SAINT_BARTHELEMY__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SAINT_BARTHELEMY"), Region.$ordinal_SAINT_BARTHELEMY__org_pepstock_charba_client_intl_Region, "BL", "Saint Barth\u00E9lemy");
  Region.$static_SAINT_HELENA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SAINT_HELENA"), Region.$ordinal_SAINT_HELENA__org_pepstock_charba_client_intl_Region, "SH", "Saint Helena, Ascension and Tristan da Cunha");
  Region.$static_SAINT_KITTS_AND_NEVIS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SAINT_KITTS_AND_NEVIS"), Region.$ordinal_SAINT_KITTS_AND_NEVIS__org_pepstock_charba_client_intl_Region, "KN", "Saint Kitts and Nevis");
  Region.$static_SAINT_LUCIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SAINT_LUCIA"), Region.$ordinal_SAINT_LUCIA__org_pepstock_charba_client_intl_Region, "LC", "Saint Lucia");
  Region.$static_SAINT_PIERRE_AND_MIQUELON__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SAINT_PIERRE_AND_MIQUELON"), Region.$ordinal_SAINT_PIERRE_AND_MIQUELON__org_pepstock_charba_client_intl_Region, "PM", "Saint Pierre and Miquelon");
  Region.$static_SAINT_VINCENT_AND_THE_GRENADINES__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SAINT_VINCENT_AND_THE_GRENADINES"), Region.$ordinal_SAINT_VINCENT_AND_THE_GRENADINES__org_pepstock_charba_client_intl_Region, "VC", "Saint Vincent and the Grenadines");
  Region.$static_SAMOA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SAMOA"), Region.$ordinal_SAMOA__org_pepstock_charba_client_intl_Region, "WS", "Samoa");
  Region.$static_SAN_MARINO__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SAN_MARINO"), Region.$ordinal_SAN_MARINO__org_pepstock_charba_client_intl_Region, "SM", "San Marino");
  Region.$static_SAUDI_ARABIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SAUDI_ARABIA"), Region.$ordinal_SAUDI_ARABIA__org_pepstock_charba_client_intl_Region, "SA", "Saudi Arabia");
  Region.$static_SENEGAL__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SENEGAL"), Region.$ordinal_SENEGAL__org_pepstock_charba_client_intl_Region, "SN", "Senegal");
  Region.$static_SERBIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SERBIA"), Region.$ordinal_SERBIA__org_pepstock_charba_client_intl_Region, "RS", "Serbia");
  Region.$static_SEYCHELLES__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SEYCHELLES"), Region.$ordinal_SEYCHELLES__org_pepstock_charba_client_intl_Region, "SC", "Seychelles");
  Region.$static_SIERRA_LEONE__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SIERRA_LEONE"), Region.$ordinal_SIERRA_LEONE__org_pepstock_charba_client_intl_Region, "SL", "Sierra Leone");
  Region.$static_SINGAPORE__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SINGAPORE"), Region.$ordinal_SINGAPORE__org_pepstock_charba_client_intl_Region, "SG", "Singapore");
  Region.$static_SINT_MAARTEN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SINT_MAARTEN"), Region.$ordinal_SINT_MAARTEN__org_pepstock_charba_client_intl_Region, "SX", "Sint Maarten");
  Region.$static_SLOVAKIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SLOVAKIA"), Region.$ordinal_SLOVAKIA__org_pepstock_charba_client_intl_Region, "SK", "Slovakia");
  Region.$static_SLOVENIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SLOVENIA"), Region.$ordinal_SLOVENIA__org_pepstock_charba_client_intl_Region, "SI", "Slovenia");
  Region.$static_SOLOMON_ISLANDS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SOLOMON_ISLANDS"), Region.$ordinal_SOLOMON_ISLANDS__org_pepstock_charba_client_intl_Region, "SB", "Solomon Islands");
  Region.$static_SOMALIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SOMALIA"), Region.$ordinal_SOMALIA__org_pepstock_charba_client_intl_Region, "SO", "Somalia");
  Region.$static_SOUTH_AFRICA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SOUTH_AFRICA"), Region.$ordinal_SOUTH_AFRICA__org_pepstock_charba_client_intl_Region, "ZA", "South Africa");
  Region.$static_SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"), Region.$ordinal_SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS__org_pepstock_charba_client_intl_Region, "GS", "South Georgia and the South Sandwich Islands");
  Region.$static_SOUTH_KOREA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SOUTH_KOREA"), Region.$ordinal_SOUTH_KOREA__org_pepstock_charba_client_intl_Region, "KR", "South Korea");
  Region.$static_SOUTH_SUDAN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SOUTH_SUDAN"), Region.$ordinal_SOUTH_SUDAN__org_pepstock_charba_client_intl_Region, "SS", "South Sudan");
  Region.$static_SPAIN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SPAIN"), Region.$ordinal_SPAIN__org_pepstock_charba_client_intl_Region, "ES", "Spain");
  Region.$static_SRI_LANKA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SRI_LANKA"), Region.$ordinal_SRI_LANKA__org_pepstock_charba_client_intl_Region, "LK", "Sri Lanka");
  Region.$static_STATE_OF_PALESTINE__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("STATE_OF_PALESTINE"), Region.$ordinal_STATE_OF_PALESTINE__org_pepstock_charba_client_intl_Region, "PS", "State of Palestine");
  Region.$static_SUDAN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SUDAN"), Region.$ordinal_SUDAN__org_pepstock_charba_client_intl_Region, "SD", "Sudan");
  Region.$static_SURINAME__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SURINAME"), Region.$ordinal_SURINAME__org_pepstock_charba_client_intl_Region, "SR", "Suriname");
  Region.$static_SVALBARD_AND_JAN_MAYEN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SVALBARD_AND_JAN_MAYEN"), Region.$ordinal_SVALBARD_AND_JAN_MAYEN__org_pepstock_charba_client_intl_Region, "SJ", "Svalbard and Jan Mayen");
  Region.$static_SWEDEN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SWEDEN"), Region.$ordinal_SWEDEN__org_pepstock_charba_client_intl_Region, "SE", "Sweden");
  Region.$static_SWITZERLAND__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SWITZERLAND"), Region.$ordinal_SWITZERLAND__org_pepstock_charba_client_intl_Region, "CH", "Switzerland");
  Region.$static_SYRIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SYRIA"), Region.$ordinal_SYRIA__org_pepstock_charba_client_intl_Region, "SY", "Syria");
  Region.$static_SAO_TOME_AND_PRINCIPE__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SAO_TOME_AND_PRINCIPE"), Region.$ordinal_SAO_TOME_AND_PRINCIPE__org_pepstock_charba_client_intl_Region, "ST", "S\u00E3o Tom\u00E9 and Pr\u00EDncipe");
  Region.$static_TAIWAN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("TAIWAN"), Region.$ordinal_TAIWAN__org_pepstock_charba_client_intl_Region, "TW", "Taiwan");
  Region.$static_TAJIKISTAN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("TAJIKISTAN"), Region.$ordinal_TAJIKISTAN__org_pepstock_charba_client_intl_Region, "TJ", "Tajikistan");
  Region.$static_TANZANIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("TANZANIA"), Region.$ordinal_TANZANIA__org_pepstock_charba_client_intl_Region, "TZ", "Tanzania");
  Region.$static_THAILAND__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("THAILAND"), Region.$ordinal_THAILAND__org_pepstock_charba_client_intl_Region, "TH", "Thailand");
  Region.$static_BAHAMAS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("BAHAMAS"), Region.$ordinal_BAHAMAS__org_pepstock_charba_client_intl_Region, "BS", "The Bahamas");
  Region.$static_GAMBIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("GAMBIA"), Region.$ordinal_GAMBIA__org_pepstock_charba_client_intl_Region, "GM", "The Gambia");
  Region.$static_TOGO__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("TOGO"), Region.$ordinal_TOGO__org_pepstock_charba_client_intl_Region, "TG", "Togo");
  Region.$static_TOKELAU__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("TOKELAU"), Region.$ordinal_TOKELAU__org_pepstock_charba_client_intl_Region, "TK", "Tokelau");
  Region.$static_TONGA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("TONGA"), Region.$ordinal_TONGA__org_pepstock_charba_client_intl_Region, "TO", "Tonga");
  Region.$static_TRINIDAD_AND_TOBAGO__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("TRINIDAD_AND_TOBAGO"), Region.$ordinal_TRINIDAD_AND_TOBAGO__org_pepstock_charba_client_intl_Region, "TT", "Trinidad and Tobago");
  Region.$static_TUNISIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("TUNISIA"), Region.$ordinal_TUNISIA__org_pepstock_charba_client_intl_Region, "TN", "Tunisia");
  Region.$static_TURKEY__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("TURKEY"), Region.$ordinal_TURKEY__org_pepstock_charba_client_intl_Region, "TR", "Turkey");
  Region.$static_TURKMENISTAN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("TURKMENISTAN"), Region.$ordinal_TURKMENISTAN__org_pepstock_charba_client_intl_Region, "TM", "Turkmenistan");
  Region.$static_TURKS_AND_CAICOS_ISLANDS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("TURKS_AND_CAICOS_ISLANDS"), Region.$ordinal_TURKS_AND_CAICOS_ISLANDS__org_pepstock_charba_client_intl_Region, "TC", "Turks and Caicos Islands");
  Region.$static_TUVALU__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("TUVALU"), Region.$ordinal_TUVALU__org_pepstock_charba_client_intl_Region, "TV", "Tuvalu");
  Region.$static_UGANDA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("UGANDA"), Region.$ordinal_UGANDA__org_pepstock_charba_client_intl_Region, "UG", "Uganda");
  Region.$static_UKRAINE__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("UKRAINE"), Region.$ordinal_UKRAINE__org_pepstock_charba_client_intl_Region, "UA", "Ukraine");
  Region.$static_UNITED_ARAB_EMIRATES__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("UNITED_ARAB_EMIRATES"), Region.$ordinal_UNITED_ARAB_EMIRATES__org_pepstock_charba_client_intl_Region, "AE", "United Arab Emirates");
  Region.$static_UNITED_KINGDOM__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("UNITED_KINGDOM"), Region.$ordinal_UNITED_KINGDOM__org_pepstock_charba_client_intl_Region, "GB", "United Kingdom");
  Region.$static_UNITED_STATES__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("UNITED_STATES"), Region.$ordinal_UNITED_STATES__org_pepstock_charba_client_intl_Region, "US", "United States");
  Region.$static_UNITED_STATES_MINOR_OUTLYING_ISLANDS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("UNITED_STATES_MINOR_OUTLYING_ISLANDS"), Region.$ordinal_UNITED_STATES_MINOR_OUTLYING_ISLANDS__org_pepstock_charba_client_intl_Region, "UM", "United States Minor Outlying Islands");
  Region.$static_UNITED_STATES_VIRGIN_ISLANDS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("UNITED_STATES_VIRGIN_ISLANDS"), Region.$ordinal_UNITED_STATES_VIRGIN_ISLANDS__org_pepstock_charba_client_intl_Region, "VI", "United States Virgin Islands");
  Region.$static_URUGUAY__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("URUGUAY"), Region.$ordinal_URUGUAY__org_pepstock_charba_client_intl_Region, "UY", "Uruguay");
  Region.$static_UZBEKISTAN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("UZBEKISTAN"), Region.$ordinal_UZBEKISTAN__org_pepstock_charba_client_intl_Region, "UZ", "Uzbekistan");
  Region.$static_VANUATU__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("VANUATU"), Region.$ordinal_VANUATU__org_pepstock_charba_client_intl_Region, "VU", "Vanuatu");
  Region.$static_VATICAN_CITY__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("VATICAN_CITY"), Region.$ordinal_VATICAN_CITY__org_pepstock_charba_client_intl_Region, "VA", "Vatican City");
  Region.$static_VENEZUELA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("VENEZUELA"), Region.$ordinal_VENEZUELA__org_pepstock_charba_client_intl_Region, "VE", "Venezuela");
  Region.$static_VIETNAM__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("VIETNAM"), Region.$ordinal_VIETNAM__org_pepstock_charba_client_intl_Region, "VN", "Vietnam");
  Region.$static_WALLIS_AND_FUTUNA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("WALLIS_AND_FUTUNA"), Region.$ordinal_WALLIS_AND_FUTUNA__org_pepstock_charba_client_intl_Region, "WF", "Wallis and Futuna");
  Region.$static_WESTERN_SAHARA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("WESTERN_SAHARA"), Region.$ordinal_WESTERN_SAHARA__org_pepstock_charba_client_intl_Region, "EH", "Western Sahara");
  Region.$static_YEMEN__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("YEMEN"), Region.$ordinal_YEMEN__org_pepstock_charba_client_intl_Region, "YE", "Yemen");
  Region.$static_ZAMBIA__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ZAMBIA"), Region.$ordinal_ZAMBIA__org_pepstock_charba_client_intl_Region, "ZM", "Zambia");
  Region.$static_ZIMBABWE__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ZIMBABWE"), Region.$ordinal_ZIMBABWE__org_pepstock_charba_client_intl_Region, "ZW", "Zimbabwe");
  Region.$static_ALAND_ISLANDS__org_pepstock_charba_client_intl_Region = Region.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ALAND_ISLANDS"), Region.$ordinal_ALAND_ISLANDS__org_pepstock_charba_client_intl_Region, "AX", "\u00C5land Islands");
  Region.f_namesToValuesMap__org_pepstock_charba_client_intl_Region_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Region;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Region}*/
Region.$static_AFGHANISTAN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ALBANIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ALGERIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_AMERICAN_SAMOA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ANDORRA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ANGOLA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ANGUILLA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ANTARCTICA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ANTIGUA_AND_BARBUDA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ARGENTINA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ARMENIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ARUBA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_AUSTRALIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_AUSTRIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_AZERBAIJAN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BAHRAIN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BAILIWICK_OF_GUERNSEY__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BANGLADESH__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BARBADOS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BELARUS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BELGIUM__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BELIZE__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BENIN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BERMUDA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BHUTAN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BOLIVIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BOSNIA_AND_HERZEGOVINA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BOTSWANA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BOUVET_ISLAND__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BRAZIL__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BRITISH_INDIAN_OCEAN_TERRITORY__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BRITISH_VIRGIN_ISLANDS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BRUNEI__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BULGARIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BURKINA_FASO__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BURUNDI__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_CABO_VERDE__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_CAMBODIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_CAMEROON__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_CANADA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_CARIBBEAN_NETHERLANDS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_CAYMAN_ISLANDS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_CENTRAL_AFRICAN_REPUBLIC__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_CHAD__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_CHILE__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_CHINA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_CHRISTMAS_ISLAND__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_COCOS_KEELING_ISLANDS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_COLLECTIVITY_OF_SAINT_MARTIN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_COLOMBIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_COMOROS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_COOK_ISLANDS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_COSTA_RICA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_CROATIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_CUBA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_CURACAO__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_CYPRUS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_CZECH_REPUBLIC__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_DEMOCRATIC_REPUBLIC_OF_THE_CONGO__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_DENMARK__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_DJIBOUTI__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_DOMINICA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_DOMINICAN_REPUBLIC__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_EAST_TIMOR__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ECUADOR__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_EGYPT__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_EL_SALVADOR__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_EQUATORIAL_GUINEA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ERITREA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ESTONIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ESWATINI__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ETHIOPIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_FALKLAND_ISLANDS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_FAROE_ISLANDS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_FEDERATED_STATES_OF_MICRONESIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_FIJI__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_FINLAND__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_FRANCE__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_FRENCH_GUIANA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_FRENCH_POLYNESIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_FRENCH_SOUTHERN_AND_ANTARCTIC_LANDS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_GABON__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_GEORGIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_GERMANY__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_GHANA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_GIBRALTAR__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_GREECE__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_GREENLAND__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_GRENADA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_GUADELOUPE__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_GUAM__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_GUATEMALA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_GUINEA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_GUINEA_BISSAU__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_GUYANA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_HAITI__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_HEARD_ISLAND_AND_MCDONALD_ISLANDS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_HONDURAS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_HONG_KONG__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_HUNGARY__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ICELAND__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_INDIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_INDONESIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_IRAN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_IRAQ__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ISLE_OF_MAN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ISRAEL__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ITALY__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_IVORY_COAST__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_JAMAICA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_JAPAN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_JERSEY__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_JORDAN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_KAZAKHSTAN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_KENYA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_KINGDOM_OF_THE_NETHERLANDS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_KIRIBATI__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_KUWAIT__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_KYRGYZSTAN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_LAOS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_LATVIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_LEBANON__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_LESOTHO__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_LIBERIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_LIBYA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_LIECHTENSTEIN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_LITHUANIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_LUXEMBOURG__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_MACAU__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_MADAGASCAR__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_MALAWI__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_MALAYSIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_MALDIVES__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_MALI__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_MALTA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_MARSHALL_ISLANDS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_MARTINIQUE__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_MAURITANIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_MAURITIUS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_MAYOTTE__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_MEXICO__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_MOLDOVA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_MONACO__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_MONGOLIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_MONTENEGRO__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_MONTSERRAT__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_MOROCCO__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_MOZAMBIQUE__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_MYANMAR__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_NAMIBIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_NAURU__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_NEPAL__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_NEW_CALEDONIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_NEW_ZEALAND__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_NICARAGUA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_NIGER__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_NIGERIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_NIUE__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_NORFOLK_ISLAND__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_NORTH_KOREA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_NORTH_MACEDONIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_NORTHERN_MARIANA_ISLANDS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_NORWAY__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_OMAN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_PAKISTAN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_PALAU__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_PANAMA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_PAPUA_NEW_GUINEA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_PARAGUAY__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_PERU__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_PHILIPPINES__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_PITCAIRN_ISLANDS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_POLAND__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_PORTUGAL__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_PUERTO_RICO__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_QATAR__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_REPUBLIC_OF_IRELAND__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_REPUBLIC_OF_THE_CONGO__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ROMANIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_RUSSIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_RWANDA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_REUNION__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SAINT_BARTHELEMY__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SAINT_HELENA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SAINT_KITTS_AND_NEVIS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SAINT_LUCIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SAINT_PIERRE_AND_MIQUELON__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SAINT_VINCENT_AND_THE_GRENADINES__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SAMOA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SAN_MARINO__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SAUDI_ARABIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SENEGAL__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SERBIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SEYCHELLES__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SIERRA_LEONE__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SINGAPORE__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SINT_MAARTEN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SLOVAKIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SLOVENIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SOLOMON_ISLANDS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SOMALIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SOUTH_AFRICA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SOUTH_KOREA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SOUTH_SUDAN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SPAIN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SRI_LANKA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_STATE_OF_PALESTINE__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SUDAN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SURINAME__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SVALBARD_AND_JAN_MAYEN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SWEDEN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SWITZERLAND__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SYRIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_SAO_TOME_AND_PRINCIPE__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_TAIWAN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_TAJIKISTAN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_TANZANIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_THAILAND__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_BAHAMAS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_GAMBIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_TOGO__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_TOKELAU__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_TONGA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_TRINIDAD_AND_TOBAGO__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_TUNISIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_TURKEY__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_TURKMENISTAN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_TURKS_AND_CAICOS_ISLANDS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_TUVALU__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_UGANDA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_UKRAINE__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_UNITED_ARAB_EMIRATES__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_UNITED_KINGDOM__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_UNITED_STATES__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_UNITED_STATES_MINOR_OUTLYING_ISLANDS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_UNITED_STATES_VIRGIN_ISLANDS__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_URUGUAY__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_UZBEKISTAN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_VANUATU__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_VATICAN_CITY__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_VENEZUELA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_VIETNAM__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_WALLIS_AND_FUTUNA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_WESTERN_SAHARA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_YEMEN__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ZAMBIA__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ZIMBABWE__org_pepstock_charba_client_intl_Region;
/**@private {!Region}*/
Region.$static_ALAND_ISLANDS__org_pepstock_charba_client_intl_Region;
/**@type {Map<?string, !Region>}*/
Region.f_namesToValuesMap__org_pepstock_charba_client_intl_Region_;
/**@const {number}*/
Region.$ordinal_AFGHANISTAN__org_pepstock_charba_client_intl_Region = 0;
/**@const {number}*/
Region.$ordinal_ALBANIA__org_pepstock_charba_client_intl_Region = 1;
/**@const {number}*/
Region.$ordinal_ALGERIA__org_pepstock_charba_client_intl_Region = 2;
/**@const {number}*/
Region.$ordinal_AMERICAN_SAMOA__org_pepstock_charba_client_intl_Region = 3;
/**@const {number}*/
Region.$ordinal_ANDORRA__org_pepstock_charba_client_intl_Region = 4;
/**@const {number}*/
Region.$ordinal_ANGOLA__org_pepstock_charba_client_intl_Region = 5;
/**@const {number}*/
Region.$ordinal_ANGUILLA__org_pepstock_charba_client_intl_Region = 6;
/**@const {number}*/
Region.$ordinal_ANTARCTICA__org_pepstock_charba_client_intl_Region = 7;
/**@const {number}*/
Region.$ordinal_ANTIGUA_AND_BARBUDA__org_pepstock_charba_client_intl_Region = 8;
/**@const {number}*/
Region.$ordinal_ARGENTINA__org_pepstock_charba_client_intl_Region = 9;
/**@const {number}*/
Region.$ordinal_ARMENIA__org_pepstock_charba_client_intl_Region = 10;
/**@const {number}*/
Region.$ordinal_ARUBA__org_pepstock_charba_client_intl_Region = 11;
/**@const {number}*/
Region.$ordinal_AUSTRALIA__org_pepstock_charba_client_intl_Region = 12;
/**@const {number}*/
Region.$ordinal_AUSTRIA__org_pepstock_charba_client_intl_Region = 13;
/**@const {number}*/
Region.$ordinal_AZERBAIJAN__org_pepstock_charba_client_intl_Region = 14;
/**@const {number}*/
Region.$ordinal_BAHRAIN__org_pepstock_charba_client_intl_Region = 15;
/**@const {number}*/
Region.$ordinal_BAILIWICK_OF_GUERNSEY__org_pepstock_charba_client_intl_Region = 16;
/**@const {number}*/
Region.$ordinal_BANGLADESH__org_pepstock_charba_client_intl_Region = 17;
/**@const {number}*/
Region.$ordinal_BARBADOS__org_pepstock_charba_client_intl_Region = 18;
/**@const {number}*/
Region.$ordinal_BELARUS__org_pepstock_charba_client_intl_Region = 19;
/**@const {number}*/
Region.$ordinal_BELGIUM__org_pepstock_charba_client_intl_Region = 20;
/**@const {number}*/
Region.$ordinal_BELIZE__org_pepstock_charba_client_intl_Region = 21;
/**@const {number}*/
Region.$ordinal_BENIN__org_pepstock_charba_client_intl_Region = 22;
/**@const {number}*/
Region.$ordinal_BERMUDA__org_pepstock_charba_client_intl_Region = 23;
/**@const {number}*/
Region.$ordinal_BHUTAN__org_pepstock_charba_client_intl_Region = 24;
/**@const {number}*/
Region.$ordinal_BOLIVIA__org_pepstock_charba_client_intl_Region = 25;
/**@const {number}*/
Region.$ordinal_BOSNIA_AND_HERZEGOVINA__org_pepstock_charba_client_intl_Region = 26;
/**@const {number}*/
Region.$ordinal_BOTSWANA__org_pepstock_charba_client_intl_Region = 27;
/**@const {number}*/
Region.$ordinal_BOUVET_ISLAND__org_pepstock_charba_client_intl_Region = 28;
/**@const {number}*/
Region.$ordinal_BRAZIL__org_pepstock_charba_client_intl_Region = 29;
/**@const {number}*/
Region.$ordinal_BRITISH_INDIAN_OCEAN_TERRITORY__org_pepstock_charba_client_intl_Region = 30;
/**@const {number}*/
Region.$ordinal_BRITISH_VIRGIN_ISLANDS__org_pepstock_charba_client_intl_Region = 31;
/**@const {number}*/
Region.$ordinal_BRUNEI__org_pepstock_charba_client_intl_Region = 32;
/**@const {number}*/
Region.$ordinal_BULGARIA__org_pepstock_charba_client_intl_Region = 33;
/**@const {number}*/
Region.$ordinal_BURKINA_FASO__org_pepstock_charba_client_intl_Region = 34;
/**@const {number}*/
Region.$ordinal_BURUNDI__org_pepstock_charba_client_intl_Region = 35;
/**@const {number}*/
Region.$ordinal_CABO_VERDE__org_pepstock_charba_client_intl_Region = 36;
/**@const {number}*/
Region.$ordinal_CAMBODIA__org_pepstock_charba_client_intl_Region = 37;
/**@const {number}*/
Region.$ordinal_CAMEROON__org_pepstock_charba_client_intl_Region = 38;
/**@const {number}*/
Region.$ordinal_CANADA__org_pepstock_charba_client_intl_Region = 39;
/**@const {number}*/
Region.$ordinal_CARIBBEAN_NETHERLANDS__org_pepstock_charba_client_intl_Region = 40;
/**@const {number}*/
Region.$ordinal_CAYMAN_ISLANDS__org_pepstock_charba_client_intl_Region = 41;
/**@const {number}*/
Region.$ordinal_CENTRAL_AFRICAN_REPUBLIC__org_pepstock_charba_client_intl_Region = 42;
/**@const {number}*/
Region.$ordinal_CHAD__org_pepstock_charba_client_intl_Region = 43;
/**@const {number}*/
Region.$ordinal_CHILE__org_pepstock_charba_client_intl_Region = 44;
/**@const {number}*/
Region.$ordinal_CHINA__org_pepstock_charba_client_intl_Region = 45;
/**@const {number}*/
Region.$ordinal_CHRISTMAS_ISLAND__org_pepstock_charba_client_intl_Region = 46;
/**@const {number}*/
Region.$ordinal_COCOS_KEELING_ISLANDS__org_pepstock_charba_client_intl_Region = 47;
/**@const {number}*/
Region.$ordinal_COLLECTIVITY_OF_SAINT_MARTIN__org_pepstock_charba_client_intl_Region = 48;
/**@const {number}*/
Region.$ordinal_COLOMBIA__org_pepstock_charba_client_intl_Region = 49;
/**@const {number}*/
Region.$ordinal_COMOROS__org_pepstock_charba_client_intl_Region = 50;
/**@const {number}*/
Region.$ordinal_COOK_ISLANDS__org_pepstock_charba_client_intl_Region = 51;
/**@const {number}*/
Region.$ordinal_COSTA_RICA__org_pepstock_charba_client_intl_Region = 52;
/**@const {number}*/
Region.$ordinal_CROATIA__org_pepstock_charba_client_intl_Region = 53;
/**@const {number}*/
Region.$ordinal_CUBA__org_pepstock_charba_client_intl_Region = 54;
/**@const {number}*/
Region.$ordinal_CURACAO__org_pepstock_charba_client_intl_Region = 55;
/**@const {number}*/
Region.$ordinal_CYPRUS__org_pepstock_charba_client_intl_Region = 56;
/**@const {number}*/
Region.$ordinal_CZECH_REPUBLIC__org_pepstock_charba_client_intl_Region = 57;
/**@const {number}*/
Region.$ordinal_DEMOCRATIC_REPUBLIC_OF_THE_CONGO__org_pepstock_charba_client_intl_Region = 58;
/**@const {number}*/
Region.$ordinal_DENMARK__org_pepstock_charba_client_intl_Region = 59;
/**@const {number}*/
Region.$ordinal_DJIBOUTI__org_pepstock_charba_client_intl_Region = 60;
/**@const {number}*/
Region.$ordinal_DOMINICA__org_pepstock_charba_client_intl_Region = 61;
/**@const {number}*/
Region.$ordinal_DOMINICAN_REPUBLIC__org_pepstock_charba_client_intl_Region = 62;
/**@const {number}*/
Region.$ordinal_EAST_TIMOR__org_pepstock_charba_client_intl_Region = 63;
/**@const {number}*/
Region.$ordinal_ECUADOR__org_pepstock_charba_client_intl_Region = 64;
/**@const {number}*/
Region.$ordinal_EGYPT__org_pepstock_charba_client_intl_Region = 65;
/**@const {number}*/
Region.$ordinal_EL_SALVADOR__org_pepstock_charba_client_intl_Region = 66;
/**@const {number}*/
Region.$ordinal_EQUATORIAL_GUINEA__org_pepstock_charba_client_intl_Region = 67;
/**@const {number}*/
Region.$ordinal_ERITREA__org_pepstock_charba_client_intl_Region = 68;
/**@const {number}*/
Region.$ordinal_ESTONIA__org_pepstock_charba_client_intl_Region = 69;
/**@const {number}*/
Region.$ordinal_ESWATINI__org_pepstock_charba_client_intl_Region = 70;
/**@const {number}*/
Region.$ordinal_ETHIOPIA__org_pepstock_charba_client_intl_Region = 71;
/**@const {number}*/
Region.$ordinal_FALKLAND_ISLANDS__org_pepstock_charba_client_intl_Region = 72;
/**@const {number}*/
Region.$ordinal_FAROE_ISLANDS__org_pepstock_charba_client_intl_Region = 73;
/**@const {number}*/
Region.$ordinal_FEDERATED_STATES_OF_MICRONESIA__org_pepstock_charba_client_intl_Region = 74;
/**@const {number}*/
Region.$ordinal_FIJI__org_pepstock_charba_client_intl_Region = 75;
/**@const {number}*/
Region.$ordinal_FINLAND__org_pepstock_charba_client_intl_Region = 76;
/**@const {number}*/
Region.$ordinal_FRANCE__org_pepstock_charba_client_intl_Region = 77;
/**@const {number}*/
Region.$ordinal_FRENCH_GUIANA__org_pepstock_charba_client_intl_Region = 78;
/**@const {number}*/
Region.$ordinal_FRENCH_POLYNESIA__org_pepstock_charba_client_intl_Region = 79;
/**@const {number}*/
Region.$ordinal_FRENCH_SOUTHERN_AND_ANTARCTIC_LANDS__org_pepstock_charba_client_intl_Region = 80;
/**@const {number}*/
Region.$ordinal_GABON__org_pepstock_charba_client_intl_Region = 81;
/**@const {number}*/
Region.$ordinal_GEORGIA__org_pepstock_charba_client_intl_Region = 82;
/**@const {number}*/
Region.$ordinal_GERMANY__org_pepstock_charba_client_intl_Region = 83;
/**@const {number}*/
Region.$ordinal_GHANA__org_pepstock_charba_client_intl_Region = 84;
/**@const {number}*/
Region.$ordinal_GIBRALTAR__org_pepstock_charba_client_intl_Region = 85;
/**@const {number}*/
Region.$ordinal_GREECE__org_pepstock_charba_client_intl_Region = 86;
/**@const {number}*/
Region.$ordinal_GREENLAND__org_pepstock_charba_client_intl_Region = 87;
/**@const {number}*/
Region.$ordinal_GRENADA__org_pepstock_charba_client_intl_Region = 88;
/**@const {number}*/
Region.$ordinal_GUADELOUPE__org_pepstock_charba_client_intl_Region = 89;
/**@const {number}*/
Region.$ordinal_GUAM__org_pepstock_charba_client_intl_Region = 90;
/**@const {number}*/
Region.$ordinal_GUATEMALA__org_pepstock_charba_client_intl_Region = 91;
/**@const {number}*/
Region.$ordinal_GUINEA__org_pepstock_charba_client_intl_Region = 92;
/**@const {number}*/
Region.$ordinal_GUINEA_BISSAU__org_pepstock_charba_client_intl_Region = 93;
/**@const {number}*/
Region.$ordinal_GUYANA__org_pepstock_charba_client_intl_Region = 94;
/**@const {number}*/
Region.$ordinal_HAITI__org_pepstock_charba_client_intl_Region = 95;
/**@const {number}*/
Region.$ordinal_HEARD_ISLAND_AND_MCDONALD_ISLANDS__org_pepstock_charba_client_intl_Region = 96;
/**@const {number}*/
Region.$ordinal_HONDURAS__org_pepstock_charba_client_intl_Region = 97;
/**@const {number}*/
Region.$ordinal_HONG_KONG__org_pepstock_charba_client_intl_Region = 98;
/**@const {number}*/
Region.$ordinal_HUNGARY__org_pepstock_charba_client_intl_Region = 99;
/**@const {number}*/
Region.$ordinal_ICELAND__org_pepstock_charba_client_intl_Region = 100;
/**@const {number}*/
Region.$ordinal_INDIA__org_pepstock_charba_client_intl_Region = 101;
/**@const {number}*/
Region.$ordinal_INDONESIA__org_pepstock_charba_client_intl_Region = 102;
/**@const {number}*/
Region.$ordinal_IRAN__org_pepstock_charba_client_intl_Region = 103;
/**@const {number}*/
Region.$ordinal_IRAQ__org_pepstock_charba_client_intl_Region = 104;
/**@const {number}*/
Region.$ordinal_ISLE_OF_MAN__org_pepstock_charba_client_intl_Region = 105;
/**@const {number}*/
Region.$ordinal_ISRAEL__org_pepstock_charba_client_intl_Region = 106;
/**@const {number}*/
Region.$ordinal_ITALY__org_pepstock_charba_client_intl_Region = 107;
/**@const {number}*/
Region.$ordinal_IVORY_COAST__org_pepstock_charba_client_intl_Region = 108;
/**@const {number}*/
Region.$ordinal_JAMAICA__org_pepstock_charba_client_intl_Region = 109;
/**@const {number}*/
Region.$ordinal_JAPAN__org_pepstock_charba_client_intl_Region = 110;
/**@const {number}*/
Region.$ordinal_JERSEY__org_pepstock_charba_client_intl_Region = 111;
/**@const {number}*/
Region.$ordinal_JORDAN__org_pepstock_charba_client_intl_Region = 112;
/**@const {number}*/
Region.$ordinal_KAZAKHSTAN__org_pepstock_charba_client_intl_Region = 113;
/**@const {number}*/
Region.$ordinal_KENYA__org_pepstock_charba_client_intl_Region = 114;
/**@const {number}*/
Region.$ordinal_KINGDOM_OF_THE_NETHERLANDS__org_pepstock_charba_client_intl_Region = 115;
/**@const {number}*/
Region.$ordinal_KIRIBATI__org_pepstock_charba_client_intl_Region = 116;
/**@const {number}*/
Region.$ordinal_KUWAIT__org_pepstock_charba_client_intl_Region = 117;
/**@const {number}*/
Region.$ordinal_KYRGYZSTAN__org_pepstock_charba_client_intl_Region = 118;
/**@const {number}*/
Region.$ordinal_LAOS__org_pepstock_charba_client_intl_Region = 119;
/**@const {number}*/
Region.$ordinal_LATVIA__org_pepstock_charba_client_intl_Region = 120;
/**@const {number}*/
Region.$ordinal_LEBANON__org_pepstock_charba_client_intl_Region = 121;
/**@const {number}*/
Region.$ordinal_LESOTHO__org_pepstock_charba_client_intl_Region = 122;
/**@const {number}*/
Region.$ordinal_LIBERIA__org_pepstock_charba_client_intl_Region = 123;
/**@const {number}*/
Region.$ordinal_LIBYA__org_pepstock_charba_client_intl_Region = 124;
/**@const {number}*/
Region.$ordinal_LIECHTENSTEIN__org_pepstock_charba_client_intl_Region = 125;
/**@const {number}*/
Region.$ordinal_LITHUANIA__org_pepstock_charba_client_intl_Region = 126;
/**@const {number}*/
Region.$ordinal_LUXEMBOURG__org_pepstock_charba_client_intl_Region = 127;
/**@const {number}*/
Region.$ordinal_MACAU__org_pepstock_charba_client_intl_Region = 128;
/**@const {number}*/
Region.$ordinal_MADAGASCAR__org_pepstock_charba_client_intl_Region = 129;
/**@const {number}*/
Region.$ordinal_MALAWI__org_pepstock_charba_client_intl_Region = 130;
/**@const {number}*/
Region.$ordinal_MALAYSIA__org_pepstock_charba_client_intl_Region = 131;
/**@const {number}*/
Region.$ordinal_MALDIVES__org_pepstock_charba_client_intl_Region = 132;
/**@const {number}*/
Region.$ordinal_MALI__org_pepstock_charba_client_intl_Region = 133;
/**@const {number}*/
Region.$ordinal_MALTA__org_pepstock_charba_client_intl_Region = 134;
/**@const {number}*/
Region.$ordinal_MARSHALL_ISLANDS__org_pepstock_charba_client_intl_Region = 135;
/**@const {number}*/
Region.$ordinal_MARTINIQUE__org_pepstock_charba_client_intl_Region = 136;
/**@const {number}*/
Region.$ordinal_MAURITANIA__org_pepstock_charba_client_intl_Region = 137;
/**@const {number}*/
Region.$ordinal_MAURITIUS__org_pepstock_charba_client_intl_Region = 138;
/**@const {number}*/
Region.$ordinal_MAYOTTE__org_pepstock_charba_client_intl_Region = 139;
/**@const {number}*/
Region.$ordinal_MEXICO__org_pepstock_charba_client_intl_Region = 140;
/**@const {number}*/
Region.$ordinal_MOLDOVA__org_pepstock_charba_client_intl_Region = 141;
/**@const {number}*/
Region.$ordinal_MONACO__org_pepstock_charba_client_intl_Region = 142;
/**@const {number}*/
Region.$ordinal_MONGOLIA__org_pepstock_charba_client_intl_Region = 143;
/**@const {number}*/
Region.$ordinal_MONTENEGRO__org_pepstock_charba_client_intl_Region = 144;
/**@const {number}*/
Region.$ordinal_MONTSERRAT__org_pepstock_charba_client_intl_Region = 145;
/**@const {number}*/
Region.$ordinal_MOROCCO__org_pepstock_charba_client_intl_Region = 146;
/**@const {number}*/
Region.$ordinal_MOZAMBIQUE__org_pepstock_charba_client_intl_Region = 147;
/**@const {number}*/
Region.$ordinal_MYANMAR__org_pepstock_charba_client_intl_Region = 148;
/**@const {number}*/
Region.$ordinal_NAMIBIA__org_pepstock_charba_client_intl_Region = 149;
/**@const {number}*/
Region.$ordinal_NAURU__org_pepstock_charba_client_intl_Region = 150;
/**@const {number}*/
Region.$ordinal_NEPAL__org_pepstock_charba_client_intl_Region = 151;
/**@const {number}*/
Region.$ordinal_NEW_CALEDONIA__org_pepstock_charba_client_intl_Region = 152;
/**@const {number}*/
Region.$ordinal_NEW_ZEALAND__org_pepstock_charba_client_intl_Region = 153;
/**@const {number}*/
Region.$ordinal_NICARAGUA__org_pepstock_charba_client_intl_Region = 154;
/**@const {number}*/
Region.$ordinal_NIGER__org_pepstock_charba_client_intl_Region = 155;
/**@const {number}*/
Region.$ordinal_NIGERIA__org_pepstock_charba_client_intl_Region = 156;
/**@const {number}*/
Region.$ordinal_NIUE__org_pepstock_charba_client_intl_Region = 157;
/**@const {number}*/
Region.$ordinal_NORFOLK_ISLAND__org_pepstock_charba_client_intl_Region = 158;
/**@const {number}*/
Region.$ordinal_NORTH_KOREA__org_pepstock_charba_client_intl_Region = 159;
/**@const {number}*/
Region.$ordinal_NORTH_MACEDONIA__org_pepstock_charba_client_intl_Region = 160;
/**@const {number}*/
Region.$ordinal_NORTHERN_MARIANA_ISLANDS__org_pepstock_charba_client_intl_Region = 161;
/**@const {number}*/
Region.$ordinal_NORWAY__org_pepstock_charba_client_intl_Region = 162;
/**@const {number}*/
Region.$ordinal_OMAN__org_pepstock_charba_client_intl_Region = 163;
/**@const {number}*/
Region.$ordinal_PAKISTAN__org_pepstock_charba_client_intl_Region = 164;
/**@const {number}*/
Region.$ordinal_PALAU__org_pepstock_charba_client_intl_Region = 165;
/**@const {number}*/
Region.$ordinal_PANAMA__org_pepstock_charba_client_intl_Region = 166;
/**@const {number}*/
Region.$ordinal_PAPUA_NEW_GUINEA__org_pepstock_charba_client_intl_Region = 167;
/**@const {number}*/
Region.$ordinal_PARAGUAY__org_pepstock_charba_client_intl_Region = 168;
/**@const {number}*/
Region.$ordinal_PERU__org_pepstock_charba_client_intl_Region = 169;
/**@const {number}*/
Region.$ordinal_PHILIPPINES__org_pepstock_charba_client_intl_Region = 170;
/**@const {number}*/
Region.$ordinal_PITCAIRN_ISLANDS__org_pepstock_charba_client_intl_Region = 171;
/**@const {number}*/
Region.$ordinal_POLAND__org_pepstock_charba_client_intl_Region = 172;
/**@const {number}*/
Region.$ordinal_PORTUGAL__org_pepstock_charba_client_intl_Region = 173;
/**@const {number}*/
Region.$ordinal_PUERTO_RICO__org_pepstock_charba_client_intl_Region = 174;
/**@const {number}*/
Region.$ordinal_QATAR__org_pepstock_charba_client_intl_Region = 175;
/**@const {number}*/
Region.$ordinal_REPUBLIC_OF_IRELAND__org_pepstock_charba_client_intl_Region = 176;
/**@const {number}*/
Region.$ordinal_REPUBLIC_OF_THE_CONGO__org_pepstock_charba_client_intl_Region = 177;
/**@const {number}*/
Region.$ordinal_ROMANIA__org_pepstock_charba_client_intl_Region = 178;
/**@const {number}*/
Region.$ordinal_RUSSIA__org_pepstock_charba_client_intl_Region = 179;
/**@const {number}*/
Region.$ordinal_RWANDA__org_pepstock_charba_client_intl_Region = 180;
/**@const {number}*/
Region.$ordinal_REUNION__org_pepstock_charba_client_intl_Region = 181;
/**@const {number}*/
Region.$ordinal_SAINT_BARTHELEMY__org_pepstock_charba_client_intl_Region = 182;
/**@const {number}*/
Region.$ordinal_SAINT_HELENA__org_pepstock_charba_client_intl_Region = 183;
/**@const {number}*/
Region.$ordinal_SAINT_KITTS_AND_NEVIS__org_pepstock_charba_client_intl_Region = 184;
/**@const {number}*/
Region.$ordinal_SAINT_LUCIA__org_pepstock_charba_client_intl_Region = 185;
/**@const {number}*/
Region.$ordinal_SAINT_PIERRE_AND_MIQUELON__org_pepstock_charba_client_intl_Region = 186;
/**@const {number}*/
Region.$ordinal_SAINT_VINCENT_AND_THE_GRENADINES__org_pepstock_charba_client_intl_Region = 187;
/**@const {number}*/
Region.$ordinal_SAMOA__org_pepstock_charba_client_intl_Region = 188;
/**@const {number}*/
Region.$ordinal_SAN_MARINO__org_pepstock_charba_client_intl_Region = 189;
/**@const {number}*/
Region.$ordinal_SAUDI_ARABIA__org_pepstock_charba_client_intl_Region = 190;
/**@const {number}*/
Region.$ordinal_SENEGAL__org_pepstock_charba_client_intl_Region = 191;
/**@const {number}*/
Region.$ordinal_SERBIA__org_pepstock_charba_client_intl_Region = 192;
/**@const {number}*/
Region.$ordinal_SEYCHELLES__org_pepstock_charba_client_intl_Region = 193;
/**@const {number}*/
Region.$ordinal_SIERRA_LEONE__org_pepstock_charba_client_intl_Region = 194;
/**@const {number}*/
Region.$ordinal_SINGAPORE__org_pepstock_charba_client_intl_Region = 195;
/**@const {number}*/
Region.$ordinal_SINT_MAARTEN__org_pepstock_charba_client_intl_Region = 196;
/**@const {number}*/
Region.$ordinal_SLOVAKIA__org_pepstock_charba_client_intl_Region = 197;
/**@const {number}*/
Region.$ordinal_SLOVENIA__org_pepstock_charba_client_intl_Region = 198;
/**@const {number}*/
Region.$ordinal_SOLOMON_ISLANDS__org_pepstock_charba_client_intl_Region = 199;
/**@const {number}*/
Region.$ordinal_SOMALIA__org_pepstock_charba_client_intl_Region = 200;
/**@const {number}*/
Region.$ordinal_SOUTH_AFRICA__org_pepstock_charba_client_intl_Region = 201;
/**@const {number}*/
Region.$ordinal_SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS__org_pepstock_charba_client_intl_Region = 202;
/**@const {number}*/
Region.$ordinal_SOUTH_KOREA__org_pepstock_charba_client_intl_Region = 203;
/**@const {number}*/
Region.$ordinal_SOUTH_SUDAN__org_pepstock_charba_client_intl_Region = 204;
/**@const {number}*/
Region.$ordinal_SPAIN__org_pepstock_charba_client_intl_Region = 205;
/**@const {number}*/
Region.$ordinal_SRI_LANKA__org_pepstock_charba_client_intl_Region = 206;
/**@const {number}*/
Region.$ordinal_STATE_OF_PALESTINE__org_pepstock_charba_client_intl_Region = 207;
/**@const {number}*/
Region.$ordinal_SUDAN__org_pepstock_charba_client_intl_Region = 208;
/**@const {number}*/
Region.$ordinal_SURINAME__org_pepstock_charba_client_intl_Region = 209;
/**@const {number}*/
Region.$ordinal_SVALBARD_AND_JAN_MAYEN__org_pepstock_charba_client_intl_Region = 210;
/**@const {number}*/
Region.$ordinal_SWEDEN__org_pepstock_charba_client_intl_Region = 211;
/**@const {number}*/
Region.$ordinal_SWITZERLAND__org_pepstock_charba_client_intl_Region = 212;
/**@const {number}*/
Region.$ordinal_SYRIA__org_pepstock_charba_client_intl_Region = 213;
/**@const {number}*/
Region.$ordinal_SAO_TOME_AND_PRINCIPE__org_pepstock_charba_client_intl_Region = 214;
/**@const {number}*/
Region.$ordinal_TAIWAN__org_pepstock_charba_client_intl_Region = 215;
/**@const {number}*/
Region.$ordinal_TAJIKISTAN__org_pepstock_charba_client_intl_Region = 216;
/**@const {number}*/
Region.$ordinal_TANZANIA__org_pepstock_charba_client_intl_Region = 217;
/**@const {number}*/
Region.$ordinal_THAILAND__org_pepstock_charba_client_intl_Region = 218;
/**@const {number}*/
Region.$ordinal_BAHAMAS__org_pepstock_charba_client_intl_Region = 219;
/**@const {number}*/
Region.$ordinal_GAMBIA__org_pepstock_charba_client_intl_Region = 220;
/**@const {number}*/
Region.$ordinal_TOGO__org_pepstock_charba_client_intl_Region = 221;
/**@const {number}*/
Region.$ordinal_TOKELAU__org_pepstock_charba_client_intl_Region = 222;
/**@const {number}*/
Region.$ordinal_TONGA__org_pepstock_charba_client_intl_Region = 223;
/**@const {number}*/
Region.$ordinal_TRINIDAD_AND_TOBAGO__org_pepstock_charba_client_intl_Region = 224;
/**@const {number}*/
Region.$ordinal_TUNISIA__org_pepstock_charba_client_intl_Region = 225;
/**@const {number}*/
Region.$ordinal_TURKEY__org_pepstock_charba_client_intl_Region = 226;
/**@const {number}*/
Region.$ordinal_TURKMENISTAN__org_pepstock_charba_client_intl_Region = 227;
/**@const {number}*/
Region.$ordinal_TURKS_AND_CAICOS_ISLANDS__org_pepstock_charba_client_intl_Region = 228;
/**@const {number}*/
Region.$ordinal_TUVALU__org_pepstock_charba_client_intl_Region = 229;
/**@const {number}*/
Region.$ordinal_UGANDA__org_pepstock_charba_client_intl_Region = 230;
/**@const {number}*/
Region.$ordinal_UKRAINE__org_pepstock_charba_client_intl_Region = 231;
/**@const {number}*/
Region.$ordinal_UNITED_ARAB_EMIRATES__org_pepstock_charba_client_intl_Region = 232;
/**@const {number}*/
Region.$ordinal_UNITED_KINGDOM__org_pepstock_charba_client_intl_Region = 233;
/**@const {number}*/
Region.$ordinal_UNITED_STATES__org_pepstock_charba_client_intl_Region = 234;
/**@const {number}*/
Region.$ordinal_UNITED_STATES_MINOR_OUTLYING_ISLANDS__org_pepstock_charba_client_intl_Region = 235;
/**@const {number}*/
Region.$ordinal_UNITED_STATES_VIRGIN_ISLANDS__org_pepstock_charba_client_intl_Region = 236;
/**@const {number}*/
Region.$ordinal_URUGUAY__org_pepstock_charba_client_intl_Region = 237;
/**@const {number}*/
Region.$ordinal_UZBEKISTAN__org_pepstock_charba_client_intl_Region = 238;
/**@const {number}*/
Region.$ordinal_VANUATU__org_pepstock_charba_client_intl_Region = 239;
/**@const {number}*/
Region.$ordinal_VATICAN_CITY__org_pepstock_charba_client_intl_Region = 240;
/**@const {number}*/
Region.$ordinal_VENEZUELA__org_pepstock_charba_client_intl_Region = 241;
/**@const {number}*/
Region.$ordinal_VIETNAM__org_pepstock_charba_client_intl_Region = 242;
/**@const {number}*/
Region.$ordinal_WALLIS_AND_FUTUNA__org_pepstock_charba_client_intl_Region = 243;
/**@const {number}*/
Region.$ordinal_WESTERN_SAHARA__org_pepstock_charba_client_intl_Region = 244;
/**@const {number}*/
Region.$ordinal_YEMEN__org_pepstock_charba_client_intl_Region = 245;
/**@const {number}*/
Region.$ordinal_ZAMBIA__org_pepstock_charba_client_intl_Region = 246;
/**@const {number}*/
Region.$ordinal_ZIMBABWE__org_pepstock_charba_client_intl_Region = 247;
/**@const {number}*/
Region.$ordinal_ALAND_ISLANDS__org_pepstock_charba_client_intl_Region = 248;
IsLocaleItem.$markImplementor(Region);
$Util.$setClassMetadataForEnum(Region, "org.pepstock.charba.client.intl.Region");

exports = Region;

//# sourceMappingURL=Region.js.map
