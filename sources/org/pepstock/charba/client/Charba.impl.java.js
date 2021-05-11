goog.module('org.pepstock.charba.client.Charba$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let EmbeddedResources = goog.forwardDeclare('org.pepstock.charba.client.resources.EmbeddedResources$impl');
let ResourcesType = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourcesType$impl');

class Charba extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Charba} */
 static $create__() {
  let $instance = new Charba();
  $instance.$ctor__org_pepstock_charba_client_Charba__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_Charba__() {
  this.$ctor__java_lang_Object__();
 }
 
 static m_enable__() {
  Charba.$clinit();
  Charba.m_enable__boolean(true);
 }
 
 static m_enable__boolean(/** boolean */ loadDateTimeLibrary) {
  Charba.$clinit();
  if (!ResourcesType.m_isInjected__()) {
   let envelop = /**@type {!ChartEnvelop<EmbeddedResources>}*/ (ChartEnvelop.$create__java_lang_Object(loadDateTimeLibrary ? EmbeddedResources.f_INSTANCE__org_pepstock_charba_client_resources_EmbeddedResources : EmbeddedResources.f_INSTANCE_WITHOUT_DATE_LIBRARY__org_pepstock_charba_client_resources_EmbeddedResources));
   ResourcesType.m_setResources__org_pepstock_charba_client_ChartEnvelop(envelop);
  }
 }
 
 static $clinit() {
  Charba.$clinit = () =>{};
  Charba.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Charba;
 }
 
 static $loadModules() {
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  EmbeddedResources = goog.module.get('org.pepstock.charba.client.resources.EmbeddedResources$impl');
  ResourcesType = goog.module.get('org.pepstock.charba.client.resources.ResourcesType$impl');
 }
}
$Util.$setClassMetadata(Charba, "org.pepstock.charba.client.Charba");

exports = Charba;

//# sourceMappingURL=Charba.js.map
