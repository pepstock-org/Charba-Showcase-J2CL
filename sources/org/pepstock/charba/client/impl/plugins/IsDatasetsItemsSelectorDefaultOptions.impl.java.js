goog.module('org.pepstock.charba.client.impl.plugins.IsDatasetsItemsSelectorDefaultOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let DatasetsItemsSelectorOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.IsDatasetsItemsSelectorDefaultOptions.$LambdaAdaptor$impl');
let IsDatasetsItemsSelectorDefaultSelectionCleaner = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.IsDatasetsItemsSelectorDefaultSelectionCleaner$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');

/**
 * @interface
 */
class IsDatasetsItemsSelectorDefaultOptions {
 /** @abstract @return {IsDatasetsItemsSelectorDefaultSelectionCleaner} */
 m_getSelectionCleaner__() {}
 /** @abstract @return {boolean} */
 m_isEnabled__() {}
 /** @abstract @return {ScaleId} */
 m_getXAxisID__() {}
 /** @abstract @return {?string} */
 m_getColorAsString__() {}
 /** @abstract @return {List<Integer>} */
 m_getBorderDash__() {}
 /** @abstract @return {number} */
 m_getBorderDashOffset__() {}
 /** @abstract @return {number} */
 m_getBorderWidth__() {}
 /** @abstract @return {?string} */
 m_getBorderColorAsString__() {}
 /** @return {IsDatasetsItemsSelectorDefaultOptions} */
 static $adapt(/** ?function():IsDatasetsItemsSelectorDefaultSelectionCleaner */ fn) {
  IsDatasetsItemsSelectorDefaultOptions.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {boolean} */
 static m_isEnabled__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(/** !IsDatasetsItemsSelectorDefaultOptions */ $thisArg) {
  IsDatasetsItemsSelectorDefaultOptions.$clinit();
  return DatasetsItemsSelectorOptions.f_DEFAULT_ENABLED__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions;
 }
 /** @return {ScaleId} */
 static m_getXAxisID__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(/** !IsDatasetsItemsSelectorDefaultOptions */ $thisArg) {
  IsDatasetsItemsSelectorDefaultOptions.$clinit();
  return DatasetsItemsSelectorOptions.f_DEFAULT_AXIS_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions;
 }
 /** @return {?string} */
 static m_getColorAsString__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(/** !IsDatasetsItemsSelectorDefaultOptions */ $thisArg) {
  IsDatasetsItemsSelectorDefaultOptions.$clinit();
  return DatasetsItemsSelectorOptions.f_DEFAULT_COLOR__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions.m_toRGBA__();
 }
 /** @return {List<Integer>} */
 static m_getBorderDash__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(/** !IsDatasetsItemsSelectorDefaultOptions */ $thisArg) {
  IsDatasetsItemsSelectorDefaultOptions.$clinit();
  return /**@type {List<Integer>}*/ (Collections.m_emptyList__());
 }
 /** @return {number} */
 static m_getBorderDashOffset__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(/** !IsDatasetsItemsSelectorDefaultOptions */ $thisArg) {
  IsDatasetsItemsSelectorDefaultOptions.$clinit();
  return DatasetsItemsSelectorOptions.f_DEFAULT_BORDER_DASH_OFFSET__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions;
 }
 /** @return {number} */
 static m_getBorderWidth__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(/** !IsDatasetsItemsSelectorDefaultOptions */ $thisArg) {
  IsDatasetsItemsSelectorDefaultOptions.$clinit();
  return DatasetsItemsSelectorOptions.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions;
 }
 /** @return {?string} */
 static m_getBorderColorAsString__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(/** !IsDatasetsItemsSelectorDefaultOptions */ $thisArg) {
  IsDatasetsItemsSelectorDefaultOptions.$clinit();
  return DatasetsItemsSelectorOptions.f_DEFAULT_BORDER_COLOR__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions.m_toRGBA__();
 }
 
 static $clinit() {
  IsDatasetsItemsSelectorDefaultOptions.$clinit = () =>{};
  IsDatasetsItemsSelectorDefaultOptions.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  DatasetsItemsSelectorOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.impl.plugins.IsDatasetsItemsSelectorDefaultOptions.$LambdaAdaptor$impl');
 }
}
IsDatasetsItemsSelectorDefaultOptions.$markImplementor(/**@type {Function}*/ (IsDatasetsItemsSelectorDefaultOptions));
$Util.$setClassMetadataForInterface(IsDatasetsItemsSelectorDefaultOptions, "org.pepstock.charba.client.impl.plugins.IsDatasetsItemsSelectorDefaultOptions");

exports = IsDatasetsItemsSelectorDefaultOptions;

//# sourceMappingURL=IsDatasetsItemsSelectorDefaultOptions.js.map
