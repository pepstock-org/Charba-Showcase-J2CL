goog.module('org.pepstock.charba.client.options.TypedDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasCallbackScope = goog.require('org.pepstock.charba.client.commons.HasCallbackScope$impl');
const IsDefaultTypedDataset = goog.require('org.pepstock.charba.client.defaults.IsDefaultTypedDataset$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');
const HasAnimationOptions = goog.require('org.pepstock.charba.client.options.HasAnimationOptions$impl');
const HasBarDatasetOptions = goog.require('org.pepstock.charba.client.options.HasBarDatasetOptions$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Animation = goog.forwardDeclare('org.pepstock.charba.client.options.Animation$impl');
let AnimationContainer = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationContainer$impl');
let Animations = goog.forwardDeclare('org.pepstock.charba.client.options.Animations$impl');
let BarDatasetOptionsHandler = goog.forwardDeclare('org.pepstock.charba.client.options.BarDatasetOptionsHandler$impl');
let Datasets = goog.forwardDeclare('org.pepstock.charba.client.options.Datasets$impl');
let Transitions = goog.forwardDeclare('org.pepstock.charba.client.options.Transitions$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.TypedDataset.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractModel<Datasets, IsDefaultTypedDataset>}
 * @implements {IsDefaultTypedDataset}
 * @implements {HasBarDatasetOptions}
 * @implements {HasAnimationOptions}
 * @implements {HasCallbackScope}
 */
class TypedDataset extends AbstractModel {
 /** @protected */
 constructor() {
  super();
  /**@type {BarDatasetOptionsHandler}*/
  this.f_barOptionsHandler__org_pepstock_charba_client_options_TypedDataset_;
  /**@type {AnimationContainer}*/
  this.f_animationContainer__org_pepstock_charba_client_options_TypedDataset_;
  /**@type {Type}*/
  this.f_type__org_pepstock_charba_client_options_TypedDataset_;
  /**@type {?string}*/
  this.f_scope__org_pepstock_charba_client_options_TypedDataset_;
 }
 /** @return {!TypedDataset} */
 static $create__org_pepstock_charba_client_options_Datasets__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultTypedDataset__org_pepstock_charba_client_commons_NativeObject__java_lang_String(/** Datasets */ options, /** Type */ type, /** IsDefaultTypedDataset */ defaultValues, /** ? */ nativeObject, /** ?string */ scope) {
  TypedDataset.$clinit();
  let $instance = new TypedDataset();
  $instance.$ctor__org_pepstock_charba_client_options_TypedDataset__org_pepstock_charba_client_options_Datasets__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultTypedDataset__org_pepstock_charba_client_commons_NativeObject__java_lang_String(options, type, defaultValues, nativeObject, scope);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_TypedDataset__org_pepstock_charba_client_options_Datasets__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultTypedDataset__org_pepstock_charba_client_commons_NativeObject__java_lang_String(/** Datasets */ options, /** Type */ type, /** IsDefaultTypedDataset */ defaultValues, /** ? */ nativeObject, /** ?string */ scope) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(options, type, defaultValues, nativeObject);
  this.f_type__org_pepstock_charba_client_options_TypedDataset_ = Type.m_checkAndGetIfValid__org_pepstock_charba_client_Type(type);
  this.f_scope__org_pepstock_charba_client_options_TypedDataset_ = /**@type {?string}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(scope, "Scope argument"), j_l_String));
  this.f_barOptionsHandler__org_pepstock_charba_client_options_TypedDataset_ = BarDatasetOptionsHandler.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultTypedDataset__org_pepstock_charba_client_commons_NativeObject(this, /**@type {IsDefaultTypedDataset}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTypedDataset)), this.m_getNativeObject__());
  this.f_animationContainer__org_pepstock_charba_client_options_TypedDataset_ = AnimationContainer.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_commons_NativeObject__java_lang_String(options, this.f_type__org_pepstock_charba_client_options_TypedDataset_, /**@type {IsDefaultTypedDataset}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTypedDataset)), this.m_getNativeObject__(), this.f_scope__org_pepstock_charba_client_options_TypedDataset_);
 }
 /** @override @return {?string} */
 m_getScope__() {
  return this.f_scope__org_pepstock_charba_client_options_TypedDataset_;
 }
 /** @override @return {AnimationContainer} */
 m_getAnimationContainer__() {
  return this.f_animationContainer__org_pepstock_charba_client_options_TypedDataset_;
 }
 /** @override @return {BarDatasetOptionsHandler} */
 m_getDatasetOptionsHandler__() {
  return this.f_barOptionsHandler__org_pepstock_charba_client_options_TypedDataset_;
 }
 /** @return {Type} */
 m_getType__() {
  return this.f_type__org_pepstock_charba_client_options_TypedDataset_;
 }
 
 m_setShowLine__boolean(/** boolean */ showLine) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_SHOW_LINE__org_pepstock_charba_client_options_TypedDataset_Property, showLine);
 }
 /** @override @return {boolean} */
 m_isShowLine__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_SHOW_LINE__org_pepstock_charba_client_options_TypedDataset_Property, /**@type {IsDefaultTypedDataset}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTypedDataset)).m_isShowLine__());
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBarPercentage__() {
  return HasBarDatasetOptions.m_getBarPercentage__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBarThickness__() {
  return HasBarDatasetOptions.m_getBarThickness__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getCategoryPercentage__() {
  return HasBarDatasetOptions.m_getCategoryPercentage__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getMaxBarThickness__() {
  return HasBarDatasetOptions.m_getMaxBarThickness__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getMinBarLength__() {
  return HasBarDatasetOptions.m_getMinBarLength__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isGrouped__() {
  return HasBarDatasetOptions.m_isGrouped__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {Animation} */
 m_getAnimation__() {
  return HasAnimationOptions.m_getAnimation__$default__org_pepstock_charba_client_options_HasAnimationOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {Animations} */
 m_getAnimations__() {
  return HasAnimationOptions.m_getAnimations__$default__org_pepstock_charba_client_options_HasAnimationOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {Transitions} */
 m_getTransitions__() {
  return HasAnimationOptions.m_getTransitions__$default__org_pepstock_charba_client_options_HasAnimationOptions(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBarPercentage__double(/** number */ arg0) {
  HasBarDatasetOptions.m_setBarPercentage__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBarThickness__int(/** number */ arg0) {
  HasBarDatasetOptions.m_setBarThickness__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setCategoryPercentage__double(/** number */ arg0) {
  HasBarDatasetOptions.m_setCategoryPercentage__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setGrouped__boolean(/** boolean */ arg0) {
  HasBarDatasetOptions.m_setGrouped__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setMaxBarThickness__int(/** number */ arg0) {
  HasBarDatasetOptions.m_setMaxBarThickness__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setMinBarLength__int(/** number */ arg0) {
  HasBarDatasetOptions.m_setMinBarLength__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isAnimationEnabled__() {
  return HasAnimationOptions.m_isAnimationEnabled__$default__org_pepstock_charba_client_options_HasAnimationOptions(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setAnimationEnabled__boolean(/** boolean */ arg0) {
  HasAnimationOptions.m_setAnimationEnabled__$default__org_pepstock_charba_client_options_HasAnimationOptions__boolean(this, arg0);
 }
 
 static $clinit() {
  TypedDataset.$clinit = () =>{};
  TypedDataset.$loadModules();
  AbstractModel.$clinit();
  HasBarDatasetOptions.$clinit();
  HasAnimationOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TypedDataset;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Type = goog.module.get('org.pepstock.charba.client.Type$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  AnimationContainer = goog.module.get('org.pepstock.charba.client.options.AnimationContainer$impl');
  BarDatasetOptionsHandler = goog.module.get('org.pepstock.charba.client.options.BarDatasetOptionsHandler$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.TypedDataset.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultTypedDataset.$markImplementor(TypedDataset);
HasBarDatasetOptions.$markImplementor(TypedDataset);
HasAnimationOptions.$markImplementor(TypedDataset);
HasCallbackScope.$markImplementor(TypedDataset);
$Util.$setClassMetadata(TypedDataset, "org.pepstock.charba.client.options.TypedDataset");

exports = TypedDataset;

//# sourceMappingURL=TypedDataset.js.map
