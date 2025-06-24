import { cleanName } from '@/lib/utils/cleanName';

describe('cleanName', () => {
  it('supprime le mot "restaurant" au début', () => {
    expect(cleanName('Restaurant Chez Mario')).toBe('Chez Mario');
  });

  it('supprime le mot "restaurant" avec des majuscules/minuscules', () => {
    expect(cleanName('restaurant Chez Luigi')).toBe('Chez Luigi');
    expect(cleanName('RESTAURANT Sushi')).toBe('Sushi');
  });

  it('ne modifie pas le nom si "restaurant" est absent', () => {
    expect(cleanName('Chez Paul')).toBe('Chez Paul');
  });

  it('supprime uniquement le premier "restaurant"', () => {
    expect(cleanName('Restaurant Restaurant Test')).toBe('Restaurant Test');
  });

  it('trim les espaces', () => {
    expect(cleanName('   Restaurant   Pizza Milano  ')).toBe('Pizza Milano');
  });
});
