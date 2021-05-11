goog.module('org.pepstock.charba.showcase.j2cl.views.AbstractView$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @abstract
 */
class AbstractView extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLElement}*/
  this.f_content__org_pepstock_charba_showcase_j2cl_views_AbstractView;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_AbstractView__elemental2_dom_HTMLElement(/** HTMLElement */ content) {
  this.$ctor__java_lang_Object__();
  this.f_content__org_pepstock_charba_showcase_j2cl_views_AbstractView = content;
 }
 
 m_clearPreviousChart__() {
  while (!$Equality.$same(this.f_content__org_pepstock_charba_showcase_j2cl_views_AbstractView.firstChild, null)) {
   this.f_content__org_pepstock_charba_showcase_j2cl_views_AbstractView.removeChild(this.f_content__org_pepstock_charba_showcase_j2cl_views_AbstractView.firstChild);
  }
 }
 
 static $clinit() {
  AbstractView.$clinit = () =>{};
  AbstractView.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractView;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
$Util.$setClassMetadata(AbstractView, "org.pepstock.charba.showcase.j2cl.views.AbstractView");

exports = AbstractView;

//# sourceMappingURL=AbstractView.js.map
