goog.module('org.pepstock.charba.client.impl.plugins.ChartBackgroundColorDefaultOptions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsChartBackgroundColorDefaultOptions = goog.require('org.pepstock.charba.client.impl.plugins.IsChartBackgroundColorDefaultOptions$impl');

let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let GlobalCompositeOperation = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.GlobalCompositeOperation$impl');
let ColorType = goog.forwardDeclare('org.pepstock.charba.client.enums.ColorType$impl');

/**
 * @implements {IsChartBackgroundColorDefaultOptions}
 */
class ChartBackgroundColorDefaultOptions extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ChartBackgroundColorDefaultOptions} */
 static $create__() {
  let $instance = new ChartBackgroundColorDefaultOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorDefaultOptions__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorDefaultOptions__() {
  this.$ctor__java_lang_Object__();
 }
 //Default method forwarding stub.
 /** @override @return {Gradient} */
 m_getBackgroundColorAsGradient__() {
  return IsChartBackgroundColorDefaultOptions.m_getBackgroundColorAsGradient__$default__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {Pattern} */
 m_getBackgroundColorAsPattern__() {
  return IsChartBackgroundColorDefaultOptions.m_getBackgroundColorAsPattern__$default__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return IsChartBackgroundColorDefaultOptions.m_getBackgroundColorAsString__$default__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {ColorType} */
 m_getColorType__() {
  return IsChartBackgroundColorDefaultOptions.m_getColorType__$default__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {GlobalCompositeOperation} */
 m_getGlobalCompositeOperation__() {
  return IsChartBackgroundColorDefaultOptions.m_getGlobalCompositeOperation__$default__org_pepstock_charba_client_impl_plugins_IsChartBackgroundColorDefaultOptions(this);
 }
 /** @return {ChartBackgroundColorDefaultOptions} */
 static get f_INSTANCE__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorDefaultOptions() {
  return (ChartBackgroundColorDefaultOptions.$clinit(), ChartBackgroundColorDefaultOptions.$static_INSTANCE__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorDefaultOptions);
 }
 
 static $clinit() {
  ChartBackgroundColorDefaultOptions.$clinit = () =>{};
  ChartBackgroundColorDefaultOptions.$loadModules();
  j_l_Object.$clinit();
  IsChartBackgroundColorDefaultOptions.$clinit();
  ChartBackgroundColorDefaultOptions.$static_INSTANCE__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorDefaultOptions = ChartBackgroundColorDefaultOptions.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartBackgroundColorDefaultOptions;
 }
 
 static $loadModules() {}
}
/**@private {ChartBackgroundColorDefaultOptions}*/
ChartBackgroundColorDefaultOptions.$static_INSTANCE__org_pepstock_charba_client_impl_plugins_ChartBackgroundColorDefaultOptions;
IsChartBackgroundColorDefaultOptions.$markImplementor(ChartBackgroundColorDefaultOptions);
$Util.$setClassMetadata(ChartBackgroundColorDefaultOptions, "org.pepstock.charba.client.impl.plugins.ChartBackgroundColorDefaultOptions");

exports = ChartBackgroundColorDefaultOptions;

//# sourceMappingURL=ChartBackgroundColorDefaultOptions.js.map
