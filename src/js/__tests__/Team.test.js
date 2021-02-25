import Team from '../Team';
import Character from '../Character';

test('Метод add должен добавлять персонажа в коллекцию', () => {
  const member = new Character('Ivan', 'Bowman');
  const team = new Team();
  team.add(member);

  expect(team.toArray()[0]).toEqual(member);
});

test('Метод add должен выбросить ошибку, если такой персонаж уже есть в коллекции', () => {
  const member = new Character('Ivan', 'Bowman');
  const team = new Team();
  team.add(member);

  expect(() => team.add(member)).toThrow();
});

test('Метод addAll должен добавлять персонажей в коллекцию', () => {
  const member1 = new Character('Ivan', 'Bowman');
  const member2 = new Character('Maria', 'Magician');
  const member3 = new Character('Oleg', 'Zombie');
  const team = new Team();
  team.addAll(member1, member2, member3, member1);

  expect(team.members.size).toBe(3);
});

test('Метод toArray возвращает массив', () => {
  const member = new Character('Ivan', 'Bowman');
  const team = new Team();
  team.add(member);

  expect(team.toArray()).toBeInstanceOf(Array);
});
