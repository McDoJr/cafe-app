
export const coffee = [
    {
        name: 'Caramel Iced Coffee',
        description: 'Savor the refreshing blend of cold-brewed coffee with creamy choco caramel syrup over ice.',
        price: 100.00,
        image: require('../assets/1.jpg'),
        positionTop: 'translate-y-[-80px]'
    },
    {
        name: 'Black Coffee',
        description: 'Simple and bold, our black coffee offers a rich, robust flavor that awakens the senses with every sip.',
        price: 75.00,
        image: require('../assets/2.jpg'),
        positionTop: 'translate-y-[-80px]'
    },
    {
        name: 'Strawberry Milk',
        description: 'A delightful blend of luscious strawberries and creamy milk.',
        price: 125.00,
        image: require('../assets/3.jpg'),
        positionTop: 'translate-y-[-80px]'
    },
    {
        name: 'Caramel Macchiato',
        description: 'Perfect blend of espresso, creamy milk, and sweet caramel drizzle.',
        price: 110.00,
        image: require('../assets/4.jpg'),
        positionTop: 'translate-y-[-0px]'
    },
    {
        name: 'Dark Coffee',
        description: 'Enjoy bold flavors of our dark coffee, a robust brew crafted to satisfy even the most discerning palate.',
        price: 99.00,
        image: require('../assets/5.jpg'),
        positionTop: 'translate-y-[-80px]'
    },
    {
        name: 'Chocolate Coffee',
        description: 'A seamless blend of smooth coffee and rich chocolate, offering a delightful fusion of beloved flavors in every sip.',
        price: 125.00,
        image: require('../assets/6.jpg'),
        positionTop: 'translate-y-[0px]'
    }
]

export const pastries = [
    {
        name: 'Choco Waffle',
        description: 'Fluffy, chocolatey waffle with a crispy exterior, topped with your favorite toppings.\n',
        price: 80.00,
        image: require('../assets/waffle.jpg'),
        positionTop: 'translate-y-[-80px]'
    },
    {
        name: 'Japanese Pancake',
        description: 'Soft, fluffy Japanese pancakes made with fresh eggs, milk, and flour.',
        price: 50.00,
        image: require('../assets/pancake.jpg'),
        positionTop: 'translate-y-[-80px]'
    },
    {
        name: 'Berry Tart',
        description: 'Savor the sweet and tart flavors of fresh berries in a buttery crust.',
        price: 75.00,
        image: require('../assets/bery.jpg'),
        positionTop: 'translate-y-[-80px]'
    },
    {
        name: 'Choco Cake',
        description: 'Indulge in our decadent choco cake, made with chocolate ganache, and moist chocolate sponge.',
        price: 120.00,
        image: require('../assets/chocokek.jpg'),
        positionTop: 'translate-y-[-0px]'
    },
    {
        name: 'Cinnamon Rolls',
        description: 'Fluffy cinnamon rolls made with fresh-baked dough. cinnamon sugar filling, and cream cheese frosting.',
        price: 55.00,
        image: require('../assets/cinnamo.jpg'),
        positionTop: 'translate-y-[-80px]'
    },
    {
        name: 'Choco Doughnuts',
        description: 'Rich and moist chocolate doughnuts, with a generous chocolate filling.',
        price: 75.00,
        image: require('../assets/doughnut.jpg'),
        positionTop: 'translate-y-[0px]'
    }
]

export const getImage = (name) => {
    return [...coffee, ...pastries].find(data => data.name === name).image;
}