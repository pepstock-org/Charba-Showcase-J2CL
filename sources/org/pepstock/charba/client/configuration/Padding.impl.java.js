goog.module('org.pepstock.charba.client.configuration.Padding$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractDynamicConfiguration = goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration$impl');
const IsPadding = goog.require('org.pepstock.charba.client.options.IsPadding$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let IsProvider = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let PaddingItem = goog.forwardDeclare('org.pepstock.charba.client.items.PaddingItem$impl');
let IsScriptablePaddingProvider = goog.forwardDeclare('org.pepstock.charba.client.options.IsScriptablePaddingProvider$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractDynamicConfiguration<IsPadding>}
 * @implements {IsPadding}
 */
class Padding extends AbstractDynamicConfiguration {
 /** @protected */
 constructor() {
  super();
  /**@type {IsScriptablePaddingProvider<?>}*/
  this.f_scriptablePaddingProvider__org_pepstock_charba_client_configuration_Padding_;
 }
 //Factory method corresponding to constructor 'Padding(IsProvider)'.
 /** @return {!Padding} */
 static $create__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(/** IsProvider<IsPadding> */ provider) {
  Padding.$clinit();
  let $instance = new Padding();
  $instance.$ctor__org_pepstock_charba_client_configuration_Padding__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(provider);
  return $instance;
 }
 //Initialization from constructor 'Padding(IsProvider)'.
 
 $ctor__org_pepstock_charba_client_configuration_Padding__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(/** IsProvider<IsPadding> */ provider) {
  this.$ctor__org_pepstock_charba_client_configuration_Padding__org_pepstock_charba_client_options_IsScriptablePaddingProvider__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(null, provider);
 }
 //Factory method corresponding to constructor 'Padding(IsScriptablePaddingProvider, IsProvider)'.
 /** @return {!Padding} */
 static $create__org_pepstock_charba_client_options_IsScriptablePaddingProvider__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(/** IsScriptablePaddingProvider<?> */ scriptablePaddingProvider, /** IsProvider<IsPadding> */ provider) {
  Padding.$clinit();
  let $instance = new Padding();
  $instance.$ctor__org_pepstock_charba_client_configuration_Padding__org_pepstock_charba_client_options_IsScriptablePaddingProvider__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(scriptablePaddingProvider, provider);
  return $instance;
 }
 //Initialization from constructor 'Padding(IsScriptablePaddingProvider, IsProvider)'.
 
 $ctor__org_pepstock_charba_client_configuration_Padding__org_pepstock_charba_client_options_IsScriptablePaddingProvider__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(/** IsScriptablePaddingProvider<?> */ scriptablePaddingProvider, /** IsProvider<IsPadding> */ provider) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(provider);
  this.f_scriptablePaddingProvider__org_pepstock_charba_client_configuration_Padding_ = scriptablePaddingProvider;
 }
 /** @override */
 m_setLeft__int(/** number */ padding) {
  this.m_resetCallback__();
  /**@type {IsPadding}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsPadding)).m_setLeft__int(padding);
 }
 /** @override @return {number} */
 m_getLeft__() {
  return /**@type {IsPadding}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsPadding)).m_getLeft__();
 }
 /** @override */
 m_setRight__int(/** number */ padding) {
  this.m_resetCallback__();
  /**@type {IsPadding}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsPadding)).m_setRight__int(padding);
 }
 /** @override @return {number} */
 m_getRight__() {
  return /**@type {IsPadding}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsPadding)).m_getRight__();
 }
 /** @override */
 m_setTop__int(/** number */ padding) {
  this.m_resetCallback__();
  /**@type {IsPadding}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsPadding)).m_setTop__int(padding);
 }
 /** @override @return {number} */
 m_getTop__() {
  return /**@type {IsPadding}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsPadding)).m_getTop__();
 }
 /** @override */
 m_setBottom__int(/** number */ padding) {
  this.m_resetCallback__();
  /**@type {IsPadding}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsPadding)).m_setBottom__int(padding);
 }
 /** @override @return {number} */
 m_getBottom__() {
  return /**@type {IsPadding}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsPadding)).m_getBottom__();
 }
 
 m_resetCallback__() {
  if (!$Equality.$same(this.f_scriptablePaddingProvider__org_pepstock_charba_client_configuration_Padding_, null) && !$Equality.$same(this.f_scriptablePaddingProvider__org_pepstock_charba_client_configuration_Padding_.m_getPaddingCallback__(), null)) {
   this.f_scriptablePaddingProvider__org_pepstock_charba_client_configuration_Padding_.m_setPadding__org_pepstock_charba_client_callbacks_NativeCallback(/**@type {Function}*/ (null));
  }
 }
 //Default method forwarding stub.
 /** @override @return {PaddingItem} */
 m_create__() {
  return IsDefaultPadding.m_create__$default__org_pepstock_charba_client_defaults_IsDefaultPadding(this);
 }
 //Default method forwarding stub.
 /** @override @return {PaddingItem} */
 m_create__org_pepstock_charba_client_defaults_IsDefaultPadding(/** IsDefaultPadding */ arg0) {
  return IsDefaultPadding.m_create__$default__org_pepstock_charba_client_defaults_IsDefaultPadding__org_pepstock_charba_client_defaults_IsDefaultPadding(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_set__int(/** number */ arg0) {
  IsPadding.m_set__$default__org_pepstock_charba_client_options_IsPadding__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setX__int(/** number */ arg0) {
  IsPadding.m_setX__$default__org_pepstock_charba_client_options_IsPadding__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setY__int(/** number */ arg0) {
  IsPadding.m_setY__$default__org_pepstock_charba_client_options_IsPadding__int(this, arg0);
 }
 
 static $clinit() {
  Padding.$clinit = () =>{};
  Padding.$loadModules();
  AbstractDynamicConfiguration.$clinit();
  IsPadding.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Padding;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsDefaultPadding = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsPadding.$markImplementor(Padding);
$Util.$setClassMetadata(Padding, "org.pepstock.charba.client.configuration.Padding");

exports = Padding;

//# sourceMappingURL=Padding.js.map
