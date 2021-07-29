goog.module('org.pepstock.charba.client.geo.Margin$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Legend = goog.forwardDeclare('org.pepstock.charba.client.geo.Legend$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.geo.Margin.Property$impl');

class Margin extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'Margin()'.
 /** @return {!Margin} */
 static $create__() {
  Margin.$clinit();
  let $instance = new Margin();
  $instance.$ctor__org_pepstock_charba_client_geo_Margin__();
  return $instance;
 }
 //Initialization from constructor 'Margin()'.
 
 $ctor__org_pepstock_charba_client_geo_Margin__() {
  this.$ctor__org_pepstock_charba_client_geo_Margin__org_pepstock_charba_client_commons_NativeObject(null);
 }
 //Factory method corresponding to constructor 'Margin(int, int)'.
 /** @return {!Margin} */
 static $create__int__int(/** number */ topBottom, /** number */ leftRight) {
  Margin.$clinit();
  let $instance = new Margin();
  $instance.$ctor__org_pepstock_charba_client_geo_Margin__int__int(topBottom, leftRight);
  return $instance;
 }
 //Initialization from constructor 'Margin(int, int)'.
 
 $ctor__org_pepstock_charba_client_geo_Margin__int__int(/** number */ topBottom, /** number */ leftRight) {
  this.$ctor__org_pepstock_charba_client_geo_Margin__int__int__int__int(topBottom, leftRight, topBottom, leftRight);
 }
 //Factory method corresponding to constructor 'Margin(int, int, int, int)'.
 /** @return {!Margin} */
 static $create__int__int__int__int(/** number */ top, /** number */ right, /** number */ bottom, /** number */ left) {
  Margin.$clinit();
  let $instance = new Margin();
  $instance.$ctor__org_pepstock_charba_client_geo_Margin__int__int__int__int(top, right, bottom, left);
  return $instance;
 }
 //Initialization from constructor 'Margin(int, int, int, int)'.
 
 $ctor__org_pepstock_charba_client_geo_Margin__int__int__int__int(/** number */ top, /** number */ right, /** number */ bottom, /** number */ left) {
  this.$ctor__org_pepstock_charba_client_geo_Margin__org_pepstock_charba_client_commons_NativeObject(null);
  this.m_setTop__int(top);
  this.m_setRight__int(right);
  this.m_setBottom__int(bottom);
  this.m_setLeft__int(left);
 }
 //Factory method corresponding to constructor 'Margin(NativeObject)'.
 /** @return {!Margin} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  Margin.$clinit();
  let $instance = new Margin();
  $instance.$ctor__org_pepstock_charba_client_geo_Margin__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'Margin(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_geo_Margin__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 m_setTop__int(/** number */ top) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_TOP__org_pepstock_charba_client_geo_Margin_Property, top);
 }
 /** @return {number} */
 m_getTop__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_TOP__org_pepstock_charba_client_geo_Margin_Property, Legend.f_DEFAULT_MARGIN__org_pepstock_charba_client_geo_Legend);
 }
 
 m_setRight__int(/** number */ right) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_RIGHT__org_pepstock_charba_client_geo_Margin_Property, right);
 }
 /** @return {number} */
 m_getRight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_RIGHT__org_pepstock_charba_client_geo_Margin_Property, Legend.f_DEFAULT_MARGIN__org_pepstock_charba_client_geo_Legend);
 }
 
 m_setBottom__int(/** number */ bottom) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_BOTTOM__org_pepstock_charba_client_geo_Margin_Property, bottom);
 }
 /** @return {number} */
 m_getBottom__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BOTTOM__org_pepstock_charba_client_geo_Margin_Property, Legend.f_DEFAULT_MARGIN__org_pepstock_charba_client_geo_Legend);
 }
 
 m_setLeft__int(/** number */ left) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_LEFT__org_pepstock_charba_client_geo_Margin_Property, left);
 }
 /** @return {number} */
 m_getLeft__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_LEFT__org_pepstock_charba_client_geo_Margin_Property, Legend.f_DEFAULT_MARGIN__org_pepstock_charba_client_geo_Legend);
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_geo() {
  return this.m_getNativeObject__();
 }
 
 static $clinit() {
  Margin.$clinit = () =>{};
  Margin.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Margin;
 }
 
 static $loadModules() {
  Legend = goog.module.get('org.pepstock.charba.client.geo.Legend$impl');
  Property = goog.module.get('org.pepstock.charba.client.geo.Margin.Property$impl');
 }
}
$Util.$setClassMetadata(Margin, "org.pepstock.charba.client.geo.Margin");

exports = Margin;

//# sourceMappingURL=Margin.js.map
