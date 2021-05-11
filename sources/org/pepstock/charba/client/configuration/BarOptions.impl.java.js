goog.module('org.pepstock.charba.client.configuration.BarOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ScalesOptions = goog.require('org.pepstock.charba.client.configuration.ScalesOptions$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
let IndexAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.IndexAxis$impl');
let ExtendedOptions = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class BarOptions extends ScalesOptions {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BarOptions} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  BarOptions.$clinit();
  let $instance = new BarOptions();
  $instance.$ctor__org_pepstock_charba_client_configuration_BarOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_BarOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_configuration_ScalesOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
 }
 
 m_setIndexAxis__org_pepstock_charba_client_enums_IndexAxis(/** IndexAxis */ indexAxis) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setIndexAxis__org_pepstock_charba_client_enums_IndexAxis(indexAxis);
 }
 /** @return {IndexAxis} */
 m_getIndexAxis__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getIndexAxis__();
 }
 
 m_setSkipNull__boolean(/** boolean */ skipNull) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setSkipNull__boolean(skipNull);
 }
 /** @return {boolean} */
 m_isSkipNull__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_isSkipNull__();
 }
 
 static $clinit() {
  BarOptions.$clinit = () =>{};
  BarOptions.$loadModules();
  ScalesOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BarOptions;
 }
 
 static $loadModules() {
  ExtendedOptions = goog.module.get('org.pepstock.charba.client.options.ExtendedOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(BarOptions, "org.pepstock.charba.client.configuration.BarOptions");

exports = BarOptions;

//# sourceMappingURL=BarOptions.js.map
