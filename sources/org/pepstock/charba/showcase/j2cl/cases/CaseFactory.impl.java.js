goog.module('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory.$LambdaAdaptor$impl');
let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

/**
 * @interface
 */
class CaseFactory {
 /** @abstract @return {BaseComposite} */
 m_create__() {}
 /** @return {CaseFactory} */
 static $adapt(/** ?function():BaseComposite */ fn) {
  CaseFactory.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  CaseFactory.$clinit = () =>{};
  CaseFactory.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_showcase_j2cl_cases_CaseFactory = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_showcase_j2cl_cases_CaseFactory;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.CaseFactory.$LambdaAdaptor$impl');
 }
}
CaseFactory.$markImplementor(/**@type {Function}*/ (CaseFactory));
$Util.$setClassMetadataForInterface(CaseFactory, "org.pepstock.charba.showcase.j2cl.cases.CaseFactory");

exports = CaseFactory;

//# sourceMappingURL=CaseFactory.js.map
