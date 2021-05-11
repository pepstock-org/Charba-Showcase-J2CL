goog.module('org.pepstock.charba.client.options.IsNumberFormat$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultNumberFormatOptions = goog.require('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions$impl');

let List = goog.forwardDeclare('java.util.List$impl');
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

/**
 * @interface
 * @extends {IsDefaultNumberFormatOptions}
 */
class IsNumberFormat {
 /** @abstract */
 m_setLocaleMatcher__org_pepstock_charba_client_intl_enums_LocaleMatcher(/** LocaleMatcher */ localeMatcher) {}
 /** @abstract */
 m_setNumberingSystem__org_pepstock_charba_client_intl_enums_NumberingSystem(/** NumberingSystem */ numberingSystem) {}
 /** @abstract */
 m_setCompactDisplay__org_pepstock_charba_client_intl_enums_CompactDisplay(/** CompactDisplay */ display) {}
 /** @abstract */
 m_setCurrency__org_pepstock_charba_client_intl_enums_Currency(/** Currency */ currency) {}
 /** @abstract */
 m_setCurrencyDisplay__org_pepstock_charba_client_intl_enums_CurrencyDisplay(/** CurrencyDisplay */ currencyDisplay) {}
 /** @abstract */
 m_setCurrencySign__org_pepstock_charba_client_intl_enums_CurrencySign(/** CurrencySign */ currencySign) {}
 /** @abstract */
 m_setNotation__org_pepstock_charba_client_intl_enums_Notation(/** Notation */ notation) {}
 /** @abstract */
 m_setSignDisplay__org_pepstock_charba_client_intl_enums_SignDisplay(/** SignDisplay */ signDisplay) {}
 /** @abstract */
 m_setStyle__org_pepstock_charba_client_intl_enums_Style(/** Style */ style) {}
 /** @abstract */
 m_setUnitsOfMeasure__arrayOf_org_pepstock_charba_client_intl_enums_MeasureUnit(/** Array<MeasureUnit> */ units) {}
 /** @abstract */
 m_setUnitsOfMeasure__java_util_List(/** List<MeasureUnit> */ units) {}
 /** @abstract */
 m_setUnitOfMeasureDisplay__org_pepstock_charba_client_intl_enums_MeasureUnitDisplay(/** MeasureUnitDisplay */ unitDisplay) {}
 /** @abstract */
 m_setUseGrouping__boolean(/** boolean */ useGrouping) {}
 /** @abstract */
 m_setMinimumIntegerDigits__int(/** number */ minimumIntegerDigits) {}
 /** @abstract */
 m_setMinimumFractionDigits__int(/** number */ minimumFractionDigits) {}
 /** @abstract */
 m_setMaximumFractionDigits__int(/** number */ maximumFractionDigits) {}
 /** @abstract */
 m_setMinimumSignificantDigits__int(/** number */ minimumIntegerDigits) {}
 /** @abstract */
 m_setMaximumSignificantDigits__int(/** number */ minimumIntegerDigits) {}
 
 static $clinit() {
  IsNumberFormat.$clinit = () =>{};
  IsNumberFormat.$loadModules();
  IsDefaultNumberFormatOptions.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultNumberFormatOptions.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_options_IsNumberFormat = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_IsNumberFormat;
 }
 
 static $loadModules() {}
}
IsNumberFormat.$markImplementor(/**@type {Function}*/ (IsNumberFormat));
$Util.$setClassMetadataForInterface(IsNumberFormat, "org.pepstock.charba.client.options.IsNumberFormat");

exports = IsNumberFormat;

//# sourceMappingURL=IsNumberFormat.js.map
