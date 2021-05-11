goog.module('org.pepstock.charba.client.options.AnimationCollection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractAnimationCollection = goog.require('org.pepstock.charba.client.options.AbstractAnimationCollection$impl');

let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let IsDefaultAnimationCollection = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimationCollection$impl');
let IsAnimationCollectionKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsAnimationCollectionKey$impl');

/**
 * @extends {AbstractAnimationCollection<IsAnimationCollectionKey, IsDefaultAnimationCollection>}
 */
class AnimationCollection extends AbstractAnimationCollection {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!AnimationCollection} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_options_IsAnimationCollectionKey__org_pepstock_charba_client_defaults_IsDefaultAnimationCollection__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** IsAnimationCollectionKey */ childKey, /** IsDefaultAnimationCollection */ defaultValues, /** ? */ nativeObject) {
  AnimationCollection.$clinit();
  let $instance = new AnimationCollection();
  $instance.$ctor__org_pepstock_charba_client_options_AnimationCollection__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_options_IsAnimationCollectionKey__org_pepstock_charba_client_defaults_IsDefaultAnimationCollection__org_pepstock_charba_client_commons_NativeObject(parent, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_AnimationCollection__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_options_IsAnimationCollectionKey__org_pepstock_charba_client_defaults_IsDefaultAnimationCollection__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** IsAnimationCollectionKey */ childKey, /** IsDefaultAnimationCollection */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractAnimationCollection__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationCollection__org_pepstock_charba_client_commons_NativeObject(parent, childKey, defaultValues, nativeObject);
 }
 
 static $clinit() {
  AnimationCollection.$clinit = () =>{};
  AnimationCollection.$loadModules();
  AbstractAnimationCollection.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnimationCollection;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(AnimationCollection, "org.pepstock.charba.client.options.AnimationCollection");

exports = AnimationCollection;

//# sourceMappingURL=AnimationCollection.js.map
