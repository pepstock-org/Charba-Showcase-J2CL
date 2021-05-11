goog.module('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorDefaultSelectionCleaner$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDatasetsItemsSelectorDefaultSelectionCleaner = goog.require('org.pepstock.charba.client.impl.plugins.IsDatasetsItemsSelectorDefaultSelectionCleaner$impl');

let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let Align = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.Align$impl');
let Render = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.Render$impl');

/**
 * @implements {IsDatasetsItemsSelectorDefaultSelectionCleaner}
 */
class DatasetsItemsSelectorDefaultSelectionCleaner extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DatasetsItemsSelectorDefaultSelectionCleaner} */
 static $create__() {
  DatasetsItemsSelectorDefaultSelectionCleaner.$clinit();
  let $instance = new DatasetsItemsSelectorDefaultSelectionCleaner();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorDefaultSelectionCleaner__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorDefaultSelectionCleaner__() {
  this.$ctor__java_lang_Object__();
 }
 //Default method forwarding stub.
 /** @override @return {Align} */
 m_getAlign__() {
  return IsDatasetsItemsSelectorDefaultSelectionCleaner.m_getAlign__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getColorAsString__() {
  return IsDatasetsItemsSelectorDefaultSelectionCleaner.m_getColorAsString__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsDefaultFont} */
 m_getFont__() {
  return IsDatasetsItemsSelectorDefaultSelectionCleaner.m_getFont__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(this);
 }
 //Default method forwarding stub.
 /** @override @return {HTMLImageElement} */
 m_getImage__() {
  return IsDatasetsItemsSelectorDefaultSelectionCleaner.m_getImage__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getLabel__() {
  return IsDatasetsItemsSelectorDefaultSelectionCleaner.m_getLabel__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getMargin__() {
  return IsDatasetsItemsSelectorDefaultSelectionCleaner.m_getMargin__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getPadding__() {
  return IsDatasetsItemsSelectorDefaultSelectionCleaner.m_getPadding__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(this);
 }
 //Default method forwarding stub.
 /** @override @return {Position} */
 m_getPosition__() {
  return IsDatasetsItemsSelectorDefaultSelectionCleaner.m_getPosition__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(this);
 }
 //Default method forwarding stub.
 /** @override @return {Render} */
 m_getRender__() {
  return IsDatasetsItemsSelectorDefaultSelectionCleaner.m_getRender__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getSpacing__() {
  return IsDatasetsItemsSelectorDefaultSelectionCleaner.m_getSpacing__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isDisplay__() {
  return IsDatasetsItemsSelectorDefaultSelectionCleaner.m_isDisplay__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isUseSelectionStyle__() {
  return IsDatasetsItemsSelectorDefaultSelectionCleaner.m_isUseSelectionStyle__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(this);
 }
 
 static $clinit() {
  DatasetsItemsSelectorDefaultSelectionCleaner.$clinit = () =>{};
  DatasetsItemsSelectorDefaultSelectionCleaner.$loadModules();
  j_l_Object.$clinit();
  IsDatasetsItemsSelectorDefaultSelectionCleaner.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetsItemsSelectorDefaultSelectionCleaner;
 }
 
 static $loadModules() {}
}
IsDatasetsItemsSelectorDefaultSelectionCleaner.$markImplementor(DatasetsItemsSelectorDefaultSelectionCleaner);
$Util.$setClassMetadata(DatasetsItemsSelectorDefaultSelectionCleaner, "org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorDefaultSelectionCleaner");

exports = DatasetsItemsSelectorDefaultSelectionCleaner;

//# sourceMappingURL=DatasetsItemsSelectorDefaultSelectionCleaner.js.map
