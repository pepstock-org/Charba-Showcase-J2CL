goog.module('org.pepstock.charba.showcase.j2cl.views.ElementsView.AnimationsCase.$4$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');
let AnimationCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.AnimationCase$impl');

/**
 * @implements {CaseFactory}
 */
class $4 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$4} */
 static $create__() {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase_4__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ElementsView_AnimationsCase_4__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return AnimationCase.$create__();
 }
 
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 static $loadModules() {
  AnimationCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.elements.AnimationCase$impl');
 }
}
CaseFactory.$markImplementor($4);
$Util.$setClassMetadata($4, "org.pepstock.charba.showcase.j2cl.views.ElementsView$AnimationsCase$4");

exports = $4;

//# sourceMappingURL=ElementsView$AnimationsCase$4.js.map
