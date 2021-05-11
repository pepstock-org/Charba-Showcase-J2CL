goog.module('org.pepstock.charba.client.callbacks.FontCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FontCallback = goog.require('org.pepstock.charba.client.callbacks.FontCallback$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let FontItem = goog.forwardDeclare('org.pepstock.charba.client.items.FontItem$impl');

/**
 * @template C
 * @implements {FontCallback<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(C):FontItem */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(C):FontItem}*/
  this.f_fn__org_pepstock_charba_client_callbacks_FontCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_FontCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_FontCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_FontCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_FontCallback_$JsFunction(/** ?function(C):FontItem */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_FontCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {FontItem} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** C */ arg0) {
  let /** ?function(C):FontItem */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_FontCallback_$LambdaAdaptor, $function(arg0));
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
FontCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.FontCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=FontCallback$$LambdaAdaptor.js.map
