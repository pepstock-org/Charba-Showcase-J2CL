goog.module('org.pepstock.charba.client.options.Scales$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultScales = goog.require('org.pepstock.charba.client.defaults.IsDefaultScales$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');

let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDefaultScale = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScale$impl');
let DefaultsBuilder = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let IsScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.IsScaleId$impl');
let Options = goog.forwardDeclare('org.pepstock.charba.client.options.Options$impl');
let Scale = goog.forwardDeclare('org.pepstock.charba.client.options.Scale$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractModel<Options, IsDefaultScales>}
 * @implements {IsDefaultScales}
 */
class Scales extends AbstractModel {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Scales} */
 static $create__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultScales__org_pepstock_charba_client_commons_NativeObject(/** Options */ options, /** Key */ childKey, /** IsDefaultScales */ defaultValues, /** ? */ nativeObject) {
  Scales.$clinit();
  let $instance = new Scales();
  $instance.$ctor__org_pepstock_charba_client_options_Scales__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultScales__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Scales__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultScales__org_pepstock_charba_client_commons_NativeObject(/** Options */ options, /** Key */ childKey, /** IsDefaultScales */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
 }
 /** @return {boolean} */
 m_hasAxis__java_lang_String(/** ?string */ scaleId) {
  return this.m_hasAxis__org_pepstock_charba_client_options_IsScaleId(IsScaleId.m_create__java_lang_String(scaleId));
 }
 /** @return {boolean} */
 m_hasAxis__org_pepstock_charba_client_options_IsScaleId(/** IsScaleId */ scaleId) {
  IsScaleId.m_checkIfValid__org_pepstock_charba_client_options_IsScaleId(scaleId);
  return this.m_has__org_pepstock_charba_client_commons_Key(scaleId);
 }
 /** @return {Scale} */
 m_getAxis__java_lang_String(/** ?string */ scaleId) {
  return this.m_getAxis__org_pepstock_charba_client_options_IsScaleId(IsScaleId.m_create__java_lang_String(scaleId));
 }
 /** @return {Scale} */
 m_getAxis__org_pepstock_charba_client_options_IsScaleId(/** IsScaleId */ scaleId) {
  IsScaleId.m_checkIfValid__org_pepstock_charba_client_options_IsScaleId(scaleId);
  if (this.m_has__org_pepstock_charba_client_commons_Key(scaleId)) {
   return this.m_getAndCreate__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_options_Scales(scaleId);
  }
  return null;
 }
 /** @return {List<Scale>} */
 m_getAxes__() {
  let result = /**@type {!LinkedList<Scale>}*/ (LinkedList.$create__());
  for (let $iterator = this.m_keys__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let key = /**@type {Key}*/ ($Casts.$to($iterator.m_next__(), Key));
   {
    result.add(this.m_getAndCreate__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_options_Scales(key));
   }
  }
  return result;
 }
 /** @override @return {IsDefaultScale} */
 m_getAxis__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind(/** IsScaleId */ scaleId, /** AxisKind */ kind) {
  return /**@type {IsDefaultScales}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultScales)).m_getAxis__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind(scaleId, kind);
 }
 /** @return {Scale} */
 m_getAndCreate__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_options_Scales(/** Key */ propertyKey) {
  let scaleId = IsScaleId.m_create__java_lang_String(propertyKey.m_value__());
  let nativeObject = this.m_getValue__org_pepstock_charba_client_commons_Key(propertyKey);
  let internalScale = Scale.$create__org_pepstock_charba_client_defaults_IsDefaultScale__org_pepstock_charba_client_commons_NativeObject(DefaultsBuilder.m_get__().m_getScale__(), nativeObject);
  let defaultValue = this.m_getAxis__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind(scaleId, internalScale.m_getAxis__());
  let scale = Scale.$create__org_pepstock_charba_client_defaults_IsDefaultScale__org_pepstock_charba_client_commons_NativeObject(defaultValue, nativeObject);
  if (DefaultScaleId.f_UNKNOWN__org_pepstock_charba_client_enums_DefaultScaleId.m_is__org_pepstock_charba_client_options_IsScaleId(scale.m_getId__())) {
   scale.m_setId__org_pepstock_charba_client_options_IsScaleId_$pp_org_pepstock_charba_client_options(IsScaleId.m_create__java_lang_String(propertyKey.m_value__()));
  }
  return scale;
 }
 
 static $clinit() {
  Scales.$clinit = () =>{};
  Scales.$loadModules();
  AbstractModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Scales;
 }
 
 static $loadModules() {
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  DefaultsBuilder = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  IsScaleId = goog.module.get('org.pepstock.charba.client.options.IsScaleId$impl');
  Scale = goog.module.get('org.pepstock.charba.client.options.Scale$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultScales.$markImplementor(Scales);
$Util.$setClassMetadata(Scales, "org.pepstock.charba.client.options.Scales");

exports = Scales;

//# sourceMappingURL=Scales.js.map
