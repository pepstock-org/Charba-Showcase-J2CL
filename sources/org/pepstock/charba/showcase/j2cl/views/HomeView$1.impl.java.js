goog.module('org.pepstock.charba.showcase.j2cl.views.HomeView.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DatasetSelectionEventHandler = goog.require('org.pepstock.charba.client.events.DatasetSelectionEventHandler$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let DatasetSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetSelectionEvent$impl');
let HomeView = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.HomeView$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {DatasetSelectionEventHandler}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HomeView}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_views_HomeView_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_views_HomeView(/** HomeView */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_HomeView_1__org_pepstock_charba_showcase_j2cl_views_HomeView($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_HomeView_1__org_pepstock_charba_showcase_j2cl_views_HomeView(/** HomeView */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_views_HomeView_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onSelect__org_pepstock_charba_client_events_DatasetSelectionEvent(/** DatasetSelectionEvent */ event) {
  let chart = /**@type {IsChart}*/ ($Casts.$to(event.m_getSource__(), IsChart));
  let labels = chart.m_getData__().m_getLabels__();
  let version = labels.m_getString__int(event.m_getItem__().m_getIndex__());
  let sb = StringBuilder.$create__java_lang_String(HomeView.f_LINK_GITHUB_VERSION__org_pepstock_charba_showcase_j2cl_views_HomeView_);
  sb.m_append__java_lang_String(version);
  goog.global.window.open(sb.toString(), "_blank", "");
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
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  HomeView = goog.module.get('org.pepstock.charba.showcase.j2cl.views.HomeView$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
DatasetSelectionEventHandler.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.views.HomeView$1");

exports = $1;

//# sourceMappingURL=HomeView$1.js.map
