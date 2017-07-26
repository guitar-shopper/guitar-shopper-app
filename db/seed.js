'use strict'

// const db = require('APP/db')
const db = require('APP/db')
    // , {User, Thing, Favorite, Promise} = db
    , { User, Guitar, Brand, Promise } = db
    , {mapValues} = require('lodash');

// const faker = require('faker');

function seedEverything() {
  const seeded = {
      users: users(),
      brands: brands(),
      // things: things(),
  };

  seeded.guitars = guitars(seeded);

  // seeded.favorites = favorites(seeded);

  return Promise.props(seeded)
}


const users = seed(User, {
  god: {
    email: 'god@example.com',
    name: 'So many names',
    password: '1234',
  },
  barack: {
    name: 'Barack Obama',
    email: 'barack@example.gov',
    password: '1234'
  },
});

// const things = seed(Thing, {
//   surfing: {name: 'surfing'},
//   smiting: {name: 'smiting'},
//   puppies: {name: 'puppies'},
// })

const guitars = seed(Guitar, ({brands}) => ({
        guitar1: {
            model: 'X Series Custom X-000CE Auditorium Acoustic-Electric Guitar Black',
            category: 'Acoustic',
            orientation: 'right',
            description: 'A very solid Martin guitar',
            imageURL: 'http://media.guitarcenter.com/is/image/MMGS7/X-Series-Custom-X-000CE-Auditorium-Acoustic-Electric-' +
            'Guitar-Black/J28726000001000-00-500x500.jpg',
            price: 699.99,
            brand_id: brands.Martin.id
        },
        guitar2: {
            model: 'Custom D Classic Mahogany Dreadnought Acoustic Guitar ',
            category: 'Acoustic',
            orientation: 'right',
            description: 'A very solid Martin guitar',
            imageURL: 'http://static.weloveshopping.com/shop/music-boulevard/481881.jpg',
            price: 599.99,
            brand_id: brands.Martin.id
        },
        guitar3: {
            model: '200 Series 214ce DLX Grand Auditorium Acoustic-Electric Guitar',
            category: 'Acoustic',
            orientation: 'right',
            description: 'A very solid Taylor guitar',
            imageURL: 'http://images.samash.com/sa/T21/T214CEDLX-P.fpx?cvt=jpg',
            price: 1199.99,
            brand_id: brands.Taylor.id
        },
        guitar4: {
            model: 'GS Mini Koa Acoustic-Electric Guitar Natural',
            category: 'Acoustic',
            orientation: 'right',
            description: 'A very solid Taylor guitar',
            imageURL: 'https://www.taylorguitars.com/sites/default/files/styles/guitar' +
            '_detail_horizontal/public/responsive-guitar-detail/Taylor-GSMini-K-FLTD-fr-' +
            '2014.png?itok=x4VdlsAd',
            price: 799.99,
            brand_id: brands.Taylor.id
        },
        guitar5: {
            model: 'Les Paul Tribute T 2017 Electric Guitar',
            category: 'Electric',
            orientation: 'right',
            description: 'A very solid Gibson guitar',
            imageURL: 'http://images.gibson.com/Products/Electric-Guitars/2017/USA/Les-Paul-Tribute/' +
            'LPTR17FHNH1_MAIN_HERO_01.jpg',
            price: 899.99,
            brand_id: brands.Gibson.id
        },
        guitar6: {
            model: 'Les Paul Studio Deluxe IV Electric Guitar',
            category: 'Electric',
            orientation: 'right',
            description: 'A very solid Gibson guitar',
            imageURL: 'http://media.guitarcenter.com/is/image' +
            '/MMGS7/Les-Paul-Studio-Deluxe-IV-Electric-Guitar-Caribbean-Night' +
            '/J43876000002000-00-500x500.jpg',
            price: 899.99,
            brand_id: brands.Gibson.id
        },
        guitar7: {
            model: 'FA-135CE Cutaway Concert Acoustic-Electric Guitar',
            category: 'Acoustic',
            orientation: 'right',
            description: 'A very solid Fender guitar',
            imageURL: 'http://media.musiciansfriend.com/is/image/MMGS7/FA-135CE-' +
            'Cutaway-Concert-Acoustic-Electric-Guitar-3-Color-Sunburst/' +
            'H70301000002000-00-500x500.jpg',
            price: 149.99,
            brand_id: brands.Fender.id
        },
        guitar8: {
            model: 'American Standard Stratocaster Electric Guitar',
            category: 'Electric',
            orientation: 'right',
            description: 'A very solid Fender guitar',
            imageURL: 'http://media.guitarcenter.com/is/image/MMGS7/American-' +
            'Standard-Stratocaster-Electric-Guitar-Sienna-Sunburst-Maple-' +
            'Fingerboard/H80805000002001-00-500x500.jpg',
            price: 1099.99,
            brand_id: brands.Fender.id
        },
        guitar9: {
            model: 'AEG1812II AEG 12-String Acoustic-Electric Guitar Dark Violin Sunburst',
            category: 'Acoustic',
            orientation: 'right',
            description: 'A very solid Ibanez guitar',
            imageURL: 'https://www.bhphotovideo.com/images/images2500x2500/ibanez_aeg1812iidvs_aeg18_12_' +
            'string_acoustic_1214827.jpg',
            price: 299.99,
            brand_id: brands.Ibanez.id
        },
        guitar10: {
            model: 'JEM77WDP Steve Vai Signature JEM Premium Series 6-String Electric Guitar Natural',
            category: 'Acoustic',
            orientation: 'right',
            description: 'A very solid Ibanez guitar',
            imageURL: 'http://media.guitarcenter.com/is/image/MMGS7/JEM77WDP-Steve-Vai-Signature-' +
            'JEM-Premium-Series-6-String-Electric-Guitar-Natural/J44048000001000-00-500x500.jpg',
            price: 1699.99,
            brand_id: brands.Ibanez.id
        },
    })
);

const brands = seed(Brand, {
    Martin: {
        name: 'Martin',
        address: '510 Sycamore Street',
        city: 'Nazareth',
        state: 'PA',
        phone: '610-759-2837',
        location: [],
        description: 'One of the world’s leading acoustic instrument makers, Martin guitars ' +
        'are hand-made by skilled craftsmen and women, who use a combination ' +
        'of new design and techniques, along with those introduced by the company founder.',
        websiteURL: 'https://www.martinguitar.com/'
    },
    Taylor: {
        name: 'Taylor',
        address: '1980 Gillespie Way',
        city: 'El Cajon',
        state: 'CA',
        phone: '(619) 258-1207',
        location: [],
        description: 'Taylor Guitars was founded in 1974 by Bob Taylor and Kurt Listug, and has ' +
        'grown into the leading global builder of premium acoustic guitars. Renowned for blending modern, ' +
        'innovative manufacturing techniques with a master craftsman\'s attention to detail, Taylor acoustic ' +
        'guitars are widely considered among the best-sounding and easiest to play in the world.',
        websiteURL: 'https://www.taylorguitars.com/'
    },
    Gibson: {
        name: 'Gibson',
        address: 'Gibson USA',
        city: 'Nashville',
        state: 'TN',
        phone: '1-800-4GIBSON',
        location: [],
        description: 'The home of Gibson electric guitars today is "Gibson USA," built in 1974 in Nashville ' +
        'specifically for the production of Gibson\'s Les Paul guitars. Although the entire guitar ' +
        'industry went through a slump in the late \'70s, the spirit of innovation remained strong at Gibson.',
        websiteURL: 'http://www.gibson.com/'
    },
    Fender: {
        name: 'Fender',
        address: '17600 n. Perimeter Drive, Suite 100',
        city: 'Scottsdale',
        state: 'AZ',
        phone: '(480) 596-9690 ',
        location: [],
        description: 'With an illustrious history dating back to 1946, Fender has touched and transformed music ' +
        'worldwide and in nearly every genre: rock ‘n’ roll, country and western, jazz, rhythm and blues and many others. ',
        websiteURL: 'www.fender.com'
    },
    Ibanez: {
        name: 'Ibanez',
        address: 'not swag',
        city: 'Nagoya, Aichi',
        state: 'Japan',
        phone: 'still swag',
        location: [],
        description: 'Ibanez (アイバニーズ Aibanīzu) is a Japanese guitar brand owned by Hoshino Gakki. ' +
        'Based in Nagoya, Aichi, Japan, Hoshino Gakki were one of the first Japanese musical instrument companies to ' +
        'gain a significant foothold in import guitar sales in the United States and Europe, as well as the first brand of ' +
        'guitars to mass-produce the seven-string guitar and eight-string guitar.',
        websiteURL: 'www.ibanez.com'
    },
});

// console.log('~~~~', Favorite)
//
// const favorites = seed(Favorite,
//   // We're specifying a function here, rather than just a rows object.
//   // Using a function lets us receive the previously-seeded rows (the seed
//   // function does this wiring for us).
//   //
//   // This lets us reference previously-created rows in order to create the join
//   // rows. We can reference them by the names we used above (which is why we used
//   // Objects above, rather than just arrays).
//   ({users, things}) => ({
//     // The easiest way to seed associations seems to be to just create rows
//     // in the join table.
//     'obama loves surfing': {
//       user_id: users.barack.id,    // users.barack is an instance of the User model
//                                    // that we created in the user seed above.
//                                    // The seed function wires the promises so that it'll
//                                    // have been created already.
//       thing_id: things.surfing.id  // Same thing for things.
//     },
//     'god is into smiting': {
//       user_id: users.god.id,
//       thing_id: things.smiting.id
//     },
//     'obama loves puppies': {
//       user_id: users.barack.id,
//       thing_id: things.puppies.id
//     },
//     'god loves puppies': {
//       user_id: users.god.id,
//       thing_id: things.puppies.id
//     },
//   })
// )

if (module === require.main) {
  db.didSync
    .then(() => db.sync({force: true}))
    .then(seedEverything)
    .finally(() => process.exit(0))
}

class BadRow extends Error {
  constructor(key, row, error) {
    super(error)
    this.cause = error
    this.row = row
    this.key = key
  }

  toString() {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
  }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed(Model, rows) {
    console.log("MADE IT INTO SEED FUNCTION");
    return (others = {}) => {
        if (typeof rows === 'function') {
            rows = Promise.props(
                mapValues(others,
                    other =>
                        // Is other a function? If so, call it. Otherwise, leave it alone.
                        typeof other === 'function' ? other() : other)
                ).then(rows)
        }

    return Promise.resolve(rows)
      .then(rows => Promise.props(
        Object.keys(rows)
          .map(key => {
              const row = rows[key]
              console.log("MADE IT INTO PROMISE.RESOLVE");
              return {
                  key,
              value: Promise.props(row)
                .then(row => {
                    if (!Model) console.log('!!!', Model.create)
                    console.log('!!!', Model)
                    return Model.create(row)
                            .catch(error => { throw new BadRow(key, row, error) })
                    }
                )
                  .catch(console.error)
            }
          }).reduce(
            (all, one) => Object.assign({}, all, {[one.key]: one.value}),
            {}
          )
        )
      )
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
      })
  }
}

// module.exports = Object.assign(seed, {users, things, favorites});
module.exports = Object.assign(seed, {users, guitars, brands});
// module.exports = Object.assign(seed, { users });

