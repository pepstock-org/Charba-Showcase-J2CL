goog.module('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let IsProvider = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template I
 */
class AbstractDynamicConfiguration extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsProvider<I>}*/
  this.f_provider__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_;
 }
 
 $ctor__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(/** IsProvider<I> */ provider) {
  this.$ctor__java_lang_Object__();
  this.f_provider__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_ = /**@type {IsProvider<I>}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(provider, "Options provider"), IsProvider));
 }
 /** @return {I} */
 m_checkAndGet___$pp_org_pepstock_charba_client_configuration() {
  return Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(this.f_provider__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_.m_getElement__(), "Options element");
 }
 
 static $clinit() {
  AbstractDynamicConfiguration.$clinit = () =>{};
  AbstractDynamicConfiguration.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractDynamicConfiguration;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  IsProvider = goog.module.get('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AbstractDynamicConfiguration, "org.pepstock.charba.client.configuration.AbstractDynamicConfiguration");

exports = AbstractDynamicConfiguration;

//# sourceMappingURL=AbstractDynamicConfiguration.js.map
