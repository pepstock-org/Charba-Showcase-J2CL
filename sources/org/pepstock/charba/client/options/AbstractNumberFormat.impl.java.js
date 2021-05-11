goog.module('org.pepstock.charba.client.options.AbstractNumberFormat$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');
const IsNumberFormat = goog.require('org.pepstock.charba.client.options.IsNumberFormat$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDefaultNumberFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions$impl');
let NumberFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.intl.NumberFormatOptions$impl');
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
 * @abstract
 * @template P
 * @extends {AbstractModel<P, IsDefaultNumberFormatOptions>}
 * @implements {IsNumberFormat}
 */
class AbstractNumberFormat extends AbstractModel {
 /** @protected */
 constructor() {
  super();
  /**@type {NumberFormatOptions}*/
  this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_;
 }
 
 $ctor__org_pepstock_charba_client_options_AbstractNumberFormat__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions__org_pepstock_charba_client_commons_NativeObject(/** P */ model, /** Key */ childKey, /** IsDefaultNumberFormatOptions */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(model, childKey, defaultValues, nativeObject);
  this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_ = NumberFormatOptions.f_FACTORY__org_pepstock_charba_client_intl_NumberFormatOptions.m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions(this.m_getNativeObject__(), /**@type {IsDefaultNumberFormatOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultNumberFormatOptions)));
 }
 /** @override */
 m_setLocaleMatcher__org_pepstock_charba_client_intl_enums_LocaleMatcher(/** LocaleMatcher */ localeMatcher) {
  this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_setLocaleMatcher__org_pepstock_charba_client_intl_enums_LocaleMatcher(localeMatcher);
  this.m_checkAndAddToParent__();
 }
 /** @override @return {LocaleMatcher} */
 m_getLocaleMatcher__() {
  return this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_getLocaleMatcher__();
 }
 /** @override */
 m_setNumberingSystem__org_pepstock_charba_client_intl_enums_NumberingSystem(/** NumberingSystem */ numberingSystem) {
  this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_setNumberingSystem__org_pepstock_charba_client_intl_enums_NumberingSystem(numberingSystem);
  this.m_checkAndAddToParent__();
 }
 /** @override @return {NumberingSystem} */
 m_getNumberingSystem__() {
  return this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_getNumberingSystem__();
 }
 /** @override */
 m_setCompactDisplay__org_pepstock_charba_client_intl_enums_CompactDisplay(/** CompactDisplay */ display) {
  this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_setCompactDisplay__org_pepstock_charba_client_intl_enums_CompactDisplay(display);
  this.m_checkAndAddToParent__();
 }
 /** @override @return {CompactDisplay} */
 m_getCompactDisplay__() {
  return this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_getCompactDisplay__();
 }
 /** @override */
 m_setCurrency__org_pepstock_charba_client_intl_enums_Currency(/** Currency */ currency) {
  this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_setCurrency__org_pepstock_charba_client_intl_enums_Currency(currency);
  this.m_checkAndAddToParent__();
 }
 /** @override @return {Currency} */
 m_getCurrency__() {
  return this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_getCurrency__();
 }
 /** @override */
 m_setCurrencyDisplay__org_pepstock_charba_client_intl_enums_CurrencyDisplay(/** CurrencyDisplay */ currencyDisplay) {
  this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_setCurrencyDisplay__org_pepstock_charba_client_intl_enums_CurrencyDisplay(currencyDisplay);
  this.m_checkAndAddToParent__();
 }
 /** @override @return {CurrencyDisplay} */
 m_getCurrencyDisplay__() {
  return this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_getCurrencyDisplay__();
 }
 /** @override */
 m_setCurrencySign__org_pepstock_charba_client_intl_enums_CurrencySign(/** CurrencySign */ currencySign) {
  this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_setCurrencySign__org_pepstock_charba_client_intl_enums_CurrencySign(currencySign);
  this.m_checkAndAddToParent__();
 }
 /** @override @return {CurrencySign} */
 m_getCurrencySign__() {
  return this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_getCurrencySign__();
 }
 /** @override */
 m_setNotation__org_pepstock_charba_client_intl_enums_Notation(/** Notation */ notation) {
  this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_setNotation__org_pepstock_charba_client_intl_enums_Notation(notation);
  this.m_checkAndAddToParent__();
 }
 /** @override @return {Notation} */
 m_getNotation__() {
  return this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_getNotation__();
 }
 /** @override */
 m_setSignDisplay__org_pepstock_charba_client_intl_enums_SignDisplay(/** SignDisplay */ signDisplay) {
  this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_setSignDisplay__org_pepstock_charba_client_intl_enums_SignDisplay(signDisplay);
  this.m_checkAndAddToParent__();
 }
 /** @override @return {SignDisplay} */
 m_getSignDisplay__() {
  return this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_getSignDisplay__();
 }
 /** @override */
 m_setStyle__org_pepstock_charba_client_intl_enums_Style(/** Style */ style) {
  this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_setStyle__org_pepstock_charba_client_intl_enums_Style(style);
  this.m_checkAndAddToParent__();
 }
 /** @override @return {Style} */
 m_getStyle__() {
  return this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_getStyle__();
 }
 /** @override */
 m_setUnitsOfMeasure__arrayOf_org_pepstock_charba_client_intl_enums_MeasureUnit(/** Array<MeasureUnit> */ units) {
  this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_setUnitsOfMeasure__arrayOf_org_pepstock_charba_client_intl_enums_MeasureUnit(units);
  this.m_checkAndAddToParent__();
 }
 /** @override */
 m_setUnitsOfMeasure__java_util_List(/** List<MeasureUnit> */ units) {
  this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_setUnitsOfMeasure__java_util_List(units);
  this.m_checkAndAddToParent__();
 }
 /** @override @return {List<MeasureUnit>} */
 m_getUnitsOfMeasure__() {
  return this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_getUnitsOfMeasure__();
 }
 /** @override */
 m_setUnitOfMeasureDisplay__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay(/** MeasureUnitDisplay */ unitDisplay) {
  this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_setUnitOfMeasureDisplay__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay(unitDisplay);
  this.m_checkAndAddToParent__();
 }
 /** @override @return {MeasureUnitDisplay} */
 m_getUnitOfMeasureDisplay__() {
  return this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_getUnitOfMeasureDisplay__();
 }
 /** @override */
 m_setUseGrouping__boolean(/** boolean */ useGrouping) {
  this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_setUseGrouping__boolean(useGrouping);
  this.m_checkAndAddToParent__();
 }
 /** @override @return {boolean} */
 m_isUseGrouping__() {
  return this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_isUseGrouping__();
 }
 /** @override */
 m_setMinimumIntegerDigits__int(/** number */ minimumIntegerDigits) {
  this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_setMinimumIntegerDigits__int(minimumIntegerDigits);
  this.m_checkAndAddToParent__();
 }
 /** @override @return {number} */
 m_getMinimumIntegerDigits__() {
  return this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_getMinimumIntegerDigits__();
 }
 /** @override */
 m_setMinimumFractionDigits__int(/** number */ minimumFractionDigits) {
  this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_setMinimumFractionDigits__int(minimumFractionDigits);
  this.m_checkAndAddToParent__();
 }
 /** @override @return {number} */
 m_getMinimumFractionDigits__() {
  return this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_getMinimumFractionDigits__();
 }
 /** @override */
 m_setMaximumFractionDigits__int(/** number */ maximumFractionDigits) {
  this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_setMaximumFractionDigits__int(maximumFractionDigits);
  this.m_checkAndAddToParent__();
 }
 /** @override @return {number} */
 m_getMaximumFractionDigits__() {
  return this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_getMaximumFractionDigits__();
 }
 /** @override */
 m_setMinimumSignificantDigits__int(/** number */ minimumIntegerDigits) {
  this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_setMinimumSignificantDigits__int(minimumIntegerDigits);
  this.m_checkAndAddToParent__();
 }
 /** @override @return {number} */
 m_getMinimumSignificantDigits__() {
  return this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_getMinimumSignificantDigits__();
 }
 /** @override */
 m_setMaximumSignificantDigits__int(/** number */ minimumIntegerDigits) {
  this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_setMaximumSignificantDigits__int(minimumIntegerDigits);
  this.m_checkAndAddToParent__();
 }
 /** @override @return {number} */
 m_getMaximumSignificantDigits__() {
  return this.f_numberFormatOptions__org_pepstock_charba_client_options_AbstractNumberFormat_.m_getMaximumSignificantDigits__();
 }
 
 static $clinit() {
  AbstractNumberFormat.$clinit = () =>{};
  AbstractNumberFormat.$loadModules();
  AbstractModel.$clinit();
  IsDefaultNumberFormatOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractNumberFormat;
 }
 
 static $loadModules() {
  IsDefaultNumberFormatOptions = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions$impl');
  NumberFormatOptions = goog.module.get('org.pepstock.charba.client.intl.NumberFormatOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsNumberFormat.$markImplementor(AbstractNumberFormat);
$Util.$setClassMetadata(AbstractNumberFormat, "org.pepstock.charba.client.options.AbstractNumberFormat");

exports = AbstractNumberFormat;

//# sourceMappingURL=AbstractNumberFormat.js.map
