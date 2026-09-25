import DealCard from "../components/DealCard";
import { deals } from "../data/deals";

function Deals() {

  return (
    <main>

      <section className="page-header">

        <div>

          <span className="section-label">
            DEALS & FINDS
          </span>

          <h1>Deals</h1>

          <p>
            Discover products and collections worth checking out.
          </p>

        </div>

      </section>


      <section className="section">

        <div className="deal-grid">

          {deals.map((deal) => (
            <DealCard
              key={deal.id}
              deal={deal}
            />
          ))}

        </div>

      </section>


      <section className="affiliate-banner">

        <div>

          <h2>
            Prices can change.
          </h2>

          <p>
            Always check the retailer's product page
            for the latest price and availability.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Deals;