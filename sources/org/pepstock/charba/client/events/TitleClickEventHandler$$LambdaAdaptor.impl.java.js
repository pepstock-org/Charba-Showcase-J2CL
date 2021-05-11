goog.module('org.pepstock.charba.client.events.TitleClickEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TitleClickEventHandler = goog.require('org.pepstock.charba.client.events.TitleClickEventHandler$impl');

let TitleClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.TitleClickEvent$impl');

/**
 * @implements {TitleClickEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(TitleClickEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(TitleClickEvent):void}*/
  this.f_fn__org_pepstock_charba_client_events_TitleClickEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_events_TitleClickEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_TitleClickEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_events_TitleClickEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_TitleClickEventHandler_$JsFunction(/** ?function(TitleClickEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_events_TitleClickEventHandler_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onClick__org_pepstock_charba_client_events_TitleClickEvent(/** TitleClickEvent */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_events_TitleClickEventHandler_$LambdaAdaptor;
   $function(arg0);
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
TitleClickEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.events.TitleClickEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=TitleClickEventHandler$$LambdaAdaptor.js.map
