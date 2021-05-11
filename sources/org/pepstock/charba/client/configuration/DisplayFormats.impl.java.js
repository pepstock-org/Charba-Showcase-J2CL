goog.module('org.pepstock.charba.client.configuration.DisplayFormats$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AxisContainer = goog.require('org.pepstock.charba.client.configuration.AxisContainer$impl');

let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');

class DisplayFormats extends AxisContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DisplayFormats} */
 static $create__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  DisplayFormats.$clinit();
  let $instance = new DisplayFormats();
  $instance.$ctor__org_pepstock_charba_client_configuration_DisplayFormats__org_pepstock_charba_client_configuration_Axis(axis);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_DisplayFormats__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  this.$ctor__org_pepstock_charba_client_configuration_AxisContainer__org_pepstock_charba_client_configuration_Axis(axis);
 }
 
 m_setDisplayFormat__org_pepstock_charba_client_enums_TimeUnit__java_lang_String(/** TimeUnit */ unit, /** ?string */ format) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTime__().m_getDisplayFormats__().m_setDisplayFormat__org_pepstock_charba_client_enums_TimeUnit__java_lang_String(unit, format);
 }
 /** @return {?string} */
 m_getDisplayFormat__org_pepstock_charba_client_enums_TimeUnit(/** TimeUnit */ unit) {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTime__().m_getDisplayFormats__().m_getDisplayFormat__org_pepstock_charba_client_enums_TimeUnit(unit);
 }
 
 static $clinit() {
  DisplayFormats.$clinit = () =>{};
  DisplayFormats.$loadModules();
  AxisContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DisplayFormats;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(DisplayFormats, "org.pepstock.charba.client.configuration.DisplayFormats");

exports = DisplayFormats;

//# sourceMappingURL=DisplayFormats.js.map
