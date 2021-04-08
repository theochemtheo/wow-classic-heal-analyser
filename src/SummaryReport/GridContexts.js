//import {createContext} from "react";

export const GroupKeys = {
    Name: "Name",
    Enchants: "Enchants",
    WorldBuffs: "WorldBuffs",
    Deaths: "Deaths",
    ProtPotions: "ProtPotions",
    Consumes: "Consumes",
    Abilities: "Abilities",
    Damage: "Damage"
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
}
