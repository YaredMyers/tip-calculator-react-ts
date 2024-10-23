import MenuItem from "./components/MenuItem.tsx";
import OrderContents from "./components/OrderContents.tsx";
import OrderTotals from "./components/OrderTotals.tsx";
import TipPercentageForm from "./components/TipPercentageForm.tsx";

import { menuItems } from "./data/db.ts";

import { useOrder } from "./hooks/useOrder.ts";

function App() {
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();

  return (
    <>
      <header className={"bg-teal-400 py-5"}>
        <h1 className={"text-center text-4xl font-black"}>
          Calculadora de Propinas y Consumo
        </h1>
      </header>
      <main className={"max-w-7xl mx-auto py-20 grid md:grid-cols-2"}>
        <div className={"p-5"}>
          <h2 className={"text-4xl font-black"}>Menú</h2>
          <div className={"mt-10 space-y-3"}>
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div
          className={
            "border border-dashed border-slate-300 p-5 rounded-lg space-y-10"
          }
        >
          {order.length ? (
            <>
              {" "}
              <OrderContents order={order} removeItem={removeItem} />
              <TipPercentageForm setTip={setTip} tip={tip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className={"text-center"}>La Orden está vacía</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
