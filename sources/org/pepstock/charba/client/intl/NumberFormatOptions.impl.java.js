goog.module('org.pepstock.charba.client.intl.NumberFormatOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultNumberFormatOptions = goog.require('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions$impl');
const BaseFormatOptions = goog.require('org.pepstock.charba.client.intl.BaseFormatOptions$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let DefaultNumberFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultNumberFormatOptions$impl');
let NumberFormatOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.intl.NumberFormatOptions.NumberFormatOptionsFactory$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.intl.NumberFormatOptions.Property$impl');
let CompactDisplay = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.CompactDisplay$impl');
let Currency = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.Currency$impl');
let CurrencyDisplay = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.CurrencyDisplay$impl');
let CurrencySign = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.CurrencySign$impl');
let MeasureUnit = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.MeasureUnit$impl');
let MeasureUnitDisplay = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.MeasureUnitDisplay$impl');
let Notation = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.Notation$impl');
let SignDisplay = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.SignDisplay$impl');
let Style = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.Style$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseFormatOptions<IsDefaultNumberFormatOptions>}
 * @implements {IsDefaultNumberFormatOptions}
 */
class NumberFormatOptions extends BaseFormatOptions {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'NumberFormatOptions()'.
 /** @return {!NumberFormatOptions} */
 static $create__() {
  NumberFormatOptions.$clinit();
  let $instance = new NumberFormatOptions();
  $instance.$ctor__org_pepstock_charba_client_intl_NumberFormatOptions__();
  return $instance;
 }
 //Initialization from constructor 'NumberFormatOptions()'.
 
 $ctor__org_pepstock_charba_client_intl_NumberFormatOptions__() {
  this.$ctor__org_pepstock_charba_client_intl_NumberFormatOptions__org_pepstock_charba_client_commons_NativeObject(null);
 }
 //Factory method corresponding to constructor 'NumberFormatOptions(NativeObject)'.
 /** @return {!NumberFormatOptions} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  NumberFormatOptions.$clinit();
  let $instance = new NumberFormatOptions();
  $instance.$ctor__org_pepstock_charba_client_intl_NumberFormatOptions__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'NumberFormatOptions(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_intl_NumberFormatOptions__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_intl_NumberFormatOptions__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions(nativeObject, DefaultNumberFormatOptions.f_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultNumberFormatOptions);
 }
 //Factory method corresponding to constructor 'NumberFormatOptions(NativeObject, IsDefaultNumberFormatOptions)'.
 /** @return {!NumberFormatOptions} */
 static $create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions(/** ? */ nativeObject, /** IsDefaultNumberFormatOptions */ defaultValues) {
  NumberFormatOptions.$clinit();
  let $instance = new NumberFormatOptions();
  $instance.$ctor__org_pepstock_charba_client_intl_NumberFormatOptions__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions(nativeObject, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'NumberFormatOptions(NativeObject, IsDefaultNumberFormatOptions)'.
 
 $ctor__org_pepstock_charba_client_intl_NumberFormatOptions__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions(/** ? */ nativeObject, /** IsDefaultNumberFormatOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_intl_BaseFormatOptions__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultBaseFormatOptions(nativeObject, defaultValues);
 }
 
 m_setCompactDisplay__org_pepstock_charba_client_intl_enums_CompactDisplay(/** CompactDisplay */ display) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_COMPACT_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property, display);
 }
 /** @override @return {CompactDisplay} */
 m_getCompactDisplay__() {
  return /**@type {CompactDisplay}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_COMPACT_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property, CompactDisplay.m_values__(), /**@type {IsDefaultNumberFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultNumberFormatOptions)).m_getCompactDisplay__()), CompactDisplay));
 }
 
 m_setCurrency__org_pepstock_charba_client_intl_enums_Currency(/** Currency */ currency) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CURRENCY__org_pepstock_charba_client_intl_NumberFormatOptions_Property, currency);
 }
 /** @override @return {Currency} */
 m_getCurrency__() {
  return /**@type {Currency}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CURRENCY__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Currency.m_values__(), /**@type {IsDefaultNumberFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultNumberFormatOptions)).m_getCurrency__()), Currency));
 }
 
 m_setCurrencyDisplay__org_pepstock_charba_client_intl_enums_CurrencyDisplay(/** CurrencyDisplay */ currencyDisplay) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CURRENCY_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property, currencyDisplay);
 }
 /** @override @return {CurrencyDisplay} */
 m_getCurrencyDisplay__() {
  return /**@type {CurrencyDisplay}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CURRENCY_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property, CurrencyDisplay.m_values__(), /**@type {IsDefaultNumberFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultNumberFormatOptions)).m_getCurrencyDisplay__()), CurrencyDisplay));
 }
 
 m_setCurrencySign__org_pepstock_charba_client_intl_enums_CurrencySign(/** CurrencySign */ currencySign) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CURRENCY_SIGN__org_pepstock_charba_client_intl_NumberFormatOptions_Property, currencySign);
 }
 /** @override @return {CurrencySign} */
 m_getCurrencySign__() {
  return /**@type {CurrencySign}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CURRENCY_SIGN__org_pepstock_charba_client_intl_NumberFormatOptions_Property, CurrencySign.m_values__(), /**@type {IsDefaultNumberFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultNumberFormatOptions)).m_getCurrencySign__()), CurrencySign));
 }
 
 m_setNotation__org_pepstock_charba_client_intl_enums_Notation(/** Notation */ notation) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_NOTATION__org_pepstock_charba_client_intl_NumberFormatOptions_Property, notation);
 }
 /** @override @return {Notation} */
 m_getNotation__() {
  return /**@type {Notation}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_NOTATION__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Notation.m_values__(), /**@type {IsDefaultNumberFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultNumberFormatOptions)).m_getNotation__()), Notation));
 }
 
 m_setSignDisplay__org_pepstock_charba_client_intl_enums_SignDisplay(/** SignDisplay */ signDisplay) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_SIGN_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property, signDisplay);
 }
 /** @override @return {SignDisplay} */
 m_getSignDisplay__() {
  return /**@type {SignDisplay}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_SIGN_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property, SignDisplay.m_values__(), /**@type {IsDefaultNumberFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultNumberFormatOptions)).m_getSignDisplay__()), SignDisplay));
 }
 
 m_setStyle__org_pepstock_charba_client_intl_enums_Style(/** Style */ style) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_STYLE__org_pepstock_charba_client_intl_NumberFormatOptions_Property, style);
 }
 /** @override @return {Style} */
 m_getStyle__() {
  return /**@type {Style}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_STYLE__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Style.m_values__(), /**@type {IsDefaultNumberFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultNumberFormatOptions)).m_getStyle__()), Style));
 }
 
 m_setUnitsOfMeasure__arrayOf_org_pepstock_charba_client_intl_enums_MeasureUnit(/** Array<MeasureUnit> */ units) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_UNIT__org_pepstock_charba_client_intl_NumberFormatOptions_Property, this.m_createCompoundUnitIdentifier__arrayOf_org_pepstock_charba_client_intl_enums_MeasureUnit_$p_org_pepstock_charba_client_intl_NumberFormatOptions(units));
 }
 
 m_setUnitsOfMeasure__java_util_List(/** List<MeasureUnit> */ units) {
  if (!$Equality.$same(units, null) && !units.isEmpty()) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_UNIT__org_pepstock_charba_client_intl_NumberFormatOptions_Property, this.m_createCompoundUnitIdentifier__arrayOf_org_pepstock_charba_client_intl_enums_MeasureUnit_$p_org_pepstock_charba_client_intl_NumberFormatOptions(/**@type {Array<MeasureUnit>}*/ ($Arrays.$castTo(units.m_toArray__arrayOf_java_lang_Object(/**@type {!Array<MeasureUnit>}*/ ($Arrays.$create([0], MeasureUnit))), MeasureUnit, 1))));
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_UNIT__org_pepstock_charba_client_intl_NumberFormatOptions_Property);
  }
 }
 /** @override @return {List<MeasureUnit>} */
 m_getUnitsOfMeasure__() {
  return this.m_parseCompoundUnitIdentifier__java_lang_String_$p_org_pepstock_charba_client_intl_NumberFormatOptions(this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_UNIT__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined));
 }
 /** @return {?string} */
 m_createCompoundUnitIdentifier__arrayOf_org_pepstock_charba_client_intl_enums_MeasureUnit_$p_org_pepstock_charba_client_intl_NumberFormatOptions(/** Array<MeasureUnit> */ units) {
  if (!$Equality.$same(units, null) && units.length > 0) {
   let sb = StringBuilder.$create__java_lang_String(/**@type {MeasureUnit}*/ ($Casts.$to(Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(units[0]), MeasureUnit)).m_value__());
   for (let i = 1; i < units.length; i = i + 1 | 0) {
    sb.m_append__java_lang_String(NumberFormatOptions.f_COMPOUND_UNIT_SEPARATOR__org_pepstock_charba_client_intl_NumberFormatOptions_).m_append__java_lang_String(units[i].m_value__());
   }
   return sb.toString();
  }
  return Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {List<MeasureUnit>} */
 m_parseCompoundUnitIdentifier__java_lang_String_$p_org_pepstock_charba_client_intl_NumberFormatOptions(/** ?string */ compoundUnitIdentifier) {
  if (!$Equality.$same(compoundUnitIdentifier, null) && j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(compoundUnitIdentifier)) > 0) {
   let result = /**@type {!LinkedList<MeasureUnit>}*/ (LinkedList.$create__());
   let tokens = j_l_String.m_split__java_lang_String__java_lang_String(compoundUnitIdentifier, NumberFormatOptions.f_COMPOUND_UNIT_SEPARATOR__org_pepstock_charba_client_intl_NumberFormatOptions_);
   if (tokens.length > 0) {
    for (let $array = tokens, $index = 0; $index < $array.length; $index++) {
     let token = $array[$index];
     {
      result.add(/**@type {MeasureUnit}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(MeasureUnit.m_values__(), token), MeasureUnit)));
     }
    }
    return /**@type {List<MeasureUnit>}*/ (Collections.m_unmodifiableList__java_util_List(result));
   }
  }
  return /**@type {IsDefaultNumberFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultNumberFormatOptions)).m_getUnitsOfMeasure__();
 }
 
 m_setUnitOfMeasureDisplay__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay(/** MeasureUnitDisplay */ unitDisplay) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_UNIT_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property, unitDisplay);
 }
 /** @override @return {MeasureUnitDisplay} */
 m_getUnitOfMeasureDisplay__() {
  return /**@type {MeasureUnitDisplay}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_UNIT_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property, MeasureUnitDisplay.m_values__(), /**@type {IsDefaultNumberFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultNumberFormatOptions)).m_getUnitOfMeasureDisplay__()), MeasureUnitDisplay));
 }
 
 m_setUseGrouping__boolean(/** boolean */ useGrouping) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_USE_GROUPING__org_pepstock_charba_client_intl_NumberFormatOptions_Property, useGrouping);
 }
 /** @override @return {boolean} */
 m_isUseGrouping__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_USE_GROUPING__org_pepstock_charba_client_intl_NumberFormatOptions_Property, /**@type {IsDefaultNumberFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultNumberFormatOptions)).m_isUseGrouping__());
 }
 
 m_setMinimumIntegerDigits__int(/** number */ minimumIntegerDigits) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_MINIMUM_INTEGER_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Math.max(Math.min(minimumIntegerDigits, 21), 1));
 }
 /** @override @return {number} */
 m_getMinimumIntegerDigits__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_MINIMUM_INTEGER_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property, /**@type {IsDefaultNumberFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultNumberFormatOptions)).m_getMinimumIntegerDigits__());
 }
 
 m_setMinimumFractionDigits__int(/** number */ minimumFractionDigits) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_MINIMUM_FRACTION_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Math.max(Math.min(minimumFractionDigits, 20), 0));
 }
 /** @override @return {number} */
 m_getMinimumFractionDigits__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_MINIMUM_FRACTION_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property, /**@type {IsDefaultNumberFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultNumberFormatOptions)).m_getMinimumFractionDigits__());
 }
 
 m_setMaximumFractionDigits__int(/** number */ maximumFractionDigits) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_MAXIMUM_FRACTION_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Math.max(Math.min(maximumFractionDigits, 20), 0));
 }
 /** @override @return {number} */
 m_getMaximumFractionDigits__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_MAXIMUM_FRACTION_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property, /**@type {IsDefaultNumberFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultNumberFormatOptions)).m_getMaximumFractionDigits__());
 }
 
 m_setMinimumSignificantDigits__int(/** number */ minimumIntegerDigits) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_MINIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Math.max(Math.min(minimumIntegerDigits, 21), 1));
 }
 /** @override @return {number} */
 m_getMinimumSignificantDigits__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_MINIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property, /**@type {IsDefaultNumberFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultNumberFormatOptions)).m_getMinimumSignificantDigits__());
 }
 
 m_setMaximumSignificantDigits__int(/** number */ minimumIntegerDigits) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_MAXIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Math.max(Math.min(minimumIntegerDigits, 21), 1));
 }
 /** @override @return {number} */
 m_getMaximumSignificantDigits__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_MAXIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property, /**@type {IsDefaultNumberFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultNumberFormatOptions)).m_getMaximumSignificantDigits__());
 }
 /** @return {NumberFormatOptionsFactory} */
 static get f_FACTORY__org_pepstock_charba_client_intl_NumberFormatOptions() {
  return (NumberFormatOptions.$clinit(), NumberFormatOptions.$static_FACTORY__org_pepstock_charba_client_intl_NumberFormatOptions);
 }
 
 static $clinit() {
  NumberFormatOptions.$clinit = () =>{};
  NumberFormatOptions.$loadModules();
  BaseFormatOptions.$clinit();
  IsDefaultNumberFormatOptions.$clinit();
  NumberFormatOptions.$static_FACTORY__org_pepstock_charba_client_intl_NumberFormatOptions = NumberFormatOptionsFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NumberFormatOptions;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  DefaultNumberFormatOptions = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultNumberFormatOptions$impl');
  NumberFormatOptionsFactory = goog.module.get('org.pepstock.charba.client.intl.NumberFormatOptions.NumberFormatOptionsFactory$impl');
  Property = goog.module.get('org.pepstock.charba.client.intl.NumberFormatOptions.Property$impl');
  CompactDisplay = goog.module.get('org.pepstock.charba.client.intl.enums.CompactDisplay$impl');
  Currency = goog.module.get('org.pepstock.charba.client.intl.enums.Currency$impl');
  CurrencyDisplay = goog.module.get('org.pepstock.charba.client.intl.enums.CurrencyDisplay$impl');
  CurrencySign = goog.module.get('org.pepstock.charba.client.intl.enums.CurrencySign$impl');
  MeasureUnit = goog.module.get('org.pepstock.charba.client.intl.enums.MeasureUnit$impl');
  MeasureUnitDisplay = goog.module.get('org.pepstock.charba.client.intl.enums.MeasureUnitDisplay$impl');
  Notation = goog.module.get('org.pepstock.charba.client.intl.enums.Notation$impl');
  SignDisplay = goog.module.get('org.pepstock.charba.client.intl.enums.SignDisplay$impl');
  Style = goog.module.get('org.pepstock.charba.client.intl.enums.Style$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {NumberFormatOptionsFactory}*/
NumberFormatOptions.$static_FACTORY__org_pepstock_charba_client_intl_NumberFormatOptions;
/**@const {?string}*/
NumberFormatOptions.f_COMPOUND_UNIT_SEPARATOR__org_pepstock_charba_client_intl_NumberFormatOptions_ = "-per-";
IsDefaultNumberFormatOptions.$markImplementor(NumberFormatOptions);
$Util.$setClassMetadata(NumberFormatOptions, "org.pepstock.charba.client.intl.NumberFormatOptions");

exports = NumberFormatOptions;

//# sourceMappingURL=NumberFormatOptions.js.map
