
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, title: 'Harry Potter and the Order of the Phoenix', genre: 'fantasy', coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/51XDBEZFD1L._SX322_BO1,204,203,200_.jpg', description: 'Now in his fifth year at Hogwarts, Harry (Daniel Radcliffe) learns that many in the wizarding community do not know the truth of his encounter with Lord Voldemort. Cornelius Fudge, minister of Magic, appoints his toady, Dolores Umbridge, as Defense Against the Dark Arts teacher, for he fears that professor Dumbledore will take his job. But her teaching is deficient and her methods, cruel, so Harry prepares a group of students to defend the school against a rising tide of evil.'},
        {id: 2, title: 'Harry Potter and the Sorcerer\'s Stone', genre: 'fantasy', coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/515W3XN03YL._SX316_BO1,204,203,200_.jpg', description: `Adaptation of the first of J.K. Rowling's popular children's novels about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents' mysterious deaths.`},
        {id: 3, title: `Harry Potter and the Goblet of Fire`, genre: `fantasy`, coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/41AF6KHRGML._SX329_BO1,204,203,200_.jpg', description: 'Harry Potter and the Goblet of Fire is a fantasy book written by British author J. K. Rowling and the fourth novel in the Harry Potter series.'}
      ]);
    });
};
