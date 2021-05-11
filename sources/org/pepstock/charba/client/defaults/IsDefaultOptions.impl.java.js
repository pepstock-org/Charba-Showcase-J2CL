goog.module('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAnimationContainer = goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimationContainer$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let IsDefaultDatasets = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultDatasets$impl');
let IsDefaultDecimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultDecimation$impl');
let IsDefaultElements = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultElements$impl');
let IsDefaultFiller = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFiller$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultInteraction = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultInteraction$impl');
let IsDefaultLayout = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultLayout$impl');
let IsDefaultLegend = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultLegend$impl');
let IsDefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');
let IsDefaultTitle = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTitle$impl');
let IsDefaultTooltips = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTooltips$impl');
let Event = goog.forwardDeclare('org.pepstock.charba.client.enums.Event$impl');
let IndexAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.IndexAxis$impl');
let CLocale = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocale$impl');

/**
 * @interface
 * @extends {IsDefaultAnimationContainer}
 */
class IsDefaultOptions {
 /** @abstract @return {IsDefaultInteraction} */
 m_getHover__() {}
 /** @abstract @return {IsDefaultInteraction} */
 m_getInteraction__() {}
 /** @abstract @return {IsDefaultTitle} */
 m_getTitle__() {}
 /** @abstract @return {IsDefaultLegend} */
 m_getLegend__() {}
 /** @abstract @return {IsDefaultTooltips} */
 m_getTooltips__() {}
 /** @abstract @return {IsDefaultDecimation} */
 m_getDecimation__() {}
 /** @abstract @return {IsDefaultFiller} */
 m_getFiller__() {}
 /** @abstract @return {IsDefaultLayout} */
 m_getLayout__() {}
 /** @abstract @return {IsDefaultElements} */
 m_getElements__() {}
 /** @abstract @return {IsDefaultPlugins} */
 m_getPlugins__() {}
 /** @abstract @return {IsDefaultDatasets} */
 m_getDatasets__() {}
 /** @abstract @return {IsDefaultFont} */
 m_getFont__() {}
 /** @abstract @return {List<Event>} */
 m_getEvents__() {}
 /** @abstract @return {CLocale} */
 m_getLocale__() {}
 /** @abstract @return {?string} */
 m_getScope__() {}
 /** @abstract @return {boolean} */
 m_isResponsive__() {}
 /** @abstract @return {boolean} */
 m_isMaintainAspectRatio__() {}
 /** @abstract @return {number} */
 m_getAspectRatio__() {}
 /** @abstract @return {number} */
 m_getResizeDelay__() {}
 /** @abstract @return {number} */
 m_getDevicePixelRatio__() {}
 /** @abstract @return {?string} */
 m_getColorAsString__() {}
 /** @abstract @return {?string} */
 m_getBackgroundColorAsString__() {}
 /** @abstract @return {?string} */
 m_getBorderColorAsString__() {}
 /** @abstract @return {boolean} */
 m_isShowLine__() {}
 /** @abstract @return {boolean} */
 m_isSkipNull__() {}
 /** @abstract @return {boolean} */
 m_isSpanGaps__() {}
 /** @abstract @return {number} */
 m_getCutout__() {}
 /** @abstract @return {?string} */
 m_getCutoutPercentage__() {}
 /** @abstract @return {number} */
 m_getRadius__() {}
 /** @abstract @return {?string} */
 m_getRadiusPercentage__() {}
 /** @abstract @return {number} */
 m_getRotation__() {}
 /** @abstract @return {number} */
 m_getCircumference__() {}
 /** @abstract @return {IndexAxis} */
 m_getIndexAxis__() {}
 /** @abstract @return {boolean} */
 m_isDrawOnAttach__() {}
 /** @abstract @return {boolean} */
 m_isDestroyOnDetach__() {}
 
 static $clinit() {
  IsDefaultOptions.$clinit = () =>{};
  IsDefaultOptions.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultAnimationContainer.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultOptions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultOptions;
 }
 
 static $loadModules() {}
}
IsDefaultOptions.$markImplementor(/**@type {Function}*/ (IsDefaultOptions));
$Util.$setClassMetadataForInterface(IsDefaultOptions, "org.pepstock.charba.client.defaults.IsDefaultOptions");

exports = IsDefaultOptions;

//# sourceMappingURL=IsDefaultOptions.js.map
