goog.module('org.pepstock.charba.client.defaults.IsDefaultTooltips$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAnimationContainer = goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimationContainer$impl');
const IsDefaultBoxHandler = goog.require('org.pepstock.charba.client.defaults.IsDefaultBoxHandler$impl');
const IsDefaultTextDirectionHandler = goog.require('org.pepstock.charba.client.defaults.IsDefaultTextDirectionHandler$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let Event = goog.forwardDeclare('org.pepstock.charba.client.enums.Event$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');
let IsTooltipPosition = goog.forwardDeclare('org.pepstock.charba.client.enums.IsTooltipPosition$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');
let TooltipAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TooltipAlign$impl');

/**
 * @interface
 * @extends {IsDefaultTextDirectionHandler}
 * @extends {IsDefaultBoxHandler}
 * @extends {IsDefaultAnimationContainer}
 */
class IsDefaultTooltips {
 /** @abstract @return {IsDefaultPadding} */
 m_getPadding__() {}
 /** @abstract @return {boolean} */
 m_isEnabled__() {}
 /** @abstract @return {List<Event>} */
 m_getEvents__() {}
 /** @abstract @return {InteractionMode} */
 m_getMode__() {}
 /** @abstract @return {boolean} */
 m_isIntersect__() {}
 /** @abstract @return {IsTooltipPosition} */
 m_getPosition__() {}
 /** @abstract @return {?string} */
 m_getBackgroundColorAsString__() {}
 /** @abstract @return {IsDefaultFont} */
 m_getTitleFont__() {}
 /** @abstract @return {?string} */
 m_getTitleColorAsString__() {}
 /** @abstract @return {TextAlign} */
 m_getTitleAlign__() {}
 /** @abstract @return {number} */
 m_getTitleSpacing__() {}
 /** @abstract @return {number} */
 m_getTitleMarginBottom__() {}
 /** @abstract @return {IsDefaultFont} */
 m_getBodyFont__() {}
 /** @abstract @return {?string} */
 m_getBodyColorAsString__() {}
 /** @abstract @return {TextAlign} */
 m_getBodyAlign__() {}
 /** @abstract @return {number} */
 m_getBodySpacing__() {}
 /** @abstract @return {IsDefaultFont} */
 m_getFooterFont__() {}
 /** @abstract @return {?string} */
 m_getFooterColorAsString__() {}
 /** @abstract @return {TextAlign} */
 m_getFooterAlign__() {}
 /** @abstract @return {number} */
 m_getFooterSpacing__() {}
 /** @abstract @return {number} */
 m_getFooterMarginTop__() {}
 /** @abstract @return {number} */
 m_getCaretPadding__() {}
 /** @abstract @return {number} */
 m_getCaretSize__() {}
 /** @abstract @return {number} */
 m_getCornerRadius__() {}
 /** @abstract @return {?string} */
 m_getMultiKeyBackgroundAsString__() {}
 /** @abstract @return {boolean} */
 m_isDisplayColors__() {}
 /** @abstract @return {?string} */
 m_getBorderColorAsString__() {}
 /** @abstract @return {number} */
 m_getBorderWidth__() {}
 /** @abstract @return {boolean} */
 m_isUsePointStyle__() {}
 /** @abstract @return {TooltipAlign} */
 m_getXAlign__() {}
 /** @abstract @return {TooltipAlign} */
 m_getYAlign__() {}
 
 static $clinit() {
  IsDefaultTooltips.$clinit = () =>{};
  IsDefaultTooltips.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultTextDirectionHandler.$markImplementor(ctor);
  IsDefaultBoxHandler.$markImplementor(ctor);
  IsDefaultAnimationContainer.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultTooltips = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultTooltips;
 }
 
 static $loadModules() {}
}
IsDefaultTooltips.$markImplementor(/**@type {Function}*/ (IsDefaultTooltips));
$Util.$setClassMetadataForInterface(IsDefaultTooltips, "org.pepstock.charba.client.defaults.IsDefaultTooltips");

exports = IsDefaultTooltips;

//# sourceMappingURL=IsDefaultTooltips.js.map
