class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    const isExists = [...this.members].some((el) =>
      Object.values(el).every((value) => Object.values(member).includes(value))
    );
    if (isExists) {
      throw new Error('Этот персонаж уже в команде');
    }
    this.members.add(member);
  }

  addAll(...members) {
    members.forEach((member) => {
      try {
        this.add(member);
      } catch (error) {
        console.log(error.message);
      }
    });
  }

  toArray() {
    return [...this.members];
  }
}

export default Team;
