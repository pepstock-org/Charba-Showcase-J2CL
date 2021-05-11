goog.module('org.pepstock.charba.client.controllers.ControllerTemplate$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class ControllerTemplate extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {StringBuilder}*/
  this.f_builder__org_pepstock_charba_client_controllers_ControllerTemplate_;
 }
 /** @return {!ControllerTemplate} */
 static $create__() {
  let $instance = new ControllerTemplate();
  $instance.$ctor__org_pepstock_charba_client_controllers_ControllerTemplate__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_controllers_ControllerTemplate__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_controllers_ControllerTemplate();
  for (let $array = ControllerTemplate.f_CONTENT__org_pepstock_charba_client_controllers_ControllerTemplate_, $index = 0; $index < $array.length; $index++) {
   let line = $array[$index];
   {
    this.f_builder__org_pepstock_charba_client_controllers_ControllerTemplate_.m_append__java_lang_String(line);
   }
  }
 }
 /** @return {ControllerTemplate} */
 static m_get__() {
  ControllerTemplate.$clinit();
  return ControllerTemplate.f_INSTANCE__org_pepstock_charba_client_controllers_ControllerTemplate_;
 }
 /** @return {?string} */
 m_getTemplate___$pp_org_pepstock_charba_client_controllers() {
  return this.f_builder__org_pepstock_charba_client_controllers_ControllerTemplate_.toString();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_controllers_ControllerTemplate() {
  this.f_builder__org_pepstock_charba_client_controllers_ControllerTemplate_ = StringBuilder.$create__();
 }
 
 static $clinit() {
  ControllerTemplate.$clinit = () =>{};
  ControllerTemplate.$loadModules();
  j_l_Object.$clinit();
  ControllerTemplate.f_CONTENT__org_pepstock_charba_client_controllers_ControllerTemplate_ = /**@type {!Array<?string>}*/ ($Arrays.$init(["class Charba{0} extends Chart.controllers.{1} {\n", "constructor(...args) {\n", "super(...args);\n", "}\n", "};\n", "Charba{0}.cloneDefaults = {2};\n", "Charba{0}.prototype.checkAndGetWrapper = function(property){var delegated = CharbaJsControllerHelper.wrappers.{0};if (typeof delegated !== 'undefined' && typeof delegated[property] === 'function'){return delegated;}return null;};\n", "Charba{0}.prototype.initialize = function() {var delegated = this.checkAndGetWrapper('initialize');if (delegated !== null){delegated.initialize.apply(this, arguments);} else {Chart.controllers.{1}.prototype.initialize.apply(this, arguments);}};\n", "Charba{0}.prototype.addElements = function() {var delegated = this.checkAndGetWrapper('addElements');if (delegated !== null){delegated.addElements.apply(this, arguments);} else {Chart.controllers.{1}.prototype.addElements.apply(this, arguments);}};\n", "Charba{0}.prototype.draw = function() {var delegated = this.checkAndGetWrapper('draw');if (delegated !== null){delegated.draw.apply(this, arguments);} else {Chart.controllers.{1}.prototype.draw.apply(this, arguments);}};\n", "Charba{0}.prototype.removeHoverStyle = function() {var delegated = this.checkAndGetWrapper('removeHoverStyle');if (delegated !== null){delegated.removeHoverStyle.apply(this, arguments);} else {Chart.controllers.{1}.prototype.removeHoverStyle.apply(this, arguments);}};\n", "Charba{0}.prototype.setHoverStyle = function() {var delegated = this.checkAndGetWrapper('setHoverStyle');if (delegated !== null){delegated.setHoverStyle.apply(this, arguments);} else {Chart.controllers.{1}.prototype.setHoverStyle.apply(this, arguments);}};\n", "Charba{0}.prototype.update = function() {var delegated = this.checkAndGetWrapper('update');if (delegated !== null){delegated.update.apply(this, arguments);} else {Chart.controllers.{1}.prototype.update.apply(this, arguments);}};\n", "Charba{0}.prototype.linkScales = function() {var delegated = this.checkAndGetWrapper('linkScales');if (delegated !== null){delegated.linkScales.apply(this, arguments);} else {Chart.controllers.{1}.prototype.linkScales.apply(this, arguments);}};\n", "Charba{0}.prototype.buildOrUpdateElements = function() {var delegated = this.checkAndGetWrapper('buildOrUpdateElements');if (delegated !== null){delegated.buildOrUpdateElements.apply(this, arguments);} else {Chart.controllers.{1}.prototype.buildOrUpdateElements.apply(this, arguments);}};\n", "Charba{0}.id = '{0}';\n", "Charba{0}.defaults = Charba{0}.cloneDefaults ? Object.assign({}, Chart.controllers.{1}.defaults) : Chart.controllers.{1}.defaults;\n", "Chart.register(Charba{0});\n"], j_l_String));
  ControllerTemplate.f_INSTANCE__org_pepstock_charba_client_controllers_ControllerTemplate_ = ControllerTemplate.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ControllerTemplate;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@type {Array<?string>}*/
ControllerTemplate.f_CONTENT__org_pepstock_charba_client_controllers_ControllerTemplate_;
/**@type {ControllerTemplate}*/
ControllerTemplate.f_INSTANCE__org_pepstock_charba_client_controllers_ControllerTemplate_;
$Util.$setClassMetadata(ControllerTemplate, "org.pepstock.charba.client.controllers.ControllerTemplate");

exports = ControllerTemplate;

//# sourceMappingURL=ControllerTemplate.js.map
