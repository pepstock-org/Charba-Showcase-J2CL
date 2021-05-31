goog.module('org.pepstock.charba.client.configuration.Font$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractDynamicConfiguration = goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration$impl');
const IsFont = goog.require('org.pepstock.charba.client.options.IsFont$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let IsProvider = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let FontStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.FontStyle$impl');
let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');
let FontItem = goog.forwardDeclare('org.pepstock.charba.client.items.FontItem$impl');
let IsScriptableFontProvider = goog.forwardDeclare('org.pepstock.charba.client.options.IsScriptableFontProvider$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractDynamicConfiguration<IsFont>}
 * @implements {IsFont}
 */
class Font extends AbstractDynamicConfiguration {
 /** @protected */
 constructor() {
  super();
  /**@type {IsScriptableFontProvider<?>}*/
  this.f_scriptableFontProvider__org_pepstock_charba_client_configuration_Font_;
 }
 //Factory method corresponding to constructor 'Font(IsProvider)'.
 /** @return {!Font} */
 static $create__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(/** IsProvider<IsFont> */ provider) {
  Font.$clinit();
  let $instance = new Font();
  $instance.$ctor__org_pepstock_charba_client_configuration_Font__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(provider);
  return $instance;
 }
 //Initialization from constructor 'Font(IsProvider)'.
 
 $ctor__org_pepstock_charba_client_configuration_Font__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(/** IsProvider<IsFont> */ provider) {
  this.$ctor__org_pepstock_charba_client_configuration_Font__org_pepstock_charba_client_options_IsScriptableFontProvider__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(null, provider);
 }
 //Factory method corresponding to constructor 'Font(IsScriptableFontProvider, IsProvider)'.
 /** @return {!Font} */
 static $create__org_pepstock_charba_client_options_IsScriptableFontProvider__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(/** IsScriptableFontProvider<?> */ scriptableFontProvider, /** IsProvider<IsFont> */ provider) {
  Font.$clinit();
  let $instance = new Font();
  $instance.$ctor__org_pepstock_charba_client_configuration_Font__org_pepstock_charba_client_options_IsScriptableFontProvider__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(scriptableFontProvider, provider);
  return $instance;
 }
 //Initialization from constructor 'Font(IsScriptableFontProvider, IsProvider)'.
 
 $ctor__org_pepstock_charba_client_configuration_Font__org_pepstock_charba_client_options_IsScriptableFontProvider__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(/** IsScriptableFontProvider<?> */ scriptableFontProvider, /** IsProvider<IsFont> */ provider) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(provider);
  this.f_scriptableFontProvider__org_pepstock_charba_client_configuration_Font_ = scriptableFontProvider;
 }
 /** @override */
 m_setSize__int(/** number */ size) {
  this.m_resetCallback__();
  /**@type {IsFont}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsFont)).m_setSize__int(size);
 }
 /** @override @return {number} */
 m_getSize__() {
  return /**@type {IsFont}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsFont)).m_getSize__();
 }
 /** @override */
 m_setStyle__org_pepstock_charba_client_enums_FontStyle(/** FontStyle */ style) {
  this.m_resetCallback__();
  /**@type {IsFont}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsFont)).m_setStyle__org_pepstock_charba_client_enums_FontStyle(style);
 }
 /** @override @return {FontStyle} */
 m_getStyle__() {
  return /**@type {IsFont}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsFont)).m_getStyle__();
 }
 /** @override */
 m_setFamily__java_lang_String(/** ?string */ family) {
  this.m_resetCallback__();
  /**@type {IsFont}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsFont)).m_setFamily__java_lang_String(family);
 }
 /** @override @return {?string} */
 m_getFamily__() {
  return /**@type {IsFont}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsFont)).m_getFamily__();
 }
 /** @override */
 m_setWeight__org_pepstock_charba_client_enums_Weight(/** Weight */ weight) {
  this.m_resetCallback__();
  /**@type {IsFont}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsFont)).m_setWeight__org_pepstock_charba_client_enums_Weight(weight);
 }
 /** @override @return {Weight} */
 m_getWeight__() {
  return /**@type {IsFont}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsFont)).m_getWeight__();
 }
 /** @override */
 m_setLineHeight__double(/** number */ lineHeight) {
  this.m_resetCallback__();
  /**@type {IsFont}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsFont)).m_setLineHeight__double(lineHeight);
 }
 /** @override */
 m_setLineHeight__java_lang_String(/** ?string */ lineHeight) {
  this.m_resetCallback__();
  /**@type {IsFont}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsFont)).m_setLineHeight__java_lang_String(lineHeight);
 }
 /** @override @return {number} */
 m_getLineHeight__() {
  return /**@type {IsFont}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsFont)).m_getLineHeight__();
 }
 /** @override @return {?string} */
 m_getLineHeightAsString__() {
  return /**@type {IsFont}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsFont)).m_getLineHeightAsString__();
 }
 
 m_resetCallback__() {
  if (!$Equality.$same(this.f_scriptableFontProvider__org_pepstock_charba_client_configuration_Font_, null) && !$Equality.$same(this.f_scriptableFontProvider__org_pepstock_charba_client_configuration_Font_.m_getFontCallback__(), null)) {
   this.f_scriptableFontProvider__org_pepstock_charba_client_configuration_Font_.m_setFont__org_pepstock_charba_client_callbacks_NativeCallback(/**@type {Function}*/ (null));
  }
 }
 //Default method forwarding stub.
 /** @override @return {FontItem} */
 m_create__() {
  return IsDefaultFont.m_create__$default__org_pepstock_charba_client_defaults_IsDefaultFont(this);
 }
 //Default method forwarding stub.
 /** @override @return {FontItem} */
 m_create__org_pepstock_charba_client_defaults_IsDefaultFont(/** IsDefaultFont */ arg0) {
  return IsDefaultFont.m_create__$default__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_defaults_IsDefaultFont(this, arg0);
 }
 
 static $clinit() {
  Font.$clinit = () =>{};
  Font.$loadModules();
  AbstractDynamicConfiguration.$clinit();
  IsDefaultFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Font;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsDefaultFont = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsFont.$markImplementor(Font);
$Util.$setClassMetadata(Font, "org.pepstock.charba.client.configuration.Font");

exports = Font;

//# sourceMappingURL=Font.js.map
