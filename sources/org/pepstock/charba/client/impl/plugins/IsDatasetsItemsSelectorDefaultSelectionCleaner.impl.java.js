goog.module('org.pepstock.charba.client.impl.plugins.IsDatasetsItemsSelectorDefaultSelectionCleaner$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let DatasetsItemsSelectorOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');
let SelectionCleaner = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.SelectionCleaner$impl');
let Align = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.Align$impl');
let Render = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.Render$impl');

/**
 * @interface
 */
class IsDatasetsItemsSelectorDefaultSelectionCleaner {
 /** @abstract @return {boolean} */
 m_isDisplay__() {}
 /** @abstract @return {?string} */
 m_getLabel__() {}
 /** @abstract @return {IsDefaultFont} */
 m_getFont__() {}
 /** @abstract @return {?string} */
 m_getColorAsString__() {}
 /** @abstract @return {Align} */
 m_getAlign__() {}
 /** @abstract @return {Render} */
 m_getRender__() {}
 /** @abstract @return {Position} */
 m_getPosition__() {}
 /** @abstract @return {HTMLImageElement} */
 m_getImage__() {}
 /** @abstract @return {number} */
 m_getMargin__() {}
 /** @abstract @return {number} */
 m_getPadding__() {}
 /** @abstract @return {number} */
 m_getSpacing__() {}
 /** @abstract @return {boolean} */
 m_isUseSelectionStyle__() {}
 /** @return {boolean} */
 static m_isDisplay__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(/** !IsDatasetsItemsSelectorDefaultSelectionCleaner */ $thisArg) {
  IsDatasetsItemsSelectorDefaultSelectionCleaner.$clinit();
  return SelectionCleaner.f_DEFAULT_DISPLAY__org_pepstock_charba_client_impl_plugins_SelectionCleaner;
 }
 /** @return {?string} */
 static m_getLabel__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(/** !IsDatasetsItemsSelectorDefaultSelectionCleaner */ $thisArg) {
  IsDatasetsItemsSelectorDefaultSelectionCleaner.$clinit();
  return SelectionCleaner.f_DEFAULT_LABEL__org_pepstock_charba_client_impl_plugins_SelectionCleaner;
 }
 /** @return {IsDefaultFont} */
 static m_getFont__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(/** !IsDatasetsItemsSelectorDefaultSelectionCleaner */ $thisArg) {
  IsDatasetsItemsSelectorDefaultSelectionCleaner.$clinit();
  return Defaults.m_get__().m_getGlobal__().m_getFont__();
 }
 /** @return {?string} */
 static m_getColorAsString__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(/** !IsDatasetsItemsSelectorDefaultSelectionCleaner */ $thisArg) {
  IsDatasetsItemsSelectorDefaultSelectionCleaner.$clinit();
  return DatasetsItemsSelectorOptions.f_DEFAULT_BORDER_COLOR_AS_STRING__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions;
 }
 /** @return {Align} */
 static m_getAlign__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(/** !IsDatasetsItemsSelectorDefaultSelectionCleaner */ $thisArg) {
  IsDatasetsItemsSelectorDefaultSelectionCleaner.$clinit();
  return SelectionCleaner.f_DEFAULT_ALIGN__org_pepstock_charba_client_impl_plugins_SelectionCleaner;
 }
 /** @return {Render} */
 static m_getRender__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(/** !IsDatasetsItemsSelectorDefaultSelectionCleaner */ $thisArg) {
  IsDatasetsItemsSelectorDefaultSelectionCleaner.$clinit();
  return SelectionCleaner.f_DEFAULT_RENDER__org_pepstock_charba_client_impl_plugins_SelectionCleaner;
 }
 /** @return {Position} */
 static m_getPosition__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(/** !IsDatasetsItemsSelectorDefaultSelectionCleaner */ $thisArg) {
  IsDatasetsItemsSelectorDefaultSelectionCleaner.$clinit();
  return SelectionCleaner.f_DEFAULT_POSITION__org_pepstock_charba_client_impl_plugins_SelectionCleaner;
 }
 /** @return {HTMLImageElement} */
 static m_getImage__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(/** !IsDatasetsItemsSelectorDefaultSelectionCleaner */ $thisArg) {
  IsDatasetsItemsSelectorDefaultSelectionCleaner.$clinit();
  return null;
 }
 /** @return {number} */
 static m_getMargin__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(/** !IsDatasetsItemsSelectorDefaultSelectionCleaner */ $thisArg) {
  IsDatasetsItemsSelectorDefaultSelectionCleaner.$clinit();
  return SelectionCleaner.f_DEFAULT_MARGIN__org_pepstock_charba_client_impl_plugins_SelectionCleaner;
 }
 /** @return {number} */
 static m_getPadding__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(/** !IsDatasetsItemsSelectorDefaultSelectionCleaner */ $thisArg) {
  IsDatasetsItemsSelectorDefaultSelectionCleaner.$clinit();
  return SelectionCleaner.f_DEFAULT_PADDING__org_pepstock_charba_client_impl_plugins_SelectionCleaner;
 }
 /** @return {number} */
 static m_getSpacing__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(/** !IsDatasetsItemsSelectorDefaultSelectionCleaner */ $thisArg) {
  IsDatasetsItemsSelectorDefaultSelectionCleaner.$clinit();
  return SelectionCleaner.f_DEFAULT_SPACING__org_pepstock_charba_client_impl_plugins_SelectionCleaner;
 }
 /** @return {boolean} */
 static m_isUseSelectionStyle__$default__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(/** !IsDatasetsItemsSelectorDefaultSelectionCleaner */ $thisArg) {
  IsDatasetsItemsSelectorDefaultSelectionCleaner.$clinit();
  return SelectionCleaner.f_DEFAULT_USE_SELECTION_STYLE__org_pepstock_charba_client_impl_plugins_SelectionCleaner;
 }
 
 static $clinit() {
  IsDatasetsItemsSelectorDefaultSelectionCleaner.$clinit = () =>{};
  IsDatasetsItemsSelectorDefaultSelectionCleaner.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  DatasetsItemsSelectorOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');
  SelectionCleaner = goog.module.get('org.pepstock.charba.client.impl.plugins.SelectionCleaner$impl');
 }
}
IsDatasetsItemsSelectorDefaultSelectionCleaner.$markImplementor(/**@type {Function}*/ (IsDatasetsItemsSelectorDefaultSelectionCleaner));
$Util.$setClassMetadataForInterface(IsDatasetsItemsSelectorDefaultSelectionCleaner, "org.pepstock.charba.client.impl.plugins.IsDatasetsItemsSelectorDefaultSelectionCleaner");

exports = IsDatasetsItemsSelectorDefaultSelectionCleaner;

//# sourceMappingURL=IsDatasetsItemsSelectorDefaultSelectionCleaner.js.map
