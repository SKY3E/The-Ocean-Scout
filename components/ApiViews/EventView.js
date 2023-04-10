// Import react form component
import { useForm } from 'react-hook-form';
// Import Orange Alliance package
import { API } from "@the-orange-alliance/api";
// import react components
import { useState, useEffect } from "react";

const toa = new API("Z1OuMrnnXlfCtVvX/dbzcwAj7as0/Zo7EnmbmClPano=", "My App");

export default function EventView() {
  // Set form properties and variables
  const { register, handleSubmit, reset, formState, formState: { errors }, watch } = useForm();
  const { region, startDate, endDate } = watch();
  const { isValid, isDirty } = formState;
  // Set event states
  const [events, setEvents] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    async function getRegions() {
      const regions = await toa.getRegions();
      setRegions(regions);
    }
    getRegions();
  }, []);

  const getEvents = async () => {
    const events = await toa.getEvents();
    const eventsFiltered = events.filter(eventValidity);

    function eventValidity(event) {
      if (region != "") {
        if (event.regionKey == region) {  
          if (startDate != "") {
            let convStartDate = new Date(startDate); 
            convStartDate = convStartDate.toISOString();
            if (event.startDate === convStartDate){
              if (endDate != "") {
                let convEndDate = new Date(endDate); 
                convEndDate = convEndDate.toISOString();
                if (event.endDate === convEndDate) {
                  return event;
                }
              }
              return event;
            }
          } else if (endDate != "") {
            let convEndDate = new Date(endDate); 
            convEndDate = convEndDate.toISOString();
            if (event.endDate === convEndDate){
              if (startDate != "") {
                let convStartDate = new Date(startDate); 
                convStartDate = convStartDate.toISOString();
                if (event.startDate === convStartDate){
                  return event;
                }
              }
              return event;
            }
          } else {
            return event;
          }
        }
      }
    }

    setEvents(eventsFiltered);
  }
  
  return (
    <main>
      <h2>Event View</h2>
      <form onSubmit={handleSubmit(getEvents)}>
        <h3>Choose region :</h3>
        <select id="region-dropdown" {...register('region', { required: true })} >
          {regions.map((region) => (
            <option key={region.regionKey} value={region.regionKey}>
              {region.description}
            </option>
          ))}
        </select>
        <h3>Choose start date :</h3>
        <input type="date" {...register('startDate', { required: false })} />
        <h3>Choose end date :</h3>
        <input type="date" {...register('endDate', { required: false })} />
        <button type="submit" disabled={!isDirty || !isValid}>Find Event</button>
      </form>
      <ul>
        {events.map((event) => (
          <li key={event.eventKey}>{event.eventName} / {event.startDate}</li>
        ))}
      </ul>
    </main>
  );
}