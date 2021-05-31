goog.module('org.pepstock.charba.client.defaults.globals.DefaultTransitions.ShowAndHideDefaultAnimationTransition.ShowAndHideDefaultAnimationCollection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultAnimationCollection = goog.require('org.pepstock.charba.client.defaults.globals.DefaultAnimationCollection$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Locale = goog.forwardDeclare('java.util.Locale$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let DefaultAnimationCollectionKey = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultAnimationCollectionKey$impl');

class ShowAndHideDefaultAnimationCollection extends DefaultAnimationCollection {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ShowAndHideDefaultAnimationCollection} */
 static $create__() {
  ShowAndHideDefaultAnimationCollection.$clinit();
  let $instance = new ShowAndHideDefaultAnimationCollection();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ShowAndHideDefaultAnimationCollection__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ShowAndHideDefaultAnimationCollection__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection__org_pepstock_charba_client_options_AnimationCollectionKey(DefaultAnimationCollectionKey.f_COLORS__org_pepstock_charba_client_enums_DefaultAnimationCollectionKey);
 }
 /** @override @return {?string} */
 m_getFromAsString__() {
  return ShowAndHideDefaultAnimationCollection.f_DEFAULT_FROM__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ShowAndHideDefaultAnimationCollection_;
 }
 
 static $clinit() {
  ShowAndHideDefaultAnimationCollection.$clinit = () =>{};
  ShowAndHideDefaultAnimationCollection.$loadModules();
  DefaultAnimationCollection.$clinit();
  ShowAndHideDefaultAnimationCollection.f_DEFAULT_FROM__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ShowAndHideDefaultAnimationCollection_ = j_l_String.m_toLowerCase__java_lang_String__java_util_Locale(HtmlColor.f_TRANSPARENT__org_pepstock_charba_client_colors_HtmlColor.name(), Locale.m_getDefault__());
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ShowAndHideDefaultAnimationCollection;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Locale = goog.module.get('java.util.Locale$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  DefaultAnimationCollectionKey = goog.module.get('org.pepstock.charba.client.enums.DefaultAnimationCollectionKey$impl');
 }
}
/**@type {?string}*/
ShowAndHideDefaultAnimationCollection.f_DEFAULT_FROM__org_pepstock_charba_client_defaults_globals_DefaultTransitions_ShowAndHideDefaultAnimationTransition_ShowAndHideDefaultAnimationCollection_;
$Util.$setClassMetadata(ShowAndHideDefaultAnimationCollection, "org.pepstock.charba.client.defaults.globals.DefaultTransitions$ShowAndHideDefaultAnimationTransition$ShowAndHideDefaultAnimationCollection");

exports = ShowAndHideDefaultAnimationCollection;

//# sourceMappingURL=DefaultTransitions$ShowAndHideDefaultAnimationTransition$ShowAndHideDefaultAnimationCollection.js.map
