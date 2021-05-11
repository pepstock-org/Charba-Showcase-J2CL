goog.module('org.pepstock.charba.client.options.AbstractScriptableFont$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractFont = goog.require('org.pepstock.charba.client.options.AbstractFont$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let FontStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.FontStyle$impl');
let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');
let IsScriptableFontProvider = goog.forwardDeclare('org.pepstock.charba.client.options.IsScriptableFontProvider$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template T
 */
class AbstractScriptableFont extends AbstractFont {
 /** @protected */
 constructor() {
  super();
  /**@type {IsScriptableFontProvider<T>}*/
  this.f_scriptableFontProvider__org_pepstock_charba_client_options_AbstractScriptableFont_;
 }
 //Initialization from constructor 'AbstractScriptableFont(IsScriptableFontProvider, IsDefaultFont)'.
 
 $ctor__org_pepstock_charba_client_options_AbstractScriptableFont__org_pepstock_charba_client_options_IsScriptableFontProvider__org_pepstock_charba_client_defaults_IsDefaultFont(/** IsScriptableFontProvider<T> */ scriptableFontProvider, /** IsDefaultFont */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_options_AbstractScriptableFont__org_pepstock_charba_client_options_IsScriptableFontProvider__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(scriptableFontProvider, defaultValues, null);
 }
 //Initialization from constructor 'AbstractScriptableFont(IsScriptableFontProvider, IsDefaultFont, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_options_AbstractScriptableFont__org_pepstock_charba_client_options_IsScriptableFontProvider__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(/** IsScriptableFontProvider<T> */ scriptableFontProvider, /** IsDefaultFont */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractFont__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(defaultValues, nativeObject);
  this.f_scriptableFontProvider__org_pepstock_charba_client_options_AbstractScriptableFont_ = /**@type {IsScriptableFontProvider<T>}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(scriptableFontProvider, "Scriptable font provider argument"), IsScriptableFontProvider));
 }
 /** @override */
 m_setSize__int(/** number */ size) {
  this.m_resetCallback__();
  super.m_setSize__int(size);
 }
 /** @override */
 m_setStyle__org_pepstock_charba_client_enums_FontStyle(/** FontStyle */ style) {
  this.m_resetCallback__();
  super.m_setStyle__org_pepstock_charba_client_enums_FontStyle(style);
 }
 /** @override */
 m_setFamily__java_lang_String(/** ?string */ family) {
  this.m_resetCallback__();
  super.m_setFamily__java_lang_String(family);
 }
 /** @override */
 m_setWeight__org_pepstock_charba_client_enums_Weight(/** Weight */ weight) {
  this.m_resetCallback__();
  super.m_setWeight__org_pepstock_charba_client_enums_Weight(weight);
 }
 /** @override */
 m_setLineHeight__double(/** number */ lineHeight) {
  this.m_resetCallback__();
  super.m_setLineHeight__double(lineHeight);
 }
 /** @override */
 m_setLineHeight__java_lang_String(/** ?string */ lineHeight) {
  this.m_resetCallback__();
  super.m_setLineHeight__java_lang_String(lineHeight);
 }
 
 m_resetCallback__() {
  if (!$Equality.$same(this.f_scriptableFontProvider__org_pepstock_charba_client_options_AbstractScriptableFont_.m_getFontCallback__(), null)) {
   this.f_scriptableFontProvider__org_pepstock_charba_client_options_AbstractScriptableFont_.m_setFont__org_pepstock_charba_client_callbacks_FontCallback(null);
  }
 }
 
 static $clinit() {
  AbstractScriptableFont.$clinit = () =>{};
  AbstractScriptableFont.$loadModules();
  AbstractFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractScriptableFont;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  IsScriptableFontProvider = goog.module.get('org.pepstock.charba.client.options.IsScriptableFontProvider$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AbstractScriptableFont, "org.pepstock.charba.client.options.AbstractScriptableFont");

exports = AbstractScriptableFont;

//# sourceMappingURL=AbstractScriptableFont.js.map
