goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.PointerLineCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TitleClickEventHandler = goog.require('org.pepstock.charba.client.events.TitleClickEventHandler$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let TitleClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.TitleClickEvent$impl');
let PointerLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.PointerLineCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {TitleClickEventHandler}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {PointerLineCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase(/** PointerLineCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_2__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_2__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase(/** PointerLineCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onClick__org_pepstock_charba_client_events_TitleClickEvent(/** TitleClickEvent */ event) {
  let chart = /**@type {IsChart}*/ ($Casts.$to(event.m_getSource__(), IsChart));
  let values = chart.m_getOptions__().m_getTitle__().m_getText__();
  let title = StringBuilder.$create__();
  if (!values.isEmpty()) {
   for (let $iterator = values.m_iterator__(); $iterator.m_hasNext__(); ) {
    let value = /**@type {?string}*/ ($Casts.$to($iterator.m_next__(), j_l_String));
    {
     title.m_append__java_lang_String(value).m_append__java_lang_String(" ");
    }
   }
  }
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("Title: ").m_append__java_lang_String(title.toString());
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_2.f_mylog__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_addLogEvent__java_lang_String(sb.toString());
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
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
TitleClickEventHandler.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.plugins.PointerLineCase$2");

exports = $2;

//# sourceMappingURL=PointerLineCase$2.js.map
