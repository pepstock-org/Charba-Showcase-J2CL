goog.module('org.pepstock.charba.client.configuration.Point$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractConfigurationElement = goog.require('org.pepstock.charba.client.configuration.AbstractConfigurationElement$impl');

let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let IsDefaultPoint = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPoint$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let AbstractElement = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractElement$impl');

/**
 * @extends {AbstractConfigurationElement<IsDefaultPoint>}
 */
class Point extends AbstractConfigurationElement {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Point} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  Point.$clinit();
  let $instance = new Point();
  $instance.$ctor__org_pepstock_charba_client_configuration_Point__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Point__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractConfigurationElement__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
 }
 /** @override @return {AbstractElement<IsDefaultPoint>} */
 m_getElement__() {
  return this.m_getConfiguration__().m_getElements__().m_getPoint__();
 }
 
 m_setRadius__double(/** number */ radius) {
  this.m_getConfiguration__().m_getElements__().m_getPoint__().m_setRadius__double(radius);
 }
 /** @return {number} */
 m_getRadius__() {
  return this.m_getConfiguration__().m_getElements__().m_getPoint__().m_getRadius__();
 }
 
 m_setPointStyle__org_pepstock_charba_client_enums_PointStyle(/** PointStyle */ pointStyle) {
  this.m_getConfiguration__().m_getElements__().m_getPoint__().m_setPointStyle__org_pepstock_charba_client_enums_PointStyle(pointStyle);
 }
 
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Img(/** HTMLImageElement */ pointStyle) {
  this.m_getConfiguration__().m_getElements__().m_getPoint__().m_setPointStyle__org_pepstock_charba_client_dom_elements_Img(pointStyle);
 }
 /** @return {boolean} */
 m_isPointStyleAsImage__() {
  return this.m_getConfiguration__().m_getElements__().m_getPoint__().m_isPointStyleAsImage__();
 }
 /** @return {PointStyle} */
 m_getPointStyle__() {
  return this.m_getConfiguration__().m_getElements__().m_getPoint__().m_getPointStyle__();
 }
 /** @return {HTMLImageElement} */
 m_getPointStyleAsImage__() {
  return this.m_getConfiguration__().m_getElements__().m_getPoint__().m_getPointStyleAsImage__();
 }
 
 m_setHitRadius__double(/** number */ hitRadius) {
  this.m_getConfiguration__().m_getElements__().m_getPoint__().m_setHitRadius__double(hitRadius);
 }
 /** @return {number} */
 m_getHitRadius__() {
  return this.m_getConfiguration__().m_getElements__().m_getPoint__().m_getHitRadius__();
 }
 
 m_setHoverRadius__double(/** number */ hoverRadius) {
  this.m_getConfiguration__().m_getElements__().m_getPoint__().m_setHoverRadius__double(hoverRadius);
 }
 /** @return {number} */
 m_getHoverRadius__() {
  return this.m_getConfiguration__().m_getElements__().m_getPoint__().m_getHoverRadius__();
 }
 
 m_setRotation__double(/** number */ rotation) {
  this.m_getConfiguration__().m_getElements__().m_getPoint__().m_setRotation__double(rotation);
 }
 /** @return {number} */
 m_getRotation__() {
  return this.m_getConfiguration__().m_getElements__().m_getPoint__().m_getRotation__();
 }
 
 static $clinit() {
  Point.$clinit = () =>{};
  Point.$loadModules();
  AbstractConfigurationElement.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Point;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Point, "org.pepstock.charba.client.configuration.Point");

exports = Point;

//# sourceMappingURL=Point.js.map
