goog.module('org.pepstock.charba.client.annotation.listeners.ClickCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ClickCallback = goog.require('org.pepstock.charba.client.annotation.listeners.ClickCallback$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');

/**
 * @implements {ClickCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(IsChart, AbstractAnnotation):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(IsChart, AbstractAnnotation):void}*/
  this.f_fn__org_pepstock_charba_client_annotation_listeners_ClickCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_annotation_listeners_ClickCallback_$LambdaAdaptor__org_pepstock_charba_client_annotation_listeners_ClickCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_annotation_listeners_ClickCallback_$LambdaAdaptor__org_pepstock_charba_client_annotation_listeners_ClickCallback_$JsFunction(/** ?function(IsChart, AbstractAnnotation):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_annotation_listeners_ClickCallback_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onClick__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_annotation_AbstractAnnotation(/** IsChart */ arg0, /** AbstractAnnotation */ arg1) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_annotation_listeners_ClickCallback_$LambdaAdaptor;
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
ClickCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.annotation.listeners.ClickCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=ClickCallback$$LambdaAdaptor.js.map
