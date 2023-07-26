import React,{createContext, useContext} from 'react'

const Context = createContext()


const ContextProvider = ({children}) => {
    const products =[ 
      {
        id: 1,
        name: "Bulbasaur",
        type: ["Grass", "Poison"],
        price: 25.99,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        description: "Bulbasaur is a Grass/Poison-type Pokémon resembling a small dinosaur. It is well-known for the bulb on its back, which evolves into a beautiful flower as it grows. With sharp leaves and venomous vines, Bulbasaur excels in both attack and defense during battles. This amiable Pokémon is a loyal companion, making it a perfect addition to any trainer's team. Its unique combination of Grass and Poison abilities offers versatility, enabling it to face various opponents. Whether you're an experienced Pokémon Trainer or just starting your journey, Bulbasaur is an ideal choice for raising and growing together. Get your own Bulbasaur now and embark on an exciting adventure through the Pokémon world!",
        stock: 10,
      },
      {
        id: 2,
        name: "Charmander",
        type: ["Fire"],
        price: 27.99,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
        description: "Charmander is a Fire-type Pokémon with a burning flame at the tip of its tail. This adorable creature is full of energy and possesses strong willpower, making it a fantastic companion for trainers seeking passion and determination in their Pokémon. As it evolves, Charmander transforms into a powerful Charizard, capable of unleashing devastating Fire-type attacks on opponents. Known for its fiery personality, Charmander thrives on challenges and loves growing stronger alongside its trainer. If you desire a fiery companion who can light up your battles and warm your heart, Charmander is the perfect choice. Catch one now and forge an unbreakable bond with this fiery lizard that will stand by your side through thick and thin!",
        stock: 5,
      },
      {
        id: 3,
        name: "Squirtle",
        type: ["Water"],
        price: 23.99,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
        description: "Squirtle is a Water-type Pokémon resembling a small blue turtle with adorable charm. It is an excellent swimmer and can hide in its shell to protect itself during battles. Squirtle's evolutions, Wartortle and Blastoise, are formidable opponents with powerful Water-type moves that can soak opponents in an aquatic assault. Squirtle's friendly and gentle nature makes it a wonderful companion for trainers of all ages. With its loyalty and adaptability, Squirtle is sure to make your Pokémon adventures a true wave. If you're looking for a Pokémon that can navigate water with ease and be a steadfast companion, look no further than Squirtle. Dive into the Pokémon world with your very own Squirtle and get ready for a wave of excitement!",
        stock: 7,
      },
      {
        id: 4,
        name: "Pikachu",
        type: ["Electric"],
        price: 32.99,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
        description: "Pikachu is an Electric-type Pokémon famous for its adorable appearance and cheeks that generate electricity. It is the iconic mascot of the Pokémon franchise and is known for its role in the games and TV series. Pikachu is agile and fast, making it an ideal Pokémon for electric battles. It also has a caring and loyal personality, making it a great companion for any trainer. As Pikachu strengthens and evolves, it becomes a powerful Raichu capable of unleashing potent electric attacks on its opponents. If you're looking for an electric companion with a great personality and amazing abilities, look no further than Pikachu. Catch this adorable Electric-type Pokémon now and witness your battles light up with sparks and fun!",
        stock: 3,
      },
      {
        id: 5,
        name: "Jigglypuff",
        type: ["Fairy", "Normal"],
        price: 19.99,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png",
        description: "Jigglypuff is a Normal/Fairy-type Pokémon with a fluffy and adorable appearance. Despite its charming looks, this little Pokémon hides a powerful talent: its singing can make anyone who listens to it fall into a deep sleep. Jigglypuff is known for drawing smiley faces on the faces of sleeping trainers as a form of revenge. Despite its special ability, Jigglypuff is a sweet and affectionate companion who enjoys singing and sharing its talent with others. As Jigglypuff evolves into Wigglytuff, its charm and power increase even further, making it a joyful and formidable Pokémon in battle. If you're looking for a companion that can lull you to sleep with its song and fill your heart with joy, Jigglypuff is the perfect choice. Get your own Jigglypuff now and discover the magical world of Pokémon!",
        stock: 2,
      },
      {
        id: 6,
        name: "Meowth",
        type: ["Normal"],
        price: 21.99,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052.png",
        description: "Meowth is a Normal-type Pokémon known for its feline appearance and its unique ability to speak in human language. This intriguing Pokémon is famous for its love for shiny things, and its evolution into Persian makes it an elegant and confident companion. Meowth is a curious and playful Pokémon that enjoys the company of its trainers. Additionally, its ability to learn the 'Pay Day' move, which can double earnings after a battle, makes it a valuable ally for trainers seeking fortune in their adventures. If you desire a Pokémon with feline charm, cunning, and a unique ability to talk, Meowth is the ideal choice. Get your own Meowth now and get ready for endless mischief and shining moments in the world of Pokémon!",
        stock: 8,
      },
      {
        id: 7,
        name: "Psyduck",
        type: ["Water"],
        price: 18.99,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/site_search/054.png",
        description: "Psyduck is a Water-type Pokémon known for its perpetual headache and the ability to generate strong psychic powers when under stress. Although it may seem clumsy and absent-minded, Psyduck transforms into a powerful Golduck when it overcomes its confusion. It is a calm and friendly Pokémon that gets along well with its trainers and other Pokémon. Despite its tranquil nature, Psyduck is a strong fighter in battle, especially when under pressure. Its ability to use psychic powers makes it a valuable ally in tough situations. If you're looking for a Water-type Pokémon with a unique blend of sweetness and psychic potency, Psyduck is the perfect choice. Get your own Psyduck now and discover the incredible world of Pokémon!",
        stock: 6,
      },
      {
        id: 8,
        name: "Geodude",
        type: ["Rock", "Ground"],
        price: 20.99,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/site_search/074.png",
        description: "Geodude is a Rock/Ground-type Pokémon that has the appearance of a rock with muscular arms. Its sturdy body and ability to float in the air make it a tough Pokémon capable of withstanding powerful blows. Geodude is a loyal and brave companion, willing to face any challenge with determination. Over time, it evolves into Graveler and then into Golem, increasing its strength and becoming an even more powerful and resilient Pokémon. Its Rock/Ground type makes it highly effective in battles against Flying-type and Fire-type Pokémon. If you're looking for a strong and robust Pokémon with a unique appearance, Geodude is the ideal choice. Get your own Geodude now and get ready for an exciting journey through the world of Pokémon!",
        stock: 4,
      },
      {
        id: 9,
        name: "Eevee",
        type: ["Normal"],
        price: 30.99,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/site_search/133.png",
        description: "Eevee is a Normal-type Pokémon known for its ability to evolve into various different forms. It is one of the most versatile and popular Pokémon due to its multiple evolutions, including Vaporeon, Jolteon, Flareon, and many more. Eevee's evolution is influenced by specific factors, making it a unique species with diverse adaptations. Eevee is a loving and playful Pokémon that gets along well with trainers of all ages. Its flexibility and ability to adapt to different situations make it a reliable and loyal companion. If you're looking for a Pokémon with endless possibilities and a kind nature, Eevee is the perfect choice. Get your own Eevee now and explore the exciting evolutions that await you in the world of Pokémon!",
        stock: 9,
      },
      {
        id: 10,
        name: "Gastly",
        type: ["Ghost", "Poison"],
        price: 24.99,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/site_search/092.png",
        description: "Gastly is a Ghost/Poison-type Pokémon resembling a purple sphere with mischievous eyes. It is known for its ability to turn invisible and its mischievous nature. Gastly can evolve into Haunter and then into Gengar, increasing its ghostly power and becoming a spooky and mischievous Pokémon. Despite its eerie nature, Gastly is a loyal and playful companion that enjoys scaring other Pokémon and trainers. Its Ghost/Poison type gives it an advantage in battles against Psychic-type and Grass-type Pokémon. If you're looking for a Pokémon with a mischievous nature and supernatural powers, Gastly is the ideal choice. Get your own Gastly now and get ready for an exciting world of scares and surprises in the Pokémon world!",
        stock: 5,
      },
      {
        id: 11,
        name: "Magikarp",
        type: ["Water"],
        price: 15.99,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/site_search/129.png",
        description: "Magikarp is a Water-type Pokémon known for its weak appearance and lack of offensive abilities. However, it is a Pokémon with great potential as it evolves into Gyarados, one of the most fearsome and powerful Water/Flying-type Pokémon. Gyarados is famous for its fury and ability to destroy ships and cities with its powerful Water-type attacks. Despite Magikarp's apparent weakness, it is an adorable and courageous companion that never gives up. Its determination and perseverance make it an incredibly special Pokémon for trainers willing to invest time and effort in its training. If you're looking for a Pokémon with surprising hidden potential and an unwavering companion, Magikarp is the perfect choice. Get your own Magikarp now and get ready for an exciting journey towards greatness in the world of Pokémon!",
        stock: 3,
      },
      {
        id: 12,
        name: "Snorlax",
        type: ["Normal"],
        price: 35.99,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/site_search/143.png",
        description: "Snorlax is a Normal-type Pokémon known for its colossal size and love for sleeping and eating. This massive Pokémon is famous for blocking paths and roads with its body when it falls into a deep slumber. Although it may seem slow and lazy, Snorlax is a formidable fighter in battle, capable of crushing opponents with powerful Normal-type moves. Its Normal type provides it with resistance against many types of attacks, making it a valuable ally on any team. Despite its imposing appearance, Snorlax is a friendly and loyal companion that enjoys the company of its trainers. If you're looking for a giant and affectionate Pokémon that can defend your team with its overwhelming strength, Snorlax is the ideal choice. Get your own Snorlax now and get ready for unforgettable adventures in the world of Pokémon!",
        stock: 12,
      },
    ]
const getProductById = (id) =>{
  return products.find(producto => producto.id === Number(id)  )
}
const getProductCartById = (id) =>{
  return cart.find(producto => producto.id === Number(id))
}
const [cart, setCart] = React.useState([])

const isInCart = (id) => cart.some(producto => producto.id === Number(id))
const addProductCart = (id, quantity) => {
  if(isInCart(id)){
      setCart(cart.map(product => {
          if(product.id == id){
              product.quantity = quantity
          }
          return product
      }))
  }else{
      setCart([...cart, {...getProductById(id), quantity: quantity}])
  }
}
    const getTotal = () => {
      let total = 0
      cart.forEach(product => total += product.price * product.quantity)
      return total
    }
    return (
        <Context.Provider value={{products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal}} >
            {children}
        </Context.Provider>
    )
}
export const useCustomContext = () => useContext(Context)

export default ContextProvider

