goog.module('org.pepstock.charba.client.impl.plugins.IsChartPointerDefaultOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultCursorPointerOptions = goog.require('org.pepstock.charba.client.impl.plugins.IsDefaultCursorPointerOptions$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let ChartPointerOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointerOptions$impl');
let PointerElement = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.PointerElement$impl');

/**
 * @interface
 * @extends {IsDefaultCursorPointerOptions}
 */
class IsChartPointerDefaultOptions {
 /** @abstract @return {List<PointerElement>} */
 m_getElements__() {}
 /** @return {List<PointerElement>} */
 static m_getElements__$default__org_pepstock_charba_client_impl_plugins_IsChartPointerDefaultOptions(/** !IsChartPointerDefaultOptions */ $thisArg) {
  IsChartPointerDefaultOptions.$clinit();
  return ChartPointerOptions.f_DEFAULTS_ELEMENTS__org_pepstock_charba_client_impl_plugins_ChartPointerOptions;
 }
 
 static $clinit() {
  IsChartPointerDefaultOptions.$clinit = () =>{};
  IsChartPointerDefaultOptions.$loadModules();
  IsDefaultCursorPointerOptions.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultCursorPointerOptions.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_impl_plugins_IsChartPointerDefaultOptions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_impl_plugins_IsChartPointerDefaultOptions;
 }
 
 static $loadModules() {
  ChartPointerOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointerOptions$impl');
 }
}
IsChartPointerDefaultOptions.$markImplementor(/**@type {Function}*/ (IsChartPointerDefaultOptions));
$Util.$setClassMetadataForInterface(IsChartPointerDefaultOptions, "org.pepstock.charba.client.impl.plugins.IsChartPointerDefaultOptions");

exports = IsChartPointerDefaultOptions;

//# sourceMappingURL=IsChartPointerDefaultOptions.js.map
