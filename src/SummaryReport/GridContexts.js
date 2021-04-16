//import {createContext} from "react";

export const GroupKeys = {
    Name: "Name",
    Enchants: "Enchants",
    WorldBuffs: "WorldBuffs",
    Deaths: "Deaths",
    ProtPotions: "ProtPotions",
    Consumes: "Consumes",
    Abilities: "Abilities",
    Damage: "Damage",
    DispelsInterrupts: "DispelsInterrupts",
}

export const DataPoints = {
    Name: "Name",
    Enchants: "Enchants",
    WorldBuffCount: "WorldBuffCount",
    WorldBuffUptime: "WorldBuffUptime",
    WorldBuffNef: "WorldBuffNef",
    WorldBuffRend: "WorldBuffRend",
    WorldBuffHoH: "WorldBuffHoH",
    WorldBuffSF: "WorldBuffSF",
    WorldBuffMM: "WorldBuffMM",
    WorldBuffFF: "WorldBuffFF",
    WorldBuffSS: "WorldBuffSS",
    WorldBuffDMF: "WorldBuffDMF",
    Deaths: "Deaths",
    ProtectionPotionsTotal: "ProtectionPotionsTotal",
    ProtectionPotionsTotalAbsorbed: "ProtectionPotionsTotalAbsorbed",
    ProtectionPotionsNature: "ProtectionPotionsNature",
    ProtectionPotionsGreaterNature: "ProtectionPotionsGreaterNature",
    ProtectionPotionsNatureAbsorbed: "ProtectionPotionsNatureAbsorbed",
    ProtectionPotionsFire: "ProtectionPotionsFire",
    ProtectionPotionsGreaterFire: "ProtectionPotionsGreaterFire",
    ProtectionPotionsFireAbsorbed: "ProtectionPotionsFireAbsorbed",
    ProtectionPotionsFrost: "ProtectionPotionsFrost",
    ProtectionPotionsGreaterFrost: "ProtectionPotionsGreaterFrost",
    ProtectionPotionsFrostAbsorbed: "ProtectionPotionsFrostAbsorbed",
    ProtectionPotionsShadow: "ProtectionPotionsShadow",
    ProtectionPotionsGreaterShadow: "ProtectionPotionsGreaterShadow",
    ProtectionPotionsShadowAbsorbed: "ProtectionPotionsShadowAbsorbed",
    ProtectionPotionsGreaterArcane: "ProtectionPotionsGreaterArcane",
    ProtectionPotionsArcaneAbsorbed: "ProtectionPotionsArcaneAbsorbed",
    ConsumesPotions: "ConsumesPotions",
    ConsumesElixirs: "ConsumesElixirs",
    ConsumesGems: "ConsumesGems",
    ConsumesExplosives: "ConsumesExplosives",
    ConsumesBandages: "ConsumesBandages",
    ConsumesManaPots: "ConsumesManaPots",
    ConsumesRunes: "ConsumesRunes",
    ConsumesRejuvPots: "ConsumesRejuvPots",
    ConsumesHealthPots: "ConsumesHealthPots",
    ConsumesHealthStones: "ConsumesHealthStones",
    ConsumesLIPs: "ConsumesLIPs",
    ConsumesPetris: "ConsumesPetris",
    ConsumesWhipperRootTuber: "ConsumesWhipperRootTuber",
    ConsumesRagePotions: "ConsumesRagePotions",
    ConsumesThistleTea: "ConsumesThistleTea",
    ConsumesRestorationPots: "ConsumesRestorationPots",
    ConsumesElixirOfPoisonResistance: "ConsumesElixirOfPoisonResistance",
    ConsumesFreeActionPotion: "ConsumesFreeActionPotion",
    ConsumesManaRuby: "ConsumesManaRuby",
    ConsumesManaCitrine: "ConsumesManaCitrine",
    ConsumesManaJade: "ConsumesManaJade",
    ConsumesManaAgate: "ConsumesManaAgate",
    ConsumesStoneshield: "ConsumesStoneshield",
    ConsumesOilOfImmolation: "ConsumesOilOfImmolation",
    ConsumesHeavyRuneclothBandage: "ConsumesHeavyRuneclothBandage",
    ConsumesAntiVenom: "ConsumesAntiVenom",
    ConsumesHolyWater: "ConsumesHolyWater",
    ConsumesSapperCharge: "ConsumesSapperCharge",
    ConsumesEzThro: "ConsumesEzThro",
    ConsumesDenseDynamite: "ConsumesDenseDynamite",
    DispelTotal: "DispelTotal",
    DispelBoss: "DispelBoss",
    DispelTrash: "DispelTrash",
    DispelPoison: "DispelPoison",
    DispelDisease: "DispelDisease",
    DispelCurse: "DispelCurse",
    DispelMagic: "DispelMagic",
    DispelFrenzy: "DispelFrenzy",
    DispelDruidCurePoison: "DispelDruidCurePoison",
    DispelDruidAbolishPoison: "DispelDruidAbolishPoison",
    DispelDruidRemoveCurse: "DispelDruidRemoveCurse",
    DispelHunterTranqShot: "DispelHunterTranqShot",
    DispelMageRemoveLesserCurse: "DispelMageRemoveLesserCurse",
    DispelPaladinPurify: "DispelPaladinPurify",
    DispelPaladinCleanse: "DispelPaladinCleanse",
    DispelPriestDispelMagic: "DispelPriestDispelMagic",
    DispelPriestCureDisease: "DispelPriestCureDisease",
    DispelPriestAbolishDisease: "DispelPriestAbolishDisease",
    DispelShamanPurge: "DispelShamanPurge",
    DispelShamanCurePoison: "DispelShamanCurePoison",
    DispelShamanCureDisease: "DispelShamanCureDisease",
    DispelShamanPoisonCleansingTotem: "DispelShamanPoisonCleansingTotem",
    DispelShamanDiseaseCleansingTotem: "DispelShamanDiseaseCleansingTotem",
    InterruptTotal: "InterruptTotal",
    InterruptDruidBash: "InterruptDruidBash",
    InterruptDruidFeralCharge: "InterruptDruidFeralCharge",
    InterruptMageCounterspell: "InterruptMageCounterspell",
    InterruptPaladinHammerOfJustice: "InterruptPaladinHammerOfJustice",
    InterruptPriestSilence: "InterruptPriestSilence",
    InterruptRogueKick: "InterruptRogueKick",
    InterruptShamanEarthShock: "InterruptShamanEarthShock",
    InterruptWarriorPummel: "InterruptWarriorPummel",
};

export const emptyData = {
    [DataPoints.Name]: " ",
    [DataPoints.Enchants]: " ",
    [DataPoints.WorldBuffCount]: " ",
    [DataPoints.WorldBuffUptime]: " ",
    [DataPoints.WorldBuffNef]: " ",
    [DataPoints.WorldBuffRend]: " ",
    [DataPoints.WorldBuffHoH]: " ",
    [DataPoints.WorldBuffSF]: " ",
    [DataPoints.WorldBuffMM]: " ",
    [DataPoints.WorldBuffFF]: " ",
    [DataPoints.WorldBuffSS]: " ",
    [DataPoints.WorldBuffDMF]: " ",
    [DataPoints.Deaths]: " ",
    [DataPoints.ProtectionPotionsTotal]: " ",
    [DataPoints.ProtectionPotionsTotalAbsorbed]: " ",
    [DataPoints.ProtectionPotionsNature]: " ",
    [DataPoints.ProtectionPotionsGreaterNature]: " ",
    [DataPoints.ProtectionPotionsNatureAbsorbed]: " ",
    [DataPoints.ProtectionPotionsFire]: " ",
    [DataPoints.ProtectionPotionsGreaterFire]: " ",
    [DataPoints.ProtectionPotionsFireAbsorbed]: " ",
    [DataPoints.ProtectionPotionsFrost]: " ",
    [DataPoints.ProtectionPotionsGreaterFrost]: " ",
    [DataPoints.ProtectionPotionsFrostAbsorbed]: " ",
    [DataPoints.ProtectionPotionsShadow]: " ",
    [DataPoints.ProtectionPotionsGreaterShadow]: " ",
    [DataPoints.ProtectionPotionsShadowAbsorbed]: " ",
    [DataPoints.ProtectionPotionsGreaterArcane]: " ",
    [DataPoints.ProtectionPotionsArcaneAbsorbed]: " ",
    [DataPoints.ConsumesPotions]: " ",
    [DataPoints.ConsumesElixirs]: " ",
    [DataPoints.ConsumesGems]: " ",
    [DataPoints.ConsumesExplosives]: " ",
    [DataPoints.ConsumesBandages]: " ",
    [DataPoints.ConsumesManaPots]: " ",
    [DataPoints.ConsumesRunes]: " ",
    [DataPoints.ConsumesRejuvPots]: " ",
    [DataPoints.ConsumesHealthPots]: " ",
    [DataPoints.ConsumesHealthStones]: " ",
    [DataPoints.ConsumesLIPs]: " ",
    [DataPoints.ConsumesPetris]: " ",
    [DataPoints.ConsumesWhipperRootTuber]: " ",
    [DataPoints.ConsumesRagePotions]: " ",
    [DataPoints.ConsumesThistleTea]: " ",
    [DataPoints.ConsumesRestorationPots]: " ",
    [DataPoints.ConsumesElixirOfPoisonResistance]: " ",
    [DataPoints.ConsumesFreeActionPotion]: " ",
    [DataPoints.ConsumesManaRuby]: " ",
    [DataPoints.ConsumesManaCitrine]: " ",
    [DataPoints.ConsumesManaJade]: " ",
    [DataPoints.ConsumesManaAgate]: " ",
    [DataPoints.ConsumesStoneshield]: " ",
    [DataPoints.ConsumesOilOfImmolation]: " ",
    [DataPoints.ConsumesHeavyRuneclothBandage]: " ",
    [DataPoints.ConsumesAntiVenom]: " ",
    [DataPoints.ConsumesHolyWater]: " ",
    [DataPoints.ConsumesSapperCharge]: " ",
    [DataPoints.ConsumesEzThro]: " ",
    [DataPoints.ConsumesDenseDynamite]: " ",
    [DataPoints.DispelTotal]: " ",
    [DataPoints.DispelBoss]: " ",
    [DataPoints.DispelTrash]: " ",
    [DataPoints.DispelPoison]: " ",
    [DataPoints.DispelDisease]: " ",
    [DataPoints.DispelCurse]: " ",
    [DataPoints.DispelMagic]: " ",
    [DataPoints.DispelFrenzy]: " ",
    [DataPoints.DispelDruidCurePoison]: " ",
    [DataPoints.DispelDruidAbolishPoison]: " ",
    [DataPoints.DispelDruidRemoveCurse]: " ",
    [DataPoints.DispelHunterTranqShot]: " ",
    [DataPoints.DispelMageRemoveLesserCurse]: " ",
    [DataPoints.DispelPaladinPurify]: " ",
    [DataPoints.DispelPaladinCleanse]: " ",
    [DataPoints.DispelPriestDispelMagic]: " ",
    [DataPoints.DispelPriestCureDisease]: " ",
    [DataPoints.DispelPriestAbolishDisease]: " ",
    [DataPoints.DispelShamanPurge]: " ",
    [DataPoints.DispelShamanCurePoison]: " ",
    [DataPoints.DispelShamanCureDisease]: " ",
    [DataPoints.DispelShamanPoisonCleansingTotem]: " ",
    [DataPoints.DispelShamanDiseaseCleansingTotem]: " ",
    [DataPoints.InterruptTotal]: " ",
    [DataPoints.InterruptDruidBash]: " ",
    [DataPoints.InterruptDruidFeralCharge]: " ",
    [DataPoints.InterruptMageCounterspell]: " ",
    [DataPoints.InterruptPaladinHammerOfJustice]: " ",
    [DataPoints.InterruptPriestSilence]: " ",
    [DataPoints.InterruptRogueKick]: " ",
    [DataPoints.InterruptShamanEarthShock]: " ",
    [DataPoints.InterruptWarriorPummel]: " ",
}
