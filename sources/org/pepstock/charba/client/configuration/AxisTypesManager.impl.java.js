goog.module('org.pepstock.charba.client.configuration.AxisTypesManager$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AxisType = goog.forwardDeclare('org.pepstock.charba.client.configuration.AxisType$impl');
let ChartAxisType = goog.forwardDeclare('org.pepstock.charba.client.enums.ChartAxisType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class AxisTypesManager extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<?string, AxisType>}*/
  this.f_types__org_pepstock_charba_client_configuration_AxisTypesManager_;
 }
 /** @return {!AxisTypesManager} */
 static $create__() {
  AxisTypesManager.$clinit();
  let $instance = new AxisTypesManager();
  $instance.$ctor__org_pepstock_charba_client_configuration_AxisTypesManager__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_AxisTypesManager__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_configuration_AxisTypesManager();
 }
 /** @return {AxisTypesManager} */
 static m_get__() {
  AxisTypesManager.$clinit();
  return AxisTypesManager.f_INSTANCE__org_pepstock_charba_client_configuration_AxisTypesManager_;
 }
 
 m_add__org_pepstock_charba_client_configuration_AxisType_$pp_org_pepstock_charba_client_configuration(/** AxisType */ type) {
  if (AxisType.m_isValid__org_pepstock_charba_client_configuration_AxisType(type)) {
   this.f_types__org_pepstock_charba_client_configuration_AxisTypesManager_.put(type.m_value__(), type);
  }
 }
 /** @return {boolean} */
 m_has__java_lang_String_$pp_org_pepstock_charba_client_configuration(/** ?string */ type) {
  if (!$Equality.$same(type, null)) {
   return this.f_types__org_pepstock_charba_client_configuration_AxisTypesManager_.containsKey(type);
  }
  return false;
 }
 /** @return {AxisType} */
 m_get__java_lang_String_$pp_org_pepstock_charba_client_configuration(/** ?string */ type) {
  for (let $array = ChartAxisType.m_values__(), $index = 0; $index < $array.length; $index++) {
   let defaultScaleType = $array[$index];
   {
    if (j_l_String.m_equals__java_lang_String__java_lang_Object(defaultScaleType.m_value__(), type)) {
     return defaultScaleType;
    }
   }
  }
  if (this.m_has__java_lang_String_$pp_org_pepstock_charba_client_configuration(type)) {
   return /**@type {AxisType}*/ ($Casts.$to(this.f_types__org_pepstock_charba_client_configuration_AxisTypesManager_.get(type), AxisType));
  }
  return null;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_AxisTypesManager() {
  this.f_types__org_pepstock_charba_client_configuration_AxisTypesManager_ = /**@type {!HashMap<?string, AxisType>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  AxisTypesManager.$clinit = () =>{};
  AxisTypesManager.$loadModules();
  j_l_Object.$clinit();
  AxisTypesManager.f_INSTANCE__org_pepstock_charba_client_configuration_AxisTypesManager_ = AxisTypesManager.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AxisTypesManager;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AxisType = goog.module.get('org.pepstock.charba.client.configuration.AxisType$impl');
  ChartAxisType = goog.module.get('org.pepstock.charba.client.enums.ChartAxisType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {AxisTypesManager}*/
AxisTypesManager.f_INSTANCE__org_pepstock_charba_client_configuration_AxisTypesManager_;
$Util.$setClassMetadata(AxisTypesManager, "org.pepstock.charba.client.configuration.AxisTypesManager");

exports = AxisTypesManager;

//# sourceMappingURL=AxisTypesManager.js.map
