import GoogleMapReact from "google-map-react";
import "swiper/swiper.scss";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  return (
      <div style={{ height: "360px", width: "100%" }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={{ lat: 55.67459378406817, lng: 37.73375446485798 }}
          defaultZoom={15}
        >
          <AnyReactComponent
            lat={55.67459378406817}
            lng={37.73375446485798}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
  );
};

export default Map;
