goog.module('org.pepstock.charba.client.geo.Graticule$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let ArrayDouble_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.geo.Graticule.Property$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');

class Graticule extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'Graticule()'.
 /** @return {!Graticule} */
 static $create__() {
  Graticule.$clinit();
  let $instance = new Graticule();
  $instance.$ctor__org_pepstock_charba_client_geo_Graticule__();
  return $instance;
 }
 //Initialization from constructor 'Graticule()'.
 
 $ctor__org_pepstock_charba_client_geo_Graticule__() {
  this.$ctor__org_pepstock_charba_client_geo_Graticule__org_pepstock_charba_client_commons_NativeObject(null);
 }
 //Factory method corresponding to constructor 'Graticule(NativeObject)'.
 /** @return {!Graticule} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  Graticule.$clinit();
  let $instance = new Graticule();
  $instance.$ctor__org_pepstock_charba_client_geo_Graticule__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'Graticule(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_geo_Graticule__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 m_setStepMajor__double__double(/** number */ start, /** number */ end) {
  this.m_setValues__org_pepstock_charba_client_geo_Graticule_Property__double__double_$p_org_pepstock_charba_client_geo_Graticule(Property.f_STEP_MAJOR__org_pepstock_charba_client_geo_Graticule_Property, start, end);
 }
 /** @return {List<?number>} */
 m_getStepMajor__() {
  return this.m_getValues__org_pepstock_charba_client_geo_Graticule_Property_$p_org_pepstock_charba_client_geo_Graticule(Property.f_STEP_MAJOR__org_pepstock_charba_client_geo_Graticule_Property);
 }
 
 m_setStepMinor__double__double(/** number */ start, /** number */ end) {
  this.m_setValues__org_pepstock_charba_client_geo_Graticule_Property__double__double_$p_org_pepstock_charba_client_geo_Graticule(Property.f_STEP_MINOR__org_pepstock_charba_client_geo_Graticule_Property, start, end);
 }
 /** @return {List<?number>} */
 m_getStepMinor__() {
  return this.m_getValues__org_pepstock_charba_client_geo_Graticule_Property_$p_org_pepstock_charba_client_geo_Graticule(Property.f_STEP_MINOR__org_pepstock_charba_client_geo_Graticule_Property);
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_geo() {
  return this.m_getNativeObject__();
 }
 
 m_setValues__org_pepstock_charba_client_geo_Graticule_Property__double__double_$p_org_pepstock_charba_client_geo_Graticule(/** Property */ property, /** number */ start, /** number */ end) {
  if (Undefined.m_isNot__double(start) && Undefined.m_isNot__double(end)) {
   this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_double(property, /**@type {!Array<number>}*/ ($Arrays.$init([start, end], $double)));
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(property);
  }
 }
 /** @return {List<?number>} */
 m_getValues__org_pepstock_charba_client_geo_Graticule_Property_$p_org_pepstock_charba_client_geo_Graticule(/** Property */ property) {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(property), ArrayDouble_$Overlay));
  return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayDouble(array);
 }
 
 static $clinit() {
  Graticule.$clinit = () =>{};
  Graticule.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Graticule;
 }
 
 static $loadModules() {
  ArrayDouble_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  Property = goog.module.get('org.pepstock.charba.client.geo.Graticule.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $double = goog.module.get('vmbootstrap.primitives.$double$impl');
 }
}
$Util.$setClassMetadata(Graticule, "org.pepstock.charba.client.geo.Graticule");

exports = Graticule;

//# sourceMappingURL=Graticule.js.map
