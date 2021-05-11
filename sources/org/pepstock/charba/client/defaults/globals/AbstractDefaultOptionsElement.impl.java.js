goog.module('org.pepstock.charba.client.defaults.globals.AbstractDefaultOptionsElement$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultOptionsElement = goog.require('org.pepstock.charba.client.defaults.IsDefaultOptionsElement$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');

/**
 * @abstract
 * @implements {IsDefaultOptionsElement}
 */
class AbstractDefaultOptionsElement extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_borderColor__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptionsElement_;
  /**@type {number}*/
  this.f_borderWidth__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptionsElement_ = 0;
 }
 //Initialization from constructor 'AbstractDefaultOptionsElement(int)'.
 
 $ctor__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptionsElement__int(/** number */ borderWidth) {
  this.$ctor__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptionsElement__java_lang_String__int(null, borderWidth);
 }
 //Initialization from constructor 'AbstractDefaultOptionsElement(String, int)'.
 
 $ctor__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptionsElement__java_lang_String__int(/** ?string */ borderColor, /** number */ borderWidth) {
  this.$ctor__java_lang_Object__();
  this.f_borderColor__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptionsElement_ = borderColor;
  this.f_borderWidth__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptionsElement_ = borderWidth;
 }
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return Defaults.m_get__().m_getGlobal__().m_getBackgroundColorAsString__();
 }
 /** @override @return {number} */
 m_getBorderWidth__() {
  return this.f_borderWidth__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptionsElement_;
 }
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return !$Equality.$same(this.f_borderColor__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptionsElement_, null) ? this.f_borderColor__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptionsElement_ : Defaults.m_get__().m_getGlobal__().m_getBorderColorAsString__();
 }
 /** @override @return {?string} */
 m_getHoverBackgroundColorAsString__() {
  return this.m_getBackgroundColorAsString__();
 }
 /** @override @return {number} */
 m_getHoverBorderWidth__() {
  return this.m_getBorderWidth__();
 }
 /** @override @return {?string} */
 m_getHoverBorderColorAsString__() {
  return this.m_getBorderColorAsString__();
 }
 
 static $clinit() {
  AbstractDefaultOptionsElement.$clinit = () =>{};
  AbstractDefaultOptionsElement.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractDefaultOptionsElement;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
 }
}
IsDefaultOptionsElement.$markImplementor(AbstractDefaultOptionsElement);
$Util.$setClassMetadata(AbstractDefaultOptionsElement, "org.pepstock.charba.client.defaults.globals.AbstractDefaultOptionsElement");

exports = AbstractDefaultOptionsElement;

//# sourceMappingURL=AbstractDefaultOptionsElement.js.map
