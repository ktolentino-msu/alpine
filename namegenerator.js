
  function nameGenerator() {
    return {
      names: ['Katniss','Peeta','Gale','Haymitch','Primrose','Cato','Effie','Finnick','Cinna','President Snow'],
      currentName: '',
      pickName() {
        this.currentName = this.names[Math.floor(Math.random() * this.names.length)]
      }
    };
  };
