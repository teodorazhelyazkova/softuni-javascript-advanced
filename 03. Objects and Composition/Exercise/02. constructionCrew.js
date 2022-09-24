function constructionCrew(worker) {
  if (worker.dizziness) {
    const water = worker.weight * 0.1 * worker.experience;
    worker.levelOfHydrated += water;
    worker.dizziness = false;
  }
  return worker;
}

const result = constructionCrew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});

console.log(result);
