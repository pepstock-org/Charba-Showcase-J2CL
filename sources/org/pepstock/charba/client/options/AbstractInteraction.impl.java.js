goog.module('org.pepstock.charba.client.options.AbstractInteraction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractInteraction.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template P, D
 * @extends {AbstractModel<P, D>}
 */
class AbstractInteraction extends AbstractModel {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_options_AbstractInteraction__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(/** P */ options, /** Key */ childKey, /** D */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
 }
 /** @abstract @return {InteractionMode} */
 m_getDefaultMode___$pp_org_pepstock_charba_client_options() {}
 /** @abstract @return {boolean} */
 m_isDefaultIntersect___$pp_org_pepstock_charba_client_options() {}
 
 m_setMode__org_pepstock_charba_client_enums_InteractionMode(/** InteractionMode */ mode) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_MODE__org_pepstock_charba_client_options_AbstractInteraction_Property, mode);
 }
 /** @return {InteractionMode} */
 m_getMode__() {
  return /**@type {InteractionMode}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_MODE__org_pepstock_charba_client_options_AbstractInteraction_Property, InteractionMode.m_values__(), this.m_getDefaultMode___$pp_org_pepstock_charba_client_options()), InteractionMode));
 }
 
 m_setIntersect__boolean(/** boolean */ intersect) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_INTERSECT__org_pepstock_charba_client_options_AbstractInteraction_Property, intersect);
 }
 /** @return {boolean} */
 m_isIntersect__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_INTERSECT__org_pepstock_charba_client_options_AbstractInteraction_Property, this.m_isDefaultIntersect___$pp_org_pepstock_charba_client_options());
 }
 
 static $clinit() {
  AbstractInteraction.$clinit = () =>{};
  AbstractInteraction.$loadModules();
  AbstractModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractInteraction;
 }
 
 static $loadModules() {
  InteractionMode = goog.module.get('org.pepstock.charba.client.enums.InteractionMode$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.AbstractInteraction.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AbstractInteraction, "org.pepstock.charba.client.options.AbstractInteraction");

exports = AbstractInteraction;

//# sourceMappingURL=AbstractInteraction.js.map
