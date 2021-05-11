goog.module('org.pepstock.charba.client.ConfigurationElement.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationElement = goog.require('org.pepstock.charba.client.ConfigurationElement$impl');

let Configuration = goog.forwardDeclare('org.pepstock.charba.client.Configuration$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');

/**
 * @implements {ConfigurationElement}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(IsChart, Configuration):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(IsChart, Configuration):void}*/
  this.f_fn__org_pepstock_charba_client_ConfigurationElement_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_ConfigurationElement_$LambdaAdaptor__org_pepstock_charba_client_ConfigurationElement_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_ConfigurationElement_$LambdaAdaptor__org_pepstock_charba_client_ConfigurationElement_$JsFunction(/** ?function(IsChart, Configuration):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_ConfigurationElement_$LambdaAdaptor = fn;
 }
 /** @override */
 m_load__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_Configuration(/** IsChart */ arg0, /** Configuration */ arg1) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_ConfigurationElement_$LambdaAdaptor;
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
ConfigurationElement.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.ConfigurationElement$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=ConfigurationElement$$LambdaAdaptor.js.map
