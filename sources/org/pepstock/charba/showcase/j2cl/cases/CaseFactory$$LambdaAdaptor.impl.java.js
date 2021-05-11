goog.module('org.pepstock.charba.showcase.j2cl.cases.CaseFactory.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

/**
 * @implements {CaseFactory}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():BaseComposite */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():BaseComposite}*/
  this.f_fn__org_pepstock_charba_showcase_j2cl_cases_CaseFactory_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_CaseFactory_$LambdaAdaptor__org_pepstock_charba_showcase_j2cl_cases_CaseFactory_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_CaseFactory_$LambdaAdaptor__org_pepstock_charba_showcase_j2cl_cases_CaseFactory_$JsFunction(/** ?function():BaseComposite */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_showcase_j2cl_cases_CaseFactory_$LambdaAdaptor = fn;
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  let /** ?function():BaseComposite */ $function;
  return ($function = this.f_fn__org_pepstock_charba_showcase_j2cl_cases_CaseFactory_$LambdaAdaptor, $function());
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
CaseFactory.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.showcase.j2cl.cases.CaseFactory$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=CaseFactory$$LambdaAdaptor.js.map
