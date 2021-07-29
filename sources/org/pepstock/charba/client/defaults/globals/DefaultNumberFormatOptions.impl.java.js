goog.module('org.pepstock.charba.client.defaults.globals.DefaultNumberFormatOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultNumberFormatOptions = goog.require('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions$impl');
const DefaultBaseFormatOptions = goog.require('org.pepstock.charba.client.defaults.globals.DefaultBaseFormatOptions$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let CompactDisplay = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.CompactDisplay$impl');
let Currency = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.Currency$impl');
let CurrencyDisplay = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.CurrencyDisplay$impl');
let CurrencySign = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.CurrencySign$impl');
let MeasureUnit = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.MeasureUnit$impl');
let MeasureUnitDisplay = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.MeasureUnitDisplay$impl');
let Notation = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.Notation$impl');
let SignDisplay = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.SignDisplay$impl');
let Style = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.Style$impl');
let NumberFormatItem = goog.forwardDeclare('org.pepstock.charba.client.items.NumberFormatItem$impl');

/**
 * @implements {IsDefaultNumberFormatOptions}
 */
class DefaultNumberFormatOptions extends DefaultBaseFormatOptions {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultNumberFormatOptions} */
 static $create__() {
  DefaultNumberFormatOptions.$clinit();
  let $instance = new DefaultNumberFormatOptions();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultNumberFormatOptions__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultNumberFormatOptions__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultBaseFormatOptions__();
 }
 /** @override @return {CompactDisplay} */
 m_getCompactDisplay__() {
  return CompactDisplay.f_SHORT__org_pepstock_charba_client_intl_enums_CompactDisplay;
 }
 /** @override @return {Currency} */
 m_getCurrency__() {
  return null;
 }
 /** @override @return {CurrencyDisplay} */
 m_getCurrencyDisplay__() {
  return CurrencyDisplay.f_SYMBOL__org_pepstock_charba_client_intl_enums_CurrencyDisplay;
 }
 /** @override @return {CurrencySign} */
 m_getCurrencySign__() {
  return CurrencySign.f_STANDARD__org_pepstock_charba_client_intl_enums_CurrencySign;
 }
 /** @override @return {Notation} */
 m_getNotation__() {
  return Notation.f_STANDARD__org_pepstock_charba_client_intl_enums_Notation;
 }
 /** @override @return {SignDisplay} */
 m_getSignDisplay__() {
  return SignDisplay.f_AUTO__org_pepstock_charba_client_intl_enums_SignDisplay;
 }
 /** @override @return {Style} */
 m_getStyle__() {
  return Style.f_DECIMAL__org_pepstock_charba_client_intl_enums_Style;
 }
 /** @override @return {List<MeasureUnit>} */
 m_getUnitsOfMeasure__() {
  return /**@type {List<MeasureUnit>}*/ (Collections.m_emptyList__());
 }
 /** @override @return {MeasureUnitDisplay} */
 m_getUnitOfMeasureDisplay__() {
  return MeasureUnitDisplay.f_SHORT__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay;
 }
 /** @override @return {boolean} */
 m_isUseGrouping__() {
  return DefaultNumberFormatOptions.f_DEFAULT_USE_GROUPING__org_pepstock_charba_client_defaults_globals_DefaultNumberFormatOptions_;
 }
 /** @override @return {number} */
 m_getMinimumIntegerDigits__() {
  return DefaultNumberFormatOptions.f_DEFAULT_MINIMUM_INTEGER_DIGITS__org_pepstock_charba_client_defaults_globals_DefaultNumberFormatOptions_;
 }
 /** @override @return {number} */
 m_getMinimumSignificantDigits__() {
  return DefaultNumberFormatOptions.f_DEFAULT_MINIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_defaults_globals_DefaultNumberFormatOptions_;
 }
 /** @override @return {number} */
 m_getMaximumSignificantDigits__() {
  return DefaultNumberFormatOptions.f_DEFAULT_MAXIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_defaults_globals_DefaultNumberFormatOptions_;
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
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getMaximumFractionDigits__() {
  return IsDefaultNumberFormatOptions.m_getMaximumFractionDigits__$default__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getMinimumFractionDigits__() {
  return IsDefaultNumberFormatOptions.m_getMinimumFractionDigits__$default__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions(this);
 }
 /** @return {IsDefaultNumberFormatOptions} */
 static get f_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultNumberFormatOptions() {
  return (DefaultNumberFormatOptions.$clinit(), DefaultNumberFormatOptions.$static_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultNumberFormatOptions);
 }
 
 static $clinit() {
  DefaultNumberFormatOptions.$clinit = () =>{};
  DefaultNumberFormatOptions.$loadModules();
  DefaultBaseFormatOptions.$clinit();
  IsDefaultNumberFormatOptions.$clinit();
  DefaultNumberFormatOptions.$static_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultNumberFormatOptions = DefaultNumberFormatOptions.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultNumberFormatOptions;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  CompactDisplay = goog.module.get('org.pepstock.charba.client.intl.enums.CompactDisplay$impl');
  CurrencyDisplay = goog.module.get('org.pepstock.charba.client.intl.enums.CurrencyDisplay$impl');
  CurrencySign = goog.module.get('org.pepstock.charba.client.intl.enums.CurrencySign$impl');
  MeasureUnitDisplay = goog.module.get('org.pepstock.charba.client.intl.enums.MeasureUnitDisplay$impl');
  Notation = goog.module.get('org.pepstock.charba.client.intl.enums.Notation$impl');
  SignDisplay = goog.module.get('org.pepstock.charba.client.intl.enums.SignDisplay$impl');
  Style = goog.module.get('org.pepstock.charba.client.intl.enums.Style$impl');
 }
}
/**@private {IsDefaultNumberFormatOptions}*/
DefaultNumberFormatOptions.$static_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultNumberFormatOptions;
/**@const {boolean}*/
DefaultNumberFormatOptions.f_DEFAULT_USE_GROUPING__org_pepstock_charba_client_defaults_globals_DefaultNumberFormatOptions_ = true;
/**@const {number}*/
DefaultNumberFormatOptions.f_DEFAULT_MINIMUM_INTEGER_DIGITS__org_pepstock_charba_client_defaults_globals_DefaultNumberFormatOptions_ = 1;
/**@const {number}*/
DefaultNumberFormatOptions.f_DEFAULT_MINIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_defaults_globals_DefaultNumberFormatOptions_ = 1;
/**@const {number}*/
DefaultNumberFormatOptions.f_DEFAULT_MAXIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_defaults_globals_DefaultNumberFormatOptions_ = 21;
IsDefaultNumberFormatOptions.$markImplementor(DefaultNumberFormatOptions);
$Util.$setClassMetadata(DefaultNumberFormatOptions, "org.pepstock.charba.client.defaults.globals.DefaultNumberFormatOptions");

exports = DefaultNumberFormatOptions;

//# sourceMappingURL=DefaultNumberFormatOptions.js.map
