goog.module('org.pepstock.charba.client.defaults.globals.DefaultBar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultBar = goog.require('org.pepstock.charba.client.defaults.IsDefaultBar$impl');
const AbstractDefaultOptionsElement = goog.require('org.pepstock.charba.client.defaults.globals.AbstractDefaultOptionsElement$impl');

let IsDefaultPointStyleHandler = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
let BorderSkipped = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderSkipped$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');

/**
 * @implements {IsDefaultBar}
 */
class DefaultBar extends AbstractDefaultOptionsElement {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultBar} */
 static $create__() {
  DefaultBar.$clinit();
  let $instance = new DefaultBar();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultBar__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultBar__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptionsElement__int(DefaultBar.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultBar_);
 }
 /** @override @return {BorderSkipped} */
 m_getBorderSkipped__() {
  return BorderSkipped.f_START__org_pepstock_charba_client_enums_BorderSkipped;
 }
 /** @override @return {number} */
 m_getBorderRadius__() {
  return DefaultBar.f_DEFAULT_BORDER_RADIUS__org_pepstock_charba_client_defaults_globals_DefaultBar_;
 }
 /** @override @return {PointStyle} */
 m_getPointStyle__() {
  return null;
 }
 /** @override @return {boolean} */
 m_isPointStyleAsImage__() {
  return false;
 }
 /** @override @return {HTMLImageElement} */
 m_getPointStyleAsImage__() {
  return null;
 }
 /** @override @return {number} */
 m_getHoverBorderRadius__() {
  return this.m_getBorderRadius__();
 }
 /** @override @return {boolean} */
 m_isEnableBorderRadius__() {
  return DefaultBar.f_DEFAULT_ENABLE_BORDER_RADIUS__org_pepstock_charba_client_defaults_globals_DefaultBar_;
 }
 
 static $clinit() {
  DefaultBar.$clinit = () =>{};
  DefaultBar.$loadModules();
  AbstractDefaultOptionsElement.$clinit();
  IsDefaultPointStyleHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultBar;
 }
 
 static $loadModules() {
  IsDefaultPointStyleHandler = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
  BorderSkipped = goog.module.get('org.pepstock.charba.client.enums.BorderSkipped$impl');
 }
}
/**@const {boolean}*/
DefaultBar.f_DEFAULT_ENABLE_BORDER_RADIUS__org_pepstock_charba_client_defaults_globals_DefaultBar_ = true;
/**@const {number}*/
DefaultBar.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultBar_ = 0;
/**@const {number}*/
DefaultBar.f_DEFAULT_BORDER_RADIUS__org_pepstock_charba_client_defaults_globals_DefaultBar_ = 0;
IsDefaultBar.$markImplementor(DefaultBar);
$Util.$setClassMetadata(DefaultBar, "org.pepstock.charba.client.defaults.globals.DefaultBar");

exports = DefaultBar;

//# sourceMappingURL=DefaultBar.js.map
