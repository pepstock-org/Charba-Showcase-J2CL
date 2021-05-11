goog.module('org.pepstock.charba.client.configuration.NumberFormatter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractDynamicConfiguration = goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration$impl');
const IsNumberFormat = goog.require('org.pepstock.charba.client.options.IsNumberFormat$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let IsProvider = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
let IsDefaultNumberFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions$impl');
let CompactDisplay = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.CompactDisplay$impl');
let Currency = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.Currency$impl');
let CurrencyDisplay = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.CurrencyDisplay$impl');
let CurrencySign = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.CurrencySign$impl');
let LocaleMatcher = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.LocaleMatcher$impl');
let MeasureUnit = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.MeasureUnit$impl');
let MeasureUnitDisplay = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.MeasureUnitDisplay$impl');
let Notation = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.Notation$impl');
let NumberingSystem = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.NumberingSystem$impl');
let SignDisplay = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.SignDisplay$impl');
let Style = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.Style$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractDynamicConfiguration<IsNumberFormat>}
 * @implements {IsNumberFormat}
 */
class NumberFormatter extends AbstractDynamicConfiguration {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!NumberFormatter} */
 static $create__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(/** IsProvider<IsNumberFormat> */ provider) {
  NumberFormatter.$clinit();
  let $instance = new NumberFormatter();
  $instance.$ctor__org_pepstock_charba_client_configuration_NumberFormatter__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(provider);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_NumberFormatter__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(/** IsProvider<IsNumberFormat> */ provider) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(provider);
 }
 /** @override */
 m_setLocaleMatcher__org_pepstock_charba_client_intl_enums_LocaleMatcher(/** LocaleMatcher */ localeMatcher) {
  /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_setLocaleMatcher__org_pepstock_charba_client_intl_enums_LocaleMatcher(localeMatcher);
 }
 /** @override @return {LocaleMatcher} */
 m_getLocaleMatcher__() {
  return /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_getLocaleMatcher__();
 }
 /** @override */
 m_setNumberingSystem__org_pepstock_charba_client_intl_enums_NumberingSystem(/** NumberingSystem */ numberingSystem) {
  /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_setNumberingSystem__org_pepstock_charba_client_intl_enums_NumberingSystem(numberingSystem);
 }
 /** @override @return {NumberingSystem} */
 m_getNumberingSystem__() {
  return /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_getNumberingSystem__();
 }
 /** @override */
 m_setCompactDisplay__org_pepstock_charba_client_intl_enums_CompactDisplay(/** CompactDisplay */ display) {
  /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_setCompactDisplay__org_pepstock_charba_client_intl_enums_CompactDisplay(display);
 }
 /** @override @return {CompactDisplay} */
 m_getCompactDisplay__() {
  return /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_getCompactDisplay__();
 }
 /** @override */
 m_setCurrency__org_pepstock_charba_client_intl_enums_Currency(/** Currency */ currency) {
  /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_setCurrency__org_pepstock_charba_client_intl_enums_Currency(currency);
 }
 /** @override @return {Currency} */
 m_getCurrency__() {
  return /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_getCurrency__();
 }
 /** @override */
 m_setCurrencyDisplay__org_pepstock_charba_client_intl_enums_CurrencyDisplay(/** CurrencyDisplay */ currencyDisplay) {
  /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_setCurrencyDisplay__org_pepstock_charba_client_intl_enums_CurrencyDisplay(currencyDisplay);
 }
 /** @override @return {CurrencyDisplay} */
 m_getCurrencyDisplay__() {
  return /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_getCurrencyDisplay__();
 }
 /** @override */
 m_setCurrencySign__org_pepstock_charba_client_intl_enums_CurrencySign(/** CurrencySign */ currencySign) {
  /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_setCurrencySign__org_pepstock_charba_client_intl_enums_CurrencySign(currencySign);
 }
 /** @override @return {CurrencySign} */
 m_getCurrencySign__() {
  return /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_getCurrencySign__();
 }
 /** @override */
 m_setNotation__org_pepstock_charba_client_intl_enums_Notation(/** Notation */ notation) {
  /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_setNotation__org_pepstock_charba_client_intl_enums_Notation(notation);
 }
 /** @override @return {Notation} */
 m_getNotation__() {
  return /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_getNotation__();
 }
 /** @override */
 m_setSignDisplay__org_pepstock_charba_client_intl_enums_SignDisplay(/** SignDisplay */ signDisplay) {
  /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_setSignDisplay__org_pepstock_charba_client_intl_enums_SignDisplay(signDisplay);
 }
 /** @override @return {SignDisplay} */
 m_getSignDisplay__() {
  return /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_getSignDisplay__();
 }
 /** @override */
 m_setStyle__org_pepstock_charba_client_intl_enums_Style(/** Style */ style) {
  /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_setStyle__org_pepstock_charba_client_intl_enums_Style(style);
 }
 /** @override @return {Style} */
 m_getStyle__() {
  return /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_getStyle__();
 }
 /** @override */
 m_setUnitsOfMeasure__arrayOf_org_pepstock_charba_client_intl_enums_MeasureUnit(/** Array<MeasureUnit> */ units) {
  /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_setUnitsOfMeasure__arrayOf_org_pepstock_charba_client_intl_enums_MeasureUnit(units);
 }
 /** @override */
 m_setUnitsOfMeasure__java_util_List(/** List<MeasureUnit> */ units) {
  /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_setUnitsOfMeasure__java_util_List(units);
 }
 /** @override @return {List<MeasureUnit>} */
 m_getUnitsOfMeasure__() {
  return /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_getUnitsOfMeasure__();
 }
 /** @override */
 m_setUnitOfMeasureDisplay__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay(/** MeasureUnitDisplay */ unitDisplay) {
  /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_setUnitOfMeasureDisplay__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay(unitDisplay);
 }
 /** @override @return {MeasureUnitDisplay} */
 m_getUnitOfMeasureDisplay__() {
  return /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_getUnitOfMeasureDisplay__();
 }
 /** @override */
 m_setUseGrouping__boolean(/** boolean */ useGrouping) {
  /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_setUseGrouping__boolean(useGrouping);
 }
 /** @override @return {boolean} */
 m_isUseGrouping__() {
  return /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_isUseGrouping__();
 }
 /** @override */
 m_setMinimumIntegerDigits__int(/** number */ minimumIntegerDigits) {
  /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_setMinimumIntegerDigits__int(minimumIntegerDigits);
 }
 /** @override @return {number} */
 m_getMinimumIntegerDigits__() {
  return /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_getMinimumIntegerDigits__();
 }
 /** @override */
 m_setMinimumFractionDigits__int(/** number */ minimumFractionDigits) {
  /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_setMinimumFractionDigits__int(minimumFractionDigits);
 }
 /** @override @return {number} */
 m_getMinimumFractionDigits__() {
  return /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_getMinimumFractionDigits__();
 }
 /** @override */
 m_setMaximumFractionDigits__int(/** number */ maximumFractionDigits) {
  /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_setMaximumFractionDigits__int(maximumFractionDigits);
 }
 /** @override @return {number} */
 m_getMaximumFractionDigits__() {
  return /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_getMaximumFractionDigits__();
 }
 /** @override */
 m_setMinimumSignificantDigits__int(/** number */ minimumIntegerDigits) {
  /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_setMinimumSignificantDigits__int(minimumIntegerDigits);
 }
 /** @override @return {number} */
 m_getMinimumSignificantDigits__() {
  return /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_getMinimumSignificantDigits__();
 }
 /** @override */
 m_setMaximumSignificantDigits__int(/** number */ minimumIntegerDigits) {
  /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_setMaximumSignificantDigits__int(minimumIntegerDigits);
 }
 /** @override @return {number} */
 m_getMaximumSignificantDigits__() {
  return /**@type {IsNumberFormat}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsNumberFormat)).m_getMaximumSignificantDigits__();
 }
 
 static $clinit() {
  NumberFormatter.$clinit = () =>{};
  NumberFormatter.$loadModules();
  AbstractDynamicConfiguration.$clinit();
  IsDefaultNumberFormatOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NumberFormatter;
 }
 
 static $loadModules() {
  IsDefaultNumberFormatOptions = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsNumberFormat.$markImplementor(NumberFormatter);
$Util.$setClassMetadata(NumberFormatter, "org.pepstock.charba.client.configuration.NumberFormatter");

exports = NumberFormatter;

//# sourceMappingURL=NumberFormatter.js.map
