
import './App.css'
import ChaiCard from './components/ChaiCard'
import Counter from './components/Counter'
import type { Chai } from './types'
import ChaiList from './components/ChaiList'
import OrderForm from './components/OrderForm'
import Card from './components/Card'

const menu: Chai[] = [
  {id:1, name:"Masala", price:30},
  {id:2, name:"Ginger", price:35},
  {id:3, name:"Adrak", price:45},
];



function App() {
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ChaiCard name="mobile" price={4000} />
      </div>
      <div>
        <Counter/>
      </div>
      <div>
        <ChaiList
        items={menu}
        />
      </div>

      <div>
        <OrderForm
        onSubmit={(order) => {
          console.log("Placed :", order.name, order.cups);
        }}
        />
      </div>

      <div>
        <Card
        title='Welcome to the Billionare Club'
        footer={<button>Order Now</button>}
        ></Card>
      </div>
    </>
  );
}

export default App
