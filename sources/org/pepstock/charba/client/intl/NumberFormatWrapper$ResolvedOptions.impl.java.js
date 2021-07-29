goog.module('org.pepstock.charba.client.intl.NumberFormatWrapper.ResolvedOptions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultNumberFormatOptions = goog.require('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions$impl');

let List = goog.forwardDeclare('java.util.List$impl');
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
let NumberFormatItem = goog.forwardDeclare('org.pepstock.charba.client.items.NumberFormatItem$impl');

/**
 * @implements {IsDefaultNumberFormatOptions}
 */
class ResolvedOptions extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {NumberFormatOptions}*/
  this.f_delegated__org_pepstock_charba_client_intl_NumberFormatWrapper_ResolvedOptions_;
 }
 /** @return {!ResolvedOptions} */
 static $create__org_pepstock_charba_client_intl_NumberFormatOptions(/** NumberFormatOptions */ delegated) {
  ResolvedOptions.$clinit();
  let $instance = new ResolvedOptions();
  $instance.$ctor__org_pepstock_charba_client_intl_NumberFormatWrapper_ResolvedOptions__org_pepstock_charba_client_intl_NumberFormatOptions(delegated);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_NumberFormatWrapper_ResolvedOptions__org_pepstock_charba_client_intl_NumberFormatOptions(/** NumberFormatOptions */ delegated) {
  this.$ctor__java_lang_Object__();
  this.f_delegated__org_pepstock_charba_client_intl_NumberFormatWrapper_ResolvedOptions_ = delegated;
 }
 /** @override @return {LocaleMatcher} */
 m_getLocaleMatcher__() {
  return this.f_delegated__org_pepstock_charba_client_intl_NumberFormatWrapper_ResolvedOptions_.m_getLocaleMatcher__();
 }
 /** @override @return {NumberingSystem} */
 m_getNumberingSystem__() {
  return this.f_delegated__org_pepstock_charba_client_intl_NumberFormatWrapper_ResolvedOptions_.m_getNumberingSystem__();
 }
 /** @override @return {CompactDisplay} */
 m_getCompactDisplay__() {
  return this.f_delegated__org_pepstock_charba_client_intl_NumberFormatWrapper_ResolvedOptions_.m_getCompactDisplay__();
 }
 /** @override @return {Currency} */
 m_getCurrency__() {
  return this.f_delegated__org_pepstock_charba_client_intl_NumberFormatWrapper_ResolvedOptions_.m_getCurrency__();
 }
 /** @override @return {CurrencyDisplay} */
 m_getCurrencyDisplay__() {
  return this.f_delegated__org_pepstock_charba_client_intl_NumberFormatWrapper_ResolvedOptions_.m_getCurrencyDisplay__();
 }
 /** @override @return {CurrencySign} */
 m_getCurrencySign__() {
  return this.f_delegated__org_pepstock_charba_client_intl_NumberFormatWrapper_ResolvedOptions_.m_getCurrencySign__();
 }
 /** @override @return {Notation} */
 m_getNotation__() {
  return this.f_delegated__org_pepstock_charba_client_intl_NumberFormatWrapper_ResolvedOptions_.m_getNotation__();
 }
 /** @override @return {SignDisplay} */
 m_getSignDisplay__() {
  return this.f_delegated__org_pepstock_charba_client_intl_NumberFormatWrapper_ResolvedOptions_.m_getSignDisplay__();
 }
 /** @override @return {Style} */
 m_getStyle__() {
  return this.f_delegated__org_pepstock_charba_client_intl_NumberFormatWrapper_ResolvedOptions_.m_getStyle__();
 }
 /** @override @return {List<MeasureUnit>} */
 m_getUnitsOfMeasure__() {
  return this.f_delegated__org_pepstock_charba_client_intl_NumberFormatWrapper_ResolvedOptions_.m_getUnitsOfMeasure__();
 }
 /** @override @return {MeasureUnitDisplay} */
 m_getUnitOfMeasureDisplay__() {
  return this.f_delegated__org_pepstock_charba_client_intl_NumberFormatWrapper_ResolvedOptions_.m_getUnitOfMeasureDisplay__();
 }
 /** @override @return {boolean} */
 m_isUseGrouping__() {
  return this.f_delegated__org_pepstock_charba_client_intl_NumberFormatWrapper_ResolvedOptions_.m_isUseGrouping__();
 }
 /** @override @return {number} */
 m_getMinimumIntegerDigits__() {
  return this.f_delegated__org_pepstock_charba_client_intl_NumberFormatWrapper_ResolvedOptions_.m_getMinimumIntegerDigits__();
 }
 /** @override @return {number} */
 m_getMinimumFractionDigits__() {
  return this.f_delegated__org_pepstock_charba_client_intl_NumberFormatWrapper_ResolvedOptions_.m_getMinimumFractionDigits__();
 }
 /** @override @return {number} */
 m_getMaximumFractionDigits__() {
  return this.f_delegated__org_pepstock_charba_client_intl_NumberFormatWrapper_ResolvedOptions_.m_getMaximumFractionDigits__();
 }
 /** @override @return {number} */
 m_getMinimumSignificantDigits__() {
  return this.f_delegated__org_pepstock_charba_client_intl_NumberFormatWrapper_ResolvedOptions_.m_getMinimumSignificantDigits__();
 }
 /** @override @return {number} */
 m_getMaximumSignificantDigits__() {
  return this.f_delegated__org_pepstock_charba_client_intl_NumberFormatWrapper_ResolvedOptions_.m_getMaximumSignificantDigits__();
 }
 //Default method forwarding stub.
 /** @override @return {NumberFormatItem} */
 m_create__() {
  return IsDefaultNumberFormatOptions.m_create__$default__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {NumberFormatItem} */
 m_create__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions(/** IsDefaultNumberFormatOptions */ arg0) {
  return IsDefaultNumberFormatOptions.m_create__$default__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions(this, arg0);
 }
 
 static $clinit() {
  ResolvedOptions.$clinit = () =>{};
  ResolvedOptions.$loadModules();
  j_l_Object.$clinit();
  IsDefaultNumberFormatOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ResolvedOptions;
 }
 
 static $loadModules() {}
}
IsDefaultNumberFormatOptions.$markImplementor(ResolvedOptions);
$Util.$setClassMetadata(ResolvedOptions, "org.pepstock.charba.client.intl.NumberFormatWrapper$ResolvedOptions");

exports = ResolvedOptions;

//# sourceMappingURL=NumberFormatWrapper$ResolvedOptions.js.map
