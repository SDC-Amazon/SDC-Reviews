const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

var reviewData = [];

function generateData() {

  for (var i = 0; i < 1000000; i++) {
    let review_id = i;
    let product_id = faker.random.number({});
    let created = faker.random.number({'min' : 2000, 'max': 2019}) + '0' +                           faker.random.number({'min' : 1, 'max': 9}) + faker.random.number(                                      {'min' : 10, 'max': 30});
    let title = faker.random.words(6);
    let user_id = faker.random.number({'min' : 0, 'max': 1000})
    let body = faker.random.words(12);
    let verified = faker.random.boolean();
    let stars = faker.random.number({'min' : 1, 'max': 5});
    let style = '';
    let helpfuls = faker.random.number({'min' : 1, 'max': 20});

    reviewData.push({
      "review_id": review_id,
      "product_id": product_id,
      "created": created,
      "title": title,
      "user_id": user_id,
      "body": body,
      "verified": verified,
      "stars": stars,
      "style": style,
      "helpfuls": helpfuls
    });
  }
}

generateData()

// console.log(reviewData);


const csvWriter = createCsvWriter({
  path: `./fakeCSV/fakerReviewData.csv`,
  header: [
    {id: 'review_id', title: 'review_id'},
    {id: 'product_id', title: 'product_id'},
    {id: 'created', title: 'created'},
    {id: 'title', title: 'title'},
    {id: 'user_id', title: 'user_id'},
    {id: 'body', title: 'body'},
    {id: 'verified', title: 'verified'},
    {id: 'stars', title: 'stars'},
    {id: 'style', title: 'style'},
    {id: 'helpfuls', title: 'helpfuls'}
  ]
});

csvWriter.writeRecords(reviewData)
  .then(()=> console.log('-----CSV FILE WRITTEN-----'))
  .catch((err)=> console.log(err));


