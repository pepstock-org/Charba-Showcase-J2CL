goog.module('org.pepstock.charba.client.configuration.TypedDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationOptionsContainer = goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer$impl');
const HasAnimation = goog.require('org.pepstock.charba.client.configuration.HasAnimation$impl');

let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let IsProvider = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
let Animation = goog.forwardDeclare('org.pepstock.charba.client.configuration.Animation$impl');
let AnimationContainer = goog.forwardDeclare('org.pepstock.charba.client.configuration.AnimationContainer$impl');
let Animations = goog.forwardDeclare('org.pepstock.charba.client.configuration.Animations$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let Transitions = goog.forwardDeclare('org.pepstock.charba.client.configuration.Transitions$impl');

/**
 * @implements {HasAnimation}
 */
class TypedDataset extends ConfigurationOptionsContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {AnimationContainer}*/
  this.f_animationContainer__org_pepstock_charba_client_configuration_TypedDataset_;
  /**@type {Type}*/
  this.f_type__org_pepstock_charba_client_configuration_TypedDataset_;
 }
 //Factory method corresponding to constructor 'TypedDataset(ConfigurationOptions)'.
 /** @return {!TypedDataset} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  TypedDataset.$clinit();
  let $instance = new TypedDataset();
  $instance.$ctor__org_pepstock_charba_client_configuration_TypedDataset__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 //Initialization from constructor 'TypedDataset(ConfigurationOptions)'.
 
 $ctor__org_pepstock_charba_client_configuration_TypedDataset__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_TypedDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_configuration_ConfigurationOptions(options.m_getChart__().m_getType__(), options);
 }
 //Factory method corresponding to constructor 'TypedDataset(Type, ConfigurationOptions)'.
 /** @return {!TypedDataset} */
 static $create__org_pepstock_charba_client_Type__org_pepstock_charba_client_configuration_ConfigurationOptions(/** Type */ type, /** ConfigurationOptions */ options) {
  TypedDataset.$clinit();
  let $instance = new TypedDataset();
  $instance.$ctor__org_pepstock_charba_client_configuration_TypedDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_configuration_ConfigurationOptions(type, options);
  return $instance;
 }
 //Initialization from constructor 'TypedDataset(Type, ConfigurationOptions)'.
 
 $ctor__org_pepstock_charba_client_configuration_TypedDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_configuration_ConfigurationOptions(/** Type */ type, /** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  this.f_type__org_pepstock_charba_client_configuration_TypedDataset_ = Type.m_checkAndGetIfValid__org_pepstock_charba_client_Type(type);
  this.f_animationContainer__org_pepstock_charba_client_configuration_TypedDataset_ = AnimationContainer.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(this.m_getChart__(), IsProvider.$adapt(() =>{
   return this.m_getConfiguration__().m_getDatasets__().m_get__org_pepstock_charba_client_Type(type);
  }));
 }
 /** @override @return {AnimationContainer} */
 m_getAnimationContainer__() {
  return this.f_animationContainer__org_pepstock_charba_client_configuration_TypedDataset_;
 }
 
 m_setBarPercentage__double(/** number */ barPercentage) {
  this.m_getConfiguration__().m_getDatasets__().m_get__org_pepstock_charba_client_Type(this.f_type__org_pepstock_charba_client_configuration_TypedDataset_).m_setBarPercentage__double(barPercentage);
 }
 /** @return {number} */
 m_getBarPercentage__() {
  return this.m_getConfiguration__().m_getDatasets__().m_get__org_pepstock_charba_client_Type(this.f_type__org_pepstock_charba_client_configuration_TypedDataset_).m_getBarPercentage__();
 }
 
 m_setCategoryPercentage__double(/** number */ categoryPercentage) {
  this.m_getConfiguration__().m_getDatasets__().m_get__org_pepstock_charba_client_Type(this.f_type__org_pepstock_charba_client_configuration_TypedDataset_).m_setCategoryPercentage__double(categoryPercentage);
 }
 /** @return {number} */
 m_getCategoryPercentage__() {
  return this.m_getConfiguration__().m_getDatasets__().m_get__org_pepstock_charba_client_Type(this.f_type__org_pepstock_charba_client_configuration_TypedDataset_).m_getCategoryPercentage__();
 }
 
 m_setBarThickness__int(/** number */ barThickness) {
  this.m_getConfiguration__().m_getDatasets__().m_get__org_pepstock_charba_client_Type(this.f_type__org_pepstock_charba_client_configuration_TypedDataset_).m_setBarThickness__int(barThickness);
 }
 /** @return {number} */
 m_getBarThickness__() {
  return this.m_getConfiguration__().m_getDatasets__().m_get__org_pepstock_charba_client_Type(this.f_type__org_pepstock_charba_client_configuration_TypedDataset_).m_getBarThickness__();
 }
 
 m_setMaxBarThickness__int(/** number */ maxBarThickness) {
  this.m_getConfiguration__().m_getDatasets__().m_get__org_pepstock_charba_client_Type(this.f_type__org_pepstock_charba_client_configuration_TypedDataset_).m_setMaxBarThickness__int(maxBarThickness);
 }
 /** @return {number} */
 m_getMaxBarThickness__() {
  return this.m_getConfiguration__().m_getDatasets__().m_get__org_pepstock_charba_client_Type(this.f_type__org_pepstock_charba_client_configuration_TypedDataset_).m_getMaxBarThickness__();
 }
 
 m_setMinBarLength__int(/** number */ minBarLength) {
  this.m_getConfiguration__().m_getDatasets__().m_get__org_pepstock_charba_client_Type(this.f_type__org_pepstock_charba_client_configuration_TypedDataset_).m_setMinBarLength__int(minBarLength);
 }
 /** @return {number} */
 m_getMinBarLength__() {
  return this.m_getConfiguration__().m_getDatasets__().m_get__org_pepstock_charba_client_Type(this.f_type__org_pepstock_charba_client_configuration_TypedDataset_).m_getMinBarLength__();
 }
 //Default method forwarding stub.
 /** @override @return {Animation} */
 m_getAnimation__() {
  return HasAnimation.m_getAnimation__$default__org_pepstock_charba_client_configuration_HasAnimation(this);
 }
 //Default method forwarding stub.
 /** @override @return {Animations} */
 m_getAnimations__() {
  return HasAnimation.m_getAnimations__$default__org_pepstock_charba_client_configuration_HasAnimation(this);
 }
 //Default method forwarding stub.
 /** @override @return {Transitions} */
 m_getTransitions__() {
  return HasAnimation.m_getTransitions__$default__org_pepstock_charba_client_configuration_HasAnimation(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isAnimationEnabled__() {
  return HasAnimation.m_isAnimationEnabled__$default__org_pepstock_charba_client_configuration_HasAnimation(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setAnimationEnabled__boolean(/** boolean */ arg0) {
  HasAnimation.m_setAnimationEnabled__$default__org_pepstock_charba_client_configuration_HasAnimation__boolean(this, arg0);
 }
 
 static $clinit() {
  TypedDataset.$clinit = () =>{};
  TypedDataset.$loadModules();
  ConfigurationOptionsContainer.$clinit();
  HasAnimation.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TypedDataset;
 }
 
 static $loadModules() {
  Type = goog.module.get('org.pepstock.charba.client.Type$impl');
  IsProvider = goog.module.get('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
  AnimationContainer = goog.module.get('org.pepstock.charba.client.configuration.AnimationContainer$impl');
 }
}
HasAnimation.$markImplementor(TypedDataset);
$Util.$setClassMetadata(TypedDataset, "org.pepstock.charba.client.configuration.TypedDataset");

exports = TypedDataset;

//# sourceMappingURL=TypedDataset.js.map
