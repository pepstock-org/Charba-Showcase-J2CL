goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomOverScaleCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AxisClickEventHandler = goog.require('org.pepstock.charba.client.events.AxisClickEventHandler$impl');

let AxisClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisClickEvent$impl');
let ZoomOverScaleCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomOverScaleCase$impl');

/**
 * @implements {AxisClickEventHandler}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ZoomOverScaleCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase(/** ZoomOverScaleCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase(/** ZoomOverScaleCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomOverScaleCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onClick__org_pepstock_charba_client_events_AxisClickEvent(/** AxisClickEvent */ event) {}
 
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
AxisClickEventHandler.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomOverScaleCase$1");

exports = $1;

//# sourceMappingURL=ZoomOverScaleCase$1.js.map
