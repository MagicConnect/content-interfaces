import { Stat, StatusEffect } from './BuildingBlocks';
import {
  AbilityEffect,
  AbilityTarget,
  AbilityTrigger,
  IAbilityEffect,
} from './IAbility';

export interface IStatusEffect {
  name: string;
  cancels: StatusEffect[];
  trigger: AbilityTrigger;
  effects: IAbilityEffect[];
}

export const statusEffects: Record<StatusEffect, IStatusEffect> = {
  // debuffs
  [StatusEffect.ACCDown]: {
    name: 'Accuracy Down I',
    cancels: [StatusEffect.ACCUp],
    trigger: AbilityTrigger.Always,
    effects: [
      {
        value: AbilityEffect.StatBoost,
        target: AbilityTarget.Self,
        props: { baseValue: -10, baseStat: Stat.Accuracy, isPercent: true },
      },
    ],
  },
  [StatusEffect.ATKDown]: {
    name: 'Attack Down I',
    cancels: [StatusEffect.ATKUp],
    trigger: AbilityTrigger.Always,
    effects: [
      {
        value: AbilityEffect.StatBoost,
        target: AbilityTarget.Self,
        props: { baseValue: -10, baseStat: Stat.Attack, isPercent: true },
      },
    ],
  },
  [StatusEffect.CRITDown]: {
    name: 'Critical Down I',
    cancels: [StatusEffect.CRITUp],
    trigger: AbilityTrigger.Always,
    effects: [
      {
        value: AbilityEffect.StatBoost,
        target: AbilityTarget.Self,
        props: { baseValue: -5, baseStat: Stat.Critical, isPercent: true },
      },
    ],
  },
  [StatusEffect.DEFDown]: {
    name: 'Defense Down I',
    cancels: [StatusEffect.DEFUp],
    trigger: AbilityTrigger.Always,
    effects: [
      {
        value: AbilityEffect.StatBoost,
        target: AbilityTarget.Self,
        props: { baseValue: -10, baseStat: Stat.Defense, isPercent: true },
      },
    ],
  },
  [StatusEffect.EVADown]: {
    name: 'Evasion Down I',
    cancels: [StatusEffect.EVAUp],
    trigger: AbilityTrigger.Always,
    effects: [
      {
        value: AbilityEffect.StatBoost,
        target: AbilityTarget.Self,
        props: { baseValue: -10, baseStat: Stat.Evasion, isPercent: true },
      },
    ],
  },
  [StatusEffect.HPDown]: {
    name: 'HP Down I',
    cancels: [StatusEffect.HPUp],
    trigger: AbilityTrigger.Always,
    effects: [
      {
        value: AbilityEffect.StatBoost,
        target: AbilityTarget.Self,
        props: { baseValue: -10, baseStat: Stat.HP, isPercent: true },
      },
    ],
  },
  [StatusEffect.MAGDown]: {
    name: 'Magic Down I',
    cancels: [StatusEffect.MAGUp],
    trigger: AbilityTrigger.Always,
    effects: [
      {
        value: AbilityEffect.StatBoost,
        target: AbilityTarget.Self,
        props: { baseValue: -10, baseStat: Stat.Magic, isPercent: true },
      },
    ],
  },
  [StatusEffect.SPCDown]: {
    name: 'Special Down I',
    cancels: [StatusEffect.SPCUp],
    trigger: AbilityTrigger.Always,
    effects: [
      {
        value: AbilityEffect.StatBoost,
        target: AbilityTarget.Self,
        props: { baseValue: -10, baseStat: Stat.Special, isPercent: true },
      },
    ],
  },

  // buffs
  [StatusEffect.ACCUp]: {
    name: 'Accuracy Up I',
    cancels: [StatusEffect.ACCDown],
    trigger: AbilityTrigger.Always,
    effects: [
      {
        value: AbilityEffect.StatBoost,
        target: AbilityTarget.Self,
        props: { baseValue: 10, baseStat: Stat.Accuracy, isPercent: true },
      },
    ],
  },
  [StatusEffect.ATKUp]: {
    name: 'Accuracy Up I',
    cancels: [StatusEffect.ATKDown],
    trigger: AbilityTrigger.Always,
    effects: [
      {
        value: AbilityEffect.StatBoost,
        target: AbilityTarget.Self,
        props: { baseValue: 10, baseStat: Stat.Attack, isPercent: true },
      },
    ],
  },
  [StatusEffect.CRITUp]: {
    name: 'Critical Up I',
    cancels: [StatusEffect.CRITDown],
    trigger: AbilityTrigger.Always,
    effects: [
      {
        value: AbilityEffect.StatBoost,
        target: AbilityTarget.Self,
        props: { baseValue: 10, baseStat: Stat.Critical, isPercent: true },
      },
    ],
  },
  [StatusEffect.DEFUp]: {
    name: 'Defense Up I',
    cancels: [StatusEffect.DEFDown],
    trigger: AbilityTrigger.Always,
    effects: [
      {
        value: AbilityEffect.StatBoost,
        target: AbilityTarget.Self,
        props: { baseValue: 10, baseStat: Stat.Defense, isPercent: true },
      },
    ],
  },
  [StatusEffect.EVAUp]: {
    name: 'Evasion Up I',
    cancels: [StatusEffect.EVADown],
    trigger: AbilityTrigger.Always,
    effects: [
      {
        value: AbilityEffect.StatBoost,
        target: AbilityTarget.Self,
        props: { baseValue: 10, baseStat: Stat.Evasion, isPercent: true },
      },
    ],
  },
  [StatusEffect.HPUp]: {
    name: 'HP Up I',
    cancels: [StatusEffect.HPDown],
    trigger: AbilityTrigger.Always,
    effects: [
      {
        value: AbilityEffect.StatBoost,
        target: AbilityTarget.Self,
        props: { baseValue: 10, baseStat: Stat.HP, isPercent: true },
      },
    ],
  },
  [StatusEffect.MAGUp]: {
    name: 'Magic Up I',
    cancels: [StatusEffect.MAGDown],
    trigger: AbilityTrigger.Always,
    effects: [
      {
        value: AbilityEffect.StatBoost,
        target: AbilityTarget.Self,
        props: { baseValue: 10, baseStat: Stat.Magic, isPercent: true },
      },
    ],
  },
  [StatusEffect.SPCUp]: {
    name: 'Special Up I',
    cancels: [StatusEffect.SPCDown],
    trigger: AbilityTrigger.Always,
    effects: [
      {
        value: AbilityEffect.StatBoost,
        target: AbilityTarget.Self,
        props: { baseValue: 10, baseStat: Stat.Special, isPercent: true },
      },
    ],
  },

  // special
  [StatusEffect.Curse]: {
    name: 'Curse I',
    trigger: AbilityTrigger.Always,
    cancels: [StatusEffect.Shield, StatusEffect.Barrier],
    effects: [
      {
        value: AbilityEffect.IncomingStatDamage,
        target: AbilityTarget.Self,
        props: { baseValue: 10, baseStat: Stat.Magic, isPercent: true },
      },
      {
        value: AbilityEffect.IncomingStatDamage,
        target: AbilityTarget.Self,
        props: { baseValue: 10, baseStat: Stat.Attack, isPercent: true },
      },
      {
        value: AbilityEffect.OutgoingStatDamage,
        target: AbilityTarget.Self,
        props: { baseValue: -10, baseStat: Stat.Magic, isPercent: true },
      },
      {
        value: AbilityEffect.OutgoingStatDamage,
        target: AbilityTarget.Self,
        props: { baseValue: -10, baseStat: Stat.Attack, isPercent: true },
      },
    ],
  },
  [StatusEffect.Poison]: {
    name: 'Poison I',
    trigger: AbilityTrigger.OnRoundStart,
    cancels: [StatusEffect.Regen],
    effects: [
      {
        value: AbilityEffect.StatBoost,
        target: AbilityTarget.Self,
        props: { baseValue: -3, baseStat: Stat.HP, isPercent: true },
      },
    ],
  },
  [StatusEffect.Silence]: {
    name: 'Silence I',
    trigger: AbilityTrigger.Always,
    cancels: [],
    effects: [
      {
        value: AbilityEffect.Silence,
        target: AbilityTarget.Self,
        props: { baseValue: 1 },
      },
    ],
  },
  [StatusEffect.Stun]: {
    name: 'Stun I',
    trigger: AbilityTrigger.Always,
    cancels: [],
    effects: [
      {
        value: AbilityEffect.Stun,
        target: AbilityTarget.Self,
        props: { baseValue: 1 },
      },
    ],
  },

  [StatusEffect.Barrier]: {
    name: 'Barrier I',
    trigger: AbilityTrigger.Always,
    cancels: [StatusEffect.Curse],
    effects: [
      {
        value: AbilityEffect.IncomingStatDamage,
        target: AbilityTarget.Self,
        props: { baseValue: -15, baseStat: Stat.Magic, isPercent: true },
      },
    ],
  },
  [StatusEffect.Deflect]: {
    name: 'Deflect I',
    trigger: AbilityTrigger.Always,
    cancels: [],
    effects: [
      {
        value: AbilityEffect.IncomingStatDamage,
        target: AbilityTarget.Self,
        props: { baseValue: -15, baseStat: Stat.Attack, isPercent: true },
      },
    ],
  },
  [StatusEffect.Regen]: {
    name: 'Regen I',
    trigger: AbilityTrigger.Always,
    cancels: [StatusEffect.Poison],
    effects: [
      {
        value: AbilityEffect.StatBoost,
        target: AbilityTarget.Self,
        props: { baseValue: 3, baseStat: Stat.HP, isPercent: true },
      },
    ],
  },
  [StatusEffect.Shield]: {
    name: 'Shield I',
    trigger: AbilityTrigger.Always,
    cancels: [StatusEffect.Curse],
    effects: [
      {
        value: AbilityEffect.IncomingStatDamage,
        target: AbilityTarget.Self,
        props: { baseValue: -15, baseStat: Stat.Attack, isPercent: true },
      },
    ],
  },

  [StatusEffect.Push]: {
    name: 'Push I',
    trigger: AbilityTrigger.Always,
    cancels: [],
    effects: [
      {
        value: AbilityEffect.Push,
        target: AbilityTarget.Self,
        props: { baseValue: 1 },
      },
    ],
  },
  [StatusEffect.Pull]: {
    name: 'Pull I',
    trigger: AbilityTrigger.Always,
    cancels: [],
    effects: [
      {
        value: AbilityEffect.Pull,
        target: AbilityTarget.Self,
        props: { baseValue: 1 },
      },
    ],
  },
};
