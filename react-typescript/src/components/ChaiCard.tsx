interface ChaiCardProp{
    name: string;
    price: number;
    isSpecial?:boolean;
}

function ChaiCard({ name, price, isSpecial = false }: ChaiCardProp) {
  return (
    <article>
      <h2>Welcome to the Billionare club</h2>
      <pre>
        {name} {isSpecial && <span>*</span>}
      </pre>
      <p>{price}</p>
    </article>
  )
}

export default ChaiCard;;