import "./DestinationStyle.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Places to look out</h1>
      <p>Some most popular locations in Goa</p>
      <DestinationData
        cName="first-destination"
        heading="Fort Aguada"
        text="Built in the 17th century, Fort Aguada is a Portuguese fort that overlooks the Mandovi River and the Arabian Sea. Located on Sinquerim Beach, about 18 kilometres from Panjim, the fort consists of a four-story lighthouse which is one of a kind in Asia! The fort is always lively with tourists and is a top attraction in Goa. The fort, which was named after the Portuguese word for water, Agua, and served as a freshwater replenishment point for sailors. In fact, it's one of Asia's largest freshwater reservoirs. Fascinating, isn't it? The best time to visit the fort is in the evening to enjoy the brilliant golden hour and the sunset with your family and friends."
        img1="https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/m_Fort%20Aguada_6_l_436_654.jpg"
        img2="https://www.tourmyindia.com/states/goa/image/fort-aguada-goa.webp"
      />
      <DestinationData
        cName="first-destination-reverse"
        heading="Calangute Beach"
        text="Calangute Beach is the longest and the most popular t beach in North Goa, running from Candolim to Baga and is a popular tourist attraction in Goa. It is a hub for tourists and travellers worldwide owing to its size and popularity.The beach is also known as the 'Queen of Beaches' and is ranked among the top ten recreational beaches in the world! It is vibrant with dining spots, shacks, and clubs providing cocktails, beer, and seafood. Water sports such as parasailing, water surfing, banana rides, and jet skiing are hugely popular at Calangute Beach."
        img1="https://content.r9cdn.net/rimg/dimg/0b/b2/7d5f811e-city-55845-166ea36604c.jpg?width=1366&height=768&xhint=3578&yhint=1750&crop=true"
        img2="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1314723038_20190822145625.jpg"
      />
      <DestinationData
        cName="first-destination"
        heading="Basilica of Bom Jesus"
        text="The Basilica of Bom Jesus in Old Goa is a church that has left its mark on the history of Christianity in India. Though many tourists come to Goa for the beaches, many others visit to embark on a pilgrimage to this important religious monument.The church  dates to the late 16th century and comprises the mortal remains of St. Francis Xavier. The triangular roofing of the church is carved with the initials IHS, an abbreviation for the Jesuit insignia meaning – Jesus, Saviour of Men.The Basilica's floor is built of mosaic marble tiles with gemstones, giving it an ancient appearance. The inside is adorned with a screen that stretches from floor to ceiling and depicts St. Ignatius Loyola guarding a new-born Jesus. It is a sight to behold!"
        img1="https://goa-tourism.org.in/images/places-to-visit/headers/basilica-de-bom-jesus-goa-entry-fee-timings-holidays-reviews-header.jpg"
        img2="https://data.agatetravel.com/images/photogallery/2021/basilica-of-bom-jesus-goa.jpg"
      />
      <DestinationData
        cName="first-destination-reverse"
        heading="Dona Paula"
        text="Dona Paula is a renowned tourist attraction in Goa, known for its long stretch of beach. It is also known as 'Lover's Paradise' and has an adjacent jetty that offers an exquisite view of the Arabian Sea and Mormugao harbour. There is also a whitewashed statue known as the 'Image of India', depicting Mother India and Young India.The Dona Paula is named after the then-Goa Viceroy's daughter Dona Paula de Menezes, honouring her tragic love story. She is said to have fallen in love with a local fisherman, but the Viceroy forbade her from marrying him. As a result, she jumped from a cliff and christened herself. The beach is also a meeting point for rivers Zuari and Mandovi, but the tourists are primarily attracted to the place because of its story. "
        img1="https://www.tourism-of-india.com/pictures/travel_guide/attractions/thmb/dona-beach-21.jpeg?370x248"
        img2="https://www.trawell.in/admin/images/upload/121905580DonaPaula_Beach_Main.jpg"
      />
    </div>
  );
};

export default Destination;
