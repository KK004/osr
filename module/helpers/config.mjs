export const OSR = {};

/**
 * The set of Ability Scores used within the sytem.
 * @type {Object}
 */
 OSR.abilities = {
  str: "OSR.AbilityStr",
  dex: "OSR.AbilityDex",
  con: "OSR.AbilityCon",
  int: "OSR.AbilityInt",
  wis: "OSR.AbilityWis",
  cha: "OSR.AbilityCha"
};

OSR.abilityAbbreviations = {
  str: "OSR.AbilityStrAbbr",
  dex: "OSR.AbilityDexAbbr",
  con: "OSR.AbilityConAbbr",
  int: "OSR.AbilityIntAbbr",
  wis: "OSR.AbilityWisAbbr",
  cha: "OSR.AbilityChaAbbr"
};

/** Denominations of hit dice which can apply to classes.
* @type {string[]}
*/
OSR.hitDieTypes = ["d6", "d8", "d10", "d12"];

/* -------------------------------------------- */

/**
 * The set of types which a weapon item can take.
 * @enum {string}
 */
OSR.weaponTypes = {
  simpleM: "OSR.WeaponSimpleM",
  simpleR: "OSR.WeaponSimpleR",
  martialM: "OSR.WeaponMartialM",
  martialR: "OSR.WeaponMartialR",
  natural: "OSR.WeaponNatural",
  improv: "OSR.WeaponImprov",
  siege: "OSR.WeaponSiege"
};

/* -------------------------------------------- */
/**
 * Common armor class calculations.
 * @enum {{ label: string, [formula]: string }}
 */
 OSR.armorClasses = {
  flat: {
    label: "OSR.ArmorClassFlat",
    formula: "@attributes.ac.flat"
  },
  natural: {
    label: "OSR.ArmorClassNatural",
    formula: "@attributes.ac.flat"
  },
  default: {
    label: "OSR.ArmorClassEquipment",
    formula: "@attributes.ac.armor + @attributes.ac.dex"
  },
  mage: {
    label: "OSR.ArmorClassMage",
    formula: "13 + @abilities.dex.mod"
  },
  draconic: {
    label: "OSR.ArmorClassDraconic",
    formula: "13 + @abilities.dex.mod"
  },
  unarmoredMonk: {
    label: "DOSR.ArmorClassUnarmoredMonk",
    formula: "10 + @abilities.dex.mod + @abilities.wis.mod"
  },
  unarmoredBarb: {
    label: "OSR.ArmorClassUnarmoredBarbarian",
    formula: "10 + @abilities.dex.mod + @abilities.con.mod"
  },
  custom: {
    label: "OSR.ArmorClassCustom"
  }
};