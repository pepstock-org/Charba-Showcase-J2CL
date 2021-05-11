goog.module('org.pepstock.charba.client.options.ExtendedScales$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scales = goog.require('org.pepstock.charba.client.options.Scales$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let IsDefaultScales = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScales$impl');
let AxisType = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisType$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let IsScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.IsScaleId$impl');
let Options = goog.forwardDeclare('org.pepstock.charba.client.options.Options$impl');
let Scale = goog.forwardDeclare('org.pepstock.charba.client.options.Scale$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class ExtendedScales extends Scales {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ExtendedScales} */
 static $create__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultScales__org_pepstock_charba_client_commons_NativeObject(/** Options */ options, /** Key */ childKey, /** IsDefaultScales */ defaultValues, /** ? */ nativeObject) {
  ExtendedScales.$clinit();
  let $instance = new ExtendedScales();
  $instance.$ctor__org_pepstock_charba_client_options_ExtendedScales__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultScales__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_ExtendedScales__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultScales__org_pepstock_charba_client_commons_NativeObject(/** Options */ options, /** Key */ childKey, /** IsDefaultScales */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_Scales__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultScales__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
 }
 
 m_setAxes__arrayOf_org_pepstock_charba_client_options_Scale(/** Array<Scale> */ scales) {
  if (!this.m_empty__()) {
   for (let $iterator = this.m_keys__().m_iterator__(); $iterator.m_hasNext__(); ) {
    let key = /**@type {Key}*/ ($Casts.$to($iterator.m_next__(), Key));
    {
     if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(key, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
      this.m_remove__org_pepstock_charba_client_commons_Key(key);
     }
    }
   }
  }
  this.m_setInternalAxes__arrayOf_org_pepstock_charba_client_options_Scale_$p_org_pepstock_charba_client_options_ExtendedScales(scales);
 }
 
 m_setInternalAxes__arrayOf_org_pepstock_charba_client_options_Scale_$p_org_pepstock_charba_client_options_ExtendedScales(/** Array<Scale> */ scales) {
  if (!$Equality.$same(scales, null) && scales.length > 0) {
   let index = 0;
   for (let $array = scales, $index = 0; $index < $array.length; $index++) {
    let scale = $array[$index];
    {
     if (!$Equality.$same(scale, null)) {
      let type = scale.m_getType__();
      Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(type);
      let id = this.m_checkAndGetScaleId__org_pepstock_charba_client_options_Scale_$p_org_pepstock_charba_client_options_ExtendedScales(scale);
      if ($Objects.m_equals__java_lang_Object__java_lang_Object(AxisType.f_RADIAL_LINEAR__org_pepstock_charba_client_enums_AxisType, type) && (index > 0 || scales.length != 1)) {
       throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("A radial linear scale can not be added to a scales with other scales"));
      }
      this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(id, scale);
      index = index + 1 | 0;
     }
    }
   }
   this.m_checkAndAddToParent__();
  }
 }
 /** @return {IsScaleId} */
 m_checkAndGetScaleId__org_pepstock_charba_client_options_Scale_$p_org_pepstock_charba_client_options_ExtendedScales(/** Scale */ scale) {
  let id = scale.m_getId__();
  if (DefaultScaleId.f_UNKNOWN__org_pepstock_charba_client_enums_DefaultScaleId.m_is__org_pepstock_charba_client_options_IsScaleId(id)) {
   id = scale.m_getType__().m_getDefaultScaleId__();
   scale.m_setId__org_pepstock_charba_client_options_IsScaleId_$pp_org_pepstock_charba_client_options(id);
  }
  Checker.m_assertCheck__boolean__java_lang_String(!this.m_has__org_pepstock_charba_client_commons_Key(id), "A scale with id " + j_l_String.m_valueOf__java_lang_Object(id.m_value__()) + " has been already added");
  return id;
 }
 
 static $clinit() {
  ExtendedScales.$clinit = () =>{};
  ExtendedScales.$loadModules();
  Scales.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ExtendedScales;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  AxisType = goog.module.get('org.pepstock.charba.client.enums.AxisType$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(ExtendedScales, "org.pepstock.charba.client.options.ExtendedScales");

exports = ExtendedScales;

//# sourceMappingURL=ExtendedScales.js.map
