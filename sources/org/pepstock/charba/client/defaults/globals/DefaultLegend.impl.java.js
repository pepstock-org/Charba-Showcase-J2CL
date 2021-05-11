goog.module('org.pepstock.charba.client.defaults.globals.DefaultLegend$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultLegend = goog.require('org.pepstock.charba.client.defaults.IsDefaultLegend$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsDefaultLegendLabels = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultLegendLabels$impl');
let IsDefaultLegendTitle = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultLegendTitle$impl');
let DefaultLegendLabels = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultLegendLabels$impl');
let DefaultLegendTitle = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultLegendTitle$impl');
let ElementAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ElementAlign$impl');
let Event = goog.forwardDeclare('org.pepstock.charba.client.enums.Event$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let TextDirection = goog.forwardDeclare('org.pepstock.charba.client.enums.TextDirection$impl');

/**
 * @implements {IsDefaultLegend}
 */
class DefaultLegend extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultLegendLabels}*/
  this.f_legendLabels__org_pepstock_charba_client_defaults_globals_DefaultLegend_;
  /**@type {DefaultLegendTitle}*/
  this.f_legendTitle__org_pepstock_charba_client_defaults_globals_DefaultLegend_;
 }
 /** @return {!DefaultLegend} */
 static $create__() {
  DefaultLegend.$clinit();
  let $instance = new DefaultLegend();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultLegend__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultLegend__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_defaults_globals_DefaultLegend();
 }
 /** @override @return {IsDefaultLegendLabels} */
 m_getLabels__() {
  return this.f_legendLabels__org_pepstock_charba_client_defaults_globals_DefaultLegend_;
 }
 /** @override @return {IsDefaultLegendTitle} */
 m_getTitle__() {
  return this.f_legendTitle__org_pepstock_charba_client_defaults_globals_DefaultLegend_;
 }
 /** @override @return {List<Event>} */
 m_getEvents__() {
  return /**@type {List<Event>}*/ (Collections.m_unmodifiableList__java_util_List(Defaults.m_get__().m_getGlobal__().m_getEvents__()));
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return DefaultLegend.f_DEFAULT_DISPLAY__org_pepstock_charba_client_defaults_globals_DefaultLegend_;
 }
 /** @override @return {boolean} */
 m_isFullSize__() {
  return DefaultLegend.f_DEFAULT_FULL_SIZE__org_pepstock_charba_client_defaults_globals_DefaultLegend_;
 }
 /** @override @return {boolean} */
 m_isReverse__() {
  return DefaultLegend.f_DEFAULT_REVERSE__org_pepstock_charba_client_defaults_globals_DefaultLegend_;
 }
 /** @override @return {Position} */
 m_getPosition__() {
  return Position.f_TOP__org_pepstock_charba_client_enums_Position;
 }
 /** @override @return {ElementAlign} */
 m_getAlign__() {
  return ElementAlign.f_CENTER__org_pepstock_charba_client_enums_ElementAlign;
 }
 /** @override @return {boolean} */
 m_isRtl__() {
  return DefaultLegend.f_DEFAULT_RTL__org_pepstock_charba_client_defaults_globals_DefaultLegend_;
 }
 /** @override @return {TextDirection} */
 m_getTextDirection__() {
  return TextDirection.f_LEFT_TO_RIGHT__org_pepstock_charba_client_enums_TextDirection;
 }
 /** @override @return {number} */
 m_getMaxWidth__() {
  return DefaultLegend.f_DEFAULT_MAX_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultLegend_;
 }
 /** @override @return {number} */
 m_getMaxHeight__() {
  return DefaultLegend.f_DEFAULT_MAX_HEIGHT__org_pepstock_charba_client_defaults_globals_DefaultLegend_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_defaults_globals_DefaultLegend() {
  this.f_legendLabels__org_pepstock_charba_client_defaults_globals_DefaultLegend_ = DefaultLegendLabels.$create__();
  this.f_legendTitle__org_pepstock_charba_client_defaults_globals_DefaultLegend_ = DefaultLegendTitle.$create__();
 }
 
 static $clinit() {
  DefaultLegend.$clinit = () =>{};
  DefaultLegend.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultLegend;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  DefaultLegendLabels = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultLegendLabels$impl');
  DefaultLegendTitle = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultLegendTitle$impl');
  ElementAlign = goog.module.get('org.pepstock.charba.client.enums.ElementAlign$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  TextDirection = goog.module.get('org.pepstock.charba.client.enums.TextDirection$impl');
 }
}
/**@const {boolean}*/
DefaultLegend.f_DEFAULT_DISPLAY__org_pepstock_charba_client_defaults_globals_DefaultLegend_ = true;
/**@const {boolean}*/
DefaultLegend.f_DEFAULT_FULL_SIZE__org_pepstock_charba_client_defaults_globals_DefaultLegend_ = true;
/**@const {boolean}*/
DefaultLegend.f_DEFAULT_REVERSE__org_pepstock_charba_client_defaults_globals_DefaultLegend_ = false;
/**@const {boolean}*/
DefaultLegend.f_DEFAULT_RTL__org_pepstock_charba_client_defaults_globals_DefaultLegend_ = false;
/**@const {number}*/
DefaultLegend.f_DEFAULT_MAX_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultLegend_ = -2147483648;
/**@const {number}*/
DefaultLegend.f_DEFAULT_MAX_HEIGHT__org_pepstock_charba_client_defaults_globals_DefaultLegend_ = -2147483648;
IsDefaultLegend.$markImplementor(DefaultLegend);
$Util.$setClassMetadata(DefaultLegend, "org.pepstock.charba.client.defaults.globals.DefaultLegend");

exports = DefaultLegend;

//# sourceMappingURL=DefaultLegend.js.map
