goog.module('org.pepstock.charba.client.callbacks.FromCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FromCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<*, DatasetContext>}
 */
class FromCallback {
 /** @return {FromCallback} */
 static $adapt(/** ?function(DatasetContext):* */ fn) {
  FromCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  FromCallback.$clinit = () =>{};
  FromCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_FromCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_FromCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.FromCallback.$LambdaAdaptor$impl');
 }
}
FromCallback.$markImplementor(/**@type {Function}*/ (FromCallback));
$Util.$setClassMetadataForInterface(FromCallback, "org.pepstock.charba.client.callbacks.FromCallback");

exports = FromCallback;

//# sourceMappingURL=FromCallback.js.map
