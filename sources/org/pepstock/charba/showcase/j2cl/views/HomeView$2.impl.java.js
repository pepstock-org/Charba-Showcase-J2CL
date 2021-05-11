goog.module('org.pepstock.charba.showcase.j2cl.views.HomeView.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TickCallback = goog.require('org.pepstock.charba.client.callbacks.TickCallback$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let HomeView = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.HomeView$impl');

/**
 * @implements {TickCallback}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HomeView}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_views_HomeView_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_views_HomeView(/** HomeView */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_HomeView_2__org_pepstock_charba_showcase_j2cl_views_HomeView($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_HomeView_2__org_pepstock_charba_showcase_j2cl_views_HomeView(/** HomeView */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_views_HomeView_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_onCallback__org_pepstock_charba_client_configuration_Axis__double__int__java_util_List(/** Axis */ axis, /** number */ value, /** number */ index, /** List<?number> */ values) {
  if (value >= 1000) {
   let thousands = value / 1000;
   return j_l_String.m_valueOf__java_lang_Object(Utilities.m_applyPrecision__double__int(thousands, 1)) + " MB";
  }
  return value + " KB";
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
 }
}
TickCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.views.HomeView$2");

exports = $2;

//# sourceMappingURL=HomeView$2.js.map
