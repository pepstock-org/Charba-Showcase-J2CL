goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineChart.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ControllerProvider = goog.require('org.pepstock.charba.client.controllers.ControllerProvider$impl');

let Controller = goog.forwardDeclare('org.pepstock.charba.client.Controller$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let MyLineChart = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineChart$impl');
let $1_$1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineChart.$1.$1$impl');

/**
 * @implements {ControllerProvider}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$1} */
 static $create__() {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineChart_1__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineChart_1__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {Controller} */
 m_provide__org_pepstock_charba_client_controllers_ControllerType(/** ControllerType */ controllerType) {
  return $1_$1.$create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineChart_1__org_pepstock_charba_client_controllers_ControllerType(this, MyLineChart.f_TYPE__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_MyLineChart);
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
  MyLineChart = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineChart$impl');
  $1_$1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineChart.$1.$1$impl');
 }
}
ControllerProvider.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineChart$1");

exports = $1;

//# sourceMappingURL=MyLineChart$1.js.map
