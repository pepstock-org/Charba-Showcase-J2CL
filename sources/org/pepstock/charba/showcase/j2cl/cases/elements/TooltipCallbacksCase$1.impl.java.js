goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.TooltipCallbacksCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TooltipFooterCallback = goog.require('org.pepstock.charba.client.callbacks.TooltipFooterCallback$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');
let TooltipCallbacksCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.TooltipCallbacksCase$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {TooltipFooterCallback}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {TooltipCallbacksCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipCallbacksCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipCallbacksCase(/** TooltipCallbacksCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipCallbacksCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipCallbacksCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipCallbacksCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipCallbacksCase(/** TooltipCallbacksCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipCallbacksCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {List<?string>} */
 m_onFooter__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {
  let sum = 0;
  for (let $iterator = items.m_iterator__(); $iterator.m_hasNext__(); ) {
   let item = /**@type {TooltipItem}*/ ($Casts.$to($iterator.m_next__(), TooltipItem));
   {
    let dataset = /**@type {Dataset}*/ ($Casts.$to(chart.m_getData__().m_getDatasets__().getAtIndex(item.m_getDatasetIndex__()), Dataset));
    sum += Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(dataset.m_getData__().getAtIndex(item.m_getDataIndex__()), Double)));
   }
  }
  return /**@type {List<?string>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<?string>}*/ ($Arrays.$init(["Sum: " + sum], j_l_String))));
 }
 /** @override @return {List<?string>} */
 m_onBeforeFooter__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {
  return null;
 }
 /** @override @return {List<?string>} */
 m_onAfterFooter__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {
  return null;
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
  TooltipFooterCallback.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  TooltipItem = goog.module.get('org.pepstock.charba.client.items.TooltipItem$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
TooltipFooterCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.elements.TooltipCallbacksCase$1");

exports = $1;

//# sourceMappingURL=TooltipCallbacksCase$1.js.map
