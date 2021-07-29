goog.module('org.pepstock.charba.client.options.Scale$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractScale = goog.require('org.pepstock.charba.client.options.AbstractScale$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let AxisType = goog.forwardDeclare('org.pepstock.charba.client.configuration.AxisType$impl');
let IsDefaultScale = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScale$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let ChartAxisType = goog.forwardDeclare('org.pepstock.charba.client.enums.ChartAxisType$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Scale.Property$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class Scale extends AbstractScale {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'Scale(AxisType, IsDefaultScale)'.
 /** @return {!Scale} */
 static $create__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_defaults_IsDefaultScale(/** AxisType */ type, /** IsDefaultScale */ defaultValues) {
  Scale.$clinit();
  let $instance = new Scale();
  $instance.$ctor__org_pepstock_charba_client_options_Scale__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_defaults_IsDefaultScale(type, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'Scale(AxisType, IsDefaultScale)'.
 
 $ctor__org_pepstock_charba_client_options_Scale__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_defaults_IsDefaultScale(/** AxisType */ type, /** IsDefaultScale */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_options_Scale__org_pepstock_charba_client_defaults_IsDefaultScale__org_pepstock_charba_client_commons_NativeObject(defaultValues, null);
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(type);
  this.m_setType__org_pepstock_charba_client_configuration_AxisType_$p_org_pepstock_charba_client_options_Scale(type);
 }
 //Factory method corresponding to constructor 'Scale(IsDefaultScale, NativeObject)'.
 /** @return {!Scale} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultScale__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultScale */ defaultValues, /** ? */ nativeObject) {
  Scale.$clinit();
  let $instance = new Scale();
  $instance.$ctor__org_pepstock_charba_client_options_Scale__org_pepstock_charba_client_defaults_IsDefaultScale__org_pepstock_charba_client_commons_NativeObject(defaultValues, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'Scale(IsDefaultScale, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_options_Scale__org_pepstock_charba_client_defaults_IsDefaultScale__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultScale */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_defaults_IsDefaultScale__org_pepstock_charba_client_commons_NativeObject(defaultValues, nativeObject);
 }
 //Factory method corresponding to constructor 'Scale(AxisType, IsDefaultScale, NativeObject)'.
 /** @return {!Scale} */
 static $create__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_defaults_IsDefaultScale__org_pepstock_charba_client_commons_NativeObject(/** AxisType */ type, /** IsDefaultScale */ defaultValues, /** ? */ nativeObject) {
  Scale.$clinit();
  let $instance = new Scale();
  $instance.$ctor__org_pepstock_charba_client_options_Scale__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_defaults_IsDefaultScale__org_pepstock_charba_client_commons_NativeObject(type, defaultValues, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'Scale(AxisType, IsDefaultScale, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_options_Scale__org_pepstock_charba_client_configuration_AxisType__org_pepstock_charba_client_defaults_IsDefaultScale__org_pepstock_charba_client_commons_NativeObject(/** AxisType */ type, /** IsDefaultScale */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_defaults_IsDefaultScale__org_pepstock_charba_client_commons_NativeObject(defaultValues, nativeObject);
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(type);
  this.m_setType__org_pepstock_charba_client_configuration_AxisType_$p_org_pepstock_charba_client_options_Scale(type);
 }
 
 m_setId__org_pepstock_charba_client_options_ScaleId_$pp_org_pepstock_charba_client_options(/** ScaleId */ id) {
  ScaleId.m_checkIfValid__org_pepstock_charba_client_options_ScaleId(id);
  if (!DefaultScaleId.f_UNKNOWN__org_pepstock_charba_client_enums_DefaultScaleId.m_is__java_lang_String(id.m_value__())) {
   this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ID__org_pepstock_charba_client_options_Scale_Property, id);
  }
 }
 /** @return {ScaleId} */
 m_getId__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_options_ScaleId(Property.f_ID__org_pepstock_charba_client_options_Scale_Property, DefaultScaleId.f_UNKNOWN__org_pepstock_charba_client_enums_DefaultScaleId);
 }
 
 m_setType__org_pepstock_charba_client_configuration_AxisType_$p_org_pepstock_charba_client_options_Scale(/** AxisType */ type) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TYPE__org_pepstock_charba_client_options_Scale_Property, type);
 }
 /** @return {AxisType} */
 m_getType__() {
  Checker.m_assertCheck__boolean__java_lang_String(this.m_has__org_pepstock_charba_client_commons_Key(Property.f_TYPE__org_pepstock_charba_client_options_Scale_Property), "The scale does not contain any type");
  let type = this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TYPE__org_pepstock_charba_client_options_Scale_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(type, "The scale does not contain a consistent type");
  return AxisType.m_checkAndGet__java_lang_String(type);
 }
 
 m_setAxis__org_pepstock_charba_client_enums_AxisKind_$pp_org_pepstock_charba_client_options(/** AxisKind */ kind) {
  let type = this.m_getType__();
  let typeToStore = null;
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ChartAxisType.f_RADIAL_LINEAR__org_pepstock_charba_client_enums_ChartAxisType, type.m_getBaseType__())) {
   typeToStore = AxisKind.f_R__org_pepstock_charba_client_enums_AxisKind;
  } else if (!$Objects.m_equals__java_lang_Object__java_lang_Object(AxisKind.f_R__org_pepstock_charba_client_enums_AxisKind, kind)) {
   typeToStore = kind;
  }
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_AXIS__org_pepstock_charba_client_options_Scale_Property, typeToStore);
 }
 /** @return {AxisKind} */
 m_getAxis__() {
  if (this.m_has__org_pepstock_charba_client_commons_Key(Property.f_AXIS__org_pepstock_charba_client_options_Scale_Property)) {
   return /**@type {AxisKind}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_AXIS__org_pepstock_charba_client_options_Scale_Property, AxisKind.m_values__(), this.m_getType__().m_getDefaultScaleId__().m_getAxisKind__()), AxisKind));
  }
  return this.m_checkAndGetDefaultAxis___$p_org_pepstock_charba_client_options_Scale();
 }
 /** @return {AxisKind} */
 m_checkAndGetDefaultAxis___$p_org_pepstock_charba_client_options_Scale() {
  let type = this.m_getType__();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ChartAxisType.f_RADIAL_LINEAR__org_pepstock_charba_client_enums_ChartAxisType, type.m_getBaseType__())) {
   return AxisKind.f_R__org_pepstock_charba_client_enums_AxisKind;
  }
  let id = this.m_getId__();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(DefaultScaleId.f_UNKNOWN__org_pepstock_charba_client_enums_DefaultScaleId, id)) {
   return type.m_getDefaultScaleId__().m_getAxisKind__();
  }
  return DefaultScaleId.m_getAxisKindByScaleId__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_enums_AxisKind(this.m_getId__(), this.m_getType__().m_getDefaultScaleId__().m_getAxisKind__());
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_options() {
  return super.m_getNativeObject__();
 }
 
 static $clinit() {
  Scale.$clinit = () =>{};
  Scale.$loadModules();
  AbstractScale.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Scale;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  AxisType = goog.module.get('org.pepstock.charba.client.configuration.AxisType$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  ChartAxisType = goog.module.get('org.pepstock.charba.client.enums.ChartAxisType$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.Scale.Property$impl');
  ScaleId = goog.module.get('org.pepstock.charba.client.options.ScaleId$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(Scale, "org.pepstock.charba.client.options.Scale");

exports = Scale;

//# sourceMappingURL=Scale.js.map
