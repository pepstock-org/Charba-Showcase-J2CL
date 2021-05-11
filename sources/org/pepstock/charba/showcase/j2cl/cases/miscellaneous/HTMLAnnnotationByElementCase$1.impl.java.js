goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.HTMLAnnnotationByElementCase.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPlugin = goog.require('org.pepstock.charba.client.plugins.AbstractPlugin$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let Context2dItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
let DatasetElement = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetElement$impl');
let AnnotationBuilder = goog.forwardDeclare('org.pepstock.charba.client.utils.AnnotationBuilder$impl');
let HTMLAnnnotationByElementCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.HTMLAnnnotationByElementCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $1 extends AbstractPlugin {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLAnnnotationByElementCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase__java_lang_String(/** HTMLAnnnotationByElementCase */ $outer_this, /** ?string */ $_0) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase__java_lang_String($outer_this, $_0);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase__java_lang_String(/** HTMLAnnnotationByElementCase */ $outer_this, /** ?string */ $_0) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_1 = $outer_this;
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPlugin__java_lang_String($_0);
 }
 /** @override */
 m_onAfterDraw__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  let ctx = $Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(chart.m_getCanvas__());
  let item = chart.m_getDatasetItem__int(0);
  let elem = /**@type {DatasetElement}*/ ($Casts.$to(item.m_getElements__().getAtIndex(3), DatasetElement));
  let img = AnnotationBuilder.m_build__java_lang_String__double__double($1.f_ANNOTATION__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_1_, 300, 64);
  let x = elem.m_getX__() - elem.m_getWidth__() / 2;
  let y = elem.m_getY__() - img.height - 10;
  Context2dItem_$Overlay.m_drawImage__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_Img__double__double(ctx, img, x, y);
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  AbstractPlugin.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  Context2dItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
  DatasetElement = goog.module.get('org.pepstock.charba.client.items.DatasetElement$impl');
  AnnotationBuilder = goog.module.get('org.pepstock.charba.client.utils.AnnotationBuilder$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {?string}*/
$1.f_ANNOTATION__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationByElementCase_1_ = "<div style=\"border: 1px solid; border-color: rgba(255, 29, 29); padding: 6px; -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px; background: rgba(255, 137, 137); color: black; -webkit-box-shadow: 0 2px 4px rgba(0,0,0,0.2); box-shadow: 0 2px 4px rgba(0,0,0,0.2);\">\t\t\t  <div class=\"popupContent\">\t\t\t    <table cellspacing=\"2\" cellpadding=\"0\">\t\t\t\t  <tbody>\t\t\t\t    <tr>\t\t\t\t\t  <td style=\"vertical-align: top;\" align=\"left\">\t\t\t\t\t    <div style=\"font-size: 16px; font-weight: bold;\">Issue 26</div>\t\t\t\t\t  </td>\t\t\t\t\t</tr>\t\t\t\t\t<tr>\t\t\t\t\t  <td style=\"vertical-align: top;\" align=\"left\">\t\t\t\t\t    <div>This is a description of issue 26</div>\t\t\t\t      </td>\t\t\t\t\t</tr>\t\t\t      </tbody>\t\t\t\t</table>\t\t\t  </div>\t\t\t</div>";
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.HTMLAnnnotationByElementCase$1");

exports = $1;

//# sourceMappingURL=HTMLAnnnotationByElementCase$1.js.map
