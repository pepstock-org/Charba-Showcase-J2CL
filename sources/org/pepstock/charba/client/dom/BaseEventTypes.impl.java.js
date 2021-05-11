goog.module('org.pepstock.charba.client.dom.BaseEventTypes$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class BaseEventTypes extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BaseEventTypes} */
 static $create__() {
  let $instance = new BaseEventTypes();
  $instance.$ctor__org_pepstock_charba_client_dom_BaseEventTypes__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_dom_BaseEventTypes__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  BaseEventTypes.$clinit = () =>{};
  BaseEventTypes.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseEventTypes;
 }
 
 static $loadModules() {}
}
/**@const {?string}*/
BaseEventTypes.f_EVENT_MOUSE__org_pepstock_charba_client_dom_BaseEventTypes = "MouseEvent";
/**@const {?string}*/
BaseEventTypes.f_EVENT_TOUCH__org_pepstock_charba_client_dom_BaseEventTypes = "TouchEvent";
/**@const {?string}*/
BaseEventTypes.f_CLICK__org_pepstock_charba_client_dom_BaseEventTypes = "click";
/**@const {?string}*/
BaseEventTypes.f_DBL_CLICK__org_pepstock_charba_client_dom_BaseEventTypes = "dblclick";
/**@const {?string}*/
BaseEventTypes.f_MOUSE_DOWN__org_pepstock_charba_client_dom_BaseEventTypes = "mousedown";
/**@const {?string}*/
BaseEventTypes.f_MOUSE_MOVE__org_pepstock_charba_client_dom_BaseEventTypes = "mousemove";
/**@const {?string}*/
BaseEventTypes.f_MOUSE_OUT__org_pepstock_charba_client_dom_BaseEventTypes = "mouseout";
/**@const {?string}*/
BaseEventTypes.f_MOUSE_LEAVE__org_pepstock_charba_client_dom_BaseEventTypes = "mouseleave";
/**@const {?string}*/
BaseEventTypes.f_MOUSE_OVER__org_pepstock_charba_client_dom_BaseEventTypes = "mouseover";
/**@const {?string}*/
BaseEventTypes.f_MOUSE_UP__org_pepstock_charba_client_dom_BaseEventTypes = "mouseup";
/**@const {?string}*/
BaseEventTypes.f_MOUSE_WHEEL__org_pepstock_charba_client_dom_BaseEventTypes = "mousewheel";
/**@const {?string}*/
BaseEventTypes.f_TOUCH_CANCEL__org_pepstock_charba_client_dom_BaseEventTypes = "touchcancel";
/**@const {?string}*/
BaseEventTypes.f_TOUCH_END__org_pepstock_charba_client_dom_BaseEventTypes = "touchend";
/**@const {?string}*/
BaseEventTypes.f_TOUCH_MOVE__org_pepstock_charba_client_dom_BaseEventTypes = "touchmove";
/**@const {?string}*/
BaseEventTypes.f_TOUCH_START__org_pepstock_charba_client_dom_BaseEventTypes = "touchstart";
/**@const {?string}*/
BaseEventTypes.f_CONTEXT_MENU__org_pepstock_charba_client_dom_BaseEventTypes = "contextmenu";
$Util.$setClassMetadata(BaseEventTypes, "org.pepstock.charba.client.dom.BaseEventTypes");

exports = BaseEventTypes;

//# sourceMappingURL=BaseEventTypes.js.map
