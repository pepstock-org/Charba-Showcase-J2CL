goog.module('org.pepstock.charba.client.options.Interaction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultInteraction = goog.require('org.pepstock.charba.client.defaults.IsDefaultInteraction$impl');
const AbstractInteraction = goog.require('org.pepstock.charba.client.options.AbstractInteraction$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let InteractionAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionAxis$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Interaction.Property$impl');
let Options = goog.forwardDeclare('org.pepstock.charba.client.options.Options$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractInteraction<Options, IsDefaultInteraction>}
 * @implements {IsDefaultInteraction}
 */
class Interaction extends AbstractInteraction {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Interaction} */
 static $create__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultInteraction__org_pepstock_charba_client_commons_NativeObject(/** Options */ options, /** Key */ childKey, /** IsDefaultInteraction */ defaultValues, /** ? */ nativeObject) {
  Interaction.$clinit();
  let $instance = new Interaction();
  $instance.$ctor__org_pepstock_charba_client_options_Interaction__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultInteraction__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Interaction__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultInteraction__org_pepstock_charba_client_commons_NativeObject(/** Options */ options, /** Key */ childKey, /** IsDefaultInteraction */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractInteraction__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
 }
 /** @override @return {InteractionMode} */
 m_getDefaultMode___$pp_org_pepstock_charba_client_options() {
  return /**@type {IsDefaultInteraction}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultInteraction)).m_getMode__();
 }
 /** @override @return {boolean} */
 m_isDefaultIntersect___$pp_org_pepstock_charba_client_options() {
  return /**@type {IsDefaultInteraction}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultInteraction)).m_isIntersect__();
 }
 
 m_setAxis__org_pepstock_charba_client_enums_InteractionAxis(/** InteractionAxis */ axis) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_AXIS__org_pepstock_charba_client_options_Interaction_Property, axis);
 }
 /** @override @return {InteractionAxis} */
 m_getAxis__() {
  return /**@type {InteractionAxis}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_AXIS__org_pepstock_charba_client_options_Interaction_Property, InteractionAxis.m_values__(), /**@type {IsDefaultInteraction}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultInteraction)).m_getAxis__()), InteractionAxis));
 }
 
 static $clinit() {
  Interaction.$clinit = () =>{};
  Interaction.$loadModules();
  AbstractInteraction.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Interaction;
 }
 
 static $loadModules() {
  InteractionAxis = goog.module.get('org.pepstock.charba.client.enums.InteractionAxis$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.Interaction.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultInteraction.$markImplementor(Interaction);
$Util.$setClassMetadata(Interaction, "org.pepstock.charba.client.options.Interaction");

exports = Interaction;

//# sourceMappingURL=Interaction.js.map
