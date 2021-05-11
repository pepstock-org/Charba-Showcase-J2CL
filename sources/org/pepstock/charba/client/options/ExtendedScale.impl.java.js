goog.module('org.pepstock.charba.client.options.ExtendedScale$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scale = goog.require('org.pepstock.charba.client.options.Scale$impl');

let AtomicInteger = goog.forwardDeclare('java.util.concurrent.atomic.AtomicInteger$impl');
let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let IsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.commons.IsEnvelop$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ConfigurationEnvelop = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
let IsDefaultScale = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScale$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let AxisType = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisType$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedScale.Property$impl');
let IsScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.IsScaleId$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptFunction = goog.forwardDeclare('vmbootstrap.JavaScriptFunction$impl');

class ExtendedScale extends Scale {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'ExtendedScale(ConfigurationEnvelop, AxisType, AxisKind, IsDefaultScale)'.
 /** @return {!ExtendedScale} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationEnvelop__org_pepstock_charba_client_enums_AxisType__org_pepstock_charba_client_enums_AxisKind__org_pepstock_charba_client_defaults_IsDefaultScale(/** ConfigurationEnvelop<IsScaleId> */ envelop, /** AxisType */ type, /** AxisKind */ kind, /** IsDefaultScale */ defaultValues) {
  ExtendedScale.$clinit();
  let $instance = new ExtendedScale();
  $instance.$ctor__org_pepstock_charba_client_options_ExtendedScale__org_pepstock_charba_client_configuration_ConfigurationEnvelop__org_pepstock_charba_client_enums_AxisType__org_pepstock_charba_client_enums_AxisKind__org_pepstock_charba_client_defaults_IsDefaultScale(envelop, type, kind, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'ExtendedScale(ConfigurationEnvelop, AxisType, AxisKind, IsDefaultScale)'.
 
 $ctor__org_pepstock_charba_client_options_ExtendedScale__org_pepstock_charba_client_configuration_ConfigurationEnvelop__org_pepstock_charba_client_enums_AxisType__org_pepstock_charba_client_enums_AxisKind__org_pepstock_charba_client_defaults_IsDefaultScale(/** ConfigurationEnvelop<IsScaleId> */ envelop, /** AxisType */ type, /** AxisKind */ kind, /** IsDefaultScale */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_options_Scale__org_pepstock_charba_client_enums_AxisType__org_pepstock_charba_client_defaults_IsDefaultScale(type, defaultValues);
  IsEnvelop.m_checkIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop);
  this.m_setAxis__org_pepstock_charba_client_enums_AxisKind_$pp_org_pepstock_charba_client_options(/**@type {AxisKind}*/ ($Casts.$to(Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(kind), AxisKind)));
  this.m_setId__org_pepstock_charba_client_options_IsScaleId_$pp_org_pepstock_charba_client_options(/**@type {IsScaleId}*/ ($Casts.$to(envelop.m_getContent__(), IsScaleId)));
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_CHARBA_ID__org_pepstock_charba_client_options_ExtendedScale_Property, ExtendedScale.f_COUNTER__org_pepstock_charba_client_options_ExtendedScale_.m_getAndIncrement__());
 }
 //Factory method corresponding to constructor 'ExtendedScale(ConfigurationEnvelop, IsDefaultScale)'.
 /** @return {!ExtendedScale} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationEnvelop__org_pepstock_charba_client_defaults_IsDefaultScale(/** ConfigurationEnvelop<Scale> */ envelop, /** IsDefaultScale */ defaultValues) {
  ExtendedScale.$clinit();
  let $instance = new ExtendedScale();
  $instance.$ctor__org_pepstock_charba_client_options_ExtendedScale__org_pepstock_charba_client_configuration_ConfigurationEnvelop__org_pepstock_charba_client_defaults_IsDefaultScale(envelop, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'ExtendedScale(ConfigurationEnvelop, IsDefaultScale)'.
 
 $ctor__org_pepstock_charba_client_options_ExtendedScale__org_pepstock_charba_client_configuration_ConfigurationEnvelop__org_pepstock_charba_client_defaults_IsDefaultScale(/** ConfigurationEnvelop<Scale> */ envelop, /** IsDefaultScale */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_options_Scale__org_pepstock_charba_client_defaults_IsDefaultScale__org_pepstock_charba_client_commons_NativeObject(defaultValues, /**@type {Scale}*/ ($Casts.$to(/**@type {ConfigurationEnvelop<Scale>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), ConfigurationEnvelop)).m_getContent__(), Scale)).m_nativeObject___$pp_org_pepstock_charba_client_options());
 }
 /** @return {number} */
 m_getCharbaId__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_CHARBA_ID__org_pepstock_charba_client_options_ExtendedScale_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 
 m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/** AbstractNode */ node, /** Key */ property, /** ConfigurationEnvelop<?function():void> */ envelop) {
  this.m_setCallbackToModel__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(node, property, /**@type {?function():void}*/ ($Casts.$to(/**@type {ConfigurationEnvelop<?function():void>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), ConfigurationEnvelop)).m_getContent__(), $JavaScriptFunction)));
 }
 
 static $clinit() {
  ExtendedScale.$clinit = () =>{};
  ExtendedScale.$loadModules();
  Scale.$clinit();
  ExtendedScale.f_COUNTER__org_pepstock_charba_client_options_ExtendedScale_ = AtomicInteger.$create__int(0);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ExtendedScale;
 }
 
 static $loadModules() {
  AtomicInteger = goog.module.get('java.util.concurrent.atomic.AtomicInteger$impl');
  IsEnvelop = goog.module.get('org.pepstock.charba.client.commons.IsEnvelop$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ConfigurationEnvelop = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.ExtendedScale.Property$impl');
  IsScaleId = goog.module.get('org.pepstock.charba.client.options.IsScaleId$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptFunction = goog.module.get('vmbootstrap.JavaScriptFunction$impl');
 }
}
/**@type {AtomicInteger}*/
ExtendedScale.f_COUNTER__org_pepstock_charba_client_options_ExtendedScale_;
$Util.$setClassMetadata(ExtendedScale, "org.pepstock.charba.client.options.ExtendedScale");

exports = ExtendedScale;

//# sourceMappingURL=ExtendedScale.js.map
