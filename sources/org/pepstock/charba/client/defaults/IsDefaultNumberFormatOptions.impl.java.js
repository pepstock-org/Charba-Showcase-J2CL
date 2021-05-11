goog.module('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultBaseFormatOptions = goog.require('org.pepstock.charba.client.defaults.IsDefaultBaseFormatOptions$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let CompactDisplay = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.CompactDisplay$impl');
let Currency = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.Currency$impl');
let CurrencyDisplay = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.CurrencyDisplay$impl');
let CurrencySign = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.CurrencySign$impl');
let MeasureUnit = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.MeasureUnit$impl');
let MeasureUnitDisplay = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.MeasureUnitDisplay$impl');
let Notation = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.Notation$impl');
let SignDisplay = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.SignDisplay$impl');
let Style = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.Style$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @interface
 * @extends {IsDefaultBaseFormatOptions}
 */
class IsDefaultNumberFormatOptions {
 /** @abstract @return {CompactDisplay} */
 m_getCompactDisplay__() {}
 /** @abstract @return {Currency} */
 m_getCurrency__() {}
 /** @abstract @return {CurrencyDisplay} */
 m_getCurrencyDisplay__() {}
 /** @abstract @return {CurrencySign} */
 m_getCurrencySign__() {}
 /** @abstract @return {Notation} */
 m_getNotation__() {}
 /** @abstract @return {SignDisplay} */
 m_getSignDisplay__() {}
 /** @abstract @return {Style} */
 m_getStyle__() {}
 /** @abstract @return {List<MeasureUnit>} */
 m_getUnitsOfMeasure__() {}
 /** @abstract @return {MeasureUnitDisplay} */
 m_getUnitOfMeasureDisplay__() {}
 /** @abstract @return {boolean} */
 m_isUseGrouping__() {}
 /** @abstract @return {number} */
 m_getMinimumIntegerDigits__() {}
 /** @abstract @return {number} */
 m_getMinimumFractionDigits__() {}
 /** @abstract @return {number} */
 m_getMaximumFractionDigits__() {}
 /** @abstract @return {number} */
 m_getMinimumSignificantDigits__() {}
 /** @abstract @return {number} */
 m_getMaximumSignificantDigits__() {}
 /** @return {number} */
 static m_getMinimumFractionDigits__$default__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions(/** !IsDefaultNumberFormatOptions */ $thisArg) {
  IsDefaultNumberFormatOptions.$clinit();
  let style = $thisArg.m_getStyle__();
  let defaultDigits = 0;
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(Style.f_CURRENCY__org_pepstock_charba_client_intl_enums_Style, style)) {
   let currency = $thisArg.m_getCurrency__();
   if (Key.m_isValid__org_pepstock_charba_client_commons_Key(currency)) {
    defaultDigits = currency.m_getMinimumFractionDigits__();
   }
  }
  return defaultDigits;
 }
 /** @return {number} */
 static m_getMaximumFractionDigits__$default__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions(/** !IsDefaultNumberFormatOptions */ $thisArg) {
  IsDefaultNumberFormatOptions.$clinit();
  let style = $thisArg.m_getStyle__();
  let defaultDigits = Math.max($thisArg.m_getMinimumFractionDigits__(), 3);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(Style.f_CURRENCY__org_pepstock_charba_client_intl_enums_Style, style)) {
   let currency = $thisArg.m_getCurrency__();
   if (Key.m_isValid__org_pepstock_charba_client_commons_Key(currency)) {
    defaultDigits = Math.max($thisArg.m_getMinimumFractionDigits__(), currency.m_getMinimumFractionDigits__());
   }
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(Style.f_PERCENT__org_pepstock_charba_client_intl_enums_Style, style)) {
   defaultDigits = Math.max($thisArg.m_getMinimumFractionDigits__(), 0);
  }
  return defaultDigits;
 }
 
 static $clinit() {
  IsDefaultNumberFormatOptions.$clinit = () =>{};
  IsDefaultNumberFormatOptions.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultBaseFormatOptions.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions;
 }
 
 static $loadModules() {
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Style = goog.module.get('org.pepstock.charba.client.intl.enums.Style$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
IsDefaultNumberFormatOptions.$markImplementor(/**@type {Function}*/ (IsDefaultNumberFormatOptions));
$Util.$setClassMetadataForInterface(IsDefaultNumberFormatOptions, "org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions");

exports = IsDefaultNumberFormatOptions;

//# sourceMappingURL=IsDefaultNumberFormatOptions.js.map
