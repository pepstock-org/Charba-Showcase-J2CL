goog.module('org.pepstock.charba.client.events.TitleLeaveEventHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TitleLeaveEventHandler = goog.require('org.pepstock.charba.client.events.TitleLeaveEventHandler$impl');

let TitleLeaveEvent = goog.forwardDeclare('org.pepstock.charba.client.events.TitleLeaveEvent$impl');

/**
 * @implements {TitleLeaveEventHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(TitleLeaveEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(TitleLeaveEvent):void}*/
  this.f_fn__org_pepstock_charba_client_events_TitleLeaveEventHandler_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_events_TitleLeaveEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_TitleLeaveEventHandler_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_events_TitleLeaveEventHandler_$LambdaAdaptor__org_pepstock_charba_client_events_TitleLeaveEventHandler_$JsFunction(/** ?function(TitleLeaveEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_events_TitleLeaveEventHandler_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onLeave__org_pepstock_charba_client_events_TitleLeaveEvent(/** TitleLeaveEvent */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_events_TitleLeaveEventHandler_$LambdaAdaptor;
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
TitleLeaveEventHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.events.TitleLeaveEventHandler$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=TitleLeaveEventHandler$$LambdaAdaptor.js.map
