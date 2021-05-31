goog.module('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorDefaultOptions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDatasetsItemsSelectorDefaultOptions = goog.require('org.pepstock.charba.client.impl.plugins.IsDatasetsItemsSelectorDefaultOptions$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let DatasetsItemsSelectorDefaultSelectionCleaner = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorDefaultSelectionCleaner$impl');
let IsDatasetsItemsSelectorDefaultSelectionCleaner = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.IsDatasetsItemsSelectorDefaultSelectionCleaner$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');

/**
 * @implements {IsDatasetsItemsSelectorDefaultOptions}
 */
class DatasetsItemsSelectorDefaultOptions extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DatasetsItemsSelectorDefaultSelectionCleaner}*/
  this.f_selectionCleaner__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorDefaultOptions_;
 }
 /** @return {!DatasetsItemsSelectorDefaultOptions} */
 static $create__() {
  let $instance = new DatasetsItemsSelectorDefaultOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorDefaultOptions__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorDefaultOptions__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorDefaultOptions();
 }
 /** @override @return {IsDatasetsItemsSelectorDefaultSelectionCleaner} */
 m_getSelectionCleaner__() {
  return this.f_selectionCleaner__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorDefaultOptions_;
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return IsDatasetsItemsSelectorDefaultOptions.m_getBorderColorAsString__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {List<Integer>} */
 m_getBorderDash__() {
  return IsDatasetsItemsSelectorDefaultOptions.m_getBorderDash__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBorderDashOffset__() {
  return IsDatasetsItemsSelectorDefaultOptions.m_getBorderDashOffset__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBorderWidth__() {
  return IsDatasetsItemsSelectorDefaultOptions.m_getBorderWidth__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getColorAsString__() {
  return IsDatasetsItemsSelectorDefaultOptions.m_getColorAsString__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {ScaleId} */
 m_getXAxisID__() {
  return IsDatasetsItemsSelectorDefaultOptions.m_getXAxisID__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isEnabled__() {
  return IsDatasetsItemsSelectorDefaultOptions.m_isEnabled__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(this);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorDefaultOptions() {
  this.f_selectionCleaner__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorDefaultOptions_ = DatasetsItemsSelectorDefaultSelectionCleaner.$create__();
 }
 /** @return {DatasetsItemsSelectorDefaultOptions} */
 static get f_INSTANCE__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorDefaultOptions() {
  return (DatasetsItemsSelectorDefaultOptions.$clinit(), DatasetsItemsSelectorDefaultOptions.$static_INSTANCE__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorDefaultOptions);
 }
 
 static $clinit() {
  DatasetsItemsSelectorDefaultOptions.$clinit = () =>{};
  DatasetsItemsSelectorDefaultOptions.$loadModules();
  j_l_Object.$clinit();
  IsDatasetsItemsSelectorDefaultOptions.$clinit();
  DatasetsItemsSelectorDefaultOptions.$static_INSTANCE__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorDefaultOptions = DatasetsItemsSelectorDefaultOptions.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetsItemsSelectorDefaultOptions;
 }
 
 static $loadModules() {
  DatasetsItemsSelectorDefaultSelectionCleaner = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorDefaultSelectionCleaner$impl');
 }
}
/**@private {DatasetsItemsSelectorDefaultOptions}*/
DatasetsItemsSelectorDefaultOptions.$static_INSTANCE__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorDefaultOptions;
IsDatasetsItemsSelectorDefaultOptions.$markImplementor(DatasetsItemsSelectorDefaultOptions);
$Util.$setClassMetadata(DatasetsItemsSelectorDefaultOptions, "org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorDefaultOptions");

exports = DatasetsItemsSelectorDefaultOptions;

//# sourceMappingURL=DatasetsItemsSelectorDefaultOptions.js.map
