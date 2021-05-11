goog.module('org.pepstock.charba.client.Overrides$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let ChartOptions = goog.forwardDeclare('org.pepstock.charba.client.ChartOptions$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let ScaleType = goog.forwardDeclare('org.pepstock.charba.client.ScaleType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Merger = goog.forwardDeclare('org.pepstock.charba.client.commons.Merger$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
let DefaultsBuilder = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class Overrides extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Overrides} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  Overrides.$clinit();
  let $instance = new Overrides();
  $instance.$ctor__org_pepstock_charba_client_Overrides__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_Overrides__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {?} */
 m_getChartOptions__org_pepstock_charba_client_Type_$p_org_pepstock_charba_client_Overrides(/** Type */ type) {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(type, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key(/**@type {Type}*/ ($Casts.$to(Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(type), Type)));
  }
  return null;
 }
 /** @return {ChartOptions} */
 m_chart__org_pepstock_charba_client_Type_$pp_org_pepstock_charba_client(/** Type */ type) {
  let global = Defaults.m_get__().m_getGlobal__();
  if (!$Objects.m_equals__java_lang_Object__java_lang_Object(ScaleType.f_NONE__org_pepstock_charba_client_ScaleType, type.m_scaleType__())) {
   let envelopOptions = /**@type {!ChartEnvelop<ChartOptions>}*/ (ChartEnvelop.$create__());
   envelopOptions.m_setContent__java_lang_Object(this.m_createChartOptions__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultScaledOptions_$p_org_pepstock_charba_client_Overrides(type, DefaultsBuilder.m_get__().m_getScaledOptions__()));
   let envelop = /**@type {!ChartEnvelop<?>}*/ (ChartEnvelop.$create__());
   Merger.m_get__().m_load__org_pepstock_charba_client_Type__org_pepstock_charba_client_ChartEnvelop__org_pepstock_charba_client_ChartEnvelop(type, envelopOptions, envelop);
   let defaultOptions = ChartOptions.$create__org_pepstock_charba_client_Type__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(type, /**@type {?}*/ (envelop.m_getContent__()), global.m_asDefault__());
   return this.m_createChartOptions__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultScaledOptions_$p_org_pepstock_charba_client_Overrides(type, defaultOptions);
  } else {
   return this.m_createChartOptions__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultScaledOptions_$p_org_pepstock_charba_client_Overrides(type, global.m_asDefault__());
  }
 }
 /** @return {ChartOptions} */
 m_createChartOptions__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultScaledOptions_$p_org_pepstock_charba_client_Overrides(/** Type */ type, /** IsDefaultScaledOptions */ defaultOptions) {
  return ChartOptions.$create__org_pepstock_charba_client_Type__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(type, this.m_getChartOptions__org_pepstock_charba_client_Type_$p_org_pepstock_charba_client_Overrides(type), defaultOptions);
 }
 
 static $clinit() {
  Overrides.$clinit = () =>{};
  Overrides.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Overrides;
 }
 
 static $loadModules() {
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  ChartOptions = goog.module.get('org.pepstock.charba.client.ChartOptions$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  ScaleType = goog.module.get('org.pepstock.charba.client.ScaleType$impl');
  Type = goog.module.get('org.pepstock.charba.client.Type$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Merger = goog.module.get('org.pepstock.charba.client.commons.Merger$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  DefaultsBuilder = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(Overrides, "org.pepstock.charba.client.Overrides");

exports = Overrides;

//# sourceMappingURL=Overrides.js.map
