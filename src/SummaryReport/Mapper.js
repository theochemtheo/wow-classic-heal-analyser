import {itemSlots, protectionPotionEnum, rarity} from "../data";
import {battleElixirBuffs, cooldownList, flaskBuffs, foodBuffs, guardianElixirBuffs, scrollBuffs, seasonBuffs, tempWeaponEnchants, imbuesWithBuffs, enchants, gemList} from "../datastore";
import {DataPoints, emptyData} from "./GridContexts";
import {sumNonNull} from "../utils";

export class CharacterMapper {
    Flatten(character) {
        let characterData = {...emptyData};

        if (!character) {
            return characterData;
        }

        characterData[DataPoints.Name] = character.name;
        characterData[DataPoints.Type] = character.type;
        characterData[DataPoints.Deaths] = this._getDeathCount(character.data);

        this._getEnchantInfo(character, characterData);

        characterData[DataPoints.GemsMissing] = this._getMissingGemCount(character);
        characterData[DataPoints.GemsCommon] = this._getGemCount(character, rarity.Common);
        characterData[DataPoints.GemsUncommon] = this._getGemCount(character, rarity.Uncommon);
        characterData[DataPoints.GemsRare] = this._getGemCount(character, rarity.Rare);
        characterData[DataPoints.GemsEpic] = this._getGemCount(character, rarity.Epic);
        characterData[DataPoints.GemsList] = this._getGemList(character);

        characterData[DataPoints.ElixirsFood] = this._getBuffs(character, foodBuffs);
        characterData[DataPoints.ElixirsFlasks] = this._getBuffs(character, flaskBuffs);
        characterData[DataPoints.ElixirsBattle] = this._getBuffs(character, battleElixirBuffs);
        characterData[DataPoints.ElixirsGuardian] = this._getBuffs(character, guardianElixirBuffs);
        characterData[DataPoints.ElixirsSeasonal] = this._getBuffs(character, seasonBuffs);
        characterData[DataPoints.ElixirsScrolls] = this._getBuffs(character, scrollBuffs);
        characterData[DataPoints.ElixirsWeaponEnchants] = this._getWeaponImbue(character, tempWeaponEnchants, imbuesWithBuffs);

        characterData[DataPoints.ProtectionPotionsGreaterArcane] = this._getProtectionPotionCount(character, protectionPotionEnum.GAPP);
        characterData[DataPoints.ProtectionPotionsMajorArcane] = this._getProtectionPotionCount(character, protectionPotionEnum.MAPP);
        characterData[DataPoints.ProtectionPotionsArcaneAbsorbed] = this._getProtectionPotionAbsorb(character, protectionPotionEnum.GAPP, protectionPotionEnum.MAPP);
        characterData[DataPoints.ProtectionPotionsFire] = this._getProtectionPotionCount(character, protectionPotionEnum.FPP);
        characterData[DataPoints.ProtectionPotionsGreaterFire] = this._getProtectionPotionCount(character, protectionPotionEnum.GFPP);
        characterData[DataPoints.ProtectionPotionsMajorFire] = this._getProtectionPotionCount(character, protectionPotionEnum.MFPP);
        characterData[DataPoints.ProtectionPotionsFireAbsorbed] = this._getProtectionPotionAbsorb(character, protectionPotionEnum.GFPP, protectionPotionEnum.FPP, protectionPotionEnum.MFPP);
        characterData[DataPoints.ProtectionPotionsFrost] = this._getProtectionPotionCount(character, protectionPotionEnum.FrPP);
        characterData[DataPoints.ProtectionPotionsGreaterFrost] = this._getProtectionPotionCount(character, protectionPotionEnum.GFrPP);
        characterData[DataPoints.ProtectionPotionsMajorFrost] = this._getProtectionPotionCount(character, protectionPotionEnum.MFrPP);
        characterData[DataPoints.ProtectionPotionsFrostAbsorbed] = this._getProtectionPotionAbsorb(character, protectionPotionEnum.GFrPP, protectionPotionEnum.FrPP, protectionPotionEnum.MFrPP);
        characterData[DataPoints.ProtectionPotionsNature] = this._getProtectionPotionCount(character, protectionPotionEnum.NPP);
        characterData[DataPoints.ProtectionPotionsGreaterNature] = this._getProtectionPotionCount(character, protectionPotionEnum.GNPP);
        characterData[DataPoints.ProtectionPotionsMajorNature] = this._getProtectionPotionCount(character, protectionPotionEnum.MNPP);
        characterData[DataPoints.ProtectionPotionsNatureAbsorbed] = this._getProtectionPotionAbsorb(character, protectionPotionEnum.GNPP, protectionPotionEnum.NPP, protectionPotionEnum.MNPP);
        characterData[DataPoints.ProtectionPotionsShadow] = this._getProtectionPotionCount(character, protectionPotionEnum.SPP);
        characterData[DataPoints.ProtectionPotionsGreaterShadow] = this._getProtectionPotionCount(character, protectionPotionEnum.GSPP);
        characterData[DataPoints.ProtectionPotionsMajorShadow] = this._getProtectionPotionCount(character, protectionPotionEnum.MSPP);
        characterData[DataPoints.ProtectionPotionsShadowAbsorbed] = this._getProtectionPotionAbsorb(character, protectionPotionEnum.GSPP, protectionPotionEnum.SPP, protectionPotionEnum.MSPP);

        characterData[DataPoints.ProtectionPotionsTotal] = sumNonNull(characterData[DataPoints.ProtectionPotionsGreaterArcane],
            characterData[DataPoints.ProtectionPotionsMajorArcane],
            characterData[DataPoints.ProtectionPotionsFire],
            characterData[DataPoints.ProtectionPotionsGreaterFire],
            characterData[DataPoints.ProtectionPotionsMajorFire],
            characterData[DataPoints.ProtectionPotionsFrost],
            characterData[DataPoints.ProtectionPotionsGreaterFrost],
            characterData[DataPoints.ProtectionPotionsMajorFrost],
            characterData[DataPoints.ProtectionPotionsNature],
            characterData[DataPoints.ProtectionPotionsGreaterNature],
            characterData[DataPoints.ProtectionPotionsMajorNature],
            characterData[DataPoints.ProtectionPotionsShadow],
            characterData[DataPoints.ProtectionPotionsGreaterShadow],
            characterData[DataPoints.ProtectionPotionsMajorShadow]);

        characterData[DataPoints.ProtectionPotionsTotalAbsorbed] = sumNonNull(characterData[DataPoints.ProtectionPotionsArcaneAbsorbed],
            characterData[DataPoints.ProtectionPotionsFireAbsorbed],
            characterData[DataPoints.ProtectionPotionsFrostAbsorbed],
            characterData[DataPoints.ProtectionPotionsNatureAbsorbed],
            characterData[DataPoints.ProtectionPotionsShadowAbsorbed]);

        characterData[DataPoints.ConsumesManaPots] = this._getCastCount(character, 17531, 28499, 41618, 41617, 43186);
        characterData[DataPoints.ConsumesRejuvPots] = this._getCastCount(character, 22729, 28517, 45051, 53750, 53761);
        characterData[DataPoints.ConsumesHealthPots] = this._getCastCount(character, 17534, 28495, 41620, 41619, 43185);
        characterData[DataPoints.ConsumesFreeActionPotion] = this._getCastCount(character, 6615, 24364);
        characterData[DataPoints.ConsumesRestorationPots] = this._getCastCount(character, 11359, 17550);
        characterData[DataPoints.ConsumesRagePotions] = this._getCastCount(character, 6613, 17528);
        characterData[DataPoints.ConsumesStoneshield] = this._getCastCount(character, 17540);
        characterData[DataPoints.ConsumesInsaneStrength] = this._getCastCount(character, 28494);
        characterData[DataPoints.ConsumesShrouding] = this._getCastCount(character, 28548);
        characterData[DataPoints.ConsumesFelRegeneration] = this._getCastCount(character, 38908);
        characterData[DataPoints.ConsumesHeroic] = this._getCastCount(character, 28506);
        characterData[DataPoints.ConsumesDestruction] = this._getCastCount(character, 28508); // Check for buff on combat start
        characterData[DataPoints.ConsumesHaste] = this._getCastCount(character, 28507, 53908); // Check for buff on combat start
        characterData[DataPoints.ConsumesFelMana] = this._getCastCount(character, 38929);
        characterData[DataPoints.ConsumesIronshield] = this._getCastCount(character, 17540, 28515);
        characterData[DataPoints.ConsumesWildMagic] = this._getCastCount(character, 53909);
        characterData[DataPoints.ConsumesIndestructable] = this._getCastCount(character, 53762);

        characterData[DataPoints.ConsumesRunes] = this._getCastCount(character, 16666, 27869);
        characterData[DataPoints.ConsumesHealthStones] = this._getCastCount(character, 27235, 27236, 27237, 47875, 47876, 47877);
        characterData[DataPoints.ConsumesWhipperRootTuber] = this._getCastCount(character, 15700);
        characterData[DataPoints.ConsumesThistleTea] = this._getCastCount(character, 9512);
        characterData[DataPoints.ConsumesManaGem] = this._getCastCount(character, 10058, 10057, 10052, 5405, 27103, 42987);
        characterData[DataPoints.ConsumesNightmareSeed] = this._getCastCount(character, 28726);

        characterData[DataPoints.ConsumesDrumsBattle] = this._getCastCount(character, 35476, 351355);
        characterData[DataPoints.ConsumesDrumsWar] = this._getCastCount(character, 35475, 351360);
        characterData[DataPoints.ConsumesDrumsRestoration] = this._getCastCount(character, 35478, 351358);
        characterData[DataPoints.ConsumesDrumsPanic] = this._getCastCount(character, 35474, 351357);

        characterData[DataPoints.ConsumesHolyWater] = this._getCastCount(character, 17291);
        characterData[DataPoints.ConsumesSapperCharge] = this._getCastCount(character, 13241, 30486);
        characterData[DataPoints.ConsumesDenseDynamite] = this._getCastCount(character, 23063);
        characterData[DataPoints.ConsumesEzThro] = this._getCastCount(character, 23000);
        characterData[DataPoints.ConsumesFelIronBombs] = this._getCastCount(character, 30216);
        characterData[DataPoints.ConsumesArcaneBombs] = this._getCastCount(character, 19821);

        characterData[DataPoints.ConsumesHeavyRuneclothBandage] = this._getCastCount(character, 18610, 27030, 27031);
        characterData[DataPoints.ConsumesAntiVenom] = this._getCastCount(character, 23786);

        characterData[DataPoints.ConsumesPotions] = sumNonNull(characterData[DataPoints.ConsumesManaPots],
            characterData[DataPoints.ConsumesRejuvPots],
            characterData[DataPoints.ConsumesHealthPots],
            characterData[DataPoints.ConsumesFreeActionPotion],
            characterData[DataPoints.ConsumesRestorationPots],
            characterData[DataPoints.ConsumesRagePotions],
            characterData[DataPoints.ConsumesInsaneStrength],
            characterData[DataPoints.ConsumesShrouding],
            characterData[DataPoints.ConsumesFelRegeneration],
            characterData[DataPoints.ConsumesHeroic],
            characterData[DataPoints.ConsumesDestruction],
            characterData[DataPoints.ConsumesHaste],
            characterData[DataPoints.ConsumesFelMana],
            characterData[DataPoints.ConsumesIronshield]);

        characterData[DataPoints.ConsumesGems] = sumNonNull(characterData[DataPoints.ConsumesRunes],
            characterData[DataPoints.ConsumesHealthStones],
            characterData[DataPoints.ConsumesWhipperRootTuber],
            characterData[DataPoints.ConsumesThistleTea],
            characterData[DataPoints.ConsumesManaGem],
            characterData[DataPoints.ConsumesNightmareSeed]);

        characterData[DataPoints.ConsumesDrums] = sumNonNull(characterData[DataPoints.ConsumesDrumsBattle],
            characterData[DataPoints.ConsumesDrumsWar],
            characterData[DataPoints.ConsumesDrumsRestoration],
            characterData[DataPoints.ConsumesDrumsPanic]);

        characterData[DataPoints.ConsumesExplosives] = sumNonNull(characterData[DataPoints.ConsumesHolyWater],
            characterData[DataPoints.ConsumesSapperCharge],
            characterData[DataPoints.ConsumesDenseDynamite],
            characterData[DataPoints.ConsumesFelIronBombs],
            characterData[DataPoints.ConsumesEzThro],
            characterData[DataPoints.ConsumesArcaneBombs]);

        characterData[DataPoints.ConsumesBandages] = sumNonNull(characterData[DataPoints.ConsumesHeavyRuneclothBandage],
            characterData[DataPoints.ConsumesAntiVenom]);

        characterData[DataPoints.DispelDruidCurePoison] = this._getCastCount(character, 8946);
        characterData[DataPoints.DispelDruidAbolishPoison] = this._getCastCount(character, 2893);
        characterData[DataPoints.DispelDruidRemoveCurse] = this._getCastCount(character, 2782);
        characterData[DataPoints.DispelHunterTranqShot] = this._getCastCount(character, 19801);
        characterData[DataPoints.DispelMageRemoveLesserCurse] = this._getCastCount(character, 475);
        characterData[DataPoints.DispelPaladinPurify] = this._getCastCount(character, 1152);
        characterData[DataPoints.DispelPaladinCleanse] = this._getCastCount(character, 4987);
        characterData[DataPoints.DispelPriestDispelMagic] = this._getCastCount(character, 988, 527);
        characterData[DataPoints.DispelPriestCureDisease] = this._getCastCount(character, 528);
        characterData[DataPoints.DispelPriestAbolishDisease] = this._getCastCount(character, 552);
        characterData[DataPoints.DispelShamanPurge] = this._getCastCount(character, 8012, 370);
        characterData[DataPoints.DispelShamanCureToxins] = this._getCastCount(character, 526);
        characterData[DataPoints.DispelShamanCleanseSpirit] = this._getCastCount(character, 51886);
        characterData[DataPoints.DispelShamanCleansingTotem] = this._getCastCount(character, 8170);
        characterData[DataPoints.DispelWarlockDevourMagic] = this._getCastCount(character, 19505, 19731, 19734, 19736, 27276, 27277);

        characterData[DataPoints.DispelPoison] = sumNonNull(characterData[DataPoints.DispelDruidCurePoison],
            characterData[DataPoints.DispelDruidAbolishPoison],
            characterData[DataPoints.DispelShamanCureToxins],
            characterData[DataPoints.DispelShamanCleanseSpirit],
            characterData[DataPoints.DispelShamanCleansingTotem]);

        characterData[DataPoints.DispelDisease] = sumNonNull(characterData[DataPoints.DispelPriestCureDisease],
            characterData[DataPoints.DispelPriestAbolishDisease],
            characterData[DataPoints.DispelShamanCureToxins],
            characterData[DataPoints.DispelShamanCleanseSpirit],
            characterData[DataPoints.DispelShamanCleansingTotem]);

        characterData[DataPoints.DispelCurse] = sumNonNull(characterData[DataPoints.DispelDruidRemoveCurse],
            characterData[DataPoints.DispelMageRemoveLesserCurse],
            characterData[DataPoints.DispelShamanCleanseSpirit]);

        characterData[DataPoints.DispelMagic] = sumNonNull(characterData[DataPoints.DispelPriestDispelMagic],
            characterData[DataPoints.DispelShamanPurge],
            characterData[DataPoints.DispelPaladinCleanse],
            characterData[DataPoints.DispelWarlockDevourMagic]);

        characterData[DataPoints.DispelFrenzy] = sumNonNull(characterData[DataPoints.DispelHunterTranqShot]);

        characterData[DataPoints.DispelBoss] = this._getBossCastCount(character, 8946, 2893, 2782, 19801, 475, 1152, 4987, 988, 527, 528, 552, 8012, 370, 526, 2870, 8166, 8170, 19505, 19731, 19734, 19736, 27276, 27277);
        characterData[DataPoints.DispelTrash] = this._getTrashCastCount(character, 8946, 2893, 2782, 19801, 475, 1152, 4987, 988, 527, 528, 552, 8012, 370, 526, 2870, 8166, 8170, 19505, 19731, 19734, 19736, 27276, 27277);

        characterData[DataPoints.DispelTotal] = sumNonNull(characterData[DataPoints.DispelPoison],
            characterData[DataPoints.DispelDisease],
            characterData[DataPoints.DispelCurse],
            characterData[DataPoints.DispelMagic],
            characterData[DataPoints.DispelFrenzy]);

        characterData[DataPoints.InterruptDruidBash] = this._getInterruptCount(character, 8983);
        characterData[DataPoints.InterruptDruidFeralCharge] = this._getInterruptCount(character, 19675);
        characterData[DataPoints.InterruptDruidMaim] = this._getInterruptCount(character, 49802);
        characterData[DataPoints.InterruptMageCounterspell] = this._getInterruptCount(character, 2139);
        characterData[DataPoints.InterruptPaladinHammerOfJustice] = this._getInterruptCount(character, 10308);
        characterData[DataPoints.InterruptPriestSilence] = this._getInterruptCount(character, 15487);
        characterData[DataPoints.InterruptRogueKick] = this._getInterruptCount(character, 1769, 1768, 1767, 1766, 38768);
        characterData[DataPoints.InterruptCheapShot] = this._getInterruptCount(character, 1833);
        characterData[DataPoints.InterruptShamanEarthShock] = this._getInterruptCount(character, 57994);
        characterData[DataPoints.InterruptWarriorPummel] = this._getInterruptCount(character, 6552, 6554);
        characterData[DataPoints.InterruptWarlockSpellLock] = this._getInterruptCount(character, 19647);
        characterData[DataPoints.InterruptHunterIntimidate] = this._getInterruptCount(character, 24394);
        characterData[DataPoints.InterruptWarstomp] = this._getInterruptCount(character, 20549);
        characterData[DataPoints.InterruptMindFreeze] = this._getInterruptCount(character, 47528);
        characterData[DataPoints.InterruptStrangulate] = this._getInterruptCount(character, 47476);

        characterData[DataPoints.InterruptTotal] = sumNonNull(characterData[DataPoints.InterruptDruidBash],
            characterData[DataPoints.InterruptDruidFeralCharge],
            characterData[DataPoints.InterruptDruidMaim],
            characterData[DataPoints.InterruptMageCounterspell],
            characterData[DataPoints.InterruptPaladinHammerOfJustice],
            characterData[DataPoints.InterruptPriestSilence],
            characterData[DataPoints.InterruptRogueKick],
            characterData[DataPoints.InterruptCheapShot],
            characterData[DataPoints.InterruptShamanEarthShock],
            characterData[DataPoints.InterruptWarlockSpellLock],
            characterData[DataPoints.InterruptHunterIntimidate],
            characterData[DataPoints.InterruptWarstomp],
            characterData[DataPoints.InterruptWarriorPummel],
            characterData[DataPoints.InterruptMindFreeze],
            characterData[DataPoints.InterruptStrangulate]);

        characterData[DataPoints.Cooldowns] = this._getCooldownList(character);
        characterData[DataPoints.CooldownsRacial] = this._getCooldownList(character, "Racial");
        characterData[DataPoints.CooldownsAbility] = this._getCooldownList(character, "Ability");
        characterData[DataPoints.CooldownsItems] = this._getCooldownList(character, "Trinket");

        let arcaneResist = character.data.resistances?.arcane ?? 0;
        let fireResist = character.data.resistances?.fire ?? 0;
        let frostResist = character.data.resistances?.frost ?? 0;
        let natureResist = character.data.resistances?.nature ?? 0;
        let shadowResist = character.data.resistances?.shadow ?? 0;
        let randomResist = character.data.resistances?.random_enchantment ?? 0;
        let maxResist = Math.max(arcaneResist, fireResist, frostResist, natureResist, shadowResist);
        characterData[DataPoints.ResistanceArcane] = this._cleanResistanceValue(character.data.resistances?.arcane, arcaneResist === maxResist ? randomResist : 0);
        characterData[DataPoints.ResistanceFire] = this._cleanResistanceValue(character.data.resistances?.fire, fireResist === maxResist ? randomResist : 0);
        characterData[DataPoints.ResistanceFrost] = this._cleanResistanceValue(character.data.resistances?.frost, frostResist === maxResist ? randomResist : 0);
        characterData[DataPoints.ResistanceNature] = this._cleanResistanceValue(character.data.resistances?.nature, natureResist === maxResist ? randomResist : 0);
        characterData[DataPoints.ResistanceShadow] = this._cleanResistanceValue(character.data.resistances?.shadow, shadowResist === maxResist ? randomResist : 0);

        //this._getTankStats(character, characterData);
        
        return characterData;
    }

    _cleanResistanceValue(value, randomEnchantment) {
        let valueWithRandom = value + randomEnchantment;
        return valueWithRandom ? valueWithRandom + (randomEnchantment > 0 ? "*" : "") : 0
    }

    _getBuffs(character, options) {
        const {buffs} = character.data;

        if (!buffs) {
            return [];
        }

        let activeBuffs = [];
        for (let i = 0; i < options.length; ++i) {
            if (buffs[options[i].id]) {
                activeBuffs.push(options[i]);
            }
        }

        return activeBuffs;
    }

    _getWeaponImbue(character, options, extraOptions) {
        const {imbues, buffs} = character.data;

        if (!imbues?.main_hand && !imbues?.off_hand) {
            return [];
        }

        let activeBuffs = [];
        for (let i = 0; i < options.length; ++i) {
            if (imbues?.main_hand != null) {
                imbues.main_hand.forEach(x => {
                    if (x === options[i].id) {
                        activeBuffs.push(options[i]);
                    }
                })
            }
/*             if (imbues?.main_hand === options[i].id) {
                activeBuffs.push(options[i]);
            } */
            if (imbues?.off_hand != null) {
                imbues.off_hand.forEach(x => {
                    if (x === options[i].id) {
                        activeBuffs.push({...options[i], name: options[i].name + ' (OH)'});
                    }
                })
            }
/*             if (imbues?.off_hand === options[i].id) {
                activeBuffs.push({...options[i], name: options[i].name + ' (OH)'});
            } */
            
        }

        for (let i = 0; i < extraOptions.length; ++i) {
            if (buffs[extraOptions[i].id]) {
                activeBuffs.push(extraOptions[i]);
            }
        }

        return activeBuffs;
    }

    _getMissingGemCount(character) {
        const {gems} = character.data;

        if (!gems) {
            return null;
        }

        return gems[0] ?? 0;
    }

    _getGemCount(character, rarity) {
        const {gems} = character.data;

        if (!gems) {
            return null;
        }

        let gemEntries = Object.entries(gems);

        return gemEntries.reduce((gemTotalCount, [gemId, gemCount]) => {
            const gem = gemList[gemId]

            if (gem?.rarity === rarity) {
                gemTotalCount += gemCount;
            }

            return gemTotalCount;
        }, 0)

    }

    _getGemList(character) {
        const {gems} = character.data;

        if (!gems) {
            return [];
        }

        let gemEntries = Object.entries(gems).filter(([key, count]) => key !== 0);

        return gemEntries.reduce((gemIcons, [gemId, gemCount]) => {
            const gem = gemList[gemId];

            if (gem != null) {
                gemIcons.push({
                    id: gem.id,
                    itemId: gem.id,
                    name: gemCount + " x " + gem.label + " (" + gem.description + ")",
                    icon: gem.icon,
                    count: gemCount,
                })
            }

            return gemIcons;
        }, []);
    }

    _getCooldownList(character, type = null) {
        const {casts} = character.data;

        if (!casts) {
            return [];
        }

        let cooldowns = Object.entries(casts).reduce((cds, [castGuid, castCountByType]) => {
            let cooldownInfo = cooldownList[castGuid];
            if (cooldownInfo && (type == null || type === cooldownInfo.type)) {
                cds[castGuid] = {
                    id: castGuid,
                    itemId: cooldownInfo.itemId,
                    spellId: castGuid,
                    name: cooldownInfo.name,
                    icon: cooldownInfo.icon,
                    count: (castCountByType['boss'] ?? 0) + (castCountByType['trash'] ?? 0)
                }
            }

            return cds;
        }, {});

        return Object.values(cooldowns);
    }

    _getProtectionPotionCount(character, spellId) {
        const {casts, healing} = character.data;

        let count = 0;
        let first_cast = null

        if (casts && casts[spellId]) {
            first_cast = casts[spellId].first_event;
            count += (casts[spellId].boss + casts[spellId].trash);
        }

        // Check for an absorb without a cast event (pre-potting)
        if (healing && healing[spellId] && (!first_cast || first_cast > healing[spellId].first_event)) {
            count += 1;
        }

        /* Object.entries(casts).forEach(([cast_key, cast_value]) => {
            if (spellId === cast_key) {

            }
        })

        if (casts) {
            for (let i = 0; i < casts.length; ++i) {
                let cast = casts[i];
                if (cast.ability.guid === spellId) {
                    if (!countByFight[cast.fight]) {
                        countByFight[cast.fight] = {
                            count: 1,
                            firstCast: cast.timestamp,
                        };
                    }
                    else {
                        countByFight[cast.fight].count++;
                    }
                }
            }
        }

        if (fights) {
            for (let i = 0; i < fights.length; ++i) {
                let fight = fights[i];
                let protectionPotion = protectionPotions[spellId] || null;

                if (countByFight[fight.id]) {
                    count += countByFight[fight.id].count;

                    if (protectionPotion !== null && protectionPotion.firstAbsorb[fight.id]) {
                        if (protectionPotion.firstAbsorb[fight.id] < countByFight[fight.id].firstCast) {
                            count++;
                        }
                    }
                }
                else {
                    if (protectionPotion !== null && protectionPotion.firstAbsorb[fight.id]) {
                        count++;
                    }
                }
            }
        } */

        return count;
    }

    _getProtectionPotionAbsorb(character, ...spellIds) {
        const {healing} = character.data;

        if (!healing) {
            return 0;
        }

        let absorbed = 0;

        Object.entries(healing).forEach(([key, value]) => {
            if (spellIds.includes(parseInt(key))) {
                absorbed += value.amount
            }
        })

        return absorbed;
    }

    _getDeathCount(character) {
        const {deaths} = character;

        return deaths;
    }

    _getBossCastCount(character, ...spellIds) {
        return this._getRestrictedCastCount(character, "boss", spellIds);
    }

    _getTrashCastCount(character, ...spellIds) {
        return this._getRestrictedCastCount(character, "trash", spellIds);
    }

    _getInterruptCount(character, ...spellIds) {
        const {interrupts} = character.data;

        if (!interrupts) {
            return 0;
        }

        let castCount = 0;
        Object.entries(interrupts).forEach(([spellId, count]) => {
            if (spellIds.includes(parseInt(spellId))) {
                castCount += count;
            }
        });

        return castCount;
    }

    _getRestrictedCastCount(character, fightType, spellIds) {
        const {casts} = character.data;

        if (!casts) {
            return 0;
        }

        let castCount = 0;
        Object.entries(casts).forEach(([spellId, countByType]) => {
            if (spellIds.includes(parseInt(spellId))) {
                if (fightType) {
                    castCount += (countByType[fightType] ?? 0)
                }
                else {
                    castCount += ((countByType['boss'] ?? 0) + (countByType['trash'] ?? 0));
                }
            }
        });

        return castCount;
    }

    _getCastCount(character, ...spellIds) {
        return this._getRestrictedCastCount(character, null, spellIds);
    }

    _getDamageDone(character, ...spellIds) {
        const {damageTaken} = character;

        let damageTakenArray = Object.values(damageTaken);

        let damageAmount = 0;
        for (let i = 0; i < damageTakenArray.length; ++i) {
            let damage = damageTakenArray[i];
            if (spellIds.includes(damage.guid)) {
                damageAmount += damage.total;
            }
        }

        return damageAmount;
    }

    _addIfNotNull(characterData, properyName, propertyLabel, table) {
        if (characterData[properyName]) {
            table.push({name: propertyLabel, value: characterData[properyName]});
        }
    }
    _getDamageTakenTable(characterData) {
        let damageTakenTable = [];

        this._addIfNotNull(characterData, DataPoints.DamageWhirlwind, "Whirlwind", damageTakenTable);

        this._addIfNotNull(characterData, DataPoints.DamageRainOfFire, "Rain of Fire", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageFireShield, "Fire Shield", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageFlames, "Flames", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageCleave, "Cleave", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageBlizzard, "Blizzard", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageExplode, "Explode", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageImpale, "Impale", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageBomb, "Bomb", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageThunderclap, "Thunderclap", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageShadowStorm, "Shadow Storm", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageDarkGlare, "Dark Glare", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageFalling, "Falling", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageVoidZone, "Void Zone", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamagePoisonCloud, "Poison Cloud", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageFrostBreath, "Frost Breath", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageEruption, "Eruption", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageBroodPowerBronze, "Brood Power Bronze", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageVoidBlast, "Void Blast", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageTailSweep, "Tail Sweep", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamagePositiveCharge, "Positive Charge", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageNegativeCharge, "Negative Charge", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageDisruptingShout, "Disrupting Shout", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageChill, "Chill", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageDarkBlast, "Dark Blast", damageTakenTable);
        this._addIfNotNull(characterData,DataPoints.DamageWailOfSouls, "wail of Souls", damageTakenTable);

        return damageTakenTable;
    }

    _getTankStats(character, characterData) {
        let meleeDamage = [];
        Object.values(character.damageTaken).forEach(value => {
            if (value.length > 0 && value[0].ability.type === 1) {
                meleeDamage = [...meleeDamage,...value];
            }
        });
        if (meleeDamage.length === 0)
            return;

        let totalHits = meleeDamage.length;
        const hitMap = {
            "0": DataPoints.DamageTakenMiss,
            "1": DataPoints.DamageTakenHit,
            "2": DataPoints.DamageTakenCrit,
            "4": DataPoints.DamageTakenBlocked,
            "7": DataPoints.DamageTakenDodge,
            "8": DataPoints.DamageTakenParry,
            "15": DataPoints.DamageTakenCrushed,
        };

        let breakdown = meleeDamage.reduce((accum, obj) => {
            let hitType = obj.hitType.toString();
            if (!accum[hitType]) {
                accum[hitType] = {
                    type: hitType,
                    count: 1,
                }
            }
            else {
                accum[hitType].count += 1;
            }

            return accum;
        }, {})

        Object.values(breakdown).forEach(hit => {
            let hitType = hitMap[hit.type];
            if (!hitType)
                return;

            characterData[hitType] = hit.count / totalHits;
        });
    }

    _getEnchantInfo(character, characterData) {
        let enchantList = [];

        const slotToIconMapping = {
            0: "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_head.jpg",
            1: "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_neck.jpg",
            2: "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_shoulder.jpg",
            3: "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_shirt.jpg",
            4: "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_chest.jpg",
            5: "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_waist.jpg",
            6: "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_legs.jpg",
            7: "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_feet.jpg",
            8: "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_wrists.jpg",
            9: "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_hands.jpg",
            10: "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_finger.jpg",
            11: "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_finger.jpg",
            12: "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_trinket.jpg",
            13: "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_trinket.jpg",
            14: "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_chest.jpg",
            15: "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_mainhand.jpg",
            16: "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_offhand.jpg",
            17: "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_ranged.jpg",
            19: "https://wow.zamimg.com/images/wow/icons/large/inventoryslot_tabard.jpg",
        }

        if (!character.data.enchants)
            return;

        let enchantScore = character.data.enchants.reduce((accum, enchant) => {
            let enchantIcon = {
                id: enchant.gearId,
                name: enchant.gearId + "_" + enchant.name,
                icon_url: slotToIconMapping[enchant.slot],
            }

            if (enchant.id) {
                let enchantInfo = enchants[enchant.id];
                let score = 0;
                if (enchantInfo) {
                    if (enchantInfo.bySlot && enchantInfo.bySlot[enchant.slot]) {
                        enchantInfo = enchantInfo.bySlot[enchant.slot];
                    }
                    character.data.specs.forEach(spec => {
                        let specDescription = character.type + "-" + spec;
                        let specScore = enchantInfo.score[specDescription] ?? 0;
                        if (specScore > score) {
                            score = specScore;
                        }
                    });
                    //accum += score;

                    if (enchantInfo.itemId) {
                        enchantIcon.itemId = enchantInfo.itemId;
                    }

                    if (enchantInfo.spellId) {
                        enchantIcon.spellId = enchantInfo.spellId;
                    }
                }else {
                    enchantIcon.itemId = enchant.gearId;
                }

                if (score === 1) {
                    accum.good += 1;
                    enchantIcon.highlight = "good";
                } else if (score > 0) {
                    accum.average += 1;
                    enchantIcon.highlight = "average";
                } else {
                    accum.bad += 1;
                    enchantIcon.highlight = "bad";
                }
            } else {
                if (enchant.slot !== itemSlots.Ranged && enchant.slot !== itemSlots.Finger1 && enchant.slot !== itemSlots.Finger2)
                {
                    accum.missing += 1;
                    enchantIcon.itemId = enchant.gearId;
                    enchantIcon.highlight = "missing";
                }
            }

            enchantList.push(enchantIcon);

            return accum;
        }, { good: 0, bad: 0, average: 0, missing: 0});

        characterData[DataPoints.Enchants] = (enchantScore.good + (0.5 * enchantScore.average)) + '/' + character.data.enchants.length;
        characterData[DataPoints.EnchantGood] = enchantScore.good;
        characterData[DataPoints.EnchantAverage] = enchantScore.average;
        characterData[DataPoints.EnchantBad] = enchantScore.bad;
        characterData[DataPoints.EnchantMissing] = enchantScore.missing;
        characterData[DataPoints.EnchantList] = enchantList;
    }
}

export default new CharacterMapper()