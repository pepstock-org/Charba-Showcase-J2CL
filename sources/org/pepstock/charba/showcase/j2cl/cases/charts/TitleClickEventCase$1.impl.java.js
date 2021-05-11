goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.TitleClickEventCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TitleClickEventHandler = goog.require('org.pepstock.charba.client.events.TitleClickEventHandler$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let TitleClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.TitleClickEvent$impl');
let TitleClickEventCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.TitleClickEventCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {TitleClickEventHandler}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {TitleClickEventCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_TitleClickEventCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_charts_TitleClickEventCase(/** TitleClickEventCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_TitleClickEventCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_TitleClickEventCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_TitleClickEventCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_TitleClickEventCase(/** TitleClickEventCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_TitleClickEventCase_1 = $outer_this;
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
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_TitleClickEventCase_1.f_mylog__org_pepstock_charba_showcase_j2cl_cases_charts_TitleClickEventCase_.m_addLogEvent__java_lang_String("> CLICK: event ScreenX: " + event.m_getNativeEvent__().screenX + ", ScreenY:" + event.m_getNativeEvent__().screenY);
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
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
TitleClickEventHandler.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.charts.TitleClickEventCase$1");

exports = $1;

//# sourceMappingURL=TitleClickEventCase$1.js.map
