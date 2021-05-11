goog.module('org.pepstock.charba.client.defaults.globals.DefaultPoint$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultPoint = goog.require('org.pepstock.charba.client.defaults.IsDefaultPoint$impl');
const AbstractDefaultOptionsElement = goog.require('org.pepstock.charba.client.defaults.globals.AbstractDefaultOptionsElement$impl');

let IsDefaultPointStyleHandler = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');

/**
 * @implements {IsDefaultPoint}
 */
class DefaultPoint extends AbstractDefaultOptionsElement {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultPoint} */
 static $create__() {
  DefaultPoint.$clinit();
  let $instance = new DefaultPoint();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultPoint__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultPoint__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptionsElement__int(DefaultPoint.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultPoint_);
 }
 /** @override @return {number} */
 m_getRadius__() {
  return DefaultPoint.f_DEFAULT_RADIUS__org_pepstock_charba_client_defaults_globals_DefaultPoint_;
 }
 /** @override @return {number} */
 m_getHitRadius__() {
  return DefaultPoint.f_DEFAULT_HIT_RADIUS__org_pepstock_charba_client_defaults_globals_DefaultPoint_;
 }
 /** @override @return {number} */
 m_getHoverRadius__() {
  return DefaultPoint.f_DEFAULT_HOVER_RADIUS__org_pepstock_charba_client_defaults_globals_DefaultPoint_;
 }
 /** @override @return {number} */
 m_getHoverBorderWidth__() {
  return DefaultPoint.f_DEFAULT_HOVER_BORDER_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultPoint_;
 }
 /** @override @return {number} */
 m_getRotation__() {
  return DefaultPoint.f_DEFAULT_ROTATION__org_pepstock_charba_client_defaults_globals_DefaultPoint_;
 }
 //Default method forwarding stub.
 /** @override @return {PointStyle} */
 m_getPointStyle__() {
  return IsDefaultPointStyleHandler.m_getPointStyle__$default__org_pepstock_charba_client_defaults_IsDefaultPointStyleHandler(this);
 }
 //Default method forwarding stub.
 /** @override @return {HTMLImageElement} */
 m_getPointStyleAsImage__() {
  return IsDefaultPointStyleHandler.m_getPointStyleAsImage__$default__org_pepstock_charba_client_defaults_IsDefaultPointStyleHandler(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isPointStyleAsImage__() {
  return IsDefaultPointStyleHandler.m_isPointStyleAsImage__$default__org_pepstock_charba_client_defaults_IsDefaultPointStyleHandler(this);
 }
 
 static $clinit() {
  DefaultPoint.$clinit = () =>{};
  DefaultPoint.$loadModules();
  AbstractDefaultOptionsElement.$clinit();
  IsDefaultPointStyleHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultPoint;
 }
 
 static $loadModules() {
  IsDefaultPointStyleHandler = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
 }
}
/**@const {number}*/
DefaultPoint.f_DEFAULT_RADIUS__org_pepstock_charba_client_defaults_globals_DefaultPoint_ = 3;
/**@const {number}*/
DefaultPoint.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultPoint_ = 1;
/**@const {number}*/
DefaultPoint.f_DEFAULT_HIT_RADIUS__org_pepstock_charba_client_defaults_globals_DefaultPoint_ = 1;
/**@const {number}*/
DefaultPoint.f_DEFAULT_HOVER_RADIUS__org_pepstock_charba_client_defaults_globals_DefaultPoint_ = 4;
/**@const {number}*/
DefaultPoint.f_DEFAULT_HOVER_BORDER_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultPoint_ = 1;
/**@const {number}*/
DefaultPoint.f_DEFAULT_ROTATION__org_pepstock_charba_client_defaults_globals_DefaultPoint_ = 0;
IsDefaultPoint.$markImplementor(DefaultPoint);
$Util.$setClassMetadata(DefaultPoint, "org.pepstock.charba.client.defaults.globals.DefaultPoint");

exports = DefaultPoint;

//# sourceMappingURL=DefaultPoint.js.map
