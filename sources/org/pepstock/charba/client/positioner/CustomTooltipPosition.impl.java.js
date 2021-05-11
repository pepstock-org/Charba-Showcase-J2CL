goog.module('org.pepstock.charba.client.positioner.CustomTooltipPosition$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsTooltipPosition = goog.require('org.pepstock.charba.client.enums.IsTooltipPosition$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let TooltipPosition = goog.forwardDeclare('org.pepstock.charba.client.enums.TooltipPosition$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsTooltipPosition}
 */
class CustomTooltipPosition extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_name__org_pepstock_charba_client_positioner_CustomTooltipPosition_;
 }
 /** @return {!CustomTooltipPosition} */
 static $create__java_lang_String(/** ?string */ name) {
  CustomTooltipPosition.$clinit();
  let $instance = new CustomTooltipPosition();
  $instance.$ctor__org_pepstock_charba_client_positioner_CustomTooltipPosition__java_lang_String(name);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_positioner_CustomTooltipPosition__java_lang_String(/** ?string */ name) {
  this.$ctor__java_lang_Object__();
  this.f_name__org_pepstock_charba_client_positioner_CustomTooltipPosition_ = /**@type {?string}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(name, "Tooltip position argument"), j_l_String));
  Checker.m_assertCheck__boolean__java_lang_String(!Key.m_hasKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(TooltipPosition.m_values__(), name), "Tooltip position '" + j_l_String.m_valueOf__java_lang_Object(name) + "' is already defined");
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_name__org_pepstock_charba_client_positioner_CustomTooltipPosition_;
 }
 
 static $clinit() {
  CustomTooltipPosition.$clinit = () =>{};
  CustomTooltipPosition.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CustomTooltipPosition;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  TooltipPosition = goog.module.get('org.pepstock.charba.client.enums.TooltipPosition$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsTooltipPosition.$markImplementor(CustomTooltipPosition);
$Util.$setClassMetadata(CustomTooltipPosition, "org.pepstock.charba.client.positioner.CustomTooltipPosition");

exports = CustomTooltipPosition;

//# sourceMappingURL=CustomTooltipPosition.js.map
