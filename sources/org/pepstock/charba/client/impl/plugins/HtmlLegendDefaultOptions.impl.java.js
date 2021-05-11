goog.module('org.pepstock.charba.client.impl.plugins.HtmlLegendDefaultOptions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsHtmlLegendDefaultOptions = goog.require('org.pepstock.charba.client.impl.plugins.IsHtmlLegendDefaultOptions$impl');

let HtmlLegendItemCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.HtmlLegendItemCallback$impl');
let HtmlLegendTitleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.HtmlLegendTitleCallback$impl');
let CursorType = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.CursorType$impl');
let IsDefaultCursorPointerOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.IsDefaultCursorPointerOptions$impl');

/**
 * @implements {IsHtmlLegendDefaultOptions}
 */
class HtmlLegendDefaultOptions extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlLegendDefaultOptions} */
 static $create__() {
  let $instance = new HtmlLegendDefaultOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendDefaultOptions__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendDefaultOptions__() {
  this.$ctor__java_lang_Object__();
 }
 //Default method forwarding stub.
 /** @override @return {CursorType} */
 m_getCursorPointer__() {
  return IsDefaultCursorPointerOptions.m_getCursorPointer__$default__org_pepstock_charba_client_impl_plugins_IsDefaultCursorPointerOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {HtmlLegendItemCallback} */
 m_getLegendTextCallback__() {
  return IsHtmlLegendDefaultOptions.m_getLegendTextCallback__$default__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {HtmlLegendTitleCallback} */
 m_getLegendTitleCallback__() {
  return IsHtmlLegendDefaultOptions.m_getLegendTitleCallback__$default__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getMaximumLegendColumns__() {
  return IsHtmlLegendDefaultOptions.m_getMaximumLegendColumns__$default__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isDisplay__() {
  return IsHtmlLegendDefaultOptions.m_isDisplay__$default__org_pepstock_charba_client_impl_plugins_IsHtmlLegendDefaultOptions(this);
 }
 /** @return {HtmlLegendDefaultOptions} */
 static get f_INSTANCE__org_pepstock_charba_client_impl_plugins_HtmlLegendDefaultOptions() {
  return (HtmlLegendDefaultOptions.$clinit(), HtmlLegendDefaultOptions.$static_INSTANCE__org_pepstock_charba_client_impl_plugins_HtmlLegendDefaultOptions);
 }
 
 static $clinit() {
  HtmlLegendDefaultOptions.$clinit = () =>{};
  HtmlLegendDefaultOptions.$loadModules();
  j_l_Object.$clinit();
  IsHtmlLegendDefaultOptions.$clinit();
  HtmlLegendDefaultOptions.$static_INSTANCE__org_pepstock_charba_client_impl_plugins_HtmlLegendDefaultOptions = HtmlLegendDefaultOptions.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlLegendDefaultOptions;
 }
 
 static $loadModules() {
  IsDefaultCursorPointerOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.IsDefaultCursorPointerOptions$impl');
 }
}
/**@private {HtmlLegendDefaultOptions}*/
HtmlLegendDefaultOptions.$static_INSTANCE__org_pepstock_charba_client_impl_plugins_HtmlLegendDefaultOptions;
IsHtmlLegendDefaultOptions.$markImplementor(HtmlLegendDefaultOptions);
$Util.$setClassMetadata(HtmlLegendDefaultOptions, "org.pepstock.charba.client.impl.plugins.HtmlLegendDefaultOptions");

exports = HtmlLegendDefaultOptions;

//# sourceMappingURL=HtmlLegendDefaultOptions.js.map
