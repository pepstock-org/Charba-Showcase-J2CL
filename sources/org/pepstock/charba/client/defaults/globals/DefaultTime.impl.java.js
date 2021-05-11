goog.module('org.pepstock.charba.client.defaults.globals.DefaultTime$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultTime = goog.require('org.pepstock.charba.client.defaults.IsDefaultTime$impl');

let IsoWeekDay = goog.forwardDeclare('org.pepstock.charba.client.enums.IsoWeekDay$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');

/**
 * @implements {IsDefaultTime}
 */
class DefaultTime extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultTime} */
 static $create__() {
  DefaultTime.$clinit();
  let $instance = new DefaultTime();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultTime__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultTime__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {IsoWeekDay} */
 m_getIsoWeekday__() {
  return IsoWeekDay.f_SUNDAY__org_pepstock_charba_client_enums_IsoWeekDay;
 }
 /** @override @return {TimeUnit} */
 m_getRound__() {
  return null;
 }
 /** @override @return {?string} */
 m_getTooltipFormat__() {
  return null;
 }
 /** @override @return {TimeUnit} */
 m_getUnit__() {
  return null;
 }
 /** @override @return {number} */
 m_getStepSize__() {
  return DefaultTime.f_DEFAULT_STEP_SIZE__org_pepstock_charba_client_defaults_globals_DefaultTime_;
 }
 /** @override @return {TimeUnit} */
 m_getMinUnit__() {
  return TimeUnit.f_MILLISECOND__org_pepstock_charba_client_enums_TimeUnit;
 }
 /** @override @return {?string} */
 m_getParser__() {
  return null;
 }
 
 static $clinit() {
  DefaultTime.$clinit = () =>{};
  DefaultTime.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultTime;
 }
 
 static $loadModules() {
  IsoWeekDay = goog.module.get('org.pepstock.charba.client.enums.IsoWeekDay$impl');
  TimeUnit = goog.module.get('org.pepstock.charba.client.enums.TimeUnit$impl');
 }
}
/**@const {number}*/
DefaultTime.f_DEFAULT_STEP_SIZE__org_pepstock_charba_client_defaults_globals_DefaultTime_ = 1;
IsDefaultTime.$markImplementor(DefaultTime);
$Util.$setClassMetadata(DefaultTime, "org.pepstock.charba.client.defaults.globals.DefaultTime");

exports = DefaultTime;

//# sourceMappingURL=DefaultTime.js.map
