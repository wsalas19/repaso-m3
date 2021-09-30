// importo la lista de 'to do's'
var Model = require('../models/model');
describe('Model', function() {

  // cada uno de los test arranca con una nueva lista (todos.js)
  beforeEach(function() {
    Model.reset();
  });

  describe('addFamily` and `listFamilies`', function() {
    xit('Inicialmente devuelve un arreglo de familias vacío', function() {
      expect(Model.listFamilies()).toEqual([]);
    });

    xit('Agrega familias a la lista', function() {
      Model.addFamily('Simpsons');
      expect(Model.listFamilies()).toHaveLength(1);
      Model.addFamily('Gorgory');
      expect(Model.listFamilies()).toHaveLength(2);
    });

    xit('Si la familia ya existe no se agrega a la lista', function() {
      Model.addFamily('Simpsons');
      expect(Model.listFamilies()).toHaveLength(1);
      Model.addFamily('Gorgory');
      expect(Model.listFamilies()).toHaveLength(2);
      Model.addFamily('Gorgory');
      expect(Model.listFamilies()).toHaveLength(2);
    });

  });

  describe('`addCharacter` y `listCharacter`', function() {
    xit('Inicialmente devuelve un arreglo vacío', function() {
      expect(Model.listCharacter()).toEqual([]);
    });

    xit('Agrega personajes al arreglo', function() {
      Model.addFamily('Simpsons');
      Model.addCharacter('Homero', 36, "Simpsons");
      expect(Model.listCharacter()).toHaveLength(1);
      Model.addCharacter('Bart', 10, "Simpsons");
      expect(Model.listCharacter()).toHaveLength(2);
    });

    xit('Inicialmente las frases del personajes deben estar vacias', function() {
      Model.addFamily('Simpsons');
      Model.addCharacter('Homero', 36, "Simpsons");
      expect(Model.listCharacter()).toHaveLength(1);
      expect(Model.listCharacter()[0].quotes).toEqual([]);
    });

    xit('Agrega correctamente la edad del personaje', function() {
      Model.addFamily('Simpsons');
      Model.addCharacter('Homero', 36, "Simpsons");
      expect(Model.listCharacter()).toHaveLength(1);
      expect(Model.listCharacter()[0].age).toEqual(36);
      Model.addCharacter('Bart', 10, "Simpsons");
      expect(Model.listCharacter()).toHaveLength(2);
      expect(Model.listCharacter()[1].age).toEqual(10);
    });

    xit('Agrega correctamente la familia del personaje mediante el indice en el arreglo de familias', function() {
      Model.addFamily('Simpsons');
      Model.addFamily('Gorgory');
      Model.addCharacter('Homero', 36, "Simpsons");
      expect(Model.listCharacter()).toHaveLength(1);
      expect(Model.listCharacter()[0].familyId).toEqual(1);
      Model.addCharacter('Rafa', 10, "Gorgory");
      expect(Model.listCharacter()).toHaveLength(2);
      expect(Model.listCharacter()[1].familyId).toEqual(2);
    });

    xit('Si no se provee un nombre de familia valido no se agrega al arreglo', function() {
      Model.addFamily('Simpsons');
      Model.addFamily('Gorgory');
      Model.addCharacter('Homero', 36, "Flanders");
      expect(Model.listCharacter()).toHaveLength(0);
    });

    xit('Si recibe un nombre de familia como parámetro debería filtrar solo los personajes de ella', function() {
      Model.addFamily('Simpsons');
      Model.addFamily('Gorgory');
      Model.addCharacter('Homero', 36, "Simpsons");
      Model.addCharacter('Bart', 10, "Simpsons");
      Model.addCharacter('Rafa', 10, "Gorgory");
      expect(Model.listCharacter('Simpsons')).toHaveLength(2);
      expect(Model.listCharacter('Simpsons')[0].name).toEqual("Homero");
      expect(Model.listCharacter('Simpsons')[1].name).toEqual("Bart");
      expect(Model.listCharacter('Gorgory')).toHaveLength(1);
      expect(Model.listCharacter('Gorgory')[0].name).toEqual("Rafa");
    });

    xit('Si recibe un segundo parámetro en true debe devolver únicamente los nombres de los personajes', function() {
      Model.addFamily('Simpsons');
      Model.addFamily('Gorgory');
      Model.addCharacter('Homero', 36, "Simpsons");
      Model.addCharacter('Bart', 10, "Simpsons");
      Model.addCharacter('Rafa', 10, "Gorgory");
      expect(Model.listCharacter('Simpsons', true)).toHaveLength(2);
      expect(Model.listCharacter('Simpsons', true)[0]).toEqual("Homero");
      expect(Model.listCharacter('Simpsons', true)[1]).toEqual("Bart");
      expect(Model.listCharacter('Gorgory', true)).toHaveLength(1);
      expect(Model.listCharacter('Gorgory', true)[0]).toEqual("Rafa");
    });
  });

  describe('`showQuotes` y `addQuote`', function() {
    xit('Inicialmente devuelve un arreglo vacío', function() {
      Model.addFamily('Simpsons');
      Model.addCharacter('Homero', 36, "Simpsons");
      expect(Model.showQuotes('Homero')).toEqual([]);
    });

    xit('Agrega una frase al personaje', function() {
      Model.addFamily('Simpsons');
      Model.addCharacter('Homero', 36, "Simpsons");
      Model.addQuote('Homero', {text: 'Que no panda el cunico'});
      expect(Model.showQuotes('Homero')).toHaveLength(1);
      expect(Model.showQuotes('Homero')[0].text).toEqual('Que no panda el cunico');
      Model.addQuote('Homero', {text: 'Soy intelectual, muy inteligente'});
      expect(Model.showQuotes('Homero')).toHaveLength(2);
      expect(Model.showQuotes('Homero')[1].text).toEqual('Soy intelectual, muy inteligente');
    });

    xit('Si no se le pasa texto o es un string vacio no se agrega la frase al personaje', function() {
      Model.addFamily('Simpsons');
      Model.addCharacter('Homero', 36, "Simpsons");
      Model.addQuote('Homero', {});
      expect(Model.showQuotes('Homero')).toHaveLength(0);
      Model.addQuote('Homero', {text: ''});
      expect(Model.showQuotes('Homero')).toHaveLength(0);
    });

    xit('Devuelve un arreglo vacío si el personaje no existe', function() {
      Model.addFamily('Simpsons');
      Model.addCharacter('Homero', 36, "Simpsons");
      Model.addQuote('Homero', {text: 'Que no panda el cunico'});
      expect(Model.showQuotes('Bart')).toHaveLength(0);
    });

    xit('Setea la temporada de la frase y si no es especificada se coloca en false', function() {
      Model.addFamily('Simpsons');
      Model.addCharacter('Homero', 36, "Simpsons");
      Model.addQuote('Homero', {text: 'Que no panda el cunico', season: 14});
      expect(Model.showQuotes('Homero')).toHaveLength(1);
      expect(Model.showQuotes('Homero')[0].text).toEqual('Que no panda el cunico');
      expect(Model.showQuotes('Homero')[0].season).toEqual(14);
      Model.addQuote('Homero', {text: 'Miiiiiiilhooooooooouse'});
      expect(Model.showQuotes('Homero')).toHaveLength(2);
      expect(Model.showQuotes('Homero')[1].text).toEqual('Miiiiiiilhooooooooouse');
      expect(Model.showQuotes('Homero')[1].season).toBe(false);
    });

  });

});
