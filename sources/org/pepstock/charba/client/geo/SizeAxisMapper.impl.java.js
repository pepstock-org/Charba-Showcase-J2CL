goog.module('org.pepstock.charba.client.geo.SizeAxisMapper$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LegendAxisMapper = goog.require('org.pepstock.charba.client.geo.LegendAxisMapper$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let ArrayInteger_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let SizeAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.SizeAxis$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.geo.SizeAxisMapper.Property$impl');
let Mode = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.Mode$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class SizeAxisMapper extends LegendAxisMapper {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!SizeAxisMapper} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  SizeAxisMapper.$clinit();
  let $instance = new SizeAxisMapper();
  $instance.$ctor__org_pepstock_charba_client_geo_SizeAxisMapper__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_SizeAxisMapper__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_geo_LegendAxisMapper__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 m_setMissingRadius__double_$pp_org_pepstock_charba_client_geo(/** number */ missingRadius) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_MISSING__org_pepstock_charba_client_geo_SizeAxisMapper_Property, missingRadius);
 }
 /** @return {number} */
 m_getMissingRadius___$pp_org_pepstock_charba_client_geo() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_MISSING__org_pepstock_charba_client_geo_SizeAxisMapper_Property, SizeAxis.f_DEFAULT_MISSING_RADIUS__org_pepstock_charba_client_geo_SizeAxis);
 }
 
 m_setMode__org_pepstock_charba_client_geo_enums_Mode_$pp_org_pepstock_charba_client_geo(/** Mode */ mode) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_MODE__org_pepstock_charba_client_geo_SizeAxisMapper_Property, mode);
 }
 /** @return {Mode} */
 m_getMode___$pp_org_pepstock_charba_client_geo() {
  return /**@type {Mode}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_MODE__org_pepstock_charba_client_geo_SizeAxisMapper_Property, Mode.m_values__(), Mode.f_AREA__org_pepstock_charba_client_geo_enums_Mode), Mode));
 }
 
 m_setRange__int__int_$pp_org_pepstock_charba_client_geo(/** number */ min, /** number */ max) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_RANGE__org_pepstock_charba_client_geo_SizeAxisMapper_Property, ArrayInteger_$Overlay.m_fromOrEmpty__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([min, max], $int))));
 }
 /** @return {List<Integer>} */
 m_getRange___$pp_org_pepstock_charba_client_geo() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_RANGE__org_pepstock_charba_client_geo_SizeAxisMapper_Property), ArrayInteger_$Overlay));
  return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayInteger(array);
 }
 
 static $clinit() {
  SizeAxisMapper.$clinit = () =>{};
  SizeAxisMapper.$loadModules();
  LegendAxisMapper.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SizeAxisMapper;
 }
 
 static $loadModules() {
  ArrayInteger_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  SizeAxis = goog.module.get('org.pepstock.charba.client.geo.SizeAxis$impl');
  Property = goog.module.get('org.pepstock.charba.client.geo.SizeAxisMapper.Property$impl');
  Mode = goog.module.get('org.pepstock.charba.client.geo.enums.Mode$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
$Util.$setClassMetadata(SizeAxisMapper, "org.pepstock.charba.client.geo.SizeAxisMapper");

exports = SizeAxisMapper;

//# sourceMappingURL=SizeAxisMapper.js.map
