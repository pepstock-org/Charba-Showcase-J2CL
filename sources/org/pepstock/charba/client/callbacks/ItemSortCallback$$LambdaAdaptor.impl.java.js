goog.module('org.pepstock.charba.client.callbacks.ItemSortCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ItemSortCallback = goog.require('org.pepstock.charba.client.callbacks.ItemSortCallback$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');

/**
 * @template T
 * @implements {ItemSortCallback<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(IsChart, T, T):number */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(IsChart, T, T):number}*/
  this.f_fn__org_pepstock_charba_client_callbacks_ItemSortCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_ItemSortCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_ItemSortCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_ItemSortCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_ItemSortCallback_$JsFunction(/** ?function(IsChart, T, T):number */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_ItemSortCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {number} */
 m_onItemSort__org_pepstock_charba_client_IsChart__java_lang_Object__java_lang_Object(/** IsChart */ arg0, /** T */ arg1, /** T */ arg2) {
  let /** ?function(IsChart, T, T):number */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_ItemSortCallback_$LambdaAdaptor, $function(arg0, arg1, arg2));
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
ItemSortCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.ItemSortCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=ItemSortCallback$$LambdaAdaptor.js.map
