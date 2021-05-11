goog.module('org.pepstock.charba.client.datalabels.JsDataLabelsHelper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');

class JsDataLabelsHelper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!JsDataLabelsHelper} */
 static $create__() {
  let $instance = new JsDataLabelsHelper();
  $instance.$ctor__org_pepstock_charba_client_datalabels_JsDataLabelsHelper__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_datalabels_JsDataLabelsHelper__() {
  this.$ctor__java_lang_Object__();
  JsHelper.m_get__();
 }
 /** @return {JsDataLabelsHelper} */
 static m_get__() {
  JsDataLabelsHelper.$clinit();
  return JsDataLabelsHelper.f_INSTANCE__org_pepstock_charba_client_datalabels_JsDataLabelsHelper_;
 }
 
 m_register___$pp_org_pepstock_charba_client_datalabels() {
  CharbaJsDataLabelsHelper.register();
 }
 
 static $clinit() {
  JsDataLabelsHelper.$clinit = () =>{};
  JsDataLabelsHelper.$loadModules();
  j_l_Object.$clinit();
  JsDataLabelsHelper.f_INSTANCE__org_pepstock_charba_client_datalabels_JsDataLabelsHelper_ = JsDataLabelsHelper.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsDataLabelsHelper;
 }
 
 static $loadModules() {
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
 }
}
/**@type {JsDataLabelsHelper}*/
JsDataLabelsHelper.f_INSTANCE__org_pepstock_charba_client_datalabels_JsDataLabelsHelper_;
$Util.$setClassMetadata(JsDataLabelsHelper, "org.pepstock.charba.client.datalabels.JsDataLabelsHelper");

exports = JsDataLabelsHelper;

//# sourceMappingURL=JsDataLabelsHelper.js.map
