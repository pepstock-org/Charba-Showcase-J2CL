goog.module('org.pepstock.charba.client.options.AbstractScriptablePadding$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPadding = goog.require('org.pepstock.charba.client.options.AbstractPadding$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let IsScriptablePaddingProvider = goog.forwardDeclare('org.pepstock.charba.client.options.IsScriptablePaddingProvider$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template T
 */
class AbstractScriptablePadding extends AbstractPadding {
 /** @protected */
 constructor() {
  super();
  /**@type {IsScriptablePaddingProvider<T>}*/
  this.f_scriptablePaddingProvider__org_pepstock_charba_client_options_AbstractScriptablePadding_;
 }
 //Initialization from constructor 'AbstractScriptablePadding(IsScriptablePaddingProvider, IsDefaultPadding)'.
 
 $ctor__org_pepstock_charba_client_options_AbstractScriptablePadding__org_pepstock_charba_client_options_IsScriptablePaddingProvider__org_pepstock_charba_client_defaults_IsDefaultPadding(/** IsScriptablePaddingProvider<T> */ scriptablePaddingProvider, /** IsDefaultPadding */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_options_AbstractScriptablePadding__org_pepstock_charba_client_options_IsScriptablePaddingProvider__org_pepstock_charba_client_defaults_IsDefaultPadding__org_pepstock_charba_client_commons_NativeObject(scriptablePaddingProvider, defaultValues, null);
 }
 //Initialization from constructor 'AbstractScriptablePadding(IsScriptablePaddingProvider, IsDefaultPadding, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_options_AbstractScriptablePadding__org_pepstock_charba_client_options_IsScriptablePaddingProvider__org_pepstock_charba_client_defaults_IsDefaultPadding__org_pepstock_charba_client_commons_NativeObject(/** IsScriptablePaddingProvider<T> */ scriptablePaddingProvider, /** IsDefaultPadding */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractPadding__org_pepstock_charba_client_defaults_IsDefaultPadding__org_pepstock_charba_client_commons_NativeObject(defaultValues, nativeObject);
  this.f_scriptablePaddingProvider__org_pepstock_charba_client_options_AbstractScriptablePadding_ = /**@type {IsScriptablePaddingProvider<T>}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(scriptablePaddingProvider, "Scriptable padding provider argument"), IsScriptablePaddingProvider));
 }
 /** @override */
 m_setLeft__int(/** number */ value) {
  this.m_resetCallback__();
  super.m_setLeft__int(value);
 }
 /** @override */
 m_setRight__int(/** number */ value) {
  this.m_resetCallback__();
  super.m_setRight__int(value);
 }
 /** @override */
 m_setTop__int(/** number */ value) {
  this.m_resetCallback__();
  super.m_setTop__int(value);
 }
 /** @override */
 m_setBottom__int(/** number */ value) {
  this.m_resetCallback__();
  super.m_setBottom__int(value);
 }
 
 m_resetCallback__() {
  if (!$Equality.$same(this.f_scriptablePaddingProvider__org_pepstock_charba_client_options_AbstractScriptablePadding_.m_getPaddingCallback__(), null)) {
   this.f_scriptablePaddingProvider__org_pepstock_charba_client_options_AbstractScriptablePadding_.m_setPadding__org_pepstock_charba_client_callbacks_PaddingCallback(null);
  }
 }
 
 static $clinit() {
  AbstractScriptablePadding.$clinit = () =>{};
  AbstractScriptablePadding.$loadModules();
  AbstractPadding.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractScriptablePadding;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  IsScriptablePaddingProvider = goog.module.get('org.pepstock.charba.client.options.IsScriptablePaddingProvider$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AbstractScriptablePadding, "org.pepstock.charba.client.options.AbstractScriptablePadding");

exports = AbstractScriptablePadding;

//# sourceMappingURL=AbstractScriptablePadding.js.map
