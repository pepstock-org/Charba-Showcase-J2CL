goog.module('org.pepstock.charba.client.defaults.globals.DefaultOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractDefaultOptions = goog.require('org.pepstock.charba.client.defaults.globals.AbstractDefaultOptions$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Event = goog.forwardDeclare('org.pepstock.charba.client.enums.Event$impl');
let IndexAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.IndexAxis$impl');
let CLocale = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocale$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

class DefaultOptions extends AbstractDefaultOptions {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultOptions} */
 static $create__() {
  DefaultOptions.$clinit();
  let $instance = new DefaultOptions();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultOptions__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultOptions__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptions__();
 }
 /** @override @return {List<Event>} */
 m_getEvents__() {
  return DefaultOptions.f_DEFAULT_EVENTS__org_pepstock_charba_client_defaults_globals_DefaultOptions_;
 }
 /** @override @return {CLocale} */
 m_getLocale__() {
  return CLocale.m_getDefault__();
 }
 /** @override @return {boolean} */
 m_isResponsive__() {
  return DefaultOptions.f_DEFAULT_RESPONSIVE__org_pepstock_charba_client_defaults_globals_DefaultOptions_;
 }
 /** @override @return {boolean} */
 m_isMaintainAspectRatio__() {
  return DefaultOptions.f_DEFAULT_MAINTAIN_ASPECT_RATIO__org_pepstock_charba_client_defaults_globals_DefaultOptions_;
 }
 /** @override @return {number} */
 m_getAspectRatio__() {
  return DefaultOptions.f_DEFAULT_ASPECT_RATIO__org_pepstock_charba_client_defaults_globals_DefaultOptions_;
 }
 /** @override @return {number} */
 m_getResizeDelay__() {
  return DefaultOptions.f_DEFAULT_RESIZE_DELAY__org_pepstock_charba_client_defaults_globals_DefaultOptions_;
 }
 /** @override @return {number} */
 m_getDevicePixelRatio__() {
  return window.devicePixelRatio;
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return DefaultOptions.f_DEFAULT_COLOR__org_pepstock_charba_client_defaults_globals_DefaultOptions_;
 }
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return DefaultOptions.f_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_defaults_globals_DefaultOptions_;
 }
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return DefaultOptions.f_DEFAULT_BORDER_COLOR__org_pepstock_charba_client_defaults_globals_DefaultOptions_;
 }
 /** @override @return {boolean} */
 m_isShowLine__() {
  return DefaultOptions.f_DEFAULT_SHOW_LINE__org_pepstock_charba_client_defaults_globals_DefaultOptions_;
 }
 /** @override @return {boolean} */
 m_isSpanGaps__() {
  return DefaultOptions.f_DEFAULT_SPAN_GAPS__org_pepstock_charba_client_defaults_globals_DefaultOptions_;
 }
 /** @override @return {number} */
 m_getCutout__() {
  return DefaultOptions.f_DEFAULT_CUTOUT__org_pepstock_charba_client_defaults_globals_DefaultOptions_;
 }
 /** @override @return {?string} */
 m_getCutoutPercentage__() {
  return DefaultOptions.f_DEFAULT_CUTOUT_PERCENTAGE__org_pepstock_charba_client_defaults_globals_DefaultOptions_;
 }
 /** @override @return {number} */
 m_getRadius__() {
  return DefaultOptions.f_DEFAULT_RADIUS__org_pepstock_charba_client_defaults_globals_DefaultOptions_;
 }
 /** @override @return {?string} */
 m_getRadiusPercentage__() {
  return DefaultOptions.f_DEFAULT_RADIUS_PERCENTAGE__org_pepstock_charba_client_defaults_globals_DefaultOptions_;
 }
 /** @override @return {number} */
 m_getRotation__() {
  return DefaultOptions.f_DEFAULT_ROTATION__org_pepstock_charba_client_defaults_globals_DefaultOptions_;
 }
 /** @override @return {number} */
 m_getCircumference__() {
  return DefaultOptions.f_DEFAULT_CIRCUMFERENCE__org_pepstock_charba_client_defaults_globals_DefaultOptions_;
 }
 /** @override @return {boolean} */
 m_isDrawOnAttach__() {
  return DefaultOptions.f_DEFAULT_DRAW_ON_ATTACH__org_pepstock_charba_client_defaults_globals_DefaultOptions_;
 }
 /** @override @return {boolean} */
 m_isDestroyOnDetach__() {
  return DefaultOptions.f_DEFAULT_DESTROY_ON_DETACH__org_pepstock_charba_client_defaults_globals_DefaultOptions_;
 }
 /** @override @return {boolean} */
 m_isSkipNull__() {
  return DefaultOptions.f_DEFAULT_SKIP_NULL__org_pepstock_charba_client_defaults_globals_DefaultOptions_;
 }
 /** @override @return {IndexAxis} */
 m_getIndexAxis__() {
  return IndexAxis.f_X__org_pepstock_charba_client_enums_IndexAxis;
 }
 
 static $clinit() {
  DefaultOptions.$clinit = () =>{};
  DefaultOptions.$loadModules();
  AbstractDefaultOptions.$clinit();
  DefaultOptions.f_DEFAULT_CUTOUT_PERCENTAGE__org_pepstock_charba_client_defaults_globals_DefaultOptions_ = Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
  DefaultOptions.f_DEFAULT_EVENTS__org_pepstock_charba_client_defaults_globals_DefaultOptions_ = /**@type {List<Event>}*/ (Collections.m_unmodifiableList__java_util_List(/**@type {List<Event>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(Event.m_values__()))));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultOptions;
 }
 
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Event = goog.module.get('org.pepstock.charba.client.enums.Event$impl');
  IndexAxis = goog.module.get('org.pepstock.charba.client.enums.IndexAxis$impl');
  CLocale = goog.module.get('org.pepstock.charba.client.intl.CLocale$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
/**@const {?string}*/
DefaultOptions.f_DEFAULT_BORDER_COLOR__org_pepstock_charba_client_defaults_globals_DefaultOptions_ = "rgba(0,0,0,0.1)";
/**@const {?string}*/
DefaultOptions.f_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_defaults_globals_DefaultOptions_ = "rgba(0,0,0,0.1)";
/**@const {?string}*/
DefaultOptions.f_DEFAULT_COLOR__org_pepstock_charba_client_defaults_globals_DefaultOptions_ = "#666";
/**@const {boolean}*/
DefaultOptions.f_DEFAULT_RESPONSIVE__org_pepstock_charba_client_defaults_globals_DefaultOptions_ = true;
/**@const {boolean}*/
DefaultOptions.f_DEFAULT_MAINTAIN_ASPECT_RATIO__org_pepstock_charba_client_defaults_globals_DefaultOptions_ = true;
/**@const {number}*/
DefaultOptions.f_DEFAULT_ASPECT_RATIO__org_pepstock_charba_client_defaults_globals_DefaultOptions_ = 2;
/**@const {number}*/
DefaultOptions.f_DEFAULT_RESIZE_DELAY__org_pepstock_charba_client_defaults_globals_DefaultOptions_ = 0;
/**@const {boolean}*/
DefaultOptions.f_DEFAULT_SHOW_LINE__org_pepstock_charba_client_defaults_globals_DefaultOptions_ = true;
/**@const {boolean}*/
DefaultOptions.f_DEFAULT_SKIP_NULL__org_pepstock_charba_client_defaults_globals_DefaultOptions_ = false;
/**@const {boolean}*/
DefaultOptions.f_DEFAULT_SPAN_GAPS__org_pepstock_charba_client_defaults_globals_DefaultOptions_ = false;
/**@const {number}*/
DefaultOptions.f_DEFAULT_CUTOUT__org_pepstock_charba_client_defaults_globals_DefaultOptions_ = NaN;
/**@type {?string}*/
DefaultOptions.f_DEFAULT_CUTOUT_PERCENTAGE__org_pepstock_charba_client_defaults_globals_DefaultOptions_;
/**@const {number}*/
DefaultOptions.f_DEFAULT_RADIUS__org_pepstock_charba_client_defaults_globals_DefaultOptions_ = NaN;
/**@const {?string}*/
DefaultOptions.f_DEFAULT_RADIUS_PERCENTAGE__org_pepstock_charba_client_defaults_globals_DefaultOptions_ = "100%";
/**@const {number}*/
DefaultOptions.f_DEFAULT_ROTATION__org_pepstock_charba_client_defaults_globals_DefaultOptions_ = 0;
/**@const {number}*/
DefaultOptions.f_DEFAULT_CIRCUMFERENCE__org_pepstock_charba_client_defaults_globals_DefaultOptions_ = 360;
/**@const {boolean}*/
DefaultOptions.f_DEFAULT_DRAW_ON_ATTACH__org_pepstock_charba_client_defaults_globals_DefaultOptions_ = true;
/**@const {boolean}*/
DefaultOptions.f_DEFAULT_DESTROY_ON_DETACH__org_pepstock_charba_client_defaults_globals_DefaultOptions_ = true;
/**@type {List<Event>}*/
DefaultOptions.f_DEFAULT_EVENTS__org_pepstock_charba_client_defaults_globals_DefaultOptions_;
$Util.$setClassMetadata(DefaultOptions, "org.pepstock.charba.client.defaults.globals.DefaultOptions");

exports = DefaultOptions;

//# sourceMappingURL=DefaultOptions.js.map
