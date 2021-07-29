goog.module('org.pepstock.charba.client.defaults.globals.AbstractDefaultTitle$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAbstractTitle = goog.require('org.pepstock.charba.client.defaults.IsDefaultAbstractTitle$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let ElementAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ElementAlign$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');

/**
 * @abstract
 * @implements {IsDefaultAbstractTitle}
 */
class AbstractDefaultTitle extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_AbstractDefaultTitle__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return AbstractDefaultTitle.f_DEFAULT_DISPLAY__org_pepstock_charba_client_defaults_globals_AbstractDefaultTitle_;
 }
 /** @override @return {Position} */
 m_getPosition__() {
  return Position.f_TOP__org_pepstock_charba_client_enums_Position;
 }
 /** @override @return {boolean} */
 m_isFullSize__() {
  return AbstractDefaultTitle.f_DEFAULT_FULL_SIZE__org_pepstock_charba_client_defaults_globals_AbstractDefaultTitle_;
 }
 /** @override @return {ElementAlign} */
 m_getAlign__() {
  return ElementAlign.f_CENTER__org_pepstock_charba_client_enums_ElementAlign;
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return Defaults.m_get__().m_getGlobal__().m_getColorAsString__();
 }
 
 static $clinit() {
  AbstractDefaultTitle.$clinit = () =>{};
  AbstractDefaultTitle.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractDefaultTitle;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  ElementAlign = goog.module.get('org.pepstock.charba.client.enums.ElementAlign$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
 }
}
/**@const {boolean}*/
AbstractDefaultTitle.f_DEFAULT_FULL_SIZE__org_pepstock_charba_client_defaults_globals_AbstractDefaultTitle_ = true;
/**@const {boolean}*/
AbstractDefaultTitle.f_DEFAULT_DISPLAY__org_pepstock_charba_client_defaults_globals_AbstractDefaultTitle_ = false;
IsDefaultAbstractTitle.$markImplementor(AbstractDefaultTitle);
$Util.$setClassMetadata(AbstractDefaultTitle, "org.pepstock.charba.client.defaults.globals.AbstractDefaultTitle");

exports = AbstractDefaultTitle;

//# sourceMappingURL=AbstractDefaultTitle.js.map
