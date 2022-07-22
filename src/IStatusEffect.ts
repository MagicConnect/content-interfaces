import { Stat, StatusEffect } from './BuildingBlocks';
import {
  EffectTarget,
  ActiveEffectTrigger,
  ActiveEffectType,
  IPassiveEffect,
  PassiveEffectType,
} from './IAbility';

export interface IStatusEffect {
  name: string;
  cancels: StatusEffect[];
  effects: IPassiveEffect[];
}

export const statusEffects: Record<StatusEffect, IStatusEffect> = {
  // debuffs
  [StatusEffect.ACCDown]: {
    name: 'Accuracy Down I',
    cancels: [StatusEffect.ACCUp],
    effects: [
      {
        value: PassiveEffectType.StatBoost,
        target: EffectTarget.Self,
        props: { baseValue: -10, baseStat: Stat.Accuracy, isPercent: true },
      },
    ],
  },
  [StatusEffect.ATKDown]: {
    name: 'Attack Down I',
    cancels: [StatusEffect.ATKUp],
    effects: [
      {
        value: PassiveEffectType.StatBoost,
        target: EffectTarget.Self,
        props: { baseValue: -10, baseStat: Stat.Attack, isPercent: true },
      },
    ],
  },
  [StatusEffect.CRITDown]: {
    name: 'Critical Down I',
    cancels: [StatusEffect.CRITUp],
    effects: [
      {
        value: PassiveEffectType.StatBoost,
        target: EffectTarget.Self,
        props: { baseValue: -5, baseStat: Stat.Critical, isPercent: true },
      },
    ],
  },
  [StatusEffect.DEFDown]: {
    name: 'Defense Down I',
    cancels: [StatusEffect.DEFUp],
    effects: [
      {
        value: PassiveEffectType.StatBoost,
        target: EffectTarget.Self,
        props: { baseValue: -10, baseStat: Stat.Defense, isPercent: true },
      },
    ],
  },
  [StatusEffect.EVADown]: {
    name: 'Evasion Down I',
    cancels: [StatusEffect.EVAUp],
    effects: [
      {
        value: PassiveEffectType.StatBoost,
        target: EffectTarget.Self,
        props: { baseValue: -10, baseStat: Stat.Evasion, isPercent: true },
      },
    ],
  },
  [StatusEffect.HPDown]: {
    name: 'HP Down I',
    cancels: [StatusEffect.HPUp],
    effects: [
      {
        value: PassiveEffectType.StatBoost,
        target: EffectTarget.Self,
        props: { baseValue: -10, baseStat: Stat.HP, isPercent: true },
      },
    ],
  },
  [StatusEffect.MAGDown]: {
    name: 'Magic Down I',
    cancels: [StatusEffect.MAGUp],
    effects: [
      {
        value: PassiveEffectType.StatBoost,
        target: EffectTarget.Self,
        props: { baseValue: -10, baseStat: Stat.Magic, isPercent: true },
      },
    ],
  },
  [StatusEffect.SPCDown]: {
    name: 'Special Down I',
    cancels: [StatusEffect.SPCUp],
    effects: [
      {
        value: PassiveEffectType.StatBoost,
        target: EffectTarget.Self,
        props: { baseValue: -10, baseStat: Stat.Special, isPercent: true },
      },
    ],
  },

  // buffs
  [StatusEffect.ACCUp]: {
    name: 'Accuracy Up I',
    cancels: [StatusEffect.ACCDown],
    effects: [
      {
        value: PassiveEffectType.StatBoost,
        target: EffectTarget.Self,
        props: { baseValue: 10, baseStat: Stat.Accuracy, isPercent: true },
      },
    ],
  },
  [StatusEffect.ATKUp]: {
    name: 'Accuracy Up I',
    cancels: [StatusEffect.ATKDown],
    effects: [
      {
        value: PassiveEffectType.StatBoost,
        target: EffectTarget.Self,
        props: { baseValue: 10, baseStat: Stat.Attack, isPercent: true },
      },
    ],
  },
  [StatusEffect.CRITUp]: {
    name: 'Critical Up I',
    cancels: [StatusEffect.CRITDown],
    effects: [
      {
        value: PassiveEffectType.StatBoost,
        target: EffectTarget.Self,
        props: { baseValue: 10, baseStat: Stat.Critical, isPercent: true },
      },
    ],
  },
  [StatusEffect.DEFUp]: {
    name: 'Defense Up I',
    cancels: [StatusEffect.DEFDown],
    effects: [
      {
        value: PassiveEffectType.StatBoost,
        target: EffectTarget.Self,
        props: { baseValue: 10, baseStat: Stat.Defense, isPercent: true },
      },
    ],
  },
  [StatusEffect.EVAUp]: {
    name: 'Evasion Up I',
    cancels: [StatusEffect.EVADown],
    effects: [
      {
        value: PassiveEffectType.StatBoost,
        target: EffectTarget.Self,
        props: { baseValue: 10, baseStat: Stat.Evasion, isPercent: true },
      },
    ],
  },
  [StatusEffect.HPUp]: {
    name: 'HP Up I',
    cancels: [StatusEffect.HPDown],
    effects: [
      {
        value: PassiveEffectType.StatBoost,
        target: EffectTarget.Self,
        props: { baseValue: 10, baseStat: Stat.HP, isPercent: true },
      },
    ],
  },
  [StatusEffect.MAGUp]: {
    name: 'Magic Up I',
    cancels: [StatusEffect.MAGDown],
    effects: [
      {
        value: PassiveEffectType.StatBoost,
        target: EffectTarget.Self,
        props: { baseValue: 10, baseStat: Stat.Magic, isPercent: true },
      },
    ],
  },
  [StatusEffect.SPCUp]: {
    name: 'Special Up I',
    cancels: [StatusEffect.SPCDown],
    effects: [
      {
        value: PassiveEffectType.StatBoost,
        target: EffectTarget.Self,
        props: { baseValue: 10, baseStat: Stat.Special, isPercent: true },
      },
    ],
  },

  // special
  [StatusEffect.Curse]: {
    name: 'Curse I',
    cancels: [StatusEffect.Shield, StatusEffect.Barrier],
    effects: [
      {
        value: PassiveEffectType.IncomingStatDamage,
        target: EffectTarget.Self,
        props: { baseValue: 10, baseStat: Stat.Magic, isPercent: true },
      },
      {
        value: PassiveEffectType.IncomingStatDamage,
        target: EffectTarget.Self,
        props: { baseValue: 10, baseStat: Stat.Attack, isPercent: true },
      },
      {
        value: PassiveEffectType.OutgoingStatDamage,
        target: EffectTarget.Self,
        props: { baseValue: -10, baseStat: Stat.Magic, isPercent: true },
      },
      {
        value: PassiveEffectType.OutgoingStatDamage,
        target: EffectTarget.Self,
        props: { baseValue: -10, baseStat: Stat.Attack, isPercent: true },
      },
    ],
  },
  [StatusEffect.Poison]: {
    name: 'Poison I',
    cancels: [StatusEffect.Regen],
    effects: [
      {
        value: PassiveEffectType.TriggerActive,
        target: EffectTarget.Self,
        props: {
          triggerWhen: ActiveEffectTrigger.OnRoundStart,
          triggerActiveEffects: [
            {
              value: ActiveEffectType.StatBoost,
              target: EffectTarget.Self,
              props: { baseValue: -3, baseStat: Stat.HP, isPercent: true },
            },
          ],
        },
      },
    ],
  },
  [StatusEffect.Silence]: {
    name: 'Silence I',
    cancels: [],
    effects: [
      {
        value: PassiveEffectType.Silence,
        target: EffectTarget.Self,
        props: { baseValue: 1 },
      },
    ],
  },
  [StatusEffect.Stun]: {
    name: 'Stun I',
    cancels: [],
    effects: [
      {
        value: PassiveEffectType.Stun,
        target: EffectTarget.Self,
        props: { baseValue: 1 },
      },
    ],
  },

  [StatusEffect.Barrier]: {
    name: 'Barrier I',
    cancels: [StatusEffect.Curse],
    effects: [
      {
        value: PassiveEffectType.IncomingStatDamage,
        target: EffectTarget.Self,
        props: { baseValue: -15, baseStat: Stat.Magic, isPercent: true },
      },
    ],
  },
  [StatusEffect.Deflect]: {
    name: 'Deflect I',
    cancels: [],
    effects: [
      {
        value: PassiveEffectType.IncomingStatDamage,
        target: EffectTarget.Self,
        props: { baseValue: -15, baseStat: Stat.Attack, isPercent: true },
      },
    ],
  },
  [StatusEffect.Regen]: {
    name: 'Regen I',
    cancels: [StatusEffect.Poison],
    effects: [
      {
        value: PassiveEffectType.StatBoost,
        target: EffectTarget.Self,
        props: { baseValue: 3, baseStat: Stat.HP, isPercent: true },
      },
    ],
  },
  [StatusEffect.Shield]: {
    name: 'Shield I',
    cancels: [StatusEffect.Curse],
    effects: [
      {
        value: PassiveEffectType.IncomingStatDamage,
        target: EffectTarget.Self,
        props: { baseValue: -15, baseStat: Stat.Attack, isPercent: true },
      },
    ],
  },
};
