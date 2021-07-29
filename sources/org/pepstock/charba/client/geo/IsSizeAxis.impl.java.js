goog.module('org.pepstock.charba.client.geo.IsSizeAxis$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsLegendAxis = goog.require('org.pepstock.charba.client.geo.IsLegendAxis$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.geo.IsSizeAxis.$LambdaAdaptor$impl');
let SizeAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.SizeAxis$impl');
let SizeAxisMapper = goog.forwardDeclare('org.pepstock.charba.client.geo.SizeAxisMapper$impl');
let Mode = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.Mode$impl');

/**
 * @interface
 * @extends {IsLegendAxis}
 */
class IsSizeAxis {
 /** @abstract @override @return {SizeAxisMapper} */
 m_getMapper__() {}
 /** @abstract */
 m_setMissingRadius__double(/** number */ missingRadius) {}
 /** @abstract @return {number} */
 m_getMissingRadius__() {}
 /** @abstract */
 m_setMode__org_pepstock_charba_client_geo_enums_Mode(/** Mode */ mode) {}
 /** @abstract @return {Mode} */
 m_getMode__() {}
 /** @abstract */
 m_setRange__int__int(/** number */ min, /** number */ max) {}
 /** @abstract @return {List<Integer>} */
 m_getRange__() {}
 /** @return {IsSizeAxis} */
 static $adapt(/** ?function():SizeAxisMapper */ fn) {
  IsSizeAxis.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_setMissingRadius__$default__org_pepstock_charba_client_geo_IsSizeAxis__double(/** !IsSizeAxis */ $thisArg, /** number */ missingRadius) {
  IsSizeAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getMapper__(), null)) {
   $thisArg.m_getMapper__().m_setMissingRadius__double_$pp_org_pepstock_charba_client_geo(missingRadius);
  }
 }
 /** @return {number} */
 static m_getMissingRadius__$default__org_pepstock_charba_client_geo_IsSizeAxis(/** !IsSizeAxis */ $thisArg) {
  IsSizeAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getMapper__(), null)) {
   return $thisArg.m_getMapper__().m_getMissingRadius___$pp_org_pepstock_charba_client_geo();
  }
  return SizeAxis.f_DEFAULT_MISSING_RADIUS__org_pepstock_charba_client_geo_SizeAxis;
 }
 
 static m_setMode__$default__org_pepstock_charba_client_geo_IsSizeAxis__org_pepstock_charba_client_geo_enums_Mode(/** !IsSizeAxis */ $thisArg, /** Mode */ mode) {
  IsSizeAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getMapper__(), null)) {
   $thisArg.m_getMapper__().m_setMode__org_pepstock_charba_client_geo_enums_Mode_$pp_org_pepstock_charba_client_geo(mode);
  }
 }
 /** @return {Mode} */
 static m_getMode__$default__org_pepstock_charba_client_geo_IsSizeAxis(/** !IsSizeAxis */ $thisArg) {
  IsSizeAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getMapper__(), null)) {
   return $thisArg.m_getMapper__().m_getMode___$pp_org_pepstock_charba_client_geo();
  }
  return Mode.f_AREA__org_pepstock_charba_client_geo_enums_Mode;
 }
 
 static m_setRange__$default__org_pepstock_charba_client_geo_IsSizeAxis__int__int(/** !IsSizeAxis */ $thisArg, /** number */ min, /** number */ max) {
  IsSizeAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getMapper__(), null)) {
   $thisArg.m_getMapper__().m_setRange__int__int_$pp_org_pepstock_charba_client_geo(min, max);
  }
 }
 /** @return {List<Integer>} */
 static m_getRange__$default__org_pepstock_charba_client_geo_IsSizeAxis(/** !IsSizeAxis */ $thisArg) {
  IsSizeAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getMapper__(), null)) {
   return $thisArg.m_getMapper__().m_getRange___$pp_org_pepstock_charba_client_geo();
  }
  return /**@type {List<Integer>}*/ (Collections.m_emptyList__());
 }
 
 static $clinit() {
  IsSizeAxis.$clinit = () =>{};
  IsSizeAxis.$loadModules();
  IsLegendAxis.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsLegendAxis.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_geo_IsSizeAxis = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_geo_IsSizeAxis;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.geo.IsSizeAxis.$LambdaAdaptor$impl');
  SizeAxis = goog.module.get('org.pepstock.charba.client.geo.SizeAxis$impl');
  Mode = goog.module.get('org.pepstock.charba.client.geo.enums.Mode$impl');
 }
}
IsSizeAxis.$markImplementor(/**@type {Function}*/ (IsSizeAxis));
$Util.$setClassMetadataForInterface(IsSizeAxis, "org.pepstock.charba.client.geo.IsSizeAxis");

exports = IsSizeAxis;

//# sourceMappingURL=IsSizeAxis.js.map
