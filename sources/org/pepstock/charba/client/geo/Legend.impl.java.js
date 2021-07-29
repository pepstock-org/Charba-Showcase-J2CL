goog.module('org.pepstock.charba.client.geo.Legend$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.geo.Legend.Property$impl');
let Margin = goog.forwardDeclare('org.pepstock.charba.client.geo.Margin$impl');
let PositionPoint = goog.forwardDeclare('org.pepstock.charba.client.geo.PositionPoint$impl');
let Align = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.Align$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.Position$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Legend extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Legend} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  Legend.$clinit();
  let $instance = new Legend();
  $instance.$ctor__org_pepstock_charba_client_geo_Legend__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_Legend__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 m_setPosition__org_pepstock_charba_client_geo_enums_Position(/** Position */ position) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POSITION__org_pepstock_charba_client_geo_Legend_Property, position);
 }
 
 m_setPosition__org_pepstock_charba_client_geo_PositionPoint(/** PositionPoint */ position) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_POSITION__org_pepstock_charba_client_geo_Legend_Property, position);
 }
 /** @return {Position} */
 m_getPosition__() {
  return /**@type {Position}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POSITION__org_pepstock_charba_client_geo_Legend_Property, Position.m_values__(), Position.f_BOTTOM_RIGHT__org_pepstock_charba_client_geo_enums_Position), Position));
 }
 /** @return {PositionPoint} */
 m_getPositionAsPoint__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_POSITION__org_pepstock_charba_client_geo_Legend_Property, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
   return PositionPoint.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_POSITION__org_pepstock_charba_client_geo_Legend_Property));
  }
  return null;
 }
 
 m_setAlign__org_pepstock_charba_client_geo_enums_Align(/** Align */ align) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ALIGN__org_pepstock_charba_client_geo_Legend_Property, align);
 }
 /** @return {Align} */
 m_getAlign__() {
  return /**@type {Align}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ALIGN__org_pepstock_charba_client_geo_Legend_Property, Align.m_values__(), Align.f_RIGHT__org_pepstock_charba_client_geo_enums_Align), Align));
 }
 
 m_setLength__int(/** number */ length) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_LENGTH__org_pepstock_charba_client_geo_Legend_Property, length);
 }
 /** @return {number} */
 m_getLength__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_LENGTH__org_pepstock_charba_client_geo_Legend_Property, Legend.f_DEFAULT_LENGTH__org_pepstock_charba_client_geo_Legend);
 }
 
 m_setWidth__int(/** number */ width) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_WIDTH__org_pepstock_charba_client_geo_Legend_Property, width);
 }
 /** @return {number} */
 m_getWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_WIDTH__org_pepstock_charba_client_geo_Legend_Property, Legend.f_DEFAULT_WIDTH__org_pepstock_charba_client_geo_Legend);
 }
 
 m_setIndicatorWidth__int(/** number */ width) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_INDICATOR_WIDTH__org_pepstock_charba_client_geo_Legend_Property, width);
 }
 /** @return {number} */
 m_getIndicatorWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_INDICATOR_WIDTH__org_pepstock_charba_client_geo_Legend_Property, Legend.f_DEFAULT_INDICATOR_WIDTH__org_pepstock_charba_client_geo_Legend);
 }
 
 m_setMargin__int(/** number */ margin) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_MARGIN__org_pepstock_charba_client_geo_Legend_Property, margin);
 }
 
 m_setMargin__org_pepstock_charba_client_geo_Margin(/** Margin */ margin) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_MARGIN__org_pepstock_charba_client_geo_Legend_Property, margin);
 }
 /** @return {number} */
 m_getMargin__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_MARGIN__org_pepstock_charba_client_geo_Legend_Property, Legend.f_DEFAULT_MARGIN__org_pepstock_charba_client_geo_Legend);
 }
 /** @return {Margin} */
 m_getMarginAsObject__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_MARGIN__org_pepstock_charba_client_geo_Legend_Property, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
   return Margin.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_MARGIN__org_pepstock_charba_client_geo_Legend_Property));
  }
  return null;
 }
 
 static $clinit() {
  Legend.$clinit = () =>{};
  Legend.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Legend;
 }
 
 static $loadModules() {
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  Property = goog.module.get('org.pepstock.charba.client.geo.Legend.Property$impl');
  Margin = goog.module.get('org.pepstock.charba.client.geo.Margin$impl');
  PositionPoint = goog.module.get('org.pepstock.charba.client.geo.PositionPoint$impl');
  Align = goog.module.get('org.pepstock.charba.client.geo.enums.Align$impl');
  Position = goog.module.get('org.pepstock.charba.client.geo.enums.Position$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number}*/
Legend.f_DEFAULT_LENGTH__org_pepstock_charba_client_geo_Legend = 100;
/**@const {number}*/
Legend.f_DEFAULT_WIDTH__org_pepstock_charba_client_geo_Legend = 50;
/**@const {number}*/
Legend.f_DEFAULT_INDICATOR_WIDTH__org_pepstock_charba_client_geo_Legend = 10;
/**@const {number}*/
Legend.f_DEFAULT_MARGIN__org_pepstock_charba_client_geo_Legend = 8;
$Util.$setClassMetadata(Legend, "org.pepstock.charba.client.geo.Legend");

exports = Legend;

//# sourceMappingURL=Legend.js.map
