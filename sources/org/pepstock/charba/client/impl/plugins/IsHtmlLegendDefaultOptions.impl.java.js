goog.module('org.pepstock.charba.client.impl.plugins.IsHtmlLegendDefaultOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultCursorPointerOptions = goog.require('org.pepstock.charba.client.impl.plugins.IsDefaultCursorPointerOptions$impl');

let HtmlLegendItemCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.HtmlLegendItemCallback$impl');
let HtmlLegendTitleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.HtmlLegendTitleCallback$impl');
let HtmlLegendOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions$impl');

/**
 * @interface
 * @extends {IsDefaultCursorPointerOptions}
 */
class IsHtmlLegendDefaultOptions {
 /** @abstract @return {boolean} */
 m_isDisplay__() {}
 /** @abstract @return {number} */
 m_getMaximumLegendColumns__() {}
 /** @abstract @return {HtmlLegendItemCallback} */
 m_getLegendTextCallback__() {}
 /** @abstract @return {HtmlLegendTitleCallback} */
 m_getLegendTitleCallback__() {}
 /** @return {boolean} */
 static m_isDisplay__$default__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions(/** !IsHtmlLegendDefaultOptions */ $thisArg) {
  IsHtmlLegendDefaultOptions.$clinit();
  return HtmlLegendOptions.f_DEFAULT_DISPLAY__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions;
 }
 /** @return {number} */
 static m_getMaximumLegendColumns__$default__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions(/** !IsHtmlLegendDefaultOptions */ $thisArg) {
  IsHtmlLegendDefaultOptions.$clinit();
  return HtmlLegendOptions.f_DEFAULT_MAXIMUM_LEGEND_COLUMNS__org_pepstock_charba_client_impl_plugins_HtmlLegendOptions;
 }
 /** @return {HtmlLegendItemCallback} */
 static m_getLegendTextCallback__$default__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions(/** !IsHtmlLegendDefaultOptions */ $thisArg) {
  IsHtmlLegendDefaultOptions.$clinit();
  return null;
 }
 /** @return {HtmlLegendTitleCallback} */
 static m_getLegendTitleCallback__$default__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions(/** !IsHtmlLegendDefaultOptions */ $thisArg) {
  IsHtmlLegendDefaultOptions.$clinit();
  return null;
 }
 
 static $clinit() {
  IsHtmlLegendDefaultOptions.$clinit = () =>{};
  IsHtmlLegendDefaultOptions.$loadModules();
  IsDefaultCursorPointerOptions.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultCursorPointerOptions.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions;
 }
 
 static $loadModules() {
  HtmlLegendOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions$impl');
 }
}
IsHtmlLegendDefaultOptions.$markImplementor(/**@type {Function}*/ (IsHtmlLegendDefaultOptions));
$Util.$setClassMetadataForInterface(IsHtmlLegendDefaultOptions, "org.pepstock.charba.client.impl.plugins.IsHtmlLegendDefaultOptions");

exports = IsHtmlLegendDefaultOptions;

//# sourceMappingURL=IsHtmlLegendDefaultOptions.js.map
