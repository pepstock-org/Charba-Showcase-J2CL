goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomPanRegionCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const StartCallback = goog.require('org.pepstock.charba.client.zoom.callbacks.StartCallback$impl');

let ZoomContext = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomContext$impl');
let ZoomPanRegionCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomPanRegionCase$impl');

/**
 * @implements {StartCallback}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ZoomPanRegionCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomPanRegionCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomPanRegionCase(/** ZoomPanRegionCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomPanRegionCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomPanRegionCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomPanRegionCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomPanRegionCase(/** ZoomPanRegionCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomPanRegionCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {boolean} */
 m_onStart__org_pepstock_charba_client_zoom_ZoomContext(/** ZoomContext */ context) {
  let area = context.m_getChart__().m_getNode__().m_getChartArea__();
  let w25 = area.m_getWidth__() * 0.25;
  let h25 = area.m_getHeight__() * 0.25;
  if (context.m_getPoint__().m_getX__() < area.m_getLeft__() + w25 || context.m_getPoint__().m_getX__() > area.m_getRight__() - w25 || context.m_getPoint__().m_getY__() < area.m_getTop__() + h25 || context.m_getPoint__().m_getY__() > area.m_getBottom__() - h25) {
   return false;
  }
  return true;
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
 
 static $loadModules() {}
}
StartCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomPanRegionCase$1");

exports = $1;

//# sourceMappingURL=ZoomPanRegionCase$1.js.map
