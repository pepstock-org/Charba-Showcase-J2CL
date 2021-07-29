goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethGermanyCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const InterpolateCallback = goog.require('org.pepstock.charba.client.geo.callbacks.InterpolateCallback$impl');

let j_l_Math = goog.forwardDeclare('java.lang.Math$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let GeoChoroplethGermanyCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethGermanyCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {InterpolateCallback}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {GeoChoroplethGermanyCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethGermanyCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethGermanyCase(/** GeoChoroplethGermanyCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethGermanyCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethGermanyCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethGermanyCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethGermanyCase(/** GeoChoroplethGermanyCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethGermanyCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {*} */
 m_interpolate__double(/** number */ normalizedValue) {
  let index = $Primitives.$narrowLongToInt(j_l_Math.m_round__double(normalizedValue * (GeoChoroplethGermanyCase.f_COLORS__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethGermanyCase_.size() - 1 | 0)));
  return /**@type {IsColor}*/ ($Casts.$to(GeoChoroplethGermanyCase.f_COLORS__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethGermanyCase_.getAtIndex(Math.min(index, GeoChoroplethGermanyCase.f_COLORS__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethGermanyCase_.size() - 1 | 0)), IsColor));
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  j_l_Math = goog.module.get('java.lang.Math$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  GeoChoroplethGermanyCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethGermanyCase$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
InterpolateCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethGermanyCase$1");

exports = $1;

//# sourceMappingURL=GeoChoroplethGermanyCase$1.js.map
