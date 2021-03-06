import './Listings.css';

const doggo = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F09%2F22%2F50-cute-dog-names.jpg"

function Card(props) {
    const listing=props.listing
    return (
      <div className="listing-card" id={listing.id}>
        <a
        href={listing.link}
        target="_blank"
        rel="noopener noreferrer"
        >
            <img src={listing.photo ? listing.photo : doggo} className="listing-image" alt="listing" />
        </a>
        <span className={"listing-data"}>
            📍{" " + listing.address} 🛏️{" " + listing.rooms} {listing.rooms == 1 ? "Bedroom" : "Bedrooms"}  🚽{" " + listing.rooms} {listing.rooms == 1 ? "Bathroom" : "Bathrooms"} 💸${listing.price}
        </span>
      </div>
    );
  }
  
  export default Card;