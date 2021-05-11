goog.module('org.pepstock.charba.client.options.Point$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultPoint = goog.require('org.pepstock.charba.client.defaults.IsDefaultPoint$impl');
const AbstractElement = goog.require('org.pepstock.charba.client.options.AbstractElement$impl');
const HasPointStyle = goog.require('org.pepstock.charba.client.options.HasPointStyle$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDefaultPointStyleHandler = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let Elements = goog.forwardDeclare('org.pepstock.charba.client.options.Elements$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Point.Property$impl');
let PointStyleHandler = goog.forwardDeclare('org.pepstock.charba.client.options.PointStyleHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractElement<IsDefaultPoint>}
 * @implements {IsDefaultPoint}
 * @implements {HasPointStyle}
 */
class Point extends AbstractElement {
 /** @protected */
 constructor() {
  super();
  /**@type {PointStyleHandler}*/
  this.f_pointStyleHandler__org_pepstock_charba_client_options_Point_;
 }
 /** @return {!Point} */
 static $create__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPoint__org_pepstock_charba_client_commons_NativeObject(/** Elements */ elements, /** Key */ childKey, /** IsDefaultPoint */ defaultValues, /** ? */ nativeObject) {
  Point.$clinit();
  let $instance = new Point();
  $instance.$ctor__org_pepstock_charba_client_options_Point__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPoint__org_pepstock_charba_client_commons_NativeObject(elements, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Point__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPoint__org_pepstock_charba_client_commons_NativeObject(/** Elements */ elements, /** Key */ childKey, /** IsDefaultPoint */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractElement__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultOptionsElement__org_pepstock_charba_client_commons_NativeObject(elements, childKey, defaultValues, nativeObject);
  this.f_pointStyleHandler__org_pepstock_charba_client_options_Point_ = PointStyleHandler.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultPointStyleHandler__org_pepstock_charba_client_commons_NativeObject(this, /**@type {IsDefaultPoint}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPoint)), this.m_getNativeObject__());
 }
 /** @override @return {PointStyleHandler} */
 m_getPointStyleHandler__() {
  return this.f_pointStyleHandler__org_pepstock_charba_client_options_Point_;
 }
 
 m_setRadius__double(/** number */ radius) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_RADIUS__org_pepstock_charba_client_options_Point_Property, Checker.m_positiveOrZero__double(radius));
 }
 /** @override @return {number} */
 m_getRadius__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_RADIUS__org_pepstock_charba_client_options_Point_Property, /**@type {IsDefaultPoint}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPoint)).m_getRadius__());
 }
 
 m_setHitRadius__double(/** number */ hitRadius) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_HIT_RADIUS__org_pepstock_charba_client_options_Point_Property, Checker.m_positiveOrZero__double(hitRadius));
 }
 /** @override @return {number} */
 m_getHitRadius__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_HIT_RADIUS__org_pepstock_charba_client_options_Point_Property, /**@type {IsDefaultPoint}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPoint)).m_getHitRadius__());
 }
 
 m_setHoverRadius__double(/** number */ hoverRadius) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_HOVER_RADIUS__org_pepstock_charba_client_options_Point_Property, Checker.m_positiveOrZero__double(hoverRadius));
 }
 /** @override @return {number} */
 m_getHoverRadius__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_HOVER_RADIUS__org_pepstock_charba_client_options_Point_Property, /**@type {IsDefaultPoint}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPoint)).m_getHoverRadius__());
 }
 
 m_setRotation__double(/** number */ rotation) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_ROTATION__org_pepstock_charba_client_options_Point_Property, rotation);
 }
 /** @override @return {number} */
 m_getRotation__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_ROTATION__org_pepstock_charba_client_options_Point_Property, /**@type {IsDefaultPoint}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPoint)).m_getRotation__());
 }
 //Default method forwarding stub.
 /** @override @return {PointStyle} */
 m_getPointStyle__() {
  return HasPointStyle.m_getPointStyle__$default__org_pepstock_charba_client_options_HasPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override @return {HTMLImageElement} */
 m_getPointStyleAsImage__() {
  return HasPointStyle.m_getPointStyleAsImage__$default__org_pepstock_charba_client_options_HasPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isPointStyleAsImage__() {
  return HasPointStyle.m_isPointStyleAsImage__$default__org_pepstock_charba_client_options_HasPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPointStyle__org_pepstock_charba_client_enums_PointStyle(/** PointStyle */ arg0) {
  HasPointStyle.m_setPointStyle__$default__org_pepstock_charba_client_options_HasPointStyle__org_pepstock_charba_client_enums_PointStyle(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Img(/** HTMLImageElement */ arg0) {
  HasPointStyle.m_setPointStyle__$default__org_pepstock_charba_client_options_HasPointStyle__org_pepstock_charba_client_dom_elements_Img(this, arg0);
 }
 
 static $clinit() {
  Point.$clinit = () =>{};
  Point.$loadModules();
  AbstractElement.$clinit();
  IsDefaultPointStyleHandler.$clinit();
  HasPointStyle.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Point;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  IsDefaultPointStyleHandler = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.Point.Property$impl');
  PointStyleHandler = goog.module.get('org.pepstock.charba.client.options.PointStyleHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultPoint.$markImplementor(Point);
HasPointStyle.$markImplementor(Point);
$Util.$setClassMetadata(Point, "org.pepstock.charba.client.options.Point");

exports = Point;

//# sourceMappingURL=Point.js.map
