goog.module('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

/**
 * @interface
 */
class CaseItem {
 /** @abstract @return {?string} */
 m_getLabel__() {}
 /** @abstract @return {CaseFactory} */
 m_getFactory__() {}
 
 static $clinit() {
  CaseItem.$clinit = () =>{};
  CaseItem.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_showcase_j2cl_cases_CaseItem = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_showcase_j2cl_cases_CaseItem;
 }
 
 static $loadModules() {}
}
CaseItem.$markImplementor(/**@type {Function}*/ (CaseItem));
$Util.$setClassMetadataForInterface(CaseItem, "org.pepstock.charba.showcase.j2cl.cases.CaseItem");

exports = CaseItem;

//# sourceMappingURL=CaseItem.js.map
