goog.module('org.pepstock.charba.client.annotation.listeners.EnterCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const EnterCallback = goog.require('org.pepstock.charba.client.annotation.listeners.EnterCallback$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');

/**
 * @implements {EnterCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(IsChart, AbstractAnnotation):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(IsChart, AbstractAnnotation):void}*/
  this.f_fn__org_pepstock_charba_client_annotation_listeners_EnterCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_annotation_listeners_EnterCallback_$LambdaAdaptor__org_pepstock_charba_client_annotation_listeners_EnterCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_annotation_listeners_EnterCallback_$LambdaAdaptor__org_pepstock_charba_client_annotation_listeners_EnterCallback_$JsFunction(/** ?function(IsChart, AbstractAnnotation):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_annotation_listeners_EnterCallback_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onEnter__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_annotation_AbstractAnnotation(/** IsChart */ arg0, /** AbstractAnnotation */ arg1) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_annotation_listeners_EnterCallback_$LambdaAdaptor;
   $function(arg0, arg1);
  }
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
EnterCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.annotation.listeners.EnterCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=EnterCallback$$LambdaAdaptor.js.map
