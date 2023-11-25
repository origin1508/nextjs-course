import EventItem from "./EventItem";

const EventList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <EventItem
          id={item.id}
          title={item.title}
          image={item.image}
          date={item.date}
          location={item.location}
        />
      ))}
    </ul>
  );
};

export default EventList;
