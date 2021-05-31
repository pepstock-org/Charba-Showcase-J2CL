goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.AnimationProgressiveLineCase.From$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FromCallback = goog.require('org.pepstock.charba.client.callbacks.FromCallback$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let DatasetElement = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetElement$impl');
let ScaleItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {FromCallback}
 */
class From extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<Integer, List<DatasetElement>>}*/
  this.f_elements__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_From_;
 }
 /** @return {!From} */
 static $create__() {
  From.$clinit();
  let $instance = new From();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_From__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_From__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_From();
 }
 /** @return {?number} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ context) {
  let chart = context.m_getChart__();
  if (context.m_getDataIndex__() <= 0) {
   let scale = /**@type {ScaleItem}*/ ($Casts.$to(chart.m_getNode__().m_getScales__().m_getItems__().get(DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId.m_value__()), ScaleItem));
   return scale.m_getPixelForValue__double(100);
  }
  let element = /**@type {DatasetElement}*/ ($Casts.$to(/**@type {List<DatasetElement>}*/ ($Casts.$to(this.f_elements__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_From_.m_computeIfAbsent__java_lang_Object__java_util_function_Function(Integer.m_valueOf__int(context.m_getDatasetIndex__()), j_u_function_Function.$adapt((mapKey) =>{
   let mapKey_1 = /**@type {Integer}*/ ($Casts.$to(mapKey, Integer));
   return chart.m_getDatasetItem__int(context.m_getDatasetIndex__()).m_getElements__();
  })), List)).getAtIndex(context.m_getDataIndex__() - 1 | 0), DatasetElement));
  return element.m_getY__();
 }
 //Bridge method.
 /** @override @return {?number} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** DatasetContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/**@type {DatasetContext}*/ ($Casts.$to(arg0, DatasetContext)));
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_From() {
  this.f_elements__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_From_ = /**@type {!HashMap<Integer, List<DatasetElement>>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  From.$clinit = () =>{};
  From.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof From;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  List = goog.module.get('java.util.List$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  DatasetContext = goog.module.get('org.pepstock.charba.client.callbacks.DatasetContext$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  DatasetElement = goog.module.get('org.pepstock.charba.client.items.DatasetElement$impl');
  ScaleItem = goog.module.get('org.pepstock.charba.client.items.ScaleItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
FromCallback.$markImplementor(From);
$Util.$setClassMetadata(From, "org.pepstock.charba.showcase.j2cl.cases.elements.AnimationProgressiveLineCase$From");

exports = From;

//# sourceMappingURL=AnimationProgressiveLineCase$From.js.map
