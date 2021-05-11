goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationsEventsOnTimeSeriesCase.MyEventsHandler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ClickCallback = goog.require('org.pepstock.charba.client.annotation.listeners.ClickCallback$impl');
const DoubleClickCallback = goog.require('org.pepstock.charba.client.annotation.listeners.DoubleClickCallback$impl');
const EnterCallback = goog.require('org.pepstock.charba.client.annotation.listeners.EnterCallback$impl');
const LeaveCallback = goog.require('org.pepstock.charba.client.annotation.listeners.LeaveCallback$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
let AnnotationsEventsOnTimeSeriesCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationsEventsOnTimeSeriesCase$impl');

/**
 * @implements {ClickCallback}
 * @implements {DoubleClickCallback}
 * @implements {LeaveCallback}
 * @implements {EnterCallback}
 */
class MyEventsHandler extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {AnnotationsEventsOnTimeSeriesCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsEventsOnTimeSeriesCase_MyEventsHandler;
 }
 /** @return {!MyEventsHandler} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsEventsOnTimeSeriesCase(/** AnnotationsEventsOnTimeSeriesCase */ $outer_this) {
  MyEventsHandler.$clinit();
  let $instance = new MyEventsHandler();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsEventsOnTimeSeriesCase_MyEventsHandler__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsEventsOnTimeSeriesCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsEventsOnTimeSeriesCase_MyEventsHandler__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsEventsOnTimeSeriesCase(/** AnnotationsEventsOnTimeSeriesCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsEventsOnTimeSeriesCase_MyEventsHandler = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onEnter__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_annotation_AbstractAnnotation(/** IsChart */ chart, /** AbstractAnnotation */ annotation) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsEventsOnTimeSeriesCase_MyEventsHandler.f_mylog__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsEventsOnTimeSeriesCase_.m_addLogEvent__java_lang_String("> Enter on annotation '" + j_l_String.m_valueOf__java_lang_Object(annotation.m_getId__().m_value__()) + "' type " + j_l_String.m_valueOf__java_lang_Object(annotation.m_getType__()));
 }
 /** @override */
 m_onLeave__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_annotation_AbstractAnnotation(/** IsChart */ chart, /** AbstractAnnotation */ annotation) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsEventsOnTimeSeriesCase_MyEventsHandler.f_mylog__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsEventsOnTimeSeriesCase_.m_addLogEvent__java_lang_String("> Leave on annotation '" + j_l_String.m_valueOf__java_lang_Object(annotation.m_getId__().m_value__()) + "' type " + j_l_String.m_valueOf__java_lang_Object(annotation.m_getType__()));
 }
 /** @override */
 m_onDoubleClick__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_annotation_AbstractAnnotation(/** IsChart */ chart, /** AbstractAnnotation */ annotation) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsEventsOnTimeSeriesCase_MyEventsHandler.f_mylog__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsEventsOnTimeSeriesCase_.m_addLogEvent__java_lang_String("> Double click on annotation '" + j_l_String.m_valueOf__java_lang_Object(annotation.m_getId__().m_value__()) + "' type " + j_l_String.m_valueOf__java_lang_Object(annotation.m_getType__()));
 }
 /** @override */
 m_onClick__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_annotation_AbstractAnnotation(/** IsChart */ chart, /** AbstractAnnotation */ annotation) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsEventsOnTimeSeriesCase_MyEventsHandler.f_mylog__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationsEventsOnTimeSeriesCase_.m_addLogEvent__java_lang_String("> Click on annotation '" + j_l_String.m_valueOf__java_lang_Object(annotation.m_getId__().m_value__()) + "' type " + j_l_String.m_valueOf__java_lang_Object(annotation.m_getType__()));
 }
 
 static $clinit() {
  MyEventsHandler.$clinit = () =>{};
  MyEventsHandler.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MyEventsHandler;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
}
ClickCallback.$markImplementor(MyEventsHandler);
DoubleClickCallback.$markImplementor(MyEventsHandler);
LeaveCallback.$markImplementor(MyEventsHandler);
EnterCallback.$markImplementor(MyEventsHandler);
$Util.$setClassMetadata(MyEventsHandler, "org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationsEventsOnTimeSeriesCase$MyEventsHandler");

exports = MyEventsHandler;

//# sourceMappingURL=AnnotationsEventsOnTimeSeriesCase$MyEventsHandler.js.map
