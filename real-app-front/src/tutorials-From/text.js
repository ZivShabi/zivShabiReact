import Joi, { string } from 'joi'

// const validation = Joi.object({

//     _id
// title
// subtitle
// description
// phone
// email
// web: Joi.string()
// image: Joi.object({url, alt, _id: Joi.string()}).required()
// arr: Joi.array().


// })



const _id = {
    title: "a wonderful new card",
    subtitle: "a test value for this card",
    description: "a test value for new card\na test value for new card",
    phone: "012-3211234",
    email: "qwe@gmail.com",
    web: "www.bing.com",
    image: {
        url: "https://img.izismile.com/img/img13/20201030/640/you_have_never_seen_something_like_this_640_36.jpg",
        alt: "image of something",
        _id: "65424d35cb6bcb58697bab4b"
    },
    address: {
        state: "IL",
        country: "israel",
        city: "arad",
        street: "shoham",
        houseNumber: 5,
        zip: 8920435,
        _id: "65424d35cb6bcb58697bab4c"
    },
    bizNumber: 5489940,
    likes: [],
    user_id: "65424ae9a8d1eae12d31e360",
    _id: "65424d35cb6bcb58697bab4a",
    createdAt: "2023-11-01T13:05:57.626Z",
    __v: 0
}

const validateString = Joi.string().min(2).max(256).required()
const validtePhone = Joi.string().min(9).max(11).required()
const validteEmail = Joi.string().min(5).required()
const validateWeb = Joi.string().min(14).required()
const validateImage = Joi.object({ url, alt, _id: Joi.string().min(14).max(256) }).required()
const validateAddressString = Joi.object({ title, _id: Joi.string() }).required()
const validateAddressNumber = Joi.object({ title, _id: Joi.number(1) }).required()

const validateForm = Joi.object({
    string: validateString,
    phone: validtePhone,
    email: validteEmail,
    web: validateWeb,
    image: validateImage,
    addressNumber: validateAddressNumber,
    addressString: validateAddressString,

})



const data = {
    "title": "Amazing Product",
    "subtitle": "The best product ever",
    "description": "This product will change your life. It’s incredible, amazing, and absolutely fantastic!",
    "phone": "1234567890",
    "email": "contact@example.com",
    "web": "http://example.com",
    "image": {
        "url": "http://example.com/image.jpg",
        "alt": "An amazing product image"
    },
    "address": {
        "state": "California",
        "country": "USA",
        "city": "Los Angeles",
        "street": "123 Hollywood Blvd",
        "houseNumber": 456,
        "zip": 90001
    }
}

const { error } = createCardValidationSchema.validate(data, { abortEarly: false });

if (error) {
    console.log(error.details);
}






// import Joi from 'joi'

// export const formFieldsCreateCard = [
//     { id: 'title', label: 'Title', type: 'text', name: 'title', required: true, field: 'basic', },
//     { id: 'subtitle', label: 'Subtitle', type: 'text', name: 'subtitle', required: true, field: 'basic' },
//     { id: 'description', label: 'Description', type: 'textarea', name: 'description', required: true, field: 'basic' },
//     { id: 'phone', label: 'Phone', type: 'text', name: 'phone', required: true, field: 'contact' },
//     { id: 'email', label: 'Email', type: 'email', name: 'email', required: true, field: 'contact' },
//     { id: 'web', label: 'Website', type: 'url', name: 'web', required: false, field: 'contact' },
//     {
//         type: 'group',
//         name: 'image',
//         fields: [
//             { id: 'url', label: 'Image URL', type: 'url', name: 'url', required: true, field: 'image' },
//             { id: 'alt', label: 'Image Alt', type: 'text', name: 'alt', required: true, field: 'image' },
//         ]
//     },
//     {
//         type: 'group',
//         name: 'address',
//         // validation: Joi.object(), 
//         fields: [
//             { id: 'state', label: 'State', type: 'text', name: 'state', required: true, field: 'address' },
//             { id: 'country', label: 'Country', type: 'text', name: 'country', required: true, field: 'address' },
//             { id: 'city', label: 'City', type: 'text', name: 'city', required: true, field: 'address' },
//             { id: 'street', label: 'Street', type: 'text', name: 'street', required: true, field: 'address' },
//             { id: 'houseNumber', label: 'House Number', type: 'number', name: 'houseNumber', required: true, field: 'address' },
//             { id: 'zip', label: 'Zip Code', type: 'number', name: 'zip', required: false, field: 'address' }
//         ]
//     },
// ]


// const validateString = Joi.string().min(2).max(256).required()
// const validtePhone = Joi.string().min(9).max(11).required()
// const validteEmail = Joi.string().min(5).required()
// const validateWeb = Joi.string().min(14).required()
// const validateImage = Joi.object({
//     url: Joi.string().uri().min(14).required(),
//     alt: Joi.string().min(2).max(256).optional(),
// }).required()
// const validateAddressString = Joi.object({ typeTitle: Joi.string() }).required();
// const validateAddressNumber = Joi.object({ typeNumber: Joi.number() }).required()


// const validateForm = Joi.object({
//     string: validateString,
//     phone: validtePhone,
//     email: validteEmail,
//     web: validateWeb,
//     image: validateImage,
//     addressNumber: validateAddressNumber,
//     addressString: validateAddressString,

// })


// function handleGroupValidation(group) {
//     const groupSchema = {}
//     group.fields.forEach(subField => {
//         groupSchema[subField.name] = validateForm(subField)
//     });
//     return Joi.object(groupSchema)
// }

// export const createCardValidationSchema = Joi.object(
//     formFieldsCreateCard.reduce((schema, field) => {
//         if (field.type === 'group') {
//             schema[field.name] = handleGroupValidation(field)
//         } else {
//             schema[field.name] = validateForm(field)
//         }
//         return schema
//     }, {})
// )



כרטיס 2
Title: Tech Conference 2024
Subtitle: Innovate & Inspire
Description: Join us for an exciting tech conference featuring industry leaders and innovative technologies.
    Phone: 234 - 567 - 8901
Email: contact @techconference2024.com
Website: www.techconference2024.com
Image URL: https://example.com/images/tech-conference.jpg
Image Alt: Tech Conference 2024 Banner
State: New York
Country: USA
City: New York
Street: 456 Innovation Street
House Number: 456
Zip: 10001
כרטיס 3
Title: Beachside Restaurant
Subtitle: Fresh Seafood and Views
Description: Enjoy fresh seafood while taking in beautiful ocean views.Perfect for a relaxing meal.
    Phone: 345 - 678 - 9012
Email: reservations @beachside.com
Website: www.beachside.com
Image URL: https://example.com/images/beachside-restaurant.jpg
Image Alt: Beachside Restaurant Exterior
State: Florida
Country: USA
City: Miami
Street: 789 Ocean Drive
House Number: 789
Zip: 33101
כרטיס 4
Title: Art Gallery Exhibition
Subtitle: Modern Art Showcase
Description: Discover contemporary art pieces from local and international artists in our latest exhibition.
    Phone: 456 - 789-0123
Email: info @artgallery.com
Website: www.artgallery.com
Image URL: https://example.com/images/art-gallery.jpg
Image Alt: Art Gallery Exhibition
State: Texas
Country: USA
City: Austin
Street: 101 Art Avenue
House Number: 101
Zip: 73301
כרטיס 5
Title: Fitness Club
Subtitle: Your Health Partner
Description: State - of - the - art fitness equipment and personalized training programs to help you achieve your goals.
    Phone: 567 - 890 - 1234
Email: contact @fitnessclub.com
Website: www.fitnessclub.com
Image URL: https://example.com/images/fitness-club.jpg
Image Alt: Fitness Club Gym Area
State: Illinois
Country: USA
City: Chicago
Street: 202 Fitness Drive
House Number: 202
Zip: 60601
כרטיס 6
Title: Bookstore Cafe
Subtitle: Read & Relax
Description: A quaint bookstore with a cafe offering great books and delicious coffee.A perfect spot for book lovers.
    Phone: 678 - 901 - 2345
Email: info @bookstorecafe.com
Website: www.bookstorecafe.com
Image URL: https://example.com/images/bookstore-cafe.jpg
Image Alt: Bookstore Cafe Interior
State: Washington
Country: USA
City: Seattle
Street: 303 Literary Lane
House Number: 303
Zip: 98101
