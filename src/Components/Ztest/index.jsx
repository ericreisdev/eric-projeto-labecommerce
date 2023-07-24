{/* <CardsContainer>
        {pokemons
          .filter((pokemon) => {
            if (pokemon.id.includes(searchId)) {
              return pokemon;
            } else if (!searchId) {
              return true;
            }
            return false;
          })
          .filter((pokemon) => {
            if (
              pokemon.name.english
                .toLowerCase()
                .includes(searchName.toLowerCase())
            ) {
              return pokemon;
            } else if (!searchName) {
              return true;
            }
            return false;
          })
          .filter((pokemon) => {
            if (searchForType === "") {
              return true;
            } else {
              return pokemon.type.includes(searchForType);
            }
          })
          .sort((a, b) => {
            const firstName = a.name.english.toUpperCase();
            const lastName = b.name.english.toUpperCase();
            if (orderItem === "selecione") {
              return 0;
            } else if (firstName < lastName) {
              return orderItem === "asc" ? -1 : 1;
            } else if (firstName > lastName) {
              return orderItem === "desc" ? -1 : 1;
            }
            return 0;
          })
          .map((pokemon) => {
            return (
              <PokemonCard
                cardColor={getColors(pokemon.type[0])}
                key={pokemon.id}
                pokemon={pokemon}
              />
            );
          })}
      </CardsContainer>

<ListContainer>
{jobs
  .filter((job) => {
    return job.title.includes(query) || job.description.includes(query);
  })
  .filter((job) => {
    return job.price >= minSalary || minSalary === "";
  })
  .filter((job) => {
    return job.price <= maxSalary || maxSalary === "";
  })
  .sort((currentJob, nextJob) => {
    switch (sorting) {
      case "price":
        return currentJob.price - nextJob.price;
      case "dueDate":
        return new Date(currentJob.dueDate) - new Date(nextJob.dueDate);
      default:
        return currentJob.title.localeCompare(nextJob.title);
    }
  })
  .sort(() => {
    if (orderItem === "asc") {
      return 0;
    } else {
      return -1;
    }
  })
  .map((job) => {
    return <Card key={job.id} job={job} />;
  })}
</ListContainer> */}