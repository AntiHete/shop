import Header from "./Components/Header"; // Імпорт компонента заголовку
import Footer from "./Components/Footer"; // Імпорт компонента підвалу
import Items from "./Components/Items"; // Імпорт компонента елементів
import Categories from "./Components/Categories"; // Імпорт компонента категорій
import ShowFullItem from "./Components/ShowFullItem"; // Імпорт компонента повного елемента

class App extends React.Component { // Клас App, який розширює React.Component
  constructor(props) { // Конструктор класу
    super(props)
    this.state = { // Початковий стан компонента
      orders: [], // Замовлення
      currentItems: [], // Поточні елементи
      items: [
        {
          id: 1,
          title: 'Яблуко',
          img: 'apple.jpeg',
          desc: 'Це смачний і соковитий фрукт, доступний в різних сортах, відтінках та розмірах.',
          category: 'fruit',
          weight: '1 kg',
          price: '34.50'
        },
        {
          id: 2,
          title: 'Капуста',
          img: 'Cabbage.jpeg',
          desc: 'Соковита та хрустка овочева культура, яка багата вітамінами С та К, капуста є важливим джерелом антиоксидантів та волокон.',
          category: 'vegetable',
          weight: '1 kg',
          price: '13.76'
        },
        {
          id: 3,
          title: 'Банан',
          img: 'banana.jpeg',
          desc: 'Банан - це популярний фрукт з приємним смаком, яскраво-жовтою шкіркою та кремовою м`якотю.',
          category: 'fruit',
          weight: '1 kg',
          price: '92.00'
        },
        {
          id: 4,
          title: 'Апельсин',
          img: 'orange.jpeg',
          desc: 'Соковиті цитрусові, багаті вітаміном С, які додають свіжості смаку та зміцнюють імунну систему.',
          category: 'fruit',
          weight: '1 kg',
          price: '49.50'
        },
        {
          id: 5,
          title: 'Помідор',
          img: 'tomato.jpeg',
          desc: 'Смачні та сочні овочі, які можна використовувати як базовий інгредієнт для супів, соусів та салатів, вони також багаті антиоксидантами.',
          category: 'vegetable',
          weight: '1 kg',
          price: '85.00'
        },
        {
          id: 6,
          title: 'Огірок',
          img: 'cucumber.jpeg',
          desc: 'Свіжі та хрусткі овочі, які ідеально підходять для салатів, маринадів та закусок, вони також містять багато води, допомагаючи зберегти гідратацію.',
          category: 'vegetable',
          weight: '1 kg',
          price: '120.00'
        },
        {
          id: 7,
          title: 'Морква',
          img: 'carrot.jpeg',
          desc: 'Солодкий та соковитий коренеплід, ідеально підходить для сирої споживання або приготування в різноманітних стравах.',
          category: 'vegetable',
          weight: '1 kg',
          price: '23.00'
        },
        {
          id: 8,
          title: 'Бульба',
          img: 'potato.jpeg',
          desc: 'Смачна і живильна картопля, джерело вуглеводів, калію та вітаміну С, яка підходить для різноманітних страв та гарно поєднується з іншими продуктами.',
          category: 'vegetable',
          weight: '1 kg',
          price: '32.50'
        },
        {
          id: 9,
          title: 'М`ясо курки',
          img: 'chicken.jpeg',
          desc: 'Ніжне та соковите м`ясо курки, багате білком та зниженим вмістом жиру, відмінний джерело вітамінів групи В та мінералів.',
          category: 'meat',
          weight: '1 kg',
          price: '150.40'
        },
        {
          id: 10,
          title: 'Свинина',
          img: 'pork.jpeg',
          desc: 'Смачна та м`ясиста свинина, яка може бути використана для приготування різноманітних страв, джерело білка та заліза.',
          category: 'meat',
          weight: '1 kg',
          price: '210.39'
        },
        {
          id: 11,
          title: 'Яловичина',
          img: 'beef.jpeg',
          desc: 'Сочевидна та смачна яловичина, багата білком та жиром, відмінне джерело заліза та вітамінів групи B, ідеальний вибір для різноманітних страв, включаючи стейки та гуляші.',
          category: 'meat',
          weight: '1 kg',
          price: '268.00'
        },
        {
          id: 12,
          title: 'Сьомга',
          img: 'salmon.jpeg',
          desc: ' Ніжне та багате на Омега-3 жирні кислоти м`ясо лосося, яке покращує здоров`я серця, сприяє зміцненню кісток та підтримує нормальний функціонал мозку.',
          category: 'fish',
          weight: '1 kg',
          price: '217.90'
        },
        {
          id: 13,
          title: 'Креветки',
          img: 'krevetky.jpeg',
          desc: 'Смачні та низькокалорійні креветки, які містять велику кількість білка та мінералів, вони добре поєднуються з різноманітними стравами та ідеально підходять для приготування морських деликатесів.',
          category: 'fish',
          weight: '1 kg',
          price: '339.00'
        },
        {
          id: 14,
          title: 'Кальмар',
          img: 'squid.jpeg',
          desc: 'Джерело легкого та ніжного м`яса, кальмари мають низький вміст жиру та високий вміст білка, що робить їх ідеальними для здорового харчування, вони також мають важливі мінерали, такі як цинк та мідь.',
          category: 'fish',
          weight: '1 kg',
          price: '254.13'
        },
        {
          id: 15,
          title: 'Молоко',
          img: 'milk.jpeg',
          desc: 'Свіже та поживне молоко, що містить багато кальцію та вітамінів, важливих для зміцнення кісток та здоров`я.',
          category: 'milk',
          weight: '840 g',
          price: '43.90'
        },
        {
          id: 16,
          title: 'Сир',
          img: 'cheese.jpeg',
          desc: 'Смачний та різноманітний сир, багатий білком та кальцієм, який може використовуватися як самостійний продукт або як складник різноманітних страв.',
          category: 'milk',
          weight: '1 kg',
          price: '376.00'
        },
        {
          id: 17,
          title: 'Йогурт',
          img: 'yogurt.jpeg',
          desc: 'Освіжаючий та корисний йогурт, містить живі культури бактерій, які сприяють здоров`ю кишечника та підтримують імунітет.',
          category: 'milk',
          weight: '280 g ',
          price: '33.90'
        },
        {
          id: 18,
          title: 'Кефір',
          img: 'kefir.jpeg',
          desc: 'Напій з кефіру, виготовлений з багатою культурою бактерій, який допомагає підтримувати здоровий шлунково-кишковий тракт та загальне здоров`я.',
          category: 'milk',
          weight: '840 g',
          price: '48.90'
        },
        {
          id: 19,
          title: 'Масло',
          img: 'butter.jpeg',
          desc: 'Поживне та рідке масло, що містить корисні жирні кислоти, використовується для приготування їжі та додає смак до страв.',
          category: 'milk',
          weight: '200 g',
          price: '77.90'
        },
        {
          id: 20,
          title: 'Сметана',
          img: 'smetana.jpeg',
          desc: 'Кремова та ароматна сметана, використовується як додаток до страв або як інгредієнт для приготування соусів та заправок.',
          category: 'milk',
          weight: '325 g',
          price: '40.25'
        },
	{
          id: 21,
          title: 'Хліб',
          img: 'bread.jpeg',
          desc: 'Популярний хліб, виготовлений з пшеничного борошна, є основним джерелом вуглеводів та важливих поживних речовин, таких як вітаміни групи B та залізо.',
          category: 'crops',
          weight: '350 g',
          price: '34.50'
        },
	{
          id: 22,
          title: 'Рис',
          img: 'rice.jpeg',
          desc: 'Універсальна крупа рису, яка використовується як основа для багатьох страв, містить вуглеводи, білки та деякі вітаміни та мінерали.',
          category: 'crops',
          weight: '1 kg',
          price: '47.30'
        },
	{
          id: 23,
          title: 'Спагеті',
          img: 'Spaghetti.jpeg',
          desc: 'Легка та смачна паста, виготовлена з пшеничного борошна, джерело швидких вуглеводів, які швидко надають енергії, а також вмісту білків.',
          category: 'crops',
          weight: '400 g',
          price: '39.40'
        },
	{
          id: 24,
          title: 'Вівсяна крупа',
          img: 'oatmeal.jpeg',
          desc: 'Це здорова та смачна крупа, яка має високий вміст волокон, білка та важливих мінералів, таких як залізо та магній.',
          category: 'crops',
          weight: '1 kg',
          price: '44.90'
        },
	{
          id: 25,
          title: 'Гречана крупа',
          img: 'buckwheat.jpeg',
          desc: 'Це давній продукт, який є джерелом багатьох поживних речовин, включаючи білок, вуглеводи, вітаміни та мінерали.',
          category: 'crops',
          weight: '1 kg',
          price: '23.00'
        },
	{
          id: 26,
          title: 'Ячмінна крупа',
          img: 'Barley.jpeg',
          desc: 'Ця крупа має приємний смак та текстуру і містить багато важливих поживних речовин, таких як вуглеводи, білок, вітаміни групи B та різноманітні мінерали.',
          category: 'crops',
          weight: '1 kg',
          price: '14.80'
        },
	{
          id: 27,
          title: 'Вода',
          img: 'Water.jpeg',
          desc: 'Найважливіший напій для забезпечення здоров`я та життєдіяльності. Чиста вода підтримує гідратацію організму, допомагає виводити токсини та забезпечує нормальне функціонування всіх систем.',
          category: 'drinks',
          weight: '1.5 kg',
          price: '21.30'
        },
	{
          id: 28,
          title: 'Ананасово-Яблучний сік',
          img: 'juice1.jpeg',
          desc: 'Освіжаючий і смачний напій, що поєднує в собі солодкість ананаса та яблука, багатий вітамінами та антиоксидантами.',
          category: 'drinks',
          weight: '1 kg',
          price: '45.60'
        },
	{
          id: 29,
          title: 'Мультивітамінний сік',
          img: 'juice2.jpeg',
          desc: 'Напій, що містить комбінацію різних фруктів та овочів, спеціально розроблений для підтримки загального здоров`я та імунної системи.',
          category: 'drinks',
          weight: '1 kg',
          price: '43.60'
        },
	{
          id: 30,
          title: 'Томатний сік',
          img: 'juice3.jpeg',
          desc: 'Натуральний напій, виготовлений зі свіжих помідорів, багатий вітаміном С та лікопеном, що сприяє покращенню здоров`я серця.',
          category: 'drinks',
          weight: '1 kg',
          price: '50.60'
        },
	{
          id: 31,
          title: 'Персиковий сік',
          img: 'juice4.jpeg',
          desc: 'Сок зі солодкого та ароматного персика, який має приємний смак та містить вітаміни та мінерали, корисні для організму.',
          category: 'drinks',
          weight: '1 kg',
          price: '43.60'
        },
	{
          id: 32,
          title: 'Coca-cola',
          img: 'cola.jpeg',
          desc: 'Популярний газований напій з освіжаючим смаком та карамельною ноткою, що додає енергії та задоволення.',
          category: 'drinks',
          weight: '1 kg',
          price: '34.90'
        },
	{
          id: 33,
          title: 'Fanta',
          img: 'Fanta.jpeg',
          desc: 'Яскравий та освіжаючий газований напій з фруктовим смаком, що дарує відчуття свіжості та задоволення.',
          category: 'drinks',
          weight: '1 kg',
          price: '47.40'
        },
	{
          id: 34,
          title: 'Холодний чай',
          img: 'icetea.jpeg',
          desc: 'Напій, зроблений на основі чаю, охолоджений та збагачений різними ароматами та смаками, ідеальний для вживання у спекотні дні.',
          category: 'drinks',
          weight: '1 kg',
          price: '25.20'
        },
	{
          id: 35,
          title: 'Кава',
          img: 'coffee.jpeg',
          desc: 'Ароматний та тонізуючий напій, який містить кофеїн та інші стимулюючі речовини, що допомагають підтримувати бадьорість і концентрацію.',
          category: 'drinks',
          weight: '250 g',
          price: '123.90'
        },
	{
          id: 36,
          title: 'Шоколад',
          img: 'chocolate.jpeg',
          desc: 'Ласощі, що роблять настрій, виготовлені з какао-бобів та цукру, доступні в різних смаках та формах, є чудовим джерелом задоволення.',
          category: 'sweets',
          weight: '100 g',
          price: '51.90'
        },
	{
          id: 37,
          title: 'Цукерки',
          img: 'sweets.jpeg',
          desc: 'Різноманітні ласощі, які можуть містити різні інгредієнти, такі як шоколад, карамель, фрукти та горішки, створені для задоволення солодкого пристрастя.',
          category: 'sweets',
          weight: '285 g',
          price: '184.50'
        },
	{
          id: 38,
          title: 'Печиво',
          img: 'cookies.jpeg',
          desc: 'Легкі та хрусткі випічка, доступна в безлічі смаків і форм, чудово підходить для чаю або кави, є улюбленим десертом багатьох.',
          category: 'sweets',
          weight: '150 g',
          price: '34.40'
        },
	{
          id: 39,
          title: 'Тістечка',
          img: 'cakes.jpeg',
          desc: 'Дрібні солодкі вироби, виготовлені з легкого тіста та різноманітних начинок.',
          category: 'sweets',
          weight: '360 g',
          price: '156.90'
        },
	{
          id: 40,
          title: 'Морозиво',
          img: 'Icecream.jpeg',
          desc: 'Освіжаючий десерт, який має різноманітні смаки та текстури, виготовлений з молока, вершків, цукру та інших інгредієнтів, додає радість та комфорт у спекотні дні.',
          category: 'sweets',
          weight: '155 g',
          price: '52.30'
        },
      ], // Елементи
      showFullItem: false, // Показувати повний елемент
      fullItem: {} // Повний елемент
    }
    this.state.currentItems = this.state.items // Встановлення початкових поточних елементів
    this.addToOrder = this.addToOrder.bind(this) // Прив'язка контексту до методу addToOrder
    this.deleteOrder = this.deleteOrder.bind(this) // Прив'язка контексту до методу deleteOrder
    this.chooseCategory = this.chooseCategory.bind(this) // Прив'язка контексту до методу chooseCategory
    this.onShowItem = this.onShowItem.bind(this) // Прив'язка контексту до методу onShowItem
    this.searchItems = this.searchItems.bind(this) // Прив'язка контексту до методу searchItems
  }
  
  componentDidMount() { // Після монтування компонента
    this.setState({ currentItems: this.state.items }); // Встановлення початкових поточних елементів
  }

  searchItems(searchTerm) { // Пошук елементів за терміном пошуку
    const filteredItems = this.state.items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) || // Пошук за назвою
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) // Пошук за категорією
    );
    this.setState({ currentItems: filteredItems }); // Встановлення поточних елементів після фільтрації
  }

  render() { // Рендер компонента
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} searchItems={this.searchItems} /> {/* Відображення заголовка замовлень та пошуку */}
        <Categories chooseCategory={this.chooseCategory} /> {/* Відображення категорій */}
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} /> {/* Відображення елементів */}
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />} {/* Умовне відображення повного елемента */}
        <Footer /> {/* Відображення підвалу */}
      </div>
    );
  }

  onShowItem(item) { // Показати повний елемент
    this.setState({fullItem: item}) // Встановлення поточного повного елемента
    this.setState({ showFullItem: !this.state.showFullItem}) // Зміна стану відображення повного елемента
  }

  chooseCategory(category) { // Вибір категорії
    if(category === 'all') { // Якщо вибрана категорія - "усі"
      this.setState({ currentItems: this.state.items}) // Встановлення усіх елементів в поточні
      return
    }

    this.setState({ // Встановлення елементів в поточні за вибраною категорією
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) { // Видалення замовлення
    this.setState({orders: this.state.orders.filter(el => el.id !== id)}) // Видалення елемента зі змовлення за його ідентифікатором
  }

  addToOrder(item) { // Додавання до замовлення
    let isInArray = false // Флаг, який показує, чи вже є елемент у замовленні
    this.state.orders.forEach(el => { // Перевірка кожного елемента у замовленні
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray) // Якщо елемента немає у замовленні
      this.setState({orders: [...this.state.orders, item] }) // Додавання елемента до замовлення
  }
}

export default App; // Експорт компонента App
